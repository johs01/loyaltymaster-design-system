import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(scriptDir, "..");
const rootDir = path.resolve(appDir, "../..");
const registryPath = path.join(rootDir, "registry/components.json");
const reportPath = path.join(rootDir, "PHASE_7D_INTERACTION_AUDIT.md");
const artifactsDir = path.join(appDir, "artifacts/phase-7d");
const liveArtifactDir = path.join(artifactsDir, "live");
const localArtifactDir = path.join(artifactsDir, "local");
const dataPath = path.join(artifactsDir, "interaction-results.json");
const liveUrl = "https://sendpush.loyaltymaster.com/design-system-template-page";
const port = 4178;
const localUrl = `http://127.0.0.1:${port}`;

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

for (const directory of [artifactsDir, liveArtifactDir, localArtifactDir]) {
  fs.mkdirSync(directory, { recursive: true });
}

const componentTargets = {
  "billing-toggle-button": {
    liveSection: "#pricing",
    liveTarget: ".wf-pricing-toggle-btn:not(.is-active)",
    localTarget: ".wf-pricing-toggle-btn:not(.is-active)",
    liveStateTarget: ".wf-pricing-toggle-btn:not(.is-active)",
    localStateTarget: ".wf-pricing-toggle-btn:not(.is-active)",
    expected: ["hover", "focus", "active", "pressed"],
  },
  "button-email": {
    liveSection: "#hero .wf-email-cta",
    liveTarget: ".wf-email-cta__button",
    localTarget: ".wf-email-cta__button",
    expected: ["hover", "focus", "active"],
  },
  "comparison-table": {
    liveSection: "#comparison",
    liveTarget: ".wr-cta-join",
    localTarget: ".wr-cta-join",
    expected: ["hover", "focus", "active"],
  },
  "cta-trial-full-form": {
    liveSection: "#tenant-trial-cta",
    liveTarget: ".wf-tenant-submit",
    localTarget: ".lm-trial-form .lm-button",
    focusTarget: ".lm-trial-form .lm-input",
    expected: ["hover", "focus", "active"],
  },
  "cta-with-button-email": {
    liveSection: "#final-cta .wf-email-cta",
    liveTarget: ".wf-email-cta__button",
    localTarget: ".wf-email-cta__button",
    expected: ["hover", "focus", "active"],
  },
  "faq-accordion": {
    liveSection: "#faq",
    liveTarget: ".wf-faq-item",
    localTarget: ".wf-faq-item",
    focusTarget: ".wf-faq-trigger[aria-expanded=\"false\"]",
    liveStateTarget: ".wf-faq-trigger[aria-expanded=\"false\"]",
    localStateTarget: ".wf-faq-trigger[aria-expanded=\"false\"]",
    expected: ["hover", "focus", "expanded"],
  },
  "feature-section-2-column-bullets-image": {
    liveSection: "#use-case-2",
    liveTarget: ".wr-cta-join",
    localTarget: ".wr-cta-join",
    expected: ["focus"],
  },
  "feature-section-2-column-image": {
    liveSection: "#problem",
    liveTarget: ".wr-cta-join",
    localTarget: ".wr-cta-join",
    expected: ["focus"],
  },
  "features-grid": {
    liveSection: "#features",
    liveTarget: "article",
    localTarget: ".wf-feature-card",
    expected: ["optional-hover"],
  },
  footer: {
    liveSection: "#site-footer",
    liveTarget: ".wf-footer-cta",
    localTarget: ".wf-footer-cta",
    focusTarget: ".wf-footer-link",
    expected: ["hover", "focus"],
  },
  "geo-fence-use-case": {
    liveSection: "#use-case-2",
    liveTarget: ".wf-placeholder--has-image",
    localTarget: ".wf-placeholder--has-image",
    expected: ["optional-hover"],
  },
  "hero-main-section": {
    liveSection: "#hero",
    liveTarget: ".wf-email-cta__button",
    localTarget: ".wf-email-cta__button",
    expected: ["hover", "focus", "active"],
  },
  "image-grid": {
    liveSection: "#logo-grid",
    liveTarget: ".wf-logo-card",
    localTarget: ".wf-logo-card",
    expected: ["optional-hover"],
  },
  "image-strip": {
    liveSection: ".wf-awards-strip",
    liveTarget: ".wf-award-badge",
    localTarget: ".wf-award-badge",
    expected: ["optional-hover"],
  },
  "navbar-glassmorphism": {
    liveSection: "header.wf-header",
    liveTarget: ".wf-nav-links button:not(.is-active)",
    localTarget: ".wf-nav-links a:not(.is-active)",
    focusTarget: ".wf-nav-links a",
    liveStateTarget: ".wf-mobile-menu-toggle",
    localStateTarget: ".wf-mobile-menu-toggle",
    expected: ["hover", "focus", "active-current", "mobile-expanded"],
  },
  "pricing-section": {
    liveSection: "#pricing",
    liveTarget: ".wf-pricing-card-cta",
    localTarget: ".wf-pricing-card-cta",
    liveStateTarget: ".wf-pricing-toggle-btn:not(.is-active)",
    localStateTarget: ".wf-pricing-toggle-btn:not(.is-active)",
    expected: ["hover", "focus", "active", "pressed"],
  },
  "process-steps": {
    liveSection: "#process",
    liveTarget: ".wf-email-cta__button",
    localTarget: ".wf-email-cta__button",
    expected: ["hover", "focus", "active"],
  },
  "stats-card-strip": {
    liveSection: "#stats",
    liveTarget: ".wf-stat-card",
    localTarget: ".wf-stat-card",
    expected: ["hover"],
  },
  "testimonial-single": {
    liveSection: "#testimonial-2",
    liveTarget: ".wf-email-cta__button",
    localTarget: ".wf-email-cta__button",
    expected: ["hover", "focus", "active"],
  },
  "testimonials-grid": {
    liveSection: "#capabilities-testimonials",
    liveTarget: "article",
    localTarget: ".wf-cap-testimonial-card",
    expected: ["optional-hover"],
  },
};

const visualProperties = [
  "backgroundColor",
  "borderColor",
  "boxShadow",
  "color",
  "filter",
  "opacity",
  "outlineColor",
  "outlineOffset",
  "outlineStyle",
  "outlineWidth",
  "textDecorationColor",
  "textDecorationLine",
  "transform",
];

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

function kebabToTitle(value) {
  return value.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

function rawPathFor(component) {
  const folder = component.name;
  return path.join(rootDir, "Components", folder, `${folder}.tsx`);
}

function extractEvidence(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const patterns = [
    "hover:",
    "group-hover:",
    "focus:",
    "focus-visible:",
    "focus-within:",
    "active:",
    "disabled:",
    "whileHover",
    "whileTap",
    "onMouseEnter",
    "onMouseLeave",
    "onPointerEnter",
    "onPointerLeave",
    "aria-expanded",
    "aria-pressed",
    "aria-current",
  ];

  return text
    .split("\n")
    .map((line, index) => ({ line: index + 1, text: line.trim() }))
    .filter(({ text: line }) => patterns.some((pattern) => line.includes(pattern)))
    .map(({ line, text: lineText }) => `L${line}: ${lineText.slice(0, 220)}`);
}

function extractSpecStates(id) {
  const specPath = path.join(rootDir, "specs/components", `${id}.md`);
  const text = fs.readFileSync(specPath, "utf8");
  return text
    .split("\n")
    .filter((line) => /^- (hover|focus|active|disabled|open|selected|mobile-open):/.test(line))
    .map((line) => line.trim());
}

function diffStyles(before, after) {
  return visualProperties.filter((property) => before[property] !== after[property]);
}

function hasVisibleFocus(style) {
  const width = Number.parseFloat(style.outlineWidth || "0");
  return width > 0 && style.outlineStyle !== "none";
}

function hasVisibleChange(properties) {
  return properties.length > 0;
}

async function styleSnapshot(locator) {
  return locator.evaluate((element, properties) => {
    const style = window.getComputedStyle(element);
    const output = {};
    for (const property of properties) {
      output[property] = style[property];
    }
    const rect = element.getBoundingClientRect();
    output.rect = {
      width: Number(rect.width.toFixed(2)),
      height: Number(rect.height.toFixed(2)),
      x: Number(rect.x.toFixed(2)),
      y: Number(rect.y.toFixed(2)),
    };
    output.ariaExpanded = element.getAttribute("aria-expanded");
    output.ariaPressed = element.getAttribute("aria-pressed");
    output.ariaCurrent = element.getAttribute("aria-current");
    return output;
  }, visualProperties);
}

async function ariaStateSnapshot(root) {
  return root.evaluate((element) => Array.from(element.querySelectorAll("[aria-expanded], [aria-pressed], [aria-current]")).map((node) => ({
    tag: node.tagName.toLowerCase(),
    text: (node.textContent || node.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim(),
    className: String(node.getAttribute("class") || ""),
    ariaExpanded: node.getAttribute("aria-expanded"),
    ariaPressed: node.getAttribute("aria-pressed"),
    ariaCurrent: node.getAttribute("aria-current"),
  })));
}

async function safeScreenshot(locator, screenshotPath) {
  try {
    await locator.screenshot({ path: screenshotPath });
    return path.relative(rootDir, screenshotPath);
  } catch (error) {
    return `screenshot failed: ${error instanceof Error ? error.message : String(error)}`;
  }
}

async function auditTarget(page, rootSelector, targetSelector, options) {
  const root = page.locator(rootSelector).first();
  const rootCount = await root.count();
  if (rootCount === 0) {
    return {
      found: false,
      error: `Missing root selector ${rootSelector}`,
      screenshots: {},
      interactions: {},
    };
  }

  await root.scrollIntoViewIfNeeded();
  await wait(250);

  const target = root.locator(targetSelector).first();
  const targetCount = await target.count();
  if (targetCount === 0) {
    return {
      found: false,
      error: `Missing target selector ${targetSelector} inside ${rootSelector}`,
      screenshots: {
        default: await safeScreenshot(root, options.defaultPath),
      },
      interactions: {},
    };
  }

  const screenshots = {
    default: await safeScreenshot(root, options.defaultPath),
  };
  const defaultStyle = await styleSnapshot(target);

  await target.hover({ force: true });
  await wait(280);
  const hoverStyle = await styleSnapshot(target);
  screenshots.hover = await safeScreenshot(root, options.hoverPath);

  const focusTarget = options.focusSelector ? root.locator(options.focusSelector).first() : target;
  const focusCount = await focusTarget.count();
  let focusStyle = null;
  let focusDiff = [];
  if (focusCount > 0) {
    await focusTarget.focus();
    await wait(180);
    focusStyle = await styleSnapshot(focusTarget);
    focusDiff = diffStyles(defaultStyle, focusStyle);
    screenshots.focus = await safeScreenshot(root, options.focusPath);
  }

  const box = await target.boundingBox();
  let activeStyle = null;
  let activeDiff = [];
  if (box) {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await wait(150);
    activeStyle = await styleSnapshot(target);
    activeDiff = diffStyles(defaultStyle, activeStyle);
    screenshots.active = await safeScreenshot(root, options.activePath);
    await page.mouse.move(0, 0);
    await page.mouse.up();
    await wait(180);
  }

  let stateResult = null;
  if (options.stateSelector) {
    const originalViewport = page.viewportSize();
    let changedViewportForState = false;
    const stateTarget = root.locator(options.stateSelector).first();
    if ((await stateTarget.count()) > 0) {
      if (!(await stateTarget.isVisible()) && originalViewport) {
        await page.setViewportSize({ width: 390, height: 900 });
        await wait(300);
        changedViewportForState = true;
      }
      const beforeStyle = await styleSnapshot(stateTarget);
      const beforeStates = await ariaStateSnapshot(root);
      await stateTarget.click({ force: true });
      await wait(240);
      const afterStyle = await styleSnapshot(stateTarget);
      const afterStates = await ariaStateSnapshot(root);
      stateResult = {
        selector: options.stateSelector,
        before: {
          ariaExpanded: beforeStyle.ariaExpanded,
          ariaPressed: beforeStyle.ariaPressed,
          ariaCurrent: beforeStyle.ariaCurrent,
          color: beforeStyle.color,
          backgroundColor: beforeStyle.backgroundColor,
        },
        after: {
          ariaExpanded: afterStyle.ariaExpanded,
          ariaPressed: afterStyle.ariaPressed,
          ariaCurrent: afterStyle.ariaCurrent,
          color: afterStyle.color,
          backgroundColor: afterStyle.backgroundColor,
        },
        beforeStates,
        afterStates,
        changedProperties: diffStyles(beforeStyle, afterStyle),
      };
      screenshots.state = await safeScreenshot(root, options.statePath);
    }
    if (changedViewportForState && originalViewport) {
      await page.setViewportSize(originalViewport);
      await wait(120);
    }
  } else if (defaultStyle.ariaExpanded !== null || defaultStyle.ariaPressed !== null) {
    const beforeStates = await ariaStateSnapshot(root);
    await target.click({ force: true });
    await wait(240);
    const after = await styleSnapshot(target);
    const afterStates = await ariaStateSnapshot(root);
    stateResult = {
      selector: targetSelector,
      before: {
        ariaExpanded: defaultStyle.ariaExpanded,
        ariaPressed: defaultStyle.ariaPressed,
        ariaCurrent: defaultStyle.ariaCurrent,
      },
      after: {
        ariaExpanded: after.ariaExpanded,
        ariaPressed: after.ariaPressed,
        ariaCurrent: after.ariaCurrent,
      },
      beforeStates,
      afterStates,
      changedProperties: diffStyles(defaultStyle, after),
    };
    screenshots.state = await safeScreenshot(root, options.statePath);
  }

  return {
    found: true,
    rootSelector,
    targetSelector,
    focusSelector: options.focusSelector ?? targetSelector,
    screenshots,
    interactions: {
      hoverChanged: hasVisibleChange(diffStyles(defaultStyle, hoverStyle)),
      hoverChangedProperties: diffStyles(defaultStyle, hoverStyle),
      focusVisible: focusStyle ? hasVisibleFocus(focusStyle) : false,
      focusChangedProperties: focusDiff,
      activeChanged: activeStyle ? hasVisibleChange(activeDiff) : false,
      activeChangedProperties: activeDiff,
      stateResult,
    },
  };
}

function classify({ expected, rawEvidence, liveAudit, localAudit }) {
  if (expected.includes("not-required")) {
    return "Not required";
  }

  if (!liveAudit.found) {
    return "Needs decision";
  }
  if (!localAudit.found) {
    return "Fail";
  }

  const failures = [];
  const partials = [];
  const live = liveAudit.interactions;
  const local = localAudit.interactions;
  const rawHasHover = rawEvidence.some((line) => /hover:|group-hover:|whileHover|onMouseEnter/.test(line));
  const rawHasFocus = rawEvidence.some((line) => /focus:|focus-visible:|focus-within:/.test(line));
  const rawHasActive = rawEvidence.some((line) => /active:|whileTap/.test(line));
  const rawHasState = rawEvidence.some((line) => /aria-expanded|aria-pressed|aria-current/.test(line));

  const hoverExpected = expected.includes("hover") || (expected.includes("optional-hover") && (live.hoverChanged || rawHasHover));
  if (hoverExpected && live.hoverChanged && !local.hoverChanged) {
    failures.push("hover missing locally");
  } else if (hoverExpected && !live.hoverChanged && rawHasHover && !local.hoverChanged) {
    partials.push("raw snapshot has hover, but live page does not show a measurable hover change");
  }

  const focusExpected = expected.includes("focus") || rawHasFocus;
  if (focusExpected && live.focusVisible && !local.focusVisible) {
    failures.push("focus-visible missing locally");
  } else if (focusExpected && !local.focusVisible) {
    partials.push("focus-visible not measurable locally");
  }

  const activeExpected = expected.includes("active") || rawHasActive;
  if (activeExpected && live.activeChanged && !local.activeChanged) {
    failures.push("active press treatment missing locally");
  } else if (activeExpected && rawHasActive && !local.activeChanged) {
    partials.push("raw snapshot has active/tap behavior, but local active style is not measurable");
  }

  const stateExpected = expected.includes("pressed") || expected.includes("expanded") || expected.includes("mobile-expanded") || rawHasState;
  if (stateExpected) {
    const liveStateChanged = Boolean(live.stateResult && JSON.stringify(live.stateResult.before) !== JSON.stringify(live.stateResult.after));
    const liveStateListChanged = Boolean(live.stateResult && JSON.stringify(live.stateResult.beforeStates) !== JSON.stringify(live.stateResult.afterStates));
    const localStateChanged = Boolean(local.stateResult && JSON.stringify(local.stateResult.before) !== JSON.stringify(local.stateResult.after));
    const localStateListChanged = Boolean(local.stateResult && JSON.stringify(local.stateResult.beforeStates) !== JSON.stringify(local.stateResult.afterStates));
    if ((liveStateChanged || liveStateListChanged) && !(localStateChanged || localStateListChanged)) {
      failures.push("state change missing locally");
    } else if (!(localStateChanged || localStateListChanged) && rawHasState) {
      partials.push("raw snapshot exposes ARIA state, but local state change was not measurable");
    }
  }

  if (failures.length > 0) {
    return "Fail";
  }
  if (partials.length > 0) {
    return "Partial";
  }
  return "Pass";
}

function recommendFix(classification, expected, localAudit) {
  if (classification === "Pass") {
    return "No Phase 7D fix needed; keep this component in interaction regression coverage.";
  }
  if (classification === "Not required") {
    return "No hover should be invented. Preserve focus only if links or controls are added later.";
  }
  if (!localAudit.found) {
    return `Add the missing local interaction target or update the component contract after explicit approval: ${localAudit.error}`;
  }

  const pieces = [];
  if (expected.includes("hover") || expected.includes("optional-hover")) {
    pieces.push("add token-based hover treatment that matches the live page/raw snapshot");
  }
  if (expected.includes("focus")) {
    pieces.push("add visible keyboard focus treatment for the actual focusable target");
  }
  if (expected.includes("active")) {
    pieces.push("add pressed/active feedback without layout shift");
  }
  if (expected.includes("pressed") || expected.includes("expanded") || expected.includes("mobile-expanded")) {
    pieces.push("verify ARIA state changes and selected/open styling");
  }
  return pieces.length > 0 ? pieces.join("; ") + "." : "Review live section and raw TSX before changing the component.";
}

function summarizeInteraction(audit) {
  if (!audit.found) {
    return audit.error;
  }
  const state = audit.interactions.stateResult;
  return [
    `hover ${audit.interactions.hoverChanged ? "changed" : "unchanged"} (${audit.interactions.hoverChangedProperties.join(", ") || "none"})`,
    `focus ${audit.interactions.focusVisible ? "visible" : "not visible"}`,
    `active ${audit.interactions.activeChanged ? "changed" : "unchanged"} (${audit.interactions.activeChangedProperties.join(", ") || "none"})`,
    state
      ? `state ${JSON.stringify(state.before)} -> ${JSON.stringify(state.after)}; state-list ${JSON.stringify(state.beforeStates)} -> ${JSON.stringify(state.afterStates)}`
      : "state not applicable",
  ].join("; ");
}

async function getLiveMetadata() {
  const response = await fetch(liveUrl, { method: "HEAD", redirect: "follow" });
  return {
    status: response.status,
    url: response.url,
    date: response.headers.get("date"),
    etag: response.headers.get("etag"),
    cache: response.headers.get("x-vercel-cache"),
    matchedPath: response.headers.get("x-matched-path"),
    contentLength: response.headers.get("content-length"),
  };
}

function formatEvidence(lines) {
  if (lines.length === 0) {
    return "No explicit raw interaction tokens found.";
  }
  return lines.slice(0, 8).join("<br>");
}

function makeReport({ generatedAt, liveMetadata, runtime, results }) {
  const counts = results.reduce((acc, result) => {
    acc[result.classification] = (acc[result.classification] ?? 0) + 1;
    return acc;
  }, {});
  const nonPassing = results.filter((result) => result.classification !== "Pass");
  const allPassing = nonPassing.length === 0;
  const rows = results.map((result) => (
    `| \`${result.id}\` | \`${result.liveSection}\` | ${result.classification} | ${result.liveSummary} | ${result.localSummary} | ${result.recommendation} |`
  ));

  const details = results.map((result) => `### ${result.name} (\`${result.id}\`)

- **Live section:** \`${result.liveSection}\`
- **Raw TSX:** \`${result.rawPath}\`
- **Spec states:** ${result.specStates.length > 0 ? result.specStates.join(" ") : "No state lines found."}
- **Raw interaction evidence:** ${formatEvidence(result.rawEvidence)}
- **Live behavior:** ${result.liveSummary}
- **Local behavior:** ${result.localSummary}
- **Classification:** ${result.classification}
- **Recommended fix:** ${result.recommendation}
- **Artifacts:** live default \`${result.liveScreenshots.default ?? "none"}\`; local default \`${result.localScreenshots.default ?? "none"}\`
`).join("\n");

  return `# Phase 7D/7E Interaction And Live Template Page Audit

Generated: ${generatedAt}

## Summary

This audit compares all 20 Wave 1 components against the live runtime reference at ${liveUrl}, raw TSX interaction evidence under \`Components/\`, and current component specs. It is audit-only: no \`Components/\`, \`library/\`, or protected production replica files were changed by the audit script.

${allPassing ? "Phase 7E status: all 20 Wave 1 components now pass the hover/focus/active/open interaction gate." : "Phase 7D status: this report still contains interaction failures or partials that must be fixed before Phase 8."}

## Live Reference Metadata

- Status: ${liveMetadata.status}
- Final URL: ${liveMetadata.url}
- Date: ${liveMetadata.date}
- ETag: ${liveMetadata.etag}
- Vercel cache: ${liveMetadata.cache}
- Matched path: ${liveMetadata.matchedPath}
- Content length: ${liveMetadata.contentLength}

## Runtime

- Browser: ${runtime.browserName} ${runtime.browserVersion}
- OS: ${runtime.os}
- Local showcase URL: ${runtime.localUrl}
- Live URL: ${runtime.liveUrl}
- Artifact directory: \`${path.relative(rootDir, artifactsDir)}\`

## Classification Counts

${Object.entries(counts).map(([key, value]) => `- ${key}: ${value}`).join("\n")}

## 20-Component Result Table

| Component | Live section | Classification | Live behavior | Local behavior | Recommended fix |
|---|---:|---|---|---|---|
${rows.join("\n")}

## Component Details

${details}

## Protected Folder Note

The audit script only reads the live URL, raw component snapshots, specs, registry, and local showcase. Protected-folder timestamp comparison must be run outside the script with \`/tmp/sendpush-phase7d-before.txt\` and \`/tmp/sendpush-phase7d-after.txt\`.

## Rating

Rating: ${allPassing ? "10/10. What makes it a 10: the approved failure list has been converted into a permanent 20/20 interaction gate." : "9/10. What would make it a 10: implement the missing interaction states and run the permanent `verify:interactions` gate with 20 passing components."}
`;
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
  await waitForServer(localUrl);
  const liveMetadata = await getLiveMetadata();
  const browser = await launchBrowser();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1400 },
    deviceScaleFactor: 1,
  });
  const livePage = await context.newPage();
  const localPage = await context.newPage();

  await livePage.goto(liveUrl, { waitUntil: "load" });
  await localPage.goto(localUrl, { waitUntil: "load" });
  await wait(800);

  const runtime = {
    browserName: browser.browserType().name(),
    browserVersion: browser.version(),
    os: `${os.type()} ${os.release()} ${os.arch()}`,
    localUrl,
    liveUrl,
  };

  const results = [];
  for (const component of registry.components) {
    const target = componentTargets[component.id];
    if (!target) {
      throw new Error(`Missing Phase 7D target mapping for ${component.id}`);
    }

    const rawPath = rawPathFor(component);
    const rawEvidence = extractEvidence(rawPath);
    const specStates = extractSpecStates(component.id);

    await livePage.goto(liveUrl, { waitUntil: "load" });
    await localPage.goto(`${localUrl}/?capture=${encodeURIComponent(component.id)}`, { waitUntil: "load" });
    await wait(320);

    const liveAudit = await auditTarget(livePage, target.liveSection, target.liveTarget, {
      defaultPath: path.join(liveArtifactDir, `${component.id}-default.png`),
      hoverPath: path.join(liveArtifactDir, `${component.id}-hover.png`),
      focusPath: path.join(liveArtifactDir, `${component.id}-focus.png`),
      activePath: path.join(liveArtifactDir, `${component.id}-active.png`),
      statePath: path.join(liveArtifactDir, `${component.id}-state.png`),
      focusSelector: target.liveFocusTarget ?? target.focusTarget,
      stateSelector: target.liveStateTarget ?? target.stateTarget,
    });

    const localAudit = await auditTarget(localPage, `[data-capture-target="${component.id}"]`, target.localTarget, {
      defaultPath: path.join(localArtifactDir, `${component.id}-default.png`),
      hoverPath: path.join(localArtifactDir, `${component.id}-hover.png`),
      focusPath: path.join(localArtifactDir, `${component.id}-focus.png`),
      activePath: path.join(localArtifactDir, `${component.id}-active.png`),
      statePath: path.join(localArtifactDir, `${component.id}-state.png`),
      focusSelector: target.localFocusTarget ?? target.focusTarget,
      stateSelector: target.localStateTarget ?? target.stateTarget,
    });

    const classification = classify({
      expected: target.expected,
      rawEvidence,
      liveAudit,
      localAudit,
    });
    const recommendation = recommendFix(classification, target.expected, localAudit);

    results.push({
      id: component.id,
      name: component.name ?? kebabToTitle(component.id),
      liveSection: target.liveSection,
      rawPath: path.relative(rootDir, rawPath),
      specStates,
      rawEvidence,
      liveAudit,
      localAudit,
      liveScreenshots: liveAudit.screenshots,
      localScreenshots: localAudit.screenshots,
      liveSummary: summarizeInteraction(liveAudit),
      localSummary: summarizeInteraction(localAudit),
      classification,
      recommendation,
    });
  }

  await browser.close();

  const generatedAt = new Date().toISOString();
  const output = {
    generatedAt,
    phase: results.every((result) => result.classification === "Pass") ? "7E" : "7D",
    liveMetadata,
    runtime,
    results,
  };
  fs.writeFileSync(dataPath, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(reportPath, makeReport(output));

  console.log(`Phase 7D interaction audit wrote ${path.relative(rootDir, reportPath)} for ${results.length} components.`);
} catch (error) {
  console.error(serverOutput);
  throw error;
} finally {
  server.kill("SIGTERM");
}
