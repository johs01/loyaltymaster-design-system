# Billing Toggle Button

Component ID: `billing-toggle-button`
Registry: `registry/components.json`
Status: `raw-snapshot`
Client boundary: `client`
Category: `pricing-control`
Library target: `library/src/components/BillingToggleButton.tsx`
Raw snapshot: `Components/Billing Toggle Button/Billing Toggle Button.tsx`

## Purpose

Controls the billing cadence inside pricing experiences. It exists to make the monthly/yearly choice obvious without turning the control into a generic tab system.

Registry description: Monthly/yearly billing toggle control for pricing sections.

## When To Use

- Use when a pricing view needs a clear two-state billing cadence selector.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use as a generic tab control or unrelated segmented control.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `value` (string, required). Allowed values: `monthly`, `yearly`.
- `onChange` (callback/object, required). Callback receiving the selected billing cadence.
- Additional props are not allowed in the Phase 3 contract.

## States

- default: selected cadence is visually clear and the unselected cadence remains readable.
- hover: the available option may strengthen contrast or elevation using approved motion timing.
- focus: each option must show a visible keyboard focus indicator.
- active: selection change must be immediate and announced through state.
- disabled: only use when pricing cannot be changed; preserve readable labels.
- loading: not applicable unless pricing data is being fetched.
- responsive: keep both options on one line and preserve a stable pill footprint.

## Accessibility Rules

- Use a radiogroup or segmented button pattern with `aria-pressed` or radio semantics.
- Expose Monthly and Yearly as text, not icon-only choices.
- Do not rely on color alone to indicate the selected cadence.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/billing-toggle-button.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `component.button.primary`
- `color.accent.yellow`
- `color.accent.orange`
- `dimension.radius.pill`
- `motion.duration.base`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use inside `pricing-section` or directly above pricing cards.
- Do not use as site navigation, content tabs, or a generic filter control.
- Pair with pricing copy that makes the cadence consequence clear.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- The control must feel compact and decisive, not like a large CTA.
- Use pill radius and approved accent tokens only.
- Transition timing must use the approved motion token.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `billing-toggle-button`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/BillingToggleButton.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Billing Toggle Button/Billing Toggle Button.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.
