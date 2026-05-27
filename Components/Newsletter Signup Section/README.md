# Newsletter Signup Section

Approval Status: Approved.

## Purpose

Full newsletter signup page/section beyond the compact approved email CTA primitive.

## Proposed Component ID

`newsletter-signup-section`

## Source URLs

- https://loyaltymaster.com/join-email-newsletter-form/ - Newsletter signup intent, email capture, privacy note, and value copy.

## Screenshot Evidence

- Desktop: `screenshots/desktop.png`
- Mobile: `screenshots/mobile.png`
- Source-specific desktop/mobile: `screenshots/join-email-newsletter-form-desktop.png`, `screenshots/join-email-newsletter-form-mobile.png`

## Existing Approved Components Considered

| Existing Registry ID Considered | specPath Read | libraryPath Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `button-email` | `specs/components/button-email.md` | `library/src/components/ButtonEmail.tsx` | Compact primitive is not a complete newsletter section. |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | Close for conversion, but lacks newsletter-specific privacy/value structure. |
| `cta-trial-full-form` | `specs/components/cta-trial-full-form.md` | `library/src/components/CtaTrialFullForm.tsx` | Trial form asks for the wrong data. |

## Human Review Notes

- This folder is an approved component evidence and handoff record.
- Use this approved component as reference evidence for outlines and implementation planning.
- For clean registry/library implementation, build it through the full registry/spec/library/showcase/gate workflow.
