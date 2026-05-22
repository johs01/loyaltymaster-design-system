---
url: "https://impeccable.style/docs/polish/"
title: "polish | Impeccable"
---

[Skip to content](https://impeccable.style/docs/polish/#main)[/Impeccable](https://impeccable.style/)

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

[Docs](https://impeccable.style/docs)/polishHarden

# /impeccable polish

The meticulous final pass between good and great.

## When to use it

`/impeccable polish` is the last thing you run before shipping. It hunts down the small details that separate a shipped feature from a polished one: half-pixel misalignments, inconsistent spacing, forgotten focus states, loading transitions that flash, copy that drifts in tone. It also aligns the feature with your design system, replacing hard-coded values with tokens, swapping custom components for shared ones, and fixing any drift from established patterns.

Reach for it when the feature is functionally complete, nothing is broken, and something still feels off. Also reach for it when a feature has drifted from the design system and needs to be pulled back in line.

## How it works

Polish starts by discovering the design system (tokens, spacing scale, shared components), then works methodically across six dimensions:

1. **Visual alignment and spacing**: pixel-perfect grid adherence, consistent spacing scale, optical alignment on icons.
2. **Typography**: hierarchy consistency, line length, widows and orphans, kerning on headlines.
3. **Color and contrast**: token usage, theme parity, WCAG ratios, focus indicators.
4. **Interaction states**: hover, focus, active, disabled, loading, error, success. Every state accounted for.
5. **Transitions and motion**: smooth easing, no layout jank, respect for `prefers-reduced-motion`.
6. **Copy**: consistent voice, correct tense, no placeholder strings, no stray TODOs.

The skill is explicit about one thing: polish is the last step, not the first. If the feature is not functionally complete, polishing it is wasted work.

## Try it

```
/impeccable polish the pricing page
```

A healthy run looks like:

```
Visual alignment: fixed 3 off-grid elements (8px baseline)
Typography: tightened h1 kerning, fixed widow on testimonial
Interaction: added hover state on FAQ items, focus ring on email input
Motion: softened modal entrance, added reduced-motion fallback
Copy: removed one "Lorem ipsum" stray, aligned button voice
```

Five small fixes, no rewrites. That is the shape of a good polish pass.

## Pitfalls

- **Polishing work that is not done.** If there are TODOs in the code, you are not ready. Run `/impeccable polish` on finished features only.
- **Treating polish as redesign.** Polish refines what exists. If you find yourself rearchitecting a layout, you needed `/impeccable critique` or `/impeccable layout` instead.
- **Running `/impeccable polish` without `/impeccable audit` first.** Polish catches feel-based issues. Audit catches measurable ones. Use both.

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)