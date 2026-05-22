import type { Action, ContactItem, FooterColumn, LinkItem } from "../types";
import { BrandWordmark } from "./_internal";

const defaultColumns: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "FAQ", href: "/faq" },
      { label: "Loyalty Cards", href: "/loyalty-cards" },
      { label: "Customer Retention", href: "/customer-retention" },
      { label: "Social Media vs. Direct", href: "/social-media-vs-direct" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Our Blog", href: "/blog" },
      { label: "What we do", href: "/what-we-do" },
      { label: "Our Mission Statement", href: "/mission" },
      { label: "Our details", href: "/details" },
    ],
    groups: [
      {
        heading: "Documents",
        links: [
          { label: "Acceptable Use Policy", href: "/acceptable-use-policy" },
          { label: "Subscription Agreement", href: "/subscription-agreement" },
        ],
      },
    ],
  },
];

const defaultLegalLinks: LinkItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

const defaultContactItems: ContactItem[] = [
  { label: "+27 (82) 702-9134", href: "tel:+27827029134" },
  { label: "admin@loyaltymaster.com", href: "mailto:admin@loyaltymaster.com" },
  { label: "Pharos Ave, Plettenberg Bay, WC 6600" },
];

export interface FooterProps {
  brandLabel?: string;
  brandHref?: string;
  body?: string;
  columns?: FooterColumn[];
  contactItems?: ContactItem[];
  cta?: Action;
  legalLinks?: LinkItem[];
  copyright?: string;
}

export function Footer({
  brandLabel = "sendPUSH | Loyaltymaster",
  brandHref = "/",
  body = "sendPUSH | Loyaltymaster helps B2B teams run reminders, offers, and follow-ups from one place.",
  columns = defaultColumns,
  contactItems = defaultContactItems,
  cta = { label: "Book a Demo", href: "/contact" },
  legalLinks = defaultLegalLinks,
  copyright = "© 2026 Loyaltymaster. All rights reserved.",
}: FooterProps) {
  return (
    <footer id="site-footer" className="lm-ds wf-site-footer wf-bg-white">
      <div className="wr-container--main">
        <div className="wf-footer-shell">
          <div className="wf-footer-grid">
            <div className="wf-footer-brand">
              <div className="wf-footer-brand-mark">
                <a className="wf-brand" href={brandHref} aria-label={`${brandLabel} home`}>
                  <BrandWordmark />
                </a>
              </div>
              <p className="wf-footer-copy">{body}</p>
              <a className="wf-footer-cta" href={cta.href ?? "#"} aria-label={cta.ariaLabel}>
                <span>{cta.label}</span>
              </a>
            </div>

            {columns.map((column) => (
              <nav key={column.heading} className="wf-footer-column" aria-label={`${column.heading} footer links`}>
                <h3 className="wf-footer-heading">{column.heading}</h3>
                <ul className="wf-footer-list">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.href}`}>
                      <a className="wf-footer-link" href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
                {column.groups?.map((group) => (
                  <div key={group.heading}>
                    <h3 className="wf-footer-heading wf-footer-subheading">{group.heading}</h3>
                    <ul className="wf-footer-list">
                      {group.links.map((link) => (
                        <li key={`${group.heading}-${link.href}`}>
                          <a className="wf-footer-link" href={link.href}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            ))}

            <div className="wf-footer-column">
              <h3 className="wf-footer-heading">Contact</h3>
              <ul className="wf-footer-list">
                {contactItems.map((item) => (
                  <li key={item.label} className="wf-footer-contact-item">
                    {item.href ? <a className="wf-footer-link" href={item.href}>{item.label}</a> : <span>{item.label}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="wf-footer-bottom">
            <nav aria-label="Legal navigation" className="wf-footer-legal">
              {legalLinks.map((link) => <a key={link.href} className="wf-footer-legal-link" href={link.href}>{link.label}</a>)}
            </nav>
            <p className="wf-footer-meta">{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
