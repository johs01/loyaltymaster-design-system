import type { TestimonialItem } from "../types";
import { EmailCapture } from "./_internal";

export interface TestimonialProofCta {
  placeholder?: string;
  buttonLabel?: string;
  action?: string;
  method?: "get" | "post";
  inputName?: string;
  ariaLabel?: string;
}

export interface TestimonialSingleProps {
  eyebrow?: string;
  heading?: string;
  quote?: string;
  author?: string;
  role?: string;
  testimonials?: TestimonialItem[];
  cta?: TestimonialProofCta | false;
}

export function TestimonialSingle({
  eyebrow = "More proof",
  heading = "What Real Customers Are Saying",
  quote = "We booked 17 extra appointments in one weekend from a single campaign.",
  author = "Noah T.",
  role = "Clinic Manager",
  testimonials,
  cta = {},
}: TestimonialSingleProps) {
  const visibleTestimonials = testimonials ?? [{ quote, author, role }];
  const ctaConfig = cta === false
    ? null
    : {
      placeholder: "name@email.com",
      buttonLabel: "Start Free Trial",
      action: "#",
      method: "get" as const,
      inputName: "email",
      ariaLabel: "Start a free trial from testimonial proof",
      ...cta,
    };

  return (
    <section id="testimonial-2" className="lm-ds wf-section wf-bg-dark">
      <div className="wr-container--focus">
        <div className="wf-center">
          <p className="wf-eyebrow wf-eyebrow-dark">{eyebrow}</p>
          <h2 className="wr-h2 wf-heading-center wf-heading-dark">{heading}</h2>
        </div>
        <article className="wf-testimonial-card wf-testimonial-card-dark">
          {visibleTestimonials.slice(0, 2).map((item) => (
            <div key={`${item.author}-${item.quote}`}>
              <p className="wf-quote wf-quote-dark">&ldquo;{item.quote}&rdquo;</p>
              <p className="wf-quote-author wf-quote-author-dark">
                {item.author}{item.role ? ` - ${item.role}` : ""}
              </p>
            </div>
          ))}
        </article>
        {ctaConfig ? (
          <div className="wf-center" style={{ marginTop: "24px" }}>
            <EmailCapture
              id="testimonial-proof-email"
              label={ctaConfig.ariaLabel}
              placeholder={ctaConfig.placeholder}
              buttonText={ctaConfig.buttonLabel}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
