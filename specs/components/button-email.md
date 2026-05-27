# Button Email

Component ID: `button-email`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `client`
Category: `conversion-control`
Library target: `library/src/components/ButtonEmail.tsx`
Raw snapshot: `Components/Button Email/Button Email.tsx`

## Purpose

Captures a single email address at high-intent moments. It combines one input and one primary action without expanding into a full form.

Registry description: Email capture CTA shell pairing an email field with primary action.

## When To Use

- Use for high-intent email capture moments inside hero, CTA, or testimonial sections.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use for multi-field trial forms or low-priority newsletter forms.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `placeholder` (string, optional).
- `buttonLabel` (string, required).
- `onSubmit` (callback/object, required). Submit handler for the email value.
- Additional props are not allowed in the Phase 3 contract.

## States

- default: empty email field with clear placeholder and primary action.
- hover: button can lift or deepen using approved primary button treatment.
- focus: input and button both need visible focus states.
- active: button press must feel immediate and preserve layout.
- disabled: disable submit while validating or submitting.
- loading: button label may change, but width must remain stable.
- error: show concise validation near the field without shifting the shell unpredictably.
- responsive: stack only when width requires it; keep the email CTA visually unified.

## Accessibility Rules

- Use an actual email input with an accessible label, even if the visual label is hidden.
- Associate validation errors with the input.
- Submit must be keyboard reachable and not depend on placeholder text as the only label.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/button-email.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `component.input.tenant`
- `component.button.primary`
- `shadow.formShell`
- `dimension.radius.pill`
- `color.accent.yellow`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use inside hero, CTA, or proof sections where one email is enough.
- Do not combine with `cta-trial-full-form` in the same visual section.
- Do not place inside generic nested cards.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Email CTA inputs may use pill radius by approved conflict resolution.
- Yellow is reserved for the primary action.
- The form shell may use approved form shadow, never page-body glass.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `button-email`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/ButtonEmail.tsx` as the approved import path.
- Never import from `Components/Button Email/Button Email.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.

## Variants

- `default`: Approved default variant. Do not invent unregistered variants.

## Slots

- `placeholder` (optional): Approved placeholder content/input slot.
- `buttonLabel` (required): Approved buttonLabel content/input slot.
- `onSubmit` (required): Approved onSubmit content/input slot.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="button-email"
props:
  # use only registry-approved props
:::
```
