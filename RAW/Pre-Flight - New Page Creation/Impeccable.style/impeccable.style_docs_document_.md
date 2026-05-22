---
url: "https://impeccable.style/docs/document/"
title: "document | Impeccable"
---

[Skip to content](https://impeccable.style/docs/document/#main)[/Impeccable](https://impeccable.style/)

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

[Docs](https://impeccable.style/docs)/documentSystem

# /impeccable document

Generate a spec-compliant DESIGN.md that captures your visual system so every AI agent stays on-brand.

DESIGN.mdGoogle Stitch format

01Overview

Creative North Star: _"The Editorial Sanctuary."_ Quiet type, generous air, one committed accent.

02Colors

03Typography

AaCormorant Garamond · Instrument Sans

04Elevation

Flat by default. Shadows appear only as a response to state.

05Components

Subscribefiltercard

06Do's and Don'ts

Tint neutrals toward the accent hue.Gradient text for emphasis.

The six sections are fixed, in a fixed order, with fixed names. Alongside, `DESIGN.json` ships as a machine-readable sidecar for the Live Mode design panel.

## When to use it

Run `/impeccable document` once you have enough of a visual system to document: colors, typography, at least a button and a card. The command scans your codebase, extracts the tokens and component patterns it finds, and writes a `DESIGN.md` at the project root that follows the [Google Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/format/), six sections in a fixed order, interoperable with every other DESIGN.md-aware tool.

Reach for it when:

- **You just ran `/impeccable teach`** and `PRODUCT.md` now exists. Document is the matching visual-side file.
- **A command nudged you toward it.** Live, craft, and polish all read DESIGN.md. If it is missing, the skill suggests running document first.
- **The design has drifted** from an older DESIGN.md and the file no longer describes the live system.
- **Before a large redesign**, to capture current state as a reference for the next direction.

For projects with no code yet (fresh `teach` run, nothing built), there is a seed mode: `/impeccable document --seed` asks five quick strategic questions (color strategy, type direction, motion energy, references, anti-references) and writes a scaffold. Re-run in scan mode once there is code.

## How it works

The scan pass finds design assets in priority order: CSS custom properties, Tailwind config, CSS-in-JS themes, design token files, component source, the global stylesheet, and finally computed styles from the live rendered output if a browser is available. It auto-extracts everything it can, then asks one grouped question for the parts that need creative input: the **Creative North Star** (a single named metaphor for the whole system, like “The Editorial Sanctuary”), descriptive color names, the elevation philosophy, and the component character.

Output is a DESIGN.md with exactly six sections: Overview, Colors, Typography, Elevation, Components, Do’s and Don’ts. Headers are fixed character-for-character so the file is parseable by other tools. Alongside it, `DESIGN.json` is written as a machine-readable sidecar. That sidecar is what the live-mode design panel uses to render _this project’s_ actual button, input, nav, and card tiles instead of a generic approximation.

Every other command reads DESIGN.md on invocation. Variants, polishes, audits, and new features inherit the visual system without being told.

## Try it

```
/impeccable document
```

On a project with tokens already defined, this takes about two minutes: the scan finds your palette and type stack, you pick a North Star from 2 or 3 options, confirm descriptive color names (“Deep Muted Teal-Navy”, not “blue-800”), and the file lands at the project root.

On a fresh project:

```
/impeccable document --seed
```

Five questions, about five minutes. The file is a scaffold, marked with a `<!-- SEED -->` comment so it is honest about what it is. Re-run without the flag once you have implemented tokens.

## Pitfalls

- **Running it too early.** On a project with no implemented tokens, seed mode is right. Do not fabricate a full spec the code cannot back up. A fake DESIGN.md is worse than no DESIGN.md.
- **Treating DESIGN.md as documentation for humans only.** It is primarily for the AI. Every other command reads it. The format’s forcefulness (“never”, “always”, Named Rules) is intentional.
- **Adding a Layout / Motion / Responsive top-level section.** The spec has six sections, in a fixed order, with fixed names. Fold layout or motion content into Overview (philosophy-level rules) or Components (per-component behavior).
- **Overwriting an existing DESIGN.md silently.** Document always confirms first. If you want to start fresh, rename the existing file out of the way or explicitly tell the skill to overwrite.

## Related commands

[combines withteach](https://impeccable.style/docs/teach) [combines withextract](https://impeccable.style/docs/extract)

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)