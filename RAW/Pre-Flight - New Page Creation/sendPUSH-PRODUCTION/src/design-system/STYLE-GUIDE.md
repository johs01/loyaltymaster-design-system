# sendPUSH | Loyaltymaster Design System -- Style Guide

> Last updated: 2026-04-09
> Architecture: CSS custom properties (`--wr-*` / `--wf-*` prefixes) loaded via external stylesheets.
> All styling flows through `withremy.css` (core tokens) and `wireframe-remy.css` (component styles).
> Tailwind CSS is installed but utility classes are not used -- the config mirrors CSS variables for future use.

---

## 1. Color System

### 1.1 Text / Ink Colors

| Token | CSS Variable | Light | Dark | Usage |
|-------|-------------|-------|------|-------|
| ink | `var(--wr-ink)` | `#302127` | `#f5edf1` | Primary body text |
| textMuted | `var(--wr-text-muted)` | `#979093` | `#d0c3c9` | Secondary text, labels |
| textSubtle | `var(--wr-text-subtle)` | `#bfb8bc` | `#a99ca3` | Placeholder text, hints |
| ctaConvText | `var(--wf-cta-conv-text)` | `#2a1f16` | `#2a1f16` | CTA button label text (always on yellow bg) |

### 1.2 Background Colors

| Token | CSS Variable | Light | Dark | Usage |
|-------|-------------|-------|------|-------|
| white (surface) | `var(--wr-white)` | `#ffffff` | `#1a1519` | Page bg, cards |
| bgPeach | `var(--wr-bg-peach)` | `#fef0e9` | `#231c21` | Hero, tenant trial |
| bgCyan | `var(--wr-bg-cyan)` | `#eaf5f8` | `#1b252b` | Problem section |
| bgSalmon | `var(--wr-bg-salmon)` | `#fde9e2` | `#281f1c` | Use case, process |
| bgPanelGray | `var(--wr-bg-panel-gray)` | `#f4eff2` | `#2c252b` | Pricing toggle, inputs |
| bgPanelLight | `var(--wr-bg-panel-light)` | `#faf8f9` | `#221b20` | Cards, FAQ items |
| bgYellow | `var(--wr-bg-yellow)` | `#fef9e6` | `#2a2318` | Process card (yellow variant) |
| sectionDarkBg | `var(--wf-section-dark-bg)` | `#302127` | `#141015` | Dark CTA section |
| hoverBgSubtle | `var(--wf-hover-bg-subtle)` | `#fbfcfd` | `rgba(255,248,251,0.06)` | Card/FAQ hover tint |

### 1.3 Accent Colors

| Token | CSS Variable | Light | Dark | Usage |
|-------|-------------|-------|------|-------|
| accentOrange | `var(--wr-accent-orange)` | `#f37d39` | `#ff9d63` | Hover states, active nav, focus rings |
| accentBlue | `var(--wr-accent-blue)` | `#4c93af` | `#72bdd9` | Process step, avatar, success |
| accentYellow | `var(--wr-accent-yellow)` | `#fcb827` | `#ffd25d` | CTA bg, pricing toggle, brand dot |
| accentYellowSoft | `var(--wr-accent-yellow-soft)` | `#fdd564` | `#ffe58a` | CTA gradient |
| tagYellow | `var(--wr-tag-yellow)` | `#fff3c4` | `#5a4a1f` | Tags, badges |

### 1.4 Feedback Colors

| Token | CSS Variable | Light | Dark | Usage |
|-------|-------------|-------|------|-------|
| feedbackError | `var(--wf-feedback-error)` | `#d94f3a` | `#f27c6a` | Error text, error borders |
| feedbackErrorBg | `var(--wf-feedback-error-bg)` | `#fde8e4` | `#2d1c1a` | Error background |
| feedbackWarning | `var(--wf-feedback-warning)` | `#c48a12` | `#f0b840` | Warning text |
| feedbackWarningBg | `var(--wf-feedback-warning-bg)` | `#fef4dc` | `#2a2318` | Warning background |
| feedbackSuccess | `var(--wf-feedback-success)` | `#2e8e7a` | `#5cc4ae` | Success text, success borders |
| feedbackSuccessBg | `var(--wf-feedback-success-bg)` | `#e4f5f1` | `#192825` | Success background |
| feedbackInfo | `var(--wf-feedback-info)` | `#3a7a94` | `#6db5d0` | Info text |
| feedbackInfoBg | `var(--wf-feedback-info-bg)` | `#e6f1f5` | `#1a2328` | Info background |

### 1.5 Design Decisions

- **ctaConvText stays `#2a1f16` in both modes.** This token is only used on yellow CTA backgrounds, which remain vivid in dark mode. A separate dark value would reduce contrast.
- **hoverBgSubtle (`#fbfcfd`) is intentionally close to white.** It provides a near-invisible tint on hover to give tactile feedback without visual heaviness.

---

## 2. Typography

### Font Families

- **Display:** `"Rodger Bold", "Rodger Bold Placeholder", Arial, sans-serif` -- headings, stat values, prices
- **Display variable:** `var(--wr-font-display)` -- same stack, available as a CSS custom property
- **Body:** `"Onest", "Onest Placeholder", sans-serif` -- body text, UI elements
- **Brand wordmark:** `"Lato", sans-serif` -- live text logo for `sendPUSH | Loyaltymaster`

### Type Scale

| Name | CSS Class | Font | Weight | Size | Line-Height | Letter-Spacing |
|------|-----------|------|--------|------|-------------|----------------|
| h1 | `wr-h1` | Rodger Bold | 700 | clamp(40px, 5.6vw, 72px) | 1.03 | clamp(-0.5px, -0.012em, -0.8px) |
| h2 | `wr-h2` | Rodger Bold | 700 | clamp(30px, 4vw, 52px) | 1.05 | clamp(-0.3px, -0.01em, -0.6px) |
| h3 | `wr-h3` | Rodger Bold | 700 | clamp(22px, 2.8vw, 36px) | 1.1 | clamp(-0.2px, -0.008em, -0.4px) |
| body | `wr-text-body` | Onest | 400 | 20px (tablet: 18px, mobile: 16px) | 1.56 | -0.4px |
| eyebrow | `wf-eyebrow` | Onest | 700 | 16px (mobile: 14px) | 16px | -0.2px, uppercase |
| statValue | `wf-stat-value` | Rodger Bold | 400 | 44px (mobile: 30px) | 44px | -0.8px |
| statLabel | `wf-stat-label` | Onest | 500 | 18px (mobile: 14px) | 22px | -0.3px |
| quote | `wf-quote` | Onest | 400 | 20px (mobile: 16px) | 26px | -0.4px |
| quoteAuthor | `wf-quote-author` | Onest | 600 | 16px (mobile: 14px) | 16px | -0.3px |
| ctaLabel | `wr-cta-join__label` | Onest | 700 | 20px | 20px | -0.4px |
| navLink | `wf-nav-links a` | Onest | 600 | 16px (tablet: 14px) | 16px | -0.32px |
| brandLogo | `brand-logo` + child classes | Lato | 900 / 400 | clamp(18.48px, 2.112vw, 30.888px) | 0.9 | mixed: send -0.035em, loyalty -0.041em |
| pricingValue | `wf-pricing-value` | Rodger Bold | 400 | 44px (tablet: 40px, mobile: 34px) | 44px | -0.8px |
| pricingPlanName | `wf-pricing-plan-name` | Onest | 700 | 28px (tablet: 24px, mobile: 22px) | 28px | -0.52px |
| featureCardTitle | `wf-feature-card h3` | Onest | 700 | 24px (mobile: 20px) | 24px | -0.48px |
| faqTrigger | `wf-faq-trigger` | Onest | 700 | 20px (mobile: 16px) | 24px | -0.35px |
| footerHeading | `wf-footer-heading` | Onest | 700 | 15px | 15px | -0.24px |
| footerLink | `wf-footer-link` | Onest | 500 | 15px | 18px | -0.2px |
| tenantLabel | `wf-tenant-label` | Onest | 700 | 15px (tablet/mobile: 14px) | 15px | -0.24px |
| tenantInput | `wf-tenant-input` | Onest | 500 | 18px (tablet/mobile: 16px) | 18px | -0.3px |

---

## 3. Spacing

### Values In Use (px)
4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 48, 56, 64, 68, 72, 84, 96, 108

### Border Radius

| Token | CSS Variable | Value |
|-------|-------------|-------|
| pill | `var(--wr-r-pill)` | 999px |
| 20 | `var(--wr-r-20)` | 20px |
| 16 | `var(--wr-r-16)` | 16px |
| 12 | `var(--wr-r-12)` | 12px |
| 8 | `var(--wr-r-8)` | 8px |
| 7 | (brand dot) | 7px |

---

## 4. Layout

### Breakpoints

| Name | Range | Container (main) | Container (focus) | Section Padding |
|------|-------|-------------------|-------------------|-----------------|
| Mobile | < 800px | 360px | 392px | 56px 0 |
| Tablet | 800px - 1399px | 100% | 100% | 72px 0 |
| Desktop | >= 1400px | 1280px | 840px | 84px 0 |

### Container Classes

```html
<div class="wr-container--main">   <!-- max-width: 1280px -->
<div class="wr-container--focus">  <!-- max-width: 840px -->
<div class="wr-container--cta">    <!-- max-width: 640px -->
```

### Grid Patterns

| Pattern | Desktop | Tablet | Mobile | Gap |
|---------|---------|--------|--------|-----|
| Hero / Split | 1fr 1fr | 1fr | 1fr | 48px / 30px |
| Feature Grid | 3-col | 2-col | 1-col | 18px |
| Pricing Grid | 3-col | 1-col | 1-col | 18px |
| Process Grid | 3-col | 1-col | 1-col | 18px |
| Stats Grid | 4-col | 2-col | 2-col | 16px / 10px |
| Logo Grid | 6-col | 4-col | 2-col | 12px / 10px |
| Testimonial Grid | 3-col | 1-col | 1-col | 18px / 10px |
| Footer Grid | 4-col (1.2fr 1fr 1fr 1.12fr) | 2-col | 1-col | 24px |

---

## 5. Shadows

| Name | CSS Variable | Value |
|------|-------------|-------|
| badge | `var(--wr-shadow-badge)` | 0 7px 0 0 rgba(48,33,39,0.82) |
| email | `var(--wr-shadow-email)` | 0 4px 0 rgba(252,184,39,0.35), inset 0 0 0 2px rgba(252,184,39,0.45) |
| cardBase | (inline) | 0 8px 20px rgba(48,33,39,0.06) |
| cardHover | (inline) | 0 14px 26px rgba(48,33,39,0.12) |

---

## 6. Transitions & Motion

| Token | CSS Variable | Value |
|-------|-------------|-------|
| easeGentle | `var(--wf-motion-ease-gentle)` | cubic-bezier(0.2, 0.8, 0.2, 1) |
| easeStandard | `var(--wf-motion-ease-standard)` | cubic-bezier(0.4, 0, 0.2, 1) |
| fast | `var(--wf-motion-fast)` | 220ms |
| base | `var(--wf-motion-base)` | 280ms |
| reveal | (inline) | 0.56s cubic-bezier(0.22, 1, 0.36, 1) |
| cardHover | (inline) | 0.24s cubic-bezier(0.2, 0.8, 0.2, 1) |

### CTA Hover Mechanics
- `--wf-cta-lift-hover`: -1.5px (translateY)
- `--wf-cta-lift-active`: -0.75px (translateY)
- Sheen slides via ::before pseudo-element
- Orange border-color on hover: rgba(243, 125, 57, 0.48)

### Focus Pattern
All interactive elements use: `outline: 2px solid rgba(243, 125, 57, 0.92); outline-offset: 2px;`

### Reduced Motion
All animations respect `prefers-reduced-motion: reduce` via a comprehensive override block.

---

## 7. Components

### 7.1 CTA Join Button

```html
<a class="wr-cta-join wf-btn" href="#target">
  <span class="wr-cta-join__label">Button Text</span>
</a>
```

Yellow background (`--wr-accent-yellow`), orange edge shadow, sheen animation on hover.

React primitive: `CtaButton` from `src/components/MarketingPrimitives.tsx`.

### 7.2 Email CTA

```html
<div class="wf-email-cta" role="group" aria-label="...">
  <label class="wf-visually-hidden" for="id">Email</label>
  <input class="wf-email-cta__input" id="id" type="email" placeholder="name@email.com" />
  <a class="wf-email-cta__button" href="#target">CTA Text</a>
</div>
```

Pill-shaped shell with lift + radial glow on hover. All hover/glow styles are in `wireframe-remy.css`.

React primitive: `EmailCta` from `src/components/MarketingPrimitives.tsx`. Use `onSubmit` when the email value should be forwarded to the tenant trial form; otherwise it renders as a regular anchor to the trial section.

### 7.3 Eyebrow

```html
<p class="wf-eyebrow">Section Label</p>
<p class="wf-eyebrow wf-eyebrow-dark">Dark Variant</p>
```

### 7.4 Process Cards

```html
<article class="wr-card-process wr-card-process--orange">
  <div class="wr-pill-step">
    <span class="wf-step-badge wf-step-badge--orange">1</span>
    <span class="wr-pill-step__title">Step Title</span>
  </div>
  <p class="wr-text-body">Description</p>
</article>
```

Variants: `--orange`, `--blue`, `--yellow`

### 7.5 Feature Card

```html
<article class="wf-feature-card">
  <span class="wf-feature-icon wf-feature-icon--orange" aria-hidden="true"></span>
  <h3>Title</h3>
  <p>Description</p>
</article>
```

Icon variants: `--orange`, `--blue`, `--yellow`

### 7.6 Stat Card

```html
<article class="wf-stat-card">
  <p class="wf-stat-value">95%</p>
  <p class="wf-stat-label">Label</p>
</article>
```

### 7.7 Testimonial Card

```html
<article class="wf-testimonial-card">
  <p class="wf-quote">"Quote text"</p>
  <p class="wf-quote-author">Author</p>
</article>
```

Dark variant: add `wf-testimonial-card-dark`, `wf-quote-dark`, `wf-quote-author-dark`

### 7.8 Capabilities Testimonial Card

```html
<article class="wf-cap-testimonial-card">
  <div class="wf-cap-testimonial-stars" role="img" aria-label="5 stars">
    <span class="wf-cap-testimonial-star" aria-hidden="true">&#9733;</span><!-- x5 -->
  </div>
  <p class="wf-cap-testimonial-quote">"Quote"</p>
  <div class="wf-cap-testimonial-person">
    <div class="wf-cap-testimonial-avatar" aria-hidden="true">AB</div>
    <div class="wf-cap-testimonial-meta">
      <p class="wf-quote-author">Name</p>
      <p class="wf-cap-testimonial-role">Role</p>
    </div>
  </div>
</article>
```

### 7.9 Pricing Card

```html
<article class="wf-pricing-card"><!-- or wf-pricing-card wf-pricing-card--pro -->
  <div class="wf-pricing-card-top">
    <h3 class="wf-pricing-plan-name">Plan</h3>
    <p class="wf-pricing-plan-copy">Description</p>
    <div class="wf-pricing-value-block">
      <div class="wf-pricing-value-row">
        <span class="wf-pricing-value">$19</span>
        <span class="wf-pricing-period">/month</span>
      </div>
      <p class="wf-pricing-billed">Billed <span class="wf-pricing-billed-label">monthly</span>.</p>
    </div>
  </div>
  <div class="wf-pricing-card-bottom">
    <a class="wf-pricing-card-cta" href="#target">Get Started</a>
    <ul class="wf-pricing-list">
      <li><span class="wf-pricing-list-dot" aria-hidden="true"></span><span>Feature</span></li>
    </ul>
  </div>
</article>
```

### 7.10 Pricing Toggle

```html
<div class="wf-pricing-toggle" role="group" aria-label="Billing period">
  <button class="wf-pricing-toggle-btn is-active" type="button">Monthly</button>
  <button class="wf-pricing-toggle-btn" type="button">
    <span>Yearly</span>
    <span class="wf-pricing-toggle-badge">30% OFF</span>
  </button>
</div>
```

### 7.11 FAQ Item

```html
<div class="wf-faq-item" data-open="true">
  <button class="wf-faq-trigger" type="button" aria-expanded="true">Question?</button>
  <div class="wf-faq-answer" role="region">
    <p>Answer text.</p>
  </div>
</div>
```

### 7.12 Checklist

```html
<ul class="wf-checklist">
  <li>Item text</li>
</ul>
```

React primitive: `Checklist` from `src/components/MarketingPrimitives.tsx`.

### 7.13 Tenant Form

```html
<form class="wf-tenant-form">
  <div class="wf-tenant-form-grid">
    <div class="wf-tenant-field">
      <label class="wf-tenant-label" for="id">Label <span aria-hidden="true">*</span></label>
      <input class="wf-tenant-input" id="id" type="text" placeholder="..." required />
      <p class="wf-field-error">Error message here</p>
    </div>
    <div class="wf-tenant-field wf-tenant-field--full"><!-- full-width field --></div>
  </div>
  <div class="wf-tenant-actions">
    <button class="wf-tenant-submit" type="submit">Submit</button>
  </div>
</form>
```

### 7.14 Interactive State Modifiers

**Disabled:** Add `disabled` attribute to any form input or button. Applies `opacity: 0.5`, `cursor: not-allowed`, and suppresses hover effects.

**Error:** Add `wf-tenant-input--error` to an input for red border + glow. Add `wf-email-cta--error` to the email CTA shell for red glow variant. Use `wf-field-error` for error message text below inputs.

**Loading:** Add `wf-btn--loading` to any CTA button. Hides content and shows a CSS spinner. Works on `wf-tenant-submit`, `wf-email-cta__button`, and `wr-cta-join`.

```html
<!-- Error state -->
<input class="wf-tenant-input wf-tenant-input--error" ... />
<p class="wf-field-error">This field is required.</p>

<!-- Loading state -->
<button class="wf-tenant-submit wf-btn--loading" type="submit">
  <span>Submit</span>
</button>

<!-- Disabled state -->
<button class="wf-tenant-submit" disabled>Submit</button>
```

---

## 8. Section Backgrounds

| Class | Usage |
|-------|-------|
| `wf-bg-peach` | Hero, tenant trial |
| `wf-bg-cyan` | Problem section |
| `wf-bg-salmon` | Use case 1, process |
| `wf-bg-white` | Stats, features, pricing, FAQ |
| `wf-bg-dark` | Final CTA, dark testimonial |

---

## 9. Scroll Reveal Animation

```html
<div class="reveal" data-reveal-order="0">
  <!-- Content animates in when visible -->
</div>
```

- `data-reveal-order`: stagger delay = order * 80ms
- Initial: `opacity: 0; transform: translate3d(0, 24px, 0)`
- Visible: `opacity: 1; transform: translateY(0)`
- Duration: 0.56s `cubic-bezier(0.22, 1, 0.36, 1)`
- Threshold: 0.12 (IntersectionObserver)

---

## 10. Dark Mode

Dark mode is handled entirely via CSS custom properties:
- `html[data-theme="dark"]` block overrides all `--wr-*` and `--wf-*` variables
- `@media (prefers-color-scheme: dark)` fallback for `html:not([data-theme])` (prevents FOUC before JS runs)
- Both blocks MUST stay in sync -- changes to one require the same change in the other
- Theme toggle stores preference in localStorage key `wf-theme-mode`
- Theme transition: controlled via `.theme-animating` class
