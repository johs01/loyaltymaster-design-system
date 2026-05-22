# END OF SESSION — HANDOFF PROMPT (2026-05-18)

> Paste the contents of section 6 below into the next Cowork session as your opening prompt. Everything above it is context for you to skim. Everything below it is what the next Claude needs.

---

## 1. Where we are

This is the second session of a multi-session project to build the **Loyaltymaster Design System** (humans + AI readable, future-proof, no drift). The end goal: every web page, document, landing page, blog post, and subdomain is built from the same component manifest, automatically on-brand, no AI guessing.

In this session we completed:
- ✅ **Phase 0 Audit** — saved at `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/PHASE_0_AUDIT.md`
- ✅ **Answered all 10 open questions** — decisions locked in
- ✅ **Phase 1 Cleanup Plan** — saved at `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/PHASE_1_CLEANUP_PLAN.md`
- ✅ **Plan approved by Harry** — ready to execute
- ✅ **Memory updated** — all decisions persist across sessions

We stopped here because the previous session hit 90% of its capacity. **No files inside the workspace folder have been moved, renamed, copied, or modified yet.** The plan is approved but unexecuted.

---

## 2. The exact next action

**Step 0 (pre-step for a 10/10 plan):** Do a side-by-side diff of `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/DESIGN.md` vs `Loyaltymaster Design System V1.0/README.md` to surface every conflict before merging them in Phase 1 Step 7. Harry approved this as the first action.

**After Step 0:** Execute Phase 1 Steps 1–9 in order, exactly as written in `PHASE_1_CLEANUP_PLAN.md`. Each step closes with a status update so Harry can stop cleanly between steps.

---

## 3. Locked-in decisions (do not re-litigate)

| # | Decision |
|---|---|
| Q1 | Build the design system at the workspace root as a sibling. `sendPUSH-PRODUCTION/` stays the live replica, untouched until Phase 4. |
| Q2 | After Phase 1, move `Loyaltymaster Design System V1.0/` and `RAW/.../Codex sendpush page creator/` to `_archive/`. |
| Q3 | Trust the 20 `/Components/` snapshots; clean them up rather than re-extracting from live routes. |
| Q4 | **DTCG v1.0 JSON** as the canonical token format. CSS / TS / Tailwind generated from it. |
| Q5 | React: server-default. Each component declares `clientBoundary` in the registry. |
| Q6 | Showcase: static HTML at workspace root, not a route in sendPUSH-PRODUCTION. |
| Q7 | Skip Zod. Use TS types + JSON Schema in the registry. |
| Q8 | sendPUSH-PRODUCTION code untouched until Phase 4. |
| Q9 | Two waves — Wave 1 = 20 `/Components/`, Wave 2 = `src/site-pages/`. |
| Q10 | Impeccable.style was research only; ignore it. |

**Plus:** Approved to rename mislabelled `Button.tsx` → new folder `Components/Geo Fence Use Case/` (it actually exports `GeoFenceUseCase`).

**Git:** The workspace folder is **NOT** a git repo. Only `sendPUSH-PRODUCTION/` is conceptually a git project, and its real git history lives elsewhere. **Do not run `git commit` from this workspace.** Reversibility comes from "move not delete" and `_archive/`.

---

## 4. Critical context already in memory

These memory files persist across sessions and are auto-loaded:

- `MEMORY.md` (index)
- `project_loyaltymaster_design_system.md` — vision, phase status, workspace context
- `project_loyaltymaster_decisions.md` — all 10 locked decisions
- `project_sendpush_brand.md` — brand voice, palette, typography, anti-references
- `project_loyaltymaster_tech_stack.md` — Next.js 16 + React 18 + Tailwind 3 + DTCG
- `reference_loyaltymaster_files.md` — file map of canonical sources
- `feedback_user_working_style.md` — Harry's working preferences

---

## 5. What to NOT do at the start of next session

- **Do not re-run the Phase 0 audit.** It's done. Read `PHASE_0_AUDIT.md` if needed.
- **Do not re-ask the 10 open questions.** They're answered. Read `project_loyaltymaster_decisions.md`.
- **Do not re-draft the cleanup plan.** It's approved. Read `PHASE_1_CLEANUP_PLAN.md`.
- **Do not start Phase 2 (tokens) or beyond.** We have not finished Phase 1 yet.
- **Do not touch anything inside `sendPUSH-PRODUCTION/`.** Locked by Q8.
- **Do not commit to git.** Workspace isn't a repo.

---

## 6. ⬇️  PASTE THIS INTO THE NEXT COWORK SESSION ⬇️

```
Continue the Loyaltymaster Design System project from where we left off on 2026-05-18.

CONTEXT TO READ FIRST (in this order, do not skip):
1. /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/END_OF_SESSION_HANDOFF_2026-05-18.md
2. /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/PHASE_1_CLEANUP_PLAN.md
3. /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/PHASE_0_AUDIT.md
4. Your own memory files (especially project_loyaltymaster_decisions.md and feedback_user_working_style.md).

STATE OF THE WORK:
- Phase 0 audit: complete.
- Phase 1 cleanup plan: written, approved by me, NOT YET EXECUTED.
- Nothing in the workspace folder has been moved, renamed, copied, or modified yet.
- All 10 open questions are answered and locked in — do not re-ask them.

YOUR EXACT NEXT ACTION:
Step 0 (pre-merge diff): Do a side-by-side diff of these two files and surface every conflict you find:
- /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/DESIGN.md
- /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/Loyaltymaster Design System V1.0/README.md

Report each conflict as: (a) what DESIGN.md says, (b) what V1.0 README says, (c) your recommended resolution and why. Wait for my approval on each conflict before merging them in Phase 1 Step 7.

Use a subagent (Explore or Plan) for the diff so your main context window stays clean.

AFTER STEP 0:
Execute Phase 1 Steps 1–9 in order as written in PHASE_1_CLEANUP_PLAN.md. Pause and give me a status update after each step so I can stop cleanly if needed.

CONSTRAINTS (HARD):
- Do NOT modify anything inside RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/ (it's the live site replica — Phase 4 problem).
- Do NOT run git commit from the workspace folder (it isn't a git repo).
- Do NOT delete files — only move to _archive/ or copy to new locations.
- Rate every substantive output 1–10 and explain what would make it a 10.
- Ask why if anything is unclear; flag uncertainty rather than guessing.

When you start, confirm you have read all four context files in section CONTEXT TO READ FIRST and that you understand the next action is Step 0 (the pre-merge diff), then proceed.
```

⬆️  END OF PASTE BLOCK ⬆️

---

## 7. Files referenced by this handoff (sanity-check list)

Before starting the next session, Harry should confirm these files still exist in the workspace folder:

- [ ] `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/PHASE_0_AUDIT.md`
- [ ] `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/PHASE_1_CLEANUP_PLAN.md`
- [ ] `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/END_OF_SESSION_HANDOFF_2026-05-18.md` (this file)
- [ ] `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/DESIGN.md`
- [ ] `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/PRODUCT.md`
- [ ] `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/Loyaltymaster Design System V1.0/README.md`
- [ ] `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/Loyaltymaster Design System V1.0/SKILL.md`

If any are missing, something has gone wrong outside the session — surface it before resuming.

---

## 8. Self-rating of this handoff

**Rating: 9 / 10.**

### What's strong
- Self-contained: a fresh Claude with no conversation history can resume cleanly from the paste block in section 6.
- Lists every locked decision so re-litigation is impossible.
- Lists every "do not" so the next Claude doesn't accidentally redo finished work.
- The next exact action is pinpointed (Step 0 — pre-merge diff), not vague.
- Sanity-check list in section 7 lets Harry verify nothing has gone wrong between sessions.
- Memory pointers ensure persistent context.

### What would make it a 10
- A direct file listing snapshot (`ls -la` output of the workspace root at session end) so the next Claude can detect any unexpected changes between sessions. I didn't capture this — recommend Harry runs `ls /Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/` himself before resuming and compares to what's in the audit's section 2.

---

**End of handoff. See you next session.**
