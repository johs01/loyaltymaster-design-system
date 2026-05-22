/**
 * Loyaltymaster/sendPUSH Tailwind preset generated from Phase 2 tokens.
 * Tailwind 3 compatible. Source of truth: tokens/design-tokens.json.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        lm: {
          ink: "var(--lm-color-ink)",
          muted: "var(--lm-color-text-muted)",
          subtle: "var(--lm-color-text-subtle)",
          white: "var(--lm-color-surface-white)",
          peach: "var(--lm-color-background-peach)",
          cyan: "var(--lm-color-background-cyan)",
          salmon: "var(--lm-color-background-salmon)",
          dark: "var(--lm-color-background-dark)",
          panel: {
            light: "var(--lm-color-surface-panel-light)",
            gray: "var(--lm-color-surface-panel-gray)",
          },
          accent: {
            yellow: "var(--lm-color-accent-yellow)",
            orange: "var(--lm-color-accent-orange)",
            blue: "var(--lm-color-accent-blue)",
            tagYellow: "var(--lm-color-accent-tag-yellow)",
          },
          feedback: {
            error: "var(--lm-color-feedback-error)",
            warning: "var(--lm-color-feedback-warning)",
            success: "var(--lm-color-feedback-success)",
            info: "var(--lm-color-feedback-info)",
          },
        },
      },
      fontFamily: {
        rodger: ["Rodger Bold", "Rodger Bold Placeholder", "Arial", "sans-serif"],
        onest: ["Onest", "Onest Placeholder", "sans-serif"],
        wordmark: ["Lato", "sans-serif"],
      },
      borderRadius: {
        "lm-pill": "var(--lm-radius-pill)",
        "lm-card": "var(--lm-radius-card-primary)",
        "lm-card-secondary": "var(--lm-radius-card-secondary)",
        "lm-input": "var(--lm-radius-input-tenant)",
        "lm-input-compact": "var(--lm-radius-input-compact)",
      },
      boxShadow: {
        "lm-card": "var(--lm-shadow-card-base)",
        "lm-card-hover": "var(--lm-shadow-card-hover)",
        "lm-badge": "var(--lm-shadow-badge)",
        "lm-form": "var(--lm-shadow-form-shell)",
      },
      transitionDuration: {
        "lm-fast": "220ms",
        "lm-base": "280ms",
        "lm-reveal": "560ms",
      },
      maxWidth: {
        "lm-main": "var(--lm-container-main)",
        "lm-focus": "var(--lm-container-focus)",
        "lm-cta": "var(--lm-container-cta)",
      },
    },
  },
};
