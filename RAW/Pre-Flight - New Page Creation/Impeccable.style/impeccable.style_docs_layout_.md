---
url: "https://impeccable.style/docs/layout/"
title: "layout | Impeccable"
---

[Skip to content](https://impeccable.style/docs/layout/#main)[/Impeccable](https://impeccable.style/)

[Home](https://impeccable.style/) [Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live](https://impeccable.style/live-mode)[24k](https://github.com/pbakaus/impeccable)

Commands

Commands

Create

- [craft](https://impeccable.style/docs/craft)
- [impeccable](https://impeccable.style/docs/impeccable)
- [shape](https://impeccable.style/docs/shape)

Evaluate

- [audit](https://impeccable.style/docs/audit)
- [critique](https://impeccable.style/docs/critique)

Refine

- [animate](https://impeccable.style/docs/animate)
- [bolder](https://impeccable.style/docs/bolder)
- [colorize](https://impeccable.style/docs/colorize)
- [delight](https://impeccable.style/docs/delight)
- [layout](https://impeccable.style/docs/layout)
- [overdrive](https://impeccable.style/docs/overdrive)
- [quieter](https://impeccable.style/docs/quieter)
- [typeset](https://impeccable.style/docs/typeset)

Simplify

- [adapt](https://impeccable.style/docs/adapt)
- [clarify](https://impeccable.style/docs/clarify)
- [distill](https://impeccable.style/docs/distill)

Harden

- [harden](https://impeccable.style/docs/harden)
- [onboard](https://impeccable.style/docs/onboard)
- [optimize](https://impeccable.style/docs/optimize)
- [polish](https://impeccable.style/docs/polish)

System

- [document](https://impeccable.style/docs/document)
- [extract](https://impeccable.style/docs/extract)
- [live](https://impeccable.style/docs/live)
- [teach](https://impeccable.style/docs/teach)

[Docs](https://impeccable.style/docs)/layoutRefine

# /impeccable layout

Fix layout, spacing, and visual rhythm.

## When to use it

`/impeccable layout` is for pages where nothing is technically wrong but nothing is breathing either. Equal padding everywhere, monotonous card grids, content that runs edge to edge, hierarchy that relies on size alone. Reach for it when a layout “feels off” and you cannot articulate why.

Good triggers: “everything feels crowded”, “it reads like a wall”, “I do not know where to look first”.

## How it works

The skill runs through five layout dimensions:

1. **Spacing**: is the spacing scale consistent or are there random 13px gaps, are related elements grouped tightly with generous space between groups, is there any rhythm at all.
2. **Visual hierarchy**: does the eye land on the primary action within 2 seconds, is the hierarchy doing real work or is everything shouting.
3. **Grid and structure**: is there an underlying grid or is the layout random, are elements aligned to baselines.
4. **Rhythm**: does the page alternate between tight and generous spacing, or is everything uniform.
5. **Density**: is the layout cramped or is it wasteful, does density match the content type.

Fixes usually involve rebuilding the spacing scale, introducing asymmetry, collapsing monotonous grids into a mixed layout with hero and supporting elements, and giving the primary action real space.

## Try it

```
/impeccable layout the settings page
```

Typical changes:

- Spacing scale unified to 8 / 16 / 24 / 48 / 96px
- Section breaks at 48px, row gaps at 16px, form field groups at 8px
- Primary actions pulled out of the form flow with 32px buffer
- Decorative borders removed, replaced with spacing-driven grouping
- Sidebar and main column proportions rebalanced (280 / flex vs 25 / 75)

## Pitfalls

- **Confusing arrange with distill.** If the problem is too many things, run `/impeccable distill` first. Layout is for arranging what is already the right set.
- **Expecting it to rescue a broken grid.** If the page has no grid at all, arrange will build one. Just know that the diff is going to be larger than you expect.
- **Ignoring the hierarchy verdict.** If arrange says “nothing is primary”, no amount of spacing work fixes that. You need a content decision, not a layout tweak.

## Related commands

[combines withdistill](https://impeccable.style/docs/distill) [combines withadapt](https://impeccable.style/docs/adapt)

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)