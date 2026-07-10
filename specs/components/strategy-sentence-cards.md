# Strategy Sentence Cards

Component ID: `strategy-sentence-cards`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `content-section`
Library target: `library/src/components/StrategySentenceCards.tsx`
Raw snapshot: `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/src/site-pages/foot-traffic-on-demand/FootTrafficOnDemandPage.tsx`

## Purpose

Presents a stack of strategy or opportunity points where each group is a bold
heading on the section band and every supporting sentence sits in its own soft
white card. Canonical source: the `ftd-points` / `ftd-point` pattern from the
foot-traffic-on-demand page (`foot-traffic-on-demand.css`), generalized as
`wf-points` / `wf-point`.

Registry description: Heading-over-sentence-cards stack for strategy, problem,
and opportunity sections; each sentence renders in its own white card.

## When To Use

- Use for problem, opportunity, and strategy sections on product marketing
  pages. As of 2026-07-10 this pattern REPLACES the numbered problem-card list
  as the standard problem/opportunity rendering on product pages.
- Use when copy naturally breaks into short punchy sentences that deserve
  individual emphasis.
- Read this spec fresh immediately before using the component so edited rules
  are applied to the next artifact.

## When Not To Use

- Do not use for icon-led capability grids; that is `features-grid`.
- Do not use for checklist-inside-split sections; that is
  `feature-section-2-column-bullets-image`.
- Do not use on the homepage problem section, which keeps its own approved
  composition.
- Do not import or copy from `/Components/` or `RAW/`; they are raw snapshot
  reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or
  compositions without approval.

## Props

- `eyebrow` (string, optional).
- `heading` (string, optional): section-level heading above the stack.
- `groups` (array, required): each group is `{ title, sentences }`. `title`
  renders as a bold heading on the band background; each entry in `sentences`
  renders as one card. Sentences come from the page copy re-chunked at
  sentence seams only; every card must read as a complete sentence, never a
  fragment.
- `image` (object, optional; local `ImageAsset` only): sticky square media
  column beside the stack.
- `action` (object, optional): single CTA under the stack.

## States

- default: group headings and sentence cards are visible.
- hover: a card lifts 2px and deepens its shadow (approved hover treatment).
- focus: links or actions inside the section require visible focus.
- empty: do not render a group without at least one sentence.
- responsive: cards keep natural block flow and stack in one column; below
  800px cards use the tighter approved padding and type scale.

## Accessibility Rules

- Use semantic headings for group titles.
- Sentence cards are paragraphs, not interactive elements; do not attach
  click handlers without making them real controls.
- Preserve visible focus states and sufficient contrast in every
  implementation.
- Respect reduced-motion preferences when animation or transitions are
  present.

## Screenshot

Approved screenshot: `assets/screenshots/strategy-sentence-cards.png`

Captured from the Phase 5 showcase specimen, which mirrors the approved live
implementation (the opportunity section of the /features/ page, approved
2026-07-10). Use this screenshot as the visual reference for spacing, weight,
rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `typography.title`
- `typography.body`
- `color.background.cyan`
- `color.surface.white`
- `color.ink`
- `dimension.radius.cardSecondary`
- `shadow.cardBase`
- `shadow.cardHover`

Do not replace these tokens with raw literals. If a needed value is missing,
stop and request a token update instead of improvising.

## Composition Rules

- Typically sits on the cyan problem/contrast band with a sticky square media
  column beside the stack; salmon or peach bands are allowed when the page
  rhythm requires it.
- Group headings sit directly on the band; never wrap the heading in a card.
- Do not nest cards inside cards, and do not add icons or numbers to the
  cards.
- Keep the component inside the content role it was approved for in the
  registry.

## Design Rules

- Card chrome: white surface, secondary 16px radius, hairline border, soft
  card shadow, 2px hover lift with the hover shadow. Dark theme swaps the
  surface to the panel-light token via the shared problem-card variables.
- Card text: Onest body, 16px/22px, weight 500, -0.28px tracking; below 800px
  the card tightens to the approved mobile padding and 15px/21px type.
- Cards stack vertically with a 12px gap, 8px below their group heading;
  groups are separated by 36px.
- One sentence per card (two short ones at most); sentence-seam re-chunking
  only, message identical to the source copy.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display
  moments, Onest readable UI/body text, warm decisive accents, restrained
  shadows, and purposeful section rhythm.
- Glass treatment is prohibited in page-body surfaces unless this spec
  explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `strategy-sentence-cards`, read this spec after reading
  `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply
  the changed rule to the next generated page or artifact.
- Use `library/src/components/StrategySentenceCards.tsx` as the approved
  import path once implemented; the production reference is
  `DesignSystemProductPage` in the Loyaltymaster site repo.
- Never import from the RAW snapshot; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and
  composition rules listed here.
- Stop before creating a new variant or parallel component unless the
  registry and this spec are updated first.

## Variants

- `default`: Approved default variant. Do not invent unregistered variants.

## Slots

- `eyebrow` (optional): Approved eyebrow content/input slot.
- `heading` (optional): Approved section heading content/input slot.
- `groups` (required): Approved groups slot (title + sentence cards).
- `image` (optional): Approved sticky media content/input slot.
- `action` (optional): Approved action content/input slot.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="strategy-sentence-cards"
props:
  # use only registry-approved props
:::
```
