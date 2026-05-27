# Booking Demo Request Section

Approval Status: Approved.

## Purpose

Demo/virtual meeting booking body section with scheduling embed and expectation copy.

## Proposed Component ID

`booking-demo-request-section`

## Source URLs

- https://loyaltymaster.com/book-a-virtual-meeting/ - Booking page with expectation copy, FAQ, and embedded booking behavior.

## Screenshot Evidence

- Desktop: `screenshots/desktop.png`
- Mobile: `screenshots/mobile.png`
- Source-specific desktop/mobile: `screenshots/book-a-virtual-meeting-desktop.png`, `screenshots/book-a-virtual-meeting-mobile.png`

## Existing Approved Components Considered

| Existing Registry ID Considered | specPath Read | libraryPath Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `faq-accordion` | `specs/components/faq-accordion.md` | `library/src/components/FaqAccordion.tsx` | FAQ can support questions only, not booking embed and page flow. |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | Email CTA does not schedule meetings. |
| `cta-trial-full-form` | `specs/components/cta-trial-full-form.md` | `library/src/components/CtaTrialFullForm.tsx` | Trial form collects signup data, not booking details. |

## Human Review Notes

- This folder is an approved component evidence and handoff record.
- Use this approved component as reference evidence for outlines and implementation planning.
- For clean registry/library implementation, build it through the full registry/spec/library/showcase/gate workflow.
