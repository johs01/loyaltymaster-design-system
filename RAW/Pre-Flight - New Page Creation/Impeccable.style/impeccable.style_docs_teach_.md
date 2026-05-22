---
url: "https://impeccable.style/docs/teach/"
title: "teach | Impeccable"
---

[Skip to content](https://impeccable.style/docs/teach/#main)[/Impeccable](https://impeccable.style/)

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

[Docs](https://impeccable.style/docs)/teachSystem

# /impeccable teach

Teach Impeccable who your product is for, once per project.

PRODUCT.mdLoaded on every command

RegisterProduct. Design serves the task.

UsersSREs on call, reading fast, often in the dark.

Brand voiceCalm, clinical, no hype.

Anti-referencesPurple gradients. Glassmorphism. "Boost your productivity."

Every command reads this before writing a line of code.

A finished PRODUCT.md. Strategy only: who, what, why. No colors, no fonts, no pixel values, those live in DESIGN.md.

## When to use it

Run `/impeccable teach` once at the start of a project. It is the onramp. Without it, every other command will produce design that is technically competent but generically toned: stock SaaS voice, safe-default fonts, the AI color palette. With it, every command reads your answers before it generates.

Reach for it when:

- **You just installed Impeccable in a new project.** First thing to run. Other commands will nudge you toward it if you skip.
- **The project’s brand direction has shifted.** New positioning, new audience, new voice. Re-run `teach` and the updated context flows through every command.
- **Another command said “no design context found”** and stopped. That is the signal: run teach, then resume.

## How it works

Teach writes two complementary files at the project root:

- **`PRODUCT.md`** is the strategic file. Register (brand or product), target users, product purpose, brand personality, anti-references, design principles, accessibility needs. Answers “who, what, why”.
- **`DESIGN.md`** is the visual file. Colors, typography, elevation, components, do’s and don’ts. Answers “how it looks”. Written by the delegated `/impeccable document` command, which teach invokes at the end.

The flow scans the codebase first (README, package.json, components, tokens, brand assets) and forms a **register hypothesis**: brand (landing, marketing, portfolio, where design IS the product) or product (app UI, dashboards, tools, where design SERVES the product). Register is the first question, because it shapes every downstream answer: typography defaults, motion energy, color strategy, the reference set commands like `/impeccable typeset` pull from. After register, teach asks only what it could not infer: users, personality in three real words, references and anti-references, accessibility requirements.

PRODUCT.md is strategic only. No colors, no fonts, no pixel values. Those live in DESIGN.md. Keeping the two files separate is deliberate: strategy can stay stable while the visual system evolves.

## Try it

```
/impeccable teach
```

Expect a 5 to 8 minute interview. The first question is usually about register; the rest are short. Teach will quote back what it inferred from your code (“from the routes, this looks like a product surface, match?”) so you are confirming, not starting from scratch.

At the end, teach offers to run `/impeccable document` for you. Say yes unless you have a specific reason to hold off. A real DESIGN.md is what keeps variants, polishes, and audits on-brand.

## Pitfalls

- **Skipping it to “just try a command quickly”.** Every other command will interview you mid-flight instead. Running teach first is faster, not slower.
- **Giving generic answers.** “Modern and clean” is not useful. “Warm, mechanical, opinionated” is. Be specific. Be willing to disagree with safe defaults.
- **Treating PRODUCT.md as immutable.** The file is yours. If teach put something in there that is not quite right, edit it. Every command reads the current file.
- **Listing only adjectives for references.** Brands, products, printed objects: named, not described. “Klim Type Foundry specimen pages”, not “technical and clean”. Anti-references should be equally specific.

## Related commands

[combines withdocument](https://impeccable.style/docs/document)

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)