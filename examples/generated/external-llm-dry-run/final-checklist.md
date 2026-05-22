# Final Checklist: External LLM Dry Run

## Approval Status

Approved.

## Required Checks

- [x] Started from `AI_START_HERE.md`.
- [x] Used approved template `templates/web-page-brief.md`.
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
- [x] Prepared for browser review at
  `http://127.0.0.1:5177/template-tests/external-llm-dry-run`.

## Required Commands Before Reuse

```bash
node scripts/validate-phase2.mjs
cd library && npm run typecheck
cd showcase/app && npm run typecheck
cd showcase/app && npm run verify:templates
cd showcase/app && npm run verify:showcase
```

## Human Approval Rule

This dry-run example was approved by the user on 2026-05-20 after browser
review of `http://127.0.0.1:5177/template-tests/external-llm-dry-run`.
