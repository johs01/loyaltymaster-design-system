# Component Evidence: Landing Page Body

Every component below is approved in `registry/components.json`. Each selected
component must use its current `specPath` and `libraryPath` before future reuse.

| Registry ID | Spec Path | Library Path | Screenshot Evidence | Token Evidence |
|---|---|---|---|---|
| `hero-main-section` | `specs/components/hero-main-section.md` | `library/src/components/HeroMainSection.tsx` | `assets/screenshots/hero-main-section.png` | `typography.display`, `typography.body`, `component.button.primary`, `color.background.peach`, `shadow.cardBase` |
| `button-email` | `specs/components/button-email.md` | `library/src/components/ButtonEmail.tsx` | `assets/screenshots/button-email.png` | `component.input.tenant`, `component.button.primary`, `shadow.formShell`, `dimension.radius.pill`, `color.accent.yellow` |
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | `assets/screenshots/features-grid.png` | `typography.title`, `typography.body`, `color.surface.panelLight`, `shadow.cardBase`, `dimension.radius.cardPrimary` |
| `process-steps` | `specs/components/process-steps.md` | `library/src/components/ProcessSteps.tsx` | `assets/screenshots/process-steps.png` | `typography.headline`, `typography.title`, `color.background.salmon`, `shadow.cardBase`, `dimension.radius.cardPrimary` |
| `stats-card-strip` | `specs/components/stats-card-strip.md` | `library/src/components/StatsCardStrip.tsx` | `assets/screenshots/stats-card-strip.png` | `typography.stat`, `typography.body`, `color.surface.panelLight`, `dimension.radius.cardPrimary` |
| `testimonials-grid` | `specs/components/testimonials-grid.md` | `library/src/components/TestimonialsGrid.tsx` | `assets/screenshots/testimonials-grid.png` | `typography.body`, `color.surface.panelLight`, `color.surface.white`, `shadow.cardBase`, `dimension.radius.cardPrimary` |
| `pricing-section` | `specs/components/pricing-section.md` | `library/src/components/PricingSection.tsx` | `assets/screenshots/pricing-section.png` | `typography.stat`, `component.card.primary`, `component.button.primary`, `color.accent.yellow`, `color.background.peach` |
| `testimonial-single` | `specs/components/testimonial-single.md` | `library/src/components/TestimonialSingle.tsx` | `assets/screenshots/testimonial-single.png` | `typography.body`, `color.background.dark`, `color.surface.white`, `dimension.radius.cardPrimary` |
| `faq-accordion` | `specs/components/faq-accordion.md` | `library/src/components/FaqAccordion.tsx` | `assets/screenshots/faq-accordion.png` | `typography.headline`, `typography.body`, `dimension.radius.inputCompact`, `color.surface.panelLight`, `motion.duration.base` |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | `assets/screenshots/cta-with-button-email.png` | `component.input.tenant`, `component.button.primary`, `color.background.dark`, `typography.headline` |

## Additional Required Evidence

- Token source: `tokens/design-tokens.json`
- Registry source: `registry/components.json`
- Template source: `templates/landing-page.md`
- Approved examples checked: `examples/approved/trial-conversion-page.md`,
  `examples/approved/proof-led-landing-page.md`
- Blocked examples checked: `examples/blocked/duplicate-global-chrome.md`,
  `examples/blocked/generic-saas-card-grid.md`,
  `examples/blocked/invented-component-variant.md`,
  `examples/blocked/page-body-glassmorphism.md`,
  `examples/blocked/raw-components-import.md`,
  `examples/blocked/unapproved-token-literal.md`

