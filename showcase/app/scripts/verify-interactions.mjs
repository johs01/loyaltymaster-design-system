import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(scriptDir, "..");
const rootDir = path.resolve(appDir, "../..");
const resultsPath = path.join(appDir, "artifacts/phase-7d/interaction-results.json");

const audit = spawnSync(process.execPath, [path.join(scriptDir, "phase7d-interaction-audit.mjs")], {
  cwd: appDir,
  stdio: "inherit",
});

if (audit.status !== 0) {
  process.exit(audit.status ?? 1);
}

if (!fs.existsSync(resultsPath)) {
  console.error(`Missing interaction audit results: ${path.relative(rootDir, resultsPath)}`);
  process.exit(1);
}

const results = JSON.parse(fs.readFileSync(resultsPath, "utf8"));
const componentResults = Array.isArray(results.results) ? results.results : [];
const nonPassing = componentResults.filter((result) => result.classification !== "Pass");

if (componentResults.length !== 20) {
  console.error(`Expected 20 interaction results, found ${componentResults.length}.`);
  process.exit(1);
}

if (nonPassing.length > 0) {
  for (const result of nonPassing) {
    console.error(`${result.id} interaction gate is ${result.classification}: ${result.recommendation}`);
  }
  process.exit(1);
}

console.log("Phase 7E interaction verification passed for 20 components; 0 fail; 0 partial.");
