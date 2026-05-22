---
url: "https://impeccable.style/docs/audit/"
title: "audit | Impeccable"
---

[Skip to content](https://impeccable.style/docs/audit/#main)[/Impeccable](https://impeccable.style/)

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

[Docs](https://impeccable.style/docs)/auditEvaluate

# /impeccable audit

Five-dimension technical quality check with P0 to P3 severity.

/impeccable audit the checkout flow

src/checkout/\*\*

2.6/ 4

Accessibility2 / 4

Performance3 / 4

Theming2.5 / 4

Responsive3 / 4

Anti-patterns2.8 / 4

P02P15P28P314

Five dimensions scored 0 to 4, each finding tagged P0 (blocks release) to P3 (polish). Audit documents; it doesn't fix. Route the findings into `/impeccable harden`, `/impeccable polish`, or `/impeccable optimize`.

## When to use it

`/impeccable audit` is the technical counterpart to `/impeccable critique`. Where `/impeccable critique` asks “does this feel right”, `/impeccable audit` asks “does this hold up”. It runs accessibility, performance, theming, responsive design, and anti-pattern checks against the implementation, scores each dimension 0 to 4, and produces a plan with P0 to P3 severity ratings.

Use it before shipping, during a quality sprint, or whenever a tech lead says “we should really look at accessibility”.

## How it works

The skill scans your code across five dimensions:

1. **Accessibility**: WCAG contrast, ARIA, keyboard nav, semantic HTML, form labels.
2. **Performance**: layout thrashing, expensive animations, missing lazy loading, bundle weight.
3. **Theming**: hard-coded colors, dark mode coverage, token consistency.
4. **Responsive**: breakpoint behavior, touch targets, mobile viewport handling.
5. **Anti-patterns**: the same deterministic 25 checks the detector runs.

Each dimension gets a 0 to 4 score. Each finding gets a severity: P0 blocks the release, P1 should fix this sprint, P2 is next cycle, P3 is polish. You get back a single document you can paste into a ticket tracker.

Audit does not fix anything. It documents. Route the findings to `/impeccable polish`, `/impeccable harden`, or `/impeccable optimize` depending on the category.

## Try it

```
/impeccable audit the checkout flow
```

Expected output:

```
Accessibility: 2/4 (partial)
  P0: Missing form labels on 4 inputs
  P1: Contrast 3.1:1 on disabled button state
  P2: No visible focus indicator on custom dropdown

Performance: 3/4 (good)
  P1: Hero image not lazy-loaded (340KB)
  ...
```

Hand the P0s to `/impeccable harden`, the theming and typography P1s to `/impeccable typeset` and `/impeccable polish`, the rest to `/impeccable polish`.

## Pitfalls

- **Confusing it with `/impeccable critique`.** Audit is implementation quality. Critique is design quality. Run both for a full picture.
- **Fixing P3s before P0s.** The severity scale exists for a reason. Start at the top.
- **Skipping the dimensions you think are fine.** Theming and responsive are the ones most people assume are fine until they are not.

## Related commands

[leads toharden](https://impeccable.style/docs/harden) [leads tooptimize](https://impeccable.style/docs/optimize) [leads toadapt](https://impeccable.style/docs/adapt) [leads toclarify](https://impeccable.style/docs/clarify)

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)