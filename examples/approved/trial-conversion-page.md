# Approved Example: Trial Conversion Page

## Verdict

Approved. This composition follows `READ_FIRST_AI.md`, `PREFLIGHT.md`,
`registry/components.json`, the current component specs, canonical
`library/src/components/` paths, and the `showcase/app` visual review workflow.

## Purpose

Create a direct trial-start page for a Loyaltymaster visitor who is ready to see
how sendPUSH works.

## Component Plan

| Order | Registry ID | Spec Read Immediately Before Use | Canonical Library Path |
|---|---|---|---|
| 1 | `navbar-glassmorphism` | `specs/components/navbar-glassmorphism.md` | `library/src/components/NavbarGlassmorphism.tsx` |
| 2 | `hero-main-section` | `specs/components/hero-main-section.md` | `library/src/components/HeroMainSection.tsx` |
| 3 | `cta-trial-full-form` | `specs/components/cta-trial-full-form.md` | `library/src/components/CtaTrialFullForm.tsx` |
| 4 | `process-steps` | `specs/components/process-steps.md` | `library/src/components/ProcessSteps.tsx` |
| 5 | `faq-accordion` | `specs/components/faq-accordion.md` | `library/src/components/FaqAccordion.tsx` |

## Token And Visual Rules

- Use named tokens from `tokens/design-tokens.json`; do not use raw color,
  radius, shadow, spacing, or typography literals.
- Keep yellow for the primary trial action only.
- Use Rodger Bold for the main promise and Onest for UI/body copy.
- Allow glass treatment only in the approved nav/mobile shell.
- Review live output in `showcase/app` before treating the composition as
  visually aligned.

## Composition Rules

- The page has one dominant action: start the trial.
- The trial form must stay close to the hero promise so the conversion path is
  immediate.
- Do not add extra nav, header, footer, or decorative SaaS cards unless the
  brief explicitly requests them and the relevant component spec allows them.
- If any selected component spec changes, reread the spec and update the next
  page accordingly.
