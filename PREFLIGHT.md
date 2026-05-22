# Pre-flight: New Page Creation

Source basis: promoted from
`RAW/Pre-Flight - New Page Creation/prompts:preflight-new-page.md` with paths
updated for the Phase 1 root design-system structure.

You are about to create a new webpage. Before you write a single line of code,
you must complete every step below in order. Do not skip ahead. Do not produce
code in this turn.

## 1. Load Design Context

Read these files in full:

- `AI_START_HERE.md` - the external LLM entry point and read order.
- `EXTERNAL_LLM_HANDOFF.md` - the external hand-off workflow.
- `LLM_MARKDOWN_OUTLINE_PACK.md` - the no-code Markdown outline mode for draft
  web page outlines before TSX implementation.
- `READ_FIRST_AI.md` - the AI operating manual.
- `BRAND.md` - audience, voice, anti-references, and principles.
- `DESIGN_SYSTEM.md` - colors, typography, elevation, components, do's and
  don'ts.
- `tokens/design-tokens.json` - machine-readable token reference.
- `registry/components.json` - machine-readable component registry.
- `specs/README.md` - component-spec authority and workflow.
- `examples/README.md` - approved and blocked example workflow.
- relevant files in `examples/generated/` when a generated proof package exists
  for this artifact type.
- `templates/README.md` - approved recipe workflow for AI-created artifacts.
- the relevant approved template in `templates/` for this artifact type.

If any required file is missing or empty, stop and report which one. Do not
fabricate its contents.

## 1A. Confirm Body-Only Scope

For normal new web pages, landing pages, sales pages, and subdomain pages built
inside the existing production website, create body content only. The production
website already provides navbar/header and footer.

Do not include `navbar-glassmorphism`, header, or `footer` unless the brief
explicitly says the artifact is standalone and needs its own shell. If the brief
is ambiguous, assume body-only and list shell output as an open question.

## 2. Restate What You Read

Before planning the page, state:

- The Creative North Star from `DESIGN_SYSTEM.md`, in one sentence.
- The register from `BRAND.md`.
- The brand personality words from `BRAND.md`.
- The two or three anti-references you must avoid.
- The primary color, type, and spacing tokens you intend to use, by declared
  name.

If you cannot restate these accurately, re-read the files.

## 3. Reject Your First Instincts

Before committing to layout, palette, typography, or component choices, name
your first three instincts and reject each one. Explain why each is generic,
AI-typical, or off-brand for this system. Then propose a fourth direction, or
justify why one of the first three genuinely fits this brand.

This step is mandatory because the default LLM instinct produces purple
gradients, Inter on white, nested cards, and identical primary buttons.

## 4. Inventory Existing Primitives

Search the canonical system for components and tokens already in use:

- `/registry/` for approved component names and metadata.
- `/specs/components/` for current component usage rules.
- `/library/src/components/` for canonical Phase 4 implementation code.
- `/tokens/fonts.css` for canonical local Rodger and Onest font loading.
- `/showcase/app/` for live rendered component specimens, Phase 5 smoke
  verification, Phase 7C font/runtime visual-fidelity evidence, and Phase 7E
  interaction verification.
- `showcase/app/scripts/phase7f-production-targets.json` and
  `showcase/app/artifacts/phase-7f/production-fidelity-results.json` for the
  Phase 7F live sendPUSH runtime comparison source map and latest results.
- `showcase/app/src/templateFixtures.tsx` and
  `showcase/app/artifacts/phase-8e/template-fixture-results.json` for Phase 8E
  rendered proof that approved Markdown recipes can become browser-reviewable
  `.tsx` outputs.
- `showcase/app/scripts/phase7-visual-gates.json` for each component's current
  visual review classification and strict Phase 7C threshold before relying
  on pixel-diff approval.
- `PHASE_7C_REPORT.md` for the latest font/runtime parity, regenerated
  reference, and strict visual-gate notes.
- `PHASE_7D_INTERACTION_AUDIT.md` and `PHASE_7E_INTERACTION_FIX_REPORT.md` for
  the latest hover/focus/active/open-state gate evidence.
- `/examples/approved/` for acceptable composition patterns.
- `/examples/blocked/` for drift patterns that must be rejected.
- `/examples/generated/landing-page-body/`,
  `/examples/generated/web-page-body/`,
  `/examples/generated/blog-document-body/`, and
  `/examples/generated/brochure-content-body/` for Phase 8D/8E examples of
  approved recipes becoming body-only `.tsx` output. For blog/document
  long-form needs, follow the documented new-component request instead of
  inventing article layout.
- `/examples/generated/external-llm-dry-run/` and
  `http://127.0.0.1:5177/template-tests/external-llm-dry-run` for the Phase 9
  proof that an external LLM can follow `AI_START_HERE.md` and produce
  body-only `.tsx` output from approved components only.
- `/Components/` only as raw visual/code snapshots, never as import sources.
- `/assets/screenshots/` for visual references.

For every component you intend to use, read the current `specPath` listed in
`registry/components.json` immediately before including that component in the
plan, then use the current `libraryPath` for the React implementation. Check the
matching Phase 5 showcase specimen when visual alignment is uncertain. If a rule
was edited in the spec, apply the edited rule to this page. Check the Phase 7C
visual classification for every component you intend to rely on, then use the
current Phase 7C gate: review `PHASE_7C_REPORT.md`, confirm local font/runtime
parity, and run `npm run verify:visual` from `showcase/app` before claiming
visual fidelity. Phase 7C requires all 20 Wave 1 components to be gated with
zero skipped components and no pixel, width, height, aspect-ratio, font, or
runtime failures. Then run `npm run verify:interactions` from `showcase/app`;
Phase 7E requires all 20 Wave 1 components to pass hover, focus, active,
pressed, expanded, and mobile-open checks with zero failed or partial results.
Then run `npm run verify:production-fidelity` from `showcase/app`; Phase 7F
requires all 20 Wave 1 components to pass desktop and mobile comparison against
their live sendPUSH runtime selectors with zero failed results.
If a primitive exists, use it. If one almost fits,
ask before forking it. Do not silently create a parallel implementation.

Then compare the proposed composition against at least one relevant approved
example and every relevant blocked example. If the plan resembles a blocked
example, reject that direction before writing code.

Then choose the approved template from `templates/` that matches the artifact
type. If no template can satisfy the brief using approved registry components,
stop and complete `templates/new-component-request.md`.

## 5. Produce A Written Plan

Write a plan in this exact structure, then stop and wait for approval:

- **Purpose**: what this page must accomplish, in one sentence.
- **Primary action**: the one thing the visitor should do.
- **Shell scope**: body-only by default, or standalone shell only if explicitly
  requested.
- **Sections**: ordered list with one-line description each.
- **Hierarchy**: which element is loudest, which is quietest, why.
- **Tokens to be used**: named, not raw values.
- **Components to reuse**: from the inventory in step 4.
- **Approved template used**: list the `templates/*.md` recipe selected for the
  artifact and explain why it fits.
- **Component specs read**: list every `specs/components/<component-id>.md`
  file read immediately before selecting the component.
- **Components to create**: only if step 4 found no match.
- **Approved examples referenced**: list the relevant `examples/approved/*.md`
  files used as composition references.
- **Generated examples referenced**: list any relevant
  `examples/generated/*` proof packages used as recipe-to-output references.
  For external LLM work, include `EXTERNAL_LLM_HANDOFF.md` and review
  `examples/generated/real-brief-trial/` when the brief is a normal web-page
  body. The Phase 10 review URL is
  `http://127.0.0.1:5177/template-tests/real-brief-trial`.
- **Markdown outline mode**: if the first deliverable is a page outline,
  confirm `LLM_MARKDOWN_OUTLINE_PACK.md` was used and no implementation code
  was generated.
- **Blocked examples checked**: list the relevant `examples/blocked/*.md` files
  used as rejection tests.
- **Phase 7C visual gate status**: list each selected component's current
  classification from `showcase/app/scripts/phase7-visual-gates.json`.
- **Phase 7E interaction gate status**: confirm each selected component has
  passed the current `npm run verify:interactions` audit.
- **Phase 7F production fidelity status**: confirm each selected component has
  a live runtime target and passed `npm run verify:production-fidelity`.
- **Phase 8E rendered template status**: confirm the relevant local
  template-test URL was reviewed for web-page, landing-page, blog/document, or
  brochure-content work, or explain why this artifact type is outside the
  current rendered-fixture coverage.
- **Anti-pattern risks**: where the brief might pull you toward something
  forbidden in `DESIGN_SYSTEM.md`, and how you will resist it.
- **Open questions**: anything ambiguous in the brief.

Do not generate code until the plan is approved.

## Hard Rules Across All Steps

- Never invent design tokens.
- Never invent component variants outside the current component spec.
- Never skip the approved template recipe layer in `templates/`.
- Never include navbar/header/footer in normal production website page bodies.
- Never import from `/Components/`; use `/library/src/components/` for canonical
  React implementations.
- Never substitute a color, font, or spacing value with a close-enough literal.
- Never claim to have read a file you have not read.
- Never fabricate a section of `BRAND.md` or `DESIGN_SYSTEM.md`.
- If the brief conflicts with the canonical docs, surface the conflict before
  planning. Do not silently resolve it.
