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

A blog or document template may only use approved registry components. This
need-to-component map lists common fits; the registry remains the only
inventory, so any `status: "stable"` component whose `whenToUse` matches a
document need may fill it:

| Document Need | Approved Components |
|---|---|
| Opening promise or topic | `hero-main-section` |
| Long-form article body (eyebrow, lead, media column, checklists, callout, closing CTA band) | `article-body` |
| Legal or policy document body | `legal-document-body` |
| Article/blog index or listing | `blog-article-index`, `knowledge-base-index`, `faq-index-search` |
| Email signup or trial action | `button-email`, `cta-with-button-email`, `cta-trial-full-form`, `newsletter-signup-section` |
| Product explanation | `feature-section-2-column-image`, `feature-section-2-column-bullets-image`, `features-grid` |
| Problem or opportunity framing | `strategy-sentence-cards` |
| Step-by-step explanation | `process-steps` |
| Comparison or decision support | `comparison-table`, `pricing-section`, `pricing-page-matrix`, `billing-toggle-button` |
| Proof | `stats-card-strip`, `testimonials-grid`, `testimonial-single`, `image-grid` |
| Media proof | `image-strip`, `geo-fence-use-case` |
| Industry or use-case grid | `industry-use-case-card-grid` |
| Questions | `faq-accordion` |
| Contact, booking, or application step | `contact-form-section`, `booking-demo-request-section`, `branded-card-application-form` |
| Confirmation / thank-you state | `thank-you-confirmation-section` |
| Pre-launch placeholder | `coming-soon-section` |
| Explicit shell when requested | `navbar-glassmorphism`, `footer` |

If the document requires a layout, state, or treatment no stable registry
component expresses (pull quotes, sidebar notes, tables outside
`comparison-table`, downloadable PDF layout panels), stop and complete
`templates/new-component-request.md`.

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

