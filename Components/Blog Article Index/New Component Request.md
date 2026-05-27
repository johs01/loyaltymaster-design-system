# New Component Request - Blog Article Index

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: Blog Article Index
- Proposed registry ID: `blog-article-index`
- Requesting artifact: Blog index page body.
- Artifact type: Body-only Loyaltymaster page content
- Business reason: Enable conversion of existing Loyaltymaster.com pages without AI agents inventing unapproved layouts.
- Approval authority: Loyaltymaster design-system owner
- Deadline or dependency: Required before full Loyaltymaster.com conversion for pages using this pattern.

## Required Files To Read

- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `BRAND.md`
- `DESIGN_SYSTEM.md`
- `tokens/design-tokens.json`
- `registry/components.json`
- Existing substitute component specs listed below
- Existing substitute component library files listed below
- `examples/README.md`
- `examples/approved/`
- `examples/blocked/`
- `templates/new-component-request.md`

## Approved Component Recipe

Before this request can proceed, the current approved Lego set was checked and found insufficient.

| Existing Registry ID Considered | `specPath` Read | `libraryPath` Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Feature cards are not article cards with metadata. |
| `image-grid` | `specs/components/image-grid.md` | `library/src/components/ImageGrid.tsx` | Logo/proof grid is not an article index. |
| `testimonials-grid` | `specs/components/testimonials-grid.md` | `library/src/components/TestimonialsGrid.tsx` | Testimonial cards are not article listing cards. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | Blog index page body. |
| Why no current approved component fits? | Blog/article collection index with approved article cards, empty state, and pagination/filter affordances. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `features-grid`, `image-grid`, `testimonials-grid` |
| Proposed use case | Blog/article collection index with approved article cards, empty state, and pagination/filter affordances. |
| Proposed props | heading, intro, articles, categories, pagination, empty state |
| Proposed states | card hover/focus, empty state, selected category, pagination states |
| Accessibility needs | article links, metadata semantics, focus-visible cards, pagination labels |
| Token needs from `tokens/design-tokens.json` | article card, section, metadata, link, image, focus tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/blog/; screenshots/desktop.png; screenshots/mobile.png; screenshots/blog-desktop.png; screenshots/blog-mobile.png |
| Composition rules | May lead to article-body pages later; must not reuse generic SaaS card grid styling. |
| Risk of design drift if skipped | Article listings become generic card grids. |

## Source URLs

- https://loyaltymaster.com/blog/ - Blog index and article collection intent.

## Blocked Example Rejection Checks

- `examples/blocked/generic-saas-card-grid.md`
- `examples/blocked/page-body-glassmorphism.md`
- `examples/blocked/invented-component-variant.md`
- `examples/blocked/raw-components-import.md`
- `examples/blocked/duplicate-global-chrome.md`
- `examples/blocked/unapproved-token-literal.md`

## Separate Approval Workflow

This approved component record does not by itself update the clean registry or library implementation. Before direct code use from the design-system package, complete:

1. Add a new entry to `registry/components.json`.
2. Create `specs/components/blog-article-index.md` with the required component-spec headings.
3. Add canonical screenshot/reference evidence.
4. Add `library/src/components/<ComponentName>.tsx`.
5. Add a showcase specimen.
6. Add visual, interaction, and production-fidelity gates.
7. Run validation and typechecks.
8. Receive explicit human approval.
9. Only then update templates to allow this component.

## Final Approval Checklist

- Existing components were considered first.
- Current `specPath` and `libraryPath` evidence was reviewed.
- The request explains why the approved component set is insufficient.
- Token needs are tied to `tokens/design-tokens.json`.
- Source URL evidence is captured in this folder.
- The approval record does not update registry or library implementation by itself.
- The separate build, gate, and approval workflow is acknowledged.
