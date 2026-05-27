# Loyaltymaster Component Registry

This folder contains the machine-readable component manifest.

## Files

- `components.json`: canonical Wave 1 component registry, including each
  component's `specPath`.
- `components.schema.json`: JSON Schema for the registry shape.

## Status

The 20 registered components are approved Wave 1 components with clean Phase 4
React implementations. `libraryPath` points to the canonical implementation in
`/library/src/components/`, while `rawSourcePath` points to the preserved
snapshot used as visual/reference input only.

Phase 3 adds `specPath` for every component. The spec file is the editable
human and AI-readable rule source for usage, states, accessibility, screenshots,
tokens, and composition.

Phase 5 adds `showcase/app` as the rendered visual review layer. Each registry
component must have a matching showcase specimen id and rendered smoke artifact.

Phase 6 adds `examples/approved/` and `examples/blocked/` as the AI training
example layer. Approved examples must cite registry ids, current specs, and
library paths. Blocked examples define drift patterns to reject before writing
code.

Phase 7C is the current visual fidelity gate for all 20 Wave 1 components. The
showcase app stores the resolved classification and strict font/runtime
thresholds in `showcase/app/scripts/phase7-visual-gates.json`, and
`npm run verify:visual` captures render targets plus diff artifacts under
`showcase/app/artifacts/phase-7c/`. Skipped visual gates, pixel drift, font
fallback, runtime drift, and width/height/aspect-ratio drift are no longer
accepted.

Phase 7E is the current interaction gate for all 20 Wave 1 components.
`npm run verify:interactions` in `showcase/app` compares local library behavior
against the live template page, raw snapshots, and specs, and fails on any
failed, partial, missing, or undecided component.

Phase 7F is the current production-fidelity gate for all 20 Wave 1 components.
`showcase/app/scripts/phase7f-production-targets.json` maps each component to
the live sendPUSH URL, live selector, production source file, raw snapshot,
spec, library path, and local showcase specimen. `npm run
verify:production-fidelity` in `showcase/app` captures desktop and mobile
live/local pairs, writes side-by-side artifacts under
`showcase/app/artifacts/phase-7f/`, and fails on major geometry, layout, or
visual drift.

Phase 8 adds `templates/` as the approved AI recipe layer. Templates do not
replace the registry; they compose registry component IDs into allowed page,
landing page, document, brochure, and checklist workflows. A template may not
use a component that is missing from this registry.

Phase 8C adds the body-only web page rule. `navbar-glassmorphism` and `footer`
remain approved registry components, but they are shell-only exceptions for
standalone artifacts or design-system review surfaces. Normal new web pages,
landing pages, sales pages, and subdomain pages must use body components only
because the production website already provides global chrome.

Phase 8B adds rendered template proof in `showcase/app/src/templateFixtures.tsx`.
The web-page and landing-page recipes render at `/template-tests/web-page` and
`/template-tests/landing-page`, with component evidence pulled from this
registry. `npm run verify:templates` captures browser artifacts under
`showcase/app/artifacts/phase-8b/`.

Phase 8D adds `AI_START_HERE.md` as the external LLM entry point and
`examples/generated/landing-page-body/` as the first complete generated
example package. Generated examples must cite registry IDs, `specPath`,
`libraryPath`, token evidence, and final checklist status.

Phase 8E extends generated proof coverage to `examples/generated/web-page-body/`,
`examples/generated/blog-document-body/`, and
`examples/generated/brochure-content-body/`. The rendered template gate now
covers `/template-tests/web-page`, `/template-tests/landing-page`,
`/template-tests/blog-document`, and `/template-tests/brochure-content`.
The blog/document package records a new-component request for future
article-body/content-block needs instead of permitting improvised prose layout.

Phase 9 adds `examples/generated/external-llm-dry-run/` and
`http://127.0.0.1:5177/template-tests/external-llm-dry-run` to prove the full external-LLM workflow:
start at `AI_START_HERE.md`, select approved registry IDs, cite current
`specPath` and `libraryPath` evidence, and render body-only `.tsx` output.

Phase 10 adds `EXTERNAL_LLM_HANDOFF.md`,
`examples/generated/real-brief-trial/`, and
`http://127.0.0.1:5177/template-tests/real-brief-trial` to prove the same
workflow against a practical Loyaltymaster/sendPUSH page brief.

Phase 11 adds `LLM_MARKDOWN_OUTLINE_PACK.md` as the no-code Markdown outline
instruction pack. Use it when an external LLM should draft page structure from
approved templates and registry components before any TSX build.

## Rules

- AI tools must request components by `id` or `name` from `components.json`.
- Do not import runtime page code from `/Components/`; it is approved reference
  and visual handoff inventory.
- Import implementation code from the current `libraryPath`.
- Use `showcase/app` to review live renders beside approved screenshots.
- Check the Phase 7C visual classification before claiming a component is
  pixel-diff approved; every Wave 1 component must be gated.
- Check the Phase 7E interaction gate before claiming hover/focus/active/open
  behavior is production-ready; every Wave 1 component must pass.
- Check the Phase 7F production-fidelity gate before claiming a component is
  ready for production adoption; every Wave 1 component must pass desktop and
  mobile live-runtime comparison.
- Use `clientBoundary` to preserve the React server/client boundary.
- Use `tokensUsed` to keep generated pages tied to the approved token system.
- Read `specPath` immediately before using a component. If a spec rule changes,
  the next generated artifact must use the changed rule.
- Compare planned compositions against the Phase 6 approved and blocked
  examples before implementation.
- Start future AI-created artifacts from the approved templates in `templates/`.
- External LLMs must start from `AI_START_HERE.md` and use generated examples
  as proof packages, not new component sources.
- For external hand-offs, also read `EXTERNAL_LLM_HANDOFF.md` and compare
  normal web-page work against `examples/generated/real-brief-trial/`.
- For Markdown page outlines, use `LLM_MARKDOWN_OUTLINE_PACK.md` and do not
  generate implementation code until a human approves the outline.
- Treat `navbar-glassmorphism` and `footer` as shell-only exceptions, not
  default page-body ingredients.
- If an approved template cannot satisfy the brief from current registry
  components, use `templates/new-component-request.md`; do not improvise a new
  component inside the artifact.

## Validation

Run:

```bash
node scripts/validate-phase2.mjs
```

For rendered visual evidence, also run:

```bash
cd showcase/app && npm run verify:visual
```

For interaction evidence, also run:

```bash
cd showcase/app && npm run verify:interactions
```

For live production-fidelity evidence, also run:

```bash
cd showcase/app && npm run verify:production-fidelity
```

For rendered template evidence, also run:

```bash
cd showcase/app && npm run verify:templates
```
