---
url: "https://impeccable.style/tutorials/brand-vs-product/"
title: "Brand vs product, pick a register | Impeccable"
---

[Skip to content](https://impeccable.style/tutorials/brand-vs-product/#main)[/Impeccable](https://impeccable.style/)

[Home](https://impeccable.style/) [Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live](https://impeccable.style/live-mode)[24k](https://github.com/pbakaus/impeccable)

[Docs](https://impeccable.style/docs)/ [Tutorials](https://impeccable.style/tutorials)/Brand vs product, pick a registerTutorial

# Brand vs product, pick a register

Two worlds, two sets of defaults. Pick the right one and every command downstream benefits.

## See the divergence

Same element, one register each. A newsletter signup, twice.

BrandEditorial-magazine

No. 04  ·  Dispatch

### Letters, occasionally.

A postcard from the editor, once a month. No tracking pixels, no "just checking in."

Send me one

Serif display, italic display weightDrenched in the primary hueMonospaced kicker, editorial voice

ProductUtility / app shell

Newsletter

### Subscribe to updates

Product changes and release notes, once a month. Unsubscribe at any time.

Subscribe

Neutral sans, semibold for hierarchyRestrained palette, accent only on stateShort, scannable, mobile-readable copy

The table below lists what's different. This is what it looks like at the pixel.

## Why register matters

Every design task belongs to one of two worlds:

- **Brand** is where design IS the product. Marketing sites, landing pages, portfolios, long-form content, campaign surfaces. Distinctiveness is the bar. Fonts, motion, density, and color all push toward “this looks like nothing else in the category.”
- **Product** is where design SERVES the product. App UI, admin, dashboards, tools. Earned familiarity is the bar. Fluent users of Linear, Figma, Notion, Raycast, or Stripe should trust the output on sight.

If you ask the same AI to design a dashboard and a campaign page without naming which world, you’ll get the average of the two. Brand surfaces will feel too careful. Product surfaces will feel too precious. Register is how Impeccable avoids that.

Impeccable tracks register as a single field in `PRODUCT.md`:

```
## Register

product
```

That is it: a bare value, `brand` or `product`. Every command that does register-sensitive work (`typeset`, `animate`, `colorize`, `layout`, `bolder`, `quieter`, `delight`) loads a different reference file based on what it finds here.

## How the two worlds diverge

This is not an exhaustive list, the full divergence lives in the `brand.md` and `product.md` reference files, but the shape of the difference:

| Dimension | Brand | Product |
| --- | --- | --- |
| **Type lanes** | Editorial-magazine, luxury, brutalist, consumer-warm, tech-minimal, all available. Swing. | Tighter set: neutral sans + optional mono, sized for dense reading, fluid type reserved for marketing surfaces. |
| **Motion** | Choreographed entrances, scroll-driven sequences, decorative moments earn their place. | Restrained. State changes only. Animation serves feedback, not atmosphere. |
| **Color** | Full palette, Committed, or Drenched are all on the table. | Restrained by default. Accents carry meaning; color is not decoration. |
| **Density** | Whatever the narrative wants. Generous whitespace or packed rule-divided columns both valid. | Comfortable to dense. Every pixel earns its place. |
| **References** | Real-world, from the right lane. _Klim specimen pages_ or _Broadsheet masthead_, not “modern SaaS”. | Category best-tool. _Linear_, _Figma_, _Notion_, _Raycast_, _Stripe_. |

The same command, `/impeccable typeset`, pulls from different fonts in the two worlds. The same command, `/impeccable animate`, picks different motion vocabularies. The same command, `/impeccable layout`, assumes different density defaults. You do not re-learn the command: you answer the register question once, and the command adapts.

## Step 1. Decide or inherit

If you haven’t run `/impeccable teach` yet, run it now. The first question is about register:

```
/impeccable teach
```

Teach scans your codebase first and forms a hypothesis: routes like `/`, `/pricing`, `/blog`, hero sections, scroll-driven content point toward brand. Routes like `/app`, `/dashboard`, `/settings`, forms and tables point toward product. It leads with the hypothesis rather than starting cold:

> From the codebase, this looks like a product surface, does that match your intent, or should we treat it differently?

If the project genuinely spans both (a product with a big marketing landing), teach asks which register describes the **primary** surface. Register is per-project, not per-page, but you can override it per task when needed.

## Step 2. Verify the register landed

Open `PRODUCT.md` and look for the `## Register` section. It should carry a bare value, not prose:

```
## Register

brand
```

If the section is missing (you’re on an older `PRODUCT.md` from pre-v3.0), re-run `/impeccable teach`. It will detect the gap and add the field without re-interviewing you on everything else.

## Step 3. Override per task when you need to

Most of the time, register is set once and forgotten. But a product project might occasionally need a single brand surface (a launch landing, an investor one-pager) without flipping the whole project.

You have two options:

- **Name it in the brief.** “`/impeccable craft a launch landing for v2, brand register for this one page.`” The skill honors the override for that task only.
- **Set a per-surface register.** If the override is lasting, add a short note in `PRODUCT.md` under an explicit section: `## Register overrides: /launch is brand.` Commands that read PRODUCT.md will respect it.

## What to try next

- Run a command that is register-sensitive and watch the divergence: `/impeccable typeset the pricing page` on a product project vs. a brand project will pick different type families, different scale ratios, and different pairings.
- Pair with [getting started](https://impeccable.style/tutorials/getting-started) if you haven’t installed Impeccable yet.
- Reach for `/impeccable document` after teach to capture the visual side (colors, components) into DESIGN.md.

## Common issues

- **Register keeps slipping the wrong way.** If you set `product` but commands keep producing brand-feeling output, check that `PRODUCT.md` is at the project root and the `## Register` section has a bare value (no prose, no explanation, just the word). Commands can only read what is there.
- **The hypothesis teach formed is wrong.** Disagree in the answer. Teach is asking, not telling.
- **A project is genuinely 50/50.** Pick the primary surface, then use per-task overrides for the minority one. Trying to average the two in PRODUCT.md produces worse output than committing to one.

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)