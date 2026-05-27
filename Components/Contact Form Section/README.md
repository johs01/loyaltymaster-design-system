# Contact Form Section

Approval Status: Approved.

## Purpose

Contact page form with message fields, consent, and business contact details.

## Proposed Component ID

`contact-form-section`

## Source URLs

- https://loyaltymaster.com/contact-us/ - Contact intro, details, message form, and consent pattern.

## Screenshot Evidence

- Desktop: `screenshots/desktop.png`
- Mobile: `screenshots/mobile.png`
- Source-specific desktop/mobile: `screenshots/contact-us-desktop.png`, `screenshots/contact-us-mobile.png`

## Existing Approved Components Considered

| Existing Registry ID Considered | specPath Read | libraryPath Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `cta-trial-full-form` | `specs/components/cta-trial-full-form.md` | `library/src/components/CtaTrialFullForm.tsx` | Trial/signup form is not contact/message form. |
| `button-email` | `specs/components/button-email.md` | `library/src/components/ButtonEmail.tsx` | Email CTA primitive cannot handle message fields. |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | Email capture section is not a contact form. |

## Human Review Notes

- This folder is an approved component evidence and handoff record.
- Use this approved component as reference evidence for outlines and implementation planning.
- For clean registry/library implementation, build it through the full registry/spec/library/showcase/gate workflow.
