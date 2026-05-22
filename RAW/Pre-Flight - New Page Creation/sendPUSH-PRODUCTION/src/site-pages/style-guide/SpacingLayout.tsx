import { tokens } from '../../design-system/tokens';

export default function SpacingLayout() {
  return (
    <section id="sg-spacing" className="sg-section">
      <h2 className="wr-h2 sg-section-title">Spacing & Layout</h2>

      <h3 className="sg-subsection-title">Spacing Scale</h3>
      <p className="wr-text-body" style={{ color: 'var(--wr-text-muted)', marginBottom: 24 }}>
        Values actually in use across the codebase (in px):
      </p>
      <div className="sg-spacing-grid">
        {tokens.spacing.map((val: number) => (
          <div key={val} className="sg-spacing-item">
            <div className="sg-spacing-bar" style={{ width: val, height: val, maxWidth: '100%' }} />
            <span className="sg-spacing-label">{val}px</span>
          </div>
        ))}
      </div>

      <h3 className="sg-subsection-title">Border Radius</h3>
      <div className="sg-radius-grid">
        {Object.entries(tokens.borderRadius).map(([name, entry]) => (
          <div key={name} className="sg-radius-item">
            <div className="sg-radius-preview" style={{ borderRadius: (entry as { value: string }).value }} />
            <span className="sg-radius-label">{name}: {(entry as { value: string }).value}</span>
          </div>
        ))}
      </div>

      <h3 className="sg-subsection-title">Container Widths</h3>
      <div className="sg-container-demo">
        {(['containerMain', 'containerFocus', 'containerCta'] as const).map((key) => {
          const item = tokens.layout[key];
          return (
            <div key={key} className="sg-container-bar-wrap">
              <div className="sg-container-bar" style={{ maxWidth: item.maxWidth }}>
                <span className="sg-container-label">
                  .{item.css} - max-width: {item.maxWidth}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="sg-subsection-title">Section Padding</h3>
      <div className="sg-meta-table">
        <div className="sg-meta-row">
          <span className="sg-meta-key">Desktop (1400px+)</span>
          <span className="sg-meta-val">{tokens.layout.sectionPadding.desktop} top/bottom, {tokens.breakpoints.desktop.containerPadding} side</span>
        </div>
        <div className="sg-meta-row">
          <span className="sg-meta-key">Tablet (800-1399px)</span>
          <span className="sg-meta-val">{tokens.layout.sectionPadding.tablet} top/bottom, {tokens.breakpoints.tablet.containerPadding} side</span>
        </div>
        <div className="sg-meta-row">
          <span className="sg-meta-key">Mobile (&lt;800px)</span>
          <span className="sg-meta-val">{tokens.layout.sectionPadding.mobile} top/bottom, {tokens.breakpoints.mobile.containerPadding} side</span>
        </div>
      </div>

      <h3 className="sg-subsection-title">Breakpoints</h3>
      <div className="sg-meta-table">
        <div className="sg-meta-row">
          <span className="sg-meta-key">Mobile</span>
          <span className="sg-meta-val">max-width: {tokens.breakpoints.mobile.max}</span>
        </div>
        <div className="sg-meta-row">
          <span className="sg-meta-key">Tablet</span>
          <span className="sg-meta-val">{tokens.breakpoints.tablet.min} - {tokens.breakpoints.tablet.max}</span>
        </div>
        <div className="sg-meta-row">
          <span className="sg-meta-key">Desktop</span>
          <span className="sg-meta-val">min-width: {tokens.breakpoints.desktop.min}</span>
        </div>
      </div>

      <h3 className="sg-subsection-title">Grid Patterns</h3>
      <div className="sg-meta-table">
        {[
          { name: 'Hero / Split', ...tokens.layout.heroGrid },
          { name: 'Feature Grid', ...tokens.layout.featureGrid },
          { name: 'Pricing Grid', ...tokens.layout.pricingGrid },
          { name: 'Process Grid', ...tokens.layout.processGrid },
          { name: 'Stats Grid', ...tokens.layout.statsGrid },
          { name: 'Logo Grid', ...tokens.layout.logoGrid },
          { name: 'Testimonial Grid', ...tokens.layout.testimonialGrid },
          { name: 'Footer Grid', ...tokens.layout.footerGrid },
        ].map((g) => {
          const mc = 'mobileColumns' in g ? (g as { mobileColumns: string }).mobileColumns : undefined;
          return (
            <div key={g.name} className="sg-meta-row">
              <span className="sg-meta-key">{g.name}</span>
              <span className="sg-meta-val">
                Desktop: {g.columns} gap {g.gap}
                {g.tabletColumns && ` | Tablet: ${g.tabletColumns}`}
                {mc && ` | Mobile: ${mc}`}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
