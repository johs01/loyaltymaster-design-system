# Runbook A: Page To Markdown Layout Outline

Use this runbook when an LLM must turn a page brief, screenshot, URL, source
page, or existing web page into a strict Loyaltymaster Markdown layout outline.

This runbook is outline mode only. Do not create TSX, JSX, HTML, CSS,
JavaScript, React code, components, route files, or implementation files.
Runbook B is the only approved next step after a human approves the outline.

## Source Of Truth

Read the design-system repo at runtime. Do not rely on memory, older examples,
or a copied component list.

Required read order:

1. `AI_START_HERE.md`
2. `EXTERNAL_LLM_HANDOFF.md`
3. `RUNBOOK_A_PAGE_TO_MARKDOWN_OUTLINE.md`
4. `README.md`
5. `BRAND.md`
6. `DESIGN_SYSTEM.md`
7. `tokens/design-tokens.json`
8. `registry/components.json`
9. `templates/README.md`
10. the approved `templates/*.md` file matching the artifact type
11. `examples/README.md`
12. at least one relevant file in `examples/approved/`
13. every relevant drift pattern in `examples/blocked/`
14. each selected component's current `specPath`
15. each selected component's current `libraryPath`

If a referenced file is missing or unreadable, stop with `INPUT_INVALID`.

## Registry-Driven Component Selection

Build the available component inventory from `registry/components.json` during
the run. Do not paste or maintain a manual component list in the outline.

For each candidate component, inspect these current registry fields before
selection:

- `id`
- `name`
- `status`
- `clientBoundary`
- `description`
- `whenToUse`
- `whenNotToUse`
- `specPath`
- `libraryPath`
- `props`
- `variants`
- `slots`
- `tokensUsed`
- `visualReferencePath`
- `evidencePath`
- `markdownCallSyntax`

Only components with `status: "stable"` may be selected. A selected component
is invalid until its current `specPath` has been read. Use `whenToUse` and
`whenNotToUse` as hard constraints, not suggestions.

Use `tokensUsed` only as evidence for approved token usage. Do not invent token
names, CSS variables, color values, radii, shadows, typography, spacing,
breakpoints, animation, component variants, or layout rules.

## Page Analysis

Analyze the input before selecting components:

- Page purpose
- Target audience
- Conversion goal
- Required source copy
- Required media or image fields
- Required forms or CTAs
- Legal, pricing, or compliance constraints
- SEO title, description, canonical path, and intended H1
- Section order and hierarchy
- Responsive needs
- Missing or unverifiable inputs

If the input is a URL and the URL cannot be accessed, record that as
`INPUT_INVALID` unless the brief provides enough evidence to continue. If the
input is a screenshot, record screenshot-only uncertainties instead of guessing
hidden content.

## Template Selection

Select one approved template from `templates/` that matches the artifact type.
Read the template before choosing components.

If no template fits, stop with `TEMPLATE_MISMATCH` and complete
`templates/new-component-request.md` or ask for human direction. Do not create
a new template during Runbook A.

## Shell Scope

Normal Loyaltymaster or sendPUSH pages are body-only. The production website
supplies global navigation, header, and footer.

Do not include shell components in a normal page body. Shell components may be
used only when the brief explicitly requests a standalone artifact with its
own global shell. If shell scope is unclear, default to body-only and list the
ambiguity in the diagnostic section before Runbook B.

## Missing Component Stop Rule

If the registry cannot express a needed section, layout, state, interaction,
visual treatment, field type, or responsive behavior, stop. Fill the Missing
Component Check section and point to `templates/new-component-request.md`.

MagicPath may be used upstream to create or revise a component only after human
approval. Runbook A never treats raw MagicPath output, `/Components/` handoff
code, or visual similarity as an approved runtime component.

## Required Markdown Output

Return exactly one Markdown outline with these headings. Keep it human readable,
but keep every field explicit enough for machine validation.

```markdown
# Markdown Layout Outline: [Page Name]

Design System Version: registry/components.json@[version or commit SHA]
Runbook Used: RUNBOOK_A_PAGE_TO_MARKDOWN_OUTLINE.md
Input Source: [brief, screenshot, URL, source page, or mixed]
Target Repository: {{TARGET_REPOSITORY}}
Target Route: [route path or UNKNOWN]

## Page Purpose
[One concise paragraph.]

## Target Audience
[Who this page is for.]

## Conversion Goal
[Primary user action.]

## SEO Fields
- title:
- description:
- canonicalPath:
- h1:
- robots:
- sitemap:
- breadcrumbs:
- schemaTypes:

## Selected Approved Template
- Template file:
- Artifact type:
- Why this template fits:

## Body-Only Shell Scope
- Shell scope: Body-only / Standalone shell explicitly requested
- Navbar/header/footer decision:
- Reason:

## Section Order
List the intended section order in plain language.

## Component Sequence Using Approved Registry IDs
| Order | component | variant | sectionPurpose | registryEvidence | specPath |
|---|---|---|---|---|---|
| 1 |  |  |  | registry/components.json |  |

## Component Names
List only the selected component IDs from the current registry.

## Component Variants
| component | variant | variantEvidence |
|---|---|---|
|  |  |  |

## Component Props
For each selected component:
- component:
- propSource: registry/components.json props plus current specPath
- requiredProps:
- optionalProps:
- invalidPropsRejected:

## Content Fields
For each selected section:
- component:
- heading:
- eyebrow:
- body:
- bulletsOrItems:
- formFields:
- proofPoints:
- legalOrComplianceCopy:
- contentStillNeeded:

## Image Fields
For each selected section:
- component:
- imageProp:
- imageSource:
- altText:
- placeholderAllowed:
- productionAssetNeeded:

## CTA Fields
For each selected CTA:
- component:
- label:
- href:
- actionType:
- destinationEvidence:
- nonActionableCtaRejected:

## Layout Notes
- Template layout rule:
- Component composition notes:
- Explicit rules not to break:

## Responsive Rules
- Use component responsive behavior from current specs and library.
- Route-specific breakpoint overrides: None unless explicitly allowed by spec.
- Mobile notes:
- Desktop notes:

## Component Evidence Table
| component | specPath Read | libraryPath Checked | tokensUsed Checked | visualReferencePath | evidencePath |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

## Approved Examples Checked
- Example path:
- Reused pattern:

## Blocked Examples Checked
- Blocked example path:
- Drift risk rejected:

## Missing Component Check
- Can the page be created from approved components only? Yes/No
- If No, missing need:
- Existing components considered and rejected:
- New component request required: Yes/No
- Reference: templates/new-component-request.md

## QA Checklist
- [ ] Output is Markdown only.
- [ ] One approved template is selected.
- [ ] Every section maps to a stable registry component ID.
- [ ] Every selected component has current `specPath` evidence.
- [ ] Every selected component has current `libraryPath` evidence.
- [ ] Every selected prop is allowed by registry/spec evidence.
- [ ] Every selected variant is allowed by registry/spec evidence.
- [ ] Every selected token comes from registry/spec/token evidence.
- [ ] Output is body-only unless standalone shell was explicitly requested.
- [ ] No component, section, variant, token, state, or interaction was invented.
- [ ] No runtime code was copied from `/Components/`, MagicPath output, or the production repo.
- [ ] Missing component needs were escalated instead of improvised.

## Diagnostic Report
- Pass/Fail Status:
- Failure Stage:
- Exact Failure Reason:
- Recommended Next Fix:

## Ready For TSX Build
Ready for TSX build: Yes/No
Ready for Runbook B: Yes/No
Reason:
```

## Failure Stages

Use one of these stages when the outline cannot proceed:

- `INPUT_INVALID`: required input or source evidence is missing.
- `OUTLINE_SCHEMA_FAILED`: the Markdown outline structure is incomplete.
- `COMPONENT_NOT_APPROVED`: a selected component is not stable in the registry.
- `PROP_INVALID`: a selected prop is not allowed by registry/spec evidence.
- `TOKEN_INVALID`: an unapproved token or raw value is required.
- `TEMPLATE_MISMATCH`: no approved template fits the artifact.
- `VISUAL_FIDELITY_FAILED`: visual evidence conflicts with approved specs.

## Acceptance Gate

Runbook A is complete only when the output is a Markdown outline, every selected
component is registry-backed, every selected component spec has been read, and
the final readiness section says whether the outline is ready for Runbook B.
