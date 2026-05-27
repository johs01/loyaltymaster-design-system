# New Component Request - Legal Document Body

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: Legal Document Body
- Proposed registry ID: `legal-document-body`
- Requesting artifact: Legal or policy page body.
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
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Card grids are wrong for legal clauses. |
| `comparison-table` | `specs/components/comparison-table.md` | `library/src/components/ComparisonTable.tsx` | Comparison tables are not legal document flow. |
| `feature-section-2-column-image` | `specs/components/feature-section-2-column-image.md` | `library/src/components/FeatureSection2ColumnImage.tsx` | Image sections are inappropriate for policy documents. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | Legal or policy page body. |
| Why no current approved component fits? | Dense legal/policy document layout for privacy, terms, acceptable use, subscription, and cookie policy pages. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `features-grid`, `comparison-table`, `feature-section-2-column-image` |
| Proposed use case | Dense legal/policy document layout for privacy, terms, acceptable use, subscription, and cookie policy pages. |
| Proposed props | title, effective date, intro, clauses, subclauses, optional table of contents |
| Proposed states | static, optional anchor active state if later approved |
| Accessibility needs | document landmark, stable headings, anchor targets, readable/printable layout |
| Token needs from `tokens/design-tokens.json` | body typography, metadata style, document spacing, link/focus tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/privacy-policy/; screenshots/desktop.png; screenshots/mobile.png; screenshots/privacy-policy-desktop.png; screenshots/privacy-policy-mobile.png<br>https://loyaltymaster.com/terms-of-use/; screenshots/desktop.png; screenshots/mobile.png; screenshots/terms-of-use-desktop.png; screenshots/terms-of-use-mobile.png |
| Composition rules | Usually body-only without marketing CTAs unless legal brief explicitly permits support links. |
| Risk of design drift if skipped | Legal pages become visually inconsistent or hard to scan. |

## Source URLs

- https://loyaltymaster.com/privacy-policy/ - Privacy policy clause structure and legal prose.
- https://loyaltymaster.com/terms-of-use/ - Terms document with long clauses and headings.

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
2. Create `specs/components/legal-document-body.md` with the required component-spec headings.
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
