---
url: "https://impeccable.style/docs/clarify/"
title: "clarify | Impeccable"
---

[Skip to content](https://impeccable.style/docs/clarify/#main)[/Impeccable](https://impeccable.style/)

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

[Docs](https://impeccable.style/docs)/clarifySimplify

# /impeccable clarify

Rewrite confusing UX copy so interfaces explain themselves.

## When to use it

`/impeccable clarify` is for interface text that makes people stop and think. Confusing labels, ambiguous button copy, error messages that blame the user, tooltips that repeat the label, empty states that say nothing useful. Use it when the problem is not the layout or the color, it is the words.

Good triggers: “users do not understand this field”, “the error message is not helpful”, “I cannot write good button copy”, “this tooltip is a waste”.

## How it works

The skill rewrites text across the surfaces where most UX copy problems live:

1. **Labels and field hints**: direct, specific, say what is expected.
2. **Button copy**: verb-first, describes the outcome, not the action. “Save changes” not “OK”.
3. **Error messages**: explain what went wrong, whose fault it is, and what to do next. Never blame the user.
4. **Empty states**: orient the user, explain why the state is empty, offer a next step.
5. **Tooltips and helper text**: add information the label cannot carry, never restate it.
6. **Confirmation dialogs**: name the consequences, not the action.

The skill uses the audience and mental state from `PRODUCT.md` to tune voice. Technical audience gets precise language. Consumer audience gets plain speech. Rushed users get short text. Anxious users (payment, delete) get reassurance.

## Try it

```
/impeccable clarify the billing form
```

Before and after, typical:

- Label “Billing address” → “Address on your card”
- Placeholder “Enter your VAT ID” → “VAT ID (optional, for business)”
- Error “Invalid input” → “This card number is 15 digits. You entered 14.”
- Button “Submit” → “Charge $29 and subscribe”
- Empty state “No transactions yet” → “Your first charge will show up here after your first order.”

## Pitfalls

- **Writing cleverer, not clearer.** Clarify is not for voice upgrades. If the copy is already clear, do not reach for this skill. Use `/impeccable delight` instead when you want personality.
- **Skipping the audience question.** Clarify needs to know who is reading. If `PRODUCT.md` does not specify audience technical level, the rewrites will be generic.
- **Running clarify on marketing copy.** Clarify is for functional UX text: labels, errors, instructions. Marketing copy needs a different set of moves and a human writer.

## Related commands

[combines withpolish](https://impeccable.style/docs/polish) [combines withadapt](https://impeccable.style/docs/adapt)

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)