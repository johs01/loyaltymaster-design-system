# Loyaltymaster Design Tokens

This folder contains the Phase 2 machine-readable token source and generated
platform outputs.

## Files

- `design-tokens.json`: canonical DTCG-style token source.
- `fonts.css`: canonical local font runtime for Rodger and Onest.
- `tokens.css`: CSS custom properties generated from the canonical tokens.
- `tokens.d.ts`: TypeScript declarations for consumers.
- `tailwind.preset.cjs`: Tailwind 3 preset that maps to CSS variables.

## Source Of Truth

Edit `design-tokens.json` first for token changes. Keep `fonts.css` aligned
with canonical files in `assets/fonts/` when font assets change. Derived outputs
must stay aligned with their source.
The current Phase 2 outputs were created from `DESIGN_SYSTEM.md`,
`withremy.css`, and `src/design-system/tokens.ts`.

## Validation

Run:

```bash
node scripts/validate-phase2.mjs
```

The validator checks that required token groups exist, derived outputs contain
expected variables/types, the registry has all 20 components, and protected raw
paths still resolve.
