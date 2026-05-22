# Loyaltymaster Markdown Outline Pack

Use this copy-paste instruction pack with Codex, Claude, Gemini, ChatGPT, or
another LLM when you want a draft Loyaltymaster web page outline before any
implementation code is written.

## Copy-Paste Prompt

```text
You are creating a draft Loyaltymaster web page outline.

Your task is Markdown outline mode only. Do not create TSX, JSX, HTML, CSS,
JavaScript, React code, components, or implementation files. Do not write code
until a human approves the Markdown outline.

Design-system root:
/Users/johs777/LOYALTYMASTER/loyaltymaster-design-system

Read these files first, in this order:
1. AI_START_HERE.md
2. EXTERNAL_LLM_HANDOFF.md
3. READ_FIRST_AI.md
4. PREFLIGHT.md
5. BRAND.md
6. DESIGN_SYSTEM.md
7. tokens/design-tokens.json
8. registry/components.json
9. templates/README.md
10. the approved templates/*.md file matching the requested artifact type
11. every selected component specPath from registry/components.json
12. every selected component libraryPath from registry/components.json
13. examples/README.md
14. at least one relevant examples/approved/*.md file
15. every relevant examples/blocked/*.md file

Hard rules:
- Output a Markdown outline only.
- Use only approved templates from templates/.
- Use only approved registry component IDs from registry/components.json.
- Do not invent sections, layouts, cards, buttons, forms, variants, states,
  interactions, colors, radii, shadows, fonts, or tokens.
- Normal web pages, landing pages, sales pages, and subdomain pages are
  body-only. Do not include navbar-glassmorphism, header, or footer unless the
  brief explicitly requests a standalone artifact with its own shell.
- Do not import from, edit, or copy runtime code from /Components/,
  /Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION, or
  RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/.
- If approved components cannot satisfy the brief, stop and fill the Missing
  Component Check section using templates/new-component-request.md. Do not
  improvise.

User brief:
[PASTE THE PAGE REQUEST HERE]

Return the Markdown outline in exactly this structure:

# Draft Page Outline: [Page Name]

## Page Brief Summary
- Artifact type:
- Audience:
- Primary user problem:
- Primary action:
- Required source copy:
- Required media/assets:
- Legal/pricing/compliance content:

## Selected Approved Template
- Template file:
- Why this template fits:
- Approved recipe used:

## Body-Only Shell Scope
- Shell scope: Body-only / Standalone shell explicitly requested
- Navbar/header/footer decision:
- Reason:

## Component Sequence Using Approved Registry IDs
| Order | Registry ID | Section Purpose | Why This Component Fits |
|---|---|---|---|
| 1 |  |  |  |

## Section-By-Section Content Outline
For each selected component, provide:
- Registry ID:
- Section heading:
- Eyebrow/label:
- Body copy:
- Primary CTA text:
- Supporting bullets/items:
- Media or asset requirement:
- Notes from the component spec:

## Required Props Or Content Per Component
| Registry ID | Required Props/Content | Optional Props/Content | Content Still Needed From Human |
|---|---|---|---|
|  |  |  |  |

## Component Evidence Table
| Registry ID | specPath Read | libraryPath Checked | Tokens Confirmed | Screenshot Reference |
|---|---|---|---|---|
|  |  |  | tokens/design-tokens.json |  |

## Approved Examples Checked
- Example path:
- What pattern was reused:

## Blocked Examples Checked
- examples/blocked/generic-saas-card-grid.md:
- examples/blocked/page-body-glassmorphism.md:
- examples/blocked/invented-component-variant.md:
- examples/blocked/raw-components-import.md:
- examples/blocked/duplicate-global-chrome.md:
- examples/blocked/unapproved-token-literal.md:

## Missing Component Check
- Can the page be created from approved components only? Yes/No
- If No, missing need:
- Existing components considered and rejected:
- New component request required: Yes/No
- Reference: templates/new-component-request.md

## Human Approval Checklist
- [ ] Outline uses one approved template.
- [ ] Every section maps to an approved registry component ID.
- [ ] Every selected component has current specPath evidence.
- [ ] Every selected component has current libraryPath evidence.
- [ ] Output is body-only unless standalone shell was explicitly requested.
- [ ] No navbar/header/footer is included for a normal page body.
- [ ] No new component, section, variant, token, or interaction was invented.
- [ ] Approved examples were checked.
- [ ] Blocked examples were rejected.
- [ ] Missing component needs were escalated instead of improvised.

## Ready For TSX Build
Ready for TSX build: Yes/No

Reason:
[Explain whether a human can approve this Markdown outline for the next
stage. If No, list exactly what must be clarified or requested.]
```

## How To Use This Pack

1. Paste the prompt above into the LLM.
2. Replace `[PASTE THE PAGE REQUEST HERE]` with the actual page request.
3. Review the Markdown outline manually.
4. If the outline uses only approved templates and components, approve it for
   the next stage.
5. Only after approval, ask the LLM to create the body-only `.tsx` page from
   the approved outline.

## Human Review Rule

Do not let the LLM skip directly to code. The Markdown outline is the approval
gate that catches wrong component choices, missing component needs, duplicate
global chrome, and design drift before implementation.
