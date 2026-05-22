# AI Compliance Checklist

Approval Status: Approved

## Allowed Artifact Type

Use this checklist as the proof that an AI agent followed the Loyaltymaster
design system before creating or modifying any digital artifact.

## Required Human Inputs

- Task request:
- Artifact type:
- Files the human provided:
- Approval authority:
- Constraints or exceptions:

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

The AI agent must fill this table before implementation:

Allowed registry IDs are limited to `billing-toggle-button`, `button-email`,
`comparison-table`, `cta-trial-full-form`, `cta-with-button-email`,
`faq-accordion`, `feature-section-2-column-bullets-image`,
`feature-section-2-column-image`, `features-grid`, `footer`,
`geo-fence-use-case`, `hero-main-section`, `image-grid`, `image-strip`,
`navbar-glassmorphism`, `pricing-section`, `process-steps`,
`stats-card-strip`, `testimonial-single`, and `testimonials-grid`.

For normal web pages, landing pages, sales pages, and subdomain pages, the
composition must be body-only. Do not include `navbar-glassmorphism`, header,
or `footer` unless the brief explicitly requests a standalone artifact with its
own shell.

| Need From Brief | Approved Registry ID | Why This Component Fits | `specPath` Read | `libraryPath` To Use |
|---|---|---|---|---|
|  |  |  |  |  |

If a need cannot be filled by a current registry component, the AI agent must
stop and complete `templates/new-component-request.md`. Do not invent
components, variants, tokens, or interaction behavior.

## Required Spec And Library Evidence

The AI agent must prove:

- `registry/components.json` was used as the source of approved components.
- Every selected component's current `specPath` was read.
- Every selected component's current `libraryPath` was used.
- `tokens/design-tokens.json` was used for token decisions.
- No raw color, font, radius, shadow, spacing, or motion values were invented.
- No code was imported from `/Components/`.
- No code was imported from or written to protected production reference
  folders.

## Blocked Example Rejection Checks

The AI agent must list every blocked example checked:

- `examples/blocked/generic-saas-card-grid.md`
- `examples/blocked/page-body-glassmorphism.md`
- `examples/blocked/invented-component-variant.md`
- `examples/blocked/raw-components-import.md`
- `examples/blocked/duplicate-global-chrome.md`
- `examples/blocked/unapproved-token-literal.md`

## Final Approval Checklist

- The brief was restated.
- The brand rules were restated.
- First AI instincts were rejected when generic or off-brand.
- Components were selected from `registry/components.json`.
- Component specs were read immediately before use.
- Library paths were used for implementation.
- Approved tokens were used.
- Approved examples were referenced.
- Blocked examples were rejected.
- Body-only output was confirmed for normal production website pages.
- No new component or variant was improvised.
- Missing component needs were moved to `templates/new-component-request.md`.
