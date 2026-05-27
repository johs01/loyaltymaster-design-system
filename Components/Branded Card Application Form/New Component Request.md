# New Component Request - Branded Card Application Form

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: Branded Card Application Form
- Proposed registry ID: `branded-card-application-form`
- Requesting artifact: Branded card application page body.
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
| `cta-trial-full-form` | `specs/components/cta-trial-full-form.md` | `library/src/components/CtaTrialFullForm.tsx` | Close structurally but wrong field contract and intent. |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | Too narrow for branded-card application. |
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Feature cards cannot collect application data. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | Branded card application page body. |
| Why no current approved component fits? | Specific branded digital reward card application form and supporting proof layout. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `cta-trial-full-form`, `cta-with-button-email`, `features-grid` |
| Proposed use case | Specific branded digital reward card application form and supporting proof layout. |
| Proposed props | heading, intro, proof items, application fields, consent, submit label, success/error messages |
| Proposed states | default, hover, focus, validation error, submitting, success, disabled |
| Accessibility needs | field labels, grouped fields, consent semantics, validation messages |
| Token needs from `tokens/design-tokens.json` | form field, card, section, CTA button, proof media, focus tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/get-your-own-customized-digital-reward-card/; screenshots/desktop.png; screenshots/mobile.png; screenshots/get-your-own-customized-digital-reward-card-desktop.png; screenshots/get-your-own-customized-digital-reward-card-mobile.png |
| Composition rules | May follow approved hero/proof; must keep application-specific fields intact. |
| Risk of design drift if skipped | Agents lose required fields or invent generic form variants. |

## Source URLs

- https://loyaltymaster.com/get-your-own-customized-digital-reward-card/ - Application fields, proof imagery, and branded-card request flow.

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
2. Create `specs/components/branded-card-application-form.md` with the required component-spec headings.
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
