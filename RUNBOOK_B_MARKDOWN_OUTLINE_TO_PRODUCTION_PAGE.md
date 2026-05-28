# Runbook B: Markdown Outline To Production Page

Use this runbook when an LLM must turn a human-approved Runbook A Markdown
layout outline into route-agnostic production page files for the Loyaltymaster
sendPUSH Next.js App Router website.

Runbook B starts only after a human approves a Runbook A outline. If the
outline is missing, unapproved, or fails schema checks, stop with
`OUTLINE_SCHEMA_FAILED`.

## Production Target

The current production target shape is the sendPUSH Next.js App Router
repository. Use it as a target contract, not as a source of design truth.

Target repository placeholder:

```text
{{TARGET_REPOSITORY}}
```

Required output file shapes:

```text
app/<route>/page.tsx
src/site-pages/<page-slug>/<PageName>Page.tsx
src/config/seoRoutes.json
src/next/SitePage.tsx
```

The generated package stops when these files are ready to import into
`{{TARGET_REPOSITORY}}` and validate there. Do not edit the production
repository unless the task explicitly authorizes direct edits there.

## Source Of Truth

Read these files at runtime:

1. `RUNBOOK_B_MARKDOWN_OUTLINE_TO_PRODUCTION_PAGE.md`
2. the human-approved Runbook A Markdown outline
3. `registry/components.json`
4. `tokens/design-tokens.json`
5. the selected template file recorded in the outline
6. every selected component's current `specPath`
7. every selected component's current `libraryPath`
8. `examples/README.md`
9. the closest relevant `examples/generated/` proof package
10. relevant `examples/blocked/*.md` drift examples

Do not use a copied component inventory. Do not use older examples as a source
of current component availability.

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

If `{{TARGET_REPOSITORY}}` does not have a way to import the current
design-system library components, stop with `PRODUCTION_IMPORT_FAILED` and
report the integration gap. Do not paste raw component implementations into
the page as a workaround.

## Next.js App Router Output Contract

Create or patch the route file:

```tsx
import { findSeoRoute } from "../../src/config/seoRoutes";
import { routeMetadata } from "../../src/next/metadata";
import { SitePage } from "../../src/next/SitePage";
import { StructuredData } from "../../src/next/StructuredData";

export const dynamic = "force-static";

const route = findSeoRoute("/<route>")!;
export const metadata = routeMetadata(route);

export default function Page() {
  return (
    <>
      <StructuredData route="/<route>" />
      <SitePage route="/<route>" />
    </>
  );
}
```

Adjust only the relative import depth required by the final `app/<route>/page.tsx`
location.

Create the page-body file under:

```text
src/site-pages/<page-slug>/<PageName>Page.tsx
```

The page-body file must:

- render body content only unless the outline explicitly approved a standalone
  shell
- import only approved design-system library components
- pass only validated props, slots, variants, CTAs, images, and content
- preserve the component order from the approved outline
- avoid route-specific visual overrides unless a spec explicitly allows them
- preserve accessibility labels, form labels, alt text, and CTA destinations
- avoid dead CTAs

Patch `src/config/seoRoutes.json` with the approved SEO fields from the
outline. Patch `src/next/SitePage.tsx` by adding the route union entry, page
import, and route render branch that wraps the page body in the existing
production shell.

## Output Package

Return a package with these sections:

```markdown
# Production Page Package: [Page Name]

Runbook Used: RUNBOOK_B_MARKDOWN_OUTLINE_TO_PRODUCTION_PAGE.md
Approved Outline: [path or identifier]
Target Repository: {{TARGET_REPOSITORY}}
Target Route: /<route>
Page Slug: <page-slug>
Page Component: <PageName>Page

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

## Files To Create Or Patch
- app/<route>/page.tsx
- src/site-pages/<page-slug>/<PageName>Page.tsx
- src/config/seoRoutes.json
- src/next/SitePage.tsx

## Production Page Code
[Provide file-by-file code or a patch plan, depending on task authorization.]

## Validation Commands For Target Repo
- cd {{TARGET_REPOSITORY}} && npm run typecheck
- cd {{TARGET_REPOSITORY}} && npm run build

## Diagnostic Report
- Input File:
- Runbook Used:
- Repo Commit SHA:
- Component Registry Checksum:
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
validate with typecheck/build.
```

## Failure Stages

Use one of these stages:

- `INPUT_INVALID`: the outline or target context is unreadable.
- `OUTLINE_SCHEMA_FAILED`: the outline does not match Runbook A output.
- `COMPONENT_NOT_APPROVED`: a component is absent or not stable in the registry.
- `PROP_INVALID`: a prop, slot, variant, CTA, image field, or content field is invalid.
- `TOKEN_INVALID`: token usage is not approved.
- `TEMPLATE_MISMATCH`: the outline no longer matches an approved template.
- `ROUTE_WIRING_FAILED`: route file, SEO route, or `SitePage` wiring is invalid.
- `SEO_METADATA_FAILED`: SEO fields are missing or invalid.
- `TYPESCRIPT_FAILED`: generated code fails typecheck.
- `BUILD_FAILED`: the target Next.js build fails.
- `VISUAL_FIDELITY_FAILED`: generated page does not match approved visual evidence.
- `PRODUCTION_IMPORT_FAILED`: the target repo cannot import the design-system library.

## Validation Gate

Runbook B is complete only when the package identifies every intended file,
uses only registry-approved components, includes a diagnostic report, and
states the target repo validation commands that must pass before production
import.
