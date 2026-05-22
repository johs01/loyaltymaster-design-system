---
url: "https://impeccable.style/docs/extract/"
title: "extract | Impeccable"
---

[Skip to content](https://impeccable.style/docs/extract/#main)[/Impeccable](https://impeccable.style/)

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

[Docs](https://impeccable.style/docs)/extractSystem

# /impeccable extract

Pull reusable components, tokens, and patterns into the design system.

01Discover driftRepeated hex values, button variants, spacing scales, text styles.

02Propose primitivesToken names, component APIs with variant + size, text styles.

03Migrate call sitesReplace duplicated CSS with the new primitives. No orphan code left behind.

The skill only extracts what's used three or more times with the same intent. Two usages are not a pattern, and migration always happens in the same pass.

## When to use it

`/impeccable extract` is for the moment your codebase has accidentally become a design system. Repeated button styles in 12 places. Three variants of the same card. Hex colors scattered throughout. Hand-rolled spacing that accidentally matches a scale. Reach for it when you want to consolidate this drift into reusable primitives.

Use it after a product has shipped enough features to reveal the patterns. Premature extraction creates abstractions that do not match reality.

## How it works

The skill discovers the design system structure first, then identifies extraction opportunities:

1. **Tokens**: find repeated literal values (colors, spacing, radii, shadows, font sizes). Propose token names, add to the token system, replace usages.
2. **Components**: find UI patterns that repeat with minor variation (buttons, cards, inputs, modals). Extract into a single component with variants, migrate callers.
3. **Composition patterns**: find layout or interaction patterns that repeat (form rows, toolbar groups, empty states). Extract into composition primitives.
4. **Type styles**: find repeated font-size + weight + line-height combinations. Extract into text styles.
5. **Animation patterns**: find repeated easing, duration, or keyframe combinations. Extract into motion tokens.

The skill is cautious. It only extracts things used three or more times, with the same intent. It never extracts “because it might be reused later”. Premature abstraction is worse than duplication.

## Try it

```
/impeccable extract the button styles
```

Expected output:

- Found 14 button instances across 8 files
- 4 distinct variants: primary (filled accent), secondary (bordered), ghost (text-only), destructive (filled red)
- All 4 variants use the same size scale (small, default, large)
- Extracted into `<Button variant="primary" size="default">` with token-driven styles
- Migrated 14 call sites, removed ~180 lines of duplicated CSS
- Added 3 missing tokens: `--button-radius`, `--button-padding-y`, `--button-padding-x`

## Pitfalls

- **Extracting too early.** Two usages are not a pattern. Three might be. Wait until the pattern is obvious.
- **Over-generalizing.** The extracted component should match the current use cases closely, not anticipate every possible future one. You can always add variants later.
- **Forgetting the migration.** Extraction without migration leaves the old duplicated code around and creates a third way of doing the same thing. Always migrate in the same pass.
- **Extracting things that differ in intent.** Two buttons that look similar but serve different purposes (primary action vs link styled as button) should probably stay separate.

## Related commands

[combines withdocument](https://impeccable.style/docs/document)

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)