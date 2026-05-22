import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { PNG } from "pngjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(scriptDir, "..");
const rootDir = path.resolve(appDir, "../..");
const artifactsDir = path.join(appDir, "artifacts/phase-10");
const port = 4188;
const baseUrl = `http://127.0.0.1:${port}`;

const fixtures = [
  {
    id: "web-page",
    expectedComponents: [
      "hero-main-section",
      "feature-section-2-column-image",
      "feature-section-2-column-bullets-image",
      "image-strip",
      "comparison-table",
      "cta-with-button-email",
    ],
  },
  {
    id: "landing-page",
    expectedComponents: [
      "hero-main-section",
      "button-email",
      "features-grid",
      "process-steps",
      "stats-card-strip",
      "testimonials-grid",
      "pricing-section",
      "testimonial-single",
      "faq-accordion",
      "cta-with-button-email",
    ],
  },
  {
    id: "blog-document",
    expectedComponents: [
      "hero-main-section",
      "features-grid",
      "process-steps",
      "comparison-table",
      "stats-card-strip",
      "faq-accordion",
      "cta-with-button-email",
    ],
  },
  {
    id: "brochure-content",
    expectedComponents: [
      "hero-main-section",
      "geo-fence-use-case",
      "image-strip",
      "stats-card-strip",
      "pricing-section",
      "testimonial-single",
      "cta-trial-full-form",
    ],
  },
  {
    id: "external-llm-dry-run",
    expectedComponents: [
      "hero-main-section",
      "features-grid",
      "feature-section-2-column-bullets-image",
      "process-steps",
      "comparison-table",
      "faq-accordion",
      "cta-with-button-email",
    ],
  },
  {
    id: "real-brief-trial",
    expectedComponents: [
      "hero-main-section",
      "geo-fence-use-case",
      "features-grid",
      "feature-section-2-column-image",
      "process-steps",
      "comparison-table",
      "faq-accordion",
      "cta-with-button-email",
    ],
  },
];

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
  await waitForServer(`${baseUrl}/template-tests/web-page`);

  const browser = await launchBrowser();
  const viewports = [
    { name: "desktop", width: 1440, height: 1200 },
    { name: "mobile", width: 390, height: 1000 },
  ];

  const results = [];

  for (const fixture of fixtures) {
    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
      const url = `${baseUrl}/template-tests/${fixture.id}`;
      await page.goto(url, { waitUntil: "networkidle" });

      const fixtureRoot = page.locator(`[data-template-fixture="${fixture.id}"]`);
      if (await fixtureRoot.count() !== 1) {
        throw new Error(`${fixture.id}/${viewport.name}: missing template fixture root`);
      }

      const generatedPage = page.locator(`[data-generated-template="${fixture.id}"]`);
      if (await generatedPage.count() !== 1) {
        throw new Error(`${fixture.id}/${viewport.name}: missing generated template page`);
      }

      const shellCount = await generatedPage.locator(".wf-header, .wf-site-footer").count();
      if (shellCount !== 0) {
        throw new Error(`${fixture.id}/${viewport.name}: generated page body contains ${shellCount} shell component(s)`);
      }

      for (const componentId of fixture.expectedComponents) {
        const evidence = fixtureRoot.locator(`text=${componentId}`);
        if (await evidence.count() < 1) {
          throw new Error(`${fixture.id}/${viewport.name}: missing evidence for ${componentId}`);
        }
      }

      if (fixture.id === "landing-page" && viewport.name === "desktop") {
        const pricingAlignment = await page.locator('[data-generated-template="landing-page"] .wf-pricing-grid').evaluate((grid) => {
          const gridRect = grid.getBoundingClientRect();
          const cards = Array.from(grid.querySelectorAll(".wf-pricing-card"));
          const firstCard = cards[0]?.getBoundingClientRect();
          const lastCard = cards[cards.length - 1]?.getBoundingClientRect();
          return {
            cardCount: cards.length,
            leftGap: firstCard ? firstCard.left - gridRect.left : 0,
            rightGap: lastCard ? gridRect.right - lastCard.right : 0,
          };
        });

        if (pricingAlignment.cardCount < 2) {
          throw new Error("landing-page/desktop: pricing fixture needs at least two cards to verify centering");
        }

        if (Math.abs(pricingAlignment.leftGap - pricingAlignment.rightGap) > 16) {
          throw new Error(`landing-page/desktop: pricing cards are not centered (left gap ${pricingAlignment.leftGap}, right gap ${pricingAlignment.rightGap})`);
        }
      }

      await generatedPage.scrollIntoViewIfNeeded();
      const screenshot = await page.screenshot({
        fullPage: true,
        path: path.join(artifactsDir, `${fixture.id}-${viewport.name}.png`),
      });
      if (!isNonBlankPng(screenshot)) {
        throw new Error(`${fixture.id}/${viewport.name}: screenshot appears blank`);
      }

      results.push({
        fixture: fixture.id,
        viewport: viewport.name,
        url,
        expectedComponents: fixture.expectedComponents,
        screenshot: `showcase/app/artifacts/phase-10/${fixture.id}-${viewport.name}.png`,
        passed: true,
      });

      await page.close();
    }
  }

  await browser.close();

  fs.writeFileSync(
    path.join(artifactsDir, "template-fixture-results.json"),
    `${JSON.stringify({
      phase: "10",
      generatedAt: new Date().toISOString(),
      fixtureCount: fixtures.length,
      viewportCount: viewports.length,
      results,
    }, null, 2)}\n`,
  );

  console.log(`Phase 10 template fixture verification passed for ${fixtures.length} rendered templates across ${viewports.length} viewports.`);
} catch (error) {
  console.error(serverOutput);
  throw error;
} finally {
  server.kill("SIGTERM");
}
