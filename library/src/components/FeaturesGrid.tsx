import type { FeatureItem } from "../types";

const defaultItems: FeatureItem[] = [
  { title: "Wallet passes", body: "Give customers an always-available loyalty touchpoint." },
  { title: "Push reminders", body: "Reach customers with timely messages they can act on." },
  { title: "Offer control", body: "Keep campaigns focused on the next visit or purchase." },
];

export interface FeaturesGridProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  items?: FeatureItem[];
}

export function FeaturesGrid({
  eyebrow,
  heading = "Everything needed to bring customers back",
  body,
  items = defaultItems,
}: FeaturesGridProps) {
  return (
    <section id="features" className="lm-ds wf-section wf-bg-white lm-features-grid-section">
      <div className="wr-container--main">
        <div className="wf-center">
          {eyebrow ? <p className="wf-eyebrow">{eyebrow}</p> : null}
          <h2 className="wr-h2 wf-heading-center">{heading}</h2>
          {body ? <p className="wr-text-body wf-center-subtext">{body}</p> : null}
        </div>
        <div className="wf-feature-grid">
          {items.map((item) => (
            <article key={item.title} className="wf-feature-card">
              {item.icon ? <span className="wf-feature-icon" aria-hidden="true">{item.icon}</span> : null}
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
