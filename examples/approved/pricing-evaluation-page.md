# Approved Example: Pricing Evaluation Page

## Verdict

Approved. This composition follows `READ_FIRST_AI.md`, `PREFLIGHT.md`,
`registry/components.json`, current component specs, canonical
`library/src/components/` paths, and `showcase/app` review.

## Purpose

Help a qualified buyer compare value, proof, and pricing before taking action.

## Component Plan

| Order | Registry ID | Spec Read Immediately Before Use | Canonical Library Path |
|---|---|---|---|
| 1 | `hero-main-section` | `specs/components/hero-main-section.md` | `library/src/components/HeroMainSection.tsx` |
| 2 | `billing-toggle-button` | `specs/components/billing-toggle-button.md` | `library/src/components/BillingToggleButton.tsx` |
| 3 | `pricing-section` | `specs/components/pricing-section.md` | `library/src/components/PricingSection.tsx` |
| 4 | `comparison-table` | `specs/components/comparison-table.md` | `library/src/components/ComparisonTable.tsx` |
| 5 | `testimonial-single` | `specs/components/testimonial-single.md` | `library/src/components/TestimonialSingle.tsx` |
| 6 | `button-email` | `specs/components/button-email.md` | `library/src/components/ButtonEmail.tsx` |

## Token And Visual Rules

- Use only approved token names from `tokens/design-tokens.json`.
- Keep pricing cards on the approved card-radius system; do not invent softer
  or larger radii.
- Keep the billing toggle as the only pricing-period control.
- Use `showcase/app` to compare live pricing and comparison-table rendering
  against the approved screenshots.

## Composition Rules

- Pricing must not become a generic three-card SaaS grid unless the approved
  `pricing-section` spec supports that exact treatment.
- The comparison table should clarify buyer tradeoffs, not add decorative
  density.
- Email capture is acceptable only as a focused conversion control, not as a
  duplicate form repeated after every section.
