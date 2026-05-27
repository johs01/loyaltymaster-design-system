# Coming Soon Section

Approval Status: Approved.

## Purpose

Simple coming-soon or maintenance page body pattern when conversion scope includes such pages.

## Proposed Component ID

`coming-soon-section`

## Source URLs

- https://loyaltymaster.com/elementor-landing-page-143/ - Simple coming-soon page from Elementor landing entry.

## Screenshot Evidence

- Desktop: `screenshots/desktop.png`
- Mobile: `screenshots/mobile.png`
- Source-specific desktop/mobile: `screenshots/elementor-landing-page-143-desktop.png`, `screenshots/elementor-landing-page-143-mobile.png`

## Existing Approved Components Considered

| Existing Registry ID Considered | specPath Read | libraryPath Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `hero-main-section` | `specs/components/hero-main-section.md` | `library/src/components/HeroMainSection.tsx` | Hero can approximate layout, but maintenance intent is not documented. |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | CTA section does not explain maintenance state. |
| `button-email` | `specs/components/button-email.md` | `library/src/components/ButtonEmail.tsx` | Email primitive is insufficient as a page body. |

## Human Review Notes

- This folder is an approved component evidence and handoff record.
- Use this approved component as reference evidence for outlines and implementation planning.
- For clean registry/library implementation, build it through the full registry/spec/library/showcase/gate workflow.
