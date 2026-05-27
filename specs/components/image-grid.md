# Image Grid

Component ID: `image-grid`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `media-section`
Library target: `library/src/components/ImageGrid.tsx`
Raw snapshot: `Components/Image Grid/Image Grid.tsx`

## Purpose

Displays approved partner, platform, payment, compliance, and integration logos in an organized proof grid. It supports trust proof, not generic decoration.

Registry description: Structured partner/logo proof grid for integration and platform trust marks.

## When To Use

- Use when approved partner, platform, payment, compliance, or integration logos need organized proof display.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use for full-bleed photo backgrounds, arbitrary photo galleries, or decorative stock imagery.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `images` (array, required).
- `heading` (string, optional).
- `body` (string, optional).

## States

- default: all images render with stable dimensions.
- hover: logo tiles use the approved restrained lift, shadow, and image-scale treatment without cropping essential marks.
- focus: only linked images receive focus.
- empty: do not render without images.
- loading: reserve image dimensions to avoid layout shift.
- responsive: reduce columns while preserving image order and aspect constraints.

## Accessibility Rules

- Use meaningful alt text for informative images.
- Mark decorative images as decorative only when they add no information.
- Do not rely on images to communicate text-only instructions.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/image-grid.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `dimension.radius.cardPrimary`
- `shadow.cardBase`
- `color.surface.white`
- `dimension.spacing.md`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use after a feature explanation or proof section when trust/integration proof is needed.
- Use for approved partner/logo grids only; use `image-strip` for award strips and other compact visual proof.
- Do not combine with `image-strip` unless the page needs two distinct media rhythms.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Use approved peach background, white logo tiles, spacing, shadow, secondary tile radius, and restrained hover emphasis.
- Logos must be approved partner, payment, platform, compliance, or integration marks.
- Keep logo sizing consistent and avoid stretching or cropping marks.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `image-grid`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/ImageGrid.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Image Grid/Image Grid.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.

## Variants

- `default`: Approved default variant. Do not invent unregistered variants.

## Slots

- `images` (required): Approved images content/input slot.
- `heading` (optional): Approved heading content/input slot.
- `body` (optional): Approved body content/input slot.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="image-grid"
props:
  # use only registry-approved props
:::
```
