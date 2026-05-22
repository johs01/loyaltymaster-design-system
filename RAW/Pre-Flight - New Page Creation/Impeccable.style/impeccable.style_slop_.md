---
url: "https://impeccable.style/slop/"
title: "Slop | Impeccable"
---

[Skip to content](https://impeccable.style/slop/#main)[/Impeccable](https://impeccable.style/)

[Home](https://impeccable.style/) [Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live](https://impeccable.style/live-mode)[24k](https://github.com/pbakaus/impeccable)

On this page

On this page

- [See it](https://impeccable.style/slop/#see-it)
- [Try it live11](https://impeccable.style/slop/#try-it-live)
- [The catalog37](https://impeccable.style/slop/#catalog)
  - [Visual Details6](https://impeccable.style/slop/#section-visual-details)
  - [Typography6](https://impeccable.style/slop/#section-typography)
  - [Color & Contrast6](https://impeccable.style/slop/#section-color-contrast)
  - [Layout & Space7](https://impeccable.style/slop/#section-layout-space)
  - [Motion2](https://impeccable.style/slop/#section-motion)
  - [Interaction2](https://impeccable.style/slop/#section-interaction)
  - [Responsive1](https://impeccable.style/slop/#section-responsive)
  - [General quality7](https://impeccable.style/slop/#section-general-quality)
- [Run it yourself](https://impeccable.style/slop/#run-it)

The visible tells of AI design

# Slop

37 patterns that mark an interface as AI-generated, and the detection overlay that catches them in place. Watch it flag them live, try it on 11 synthetic specimens, or browse the full catalog. 25 rules run deterministically (`npx impeccable detect` or the browser extension); 12 need [/impeccable critique](https://impeccable.style/docs/critique)'s LLM review pass.

## 01 See it

Every wave of AI-generated UIs converges on a recognizable aesthetic. The detector catches both. The patterns just change.

20222026

Purple gradients, glassmorphism, neon glow

Hover or tap any outlined element to see which rule fired. Toggle the era to see how the patterns shifted.

## 02 Try it live

These 11 synthetic slop pages ship with the detector script baked in. Click any to see the overlay running on a real page, then hover the outlined elements.

[![Purple Gradients Everywhere specimen](https://impeccable.style/antipattern-images/purple-gradients.png)\\
\\
**Purple Gradients Everywhere** \\
\\
The AI color palette: purple-to-blue gradients on everything. Buttons, text, backgrounds, orbs. The new "make it pop."](https://impeccable.style/antipattern-examples/purple-gradients.html) [![Lazy "Cool" specimen](https://impeccable.style/antipattern-images/lazy-cool.png)\\
\\
**Lazy "Cool"** \\
\\
Glassmorphism, neon glows, blurred orbs, monospace everything. Looks like a hackathon project, not a product.](https://impeccable.style/antipattern-examples/lazy-cool.html) [![Lazy "Impact" specimen](https://impeccable.style/antipattern-images/lazy-impact.png)\\
\\
**Lazy "Impact"** \\
\\
When in doubt, animate everything. Bouncing buttons, wiggling icons, gradient text, floating badges. Motion without meaning.](https://impeccable.style/antipattern-examples/lazy-impact.html) [![Side-Tab Cards specimen](https://impeccable.style/antipattern-images/thick-border-cards.png)\\
\\
**Side-Tab Cards** \\
\\
A thick colored border on one side of a rounded card. The single most recognizable tell of AI-generated UI.](https://impeccable.style/antipattern-examples/thick-border-cards.html) [![Cardocalypse specimen](https://impeccable.style/antipattern-images/cardocalypse.png)\\
\\
**Cardocalypse** \\
\\
Cards inside cards inside cards. Five levels of nesting, each with its own padding and shadow.](https://impeccable.style/antipattern-examples/cardocalypse.html) [![Copy-Paste Layouts specimen](https://impeccable.style/antipattern-images/layout-templates.png)\\
\\
**Copy-Paste Layouts** \\
\\
The same hero-metric-features template repeated with different colors. When every section looks the same, nothing stands out.](https://impeccable.style/antipattern-examples/layout-templates.html) [![Inter Everywhere specimen](https://impeccable.style/antipattern-images/inter-everywhere.png)\\
\\
**Inter Everywhere** \\
\\
One font for everything. Headings, body, labels, buttons. No typographic hierarchy, no personality, no design.](https://impeccable.style/antipattern-examples/inter-everywhere.html) [![Massive Icons specimen](https://impeccable.style/antipattern-images/massive-icons.png)\\
\\
**Massive Icons** \\
\\
Icon containers larger than the content they introduce. When the decoration is bigger than the message, priorities are backwards.](https://impeccable.style/antipattern-examples/massive-icons.html) [![Bad Contrast Choices specimen](https://impeccable.style/antipattern-images/bad-contrast.png)\\
\\
**Bad Contrast Choices** \\
\\
Gray text on colored backgrounds, low-contrast labels, unreadable combinations. Looking good and being readable should not conflict.](https://impeccable.style/antipattern-examples/bad-contrast.html) [![Redundant UX Writing specimen](https://impeccable.style/antipattern-images/redundant-ux-writing.png)\\
\\
**Redundant UX Writing** \\
\\
Label, sublabel, helper text, and hint text all saying the same thing in slightly different words. Say it once, say it well.](https://impeccable.style/antipattern-examples/redundant-ux-writing.html) [![Modal Abuse specimen](https://impeccable.style/antipattern-images/modal-abuse.png)\\
\\
**Modal Abuse** \\
\\
Complex settings crammed into a modal. If it needs a scroll bar and three columns, it deserves its own page.](https://impeccable.style/antipattern-examples/modal-abuse.html)

## 03 The catalog

Every pattern [/impeccable](https://impeccable.style/docs/impeccable) teaches against. **AI slop** rules flag the tells of AI-generated UIs; **Quality** rules flag general design mistakes that hurt regardless of who wrote them.

How to read this

Each rule shows how it is detected:

CLIDeterministic. Runs from `npx impeccable detect` on files, no browser required.

BrowserDeterministic, but needs real browser layout. Runs via the browser extension or Puppeteer, not the plain CLI.

LLM onlyNo deterministic detector. Caught by [/impeccable critique](https://impeccable.style/docs/critique) during its LLM design review.

### Visual Details

6 rules

Rounded card

Thick colored border clashes with the radius.

AI slopCLI

### Border accent on rounded element

Thick accent border on a rounded card. The border clashes with the rounded corners. Remove the border or the border-radius.

[See in /impeccable](https://impeccable.style/docs/impeccable#visual-details)

Frosted glass card

AI slopLLM only

### Glassmorphism everywhere

Blur effects, glass cards, and glow borders used as decoration rather than to solve a real layering problem.

[See in /impeccable](https://impeccable.style/docs/impeccable#visual-details)

Are you sure?

Really, truly sure about this?

Cancel

OK

AI slopLLM only

### Reaching for modals by reflex

Modals interrupt the user and are lazy as a design default. Use them only when there is truly no better place for the interaction.

[See in /impeccable](https://impeccable.style/docs/impeccable#visual-details)

AI slopLLM only

### Rounded rectangles with generic drop shadows

The safest, most forgettable shape on the web. Could be the output of any AI. Commit to a stronger visual treatment.

[See in /impeccable](https://impeccable.style/docs/impeccable#visual-details)

Alert title

Thick colored stripe on one side.

AI slopCLI

### Side-tab accent border

Thick colored border on one side of a card. The most recognizable tell of AI-generated UIs. Use a subtler accent or remove it entirely.

[See in /impeccable](https://impeccable.style/docs/impeccable#visual-details)

Revenue

$42.1k

Tiny chart, no real information.

AI slopLLM only

### Sparklines as decoration

Tiny charts that look sophisticated but convey no meaningful information. If the data matters, give it room.

[See in /impeccable](https://impeccable.style/docs/impeccable#visual-details)

### Typography

6 rules

Heading

Subheading

Body text at almost the same size.

AI slopCLI

### Flat type hierarchy

Font sizes are too close together. No clear visual hierarchy. Use fewer sizes with more contrast (aim for at least a 1.25 ratio between steps).

[See in /impeccable](https://impeccable.style/docs/impeccable#typography)

✦

Feature name

Rounded icon tile above heading.

AI slopCLI

### Icon tile stacked above heading

A small rounded-square icon container above a heading is the universal AI feature-card template. Every generator outputs this exact shape. Try a side-by-side icon and heading, or let the icon sit in flow without its own container.

[See in /impeccable](https://impeccable.style/docs/impeccable#typography)

TECHNICAL\_TOOL

Mono for "developer" vibes. Lazy.

AI slopLLM only

### Monospace as "technical" shorthand

Using a monospace typeface to signal "developer / technical" vibes. Reach for real type choices instead of a lazy stereotype.

[See in /impeccable](https://impeccable.style/docs/impeccable#typography)

Just another Inter headline

Every SaaS homepage looks like this.

AI slopCLI

### Overused font

Inter, Roboto, Fraunces, Geist, Plus Jakarta Sans, and Space Grotesk are used on so many sites they no longer feel distinctive. Each new wave of AI-generated UIs converges on the same handful of faces. Choose a face that gives your interface personality.

[See in /impeccable](https://impeccable.style/docs/impeccable#typography)

Heading in the body font

Body in the same font. No contrast. Flat.

AI slopCLI

### Single font for everything

Only one font family is used for the entire page. Pair a distinctive display font with a refined body font to create typographic hierarchy.

[See in /impeccable](https://impeccable.style/docs/impeccable#typography)

Long passages in uppercase are hard to read. We recognize words by their shape, which all-caps removes.

QualityCLI

### All-caps body text

Long passages in uppercase are hard to read. We recognize words by shape (ascenders and descenders), which all-caps removes. Reserve uppercase for short labels and headings.

[See in /impeccable](https://impeccable.style/docs/impeccable#typography)

### Color & Contrast

6 rules

AI slopCLI

### AI color palette

Purple/violet gradients and cyan-on-dark are the most recognizable tells of AI-generated UIs. Choose a distinctive, intentional palette.

[See in /impeccable](https://impeccable.style/docs/impeccable#color-contrast)

Neon on dark

Cyberpunk-by-default slop.

AI slopCLI

### Dark mode with glowing accents

Dark backgrounds with colored box-shadow glows are the default "cool" look of AI-generated UIs. Use subtle, purposeful lighting instead, or skip the dark theme entirely.

[See in /impeccable](https://impeccable.style/docs/impeccable#color-contrast)

Dark by default

Defaulting to dark is a retreat from a decision.

AI slopLLM only

### Defaulting to dark mode for "safety"

Defaulting to light mode to be safe is the inverse of defaulting to dark mode to look cool. Either way you are retreating from a decision.

[See in /impeccable](https://impeccable.style/docs/impeccable#color-contrast)

Build the Future

Gradient text kills scannability.

AI slopCLI

### Gradient text

Gradient text is decorative rather than meaningful. A common AI tell, especially on headings and metrics. Use solid colors for text.

[See in /impeccable](https://impeccable.style/docs/impeccable#color-contrast)

Gray text on a colored background. Washed out and hard to read.

QualityCLI

### Gray text on colored background

Gray text looks washed out on colored backgrounds. Use a darker shade of the background color instead, or white/near-white for contrast.

[See in /impeccable](https://impeccable.style/docs/impeccable#color-contrast)

Pure black on pure white

Neither exists in nature. Always tint.

QualityCLI

### Pure black background

Pure #000000 as a background color looks harsh and unnatural. Tint it slightly toward your brand hue (e.g., oklch(12% 0.01 250)) for a more refined feel.

[See in /impeccable](https://impeccable.style/docs/impeccable#color-contrast)

### Layout & Space

7 rules

Centered headline

Everything centered by default.

Call to action

AI slopCLI

### Everything centered

Every text element is center-aligned. Left-aligned text with asymmetric layouts feels more designed. Center only hero sections and CTAs.

[See in /impeccable](https://impeccable.style/docs/impeccable#layout-space)

10M+

Active users

**99.9%** uptime**200ms** p50

AI slopLLM only

### Hero metric layout

Big number, small label, three supporting stats, gradient accent. Used everywhere, trusted nowhere.

[See in /impeccable](https://impeccable.style/docs/impeccable#layout-space)

Feature

Short copy.

Feature

Short copy.

Feature

Short copy.

Feature

Short copy.

Feature

Short copy.

Feature

Short copy.

AI slopLLM only

### Identical card grids

Same-sized cards with icon + heading + text repeated endlessly. The default AI homepage layout.

[See in /impeccable](https://impeccable.style/docs/impeccable#layout-space)

AI slopCLI

### Monotonous spacing

The same spacing value used everywhere. No rhythm, no variation. Use tight groupings for related items and generous separations between sections.

[See in /impeccable](https://impeccable.style/docs/impeccable#layout-space)

Card inside card inside card.

AI slopCLI

### Nested cards

Cards inside cards create visual noise and excessive depth. Flatten the hierarchy: use spacing, typography, and dividers instead of nesting containers.

[See in /impeccable](https://impeccable.style/docs/impeccable#layout-space)

Title

Card around every single thing.

AI slopLLM only

### Wrapping everything in cards

Not every piece of content needs a bordered container. Spacing and alignment create visual grouping without the overhead of a card.

[See in /impeccable](https://impeccable.style/docs/impeccable#layout-space)

Paragraphs wider than roughly 75 characters per line become fatiguing because the eye has to track an excessive distance back to the start of the next line, losing its place.

QualityBrowser

### Line length too long

Text lines wider than ~80 characters are hard to read. The eye loses its place tracking back to the start of the next line. Add a max-width (65ch to 75ch) to text containers.

[See in /impeccable](https://impeccable.style/docs/impeccable#layout-space)

### Motion

2 rules

Bounce + elastic easing feels dated.

AI slopCLI

### Bounce or elastic easing

Bounce and elastic easing feel dated and tacky. Real objects decelerate smoothly. Use exponential easing (ease-out-quart/quint/expo) instead.

[See in /impeccable](https://impeccable.style/docs/impeccable#motion)

Animating width/height causes layout jank.

QualityCLI

### Layout property animation

Animating width, height, padding, or margin causes layout thrash and janky performance. Use transform and opacity instead, or grid-template-rows for height animations.

[See in /impeccable](https://impeccable.style/docs/impeccable#motion)

### Interaction

2 rules

SaveCancelDelete

Every action shouts equally.

QualityLLM only

### Every button is a primary button

When every button looks equally important, nothing reads as the primary action. Use ghost buttons, text links, and secondary styles to build hierarchy.

[See in /impeccable](https://impeccable.style/docs/impeccable#interaction)

Overview

This is the overview section, which provides an overview of the overview.

QualityLLM only

### Redundant information

Intros that restate the heading. Section labels that repeat the page title. Cards that echo their own caption. Make every word earn its place.

[See in /impeccable](https://impeccable.style/docs/impeccable#interaction)

### Responsive

1 rule

Export to CSV

"Not available on mobile."

QualityLLM only

### Amputating features on mobile

Hiding critical functionality on mobile because it is inconvenient. Adapt the interface to the context, do not strip it.

[See in /impeccable](https://impeccable.style/docs/impeccable#responsive)

### General quality

7 rules

Buy now2px vertical padding.

QualityBrowser

### Cramped padding

Text is too close to the edge of its container. Add at least 8px (ideally 12-16px) of padding inside bordered or colored containers.

Justified text on screens creates rivers of whitespace because browsers can't hyphenate well. Leave this for print.

QualityCLI

### Justified text

Justified text without hyphenation creates uneven word spacing ("rivers of white"). Use text-align: left for body text, or enable hyphens: auto if you must justify.

Light gray text on a white background. 1.6:1 contrast, fails WCAG.

QualityCLI

### Low contrast text

Text does not meet WCAG AA contrast requirements (4.5:1 for body, 3:1 for large text). Increase the contrast between text and background.

# Page title (h1)

### Subsection (h3), skipped h2

QualityCLI

### Skipped heading level

Heading levels should not skip (e.g. h1 then h3 with no h2). Screen readers use heading hierarchy for navigation. Skipping levels breaks the document outline.

Tight leading makes multi-line body text feel crammed and hard for the eye to track between lines.

QualityCLI

### Tight line height

Line height below 1.3x the font size makes multi-line text hard to read. Use 1.5 to 1.7 for body text so lines have room to breathe.

Regular body text

And then fine print at 9 pixels that no one will ever read.

QualityCLI

### Tiny body text

Body text below 12px is hard to read, especially on high-DPI screens. Use at least 14px for body content, 16px is ideal.

Wide tracking on body text slows reading by breaking up natural character groupings.

QualityCLI

### Wide letter spacing on body text

Letter spacing above 0.05em on body text disrupts natural character groupings and slows reading. Reserve wide tracking for short uppercase labels only.

## 04 Run it yourself

Inside /impeccable critique

### [/impeccable critique](https://impeccable.style/docs/critique)

The design review command opens the overlay automatically during its browser assessment pass. Deterministic findings highlighted in place while the LLM runs its separate heuristic review.

Standalone CLI

### `npx impeccable live`

Starts a local server that serves the detector script. Inject it into any page via a `<script>` tag to see the overlay. Works on your own dev server, a staging URL, or anyone's live page.

Easiest

### Chrome extension

One-click activation on any tab. [Install from Chrome Web Store →](https://chromewebstore.google.com/detail/impeccable/bdkgmiklpdmaojlpflclinlofgjfpabf)

Impeccable[Designing](https://impeccable.style/designing) [Docs](https://impeccable.style/docs) [Slop](https://impeccable.style/slop) [Live Mode](https://impeccable.style/live-mode) [Privacy](https://impeccable.style/privacy) [GitHub](https://github.com/pbakaus/impeccable)

Created by [Paul Bakaus](https://x.com/pbakaus) [Follow on X](https://x.com/pbakaus) [Connect on LinkedIn](https://linkedin.com/in/paulbakaus)