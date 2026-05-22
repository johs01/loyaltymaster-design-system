# Approved Example: Proof-Led Landing Page

## Verdict

Approved. This composition follows `READ_FIRST_AI.md`, `PREFLIGHT.md`,
`registry/components.json`, current component specs, canonical
`library/src/components/` paths, and `showcase/app` visual review.

## Purpose

Show credibility and operational usefulness before asking the visitor to start
a conversation or trial.

## Component Plan

| Order | Registry ID | Spec Read Immediately Before Use | Canonical Library Path |
|---|---|---|---|
| 1 | `hero-main-section` | `specs/components/hero-main-section.md` | `library/src/components/HeroMainSection.tsx` |
| 2 | `stats-card-strip` | `specs/components/stats-card-strip.md` | `library/src/components/StatsCardStrip.tsx` |
| 3 | `feature-section-2-column-image` | `specs/components/feature-section-2-column-image.md` | `library/src/components/FeatureSection2ColumnImage.tsx` |
| 4 | `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` |
| 5 | `testimonials-grid` | `specs/components/testimonials-grid.md` | `library/src/components/TestimonialsGrid.tsx` |
| 6 | `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` |

## Token And Visual Rules

- Use the current token names from `tokens/design-tokens.json`.
- Use Rodger Regular only where the spec allows stat numerals.
- Keep proof sections restrained and scannable; avoid marketing fluff and
  vague AI panels.
- Review the live component specimens in `showcase/app` against the approved
  screenshot references.

## Composition Rules

- Stats must support the page promise rather than becoming isolated decoration.
- Feature content should explain a real Loyaltymaster/sendPUSH workflow.
- Testimonials must not be mixed with invented logos or unsupported claims.
- If a needed proof pattern is missing from `registry/components.json`, stop
  and ask before creating a new component.
