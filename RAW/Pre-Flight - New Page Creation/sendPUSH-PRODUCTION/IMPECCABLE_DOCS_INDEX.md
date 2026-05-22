# Impeccable Docs Index

Compact internal index for LLM agents working in this repository. Use this before any Impeccable-driven design, page, or visual QA work.

## Source Of Truth

- Project skill entrypoint: `/Users/johs777/.codex/worktrees/8801/sendPUSH-PRODUCTION/.agents/skills/impeccable/SKILL.md`
- Project command references: `/Users/johs777/.codex/worktrees/8801/sendPUSH-PRODUCTION/.agents/skills/impeccable/reference/*.md`
- Project context loader: `/Users/johs777/.codex/worktrees/8801/sendPUSH-PRODUCTION/.agents/skills/impeccable/scripts/load-context.mjs`
- Project command metadata: `/Users/johs777/.codex/worktrees/8801/sendPUSH-PRODUCTION/.agents/skills/impeccable/scripts/command-metadata.json`
- Project lockfile: `/Users/johs777/.codex/worktrees/8801/sendPUSH-PRODUCTION/skills-lock.json`
- Global fallback skill: `/Users/johs777/.agents/skills/impeccable/SKILL.md`
- Upstream docs lookup: Context7 library `/pbakaus/impeccable`
- CLI help: `npx impeccable --help`

If these sources disagree, prefer the installed local skill for current agent behavior, then use Context7 or official CLI output to check whether the local skill needs updates.

## Update Check Requirement

Before using Impeccable for design or page-building work, make sure the Impeccable skills do not need updates.

Required checks:

1. Run `npx impeccable --version` and `npx impeccable --help`.
2. Run `npx impeccable skills check`.
3. Query Context7 for `/pbakaus/impeccable` when command behavior, file format, or update guidance matters.
4. If the CLI reports updates available, missing project installation, or any other unclear state, stop and ask the user before running `npx impeccable skills update` or `npx impeccable skills install`.

Last observed check in this worktree on 2026-05-08 after project-level install and update:

- `npx impeccable --version` returned `2.1.8`.
- `npm view impeccable version` returned `2.1.8`.
- `npx impeccable skills install --yes` installed the project skill to `.agents/skills/impeccable`.
- `npx impeccable skills update --yes` updated 1 skill.
- `npx impeccable skills check` returned: `Skills are up to date.`
- `skills-lock.json` records `pbakaus/impeccable` with computed hash `8cdf2e788eaca3af7d02026ef9cec55b506100a00d130f938e3fb1ad669c0ad0`.

Do not claim Impeccable is up to date unless the update check actually confirms it.

## Context Files

- `PRODUCT.md` is required. It defines register, users, purpose, brand personality, anti-references, strategic principles, and accessibility baseline.
- `DESIGN.md` is strongly recommended. It defines visual system tokens and the six required sections: Overview, Colors, Typography, Elevation, Components, Do's and Don'ts.
- `.impeccable/design.json` is the structured sidecar for data that does not fit the `DESIGN.md` frontmatter: color metadata, typography metadata, shadows, motion, breakpoints, component render examples, and narrative rules.

Always load context with:

```bash
node /Users/johs777/.codex/worktrees/8801/sendPUSH-PRODUCTION/.agents/skills/impeccable/scripts/load-context.mjs
```

Consume the full JSON output. Do not pipe it through `head`, `tail`, `grep`, or `jq`. Re-run the loader after `teach`, `document`, or manual edits to `PRODUCT.md` or `DESIGN.md`.

## Required Preflight

Before editing files for an Impeccable task, confirm:

- Context loader result is known.
- `PRODUCT.md` exists and is not empty, placeholder, or under 200 characters.
- `DESIGN.md` exists when on-brand visual work is expected; if missing, nudge once to run `impeccable document`.
- The register is known: `brand` for marketing/pages/content, `product` for app UI/tools/dashboards.
- The exact command reference is loaded before using a subcommand.
- `teach` creates project context only. It is not a confirmed `shape` brief.
- `craft` requires a user-confirmed `shape` brief before implementation.
- The Impeccable update check has been performed, and no install/update action is taken without user approval.

Codex-style preflight line before edits:

```text
IMPECCABLE_PREFLIGHT: context=pass product=pass command_reference=pass shape=pass|not_required image_gate=pass|skipped:<reason> mutation=open
```

## Command Index

Build and setup:

- `teach`: create or refresh `PRODUCT.md`; may lead to `document`.
- `document`: generate `DESIGN.md` and `.impeccable/design.json` from existing design code.
- `shape [feature]`: plan UX/UI and produce a user-confirmed brief.
- `craft [feature]`: run shape, then build and visually iterate.
- `extract [target]`: pull repeated patterns into reusable tokens/components.

Evaluate:

- `critique [target]`: UX/design review with heuristic scoring and AI-slop checks.
- `audit [target]`: technical quality audit for a11y, performance, responsive behavior, and anti-patterns.
- `polish [target]`: final alignment, spacing, consistency, and micro-detail pass.

Refine:

- `bolder [target]`: make a safe or bland design more distinctive.
- `quieter [target]`: reduce overly loud or aggressive design.
- `distill [target]`: simplify and remove nonessential UI.
- `harden [target]`: handle edge cases, errors, overflow, i18n, and production resilience.
- `onboard [target]`: improve first-run flows, empty states, and activation.

Enhance:

- `animate [target]`: add purposeful motion and micro-interactions.
- `colorize [target]`: add strategic color to monochromatic or dull UI.
- `typeset [target]`: improve type scale, hierarchy, font use, and readability.
- `layout [target]`: improve spacing, rhythm, composition, and hierarchy.
- `delight [target]`: add memorable details that support the experience.
- `overdrive [target]`: push the design with technically ambitious visuals or interactions.

Fix:

- `clarify [target]`: improve UX copy, labels, instructions, and errors.
- `adapt [target]`: adapt UI for mobile, tablet, print, or other contexts.
- `optimize [target]`: diagnose and fix UI performance.
- `live`: browser-based visual variant mode. Requires a running dev server.

## sendPUSH Route Context

For this repository, `/design-system-template-page` is the primary website component inventory route. It resolves through `src/next/SitePage.tsx` to `DesignSystemTemplatePage`.

Use that route to understand the reusable website sections before creating or modifying brand pages:

- `HeroSection`
- `LocalHeroBanner`
- `AwardsStrip`
- `LogoGrid`
- `StatsSection`
- `ProblemSection`
- `TestimonialSection`
- `UseCaseSection`
- `FeaturesSection`
- `ComparisonSection`
- `ServiceAreaSection`
- `PricingSection`
- `ProcessSection`
- `FaqSection`
- `GoogleMapEmbed`
- `FinalCtaSection`
- `TenantTrialSection`

The app shell already provides `Nav`, `Footer`, skip link, and theme live region. For source-to-page route bodies, do not add a navbar, header, or footer unless the user explicitly asks.

## Local Design Sources To Re-Read

Before new page work in this repo, re-read:

- `src/design-system/*`
- `public/design-system/withremy/withremy.css`
- `public/wireframe-remy.css`
- `src/index.css`
- Any route, page, component, asset, or styling files needed for the target page.

Content from a user-provided source is sacred. Preserve visible text exactly. Use Cloudinary images or intentional placeholders. Responsive behavior is required.
