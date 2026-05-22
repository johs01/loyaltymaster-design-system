# Features Grid

Component ID: `features-grid`
Registry: `registry/components.json`
Status: `raw-snapshot`
Client boundary: `server`
Category: `feature-section`
Library target: `library/src/components/FeaturesGrid.tsx`
Raw snapshot: `Components/Features Grid/Features Grid.tsx`

## Purpose

Presents a bounded set of distinct capabilities for quick scanning. It is not a filler grid.

Registry description: Grid of feature cards for scan-friendly capability overviews.

## When To Use

- Use for a bounded set of distinct capabilities with short labels and copy.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use as an endless same-sized card grid; keep it purposeful and limited.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `items` (array, required).
- Additional props are not allowed in the Phase 3 contract.

## States

- default: each item has a clear title and short body.
- hover: card emphasis uses the approved subtle overlay and lift treatment from the live template page.
- focus: cards are focusable only when they contain links or actions.
- empty: do not render an empty grid.
- responsive: reduce columns without changing item order or creating cramped cards.

## Accessibility Rules

- Use list semantics when the grid is a set of peer features.
- Ensure every icon has text support or is decorative.
- Do not make non-interactive cards keyboard focusable.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/features-grid.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `typography.title`
- `typography.body`
- `color.surface.panelLight`
- `shadow.cardBase`
- `dimension.radius.cardPrimary`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use for a limited group of distinct features.
- Do not use as an endless identical card grid.
- Pair with a stronger feature section when one capability needs depth.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Cards use approved panel surface, shadow, primary radius, and restrained hover overlay.
- Vary content weight through hierarchy, not random visual variants.
- Avoid generic SaaS card-grid styling and filler copy.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `features-grid`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/FeaturesGrid.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Features Grid/Features Grid.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.
