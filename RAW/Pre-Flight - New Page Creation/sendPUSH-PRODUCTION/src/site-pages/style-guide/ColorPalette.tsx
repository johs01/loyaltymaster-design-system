import { tokens } from '../../design-system/tokens';

const colorGroups = [
  {
    label: 'Text / Ink',
    items: [
      { name: 'ink', ...tokens.colors.ink },
      { name: 'textMuted', ...tokens.colors.textMuted },
      { name: 'textSubtle', ...tokens.colors.textSubtle },
      { name: 'ctaConvText', ...tokens.colors.ctaConvText },
    ],
  },
  {
    label: 'Backgrounds',
    items: [
      { name: 'white (surface)', ...tokens.colors.white },
      { name: 'bgPeach', ...tokens.colors.bgPeach },
      { name: 'bgCyan', ...tokens.colors.bgCyan },
      { name: 'bgSalmon', ...tokens.colors.bgSalmon },
      { name: 'bgPanelGray', ...tokens.colors.bgPanelGray },
      { name: 'bgPanelLight', ...tokens.colors.bgPanelLight },
      { name: 'sectionDarkBg', ...tokens.colors.sectionDarkBg },
    ],
  },
  {
    label: 'Accents',
    items: [
      { name: 'accentOrange', ...tokens.colors.accentOrange },
      { name: 'accentBlue', ...tokens.colors.accentBlue },
      { name: 'accentYellow', ...tokens.colors.accentYellow },
      { name: 'accentYellowSoft', ...tokens.colors.accentYellowSoft },
      { name: 'tagYellow', ...tokens.colors.tagYellow },
    ],
  },
  {
    label: 'On-Dark Surface',
    items: [
      { name: 'onDark', ...tokens.colors.onDark },
      { name: 'onDarkMuted', ...tokens.colors.onDarkMuted },
    ],
  },
  {
    label: 'Hover / Interactive',
    items: [
      { name: 'faqHoverBg', ...tokens.colors.faqHoverBg },
      { name: 'featureHoverBg', ...tokens.colors.featureHoverBg },
    ],
  },
  {
    label: 'Feedback',
    items: [
      { name: 'feedbackSuccess', ...tokens.colors.feedbackSuccess },
      { name: 'feedbackSuccessBg', ...tokens.colors.feedbackSuccessBg },
      { name: 'feedbackError', ...tokens.colors.feedbackError },
      { name: 'feedbackErrorBg', ...tokens.colors.feedbackErrorBg },
    ],
  },
];

export default function ColorPalette() {
  return (
    <section id="sg-colors" className="sg-section">
      <h2 className="wr-h2 sg-section-title">Color Palette</h2>
      <p className="wr-text-body" style={{ color: 'var(--wr-text-muted)' }}>
        All colors are defined as CSS custom properties in withremy.css and wireframe-remy.css.
        Dark mode variants are automatic via data-theme attribute.
      </p>
      {colorGroups.map((group) => (
        <div key={group.label} className="sg-color-group">
          <h3 className="sg-color-group-title">{group.label}</h3>
          <div className="sg-color-grid">
            {group.items.map((item) => (
              <div key={item.name} className="sg-color-card">
                <div
                  className="sg-color-swatch"
                  style={{ background: item.css !== 'none' && !item.css.startsWith('none') ? item.css : item.light }}
                />
                <div className="sg-color-info">
                  <p className="sg-color-name">{item.name}</p>
                  <p className="sg-color-value">Light: {item.light}</p>
                  {item.dark && <p className="sg-color-value">Dark: {item.dark}</p>}
                  <p className="sg-color-css">{item.css}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="sg-flag-box">
        <h4 className="sg-flag-title">Flagged Inconsistencies</h4>
        <ul className="sg-flag-list">
          <li>[FLAG-1] --wf-cta-conv-text (#2a1f16) vs --wr-ink (#302127): both dark browns, very close. CTA label vs body text. Keep both?</li>
          <li>[FLAG-2] #fef9e6 used in .wr-card-process--yellow but not tokenized. Should be --wr-bg-yellow or mapped to --wr-tag-yellow (#fff3c4)?</li>
          <li>[FLAG-3] #fbfcfd used for hover states (faq, features) -- very close to white. Intentional subtle hover, or should be unified?</li>
          <li>GAP: No error, warning, or info feedback colors exist. Only success-like teal (rgba 76,147,175).</li>
        </ul>
      </div>
    </section>
  );
}
