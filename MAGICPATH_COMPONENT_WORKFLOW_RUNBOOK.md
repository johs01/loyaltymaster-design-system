# Website-to-MagicPath Component Workflow Runbook

Date: 2026-05-27

This runbook explains a generic workflow for turning source website pages into
MagicPath canvas components and, after human approval, local handoff archives.
It is written for future agents and LLMs so the process can be repeated for
Loyaltymaster or replaced for another website without guessing.

The Loyaltymaster records in this file are examples from the completed run.
For a different website, replace the run values in Section 1 and follow the
same mechanism.

This is a visual handoff workflow. It does not create design-system registry
approval, does not edit approved component specs, and does not replace a
production implementation workflow unless the user explicitly asks for that.

## 1. Configure The Run

Before inspecting pages or creating components, define these values for the
current website/component batch:

| Value | Generic meaning | Loyaltymaster example |
|---|---|---|
| Source website | Website or app being inspected for missing component patterns | `https://loyaltymaster.com/` |
| Component inventory root | Local folder where approved evidence and handoff folders are stored | `Components/` |
| MagicPath project name | Canvas project where new components are created | `SendPUSH ALL SECTIONS - PROD` |
| MagicPath project ID | Project ID used by `magicpath-ai code start` and `list-components` | `382091404937150464` |
| Visual reference component | Existing design that defines the target visual language | `MAIN - Multi-Section Example Page` |
| Visual reference generated name | MagicPath generated name for the visual reference | `sunny-breeze-9281` |
| Visual reference component ID | MagicPath component ID for the visual reference | `387462742187057152` |
| Shell scope | Whether generated components include global website shell | Body-only for the Loyaltymaster run |
| Approval authority | Who confirms a MagicPath design is ready to export | Human approval in chat |

For another website, do not reuse the Loyaltymaster project, visual reference,
or body-only rule unless the user explicitly wants that. The run values must
match the new website, brand, project, and approval process.

## 2. Source Website Discovery

Use browser automation to understand the source website before creating any
component folders.

- Use the Browser skill for interactive inspection when visible page state,
  menus, tabs, overlays, or logged-in context matter.
- Use Playwright for repeatable page capture, viewport checks, screenshots,
  and page-state verification.
- Capture desktop and mobile evidence for each source page.
- Hide unrelated global chrome where possible: navbar, header, footer, cookie
  banner, chat widgets, floating controls, and overlays.
- Respect the current run's shell scope. If the target output is body-only,
  capture and design only the page body. If it is a standalone page, capture
  the required shell too.
- Do not copy the source website's old styling blindly. Treat screenshots as
  evidence for structure, content patterns, hierarchy, states, and missing
  component needs.

Compare the source pages against the target system of record. Depending on the
project, that may include:

- an approved component registry
- design-system docs and tokens
- existing specs and library components
- approved and blocked examples
- brand guidelines
- source-page briefs or user-provided screenshots

If the current approved system cannot express a needed page pattern without
inventing new layout, styling, variants, or interaction behavior, create
candidate evidence for review instead of using an unsupported substitute.

For the Loyaltymaster run, the source evidence came from live
`loyaltymaster.com` pages captured with Playwright at desktop and mobile
viewports. The related evidence report is
`PHASE_13_APPROVED_COMPONENT_EVIDENCE_REPORT.md`.

## 3. Component Folder Mechanism

Create one folder for each component under the configured component inventory
root:

```text
<Component Root>/<Component Name>/
```

For the Loyaltymaster run, that was:

```text
Components/<Component Name>/
```

Each component folder should contain:

```text
README.md
Source URLs.md
New Component Request.md
screenshots/
```

The `screenshots/` folder should include:

```text
desktop.png
mobile.png
<source-url-slug>-desktop.png
<source-url-slug>-mobile.png
```

The component request packet should explain:

- source URLs inspected
- screenshots captured
- why existing approved components were rejected
- relevant registry, token, brand, or visual-reference evidence
- examples or old styling that must not be copied
- intended shell scope
- expected component behavior and responsive needs

Loyaltymaster component folders in `Components/` are approved component
references and visual handoff archives. They are not registry entries or clean
runtime library implementations until a later implementation phase promotes
them through the registry/spec/library/showcase workflow.

If a proposed component is later ruled out, remove it from the active workflow
or document why it is excluded.

## 4. MagicPath Creation Workflow

MagicPath is the canvas design environment. The reliable local mechanism is
the MagicPath skill plus the `magicpath-ai` CLI. Use `-o json` for all
data-returning commands so the results can be parsed and archived.

Before creating or exporting anything, verify authentication:

```bash
npx -y magicpath-ai whoami -o json
```

For each pending component folder that has not received an approved MagicPath
handoff, create a new MagicPath canvas component with the exact folder name:

```bash
npx -y magicpath-ai code start \
  --project <magicpath-project-id> \
  --dir /tmp/magicpath-<kebab-component-name> \
  --name "<Component Name>" \
  --width 1440 \
  --height 1200 \
  -o json
```

Loyaltymaster example:

```bash
npx -y magicpath-ai code start \
  --project 382091404937150464 \
  --dir /tmp/magicpath-<kebab-component-name> \
  --name "<Component Name>" \
  --width 1440 \
  --height 1200 \
  -o json
```

Build the MagicPath visual from the component evidence:

- Read `README.md`, `Source URLs.md`, `New Component Request.md`, and every PNG
  in `screenshots/`.
- Use screenshots as evidence, not as styling to copy directly.
- Follow the configured visual reference component or design-system reference.
- Do not include global website shell unless the configured shell scope says to
  include it.
- Keep the output as a one-off visual handoff unless the user separately asks
  for production implementation or registry approval.

For the Loyaltymaster run, the design reference was:

```text
Design-system reference component: MAIN - Multi-Section Example Page
Reference generated name: sunny-breeze-9281
Reference component ID: 387462742187057152
```

Submit the component and wait for the build job:

```bash
npx -y magicpath-ai code submit \
  --dir /tmp/magicpath-<kebab-component-name> \
  --width 1440 \
  --height 1200 \
  --wait \
  -o json
```

After creation, stop for human approval. Do not create `Production Ready` and
do not export code until approval is given.

## 5. Approval And Export Workflow

Approval can arrive one component at a time. When approval arrives, first
resolve the current exact-name MagicPath component. This matters when the user
says a new component was created but the visible name stayed the same.

```bash
npx -y magicpath-ai list-components <magicpath-project-id> -o json
```

Loyaltymaster example:

```bash
npx -y magicpath-ai list-components 382091404937150464 -o json
```

Pick the latest exact match by `name`, then use its `generatedName`, component
ID, and preview URL.

Export source with `inspect`. Do not use `magicpath-ai add` for this workflow;
`add` is for installing a component into an app, while this task creates a
handoff archive.

```bash
npx -y magicpath-ai inspect <generated-name> -o json
```

Create:

```text
<Component Root>/<Component Name>/Production Ready/
```

Write the inspected source files into `Production Ready/`. Also create:

```text
Production Ready/README.md
```

The README must include:

- component name
- generated name
- component ID
- project name and project ID
- preview URL
- export date
- MagicPath dependencies
- MagicPath import statement
- MagicPath usage example
- source files included
- note that the archive is an approved visual handoff, not registry approval

If MagicPath exports a differently named React component, preserve the exported
file exactly and add a thin alias file using the approved folder name. Example:

```tsx
export { TrialThankYouPage as ThankYouConfirmationSection } from './TrialThankYouPage';
```

Capture screenshots from:

```text
https://api.magicpath.ai/v1/<generated-name>
```

Use these filenames:

```text
Production Ready/<kebab-component-name>-desktop.png
Production Ready/<kebab-component-name>-mobile.png
```

The established screenshot convention is:

- desktop viewport width: `1440`
- mobile viewport width: `390`
- full-page screenshot is acceptable, so height can exceed `1200` or `1000`
- use a scroll pass before capture so animated or lazy content renders
- hide only MagicPath preview chrome such as `Made with MagicPath` or `Remix`

Verify before renaming:

```bash
find "<Component Root>/<Component Name>/Production Ready" -maxdepth 1 -type f -print | sort
rg -n "export .*<ExpectedPascalName>|<OriginalExport> as <ExpectedPascalName>" \
  "<Component Root>/<Component Name>/Production Ready"
rg -n "Component name: <Component Name>|Generated name: <generated-name>|Component ID: <id>" \
  "<Component Root>/<Component Name>/Production Ready/README.md"
sips -g pixelWidth -g pixelHeight \
  "<Component Root>/<Component Name>/Production Ready/<kebab-component-name>-desktop.png" \
  "<Component Root>/<Component Name>/Production Ready/<kebab-component-name>-mobile.png"
git status --short --branch
```

Run the same verification again against the final component path before
reporting completion.

## 6. Guardrails

- Do not edit registry files, approved specs, templates, approved examples, or
  design-system source as part of this MagicPath handoff workflow.
- Do not imply design-system registry approval.
- Do not imply design-system registry approval from a MagicPath visual handoff.
- Do not copy old source-site styling when the job is to restyle into another
  design system.
- Do not include global website shell unless shell scope explicitly requires
  it.
- Do not delete source screenshots or evidence files.
- Preserve approved source screenshots and evidence files.
- Preserve unrelated dirty git state.

## 7. Completed Example Inventory

This table records the completed Loyaltymaster run. Treat it as an example and
current archive index, not as a generic default for other websites.

| Final folder | Component name | Generated name | Component ID | Preview URL | Status |
|---|---|---|---|---|---|
| `Article Body` | `Article Body` | `peacefully-sand-2378` | `408989725962158080` | `https://api.magicpath.ai/v1/peacefully-sand-2378` | Approved handoff archived |
| `Blog Article Index` | `Blog Article Index` | `nice-field-9223` | `409255275812495360` | `https://api.magicpath.ai/v1/nice-field-9223` | Approved handoff archived |
| `Booking Demo Request Section` | `Booking Demo Request Section` | `clear-path-7101` | `409255332729204736` | `https://api.magicpath.ai/v1/clear-path-7101` | Approved handoff archived |
| `Branded Card Application Form` | `Branded Card Application Form` | `vibrantly-home-7845` | `409255349145718784` | `https://api.magicpath.ai/v1/vibrantly-home-7845` | Approved handoff archived |
| `Coming Soon Section` | `Coming Soon Section` | `lucky-valley-1596` | `409255365117612032` | `https://api.magicpath.ai/v1/lucky-valley-1596` | Approved handoff archived |
| `Contact Form Section` | `Contact Form Section` | `bold-moon-9702` | `409569352514408448` | `https://api.magicpath.ai/v1/bold-moon-9702` | Approved handoff archived |
| `FAQ Index Search` | `FAQ Index Search` | `ready-earth-6331` | `409255414136455168` | `https://api.magicpath.ai/v1/ready-earth-6331` | Approved handoff archived |
| `Industry Use Case Card Grid` | `Industry Use Case Card Grid` | `fierce-second-8648` | `409255429831536640` | `https://api.magicpath.ai/v1/fierce-second-8648` | Approved handoff archived |
| `Knowledge Base Index` | `Knowledge Base Index` | `fancy-forest-5240` | `409255445522432000` | `https://api.magicpath.ai/v1/fancy-forest-5240` | Approved handoff archived |
| `Legal Document Body` | `Legal Document Body` | `rapidly-winter-4044` | `409255461972496384` | `https://api.magicpath.ai/v1/rapidly-winter-4044` | Approved handoff archived |
| `Newsletter Signup Section` | `Newsletter Signup Section` | `cozily-forest-3045` | `409255477575303168` | `https://api.magicpath.ai/v1/cozily-forest-3045` | Approved handoff archived |
| `Pricing Page Matrix` | `Pricing Page Matrix` | `bright-noon-7843` | `409700834964819968` | `https://api.magicpath.ai/v1/bright-noon-7843` | Approved handoff archived |
| `Thank You Confirmation Section` | `Thank You Confirmation Section` | `smoothly-minute-7581` | `409713849214849024` | `https://api.magicpath.ai/v1/smoothly-minute-7581` | Approved handoff archived |

## 8. Generic Replacement Checklist

Use this checklist when repeating the workflow for any website:

1. Define source website, component root, MagicPath project, visual reference,
   shell scope, and approval authority.
2. Inspect the source website with Browser/Playwright and capture desktop and
   mobile evidence.
3. Compare source patterns against the target design system or approved
   component set.
4. Create or update one component evidence folder per missing component.
5. Create MagicPath canvas components in the configured project.
6. Use the configured visual reference unless the user explicitly replaces it.
7. Stop after MagicPath creation and wait for approval.
8. On approval, resolve the current exact-name component with
   `list-components`.
9. Export with `magicpath-ai inspect`, not `magicpath-ai add`.
10. Create `Production Ready/`, save source, README, and desktop/mobile
    screenshots.
11. Verify files, exports, README metadata, screenshot dimensions, and git
    scope.
12. Report the component ID, generated name, screenshot dimensions, final
    folder path, and any alias files created.

## 9. Values To Replace For Another Website

The process is intentionally replaceable. Update these values for each new
website or project:

- source website URL or local app URL
- login/session requirements
- viewport sizes
- global chrome selectors or hiding strategy
- component root folder
- component naming convention
- MagicPath project ID and project name
- visual reference component ID and generated name
- design-system or brand source of truth
- shell scope
- approval authority
- screenshot naming convention
- final archive naming convention

Do not change the approval boundary without explicit human instruction: local
handoff archive creation remains separate from production implementation and
design-system registry approval.
