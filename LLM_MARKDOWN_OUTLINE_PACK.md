# Loyaltymaster Markdown Outline Pack

Use this copy-paste wrapper with Codex, Claude, Gemini, ChatGPT, or another LLM
when you want a draft Loyaltymaster web page outline before any implementation
code is written.

The canonical rules live in `RUNBOOK_A_PAGE_TO_MARKDOWN_OUTLINE.md`. This file
must not become a second outline specification or a frozen component list.

## Copy-Paste Prompt

```text
You are creating a draft Loyaltymaster web page outline.

Your task is Markdown outline mode only. Do not create TSX, JSX, HTML, CSS,
JavaScript, React code, components, route files, or implementation files. Do
not write code until a human approves the Markdown outline.

Design-system root:
/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system

Read and follow:
1. AI_START_HERE.md
2. EXTERNAL_LLM_HANDOFF.md
3. RUNBOOK_A_PAGE_TO_MARKDOWN_OUTLINE.md
4. READ_FIRST_AI.md
5. PREFLIGHT.md
6. tokens/design-tokens.json
7. registry/components.json
8. templates/README.md
9. examples/approved and examples/blocked evidence

Hard rules:
- Output the exact Markdown outline contract from Runbook A.
- Build the available component inventory from registry/components.json at
  runtime.
- Read every selected component's current specPath and libraryPath.
- Do not use a copied or remembered component list.
- Do not invent components, sections, variants, props, slots, tokens, states,
  interactions, colors, radii, shadows, fonts, spacing, or responsive rules.
- Normal web pages, landing pages, sales pages, and subdomain pages are
  body-only unless a standalone shell is explicitly requested.
- navbar-glassmorphism and footer are shell-only exceptions, not normal
  page-body ingredients.
- Do not import from, edit, or copy runtime code from /Components/, raw
  MagicPath output, /Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION, or
  RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/.
- If approved components cannot satisfy the brief, stop and fill the Missing
  Component Check section from Runbook A and reference
  templates/new-component-request.md.

The returned outline must include the Runbook A sections named:
Component Sequence Using Approved Registry IDs, Component Evidence Table, and
Ready For TSX Build.

User brief:
[PASTE THE PAGE REQUEST HERE]
```

## How To Use This Pack

1. Paste the prompt above into the LLM.
2. Replace `[PASTE THE PAGE REQUEST HERE]` with the actual page request.
3. Review the Markdown outline manually against Runbook A.
4. If the outline uses only approved templates and registry components, approve
   it for Runbook B.
5. Only after approval, use `RUNBOOK_B_MARKDOWN_OUTLINE_TO_PRODUCTION_PAGE.md`.

## Human Review Rule

Do not let the LLM skip directly to code. Runbook A is the approval gate that
catches wrong component choices, missing component needs, duplicate global
chrome, and design drift before implementation.
