const features = [
  { color: "orange", title: "Smart Segments", body: "Group customers by recency, spend, visit habits, and campaign response.", order: 1 },
  { color: "blue", title: "Behavior Triggers", body: "Launch message flows based on customer actions in real time.", order: 2 },
  { color: "yellow", title: "Campaign Calendar", body: "Plan seasonal offers and auto-activate them on schedule.", order: 3 },
  { color: "blue", title: "Geo Messaging", body: "Send localized offers when customers are near your business.", order: 4 },
  { color: "orange", title: "Revenue Tracking", body: "Measure conversions and attributed revenue from every campaign.", order: 5 },
  { color: "yellow", title: "One Inbox", body: "Review responses, opt-outs, and follow-up tasks in one place.", order: 6 },
];

const capTestimonials = [
  {
    initials: "MR",
    quote: "sendPUSH gave us one place to run reminders, promos, and follow-ups. We filled more open slots in the first few weeks without adding extra admin work.",
    author: "Maya Rivera",
    role: "Operations Lead, Riverfront Wellness",
    order: 1,
  },
  {
    initials: "JP",
    quote: "We switched from manual texting to sendPUSH and saw campaign response jump fast. The team launches offers in minutes and tracks real impact each week.",
    author: "Jordan Patel",
    role: "Owner, Northside Auto Care",
    order: 2,
  },
  {
    initials: "EB",
    quote: "The automations are simple to set up and the reporting is clear. It helped us keep patients engaged and reduce missed appointments month over month.",
    author: "Elena Brooks",
    role: "General Manager, Elm Street Clinic",
    order: 3,
  },
];

export default function FeaturesSection() {
  return (
    <>
      <section id="features" className="wf-section wf-bg-white">
        <div className="wr-container--main">
          <div className="wf-center reveal" data-reveal-order="0">
            <p className="wf-eyebrow">Capabilities</p>
            <h2 className="wr-h2 wf-heading-center">All the Power, None of the Complexity</h2>
            <p className="wr-text-body wf-center-subtext">Built for fast-moving teams that want results without extra tools.</p>
          </div>
          <div className="wf-feature-grid">
            {features.map(({ color, title, body, order }) => (
              <article key={title} className="wf-feature-card reveal" data-reveal-order={String(order)}>
                <span className={`wf-feature-icon wf-feature-icon--${color}`} aria-hidden="true"></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities-testimonials" className="wf-section wf-bg-white wf-cap-testimonials">
        <div className="wr-container--main">
          <div className="wf-center reveal" data-reveal-order="0">
            <p className="wf-eyebrow">Customer feedback</p>
            <h2 className="wr-h2 wf-heading-center">Loved by Teams Worldwide</h2>
            <p className="wr-text-body wf-cap-testimonials-subtext">
              See what local teams are saying about how sendPUSH improves response rates, reduces manual work, and
              keeps customers coming back.
            </p>
          </div>
          <div className="wf-cap-testimonials-grid">
            {capTestimonials.map(({ initials, quote, author, role, order }) => (
              <article key={author} className="wf-cap-testimonial-card reveal" data-reveal-order={String(order)}>
                <div className="wf-cap-testimonial-stars" role="img" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="wf-cap-testimonial-star" aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="wf-cap-testimonial-quote">&ldquo;{quote}&rdquo;</p>
                <div className="wf-cap-testimonial-person">
                  <div className="wf-cap-testimonial-avatar" aria-hidden="true">{initials}</div>
                  <div className="wf-cap-testimonial-meta">
                    <p className="wf-quote-author">{author}</p>
                    <p className="wf-cap-testimonial-role">{role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
