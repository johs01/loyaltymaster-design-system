# Web Page Brief Template

Approval Status: Approved

## Allowed Artifact Type

Use this template to collect and validate a brief for a Loyaltymaster web page
before any page plan or code is written.

## Required Human Inputs

- Page name:
- Target route or URL:
- Audience:
- Primary user problem:
- Primary action:
- Required source copy:
- Required images or approved asset references:
- Required legal, pricing, or compliance content:
- Components expected by the requester, if any:
- Components that must not be used, if any:

## Required Files To Read

- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `BRAND.md`
- `DESIGN_SYSTEM.md`
- `tokens/design-tokens.json`
- `registry/components.json`
- relevant component `specPath` files
- relevant component `libraryPath` files
- `examples/README.md`
- at least one relevant file in `examples/approved/`
- every relevant file in `examples/blocked/`

## Approved Component Recipe

Select only from `registry/components.json`. The web page brief may propose one
of these body-only component recipes. The production website already provides
global chrome, so normal new web pages must not include `navbar-glassmorphism`,
header, or `footer`.

| Recipe | Approved Component Order |
|---|---|
| Conversion page | `hero-main-section`, `button-email` or `cta-with-button-email`, `features-grid` or `feature-section-2-column-image`, `process-steps`, `faq-accordion` |
| Product explanation page | `hero-main-section`, `feature-section-2-column-image`, `feature-section-2-column-bullets-image`, `image-strip`, `comparison-table`, `cta-with-button-email` |
| Pricing page | `hero-main-section`, `pricing-section`, `billing-toggle-button`, `comparison-table`, `faq-accordion`, `cta-with-button-email` |
| Proof page | `hero-main-section`, `stats-card-strip`, `testimonials-grid`, `testimonial-single`, `image-grid`, `cta-with-button-email` |

If the brief requires a section outside those approved recipes, stop and use
`templates/new-component-request.md`.

`navbar-glassmorphism` and `footer` are approved shell components only for
standalone artifacts that explicitly request their own global chrome. They are
not part of normal page-body recipes.

When `pricing-section` renders fewer than a full row of plan cards, keep the
pricing cards visually centered inside the section. Do not create a parallel
pricing layout to solve alignment.

## Required Spec And Library Evidence

For every selected component, fill this table from `registry/components.json`:

| Registry ID | Why It Fits | `specPath` Read | `libraryPath` To Use | Tokens Confirmed |
|---|---|---|---|---|
|  |  |  |  | `tokens/design-tokens.json` |

The plan is invalid if any selected component lacks `specPath` or
`libraryPath` evidence.

## Blocked Example Rejection Checks

Before approval, compare the brief against:

- `examples/blocked/generic-saas-card-grid.md`
- `examples/blocked/page-body-glassmorphism.md`
- `examples/blocked/invented-component-variant.md`
- `examples/blocked/raw-components-import.md`
- `examples/blocked/duplicate-global-chrome.md`
- `examples/blocked/unapproved-token-literal.md`

If the proposed page resembles any blocked example, reject the direction before
planning.

## Final Approval Checklist

- The brief has one clear primary action.
- Every proposed section maps to an approved registry component.
- Every selected component has a cited `specPath` and `libraryPath`.
- The output is body-only unless the brief explicitly requests a standalone
  artifact with its own shell.
- No new layout, section, card, button, token, or interaction was invented.
- Approved examples were checked.
- Blocked examples were rejected.
- Missing component needs were moved to `templates/new-component-request.md`.
