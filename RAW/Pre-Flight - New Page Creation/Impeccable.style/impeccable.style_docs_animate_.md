---
url: "https://impeccable.style/docs/animate/"
title: "animate | Impeccable"
---

[Skip to content](https://impeccable.style/docs/animate/#main)[/Impeccable](https://impeccable.style/)

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

[Docs](https://impeccable.style/docs)/animateRefine

# /impeccable animate

Purposeful motion that conveys state, not decoration.

## When to use it

`/impeccable animate` is for interfaces that feel lifeless, where state changes are instant and jarring, where loading just pops in, where the user never quite trusts that their click registered. Use it to add the small motions that communicate what is happening: entrances, exits, feedback, transitions between states.

Do not use it to add bounces or elastic springs for the sake of energy. That is decoration, and this skill will not give it to you.

## How it works

The skill identifies static moments that would benefit from motion, then applies them with strict discipline:

1. **Entrances and exits**: elements appear and leave with 200 to 300ms fades plus subtle Y or scale, never layout properties.
2. **State feedback**: hover, active, focus, loading, success all communicate via motion instead of sudden swaps.
3. **Transitions between views**: shared-element transitions where it makes sense, fade-through otherwise.
4. **Progress and loading**: skeleton screens, determinate bars, motion that says “still working”.
5. **Reduced motion**: every animation has a `prefers-reduced-motion` fallback.

Easing is always exponential (ease-out-quart, quint, or expo) because real objects decelerate smoothly. No bounce, no elastic, no linear for anything except progress indicators.

The skill animates `transform` and `opacity` only. If you find yourself animating `width`, `height`, `top`, or `left`, it is doing the wrong thing. Use `grid-template-rows` for height transitions.

## Try it

```
/impeccable animate the sign-up flow
```

Typical additions:

- Email input gets a focus glow on focus-visible (opacity + shadow, 180ms)
- Submit button shows a spinner inside itself on loading state, not a separate spinner next to it
- Success screen enters with opacity + translateY(8px), 260ms, ease-out-quart
- Error message slides down with grid-template-rows (not height), 220ms
- `@media (prefers-reduced-motion: reduce)` fallback for every transition

## Pitfalls

- **Asking for “more animation”.** Animate is not a dial. It adds where motion communicates, not everywhere.
- **Removing the reduced-motion fallbacks.** The skill adds them automatically. Non-negotiable for accessibility.

## Related commands

[combines withdelight](https://impeccable.style/docs/delight)

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)