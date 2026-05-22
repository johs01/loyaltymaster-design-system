# sendPUSH-PRODUCTION Working Notes

This repo is now a Next.js App Router project. Treat this file as a lightweight
orientation note, not live truth; re-read the actual files before editing.

## Current Architecture

- Routes live under `app/**/page.tsx`.
- Shared page composition lives in `src/next/SitePage.tsx`.
- Reusable page bodies live in `src/site-pages/` so Next does not mistake them
  for Pages Router routes.
- API endpoints live in `app/api/*/route.ts`.
- Security headers, redirects, and env taxonomy checks live in `next.config.mjs`.
- Public client env vars use `NEXT_PUBLIC_*`; server secrets must not.

## Important Workflow Rules

- Use `AGENTS.md` for source-to-page work.
- Use global Codex worktrees for migration/refactor work unless the repo already
  has an ignored `.worktrees/` convention or the user explicitly asks for
  project-local worktrees.
- Preserve production behavior and validate with `npm run typecheck`,
  `npm run lint`, `npm run build`, route smoke checks, and Vercel preview checks.

## Key Files

- `app/layout.tsx` — root HTML shell, global CSS, scripts.
- `src/next/metadata.ts` — Next metadata and sitemap helpers.
- `src/next/SitePage.tsx` — client-side page shell and route body selection.
- `src/server/withApi.ts` — shared API wrapper.
- `next.config.mjs` — security headers, redirect, and env guardrails.
