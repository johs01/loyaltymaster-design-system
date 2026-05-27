# Image Strip

Component ID: `image-strip`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `media-section`
Library target: `library/src/components/ImageStrip.tsx`
Raw snapshot: `Components/Image Strip/Image Strip.tsx`

## Purpose

Creates a compact horizontal rhythm of related images, award badges, or visual proof points. It is lighter than a full image grid.

Registry description: Horizontal image strip for compact visual rhythm.

## When To Use

- Use for a small set of related rounded images, recovered award badges, or visual proof points.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use as a logo strip; partner logos use dedicated logo patterns.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `images` (array, required).
- Additional props are not allowed in the Phase 3 contract.

## States

- default: images align horizontally on wide viewports.
- hover: optional emphasis must stay restrained.
- focus: only linked images receive focus.
- empty: do not render without images.
- loading: reserve dimensions to avoid shift.
- responsive: allow wrapping or horizontal rhythm without cramped thumbnails.

## Accessibility Rules

- Provide alt text for meaningful images.
- Avoid using the strip as the only place important text appears.
- Keep visual order logical for screen readers.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/image-strip.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `dimension.radius.cardPrimary`
- `dimension.spacing.md`
- `color.surface.white`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use for a small set of related visuals such as the approved awards SVG strip.
- Do not use as a logo strip.
- Do not place directly beside another dense media component unless the layout has a clear editorial reason.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Use primary radius, approved spacing, and white surface.
- Keep images inspectable and not purely atmospheric.
- Avoid generic stock collage styling.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `image-strip`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/ImageStrip.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Image Strip/Image Strip.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.

## Variants

- `default`: Approved default variant. Do not invent unregistered variants.

## Slots

- `images` (required): Approved images content/input slot.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="image-strip"
props:
  # use only registry-approved props
:::
```
