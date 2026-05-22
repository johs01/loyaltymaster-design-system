---
url: "https://impeccable.style/docs/optimize/"
title: "optimize | Impeccable"
---

[Skip to content](https://impeccable.style/docs/optimize/#main)[/Impeccable](https://impeccable.style/)

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

[Docs](https://impeccable.style/docs)/optimizeHarden

# /impeccable optimize

Diagnose and fix UI performance from LCP to bundle size.

## When to use it

`/impeccable optimize` is for interfaces that feel slow. First paint takes forever, scrolling janks, images pop in late, interactions feel laggy, the bundle ships 800KB of JavaScript. Use it when the Web Vitals are bad or when users are complaining that things are sluggish.

Do not use it as premature optimization. If LCP is 1.1s and INP is 80ms, stop. The design work matters more.

## How it works

The skill works through five perf dimensions:

1. **Loading and Web Vitals**: LCP, INP, CLS. Identify what is blocking the first paint, what is delaying interaction, what is shifting layout.
2. **Rendering**: unnecessary re-renders, missing memoization, expensive reconciliation, layout thrash in loops.
3. **Animations**: is anything animating layout properties, are transforms and opacity the only thing touched, does `will-change` help or hurt here.
4. **Images and assets**: lazy loading, responsive images (`srcset`, `sizes`), modern formats (WebP, AVIF), dimensions set to prevent CLS.
5. **Bundle size**: unused imports, oversized dependencies, missing code-splitting, dead code.

The skill measures before and after. Every fix gets quantified. If a change does not move a metric, it gets rolled back.

## Try it

```
/impeccable optimize the homepage
```

Expected shape:

```
LCP: 3.2s → 1.4s
  - Hero image preloaded (-800ms)
  - Removed render-blocking font stylesheet (-240ms)
  - Deferred analytics script (-180ms)

INP: 240ms → 90ms
  - Debounced scroll handler
  - Memoized expensive list render
  - Removed synchronous layout read in event loop

CLS: 0.18 → 0.02
  - Set dimensions on hero image and logo
  - Reserved space for async header badge

Bundle: 340KB → 180KB
  - Removed unused lodash import (52KB)
  - Code-split the playground route (78KB)
  - Dropped deprecated icon set (30KB)
```

## Pitfalls

- **Optimizing before measuring.** Without baseline metrics, you cannot tell what helped. Run `/impeccable optimize` with specific Web Vitals numbers, not vibes.
- **Chasing tiny wins.** A 20ms improvement in INP that takes a week is rarely worth it. Optimize has diminishing returns; know when to stop.
- **Forgetting to re-measure after every change.** The build could have made things worse in a way the skill did not predict. Verify.

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)