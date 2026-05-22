import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "AI_START_HERE.md",
  "EXTERNAL_LLM_HANDOFF.md",
  "LLM_MARKDOWN_OUTLINE_PACK.md",
  "tokens/design-tokens.json",
  "tokens/fonts.css",
  "tokens/tokens.css",
  "tokens/tokens.d.ts",
  "tokens/tailwind.preset.cjs",
  "tokens/README.md",
  "registry/components.json",
  "registry/components.schema.json",
  "registry/README.md",
  "specs/README.md",
  "specs/components/_template.md",
  "library/package.json",
  "library/tsconfig.json",
  "library/README.md",
  "library/src/index.ts",
  "library/src/types.ts",
  "library/src/styles.css",
  "library/src/utils.ts",
  "showcase/app/package.json",
  "showcase/app/tsconfig.json",
  "showcase/app/vite.config.ts",
  "showcase/app/index.html",
  "showcase/app/src/App.tsx",
  "showcase/app/src/main.tsx",
  "showcase/app/src/specimens.tsx",
  "showcase/app/src/templateFixtures.tsx",
  "showcase/app/src/showcase.css",
  "showcase/app/scripts/verify-showcase.mjs",
  "showcase/app/scripts/verify-visual.mjs",
  "showcase/app/scripts/verify-interactions.mjs",
  "showcase/app/scripts/verify-template-fixtures.mjs",
  "showcase/app/scripts/phase7f-production-targets.json",
  "showcase/app/scripts/phase7f-production-fidelity.mjs",
  "showcase/app/scripts/phase7-visual-gates.json",
  "examples/README.md",
  "examples/approved/trial-conversion-page.md",
  "examples/approved/pricing-evaluation-page.md",
  "examples/approved/proof-led-landing-page.md",
  "examples/blocked/generic-saas-card-grid.md",
  "examples/blocked/page-body-glassmorphism.md",
  "examples/blocked/invented-component-variant.md",
  "examples/blocked/raw-components-import.md",
  "examples/blocked/duplicate-global-chrome.md",
  "examples/blocked/unapproved-token-literal.md",
  "examples/generated/landing-page-body/README.md",
  "examples/generated/landing-page-body/filled-brief.md",
  "examples/generated/landing-page-body/LandingPageBodyExample.tsx",
  "examples/generated/landing-page-body/component-evidence.md",
  "examples/generated/landing-page-body/final-checklist.md",
  "examples/generated/web-page-body/README.md",
  "examples/generated/web-page-body/filled-brief.md",
  "examples/generated/web-page-body/WebPageBodyExample.tsx",
  "examples/generated/web-page-body/component-evidence.md",
  "examples/generated/web-page-body/final-checklist.md",
  "examples/generated/blog-document-body/README.md",
  "examples/generated/blog-document-body/filled-brief.md",
  "examples/generated/blog-document-body/BlogDocumentBodyExample.tsx",
  "examples/generated/blog-document-body/component-evidence.md",
  "examples/generated/blog-document-body/new-component-request.md",
  "examples/generated/blog-document-body/final-checklist.md",
  "examples/generated/brochure-content-body/README.md",
  "examples/generated/brochure-content-body/filled-brief.md",
  "examples/generated/brochure-content-body/BrochureContentBodyExample.tsx",
  "examples/generated/brochure-content-body/component-evidence.md",
  "examples/generated/brochure-content-body/final-checklist.md",
  "examples/generated/external-llm-dry-run/README.md",
  "examples/generated/external-llm-dry-run/filled-brief.md",
  "examples/generated/external-llm-dry-run/ExternalLlmDryRunBodyExample.tsx",
  "examples/generated/external-llm-dry-run/component-evidence.md",
  "examples/generated/external-llm-dry-run/compliance-checklist.md",
  "examples/generated/external-llm-dry-run/human-approval-record.md",
  "examples/generated/external-llm-dry-run/final-checklist.md",
  "examples/generated/real-brief-trial/README.md",
  "examples/generated/real-brief-trial/filled-brief.md",
  "examples/generated/real-brief-trial/RealBriefTrialBodyExample.tsx",
  "examples/generated/real-brief-trial/component-evidence.md",
  "examples/generated/real-brief-trial/compliance-checklist.md",
  "examples/generated/real-brief-trial/human-approval-record.md",
  "examples/generated/real-brief-trial/final-checklist.md",
  ".claude/commands/loyaltymaster-preflight.md",
  ".claude/commands/loyaltymaster-select-components.md",
  ".claude/commands/loyaltymaster-validate.md",
  "templates/README.md",
  "templates/web-page-brief.md",
  "templates/landing-page.md",
  "templates/blog-document.md",
  "templates/brochure-content.md",
  "templates/component-selection-checklist.md",
  "templates/final-pre-publish-checklist.md",
  "templates/ai-compliance-checklist.md",
  "templates/new-component-request.md",
  "PHASE_2_REPORT.md",
  "PHASE_3_REPORT.md",
  "PHASE_4_REPORT.md",
  "PHASE_5_REPORT.md",
  "PHASE_6_REPORT.md",
  "PHASE_7_REPORT.md",
  "PHASE_7B_VISUAL_REVIEW.md",
  "PHASE_7C_REPORT.md",
  "PHASE_7D_INTERACTION_AUDIT.md",
  "PHASE_7E_INTERACTION_FIX_REPORT.md",
  "PHASE_7F_PRODUCTION_FIDELITY_REPORT.md",
  "PHASE_8_TEMPLATE_APPROVAL_PACKET.md",
  "PHASE_8_REPORT.md",
  "PHASE_8B_TEMPLATE_RENDERING_REVIEW.md",
  "PHASE_8C_REPORT.md",
  "PHASE_8D_REPORT.md",
  "PHASE_8E_TEMPLATE_PROOF_REVIEW.md",
  "PHASE_8E_REPORT.md",
  "PHASE_8F_APPROVAL_LOCK_REPORT.md",
  "PHASE_9_REPORT.md",
  "PHASE_10_REPORT.md",
  "PHASE_11_REPORT.md",
  "PHASE_12_CONVERSION_READINESS_AUDIT.md",
  "PHASE_12_REPORT.md",
];

const requiredComponents = [
  "billing-toggle-button",
  "button-email",
  "comparison-table",
  "cta-trial-full-form",
  "cta-with-button-email",
  "faq-accordion",
  "feature-section-2-column-bullets-image",
  "feature-section-2-column-image",
  "features-grid",
  "footer",
  "geo-fence-use-case",
  "hero-main-section",
  "image-grid",
  "image-strip",
  "navbar-glassmorphism",
  "pricing-section",
  "process-steps",
  "stats-card-strip",
  "testimonial-single",
  "testimonials-grid",
];

const requiredTokenPaths = [
  ["color", "accent", "yellow"],
  ["color", "accent", "orange"],
  ["color", "ink"],
  ["color", "background", "peach"],
  ["color", "background", "cyan"],
  ["color", "background", "salmon"],
  ["typography", "display"],
  ["typography", "eyebrow"],
  ["dimension", "radius", "cardPrimary"],
  ["dimension", "radius", "inputCompact"],
  ["dimension", "spacing", "sectionDesktopY"],
  ["shadow", "cardBase"],
  ["motion", "duration", "base"],
  ["layout", "container", "main"],
  ["component", "button", "primary"],
  ["component", "card", "primary"],
  ["component", "input", "tenant"],
];

const requiredSpecHeadings = [
  "## Purpose",
  "## When To Use",
  "## When Not To Use",
  "## Props",
  "## States",
  "## Accessibility Rules",
  "## Screenshot",
  "## Token Usage",
  "## Composition Rules",
  "## Design Rules",
  "## AI Usage Contract",
];

const reactHookPattern = /\buse(?:State|Effect|Memo|Callback|Ref|Reducer|Id|Transition|DeferredValue|LayoutEffect|ImperativeHandle|SyncExternalStore|InsertionEffect)\s*\(/;
const rawHexPattern = /#[0-9a-fA-F]{3,8}\b/;

const approvedExamples = [
  "examples/approved/trial-conversion-page.md",
  "examples/approved/pricing-evaluation-page.md",
  "examples/approved/proof-led-landing-page.md",
];

const blockedExamples = [
  "examples/blocked/generic-saas-card-grid.md",
  "examples/blocked/page-body-glassmorphism.md",
  "examples/blocked/invented-component-variant.md",
  "examples/blocked/raw-components-import.md",
  "examples/blocked/duplicate-global-chrome.md",
  "examples/blocked/unapproved-token-literal.md",
];

const phase6Commands = [
  ".claude/commands/loyaltymaster-preflight.md",
  ".claude/commands/loyaltymaster-select-components.md",
  ".claude/commands/loyaltymaster-validate.md",
];

const phase8Templates = [
  "templates/README.md",
  "templates/web-page-brief.md",
  "templates/landing-page.md",
  "templates/blog-document.md",
  "templates/brochure-content.md",
  "templates/component-selection-checklist.md",
  "templates/final-pre-publish-checklist.md",
  "templates/ai-compliance-checklist.md",
  "templates/new-component-request.md",
];

const phase8ContentTemplates = phase8Templates.filter((templatePath) => templatePath !== "templates/README.md");

const phase8TemplateHeadings = [
  "## Allowed Artifact Type",
  "## Required Human Inputs",
  "## Required Files To Read",
  "## Approved Component Recipe",
  "## Required Spec And Library Evidence",
  "## Blocked Example Rejection Checks",
  "## Final Approval Checklist",
];

const phase8RequiredReferences = [
  "registry/components.json",
  "specPath",
  "libraryPath",
  "tokens/design-tokens.json",
  "examples/approved/",
  "examples/blocked/",
];

const phase8ForbiddenTemplatePatterns = [
  /may invent/i,
  /can invent/i,
  /invented components are allowed/i,
  /invented variants are allowed/i,
  /use unapproved tokens/i,
  /import from \/Components\//i,
];

const phase8BTemplateFixtures = [
  {
    id: "web-page",
    sourceTemplate: "templates/web-page-brief.md",
    localReviewUrl: "http://127.0.0.1:5177/template-tests/web-page",
    components: [
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
    sourceTemplate: "templates/landing-page.md",
    localReviewUrl: "http://127.0.0.1:5177/template-tests/landing-page",
    components: [
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
    sourceTemplate: "templates/blog-document.md",
    localReviewUrl: "http://127.0.0.1:5177/template-tests/blog-document",
    components: [
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
    sourceTemplate: "templates/brochure-content.md",
    localReviewUrl: "http://127.0.0.1:5177/template-tests/brochure-content",
    components: [
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
    sourceTemplate: "templates/web-page-brief.md",
    localReviewUrl: "http://127.0.0.1:5177/template-tests/external-llm-dry-run",
    components: [
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
    sourceTemplate: "templates/web-page-brief.md",
    localReviewUrl: "http://127.0.0.1:5177/template-tests/real-brief-trial",
    components: [
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

const phase8GeneratedExamples = [
  {
    name: "landing page body",
    folder: "examples/generated/landing-page-body",
    sourceTemplate: "templates/landing-page.md",
    tsxFile: "examples/generated/landing-page-body/LandingPageBodyExample.tsx",
    files: [
      "examples/generated/landing-page-body/README.md",
      "examples/generated/landing-page-body/filled-brief.md",
      "examples/generated/landing-page-body/LandingPageBodyExample.tsx",
      "examples/generated/landing-page-body/component-evidence.md",
      "examples/generated/landing-page-body/final-checklist.md",
    ],
    components: [
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
    name: "web page body",
    folder: "examples/generated/web-page-body",
    sourceTemplate: "templates/web-page-brief.md",
    tsxFile: "examples/generated/web-page-body/WebPageBodyExample.tsx",
    files: [
      "examples/generated/web-page-body/README.md",
      "examples/generated/web-page-body/filled-brief.md",
      "examples/generated/web-page-body/WebPageBodyExample.tsx",
      "examples/generated/web-page-body/component-evidence.md",
      "examples/generated/web-page-body/final-checklist.md",
    ],
    components: [
      "hero-main-section",
      "feature-section-2-column-image",
      "feature-section-2-column-bullets-image",
      "image-strip",
      "comparison-table",
      "cta-with-button-email",
    ],
  },
  {
    name: "blog/document body",
    folder: "examples/generated/blog-document-body",
    sourceTemplate: "templates/blog-document.md",
    tsxFile: "examples/generated/blog-document-body/BlogDocumentBodyExample.tsx",
    extraFiles: ["examples/generated/blog-document-body/new-component-request.md"],
    files: [
      "examples/generated/blog-document-body/README.md",
      "examples/generated/blog-document-body/filled-brief.md",
      "examples/generated/blog-document-body/BlogDocumentBodyExample.tsx",
      "examples/generated/blog-document-body/component-evidence.md",
      "examples/generated/blog-document-body/new-component-request.md",
      "examples/generated/blog-document-body/final-checklist.md",
    ],
    components: [
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
    name: "brochure content body",
    folder: "examples/generated/brochure-content-body",
    sourceTemplate: "templates/brochure-content.md",
    tsxFile: "examples/generated/brochure-content-body/BrochureContentBodyExample.tsx",
    files: [
      "examples/generated/brochure-content-body/README.md",
      "examples/generated/brochure-content-body/filled-brief.md",
      "examples/generated/brochure-content-body/BrochureContentBodyExample.tsx",
      "examples/generated/brochure-content-body/component-evidence.md",
      "examples/generated/brochure-content-body/final-checklist.md",
    ],
    components: [
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
    name: "external LLM dry run",
    folder: "examples/generated/external-llm-dry-run",
    sourceTemplate: "templates/web-page-brief.md",
    tsxFile: "examples/generated/external-llm-dry-run/ExternalLlmDryRunBodyExample.tsx",
    extraFiles: [
      "examples/generated/external-llm-dry-run/compliance-checklist.md",
      "examples/generated/external-llm-dry-run/human-approval-record.md",
    ],
    files: [
      "examples/generated/external-llm-dry-run/README.md",
      "examples/generated/external-llm-dry-run/filled-brief.md",
      "examples/generated/external-llm-dry-run/ExternalLlmDryRunBodyExample.tsx",
      "examples/generated/external-llm-dry-run/component-evidence.md",
      "examples/generated/external-llm-dry-run/compliance-checklist.md",
      "examples/generated/external-llm-dry-run/human-approval-record.md",
      "examples/generated/external-llm-dry-run/final-checklist.md",
    ],
    components: [
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
    name: "real brief trial",
    folder: "examples/generated/real-brief-trial",
    sourceTemplate: "templates/web-page-brief.md",
    tsxFile: "examples/generated/real-brief-trial/RealBriefTrialBodyExample.tsx",
    extraFiles: [
      "examples/generated/real-brief-trial/compliance-checklist.md",
      "examples/generated/real-brief-trial/human-approval-record.md",
    ],
    files: [
      "examples/generated/real-brief-trial/README.md",
      "examples/generated/real-brief-trial/filled-brief.md",
      "examples/generated/real-brief-trial/RealBriefTrialBodyExample.tsx",
      "examples/generated/real-brief-trial/component-evidence.md",
      "examples/generated/real-brief-trial/compliance-checklist.md",
      "examples/generated/real-brief-trial/human-approval-record.md",
      "examples/generated/real-brief-trial/final-checklist.md",
    ],
    components: [
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

const phase8DGeneratedExample = phase8GeneratedExamples[0];

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function readJson(relativePath) {
  const absolutePath = path.join(root, relativePath);
  return JSON.parse(fs.readFileSync(absolutePath, "utf8"));
}

function getToken(object, parts) {
  let current = object;
  let inheritedType;

  for (const part of parts) {
    if (current?.$type) {
      inheritedType = current.$type;
    }
    current = current?.[part];
  }

  return {
    token: current,
    inheritedType,
  };
}

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    fail(`Missing required file: ${file}`);
  }
}

if (process.exitCode) {
  process.exit();
}

const tokens = readJson("tokens/design-tokens.json");
if (tokens.$schema !== "https://design-tokens.github.io/community-group/format.schema.json") {
  fail("design-tokens.json must declare the DTCG schema URL");
}

for (const tokenPath of requiredTokenPaths) {
  const { token, inheritedType } = getToken(tokens, tokenPath);
  if (!token || token.$value === undefined || !(token.$type || inheritedType)) {
    fail(`Missing DTCG token with $value and $type: ${tokenPath.join(".")}`);
  }
}

const css = fs.readFileSync(path.join(root, "tokens/tokens.css"), "utf8");
for (const cssVar of [
  "--lm-color-accent-yellow",
  "--lm-color-accent-orange",
  "--lm-color-ink",
  "--lm-radius-card-primary",
  "--lm-motion-duration-base",
]) {
  if (!css.includes(cssVar)) {
    fail(`tokens.css missing ${cssVar}`);
  }
}

const fontsCss = fs.readFileSync(path.join(root, "tokens/fonts.css"), "utf8");
for (const requiredFontReference of [
  "RodgerTest-Bold.otf",
  "RodgerTest-Regular.otf",
  "assets/fonts/onest/Onest-400.ttf",
  "assets/fonts/onest/Onest-700.ttf",
  "font-family: \"Rodger Bold\"",
  "font-family: \"Onest\"",
]) {
  if (!fontsCss.includes(requiredFontReference)) {
    fail(`tokens/fonts.css missing canonical font reference: ${requiredFontReference}`);
  }
}

for (const requiredFontFile of [
  "assets/fonts/RodgerTest-Bold.otf",
  "assets/fonts/RodgerTest-Regular.otf",
  "assets/fonts/onest/Onest-400.ttf",
  "assets/fonts/onest/Onest-700.ttf",
  "assets/fonts/onest/Onest-900.ttf",
]) {
  const fontPath = path.join(root, requiredFontFile);
  if (!fs.existsSync(fontPath) || fs.statSync(fontPath).size === 0) {
    fail(`Missing or empty canonical font file: ${requiredFontFile}`);
  }
}

const types = fs.readFileSync(path.join(root, "tokens/tokens.d.ts"), "utf8");
for (const expected of ["DesignTokens", "TokenValue", "designTokens"]) {
  if (!types.includes(expected)) {
    fail(`tokens.d.ts missing ${expected}`);
  }
}

const registry = readJson("registry/components.json");
const phase7VisualGates = readJson("showcase/app/scripts/phase7-visual-gates.json");
const phase7VisualResults = fs.existsSync(path.join(root, "showcase/app/artifacts/phase-7c/visual-results.json"))
  ? readJson("showcase/app/artifacts/phase-7c/visual-results.json")
  : null;
const phase7InteractionResults = fs.existsSync(path.join(root, "showcase/app/artifacts/phase-7d/interaction-results.json"))
  ? readJson("showcase/app/artifacts/phase-7d/interaction-results.json")
  : null;
const phase7ProductionTargets = readJson("showcase/app/scripts/phase7f-production-targets.json");
const phase7ProductionResults = fs.existsSync(path.join(root, "showcase/app/artifacts/phase-7f/production-fidelity-results.json"))
  ? readJson("showcase/app/artifacts/phase-7f/production-fidelity-results.json")
  : null;

if (phase7VisualGates.version !== "phase-7c") {
  fail("phase7-visual-gates.json must declare version phase-7c");
}

if (!phase7VisualGates.metric?.includes("Phase 7C native component capture")) {
  fail("phase7-visual-gates.json metric must describe Phase 7C native component capture");
}

if (!Array.isArray(registry.components)) {
  fail("components.json must expose a components array");
}

const showcasePackage = readJson("showcase/app/package.json");
if (!showcasePackage.scripts?.["verify:visual"]) {
  fail("showcase/app/package.json missing verify:visual script");
}
if (!showcasePackage.scripts?.["regenerate:phase7c-references"]) {
  fail("showcase/app/package.json missing regenerate:phase7c-references script");
}
if (!showcasePackage.scripts?.["verify:interactions"]) {
  fail("showcase/app/package.json missing verify:interactions script");
}
if (!showcasePackage.scripts?.["audit:production-fidelity"]) {
  fail("showcase/app/package.json missing audit:production-fidelity script");
}
if (!showcasePackage.scripts?.["verify:production-fidelity"]) {
  fail("showcase/app/package.json missing verify:production-fidelity script");
}
if (!showcasePackage.scripts?.["verify:templates"]) {
  fail("showcase/app/package.json missing verify:templates script");
}

const specimensSource = fs.existsSync(path.join(root, "showcase/app/src/specimens.tsx"))
  ? fs.readFileSync(path.join(root, "showcase/app/src/specimens.tsx"), "utf8")
  : "";

const ids = registry.components.map((component) => component.id);
for (const id of requiredComponents) {
  if (!ids.includes(id)) {
    fail(`components.json missing component id: ${id}`);
  }
}

if (new Set(ids).size !== ids.length) {
  fail("components.json contains duplicate component ids");
}

for (const component of registry.components) {
  for (const key of [
    "id",
    "name",
    "category",
    "status",
    "clientBoundary",
    "description",
    "whenToUse",
    "whenNotToUse",
    "screenshotPath",
    "specPath",
    "rawSourcePath",
    "libraryPath",
    "tokensUsed",
    "props",
  ]) {
    if (component[key] === undefined) {
      fail(`${component.id ?? "unknown component"} missing ${key}`);
    }
  }

  if (!fs.existsSync(path.join(root, component.screenshotPath))) {
    fail(`${component.id} screenshotPath does not exist: ${component.screenshotPath}`);
  }

  if (!fs.existsSync(path.join(root, component.specPath))) {
    fail(`${component.id} specPath does not exist: ${component.specPath}`);
  } else {
    const spec = fs.readFileSync(path.join(root, component.specPath), "utf8");
    for (const heading of requiredSpecHeadings) {
      if (!spec.includes(heading)) {
        fail(`${component.id} spec missing required heading: ${heading}`);
      }
    }

    if (!spec.includes(component.screenshotPath)) {
      fail(`${component.id} spec must reference screenshotPath: ${component.screenshotPath}`);
    }

    const missingTokens = component.tokensUsed.filter((tokenName) => !spec.includes(tokenName));
    if (missingTokens.length > 0) {
      fail(`${component.id} spec missing approved token references: ${missingTokens.join(", ")}`);
    }
  }

  if (!fs.existsSync(path.join(root, component.rawSourcePath))) {
    fail(`${component.id} rawSourcePath does not exist: ${component.rawSourcePath}`);
  }

  if (!Array.isArray(component.tokensUsed) || component.tokensUsed.length === 0) {
    fail(`${component.id} must list at least one token`);
  }

  if (!specimensSource.includes(`id: "${component.id}"`)) {
    fail(`${component.id} missing Phase 5 showcase specimen renderer`);
  }

  const libraryAbsolutePath = path.join(root, component.libraryPath);
  if (!fs.existsSync(libraryAbsolutePath)) {
    fail(`${component.id} libraryPath does not exist: ${component.libraryPath}`);
  } else {
    const librarySource = fs.readFileSync(libraryAbsolutePath, "utf8");
    const normalizedStart = librarySource.trimStart();

    if (component.clientBoundary === "client" && !normalizedStart.startsWith("'use client'")) {
      fail(`${component.id} client component must start with 'use client': ${component.libraryPath}`);
    }

    if (component.clientBoundary === "server" && reactHookPattern.test(librarySource)) {
      fail(`${component.id} server component must not use React hooks: ${component.libraryPath}`);
    }

    if (/from\s+["'][^"']*Components\/|from\s+["'][^"']*\/Components\/|import\s*\([^)]*["'][^"']*Components\//.test(librarySource)) {
      fail(`${component.id} library file must not import from raw /Components/: ${component.libraryPath}`);
    }

    if (rawHexPattern.test(librarySource)) {
      fail(`${component.id} library component must use token CSS variables instead of raw hex colors: ${component.libraryPath}`);
    }
  }

  for (const artifactPath of [
    `showcase/app/artifacts/phase-5/${component.id}.png`,
  ]) {
    if (!fs.existsSync(path.join(root, artifactPath))) {
      fail(`${component.id} missing Phase 5 rendered smoke artifact: ${artifactPath}`);
    }
  }

  const phase7Gate = phase7VisualGates.components?.[component.id];
  if (!phase7Gate) {
    fail(`${component.id} missing Phase 7 visual gate entry`);
  } else {
    if (!phase7Gate.classification || typeof phase7Gate.gate !== "boolean" || !phase7Gate.notes) {
      fail(`${component.id} Phase 7 visual gate must include classification, gate, and notes`);
    }

    if (!phase7Gate.gate) {
      fail(`${component.id} Phase 7 component must be gated; skipped visual gates are no longer accepted`);
    }

    if (typeof phase7Gate.maxMeanDelta !== "number" || typeof phase7Gate.maxMismatchRatio !== "number") {
      fail(`${component.id} gated Phase 7 component must include numeric thresholds`);
    }

    if (
      phase7Gate.maxMeanDelta > 0.001 ||
      phase7Gate.maxMismatchRatio > 0.003 ||
      phase7Gate.maxWidthDeltaRatio !== 0 ||
      phase7Gate.maxHeightDeltaRatio !== 0 ||
      phase7Gate.maxAspectDelta !== 0
    ) {
      fail(`${component.id} Phase 7C gate thresholds must stay strict after reference regeneration`);
    }
  }

  if (phase7VisualResults) {
    const phase7Result = phase7VisualResults.results?.find((result) => result.id === component.id);
    if (!phase7Result) {
      fail(`${component.id} missing Phase 7 visual result`);
    } else if (phase7Result.gate && !phase7Result.passed) {
      fail(`${component.id} Phase 7 visual gate result is failing`);
    } else {
      for (const key of [
        "referenceCssWidth",
        "referenceCssHeight",
        "currentWidth",
        "currentHeight",
        "widthDeltaRatio",
        "heightDeltaRatio",
        "aspectDelta",
          "failureReasons",
      ]) {
        if (phase7Result[key] === undefined) {
          fail(`${component.id} Phase 7C visual result missing native-capture field: ${key}`);
        }
      }

      if (!Array.isArray(phase7Result.failureReasons)) {
        fail(`${component.id} Phase 7C visual result failureReasons must be an array`);
      }
    }
  }

  for (const artifactPath of [
    `showcase/app/artifacts/phase-7c/current/${component.id}.png`,
    `showcase/app/artifacts/phase-7c/diffs/${component.id}.png`,
    `showcase/app/artifacts/phase-7c/regenerated-references/${component.id}.png`,
    `assets/screenshots/historical-phase-7b/${component.id}.png`,
  ]) {
    const artifactAbsolutePath = path.join(root, artifactPath);
    if (!fs.existsSync(artifactAbsolutePath)) {
      fail(`${component.id} missing Phase 7C visual artifact: ${artifactPath}`);
    }
    if (fs.statSync(artifactAbsolutePath).size === 0) {
      fail(`${component.id} Phase 7C visual artifact is empty: ${artifactPath}`);
    }
  }

  const phase7ProductionTarget = phase7ProductionTargets.components?.[component.id];
  if (!phase7ProductionTarget) {
    fail(`${component.id} missing Phase 7F production fidelity target`);
  } else {
    for (const key of ["liveUrl", "liveSelector", "productionSourcePath", "notes"]) {
      if (!phase7ProductionTarget[key]) {
        fail(`${component.id} Phase 7F production target missing ${key}`);
      }
    }
    if (!fs.existsSync(phase7ProductionTarget.productionSourcePath)) {
      fail(`${component.id} Phase 7F productionSourcePath does not exist: ${phase7ProductionTarget.productionSourcePath}`);
    }
  }
}

for (const artifactPath of [
  "showcase/app/artifacts/phase-5/phase5-desktop.png",
  "showcase/app/artifacts/phase-5/phase5-mobile.png",
]) {
  if (!fs.existsSync(path.join(root, artifactPath))) {
    fail(`Missing Phase 5 viewport artifact: ${artifactPath}`);
  }
}

for (const examplePath of approvedExamples) {
  const example = fs.readFileSync(path.join(root, examplePath), "utf8");
  for (const requiredReference of [
    "READ_FIRST_AI.md",
    "PREFLIGHT.md",
    "registry/components.json",
    "tokens/design-tokens.json",
    "library/src/components/",
    "showcase/app",
  ]) {
    if (!example.includes(requiredReference)) {
      fail(`${examplePath} missing required approved-example reference: ${requiredReference}`);
    }
  }

  const referencedComponents = registry.components.filter((component) => example.includes(`\`${component.id}\``));
  if (referencedComponents.length === 0) {
    fail(`${examplePath} must reference at least one registry component id`);
  }

  for (const component of referencedComponents) {
    if (!example.includes(component.specPath)) {
      fail(`${examplePath} references ${component.id} but not its specPath: ${component.specPath}`);
    }
    if (!example.includes(component.libraryPath)) {
      fail(`${examplePath} references ${component.id} but not its libraryPath: ${component.libraryPath}`);
    }
  }
}

for (const examplePath of blockedExamples) {
  const example = fs.readFileSync(path.join(root, examplePath), "utf8");
  if (!example.includes("## Rule Violated:")) {
    fail(`${examplePath} must clearly state which rule it violates`);
  }
  if (!example.includes("## Required Correction")) {
    fail(`${examplePath} must include a required correction`);
  }
}

for (const commandPath of phase6Commands) {
  const command = fs.readFileSync(path.join(root, commandPath), "utf8");
  for (const requiredReference of [
    "READ_FIRST_AI.md",
    "registry/components.json",
    "specPath",
    "libraryPath",
  ]) {
    if (!command.includes(requiredReference)) {
      fail(`${commandPath} missing workflow reference: ${requiredReference}`);
    }
  }
}

for (const templatePath of phase8Templates) {
  const template = fs.readFileSync(path.join(root, templatePath), "utf8");

  if (!template.includes("Approval Status: Approved")) {
    fail(`${templatePath} missing Approval Status: Approved`);
  }

  if (template.includes("Approval Status: Draft")) {
    fail(`${templatePath} is still marked Draft after Phase 8 approval`);
  }

  for (const requiredReference of phase8RequiredReferences) {
    if (!template.includes(requiredReference)) {
      fail(`${templatePath} missing Phase 8 required reference: ${requiredReference}`);
    }
  }

  for (const forbiddenPattern of phase8ForbiddenTemplatePatterns) {
    if (forbiddenPattern.test(template)) {
      fail(`${templatePath} appears to allow forbidden template-level invention or source usage: ${forbiddenPattern}`);
    }
  }

  if (templatePath !== "templates/new-component-request.md" && !template.includes("templates/new-component-request.md")) {
    fail(`${templatePath} must route missing component needs to templates/new-component-request.md`);
  }
}

for (const templatePath of phase8ContentTemplates) {
  const template = fs.readFileSync(path.join(root, templatePath), "utf8");

  for (const heading of phase8TemplateHeadings) {
    if (!template.includes(heading)) {
      fail(`${templatePath} missing required template heading: ${heading}`);
    }
  }

  const referencedComponents = registry.components.filter((component) => template.includes(`\`${component.id}\``));
  if (templatePath !== "templates/new-component-request.md" && referencedComponents.length === 0) {
    fail(`${templatePath} must reference at least one approved registry component id`);
  }
}

const phase8TemplateReadme = fs.readFileSync(path.join(root, "templates/README.md"), "utf8");
for (const requiredText of [
  "Hard Lego Rule",
  "Do not invent components, variants, tokens, or interaction behavior",
  "Approval Lifecycle",
  "Protected Sources",
]) {
  if (!phase8TemplateReadme.includes(requiredText)) {
    fail(`templates/README.md missing required operating rule: ${requiredText}`);
  }
}

const phase8NewComponentRequest = fs.readFileSync(path.join(root, "templates/new-component-request.md"), "utf8");
for (const requiredText of [
  "## Separate Approval Workflow",
  "registry/components.json",
  "specs/components/<component-id>.md",
  "library/src/components/<ComponentName>.tsx",
  "showcase/app",
  "visual, interaction, and production-fidelity gates",
  "explicit approval",
]) {
  if (!phase8NewComponentRequest.includes(requiredText)) {
    fail(`templates/new-component-request.md missing required approval workflow detail: ${requiredText}`);
  }
}

const phase8ApprovalPacket = fs.readFileSync(path.join(root, "PHASE_8_TEMPLATE_APPROVAL_PACKET.md"), "utf8");
for (const templatePath of phase8Templates) {
  if (!phase8ApprovalPacket.includes(templatePath)) {
    fail(`PHASE_8_TEMPLATE_APPROVAL_PACKET.md missing template review entry: ${templatePath}`);
  }
}
for (const component of registry.components) {
  if (!phase8ApprovalPacket.includes(`\`${component.id}\``)) {
    fail(`PHASE_8_TEMPLATE_APPROVAL_PACKET.md missing approved component id: ${component.id}`);
  }
}
for (const requiredText of [
  "All Phase 8 templates are `Approved`",
  "Approval Questions Resolved",
  "Phase 8B",
  "Approval authority: user",
]) {
  if (!phase8ApprovalPacket.includes(requiredText)) {
    fail(`PHASE_8_TEMPLATE_APPROVAL_PACKET.md missing approval detail: ${requiredText}`);
  }
}

const phase8Report = fs.readFileSync(path.join(root, "PHASE_8_REPORT.md"), "utf8");
for (const requiredText of [
  "Phase 8 creates and approves the template layer",
  "All templates are `Approved`",
  "templates/new-component-request.md",
  "Protected Source Confirmation",
  "Phase 2/3/4/5/6/7/7B/7C/7D/7E/7F/8A/8B validation passed.",
  "Rating: 10/10",
]) {
  if (!phase8Report.includes(requiredText)) {
    fail(`PHASE_8_REPORT.md missing required report detail: ${requiredText}`);
  }
}

const phase8BFixtureSource = fs.readFileSync(path.join(root, "showcase/app/src/templateFixtures.tsx"), "utf8");
const phase8BAppSource = fs.readFileSync(path.join(root, "showcase/app/src/App.tsx"), "utf8");
if (/Components\//.test(phase8BFixtureSource)) {
  fail("showcase/app/src/templateFixtures.tsx must not import or reference /Components/");
}
if (!phase8BFixtureSource.includes("../../../library/src")) {
  fail("showcase/app/src/templateFixtures.tsx must import approved components from the library index");
}
if (/NavbarGlassmorphism|<Navbar|Footer,|<Footer/.test(phase8BFixtureSource)) {
  fail("Phase 8B rendered web-page and landing-page fixtures must be body-only and exclude navbar/footer");
}
if (!phase8BAppSource.includes("/template-tests/") || !phase8BAppSource.includes("TemplateReviewPage")) {
  fail("showcase/app/src/App.tsx must expose Phase 8B template review routes");
}

const phase8WebPageTemplate = fs.readFileSync(path.join(root, "templates/web-page-brief.md"), "utf8");
const phase8LandingTemplate = fs.readFileSync(path.join(root, "templates/landing-page.md"), "utf8");
for (const [templatePath, templateSource] of [
  ["templates/web-page-brief.md", phase8WebPageTemplate],
  ["templates/landing-page.md", phase8LandingTemplate],
]) {
  for (const requiredText of [
    "body-only",
    "production website already provides",
    "`navbar-glassmorphism` and `footer` are approved shell components only",
    "fewer than a full row of plan cards",
  ]) {
    if (!templateSource.includes(requiredText)) {
      fail(`${templatePath} missing Phase 8C body-only/pricing rule detail: ${requiredText}`);
    }
  }

  for (const forbiddenDefaultRecipe of [
    /\| (Conversion page|Product explanation page|Pricing page|Proof page) \|[^|\n]*navbar-glassmorphism/i,
    /\| (Conversion page|Product explanation page|Pricing page|Proof page) \|[^|\n]*footer/i,
    /\| (Trial conversion|Offer with email CTA|Pricing decision|Proof-led sales|Full trial form) \|[^|\n]*navbar-glassmorphism/i,
    /\| (Trial conversion|Offer with email CTA|Pricing decision|Proof-led sales|Full trial form) \|[^|\n]*footer/i,
  ]) {
    if (forbiddenDefaultRecipe.test(templateSource)) {
      fail(`${templatePath} still includes navbar/footer in a default body recipe`);
    }
  }
}

for (const fixture of phase8BTemplateFixtures) {
  if (!phase8BFixtureSource.includes(`id: "${fixture.id}"`)) {
    fail(`templateFixtures.tsx missing rendered fixture id: ${fixture.id}`);
  }
  if (!phase8BFixtureSource.includes(fixture.sourceTemplate)) {
    fail(`templateFixtures.tsx missing source template reference for ${fixture.id}: ${fixture.sourceTemplate}`);
  }
  if (!phase8BFixtureSource.includes(fixture.localReviewUrl)) {
    fail(`templateFixtures.tsx missing local review URL for ${fixture.id}: ${fixture.localReviewUrl}`);
  }
  for (const componentId of fixture.components) {
    if (!ids.includes(componentId)) {
      fail(`Phase 8B fixture ${fixture.id} references unregistered component id: ${componentId}`);
    }
    if (!phase8BFixtureSource.includes(`"${componentId}"`)) {
      fail(`templateFixtures.tsx missing component id ${componentId} for fixture ${fixture.id}`);
    }
  }
}

const phase8BReview = fs.readFileSync(path.join(root, "PHASE_8B_TEMPLATE_RENDERING_REVIEW.md"), "utf8");
for (const requiredText of [
  "http://127.0.0.1:5177/template-tests/web-page",
  "http://127.0.0.1:5177/template-tests/landing-page",
  "showcase/app/src/templateFixtures.tsx",
  "showcase/app/artifacts/phase-8b/template-fixture-results.json",
  "templates/new-component-request.md",
  "body-only",
  "Pricing cards are centered",
  "Approved by user on 2026-05-20",
  "Rating: 10/10",
]) {
  if (!phase8BReview.includes(requiredText)) {
    fail(`PHASE_8B_TEMPLATE_RENDERING_REVIEW.md missing required review detail: ${requiredText}`);
  }
}

const phase8CReport = fs.readFileSync(path.join(root, "PHASE_8C_REPORT.md"), "utf8");
for (const requiredText of [
  "body-only by default",
  "navbar/header",
  "and footer",
  "`pricing-section`",
  "short pricing rows center",
  "http://127.0.0.1:5177/template-tests/landing-page",
  "Approved by user on 2026-05-20",
  "Rating: 10/10",
]) {
  if (!phase8CReport.includes(requiredText)) {
    fail(`PHASE_8C_REPORT.md missing required report detail: ${requiredText}`);
  }
}

const aiStartHere = fs.readFileSync(path.join(root, "AI_START_HERE.md"), "utf8");
for (const requiredText of [
  "Required Read Order",
  "Body-Only Rule",
  "Approved Lego Rule",
  "Protected Sources",
  "templates/new-component-request.md",
  "examples/generated/landing-page-body/",
  "/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION",
  "RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/",
  "/Components/",
  "library/src/components/",
]) {
  if (!aiStartHere.includes(requiredText)) {
    fail(`AI_START_HERE.md missing required Phase 8D detail: ${requiredText}`);
  }
}

for (const docPath of [
  "READ_FIRST_AI.md",
  "PREFLIGHT.md",
  "templates/README.md",
  "examples/README.md",
  "registry/README.md",
  "KNOWN_ISSUES.md",
  ".claude/commands/loyaltymaster-preflight.md",
  ".claude/commands/loyaltymaster-select-components.md",
  ".claude/commands/loyaltymaster-validate.md",
]) {
  const source = fs.readFileSync(path.join(root, docPath), "utf8");
  if (!source.includes("AI_START_HERE.md")) {
    fail(`${docPath} must point future agents to AI_START_HERE.md`);
  }
}

for (const exampleFile of phase8DGeneratedExample.files) {
  const source = fs.readFileSync(path.join(root, exampleFile), "utf8");
  if (
    !source.includes("AI_START_HERE.md") &&
    ![
      "examples/generated/landing-page-body/component-evidence.md",
      "examples/generated/landing-page-body/LandingPageBodyExample.tsx",
    ].includes(exampleFile)
  ) {
    fail(`${exampleFile} must reference AI_START_HERE.md`);
  }
}

const phase8DExampleReadme = fs.readFileSync(path.join(root, "examples/generated/landing-page-body/README.md"), "utf8");
for (const requiredText of [
  "templates/landing-page.md",
  "body-only `.tsx`",
  "registry/components.json",
  "library/src/components/",
  "global chrome is excluded",
]) {
  if (!phase8DExampleReadme.includes(requiredText)) {
    fail(`Generated example README missing required detail: ${requiredText}`);
  }
}

const phase8DFilledBrief = fs.readFileSync(path.join(root, "examples/generated/landing-page-body/filled-brief.md"), "utf8");
for (const requiredText of [
  "Source template: `templates/landing-page.md`",
  "Body-only",
  "registry/components.json",
  "templates/new-component-request.md",
]) {
  if (!phase8DFilledBrief.includes(requiredText)) {
    fail(`Generated filled brief missing required detail: ${requiredText}`);
  }
}

const phase8DExampleTsx = fs.readFileSync(path.join(root, "examples/generated/landing-page-body/LandingPageBodyExample.tsx"), "utf8");
if (!phase8DExampleTsx.includes("../../../library/src")) {
  fail("Generated landing page body example must import from the approved library index");
}
for (const forbiddenPattern of [
  /from\s+["'][^"']*Components/i,
  /\/Components\//,
  /sendPUSH-PRODUCTION/,
  /NavbarGlassmorphism|<Navbar|Footer,|<Footer/,
]) {
  if (forbiddenPattern.test(phase8DExampleTsx)) {
    fail(`Generated landing page body example contains forbidden source or shell usage: ${forbiddenPattern}`);
  }
}

const phase8DComponentEvidence = fs.readFileSync(path.join(root, "examples/generated/landing-page-body/component-evidence.md"), "utf8");
for (const componentId of phase8DGeneratedExample.components) {
  const component = registry.components.find((item) => item.id === componentId);
  if (!component) {
    fail(`Phase 8D generated example references unregistered component id: ${componentId}`);
    continue;
  }
  if (!phase8DFilledBrief.includes(`\`${componentId}\``)) {
    fail(`Generated filled brief missing selected component id: ${componentId}`);
  }
  if (!phase8DComponentEvidence.includes(`\`${componentId}\``)) {
    fail(`Generated component evidence missing selected component id: ${componentId}`);
  }
  if (!phase8DComponentEvidence.includes(component.specPath)) {
    fail(`Generated component evidence missing ${componentId} specPath: ${component.specPath}`);
  }
  if (!phase8DComponentEvidence.includes(component.libraryPath)) {
    fail(`Generated component evidence missing ${componentId} libraryPath: ${component.libraryPath}`);
  }
  if (!phase8DComponentEvidence.includes(component.screenshotPath)) {
    fail(`Generated component evidence missing ${componentId} screenshotPath: ${component.screenshotPath}`);
  }
  for (const tokenName of component.tokensUsed) {
    if (!phase8DComponentEvidence.includes(`\`${tokenName}\``)) {
      fail(`Generated component evidence missing ${componentId} token: ${tokenName}`);
    }
  }
}
for (const shellComponent of ["navbar-glassmorphism", "footer"]) {
  if (phase8DExampleTsx.includes(shellComponent)) {
    fail(`Generated body-only TSX example must not include shell component id: ${shellComponent}`);
  }
}

const phase8DFinalChecklist = fs.readFileSync(path.join(root, "examples/generated/landing-page-body/final-checklist.md"), "utf8");
for (const requiredText of [
  "Started from `AI_START_HERE.md`",
  "Used approved template `templates/landing-page.md`",
  "Used only approved component IDs from `registry/components.json`",
  "Excluded global chrome from the generated body",
  "Did not import from `/Components/`",
  "/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION",
  "RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/",
]) {
  if (!phase8DFinalChecklist.includes(requiredText)) {
    fail(`Generated final checklist missing required detail: ${requiredText}`);
  }
}

const phase8DReport = fs.readFileSync(path.join(root, "PHASE_8D_REPORT.md"), "utf8");
for (const requiredText of [
  "AI_START_HERE.md",
  "examples/generated/landing-page-body/",
  "Approved scope",
  "body-only",
  "Protected Source Confirmation",
  "Phase 2/3/4/5/6/7/7B/7C/7D/7E/7F/8A/8B/8C/8D validation passed.",
  "Rating: 10/10",
]) {
  if (!phase8DReport.includes(requiredText)) {
    fail(`PHASE_8D_REPORT.md missing required detail: ${requiredText}`);
  }
}

for (const requiredText of [
  "examples/generated/web-page-body/",
  "examples/generated/blog-document-body/",
  "examples/generated/brochure-content-body/",
  "http://127.0.0.1:5177/template-tests/blog-document",
  "http://127.0.0.1:5177/template-tests/brochure-content",
]) {
  if (!aiStartHere.includes(requiredText)) {
    fail(`AI_START_HERE.md missing required Phase 8E detail: ${requiredText}`);
  }
}

for (const docPath of [
  "READ_FIRST_AI.md",
  "PREFLIGHT.md",
  "templates/README.md",
  "examples/README.md",
  "registry/README.md",
  "KNOWN_ISSUES.md",
]) {
  const source = fs.readFileSync(path.join(root, docPath), "utf8");
  for (const requiredText of [
    "examples/generated/web-page-body",
    "examples/generated/blog-document-body",
    "examples/generated/brochure-content-body",
  ]) {
    if (!source.includes(requiredText)) {
      fail(`${docPath} missing Phase 8E generated proof reference: ${requiredText}`);
    }
  }
}

for (const generatedExample of phase8GeneratedExamples) {
  for (const exampleFile of generatedExample.files) {
    const source = fs.readFileSync(path.join(root, exampleFile), "utf8");
    if (
      !source.includes("AI_START_HERE.md") &&
      ![
        `${generatedExample.folder}/component-evidence.md`,
        generatedExample.tsxFile,
        ...(generatedExample.extraFiles ?? []),
      ].includes(exampleFile)
    ) {
      fail(`${exampleFile} must reference AI_START_HERE.md`);
    }
  }

  const readme = fs.readFileSync(path.join(root, `${generatedExample.folder}/README.md`), "utf8");
  for (const requiredText of [
    generatedExample.sourceTemplate,
    "registry/components.json",
    "library/src/components/",
  ]) {
    if (!readme.includes(requiredText)) {
      fail(`${generatedExample.folder}/README.md missing required detail: ${requiredText}`);
    }
  }

  const filledBrief = fs.readFileSync(path.join(root, `${generatedExample.folder}/filled-brief.md`), "utf8");
  for (const requiredText of [
    `Source template: \`${generatedExample.sourceTemplate}\``,
    "Body-only",
    "registry/components.json",
    "templates/new-component-request.md",
  ]) {
    if (!filledBrief.includes(requiredText)) {
      fail(`${generatedExample.folder}/filled-brief.md missing required detail: ${requiredText}`);
    }
  }

  const tsxSource = fs.readFileSync(path.join(root, generatedExample.tsxFile), "utf8");
  if (!tsxSource.includes("../../../library/src")) {
    fail(`${generatedExample.tsxFile} must import from the approved library index`);
  }
  for (const forbiddenPattern of [
    /from\s+["'][^"']*Components/i,
    /\/Components\//,
    /sendPUSH-PRODUCTION/,
    /NavbarGlassmorphism|<Navbar|Footer,|<Footer/,
  ]) {
    if (forbiddenPattern.test(tsxSource)) {
      fail(`${generatedExample.tsxFile} contains forbidden source or shell usage: ${forbiddenPattern}`);
    }
  }

  const componentEvidence = fs.readFileSync(path.join(root, `${generatedExample.folder}/component-evidence.md`), "utf8");
  for (const componentId of generatedExample.components) {
    const component = registry.components.find((item) => item.id === componentId);
    if (!component) {
      fail(`${generatedExample.name} generated example references unregistered component id: ${componentId}`);
      continue;
    }
    if (!filledBrief.includes(`\`${componentId}\``)) {
      fail(`${generatedExample.folder}/filled-brief.md missing selected component id: ${componentId}`);
    }
    if (!componentEvidence.includes(`\`${componentId}\``)) {
      fail(`${generatedExample.folder}/component-evidence.md missing selected component id: ${componentId}`);
    }
    if (!componentEvidence.includes(component.specPath)) {
      fail(`${generatedExample.folder}/component-evidence.md missing ${componentId} specPath: ${component.specPath}`);
    }
    if (!componentEvidence.includes(component.libraryPath)) {
      fail(`${generatedExample.folder}/component-evidence.md missing ${componentId} libraryPath: ${component.libraryPath}`);
    }
    if (!componentEvidence.includes(component.screenshotPath)) {
      fail(`${generatedExample.folder}/component-evidence.md missing ${componentId} screenshotPath: ${component.screenshotPath}`);
    }
    for (const tokenName of component.tokensUsed) {
      if (!componentEvidence.includes(`\`${tokenName}\``)) {
        fail(`${generatedExample.folder}/component-evidence.md missing ${componentId} token: ${tokenName}`);
      }
    }
  }

  for (const shellComponent of ["navbar-glassmorphism", "footer"]) {
    if (tsxSource.includes(shellComponent)) {
      fail(`${generatedExample.tsxFile} must not include body-only shell component id: ${shellComponent}`);
    }
  }

  const finalChecklist = fs.readFileSync(path.join(root, `${generatedExample.folder}/final-checklist.md`), "utf8");
  for (const requiredText of [
    "Started from `AI_START_HERE.md`",
    `Used approved template \`${generatedExample.sourceTemplate}\``,
    "Used only approved component IDs from `registry/components.json`",
    "Did not import from `/Components/`",
    "/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION",
    "RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/",
  ]) {
    if (!finalChecklist.includes(requiredText)) {
      fail(`${generatedExample.folder}/final-checklist.md missing required detail: ${requiredText}`);
    }
  }
}

const phase8EBlogRequest = fs.readFileSync(path.join(root, "examples/generated/blog-document-body/new-component-request.md"), "utf8");
for (const requiredText of [
  "Article Body / Content Block",
  "why no current approved component fits",
  "registered",
  "specified",
  "implemented",
  "showcased",
  "visually gated",
  "interaction gated",
  "explicitly approved",
]) {
  if (!phase8EBlogRequest.toLowerCase().includes(requiredText.toLowerCase())) {
    fail(`blog-document-body new-component request missing required stop-point detail: ${requiredText}`);
  }
}

const phase8EReview = fs.readFileSync(path.join(root, "PHASE_8E_TEMPLATE_PROOF_REVIEW.md"), "utf8");
for (const requiredText of [
  "http://127.0.0.1:5177/template-tests/blog-document",
  "http://127.0.0.1:5177/template-tests/brochure-content",
  "examples/generated/blog-document-body/new-component-request.md",
  "Approved by user on 2026-05-20",
  "after corrected image-strip review",
  "Rating: 10/10",
]) {
  if (!phase8EReview.includes(requiredText)) {
    fail(`PHASE_8E_TEMPLATE_PROOF_REVIEW.md missing required detail: ${requiredText}`);
  }
}
if (phase8EReview.includes("Ready for human browser review")) {
  fail("PHASE_8E_TEMPLATE_PROOF_REVIEW.md must not remain in Ready for human browser review state after Phase 8F approval lock");
}

const phase8EReport = fs.readFileSync(path.join(root, "PHASE_8E_REPORT.md"), "utf8");
for (const requiredText of [
  "examples/generated/web-page-body/",
  "examples/generated/blog-document-body/",
  "examples/generated/brochure-content-body/",
  "showcase/app/artifacts/phase-8e/",
  "Human Approval Lock",
  "all four Phase 8E rendered template proof URLs are now approved",
  "Phase 2/3/4/5/6/7/7B/7C/7D/7E/7F/8A/8B/8C/8D/8E validation passed.",
  "Rating: 10/10",
]) {
  if (!phase8EReport.includes(requiredText)) {
    fail(`PHASE_8E_REPORT.md missing required detail: ${requiredText}`);
  }
}

const phase8FReport = fs.readFileSync(path.join(root, "PHASE_8F_APPROVAL_LOCK_REPORT.md"), "utf8");
for (const requiredText of [
  "Approved by user on 2026-05-20",
  "http://127.0.0.1:5177/template-tests/web-page",
  "http://127.0.0.1:5177/template-tests/landing-page",
  "http://127.0.0.1:5177/template-tests/blog-document",
  "http://127.0.0.1:5177/template-tests/brochure-content",
  "corrected brochure-content URL",
  "Rating: 10/10",
]) {
  if (!phase8FReport.includes(requiredText)) {
    fail(`PHASE_8F_APPROVAL_LOCK_REPORT.md missing required detail: ${requiredText}`);
  }
}

for (const requiredText of [
  "examples/generated/external-llm-dry-run/",
  "http://127.0.0.1:5177/template-tests/external-llm-dry-run",
  "examples/generated/real-brief-trial/",
  "http://127.0.0.1:5177/template-tests/real-brief-trial",
]) {
  if (!aiStartHere.includes(requiredText)) {
    fail(`AI_START_HERE.md missing required Phase 9/10 detail: ${requiredText}`);
  }
}

for (const docPath of [
  "READ_FIRST_AI.md",
  "PREFLIGHT.md",
  "examples/README.md",
  "registry/README.md",
  "KNOWN_ISSUES.md",
]) {
  const source = fs.readFileSync(path.join(root, docPath), "utf8");
  for (const requiredText of [
    "examples/generated/external-llm-dry-run",
    "http://127.0.0.1:5177/template-tests/external-llm-dry-run",
    "examples/generated/real-brief-trial",
    "http://127.0.0.1:5177/template-tests/real-brief-trial",
  ]) {
    if (!source.includes(requiredText)) {
      fail(`${docPath} missing Phase 9/10 proof reference: ${requiredText}`);
    }
  }
}

const phase9Compliance = fs.readFileSync(path.join(root, "examples/generated/external-llm-dry-run/compliance-checklist.md"), "utf8");
for (const requiredText of [
  "Started from `AI_START_HERE.md`",
  "Used approved template `templates/web-page-brief.md`",
  "Used only approved component IDs from `registry/components.json`",
  "Excluded global chrome from the generated body",
  "Did not import from `/Components/`",
  "/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION",
  "RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/",
]) {
  if (!phase9Compliance.includes(requiredText)) {
    fail(`Phase 9 compliance checklist missing required detail: ${requiredText}`);
  }
}

const phase9HumanApproval = fs.readFileSync(path.join(root, "examples/generated/external-llm-dry-run/human-approval-record.md"), "utf8");
for (const requiredText of [
  "http://127.0.0.1:5177/template-tests/external-llm-dry-run",
  "Approved",
  "Approved by the user on 2026-05-20",
  "Needs new component request",
]) {
  if (!phase9HumanApproval.includes(requiredText)) {
    fail(`Phase 9 human approval record missing required detail: ${requiredText}`);
  }
}
for (const pendingText of ["Ready for human review", "Not yet approved"]) {
  if (phase9HumanApproval.includes(pendingText)) {
    fail(`Phase 9 human approval record still contains pending approval text: ${pendingText}`);
  }
}

const phase9Report = fs.readFileSync(path.join(root, "PHASE_9_REPORT.md"), "utf8");
for (const requiredText of [
  "examples/generated/external-llm-dry-run/",
  "http://127.0.0.1:5177/template-tests/external-llm-dry-run",
  "body-only",
  "Protected Source Confirmation",
  "Phase 2/3/4/5/6/7/7B/7C/7D/7E/7F/8A/8B/8C/8D/8E/8F/9 validation passed.",
  "Approved",
  "Approved by the user on 2026-05-20",
  "Rating: 10/10",
]) {
  if (!phase9Report.includes(requiredText)) {
    fail(`PHASE_9_REPORT.md missing required detail: ${requiredText}`);
  }
}
for (const pendingText of ["Ready for human review", "not yet an approved future-page reference"]) {
  if (phase9Report.includes(pendingText)) {
    fail(`PHASE_9_REPORT.md still contains pending approval text: ${pendingText}`);
  }
}

const externalLlmHandoff = fs.readFileSync(path.join(root, "EXTERNAL_LLM_HANDOFF.md"), "utf8");
for (const requiredText of [
  "AI_START_HERE.md",
  "body-only",
  "registry/components.json",
  "library/src/components/",
  "examples/generated/real-brief-trial/",
  "http://127.0.0.1:5177/template-tests/real-brief-trial",
  "templates/new-component-request.md",
  "/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION",
  "RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/",
  "/Components/",
]) {
  if (!externalLlmHandoff.includes(requiredText)) {
    fail(`EXTERNAL_LLM_HANDOFF.md missing required Phase 10 detail: ${requiredText}`);
  }
}

const phase10Compliance = fs.readFileSync(path.join(root, "examples/generated/real-brief-trial/compliance-checklist.md"), "utf8");
for (const requiredText of [
  "Started from `AI_START_HERE.md`",
  "Used approved template `templates/web-page-brief.md`",
  "Used only approved component IDs from `registry/components.json`",
  "Excluded global chrome from the generated body",
  "Did not import from `/Components/`",
  "/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION",
  "RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/",
]) {
  if (!phase10Compliance.includes(requiredText)) {
    fail(`Phase 10 compliance checklist missing required detail: ${requiredText}`);
  }
}

const phase10HumanApproval = fs.readFileSync(path.join(root, "examples/generated/real-brief-trial/human-approval-record.md"), "utf8");
for (const requiredText of [
  "http://127.0.0.1:5177/template-tests/real-brief-trial",
  "Pending human browser review",
  "Needs new component request",
]) {
  if (!phase10HumanApproval.includes(requiredText)) {
    fail(`Phase 10 human approval record missing required detail: ${requiredText}`);
  }
}

const phase10Report = fs.readFileSync(path.join(root, "PHASE_10_REPORT.md"), "utf8");
for (const requiredText of [
  "EXTERNAL_LLM_HANDOFF.md",
  "examples/generated/real-brief-trial/",
  "http://127.0.0.1:5177/template-tests/real-brief-trial",
  "body-only",
  "Protected Source Confirmation",
  "Phase 2/3/4/5/6/7/7B/7C/7D/7E/7F/8A/8B/8C/8D/8E/8F/9/10 validation passed.",
  "Pending human browser review",
  "Rating: 9/10",
]) {
  if (!phase10Report.includes(requiredText)) {
    fail(`PHASE_10_REPORT.md missing required detail: ${requiredText}`);
  }
}

const markdownOutlinePack = fs.readFileSync(path.join(root, "LLM_MARKDOWN_OUTLINE_PACK.md"), "utf8");
for (const requiredText of [
  "Markdown outline mode only",
  "Do not create TSX, JSX, HTML, CSS",
  "AI_START_HERE.md",
  "EXTERNAL_LLM_HANDOFF.md",
  "READ_FIRST_AI.md",
  "PREFLIGHT.md",
  "tokens/design-tokens.json",
  "registry/components.json",
  "templates/README.md",
  "specPath",
  "libraryPath",
  "examples/approved",
  "examples/blocked",
  "body-only",
  "navbar-glassmorphism",
  "footer",
  "templates/new-component-request.md",
  "Component Sequence Using Approved Registry IDs",
  "Component Evidence Table",
  "Ready For TSX Build",
]) {
  if (!markdownOutlinePack.includes(requiredText)) {
    fail(`LLM_MARKDOWN_OUTLINE_PACK.md missing required Phase 11 detail: ${requiredText}`);
  }
}

for (const forbiddenText of [
  "create the TSX now",
  "generate implementation code immediately",
  "invent a component",
]) {
  if (markdownOutlinePack.toLowerCase().includes(forbiddenText)) {
    fail(`LLM_MARKDOWN_OUTLINE_PACK.md contains forbidden outline-mode instruction: ${forbiddenText}`);
  }
}

for (const docPath of [
  "AI_START_HERE.md",
  "EXTERNAL_LLM_HANDOFF.md",
  "READ_FIRST_AI.md",
  "PREFLIGHT.md",
  "templates/README.md",
  "registry/README.md",
  ".claude/commands/loyaltymaster-preflight.md",
  ".claude/commands/loyaltymaster-validate.md",
]) {
  const source = fs.readFileSync(path.join(root, docPath), "utf8");
  if (!source.includes("LLM_MARKDOWN_OUTLINE_PACK.md")) {
    fail(`${docPath} missing Phase 11 Markdown outline pack reference`);
  }
}

const phase11Report = fs.readFileSync(path.join(root, "PHASE_11_REPORT.md"), "utf8");
for (const requiredText of [
  "LLM_MARKDOWN_OUTLINE_PACK.md",
  "Markdown only",
  "registry/components.json",
  "specPath",
  "libraryPath",
  "body-only",
  "templates/new-component-request.md",
  "Phase 2/3/4/5/6/7/7B/7C/7D/7E/7F/8A/8B/8C/8D/8E/8F/9/10/11 validation passed.",
  "Rating: 10/10",
]) {
  if (!phase11Report.includes(requiredText)) {
    fail(`PHASE_11_REPORT.md missing required detail: ${requiredText}`);
  }
}

const phase12Audit = fs.readFileSync(path.join(root, "PHASE_12_CONVERSION_READINESS_AUDIT.md"), "utf8");
for (const requiredText of [
  "https://loyaltymaster.com/wp-sitemap.xml",
  "URLs discovered from sitemap: 42",
  "Browser responses: 42 HTTP 200",
  "Ready with approved components",
  "Ready with approved template but needs content mapping",
  "Missing component required",
  "Missing template required",
  "Do not convert / utility endpoint",
  "article-body",
  "legal-document-body",
  "contact-form-section",
  "newsletter-signup-section",
  "booking-demo-request-section",
  "branded-card-application-form",
  "thank-you-confirmation-section",
  "faq-index-search",
  "blog-article-index",
  "industry-use-case-card-grid",
  "pricing-page-matrix",
  "external-embed-panel",
  "knowledge-base-index",
  "Do not start full-site conversion yet",
  "navbar-glassmorphism",
  "footer",
  "Rating: 9/10",
]) {
  if (!phase12Audit.includes(requiredText)) {
    fail(`PHASE_12_CONVERSION_READINESS_AUDIT.md missing required detail: ${requiredText}`);
  }
}

for (const url of [
  "https://loyaltymaster.com/privacy-policy/",
  "https://loyaltymaster.com/digital-reward-cards-loyalty-app/",
  "https://loyaltymaster.com/price-list/",
  "https://loyaltymaster.com/contact-us/",
  "https://loyaltymaster.com/terms-of-use/",
  "https://loyaltymaster.com/acceptable-use-policy/",
  "https://loyaltymaster.com/subscription-agreement/",
  "https://loyaltymaster.com/features/",
  "https://loyaltymaster.com/stamp-reward-card/",
  "https://loyaltymaster.com/ideal-for/",
  "https://loyaltymaster.com/about-us/",
  "https://loyaltymaster.com/cookie-policy/",
  "https://loyaltymaster.com/core-values-and-mission-statement/",
  "https://loyaltymaster.com/book-a-virtual-meeting/",
  "https://loyaltymaster.com/some-key-details-about-loyaltymaster/",
  "https://loyaltymaster.com/blog/",
  "https://loyaltymaster.com/",
  "https://loyaltymaster.com/get-your-own-customized-digital-reward-card/",
  "https://loyaltymaster.com/thank-you-page-branded-card-application/",
  "https://loyaltymaster.com/digital-membership-card/",
  "https://loyaltymaster.com/digital-stamp-card-5-reasons-to-ditch-paper-stamp-cards/",
  "https://loyaltymaster.com/any-questions/",
  "https://loyaltymaster.com/thank-you-page-virtual-meeting/",
  "https://loyaltymaster.com/cookie-policy-2/",
  "https://loyaltymaster.com/join-email-newsletter-form/",
  "https://loyaltymaster.com/thank-you-page-join-email-list/",
  "https://loyaltymaster.com/frequently-asked-questions-loyaltymaster/",
  "https://loyaltymaster.com/what-is-loyaltymaster/",
  "https://loyaltymaster.com/digital-loyalty-card/",
  "https://loyaltymaster.com/paper-stamp-cards-are-costing-you-customers/",
  "https://loyaltymaster.com/start-sending-push-notifications-to-your-customers-without-any-app/",
  "https://loyaltymaster.com/encyclopedia/",
  "https://loyaltymaster.com/what-is-electronic-rewards/",
  "https://loyaltymaster.com/why-keeping-customers-beats-chasing-new-ones/",
  "https://loyaltymaster.com/know-your-customers-and-keep-them/",
  "https://loyaltymaster.com/the-complete-electronic-rewards-solution/",
  "https://loyaltymaster.com/electronic-rewards-turns-shoppers-into-regulars/",
  "https://loyaltymaster.com/our-turnkey-solution-how-it-works/",
  "https://loyaltymaster.com/start-sending-push-notifications-no-app-required/",
  "https://loyaltymaster.com/electronic-rewards-2/",
  "https://loyaltymaster.com/elementor-landing-page-143/",
  "https://loyaltymaster.com/bitforms/bitforms-file/",
]) {
  if (!phase12Audit.includes(url)) {
    fail(`PHASE_12_CONVERSION_READINESS_AUDIT.md missing audited URL: ${url}`);
  }
}

const phase12Report = fs.readFileSync(path.join(root, "PHASE_12_REPORT.md"), "utf8");
for (const requiredText of [
  "PHASE_12_CONVERSION_READINESS_AUDIT.md",
  "Sitemap URLs audited: 42",
  "Missing Lego Backlog",
  "Full `loyaltymaster.com` conversion should wait",
  "/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION",
  "RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/",
  "/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/Components",
  "Phase 2/3/4/5/6/7/7B/7C/7D/7E/7F/8A/8B/8C/8D/8E/8F/9/10/11/12 validation passed.",
  "Rating: 9/10",
]) {
  if (!phase12Report.includes(requiredText)) {
    fail(`PHASE_12_REPORT.md missing required detail: ${requiredText}`);
  }
}

const pricingSpec = fs.readFileSync(path.join(root, "specs/components/pricing-section.md"), "utf8");
if (!pricingSpec.includes("Center the plan cards when the pricing recipe renders fewer than a full row")) {
  fail("pricing-section spec must document Phase 8C pricing card centering rule");
}
const libraryStyles = fs.readFileSync(path.join(root, "library/src/styles.css"), "utf8");
if (!libraryStyles.includes("repeat(auto-fit, minmax(min(100%, 300px), 315px))") || !libraryStyles.includes("justify-content: center")) {
  fail("library/src/styles.css must center short pricing card rows");
}

const phase8BResultsPath = path.join(root, "showcase/app/artifacts/phase-10/template-fixture-results.json");
if (!fs.existsSync(phase8BResultsPath)) {
  fail("Missing Phase 10 template fixture results artifact: showcase/app/artifacts/phase-10/template-fixture-results.json");
} else {
  const phase8BResults = readJson("showcase/app/artifacts/phase-10/template-fixture-results.json");
  if (phase8BResults.phase !== "10") {
    fail("Phase 10 template fixture results must declare phase 10");
  }
  if (phase8BResults.fixtureCount !== phase8BTemplateFixtures.length) {
    fail(`Phase 10 template fixture results must include ${phase8BTemplateFixtures.length} fixtures`);
  }
  if (!Array.isArray(phase8BResults.results) || phase8BResults.results.length !== phase8BTemplateFixtures.length * 2) {
    fail("Phase 10 template fixture results must include desktop and mobile results for each fixture");
  } else {
    for (const fixture of phase8BTemplateFixtures) {
      for (const viewport of ["desktop", "mobile"]) {
        const result = phase8BResults.results.find((item) => item.fixture === fixture.id && item.viewport === viewport);
        if (!result) {
          fail(`Phase 10 missing ${fixture.id} ${viewport} fixture result`);
        } else if (!result.passed) {
          fail(`Phase 10 ${fixture.id} ${viewport} fixture result failed`);
        } else {
          for (const shellComponent of ["navbar-glassmorphism", "footer"]) {
            if (result.expectedComponents?.includes(shellComponent)) {
              fail(`Phase 10 ${fixture.id} ${viewport} result includes forbidden body-only shell component: ${shellComponent}`);
            }
          }
          for (const componentId of fixture.components) {
            if (!result.expectedComponents?.includes(componentId)) {
              fail(`Phase 10 ${fixture.id} ${viewport} result missing expected body component: ${componentId}`);
            }
          }
        }
      }
    }
  }
}

for (const fixture of phase8BTemplateFixtures) {
  for (const viewport of ["desktop", "mobile"]) {
    const artifactPath = `showcase/app/artifacts/phase-10/${fixture.id}-${viewport}.png`;
    const artifactAbsolutePath = path.join(root, artifactPath);
    if (!fs.existsSync(artifactAbsolutePath)) {
      fail(`Missing Phase 10 rendered template artifact: ${artifactPath}`);
    } else if (fs.statSync(artifactAbsolutePath).size === 0) {
      fail(`Phase 10 rendered template artifact is empty: ${artifactPath}`);
    }
  }
}

if (!phase7VisualResults) {
  fail("Missing Phase 7C visual results artifact: showcase/app/artifacts/phase-7c/visual-results.json");
} else {
  if (phase7VisualResults.phase !== "7C") {
    fail("Phase 7 visual results must declare phase 7C");
  }
  if (!phase7VisualResults.captureMode?.includes("?capture=<id>")) {
    fail("Phase 7C visual results must record component capture mode");
  }
  if (!phase7VisualResults.runtime?.fontRuntime?.checks?.every((check) => check.loaded && check.loadedFaces?.length > 0)) {
    fail("Phase 7C visual results must record loaded Rodger/Onest font checks");
  }
  if (phase7VisualResults.runtime?.browserName !== "chromium") {
    fail("Phase 7C visual results must record the Chromium runtime");
  }
  if (phase7VisualResults.runtime?.deviceScaleFactor !== 1) {
    fail("Phase 7C visual results must record deviceScaleFactor 1");
  }
  if (!phase7VisualResults.runtime?.screenshotTiming?.includes("document.fonts.ready")) {
    fail("Phase 7C visual results must record font-ready screenshot timing");
  }
  if (phase7VisualResults.gatedCount !== registry.components.length) {
    fail(`Phase 7 visual results must gate all ${registry.components.length} components`);
  }
  if (phase7VisualResults.skippedCount !== 0) {
    fail("Phase 7 visual results must have zero skipped components");
  }
  if (phase7VisualResults.failedCount !== 0) {
    fail("Phase 7 visual results must have zero failed gated components");
  }
  if (!Array.isArray(phase7VisualResults.results) || phase7VisualResults.results.length !== registry.components.length) {
    fail(`Phase 7 visual results must include exactly ${registry.components.length} component results`);
  }
}

if (!phase7InteractionResults) {
  fail("Missing Phase 7E interaction results artifact: showcase/app/artifacts/phase-7d/interaction-results.json");
} else {
  if (phase7InteractionResults.phase !== "7E") {
    fail("Phase 7 interaction results must declare phase 7E after interaction fixes");
  }
  if (!Array.isArray(phase7InteractionResults.results) || phase7InteractionResults.results.length !== registry.components.length) {
    fail(`Phase 7E interaction results must include exactly ${registry.components.length} component results`);
  } else {
    for (const component of registry.components) {
      const interactionResult = phase7InteractionResults.results.find((result) => result.id === component.id);
      if (!interactionResult) {
        fail(`${component.id} missing Phase 7E interaction result`);
      } else if (interactionResult.classification !== "Pass") {
        fail(`${component.id} Phase 7E interaction gate must pass, found ${interactionResult.classification}`);
      }
    }
  }
}

if (phase7ProductionTargets.version !== "phase-7f") {
  fail("phase7f-production-targets.json must declare version phase-7f");
}
if (!phase7ProductionTargets.metric?.includes("live sendPUSH runtime")) {
  fail("phase7f-production-targets.json metric must describe live sendPUSH runtime comparison");
}
if (!Array.isArray(phase7ProductionTargets.viewports) || phase7ProductionTargets.viewports.length < 2) {
  fail("phase7f-production-targets.json must include desktop and mobile viewports");
}
if (!phase7ProductionResults) {
  fail("Missing Phase 7F production fidelity results artifact: showcase/app/artifacts/phase-7f/production-fidelity-results.json");
} else {
  if (phase7ProductionResults.phase !== "7F") {
    fail("Phase 7F production results must declare phase 7F");
  }
  if (phase7ProductionResults.gatedComponentCount !== registry.components.length) {
    fail(`Phase 7F production fidelity must gate all ${registry.components.length} components`);
  }
  if (phase7ProductionResults.failedCount !== 0) {
    fail("Phase 7F production fidelity results must have zero failed viewport results");
  }
  if (!Array.isArray(phase7ProductionResults.results) || phase7ProductionResults.results.length !== registry.components.length * phase7ProductionTargets.viewports.length) {
    fail(`Phase 7F production fidelity results must include desktop and mobile results for all ${registry.components.length} components`);
  } else {
    for (const component of registry.components) {
      for (const viewport of phase7ProductionTargets.viewports) {
        const result = phase7ProductionResults.results.find((item) => item.id === component.id && item.viewport === viewport.name);
        if (!result) {
          fail(`${component.id} missing Phase 7F production fidelity result for ${viewport.name}`);
        } else if (!result.passed) {
          fail(`${component.id} Phase 7F production fidelity result failed for ${viewport.name}`);
        }
      }
    }
  }
}

const phase7Docs = [
  "READ_FIRST_AI.md",
  "PREFLIGHT.md",
  "registry/README.md",
  "KNOWN_ISSUES.md",
];
for (const docPath of phase7Docs) {
  const source = fs.readFileSync(path.join(root, docPath), "utf8");
  if (!source.includes("Phase 7C")) {
    fail(`${docPath} must reference Phase 7C visual verification`);
  }
  if (!source.includes("Phase 7E")) {
    fail(`${docPath} must reference Phase 7E interaction verification`);
  }
  if (!source.includes("Phase 7F")) {
    fail(`${docPath} must reference Phase 7F production fidelity verification`);
  }
}

const phase7CReport = fs.readFileSync(path.join(root, "PHASE_7C_REPORT.md"), "utf8");
for (const requiredText of [
  "tokens/fonts.css",
  "intentional-reference-regeneration",
  "deviceScaleFactor",
  "Phase 7C visual fidelity verification passed",
  "assets/screenshots/historical-phase-7b/",
  "showcase/app/artifacts/phase-7c/browser-review/",
]) {
  if (!phase7CReport.includes(requiredText)) {
    fail(`PHASE_7C_REPORT.md missing required report detail: ${requiredText}`);
  }
}

const phase7BReview = fs.readFileSync(path.join(root, "PHASE_7B_VISUAL_REVIEW.md"), "utf8");
for (const requiredText of [
  "Native component capture",
  "640x360",
  "gatedCount",
  "skippedCount",
  "failedCount",
]) {
  if (!phase7BReview.includes(requiredText)) {
    fail(`PHASE_7B_VISUAL_REVIEW.md missing required review detail: ${requiredText}`);
  }
}

const phase7FReport = fs.readFileSync(path.join(root, "PHASE_7F_PRODUCTION_FIDELITY_REPORT.md"), "utf8");
for (const requiredText of [
  "npm run verify:production-fidelity",
  "phase7f-production-targets.json",
  "production-fidelity-results.json",
  "20 components across 2 viewports",
  "protected production replica",
]) {
  if (!phase7FReport.includes(requiredText)) {
    fail(`PHASE_7F_PRODUCTION_FIDELITY_REPORT.md missing required report detail: ${requiredText}`);
  }
}

if (!process.exitCode) {
  console.log("Phase 2/3/4/5/6/7/7B/7C/7D/7E/7F/8A/8B/8C/8D/8E/8F/9/10/11/12 validation passed.");
}
