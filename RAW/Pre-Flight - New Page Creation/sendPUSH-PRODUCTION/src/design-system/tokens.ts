/*
 * ============================================================================
 * PHASE 1 AUDIT REPORT — sendPUSH | Loyaltymaster Design System
 * ============================================================================
 *
 * 1.1 TAILWIND CONFIG AUDIT
 * -------------------------
 * The tailwind.config.js defines only ONE custom extension:
 *   fontFamily.rodger: ["Rodger Bold", "Rodger Bold Placeholder", Arial, sans-serif]
 *
 * All other styling (colors, spacing, shadows, radii, animations) lives in
 * CSS custom properties across two external stylesheets:
 *   - public/design-system/withremy/withremy.css  (289 lines, core tokens)
 *   - public/wireframe-remy.css                   (4293 lines, component styles)
 *
 * ARBITRARY TAILWIND VALUES: Zero instances found.
 * TAILWIND UTILITY CLASSES IN COMPONENTS: Zero. All className values reference
 *   custom CSS classes (.wf-* and .wr-* prefixes).
 *
 * INLINE STYLES: 3 instances, all identical, on <Image> components:
 *   - src/components/HeroSection.tsx:41
 *   - src/components/ProblemSection.tsx:37
 *   - src/components/UseCaseSection.tsx:52
 *   Value: { width: "100%", height: "100%", objectFit: "contain",
 *            display: "block", borderRadius: "inherit" }
 *
 * 1.2 COMPONENT INVENTORY
 * -----------------------
 * | Component            | File                                  | Props | Variants                  | Used In |
 * |----------------------|---------------------------------------|-------|---------------------------|---------|
 * | Nav                  | src/components/Nav.tsx                | 0     | scrolled, mobile-open     | App     |
 * | HeroSection          | src/components/HeroSection.tsx        | 0     | none                      | App     |
 * | AwardsStrip          | src/components/AwardsStrip.tsx        | 0     | none                      | App     |
 * | LogoGrid             | src/components/LogoGrid.tsx           | 0     | none                      | App     |
 * | StatsSection         | src/components/StatsSection.tsx       | 0     | none                      | App     |
 * | ProblemSection       | src/components/ProblemSection.tsx     | 0     | none                      | App     |
 * | TestimonialSection   | src/components/TestimonialSection.tsx | 11    | dark, showEmailCta        | App x2  |
 * | UseCaseSection       | src/components/UseCaseSection.tsx     | 9     | reversed                  | App x3  |
 * | FeaturesSection      | src/components/FeaturesSection.tsx    | 0     | none (contains 2 sections)| App     |
 * | ComparisonSection    | src/components/ComparisonSection.tsx  | 0     | none                      | App     |
 * | PricingSection       | src/components/PricingSection.tsx     | 0     | monthly/yearly state      | App     |
 * | ProcessSection       | src/components/ProcessSection.tsx     | 0     | none                      | App     |
 * | FaqSection           | src/components/FaqSection.tsx         | 0     | open/closed state         | App     |
 * | FinalCtaSection      | src/components/CtaSections.tsx        | 0     | none                      | App     |
 * | TenantTrialSection   | src/components/CtaSections.tsx        | 0     | none                      | App     |
 * | Footer               | src/components/Footer.tsx             | 0     | none                      | App     |
 *
 * DUPLICATED PATTERNS (not extracted):
 *   - Email CTA group (input + button shell): appears in HeroSection,
 *     TestimonialSection (dark), ProcessSection, FinalCtaSection = 4 instances
 *   - CTA join button (wr-cta-join): ProblemSection, UseCaseSection x3,
 *     ComparisonSection, TestimonialSection = 6 instances
 *   - Checklist (wf-checklist): HeroSection, UseCaseSection x3 = 4 instances
 *
 * 1.3 TYPOGRAPHY MAP
 * ------------------
 * See tokens.typography below for every unique text style.
 *
 * 1.4 COLOR AUDIT
 * ---------------
 * See tokens.colors below. All colors extracted from :root and dark mode blocks.
 *
 * RESOLVED FLAGS:
 *   [FLAG-1] RESOLVED — --wf-cta-conv-text (#2a1f16) stays as-is. It always
 *     sits on yellow CTA backgrounds so it remains #2a1f16 in both light/dark.
 *   [FLAG-2] RESOLVED — #fef9e6 tokenized as --wr-bg-yellow (withremy.css).
 *   [FLAG-3] RESOLVED — #fbfcfd consolidated into --wf-hover-bg-subtle, used
 *     by --wf-faq-hover-bg, --wf-feature-hover-bg, --wf-cap-testimonial-hover-bg.
 *   [FLAG-4] RESOLVED — --wr-font-display fallback changed to Arial, sans-serif.
 *
 * 1.5 SPACING & LAYOUT PATTERNS
 * ------------------------------
 * See tokens.spacing and tokens.layout below.
 *
 * 1.6 INTERACTIVE STATES
 * ----------------------
 * Hover: Present on all interactive elements (buttons, cards, links, inputs)
 * Focus: focus-visible with consistent orange outline (2px solid rgba(243,125,57,0.92))
 * Active: Present on CTA buttons (reduced lift)
 * Disabled: GAP - No disabled states on any form inputs or buttons
 * Loading: GAP - No loading state on tenant form submit
 * Error: GAP - No error/validation states on form fields
 * ============================================================================
 */

export const tokens = {
  colors: {
    ink: {
      light: '#302127',
      dark: '#f5edf1',
      css: 'var(--wr-ink)',
    },
    textMuted: {
      light: '#979093',
      dark: '#d0c3c9',
      css: 'var(--wr-text-muted)',
    },
    textSubtle: {
      light: '#bfb8bc',
      dark: '#a99ca3',
      css: 'var(--wr-text-subtle)',
    },
    white: {
      light: '#ffffff',
      dark: '#1a1519',
      css: 'var(--wr-white)',
    },

    bgPeach: {
      light: '#fef0e9',
      dark: '#231c21',
      css: 'var(--wr-bg-peach)',
    },
    bgCyan: {
      light: '#eaf5f8',
      dark: '#1b252b',
      css: 'var(--wr-bg-cyan)',
    },
    bgSalmon: {
      light: '#fde9e2',
      dark: '#281f1c',
      css: 'var(--wr-bg-salmon)',
    },
    bgPanelGray: {
      light: '#f4eff2',
      dark: '#2c252b',
      css: 'var(--wr-bg-panel-gray)',
    },
    bgPanelLight: {
      light: '#faf8f9',
      dark: '#221b20',
      css: 'var(--wr-bg-panel-light)',
    },

    accentOrange: {
      light: '#f37d39',
      dark: '#ff9d63',
      css: 'var(--wr-accent-orange)',
    },
    accentBlue: {
      light: '#4c93af',
      dark: '#72bdd9',
      css: 'var(--wr-accent-blue)',
    },
    accentYellow: {
      light: '#fcb827',
      dark: '#ffd25d',
      css: 'var(--wr-accent-yellow)',
    },
    accentYellowSoft: {
      light: '#fdd564',
      dark: '#ffe58a',
      css: 'var(--wr-accent-yellow-soft)',
    },
    tagYellow: {
      light: '#fff3c4',
      dark: '#5a4a1f',
      css: 'var(--wr-tag-yellow)',
    },

    ctaConvText: {
      light: '#2a1f16',
      dark: '#2a1f16',
      css: 'var(--wf-cta-conv-text)',
    },

    onDark: {
      light: '#ffffff',
      dark: '#fff8fb',
      css: 'var(--wf-on-dark)',
    },
    onDarkMuted: {
      light: 'rgba(255, 255, 255, 0.8)',
      dark: 'rgba(255, 248, 251, 0.8)',
      css: 'var(--wf-on-dark-muted)',
    },

    sectionDarkBg: {
      light: '#302127',
      dark: '#141015',
      css: 'var(--wf-section-dark-bg)',
    },

    bgYellow: {
      light: '#fef9e6',
      dark: '#2a2318',
      css: 'var(--wr-bg-yellow)',
    },

    hoverBgSubtle: {
      light: '#fbfcfd',
      dark: 'rgba(255, 248, 251, 0.06)',
      css: 'var(--wf-hover-bg-subtle)',
    },
    faqHoverBg: {
      light: '#fbfcfd',
      dark: 'rgba(255, 248, 251, 0.1)',
      css: 'var(--wf-faq-hover-bg)',
    },
    featureHoverBg: {
      light: '#fbfcfd',
      dark: 'rgba(255, 248, 251, 0.08)',
      css: 'var(--wf-feature-hover-bg)',
    },

    feedbackError: {
      light: '#d94f3a',
      dark: '#f27c6a',
      css: 'var(--wf-feedback-error)',
    },
    feedbackErrorBg: {
      light: '#fde8e4',
      dark: '#2d1c1a',
      css: 'var(--wf-feedback-error-bg)',
    },
    feedbackWarning: {
      light: '#c48a12',
      dark: '#f0b840',
      css: 'var(--wf-feedback-warning)',
    },
    feedbackWarningBg: {
      light: '#fef4dc',
      dark: '#2a2318',
      css: 'var(--wf-feedback-warning-bg)',
    },
    feedbackSuccess: {
      light: '#2e8e7a',
      dark: '#5cc4ae',
      css: 'var(--wf-feedback-success)',
    },
    feedbackSuccessBg: {
      light: '#e4f5f1',
      dark: '#192825',
      css: 'var(--wf-feedback-success-bg)',
    },
    feedbackInfo: {
      light: '#3a7a94',
      dark: '#6db5d0',
      css: 'var(--wf-feedback-info)',
    },
    feedbackInfoBg: {
      light: '#e6f1f5',
      dark: '#1a2328',
      css: 'var(--wf-feedback-info-bg)',
    },
  },

  typography: {
    h1: {
      fontFamily: '"Rodger Bold", "Rodger Bold Placeholder", Arial, sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(40px, 5.6vw, 72px)',
      lineHeight: 1.03,
      letterSpacing: 'clamp(-0.5px, -0.012em, -0.8px)',
      cssClass: 'wr-h1',
      mobile: { fontSize: 'clamp(32px, 8.5vw, 44px)', letterSpacing: '-0.4px' },
    },
    h2: {
      fontFamily: '"Rodger Bold", "Rodger Bold Placeholder", Arial, sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(30px, 4vw, 52px)',
      lineHeight: 1.05,
      letterSpacing: 'clamp(-0.3px, -0.01em, -0.6px)',
      cssClass: 'wr-h2',
      mobile: { fontSize: 'clamp(26px, 6.8vw, 38px)', letterSpacing: '-0.3px' },
    },
    h3: {
      fontFamily: '"Rodger Bold", "Rodger Bold Placeholder", Arial, sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(22px, 2.8vw, 36px)',
      lineHeight: 1.1,
      letterSpacing: 'clamp(-0.2px, -0.008em, -0.4px)',
      cssClass: 'wr-h3',
      mobile: { fontSize: 'clamp(20px, 5.5vw, 28px)', letterSpacing: '-0.2px' },
    },
    body: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: 1.56,
      letterSpacing: '-0.4px',
      cssClass: 'wr-text-body',
      tablet: { fontSize: '18px', letterSpacing: '-0.36px' },
      mobile: { fontSize: '16px', letterSpacing: '-0.32px' },
    },
    eyebrow: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '16px',
      letterSpacing: '-0.2px',
      textTransform: 'uppercase',
      cssClass: 'wf-eyebrow',
      mobile: { fontSize: '14px', lineHeight: '14px' },
    },
    statValue: {
      fontFamily: '"Rodger Bold", "Rodger Bold Placeholder", Arial, sans-serif',
      fontWeight: 400,
      fontSize: '44px',
      lineHeight: '44px',
      letterSpacing: '-0.8px',
      cssClass: 'wf-stat-value',
      mobile: { fontSize: '30px', lineHeight: '30px', letterSpacing: '-0.6px' },
    },
    statLabel: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '22px',
      letterSpacing: '-0.3px',
      cssClass: 'wf-stat-label',
      mobile: { fontSize: '14px', lineHeight: '17px', letterSpacing: '-0.2px' },
    },
    quote: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '26px',
      letterSpacing: '-0.4px',
      cssClass: 'wf-quote',
      mobile: { fontSize: '16px', lineHeight: '20.8px', letterSpacing: '-0.32px' },
    },
    quoteAuthor: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '16px',
      letterSpacing: '-0.3px',
      cssClass: 'wf-quote-author',
      mobile: { fontSize: '14px', lineHeight: '14px' },
    },
    ctaLabel: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '20px',
      letterSpacing: '-0.4px',
      cssClass: 'wr-cta-join__label',
    },
    navLink: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '16px',
      letterSpacing: '-0.32px',
      cssClass: 'wf-nav-links a',
      tablet: { fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.28px' },
    },
    brandLogo: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 400,
      fontSize: 'clamp(18.48px, 2.112vw, 30.888px)',
      lineHeight: 0.9,
      letterSpacing: 'mixed: send -0.035em, loyalty -0.041em',
      cssClass: 'brand-logo + brand-logo__send + brand-logo__divider + brand-logo__loyalty',
      mobile: { fontSize: 'clamp(13.2px, 3.3vw, 22.44px)', lineHeight: '0.9' },
    },
    pricingValue: {
      fontFamily: '"Rodger Bold", "Rodger Bold Placeholder", Arial, sans-serif',
      fontWeight: 400,
      fontSize: '44px',
      lineHeight: '44px',
      letterSpacing: '-0.8px',
      cssClass: 'wf-pricing-value',
      tablet: { fontSize: '40px', lineHeight: '40px', letterSpacing: '-0.7px' },
      mobile: { fontSize: '34px', lineHeight: '34px', letterSpacing: '-0.58px' },
    },
    pricingPlanName: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 700,
      fontSize: '28px',
      lineHeight: '28px',
      letterSpacing: '-0.52px',
      cssClass: 'wf-pricing-plan-name',
      tablet: { fontSize: '24px', lineHeight: '24px', letterSpacing: '-0.48px' },
      mobile: { fontSize: '22px', lineHeight: '22px', letterSpacing: '-0.44px' },
    },
    featureCardTitle: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '24px',
      letterSpacing: '-0.48px',
      cssClass: 'wf-feature-card h3',
      mobile: { fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.4px' },
    },
    featureCardBody: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '24px',
      letterSpacing: '-0.35px',
      cssClass: 'wf-feature-card p',
      mobile: { fontSize: '16px', lineHeight: '20.8px', letterSpacing: '-0.32px' },
    },
    numberTitle: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '24px',
      letterSpacing: '-0.48px',
      cssClass: 'wf-number-title',
      tablet: { fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.4px' },
      mobile: { fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.4px' },
    },
    faqTrigger: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '24px',
      letterSpacing: '-0.35px',
      cssClass: 'wf-faq-trigger',
      mobile: { fontSize: '16px', lineHeight: '20.8px', letterSpacing: '-0.32px' },
    },
    faqAnswer: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '24px',
      letterSpacing: '-0.32px',
      cssClass: 'wf-faq-answer p',
      mobile: { fontSize: '16px', lineHeight: '20.8px', letterSpacing: '-0.32px' },
    },
    footerHeading: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 700,
      fontSize: '15px',
      lineHeight: '15px',
      letterSpacing: '-0.24px',
      cssClass: 'wf-footer-heading',
    },
    footerLink: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '18px',
      letterSpacing: '-0.2px',
      cssClass: 'wf-footer-link',
    },
    footerMeta: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '-0.2px',
      cssClass: 'wf-footer-meta',
      mobile: { fontSize: '13px', lineHeight: '15px', letterSpacing: '-0.18px' },
    },
    footerCopy: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '22px',
      letterSpacing: '-0.24px',
      cssClass: 'wf-footer-copy',
      mobile: { fontSize: '15px', lineHeight: '19px', letterSpacing: '-0.2px' },
    },
    tenantLabel: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 700,
      fontSize: '15px',
      lineHeight: '15px',
      letterSpacing: '-0.24px',
      cssClass: 'wf-tenant-label',
      tablet: { fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.2px' },
      mobile: { fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.2px' },
    },
    tenantInput: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '18px',
      letterSpacing: '-0.3px',
      cssClass: 'wf-tenant-input',
      tablet: { fontSize: '16px', lineHeight: '16px', letterSpacing: '-0.3px' },
      mobile: { fontSize: '16px', lineHeight: '16px', letterSpacing: '-0.32px' },
    },
    pillStepTitle: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '24px',
      letterSpacing: '-0.42px',
      cssClass: 'wr-pill-step__title',
      tablet: { fontSize: '18px', lineHeight: '22px' },
      mobile: { fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.32px' },
    },
    capTestimonialQuote: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '24px',
      letterSpacing: '-0.35px',
      fontStyle: 'italic',
      cssClass: 'wf-cap-testimonial-quote',
      mobile: { fontSize: '16px', lineHeight: '20.8px', letterSpacing: '-0.32px' },
    },
    capTestimonialRole: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '-0.22px',
      cssClass: 'wf-cap-testimonial-role',
      mobile: { fontSize: '13px', lineHeight: '16px', letterSpacing: '-0.2px' },
    },
    pricingPlanCopy: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20.8px',
      letterSpacing: '-0.28px',
      cssClass: 'wf-pricing-plan-copy',
    },
    pricingListItem: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20.8px',
      letterSpacing: '-0.28px',
      cssClass: 'wf-pricing-list li',
      mobile: { fontSize: '15px', lineHeight: '19px', letterSpacing: '-0.24px' },
    },
    logoStripCopy: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '16px',
      letterSpacing: '-0.2px',
      cssClass: 'wf-logo-strip-copy',
      mobile: { fontSize: '14px', lineHeight: '14px' },
    },
    emailCtaInput: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 500,
      fontSize: '22px',
      lineHeight: '22px',
      letterSpacing: '-0.44px',
      cssClass: 'wf-email-cta__input',
      tablet: { fontSize: '18px', lineHeight: '18px', letterSpacing: '-0.36px' },
      mobile: { fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.24px' },
    },
    emailCtaButton: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '20px',
      letterSpacing: '-0.4px',
      cssClass: 'wf-email-cta__button',
      tablet: { fontSize: '18px', lineHeight: '18px', letterSpacing: '-0.36px' },
      mobile: { fontSize: '12px', lineHeight: '12px', letterSpacing: '-0.1px' },
    },
    mobileMenuLink: {
      fontFamily: '"Onest", "Onest Placeholder", sans-serif',
      fontWeight: 650,
      fontSize: '18px',
      lineHeight: '18px',
      letterSpacing: '-0.34px',
      cssClass: 'wf-mobile-menu-links a',
    },
  },

  spacing: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 48, 56, 64, 68, 72, 84, 96, 108],

  borderRadius: {
    pill: { value: '999px', css: 'var(--wr-r-pill)' },
    20: { value: '20px', css: 'var(--wr-r-20)' },
    16: { value: '16px', css: 'var(--wr-r-16)' },
    12: { value: '12px', css: 'var(--wr-r-12)' },
    8: { value: '8px', css: 'var(--wr-r-8)' },
    7: { value: '7px', css: 'none — brand dot' },
    6: { value: '6px', css: 'none — checklist marker' },
    5: { value: '5px', css: 'none — mobile checklist marker' },
  },

  shadows: {
    badge: {
      value: '0 7px 0 0 rgba(48, 33, 39, 0.82)',
      dark: '0 7px 0 0 #100d10',
      css: 'var(--wr-shadow-badge)',
    },
    email: {
      value: '0 4px 0 rgba(252, 184, 39, 0.35), inset 0 0 0 2px rgba(252, 184, 39, 0.45)',
      dark: '0 4px 0 rgba(255, 210, 93, 0.35), inset 0 0 0 2px rgba(255, 210, 93, 0.45)',
      css: 'var(--wr-shadow-email)',
    },
    cardBase: {
      value: '0 8px 20px rgba(48, 33, 39, 0.06)',
      css: 'none — inline in wireframe-remy.css',
    },
    cardHover: {
      value: '0 14px 26px rgba(48, 33, 39, 0.12)',
      css: 'none — inline in wireframe-remy.css',
    },
    ctaEdge: {
      value: '0 5px 0 var(--wf-cta-conv-edge), 0 8px 14px rgba(48, 33, 39, 0.1)',
      css: 'computed from --wf-cta-conv-edge-size and --wf-cta-conv-edge',
    },
    navShell: {
      css: 'var(--wf-nav-shell-shadow)',
    },
    navScrolled: {
      css: 'var(--wf-nav-scrolled-shadow)',
    },
    footerShell: {
      css: 'var(--wf-footer-shell-shadow)',
    },
    tenantForm: {
      css: 'var(--wf-tenant-form-shadow)',
    },
  },

  transitions: {
    easeGentle: {
      value: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      css: 'var(--wf-motion-ease-gentle)',
    },
    easeStandard: {
      value: 'cubic-bezier(0.4, 0, 0.2, 1)',
      css: 'var(--wf-motion-ease-standard)',
    },
    fast: {
      value: '220ms',
      css: 'var(--wf-motion-fast)',
    },
    base: {
      value: '280ms',
      css: 'var(--wf-motion-base)',
    },
    reveal: {
      value: '0.56s cubic-bezier(0.22, 1, 0.36, 1)',
      css: 'none — inline in .reveal class',
    },
    cardHover: {
      value: '0.24s cubic-bezier(0.2, 0.8, 0.2, 1)',
      css: 'none — inline on card components',
    },
    ctaLiftHover: {
      value: '-1.5px',
      css: 'var(--wf-cta-lift-hover)',
    },
    ctaLiftActive: {
      value: '-0.75px',
      css: 'var(--wf-cta-lift-active)',
    },
  },

  breakpoints: {
    mobile: { max: '799.98px', containerMain: '360px', containerFocus: '392px', containerCta: '360px', sectionPadding: '56px', containerPadding: '20px' },
    tablet: { min: '800px', max: '1399.98px', containerMain: '100%', containerFocus: '100%', containerCta: '100%', sectionPadding: '72px', containerPadding: '32px' },
    desktop: { min: '1400px', containerMain: '1280px', containerFocus: '840px', containerCta: '640px', sectionPadding: '84px', containerPadding: '48px' },
  },

  layout: {
    containerMain: { maxWidth: '1280px', css: 'wr-container--main' },
    containerFocus: { maxWidth: '840px', css: 'wr-container--focus' },
    containerCta: { maxWidth: '640px', css: 'wr-container--cta' },
    sectionPadding: { desktop: '84px', tablet: '72px', mobile: '56px' },
    sectionTight: { desktop: '36px', tablet: '26px', mobile: '26px' },
    heroGrid: { columns: '1fr 1fr', gap: '48px', tabletColumns: '1fr', tabletGap: '30px' },
    splitGrid: { columns: '1fr 1fr', gap: '48px', tabletColumns: '1fr', tabletGap: '30px' },
    featureGrid: { columns: 'repeat(3, minmax(0, 1fr))', gap: '18px', tabletColumns: 'repeat(2, minmax(0, 1fr))', mobileColumns: '1fr' },
    pricingGrid: { columns: 'repeat(3, minmax(0, 1fr))', gap: '18px', tabletColumns: '1fr', mobileColumns: '1fr' },
    processGrid: { columns: 'repeat(3, minmax(0, 1fr))', gap: '18px', tabletColumns: '1fr', mobileColumns: '1fr' },
    statsGrid: { columns: 'repeat(4, minmax(0, 1fr))', gap: '16px', tabletColumns: 'repeat(2, minmax(0, 1fr))', mobileColumns: '1fr 1fr', mobileGap: '10px' },
    logoGrid: { columns: 'repeat(6, minmax(0, 1fr))', gap: '12px', tabletColumns: 'repeat(4, minmax(0, 1fr))', mobileColumns: 'repeat(2, minmax(0, 1fr))', mobileGap: '10px' },
    testimonialGrid: { columns: 'repeat(3, minmax(0, 1fr))', gap: '18px', tabletColumns: '1fr', mobileColumns: '1fr', mobileGap: '10px' },
    footerGrid: { columns: 'minmax(0, 1.2fr) repeat(2, minmax(0, 1fr)) minmax(0, 1.12fr)', gap: '24px', tabletColumns: 'repeat(2, minmax(0, 1fr))', mobileColumns: '1fr' },
    scrollPadding: { desktop: '112px', tablet: '104px', mobile: '88px' },
  },
};
