import React from 'react';
import { tokens } from '../../design-system/tokens';

interface ResponsiveOverride {
  fontSize: string;
  lineHeight?: string;
  letterSpacing?: string;
}

interface TypographyToken {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string | number;
  letterSpacing: string;
  cssClass: string;
  textTransform?: string;
  fontStyle?: string;
  mobile?: ResponsiveOverride;
  tablet?: ResponsiveOverride;
}

const typeEntries = Object.entries(tokens.typography) as [string, TypographyToken][];

export default function TypographySection() {
  const renderPreviewText = (name: string) => {
    if (name === 'brandLogo') {
      return (
        <span className="brand-logo" aria-hidden="true">
          <span className="brand-logo__send">sendPUSH</span>
          <span className="brand-logo__divider">|</span>
          <span className="brand-logo__loyalty">Loyaltymaster</span>
        </span>
      );
    }

    return name === 'eyebrow' ? 'EYEBROW LABEL' : 'The quick brown fox jumps over the lazy dog';
  };

  return (
    <section id="sg-typography" className="sg-section">
      <h2 className="wr-h2 sg-section-title">Typography</h2>
      <p className="wr-text-body" style={{ color: 'var(--wr-text-muted)' }}>
        Three font families: <strong>Rodger Bold</strong> for display headings and stat values,
        <strong> Onest</strong> for body text and UI elements, and <strong> Lato</strong> for the brand wordmark.
      </p>
      <div className="sg-type-grid">
        {typeEntries.map(([name, style]) => (
          <article key={name} className="sg-type-card">
            <div className="sg-type-preview">
              {name === 'brandLogo' ? (
                renderPreviewText(name)
              ) : (
                <span
                  style={{
                    fontFamily: style.fontFamily,
                    fontWeight: style.fontWeight,
                    fontSize: style.fontSize,
                    lineHeight: style.lineHeight,
                    letterSpacing: style.letterSpacing,
                    fontStyle: style.fontStyle || 'normal',
                    textTransform: (style.textTransform || 'none') as React.CSSProperties['textTransform'],
                    color: 'var(--wr-ink)',
                  }}
                >
                  {renderPreviewText(name)}
                </span>
              )}
            </div>
            <div className="sg-type-meta">
              <p className="sg-type-name">{name}</p>
              <p className="sg-type-detail">
                {style.fontFamily} | {style.fontWeight} | {style.fontSize} | {style.lineHeight} | {style.letterSpacing}
              </p>
              <p className="sg-type-class">CSS class: <code>{style.cssClass}</code></p>
              {style.mobile && (
                <p className="sg-type-responsive">
                  Mobile: {style.mobile.fontSize}
                  {style.mobile.lineHeight ? ` / ${style.mobile.lineHeight}` : ''}
                </p>
              )}
              {style.tablet && (
                <p className="sg-type-responsive">
                  Tablet: {style.tablet.fontSize}
                  {style.tablet.lineHeight ? ` / ${style.tablet.lineHeight}` : ''}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
