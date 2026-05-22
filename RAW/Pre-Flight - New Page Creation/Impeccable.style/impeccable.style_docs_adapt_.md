---
url: "https://impeccable.style/docs/adapt/"
title: "adapt | Impeccable"
---

[Skip to content](https://impeccable.style/docs/adapt/#main)[/Impeccable](https://impeccable.style/)

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

[Docs](https://impeccable.style/docs)/adaptSimplify

# /impeccable adapt

Make designs work across screens, devices, and contexts without amputating features.

## When to use it

`/impeccable adapt` is for taking a design built for one context and making it work in another. Mobile from desktop, tablet from mobile, print from web, embedded from standalone, email from dashboard. Reach for it when the source design is solid but falls apart at other breakpoints, on touch, or in a different container.

Not for building responsive from scratch. For that, start with `/impeccable` and shape the layout responsive-first. Adapt is for the “we never thought about mobile” backfill.

## How it works

The skill works through four dimensions of contextual fit:

1. **Breakpoints and fluid layout**: collapse multi-column to single, adjust clamp ranges, introduce new breakpoints where the design genuinely breaks.
2. **Touch targets**: minimum 44px hit areas, sufficient spacing between adjacent targets, larger tap zones than visual bounds where needed.
3. **Navigation patterns**: desktop sidebars become mobile bottom nav or slide-outs, dense toolbars collapse into menus, hover states get touch equivalents.
4. **Content priority**: decide what must be visible, what can collapse into disclosures, what can be removed entirely for that context.

The non-negotiable rule: adapt, do not amputate. Critical functionality cannot disappear on mobile just because it is inconvenient. Find a way to fit it, redesign the interaction, or reconsider whether it was really critical on desktop.

## Try it

```
/impeccable adapt the settings page for mobile
```

Expected changes:

- Three-column grid becomes single column with section headers acting as sticky dividers
- Sidebar nav moves to a horizontal scroller above the content
- Toggles gain 8px vertical padding so they meet 44px touch targets
- Inline help text moves to tap-to-reveal, not hover
- The “Danger zone” section expands fully on mobile instead of collapsing, because it contains irreversible actions and we want users to see them clearly

## Pitfalls

- **Amputating features.** If the mobile version hides things the desktop version can do, that is a regression, not an adaptation. Fight for the feature.
- **Treating mobile as “smaller desktop”.** Mobile is a different context: thumbs, interruption, short sessions. Adapt to the context, not to the viewport width.
- **Skipping `/impeccable harden` afterward.** Responsive layouts reveal edge cases. Run hardening after adapt to catch the ones that only show up at 320px.

## Related commands

[combines withpolish](https://impeccable.style/docs/polish) [combines withclarify](https://impeccable.style/docs/clarify)

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)