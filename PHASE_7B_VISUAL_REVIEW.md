# Phase 7B Visual Fidelity Review

Date: 2026-05-18

## Summary

Phase 7B corrects the earlier Phase 7 result. Native component capture is now
the required visual-fidelity method. The earlier gate proved that all
20 Wave 1 components rendered, but it still allowed too much visual drift
because it normalized screenshots to a shared 640x360 comparison size. Phase 7B
uses native component captures at the approved screenshot's inferred CSS size,
checks width, height, and aspect drift, and gates all 20 components with
tighter component-specific thresholds.

Protected production replica:
`RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/` remained read-only.

## Root Cause

- The Phase 7 verifier resized every live/reference pair to 640x360, which hid
  major layout and aspect differences.
- The showcase compared a 792px live column against much wider approved
  screenshots, so browser review and automated comparison were not measuring the
  same surface.
- Several live specimens still used generic demo layout, placeholder media, or
  unresolved source-of-truth decisions instead of the approved screenshot/raw
  snapshot shape.

## Phase 7B Fix

- Added `?capture=<component-id>` rendering so each component is captured by
  itself.
- Compared every live component at the approved screenshot's inferred CSS size.
- Added width, height, and aspect-ratio checks so size drift cannot be hidden.
- Replaced the old broad smoke thresholds with tighter Phase 7B thresholds based
  on the corrected native captures plus a small deterministic margin.
- Tuned the remaining visual mismatches in `library/` and `showcase/app` only.

## Per-Component Review

| Component | Reference shape | Mismatch found | Root cause | Phase 7B resolution |
|---|---:|---|---|---|
| `billing-toggle-button` | 1277x302 | Live wrapper was taller than reference. | Extra specimen spacing around the toggle. | Locked specimen height to 302px and reduced gap/margin rhythm. |
| `button-email` | 780x293 | Earlier live render was inside the generic showcase frame. | Side-by-side gallery width did not match reference capture. | Native capture locks the peach shell and email form proportions. |
| `comparison-table` | 2344x789 | Earlier render was too generic and not table-led. | Demo data and section rhythm did not match approved source. | Tuned table data, section shell, headline, card, and CTA rhythm. |
| `cta-trial-full-form` | 2344x909 | Earlier form did not match the full trial form density. | Missing fields and too-generic form layout. | Added the approved field set and compact two-column form rhythm. |
| `cta-with-button-email` | 2344x574 | Earlier dark CTA measured as smoke, not fidelity. | Broad threshold and generic CTA spacing. | Locked dark shell, centered copy, email field, and action rhythm. |
| `faq-accordion` | 2344x918 | Earlier comparison did not enforce section height. | Fixed-size normalization hid accordion stack drift. | Native capture gates the full FAQ section and accordion stack. |
| `feature-section-2-column-bullets-image` | 2344x805 | Media and section proportions were not fairly comparable. | Placeholder/nested screenshot stand-ins and generic section rhythm. | Uses recovered local media and gates the two-column use-case layout. |
| `feature-section-2-column-image` | 2344x822 | Problem-section shape drifted from the screenshot. | Generic feature-section structure was used. | Tuned problem cards, action rhythm, and recovered local media usage. |
| `features-grid` | 2344x772 | Grid height and card rhythm could drift under the old gate. | 640x360 normalization hid section height difference. | Native capture gates the six-card grid and centered header. |
| `footer` | 2344x883 | Source conflict between dark spec text and light screenshot/raw source. | Stale spec wording conflicted with approved raw visual evidence. | Hybrid rule applied: light card footer screenshot/raw source wins. |
| `geo-fence-use-case` | 792x886 | Old reference was stale; tuned live version still needed geometry alignment. | Stale button-only screenshot and wrapped copy/layout drift. | Corrected use-case reference, then tuned exact section size, image placement, heading scale, and CTA rhythm. |
| `hero-main-section` | 2344x1002 | Earlier render used generic media and was only smoke-gated. | Missing deterministic local media and broad thresholds. | Uses recovered local product media and native hero capture. |
| `image-grid` | 2344x426 | Source conflict between generic image grid and partner-logo proof grid. | Component id remained stable while visual intent needed resolution. | Hybrid rule applied: partner-logo proof grid wins under `image-grid`. |
| `image-strip` | 2321x249 | Live strip was too tall and did not match the award band height. | Desktop section padding overrode strip-specific padding. | Locked native 249px strip height and recovered local award SVG assets. |
| `navbar-glassmorphism` | 2321x225 | Earlier nav was a generic glass shell. | Missing approved wordmark/action/active-state rhythm. | Tuned nav links, glass shell, active state, and action proportions. |
| `pricing-section` | 2344x1260 | Pricing copy/card rhythm could pass under broad thresholds. | Demo data and density were not tied to approved source. | Tuned pricing plan data and gates native card-section rhythm. |
| `process-steps` | 2344x748 | Step-card rhythm was not locked by smoke gate. | Generic process section and missing source-like cadence. | Tuned heading, step copy, badge rhythm, and native capture thresholds. |
| `stats-card-strip` | 2344x377 | Strip height drift was hidden by normalized comparison. | Fixed 640x360 compare did not enforce component height. | Native gate checks height/aspect drift for the stat strip. |
| `testimonial-single` | 2344x602 | Source conflict between white single quote and dark proof section. | Stale spec text conflicted with screenshot/raw visual source. | Hybrid rule applied: dark proof section wins while preserving quote props. |
| `testimonials-grid` | 2344x632 | Earlier proof grid could drift in card density. | Smoke threshold and generic testimonial content. | Tuned white proof grid treatment, copy, star rhythm, and card structure. |

## Visual Gate Result

Command:

```text
cd showcase/app && npm run verify:visual
```

Result:

```text
Phase 7B visual fidelity verification passed for 20 gated components; 0 skipped.
```

`showcase/app/artifacts/phase-7/visual-results.json` records:

- `phase`: `7B`
- `gatedCount`: 20
- `skippedCount`: 0
- `failedCount`: 0

Browser review evidence was retained under
`showcase/app/artifacts/phase-7/browser-review/`.

## Remaining Risk

- Superseded for final pre-production fidelity by `PHASE_7C_REPORT.md`, which
  adds local Rodger/Onest font parity, runtime metadata, intentional reference
  regeneration, and stricter thresholds.
- This remains a design-system component gate, not production adoption.
- Production migration remains Phase 8 and requires explicit approval.

## Phase 7C Follow-Up

Phase 7C intentionally regenerated the canonical references under
`assets/screenshots/*.png` and preserved the Phase 7B references under
`assets/screenshots/historical-phase-7b/`. New visual-fidelity decisions should
use `PHASE_7C_REPORT.md` and `showcase/app/artifacts/phase-7c/`.

## Rating

Rating: 9/10.

What would make it a 10: completed in Phase 7C.
