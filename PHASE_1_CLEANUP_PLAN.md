# Phase 1 — Cleanup Plan (Safe, Sequential, Non-Destructive)

> **Status:** Awaiting your approval. No file in this plan has been moved, created, or modified yet.
> **Hard constraint:** The `sendPUSH-PRODUCTION/` folder is an exact replica of the live site at `sendpush.loyaltymaster.com`. **Nothing in this plan touches `sendPUSH-PRODUCTION/` source code until Phase 4** — confirmed by your Q8 answer.
> **Date:** 2026-05-18

---

## 1. The principle we are following

> *Build the new design system as a sibling at the workspace root. Move (never delete) old attempts to `_archive/`. Treat `sendPUSH-PRODUCTION/` as read-only. Verify after every step.*

Every action below is reversible. We use `git mv` / `mv` (never `rm`) for relocations, and every new file lives in a new directory at the workspace root. If anything looks wrong, we can stop and restore in one step.

---

## 2. The decisions locked in (from your Q&A)

| # | Decision |
|---|---|
| Q1 | Build the design system at the workspace root as a sibling. `sendPUSH-PRODUCTION/` stays the live replica. The new system later updates content on `loyaltymaster.com`. |
| Q2 | After Phase 1 is approved, move `Loyaltymaster Design System V1.0/` and `RAW/.../Codex sendpush page creator/` into `/_archive/`. |
| Q3 | Trust the 20 `/Components/` snapshots; clean them up rather than re-extracting from live routes. |
| Q4 | **DTCG v1.0 JSON** as the canonical token format. CSS / TS / Tailwind generated from it. |
| Q5 | React: server-default; each component declares `clientBoundary` in the registry. |
| Q6 | Showcase site: **static HTML at workspace root**, not a Next.js route. |
| Q7 | **Skip Zod for now.** Use TS types + JSON Schema. Add Zod later if a Normalizer is built. |
| Q8 | `sendPUSH-PRODUCTION/` source is **untouched until Phase 4**. |
| Q9 | Two waves: Wave 1 = 20 `/Components/` snapshots; Wave 2 = page-level sections from `src/site-pages/`. **Awaiting your confirmation.** |
| Q10 | Impeccable.style is research only; safe to ignore for the canonical system. |

---

## 3. The target folder structure (what we are building toward)

After all of Phase 1 + Phase 2 is complete, the workspace will look like this:

```
/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/
│
├── README.md                        # NEW — entry point for humans
├── READ_FIRST_AI.md                 # NEW — entry point for AI LLMs (one-page contract)
├── BRAND.md                         # NEW — consolidated from PRODUCT.md
├── DESIGN_SYSTEM.md                 # NEW — consolidated from DESIGN.md + V1.0 README.md
├── PREFLIGHT.md                     # NEW — promoted from RAW/.../prompts:preflight-new-page.md
├── PHASE_0_AUDIT.md                 # already exists
├── PHASE_1_CLEANUP_PLAN.md          # this file
│
├── tokens/                          # NEW (Phase 2)
│   ├── design-tokens.json           # DTCG v1.0 — single source of truth
│   ├── tokens.css                   # generated — CSS variables
│   ├── tokens.d.ts                  # generated — TypeScript types
│   ├── tailwind.preset.cjs          # generated — Tailwind preset
│   └── README.md                    # how to regenerate the derived files
│
├── registry/                        # NEW (Phase 2)
│   ├── components.json              # canonical machine-readable component manifest
│   ├── components.schema.json       # JSON Schema for the manifest
│   └── README.md
│
├── specs/                           # NEW (Phase 3)
│   └── components/
│       ├── button.md                # 8-section spec
│       ├── hero-main-section.md
│       └── ... (20 total)
│
├── library/                         # NEW (Phase 4)
│   ├── package.json
│   ├── src/
│   │   ├── components/              # 20 clean React components (token-driven)
│   │   ├── index.ts
│   │   └── types.ts                 # imports from /tokens/tokens.d.ts
│   └── README.md
│
├── showcase/                        # NEW (Phase 5)
│   ├── index.html                   # static showcase, reads registry/components.json
│   └── assets/                      # links to /assets, not duplicates
│
├── assets/                          # NEW canonical location
│   ├── logos/                       # 6 sendPUSH + Loyaltymaster logos
│   ├── fonts/                       # Rodger family OTF
│   ├── partners/                    # 12 partner badges, ONE naming convention
│   └── screenshots/                 # 20 component PNGs (moved from /Components/)
│
├── examples/                        # already exists, currently empty
│   ├── approved/                    # to be populated in Phase 6
│   └── blocked/                     # to be populated in Phase 6
│
├── _archive/                        # NEW (Phase 1, Step 3)
│   ├── Loyaltymaster Design System V1.0/     # moved (not deleted)
│   ├── Codex_sendpush_page_creator/          # moved (not deleted)
│   └── ARCHIVE_README.md                     # why these are here, what they contained
│
├── Components/                      # READ-ONLY after Phase 1 Step 6 — the raw snapshots
│                                    # PNG files become canonical screenshots in /assets/screenshots/
│                                    # TSX files are NOT used by the library (library is rebuilt clean)
│
└── RAW/                             # UNTOUCHED — your working folder
    └── Pre-Flight - New Page Creation/
        ├── sendPUSH-PRODUCTION/     # NEVER MODIFIED until Phase 4
        └── ... (all other RAW content stays as-is)
```

> **Why this structure?** It separates the *new clean system* (workspace root) from the *live site replica* (sendPUSH-PRODUCTION) from *historical attempts* (\_archive) from *raw working notes* (RAW). An AI LLM reading the workspace can be pointed at the root and never get confused by the older parallel attempts.

---

## 4. Phase 1 — Step-by-step cleanup plan

Each step lists: **What** (the action), **Why** (the problem it solves), **How** (concrete commands or files), **Risk** (what could break), **Verify** (how we confirm it worked). No step is executed until you say go.

---

### **STEP 1 — Create the `_archive/` folder with a README**

**What:** Create `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/_archive/` and add an `ARCHIVE_README.md` explaining the purpose.

**Why:** We need a destination before we start moving anything. The README sets expectations that this is historical material, not authoritative.

**How:**
- Create the folder.
- Write `_archive/ARCHIVE_README.md` documenting: (a) why files are archived, (b) the date of archival, (c) which canonical files supersede them, (d) "do not import from `_archive/` in any new code."

**Risk:** None. Pure additive operation.

**Verify:** `ls _archive/` shows the README. `cat _archive/ARCHIVE_README.md` shows the doc.

---

### **STEP 2 — Move `Loyaltymaster Design System V1.0/` to `_archive/`**

**What:** Relocate the V1.0 folder. **First**, extract its most valuable content (README.md, SKILL.md, the preview/ HTML specimens) into the new canonical locations.

**Why:** V1.0 contains your deepest brand/visual reference and ~20 on-token HTML specimens — we cannot just archive it without harvesting first. After harvesting, the original folder belongs in `_archive/` so it doesn't become a competing source of truth.

**How (in order):**
1. **First, harvest:**
   - The V1.0 `README.md` content gets merged into the new root `DESIGN_SYSTEM.md` (Phase 1 Step 7 below).
   - The V1.0 `SKILL.md` becomes the basis for the new root `READ_FIRST_AI.md`.
   - The V1.0 `preview/*.html` specimens get **copied** (not moved) into `showcase/preview/` as reference inputs for the future showcase site.
   - The V1.0 `assets/logos/` and `assets/fonts/` and `assets/partners/` get **copied** to the new root `/assets/logos/`, `/assets/fonts/`, `/assets/partners/` (Step 4 below).
   - The V1.0 `colors_and_type.css` is preserved as a reference input for `tokens/tokens.css` generation.
2. **Then move:** `mv "Loyaltymaster Design System V1.0" "_archive/Loyaltymaster Design System V1.0"`

**Risk:** Low. The harvesting copies, not moves. The final `mv` only happens after harvesting. Nothing is deleted.

**Verify:**
- `ls _archive/Loyaltymaster\ Design\ System\ V1.0/` shows the original contents intact.
- `ls assets/logos/` shows the 6 logo PNGs at the new canonical location.
- `ls showcase/preview/` shows the HTML specimens at the new location.

---

### **STEP 3 — Move `Codex sendpush page creator/` to `_archive/`**

**What:** Archive the Claude Design / Codex handoff bundle.

**Why:** Per your Q10 confirmation that impeccable.style was research only, and per the bundle's own README (it's a handoff package for a coding agent, not a design system in its own right). Keeping it visible at the root creates AI confusion.

**How:**
- Scan its `README.md` and `project/` HTML prototypes quickly for any layout patterns we haven't already captured. If anything novel exists, note it in `_archive/ARCHIVE_README.md` so we can revisit.
- `mv "RAW/Pre-Flight - New Page Creation/Codex sendpush page creator" "_archive/Codex_sendpush_page_creator"`
- Note: the folder name in `_archive/` uses underscores to avoid future path-quoting issues.

**Risk:** None. Pure relocation. The bundle continues to exist, just moved.

**Verify:** `ls _archive/Codex_sendpush_page_creator/` shows the bundle intact.

---

### **STEP 4 — Canonicalize `/assets/` at the workspace root**

**What:** Establish `/assets/logos/`, `/assets/fonts/`, `/assets/partners/`, `/assets/screenshots/` as the *only* canonical asset location. Use kebab-case filenames (`apple-pay.webp`, `clover-pos.webp`).

**Why:** Today the same partner logos exist with 3 different naming conventions across V1.0, sendPUSH-PRODUCTION/public/assets/remy/, and the loose `sendPUSH-PRODUCTION/*.webp` files. An AI consuming the design system needs one path and one filename.

**How:**
1. **Copy** the V1.0 assets (already kebab-case) to the new `/assets/` root.
2. Copy the 20 component PNG previews from `/Components/<Name>/<Name>.png` to `/assets/screenshots/` with kebab-cased filenames (e.g. `hero-main-section.png`, `faq-accordion.png`).
3. The duplicates inside `sendPUSH-PRODUCTION/` are left untouched (per Q8 — that's the live replica).
4. Document in `assets/README.md`: filenames are kebab-case; all references must use these paths; do not duplicate elsewhere.

**Risk:** Low. We are *copying*, not moving, from V1.0 (which is already going to `_archive/` in Step 2) and from `/Components/` (which stays read-only). The live site continues to reference its own copies in `sendPUSH-PRODUCTION/public/`, unaffected.

**Verify:**
- `ls assets/logos/` returns 6 files.
- `ls assets/partners/` returns 12 files, all kebab-case.
- `ls assets/screenshots/` returns 20 PNGs.
- `ls assets/fonts/` returns the full Rodger family OTF.

---

### **STEP 5 — Fix the obvious filename/extension bugs in `/Components/`**

**What:** Address the 3 file-hygiene defects flagged in the audit, without changing component code yet.

**Why:** Even though we are going to rebuild components in `/library/` in Phase 4, the `/Components/` folder remains as the canonical raw snapshot source. Fixing names now prevents future confusion.

**How:**
1. `Components/FAQ Accordion/FAQ Accordion.txt` → rename to `FAQ Accordion.tsx`. Verify it parses as TypeScript (it should — txt is just the extension). If it doesn't parse, leave as `.txt` and flag in the registry as "raw text source."
2. `Components/Button/Button.tsx` — file contents export `GeoFenceUseCase`. Decision needed:
   - **Option A (recommended):** Move the file to `Components/Geo Fence Use Case/Geo Fence Use Case.tsx` (it is genuinely a use-case section, not a button), and *also* move its PNG. Then create a new `Components/Button/Button.tsx` placeholder in Phase 4 when we build a real Button component from scratch using DESIGN.md rules.
   - **Option B:** Leave it for now; the registry will mark it as "mislabelled — actual export is GeoFenceUseCase" so AI consumers are warned.
   - **My pick:** A — the folder name should match the component.
3. `Components/Stats Card Strip/Stats Cards Strip.tsx` — folder is singular, file is plural. Rename the file: `Stats Cards Strip.tsx` → `Stats Card Strip.tsx`. (Folder name is the canonical name; "Card" singular reads better as a component name.)

**Risk:** Very low. These files are not imported by `sendPUSH-PRODUCTION/`. Spot-check before each rename that no production file references them.

**Verify:**
- Run a grep across `sendPUSH-PRODUCTION/src/` for any import of these `/Components/` paths. None should exist (they're standalone snapshots).
- After rename, confirm the file still loads as TS in an editor.

---

### **STEP 6 — Tag `/Components/` as read-only raw source**

**What:** Add a `Components/README.md` declaring this folder is the **raw snapshot source**, not the consumer-facing library. Make it explicit that AI tools should consume `/library/` and `/registry/`, never `/Components/` directly.

**Why:** We are keeping `/Components/` because (a) you said trust them and clean them up (Q3), (b) they are paired with reference PNGs that future contributors will want to compare against. But we cannot let AI tools mistake them for the canonical implementation — they have hardcoded hex, partial extractions, and naming bugs.

**How:**
- Write `Components/README.md` stating:
  > These are reference snapshots extracted from the live production site. They are NOT the consumer library. They are kept for visual reference (the PNG files) and for re-extraction in case a component needs to be rebuilt. **Do not import code from here.** Use `/library/src/components/` instead. Tokens in these files use hardcoded hex values that drift from `/tokens/design-tokens.json`.

**Risk:** None. Just a README.

**Verify:** `cat Components/README.md` shows the warning.

---

### **STEP 7 — Consolidate the canonical brand + design docs at the workspace root**

**What:** Produce four new root-level files by merging existing material:
1. `BRAND.md` — from `RAW/.../sendPUSH-PRODUCTION/PRODUCT.md` (verbatim, with light edits to remove sendPUSH-PRODUCTION-specific paths).
2. `DESIGN_SYSTEM.md` — merge of `RAW/.../sendPUSH-PRODUCTION/DESIGN.md` (token YAML frontmatter + 6 sections) and the deeper visual content from `Loyaltymaster Design System V1.0/README.md` (animation, hover/press, borders, transparency, corner radii, layout, imagery, iconography sections).
3. `PREFLIGHT.md` — from `RAW/.../prompts:preflight-new-page.md` verbatim, with paths updated to the new workspace root structure.
4. `READ_FIRST_AI.md` — a short (target ≤ 80 lines) "AI operating manual" that links to the above three and the upcoming `/tokens/`, `/registry/`, `/specs/` directories. This is the file every AI LLM reads first.

**Why:** Today the brand/design knowledge is split across 4–5 files, two of which are buried under `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/`. An AI shouldn't have to traverse that path. The root of the workspace becomes the operating manual.

**How:**
- Read each source file in full first.
- Reconcile any conflicts between DESIGN.md and V1.0 README (the audit found very few; flag any I find when I encounter them — do not silently resolve).
- Write to new root paths.
- Each file gets a header citing its source so we know where the content came from.
- **The originals stay where they are.** This step copies + merges, not moves. The originals inside `sendPUSH-PRODUCTION/` continue to function for the live site's `/style-guide` route.

**Risk:** Low — copying and rephrasing, no destructive operations. The risk is *correctness*: if I silently resolve a conflict between DESIGN.md and V1.0 README incorrectly, the canonical doc could be wrong. I will surface every conflict for your review before saving.

**Verify:**
- Each new root doc opens and renders correctly.
- A spot-check confirms specific facts (color hex codes, font names, anti-references) appear in the new docs unchanged.
- Run a diff in human review: open the new `DESIGN_SYSTEM.md` next to `DESIGN.md` and the V1.0 README. Sign-off only after you agree.

---

### **STEP 8 — Acknowledge the inconsistencies we are deliberately NOT fixing in Phase 1**

**What:** Document, in a new `KNOWN_ISSUES.md` at the workspace root, the inconsistencies we are *deferring* to later phases.

**Why:** Transparency. You should not be surprised in Phase 2 / 3 / 4 about issues that existed at the end of Phase 1. This file is the ledger.

**How:**
- List each deferred issue, with: what it is, why we're not fixing it now, which later phase will fix it.

The deferred list (after Phase 1 completes):

| Issue | Why deferred | Fixed in |
|---|---|---|
| 17/19 `/Components/*.tsx` files use hardcoded hex literals instead of CSS variables | The library in Phase 4 is being built clean; the snapshots in `/Components/` are kept as visual reference only | Phase 4 |
| Many `/Components/*.tsx` have `style={{ display: "none" }}` partial extractions | Same reason — rebuilt from scratch in the library | Phase 4 |
| Five overlapping token sources (DESIGN.md YAML + tokens.ts + withremy.css + wireframe-remy.css + tailwind.config) | These all live inside `sendPUSH-PRODUCTION/` which we cannot touch until Phase 4 | Phase 2 (new canonical source created); Phase 4 (production migrates) |
| `wireframe-remy.css` is ~4,500 lines, mostly unused | Same reason — read-only until migration | Phase 4 |
| `examples/approved/` and `examples/blocked/` folders are empty | Training data is populated after components are built so we can grade real outputs | Phase 6 |
| `.claude/commands/` is empty | Slash commands are written after the system is mature enough to be invoked | Phase 6 |
| Three different naming conventions for partner logos live inside `sendPUSH-PRODUCTION/` (kebab-case, Title Case, Snake_Case) | Read-only until Phase 4 | Phase 4 |
| The Codex bundle's HTML prototypes may contain layout patterns we haven't captured | Archive only; revisit if a future phase finds a gap | Optional later |

**Risk:** None. Pure documentation.

**Verify:** The doc exists and accurately mirrors this table.

---

### **STEP 9 — Phase 1 verification + self-rating (the gate before Phase 2)**

**What:** A short integration test of Phase 1 outputs before moving on.

**Why:** Catch silent drift before it compounds. I want to be wrong about something cheap (a typo) rather than expensive (an AI generating off-brand pages because the canonical doc is wrong).

**How:**
- Re-read each new root doc end-to-end.
- Re-list the workspace root: confirm structure matches section 3 of this plan.
- Confirm `sendPUSH-PRODUCTION/` modification timestamps are unchanged (proves we didn't touch it).
- Confirm `_archive/` contains the V1.0 folder and the Codex bundle intact.
- Generate a brief "Phase 1 Report" with file inventory, then self-rate 1–10 and explain what would make it a 10.

**Risk:** None. Read-only.

**Verify:** Phase 1 Report exists at `PHASE_1_REPORT.md`. You read it and approve before we proceed to Phase 2.

---

## 5. What this plan does NOT do

I want to be explicit about scope.

- **No file inside `sendPUSH-PRODUCTION/` is modified.** Not the docs, not the code, not the CSS, not the assets. Phase 4 changes this.
- **No file inside `RAW/` is moved** (other than the Codex bundle in Step 3). Your working notes folder stays as your working notes folder.
- **No design tokens are changed.** DTCG JSON is built in Phase 2, not Phase 1.
- **No React components are rebuilt.** Phase 4.
- **No showcase site is rendered.** Phase 5.
- **No skills or slash commands are wired up.** Phase 6.

If you want any of the above moved earlier, tell me and I'll re-sequence.

---

## 6. Risk register for Phase 1

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Silently mis-resolving a conflict between DESIGN.md and V1.0 README when merging into `DESIGN_SYSTEM.md` (Step 7) | Medium | High | Surface every conflict for your decision; do not auto-resolve. |
| Accidentally importing from `_archive/` later because we forget it's archived | Low | Medium | The `_archive/ARCHIVE_README.md` declares it as historical; `Components/README.md` and `READ_FIRST_AI.md` repeat the rule. |
| A `/Components/` file is referenced by `sendPUSH-PRODUCTION/` and we don't notice when renaming (Step 5) | Low | Low | grep for imports before each rename. The audit found no such references but we verify per-file. |
| Asset filename canonicalization (kebab-case) creates a path mismatch for some downstream consumer | Low | Low | The new `/assets/` is *additive*; sendPUSH-PRODUCTION continues to reference its own copies. Nothing breaks at the live site. |
| You disapprove of how the merged `DESIGN_SYSTEM.md` reads | Medium | Low | I will share the merged doc for your review before considering Step 7 complete. |

---

## 7. Time / effort estimate

This is just my best guess — single Cowork session, no parallel work:

| Step | Approx. tool calls | Approx. tokens consumed |
|---|---|---|
| 1. Create `_archive/` + README | 1–2 | small |
| 2. Harvest V1.0 + move to archive | 8–10 | medium |
| 3. Move Codex bundle | 2 | small |
| 4. Canonicalize `/assets/` | 5–8 | small |
| 5. Fix `/Components/` filenames | 5 | small |
| 6. Tag `/Components/` read-only | 1 | small |
| 7. Consolidate root docs | 6–10 | **largest** — careful merge work |
| 8. KNOWN_ISSUES.md | 1 | small |
| 9. Phase 1 verification | 4–6 | medium |

**Recommend doing Phase 1 in one session** so the workspace is in a consistent state at the end. If we split it, the workspace looks half-migrated and an AI tool could read it in a confused state.

---

## 8. Self-rating of this plan

**Rating: 8 / 10.**

### What's strong
- Sequenced for safety: every step is reversible, no destructive ops, sendPUSH-PRODUCTION untouched.
- Each step lists what could break and how to verify it didn't.
- The deferred-issues ledger (Step 8) keeps us honest about what's NOT being fixed.
- Q4–Q7 decisions made with reasoning, not just declared.

### What would make it a 10
- I haven't actually opened the conflicts between `DESIGN.md` and the V1.0 `README.md` to confirm "very few" — I'm relying on a smell-test from the audit. A 10/10 plan would do a side-by-side diff first and list each conflict here so Step 7 has zero surprises.
- I should have proposed a sanity test: pick *one* of the 20 components (e.g. Hero Main Section) and trace it end-to-end through Phase 1 (its PNG moves to `/assets/screenshots/hero-main-section.png`, its name is referenced in the registry shape, its merged doc references it) — proving the end-to-end pipeline works before doing the other 19. That's good engineering hygiene.
- I haven't named a specific git strategy. If `loyaltymaster-design-system/` is a git repo (I haven't checked), each step should land in its own commit so we can revert per-step.
- I should explicitly propose using `Agent` (Plan subagent or Explore subagent) for the DESIGN.md ↔ V1.0 README diff in Step 7 to keep my context window clean.

---

## 9. Confirmations needed before I start Phase 1

1. **You approve this plan as written.**
2. **You confirm Wave 1 / Wave 2 scope from Q9** (or change it to Wave 1 only for now).
3. **You approve Option A in Step 5** (rename `Button.tsx` → `Geo Fence Use Case` since it actually exports `GeoFenceUseCase`).
4. **Is this folder under git?** If so, I'll commit step-by-step. If not, I'll proceed without commits and you can manually `git init` later. (Quick check before Step 1.)
5. **Do you want me to do the DESIGN.md vs V1.0 README pre-merge diff as a 10/10 pre-step?** (Cheap — ~5 minutes of tool calls.) Strongly recommended.

Once 1–5 are confirmed, I'll execute Step 1 and check in. Each step closes with a small status update so you can stop me cleanly at any point.
