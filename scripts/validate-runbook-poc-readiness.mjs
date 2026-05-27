import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const promotedComponentIds = [
  "article-body",
  "blog-article-index",
  "booking-demo-request-section",
  "branded-card-application-form",
  "coming-soon-section",
  "contact-form-section",
  "faq-index-search",
  "industry-use-case-card-grid",
  "knowledge-base-index",
  "legal-document-body",
  "newsletter-signup-section",
  "pricing-page-matrix",
  "thank-you-confirmation-section",
];

const requiredMetadataFields = [
  "variants",
  "slots",
  "visualReferencePath",
  "evidencePath",
  "markdownCallSyntax",
];

const requiredSpecHeadings = [
  "## Variants",
  "## Slots",
  "## Markdown Call Syntax",
];

const requiredFailureStages = [
  "INPUT_INVALID",
  "OUTLINE_SCHEMA_FAILED",
  "COMPONENT_NOT_APPROVED",
  "PROP_INVALID",
  "TOKEN_INVALID",
  "TEMPLATE_MISMATCH",
  "ROUTE_WIRING_FAILED",
  "SEO_METADATA_FAILED",
  "TYPESCRIPT_FAILED",
  "BUILD_FAILED",
  "VISUAL_FIDELITY_FAILED",
  "PRODUCTION_IMPORT_FAILED",
];

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
}

function readText(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function exists(relativePath) {
  if (typeof relativePath !== "string" || relativePath.length === 0) {
    return false;
  }
  return fs.existsSync(path.join(root, relativePath));
}

function walkFiles(startRelativePath, extensions) {
  const start = path.join(root, startRelativePath);
  if (!fs.existsSync(start)) {
    return [];
  }

  const entries = fs.readdirSync(start, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(start, entry.name);
    const relativePath = path.relative(root, absolutePath);
    if (entry.isDirectory()) {
      if (["node_modules", "dist", "build", ".next", ".cache"].includes(entry.name)) {
        continue;
      }
      files.push(...walkFiles(relativePath, extensions));
    } else if (extensions.some((extension) => entry.name.endsWith(extension))) {
      files.push(relativePath);
    }
  }

  return files;
}

const registry = readJson("registry/components.json");
const registryIds = registry.components.map((component) => component.id);
const indexSource = readText("library/src/index.ts");

if (registry.components.length !== 33) {
  fail(`registry/components.json must expose 33 approved components, found ${registry.components.length}`);
}

for (const id of promotedComponentIds) {
  if (!registryIds.includes(id)) {
    fail(`registry/components.json missing promoted MagicPath component: ${id}`);
  }
}

for (const component of registry.components) {
  for (const field of requiredMetadataFields) {
    if (component[field] === undefined) {
      fail(`${component.id} missing runbook readiness metadata field: ${field}`);
    }
  }

  if (!Array.isArray(component.variants) || component.variants.length === 0) {
    fail(`${component.id} must define at least one machine-readable variant`);
  }

  if (!Array.isArray(component.slots) || component.slots.length === 0) {
    fail(`${component.id} must define at least one machine-readable slot`);
  }

  for (const referencedPath of [component.visualReferencePath, component.evidencePath, component.libraryPath, component.specPath]) {
    if (!exists(referencedPath)) {
      fail(`${component.id} references missing path: ${referencedPath}`);
    }
  }

  if (typeof component.markdownCallSyntax !== "string" || !component.markdownCallSyntax.includes(component.id)) {
    fail(`${component.id} markdownCallSyntax must include the component id`);
  }

  const specSource = exists(component.specPath) ? readText(component.specPath) : "";
  for (const heading of requiredSpecHeadings) {
    if (!specSource.includes(heading)) {
      fail(`${component.id} spec missing runbook readiness heading: ${heading}`);
    }
  }

  const exportName = component.libraryPath.split("/").pop()?.replace(/\.tsx$/, "");
  if (exportName && !indexSource.includes(`export { ${exportName} }`)) {
    fail(`library/src/index.ts missing component export for ${exportName}`);
  }
  if (exportName && !new RegExp(`export type \\{[^}]*\\b${exportName}Props\\b[^}]*\\}`).test(indexSource)) {
    fail(`library/src/index.ts missing props export for ${exportName}Props`);
  }
}

for (const sourcePath of [
  ...walkFiles("library/src", [".ts", ".tsx"]),
  ...walkFiles("showcase/app/src", [".ts", ".tsx"]),
  ...walkFiles("examples/generated", [".tsx"]),
]) {
  const source = readText(sourcePath);
  if (/from\s+["'][^"']*Components\/|from\s+["'][^"']*\/Components\/|import\s*\([^)]*["'][^"']*Components\//.test(source)) {
    fail(`${sourcePath} must not import from raw /Components/`);
  }
}

const pocFiles = [
  "examples/runbook-poc/README.md",
  "examples/runbook-poc/runbook-a/page-brief.md",
  "examples/runbook-poc/runbook-a/markdown-outline.md",
  "examples/runbook-poc/runbook-a/diagnostic-report.md",
  "examples/runbook-poc/runbook-b/markdown-outline.md",
  "examples/runbook-poc/runbook-b/production-page-patch.json",
  "examples/runbook-poc/runbook-b/diagnostic-report.md",
  "examples/runbook-poc/end-to-end/page-brief.md",
  "examples/runbook-poc/end-to-end/markdown-outline.md",
  "examples/runbook-poc/end-to-end/production-page-patch.json",
  "examples/runbook-poc/end-to-end/diagnostic-report.md",
];

for (const pocFile of pocFiles) {
  if (!exists(pocFile)) {
    fail(`Missing Runbook POC fixture file: ${pocFile}`);
  }
}

for (const outlinePath of [
  "examples/runbook-poc/runbook-a/markdown-outline.md",
  "examples/runbook-poc/runbook-b/markdown-outline.md",
  "examples/runbook-poc/end-to-end/markdown-outline.md",
]) {
  if (!exists(outlinePath)) {
    continue;
  }
  const outline = readText(outlinePath);
  for (const requiredText of [
    "Design System Version:",
    "## Page Purpose",
    "## Target Audience",
    "## Conversion Goal",
    "## SEO Fields",
    "## Section Order",
    "## QA Checklist",
  ]) {
    if (!outline.includes(requiredText)) {
      fail(`${outlinePath} missing outline contract field: ${requiredText}`);
    }
  }
  for (const componentId of ["hero-main-section", "article-body", "contact-form-section", "thank-you-confirmation-section"]) {
    if (!outline.includes(`component: ${componentId}`)) {
      fail(`${outlinePath} missing approved component selection: ${componentId}`);
    }
  }
}

for (const patchPath of [
  "examples/runbook-poc/runbook-b/production-page-patch.json",
  "examples/runbook-poc/end-to-end/production-page-patch.json",
]) {
  if (!exists(patchPath)) {
    continue;
  }
  const patch = readJson(patchPath);
  for (const requiredFile of [
    "app/<route>/page.tsx",
    "src/site-pages/<page-slug>/<PageName>Page.tsx",
    "src/config/seoRoutes.json",
    "src/next/SitePage.tsx",
  ]) {
    if (!patch.targetFiles?.includes(requiredFile)) {
      fail(`${patchPath} missing route-agnostic target file shape: ${requiredFile}`);
    }
  }
  if (!patch.stopCondition?.includes("ready to import into /Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION")) {
    fail(`${patchPath} must declare the production import stop condition`);
  }
}

for (const reportPath of [
  "examples/runbook-poc/runbook-a/diagnostic-report.md",
  "examples/runbook-poc/runbook-b/diagnostic-report.md",
  "examples/runbook-poc/end-to-end/diagnostic-report.md",
]) {
  if (!exists(reportPath)) {
    continue;
  }
  const report = readText(reportPath);
  for (const requiredText of [
    "Input File:",
    "Runbook Used:",
    "Repo Commit SHA:",
    "Component Registry Checksum:",
    "Validation Commands Run:",
    "Pass/Fail Status:",
    "Recommended Next Fix:",
  ]) {
    if (!report.includes(requiredText)) {
      fail(`${reportPath} missing diagnostic field: ${requiredText}`);
    }
  }
  for (const failureStage of requiredFailureStages) {
    if (!report.includes(failureStage)) {
      fail(`${reportPath} missing failure stage code: ${failureStage}`);
    }
  }
}

if (!process.exitCode) {
  console.log("Runbook POC readiness validation passed.");
}
