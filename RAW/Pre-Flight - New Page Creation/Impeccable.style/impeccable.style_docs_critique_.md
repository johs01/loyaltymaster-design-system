---
url: "https://impeccable.style/docs/critique/"
title: "critique | Impeccable"
---

[Skip to content](https://impeccable.style/docs/critique/#main)[/Impeccable](https://impeccable.style/)

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

[Docs](https://impeccable.style/docs)/critiqueEvaluate

# /impeccable critique

A design review with scoring, persona tests, and automated detection.

AI slop verdictFAIL

gradient-text · ai-color-palette · nested-cards

Heuristics (Nielsen)

Visibility of status3

Match with real world2

Consistency & standards2

Error prevention3

Recognition over recall1

Personas

The evaluatorComparing us to two alternatives on a Tuesday evening.

2 / 4

The returning userKnows the product, on mobile, in a hurry.

3 / 4

The skepticHas seen every SaaS landing and is bored.

1 / 4

The two passes (LLM design review plus the deterministic detector) merge into one prioritized list. What's working, what to fix, and the provocative questions worth answering before shipping.

## When to use it

Reach for `/impeccable critique` when you want an honest second opinion on something you already built. Not “does it work” but “is it any good”. The skill scores your interface against Nielsen’s 10 heuristics, runs cognitive load checks, tests through persona lenses, and cross-references an automated detector for 25 concrete anti-patterns.

Use it when a page is functionally done and you want to know if it reads as intentional or as AI slop.

## How it works

`/impeccable critique` runs two independent assessments in parallel so they do not bias each other.

The first is an **LLM design review**: the model reads your source, visually inspects the live page if browser automation is available, and walks the impeccable skill’s full DO/DON’T catalog. It scores Nielsen’s heuristics, counts cognitive load failures, traces the emotional journey through the flow, and flags AI slop.

The second is an **automated detector** (`npx impeccable detect`) that deterministically finds gradient text, purple palettes, side-tab borders, nested cards, line length problems, and the other visible fingerprints of generic AI output.

The two reports merge into one prioritized list: what is working, the three to five things that need fixing, and the provocative questions worth answering before shipping.

## Try it

Point it at a page:

```
/impeccable critique the homepage hero
```

You get back a scored report. Typical shape:

- **AI slop verdict**: pass / fail with the specific tells
- **Heuristic scores**: 10 numbers, 0 to 4
- **Cognitive load**: failure count out of 8
- **Priority issues**: three to five items, each with what, why, and fix
- **Questions to answer**: the ones the interface itself cannot decide for you

From there, pair with `/impeccable polish` or `/impeccable distill` to act on the fixes.

## Pitfalls

- **Running it on incomplete work.** Critique is for finished pages. An empty state with three TODOs will score badly because it is not done, not because it is bad.
- **Ignoring the questions at the end.** They are usually the fixes that change the design most.
- **Treating the heuristic scores as a grade.** They are diagnostic, not evaluative. A 3/4 on a heuristic that matters less for your context is fine.

## Related commands

[leads topolish](https://impeccable.style/docs/polish) [leads todistill](https://impeccable.style/docs/distill) [leads tobolder](https://impeccable.style/docs/bolder) [leads toquieter](https://impeccable.style/docs/quieter) [leads totypeset](https://impeccable.style/docs/typeset) [leads tolayout](https://impeccable.style/docs/layout)

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)