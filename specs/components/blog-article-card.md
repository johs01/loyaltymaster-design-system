# Blog Article Card

Component ID: `blog-article-card`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `blog-card`
Library target: `library/src/components/BlogArticleCard.tsx`
Raw evidence: `Components/Blog Article Card/lm-blog-card.css`

## Purpose

The image-led article card of blog.loyaltymaster.com: a 16:9 cover, a
category chip, the title, a two-line excerpt, and a meta row with the date
and reading time ("13 May 2025 · 14 min read"). Cards render inside their own
approved 3/2/1-column grid, so the component takes a list; one article is a
grid of one.

Canon-promoted 2026-09-28 from the blog redesign the owner approved and
published on 2026-09-27 (Bricks classes `lm-blog-grid`, `lm-blog-card`,
`lm-blog-chip`, `lm-blog-meta`).

Registry description: Image-led blog article card (16:9 cover, category chip,
title, excerpt, date and reading time) rendered in the approved 3/2/1 grid.

## When To Use

- Use for lists of blog posts: the blog listing (`/`, `/news/`), category
  archives, search results, and the articles variant of `keep-reading-band`.
- Use on loyaltymaster.com only for a list of blog posts that link to
  blog.loyaltymaster.com.
- Read this spec immediately before using the component.

## When Not To Use

- Do not use for loyaltymaster.com product or feature pages; related site
  pages use `keep-reading-band` (pages variant).
- Do not use for the single highlighted post; that is `blog-featured-article`.
- Do not use for topics or industries; those are `blog-topic-card` and
  `blog-industry-link-tile`.
- `blog-article-index` remains the text-only resources index; do not mix the
  two in one list.
- Do not import or copy from `/Components/`; it is evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `articles` (required): array of `BlogArticle` (`library/src/types.ts`):
  - `title` (required): the post title; the card's only link text.
  - `href` (required): absolute post URL.
  - `date` (required): ISO date `YYYY-MM-DD`; rendered as "13 May 2025"
    inside `<time datetime>`.
  - `readingMinutes` (optional): whole minutes; rendered as "N min read".
    Always supply it on the blog (see the Blog Content Rules in
    `DESIGN_SYSTEM.md`).
  - `excerpt` (optional): hand-written, 160 characters or fewer.
  - `category` (optional): primary category label for the chip.
  - `image` (optional, `ImageAsset`): 16:9 cover without baked-in text.
    Without it the card shows a panel-gray 16:9 placeholder.
- `headingLevel` (optional, `h3` default): `h2` only when the cards follow
  the page h1 directly (archive and search templates).
- `emptyMessage` (optional): text shown when `articles` is empty.

## Variants

- `default`: image-led card in the 3/2/1 listing grid. There are no other
  variants; the featured treatment is `blog-featured-article`.

## Slots

- `articles` (required): the posts to render.
- `headingLevel` (optional): title heading level.
- `emptyMessage` (optional): empty-state copy.

## States

- default: white card, 1px ink hairline (10% alpha) plus the base shadow.
- hover: lifts 3px and takes the hover shadow; the title underlines.
- focus: the title link is the only focusable element; the 3px ink focus
  ring (offset 3px) is drawn on the card (The Ink Focus Ring Rule).
- empty: renders `emptyMessage` in secondary text instead of a grid.
- responsive: 3 columns, 2 below 992px, 1 below 768px (gap 28px, 20px on
  mobile). Title clamps to 3 lines, excerpt to 2.
- reduced motion: no lift or transition.
- disabled, loading, error: not applicable.

## Accessibility Rules

- One link per card: the title. It is stretched over the card with
  `::after`, so the whole card is clickable while the accessible name stays
  the concise title (DESIGN_SYSTEM.md, whole-card links).
- Chip text is ink on tag yellow (13.75:1). Never grey on yellow (The Ink
  Chip Rule).
- Excerpt and meta use `color.text.secondary` (at least 4.63:1 on every light
  band), never `color.text.muted`.
- The date is a `<time datetime="YYYY-MM-DD">` element.
- Covers next to the linked title may use empty alt text when a description
  would repeat the title; otherwise describe the image.

## Screenshot

Approved screenshot: `assets/screenshots/blog-article-card.png`

Visual evidence path: `assets/screenshots/blog-article-card.png` (crop of the
approved redesign mockup, 1440px)
Evidence archive: `Components/Blog Article Card`

## Token Usage

- `color.surface.white`
- `color.ink`
- `color.text.secondary`
- `color.accent.tagYellow`
- `color.surface.panelGray`
- `fontFamily.display`
- `fontFamily.body`
- `dimension.radius.cardPrimary`
- `dimension.radius.badge`
- `shadow.cardBase`
- `shadow.cardHover`
- `motion.duration.fast`
- `motion.easing.gentle`

The hairline is `color.ink` at 10% alpha (the blog's `lm-color-line`). Do not
replace these tokens with raw literals. If a needed value is missing, stop
and request a token update.

## Composition Rules

- Sits in a white or panel-light band under a section head (eyebrow + h2),
  or directly under the page h1 on archive and search templates.
- Listing pages may add the approved blog listing controls around the grid:
  a single labelled "Filter by topic" select with a "Clear filter" reset, and
  the pager (48px pill page numbers, current page ink-filled) below the grid.
  These are blog-template (Bricks) patterns documented in
  `specs/components/blog-article-index.md`; they are not library components.
- Runbook B must import the clean implementation from
  `library/src/components/BlogArticleCard.tsx`.
- If the outline needs a field not listed above, stop and create a
  component-change request.

## Design Rules

- Title in Rodger Bold 22px, line-height 1.18; excerpt Onest 16px, 1.55.
- Chip: 12px bold uppercase, 0.05em tracking, 6px x 10px padding, 8px radius.
- Meta: 14px secondary text, date and reading time separated by a 4px dot.
- Cover is always 16:9 with `object-fit: cover`; no text baked into covers.
- No nested cards, no extra buttons inside the card.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="blog-article-card"
props:
  articles:
    - title: "The Best Digital Membership Card Software for your Club"
      href: "https://blog.loyaltymaster.com/digital-membership-card-software/"
      date: "2025-05-13"
      readingMinutes: 14
      category: "Membership Cards"
      excerpt: "Hand-written, 160 characters or fewer."
:::
```

## AI Usage Contract

- Read this spec immediately before using `blog-article-card`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules,
  and composition rules listed here.
- Do not import from `/Components/`.
- Stop before creating a new variant or parallel component unless
  registry/spec/library/showcase are updated first.
