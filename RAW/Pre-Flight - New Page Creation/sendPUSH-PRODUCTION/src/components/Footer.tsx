import { useBusinessInfo } from '../context/BusinessInfoContext';
import { navigate } from '../utils/navigate';

const DESIGN_SYSTEM_TEMPLATE_PATH = '/design-system-template-page';
const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

const COMPANY_LINKS = [
  { label: 'Contact us', href: 'https://loyaltymaster.com/contact-us/' },
  { label: 'Our Blog', href: 'https://blog.loyaltymaster.com/' },
  { label: 'What we do', href: 'https://loyaltymaster.com/about-us/' },
  { label: 'Our Mission Statement', href: 'https://loyaltymaster.com/core-values-and-mission-statement/' },
  { label: 'Our details', href: 'https://loyaltymaster.com/some-key-details-about-loyaltymaster/' },
] as const;

const DOCUMENT_LINKS = [
  { label: 'Acceptable Use Policy', href: 'https://loyaltymaster.com/acceptable-use-policy/' },
  { label: 'Subscription Agreement', href: 'https://loyaltymaster.com/subscription-agreement/' },
] as const;

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: 'https://loyaltymaster.com/privacy-policy/' },
  { label: 'Terms of Use', href: 'https://loyaltymaster.com/terms-of-use/' },
  { label: 'Cookie Policy', href: 'https://loyaltymaster.com/cookie-policy/' },
] as const;

const BOOK_DEMO_URL = 'https://loyaltymaster.com/book-a-virtual-meeting/';

export default function Footer() {
  const { location, seo } = useBusinessInfo();

  const phone = location?.phone || '(555) 123-4567';
  const email = location?.email || 'admin@loyaltymaster.com';
  const city = location?.city || 'Plettenberg Bay';
  const state = location?.state || 'WC';
  const streetAddress = location?.street_address || '';
  const zipCode = location?.zip_code || '';
  const businessName = location?.name || 'sendPUSH | Loyaltymaster';

  const facebookUrl = seo?.facebook_url || undefined;
  const twitterUrl = seo?.twitter_url || undefined;
  const instagramUrl = seo?.instagram_url || undefined;

  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer
      id="site-footer"
      className="wf-site-footer wf-bg-white"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content={businessName} />
      <meta itemProp="telephone" content={phone} />
      <meta itemProp="email" content={email} />
      {location?.website_url && <link itemProp="url" href={location.website_url} />}
      <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress" style={{ display: 'none' }}>
        <meta itemProp="streetAddress" content={streetAddress} />
        <meta itemProp="addressLocality" content={city} />
        <meta itemProp="addressRegion" content={state} />
        <meta itemProp="postalCode" content={zipCode} />
        <meta itemProp="addressCountry" content={location?.country || 'US'} />
      </span>

      <div className="wr-container--main">
        <div className="wf-footer-shell reveal" data-reveal-order="0">
          <div className="wf-footer-grid">
            <div className="wf-footer-brand reveal" data-reveal-order="1">
              <div className="wf-footer-brand-mark">
                <a className="wf-brand" href="/" aria-label={`${businessName} home`} onClick={(e) => handleInternalLink(e, '/')}>
                  <span className="brand-logo" aria-hidden="true">
                    <span className="brand-logo__send">sendPUSH</span>
                    <span className="brand-logo__divider">|</span>
                    <span className="brand-logo__loyalty">Loyaltymaster</span>
                  </span>
                </a>
              </div>
              <p className="wf-footer-copy">{businessName} helps B2B teams run reminders, offers, and follow-ups from one place.</p>
              <a className="wf-footer-cta" href={BOOK_DEMO_URL} {...EXTERNAL_LINK_PROPS}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 2v4m8-4v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M3 10h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Book a Demo</span>
              </a>
              {(facebookUrl || twitterUrl || instagramUrl) && (
                <div className="wf-footer-social" aria-label="Social links">
                  {facebookUrl && (
                    <a className="wf-footer-social-link" href={facebookUrl} aria-label={`Follow ${businessName} on Facebook`} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                  {twitterUrl && (
                    <a className="wf-footer-social-link" href={twitterUrl} aria-label={`Follow ${businessName} on X`} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4l11.733 16h4.267l-11.733-16z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                  {instagramUrl && (
                    <a className="wf-footer-social-link" href={instagramUrl} aria-label={`Follow ${businessName} on Instagram`} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.75" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="reveal" data-reveal-order="2">
              <h3 className="wf-footer-heading">Product</h3>
              <ul className="wf-footer-list">
                <li><a className="wf-footer-link" href={`${DESIGN_SYSTEM_TEMPLATE_PATH}#pricing`}>Pricing</a></li>
                <li><a className="wf-footer-link" href={`${DESIGN_SYSTEM_TEMPLATE_PATH}#use-case-1`}>Use Cases</a></li>
                <li><a className="wf-footer-link" href={`${DESIGN_SYSTEM_TEMPLATE_PATH}#faq`}>FAQ</a></li>
                <li><a className="wf-footer-link" href="/loyalty" onClick={(e) => handleInternalLink(e, '/loyalty')}>Loyalty Cards</a></li>
                <li><a className="wf-footer-link" href="/bring-back-customers" onClick={(e) => handleInternalLink(e, '/bring-back-customers')}>Customer Retention</a></li>
                <li><a className="wf-footer-link" href="/social-media" onClick={(e) => handleInternalLink(e, '/social-media')}>Social Media vs. Direct</a></li>
              </ul>
            </div>

            <div className="reveal" data-reveal-order="3">
              <h3 className="wf-footer-heading">Company</h3>
              <ul className="wf-footer-list">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <a className="wf-footer-link" href={link.href} {...EXTERNAL_LINK_PROPS}>{link.label}</a>
                  </li>
                ))}
              </ul>

              <h3 className="wf-footer-heading wf-footer-subheading">Documents</h3>
              <ul className="wf-footer-list">
                {DOCUMENT_LINKS.map((link) => (
                  <li key={link.href}>
                    <a className="wf-footer-link" href={link.href} {...EXTERNAL_LINK_PROPS}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal" data-reveal-order="4">
              <h3 className="wf-footer-heading">Contact</h3>
              <ul className="wf-footer-list">
                <li className="wf-footer-contact-item">
                  <svg className="wf-footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>{phone}</a>
                </li>
                <li className="wf-footer-contact-item">
                  <svg className="wf-footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M22 7l-10 5L2 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a href={`mailto:${email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{email}</a>
                </li>
                <li className="wf-footer-contact-item">
                  <svg className="wf-footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  <span>
                    {streetAddress && <>{streetAddress}, </>}
                    {city}, {state}{zipCode && ` ${zipCode}`}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="wf-footer-bottom reveal" data-reveal-order="5">
            <div className="wf-footer-legal">
              {LEGAL_LINKS.map((link) => (
                <a key={link.href} className="wf-footer-legal-link" href={link.href} {...EXTERNAL_LINK_PROPS}>{link.label}</a>
              ))}
            </div>
            <p className="wf-footer-meta">&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
