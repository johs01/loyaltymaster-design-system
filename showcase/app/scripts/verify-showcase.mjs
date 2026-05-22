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
const artifactsDir = path.join(appDir, "artifacts/phase-5");
const port = 4175;
const baseUrl = `http://127.0.0.1:${port}`;

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const expectedIds = registry.components.map((component) => component.id);

fs.mkdirSync(artifactsDir, { recursive: true });

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

function isNonBlankPng(buffer) {
  const png = PNG.sync.read(buffer);
  const first = `${png.data[0]},${png.data[1]},${png.data[2]},${png.data[3]}`;
  const step = Math.max(4, Math.floor(png.data.length / 4000));

  for (let index = 0; index < png.data.length; index += step - (step % 4)) {
    const current = `${png.data[index]},${png.data[index + 1]},${png.data[index + 2]},${png.data[index + 3]}`;
    if (current !== first) {
      return true;
    }
  }

  return false;
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
  const viewports = [
    { name: "desktop", width: 1440, height: 1200 },
    { name: "mobile", width: 390, height: 1000 },
  ];

  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
    await page.goto(baseUrl, { waitUntil: "networkidle" });

    for (const id of expectedIds) {
      const locator = page.locator(`[data-specimen-id="${id}"]`);
      const count = await locator.count();
      if (count !== 1) {
        throw new Error(`${viewport.name}: expected one specimen for ${id}, found ${count}`);
      }
      await locator.scrollIntoViewIfNeeded();
      await locator.locator(`[data-render-target="${id}"]`).waitFor({ state: "visible" });

      if (viewport.name === "desktop") {
        const screenshot = await locator.screenshot({
          path: path.join(artifactsDir, `${id}.png`),
        });
        if (!isNonBlankPng(screenshot)) {
          throw new Error(`${id} desktop screenshot appears blank`);
        }
      }
    }

    const pageScreenshot = await page.screenshot({
      fullPage: true,
      path: path.join(artifactsDir, `phase5-${viewport.name}.png`),
    });
    if (!isNonBlankPng(pageScreenshot)) {
      throw new Error(`${viewport.name} full-page screenshot appears blank`);
    }

    await page.close();
  }

  await browser.close();
  console.log(`Phase 5 showcase smoke passed for ${expectedIds.length} components across ${viewports.length} viewports.`);
} catch (error) {
  console.error(serverOutput);
  throw error;
} finally {
  server.kill("SIGTERM");
}
