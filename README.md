# Loyaltymaster Design System

Private team knowledge base for the Loyaltymaster design system.

This repository exists so team members and their LLM tools can read the same
canonical source material before creating Loyaltymaster pages, outlines,
components, or design-system updates.

## Start Here

`llms.txt` is the single canonical entry point for humans and LLMs. It states
the Key Rule, routes by task to the right runbook, and lists which folders are
noise. Task routing in short:

1. `llms.txt` — read first, always.
2. `RUNBOOK_A_PAGE_TO_MARKDOWN_OUTLINE.md` for page-to-outline work.
3. `RUNBOOK_B_MARKDOWN_OUTLINE_TO_PRODUCTION_PAGE.md` for approved outline-to-page work.

Supporting docs (`AI_START_HERE.md`, `EXTERNAL_LLM_HANDOFF.md`,
`READ_FIRST_AI.md`, `PREFLIGHT.md`, `BRAND.md`, `DESIGN_SYSTEM.md`,
`LLM_MARKDOWN_OUTLINE_PACK.md`) are referenced from `llms.txt` and the runbooks
when needed.

## Important Folders

- `tokens/` - machine-readable design tokens and CSS token exports.
- `registry/` - approved component registry.
- `specs/` - component and design-system specifications.
- `templates/` - approved brief, outline, and compliance templates.
- `examples/` - generated examples and proof packages.
- `Components/` - approved component reference snapshots and visual handoff archives.
- `assets/` - visual references and design assets.
- `RAW/` - source material and production reference exports (do not read for
  page-generation tasks).
- `_archive/` - historical design-system reference material, including
  `_archive/phase-reports/` with all phase execution reports and session
  handoffs (history only, not rules).
- `library/` - React component library workspace.
- `showcase/` - local showcase app workspace.

## Repository Hygiene

This repo intentionally tracks design-system source material and historical
references because it is a private team knowledge repository.

Machine-local files are intentionally ignored, including `node_modules/`,
`.DS_Store`, local agent state, Playwright MCP traces, build output, logs,
environment files, and deployment state.

`.nested-git-backups/` is a local-only (gitignored, NOT tracked) rollback
backup of the retired sendPUSH production repository — it exists only on this
machine and is not recoverable from the remote. It is not source material; do
not read or restore from it without explicit instruction.
