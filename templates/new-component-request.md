# New Component Request

Approval Status: Approved

## Allowed Artifact Type

Use this request only when an approved Loyaltymaster artifact cannot be created
from the current component set in `registry/components.json`.

This file does not approve the new component. It only documents the need so the
component can be designed, built, registered, tested, and approved separately.

## Required Human Inputs

- Requested component name:
- Requesting artifact:
- Artifact type:
- Business reason:
- Approval authority:
- Deadline or dependency:

## Required Files To Read

- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `BRAND.md`
- `DESIGN_SYSTEM.md`
- `tokens/design-tokens.json`
- `registry/components.json`
- all likely substitute component `specPath` files
- all likely substitute component `libraryPath` files
- `examples/README.md`
- relevant `examples/approved/` files
- relevant `examples/blocked/` files

## Approved Component Recipe

Before requesting a component, prove that the current approved Lego set cannot
solve the need.

| Existing Registry ID Considered | `specPath` Read | `libraryPath` Reviewed | Why It Does Not Fit |
|---|---|---|---|
|  |  |  |  |

The request is invalid if existing components were not considered first.

## Required Spec And Library Evidence

Fill this request before any implementation work:

| Required Field | Answer |
|---|---|
| What artifact needs this component? |  |
| Why no current approved component fits? |  |
| Which existing components were considered and rejected? |  |
| Proposed use case |  |
| Proposed props |  |
| Proposed states |  |
| Accessibility needs |  |
| Token needs from `tokens/design-tokens.json` |  |
| Screenshot or reference evidence |  |
| Composition rules |  |
| Risk of design drift if skipped |  |

Do not invent components, variants, tokens, or interaction behavior in the
requesting artifact while this request is pending.

## Separate Approval Workflow

A requested component may be used only after a later component phase completes
all of these steps:

1. Add a new entry to `registry/components.json`.
2. Add or update `registry/components.schema.json` if the registry contract
   needs a new field.
3. Create `specs/components/<component-id>.md` with purpose, usage, props,
   states, accessibility rules, screenshot, token usage, composition rules,
   design rules, and AI usage contract.
4. Add screenshot or reference evidence in the canonical assets layer.
5. Add `library/src/components/<ComponentName>.tsx`.
6. Add a showcase specimen in `showcase/app`.
7. Add or update visual, interaction, and production-fidelity gates.
8. Run validation and typechecks.
9. Receive explicit approval from the approval authority.
10. Only then update templates to allow the new component.

## Blocked Example Rejection Checks

New component requests must explain how they avoid:

- `examples/blocked/generic-saas-card-grid.md`
- `examples/blocked/page-body-glassmorphism.md`
- `examples/blocked/invented-component-variant.md`
- `examples/blocked/raw-components-import.md`
- `examples/blocked/duplicate-global-chrome.md`
- `examples/blocked/unapproved-token-literal.md`

## Final Approval Checklist

- Existing components were considered first.
- Current `specPath` and `libraryPath` evidence was reviewed.
- The request explains why the approved component set is insufficient.
- Token needs are tied to `tokens/design-tokens.json`.
- The request does not approve implementation by itself.
- The separate build, gate, and approval workflow is acknowledged.

