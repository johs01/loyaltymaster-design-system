# Branded Card Application Form

Component ID: `branded-card-application-form`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `client`
Category: `conversion-form`
Library target: `library/src/components/BrandedCardApplicationForm.tsx`
Raw evidence: `Components/Branded Card Application Form/Production Ready/BrandedCardApplicationForm.tsx`

## Purpose

Branded digital reward card application form with proof copy and application-specific fields.

## When To Use

- Use for pages collecting branded-card application details and business card customization requests.
- Use only when the markdown outline selects `branded-card-application-form` from `registry/components.json`.

## When Not To Use

- Do not use for general contact, newsletter signup, trial signup, or booking requests.
- Do not import or copy from `/Components/`; it remains evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `heading` (required): string.
- `body` (optional): string.
- `features` (optional): array.
- `fields` (optional): array.
- `submitLabel` (optional): string.
- `onSubmit` (optional): Client-side submit handler. Production forms must wire to the host website form pipeline.

## Variants

- `default`: Approved default layout for the source-page pattern.

## Slots

- `heading` (required): Approved heading slot for Branded Card Application Form.
- `body` (optional): Approved body slot for Branded Card Application Form.
- `features` (optional): Approved features slot for Branded Card Application Form.
- `fields` (optional): Approved fields slot for Branded Card Application Form.
- `submitLabel` (optional): Approved submitLabel slot for Branded Card Application Form.
- `onSubmit` (optional): Approved onSubmit slot for Branded Card Application Form.

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

Approved screenshot: `assets/screenshots/branded-card-application-form.png`

Visual evidence path: `assets/screenshots/branded-card-application-form.png`
Evidence archive: `Components/Branded Card Application Form`

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
- Runbook B must import the clean implementation from `library/src/components/BrandedCardApplicationForm.tsx`.
- If the outline requires a field not present in the props or slots above, stop and create a new-component or component-change request.

## Design Rules

- Use Rodger display headings, Onest body/UI text, warm decisive accents, restrained shadows, and approved section rhythm.
- Keep page-body output body-only unless the selected component is an approved shell component.
- Do not nest decorative cards inside decorative cards.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="branded-card-application-form"
props:
  # use only registry-approved props from registry/components.json
:::
```

## AI Usage Contract

- Read this spec immediately before using `branded-card-application-form`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless registry/spec/library/showcase are updated first.
