# Keep Reading Band

Component ID: `keep-reading-band`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `content-section`
Library target: `library/src/components/KeepReadingBand.tsx`
Raw evidence: `Components/Keep Reading Band/RelatedPages.tsx`

## Purpose

The "Keep reading" band at the end of a page: two or three related links so a
reader who finished the page has a next step. It already runs in two places:

- `pages` (default) — loyaltymaster.com product and article pages, production
  `src/components/RelatedPages.tsx` (for example
  https://loyaltymaster.com/features/ `#related`). Centred eyebrow and
  heading ("Related pages") over process-style cards in the three tones; the
  page title is the only anchor.
- `articles` — blog.loyaltymaster.com single posts. Left-aligned eyebrow and
  heading ("Related Articles") with a "See all articles" text link, over
  `blog-article-card`s on a panel-light band.

Until 2026-09-28 the pattern existed only as prose in `DESIGN_SYSTEM.md`
(whole-card links); it is now a registry component.

Registry description: End-of-page band with 2-3 related links: related site
pages as process-style cards (pages) or related posts as blog article cards
(articles).

## When To Use

- Use once, near the end of a product, article, or blog post page, before the
  final CTA band.
- Use `pages` on loyaltymaster.com with curated related pages; use `articles`
  on blog posts with related posts (same category first).
- Read this spec immediately before using the component.

## When Not To Use

- Do not use as a navigation menu or a generic card grid.
- Do not use with fewer than two links; the band renders nothing when its
  list is empty.
- Do not repeat descriptions across cards or put the description inside the
  link.
- Do not import or copy from `/Components/`; it is evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `variant` (optional, `pages` default): `pages` or `articles`.
- `id` (optional, default "related"): section id.
- `eyebrow` (optional, default "Keep reading").
- `heading` (optional): defaults to "Related pages" (`pages`) or "Related
  Articles" (`articles`).
- `pages` (`pages` variant): array of `RelatedPageLink` — `title` (the
  page's authored SEO title, used as anchor text), `href`, `description`
  (the page's meta description).
- `articles` (`articles` variant): array of `BlogArticle`, rendered with
  `blog-article-card`.
- `seeAll` (optional, `articles` variant): `{ label, href }` link to the blog
  index, e.g. "See all articles".

## Variants

- `pages`: default. White band, tight section padding, centred head,
  3-column process-card grid with orange, blue, yellow tones.
- `articles`: panel-light band, full section padding, section head with the
  see-all link, `blog-article-card` grid.

## Slots

- `id` (optional): section id.
- `variant` (optional): which variant renders.
- `eyebrow` (optional): eyebrow text.
- `heading` (optional): h2 text.
- `pages` (optional): related site pages.
- `articles` (optional): related posts.
- `seeAll` (optional): see-all link.

## States

- default: as described per variant.
- hover: cards lift (process-card hover in `pages`; `blog-article-card`
  hover in `articles`); the see-all link's yellow underline turns orange.
- focus: every card has one link; the 3px ink focus ring is drawn on the
  card, and on the see-all link itself.
- empty: renders nothing.
- responsive: 3 columns, then 2 and 1 (process grid and blog grid
  breakpoints).
- reduced motion: no lift or transition.
- disabled, loading, error: not applicable.

## Accessibility Rules

- Stretched-link pattern: the heading anchor is the card's only link, with
  concise anchor text (the page or post title); the description sits outside
  the link.
- Descriptions and the eyebrow use `color.text.secondary`. Production
  loyaltymaster.com renders them in `--wr-text-muted`, which production
  overrides to `#6f696d` (5.36:1); `color.text.secondary` (5.42:1) is the
  token-side equivalent.
- The articles variant section is labelled by its h2.

## Screenshot

Approved screenshot: `assets/screenshots/keep-reading-band.png`

Visual evidence path: `assets/screenshots/keep-reading-band.png` (articles
variant, crop of the approved redesign mockup, 1440px; the pages variant is
evidenced by the production source snapshot)
Evidence archive: `Components/Keep Reading Band`

## Token Usage

- `color.surface.white`
- `color.surface.panelLight`
- `color.background.peach`
- `color.background.cyan`
- `color.background.yellow`
- `color.ink`
- `color.text.secondary`
- `color.accent.yellow`
- `typography.headline`
- `dimension.radius.cardPrimary`
- `dimension.spacing.sectionDesktopY`
- `shadow.cardBase`
- `shadow.cardHover`

Do not replace these tokens with raw literals. If a needed value is missing,
stop and request a token update.

## Composition Rules

- Place after the page body and before the single dark final CTA band; never
  after the CTA.
- `pages`: reuse each target page's authored SEO title and meta description
  (the same strings as its metadata) so anchor text never diverges.
- `articles`: two or three posts, same category first, never the current
  post.
- Runbook B must import the clean implementation from
  `library/src/components/KeepReadingBand.tsx`.
- If the outline needs a field not listed above, stop and create a
  component-change request.

## Design Rules

- `pages` mirrors production RelatedPages.tsx: `wf-section wf-bg-white
  wf-section-tight`, `wf-eyebrow`, `wr-h2`, `wf-process-grid`,
  `wr-card-process--{orange|blue|yellow}` with `wf-related-card`.
- `articles` mirrors the blog single template: eyebrow 15px bold uppercase
  in secondary text, h2 Rodger `clamp(30px, 3.4vw, 46px)`, see-all link
  with a 2px yellow underline.
- One band per page.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="keep-reading-band"
props:
  variant: "pages"
  pages:
    - title: "The Digital Loyalty Card for Busy Shop Owners"
      href: "/digital-loyalty-card/"
      description: "The target page's authored meta description."
:::
```

## AI Usage Contract

- Read this spec immediately before using `keep-reading-band`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules,
  and composition rules listed here.
- Do not import from `/Components/`.
- Stop before creating a new variant or parallel component unless
  registry/spec/library/showcase are updated first.
