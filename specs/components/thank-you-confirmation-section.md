# Thank You Confirmation Section

Component ID: `thank-you-confirmation-section`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `confirmation-section`
Library target: `library/src/components/ThankYouConfirmationSection.tsx`
Raw evidence: `Components/Thank You Confirmation Section/Production Ready/ThankYouConfirmationSection.tsx`

## Purpose

Confirmation and next-steps body section for form, booking, and email-list thank-you pages.

## When To Use

- Use after a form, booking, branded-card application, or email-list submission to confirm receipt and explain next steps.
- Use only when the markdown outline selects `thank-you-confirmation-section` from `registry/components.json`.

## When Not To Use

- Do not use as a generic CTA, testimonial, feature grid, or conversion form.
- Do not import or copy from `/Components/`; it remains evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `heading` (required): string.
- `body` (optional): string.
- `nextSteps` (optional): array.
- `primaryAction` (optional): object.
- `secondaryAction` (optional): object.

## Variants

- `default`: Approved default layout for the source-page pattern.

## Slots

- `heading` (required): Approved heading slot for Thank You Confirmation Section.
- `body` (optional): Approved body slot for Thank You Confirmation Section.
- `nextSteps` (optional): Approved nextSteps slot for Thank You Confirmation Section.
- `primaryAction` (optional): Approved primaryAction slot for Thank You Confirmation Section.
- `secondaryAction` (optional): Approved secondaryAction slot for Thank You Confirmation Section.

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

Approved screenshot: `assets/screenshots/thank-you-confirmation-section.png`

Visual evidence path: `assets/screenshots/thank-you-confirmation-section.png`
Evidence archive: `Components/Thank You Confirmation Section`

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
- Runbook B must import the clean implementation from `library/src/components/ThankYouConfirmationSection.tsx`.
- If the outline requires a field not present in the props or slots above, stop and create a new-component or component-change request.

## Design Rules

- Use Rodger display headings, Onest body/UI text, warm decisive accents, restrained shadows, and approved section rhythm.
- Keep page-body output body-only unless the selected component is an approved shell component.
- Do not nest decorative cards inside decorative cards.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="thank-you-confirmation-section"
props:
  # use only registry-approved props from registry/components.json
:::
```

## AI Usage Contract

- Read this spec immediately before using `thank-you-confirmation-section`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless registry/spec/library/showcase are updated first.
