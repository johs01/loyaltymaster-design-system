# Newsletter Signup Section

Component ID: `newsletter-signup-section`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `client`
Category: `conversion-section`
Library target: `library/src/components/NewsletterSignupSection.tsx`
Raw evidence: `Components/Newsletter Signup Section/Production Ready/NewsletterSignupSection.tsx`

## Purpose

Newsletter signup section with value copy, email capture, privacy note, and benefit list.

## When To Use

- Use for newsletter signup pages or sections where email capture needs context and privacy reassurance.
- Use only when the markdown outline selects `newsletter-signup-section` from `registry/components.json`.

## When Not To Use

- Do not use for product trial capture, contact forms, branded-card applications, or booking requests.
- Do not import or copy from `/Components/`; it remains evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `heading` (required): string.
- `body` (optional): string.
- `benefits` (optional): array.
- `privacyNote` (optional): string.
- `placeholder` (optional): string.
- `buttonLabel` (optional): string.
- `onSubmit` (optional): Client-side submit handler. Production forms must wire to the host website form pipeline.

## Variants

- `default`: Approved default layout for the source-page pattern.

## Slots

- `heading` (required): Approved heading slot for Newsletter Signup Section.
- `body` (optional): Approved body slot for Newsletter Signup Section.
- `benefits` (optional): Approved benefits slot for Newsletter Signup Section.
- `privacyNote` (optional): Approved privacyNote slot for Newsletter Signup Section.
- `placeholder` (optional): Approved placeholder slot for Newsletter Signup Section.
- `buttonLabel` (optional): Approved buttonLabel slot for Newsletter Signup Section.
- `onSubmit` (optional): Approved onSubmit slot for Newsletter Signup Section.

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

Approved screenshot: `assets/screenshots/newsletter-signup-section.png`

Visual evidence path: `assets/screenshots/newsletter-signup-section.png`
Evidence archive: `Components/Newsletter Signup Section`

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
- Runbook B must import the clean implementation from `library/src/components/NewsletterSignupSection.tsx`.
- If the outline requires a field not present in the props or slots above, stop and create a new-component or component-change request.

## Design Rules

- Use Rodger display headings, Onest body/UI text, warm decisive accents, restrained shadows, and approved section rhythm.
- Keep page-body output body-only unless the selected component is an approved shell component.
- Do not nest decorative cards inside decorative cards.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="newsletter-signup-section"
props:
  # use only registry-approved props from registry/components.json
:::
```

## AI Usage Contract

- Read this spec immediately before using `newsletter-signup-section`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless registry/spec/library/showcase are updated first.
