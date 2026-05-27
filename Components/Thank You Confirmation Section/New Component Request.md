# New Component Request - Thank You Confirmation Section

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: Thank You Confirmation Section
- Proposed registry ID: `thank-you-confirmation-section`
- Requesting artifact: Thank-you page body.
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
| `testimonial-single` | `specs/components/testimonial-single.md` | `library/src/components/TestimonialSingle.tsx` | Proof section is not confirmation or next steps. |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | CTA asks for action, not confirmation status. |
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Cards would create generic success-card drift. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | Thank-you page body. |
| Why no current approved component fits? | Confirmation and next-steps body section for form, booking, and email-list thank-you pages. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `testimonial-single`, `cta-with-button-email`, `features-grid` |
| Proposed use case | Confirmation and next-steps body section for form, booking, and email-list thank-you pages. |
| Proposed props | eyebrow, heading, message, next steps, support links, optional CTA/image |
| Proposed states | static, optional CTA/link states |
| Accessibility needs | main status heading, clear next steps, accessible links |
| Token needs from `tokens/design-tokens.json` | confirmation typography, section spacing, panel, link/focus, CTA tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/thank-you-page-branded-card-application/; screenshots/desktop.png; screenshots/mobile.png; screenshots/thank-you-page-branded-card-application-desktop.png; screenshots/thank-you-page-branded-card-application-mobile.png<br>https://loyaltymaster.com/thank-you-page-virtual-meeting/; screenshots/desktop.png; screenshots/mobile.png; screenshots/thank-you-page-virtual-meeting-desktop.png; screenshots/thank-you-page-virtual-meeting-mobile.png |
| Composition rules | Usually one compact body section; must not add global chrome. |
| Risk of design drift if skipped | Thank-you pages become inconsistent one-off success layouts. |

## Source URLs

- https://loyaltymaster.com/thank-you-page-branded-card-application/ - Branded card application confirmation pattern.
- https://loyaltymaster.com/thank-you-page-virtual-meeting/ - Meeting booking confirmation and next-step pattern.

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
2. Create `specs/components/thank-you-confirmation-section.md` with the required component-spec headings.
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
