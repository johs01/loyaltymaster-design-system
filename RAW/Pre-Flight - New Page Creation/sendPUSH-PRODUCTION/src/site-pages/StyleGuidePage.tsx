import Sidebar from './style-guide/Sidebar';
import ColorPalette from './style-guide/ColorPalette';
import TypographySection from './style-guide/TypographySection';
import SpacingLayout from './style-guide/SpacingLayout';
import ComponentShowcase from './style-guide/ComponentShowcase';
import IconographySection from './style-guide/IconographySection';
import PatternsSection from './style-guide/PatternsSection';
import DosAndDonts from './style-guide/DosAndDonts';

export default function StyleGuidePage() {
  return (
    <div className="sg-layout">
      <Sidebar />
      <div className="sg-main">
        <header className="sg-header" id="sg-overview">
          <h1 className="wr-h1 sg-header-title">sendPUSH | Loyaltymaster Design System</h1>
          <p className="sg-header-desc">
            The single source of truth for all visual design decisions in the sendPUSH marketing site.
            Every value in this system is extracted directly from the existing codebase -- nothing is invented.
          </p>
          <p className="sg-header-meta">
            Last updated: 2026-03-04 | Architecture: CSS custom properties (--wr-* / --wf-* prefixes) +
            Tailwind config tokens | Dark mode: automatic via data-theme attribute
          </p>
        </header>

        <ColorPalette />
        <TypographySection />
        <SpacingLayout />
        <ComponentShowcase />
        <IconographySection />
        <PatternsSection />
        <DosAndDonts />
      </div>
    </div>
  );
}
