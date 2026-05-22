# Blocked Example: Unapproved Token Literal

## Verdict

Blocked.

## Rule Violated:

Never substitute a color, font, radius, shadow, or spacing value with a
close-enough raw literal.

## Bad Pattern

```tsx
<section style={{ background: "#f6e7d4", borderRadius: 24 }}>
```

## Required Correction

Use named tokens from `tokens/design-tokens.json` and the token-backed
implementation from the selected `libraryPath`. If no approved token fits, stop
and ask before adding a new value.
