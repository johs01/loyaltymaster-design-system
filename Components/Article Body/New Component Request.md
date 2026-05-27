# New Component Request - Article Body

Request Status: Approved.

## Source Template

This request is filled from `templates/new-component-request.md` because Phase 12 found that current approved components in `registry/components.json` are not enough for the listed Loyaltymaster.com conversion pages.

## Required Human Inputs

- Requested component name: Article Body
- Proposed registry ID: `article-body`
- Requesting artifact: Article, explainer page, company story page, or product narrative body.
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
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Cards are not readable long-form prose. |
| `feature-section-2-column-image` | `specs/components/feature-section-2-column-image.md` | `library/src/components/FeatureSection2ColumnImage.tsx` | One image-led section is not a full article body. |
| `comparison-table` | `specs/components/comparison-table.md` | `library/src/components/ComparisonTable.tsx` | Comparison structure is not narrative editorial content. |

## Required Spec And Library Evidence

| Required Field | Answer |
|---|---|
| What artifact needs this component? | Article, explainer page, company story page, or product narrative body. |
| Why no current approved component fits? | Long-form marketing, explainer, company story, and editorial body content that needs approved prose rhythm instead of improvised article CSS. Current approved components cover nearby sections or primitives but not this full content pattern. |
| Which existing components were considered and rejected? | `features-grid`, `feature-section-2-column-image`, `comparison-table` |
| Proposed use case | Long-form marketing, explainer, company story, and editorial body content that needs approved prose rhythm instead of improvised article CSS. |
| Proposed props | title, eyebrow, intro, rich-text sections, lists, quotes, links, optional inline CTA reference |
| Proposed states | static, link hover/focus |
| Accessibility needs | semantic article landmark, heading hierarchy, readable line length, accessible links |
| Token needs from `tokens/design-tokens.json` | typography, section spacing, text color, link/focus tokens |
| Screenshot or reference evidence | https://loyaltymaster.com/about-us/; screenshots/desktop.png; screenshots/mobile.png; screenshots/about-us-desktop.png; screenshots/about-us-mobile.png<br>https://loyaltymaster.com/what-is-electronic-rewards/; screenshots/desktop.png; screenshots/mobile.png; screenshots/what-is-electronic-rewards-desktop.png; screenshots/what-is-electronic-rewards-mobile.png |
| Composition rules | May sit between approved hero and CTA components; must not turn paragraphs into generic cards. |
| Risk of design drift if skipped | Agents will invent generic article CSS or misuse cards for prose-heavy pages. |

## Source URLs

- https://loyaltymaster.com/about-us/ - Company story prose with image-supported narrative body.
- https://loyaltymaster.com/what-is-electronic-rewards/ - Short explainer article body with plain prose needs.

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
2. Create `specs/components/article-body.md` with the required component-spec headings.
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
