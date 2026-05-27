# Comparison Table

Component ID: `comparison-table`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `proof-section`
Library target: `library/src/components/ComparisonTable.tsx`
Raw snapshot: `Components/Comparison Table/Comparison Table.tsx`

## Purpose

Positions sendPUSH against weaker customer reach channels. It should make a small number of business differences easy to compare.

Registry description: Comparison section for positioning sendPUSH against less direct customer-reach channels.

## When To Use

- Use when the page must explain why direct customer messaging is stronger than social-only reach.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use as a dense feature matrix with many technical rows.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `heading` (string, optional).
- `rows` (array, optional).
- Additional props are not allowed in the Phase 3 contract.

## States

- default: all rows visible with readable labels and clear column grouping.
- hover: optional row emphasis may be subtle and must not obscure text.
- focus: interactive links, if any, need visible focus.
- empty: do not render an empty table; replace with a better proof section.
- responsive: preserve comparison meaning on mobile by stacking rows with repeated labels if needed.

## Accessibility Rules

- Use semantic table markup when the content is tabular.
- Use scoped headers or equivalent accessible labeling.
- Do not encode positive/negative meaning by color alone.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/comparison-table.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `typography.headline`
- `typography.body`
- `color.background.cyan`
- `color.surface.white`
- `shadow.cardBase`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use after a problem or feature section when the visitor needs contrast.
- Pair with `cta-with-button-email` or `pricing-section` only after the comparison has made the point.
- Do not use for dense technical matrices.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Keep row count limited and scan-friendly.
- Use white surfaces on approved background color.
- Avoid decorative table chrome that makes it feel like a dashboard.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `comparison-table`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/ComparisonTable.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Comparison Table/Comparison Table.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.

## Variants

- `default`: Approved default variant. Do not invent unregistered variants.

## Slots

- `heading` (optional): Approved heading content/input slot.
- `rows` (optional): Approved rows content/input slot.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="comparison-table"
props:
  # use only registry-approved props
:::
```
