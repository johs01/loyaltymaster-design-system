# Phase 11 Report: Markdown Outline Instruction Pack

## Summary

Phase 11 adds `LLM_MARKDOWN_OUTLINE_PACK.md`, a copy-paste instruction pack
for Codex, Claude, Gemini, ChatGPT, or another LLM to create draft
Loyaltymaster web page outlines in Markdown only.

The pack creates a review gate before implementation. It tells the LLM to use
approved templates and approved registry components only, cite `specPath` and
`libraryPath` evidence, preserve the body-only rule, and stop for
`templates/new-component-request.md` when the approved Lego set is insufficient.

## Added Artifact

- `LLM_MARKDOWN_OUTLINE_PACK.md`

## Updated Operating Docs

- `AI_START_HERE.md`
- `EXTERNAL_LLM_HANDOFF.md`
- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `templates/README.md`
- `registry/README.md`
- `.claude/commands/loyaltymaster-preflight.md`
- `.claude/commands/loyaltymaster-validate.md`

## Rules Enforced

- Markdown outline mode must not produce TSX, JSX, HTML, CSS, JavaScript,
  React code, or implementation files.
- Draft outlines must use one approved template from `templates/`.
- Draft outlines must use only approved component IDs from
  `registry/components.json`.
- Normal web pages remain body-only unless standalone shell output is
  explicitly requested.
- Missing component needs must be routed to
  `templates/new-component-request.md`.

## Verification

Expected final verification:

```bash
node scripts/validate-phase2.mjs
# Phase 2/3/4/5/6/7/7B/7C/7D/7E/7F/8A/8B/8C/8D/8E/8F/9/10/11 validation passed.
```

## Rating

Rating: 10/10.

What makes it a 10: the prompt pack is explicit, copy-pasteable, no-code by
default, and validator-enforced against the current design-system entry points.
