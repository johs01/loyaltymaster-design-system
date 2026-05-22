# Loyaltymaster AI Start Here

This is the first file external AI agents must read when creating
Loyaltymaster or sendPUSH digital content from this design-system folder.

If the task is to draft a new page outline before code, use
`LLM_MARKDOWN_OUTLINE_PACK.md`. That pack is Markdown outline mode only and
must not produce TSX, JSX, HTML, CSS, JavaScript, or React code until a human
approves the outline.

## Purpose

Use this folder as the living source of truth. Future content must be assembled
from approved templates, approved registry components, approved specs, approved
tokens, approved examples, and the clean React library. Do not treat the old
production app as an editable target.

## Required Read Order

1. `AI_START_HERE.md`
2. `EXTERNAL_LLM_HANDOFF.md`
3. `LLM_MARKDOWN_OUTLINE_PACK.md` when the task is a draft page outline
4. `READ_FIRST_AI.md`
5. `PREFLIGHT.md`
6. `BRAND.md`
7. `DESIGN_SYSTEM.md`
8. `tokens/design-tokens.json`
9. `registry/components.json`
10. `templates/README.md`
11. the approved `templates/*.md` recipe for the artifact type
12. each selected component's current `specPath`
13. each selected component's current `libraryPath`
14. `examples/README.md`
15. at least one relevant `examples/approved/*.md`
16. every relevant `examples/blocked/*.md`
17. the rendered template proof page when one exists for the artifact type

## Body-Only Rule

Normal web pages, landing pages, sales pages, and subdomain pages are body-only.
The production website already supplies the global navbar/header and footer.
Do not create those shell areas unless the brief explicitly says the artifact
is standalone and needs its own shell.

If the brief is ambiguous, default to body-only and record shell scope as an
open question before writing code.

## Approved Lego Rule

Build only from components listed in `registry/components.json`. Before using a
component, read its current `specPath`, import from its current `libraryPath`,
and follow the latest component spec. Do not invent sections, cards, buttons,
layouts, colors, radii, shadows, typography, animation, hover behavior, or
component variants inside the artifact.

If approved components cannot satisfy the brief, stop and complete
`templates/new-component-request.md`. The missing component must be built,
registered, documented, implemented, showcased, visually gated, interaction
gated, production-fidelity gated, and explicitly approved before it may be used.

## Protected Sources

Do not edit, import from, or copy runtime code from:

- `/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION`
- `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/`
- `/Components/`

`/Components/` is raw snapshot reference only. The canonical implementation
layer is `library/src/components/`.

## Template Proof

For web-page, landing-page, blog/document, and brochure-content work, review
the matching browser-visible proof page:

- `http://127.0.0.1:5177/template-tests/web-page`
- `http://127.0.0.1:5177/template-tests/landing-page`
- `http://127.0.0.1:5177/template-tests/blog-document`
- `http://127.0.0.1:5177/template-tests/brochure-content`

These pages prove approved Markdown recipes can become real `.tsx` body
content without duplicate shell output or invented design language.

## Generated Example Proof

Use the generated packages under `examples/generated/` as the Phase 8D/8E
proof layer for the approved workflow:

- `examples/generated/landing-page-body/`
- `examples/generated/web-page-body/`
- `examples/generated/blog-document-body/`
- `examples/generated/brochure-content-body/`
- `examples/generated/external-llm-dry-run/`
- `examples/generated/real-brief-trial/`

Each package includes:

- filled brief from the relevant approved template
- body-only `.tsx` composition using approved library components
- component evidence list with registry ID, `specPath`, `libraryPath`, tokens,
  and screenshot evidence
- final checklist proving no duplicate shell, no invented components, no
  unapproved tokens, and no protected-source imports

The blog/document package also includes a documented stop point for a future
article-body/content-block component because that component is not yet approved.

The external-LLM dry run proves the full start-here workflow with this review
URL:

- `http://127.0.0.1:5177/template-tests/external-llm-dry-run`

The Phase 10 real-brief trial proves the same workflow against a practical
Loyaltymaster/sendPUSH page brief:

- `http://127.0.0.1:5177/template-tests/real-brief-trial`

## Required Output From Future Agents

For Markdown outline mode, use `LLM_MARKDOWN_OUTLINE_PACK.md` and return the
outline structure from that pack. Do not write implementation code during that
stage.

Before writing implementation code, produce a written plan that lists:

- selected approved template
- shell scope
- selected registry component IDs
- specs read
- library paths to import
- tokens used by name
- approved examples referenced
- blocked examples checked
- visual, interaction, production-fidelity, and rendered-template gates checked
- open questions

After implementation, run the relevant validation commands from
`.claude/commands/loyaltymaster-validate.md` and record the human approval
status before publishing.
