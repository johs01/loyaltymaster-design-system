# Loyaltymaster Examples

This folder contains training examples for humans and AI agents using the
Loyaltymaster design system.

## Folders

- `approved/`: examples that follow `READ_FIRST_AI.md`, `PREFLIGHT.md`,
  `registry/components.json`, current component specs, canonical library paths,
  and the Phase 5 showcase review workflow.
- `blocked/`: examples that must be rejected before implementation because
  they break a documented rule.
- `generated/`: complete recipe-to-output packages that show how an approved
  `.md` template becomes body-only `.tsx` content from approved library
  components. Current packages cover landing page, web page, blog/document, and
  brochure-content workflows.
  Use `examples/generated/landing-page-body/`,
  `examples/generated/web-page-body/`,
  `examples/generated/blog-document-body/`, and
  `examples/generated/brochure-content-body/` as proof packages.
  Use `examples/generated/external-llm-dry-run/` to review the complete
  start-here-to-body-output workflow. Use
  `examples/generated/real-brief-trial/` to review the Phase 10 practical
  real-brief workflow.

## How To Use

Before creating a new Loyaltymaster artifact:

1. Read `AI_START_HERE.md`, `READ_FIRST_AI.md`, and `PREFLIGHT.md`.
2. Select approved components from `registry/components.json`.
3. Read each selected component's current `specPath`.
4. Import React implementations only from each selected `libraryPath`.
5. Review the matching live specimen in `showcase/app`.
6. Compare the plan against one approved example and the relevant blocked
   examples.
7. When available, compare against the matching generated proof package in
   `examples/generated/`.

For blog/document work, do not invent a long-form article layout. If prose
blocks, pull quotes, callouts, or document tables are needed, follow
`examples/generated/blog-document-body/new-component-request.md` and
`templates/new-component-request.md`.

The Phase 9 dry run is rendered at
`http://127.0.0.1:5177/template-tests/external-llm-dry-run`.

The Phase 10 real-brief trial is rendered at
`http://127.0.0.1:5177/template-tests/real-brief-trial`.

If a rule changes in a component spec, the next artifact must follow the
changed rule even when an older example shows a previous usage.

## Runbook POC Fixtures

- examples/runbook-poc/ contains validation fixtures and diagnostic reports for the future Runbook A/B workflow. These are readiness tests, not final runbooks.
