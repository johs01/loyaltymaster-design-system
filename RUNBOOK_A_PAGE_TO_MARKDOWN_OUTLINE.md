# Runbook A: Page To Markdown Layout Outline

Use this runbook when an LLM must turn a page brief, screenshot, URL, source
page, or existing web page into a strict Loyaltymaster Markdown layout outline.

This runbook is outline mode only. Do not create TSX, JSX, HTML, CSS,
JavaScript, React code, components, route files, or implementation files.
Runbook B is the only approved next step after a human approves the outline.

## Source Of Truth

Read the design-system repo at runtime. Do not rely on memory, older examples,
or a copied component list.

Required read order (you arrive here from `llms.txt`; this file is the
canonical read list for outline work — no other doc's read order applies):

1. `BRAND.md`
2. `DESIGN_SYSTEM.md`
3. `tokens/design-tokens.json`
4. `registry/components.json`
5. `templates/README.md`
6. the approved `templates/*.md` file matching the artifact type
7. the production facts canon: `SOURCE-OF-TRUTH.md` in `{{TARGET_REPOSITORY}}`
   (the default target is named in `llms.txt`; skip only if the target is
   UNKNOWN and no canon is reachable — then every fact becomes
   `contentStillNeeded`)
8. `examples/README.md`
9. at least one relevant file in `examples/approved/` (when the selected
   template requires specific approved examples, the template's list wins)
10. every relevant drift pattern in `examples/blocked/`
11. each selected component's current `specPath`
12. each selected component's current `libraryPath`

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

Variant tie-break: when the brief does not call for a specific registered
variant, select the component's `default` variant. Never invent an
unregistered variant.

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

If the input is a URL, fetch it with the tools available and record the source
copy verbatim in the Content Fields. If the URL cannot be accessed, record that
as `INPUT_INVALID` unless the brief provides enough evidence to continue. If
the input is a screenshot, record screenshot-only uncertainties instead of
guessing hidden content.

## Content Authority

The LLM is the copywriter, within two hard limits:

- Voice: draft headings, body copy, and CTAs in the `BRAND.md` voice, sized to
  what each component's spec shows.
- Facts: every fact, number, price, plan name, offer, turnaround time, stat,
  contact detail, and legal claim must be copied from the production facts
  canon (`SOURCE-OF-TRUTH.md` in `{{TARGET_REPOSITORY}}`) — never restated
  from memory, never invented. That includes testimonials and social proof:
  if the canon or the brief does not supply one, the page does not get one.

A fact the canon cannot confirm goes into `contentStillNeeded` for that
section. Runbook B refuses to build (`CONTENT_MISSING`) until a human resolves
every `contentStillNeeded` entry, so record them honestly rather than papering
over gaps. Source copy migrated from an input URL or screenshot keeps its
facts intact and may only be reworded into the `BRAND.md` voice.

## Template Selection

Select one approved template from `templates/` that matches the artifact type.
Read the template before choosing components.

If no template fits, stop with `TEMPLATE_MISMATCH` and complete
`templates/new-component-request.md` or ask for human direction. Do not create
a new template during Runbook A.

## Shell Scope

Normal Loyaltymaster pages are body-only. The production website supplies
global navigation, header, and footer.

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

`/Components/` may still be used as evidence: screenshots, source review, and
visual comparison. The runtime implementation always comes from the registry
`libraryPath` under `library/src/components/`.

## Required Markdown Output

Return exactly one Markdown outline with these headings. Keep it human readable,
but keep every field explicit enough for machine validation. Write the outline
to `outlines/<page-slug>.md` in this repo; that path is what Runbook B receives.

Human approval is recorded in the outline itself: the human fills
`Approved-By:` and `Approval-Date:` and flips `Ready for Runbook B:` to `Yes`.
Until then those fields stay `PENDING` / `No`.

```markdown
# Markdown Layout Outline: [Page Name]

Design System Version: registry/components.json@[the registry file's top-level "version" value]
Runbook Used: RUNBOOK_A_PAGE_TO_MARKDOWN_OUTLINE.md
Input Source: [brief, screenshot, URL, source page, or mixed]
Target Repository: {{TARGET_REPOSITORY}}
Target Route: [route path or UNKNOWN]
Approved-By: PENDING
Approval-Date: PENDING

<!-- {{TARGET_REPOSITORY}} is filled from the task brief. If the brief names
none, use the default production target from llms.txt. Only when that default
is unavailable too: keep the placeholder, record the target as UNKNOWN in the
diagnostic section, and continue route-agnostically. -->

## Page Purpose
[One concise paragraph.]

## Target Audience
[Who this page is for.]

## Conversion Goal
[Primary user action.]

## SEO Fields
<!-- title: SERP title WITHOUT the brand suffix (the site template appends it),
     keep the page's head term, roughly 45-60 characters.
     description: 140-160 characters, ends on a complete sentence.
     ogImage: the page's own hero photo per "Share Cards (Open Graph)" in
     DESIGN_SYSTEM.md section 6; pages without a hero fall back to the
     homepage card. robots/sitemap default to index + included unless the
     brief says otherwise. schemaTypes: WebPage plus types the facts canon
     supports; invent nothing. -->
- title:
- description:
- canonicalPath:
- h1:
- robots:
- sitemap:
- breadcrumbs:
- schemaTypes:
- ogImage:

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

## Acceptance Gate

Runbook A is complete only when the output is a Markdown outline, every selected
component is registry-backed, every selected component spec has been read, and
the final readiness section says whether the outline is ready for Runbook B.
