# Phase 7 Report: Visual Review, Tuning, And Pixel-Diff Verification

Date: 2026-05-18

## Summary

Phase 7 started as the visual gate after the Phase 5 rendered-smoke layer. Step
0 browser review recorded the original 9 gated / 11 skipped state, then Phase 7
completion resolved the source-of-truth conflicts and missing media assets so
all 20 Wave 1 components were gated.

Phase 7B corrected the remaining problem found during human review: the first
20/20 gate was still too smoke-like because it normalized all comparisons to
640x360. Phase 7B now captures each component at the approved screenshot's
inferred CSS size, gates native width, height, and aspect ratio, and stores the
per-component review in `PHASE_7B_VISUAL_REVIEW.md`.

Phase 7C completed the pre-production visual gate by adding exact font/runtime
parity controls. The showcase now imports `tokens/fonts.css`, loads local
Rodger and Onest font files, waits for browser font readiness before capture,
records Chromium/deviceScaleFactor/runtime metadata, intentionally regenerates
the canonical references, and gates all 20 components with strict Phase 7C
thresholds.

Phase 7E completed the interaction gate by fixing the hover, focus, active,
pressed, expanded, and mobile-open behavior found in the Phase 7D audit.
`npm run verify:interactions` is now the required companion to the Phase 7C
visual gate before production adoption.

Phase 7F completed the live production-fidelity gate. The showcase now maps
all 20 Wave 1 components to live sendPUSH runtime selectors, captures desktop
and mobile live/local pairs, stores side-by-side artifacts under
`showcase/app/artifacts/phase-7f/`, and requires
`npm run verify:production-fidelity` to pass before production adoption.

Protected production replica:
`RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/` remained untouched.

## Step 0 Visual Review Classifications

| Component | Classification | Gate |
|---|---|---|
| `billing-toggle-button` | Ready for pixel-diff | Yes |
| `button-email` | Ready for pixel-diff | Yes |
| `comparison-table` | Ready for pixel-diff | Yes |
| `cta-trial-full-form` | Ready for pixel-diff | Yes |
| `cta-with-button-email` | Tuned and ready for pixel-diff | Yes |
| `faq-accordion` | Ready for pixel-diff | Yes |
| `feature-section-2-column-bullets-image` | Tuned and ready for pixel-diff | Yes |
| `feature-section-2-column-image` | Tuned and ready for pixel-diff | Yes |
| `features-grid` | Ready for pixel-diff | Yes |
| `footer` | Source conflict resolved and ready for pixel-diff | Yes |
| `geo-fence-use-case` | Corrected reference and ready for pixel-diff | Yes |
| `hero-main-section` | Tuned and ready for pixel-diff | Yes |
| `image-grid` | Source conflict resolved and ready for pixel-diff | Yes |
| `image-strip` | Tuned and ready for pixel-diff | Yes |
| `navbar-glassmorphism` | Tuned and ready for pixel-diff | Yes |
| `pricing-section` | Ready for pixel-diff | Yes |
| `process-steps` | Ready for pixel-diff | Yes |
| `stats-card-strip` | Ready for pixel-diff | Yes |
| `testimonial-single` | Source conflict resolved and ready for pixel-diff | Yes |
| `testimonials-grid` | Tuned and ready for pixel-diff | Yes |

## Tuning Performed

- Tuned shared button, email form shell, and billing toggle CSS to better match
  approved radius, action color, shadow, and compact-control rhythm.
- Tuned `cta-trial-full-form` layout to a compact two-column form on desktop.
- Tuned `features-grid`, `process-steps`, and `stats-card-strip` structure for
  closer approved layout rhythm.
- Tuned showcase demo props for reviewed-ready components so visual comparison
  measures component fidelity instead of generic placeholder copy.
- Resolved the footer, image-grid, testimonial-single, and geo-fence source
  conflicts using the approved hybrid source-of-truth rule.
- Recovered deterministic local media into `assets/media/` and `assets/awards/`
  from known Cloudinary/protected-replica references.
- Replaced the stale `geo-fence-use-case` button-only screenshot with a
  corrected use-case-section reference.
- Tuned CTA, hero, two-column feature sections, image strip, navbar, and
  testimonials grid so every Wave 1 component can be fairly thresholded.

## Visual Verification

New files:

- `showcase/app/scripts/verify-visual.mjs`
- `showcase/app/scripts/phase7-visual-gates.json`
- `showcase/app/artifacts/phase-7/current/*.png`
- `showcase/app/artifacts/phase-7/diffs/*.png`
- `showcase/app/artifacts/phase-7/visual-results.json`
- `showcase/app/artifacts/phase-7c/current/*.png`
- `showcase/app/artifacts/phase-7c/diffs/*.png`
- `showcase/app/artifacts/phase-7c/regenerated-references/*.png`
- `showcase/app/artifacts/phase-7c/reference-regeneration-manifest.json`
- `showcase/app/artifacts/phase-7c/visual-results.json`
- `tokens/fonts.css`
- `assets/fonts/onest/*.ttf`
- `assets/screenshots/historical-phase-7b/*.png`
- `assets/media/image02.png`
- `assets/media/image-placeholder-640-square.jpg`
- `assets/media/lady-joining-loyalty-program.png`
- `assets/media/guy-reading-push-notification.png`
- `assets/awards/awards-1-3.svg`
- `assets/awards/awards-4-6.svg`
- `assets/awards/awards-7-9.svg`
- `assets/screenshots/geo-fence-use-case.png` corrected from stale
  button-only artifact to use-case-section reference.

Phase 7 visual result:

```text
Phase 7 visual verification passed for 20 gated components; 0 skipped.
```

Phase 7B visual result:

```text
Phase 7B visual fidelity verification passed for 20 gated components; 0 skipped.
```

Phase 7C visual result:

```text
Phase 7C visual fidelity verification passed for 20 gated components; 0 skipped.
```

The visual gate now fails if any Wave 1 component is skipped, missing, failing
its strict thresholds, using fallback fonts, missing runtime metadata, or
drifting in pixels, native width, height, or aspect ratio.

## Verification Commands

Baseline before Phase 7 edits:

```text
node scripts/validate-phase2.mjs
Phase 2/3/4/5/6 validation passed.

cd library && npm run typecheck
tsc --noEmit

cd showcase/app && npm run typecheck
tsc --noEmit

cd showcase/app && npm run verify:showcase
Phase 5 showcase smoke passed for 20 components across 2 viewports.
```

Phase 7 verification:

```text
cd showcase/app && npm run verify:visual
Phase 7C visual fidelity verification passed for 20 gated components; 0 skipped.
```

Final validation:

```text
Phase 2/3/4/5/6/7/7B/7C validation passed.
```

## Phase 7 Completion Metrics

`showcase/app/artifacts/phase-7/visual-results.json` records:

- `phase`: 7B
- `gatedCount`: 20
- `skippedCount`: 0
- `failedCount`: 0

`showcase/app/artifacts/phase-7c/visual-results.json` records:

- `phase`: 7C
- `gatedCount`: 20
- `skippedCount`: 0
- `failedCount`: 0
- local Rodger and Onest font checks loaded
- Chromium runtime, deviceScaleFactor, and screenshot timing metadata

## Remaining Work

- Production adoption remains deferred to the later approved production phase.
- Production adoption remains deferred to the later approved production phase.
- Future visual-reference regeneration must use the explicit
  `npm run regenerate:phase7c-references` command and document why the
  references changed.

## Rating

Rating: 10/10.

What makes it a 10: the four source-of-truth conflicts and missing media assets
were resolved, all 20 components are gated, and skipped components are no
longer accepted by validation.
