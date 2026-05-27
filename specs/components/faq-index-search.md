# FAQ Index Search

Component ID: `faq-index-search`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `client`
Category: `support-section`
Library target: `library/src/components/FaqIndexSearch.tsx`
Raw evidence: `Components/FAQ Index Search/Production Ready/FAQIndexSearch.tsx`

## Purpose

Full FAQ index with search and category grouping for broad support pages.

## When To Use

- Use for searchable FAQ landing pages that need categories and multiple question groups.
- Use only when the markdown outline selects `faq-index-search` from `registry/components.json`.

## When Not To Use

- Do not use when a simple in-page objection section can use faq-accordion.
- Do not import or copy from `/Components/`; it remains evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `heading` (required): string.
- `body` (optional): string.
- `categories` (optional): array.
- `searchPlaceholder` (optional): object.

## Variants

- `default`: Approved default layout for the source-page pattern.

## Slots

- `heading` (required): Approved heading slot for FAQ Index Search.
- `body` (optional): Approved body slot for FAQ Index Search.
- `categories` (optional): Approved categories slot for FAQ Index Search.
- `searchPlaceholder` (optional): Approved searchPlaceholder slot for FAQ Index Search.

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

Approved screenshot: `assets/screenshots/faq-index-search.png`

Visual evidence path: `assets/screenshots/faq-index-search.png`
Evidence archive: `Components/FAQ Index Search`

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
- Runbook B must import the clean implementation from `library/src/components/FaqIndexSearch.tsx`.
- If the outline requires a field not present in the props or slots above, stop and create a new-component or component-change request.

## Design Rules

- Use Rodger display headings, Onest body/UI text, warm decisive accents, restrained shadows, and approved section rhythm.
- Keep page-body output body-only unless the selected component is an approved shell component.
- Do not nest decorative cards inside decorative cards.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="faq-index-search"
props:
  # use only registry-approved props from registry/components.json
:::
```

## AI Usage Contract

- Read this spec immediately before using `faq-index-search`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless registry/spec/library/showcase are updated first.
