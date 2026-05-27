'use client';

import { EmailCapture } from "./_internal";
import { HeaderWithCopy, RunbookSection } from "./RunbookPromotionPrimitives";

export interface NewsletterSignupSectionProps {
  id?: string;
  heading?: string;
  body?: string;
  benefits?: string[];
  privacyNote?: string;
  placeholder?: string;
  buttonLabel?: string;
  onSubmit?: () => void;
}

export function NewsletterSignupSection({ id = "newsletter-signup-section", heading = "Join the LoyaltyMaster Newsletter", body = "Get practical customer-retention ideas written for teams that want repeat visits, not generic marketing noise.", benefits = ["Retention ideas", "Campaign examples", "Product updates"], privacyNote = "No spam. Use this only for newsletter-specific email capture.", placeholder = "name@email.com", buttonLabel = "Join newsletter", onSubmit }: NewsletterSignupSectionProps) {
  return (
    <RunbookSection id={id} tone="peach" className="lm-rb-newsletter">
      <div className="lm-rb-status-card">
        <HeaderWithCopy eyebrow="Newsletter" heading={heading} body={body} />
        <EmailCapture id="lm-newsletter-email" buttonText={buttonLabel} placeholder={placeholder} onSubmit={onSubmit} />
        <ul className="lm-rb-inline-list">
          {benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
        </ul>
        <p className="lm-rb-consent">{privacyNote}</p>
      </div>
    </RunbookSection>
  );
}
