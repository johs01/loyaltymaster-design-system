# Feature Section 2 Column Bullets Image

Component ID: `feature-section-2-column-bullets-image`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `feature-section`
Library target: `library/src/components/FeatureSection2ColumnBulletsImage.tsx`
Raw snapshot: `Components/Feature Section 2 Column Bullets Image/Feature Section 2 Column Bullets Image.tsx`

## Purpose

Explains one product capability with concise bullets and a supporting visual. It should make a concrete use case easy to understand.

Registry description: Two-column feature section with bullets and an image/visual container.

## When To Use

- Use for one clear use case that benefits from a short checklist and visual proof.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use for broad feature grids or final CTAs.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `heading` (string, required).
- `body` (string, optional).
- `bullets` (array, required).
- `image` (object, optional).
- Additional props are not allowed in the Phase 3 contract.

## States

- default: copy column, bullet list, and visual are balanced.
- hover: static section, no required hover state.
- focus: links or buttons inside the section need visible focus.
- empty: do not render without at least one bullet.
- responsive: stack copy before visual unless the page narrative requires otherwise.

## Accessibility Rules

- Use a semantic list for bullets.
- Provide alt text for meaningful images or mark decorative images appropriately.
- Maintain heading hierarchy.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/feature-section-2-column-bullets-image.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `typography.headline`
- `typography.body`
- `color.background.salmon`
- `dimension.radius.cardPrimary`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use for one focused feature or scenario.
- Pair with proof or CTA after the feature has been explained.
- Do not use as a broad features index.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Primary desktop cards use 20px radius.
- Use approved salmon background only when it supports the section rhythm.
- Use a real local media asset through `ImageAsset`; do not nest another component screenshot as the feature visual.
- Bullets should be short and specific, not generic marketing filler.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `feature-section-2-column-bullets-image`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/FeatureSection2ColumnBulletsImage.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Feature Section 2 Column Bullets Image/Feature Section 2 Column Bullets Image.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.

## Variants

- `default`: Approved default variant. Do not invent unregistered variants.

## Slots

- `heading` (required): Approved heading content/input slot.
- `body` (optional): Approved body content/input slot.
- `bullets` (required): Approved bullets content/input slot.
- `image` (optional): Approved image content/input slot.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="feature-section-2-column-bullets-image"
props:
  # use only registry-approved props
:::
```
