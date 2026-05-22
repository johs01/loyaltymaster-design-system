import { CtaButton, EmailCta } from "./MarketingPrimitives";
import { scrollToTrialForm } from "../utils/scrollToTrialForm";

interface TestimonialSectionProps {
  id: string;
  eyebrow: string;
  heading: string;
  quotes: { text: string; author: string }[];
  dark?: boolean;
  showEmailCta?: boolean;
  emailCtaId?: string;
  emailCtaLabel?: string;
  emailCtaButtonText?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function TestimonialSection({
  id,
  eyebrow,
  heading,
  quotes,
  dark = false,
  showEmailCta = false,
  emailCtaId,
  emailCtaLabel,
  emailCtaButtonText,
  ctaText,
  ctaHref,
}: TestimonialSectionProps) {
  const bgClass = dark ? "wf-bg-dark" : "wf-bg-white";

  const handleEmailCtaClick = () => {
    if (!emailCtaId) return;
    const input = document.getElementById(emailCtaId) as HTMLInputElement | null;
    scrollToTrialForm(input?.value);
  };

  return (
    <section id={id} className={`wf-section ${bgClass}`}>
      <div className="wr-container--focus">
        <div className="wf-center reveal" data-reveal-order="0">
          <p className={`wf-eyebrow${dark ? " wf-eyebrow-dark" : ""}`}>{eyebrow}</p>
          <h2 className={`wr-h2 wf-heading-center${dark ? " wf-heading-dark" : ""}`}>{heading}</h2>
        </div>
        <article className={`wf-testimonial-card reveal${dark ? " wf-testimonial-card-dark" : ""}`} data-reveal-order="1">
          {quotes.map(({ text, author }, i) => (
            <div key={i}>
              <p className={`wf-quote${dark ? " wf-quote-dark" : ""}`}>&ldquo;{text}&rdquo;</p>
              <p className={`wf-quote-author${dark ? " wf-quote-author-dark" : ""}`}>{author}</p>
            </div>
          ))}
        </article>
        <div className="wf-center reveal" data-reveal-order="2">
          {showEmailCta && emailCtaId ? (
            <EmailCta
              id={emailCtaId}
              label={emailCtaLabel}
              buttonText={emailCtaButtonText ?? ""}
              onSubmit={handleEmailCtaClick}
            />
          ) : ctaText && ctaHref ? (
            <CtaButton href={ctaHref}>{ctaText}</CtaButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
