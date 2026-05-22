# CTA Trial Full Form

Component ID: `cta-trial-full-form`
Registry: `registry/components.json`
Status: `raw-snapshot`
Client boundary: `client`
Category: `conversion-section`
Library target: `library/src/components/CtaTrialFullForm.tsx`
Raw snapshot: `Components/CTA Trial Full Form/CTA Trial Full Form.tsx`

## Purpose

Collects complete trial signup details when the visitor is ready for a higher-commitment action. It is the heavier conversion pattern.

Registry description: Full trial signup CTA with multiple labeled fields and validation-ready layout.

## When To Use

- Use for final or dedicated trial conversion sections where the visitor is ready to submit details.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use in compact hero areas where a single email CTA is enough.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `heading` (string, optional).
- `submitLabel` (string, required).
- `onSubmit` (callback/object, required). Submit handler for the trial form.
- Additional props are not allowed in the Phase 3 contract.

## States

- default: all fields visible with labels and a clear submit action.
- hover: submit action follows primary button treatment.
- focus: every field and control must have visible focus.
- disabled: disable submit only while validation or submission is active.
- loading: preserve button width and show progress text or affordance.
- error: field errors must appear next to the relevant field.
- success: confirm submission without clearing context too early.
- responsive: preserve form order and comfortable touch targets.

## Accessibility Rules

- Use real labels for every field.
- Associate errors with fields using `aria-describedby` or equivalent.
- Preserve logical tab order and do not trap focus.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/cta-trial-full-form.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `component.input.tenant`
- `component.button.primary`
- `shadow.formShell`
- `color.background.peach`
- `dimension.radius.cardSecondary`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use as a final page section or dedicated conversion block.
- Do not place directly beside another form component.
- Do not use in compact hero layouts where `button-email` is enough.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Tenant/trial inputs use 16px radius.
- Use approved form shell shadow and secondary card radius.
- Keep the form calm and operational, not decorative.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `cta-trial-full-form`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/CtaTrialFullForm.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/CTA Trial Full Form/CTA Trial Full Form.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.
