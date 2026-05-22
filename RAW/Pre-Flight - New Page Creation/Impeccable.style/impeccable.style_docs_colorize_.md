---
url: "https://impeccable.style/docs/colorize/"
title: "colorize | Impeccable"
---

[Skip to content](https://impeccable.style/docs/colorize/#main)[/Impeccable](https://impeccable.style/)

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

[Docs](https://impeccable.style/docs)/colorizeRefine

# /impeccable colorize

Add strategic color to monochrome interfaces without going garish.

## When to use it

`/impeccable colorize` is the counterweight to “everything is gray”. Dashboards that read as a beige wall, forms with no accent, content pages that could be any SaaS product. Reach for it when the interface is functional but emotionally flat, and you want warmth without tipping into the AI color palette (purple-to-pink, cyan neon, dark mode glow).

## How it works

The skill starts by reading your brand color if one exists, then decides where color earns its place:

1. **Primary action** gets the strongest expression of the brand hue.
2. **Secondary accents** get muted or tinted variants, not a second full color.
3. **Neutrals** get tinted toward the brand hue at low chroma (around 0.005 to 0.01), which is nearly invisible per pixel but creates subconscious cohesion.
4. **Content categories** get a limited, intentional accent system, not a rainbow.

Importantly, it uses OKLCH rather than HSL so that equal lightness steps look equal. As lightness moves toward the extremes, chroma drops automatically. This is how you get color that feels considered instead of computed.

## Try it

```
/impeccable colorize the dashboard
```

Expected diff:

- Brand color moved from a hardcoded hex to `--color-accent: oklch(62% 0.18 240)`
- Neutrals tinted with 0.007 chroma toward the brand hue
- Primary button gets the full accent, secondary buttons get ink/mist
- Chart series uses 3 distinct hues, all at matched lightness so no series visually dominates
- Empty state illustration picks up a soft accent wash

## Pitfalls

- **Running it without a brand hue.** Colorize needs a starting point. If `PRODUCT.md` does not specify one, it will ask. Do not let it pick from the AI color palette defaults.
- **Expecting it to fix the AI color palette problem.** If your design already has purple gradients and cyan neon, you need `/impeccable quieter` first, then colorize can rebuild.
- **Using it on already-colorful interfaces.** That is a `/impeccable quieter` job. Colorize adds, it does not subtract.

## Related commands

[combines withbolder](https://impeccable.style/docs/bolder) [combines withdelight](https://impeccable.style/docs/delight)

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)