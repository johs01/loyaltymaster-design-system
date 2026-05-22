# Final Checklist: Landing Page Body

## Approval Status

Approved generated example package.

## Required Checks

- [x] Started from `AI_START_HERE.md`.
- [x] Used approved template `templates/landing-page.md`.
- [x] Used only approved component IDs from `registry/components.json`.
- [x] Read each selected component's current `specPath`.
- [x] Imported React components only from `library/src/components/` through the
  library index.
- [x] Used token names from `tokens/design-tokens.json`.
- [x] Checked approved examples in `examples/approved/`.
- [x] Checked blocked examples in `examples/blocked/`.
- [x] Excluded global chrome from the generated body.
- [x] Invented no new sections, cards, buttons, layouts, colors, radii,
  shadows, typography, animation, or interaction behavior.
- [x] Did not import from `/Components/`.
- [x] Did not edit or import from
  `/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION`.
- [x] Did not edit or import from
  `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/`.
- [x] Compared against `http://127.0.0.1:5177/template-tests/landing-page`.

## Required Commands Before Reuse

```bash
node scripts/validate-phase2.mjs
cd library && npm run typecheck
cd showcase/app && npm run typecheck
cd showcase/app && npm run verify:templates
cd showcase/app && npm run verify:showcase
```

## Human Approval Rule

This generated example is proof of workflow, not automatic publication
approval. A human must review the browser-rendered result for any future page
before it goes live.

