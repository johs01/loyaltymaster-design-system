// Generate tokens/tokens.css, tokens/tokens.d.ts, and tokens/tailwind.preset.cjs
// from tokens/design-tokens.json (DTCG). The JSON is the single source of
// truth; never hand-edit the three exports. Use --check to verify without
// writing (used by the validators).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(fs.readFileSync(path.join(root, "tokens", "design-tokens.json"), "utf8"));

const UNQUOTED_FAMILIES = new Set(["Arial", "sans-serif", "serif", "monospace"]);

function cssFontStack(families) {
  return families.map((f) => (UNQUOTED_FAMILIES.has(f) ? f : `"${f}"`)).join(", ");
}

function zero(px) {
  return px === "0px" ? "0" : px;
}

function cssShadow(v) {
  // ponytail: spread is dropped when 0 unless blur is 0 (matches the approved
  // hand-written output byte-for-byte); revisit if a non-zero spread appears.
  const parts = [zero(v.offsetX), zero(v.offsetY), zero(v.blur)];
  if (v.spread !== "0px" || v.blur === "0px") parts.push(zero(v.spread));
  parts.push(v.color);
  return parts.join(" ");
}

function cssValue(leaf) {
  const v = leaf.$value;
  if (Array.isArray(v)) {
    if (v.every((x) => typeof x === "number")) return `cubic-bezier(${v.join(", ")})`;
    return cssFontStack(v);
  }
  if (typeof v === "object" && v !== null) {
    if ("offsetX" in v) return cssShadow(v);
    return null; // composite (typography/component) tokens have no CSS variable
  }
  return String(v);
}

// Collect every leaf with a cssVariable, in document order.
const leaves = [];
(function walk(node) {
  if (typeof node !== "object" || node === null) return;
  if ("$value" in node) {
    const cssVar = node.$extensions?.cssVariable;
    if (cssVar) {
      const value = cssValue(node);
      if (value !== null) leaves.push({ cssVar, value });
    }
    return;
  }
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith("$")) continue;
    walk(child);
  }
})(tokens);

// Paragraph break whenever the css-var category (--lm-<category>-...) changes.
function category(cssVar) {
  return cssVar.split("-")[3] ?? cssVar;
}

let css = "/*\n * Loyaltymaster/sendPUSH Phase 2 generated token output.\n * Source of truth: tokens/design-tokens.json\n */\n\n:root {\n";
let previousCategory = null;
for (const { cssVar, value } of leaves) {
  const cat = category(cssVar);
  if (previousCategory !== null && cat !== previousCategory) css += "\n";
  css += `  ${cssVar}: ${value};\n`;
  previousCategory = cat;
}
css += "}\n";

const groupNames = Object.keys(tokens).filter((k) => !k.startsWith("$"));
const dts = `export type TokenPrimitive = string | number | boolean;

export type TokenValue =
  | TokenPrimitive
  | TokenPrimitive[]
  | {
      [key: string]: TokenValue;
    };

export interface DesignToken<TValue extends TokenValue = TokenValue> {
  $value: TValue;
  $type: string;
  $description?: string;
  $extensions?: Record<string, unknown>;
}

export interface DesignTokenGroup {
  $type?: string;
  $description?: string;
  [key: string]: DesignToken | DesignTokenGroup | string | undefined;
}

export interface DesignTokens {
  $schema: string;
  $description?: string;
${groupNames.map((g) => `  ${g}: DesignTokenGroup;`).join("\n")}
}

export declare const designTokens: DesignTokens;
`;

const durations = tokens.motion.duration;
const fontsJs = (families) => families.map((f) => `"${f}"`).join(", ");
const preset = `/**
 * Loyaltymaster/sendPUSH Tailwind preset generated from Phase 2 tokens.
 * Tailwind 3 compatible. Source of truth: tokens/design-tokens.json.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        lm: {
          ink: "var(--lm-color-ink)",
          muted: "var(--lm-color-text-muted)",
          subtle: "var(--lm-color-text-subtle)",
          white: "var(--lm-color-surface-white)",
          peach: "var(--lm-color-background-peach)",
          cyan: "var(--lm-color-background-cyan)",
          salmon: "var(--lm-color-background-salmon)",
          dark: "var(--lm-color-background-dark)",
          panel: {
            light: "var(--lm-color-surface-panel-light)",
            gray: "var(--lm-color-surface-panel-gray)",
          },
          accent: {
            yellow: "var(--lm-color-accent-yellow)",
            orange: "var(--lm-color-accent-orange)",
            blue: "var(--lm-color-accent-blue)",
            tagYellow: "var(--lm-color-accent-tag-yellow)",
          },
          feedback: {
            error: "var(--lm-color-feedback-error)",
            warning: "var(--lm-color-feedback-warning)",
            success: "var(--lm-color-feedback-success)",
            info: "var(--lm-color-feedback-info)",
          },
        },
      },
      fontFamily: {
        rodger: [${fontsJs(tokens.fontFamily.display.$value)}],
        onest: [${fontsJs(tokens.fontFamily.body.$value)}],
        wordmark: [${fontsJs(tokens.fontFamily.wordmark.$value)}],
      },
      borderRadius: {
        "lm-pill": "var(--lm-radius-pill)",
        "lm-card": "var(--lm-radius-card-primary)",
        "lm-card-secondary": "var(--lm-radius-card-secondary)",
        "lm-input": "var(--lm-radius-input-tenant)",
        "lm-input-compact": "var(--lm-radius-input-compact)",
      },
      boxShadow: {
        "lm-card": "var(--lm-shadow-card-base)",
        "lm-card-hover": "var(--lm-shadow-card-hover)",
        "lm-badge": "var(--lm-shadow-badge)",
        "lm-form": "var(--lm-shadow-form-shell)",
      },
      transitionDuration: {
        "lm-fast": "${durations.fast.$value}",
        "lm-base": "${durations.base.$value}",
        "lm-reveal": "${durations.reveal.$value}",
      },
      maxWidth: {
        "lm-main": "var(--lm-container-main)",
        "lm-focus": "var(--lm-container-focus)",
        "lm-cta": "var(--lm-container-cta)",
      },
    },
  },
};
`;

const outputs = [
  ["tokens/tokens.css", css],
  ["tokens/tokens.d.ts", dts],
  ["tokens/tailwind.preset.cjs", preset],
];

const check = process.argv.includes("--check");
let drift = 0;
for (const [rel, content] of outputs) {
  const abs = path.join(root, rel);
  const current = fs.existsSync(abs) ? fs.readFileSync(abs, "utf8") : "";
  if (current !== content) {
    drift += 1;
    if (check) console.error(`DRIFT: ${rel}`);
    else fs.writeFileSync(abs, content);
  }
}

if (check) {
  if (drift) {
    console.error(`FAIL: ${drift} token export(s) drift from design-tokens.json; run node scripts/generate-tokens.mjs`);
    process.exitCode = 1;
  } else {
    console.log("Token exports match design-tokens.json.");
  }
} else {
  console.log(drift ? `Regenerated ${drift} token export(s).` : "Token exports already up to date.");
}
