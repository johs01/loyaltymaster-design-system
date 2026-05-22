export default function ComponentShowcase() {
  return (
    <section id="sg-components" className="sg-section">
      <h2 className="wr-h2 sg-section-title">Component Showcase</h2>
      <p className="wr-text-body" style={{ color: 'var(--wr-text-muted)' }}>
        Live rendered components from the design system.
      </p>

      <article className="sg-component-block" id="sg-comp-brand-wordmark">
        <h3 className="sg-component-name">Brand Wordmark</h3>
        <p className="sg-component-desc">Live text logo. Uses Lato with mixed weights and stays sharp across screen densities.</p>
        <div className="sg-component-preview">
          <a className="wf-brand" href="/" aria-label="Loyaltymaster home">
            <span className="brand-logo" aria-hidden="true">
              <span className="brand-logo__send">sendPUSH</span>
              <span className="brand-logo__divider">|</span>
              <span className="brand-logo__loyalty">Loyaltymaster</span>
            </span>
          </a>
        </div>
        <div className="sg-component-states">
          <span className="sg-state-label">Usage:</span> Header, mobile menu header, footer brand mark
          <br /><span className="sg-state-label">Responsive:</span> desktop clamp plus mobile navbar sizing in <code>public/wireframe-remy.css</code>
        </div>
        <div className="sg-component-code">
          <code>{`<a className="wf-brand" href="/" aria-label="Loyaltymaster home">\n  <span className="brand-logo" aria-hidden="true">\n    <span className="brand-logo__send">sendPUSH</span>\n    <span className="brand-logo__divider">|</span>\n    <span className="brand-logo__loyalty">Loyaltymaster</span>\n  </span>\n</a>`}</code>
        </div>
      </article>

      <article className="sg-component-block" id="sg-comp-cta-join">
        <h3 className="sg-component-name">CTA Join Button</h3>
        <p className="sg-component-desc">Primary conversion button. Yellow background with orange edge shadow and sheen animation.</p>
        <div className="sg-component-preview">
          <a className="wr-cta-join wf-btn" href="#sg-comp-cta-join">
            <span className="wr-cta-join__label">Start Free in 2 Minutes</span>
          </a>
        </div>
        <div className="sg-component-states">
          <span className="sg-state-label">Hover:</span> translateY(-1.5px), border-color orange, increased shadow, sheen slides left
          <br /><span className="sg-state-label">Active:</span> translateY(-0.75px), reduced shadow
          <br /><span className="sg-state-label">Focus:</span> 2px orange outline, offset 2px
        </div>
        <div className="sg-component-code">
          <code>{`<a className="wr-cta-join wf-btn" href="#target">\n  <span className="wr-cta-join__label">Button Text</span>\n</a>`}</code>
        </div>
      </article>

      <article className="sg-component-block" id="sg-comp-email-cta">
        <h3 className="sg-component-name">Email CTA</h3>
        <p className="sg-component-desc">Email capture input + button shell. Lifts on hover with radial glow effect.</p>
        <div className="sg-component-preview">
          <div className="wf-email-cta" role="group" aria-label="Demo email capture">
            <label className="wf-visually-hidden" htmlFor="sg-demo-email">Email</label>
            <input className="wf-email-cta__input" id="sg-demo-email" type="email" placeholder="name@email.com" />
            <a className="wf-email-cta__button" href="#sg-comp-email-cta">Start Free Trial</a>
          </div>
        </div>
        <div className="sg-component-states">
          <span className="sg-state-label">Hover:</span> translateY(-2px), border glow, radial gradient glow behind
          <br /><span className="sg-state-label">Focus-within:</span> same as hover
          <br /><span className="sg-state-label">Input hover:</span> bg changes to white
        </div>
        <div className="sg-component-code">
          <code>{`<div className="wf-email-cta" role="group" aria-label="...">\n  <label className="wf-visually-hidden" htmlFor="id">Email</label>\n  <input className="wf-email-cta__input" id="id" type="email" placeholder="name@email.com" />\n  <a className="wf-email-cta__button" href="#target">CTA Text</a>\n</div>`}</code>
        </div>
      </article>

      <article className="sg-component-block" id="sg-comp-eyebrow">
        <h3 className="sg-component-name">Eyebrow</h3>
        <p className="sg-component-desc">Section label. Uppercase, small, Onest 700.</p>
        <div className="sg-component-preview">
          <p className="wf-eyebrow">Section label</p>
          <p className="wf-eyebrow wf-eyebrow-dark" style={{ background: 'var(--wf-section-dark-bg)', padding: '12px 16px', borderRadius: 12, marginTop: 12 }}>Dark variant</p>
        </div>
        <div className="sg-component-code">
          <code>{`<p className="wf-eyebrow">Label</p>\n<p className="wf-eyebrow wf-eyebrow-dark">Dark Label</p>`}</code>
        </div>
      </article>

      <article className="sg-component-block" id="sg-comp-process-cards">
        <h3 className="sg-component-name">Process Cards</h3>
        <p className="sg-component-desc">Three color variants: orange, blue, yellow. Used in ProcessSection.</p>
        <div className="sg-component-preview" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {[
            { color: 'orange', step: '1', title: 'Connect Contacts' },
            { color: 'blue', step: '2', title: 'Turn On Automations' },
            { color: 'yellow', step: '3', title: 'Track Revenue' },
          ].map(({ color, step, title }) => (
            <article key={color} className={`wr-card-process wr-card-process--${color}`}>
              <div className="wr-pill-step">
                <span className={`wf-step-badge wf-step-badge--${color}`}>{step}</span>
                <span className="wr-pill-step__title">{title}</span>
              </div>
              <p className="wr-text-body">Description text for this process step.</p>
            </article>
          ))}
        </div>
        <div className="sg-component-states">
          <span className="sg-state-label">Hover:</span> translateY(-3px), elevated shadow, slight saturation boost
        </div>
        <div className="sg-component-code">
          <code>{`<article className="wr-card-process wr-card-process--orange">\n  <div className="wr-pill-step">\n    <span className="wf-step-badge wf-step-badge--orange">1</span>\n    <span className="wr-pill-step__title">Title</span>\n  </div>\n  <p className="wr-text-body">Description</p>\n</article>`}</code>
        </div>
      </article>

      <article className="sg-component-block" id="sg-comp-feature-card">
        <h3 className="sg-component-name">Feature Card</h3>
        <p className="sg-component-desc">Icon dot (orange/blue/yellow) + title + body. Sheen on hover.</p>
        <div className="sg-component-preview" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {['orange', 'blue', 'yellow'].map((color) => (
            <article key={color} className="wf-feature-card">
              <span className={`wf-feature-icon wf-feature-icon--${color}`} aria-hidden="true" />
              <h3>Feature Title</h3>
              <p>Short description of the feature capability.</p>
            </article>
          ))}
        </div>
        <div className="sg-component-states">
          <span className="sg-state-label">Hover:</span> translateY(-3px), shadow, sheen gradient overlay
        </div>
      </article>

      <article className="sg-component-block" id="sg-comp-stat-card">
        <h3 className="sg-component-name">Stat Card</h3>
        <p className="sg-component-desc">Large number + label. Used in StatsSection grid.</p>
        <div className="sg-component-preview" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { value: '95%', label: 'Deliverability' },
            { value: '+28%', label: 'Repeat visits' },
            { value: '3x', label: 'Faster follow-ups' },
            { value: '35%', label: 'Booking recovery' },
          ].map(({ value, label }) => (
            <article key={label} className="wf-stat-card">
              <p className="wf-stat-value">{value}</p>
              <p className="wf-stat-label">{label}</p>
            </article>
          ))}
        </div>
        <div className="sg-component-states">
          <span className="sg-state-label">Hover:</span> translateY(-3px), elevated shadow, sheen
        </div>
      </article>

      <article className="sg-component-block" id="sg-comp-testimonial">
        <h3 className="sg-component-name">Testimonial Card</h3>
        <p className="sg-component-desc">Quote + author. Light and dark variants.</p>
        <div className="sg-component-preview" style={{ display: 'grid', gap: 18 }}>
          <article className="wf-testimonial-card" style={{ maxWidth: 640 }}>
            <p className="wf-quote">"This is a testimonial quote in the light variant."</p>
            <p className="wf-quote-author">Author Name - Role</p>
          </article>
          <article className="wf-testimonial-card wf-testimonial-card-dark" style={{ maxWidth: 640, background: 'var(--wf-dark-card-bg)', borderColor: 'var(--wf-dark-card-border)' }}>
            <p className="wf-quote wf-quote-dark">"This is a testimonial quote in the dark variant."</p>
            <p className="wf-quote-author wf-quote-author-dark">Author Name - Role</p>
          </article>
        </div>
        <div className="sg-component-code">
          <code>{`<TestimonialSection\n  id="unique-id"\n  eyebrow="Label"\n  heading="Heading"\n  quotes={[{ text: "...", author: "..." }]}\n  dark={false}\n  showEmailCta={false}\n  ctaText="CTA"\n  ctaHref="#target"\n/>`}</code>
        </div>
        <div className="sg-component-props">
          <h4>Props</h4>
          <table className="sg-props-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>id</td><td>string</td><td>required</td><td>Section anchor ID</td></tr>
              <tr><td>eyebrow</td><td>string</td><td>required</td><td>Section label</td></tr>
              <tr><td>heading</td><td>string</td><td>required</td><td>Section heading</td></tr>
              <tr><td>quotes</td><td>Array</td><td>required</td><td>Array of text + author</td></tr>
              <tr><td>dark</td><td>boolean</td><td>false</td><td>Dark background variant</td></tr>
              <tr><td>showEmailCta</td><td>boolean</td><td>false</td><td>Show email capture</td></tr>
              <tr><td>emailCtaId</td><td>string</td><td>-</td><td>Email input ID</td></tr>
              <tr><td>emailCtaLabel</td><td>string</td><td>-</td><td>Aria label for group</td></tr>
              <tr><td>emailCtaButtonText</td><td>string</td><td>-</td><td>Button text</td></tr>
              <tr><td>ctaText</td><td>string</td><td>-</td><td>CTA button text</td></tr>
              <tr><td>ctaHref</td><td>string</td><td>-</td><td>CTA button href</td></tr>
            </tbody>
          </table>
        </div>
      </article>

      <article className="sg-component-block" id="sg-comp-cap-testimonial">
        <h3 className="sg-component-name">Capabilities Testimonial Card</h3>
        <p className="sg-component-desc">Star rating + quote + avatar. Used in FeaturesSection.</p>
        <div className="sg-component-preview">
          <article className="wf-cap-testimonial-card" style={{ maxWidth: 380 }}>
            <div className="wf-cap-testimonial-stars" role="img" aria-label="5 stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="wf-cap-testimonial-star" aria-hidden="true">&#9733;</span>
              ))}
            </div>
            <p className="wf-cap-testimonial-quote">"Example testimonial quote with italic styling."</p>
            <div className="wf-cap-testimonial-person">
              <div className="wf-cap-testimonial-avatar" aria-hidden="true">AB</div>
              <div className="wf-cap-testimonial-meta">
                <p className="wf-quote-author">Author Name</p>
                <p className="wf-cap-testimonial-role">Role, Company</p>
              </div>
            </div>
          </article>
        </div>
      </article>

      <article className="sg-component-block" id="sg-comp-pricing-toggle">
        <h3 className="sg-component-name">Pricing Toggle</h3>
        <p className="sg-component-desc">Monthly/Yearly switch with badge. Pill-shaped.</p>
        <div className="sg-component-preview">
          <div className="wf-pricing-toggle" role="group" aria-label="Billing period">
            <button className="wf-pricing-toggle-btn is-active" type="button" aria-pressed="true">Monthly</button>
            <button className="wf-pricing-toggle-btn" type="button" aria-pressed="false">
              <span>Yearly</span>
              <span className="wf-pricing-toggle-badge">30% OFF</span>
            </button>
          </div>
        </div>
      </article>

      <article className="sg-component-block" id="sg-comp-faq-item">
        <h3 className="sg-component-name">FAQ Accordion Item</h3>
        <p className="sg-component-desc">Trigger button + collapsible answer. + icon rotates on open.</p>
        <div className="sg-component-preview">
          <div className="wf-faq-item" data-open="true">
            <button className="wf-faq-trigger" type="button" aria-expanded="true">How quickly can I launch?</button>
            <div className="wf-faq-answer" role="region">
              <p>Most teams launch in under one hour using prebuilt flows and templates.</p>
            </div>
          </div>
          <div className="wf-faq-item" style={{ marginTop: 12 }}>
            <button className="wf-faq-trigger" type="button" aria-expanded="false">Can I import customers?</button>
            <div className="wf-faq-answer" role="region">
              <p>Yes. CSV import and common integrations are supported.</p>
            </div>
          </div>
        </div>
      </article>

      <article className="sg-component-block" id="sg-comp-checklist">
        <h3 className="sg-component-name">Checklist</h3>
        <p className="sg-component-desc">Bulleted list with custom checkmark marker.</p>
        <div className="sg-component-preview">
          <ul className="wf-checklist">
            <li>First checklist item.</li>
            <li>Second checklist item.</li>
            <li>Third checklist item.</li>
          </ul>
        </div>
        <div className="sg-component-code">
          <code>{`<ul className="wf-checklist">\n  <li>Item text</li>\n</ul>`}</code>
        </div>
      </article>

      <article className="sg-component-block" id="sg-comp-tenant-form">
        <h3 className="sg-component-name">Tenant Trial Form</h3>
        <p className="sg-component-desc">Glassmorphism form with labeled inputs. Grid layout.</p>
        <div className="sg-component-preview">
          <form className="wf-tenant-form" onSubmit={(e) => e.preventDefault()} style={{ maxWidth: 640 }}>
            <div className="wf-tenant-form-grid">
              <div className="wf-tenant-field">
                <label className="wf-tenant-label" htmlFor="sg-tenant-name">Full Name <span aria-hidden="true">*</span></label>
                <input className="wf-tenant-input" id="sg-tenant-name" type="text" placeholder="Jane Smith" />
              </div>
              <div className="wf-tenant-field">
                <label className="wf-tenant-label" htmlFor="sg-tenant-email">Email <span aria-hidden="true">*</span></label>
                <input className="wf-tenant-input" id="sg-tenant-email" type="email" placeholder="name@business.com" />
              </div>
            </div>
            <div className="wf-tenant-actions">
              <button className="wf-tenant-submit" type="submit">Start 30-Day Trial</button>
            </div>
          </form>
        </div>
        <div className="sg-component-states">
          <span className="sg-state-label">Input hover:</span> border-color transitions to orange tint
          <br /><span className="sg-state-label">Input focus:</span> bg lightens, focus ring
          <br /><span className="sg-state-label">Submit hover:</span> shared CTA lift behavior
          <br /><span className="sg-state-label">GAP - Disabled:</span> No disabled styles defined
          <br /><span className="sg-state-label">GAP - Loading:</span> No loading state on submit
          <br /><span className="sg-state-label">GAP - Error:</span> No validation/error styling
        </div>
      </article>
    </section>
  );
}
