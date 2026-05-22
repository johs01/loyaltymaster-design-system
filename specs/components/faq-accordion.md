# FAQ Accordion

Component ID: `faq-accordion`
Registry: `registry/components.json`
Status: `raw-snapshot`
Client boundary: `client`
Category: `support-section`
Library target: `library/src/components/FaqAccordion.tsx`
Raw snapshot: `Components/FAQ Accordion/FAQ Accordion.tsx`

## Purpose

Handles common objections and practical questions in a compact, accessible disclosure pattern.

Registry description: Accessible accordion for frequently asked questions.

## When To Use

- Use for common objections and practical setup questions.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use for long documentation or policy content.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `items` (array, required).
- `defaultOpenIndex` (number, optional).
- Additional props are not allowed in the Phase 3 contract.

## States

- default: questions are collapsed except the configured default item.
- hover: question row and item shell strengthen affordance with approved panel and border treatment.
- focus: trigger must have visible keyboard focus.
- expanded: answer content is revealed without losing trigger context.
- collapsed: answer content is hidden from visual flow.
- disabled: not applicable for normal FAQ content.
- responsive: keep tap targets comfortable and text wrapping clean.

## Accessibility Rules

- Use button triggers with `aria-expanded` and controlled panels.
- Keep headings and question text semantic.
- Keyboard users must be able to open and close every item.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/faq-accordion.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `typography.headline`
- `typography.body`
- `dimension.radius.inputCompact`
- `color.surface.panelLight`
- `motion.duration.base`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use after pricing, proof, or conversion content to answer objections.
- Do not use for long documentation or legal policy pages.
- Do not nest accordions inside accordions.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Use compact radius, panel-light surface tokens, and approved hover/open-state border treatment.
- Motion must use approved duration and respect reduced-motion.
- Keep iconography simple and functional.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `faq-accordion`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/FaqAccordion.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/FAQ Accordion/FAQ Accordion.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.
