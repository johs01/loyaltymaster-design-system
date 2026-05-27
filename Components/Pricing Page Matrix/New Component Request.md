# New Component Request - Pricing Page Matrix

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: Pricing Page Matrix
- Proposed registry ID: `pricing-page-matrix`
- Requesting artifact: Pricing page body.
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
| `pricing-section` | `specs/components/pricing-section.md` | `library/src/components/PricingSection.tsx` | Simple plan cards are not the full matrix/page contract. |
| `billing-toggle-button` | `specs/components/billing-toggle-button.md` | `library/src/components/BillingToggleButton.tsx` | Toggle is only a control. |
| `comparison-table` | `specs/components/comparison-table.md` | `library/src/components/ComparisonTable.tsx` | Comparison table cannot replace pricing cards and CTAs. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | Pricing page body. |
| Why no current approved component fits? | Full pricing page matrix for monthly/yearly plan groups, feature lists, disclaimers, and payment proof. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `pricing-section`, `billing-toggle-button`, `comparison-table` |
| Proposed use case | Full pricing page matrix for monthly/yearly plan groups, feature lists, disclaimers, and payment proof. |
| Proposed props | heading, intro, billing groups, plans, features, disclaimers, payment methods, CTA labels |
| Proposed states | billing selected, card hover/focus, CTA states, responsive stacking |
| Accessibility needs | plan headings, price labels, billing controls, accessible CTA links, logo alt text |
| Token needs from `tokens/design-tokens.json` | pricing card, billing toggle, CTA button, section, list, logo grid, focus tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/price-list/; screenshots/desktop.png; screenshots/mobile.png; screenshots/price-list-desktop.png; screenshots/price-list-mobile.png |
| Composition rules | May reuse billing controls internally but must be its own full pricing-page component. |
| Risk of design drift if skipped | Pricing is oversimplified or rebuilt as unapproved plan-card layouts. |

## Source URLs

- https://loyaltymaster.com/price-list/ - Monthly/yearly pricing, six pricing widgets, payment methods, disclaimers.

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
2. Create `specs/components/pricing-page-matrix.md` with the required component-spec headings.
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
