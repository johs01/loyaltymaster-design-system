# Legal Document Body

Component ID: `legal-document-body`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `legal-section`
Library target: `library/src/components/LegalDocumentBody.tsx`
Raw evidence: `Components/Legal Document Body/Production Ready/LegalDocumentBody.tsx`

## Purpose

Dense legal and policy document body layout for privacy, terms, cookies, acceptable use, and subscription agreements.

## When To Use

- Use for legal policy pages with clause headings, dates, and long-form legal prose.
- Use only when the markdown outline selects `legal-document-body` from `registry/components.json`.

## When Not To Use

- Do not use for marketing articles, blog posts, feature pages, or searchable support indexes.
- Do not import or copy from `/Components/`; it remains evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `title` (required): string.
- `lastUpdated` (optional): string.
- `intro` (optional): string.
- `sections` (optional): array.

## Variants

- `default`: Approved default layout for the source-page pattern.

## Slots

- `title` (required): Approved title slot for Legal Document Body.
- `lastUpdated` (optional): Approved lastUpdated slot for Legal Document Body.
- `intro` (optional): Approved intro slot for Legal Document Body.
- `sections` (optional): Approved sections slot for Legal Document Body.

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

Approved screenshot: `assets/screenshots/legal-document-body.png`

Visual evidence path: `assets/screenshots/legal-document-body.png`
Evidence archive: `Components/Legal Document Body`

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
- Runbook B must import the clean implementation from `library/src/components/LegalDocumentBody.tsx`.
- If the outline requires a field not present in the props or slots above, stop and create a new-component or component-change request.

## Design Rules

- Use Rodger display headings, Onest body/UI text, warm decisive accents, restrained shadows, and approved section rhythm.
- Keep page-body output body-only unless the selected component is an approved shell component.
- Do not nest decorative cards inside decorative cards.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="legal-document-body"
props:
  # use only registry-approved props from registry/components.json
:::
```

## AI Usage Contract

- Read this spec immediately before using `legal-document-body`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless registry/spec/library/showcase are updated first.
