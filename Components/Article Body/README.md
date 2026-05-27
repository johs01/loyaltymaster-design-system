# Article Body

Approval Status: Approved.

## Purpose

Long-form marketing, explainer, company story, and editorial body content that needs approved prose rhythm instead of improvised article CSS.

## Proposed Component ID

`article-body`

## Source URLs

- https://loyaltymaster.com/about-us/ - Company story prose with image-supported narrative body.
- https://loyaltymaster.com/what-is-electronic-rewards/ - Short explainer article body with plain prose needs.

## Screenshot Evidence

- Desktop: `screenshots/desktop.png`
- Mobile: `screenshots/mobile.png`
- Source-specific desktop/mobile: `screenshots/about-us-desktop.png`, `screenshots/about-us-mobile.png`
- Source-specific desktop/mobile: `screenshots/what-is-electronic-rewards-desktop.png`, `screenshots/what-is-electronic-rewards-mobile.png`

## Existing Approved Components Considered

| Existing Registry ID Considered | specPath Read | libraryPath Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Cards are not readable long-form prose. |
| `feature-section-2-column-image` | `specs/components/feature-section-2-column-image.md` | `library/src/components/FeatureSection2ColumnImage.tsx` | One image-led section is not a full article body. |
| `comparison-table` | `specs/components/comparison-table.md` | `library/src/components/ComparisonTable.tsx` | Comparison structure is not narrative editorial content. |

## Human Review Notes

- This folder is an approved component evidence and handoff record.
- Use this approved component as reference evidence for outlines and implementation planning.
- For clean registry/library implementation, build it through the full registry/spec/library/showcase/gate workflow.
