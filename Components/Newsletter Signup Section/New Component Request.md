# New Component Request - Newsletter Signup Section

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: Newsletter Signup Section
- Proposed registry ID: `newsletter-signup-section`
- Requesting artifact: Newsletter signup page or body section.
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
| `button-email` | `specs/components/button-email.md` | `library/src/components/ButtonEmail.tsx` | Compact primitive is not a complete newsletter section. |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | Close for conversion, but lacks newsletter-specific privacy/value structure. |
| `cta-trial-full-form` | `specs/components/cta-trial-full-form.md` | `library/src/components/CtaTrialFullForm.tsx` | Trial form asks for the wrong data. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | Newsletter signup page or body section. |
| Why no current approved component fits? | Full newsletter signup page/section beyond the compact approved email CTA primitive. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `button-email`, `cta-with-button-email`, `cta-trial-full-form` |
| Proposed use case | Full newsletter signup page/section beyond the compact approved email CTA primitive. |
| Proposed props | heading, intro, benefits, email placeholder, submit label, privacy note, success/error messages |
| Proposed states | default, hover, focus-within, submitting, success, error, disabled |
| Accessibility needs | email label, validation message, privacy link focus, submit status |
| Token needs from `tokens/design-tokens.json` | email input, CTA button, section spacing, body text, focus tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/join-email-newsletter-form/; screenshots/desktop.png; screenshots/mobile.png; screenshots/join-email-newsletter-form-desktop.png; screenshots/join-email-newsletter-form-mobile.png |
| Composition rules | May appear standalone or after article content; must not duplicate global newsletter footer chrome. |
| Risk of design drift if skipped | Newsletter pages drift into generic lead-generation layouts. |

## Source URLs

- https://loyaltymaster.com/join-email-newsletter-form/ - Newsletter signup intent, email capture, privacy note, and value copy.

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
2. Create `specs/components/newsletter-signup-section.md` with the required component-spec headings.
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
