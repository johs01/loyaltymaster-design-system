# Phase 8B Template Rendering Review

## Summary

Phase 8B proves that approved Markdown recipe templates can be assembled into
browser-reviewable `.tsx` pages using only approved Loyaltymaster components.
The `.md` files remain the recipe layer. The rendered fixtures are the visual
proof layer for human review. Phase 8C updates these fixtures to prove
body-only output for normal production website pages.

## Rendered Fixtures

| Fixture | Source Template | Generated TSX Source | Local Review URL | Approval Result |
|---|---|---|---|---|
| Web page recipe render | `templates/web-page-brief.md` | `showcase/app/src/templateFixtures.tsx` | `http://127.0.0.1:5177/template-tests/web-page` | Approved by user on 2026-05-20 |
| Landing page recipe render | `templates/landing-page.md` | `showcase/app/src/templateFixtures.tsx` | `http://127.0.0.1:5177/template-tests/landing-page` | Approved by user on 2026-05-20 |

## Web Page Fixture Component Recipe

- `hero-main-section`
- `feature-section-2-column-image`
- `feature-section-2-column-bullets-image`
- `image-strip`
- `comparison-table`
- `cta-with-button-email`

The generated page body intentionally excludes `navbar-glassmorphism` and
`footer`; the production website shell supplies global chrome.

Each component is listed in `registry/components.json` and exposes current
`specPath` and `libraryPath` evidence in the rendered review sidebar.

## Landing Page Fixture Component Recipe

- `hero-main-section`
- `button-email`
- `features-grid`
- `process-steps`
- `stats-card-strip`
- `testimonials-grid`
- `pricing-section`
- `testimonial-single`
- `faq-accordion`
- `cta-with-button-email`

The generated landing page body intentionally excludes `navbar-glassmorphism`
and `footer`; the production website shell supplies global chrome. The
`pricing-section` in this fixture must center its plan cards when fewer than a
full row of plans is rendered.

Each component is listed in `registry/components.json` and exposes current
`specPath` and `libraryPath` evidence in the rendered review sidebar.

## Reference Pages For Human Review

- `https://sendpush.loyaltymaster.com/`
- `https://sendpush.loyaltymaster.com/design-system-template-page`
- `https://sendpush.loyaltymaster.com/design-system-template-page#pricing`

The production pages are reference-only. Do not edit
`/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION`.

## Browser Artifacts

`npm run verify:templates` writes:

- `showcase/app/artifacts/phase-8b/web-page-desktop.png`
- `showcase/app/artifacts/phase-8b/web-page-mobile.png`
- `showcase/app/artifacts/phase-8b/landing-page-desktop.png`
- `showcase/app/artifacts/phase-8b/landing-page-mobile.png`
- `showcase/app/artifacts/phase-8b/template-fixture-results.json`

## Human Approval Checklist

- The page uses only approved registry components.
- The review sidebar lists component IDs, `specPath`, and `libraryPath`
  evidence.
- The rendered page feels visually aligned with the live sendPUSH reference
  pages.
- Normal page and landing-page fixtures are body-only, with no generated
  navbar/header/footer.
- Pricing cards are centered when the fixture renders fewer than a full row of
  plans.
- No new section, card, button, layout, token, visual variant, or interaction
  behavior was invented.
- If a missing component need appears, use
  `templates/new-component-request.md`.

## Human Approval Result

Approved by user on 2026-05-20.

Approved scope:

- `http://127.0.0.1:5177/template-tests/web-page`
- `http://127.0.0.1:5177/template-tests/landing-page`
- body-only output for normal web-page and landing-page recipes
- centered short pricing rows in the landing-page rendered fixture
- approved Markdown templates as recipes and `.tsx` rendered fixtures as proof

## Verification

Required commands:

```bash
node scripts/validate-phase2.mjs
cd library && npm run typecheck
cd showcase/app && npm run typecheck
cd showcase/app && npm run verify:templates
```

## Rating

Rating: 10/10.

What makes it a 10: the review now has browser-visible `.tsx` proof pages for
approved Markdown recipes, plus artifact paths a human can inspect before
trusting future AI-created pages.
