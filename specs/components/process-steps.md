# Process Steps

Component ID: `process-steps`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `process-section`
Library target: `library/src/components/ProcessSteps.tsx`
Raw snapshot: `Components/Process Steps/Process Steps.tsx`

## Purpose

Explains a short setup or campaign flow as numbered steps. It should reduce perceived effort.

Registry description: Numbered process cards explaining setup or campaign flow.

## When To Use

- Use to show a small sequence of practical steps.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use for unordered feature lists.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `steps` (array, required).
- Additional props are not allowed in the Phase 3 contract.

## States

- default: step numbers, titles, and body copy are visible.
- hover: optional card emphasis must stay subtle.
- focus: cards are focusable only if interactive.
- empty: do not render without steps.
- responsive: preserve sequence order and numbering.

## Accessibility Rules

- Use ordered-list semantics when steps are sequential.
- Step numbers must also be present in accessible text or structure.
- Do not make decorative cards focusable.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/process-steps.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `typography.headline`
- `typography.title`
- `color.background.salmon`
- `shadow.cardBase`
- `dimension.radius.cardPrimary`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use for practical sequences such as setup or campaign launch.
- Do not use for unordered feature lists.
- Pair with a CTA after the flow if the next action is clear.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Use approved salmon background, card shadow, title/headline type, and primary radius.
- Keep step copy concise and concrete.
- Avoid timeline decoration that makes the sequence harder to scan.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `process-steps`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/ProcessSteps.tsx` as the approved import path.
- Never import from `Components/Process Steps/Process Steps.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.

## Variants

- `default`: Approved default variant. Do not invent unregistered variants.

## Slots

- `steps` (required): Approved steps content/input slot.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="process-steps"
props:
  # use only registry-approved props
:::
```
