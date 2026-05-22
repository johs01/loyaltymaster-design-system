# Design system documentation for LLMs  
Modern AI-driven workflows use a **single source of truth** for design tokens and component specs so an LLM always applies the right styles and patterns. For example, Google Labs published **DESIGN.md**, an open format that keeps colors, type scales, spacing, etc. in a YAML header, with sections (Colors, Typography, Components, etc.) in Markdown【19†L61-L70】【19†L75-L83】. This “AI-native” file pairs machine-readable tokens with human-readable notes, so the model knows both *what* to use (hex codes, font names, token names) and *why*【19†L99-L107】. In practice you might export your palette and typographic scale as JSON or Tailwind config, but also include plain-language guidelines. For example, use semantic token names like `color-button-background-brand` instead of “blue-500” to convey purpose【10†L125-L133】【19†L61-L70】.  

Key elements to include:  
- **Design Tokens:** Colors (with semantic roles), typography (family, sizes, weights), spacing units, border-radius.  Store them in JSON/YAML or CSS variables for code, and list them in the doc【19†L61-L70】.  
- **Usage Rules:** Describe when to use each token. E.g. “Primary CTA uses `color-button-background-brand` with white text.” This helps the LLM apply tokens correctly【19†L99-L107】.  
- **Accessibility:** Ensure all text-color combinations meet contrast standards. You can have the LLM verify WCAG compliance as part of the process【1†L553-L561】.  

By writing the design system in a structured, version-controlled doc (e.g. a Markdown file or JSON in the repo), the LLM will “read” it as context. As Sebastien Dubois explains, this approach gives the agent both the raw values *and* the rationale, so it can style new components on-brand instead of falling back to generic defaults【19†L99-L107】【10†L125-L133】.

## Describing components and patterns  
Beyond tokens, list every **UI component** and its variants in a simple format the AI can parse. For instance, keep a markdown file (or JSON) that enumerates components by name, describes their purpose, and lists their props/variants【13†L138-L147】. Gerard Pàmies suggests a table like:

```
# FeatureCard
| Name      | Description                          | Values                    |
|-----------|--------------------------------------|---------------------------|
| featureTitle | Title of the feature             | string                    |
| description   | Short text describing feature  | string                    |
| icon        | Icon image for the feature        | URL/string                |
```

Each component entry explains what it is and what content it holds【13†L138-L147】. You can also note nested components (e.g. a “card” used inside a hero) under a sub-heading. The key is clarity: an AI agent benefits from an inventory of components and props so it can “build with your existing library”【6†L149-L157】. Even if you don’t have a coded library yet, defining components as structured data (JSON or YAML) is ideal – LLMs handle that better than raw screenshots or Figma links【10†L190-L197】【19†L99-L107】.  

In practice, a design system document might include:  
- **Component List:** Each component’s name, description, allowed content (text fields, images), and variants (e.g. “primary” vs “secondary” button)【13†L138-L147】.  
- **Behavior Notes:** Any interactive behavior (hover states, mobile layout, toggles) or logic (e.g. “When clicked, this CTA leads to signup page”). These can be written in simple bullet points under each component.  
- **Examples:** For complex patterns (like a pricing table or comparison list), include a small table or list describing its structure. For instance, a “Comparison Table” might have columns labeled “Product vs Competitor” and rows of features. This tells the model how to fill it.  

Oleksandra Huba also advises to name layers and components semantically (e.g. “HeroBanner” not “Frame 3”), use auto-layout for clear structure, and annotate any special interactions (like sliders or tabs) in Figma so the AI can pick them up【10†L91-L100】【10†L136-L139】. In text docs, you achieve the same effect by explicitly stating the structure and relationships.  

## Writing the marketing brief for AI  
The marketing brief (content plan) should be as structured as the design system. Instead of a free-form note, imagine a clear outline of the page sections with all the words and images needed. For example, a brief might list sections like **Hero**, **Problem**, **Features**, **SocialProof**, **Pricing**, etc., and under each, provide the exact headline text, body copy, CTA labels, and image references. This could be a markdown file or simple JSON. The AI can then replace placeholders in the generated code. 

From community examples, a good prompt to Claude Code might say: 

- “Replace all placeholder copy with real strings from the marketing brief at [URL]”【26†L339-L344】.  

This implies the brief is an accessible document (e.g. a shared Markdown or Google Doc) containing the actual marketing copy. You would format it like: 

```
# Marketing Brief

## Hero Section
- Headline: "Get More Customers with AI-Powered Loyalty"
- Subheadline: "Transform your marketing with next-gen rewards in Wallet."
- CTA Button: "Start Free Trial"
- Image: features.png (an illustration of mobile wallets)

## Features Section
- List of features: "Mobile-first, Seamless integration, Real-time analytics..."
- ... 
```

By labeling each piece of content and its target section, the AI knows where to put it. In Claude Code, you’d instruct it to pull from this brief after laying out the page structure【26†L339-L344】. In other words, give the model a clear “content map”: section names + text. 

Importantly, use straightforward language. Don’t rely on vague adjectives (“modern”, “deluxe”) – those confuse AI. Instead say exactly what content goes where and which existing components to use. For example: *“Build a three-column feature grid using our `FeatureCard` components. Insert these three bullet points as feature titles: X, Y, Z”*. Including images with captions or alt-text (which also serve as content cues) can help as well. 

Keep it modular: feed the design system document and the marketing brief separately but allow the AI to cross-reference them. For instance, Claude Code’s `/bundle` skill takes the HTML/CSS scaffold from design and then you can feed a second prompt telling it to swap in copy from the brief【26†L339-L344】. This two-part approach (structure + content) yields a pixel-perfect page.

## Example prompt for Claude Code (component screenshot)  
*User request:* “Describe this component screenshot so it can be added to our design system docs.”  

A suitable prompt might be:

> **Prompt:**  
> “Analyze the attached screenshot: it shows our **Features Comparison List** component. In Markdown, describe this component’s name, purpose, structure, and contents. Include a heading with the component name (e.g. `## FeaturesComparisonList`), a brief description, and a table or bullet list of its fields. List each column header and the sample items under it. Also note any visible style tokens (colors, fonts, spacing) if identifiable. Follow the style of our DESIGN.md documentation (tokens in YAML front-matter and sections in markdown)【19†L61-L70】.”

This tells Claude Code to “look at” the image (using its vision skill) and output a structured description. The result should be a chunk of Markdown you can paste into your design system. It might produce something like:

```
## FeaturesComparisonList
A side-by-side comparison table that shows feature availability for two product plans.

| Feature            | Basic Plan         | Premium Plan       |
|--------------------|--------------------|--------------------|
| Unlimited projects | ✔️                 | ✔️                 |
| Analytics reports  | ❌                 | ✔️                 |
| Email support      | ✔️ (community)     | ✔️ (24/7)          |

Style notes: Uses `color-heading` for the title, 24px font for headings, spacing tokens [16px] between columns【10†L125-L133】【19†L61-L70】.
```

By explicitly asking for markdown with component metadata, the LLM will produce a concise entry ready for your docs. In practice, you would attach the screenshot (or its file path) to Claude Code so it can perform image analysis, then prompt as above. The key is instructing it to output *the same format you use for other components* (see DESIGN.md and the examples in our design docs【19†L61-L70】【13†L138-L147】).

**Sources:** Design system experts recommend giving AI both the raw tokens and clear instructions/annotations【19†L61-L70】【10†L125-L133】. Teams share that a pre-written design-guidelines doc (saved as `CLAUDE.md` or `DESIGN.md`) plus a structured brief yields consistent, on-brand results【6†L113-L122】【26†L339-L344】. These practices—semantic tokens, component inventories, and structured prompts—are widely discussed in AI+design forums and appear to be the most future-proof approach.