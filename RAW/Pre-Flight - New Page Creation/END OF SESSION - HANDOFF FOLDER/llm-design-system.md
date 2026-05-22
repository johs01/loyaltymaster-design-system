# LLM-Ready Design System & Marketing Brief Structure

The pattern that keeps surfacing is: **a small, LLM-readable design spec layer in Markdown (`DESIGN.md`/`CLAUDE.md` + `specs/` directory of component specs), plus marketing briefs that reference those component names and variants explicitly, using strict heading hierarchy and structured fields.**[web:14][web:17][web:27][web:30][web:35] That combination appears to be the most future-proof way to get “marketing doc + design system → on‑design page” with tools like Claude Code inside an existing repo.[web:14][web:28][web:30]

---

## Core approach that keeps surfacing

Across blogs, LinkedIn posts, and dev workflows, the same subject shows up under different names: **LLM-readable design specifications in Markdown layered on top of your existing design system.**[web:11][web:14][web:17][web:30] Instead of relying on Figma libraries or scattered docs, teams create a concise spec that defines tokens, component rules, and usage guidelines in a format an LLM can read on every session.[web:11][web:14][web:30]  

A few converging patterns:  

- **Component spec files** under `specs/components/` with a consistent 6–8 section template (metadata, overview, anatomy, tokens, props, states, code example, cross‑references).[web:14][web:17][web:36]  
- **A design instruction file** like `DESIGN.md` or `design.md` that mixes machine-readable tokens (YAML) and human-readable intent in one place, plus a project instruction file like `CLAUDE.md` that tells the model to read those specs before touching UI code.[web:26][web:28][web:30][web:31][web:34]  
- **LLM-optimized documentation style**: strict heading hierarchy, stable terminology, short paragraphs, and explicit references instead of “this/that/above section.”[web:27][web:29][web:32][web:35]  

This lines up with the spec‑to‑code and LLM design system work you’ve already explored for B2B SaaS landing pages, just with the ecosystem now standardizing around `DESIGN.md`/`CLAUDE.md` + `specs/` as the contract.[cite:1][web:14][web:30]  

---

## How to structure the LLM design system

Given you already have a working site with an examples page of all components, the “future‑proof” structure that keeps coming up looks like this:[web:14][web:17][web:30][web:31]  

1. **Token layer in code (no magic numbers)**  
   - Centralize all visual primitives in a token file (`tokens.css` or `design-tokens.yaml`): colors, spacing steps, typography, radii, elevation, motion, z-index, etc.[web:14][web:17][web:30]  
   - Components reference tokens only (e.g. `var(--color-surface-elevated)`), never raw hex or pixel values, so the LLM can always map from spec → code.[web:14][web:17]  

2. **Design spec file: `DESIGN.md` or `design.md`**  
   - At the top: YAML block for **tokens and core component names**, so models can parse them reliably.[web:30]  
   - Below: Markdown sections describing overall design principles, layout patterns, and how tokens should be applied (e.g. 8‑point grid, spacing between sections, card patterns).[web:30][web:31]  
   - This file becomes the single entry point the model reads before generating or editing UI.[web:26][web:28][web:30]  

3. **Component specs: `specs/components/*.md`**  
   - One file per real component in your example page: `feature-comparison-list.md`, `hero-primary.md`, `pricing-table.md`, etc.[web:14][web:17]  
   - Each file follows the same template (see next section) so the model can pattern‑match across components.[web:14][web:17][web:36]  

4. **Project instructions: `CLAUDE.md` (or equivalent)**  
   - Brief root‑level file that:  
     - Explains the stack (e.g. React + Tailwind),  
     - Tells Claude Code to **always read `DESIGN.md` and the relevant file in `specs/components/` before modifying UI**, and  
     - Uses “progressive disclosure” by linking to specific spec files instead of dumping everything inline.[web:26][web:28][web:34]  

5. **LLM-friendly doc style everywhere**  
   - Use clean H1 → H2 → H3 hierarchies, descriptive headings, stable component names, and consistent wording across files.[web:27][web:29][web:32][web:35]  
   - Avoid vague references (“this section above”), and prefer explicit labels (“the `FeatureComparisonList` component in section 3.2”).[web:29][web:35]  

---

## How to describe each component

The component spec format that appears most often (and works well with Claude Code / Cursor) is an **8‑section Markdown template**.[web:14][web:17][web:36] You can adopt this directly and tune the wording for your style.  

For each component (e.g. your “features comparison list”), create `specs/components/feature-comparison-list.md` with something like:  

1. **Metadata**  
   - Name: `FeatureComparisonList`  
   - Category: “Comparison / evaluation”  
   - Status: `stable` or `experimental`  
   - Related components: `PricingTable`, `TestimonialStrip`  

2. **Overview**  
   - When to use: “Use when a visitor is actively comparing our product against alternatives and we want to highlight proof‑backed advantages.”  
   - When not to use: “Avoid on short splash pages or when there is only a single plan.”  

3. **Anatomy**  
   - Enumerate parts with clear names the LLM can reuse:  
     - Root container  
     - Section eyebrow / label  
     - Section heading  
     - Optional section subheading  
     - Comparison table header row  
     - Feature rows  
     - Our product column  
     - Competitor column(s)  
     - Check / cross icons  
     - Legal footnote or disclaimer  
   - This helps the model align the marketing brief’s wording (“section heading”, “legal disclaimer”) with your component’s structure.[web:14][web:17][web:36]  

4. **Tokens used**  
   - List exactly which tokens the component should use, by name:  
     - Colors: `--color-bg-surface`, `--color-border-subtle`, `--color-text-muted`, `--color-accent-positive`  
     - Spacing: `--space-6` between rows, `--space-8` between section blocks  
     - Typography: `--font-heading-lg` for heading, `--font-body-sm` for footnotes  
   - This gives the LLM a lookup table from “headline in this component” → specific token.[web:14][web:17][web:30]  

5. **Props / API**  
   - Describe the component’s configurable inputs in code terms:  
     - `columns`: array of column definitions (name, badge, emphasis)  
     - `features`: array of feature rows (label, our value, competitor value, optional tooltip)  
     - `emphasisMode`: `"highlight-ours"` | `"neutral"`  
     - `showFootnote`: boolean  
   - For web components or React, define prop names exactly as in code so the model can wire things correctly.[web:14][web:17]  

6. **States**  
   - Default, hover, focus (keyboard), selected/emphasized, mobile breakpoint behavior (stacked vs. table), loading/skeleton (if any).[web:14][web:17]  

7. **Behavior / interactions**  
   - “Columns are not clickable; CTAs live outside this component.”  
   - “On small screens, hide competitor columns behind a horizontal scroll; keep section heading pinned.”  
   - Keeps the LLM from inventing interactions the design system doesn’t support.[web:14][web:36]  

8. **Code example**  
   - A canonical snippet showing how this component is instantiated in your real codebase, using tokens and props exactly as specified.[web:14][web:17]  

Using this exact skeleton (or very close) is the main thing that keeps surfacing in “expose your design system to LLMs” content and MCP‑based design system integrations.[web:14][web:17][web:33][web:36]  

---

## How marketing should write the landing‑page brief

The key shift is to treat the marketing brief as a **structured page spec that references component names and variants**, not just free‑form copy.[web:13][web:16][web:19][web:25] Combined with your design specs, this lets the LLM do a deterministic mapping from “what marketing wants” → “which components, in what order, with which props.”  

A simple, LLM‑friendly structure that keeps showing up (think PRD + GEO/LLM doc best practices):[web:13][web:16][web:19][web:27][web:35]  

1. **Page metadata**  
   - Page title, route/slug, target persona, primary goal (e.g. “book demo”), secondary goal (e.g. “newsletter signup”).  

2. **Global page constraints**  
   - Layout constraints: “Use existing `MarketingPageLayout` shell; standard header/footer; max width 1200px.”  
   - Tone of voice / brand notes (or link to the brand voice section in `DESIGN.md`).[web:30]  

3. **Sections (one subsection per block in scroll order)**  
   For each section:  

   - `section_id`: `hero`, `social-proof-strip`, `feature-comparison`, `pricing`, etc.  
   - `component_name`: must match a spec file, e.g. `FeatureComparisonList`.  
   - `variant`: if applicable (e.g. `three-column`, `compact`, `with-badges`).  
   - `goal`: short description (“Make it obvious that we outperform legacy tools on automation and support”).  
   - `primary_content`:  
     - `heading` text  
     - `subheading` text  
     - `body_copy` paragraphs  
     - `bullets` or `feature_rows` if relevant  
   - `supporting_content`: testimonials, logos, proof elements explicitly named.  
   - `interactions`: “No in‑section forms”, or “CTA scrolls to pricing section.”  
   - `assets`: file names or URLs for images/illustrations, linked explicitly.  

   In Markdown, this can look like a repeated, structured block under a heading like `### Section 3 – Feature comparison` with bullet fields, or as embedded YAML/JSON if you want even tighter structure.[web:13][web:16][web:25][web:35]  

4. **Copy constraints and SEO**  
   - Keywords, phrases to avoid, character limits on key elements, etc., in clearly labeled lists.[web:25][web:35]  

This mirrors modern PRD patterns but with each section explicitly tied to a component in your design spec, plus GEO‑style documentation rules (hierarchy, consistent terms, no vague pronouns) to make it easy for LLMs to parse.[web:13][web:16][web:19][web:27][web:35]  

---

## Prompt you can give Claude Code for a screenshot

Given your workflow (existing site + examples page + Claude Code), here’s a concrete prompt you can paste into Claude Code when you select a **single component screenshot** (e.g. the feature comparison list). This prompt tells Claude to:  

- Inspect the screenshot,  
- Cross‑reference your existing tokens/specs if available, and  
- Output a component spec in the 8‑section format above.  

You’ll customize the paths (`tokens.css`, etc.) to match your repo:[web:14][web:17][web:26][web:28]  

---

### Prompt for Claude Code (screenshot → spec)

> You are a senior design‑system engineer documenting our existing UI so that large language models can generate on‑design code from specs.  
>   
> I will give you a screenshot of ONE component from our production marketing site. Your task is to analyze the screenshot and then write a new component spec file in Markdown for our LLM design system.  
>   
> First, open and briefly scan these files in this repo (do not print them):  
> - `DESIGN.md` (overall design system and tokens)  
> - `src/styles/tokens.css` (or the main token file)  
> - Any existing files in `specs/components/` to copy naming and structure  
>   
> Then, based ONLY on the screenshot plus what you learn from those files, create a new spec at:  
> `specs/components/feature-comparison-list.md`  
> (if a file with that name already exists, update it instead of creating a new one).  
>   
> Use THIS exact heading structure and order in the Markdown file:  
>   
> ```markdown  
> # FeatureComparisonList  
>   
> ## 1. Metadata  
> - Name: FeatureComparisonList  
> - Category: Comparison / evaluation  
> - Status: stable  
> - Related components: …  
>   
> ## 2. Overview  
> - When to use: …  
> - When not to use: …  
>   
> ## 3. Anatomy  
> - Root container: …  
> - Section eyebrow / label: …  
> - Section heading: …  
> - Section subheading: …  
> - Comparison table header row: …  
> - Feature rows: …  
> - Our product column: …  
> - Competitor column(s): …  
> - Icons / indicators: …  
> - Footnote / legal disclaimer: …  
>   
> ## 4. Tokens used  
> - Colors: list the design tokens from tokens.css that should be used for background, borders, text, icons, highlights  
> - Spacing: list spacing tokens used for padding, gaps between rows, gaps between sections  
> - Typography: list heading/body/footnote text styles by token name  
> - Other: radius, elevation, motion, z-index if relevant  
>   
> ## 5. Props / API  
> - List each prop or configuration option for this component, with type and description  
> - Example:  
>   - columns: ColumnConfig[] — each column’s label, emphasis, optional badge  
>   - features: FeatureRow[] — per‑row label and values for each column  
>   - emphasisMode: "highlight-ours" | "neutral"  
>   - showFootnote: boolean  
>   
> ## 6. States  
> - Default state: …  
> - Hover / focus states: …  
> - Responsive behavior: explain how the layout changes at breakpoints  
> - Loading / empty states (if any): …  
>   
> ## 7. Behavior / interactions  
> - Describe any interactive behavior (scrolling, tooltips, hover highlights)  
> - Explicitly state which elements are NOT interactive  
>   
> ## 8. Code example  
> ```tsx  
> // Provide a canonical usage example in our stack (e.g. React + Tailwind),  
> // using the actual component name and tokens from the project.  
> ```  
> ```  
>   
> Rules:  
> - Match our existing naming for tokens, typography, and spacing where possible. If you must invent a token, clearly mark it as a suggestion.  
> - Use the strict heading hierarchy shown above and keep the section numbers.  
> - Use clear, explicit names – never refer to things as “this column” or “that section”; always name the part.  
> - Do NOT change any visual style; just describe and map it to tokens.  
>   
> Now, examine the attached screenshot of the component and then create or update `specs/components/feature-comparison-list.md` accordingly.  
