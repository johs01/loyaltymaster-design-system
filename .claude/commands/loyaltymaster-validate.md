# Loyaltymaster Validate

Use this command before claiming a Loyaltymaster design-system artifact is
ready.

## Required Inputs

- Artifact or branch summary: `$ARGUMENTS`

## Required Checks

Run from the design-system root:

```bash
node scripts/validate-runbook-poc-readiness.mjs
node scripts/validate-phase2.mjs
```

If the work touches the React library, also run:

```bash
cd library && npm run typecheck
```

If the work touches the showcase, also run:

```bash
cd showcase/app && npm run typecheck
cd showcase/app && npm run verify:showcase
```

If the work touches templates, runbooks, or rendered template fixtures, also
run:

```bash
cd showcase/app && npm run verify:templates
```

## Review Checklist

- `READ_FIRST_AI.md`, `PREFLIGHT.md`, and `LLM_MARKDOWN_OUTLINE_PACK.md` were
  checked where applicable.
- `RUNBOOK_A_PAGE_TO_MARKDOWN_OUTLINE.md` was used for page-to-outline work.
- `RUNBOOK_B_MARKDOWN_OUTLINE_TO_PRODUCTION_PAGE.md` was used for approved
  outline-to-page work.
- Relevant specs were read immediately before component use.
- Each selected component came from `registry/components.json` by `id`.
- Each selected component's `specPath`, `libraryPath`, `props`, `variants`,
  `slots`, `tokensUsed`, `visualReferencePath`, and `evidencePath` were
  checked.
- Imports use promoted registry/library components, not `/Components/` or raw
  MagicPath output.
- Tokens come from `tokens/design-tokens.json` and selected component specs.
- Approved examples were followed where applicable.
- Generated proof packages were checked where applicable.
- Blocked examples were checked for drift risks.
- The approved `templates/*.md` recipe was used for the artifact type.
- Normal production website pages are body-only and do not include
  navbar/header/footer.
- External LLM workflows started from `AI_START_HERE.md`.
- Markdown outline deliverables did not generate TSX, JSX, HTML, CSS,
  JavaScript, React code, route files, or implementation files during outline
  mode.
- Runbook B output matches the route-agnostic Next.js App Router target shape:
  `app/<route>/page.tsx`, `src/site-pages/<page-slug>/<PageName>Page.tsx`,
  `src/config/seoRoutes.json`, and `src/next/SitePage.tsx`.
- `showcase/app` was used for visual review when components or composition
  changed.
- The protected production replica was not edited unless explicitly approved.

## Output

Report the exact commands run, their results, any failures, and a 1-10 rating.
