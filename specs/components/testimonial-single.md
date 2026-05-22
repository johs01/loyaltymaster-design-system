# Testimonial Single

Component ID: `testimonial-single`
Registry: `registry/components.json`
Status: `raw-snapshot`
Client boundary: `server`
Category: `proof-section`
Library target: `library/src/components/TestimonialSingle.tsx`
Raw snapshot: `Components/Testimonial Single/Testimonial Single.tsx`

## Purpose

Spotlights one or two credible customer voices inside the approved dark proof section. It gives proof enough space to feel specific and high-emphasis.

Registry description: Dark proof section spotlighting one or two customer proof quotes.

## When To Use

- Use to spotlight one or two credible local-business proof points.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use when three or more peer voices need equal weight; use `testimonials-grid` instead.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `eyebrow` (string, optional).
- `heading` (string, optional).
- `quote` (string, optional; backward-compatible single quote).
- `author` (string, optional; backward-compatible single attribution).
- `role` (string, optional).
- `testimonials` (array, optional; approved dark section should render one or two items).
- `cta` (object or `false`, optional). Defaults to the approved email CTA; pass `false` only when a page intentionally removes the proof CTA.

## States

- default: eyebrow, heading, quote(s), author(s), and role(s) are visible.
- hover: the approved email CTA button uses the primary hover/active treatment.
- focus: the email input and CTA button must show visible keyboard focus.
- empty: do not render without at least one meaningful quote and author.
- responsive: preserve quote readability and attribution proximity.

## Accessibility Rules

- Use quote semantics where appropriate.
- Do not put quote text inside an image.
- Attribution must remain associated with the quote.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/testimonial-single.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `typography.body`
- `color.background.dark`
- `color.surface.white`
- `dimension.radius.cardPrimary`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use when one or two strong proof points deserve emphasis.
- Do not use when several voices need equal weight; use `testimonials-grid` instead.
- Pair with stats only when both support the same claim.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Use approved dark section background, subtle dark proof card, white text, primary radius, and the approved email CTA unless explicitly disabled.
- Keep the quote specific to local-business outcomes.
- Avoid anonymous, generic testimonial filler.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `testimonial-single`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/TestimonialSingle.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Testimonial Single/Testimonial Single.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.
