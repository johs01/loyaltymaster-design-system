# Blog Article Index

Component ID: `blog-article-index`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `index-section`
Library target: `library/src/components/BlogArticleIndex.tsx`
Raw evidence: `Components/Blog Article Index/Production Ready/BlogArticleIndex.tsx`

## Purpose

Blog and article collection index with approved cards, metadata, empty state, and archive navigation affordances.

## When To Use

- Use for blog, article archive, and editorial collection pages where repeated article cards need metadata and links.
- Use only when the markdown outline selects `blog-article-index` from `registry/components.json`.

## When Not To Use

- Do not use for knowledge-base categories, feature cards, testimonials, or industry use-case grids.
- Do not import or copy from `/Components/`; it remains evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `heading` (required): string.
- `body` (optional): string.
- `articles` (optional): array.
- `emptyMessage` (optional): string.

## Variants

- `default`: Approved default layout for the source-page pattern.

## Slots

- `heading` (required): Approved heading slot for Blog Article Index.
- `body` (optional): Approved body slot for Blog Article Index.
- `articles` (optional): Approved articles slot for Blog Article Index.
- `emptyMessage` (optional): Approved emptyMessage slot for Blog Article Index.

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

Approved screenshot: `assets/screenshots/blog-article-index.png`

Visual evidence path: `assets/screenshots/blog-article-index.png`
Evidence archive: `Components/Blog Article Index`

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
- Runbook B must import the clean implementation from `library/src/components/BlogArticleIndex.tsx`.
- If the outline requires a field not present in the props or slots above, stop and create a new-component or component-change request.

## Design Rules

- Use Rodger display headings, Onest body/UI text, warm decisive accents, restrained shadows, and approved section rhythm.
- Keep page-body output body-only unless the selected component is an approved shell component.
- Do not nest decorative cards inside decorative cards.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="blog-article-index"
props:
  # use only registry-approved props from registry/components.json
:::
```

## AI Usage Contract

- Read this spec immediately before using `blog-article-index`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless registry/spec/library/showcase are updated first.
