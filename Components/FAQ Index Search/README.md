# FAQ Index Search

Approval Status: Approved.

## Purpose

Full FAQ index with search/category behavior, beyond a single accordion section.

## Proposed Component ID

`faq-index-search`

## Source URLs

- https://loyaltymaster.com/frequently-asked-questions-loyaltymaster/ - Full FAQ index/search-style content and categories.

## Screenshot Evidence

- Desktop: `screenshots/desktop.png`
- Mobile: `screenshots/mobile.png`
- Source-specific desktop/mobile: `screenshots/frequently-asked-questions-loyaltymaster-desktop.png`, `screenshots/frequently-asked-questions-loyaltymaster-mobile.png`

## Existing Approved Components Considered

| Existing Registry ID Considered | specPath Read | libraryPath Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `faq-accordion` | `specs/components/faq-accordion.md` | `library/src/components/FaqAccordion.tsx` | Accordion supports one FAQ section, not searchable/category index behavior. |
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Feature cards are not searchable FAQ entries. |
| `comparison-table` | `specs/components/comparison-table.md` | `library/src/components/ComparisonTable.tsx` | Tables are wrong for question navigation. |

## Human Review Notes

- This folder is an approved component evidence and handoff record.
- Use this approved component as reference evidence for outlines and implementation planning.
- For clean registry/library implementation, build it through the full registry/spec/library/showcase/gate workflow.
