import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { PNG } from "pngjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(scriptDir, "..");
const rootDir = path.resolve(appDir, "../..");
const registryPath = path.join(rootDir, "registry/components.json");
const gatesPath = path.join(scriptDir, "phase7-visual-gates.json");
const isRegeneratingReferences = process.argv.includes("--regenerate-references");
const phaseLabel = gatesVersionToLabel(JSON.parse(fs.readFileSync(gatesPath, "utf8")).version);
const artifactSlug = phaseLabel === "7C" ? "phase-7c" : "phase-7";
const artifactsDir = path.join(appDir, `artifacts/${artifactSlug}`);
const currentDir = path.join(artifactsDir, "current");
const diffDir = path.join(artifactsDir, "diffs");
const regeneratedReferenceDir = path.join(artifactsDir, "regenerated-references");
const historicalReferenceDir = path.join(rootDir, "assets/screenshots/historical-phase-7b");
const port = 4177;
const baseUrl = `http://127.0.0.1:${port}`;
const mismatchPixelThreshold = 0.08;

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const gates = JSON.parse(fs.readFileSync(gatesPath, "utf8"));
const expectedIds = registry.components.map((component) => component.id);

for (const directory of [artifactsDir, currentDir, diffDir, regeneratedReferenceDir]) {
  fs.mkdirSync(directory, { recursive: true });
}
if (isRegeneratingReferences) {
  fs.mkdirSync(historicalReferenceDir, { recursive: true });
}

function gatesVersionToLabel(version) {
  return version === "phase-7c" ? "7C" : "7B";
}

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
      // Server is still starting.
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

function inferReferenceScale(image) {
  return image.width >= 1500 ? 2 : 1;
}

function getReferenceScale(gate, image) {
  if (isRegeneratingReferences) {
    return gate.previousReferenceScale ?? gate.referenceScale ?? inferReferenceScale(image);
  }

  if (gate.referenceScale) {
    return gate.referenceScale;
  }

  return phaseLabel === "7C" ? 1 : inferReferenceScale(image);
}

async function waitForRuntimeParity(page) {
  const fontRuntime = await page.evaluate(async () => {
    const requiredLoads = [
      ['700 48px "Rodger Bold"', "Loyaltymaster"],
      ['400 72px "Rodger"', "1234567890"],
      ['400 16px "Onest"', "Loyaltymaster"],
      ['600 16px "Onest"', "Loyaltymaster"],
      ['700 16px "Onest"', "Loyaltymaster"],
      ['800 16px "Onest"', "Loyaltymaster"],
      ['900 16px "Onest"', "Loyaltymaster"],
    ];

    await Promise.all(requiredLoads.map(([descriptor, text]) => document.fonts.load(descriptor, text)));
    await document.fonts.ready;

    const faces = Array.from(document.fonts).map((font) => ({
      family: font.family,
      weight: font.weight,
      style: font.style,
      status: font.status,
      display: font.display,
    }));

    const requiredChecks = [
      { family: "Rodger Bold", descriptor: '700 48px "Rodger Bold"', text: "Loyaltymaster" },
      { family: "Rodger", descriptor: '400 72px "Rodger"', text: "1234567890" },
      { family: "Onest", descriptor: '400 16px "Onest"', text: "Loyaltymaster" },
      { family: "Onest", descriptor: '700 16px "Onest"', text: "Loyaltymaster" },
      { family: "Onest", descriptor: '900 16px "Onest"', text: "Loyaltymaster" },
    ];

    return {
      checks: requiredChecks.map((check) => ({
        family: check.family,
        descriptor: check.descriptor,
        loaded: document.fonts.check(check.descriptor, check.text),
        loadedFaces: faces.filter((font) => font.family === check.family && font.status === "loaded"),
      })),
      faces,
    };
  });

  const failedChecks = fontRuntime.checks.filter(
    (check) => !check.loaded || check.loadedFaces.length === 0,
  );
  if (failedChecks.length > 0) {
    throw new Error(
      `Font/runtime parity failed: ${failedChecks
        .map((check) => `${check.family} (${check.descriptor})`)
        .join(", ")}`,
    );
  }

  await page.evaluate(
    () =>
      new Promise((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(resolve));
      }),
  );
  await wait(120);

  return fontRuntime;
}

function writeRegeneratedReference(component, currentBuffer, currentImage) {
  const referencePath = path.join(rootDir, component.screenshotPath);
  const historicalPath = path.join(historicalReferenceDir, `${component.id}.png`);
  const regeneratedPath = path.join(regeneratedReferenceDir, `${component.id}.png`);

  if (!fs.existsSync(historicalPath)) {
    fs.copyFileSync(referencePath, historicalPath);
  }

  fs.writeFileSync(referencePath, currentBuffer);
  fs.writeFileSync(regeneratedPath, currentBuffer);

  return {
    id: component.id,
    canonicalPath: component.screenshotPath,
    historicalPath: path.relative(rootDir, historicalPath),
    regeneratedArtifactPath: path.relative(rootDir, regeneratedPath),
    width: currentImage.width,
    height: currentImage.height,
  };
}

function compareImages(referenceImage, currentBuffer, width, height) {
  const reference = resizeNearest(referenceImage, width, height);
  const current = resizeNearest(PNG.sync.read(currentBuffer), width, height);
  const diff = new PNG({ width, height });
  let totalDelta = 0;
  let mismatchedPixels = 0;
  const pixelCount = width * height;

  for (let index = 0; index < reference.data.length; index += 4) {
    const redDelta = Math.abs(reference.data[index] - current.data[index]);
    const greenDelta = Math.abs(reference.data[index + 1] - current.data[index + 1]);
    const blueDelta = Math.abs(reference.data[index + 2] - current.data[index + 2]);
    const normalizedDelta = (redDelta + greenDelta + blueDelta) / (3 * 255);
    totalDelta += normalizedDelta;

    if (normalizedDelta > mismatchPixelThreshold) {
      mismatchedPixels += 1;
      diff.data[index] = 243;
      diff.data[index + 1] = 125;
      diff.data[index + 2] = 57;
      diff.data[index + 3] = 255;
    } else {
      diff.data[index] = Math.round(current.data[index] * 0.35 + 255 * 0.65);
      diff.data[index + 1] = Math.round(current.data[index + 1] * 0.35 + 255 * 0.65);
      diff.data[index + 2] = Math.round(current.data[index + 2] * 0.35 + 255 * 0.65);
      diff.data[index + 3] = 255;
    }
  }

  return {
    meanDelta: totalDelta / pixelCount,
    mismatchRatio: mismatchedPixels / pixelCount,
    diff,
  };
}

function assertGateCoverage() {
  for (const id of expectedIds) {
    if (!gates.components[id]) {
      throw new Error(`Missing Phase 7 visual gate entry for ${id}`);
    }
  }
}

assertGateCoverage();

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
  const page = await browser.newPage({ viewport: { width: 1200, height: 1200 }, deviceScaleFactor: 1 });
  const runtime = {
    phase: phaseLabel,
    browserName: browser.browserType().name(),
    browserVersion: browser.version(),
    deviceScaleFactor: 1,
    playwrightPackage: "@playwright/test",
    os: `${os.type()} ${os.release()} ${os.arch()}`,
    fontRuntime: null,
    screenshotTiming: "document.fonts.load + document.fonts.ready + two requestAnimationFrame ticks + 120ms settle",
    captureHost: baseUrl,
    artifactDirectory: path.relative(rootDir, artifactsDir),
  };

  const results = [];
  const regeneratedReferences = [];
  for (const component of registry.components) {
    const gate = gates.components[component.id];
    const referencePath = path.join(rootDir, component.screenshotPath);
    const referenceImage = PNG.sync.read(fs.readFileSync(referencePath));
    const referenceScale = getReferenceScale(gate, referenceImage);
    const referenceCssWidth = Math.round(referenceImage.width / referenceScale);
    const referenceCssHeight = Math.round(referenceImage.height / referenceScale);
    const viewportHeight = Math.min(2400, Math.max(900, referenceCssHeight + 220));

    await page.setViewportSize({ width: referenceCssWidth, height: viewportHeight });
    await page.goto(`${baseUrl}/?capture=${encodeURIComponent(component.id)}`, { waitUntil: "load" });
    const fontRuntime = await waitForRuntimeParity(page);
    runtime.fontRuntime ??= fontRuntime;

    const renderTarget = page.locator(`[data-capture-target="${component.id}"]`);
    const count = await renderTarget.count();
    if (count !== 1) {
      throw new Error(`${component.id}: expected one render target, found ${count}`);
    }

    await renderTarget.scrollIntoViewIfNeeded();
    const currentPath = path.join(currentDir, `${component.id}.png`);
    const currentBuffer = await renderTarget.screenshot({ path: currentPath });
    const currentImage = PNG.sync.read(currentBuffer);
    if (isRegeneratingReferences) {
      regeneratedReferences.push(writeRegeneratedReference(component, currentBuffer, currentImage));
      results.push({
        id: component.id,
        gate: gate.gate,
        regenerated: true,
        referenceScale,
        referenceCssWidth,
        referenceCssHeight,
        currentWidth: currentImage.width,
        currentHeight: currentImage.height,
      });
      continue;
    }

    const comparison = compareImages(referenceImage, currentBuffer, referenceCssWidth, referenceCssHeight);
    const diffPath = path.join(diffDir, `${component.id}.png`);
    fs.writeFileSync(diffPath, PNG.sync.write(comparison.diff));
    const widthDeltaRatio = Math.abs(currentImage.width - referenceCssWidth) / referenceCssWidth;
    const heightDeltaRatio = Math.abs(currentImage.height - referenceCssHeight) / referenceCssHeight;
    const referenceAspect = referenceCssWidth / referenceCssHeight;
    const currentAspect = currentImage.width / currentImage.height;
    const aspectDelta = Math.abs(currentAspect - referenceAspect) / referenceAspect;
    const maxWidthDeltaRatio = gate.maxWidthDeltaRatio ?? 0.01;
    const maxHeightDeltaRatio = gate.maxHeightDeltaRatio ?? 0.12;
    const maxAspectDelta = gate.maxAspectDelta ?? 0.13;

    const result = {
      id: component.id,
      classification: gate.classification,
      gate: gate.gate,
      referenceScale,
      referenceCssWidth,
      referenceCssHeight,
      currentWidth: currentImage.width,
      currentHeight: currentImage.height,
      widthDeltaRatio: Number(widthDeltaRatio.toFixed(4)),
      heightDeltaRatio: Number(heightDeltaRatio.toFixed(4)),
      aspectDelta: Number(aspectDelta.toFixed(4)),
      maxWidthDeltaRatio,
      maxHeightDeltaRatio,
      maxAspectDelta,
      meanDelta: Number(comparison.meanDelta.toFixed(4)),
      mismatchRatio: Number(comparison.mismatchRatio.toFixed(4)),
      maxMeanDelta: gate.maxMeanDelta ?? null,
      maxMismatchRatio: gate.maxMismatchRatio ?? null,
      passed: true,
      failureReasons: [],
      notes: gate.notes,
    };

    if (gate.gate) {
      if (comparison.meanDelta > gate.maxMeanDelta) {
        result.failureReasons.push(`meanDelta ${result.meanDelta} > ${gate.maxMeanDelta}`);
      }
      if (comparison.mismatchRatio > gate.maxMismatchRatio) {
        result.failureReasons.push(`mismatchRatio ${result.mismatchRatio} > ${gate.maxMismatchRatio}`);
      }
      if (widthDeltaRatio > maxWidthDeltaRatio) {
        result.failureReasons.push(`widthDeltaRatio ${result.widthDeltaRatio} > ${maxWidthDeltaRatio}`);
      }
      if (heightDeltaRatio > maxHeightDeltaRatio) {
        result.failureReasons.push(`heightDeltaRatio ${result.heightDeltaRatio} > ${maxHeightDeltaRatio}`);
      }
      if (aspectDelta > maxAspectDelta) {
        result.failureReasons.push(`aspectDelta ${result.aspectDelta} > ${maxAspectDelta}`);
      }
      if (result.failureReasons.length > 0) {
        result.passed = false;
      }
    }

    results.push(result);
  }

  await browser.close();

  if (isRegeneratingReferences) {
    const manifest = {
      generatedAt: new Date().toISOString(),
      phase: phaseLabel,
      mode: "intentional-reference-regeneration",
      runtime,
      references: regeneratedReferences,
    };
    fs.writeFileSync(path.join(artifactsDir, "reference-regeneration-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
    fs.writeFileSync(path.join(artifactsDir, "visual-results.json"), `${JSON.stringify({
      generatedAt: manifest.generatedAt,
      phase: phaseLabel,
      mode: manifest.mode,
      runtime,
      regeneratedCount: regeneratedReferences.length,
      results,
    }, null, 2)}\n`);
    console.log(`Phase ${phaseLabel} regenerated ${regeneratedReferences.length} canonical visual references.`);
    process.exitCode = regeneratedReferences.length === registry.components.length ? 0 : 1;
  } else {

  const failed = results.filter((result) => result.gate && !result.passed);
  const gated = results.filter((result) => result.gate);
  const skipped = results.filter((result) => !result.gate);
  const output = {
    generatedAt: new Date().toISOString(),
    phase: phaseLabel,
    metric: gates.metric,
    captureMode: "Each component is rendered through ?capture=<id> at the approved screenshot's inferred CSS width and compared against that screenshot at component-native aspect ratio.",
    runtime,
    gatedCount: gated.length,
    skippedCount: skipped.length,
    failedCount: failed.length,
    results,
  };

  fs.writeFileSync(path.join(artifactsDir, "visual-results.json"), `${JSON.stringify(output, null, 2)}\n`);

  if (skipped.length > 0) {
    for (const skippedResult of skipped) {
      console.error(`${skippedResult.id} is not gated by Phase 7 visual verification.`);
    }
    process.exitCode = 1;
  } else if (failed.length > 0) {
    for (const failure of failed) {
      console.error(
        `${failure.id} failed Phase ${phaseLabel} visual gate: ${failure.failureReasons.join("; ")}`,
      );
    }
    process.exitCode = 1;
  } else {
    console.log(`Phase ${phaseLabel} visual fidelity verification passed for ${gated.length} gated components; 0 skipped.`);
  }
  }
} catch (error) {
  console.error(serverOutput);
  throw error;
} finally {
  server.kill("SIGTERM");
}
