# Knowledge Base Index

Approval Status: Approved.

## Purpose

Knowledge-base/docs index pattern for encyclopedia-style category and article navigation.

## Proposed Component ID

`knowledge-base-index`

## Source URLs

- https://loyaltymaster.com/encyclopedia/ - BetterDocs encyclopedia shortcode and docs-index intent.

## Screenshot Evidence

- Desktop: `screenshots/desktop.png`
- Mobile: `screenshots/mobile.png`
- Source-specific desktop/mobile: `screenshots/encyclopedia-desktop.png`, `screenshots/encyclopedia-mobile.png`

## Existing Approved Components Considered

| Existing Registry ID Considered | specPath Read | libraryPath Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Feature cards are not docs navigation. |
| `faq-accordion` | `specs/components/faq-accordion.md` | `library/src/components/FaqAccordion.tsx` | FAQ rows do not support docs categories. |
| `image-grid` | `specs/components/image-grid.md` | `library/src/components/ImageGrid.tsx` | Logo/proof grid is not a docs index. |

## Human Review Notes

- This folder is an approved component evidence and handoff record.
- Use this approved component as reference evidence for outlines and implementation planning.
- For clean registry/library implementation, build it through the full registry/spec/library/showcase/gate workflow.
