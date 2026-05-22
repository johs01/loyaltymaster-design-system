# Blocked Example: Invented Component Variant

## Verdict

Blocked.

## Rule Violated:

Do not invent new component variants, visual states, colors, radii, shadows, or
type styles outside the current component spec.

## Bad Pattern

A page creates a new "premium hero card" variant with a new shadow, new radius,
new gradient, and non-token spacing because the default hero feels too quiet.

## Required Correction

Use `registry/components.json` to select the closest approved component, read
its `specPath`, import from its `libraryPath`, and stop for approval if the
brief genuinely requires a new variant.
