# Brochure Content Template

Approval Status: Approved

## Allowed Artifact Type

Use this template for digital brochures, sales sheets, downloadable content, or
campaign collateral that must be composed from approved Loyaltymaster
components.

## Required Human Inputs

- Brochure purpose:
- Audience:
- Sales stage:
- Primary offer:
- Required proof:
- Required images:
- Required pricing or plan information:
- Required call to action:
- Output format:

## Required Files To Read

- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `BRAND.md`
- `DESIGN_SYSTEM.md`
- `tokens/design-tokens.json`
- `registry/components.json`
- selected component `specPath` files
- selected component `libraryPath` files
- `examples/README.md`
- relevant `examples/approved/` files
- relevant `examples/blocked/` files

## Approved Component Recipe

Brochure pages or panels must be assembled from these approved component groups:

| Brochure Need | Approved Components |
|---|---|
| Cover or opening spread | `hero-main-section` |
| Primary CTA | `button-email`, `cta-with-button-email`, `cta-trial-full-form` |
| Feature explanation | `feature-section-2-column-image`, `feature-section-2-column-bullets-image`, `features-grid` |
| Process explanation | `process-steps` |
| Proof and credibility | `stats-card-strip`, `testimonials-grid`, `testimonial-single`, `image-grid`, `image-strip` |
| Use-case panel | `geo-fence-use-case` |
| Comparison or pricing panel | `comparison-table`, `pricing-section`, `billing-toggle-button` |
| Questions panel | `faq-accordion` |
| Optional shell when explicitly requested | `navbar-glassmorphism`, `footer` |

Do not invent brochure-only cards, badges, ribbons, panels, pull quotes,
divider styles, page furniture, or icon systems. If the requested brochure
needs one of those, use `templates/new-component-request.md`.

## Required Spec And Library Evidence

| Registry ID | Brochure Role | `specPath` Read | `libraryPath` To Use | Approved Tokens |
|---|---|---|---|---|
|  |  |  |  | `tokens/design-tokens.json` |

For non-web exports, use the selected component specs as the visual contract.
Do not invent alternate print styling unless a separate approved component or
token exists.

## Blocked Example Rejection Checks

Before approval, reject any direction that resembles:

- `examples/blocked/generic-saas-card-grid.md`
- `examples/blocked/page-body-glassmorphism.md`
- `examples/blocked/invented-component-variant.md`
- `examples/blocked/unapproved-token-literal.md`

## Final Approval Checklist

- Every brochure panel maps to approved registry components.
- Every selected component has `specPath` and `libraryPath` evidence.
- Brochure-only styling was not invented.
- Any missing collateral pattern is captured in
  `templates/new-component-request.md`.
- Approved examples and blocked examples were checked.

