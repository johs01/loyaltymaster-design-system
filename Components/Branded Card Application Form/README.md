# Branded Card Application Form

Approval Status: Approved.

## Purpose

Specific branded digital reward card application form and supporting proof layout.

## Proposed Component ID

`branded-card-application-form`

## Source URLs

- https://loyaltymaster.com/get-your-own-customized-digital-reward-card/ - Application fields, proof imagery, and branded-card request flow.

## Screenshot Evidence

- Desktop: `screenshots/desktop.png`
- Mobile: `screenshots/mobile.png`
- Source-specific desktop/mobile: `screenshots/get-your-own-customized-digital-reward-card-desktop.png`, `screenshots/get-your-own-customized-digital-reward-card-mobile.png`

## Existing Approved Components Considered

| Existing Registry ID Considered | specPath Read | libraryPath Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `cta-trial-full-form` | `specs/components/cta-trial-full-form.md` | `library/src/components/CtaTrialFullForm.tsx` | Close structurally but wrong field contract and intent. |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | Too narrow for branded-card application. |
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Feature cards cannot collect application data. |

## Human Review Notes

- This folder is an approved component evidence and handoff record.
- Use this approved component as reference evidence for outlines and implementation planning.
- For clean registry/library implementation, build it through the full registry/spec/library/showcase/gate workflow.
