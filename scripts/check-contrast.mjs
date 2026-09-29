// Recompute every WCAG contrast ratio the docs state about colour tokens
// (DESIGN_SYSTEM.md section 2, "Text And Contrast") straight from
// tokens/design-tokens.json, and fail if a documented pass/fail claim stops
// holding. WCAG 2.x relative luminance + (L1 + 0.05) / (L2 + 0.05).
// Run: node scripts/check-contrast.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(fs.readFileSync(path.join(root, "tokens", "design-tokens.json"), "utf8"));

// A claim may name a token path or, for values that live outside the token
// source (the production loyaltymaster.com override), a literal hex.
const hex = (ref) => (ref.startsWith("#") ? ref : ref.split(".").reduce((node, key) => node[key], tokens).$value);
const channel = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
function luminance(value) {
  const [r, g, b] = [1, 3, 5].map((i) => channel(parseInt(value.slice(i, i + 2), 16) / 255));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function ratio(a, b) {
  const [hi, lo] = [luminance(hex(a)), luminance(hex(b))].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const white = "color.surface.white";
const peach = "color.background.peach";
const cyan = "color.background.cyan";
const salmon = "color.background.salmon";
const panelLight = "color.surface.panelLight";
const panelGray = "color.surface.panelGray";
const bandYellow = "color.background.yellow";
const tagYellow = "color.accent.tagYellow";
const accentYellow = "color.accent.yellow";
const lightBands = [white, peach, cyan, salmon, panelLight, panelGray, bandYellow, tagYellow];

// [foreground, background, expectation] - "text" = >= 4.5 (AA normal text),
// "ui" = >= 3 (AA large text / 1.4.11 non-text), "fail-text" = < 4.5, "fail-ui" = < 3.
const claims = [
  ...lightBands.map((bg) => ["color.ink", bg, "text"]),
  ...lightBands.map((bg) => ["color.text.secondary", bg, "text"]),
  ["color.text.secondary", accentYellow, "fail-text"],
  ["color.text.muted", white, "fail-text"],
  ["color.text.muted", white, "ui"],
  ...[peach, cyan, salmon, panelLight, panelGray, tagYellow].map((bg) => ["color.text.muted", bg, "fail-ui"]),
  ["color.text.muted", tagYellow, "fail-text"],
  ["color.text.muted", accentYellow, "fail-ui"],
  ["color.text.subtle", white, "fail-ui"],
  ["color.accent.orange", white, "fail-ui"],
  ["color.accent.orange", peach, "fail-ui"],
  ["color.ink", white, "ui"],
  ["color.ink", peach, "ui"],
  ["color.feedback.error", white, "fail-text"],
  ["color.feedback.errorText", white, "text"],
  ["color.feedback.errorText", peach, "text"],
  ["color.feedback.errorText", cyan, "text"],
  ["color.feedback.errorText", salmon, "fail-text"],
  ["color.feedback.info", white, "text"],
  ["color.feedback.info", peach, "fail-text"],
  ["color.feedback.info", cyan, "fail-text"],
  ["color.feedback.infoText", white, "text"],
  ["color.feedback.infoText", peach, "text"],
  ["color.feedback.infoText", cyan, "text"],
  ["color.feedback.infoText", salmon, "text"],
  ["color.accent.blue", white, "fail-text"],
  ["color.feedback.warning", white, "fail-text"],
  ["color.feedback.success", white, "fail-text"],
  ["color.surface.white", "color.ink", "text"],
  // Production loyaltymaster.com overrides --wr-text-muted to #6f696d
  // (Clone Codex src/app/globals.css); DESIGN_SYSTEM.md quotes these.
  ["#6f696d", white, "text"],
  ["#6f696d", salmon, "text"],
];

const tests = {
  text: (r) => r >= 4.5,
  ui: (r) => r >= 3,
  "fail-text": (r) => r < 4.5,
  "fail-ui": (r) => r < 3,
};

let failures = 0;
const seen = new Set();
for (const [fg, bg, expectation] of claims) {
  const r = ratio(fg, bg);
  const ok = tests[expectation](r);
  if (!ok) failures += 1;
  const key = `${fg}|${bg}`;
  const line = `${ok ? "ok  " : "FAIL"} ${fg} (${hex(fg)}) on ${bg} (${hex(bg)}): ${r.toFixed(2)}:1 expected ${expectation}`;
  if (!ok) console.error(line);
  else if (!seen.has(key)) console.log(line);
  seen.add(key);
}

if (failures) {
  console.error(`FAIL: ${failures} documented contrast claim(s) no longer hold.`);
  process.exitCode = 1;
} else {
  console.log(`Contrast claims hold (${claims.length} checks).`);
}
