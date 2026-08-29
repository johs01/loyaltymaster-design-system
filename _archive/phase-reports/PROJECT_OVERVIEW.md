# Project Overview: loyaltymaster-design-system

## 1. Local Folder Identity

Local folder name: `loyaltymaster-design-system`

Local folder path: `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system`

Project / product name: Loyaltymaster Design System

Brand name: Loyaltymaster; product brand: sendPUSH | Loyaltymaster

Report URL: `https://loyalty.here.now/loyalty-ds-project-overview/`

Report file path: `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system/project-birds-eye-report/index.html`

Here Now site name: `loyalty-ds-project-overview`

Underlying Here Now publish slug: `lapis-sleet-d3zq`

## 2. Original Idea

The original idea was to create a private team knowledge base for the Loyaltymaster design system so humans and LLM tools can use the same source material before creating Loyaltymaster pages, outlines, components, or design-system updates.

Why this project was started: the files say it exists to prevent AI design drift and to give future AI agents canonical brand, token, component, template, and workflow rules before writing Loyaltymaster or sendPUSH content.

Who it was for: team members and AI agents working on Loyaltymaster/sendPUSH web pages, documents, landing pages, blog posts, sales pages, and subdomain content.

Problem it was meant to solve: inconsistent AI-generated pages, copied production code, invented components, duplicate site chrome, and drift away from the approved Loyaltymaster design language.

Expected end result: a living source of truth with approved design tokens, component registry entries, component specs, templates, examples, runbooks, generated proof packages, and validation commands.

Evidence: `README.md`, `AI_START_HERE.md`, `READ_FIRST_AI.md`, `EXTERNAL_LLM_HANDOFF.md`, `PREFLIGHT.md`, `registry/README.md`, and `templates/README.md`.

## 3. What This Project Is Now

This is a design-system knowledge repository plus a React component library and local showcase workspace.

Main user: a human or AI agent creating Loyaltymaster/sendPUSH content from approved rules.

Main user flow:

1. Start at `AI_START_HERE.md`.
2. Read the brand, design-system, preflight, token, registry, template, example, and runbook files.
3. Use Runbook A to create a Markdown outline before implementation.
4. Use Runbook B only after human approval to create route-agnostic production page packages.
5. Use `library/src/components/` as the clean implementation source, not `/Components/` or the protected production replica.

Product goal: keep future Loyaltymaster/sendPUSH pages consistent with the approved design system.

Business goal: make page creation faster and safer while preserving brand quality, conversion patterns, accessibility expectations, and reusable component discipline.

Main features visible from the files:

- Canonical brand and design-system docs.
- DTCG-style design tokens and generated CSS/TypeScript/Tailwind outputs.
- Machine-readable component registry with 33 component IDs.
- React component library workspace under `library/`.
- Vite-based showcase workspace under `showcase/app/`.
- Approved templates and generated proof packages for AI workflows.
- Runbook A/B workflow for no-code outline mode and approved outline-to-page builds.
- Phase reports through Phase 13 with validation history and remaining work.

## 4. Current Status

Status label: Orange: Partly built or unclear

Why: the repo appears usable as a design-system knowledge base and local component/showcase workspace, but this inspection intentionally did not run tests, builds, validation scripts, or a dev server. The working tree also has untracked files, so current cleanliness is not proven.

Completed:

- Root docs identify the repo as the Loyaltymaster Design System knowledge base.
- `AI_START_HERE.md`, `EXTERNAL_LLM_HANDOFF.md`, Runbook A, and Runbook B define the current AI workflow.
- `tokens/`, `registry/`, `specs/`, `templates/`, `examples/`, `library/`, and `showcase/app/` exist.
- `registry/components.json` currently lists 33 component IDs.
- GitHub remote is configured for `https://github.com/johs01/loyaltymaster-design-system`.

Partly completed:

- Phase 13 evidence exists for additional Loyaltymaster.com component patterns.
- The project has local validation commands, but they were not run during this inspect-only task.
- `showcase/app` has a Vite app and verification scripts, but the dev server was not started.

Missing:

- A verified current validation result from this session.
- A proven standalone public app URL for this repo itself, separate from the product reference URLs.
- A database/auth/hosting chain for this repo; no repo-level database or auth integration was found.

Broken or risky:

- Git status shows untracked files under `.understand-anything/` and `RAW/`.
- `.env` and `.env.local` files exist inside the protected production replica path; values were not read into this overview and must not be disclosed.
- The protected production replica under `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/` contains app/runtime material that the repo docs say must not be edited, imported from, or copied as a production source.

Can likely run locally: Yes, but unverified in this session.

Reason: `showcase/app/package.json` defines `dev`, `typecheck`, and verification scripts, and repo docs reference local review URLs such as `http://127.0.0.1:5177/template-tests/real-brief-trial`. The command was not run because the task explicitly prohibited starting the dev server.

## 5. Project Chain

Local folder:

- Status: Found
- Service / name: `loyaltymaster-design-system`
- Evidence: `pwd` returned `/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system`.
- Notes: non-generic folder name; no display-name clarification required by the source instructions.

Git:

- Status: Found
- Service / name: local Git repo on `main`
- Evidence: `git status --short --branch` returned `## main...origin/main`.
- Notes: untracked files are present.

GitHub:

- Status: Found
- Service / name: `johs01/loyaltymaster-design-system`
- Evidence: `git remote -v` and `gh repo view` returned `https://github.com/johs01/loyaltymaster-design-system`.
- Notes: `gh repo view` reported default branch `main` and `isPrivate: false`.

Hosting:

- Status: Unknown / not used for this repo
- Service / name: Unknown
- Evidence: no root Vercel or Netlify config was found for this design-system repo. A Vercel config exists only inside the protected production replica.
- Notes: this report will be hosted on Here Now after publishing.

Public app URL:

- Status: Unknown for this repo
- Service / name: Product reference URLs found
- Evidence: docs reference `https://sendpush.loyaltymaster.com/`, `https://sendpush.loyaltymaster.com/design-system-template-page`, and `https://loyaltymaster.com/`.
- Notes: those appear to be product/reference URLs, not a public deployment of this design-system repo.

Auth:

- Status: Not used / unknown for this repo
- Service / name: Unknown
- Evidence: no repo-level auth provider config was found. The protected production replica mentions API boundary rules and known server-only env names.
- Notes: do not infer active auth from the production replica.

Database:

- Status: Not used / unknown
- Service / name: Unknown
- Evidence: no repo-level database config was found.
- Notes: database use cannot be proven from the inspected root files.

APIs:

- Status: Referenced, mostly in protected production replica or docs
- Service / name: Cloudinary, ImageKit, Resend, Vercel Analytics/Speed Insights, Google Maps/Fonts references
- Evidence: env var names and package/config references in `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/`; `next.config.mjs`; `api/README.md`; package dependencies.
- Notes: this design-system repo should treat these as reference/project-context facts unless a future task targets the production app.

Other services:

- Status: Found
- Service / name: Here Now
- Evidence: current task required publishing the report through Here Now; credentials file was present at inspection time; published URL is `https://loyalty.here.now/loyalty-ds-project-overview/`.
- Notes: credentials were not disclosed. The requested full site name exceeded Here Now's 30-character link-location limit, so a clear shortened link name was used.

## 6. Important Links

GitHub repo: `https://github.com/johs01/loyaltymaster-design-system`

Public app URL: Unknown for this repo. Product reference URLs found: `https://sendpush.loyaltymaster.com/`, `https://loyaltymaster.com/`

Admin URL: Unknown

Local dev URL: likely `http://127.0.0.1:5177/` for documented showcase review URLs; not started or verified in this session

Vercel URL: Unknown for this repo

Here Now report URL: `https://loyalty.here.now/loyalty-ds-project-overview/`

API docs URL: Unknown

Other useful links:

- Raw outline pack URL referenced by prior repo context: `https://raw.githubusercontent.com/johs01/loyaltymaster-design-system/main/LLM_MARKDOWN_OUTLINE_PACK.md`
- Product template page reference: `https://sendpush.loyaltymaster.com/design-system-template-page`

## 7. Tech Stack

Main language: TypeScript / TSX, Markdown, JSON, CSS

Framework: React 18, Vite showcase app; protected production reference uses Next.js 16 App Router

Package manager: npm, based on `package-lock.json` files in `library/` and `showcase/app/`

Database: Unknown / not found for this repo

Auth provider: Unknown / not found for this repo

Hosting provider: Unknown / not used for this repo; report published through Here Now

API providers: no repo-level API provider proved; protected production replica references Cloudinary/ImageKit/Resend/Vercel-related services

Important packages:

- `react`
- `react-dom`
- `typescript`
- `vite`
- `@vitejs/plugin-react`
- `lucide-react`
- `@playwright/test`
- `pngjs`

## 8. Commands

Do not run these commands unless explicitly asked.

Install:

- `cd library && npm install`
- `cd showcase/app && npm install`

Start dev:

- `cd showcase/app && npm run dev -- --host 127.0.0.1 --port 5177`

Build:

- Unknown for the root repo
- Protected production replica has `npm run build`, but that is not the design-system repo build path

Test / validation:

- `node scripts/validate-runbook-poc-readiness.mjs`
- `node scripts/validate-phase2.mjs`
- `cd library && npm run typecheck`
- `cd showcase/app && npm run typecheck`
- `cd showcase/app && npm run verify:templates`
- `cd showcase/app && npm run verify:showcase`
- `cd showcase/app && npm run verify:visual`
- `cd showcase/app && npm run verify:interactions`
- `cd showcase/app && npm run verify:production-fidelity`

Deploy:

- Unknown for the repo itself
- This report uses Here Now link `loyalty-ds-project-overview` pointing to publish slug `lapis-sleet-d3zq`

## 9. Important Files And Folders

- `README.md`: states the repo purpose and start-here files.
- `AI_START_HERE.md`: current entry point for external AI agents.
- `EXTERNAL_LLM_HANDOFF.md`: handoff workflow for Codex, Claude, Gemini, ChatGPT, and similar agents.
- `READ_FIRST_AI.md`: core AI operating manual.
- `PREFLIGHT.md`: mandatory planning workflow before creating new pages.
- `BRAND.md`: audience, brand naming, voice, product purpose, and anti-references.
- `DESIGN_SYSTEM.md`: visual system, tokens, typography, motion, component and layout rules.
- `LLM_MARKDOWN_OUTLINE_PACK.md`: copy-paste no-code outline prompt wrapper.
- `RUNBOOK_A_PAGE_TO_MARKDOWN_OUTLINE.md`: canonical Markdown outline workflow.
- `RUNBOOK_B_MARKDOWN_OUTLINE_TO_PRODUCTION_PAGE.md`: approved outline-to-page package workflow.
- `tokens/`: canonical token source and generated outputs.
- `registry/components.json`: machine-readable approved component registry.
- `registry/README.md`: registry authority and rules.
- `specs/`: component usage specs.
- `templates/`: approved AI recipe layer.
- `examples/`: approved, blocked, and generated proof packages.
- `Components/`: approved component reference and MagicPath visual handoff archive, not runtime import source.
- `library/`: clean React component implementation workspace.
- `showcase/app/`: local rendered showcase and verification workspace.
- `scripts/`: root validation scripts.
- `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/`: protected production reference replica; do not edit or import from unless explicitly approved.
- `.claude/commands/loyaltymaster-validate.md`: local AI validation command doc.
- `PROJECT_OVERVIEW.md`: living memory file created by this task.
- `project-birds-eye-report/index.html`: standalone public report created by this task.

## 10. Known Bugs, TODOs, And Risks

Known bugs: Unknown from this inspect-only session; no tests or validation commands were run.

Known TODOs:

- Review untracked `.understand-anything/` and `RAW/` files and decide whether they belong in the repo.
- Run validation commands in a future non-inspect task.
- Keep Runbook A/B, registry, specs, library, templates, and examples aligned when any component changes.
- Clarify whether this design-system repo should have its own public hosted showcase, or whether `showcase/app` remains local-only.

Risks:

- Public reporting must not expose values from `.env`, `.env.local`, private keys, tokens, or passwords.
- The production replica includes runtime app files and env files but is documented as protected reference material.
- Older phase docs can become stale; prefer current root docs, registry, tokens, specs, library, and git state before making implementation decisions.
- Some public product URLs belong to Loyaltymaster/sendPUSH, not this repo deployment.

Unknowns:

- Whether the current untracked RAW/Understand files should be committed, ignored, or removed.
- Whether validation currently passes on this exact working tree.
- Whether this repo has a permanent public hosting target beyond this Here Now report.

Secrets were not disclosed. Env var names may be shown, but values must never be shown.

Important environment variables found by name only:

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT`
- `VITE_IMAGEKIT_PUBLIC_KEY`

## 11. Roadmap

Now:

- Use `PROJECT_OVERVIEW.md` as the first-stop project memory file.
- Publish and use the Here Now bird's-eye report for quick context.
- Decide what to do with current untracked files.

Next:

- Run the repo's validation commands in a task that allows tests/validation.
- If continuing page creation, start with `AI_START_HERE.md` and Runbook A.
- If continuing component system work, reconcile current registry/spec/library/showcase evidence before implementation.

Later:

- Decide whether the design-system showcase should be published separately.
- Continue production-adoption planning without editing protected production sources.
- Keep generated proof packages aligned with the current approved component registry.

Likely next phase: validation and cleanup triage for untracked files, followed by whichever page/component workflow is currently active.

What should be built next: Unknown without a new user brief. If the goal is site conversion, use Runbook A first and stop at a Markdown outline for approval.

What should be cleaned up next: untracked local files and any stale report memory after publication.

What should not be changed without permission: protected production replica files, runtime page code, approved registry/spec/library contracts, and existing component behavior.

Risks to watch: design drift, invented components, duplicate navbar/footer output, stale phase docs, and accidental secret exposure.

## 12. Start Here Next Time

Read PROJECT_OVERVIEW.md first. Then inspect the current folder and tell me what changed since the last update. Do not change code. Do not run tests, builds, or the dev server unless I explicitly approve it. After that, help me continue with: triage the untracked files and confirm whether the design-system registry, runbooks, and showcase are still aligned with the latest git state.

## 13. Last Updated

Last updated date: 2026-06-01 09:11:21 SAST

Updated by: Codex

Inspection mode: Inspect only. No tests, builds, or dev server runs.
