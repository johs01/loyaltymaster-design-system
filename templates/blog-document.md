# Blog Or Document Template

Approval Status: Approved

## Allowed Artifact Type

Use this template for Loyaltymaster blog posts, educational documents, internal
explainers, or public documentation that must still look and feel like the
approved design system.

## Required Human Inputs

- Document title:
- Audience:
- Primary takeaway:
- Required source text:
- Required claims or proof:
- Required screenshots or assets:
- Required call to action:
- Publishing format:

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

This design system does not yet have a generic long-form article-body component.
Therefore a blog or document template may only use approved section components:

| Document Need | Approved Components |
|---|---|
| Opening promise or topic | `hero-main-section` |
| Email signup or trial action | `button-email`, `cta-with-button-email`, `cta-trial-full-form` |
| Product explanation | `feature-section-2-column-image`, `feature-section-2-column-bullets-image`, `features-grid` |
| Step-by-step explanation | `process-steps` |
| Comparison or decision support | `comparison-table`, `pricing-section`, `billing-toggle-button` |
| Proof | `stats-card-strip`, `testimonials-grid`, `testimonial-single`, `image-grid` |
| Media proof | `image-strip`, `geo-fence-use-case` |
| Questions | `faq-accordion` |
| Explicit shell when requested | `navbar-glassmorphism`, `footer` |

If the document requires unstructured long-form body copy, callouts, pull
quotes, sidebar notes, tables outside `comparison-table`, or downloadable PDF
layout panels, stop and complete `templates/new-component-request.md`.

## Required Spec And Library Evidence

| Registry ID | Document Section | `specPath` Read | `libraryPath` To Use | Token Evidence |
|---|---|---|---|---|
|  |  |  |  | `tokens/design-tokens.json` |

The document must not use visual styling outside selected component specs.

## Blocked Example Rejection Checks

Check the document against:

- `examples/blocked/generic-saas-card-grid.md`
- `examples/blocked/invented-component-variant.md`
- `examples/blocked/unapproved-token-literal.md`
- `examples/blocked/raw-components-import.md`

If the document needs prose formatting that no component supports, do not fake
it with ad hoc cards or custom CSS. Use `templates/new-component-request.md`.

## Final Approval Checklist

- Every visual section maps to an approved component.
- Every selected component has `specPath` and `libraryPath` evidence.
- Long-form needs not covered by approved components are escalated.
- No document-only design language was invented.
- Approved and blocked examples were checked.

