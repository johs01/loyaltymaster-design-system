# New Component Request - Booking Demo Request Section

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: Booking Demo Request Section
- Proposed registry ID: `booking-demo-request-section`
- Requesting artifact: Booking/demo request page body.
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
| `faq-accordion` | `specs/components/faq-accordion.md` | `library/src/components/FaqAccordion.tsx` | FAQ can support questions only, not booking embed and page flow. |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | Email CTA does not schedule meetings. |
| `cta-trial-full-form` | `specs/components/cta-trial-full-form.md` | `library/src/components/CtaTrialFullForm.tsx` | Trial form collects signup data, not booking details. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | Booking/demo request page body. |
| Why no current approved component fits? | Demo/virtual meeting booking body section with scheduling embed and expectation copy. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `faq-accordion`, `cta-with-button-email`, `cta-trial-full-form` |
| Proposed use case | Demo/virtual meeting booking body section with scheduling embed and expectation copy. |
| Proposed props | heading, intro, agenda bullets, embed URL/title, fallback CTA, FAQ items |
| Proposed states | embed loading/loaded/error, CTA states, FAQ open states |
| Accessibility needs | iframe title, fallback link, keyboard FAQ, loading/error text |
| Token needs from `tokens/design-tokens.json` | embed panel, section, card, button, FAQ, focus tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/book-a-virtual-meeting/; screenshots/desktop.png; screenshots/mobile.png; screenshots/book-a-virtual-meeting-desktop.png; screenshots/book-a-virtual-meeting-mobile.png |
| Composition rules | May combine with FAQ Accordion; must not embed raw iframe without approved wrapper. |
| Risk of design drift if skipped | Booking pages improvise iframe wrappers and CTAs. |

## Source URLs

- https://loyaltymaster.com/book-a-virtual-meeting/ - Booking page with expectation copy, FAQ, and embedded booking behavior.

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
2. Create `specs/components/booking-demo-request-section.md` with the required component-spec headings.
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
