# Blog Industry Link Tile

Component ID: `blog-industry-link-tile`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `blog-link-list`
Library target: `library/src/components/BlogIndustryLinkTile.tsx`
Raw evidence: `Components/Blog Industry Link Tile/lm-blog-industries.css`

## Purpose

A labelled list ("By industry") of compact link tiles, one per industry
category, each showing the industry name and a small guide-count badge. The
tiles render in their own grid: 4 columns on desktop, then 3 (at 1100px), 2
(below 992px), and 1 (below 768px).

Canon-promoted 2026-09-28 from the blog redesign published on 2026-09-27
(Bricks class `lm-blog-industries`).

Registry description: Labelled list of compact industry link tiles with
guide-count badges in a 4/3/2/1-column grid.

## When To Use

- Use for the industry shortcut list on blog.loyaltymaster.com, under the
  topic cards in the browse band.
- Read this spec immediately before using the component.

## When Not To Use

- Do not use for the loyaltymaster.com industry pages index; that is
  `industry-use-case-card-grid`.
- Do not use for topics (`blog-topic-card`) or navigation menus.
- Do not import or copy from `/Components/`; it is evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `industries` (required): array of `IndustryLink` (`library/src/types.ts`):
  `label` (required), `href` (required, category archive URL), and `count`
  (optional, number of guides).
- `heading` (optional, default "By industry"): the list label.
- `headingLevel` (optional, `h3` default).
- `id` (optional, default "blog-industries"): prefix for the heading id the
  list is labelled by.

## Variants

- `default`: translucent white tiles on the cyan browse band.

## Slots

- `id` (optional): heading id prefix.
- `heading` (optional): list label.
- `headingLevel` (optional): label heading level.
- `industries` (required): the industries to render.

## States

- default: 60px-tall tile, white at 80% opacity, 1px ink hairline (10%
  alpha), 16px radius.
- hover: solid white with a 2px orange inset border (orange as a hover
  accent, not as the focus indicator).
- focus: 3px ink focus ring, offset 3px (The Ink Focus Ring Rule).
- responsive: 4 / 3 / 2 / 1 columns at the breakpoints above.
- reduced motion: no transition.
- empty, disabled, loading, error: not applicable.

## Accessibility Rules

- The list is a `<ul>` labelled by the heading (`aria-labelledby`).
- Each tile is one link. The count badge carries visually hidden "guides" so
  the link reads "Coffee Shops 9 guides".
- Text is ink on white or cyan (13.78:1 or more).

## Screenshot

Approved screenshot: `assets/screenshots/blog-industry-link-tile.png`

Visual evidence path: `assets/screenshots/blog-industry-link-tile.png` (crop of
the approved redesign mockup, 1440px)
Evidence archive: `Components/Blog Industry Link Tile`

## Token Usage

- `color.surface.white`
- `color.ink`
- `color.background.cyan`
- `color.accent.orange`
- `fontFamily.body`
- `dimension.radius.cardSecondary`
- `dimension.radius.pill`
- `motion.duration.fast`
- `motion.easing.gentle`

Do not replace these tokens with raw literals. If a needed value is missing,
stop and request a token update.

## Composition Rules

- Follows `blog-topic-card` inside the cyan browse band (48px above the
  heading when it follows the topic grid).
- Runbook B must import the clean implementation from
  `library/src/components/BlogIndustryLinkTile.tsx`.
- If the outline needs a field not listed above, stop and create a
  component-change request.

## Design Rules

- Label Onest bold 20px; tile text Onest bold 17px; badge 13px on a cyan pill.
- Keep industry names short (one line at 4 columns).

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="blog-industry-link-tile"
props:
  industries:
    - label: "Coffee Shops"
      href: "https://blog.loyaltymaster.com/category/customer-loyalty-software-coffee-shop/"
      count: 9
:::
```

## AI Usage Contract

- Read this spec immediately before using `blog-industry-link-tile`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules,
  and composition rules listed here.
- Do not import from `/Components/`.
- Stop before creating a new variant or parallel component unless
  registry/spec/library/showcase are updated first.
