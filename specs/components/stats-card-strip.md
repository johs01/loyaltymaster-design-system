# Stats Card Strip

Component ID: `stats-card-strip`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `proof-section`
Library target: `library/src/components/StatsCardStrip.tsx`
Raw snapshot: `Components/Stats Card Strip/Stats Card Strip.tsx`

## Purpose

Shows a small set of measurable outcomes in compact proof cards. It creates momentum without becoming analytics UI.

Registry description: Compact strip of stat cards for proof and momentum.

## When To Use

- Use for a short set of measurable business outcomes.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use for long analytics dashboards.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `stats` (array, required).
- Additional props are not allowed in the Phase 3 contract.

## States

- default: each stat has a numeral and explanatory label.
- hover: proof cards use the approved subtle lift and overlay treatment from the live template page.
- focus: only linked cards receive focus.
- empty: do not render without stats.
- responsive: cards wrap or stack while preserving hierarchy.

## Accessibility Rules

- Write stat labels in text, not only visual shorthand.
- Do not rely on color alone for positive meaning.
- Keep numerals and labels read together.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/stats-card-strip.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `typography.stat`
- `typography.body`
- `color.surface.panelLight`
- `dimension.radius.cardPrimary`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use after hero, feature, or testimonial content when numbers strengthen proof.
- Do not use for long dashboards or analytics tables.
- Pair with testimonials when quantitative and qualitative proof support each other.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Rodger Regular may be used for stat numerals.
- Use panel-light surface, primary card radius, restrained hover lift, and approved overlay treatment.
- Keep stats few and credible.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `stats-card-strip`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/StatsCardStrip.tsx` as the approved import path.
- Never import from `Components/Stats Card Strip/Stats Card Strip.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.

## Variants

- `default`: Approved default variant. Do not invent unregistered variants.

## Slots

- `stats` (required): Approved stats content/input slot.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="stats-card-strip"
props:
  # use only registry-approved props
:::
```
