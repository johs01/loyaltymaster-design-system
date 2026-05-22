# Testimonials Grid

Component ID: `testimonials-grid`
Registry: `registry/components.json`
Status: `raw-snapshot`
Client boundary: `server`
Category: `proof-section`
Library target: `library/src/components/TestimonialsGrid.tsx`
Raw snapshot: `Components/Testimonials Grid/Testimonials Grid.tsx`

## Purpose

Shows several customer voices that reinforce the same business outcome. It broadens proof without becoming a feature grid.

Registry description: Grid of testimonial cards for broader proof.

## When To Use

- Use when several customer voices reinforce the same business outcome.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use as a generic feature-card grid.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `items` (array, required).
- Additional props are not allowed in the Phase 3 contract.

## States

- default: each testimonial has quote and attribution.
- hover: testimonial cards use the approved subtle overlay/elevation treatment from the live template page.
- focus: only linked cards receive focus.
- empty: do not render without testimonial items.
- responsive: reduce columns while preserving readable card widths.

## Accessibility Rules

- Keep quote and author text readable and semantic.
- Do not make non-interactive testimonial cards focusable.
- Ensure repeated cards have clear structure for assistive tech.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/testimonials-grid.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `typography.body`
- `color.surface.panelLight`
- `color.surface.white`
- `shadow.cardBase`
- `dimension.radius.cardPrimary`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use after feature or pricing sections when social proof is needed.
- Do not use as a generic feature-card grid.
- Avoid placing directly beside `testimonial-single` unless the page deliberately moves from one hero quote to broader proof.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Use approved white section background, panel-light testimonial cards, card shadow, primary radius, and the approved hover overlay without turning cards into CTAs.
- Avoid endless identical cards; keep the set curated.
- Testimonials must sound concrete and on-brand.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `testimonials-grid`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/TestimonialsGrid.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Testimonials Grid/Testimonials Grid.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.
