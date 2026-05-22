export default function IconographySection() {
  return (
    <section id="sg-icons" className="sg-section">
      <h2 className="wr-h2 sg-section-title">Iconography</h2>
      <p className="wr-text-body" style={{ color: 'var(--wr-text-muted)' }}>
        All icons are custom inline SVGs. lucide-react is available in the project but not currently used in any component.
      </p>
      <div className="sg-icon-grid">
        {[
          {
            name: 'Sun (Theme)',
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 2.5v2.3M12 19.2v2.3M21.5 12h-2.3M4.8 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ),
            context: 'Theme toggle (light mode icon)',
          },
          {
            name: 'Moon (Theme)',
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
                <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 1 0 10.5 10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            ),
            context: 'Theme toggle (dark mode icon)',
          },
          {
            name: 'Facebook',
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            context: 'Footer social links',
          },
          {
            name: 'X / Twitter',
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4l11.733 16h4.267l-11.733-16z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            context: 'Footer social links',
          },
          {
            name: 'Instagram',
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.75" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            ),
            context: 'Footer social links',
          },
          {
            name: 'Phone',
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            context: 'Footer contact section',
          },
          {
            name: 'Email',
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M22 7l-10 5L2 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            context: 'Footer contact section',
          },
          {
            name: 'Map Pin',
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            ),
            context: 'Footer contact section',
          },
          {
            name: 'Calendar',
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 2v4m8-4v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.7" />
                <path d="M3 10h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            context: 'Footer "Book a Demo" CTA',
          },
        ].map(({ name, svg, context }) => (
          <div key={name} className="sg-icon-item">
            <div className="sg-icon-preview">{svg}</div>
            <p className="sg-icon-name">{name}</p>
            <p className="sg-icon-context">{context}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
