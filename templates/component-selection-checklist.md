# Component Selection Checklist

Approval Status: Approved

## Allowed Artifact Type

Use this checklist when deciding which approved Loyaltymaster components may be
used in a new artifact.

## Required Human Inputs

- Artifact type:
- Primary action:
- Required sections:
- Required proof or data:
- Required media:
- Required shell elements:
- Components requested by name:

## Required Files To Read

- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `tokens/design-tokens.json`
- `registry/components.json`
- relevant component `specPath` files
- relevant component `libraryPath` files
- `examples/README.md`
- relevant `examples/approved/` files
- relevant `examples/blocked/` files

## Approved Component Recipe

Use this selection map. Select only approved registry IDs.

| Need | Approved Registry IDs |
|---|---|
| Standalone navigation shell only when explicitly requested | `navbar-glassmorphism` |
| Standalone footer shell only when explicitly requested | `footer` |
| Main hero | `hero-main-section` |
| Email CTA control | `button-email` |
| Email CTA section | `cta-with-button-email` |
| Trial form CTA | `cta-trial-full-form` |
| Feature grid | `features-grid` |
| Feature section with image | `feature-section-2-column-image` |
| Feature section with bullets and image | `feature-section-2-column-bullets-image` |
| Use case section | `geo-fence-use-case` |
| Image strip | `image-strip` |
| Partner or logo proof grid | `image-grid` |
| Process | `process-steps` |
| Pricing | `pricing-section`, `billing-toggle-button` |
| Comparison | `comparison-table` |
| Stats proof | `stats-card-strip` |
| Testimonial proof | `testimonials-grid`, `testimonial-single` |
| FAQ | `faq-accordion` |

If no row matches the need, stop. Do not invent components, variants, tokens, or
interaction behavior. Use `templates/new-component-request.md`.

For normal web pages, landing pages, sales pages, and subdomain pages inside
the existing production website, select body components only. Do not select
`navbar-glassmorphism` or `footer` unless the brief explicitly says the artifact
is standalone and needs its own shell.

## Required Spec And Library Evidence

For every selected component:

- cite the registry ID from `registry/components.json`
- read the current `specPath`
- cite the current `libraryPath`
- confirm token usage against `tokens/design-tokens.json`
- confirm Phase 7C visual gate status
- confirm Phase 7E interaction status
- confirm Phase 7F production-fidelity status

## Blocked Example Rejection Checks

Reject the selection if it requires any pattern in:

- `examples/blocked/generic-saas-card-grid.md`
- `examples/blocked/page-body-glassmorphism.md`
- `examples/blocked/invented-component-variant.md`
- `examples/blocked/raw-components-import.md`
- `examples/blocked/duplicate-global-chrome.md`
- `examples/blocked/unapproved-token-literal.md`

## Final Approval Checklist

- Every artifact need maps to a current registry component.
- Every selected component has a current `specPath`.
- Every selected component has a current `libraryPath`.
- No selected component contradicts its spec.
- `navbar-glassmorphism` and `footer` are omitted unless the artifact is
  explicitly standalone.
- No unregistered component, variant, state, token, or interaction was added.
- Missing needs are documented in `templates/new-component-request.md`.
