# CTA with Button Email

Component ID: `cta-with-button-email`
Registry: `registry/components.json`
Status: `raw-snapshot`
Client boundary: `client`
Category: `conversion-section`
Library target: `library/src/components/CtaWithButtonEmail.tsx`
Raw snapshot: `Components/CTA with Button Email/CTA with Button Email.tsx`

## Purpose

Creates a compact final conversion push with supporting copy and single email action. It should close a page without requiring a full data capture form.

Registry description: Compact CTA section with email capture and primary action.

## When To Use

- Use near the end of a page for a direct conversion push without a full form.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use when the page needs detailed business information before submission.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `heading` (string, optional).
- `body` (string, optional).
- `buttonLabel` (string, optional).
- Additional props are not allowed in the Phase 3 contract.

## States

- default: headline, body, email field, and CTA are visible.
- hover: primary action uses approved hover treatment.
- focus: input and button focus must be visible.
- loading: keep CTA width stable.
- error: email validation appears close to the field.
- responsive: preserve reading order before the email action.

## Accessibility Rules

- Use an accessible email label.
- Keep contrast high on dark backgrounds.
- Announce validation errors in a way assistive tech can reach.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/cta-with-button-email.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `component.input.tenant`
- `component.button.primary`
- `color.background.dark`
- `typography.headline`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use near the end of a marketing page after proof or pricing.
- Do not duplicate it directly after `button-email` without a content reason.
- Do not add nav, header, or footer around it.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Dark backgrounds must use approved tokens and remain readable.
- Yellow remains the primary conversion accent.
- Do not apply generic glass or floating-card styling.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `cta-with-button-email`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/CtaWithButtonEmail.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/CTA with Button Email/CTA with Button Email.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.
