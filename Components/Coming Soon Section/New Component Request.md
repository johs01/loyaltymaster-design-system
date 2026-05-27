# New Component Request - Coming Soon Section

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: Coming Soon Section
- Proposed registry ID: `coming-soon-section`
- Requesting artifact: Coming soon or maintenance body section/template.
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
| `hero-main-section` | `specs/components/hero-main-section.md` | `library/src/components/HeroMainSection.tsx` | Hero can approximate layout, but maintenance intent is not documented. |
| `cta-with-button-email` | `specs/components/cta-with-button-email.md` | `library/src/components/CtaWithButtonEmail.tsx` | CTA section does not explain maintenance state. |
| `button-email` | `specs/components/button-email.md` | `library/src/components/ButtonEmail.tsx` | Email primitive is insufficient as a page body. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | Coming soon or maintenance body section/template. |
| Why no current approved component fits? | Simple coming-soon or maintenance page body pattern when conversion scope includes such pages. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `hero-main-section`, `cta-with-button-email`, `button-email` |
| Proposed use case | Simple coming-soon or maintenance page body pattern when conversion scope includes such pages. |
| Proposed props | eyebrow, heading, message, optional launch date, optional email capture, optional CTA |
| Proposed states | static, optional email focus/submitting/success/error |
| Accessibility needs | single h1, clear status message, accessible optional form |
| Token needs from `tokens/design-tokens.json` | hero/body typography, section spacing, optional email CTA, focus tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/elementor-landing-page-143/; screenshots/desktop.png; screenshots/mobile.png; screenshots/elementor-landing-page-143-desktop.png; screenshots/elementor-landing-page-143-mobile.png |
| Composition rules | Approve as body-only maintenance section or explicitly exclude coming-soon pages. |
| Risk of design drift if skipped | Agents create one-off hero variants for maintenance pages. |

## Source URLs

- https://loyaltymaster.com/elementor-landing-page-143/ - Simple coming-soon page from Elementor landing entry.

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
2. Create `specs/components/coming-soon-section.md` with the required component-spec headings.
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
