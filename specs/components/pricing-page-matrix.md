# Pricing Page Matrix

Component ID: `pricing-page-matrix`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `client`
Category: `pricing-section`
Library target: `library/src/components/PricingPageMatrix.tsx`
Raw evidence: `Components/Pricing Page Matrix/Production Ready/PricingPageMatrix.tsx`

## Purpose

Full pricing page matrix for monthly and yearly plan groups, feature lists, disclaimers, and plan comparison.

## When To Use

- Use for full pricing pages that require multiple plans, cadence switching, disclaimers, and purchase CTAs.
- Use only when the markdown outline selects `pricing-page-matrix` from `registry/components.json`.

## When Not To Use

- Do not use for short pricing teasers or fewer-than-row pricing cards that pricing-section already handles.
- Do not import or copy from `/Components/`; it remains evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `heading` (required): string.
- `body` (optional): string.
- `plans` (optional): array.
- `defaultCadence` (optional): string.
- `disclaimer` (optional): string.

## Variants

- `default`: Approved default layout for the source-page pattern.

## Slots

- `heading` (required): Approved heading slot for Pricing Page Matrix.
- `body` (optional): Approved body slot for Pricing Page Matrix.
- `plans` (optional): Approved plans slot for Pricing Page Matrix.
- `defaultCadence` (optional): Approved defaultCadence slot for Pricing Page Matrix.
- `disclaimer` (optional): Approved disclaimer slot for Pricing Page Matrix.

## States

- default: render approved content with canonical LoyaltyMaster spacing, type, and surfaces.
- hover/focus: interactive links and controls use approved CTA and focus token behavior.
- empty: use approved empty copy instead of inventing placeholder UI when the component supports empty content.
- responsive: stack to one column on mobile and preserve readable text rhythm.

## Accessibility Rules

- Preserve semantic section, heading, list, form, and link structure.
- Provide visible focus for every interactive element.
- Use real labels for inputs and controls.
- Respect reduced-motion preferences where motion exists.

## Screenshot

Approved screenshot: `assets/screenshots/pricing-page-matrix.png`

Visual evidence path: `assets/screenshots/pricing-page-matrix.png`
Evidence archive: `Components/Pricing Page Matrix`

## Token Usage

- `typography.headline`
- `typography.body`
- `color.surface.white`
- `color.background.peach`
- `dimension.radius.cardPrimary`
- `dimension.spacing.sectionDesktopY`
- `shadow.cardBase`
- `component.button.primary`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update.

## Composition Rules

- The component may be selected by Runbook A only when the page purpose matches the registry whenToUse rule.
- Runbook B must import the clean implementation from `library/src/components/PricingPageMatrix.tsx`.
- If the outline requires a field not present in the props or slots above, stop and create a new-component or component-change request.

## Design Rules

- Use Rodger display headings, Onest body/UI text, warm decisive accents, restrained shadows, and approved section rhythm.
- Keep page-body output body-only unless the selected component is an approved shell component.
- Do not nest decorative cards inside decorative cards.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="pricing-page-matrix"
props:
  # use only registry-approved props from registry/components.json
:::
```

## AI Usage Contract

- Read this spec immediately before using `pricing-page-matrix`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless registry/spec/library/showcase are updated first.
