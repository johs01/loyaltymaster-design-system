# Blocked Example: Generic SaaS Card Grid

## Verdict

Blocked.

## Rule Violated:

Do not use generic SaaS layouts, endless identical feature-card grids, or
invented visual treatments when approved components already exist.

## Bad Pattern

A page plan jumps straight from a hero into a six-card grid with identical white
cards, generic icons, and repeated button treatments without reading
`registry/components.json`, `specs/components/features-grid.md`, or
`library/src/components/FeaturesGrid.tsx`.

## Required Correction

Read `READ_FIRST_AI.md`, `PREFLIGHT.md`, `registry/components.json`, and the
current spec for the intended component. Use `features-grid` only when its spec
allows the structure, then review the live specimen in `showcase/app`.
