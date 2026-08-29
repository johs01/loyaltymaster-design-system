# Runbook B: Markdown Outline To Production Page

Use this runbook when an LLM must turn a human-approved Runbook A Markdown
layout outline into production page files for the Loyaltymaster Next.js App
Router website.

Runbook B starts only after a human approves a Runbook A outline. Approval is
recorded in the outline itself: the `Approved-By:` / `Approval-Date:` lines
are filled and `Ready for Runbook B:` is `Yes`. If the outline is missing,
lacks that approval record, or fails schema checks, stop with
`OUTLINE_SCHEMA_FAILED`.

## Production Target

Target repository placeholder:

```text
{{TARGET_REPOSITORY}}
```

`{{TARGET_REPOSITORY}}` is filled from the task brief or the approved outline.
The default production target is the Loyaltymaster production repo:

- Local path: `/Users/johs777/LOYALTYMASTER/Loyaltymaster Clone Codex`
- GitHub: `https://github.com/johs01/Loyaltymaster` (deployed to
  loyaltymaster.com via Vercel)

That repo re-implements the approved design system natively (its rollout was
approved page-by-page in July 2026). A new page there is a typed content model
plus registrations — not a freestanding component composition. Required
output file shapes in the production repo:

```text
src/content/<page-slug>.ts
src/content/index.ts
src/data/loyaltymaster-pages.ts
src/lib/seo-meta.ts
src/lib/og-photos.ts
```

Optionally, for a bespoke composition only: `src/components/<PageName>Page.tsx`
plus its render branch in `src/app/(public)/[slug]/page.tsx`.

If the brief names a different target, or no target at all, produce the
route-agnostic package (Mode 2 below) and record the target as UNKNOWN in the
diagnostic report. Do not edit the production repository unless the task
explicitly authorizes direct edits there; otherwise stop when the files are
ready to import into `{{TARGET_REPOSITORY}}` and validate there.

## Source Of Truth

Read these files at runtime:

1. `RUNBOOK_B_MARKDOWN_OUTLINE_TO_PRODUCTION_PAGE.md`
2. the human-approved Runbook A Markdown outline
3. `registry/components.json`
4. `tokens/design-tokens.json`
5. the selected template file recorded in the outline
6. every selected component's current `specPath`
7. every selected component's current `libraryPath`
8. the production facts canon: `SOURCE-OF-TRUTH.md` in `{{TARGET_REPOSITORY}}`
9. for Mode 1: `src/types/content.ts` and one existing `src/content/*.ts`
   model in `{{TARGET_REPOSITORY}}` as the shape reference
10. `examples/README.md`
11. the closest relevant `examples/generated/` proof package
12. relevant `examples/blocked/*.md` drift examples

Do not use a copied component inventory. Do not use older examples as a source
of current component availability.

## Content Verification

Every fact in the outline — prices, plan names, offer story, turnaround
times, stats, contact details, legal claims — must be verified against the
facts canon (`SOURCE-OF-TRUTH.md` in the target repo) before it enters page
code. Copy verified facts exactly; never restate them from memory.

If the outline carries unresolved `contentStillNeeded` entries, or a stated
fact cannot be verified in the canon, stop with `CONTENT_MISSING` and list
each unresolved item in the diagnostic report. Never fill the gap with
invented copy, stats, testimonials, or offers.

## Registry Validation

For every selected component ID from the outline, load the matching component
from `registry/components.json` and validate these fields:

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

Rules:

- `status` must be `stable`.
- The selected `variant` must exist in `variants`.
- Every selected slot must exist in `slots`.
- Every selected prop must be allowed by `props` and the current spec.
- Every token must come from `tokensUsed`, the selected spec, or
  `tokens/design-tokens.json`.
- The selected use must not contradict `whenToUse` or `whenNotToUse`.

If any check fails, stop before writing page code and produce a diagnostic
report with the correct failure stage.

If the approved outline requires a component, prop, variant, slot, token, or
interaction that is not approved in the current registry, stop and point to
`templates/new-component-request.md`. Do not patch the page with an improvised
substitute.

## Component Import Rule

Runbook B uses promoted registry/library components only.

Allowed evidence:

- `registry/components.json`
- selected component `specPath`
- selected component `libraryPath`
- showcase visual references
- approved examples and generated proof packages

Forbidden runtime sources:

- raw MagicPath output
- `/Components/` handoff code
- copied code from `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/`
- copied code from `/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION`

MagicPath is upstream for designing new or changed components after human
approval. It is not proof that a production page may import or copy a component.

`/Components/` may still be used as evidence: screenshots, source review, and
visual comparison. In Mode 2, the runtime implementation always comes from the
registry `libraryPath` under `library/src/components/`. In Mode 1, the
production repo's own approved compositions render the content model; those
compositions were ported from this design system and the registry specs remain
the visual contract they must match.

If the target repo can neither render the outline through an existing approved
composition nor import the current design-system library components, stop with
`PRODUCTION_IMPORT_FAILED` and report the integration gap. Do not paste raw
component implementations into the page as a workaround.

## Output Contract

### Mode 1 — Loyaltymaster production repo (default)

Create the content model:

```text
src/content/<page-slug>.ts
```

- Export one typed object (`ProductPageContent` for product/landing pages,
  `ArticleContent` for article pages — exact types come from
  `src/types/content.ts` in the target repo).
- Section order and copy come from the approved outline; facts are verified
  per Content Verification above.
- Follow the shape of an existing content model file, including its
  comment style citing the canon facts used.

Register the page (four patches):

1. `src/content/index.ts` — import the model and add it to the matching
   registry record (product, article, or custom).
2. `src/data/loyaltymaster-pages.ts` — add the sub-page entry (slug, title,
   sourceUrl, pageType, headings, buttons, imageCount, excerpt); this drives
   `generateStaticParams` and the sitemap.
3. `src/lib/seo-meta.ts` — add the authored SERP title (without the brand
   suffix) and a 140–160 character meta description from the outline's SEO
   fields.
4. `src/lib/og-photos.ts` — when the outline sets `ogImage`, register the
   slug and hero path so the share card carries the page's own photo (the
   card contract is "Share Cards (Open Graph)" in `DESIGN_SYSTEM.md` §6);
   pages without a hero fall back to the homepage card automatically.

The generic `ProductPage` / `ArticlePage` composition renders the model —
no new component file is needed. Only when the approved outline explicitly
calls for a bespoke composition, add `src/components/<PageName>Page.tsx`
(PascalCase of the page slug) and its slug-matched render branch in
`src/app/(public)/[slug]/page.tsx`, composing only patterns that already
exist in the production repo's approved design-system components.

### Mode 2 — route-agnostic package (unknown or non-Loyaltymaster target)

Emit a body-only TSX composition that imports only from registry
`libraryPath` values, plus the same content model data as a Markdown table,
and list the intended integration points for the eventual target. Follow the
`examples/generated/` proof-package shape. A client-boundary note: when the
composition includes any `clientBoundary: "client"` component, the importing
file needs no `'use client'` of its own — the boundary lives inside the
library component.

In both modes the page must:

- render body content only unless the outline explicitly approved a
  standalone shell
- pass only validated props, slots, variants, CTAs, images, and content
- preserve the component order from the approved outline
- avoid route-specific visual overrides unless a spec explicitly allows them
- preserve accessibility labels, form labels, alt text, and CTA destinations
- avoid dead CTAs

## Output Package

Return a package with these sections:

```markdown
# Production Page Package: [Page Name]

Runbook Used: RUNBOOK_B_MARKDOWN_OUTLINE_TO_PRODUCTION_PAGE.md
Approved Outline: [path, normally outlines/<page-slug>.md]
Target Repository: {{TARGET_REPOSITORY}}
Output Mode: [Mode 1 production repo | Mode 2 route-agnostic]
Target Route: /<page-slug>/
Page Slug: <page-slug>

## Registry Validation
- Registry source:
- Registry version:
- Selected component IDs:
- Specs read:
- Library paths checked:
- Props validated:
- Variants validated:
- Slots validated:
- Tokens validated:

## Content Verification
- Facts canon read: [path]
- Facts verified: [list]
- Unresolved contentStillNeeded items: [none, or stop with CONTENT_MISSING]

## Files To Create Or Patch
- src/content/<page-slug>.ts
- src/content/index.ts
- src/data/loyaltymaster-pages.ts
- src/lib/seo-meta.ts
- src/lib/og-photos.ts
- [Mode 2: <PageName>BodyExample.tsx and intended integration points instead]

## Production Page Code
[Provide file-by-file code, or a patch plan when the task does not authorize
direct edits to the target repo.]

## Validation Commands For Target Repo
- cd {{TARGET_REPOSITORY}} && npm run check
- cd {{TARGET_REPOSITORY}} && npx vitest run

## Diagnostic Report
- Input File:
- Runbook Used:
- Repo Commit SHA: [design-system repo commit at generation time]
- Component Registry Checksum: [shasum -a 256 registry/components.json]
- Selected Template:
- Selected Components:
- Rejected Components and Why:
- Missing Component Requests:
- Generated Files or Intended File Paths:
- Validation Commands Run:
- Pass/Fail Status:
- Failure Stage:
- Exact Failure Reason:
- Recommended Next Fix:

## Stop Condition
Patch plan stops when files are ready to import into {{TARGET_REPOSITORY}} and
validate with the target repo's check and test commands.
```

## Failure Stages

Use one of these stages:

- `INPUT_INVALID`: the outline or target context is unreadable.
- `OUTLINE_SCHEMA_FAILED`: the outline does not match Runbook A output or
  lacks the human-approval record.
- `COMPONENT_NOT_APPROVED`: a component is absent or not stable in the registry.
- `PROP_INVALID`: a prop, slot, variant, CTA, image field, or content field is invalid.
- `TOKEN_INVALID`: token usage is not approved.
- `TEMPLATE_MISMATCH`: the outline no longer matches an approved template.
- `CONTENT_MISSING`: a fact cannot be verified in the facts canon, or the
  outline carries unresolved `contentStillNeeded` entries.
- `ROUTE_WIRING_FAILED`: content-model registration, slug wiring, or render
  branch is invalid.
- `SEO_METADATA_FAILED`: SEO fields are missing or invalid.
- `TYPESCRIPT_FAILED`: generated code fails typecheck.
- `BUILD_FAILED`: the target Next.js build fails.
- `VISUAL_FIDELITY_FAILED`: generated page does not match approved visual evidence.
- `PRODUCTION_IMPORT_FAILED`: the target repo can neither render the outline
  through an approved composition nor import the design-system library.

## Validation Gate

Runbook B is complete only when the package identifies every intended file,
uses only registry-approved components, verifies every fact against the facts
canon, includes a diagnostic report, and states the target repo validation
commands that must pass before production import.
