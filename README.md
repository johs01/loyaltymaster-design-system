# Loyaltymaster Design System

Private team knowledge base for the Loyaltymaster design system.

This repository exists so team members and their LLM tools can read the same
canonical source material before creating Loyaltymaster pages, outlines,
components, or design-system updates.

## Start Here

Read these files first:

1. `AI_START_HERE.md`
2. `EXTERNAL_LLM_HANDOFF.md`
3. `READ_FIRST_AI.md`
4. `PREFLIGHT.md`
5. `BRAND.md`
6. `DESIGN_SYSTEM.md`
7. `LLM_MARKDOWN_OUTLINE_PACK.md`

## Important Folders

- `tokens/` - machine-readable design tokens and CSS token exports.
- `registry/` - approved component registry.
- `specs/` - component and design-system specifications.
- `templates/` - approved brief, outline, and compliance templates.
- `examples/` - generated examples and proof packages.
- `Components/` - raw component reference snapshots.
- `assets/` - visual references and design assets.
- `RAW/` - source material and production reference exports.
- `_archive/` - historical design-system reference material.
- `library/` - React component library workspace.
- `showcase/` - local showcase app workspace.

## Repository Hygiene

This repo intentionally tracks design-system source material and historical
references because it is a private team knowledge repository.

Machine-local files are intentionally ignored, including `node_modules/`,
`.DS_Store`, local agent state, Playwright MCP traces, build output, logs,
environment files, and deployment state.
