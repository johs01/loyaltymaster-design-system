# New Component Request - Contact Form Section

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: Contact Form Section
- Proposed registry ID: `contact-form-section`
- Requesting artifact: Contact page body.
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
| `cta-trial-full-form` | `specs/components/cta-trial-full-form.md` | `library/src/components/CtaTrialFullForm.tsx` | Trial/signup form is not contact/message form. |
| `button-email` | `specs/components/button-email.md` | `library/src/components/ButtonEmail.tsx` | Email CTA primitive cannot handle message fields. |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | Email capture section is not a contact form. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | Contact page body. |
| Why no current approved component fits? | Contact page form with message fields, consent, and business contact details. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `cta-trial-full-form`, `button-email`, `cta-with-button-email` |
| Proposed use case | Contact page form with message fields, consent, and business contact details. |
| Proposed props | heading, intro, contact methods, fields, consent text, submit label, success/error messages |
| Proposed states | default, hover, focus, validation error, submitting, success, disabled |
| Accessibility needs | labels, described-by errors, consent checkbox semantics, keyboard submit |
| Token needs from `tokens/design-tokens.json` | form field, card, spacing, border, focus, CTA button tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/contact-us/; screenshots/desktop.png; screenshots/mobile.png; screenshots/contact-us-desktop.png; screenshots/contact-us-mobile.png |
| Composition rules | Can follow approved hero or article intro; must not use trial-form fields unless trial-specific. |
| Risk of design drift if skipped | Agents will create one-off forms with inconsistent labels and validation states. |

## Source URLs

- https://loyaltymaster.com/contact-us/ - Contact intro, details, message form, and consent pattern.

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
2. Create `specs/components/contact-form-section.md` with the required component-spec headings.
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
