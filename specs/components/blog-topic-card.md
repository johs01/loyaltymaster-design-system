# Blog Topic Card

Component ID: `blog-topic-card`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `blog-card`
Library target: `library/src/components/BlogTopicCard.tsx`
Raw evidence: `Components/Blog Topic Card/lm-blog-topic-card.css`

## Purpose

Topic cards for the blog's main topics: a tone square, the topic name as the
card's single link, a one-line description, and the guide count ("21
guides"). The cards render in their own grid (Bricks class
`lm-blog-topic-card`, which owns the `lm-blog-topics` grid): 3 columns on
desktop, 1 below 992px.

Canon-promoted 2026-09-28 from the blog redesign published on 2026-09-27.

Registry description: Topic cards (tone square, linked topic name,
description, guide count) in a 3/1-column grid for browsing blog topics.

## When To Use

- Use for the blog's topic browse band ("Find Guides for Your Business.") on
  blog.loyaltymaster.com, with up to three main topics per row.
- Read this spec immediately before using the component.

## When Not To Use

- Do not use for industries; those are `blog-industry-link-tile`.
- Do not use for product features (`features-grid`) or related pages
  (`keep-reading-band`).
- Do not use the tone squares as status or meaning; they are decoration.
- Do not import or copy from `/Components/`; it is evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `topics` (required): array of `BlogTopic` (`library/src/types.ts`):
  - `title` (required): topic name; the card's only link text.
  - `href` (required): category archive URL.
  - `description` (optional): one sentence.
  - `count` (optional): number of guides; renders "1 guide" / "N guides".
  - `tone` (optional): `orange`, `blue`, or `yellow`; cycles in that order
    when omitted.
- `headingLevel` (optional, `h3` default).

## Variants

- `default`: white topic cards in the 3/1 grid.

## Slots

- `topics` (required): the topics to render.
- `headingLevel` (optional): topic title heading level.

## States

- default: white card, base shadow, 20px radius, 28px padding.
- hover: lifts 3px with the hover shadow; the title underlines.
- focus: the title link is the only focusable element; the 3px ink focus ring
  is drawn on the card.
- responsive: 3 columns, 1 below 992px.
- reduced motion: no lift or transition.
- empty, disabled, loading, error: not applicable.

## Accessibility Rules

- One link per card: the topic name, stretched over the card.
- The tone square is `aria-hidden`; meaning never relies on its colour.
- The description uses `color.text.secondary`; the count is ink.

## Screenshot

Approved screenshot: `assets/screenshots/blog-topic-card.png`

Visual evidence path: `assets/screenshots/blog-topic-card.png` (crop of the
approved redesign mockup, 1440px)
Evidence archive: `Components/Blog Topic Card`

## Token Usage

- `color.surface.white`
- `color.ink`
- `color.text.secondary`
- `color.accent.orange`
- `color.accent.blue`
- `color.accent.yellow`
- `fontFamily.body`
- `dimension.radius.cardPrimary`
- `dimension.radius.brandDot`
- `shadow.cardBase`
- `shadow.cardHover`
- `motion.duration.fast`
- `motion.easing.gentle`

Do not replace these tokens with raw literals. If a needed value is missing,
stop and request a token update.

## Composition Rules

- Sits on the cyan browse band under a section head (eyebrow + h2), followed
  by `blog-industry-link-tile`.
- Runbook B must import the clean implementation from
  `library/src/components/BlogTopicCard.tsx`.
- If the outline needs a field not listed above, stop and create a
  component-change request.

## Design Rules

- Topic name Onest bold 24px, -0.02em; description Onest 17px, line-height
  1.5; count Onest bold 15px with an arrow icon.
- Tone square 22px with the 7px brand-dot radius.
- Accent colours appear only as the tone squares, never as text.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="blog-topic-card"
props:
  topics:
    - title: "Customer Loyalty"
      href: "https://blog.loyaltymaster.com/category/customer-loyalty-software-solutions/"
      description: "Program ideas and rewards that turn first visits into regulars."
      count: 21
:::
```

## AI Usage Contract

- Read this spec immediately before using `blog-topic-card`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules,
  and composition rules listed here.
- Do not import from `/Components/`.
- Stop before creating a new variant or parallel component unless
  registry/spec/library/showcase are updated first.
