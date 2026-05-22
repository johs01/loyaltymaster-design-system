import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { PNG } from "pngjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(scriptDir, "..");
const rootDir = path.resolve(appDir, "../..");
const registryPath = path.join(rootDir, "registry/components.json");
const targetsPath = path.join(scriptDir, "phase7f-production-targets.json");
const artifactsDir = path.join(appDir, "artifacts/phase-7f");
const port = 4179;
const baseUrl = `http://127.0.0.1:${port}`;
const isVerify = process.argv.includes("--verify");
const mismatchPixelThreshold = 0.08;

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const targets = JSON.parse(fs.readFileSync(targetsPath, "utf8"));
const registryById = new Map(registry.components.map((component) => [component.id, component]));
const expectedIds = registry.components.map((component) => component.id);

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, timeoutMs = 30_000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Vite is still starting.
    }
    await wait(350);
  }
  throw new Error(`Timed out waiting for showcase server at ${url}`);
}

async function launchBrowser() {
  try {
    return await chromium.launch();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (!message.includes("Executable doesn't exist")) {
      throw error;
    }
    return chromium.launch({ channel: "chrome" });
  }
}

async function waitForStableRuntime(page) {
  await page.addStyleTag({
    content: ".reveal{opacity:1!important;transform:none!important;transition:none!important;}",
  });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  await wait(160);
}

function cleanDir(directory) {
  fs.rmSync(directory, { recursive: true, force: true });
  fs.mkdirSync(directory, { recursive: true });
}

function ensureTargetCoverage() {
  if (targets.version !== "phase-7f") {
    throw new Error("phase7f-production-targets.json must declare version phase-7f");
  }

  for (const id of expectedIds) {
    const target = targets.components?.[id];
    if (!target) {
      throw new Error(`Missing Phase 7F production fidelity target for ${id}`);
    }
    for (const requiredKey of ["liveUrl", "liveSelector", "productionSourcePath"]) {
      if (!target[requiredKey]) {
        throw new Error(`${id} Phase 7F target missing ${requiredKey}`);
      }
    }
    if (!fs.existsSync(target.productionSourcePath)) {
      throw new Error(`${id} productionSourcePath does not exist: ${target.productionSourcePath}`);
    }
  }
}

async function captureResponseMetadata(url) {
  const response = await fetch(url, { redirect: "follow" });
  return {
    url,
    finalUrl: response.url,
    status: response.status,
    ok: response.ok,
    date: response.headers.get("date"),
    etag: response.headers.get("etag"),
    cacheControl: response.headers.get("cache-control"),
    vercelCache: response.headers.get("x-vercel-cache"),
    matchedPath: response.headers.get("x-matched-path"),
    contentType: response.headers.get("content-type"),
  };
}

async function captureElement(page, selector, screenshotPath) {
  const locator = page.locator(selector).first();
  await locator.waitFor({ state: "visible", timeout: 30_000 });
  await locator.scrollIntoViewIfNeeded();
  await waitForStableRuntime(page);

  const box = await locator.boundingBox();
  if (!box) {
    throw new Error(`No bounding box for selector ${selector}`);
  }

  const buffer = await locator.screenshot({ path: screenshotPath, animations: "disabled" });
  return {
    buffer,
    png: PNG.sync.read(buffer),
    box: {
      x: Number(box.x.toFixed(2)),
      y: Number(box.y.toFixed(2)),
      width: Number(box.width.toFixed(2)),
      height: Number(box.height.toFixed(2)),
      aspect: Number((box.width / box.height).toFixed(4)),
    },
  };
}

function resizeNearest(source, width, height) {
  const output = new PNG({ width, height });

  for (let y = 0; y < height; y += 1) {
    const sourceY = Math.min(source.height - 1, Math.floor((y * source.height) / height));
    for (let x = 0; x < width; x += 1) {
      const sourceX = Math.min(source.width - 1, Math.floor((x * source.width) / width));
      const sourceIndex = (source.width * sourceY + sourceX) << 2;
      const outputIndex = (width * y + x) << 2;
      output.data[outputIndex] = source.data[sourceIndex];
      output.data[outputIndex + 1] = source.data[sourceIndex + 1];
      output.data[outputIndex + 2] = source.data[sourceIndex + 2];
      output.data[outputIndex + 3] = source.data[sourceIndex + 3];
    }
  }

  return output;
}

function comparePngs(livePng, localPng) {
  const width = Math.min(1200, Math.max(livePng.width, localPng.width));
  const height = Math.min(1200, Math.max(livePng.height, localPng.height));
  const live = resizeNearest(livePng, width, height);
  const local = resizeNearest(localPng, width, height);
  const diff = new PNG({ width, height });
  let totalDelta = 0;
  let mismatchedPixels = 0;
  const pixelCount = width * height;

  for (let index = 0; index < live.data.length; index += 4) {
    const redDelta = Math.abs(live.data[index] - local.data[index]);
    const greenDelta = Math.abs(live.data[index + 1] - local.data[index + 1]);
    const blueDelta = Math.abs(live.data[index + 2] - local.data[index + 2]);
    const normalizedDelta = (redDelta + greenDelta + blueDelta) / (3 * 255);
    totalDelta += normalizedDelta;

    if (normalizedDelta > mismatchPixelThreshold) {
      mismatchedPixels += 1;
      diff.data[index] = 243;
      diff.data[index + 1] = 125;
      diff.data[index + 2] = 57;
      diff.data[index + 3] = 255;
    } else {
      diff.data[index] = Math.round(local.data[index] * 0.35 + 255 * 0.65);
      diff.data[index + 1] = Math.round(local.data[index + 1] * 0.35 + 255 * 0.65);
      diff.data[index + 2] = Math.round(local.data[index + 2] * 0.35 + 255 * 0.65);
      diff.data[index + 3] = 255;
    }
  }

  return {
    width,
    height,
    meanDelta: totalDelta / pixelCount,
    mismatchRatio: mismatchedPixels / pixelCount,
    diff,
  };
}

function copyImage(source, target, offsetX, offsetY) {
  for (let y = 0; y < source.height; y += 1) {
    for (let x = 0; x < source.width; x += 1) {
      const sourceIndex = (source.width * y + x) << 2;
      const targetIndex = (target.width * (offsetY + y) + (offsetX + x)) << 2;
      target.data[targetIndex] = source.data[sourceIndex];
      target.data[targetIndex + 1] = source.data[sourceIndex + 1];
      target.data[targetIndex + 2] = source.data[sourceIndex + 2];
      target.data[targetIndex + 3] = source.data[sourceIndex + 3];
    }
  }
}

function writeSideBySide(livePng, localPng, outputPath) {
  const gap = 24;
  const maxPanelWidth = 720;
  const liveScale = Math.min(1, maxPanelWidth / livePng.width);
  const localScale = Math.min(1, maxPanelWidth / localPng.width);
  const live = resizeNearest(livePng, Math.round(livePng.width * liveScale), Math.round(livePng.height * liveScale));
  const local = resizeNearest(localPng, Math.round(localPng.width * localScale), Math.round(localPng.height * localScale));
  const width = live.width + gap + local.width;
  const height = Math.max(live.height, local.height);
  const output = new PNG({ width, height });
  output.data.fill(255);
  copyImage(live, output, 0, 0);
  copyImage(local, output, live.width + gap, 0);
  fs.writeFileSync(outputPath, PNG.sync.write(output));
}

function getThresholds(target) {
  return {
    ...targets.defaultThresholds,
    ...(target.thresholds ?? {}),
  };
}

function evaluateResult({ liveCapture, localCapture, comparison, thresholds }) {
  const liveAspect = liveCapture.box.width / liveCapture.box.height;
  const localAspect = localCapture.box.width / localCapture.box.height;
  const widthDeltaRatio = Math.abs(liveCapture.box.width - localCapture.box.width) / Math.max(1, liveCapture.box.width);
  const heightDeltaRatio = Math.abs(liveCapture.box.height - localCapture.box.height) / Math.max(1, liveCapture.box.height);
  const aspectDelta = Math.abs(liveAspect - localAspect);
  const failureReasons = [];

  if (widthDeltaRatio > thresholds.maxWidthDeltaRatio) {
    failureReasons.push(`width delta ${widthDeltaRatio.toFixed(4)} > ${thresholds.maxWidthDeltaRatio}`);
  }
  if (heightDeltaRatio > thresholds.maxHeightDeltaRatio) {
    failureReasons.push(`height delta ${heightDeltaRatio.toFixed(4)} > ${thresholds.maxHeightDeltaRatio}`);
  }
  if (aspectDelta > thresholds.maxAspectDelta) {
    failureReasons.push(`aspect delta ${aspectDelta.toFixed(4)} > ${thresholds.maxAspectDelta}`);
  }
  if (comparison.meanDelta > thresholds.maxMeanDelta) {
    failureReasons.push(`mean delta ${comparison.meanDelta.toFixed(4)} > ${thresholds.maxMeanDelta}`);
  }
  if (comparison.mismatchRatio > thresholds.maxMismatchRatio) {
    failureReasons.push(`mismatch ratio ${comparison.mismatchRatio.toFixed(4)} > ${thresholds.maxMismatchRatio}`);
  }

  return {
    widthDeltaRatio,
    heightDeltaRatio,
    aspectDelta,
    failureReasons,
    passed: failureReasons.length === 0,
  };
}

ensureTargetCoverage();
cleanDir(artifactsDir);

for (const viewport of targets.viewports) {
  for (const directory of ["live", "local", "diffs", "side-by-side"]) {
    fs.mkdirSync(path.join(artifactsDir, viewport.name, directory), { recursive: true });
  }
}

const server = spawn("npm", ["run", "dev", "--", "--host", "127.0.0.1", "--port", String(port)], {
  cwd: appDir,
  stdio: ["ignore", "pipe", "pipe"],
});

let serverOutput = "";
server.stdout.on("data", (chunk) => {
  serverOutput += chunk.toString();
});
server.stderr.on("data", (chunk) => {
  serverOutput += chunk.toString();
});

try {
  await waitForServer(baseUrl);
  const browser = await launchBrowser();
  const browserName = browser.browserType().name();
  const responseMetadataByUrl = new Map();
  const results = [];

  for (const viewport of targets.viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
    });

    for (const id of expectedIds) {
      const component = registryById.get(id);
      const target = targets.components[id];
      const thresholds = getThresholds(target);
      const localSelector = target.localSelector ?? `[data-capture-target="${id}"] .lm-ds`;
      const liveFile = path.join(artifactsDir, viewport.name, "live", `${id}.png`);
      const localFile = path.join(artifactsDir, viewport.name, "local", `${id}.png`);
      const diffFile = path.join(artifactsDir, viewport.name, "diffs", `${id}.png`);
      const sideBySideFile = path.join(artifactsDir, viewport.name, "side-by-side", `${id}.png`);

      if (!responseMetadataByUrl.has(target.liveUrl)) {
        responseMetadataByUrl.set(target.liveUrl, await captureResponseMetadata(target.liveUrl));
      }

      const livePage = await context.newPage();
      await livePage.goto(target.liveUrl, { waitUntil: "networkidle", timeout: 60_000 });
      const liveCapture = await captureElement(livePage, target.liveSelector, liveFile);
      await livePage.close();

      const localPage = await context.newPage();
      await localPage.goto(`${baseUrl}/?capture=${encodeURIComponent(id)}`, { waitUntil: "networkidle", timeout: 60_000 });
      const localCapture = await captureElement(localPage, localSelector, localFile);
      await localPage.close();

      const comparison = comparePngs(liveCapture.png, localCapture.png);
      fs.writeFileSync(diffFile, PNG.sync.write(comparison.diff));
      writeSideBySide(liveCapture.png, localCapture.png, sideBySideFile);

      const evaluation = evaluateResult({ liveCapture, localCapture, comparison, thresholds });
      results.push({
        id,
        name: component.name,
        viewport: viewport.name,
        liveUrl: target.liveUrl,
        liveSelector: target.liveSelector,
        localSelector,
        productionSourcePath: target.productionSourcePath,
        rawSourcePath: component.rawSourcePath,
        specPath: component.specPath,
        libraryPath: component.libraryPath,
        screenshotPath: component.screenshotPath,
        liveBox: liveCapture.box,
        localBox: localCapture.box,
        compareWidth: comparison.width,
        compareHeight: comparison.height,
        meanDelta: Number(comparison.meanDelta.toFixed(6)),
        mismatchRatio: Number(comparison.mismatchRatio.toFixed(6)),
        widthDeltaRatio: Number(evaluation.widthDeltaRatio.toFixed(6)),
        heightDeltaRatio: Number(evaluation.heightDeltaRatio.toFixed(6)),
        aspectDelta: Number(evaluation.aspectDelta.toFixed(6)),
        thresholds,
        passed: evaluation.passed,
        failureReasons: evaluation.failureReasons,
        artifacts: {
          live: path.relative(rootDir, liveFile),
          local: path.relative(rootDir, localFile),
          diff: path.relative(rootDir, diffFile),
          sideBySide: path.relative(rootDir, sideBySideFile),
        },
      });
    }

    await context.close();
  }

  await browser.close();

  const failed = results.filter((result) => !result.passed);
  const uniquePassedIds = new Set(results.filter((result) => result.passed).map((result) => result.id));
  const output = {
    phase: "7F",
    generatedAt: new Date().toISOString(),
    browserName,
    deviceScaleFactor: 1,
    localBaseUrl: baseUrl,
    viewports: targets.viewports,
    targetCount: expectedIds.length,
    resultCount: results.length,
    gatedComponentCount: expectedIds.length,
    passedComponentCount: uniquePassedIds.size,
    failedCount: failed.length,
    liveResponseMetadata: Array.from(responseMetadataByUrl.values()),
    results,
  };

  fs.writeFileSync(path.join(artifactsDir, "production-fidelity-results.json"), `${JSON.stringify(output, null, 2)}\n`);

  if (failed.length > 0) {
    const summary = failed
      .slice(0, 12)
      .map((result) => `${result.id}/${result.viewport}: ${result.failureReasons.join("; ")}`)
      .join("\n");
    if (isVerify) {
      throw new Error(`Phase 7F production fidelity verification failed for ${failed.length} viewport results.\n${summary}`);
    }
    console.log(`Phase 7F production fidelity audit completed with ${failed.length} failed viewport results.`);
    console.log(summary);
  } else {
    console.log(`Phase 7F production fidelity ${isVerify ? "verification" : "audit"} passed for ${expectedIds.length} components across ${targets.viewports.length} viewports.`);
  }
} catch (error) {
  console.error(serverOutput);
  throw error;
} finally {
  server.kill("SIGTERM");
}
