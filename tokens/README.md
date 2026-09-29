# Loyaltymaster Design Tokens

This folder contains the Phase 2 machine-readable token source and generated
platform outputs.

## Files

- `design-tokens.json`: canonical DTCG-style token source.
- `fonts.css`: canonical local font runtime for Rodger and Onest.
- `tokens.css`: CSS custom properties generated from the canonical tokens.
- `tokens.d.ts`: TypeScript declarations for consumers.
- `tailwind.preset.cjs`: Tailwind 3 preset that maps to CSS variables.
- `bricks-variables.json`: Bricks global-variables list for
  blog.loyaltymaster.com — a flat `[{ "name", "value" }]` array, one row per
  CSS variable, named as the blog's Bricks install names them (the CSS
  variable without its `--` prefix, e.g. `lm-color-ink`) with the same value
  as `tokens.css`. The blog uses no variable categories, so rows carry none.

## Source Of Truth

`design-tokens.json` (DTCG v1.0 JSON) is the single token source of truth for
both loyaltymaster.com and blog.loyaltymaster.com. `tokens.css`, `tokens.d.ts`,
`tailwind.preset.cjs`, and `bricks-variables.json` are generated exports —
edit `design-tokens.json` first, then run:

```bash
node scripts/generate-tokens.mjs
```

Never edit the exports ahead of the source; the validators fail on any drift
(`generate-tokens.mjs --check`). Keep `fonts.css` aligned with canonical files
in `assets/fonts/` when font assets change.
The current Phase 2 outputs were created from `DESIGN_SYSTEM.md`,
`withremy.css`, and `src/design-system/tokens.ts`.

Composite tokens (`typography.*` and `component.*`) are spec-level contracts:
they intentionally have no `cssVariable` and never reach `tokens.css`. Their
values are applied through the semantic classes in `library/src/styles.css`;
cite them as evidence, do not look for a matching CSS variable.

## Bricks Variables (Blog Sync)

`bricks-variables.json` is generation only: nothing here imports into
WordPress. Syncing the blog's Bricks variables from it is a separate,
approval-gated step in the blog workspace
(`/Users/johs777/LOYALTYMASTER/WORDPRESS/implementation/`), matched by `name`.

The blog's variable inventory is recorded in that workspace's
`source/token-map.json`. This one-line check (run from the repo root) asserts
the export contains every variable listed there:

```bash
node -e 'const a=require("node:assert"),n=new Set(require("./tokens/bricks-variables.json").map(v=>v.name)),m=require("/Users/johs777/LOYALTYMASTER/WORDPRESS/implementation/source/token-map.json").variables;for(const v of m)a.ok(n.has(v.name.replace(/^--/,"")),v.name);console.log(`ok: all ${m.length} token-map variables present`)'
```

Known differences from the blog's install as of 2026-09-28 (none changes how
anything renders):

- Seven values differ in formatting only: the export quotes single-word font
  families (`"Onest"`, `"Rodger"`, `"Lato"`) and writes shadow zeros as `0`
  with the zero spread dropped, exactly like `tokens.css`; the blog stores
  `Onest` and `0px 8px 20px 0px ...`.
- The export adds `lm-color-feedback-error-text` and
  `lm-color-feedback-info-text` (new 2026-09-28). `lm-color-text-secondary`
  already exists on the blog under the same name and value.
- The blog carries two variables that have no token here:
  `lm-color-line` (`rgba(48, 33, 39, 0.1)`) and `lm-color-line-strong`
  (`rgba(48, 33, 39, 0.18)`). See `KNOWN_ISSUES.md`.

## Contrast Check

`node scripts/check-contrast.mjs` recomputes every contrast ratio that
`DESIGN_SYSTEM.md` states about colour tokens (WCAG relative luminance) from
`design-tokens.json`, and fails if a documented pass/fail claim stops holding.
`validate-phase2.mjs` runs it.

## Validation

Run:

```bash
node scripts/validate-phase2.mjs
```

The validator checks that required token groups exist, derived outputs contain
expected variables/types, the registry entries are complete, and protected raw
paths still resolve. The component inventory itself lives only in
`registry/components.json`.
