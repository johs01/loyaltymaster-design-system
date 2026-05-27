# Footer

Component ID: `footer`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `shell`
Library target: `library/src/components/Footer.tsx`
Raw snapshot: `Components/Footer/Footer.tsx`

## Purpose

Provides the light card site footer shell with brand, navigation, contact, CTA, and legal links. It belongs to the app shell, not generated page bodies.

Registry description: Light card site footer shell with brand, links, contact details, CTA, and legal navigation.

## When To Use

- Use as part of the app shell, not inside page-body generated content.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not add to source-to-page route bodies when the shell already provides it.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `brandLabel` (string, optional).
- `body` (string, optional).
- `columns` (array, optional).
- `contactItems` (array, optional).
- `cta` (object, optional).
- `legalLinks` (array, optional).
- `copyright` (string, optional).

## States

- default: links and brand areas are visible and grouped.
- hover: links use approved text or accent treatment.
- focus: all links need visible focus.
- responsive: groups stack without losing legal or contact information.

## Accessibility Rules

- Use semantic footer markup.
- Make link text descriptive.
- Keep contrast high on the light footer card and muted-link surfaces.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/footer.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `fontFamily.wordmark`
- `typography.body`
- `color.surface.white`
- `color.surface.panelLight`
- `color.accent.orange`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use only as a shell component.
- Do not add to source-to-page route bodies when the shell already provides a footer.
- Do not duplicate with another footer unless explicitly requested.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Use the approved light card shell from the screenshot/raw snapshot, not a dark footer.
- Use approved white/panel surfaces and orange/yellow action accents only.
- Preserve wordmark font usage.
- Keep footer utilitarian and structured.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `footer`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/Footer.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Footer/Footer.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.

## Variants

- `default`: Approved default variant. Do not invent unregistered variants.

## Slots

- `brandLabel` (optional): Approved brandLabel content/input slot.
- `body` (optional): Approved body content/input slot.
- `columns` (optional): Approved columns content/input slot.
- `contactItems` (optional): Approved contactItems content/input slot.
- `cta` (optional): Approved cta content/input slot.
- `legalLinks` (optional): Approved legalLinks content/input slot.
- `copyright` (optional): Approved copyright content/input slot.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="footer"
props:
  # use only registry-approved props
:::
```
