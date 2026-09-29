// Check that the design-system wordmark renders like the live loyaltymaster.com wordmark.
// Renders showcase/preview/wordmark-parity.html in headless Chrome at each captured width
// and compares computed typography and the rendered size of "Loyaltymaster" with
// scripts/fixtures/wordmark-live-2026-09-29.json (re-capture the fixture if the live site changes).
// Run from the repo root: node scripts/check-wordmark-parity.mjs   (CHROME=/path/to/chrome to override)
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const chrome = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const live = JSON.parse(fs.readFileSync(path.join(root, "scripts/fixtures/wordmark-live-2026-09-29.json"), "utf8"));
const page = pathToFileURL(path.join(root, "showcase/preview/wordmark-parity.html")).href;

// The live stack is `var(--font-lato), "Lato", sans-serif` = Lato, "Lato Fallback", Lato, sans-serif.
const families = (v) => [...new Set(v.split(",").map((f) => f.trim().replace(/"/g, "")))].join(", ");
const same = (a, b) => {
  const [x, y] = [parseFloat(a), parseFloat(b)];
  return /^-?[\d.]+(px)?$/.test(String(a)) && /^-?[\d.]+(px)?$/.test(String(b)) ? Math.abs(x - y) < 0.01 : a === b;
};
const COMPARE = {
  navBrand: ["padding-left", "color"],
  footBrand: ["padding-left", "color"],
  navLogo: null, footLogo: null, // every captured property except the layout-dependent box
  navText: null, footText: null,
};

let failures = 0;
for (const [width, expected] of Object.entries(live.widths)) {
  const run = spawnSync(chrome, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
    `--window-size=${width},900`, "--virtual-time-budget=5000", "--dump-dom", page], { encoding: "utf8" });
  const json = /<pre id="out"[^>]*>(.*?)<\/pre>/s.exec(run.stdout || "")?.[1];
  if (!json) { console.error(`${width}: no measurement (is Chrome at ${chrome}?)`, run.stderr?.slice(0, 300)); process.exit(2); }
  const got = JSON.parse(json.replace(/&quot;/g, '"').replace(/&amp;/g, "&"));
  const diffs = [];
  if (!got.lato900) diffs.push("Lato 900 not loaded");
  for (const [key, props] of Object.entries(COMPARE)) {
    for (const prop of props ?? Object.keys(expected[key])) {
      if (prop === "w" && key.endsWith("Logo")) continue;
      let [e, g] = [expected[key][prop], got[key][prop]];
      if (prop === "font-family") [e, g] = [families(e), families(g)];
      if (!same(e, g)) diffs.push(`${key}.${prop}: live ${e} | design system ${g}`);
    }
  }
  failures += diffs.length;
  console.log(`${width}px: ${diffs.length ? "FAIL\n  " + diffs.join("\n  ") : "ok"}`);
}
process.exit(failures ? 1 : 0);
