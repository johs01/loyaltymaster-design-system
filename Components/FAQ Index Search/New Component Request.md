# New Component Request - FAQ Index Search

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: FAQ Index Search
- Proposed registry ID: `faq-index-search`
- Requesting artifact: FAQ index page body.
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
| `faq-accordion` | `specs/components/faq-accordion.md` | `library/src/components/FaqAccordion.tsx` | Accordion supports one FAQ section, not searchable/category index behavior. |
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Feature cards are not searchable FAQ entries. |
| `comparison-table` | `specs/components/comparison-table.md` | `library/src/components/ComparisonTable.tsx` | Tables are wrong for question navigation. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | FAQ index page body. |
| Why no current approved component fits? | Full FAQ index with search/category behavior, beyond a single accordion section. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `faq-accordion`, `features-grid`, `comparison-table` |
| Proposed use case | Full FAQ index with search/category behavior, beyond a single accordion section. |
| Proposed props | heading, intro, search placeholder, categories, items, empty state, support CTA |
| Proposed states | search empty/results, selected category, accordion open/closed, focus |
| Accessibility needs | search label, category buttons, aria-expanded rows, keyboard navigation |
| Token needs from `tokens/design-tokens.json` | search input, accordion, category pills, spacing, focus tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/frequently-asked-questions-loyaltymaster/; screenshots/desktop.png; screenshots/mobile.png; screenshots/frequently-asked-questions-loyaltymaster-desktop.png; screenshots/frequently-asked-questions-loyaltymaster-mobile.png |
| Composition rules | May use internal accordion rows but must be a separate index component. |
| Risk of design drift if skipped | Full FAQ is flattened into weak accordion or generic list. |

## Source URLs

- https://loyaltymaster.com/frequently-asked-questions-loyaltymaster/ - Full FAQ index/search-style content and categories.

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
2. Create `specs/components/faq-index-search.md` with the required component-spec headings.
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
