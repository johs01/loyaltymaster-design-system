# Phase 5 Report: Showcase And Rendered Smoke Verification

Date: 2026-05-18

## Summary

Phase 5 created an isolated React showcase app under `showcase/app`. The app
renders all 20 Wave 1 components from the Phase 4 library beside their approved
screenshot references, then verifies the gallery in browser automation across
desktop and mobile viewports.

The protected production replica was not modified.

## Files Created

- `showcase/app/package.json`
- `showcase/app/package-lock.json`
- `showcase/app/tsconfig.json`
- `showcase/app/vite.config.ts`
- `showcase/app/index.html`
- `showcase/app/src/App.tsx`
- `showcase/app/src/main.tsx`
- `showcase/app/src/specimens.tsx`
- `showcase/app/src/showcase.css`
- `showcase/app/src/vite-env.d.ts`
- `showcase/app/scripts/verify-showcase.mjs`
- `showcase/app/artifacts/phase-5/*.png`

## Files Updated

- `scripts/validate-phase2.mjs`
- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `registry/README.md`
- `KNOWN_ISSUES.md`

## Showcase Inventory

- 20 registry components have matching showcase specimen renderers.
- 20 component-level rendered smoke screenshots were captured.
- 2 full-page viewport screenshots were captured:
  - `showcase/app/artifacts/phase-5/phase5-desktop.png`
  - `showcase/app/artifacts/phase-5/phase5-mobile.png`

## Verification

Baseline commands:

```bash
node scripts/validate-phase2.mjs
cd library && npm run typecheck
```

Baseline outputs:

```text
Phase 2/3/4 validation passed.
```

Library typecheck exited with code 0.

Showcase dependency install:

```bash
cd showcase/app
npm install
```

The first install reported a Vite/esbuild dev-server advisory. Vite and
`@vitejs/plugin-react` were upgraded to the current safe versions, after which:

```bash
npm audit --omit=dev
```

returned:

```text
found 0 vulnerabilities
```

Showcase typecheck:

```bash
cd showcase/app
npm run typecheck
```

Result: exited with code 0.

Rendered smoke verification:

```bash
cd showcase/app
npm run verify:showcase
```

Result:

```text
Phase 5 showcase smoke passed for 20 components across 2 viewports.
```

The first browser smoke run exposed a real duplicate React/lucide resolution
problem when importing local library source. `showcase/app/vite.config.ts` now
aliases and dedupes `react`, `react-dom`, and `lucide-react` to the showcase app
dependencies.

Protected replica verification:

```bash
find 'RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION' -type f -exec stat -f '%m %N' {} \; | sort > /tmp/sendpush-phase5-before.txt
find 'RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION' -type f -exec stat -f '%m %N' {} \; | sort > /tmp/sendpush-phase5-after.txt
diff -u /tmp/sendpush-phase5-before.txt /tmp/sendpush-phase5-after.txt
```

Final result:

```text
PROTECTED_UNCHANGED_PHASE5_FINAL
```

## Validation Added

`scripts/validate-phase2.mjs` now validates Phase 2, Phase 3, Phase 4, and
Phase 5:

- required showcase app files exist
- `PHASE_5_REPORT.md` exists
- every registry component id has a matching showcase specimen renderer
- every registry component has a rendered Phase 5 artifact
- desktop and mobile full-page rendered smoke artifacts exist

## Deferred Work

- Pixel-diff visual regression remains deferred. Phase 5 is a rendered-smoke
  gate, not a pixel-perfect approval gate.
- Production adoption remains deferred. Nothing inside
  `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/` was modified.
- Future visual-polish work should compare the live components against approved
  screenshots and decide calibrated pixel thresholds only after intentional
  tuning.

## Rating

Rating: 9/10.

What would make it a 10: calibrated pixel-diff thresholds after the live
components are intentionally tuned closer to the approved screenshots.
