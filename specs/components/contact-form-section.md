# Contact Form Section

Component ID: `contact-form-section`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `client`
Category: `conversion-form`
Library target: `library/src/components/ContactFormSection.tsx`
Raw evidence: `Components/Contact Form Section/Production Ready/ContactFormSection.tsx`

## Purpose

Contact page form with message fields, contact details, consent copy, and support routing.

## When To Use

- Use for contact-us pages that collect a message or route visitors to the right business contact path.
- Use only when the markdown outline selects `contact-form-section` from `registry/components.json`.

## When Not To Use

- Do not use for trial signup, branded-card applications, newsletter signup, or demo booking embeds.
- Do not import or copy from `/Components/`; it remains evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `heading` (required): string.
- `body` (optional): string.
- `contactItems` (optional): array.
- `fields` (optional): array.
- `submitLabel` (optional): string.
- `consentText` (optional): string.
- `onSubmit` (optional): Client-side submit handler. Production forms must wire to the host website form pipeline..

## Variants

- `default`: Approved default layout for the source-page pattern.

## Slots

- `heading` (required): Approved heading slot for Contact Form Section.
- `body` (optional): Approved body slot for Contact Form Section.
- `contactItems` (optional): Approved contactItems slot for Contact Form Section.
- `fields` (optional): Approved fields slot for Contact Form Section.
- `submitLabel` (optional): Approved submitLabel slot for Contact Form Section.
- `consentText` (optional): Approved consentText slot for Contact Form Section.
- `onSubmit` (optional): Approved onSubmit slot for Contact Form Section.

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

Approved screenshot: `assets/screenshots/contact-form-section.png`

Visual evidence path: `assets/screenshots/contact-form-section.png`
Evidence archive: `Components/Contact Form Section`

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
- Runbook B must import the clean implementation from `library/src/components/ContactFormSection.tsx`.
- If the outline requires a field not present in the props or slots above, stop and create a new-component or component-change request.

## Design Rules

- Use Rodger display headings, Onest body/UI text, warm decisive accents, restrained shadows, and approved section rhythm.
- Keep page-body output body-only unless the selected component is an approved shell component.
- Do not nest decorative cards inside decorative cards.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="contact-form-section"
props:
  # use only registry-approved props from registry/components.json
:::
```

## AI Usage Contract

- Read this spec immediately before using `contact-form-section`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless registry/spec/library/showcase are updated first.
