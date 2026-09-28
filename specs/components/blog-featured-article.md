# Blog Featured Article

Component ID: `blog-featured-article`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `blog-card`
Library target: `library/src/components/BlogFeaturedArticle.tsx`
Raw evidence: `Components/Blog Featured Article/lm-blog-feature.css`

## Purpose

The one highlighted post in the blog listing hero: a 16:9 cover over a dark
"Featured guide" chip, a larger title, a two-line excerpt, and the meta row
(date, reading time) ending in a "Read the guide" cue. Between 768px and
991px the card turns horizontal (cover left, copy right).

Canon-promoted 2026-09-28 from the blog redesign published on 2026-09-27
(Bricks class `lm-blog-feature`).

Registry description: Featured blog post card for the listing hero with a
dark label chip, larger title, excerpt, date and reading time.

## When To Use

- Use once per listing page, in the right column of the blog listing hero
  (`/` and `/news/` on blog.loyaltymaster.com).
- Read this spec immediately before using the component.

## When Not To Use

- Do not use more than once per page, and never inside a grid of
  `blog-article-card`s.
- Do not use for product promotions or CTAs; conversion moments use the
  approved CTA components.
- Do not use on loyaltymaster.com product pages.
- Do not import or copy from `/Components/`; it is evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `article` (required): one `BlogArticle` (`library/src/types.ts`) with
  `title`, `href`, `date` (ISO `YYYY-MM-DD`, shown as "13 May 2025"),
  `readingMinutes`, `excerpt` (hand-written, 160 characters or fewer), and a
  16:9 `image`. `category` is not shown.
- `label` (optional, default "Featured guide"): dark chip text.
- `readLabel` (optional, default "Read the guide"): visual cue at the end of
  the meta row. It is not a second link.
- `headingLevel` (optional, `h2` default).

## Variants

- `default`: vertical card; horizontal between 768px and 991px.

## Slots

- `article` (required): the featured post.
- `label` (optional): chip text.
- `readLabel` (optional): read cue text.
- `headingLevel` (optional): title heading level.

## States

- default: white card with the hover-level shadow (it is the hero's focal
  card).
- hover: lifts 3px; the title underlines.
- focus: the title link is the only focusable element; the 3px ink focus ring
  is drawn on the card.
- responsive: vertical above 991px and below 768px; horizontal two-column
  grid from 768px to 991px, where the read cue drops to its own line.
- reduced motion: no lift or transition.
- empty, disabled, loading, error: not applicable.

## Accessibility Rules

- One link: the title, stretched over the card. The read cue is
  `aria-hidden` so it does not repeat the link.
- The dark chip is white on ink (15.30:1). Excerpt and meta use
  `color.text.secondary`.
- The date is a `<time datetime>` element.
- The cover may use empty alt text when a description would repeat the
  title.

## Screenshot

Approved screenshot: `assets/screenshots/blog-featured-article.png`

Visual evidence path: `assets/screenshots/blog-featured-article.png` (crop of
the approved redesign mockup, 1440px)
Evidence archive: `Components/Blog Featured Article`

## Token Usage

- `color.surface.white`
- `color.ink`
- `color.text.secondary`
- `color.surface.panelGray`
- `fontFamily.display`
- `fontFamily.body`
- `dimension.radius.cardPrimary`
- `dimension.radius.badge`
- `shadow.cardHover`
- `motion.duration.fast`
- `motion.easing.gentle`

Do not replace these tokens with raw literals. If a needed value is missing,
stop and request a token update.

## Composition Rules

- Sits in the peach listing hero beside the display headline, search field,
  and popular-topic links (blog Bricks template). Below 992px the hero stacks
  and the card follows the hero copy.
- Runbook B must import the clean implementation from
  `library/src/components/BlogFeaturedArticle.tsx`.
- If the outline needs a field not listed above, stop and create a
  component-change request.

## Design Rules

- Title Rodger Bold `clamp(24px, 2.3vw, 32px)`, line-height 1.12; excerpt
  Onest 17px, clamped to 2 lines.
- Body padding 28px 32px 30px (22px on mobile).
- The featured chip is the only dark chip; category chips stay tag yellow.
- Cover is 16:9 with no baked-in text.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="blog-featured-article"
props:
  article:
    title: "Paper to Digital Loyalty Program: The Growth Secret Smart Shop Owners Can't Ignore"
    href: "https://blog.loyaltymaster.com/paper-to-digital-loyalty-program-the-growth-secret-smart-shop-owners-cant-ignore/"
    date: "2025-04-22"
    readingMinutes: 12
    excerpt: "Hand-written, 160 characters or fewer."
:::
```

## AI Usage Contract

- Read this spec immediately before using `blog-featured-article`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules,
  and composition rules listed here.
- Do not import from `/Components/`.
- Stop before creating a new variant or parallel component unless
  registry/spec/library/showcase are updated first.
