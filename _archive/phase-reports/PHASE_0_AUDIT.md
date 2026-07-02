# Phase 0 Audit — Loyaltymaster Design System Consolidation

> **Status:** Awaiting your approval before Phase 1.
> **Author:** Claude (Cowork mode)
> **Date:** 2026-05-18
> **Scope:** A full read of `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/` to determine what already exists, what's missing, what's duplicated, and what's inconsistent — before any new files are created.

---

## 1. The honest headline

You have **more existing design system material than you probably realize**, but it is scattered across at least four parallel attempts that contradict each other in small but important ways. **The work to do is consolidation and gap-filling, not creation.** If we treat this as a from-scratch build we will throw away your previous decisions and create yet another fifth version that drifts again.

The core brand identity (voice, palette, typography, anti-patterns, principles) is **already well-defined and consistent across documents**. What's missing is the *machine-readable contract* — the part that lets AI tools deterministically request "this component, this variant, these props" instead of guessing.

---

## 2. What exists today

### 2.1 Authoritative documentation (strong)

| File | Size | What it contains | Quality |
|---|---|---|---|
| `RAW/.../sendPUSH-PRODUCTION/DESIGN.md` | ~245 lines | YAML frontmatter with parseable colors/typography/spacing/rounded/components + prose covering 6 sections (Overview, Colors, Typography, Elevation, Components, Do/Don't) | **Strong.** This is the closest thing to a canonical design system doc you already have. |
| `RAW/.../sendPUSH-PRODUCTION/PRODUCT.md` | ~44 lines | Register, Users, Product Purpose, Brand Personality, Anti-references, Design Principles, Accessibility | **Strong.** Brand voice is locked in. |
| `Loyaltymaster Design System V1.0/README.md` | ~196 lines | The deepest visual reference — voice, tone, color vibe, typography, spacing, backgrounds, animation, hover/press, borders, shadows, transparency, corner radii, layout rules, imagery, cards, iconography, font substitutions, caveats | **Very strong.** This is your most complete brand+visual reference. |
| `Loyaltymaster Design System V1.0/SKILL.md` | ~28 lines | Agent Skill manifest with frontmatter (`name: sendpush-design`, `user-invocable: true`) | Good — already in Claude Code skill format. |
| `RAW/.../sendPUSH-PRODUCTION/src/design-system/STYLE-GUIDE.md` | ~16 KB | Human-readable style reference | Not re-read in this audit; presumed strong based on size and location. |
| `RAW/.../sendPUSH-PRODUCTION/src/design-system/tokens.ts` | ~24 KB | TypeScript token audit with rationale | Not re-read; presumed authoritative source for tokens. |
| `RAW/.../sendPUSH-PRODUCTION/AGENTS.md` | ~55 lines | Source-to-page workflow rules for AI | Strong — already enforces "preserve text exactly, build in existing design language". |
| `RAW/.../sendPUSH-PRODUCTION/CLAUDE.md` | ~32 lines | Next.js architecture orientation | Adequate. |
| `RAW/.../prompts:preflight-new-page.md` | ~78 lines | 5-step pre-flight workflow (load context → restate → reject instincts → inventory → plan) | **Strong.** This is your governance contract for AI page generation. |
| `RAW/.../END OF SESSION - HANDOFF FOLDER/llm-design-system.md` | ~240 lines | Reference research on LLM-readable design systems + 8-section component spec template + ready-made Claude Code prompt | **Strong reference.** Use the 8-section template as the canonical component spec format. |
| `RAW/.../END OF SESSION - HANDOFF FOLDER/Chatgpt Deep-research-report (2).md` | unread | ChatGPT deep-research output | Worth scanning in Phase 1 to catch any decisions I missed. |

### 2.2 Component reference snapshots (mixed)

`/Components/` at the root holds 20 component folders, each with `<Name>.png` (visual proof) + `<Name>.tsx` (code). This is the closest thing you have to a component catalog today.

| # | Component | Has PNG? | Has TSX? | LOC | Notes |
|---|---|---|---|---|---|
| 1 | Billing Toggle Button | ✓ | ✓ | 49 | |
| 2 | Button | ✓ | ✓ | 131 | **Misnamed — exports `GeoFenceUseCase`** (a section, not a button) |
| 3 | Button Email | ✓ | ✓ | 132 | |
| 4 | CTA Trial Full Form | ✓ | ✓ | 173 | |
| 5 | CTA with Button Email | ✓ | ✓ | 64 | |
| 6 | Comparison Table | ✓ | ✓ | 174 | |
| 7 | FAQ Accordion | ✓ | `.txt` not `.tsx` | — | **File extension wrong** — should be `.tsx` |
| 8 | Feature Section 2 Column Bullets Image | ✓ | ✓ | 115 | |
| 9 | Feature Section 2 Column Image | ✓ | ✓ | 118 | |
| 10 | Features Grid | ✓ | ✓ | 120 | |
| 11 | Footer | ✓ | ✓ | 263 | |
| 12 | Hero Main Section | ✓ | ✓ | 116 | Exports `MessagingHero` |
| 13 | Image Grid | ✓ | ✓ | 129 | |
| 14 | Image Strip | ✓ | ✓ | 67 | |
| 15 | Navbar Glassmorphism | ✓ | ✓ | 659 | Largest — likely the glass-nav with cursor specular |
| 16 | Pricing Section | ✓ | ✓ | 190 | |
| 17 | Process Steps | ✓ | ✓ | 195 | |
| 18 | Stats Card Strip | ✓ | ✓ | 65 | Folder named "Stats Card Strip" but file is "Stats Cards Strip" — **plural mismatch** |
| 19 | Testimonial Single | ✓ | ✓ | 114 | |
| 20 | Testimonials Grid | ✓ | ✓ | 119 | |

**Total:** 2,993 lines of component code across 20 components. PNG previews exist for all 20.

#### Critical issue with these .tsx files

Spot-checked `Button.tsx` and `Hero Main Section.tsx`. **They use hardcoded hex literals** (`#FCB827`, `#302127`, `#fef0e9`, `#979093`) instead of the CSS variable tokens (`var(--wr-accent-yellow)`, `var(--wr-ink)`, etc.) that `DESIGN.md` mandates.

This is the single biggest source of future drift: if every AI generates pages by copying these snippets, they will fork the design system every time tokens change. **The componentized library (Phase 3) must be rebuilt to consume CSS variables, not hex values.**

There's also a smaller issue: many list items, headings, and image blocks have `style={{ display: "none" }}` inline — these snapshots appear to be partially extracted, not all sections render. Some components may need re-extraction.

### 2.3 Brand assets (mostly complete)

| Folder | Contents | Status |
|---|---|---|
| `Loyaltymaster Design System V1.0/assets/logos/` | 6 PNGs: loyaltymaster-favicon-512, sendpush-chevron-middle, sendpush-chevron, sendpush-lowercase, sendpush-loyaltymaster, sendpush-wordmark | ✓ Sufficient for v1 |
| `Loyaltymaster Design System V1.0/assets/fonts/` | Full Rodger family OTF (Thin/ExtraLight/Light/Regular/Bold/ExtraBold/Black + italics) | ✓ Complete |
| `Loyaltymaster Design System V1.0/assets/partners/` | 12 partner badges: apple-pay, aws, clover-pos, digital-ocean, gdpr-ready, google-pay, touch-bistro, toast, make, zapier, google logo, stripe payment | ✓ Complete |
| `RAW/.../sendPUSH-PRODUCTION/public/assets/remy/` | Same partner badges with different filenames (e.g. `Apple Pay Logo.webp`) | **Duplicate** — different naming convention than V1.0. |
| Top-level `*.webp` files (Apple_Pay_Logo, Digital_Ocean, etc.) | Loose at the root of `sendPUSH-PRODUCTION/` | **Triplicate** — same logos again, third naming convention. |
| `assets/screenshots/` | Empty in current view (need to verify) | — |

**Note on Rodger Bold:** Confirmed as proprietary font (`RodgerTest-*.otf`). Bundled correctly. V1.0 README flags the no-network fallback should be Archivo Black.

### 2.4 Production code (Next.js app)

The `sendPUSH-PRODUCTION` folder is a live Next.js 16 App Router app. Routes that exist:

- `/` (root marketing page)
- `/bring-back-customers`
- `/cookies`
- `/design-system-template-page` — **canonical component sampler** per DESIGN.md
- `/loyalty`
- `/privacy`
- `/social-media`
- `/style-guide` — **existing style guide page**
- `/terms`
- API: `/api/csp-report`, `/api/trial-signup`

Plus shared composition in `src/next/SitePage.tsx` and reusable page bodies in `src/site-pages/`.

### 2.5 AI infrastructure already in place

- `RAW/.../sendPUSH-PRODUCTION/.agents/skills/impeccable/` — A sophisticated skill set with 20+ scripts (live-mode browser session, CSP detection, design parser, command metadata, etc.) and an `openai.yaml` agent definition. This is the *impeccable.style* methodology bolted in.
- `Impeccable.style/` (50+ extracted .md files) — Reference documentation for the impeccable.style design methodology you've been studying.
- `.bolt/prompt`, `.bolt/config.json`, `.bolt/mcp.json` — Bolt.new configuration baked in.
- `.cursor/` — Cursor configuration.
- `.github/workflows/` — CI present.

### 2.6 Empty stubs (intent exists, content does not)

- `/examples/approved/` — empty
- `/examples/blocked/` — empty
- `/.claude/commands/` — empty
- `/assets/screenshots/` — empty
- `Loyaltymaster Design System V1.0/preview/` — exists but contents not confirmed
- `Loyaltymaster Design System V1.0/uploads/` — exists but contents not confirmed

You clearly intended `examples/approved` and `examples/blocked` to be training data for AI (good idea), but they are unfilled.

---

## 3. Duplicates and inconsistencies (the real cost)

Here's what's going to cause drift if we don't fix it. I'm listing these in order of how much they will hurt.

### 3.1 Three competing design system attempts

| Attempt | Location | Maturity | Should we keep? |
|---|---|---|---|
| **A. sendPUSH-PRODUCTION/DESIGN.md + src/design-system/** | `RAW/.../sendPUSH-PRODUCTION/` | **Most authoritative** — has YAML tokens, lives next to production code, references actual CSS variable names | **Yes — promote to canonical.** |
| **B. Loyaltymaster Design System V1.0/** | Root of workspace | Most complete brand reference doc, has Agent Skill manifest, has assets bundle | **Merge into A.** Keep the deeper voice/animation/hover content from this README. |
| **C. Codex sendpush page creator/sendpush-design-system/** | `RAW/.../Codex sendpush page creator/` | Codex's parallel attempt to do the same job | **Decide:** consult and archive, or delete entirely. |
| **D. Component snapshots at `/Components/`** | Root of workspace | 20 reference images + extracted code | **Keep as visual reference; rebuild the code into a clean library.** |

### 3.2 Asset duplication (three copies of every partner logo)

- `Loyaltymaster Design System V1.0/assets/partners/apple-pay.webp` (kebab-case)
- `RAW/.../sendPUSH-PRODUCTION/public/assets/remy/Apple Pay Logo.webp` (Title Case with spaces)
- `RAW/.../sendPUSH-PRODUCTION/Apple_Pay_Logo.webp` (Snake_Case at root)

Three naming conventions for the same 12 logos. **Pick one (recommend kebab-case from V1.0), centralize, delete the rest.**

### 3.3 Token-variable inconsistency

Several layers of tokens exist with overlapping definitions:

- `DESIGN.md` YAML frontmatter declares logical names like `colors.ink`, `colors.peach`, `rounded.pill`.
- `public/design-system/withremy/withremy.css` declares `--wr-ink`, `--wr-accent-yellow`, `--wr-r-pill`.
- `public/wireframe-remy.css` declares `--wf-*` component tokens (~4,500 lines).
- `src/design-system/tokens.ts` mirrors tokens in TypeScript.
- `tailwind.config.js` mirrors them again in Tailwind theme.
- `/Components/*.tsx` snapshots **ignore all of the above** and hardcode hex values.

**Risk:** Five sources of truth for the same colors. If `--wr-accent-yellow` ever changes, four of the five layers update — and the .tsx component snapshots silently fork. This is the exact "AI design drift" problem you want to eliminate.

**Fix:** Make `tokens.ts` (or a new `design-tokens.json` in DTCG format) the **single canonical source**, and generate `.css`, Tailwind config, and TypeScript types from it.

### 3.4 Component file hygiene issues

- `Components/Button/Button.tsx` exports `GeoFenceUseCase` (wrong component).
- `Components/FAQ Accordion/FAQ Accordion.txt` has the wrong file extension.
- `Components/Stats Card Strip/Stats Cards Strip.tsx` — folder vs file name mismatch (singular vs plural).
- Many components have `style={{ display: "none" }}` on internal sections — the snapshots are partial.
- All component code uses hardcoded hex literals — see 3.3.

### 3.5 No machine-readable component registry

There is currently **no JSON/YAML file** that says "here are the canonical Loyaltymaster components, by name, with their props, screenshots, and usage rules." This is the thing you described in your `llm-design-system.md` and `README FIRST.txt` vision. It does not yet exist.

Without it, no AI can request a component by name with confidence — they have to look at the `/Components/` folder and guess. Building this registry is the **highest-leverage missing piece**.

---

## 4. Gap analysis vs. your end goal

Your stated end goal has 7 numbered requirements. Here's where each one stands today:

| # | Goal | Status today | Gap |
|---|---|---|---|
| 1 | New page is **visually indistinguishable** from existing system | Possible if AI reads `DESIGN.md` carefully, but token drift in `/Components/` snippets undermines this | Rebuild components on CSS variables |
| 2 | Result looks like "the same designer built both" | Same as #1 | Same as #1 |
| 3 | New web page matches source visual quality and brand feel | Brand language is well-documented (PRODUCT.md, DESIGN.md, V1.0 README); execution depends on whether AI follows the pre-flight workflow | Need a **single, short orientation document** AI is forced to read first |
| 4 | Every page built from same rules and same components — no guessing, no drift | **NOT MET.** Multiple competing token sources, hardcoded hex in snippets, no component registry, no machine-readable manifest | Build the registry (Phase 2) |
| 5 | AI must know which components are available by unique names | **NOT MET.** No registry. AI has to discover from folder names. | Build the registry (Phase 2) |
| 6 | Design system is both code library AND AI-readable operating manual | Partially met — operating manual exists (DESIGN.md + V1.0 README); code library has snapshots but not clean reusable components | Phases 3 + 4 |
| 7 | Design system shows image + code for each component + when to use + how to combine | Images and code exist for 20 components but the *when-to-use* and *combination* rules are not written per component | Phase 2 — component spec files (8-section template) |

**Bottom line:** Goals 1-3 are achievable today with discipline. Goals 4-7 require new work.

---

## 5. Proposed phased plan (recommendation)

I propose **6 phases**. You approve each one before I start. Each phase is sized so you can sanity-check the output before we move on.

### Phase 1 — Consolidate the canonical documents (1 short session)
- Merge `DESIGN.md` (sendPUSH-PRODUCTION) + V1.0 `README.md` into one canonical `DESIGN_SYSTEM.md` at the workspace root.
- Keep YAML frontmatter for parseable tokens.
- Resolve any conflicts between the two docs (there should be very few — they agree on the big things).
- Promote `PRODUCT.md` and the pre-flight workflow to root.
- Output: `DESIGN_SYSTEM.md`, `BRAND.md` (was PRODUCT.md), `PREFLIGHT.md`, `READ_FIRST_AI.md`.
- **Rating risk:** Low. Mostly merging existing prose.

### Phase 2 — Build the machine-readable layer (1 medium session)
- Author `design-tokens.json` in **DTCG v1.0** format as the single canonical source for all tokens (colors, typography, spacing, rounded, shadows, motion).
- Generate `tokens.css` (CSS variables) from the JSON.
- Generate a TypeScript types file.
- Author `components.json` — the **component registry**: array of components with `id`, `name`, `category`, `status`, `description`, `whenToUse`, `whenNotToUse`, `screenshotPath`, `codePath`, `tokensUsed`, `props` (Zod schema reference).
- Output: `tokens/design-tokens.json`, `tokens/tokens.css`, `tokens/tokens.d.ts`, `registry/components.json`.
- **Rating risk:** Medium. Needs care on DTCG format and registry schema.

### Phase 3 — Write component spec files (medium-to-large session, can split)
- For each of the 20 components, write a spec file at `specs/components/<kebab-name>.md` using the 8-section template from `llm-design-system.md`.
- Each spec links to the screenshot, the canonical code path, the tokens used, the props, the states, and the when-to-use rule.
- Output: 20 spec files.
- **Rating risk:** Medium. Tedious but pattern-based. Best done in batches of 5.

### Phase 4 — Rebuild the React component library (large session, can split)
- Create `library/src/components/` with clean, token-driven, prop-typed React components for each of the 20.
- Replace hardcoded hex with CSS variables.
- Add Zod schemas matching what's in `components.json`.
- Add usage examples that match the spec.
- Output: 20 production-ready components + index export.
- **Rating risk:** High. This is real engineering. Recommend splitting into 4 batches of 5.

### Phase 5 — Build the HTML showcase site (medium session)
- Static HTML page at `showcase/index.html` that reads `registry/components.json` and renders for each component: a card with the screenshot image, the component name, when-to-use, code snippet, and a "Copy spec" button.
- Use only the design tokens + Loyaltymaster fonts — the showcase site itself becomes a brand artifact.
- Output: `showcase/index.html` + supporting CSS/JS.
- **Rating risk:** Medium.

### Phase 6 — Wire it all into a Claude Code / Cowork skill (small-to-medium session)
- Update `SKILL.md` so any AI invoking the skill is loaded with `READ_FIRST_AI.md` → `DESIGN_SYSTEM.md` → `registry/components.json` → relevant spec files.
- Test with a real "generate a new page" prompt to verify the AI produces on-brand output.
- Document the workflow in `RUNBOOK.md`.
- **Rating risk:** Medium. The real test is whether AI output is actually indistinguishable.

---

## 6. Open questions I need answered before Phase 1

These are real choices you have to make. I will not guess.

1. **Which is the canonical design system root?** Do we promote files to the workspace root (`/DESIGN_SYSTEM.md`, `/tokens/`, `/registry/`, `/specs/`, `/library/`, `/showcase/`) and treat `sendPUSH-PRODUCTION/` purely as the consuming app? Or do we keep everything *inside* `sendPUSH-PRODUCTION/` as it is today?
2. **What do we do with the duplicate folders?** Should I move `Loyaltymaster Design System V1.0/` and the `Codex sendpush page creator/` content into an `/_archive/` folder once Phase 1 is approved, or leave them in place?
3. **Are the 20 `/Components/` snapshots the official catalog, or just one snapshot in time?** Some are misnamed and many have hidden sections. Do you want me to (a) trust them and clean them up, or (b) re-extract from the live production routes (`/design-system-template-page` etc.)?
4. **Token format preference:** DTCG v1.0 JSON (`{ "color": { "ink": { "$value": "#302127", "$type": "color" } } }`) or your existing flat YAML in `DESIGN.md` frontmatter? DTCG is the modern standard and works with Style Dictionary / tooling.
5. **React component library — server or client by default?** Next.js App Router defaults to server components. Some Loyaltymaster components use `useState`/Framer Motion and must be `'use client'`. Confirm we target Next 16 App Router specifically.
6. **Showcase site — where does it live and how is it served?** Static HTML file in the workspace, or a new route inside `sendPUSH-PRODUCTION/` at e.g. `/design-system`?
7. **Zod schemas — do you want these now?** Your `README FIRST.txt` vision includes Zod for prop validation. This is one more dependency. Worth including in Phase 2, or skip until later?
8. **Should we touch the existing `sendPUSH-PRODUCTION` code at all in early phases?** I am inclined to keep the production app untouched until Phase 4 and ship the design system as a sibling that the app can later adopt.
9. **Scope of components to formalize:** Just the 20 in `/Components/`, or also the page-level sections in `src/site-pages/` (HeroSection, TestimonialSection, PricingSection, etc.)? My recommendation: yes to both, in two waves.
10. **The Impeccable.style methodology** — is this the official design methodology for Loyaltymaster, or just one you're researching? It heavily influences the existing `.agents/skills/impeccable/` infrastructure. Worth knowing before we build a parallel skill.

---

## 7. Risks I want to name early

These are the things most likely to go wrong if we're not careful.

- **Drift between the design system and the live site.** If we build a clean library and the production site keeps its old hardcoded styles, we now have *two* sources of truth and they will diverge. Plan for a migration of the live site, not just a parallel library.
- **Spec-vs-code mismatch.** Component specs (Phase 3) describe what *should* be true. The library code (Phase 4) makes it true. If specs are written first from imperfect snapshots, they may bake in mistakes. Best practice: write the spec, build the component, then re-verify the spec against the built component.
- **AI overfitting to the showcase.** If we make the showcase site too elaborate, AIs may copy *its* layout instead of the components. The showcase should be deliberately understated.
- **Token bloat.** `wireframe-remy.css` is ~4,500 lines. Most of those are probably unused or duplicative. If we include all of them in the canonical token set, we drown the AI in noise. Recommend ruthless culling in Phase 2.
- **"AI-readable" without verification is a fiction.** The only way to know the design system works for AI is to *test it* with a real "build me a page about X" prompt and grade the output against the source. Plan Phase 6 to include this test, and budget for revisions.

---

## 8. Self-rating of this audit

**Rating: 7 / 10.**

### What's strong
- Read all the foundational docs (DESIGN.md, PRODUCT.md, V1.0 README, SKILL.md, AGENTS.md, CLAUDE.md, package.json, llm-design-system.md, pre-flight prompt).
- Inventoried all 20 component snapshots with line counts and flagged the misnaming/extension issues.
- Confirmed asset bundles (logos, fonts, partners) exist and are complete.
- Identified the three competing design system attempts and the three asset naming conventions.
- Caught the critical hardcoded-hex-vs-CSS-variables problem in the `/Components/` code.
- Produced a phased plan and listed 10 concrete open questions.

### What would make it a 10
- **Read the two large files I skipped:** `src/design-system/STYLE-GUIDE.md` (16 KB) and `src/design-system/tokens.ts` (24 KB). These are likely the most authoritative current artifacts and I assumed their strength rather than verifying it. I deliberately deferred reading them to keep this audit shorter, but a 10/10 audit would have read them.
- **Read the actual `withremy.css` and `wireframe-remy.css`** to count how many tokens are real vs. unused. I estimated, did not measure.
- **Open at least 5 of the `/Components/*.tsx` files** to confirm the hardcoded-hex pattern is universal vs. just present in the two I sampled.
- **Compare DESIGN.md tokens against tokens.ts and tailwind.config.js side-by-side** to surface any real numerical discrepancies (not just naming).
- **Read the Codex parallel attempt** at `Codex sendpush page creator/sendpush-design-system/README.md` to confirm there are no good ideas in there we should harvest before archiving.
- **Sample the existing `/style-guide` and `/design-system-template-page` route output** to see what the live design system looks like today (would require running the Next.js app or reading the page bodies).
- **Test the impeccable.style skill scripts** to understand what AI infrastructure already works.

If you want a 10/10 audit, I can do these next reads in a follow-up pass before you approve Phase 1. Estimated cost: 1 more focused read session (~10–15 minutes of additional tool calls).

---

## 9. Verification pass — corrections to this audit

After writing the audit, I ran a verification pass against the actual files and caught **three things I got wrong or missed**. Logging them here transparently so this document stays trustworthy.

### 9.1 An existing machine-readable design manifest DOES exist

I claimed in section 3.5 that "no JSON/YAML file" exists for the component registry. **That was wrong.** There is:

- `RAW/.../sendPUSH-PRODUCTION/.impeccable/design.json` — 142 lines, schema v2, generated 2026-05-08.

It already contains: `schemaVersion`, `generatedAt`, `title`, `sourceRoute` (`/design-system-template-page`), `sourceFiles` (7 paths), `extensions.northStar` ("The Local Growth Counter"), `extensions.routeInventory` (resolver, component, shellComponents, **17 named body components**), and `extensions.colorMeta` with role/displayName/canonical/dark/css for each color.

**Implication:** Phase 2 is not "build the registry from scratch." It is "extend `design.json` to cover components, props, and spec links, then promote it from `.impeccable/` to a canonical location."

### 9.2 An existing on-token HTML showcase already exists

I noted `Loyaltymaster Design System V1.0/preview/` exists but flagged its contents as "not confirmed." **Contents confirmed.** It is essentially Phase 5 in draft form:

- `_base.css` — preview-page shared styles that correctly use CSS variables (`var(--wr-white)`, `var(--wr-ink)`, `var(--wr-font-body)`, etc.).
- 20+ HTML specimen files: `button-email.html`, `buttons.html`, `checklist.html`, `colors-feedback.html`, `colors-primary.html`, `colors-surfaces.html`, `colors-text.html`, `email-cta.html`, `faq.html`, `feature-cards.html`, `form-fields.html`, `hero-main-section.html`, `icons.html`, `logos.html`, `motion.html`, `nav-glass.html`, `partners.html`, `pricing-cards.html`, `process-cards.html`.

**Implication:** Phase 5 (HTML showcase) is largely already built and is correctly on-token. The work is consolidating these into one indexed showcase page, not creating from zero.

### 9.3 Hex-literal claim was slightly overstated

I claimed `/Components/*.tsx` files universally use hardcoded hex. **Actual measurement:** 17 of 19 `.tsx` files contain one of `#fcb827` / `#FCB827` / `#302127`. The two exceptions are `Components/Image Grid/Image Grid.tsx` and `Components/Image Strip/Image Strip.tsx` — those are image-only components that may not need brand colors. (FAQ Accordion was not scanned because its file is `.txt` not `.tsx`, which is the misnamed file already flagged.)

**Implication:** The drift problem is real and broad (89% of code-bearing components are affected), but not literally universal. The fix in Phase 4 stands.

### 9.4 Codex bundle origin clarified

The `RAW/.../Codex sendpush page creator/sendpush-design-system/README.md` identifies itself as a **handoff bundle from "Claude Design" (claude.ai/design)** — i.e. an Anthropic design tool export, intended to be implemented by a coding agent. So that folder isn't a competing Codex *design system* — it's a coding-agent **handoff bundle**. Worth scanning for any HTML/CSS prototypes that show layout intent we haven't captured elsewhere, but it's not an authority we need to reconcile with.

### 9.5 Revised rating after verification

Adjusted rating: **7.5 / 10** (was 7).

Verification raised the rating slightly because the corrections strengthen the recommendation: the user has done MORE foundational work than even my audit credited. But it also revealed I had not been thorough enough on the first pass — a true 10/10 would have caught `design.json` and the `preview/` contents in the initial sweep.

The path to a 10/10 is still the deeper reads listed in section 8 (tokens.ts, STYLE-GUIDE.md, withremy.css line-level review, sampling 5 more components, scanning the Codex bundle HTML).

---

## 10. What I am asking you to do next

Choose one:

**A. Approve Phase 1 now** — I start consolidating canonical docs into the workspace root, you review the output.

**B. Ask me to deepen the audit to a 10/10 first** — I read the files I skipped (tokens.ts, STYLE-GUIDE.md, the Codex attempt, withremy.css, and 5 more component files), then update this report.

**C. Answer the 10 open questions in section 6 first** — those answers will sharpen the Phase 1 plan and prevent rework.

**D. Modify the proposed phasing** — if you disagree with the order or want different deliverables, tell me now before I commit code.

I recommend **C, then A** — the open questions are cheap to answer and they shape every phase that follows.
