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

## Blog Surface Coverage (2026-09-28)

`blog-article-index` is the text-led resources index approved from
loyaltymaster.com/blog/ in Phase 13. It has no cover image, no date or
reading time, no topic filter, no pagination, and no featured variant, and it
stays that way: the 2026-09-28 blog canon promotion covers those needs with
separate registry components instead of new variants here.

| Need on blog.loyaltymaster.com | Covered by |
|---|---|
| Image-led cards with category chip | `blog-article-card` (`specs/components/blog-article-card.md`) |
| Date ("13 May 2025") and reading time ("14 min read") | `blog-article-card` and `blog-featured-article` meta row |
| Featured post | `blog-featured-article` (`specs/components/blog-featured-article.md`) |
| Topic browsing | `blog-topic-card`, `blog-industry-link-tile` |
| Related posts at the end of a post | `keep-reading-band`, `articles` variant |
| Topic filter | Blog template pattern (Bricks, live since 2026-09-27): one labelled "Filter by topic" select (default "All topics") beside the section heading, hierarchical categories (a parent includes its children), single-category selection kept in the URL, applied on change with pagination reset, and an underlined "Clear filter" reset button shown only while a filter is active. Pill 52px select, ink text, ink focus ring. Not a library component. |
| Pagination | Blog template pattern (Bricks `lm-blog-pager`): centred 48px pill page numbers (44px on mobile) on white with an 18% ink hairline, current page ink-filled with white text, ellipsis for gaps, orange 2px inset on hover, ink focus ring. Not a library component. |

The approved screenshot for this component (and the current library render)
shows grey chip text on yellow. That treatment is superseded by The Ink Chip
Rule in `DESIGN_SYSTEM.md`: chips use ink text. The library fix is tracked in
`KNOWN_ISSUES.md`.

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
