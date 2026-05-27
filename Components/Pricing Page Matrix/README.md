# Pricing Page Matrix

Approval Status: Approved.

## Purpose

Full pricing page matrix for monthly/yearly plan groups, feature lists, disclaimers, and payment proof.

## Proposed Component ID

`pricing-page-matrix`

## Source URLs

- https://loyaltymaster.com/price-list/ - Monthly/yearly pricing, six pricing widgets, payment methods, disclaimers.

## Screenshot Evidence

- Desktop: `screenshots/desktop.png`
- Mobile: `screenshots/mobile.png`
- Source-specific desktop/mobile: `screenshots/price-list-desktop.png`, `screenshots/price-list-mobile.png`

## Existing Approved Components Considered

| Existing Registry ID Considered | specPath Read | libraryPath Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `pricing-section` | `specs/components/pricing-section.md` | `library/src/components/PricingSection.tsx` | Simple plan cards are not the full matrix/page contract. |
| `billing-toggle-button` | `specs/components/billing-toggle-button.md` | `library/src/components/BillingToggleButton.tsx` | Toggle is only a control. |
| `comparison-table` | `specs/components/comparison-table.md` | `library/src/components/ComparisonTable.tsx` | Comparison table cannot replace pricing cards and CTAs. |

## Human Review Notes

- This folder is an approved component evidence and handoff record.
- Use this approved component as reference evidence for outlines and implementation planning.
- For clean registry/library implementation, build it through the full registry/spec/library/showcase/gate workflow.
