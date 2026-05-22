# Final Pre-Publish Checklist

Approval Status: Approved

## Allowed Artifact Type

Use this checklist before any Loyaltymaster web page, landing page, document,
blog post, brochure, sales page, or subdomain content is published or handed
off.

Normal web pages, landing pages, sales pages, and subdomain pages are body-only
because the existing production website already provides global chrome. Do not
include `navbar-glassmorphism`, header, or `footer` unless the artifact is
explicitly standalone and needs its own shell.

## Required Human Inputs

- Artifact name:
- Artifact type:
- Target location:
- Approval authority:
- Final review date:
- Known exceptions:

## Required Files To Read

- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `BRAND.md`
- `DESIGN_SYSTEM.md`
- `tokens/design-tokens.json`
- `registry/components.json`
- every selected component `specPath`
- every selected component `libraryPath`
- `examples/README.md`
- relevant `examples/approved/` files
- every relevant `examples/blocked/` file
- `PHASE_7C_REPORT.md`
- `PHASE_7E_INTERACTION_FIX_REPORT.md`
- `PHASE_7F_PRODUCTION_FIDELITY_REPORT.md`

## Approved Component Recipe

List the final artifact composition. Every row must be an approved component
from `registry/components.json`.

Approved registry IDs that may appear in the final composition:

- `billing-toggle-button`
- `button-email`
- `comparison-table`
- `cta-trial-full-form`
- `cta-with-button-email`
- `faq-accordion`
- `feature-section-2-column-bullets-image`
- `feature-section-2-column-image`
- `features-grid`
- `footer`
- `geo-fence-use-case`
- `hero-main-section`
- `image-grid`
- `image-strip`
- `navbar-glassmorphism`
- `pricing-section`
- `process-steps`
- `stats-card-strip`
- `testimonial-single`
- `testimonials-grid`

| Order | Registry ID | Purpose | `specPath` Read | `libraryPath` Used |
|---|---|---|---|---|
| 1 |  |  |  |  |

If any section cannot be mapped to a registry ID, the artifact is not ready to
publish. Use `templates/new-component-request.md`.

## Required Spec And Library Evidence

- Every component in the artifact has current `specPath` evidence.
- Every React implementation uses current `libraryPath` evidence.
- Tokens come from `tokens/design-tokens.json`.
- No import uses `/Components/`.
- No import or edit uses `/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION`.
- No import or edit uses `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/`.
- `navbar-glassmorphism` and `footer` are excluded unless the brief explicitly
  requests standalone shell output.

## Blocked Example Rejection Checks

Before publish, confirm the artifact does not match:

- `examples/blocked/generic-saas-card-grid.md`
- `examples/blocked/page-body-glassmorphism.md`
- `examples/blocked/invented-component-variant.md`
- `examples/blocked/raw-components-import.md`
- `examples/blocked/duplicate-global-chrome.md`
- `examples/blocked/unapproved-token-literal.md`

## Final Approval Checklist

- Component-only composition confirmed.
- Body-only output confirmed for normal production website pages.
- Current specs read immediately before use.
- Current library paths used.
- Approved tokens only.
- Approved examples checked.
- Blocked examples rejected.
- Visual review passed or exception recorded.
- Interaction review passed or exception recorded.
- Production-fidelity review passed or exception recorded.
- Missing components were not improvised.
- Approval authority signed off.
