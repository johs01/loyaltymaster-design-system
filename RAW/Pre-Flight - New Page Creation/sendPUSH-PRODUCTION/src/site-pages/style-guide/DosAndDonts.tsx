export default function DosAndDonts() {
  return (
    <section id="sg-rules" className="sg-section">
      <h2 className="wr-h2 sg-section-title">Do's and Don'ts</h2>

      <div className="sg-rules-grid">
        <div className="sg-rule sg-rule--do">
          <h3 className="sg-rule-title">Do</h3>
          <ul className="sg-rule-list">
            <li>Use CSS custom properties via .wr-* and .wf-* class system, never raw hex values</li>
            <li>Use --wr-ink (#302127) for body text, not generic black</li>
            <li>Use --wf-cta-conv-text (#2a1f16) specifically for CTA button labels</li>
            <li>Include the "reveal" class with data-reveal-order for scroll animations</li>
            <li>Include aria-label attributes on all interactive controls</li>
            <li>Use .wf-visually-hidden for screen-reader-only labels</li>
            <li>Apply prefers-reduced-motion: reduce overrides for all animations</li>
            <li>Support dark mode via CSS variables -- never duplicate component branches</li>
            <li>Use wr-container--main for full-width sections, wr-container--focus for narrow content</li>
            <li>Use focus-visible (not focus) with the standard orange outline: 2px solid rgba(243,125,57,0.92), offset 2px</li>
            <li>Use the shared CTA sheen effect (::before pseudo-element) on all conversion buttons</li>
          </ul>
        </div>

        <div className="sg-rule sg-rule--dont">
          <h3 className="sg-rule-title">Don't</h3>
          <ul className="sg-rule-list">
            <li>Use inline styles -- use the CSS class system (now zero instances after refactor)</li>
            <li>Use text-gray-600 / text-gray-700 or any Tailwind color utility -- use --wr-ink or --wr-text-muted</li>
            <li>Use arbitrary Tailwind values like text-[#1a2b3c] -- add to tokens if needed</li>
            <li>Mix Georgia serif fallback with Arial sans-serif fallback on display headings (see FLAG-4)</li>
            <li>Hardcode colors that aren't tokenized (see #fef9e6 FLAG-2)</li>
            <li>Add disabled/loading states without first defining the token pattern (currently a gap)</li>
            <li>Use opacity:0 for hidden elements -- use the [hidden] attribute or display:none</li>
            <li>Forget to test both light and dark themes after any styling change</li>
            <li>Override the shared CTA hover/active behavior on individual buttons</li>
            <li>Triple-declare dark mode values (currently done for CTA sheen -- needs cleanup)</li>
          </ul>
        </div>
      </div>

      <div className="sg-flag-box" style={{ marginTop: 32 }}>
        <h4 className="sg-flag-title">Gaps to Address</h4>
        <ul className="sg-flag-list">
          <li>No disabled state styles for form inputs or buttons</li>
          <li>No loading/spinner state for the tenant trial form submit</li>
          <li>No form validation/error state styling (red border, error message, etc.)</li>
          <li>No warning or info feedback colors -- only a success-like teal exists</li>
          <li>Dark mode CTA sheen is declared in 3 separate places (data-theme="dark", @media prefers-color-scheme, and end-of-file override) -- should be consolidated</li>
          <li>--wr-font-display uses Georgia serif fallback but heading classes use Arial sans-serif -- inconsistent</li>
        </ul>
      </div>
    </section>
  );
}
