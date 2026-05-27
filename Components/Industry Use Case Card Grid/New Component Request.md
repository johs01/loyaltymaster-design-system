# New Component Request - Industry Use Case Card Grid

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: Industry Use Case Card Grid
- Proposed registry ID: `industry-use-case-card-grid`
- Requesting artifact: Industry index or use-case landing body.
- Artifact type: Body-only Loyaltymaster page content
- Business reason: Enable conversion of existing Loyaltymaster.com pages without AI agents inventing unapproved layouts.
- Approval authority: Loyaltymaster design-system owner
- Deadline or dependency: Required before full Loyaltymaster.com conversion for pages using this pattern.

## Required Files To Read

- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `BRAND.md`
- `DESIGN_SYSTEM.md`
- `tokens/design-tokens.json`
- `registry/components.json`
- Existing substitute component specs listed below
- Existing substitute component library files listed below
- `examples/README.md`
- `examples/approved/`
- `examples/blocked/`
- `templates/new-component-request.md`

## Approved Component Recipe

Before this request can proceed, the current approved Lego set was checked and found insufficient.

| Existing Registry ID Considered | `specPath` Read | `libraryPath` Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Too generic and not image-led industry cards. |
| `image-grid` | `specs/components/image-grid.md` | `library/src/components/ImageGrid.tsx` | Partner/logo grid is not an industry use-case grid. |
| `geo-fence-use-case` | `specs/components/geo-fence-use-case.md` | `library/src/components/GeoFenceUseCase.tsx` | Single use-case panel is not a many-card index. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | Industry index or use-case landing body. |
| Why no current approved component fits? | Approved grid for industry/use-case cards such as the Ideal For page. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `features-grid`, `image-grid`, `geo-fence-use-case` |
| Proposed use case | Approved grid for industry/use-case cards such as the Ideal For page. |
| Proposed props | heading, intro, industry cards with image/title/description/link, optional CTA |
| Proposed states | card hover/focus/active, image hover, responsive wrapping |
| Accessibility needs | card links, image alt text, keyboard focus, grouped section heading |
| Token needs from `tokens/design-tokens.json` | card, image, grid gap, section spacing, hover shadow, focus tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/ideal-for/; screenshots/desktop.png; screenshots/mobile.png; screenshots/ideal-for-desktop.png; screenshots/ideal-for-mobile.png |
| Composition rules | May appear after approved hero; must not become a generic SaaS card grid. |
| Risk of design drift if skipped | Agents invent repeated image cards with inconsistent behavior. |

## Source URLs

- https://loyaltymaster.com/ideal-for/ - Large industry image-card collection with repeated business categories.

## Blocked Example Rejection Checks

- `examples/blocked/generic-saas-card-grid.md`
- `examples/blocked/page-body-glassmorphism.md`
- `examples/blocked/invented-component-variant.md`
- `examples/blocked/raw-components-import.md`
- `examples/blocked/duplicate-global-chrome.md`
- `examples/blocked/unapproved-token-literal.md`

## Separate Approval Workflow

This approved component record does not by itself update the clean registry or library implementation. Before direct code use from the design-system package, complete:

1. Add a new entry to `registry/components.json`.
2. Create `specs/components/industry-use-case-card-grid.md` with the required component-spec headings.
3. Add canonical screenshot/reference evidence.
4. Add `library/src/components/<ComponentName>.tsx`.
5. Add a showcase specimen.
6. Add visual, interaction, and production-fidelity gates.
7. Run validation and typechecks.
8. Receive explicit human approval.
9. Only then update templates to allow this component.

## Final Approval Checklist

- Existing components were considered first.
- Current `specPath` and `libraryPath` evidence was reviewed.
- The request explains why the approved component set is insufficient.
- Token needs are tied to `tokens/design-tokens.json`.
- Source URL evidence is captured in this folder.
- The approval record does not update registry or library implementation by itself.
- The separate build, gate, and approval workflow is acknowledged.
