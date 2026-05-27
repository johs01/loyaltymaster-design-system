# Blog Article Index

Approval Status: Approved.

## Purpose

Blog/article collection index with approved article cards, empty state, and pagination/filter affordances.

## Proposed Component ID

`blog-article-index`

## Source URLs

- https://loyaltymaster.com/blog/ - Blog index and article collection intent.

## Screenshot Evidence

- Desktop: `screenshots/desktop.png`
- Mobile: `screenshots/mobile.png`
- Source-specific desktop/mobile: `screenshots/blog-desktop.png`, `screenshots/blog-mobile.png`

## Existing Approved Components Considered

| Existing Registry ID Considered | specPath Read | libraryPath Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Feature cards are not article cards with metadata. |
| `image-grid` | `specs/components/image-grid.md` | `library/src/components/ImageGrid.tsx` | Logo/proof grid is not an article index. |
| `testimonials-grid` | `specs/components/testimonials-grid.md` | `library/src/components/TestimonialsGrid.tsx` | Testimonial cards are not article listing cards. |

## Human Review Notes

- This folder is an approved component evidence and handoff record.
- Use this approved component as reference evidence for outlines and implementation planning.
- For clean registry/library implementation, build it through the full registry/spec/library/showcase/gate workflow.
