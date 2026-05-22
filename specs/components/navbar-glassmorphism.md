# Navbar Glassmorphism

Component ID: `navbar-glassmorphism`
Registry: `registry/components.json`
Status: `raw-snapshot`
Client boundary: `client`
Category: `shell`
Library target: `library/src/components/NavbarGlassmorphism.tsx`
Raw snapshot: `Components/Navbar Glassmorphism/Navbar Glassmorphism.tsx`

## Purpose

Provides the approved sticky glass navigation shell and responsive mobile panel. It is the only approved glass treatment.

Registry description: Sticky glass navigation shell with responsive mobile panel and cursor-tracked highlight.

## When To Use

- Use only as the site shell navigation treatment.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not copy this glass treatment into page-body cards, heroes, or generic panels.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `activePath` (string, optional).
- Additional props are not allowed in the Phase 3 contract.

## States

- default: nav links and brand are visible.
- hover: links and controls follow approved motion timing and restrained accent treatment.
- focus: every nav link and menu control has visible focus.
- active: active path is indicated without color alone.
- mobile-open: panel is accessible and dismissible.
- mobile-closed: panel content is hidden from interaction.
- responsive: desktop and mobile shells do not duplicate links visually.

## Accessibility Rules

- Use semantic nav markup.
- Menu button must expose expanded state.
- Do not trap focus unless a modal-like mobile panel requires it, and then provide escape behavior.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/navbar-glassmorphism.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `fontFamily.wordmark`
- `typography.label`
- `color.accent.orange`
- `motion.duration.base`
- `shadow.cardBase`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use only as the site shell navigation.
- Do not place inside generated page-body content unless explicitly requested.
- Do not reuse the glass treatment for cards, heroes, or generic panels.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Glass is restricted to this nav/mobile shell by approved conflict resolution.
- Use wordmark font, label typography, orange accent, card shadow, and approved motion only.
- Keep the shell stable and readable over page content.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `navbar-glassmorphism`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/NavbarGlassmorphism.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Navbar Glassmorphism/Navbar Glassmorphism.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.
