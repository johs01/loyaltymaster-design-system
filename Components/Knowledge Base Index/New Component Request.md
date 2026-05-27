# New Component Request - Knowledge Base Index

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: Knowledge Base Index
- Proposed registry ID: `knowledge-base-index`
- Requesting artifact: Knowledge base or docs index page body.
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
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Feature cards are not docs navigation. |
| `faq-accordion` | `specs/components/faq-accordion.md` | `library/src/components/FaqAccordion.tsx` | FAQ rows do not support docs categories. |
| `image-grid` | `specs/components/image-grid.md` | `library/src/components/ImageGrid.tsx` | Logo/proof grid is not a docs index. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | Knowledge base or docs index page body. |
| Why no current approved component fits? | Knowledge-base/docs index pattern for encyclopedia-style category and article navigation. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `features-grid`, `faq-accordion`, `image-grid` |
| Proposed use case | Knowledge-base/docs index pattern for encyclopedia-style category and article navigation. |
| Proposed props | heading, intro, search placeholder, categories, article links, popular articles, empty state |
| Proposed states | search, category selected, article hover/focus, empty/loading states |
| Accessibility needs | search label, nav landmarks, category buttons, article link labels |
| Token needs from `tokens/design-tokens.json` | docs card/list, search input, category nav, spacing, text, focus tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/encyclopedia/; screenshots/desktop.png; screenshots/mobile.png; screenshots/encyclopedia-desktop.png; screenshots/encyclopedia-mobile.png |
| Composition rules | Do not use blog index styling unless a later approval merges these patterns. |
| Risk of design drift if skipped | Docs pages become indistinguishable from blogs or feature grids. |

## Source URLs

- https://loyaltymaster.com/encyclopedia/ - BetterDocs encyclopedia shortcode and docs-index intent.

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
2. Create `specs/components/knowledge-base-index.md` with the required component-spec headings.
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
