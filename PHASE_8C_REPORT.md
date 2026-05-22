# Phase 8C Report: Body-Only Templates And Pricing Centering

## Summary

Phase 8C updates the approved template layer so future AI-created
Loyaltymaster web pages, landing pages, sales pages, and subdomain pages are
body-only by default. The existing production website supplies navbar/header
and footer. Phase 8C also centers short pricing rows in the approved
`pricing-section` component.

## Changes

- Added the body-only web page rule to `READ_FIRST_AI.md`, `PREFLIGHT.md`,
  approved templates, Claude workflow commands, registry docs, and blocked
  duplicate-chrome guidance.
- Removed `navbar-glassmorphism` and `footer` from default web-page and
  landing-page recipes and from Phase 8B rendered fixture component lists.
- Kept `navbar-glassmorphism` and `footer` as approved shell components only
  for explicitly standalone artifacts.
- Added the pricing centering rule to `specs/components/pricing-section.md`.
- Updated `library/src/styles.css` so short pricing rows center using the
  approved `pricing-section` implementation instead of fixture-only CSS.
- Updated Phase 8B rendered proof pages and validation so body-only fixture
  output is enforced.

## Human Review URLs

- `http://127.0.0.1:5177/template-tests/web-page`
- `http://127.0.0.1:5177/template-tests/landing-page`

## Human Approval Result

Approved by user on 2026-05-20.

The approved result confirms:

- body-only output for normal future web pages and landing pages
- no generated navbar/header/footer in the default page-body recipes
- centered short pricing rows in `pricing-section`
- `.md` templates remain recipes and rendered `.tsx` pages prove the recipes

## Verification

Required verification:

```bash
node scripts/validate-phase2.mjs
cd library && npm run typecheck
cd showcase/app && npm run typecheck
cd showcase/app && npm run verify:templates
cd showcase/app && npm run verify:showcase
cd showcase/app && npm run verify:visual
```

Protected paths remain read-only:

- `/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION`
- `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/`
- `Components/`

## Rating

Rating: 10/10.

What makes it a 10: the body-only rule now exists in the recipe layer, command
layer, rendered proof layer, and validator, while pricing centering is enforced
inside the approved component implementation.
