# Geo Fence Use Case

Component ID: `geo-fence-use-case`
Registry: `registry/components.json`
Status: `raw-snapshot`
Client boundary: `server`
Category: `use-case-section`
Library target: `library/src/components/GeoFenceUseCase.tsx`
Raw snapshot: `Components/Geo Fence Use Case/Geo Fence Use Case.tsx`

## Purpose

Shows a concrete location-aware messaging scenario. It corrects the earlier mislabeled Button snapshot and must remain a use-case section.

Registry description: Use-case section for geo-aware messaging and location-based customer return campaigns.

## When To Use

- Use when the page needs a concrete location-aware messaging scenario.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not use as a generic button component; it was previously mislabeled and corrected in Phase 1.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `heading` (string, optional).
- `body` (string, optional).
- `bullets` (array, optional).
- `image` (object, optional; local `ImageAsset` only).
- `action` (object, optional).

## States

- default: scenario copy and bullets are visible.
- hover: static section, no required hover state.
- focus: links or actions inside the section require visible focus.
- empty: do not render without meaningful scenario copy.
- responsive: stack scenario content without hiding bullets.

## Accessibility Rules

- Use semantic headings and lists.
- Explain location concepts in text, not only visuals.
- Images or icons must have useful alternatives or be decorative.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/geo-fence-use-case.png`

Use this corrected use-case-section screenshot as the visual reference for spacing, weight, rhythm, and proportion. The previous button-only artifact is stale and must not be used as the reference. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `typography.headline`
- `typography.body`
- `color.background.salmon`
- `color.accent.yellow`
- `dimension.radius.cardPrimary`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use when location-based customer return campaigns are central to the message.
- Pair with `feature-section-2-column-bullets-image` only if they cover different scenarios.
- Do not use as a button, CTA shell, or generic feature card.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Use approved salmon background, yellow accent, and primary card radius.
- Use a real local media asset through `ImageAsset`; do not nest another component screenshot as the image.
- Keep the scenario concrete and local-business oriented.
- Do not turn it into abstract dashboard chrome.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `geo-fence-use-case`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/GeoFenceUseCase.tsx` as the intended future import path once Phase 4 creates the clean library implementation.
- Never import from `Components/Geo Fence Use Case/Geo Fence Use Case.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.
