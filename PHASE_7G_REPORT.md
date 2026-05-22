# Phase 7G CTA Button Hover Parity Fix

Generated: 2026-05-19

## Summary

Phase 7G fixed the final CTA interaction drift reported from the local product showcase. The source of truth was the production hero CTA on `https://sendpush.loyaltymaster.com/`, specifically the `.wf-email-cta__button` behavior from production `MarketingPrimitives.tsx` and `wireframe-remy.css`.

## Scope

Changed files:

- `library/src/styles.css`
- `showcase/app/scripts/phase7d-interaction-audit.mjs`
- `KNOWN_ISSUES.md`
- `PHASE_7G_REPORT.md`

Protected/read-only sources used as evidence only:

- `/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION/src/components/MarketingPrimitives.tsx`
- `/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION/public/wireframe-remy.css`
- `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/`
- `Components/`

## What Changed

- Aligned shared CTA button variables with the production hero CTA:
  - CTA text color: `rgb(42 31 22)`
  - default border: `rgba(243, 125, 57, 0.3)`
  - hover/focus border: `rgba(243, 125, 57, 0.48)`
  - default, hover, and active shadows use the same production rgba values
  - focus ring: `rgba(243, 125, 57, 0.92)`
  - sheen gradient uses production rgba stops and the same hover movement
  - disabled CTA buttons suppress hover lift and use not-allowed handling
- Kept all affected CTA consumers on the shared `.wf-email-cta__button` behavior:
  - `button-email`
  - `cta-with-button-email`
  - `process-steps`
  - `testimonial-single`
- Corrected FAQ handling:
  - FAQ trigger no longer gets the extra local orange hover text treatment.
  - FAQ item shell remains the production hover surface.
  - FAQ trigger keeps visible focus treatment for the accessibility spec.
  - Interaction audit now measures FAQ hover on `.wf-faq-item` and state on `.wf-faq-trigger`.
- Tightened the interaction audit for email CTA components by focusing the CTA button itself instead of the email input.

## Measured CTA Parity

Post-fix production hero CTA and local affected CTA buttons share these measured states:

- Default transform: `matrix(1, 0, 0, 1, 0, 0)`
- Hover transform: `matrix(1, 0, 0, 1, 0, -1.5)`
- Hover shadow: `rgb(243, 125, 57) 0px 6px 0px 0px, rgba(48, 33, 39, 0.13) 0px 11px 18px 0px`
- Focus outline: `2px solid rgba(243, 125, 57, 0.92)`
- Active transform: approximately `matrix(1, 0, 0, 1, 0, -0.75)`
- Active shadow: `rgb(243, 125, 57) 0px 4px 0px 0px, rgba(48, 33, 39, 0.1) 0px 7px 12px 0px`

After-state artifacts were written outside the repo at `/tmp/phase7g-cta-after/`.

## Verification

Commands run:

```bash
cd /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/library && npm run typecheck
cd /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/showcase/app && npm run typecheck
cd /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/showcase/app && npm run verify:showcase
cd /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/showcase/app && npm run verify:visual
cd /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/showcase/app && npm run verify:interactions
cd /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/showcase/app && npm run verify:production-fidelity
node /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/scripts/validate-phase2.mjs
```

Results:

- Library typecheck: passed.
- Showcase typecheck: passed.
- Showcase smoke: `Phase 5 showcase smoke passed for 20 components across 2 viewports.`
- Visual gate: `Phase 7C visual fidelity verification passed for 20 gated components; 0 skipped.`
- Interaction gate: `Phase 7E interaction verification passed for 20 components; 0 fail; 0 partial.`
- Production-fidelity gate: `Phase 7F production fidelity verification passed for 20 components across 2 viewports.`
- Root validator: `Phase 2/3/4/5/6/7/7B/7C/7D/7E/7F validation passed.`

## Protected Folder Verification

The protected production replica timestamp snapshot was taken before edits at `/tmp/sendpush-phase7g-before.txt`. The final comparison against `/tmp/sendpush-phase7g-after.txt` produced an empty diff, so `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/` remained unchanged.

## Rating

Rating: 9/10.

What would make it a 10: the user manually confirms the five affected controls feel correct on `http://127.0.0.1:5177/product` across hover, keyboard focus, mouse-down active, and release.
