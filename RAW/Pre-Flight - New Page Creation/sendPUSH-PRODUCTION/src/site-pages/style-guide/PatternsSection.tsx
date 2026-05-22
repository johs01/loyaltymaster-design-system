export default function PatternsSection() {
  return (
    <section id="sg-patterns" className="sg-section">
      <h2 className="wr-h2 sg-section-title">Patterns & Layouts</h2>
      <p className="wr-text-body" style={{ color: 'var(--wr-text-muted)' }}>
        Common page section patterns and when to use them.
      </p>

      <div className="sg-pattern-list">
        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Hero Split</h3>
          <p className="sg-pattern-desc">
            Two-column grid (1fr 1fr, 48px gap). Left: eyebrow + h1 + body + checklist + email CTA.
            Right: image placeholder. Collapses to single column on tablet/mobile.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Landing page hero above the fold.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-section wf-bg-peach</code> + <code>wr-container--main wf-hero-grid</code>
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Content Split (Use Case)</h3>
          <p className="sg-pattern-desc">
            Two-column grid with text + image. Supports reversed layout via wf-split-reverse.
            Text side: eyebrow + h3 + body + checklist + CTA button. Image side: placeholder.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Feature deep-dives, use case descriptions.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-split</code> or <code>wf-split wf-split-reverse</code>
            <br /><span className="sg-pattern-classes">Props:</span> <code>reversed</code> boolean on UseCaseSection
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Awards Strip</h3>
          <p className="sg-pattern-desc">
            Horizontal flex row of badge images, centered. aria-hidden since decorative.
            Reduced padding compared to standard sections.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Social proof immediately after hero.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-awards-strip</code> + <code>wf-awards-row</code>
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Logo Grid</h3>
          <p className="sg-pattern-desc">
            6-column grid (4 on tablet, 2 on mobile) of logo cards with border, shadow, and hover lift.
            Each card has a glassmorphism sheen on hover.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Integration/partner logos section.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-logo-grid</code> + <code>wf-logo-card</code>
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Stats Grid</h3>
          <p className="sg-pattern-desc">
            4-column grid (2 on tablet, 2 on mobile) of stat cards. Each card: large number + label.
            Tight section padding (wf-section-tight).
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Key metrics display.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-stats-grid</code> + <code>wf-stat-card</code>
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Numbered Problem List</h3>
          <p className="sg-pattern-desc">
            Ordered list styled as cards with hover lift. Each item: title + body.
            Background uses glassmorphism problem card tokens.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Problem statement, pain points.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-number-list</code> + <code>wf-number-title</code>
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Feature Grid</h3>
          <p className="sg-pattern-desc">
            3-column grid (2 on tablet, 1 on mobile). Each card: colored icon dot + title + description.
            Sheen overlay on hover.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Feature list, capabilities overview.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-feature-grid</code> + <code>wf-feature-card</code>
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Comparison Table</h3>
          <p className="sg-pattern-desc">
            Fixed-layout table with highlighted "SetupFlow" column (yellow tint). Hover highlights entire row.
            Converts to stacked cards on mobile via wf-mobile-compare-cards.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Competitive comparison, feature matrix.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-table-wrap</code> + <code>wf-compare-table</code>
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Pricing Grid</h3>
          <p className="sg-pattern-desc">
            3-column grid (1 on tablet/mobile). Middle card (Pro) has gradient background and "Most popular" badge.
            Toggle switches between monthly/yearly pricing. Each card: plan name + copy + price + CTA + feature list.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Pricing page or section.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-pricing-grid</code> + <code>wf-pricing-card</code> + <code>wf-pricing-card--pro</code>
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Process Cards</h3>
          <p className="sg-pattern-desc">
            3-column grid (1 on tablet/mobile). Three color variants (orange, blue, yellow) matching the accent palette.
            Each card: numbered badge + title + description.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Step-by-step process, how-it-works.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-process-grid</code> + <code>wr-card-process wr-card-process--[color]</code>
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">FAQ Accordion</h3>
          <p className="sg-pattern-desc">
            Stacked FAQ items with trigger button and collapsible answer. + icon rotates to x when open.
            data-open attribute controls open/closed state. Only one open at a time.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> FAQ, help content.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-faq-list</code> + <code>wf-faq-item</code> + <code>wf-faq-trigger</code>
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Final CTA (Dark)</h3>
          <p className="sg-pattern-desc">
            Dark background section with centered h2 + subtext + email CTA.
            Uses --wf-section-dark-bg, --wf-on-dark, --wf-on-dark-muted colors.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Final conversion push before footer.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-section wf-bg-dark wf-final-cta</code>
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Tenant Trial Form</h3>
          <p className="sg-pattern-desc">
            Glassmorphism form card with gradient background, border, shadow, and gloss overlay.
            2-column input grid with full-width optional field. Submit button with CTA styling.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Lead capture, signup form.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-tenant-form</code> + <code>wf-tenant-field</code> + <code>wf-tenant-input</code>
          </div>
        </article>

        <article className="sg-pattern-card">
          <h3 className="sg-pattern-name">Footer</h3>
          <p className="sg-pattern-desc">
            Glassmorphism shell with 4-column grid (brand + 2 link columns + contact).
            Bottom bar with copyright + legal links. Social icons with hover lift.
          </p>
          <div className="sg-pattern-usage">
            <span className="sg-pattern-when">When:</span> Site footer on every page.
            <br /><span className="sg-pattern-classes">Classes:</span> <code>wf-site-footer</code> + <code>wf-footer-shell</code> + <code>wf-footer-grid</code>
          </div>
        </article>
      </div>
    </section>
  );
}
