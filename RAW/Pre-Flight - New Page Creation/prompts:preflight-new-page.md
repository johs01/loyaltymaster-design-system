# Pre-flight: New Page Creation

You are about to create a new webpage. Before you write a single
line of code, you must complete every step below in order. Do not
skip ahead. Do not produce code in this turn.

## 1. Load design context

Read these files in full:
- PRODUCT.md — register, audience, voice, anti-references, principles
- DESIGN.md — colors, typography, elevation, components, do's and don'ts
- DESIGN.json — machine-readable token reference, if present

If any of these files are missing or empty, stop and report which.
Do not proceed without them. Do not fabricate their contents.

## 2. Restate what you read

Before planning the page, state in your reply:
- The Creative North Star from DESIGN.md, in one sentence
- The register (brand or product)
- The three personality words from PRODUCT.md
- The two or three anti-references you must avoid
- The primary color, type, and spacing tokens you intend to use,
  by their declared names

If you cannot restate these accurately, re-read the files.

## 3. Reject your first instincts

Before committing to layout, palette, typography, or component
choices, name your first three instincts and reject each one.
Explain why each is generic, AI-typical, or off-brand for this
system. Then propose a fourth direction, or justify why one of
the first three genuinely fits this brand.

This step is mandatory. It exists because the default LLM instinct
produces purple gradients, Inter on white, nested cards, and
identical primary buttons.

## 4. Inventory existing primitives

Search the codebase for components and tokens already in use:
- Buttons, inputs, cards, navigation, layout containers, modals
- Typography styles already declared
- Existing page templates or section patterns

If a primitive exists, use it. If one almost fits, ask before
forking it. Do not silently create a parallel implementation.

## 5. Produce a written plan

Write a plan in this exact structure, then stop and wait for
approval:

- **Purpose**: what this page must accomplish, in one sentence
- **Primary action**: the one thing the visitor should do
- **Sections**: ordered list with one-line description each
- **Hierarchy**: which element is loudest, which is quietest, why
- **Tokens to be used**: named, not raw values
- **Components to reuse**: from the inventory in step 4
- **Components to create**: only if step 4 found no match
- **Anti-pattern risks**: where the brief might pull you toward
  something forbidden in DESIGN.md, and how you will resist
- **Open questions**: anything ambiguous in the brief

Do not generate code until the plan is approved.

## Hard rules across all steps

- Never invent design tokens. Use only what DESIGN.md declares.
- Never substitute a color, font, or spacing value with a "close
  enough" literal. If a token is missing, ask.
- Never claim to have read a file you have not read.
- Never fabricate a section of PRODUCT.md or DESIGN.md.
- If the brief conflicts with PRODUCT.md or DESIGN.md, surface
  the conflict before planning. Do not silently resolve it.