# Component Evidence: Brochure Content Body

Every component below is approved in `registry/components.json`. Each selected
component must use its current `specPath` and `libraryPath` before future reuse.

| Registry ID | Spec Path | Library Path | Screenshot Evidence | Token Evidence |
|---|---|---|---|---|
| `hero-main-section` | `specs/components/hero-main-section.md` | `library/src/components/HeroMainSection.tsx` | `assets/screenshots/hero-main-section.png` | `typography.display`, `typography.body`, `component.button.primary`, `color.background.peach`, `shadow.cardBase` |
| `geo-fence-use-case` | `specs/components/geo-fence-use-case.md` | `library/src/components/GeoFenceUseCase.tsx` | `assets/screenshots/geo-fence-use-case.png` | `typography.headline`, `typography.body`, `color.background.salmon`, `color.accent.yellow`, `dimension.radius.cardPrimary` |
| `image-strip` | `specs/components/image-strip.md` | `library/src/components/ImageStrip.tsx` | `assets/screenshots/image-strip.png` | `dimension.radius.cardPrimary`, `dimension.spacing.md`, `color.surface.white` |
| `stats-card-strip` | `specs/components/stats-card-strip.md` | `library/src/components/StatsCardStrip.tsx` | `assets/screenshots/stats-card-strip.png` | `typography.stat`, `typography.body`, `color.surface.panelLight`, `dimension.radius.cardPrimary` |
| `pricing-section` | `specs/components/pricing-section.md` | `library/src/components/PricingSection.tsx` | `assets/screenshots/pricing-section.png` | `typography.stat`, `component.card.primary`, `component.button.primary`, `color.accent.yellow`, `color.background.peach` |
| `testimonial-single` | `specs/components/testimonial-single.md` | `library/src/components/TestimonialSingle.tsx` | `assets/screenshots/testimonial-single.png` | `typography.body`, `color.background.dark`, `color.surface.white`, `dimension.radius.cardPrimary` |
| `cta-trial-full-form` | `specs/components/cta-trial-full-form.md` | `library/src/components/CtaTrialFullForm.tsx` | `assets/screenshots/cta-trial-full-form.png` | `component.input.tenant`, `component.button.primary`, `shadow.formShell`, `color.background.peach`, `dimension.radius.cardSecondary` |

## Additional Required Evidence

- Token source: `tokens/design-tokens.json`
- Registry source: `registry/components.json`
- Template source: `templates/brochure-content.md`
- Approved examples checked: `examples/approved/pricing-evaluation-page.md`,
  `examples/approved/proof-led-landing-page.md`
- Blocked examples checked: `examples/blocked/generic-saas-card-grid.md`,
  `examples/blocked/page-body-glassmorphism.md`,
  `examples/blocked/invented-component-variant.md`,
  `examples/blocked/unapproved-token-literal.md`
