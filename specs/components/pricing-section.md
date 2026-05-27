# Pricing Section

Component ID: `pricing-section`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `client`
Category: `pricing-section`
Library target: `library/src/components/PricingSection.tsx`
Raw snapshot: `Components/Pricing Section/Pricing Section.tsx`

## Purpose

Presents plan choices and moves visitors toward trial signup. It owns pricing comparison and cadence state.

Registry description: Pricing cards with monthly/yearly state and pro emphasis.

## When To Use

- Use where the visitor needs to compare plans and move toward trial signup.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use for non-commercial comparison tables.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `plans` (array, required).
- `defaultCadence` (string, optional). Allowed values: `monthly`, `yearly`.
- Additional props are not allowed in the Phase 3 contract.

## States

- default: plans, prices, and primary plan emphasis are visible.
- hover: plan actions use approved button/card hover treatment.
- focus: plan actions and billing controls have visible focus.
- active: selected cadence changes prices consistently.
- loading: preserve card dimensions while pricing is loading.
- empty: do not render without plans.
- responsive: cards stack with the recommended plan still clear.

## Accessibility Rules

- Use clear plan headings and price labels.
- Do not communicate recommended status by color alone.
- Billing controls must be keyboard operable.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/pricing-section.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `typography.stat`
- `component.card.primary`
- `component.button.primary`
- `color.accent.yellow`
- `color.background.peach`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use after value, feature, or proof sections.
- Pair with `billing-toggle-button` when cadence changes are needed.
- Do not use as a non-commercial comparison table.
- Center the plan cards when the pricing recipe renders fewer than a full row
  of plans. Do not leave two-card pricing layouts left-aligned.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Use Rodger Regular for stat-like price numerals when appropriate.
- Use primary card token, yellow accent, and approved peach background.
- Keep pricing direct and operational, not decorative.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `pricing-section`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/PricingSection.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Pricing Section/Pricing Section.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.

## Variants

- `default`: Approved default variant. Do not invent unregistered variants.

## Slots

- `plans` (required): Approved plans content/input slot.
- `defaultCadence` (optional): Approved defaultCadence content/input slot.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="pricing-section"
props:
  # use only registry-approved props
:::
```
