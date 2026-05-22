# Hero Main Section

Component ID: `hero-main-section`
Registry: `registry/components.json`
Status: `raw-snapshot`
Client boundary: `server`
Category: `hero-section`
Library target: `library/src/components/HeroMainSection.tsx`
Raw snapshot: `Components/Hero Main Section/Hero Main Section.tsx`

## Purpose

Leads a marketing page with the primary value proposition, action, trust cues, and visual area. It sets the page hierarchy.

Registry description: Primary first-screen marketing hero with value proposition, CTA, checklist, and visual area.

## When To Use

- Use as the first major section of a sendPUSH marketing page.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use for mid-page sections or document layouts.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `eyebrow` (string, optional).
- `heading` (string, required).
- `body` (string, optional).
- `primaryAction` (object, required).
- `image` (object, optional; local `ImageAsset` only).
- `emailPlaceholder` (string, optional).
- `emailButtonLabel` (string, optional).
- `showEmailCapture` (boolean, optional).

## States

- default: headline, body, primary action, checklist, and visual area are visible.
- hover: CTA uses approved primary button hover.
- focus: CTA and links have visible focus.
- loading: not applicable unless the hero includes a submitting control.
- responsive: headline stays readable, content stacks cleanly, and the next section is hinted when relevant.

## Accessibility Rules

- Use one page-level h1 inside this component when it is the first section.
- Do not put essential copy only inside images.
- CTA text must describe the action.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/hero-main-section.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `typography.display`
- `typography.body`
- `component.button.primary`
- `color.background.peach`
- `shadow.cardBase`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use only as the first major section of a marketing page.
- Do not use mid-page.
- Do not wrap in another card or add duplicate nav/header around it.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Rodger Bold is the default display heading font.
- Use approved peach background, body typography, button token, and card shadow.
- Use a real local media asset through `ImageAsset`; do not nest another component screenshot as the hero visual.
- The hero must feel specific to sendPUSH/Loyaltymaster, not like a generic SaaS template.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `hero-main-section`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/HeroMainSection.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Hero Main Section/Hero Main Section.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.
