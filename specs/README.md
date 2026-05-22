# Loyaltymaster Component Specs

This folder is the live human and AI-readable rule source for Wave 1
components.

The registry at `registry/components.json` is the machine-readable index. These
spec files are the editable component contracts. When a rule changes here, the
next page, document, or generated artifact must read the current spec before
using that component and apply the changed rule.

## Required Workflow

1. Read `READ_FIRST_AI.md`.
2. Read `PREFLIGHT.md`.
3. Search `registry/components.json` for approved component IDs.
4. Read the relevant `specs/components/<component-id>.md` file immediately
   before using that component.
5. Use only the approved tokens, states, props, and composition rules described
   in the spec.

## Authority

- `registry/components.json` answers which components exist and where their
  assets, snapshots, specs, and future library paths live.
- `specs/components/*.md` answers how a component may be used.
- `tokens/design-tokens.json` answers which design values may be used.
- `showcase/app/scripts/phase7f-production-targets.json` answers which live
  sendPUSH runtime target a component must match before production adoption.
- `/Components/` is raw snapshot reference only and must not be imported from.

## Global Prohibitions

- Do not import from `/Components/`.
- Do not invent visual variants without approval.
- Do not introduce unapproved colors, radii, shadows, spacing, motion, or type
  styles.
- Do not create generic SaaS card grids as filler.
- Do not use page-body glassmorphism. Glass is reserved for the approved
  navigation/mobile shell treatment.
- Do not duplicate nav, header, or footer inside generated page bodies unless
  explicitly requested.

## Editing Rules

When editing a component spec, update the rules directly in that component file
and keep the token references aligned with `registry/components.json`. If a
component needs new tokens or props, update the registry and validator in the
same phase so humans and AI receive one coherent contract.
