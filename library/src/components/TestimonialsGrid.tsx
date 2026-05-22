import type { TestimonialItem } from "../types";

const defaultItems: TestimonialItem[] = [
  { quote: "sendPUSH gave us one place to run reminders, promos, and follow-ups. We filled more open slots in the first few weeks without adding extra admin work.", author: "Maya Rivera", role: "Operations Lead, Riverfront Wellness", initials: "MR" },
  { quote: "We switched from manual texting to sendPUSH and saw campaign response jump fast. The team launches offers in minutes and tracks real impact each week.", author: "Jordan Patel", role: "Owner, Northside Auto Care", initials: "JP" },
  { quote: "The automations are simple to set up and the reporting is clear. It helped us keep patients engaged and reduce missed appointments month over month.", author: "Elena Brooks", role: "General Manager, Elm Street Clinic", initials: "EB" },
];

export interface TestimonialsGridProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  items?: TestimonialItem[];
}

export function TestimonialsGrid({
  eyebrow = "Customer feedback",
  heading = "Loved by Teams Worldwide",
  body = "See what local teams are saying about how sendPUSH improves response rates, reduces manual work, and keeps customers coming back.",
  items = defaultItems,
}: TestimonialsGridProps) {
  return (
    <section id="capabilities-testimonials" className="lm-ds wf-section wf-bg-white wf-cap-testimonials">
      <div className="wr-container--main">
        <div className="wf-center">
          {eyebrow ? <p className="wf-eyebrow">{eyebrow}</p> : null}
          <h2 className="wr-h2 wf-heading-center">{heading}</h2>
          {body ? <p className="wr-text-body wf-cap-testimonials-subtext">{body}</p> : null}
        </div>
        <div className="wf-cap-testimonials-grid">
          {items.map((item) => (
            <article key={`${item.author}-${item.quote}`} className="wf-cap-testimonial-card">
              <div className="wf-cap-testimonial-stars" role="img" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="wf-cap-testimonial-star" aria-hidden="true">★</span>
                ))}
              </div>
              <p className="wf-cap-testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
              <div className="wf-cap-testimonial-person">
                <div className="wf-cap-testimonial-avatar" aria-hidden="true">{item.initials ?? item.author.slice(0, 2).toUpperCase()}</div>
                <div className="wf-cap-testimonial-meta">
                  <p className="wf-quote-author">{item.author}</p>
                  {item.role ? <p className="wf-cap-testimonial-role">{item.role}</p> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
