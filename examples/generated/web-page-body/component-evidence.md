# Component Evidence: Web Page Body

Every component below is approved in `registry/components.json`. Each selected
component must use its current `specPath` and `libraryPath` before future reuse.

| Registry ID | Spec Path | Library Path | Screenshot Evidence | Token Evidence |
|---|---|---|---|---|
| `hero-main-section` | `specs/components/hero-main-section.md` | `library/src/components/HeroMainSection.tsx` | `assets/screenshots/hero-main-section.png` | `typography.display`, `typography.body`, `component.button.primary`, `color.background.peach`, `shadow.cardBase` |
| `feature-section-2-column-image` | `specs/components/feature-section-2-column-image.md` | `library/src/components/FeatureSection2ColumnImage.tsx` | `assets/screenshots/feature-section-2-column-image.png` | `typography.headline`, `typography.body`, `color.background.peach`, `dimension.radius.cardPrimary` |
| `feature-section-2-column-bullets-image` | `specs/components/feature-section-2-column-bullets-image.md` | `library/src/components/FeatureSection2ColumnBulletsImage.tsx` | `assets/screenshots/feature-section-2-column-bullets-image.png` | `typography.headline`, `typography.body`, `color.background.salmon`, `dimension.radius.cardPrimary` |
| `image-strip` | `specs/components/image-strip.md` | `library/src/components/ImageStrip.tsx` | `assets/screenshots/image-strip.png` | `dimension.radius.cardPrimary`, `dimension.spacing.md`, `color.surface.white` |
| `comparison-table` | `specs/components/comparison-table.md` | `library/src/components/ComparisonTable.tsx` | `assets/screenshots/comparison-table.png` | `typography.headline`, `typography.body`, `color.background.cyan`, `color.surface.white`, `shadow.cardBase` |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | `assets/screenshots/cta-with-button-email.png` | `component.input.tenant`, `component.button.primary`, `color.background.dark`, `typography.headline` |

## Additional Required Evidence

- Token source: `tokens/design-tokens.json`
- Registry source: `registry/components.json`
- Template source: `templates/web-page-brief.md`
- Approved examples checked: `examples/approved/proof-led-landing-page.md`
- Blocked examples checked: `examples/blocked/duplicate-global-chrome.md`,
  `examples/blocked/generic-saas-card-grid.md`,
  `examples/blocked/invented-component-variant.md`,
  `examples/blocked/page-body-glassmorphism.md`,
  `examples/blocked/raw-components-import.md`,
  `examples/blocked/unapproved-token-literal.md`
