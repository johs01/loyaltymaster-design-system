# External LLM Hand-Off Pack

Use this document when handing the Loyaltymaster design system to Codex,
Claude, Gemini, ChatGPT, or another AI agent.

## Start Here

The first file to read is `AI_START_HERE.md`. Do not start from the production
app, a screenshot, or `/Components/`.

For draft page outlines, use `LLM_MARKDOWN_OUTLINE_PACK.md`. It is a no-code
Markdown outline mode for Codex, Claude, Gemini, ChatGPT, and similar agents.

## Required Workflow

1. Read `AI_START_HERE.md`, `READ_FIRST_AI.md`, and `PREFLIGHT.md`.
2. If the task is a page outline, read `LLM_MARKDOWN_OUTLINE_PACK.md` and
   return Markdown only.
3. Select the approved template in `templates/` that matches the artifact type.
4. Confirm shell scope. Normal web pages, landing pages, sales pages, and
   subdomain pages are body-only because production supplies global chrome.
5. Select only component IDs from `registry/components.json`.
6. Read each selected component's current `specPath`.
7. Import React implementations only through the current `libraryPath`.
8. Check `examples/generated/` for the closest proof package.
9. Check approved and blocked examples before writing code.
10. Render the output in `showcase/app` when a browser review URL exists.
11. Run validation and record human approval before treating the output as
    reusable.

## Protected Sources

Never edit, import from, or copy runtime code from:

- `/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION`
- `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/`
- `/Components/` when building runtime page code

`/Components/` is the approved component reference and visual handoff
inventory. The canonical implementation for current runtime imports is
`library/src/components/`.

## Generated Proof Packages

Use these packages as proof of how approved Markdown recipes become body-only
`.tsx` output:

- `examples/generated/web-page-body/`
- `examples/generated/landing-page-body/`
- `examples/generated/blog-document-body/`
- `examples/generated/brochure-content-body/`
- `examples/generated/external-llm-dry-run/`
- `examples/generated/real-brief-trial/`

The Phase 10 real-brief trial renders at:

- `http://127.0.0.1:5177/template-tests/real-brief-trial`

## Markdown Outline Mode

Use `LLM_MARKDOWN_OUTLINE_PACK.md` when the first deliverable should be a
reviewable Markdown page outline. In that mode, the LLM must not produce TSX,
JSX, HTML, CSS, JavaScript, React code, new components, or implementation
files. The human approves the outline before a separate TSX build stage begins.

## Stop Rule

If the brief needs a component, layout, state, interaction, token, or visual
treatment that is not already approved, stop and complete
`templates/new-component-request.md`. Do not improvise inside the generated
artifact.

## Required Validation

Run:

```bash
node scripts/validate-phase2.mjs
cd library && npm run typecheck
cd showcase/app && npm run typecheck
cd showcase/app && npm run verify:templates
cd showcase/app && npm run verify:showcase
```

Record the browser review result before reuse or publication.
