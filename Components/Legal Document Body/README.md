# Legal Document Body

Approval Status: Approved.

## Purpose

Dense legal/policy document layout for privacy, terms, acceptable use, subscription, and cookie policy pages.

## Proposed Component ID

`legal-document-body`

## Source URLs

- https://loyaltymaster.com/privacy-policy/ - Privacy policy clause structure and legal prose.
- https://loyaltymaster.com/terms-of-use/ - Terms document with long clauses and headings.

## Screenshot Evidence

- Desktop: `screenshots/desktop.png`
- Mobile: `screenshots/mobile.png`
- Source-specific desktop/mobile: `screenshots/privacy-policy-desktop.png`, `screenshots/privacy-policy-mobile.png`
- Source-specific desktop/mobile: `screenshots/terms-of-use-desktop.png`, `screenshots/terms-of-use-mobile.png`

## Existing Approved Components Considered

| Existing Registry ID Considered | specPath Read | libraryPath Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Card grids are wrong for legal clauses. |
| `comparison-table` | `specs/components/comparison-table.md` | `library/src/components/ComparisonTable.tsx` | Comparison tables are not legal document flow. |
| `feature-section-2-column-image` | `specs/components/feature-section-2-column-image.md` | `library/src/components/FeatureSection2ColumnImage.tsx` | Image sections are inappropriate for policy documents. |

## Human Review Notes

- This folder is an approved component evidence and handoff record.
- Use this approved component as reference evidence for outlines and implementation planning.
- For clean registry/library implementation, build it through the full registry/spec/library/showcase/gate workflow.
