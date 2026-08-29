import { Image } from "../../components/CloudinaryImage";
import AwardsStrip from "../../components/AwardsStrip";
import LogoGrid from "../../components/LogoGrid";
import { scrollToTrialForm } from "../../utils/scrollToTrialForm";

const STRATEGY_PLACEHOLDER_SRC = "/sendpush/image%20placeholder-640-square.jpg";

type Strategy = {
  id: string;
  eyebrow: string;
  heading: string;
  points: string[];
  bg: string;
  reversed: boolean;
  imageAlt: string;
  /** Cloudinary path (relative to endpoint); omit to use placeholder */
  imageSrc?: string;
};

const strategies: Strategy[] = [
  {
    id: "ftd-strategy-1",
    eyebrow: "Strategy 1",
    heading: "Run a Hyper Effective Flash Sale",
    points: [
      "Have a surplus of inventory or a quiet evening? Don\u2019t hope for customers \u2014 create them.",
      "Send a \u201CHappy Hour Starts Now!\u201D or \u201C50% Off All T-Shirts Until 5 PM\u201D notification instantly.",
      "Watch your local pass holders come running \u2014 no ad spend required.",
    ],
    bg: "wf-bg-cyan",
    reversed: false,
    imageAlt: "1. Run a Hyper Effective Flash Sale",
    imageSrc:
      "/sendpush/Lady%20joining%20a%20loyalty%20program%20by%20scanning%20a%20QR%20Code.png?updatedAt=1774710811738",
  },
  {
    id: "ftd-strategy-2",
    eyebrow: "Strategy 2",
    heading: "Capture Nearby Foot Traffic with Geo Fencing",
    points: [
      "Set a custom radius around your business \u2014 from half a block to a full mile.",
      "Pass holders automatically receive your welcome message the moment they enter the zone.",
      "Turn casual passersby into immediate, paying customers without lifting a finger.",
    ],
    bg: "wf-bg-peach",
    reversed: true,
    imageAlt: "2. Capture Nearby Foot Traffic with Geo Fencing",
    imageSrc: "/sendpush/Image02.png?updatedAt=1772045041225",
  },
  {
    id: "ftd-strategy-3",
    eyebrow: "Strategy 3",
    heading: "Fill Last Minute Appointment Gaps",
    points: [
      "A last-minute cancellation is lost revenue \u2014 reclaim it in seconds.",
      "Broadcast an instant offer to your VIP pass holders with a small discount for the open slot.",
      "Turn what used to be a loss into a fully booked, profitable day.",
    ],
    bg: "wf-bg-cyan",
    reversed: false,
    imageAlt: "3. Fill Last Minute Appointment Gaps",
    imageSrc:
      "/sendpush/Guy%20on%20a%20Bench%20reading%20a%20push%20notification.png?updatedAt=1774710794614",
  },
];

const capabilities = [
  {
    color: "orange" as const,
    title: "No App Required",
    body: "Your customers don\u2019t need to download anything. The pass lives in their native Apple Wallet or Google Wallet, ready to receive your notifications instantly.",
  },
  {
    color: "blue" as const,
    title: "Geo-Fencing Built In",
    body: "Set a radius around your location and automatically trigger notifications when pass holders enter the zone. Turn nearby prospects into immediate customers.",
  },
  {
    color: "orange" as const,
    title: "Simple Analytics",
    body: "Track how many customers have added your pass, how many notifications you\u2019ve sent, and measure the impact of your campaigns with clear, actionable data.",
  },
  {
    color: "orange" as const,
    title: "Live in Minutes",
    body: "No technical setup, no developer needed. Design your pass, share your link, and start driving foot traffic in under 3 minutes.",
  },
];

function StrategySection({ id, eyebrow, heading, points, bg, reversed, imageAlt, imageSrc }: Strategy) {
  const splitClass = reversed ? "wf-split wf-split-reverse" : "wf-split";
  return (
    <section id={id} className={`wf-section ${bg}`}>
      <div className={`wr-container--main ${splitClass}`}>
        <div className="reveal" data-reveal-order="0">
          <p className="wf-eyebrow ftd-strategy-eyebrow">{eyebrow}</p>
          <h3 className="wr-h3">{heading}</h3>
          <div className="ftd-points">
            {points.map((text, i) => (
              <p key={i} className="ftd-point">{text}</p>
            ))}
          </div>
        </div>
        <div className="reveal" data-reveal-order="1">
          <div className="wf-placeholder wf-placeholder--square wf-placeholder--has-image">
            <Image
              src={imageSrc ?? STRATEGY_PLACEHOLDER_SRC}
              alt={imageAlt}
              loading="lazy"
              transformation={[{ width: 800, quality: 85 }]}
              className="wf-image-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <div className="wf-placeholder wf-placeholder--square wf-placeholder--has-image">
      <Image
        src="/sendpush/Image02.png?updatedAt=1772045041225"
        alt="Local business owner using geo-fenced notifications to drive foot traffic"
        loading="eager"
        transformation={[{ width: 800, quality: 85 }]}
        className="wf-image-fill"
      />
    </div>
  );
}

export default function FootTrafficOnDemandPage() {
  const handleHeroCta = () => {
    const input = document.getElementById("wf-email-ftd-hero") as HTMLInputElement | null;
    scrollToTrialForm(input?.value);
  };

  const handleFinalCta = () => {
    const input = document.getElementById("wf-email-ftd-final") as HTMLInputElement | null;
    scrollToTrialForm(input?.value);
  };

  return (
    <>
      {/* Hero */}
      <section id="ftd-hero" className="wf-section wf-bg-peach">
        <div className="wr-container--main wf-hero-grid">
          <div className="reveal" data-reveal-order="0">
            <p className="wf-eyebrow">If You Rely on Repeat Business</p>
            <h1 className="wr-h1 wf-heading-hero">
              Turn a Slow Afternoon into Your Busiest Day of the Week.
            </h1>
            <div className="ftd-hero-mobile-media">
              <HeroImage />
            </div>
            <p className="wr-text-body wf-hero-copy">
              Use geo-fenced push notifications to send a special offer to every
              pass holder the moment they walk or drive near your location
              &mdash; the perfect tool for flash sales and turning nearby
              prospects into paying customers.
            </p>
            <ul className="wf-checklist">
              <li>Send geo-fenced alerts the moment a customer walks nearby.</li>
              <li>Run instant flash sales to turn any slow hour into a rush.</li>
              <li>Fill last-minute cancellations with a single broadcast.</li>
            </ul>
            <div className="wf-email-cta" role="group" aria-label="Start Today for Free email capture">
              <label className="wf-visually-hidden" htmlFor="wf-email-ftd-hero">Email address</label>
              <input
                className="wf-email-cta__input"
                id="wf-email-ftd-hero"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="name@email.com"
              />
              <button className="wf-email-cta__button" type="button" onClick={handleHeroCta}>
                Start Today for Free
              </button>
            </div>
          </div>
          <div className="reveal ftd-hero-desktop-media" data-reveal-order="1">
            <HeroImage />
          </div>
        </div>
      </section>

      {/* Awards strip (shared) */}
      <AwardsStrip />

      {/* Integration logos (shared) */}
      <LogoGrid />

      {/* Dark intro band */}
      <section className="wf-section wf-bg-dark">
        <div className="wr-container--focus wf-center reveal" data-reveal-order="0">
          <p className="wf-eyebrow wf-eyebrow-dark">Foot Traffic Strategies</p>
          <h2 className="wr-h2 wf-heading-dark wf-heading-center">
            Three Ways to Drive Foot Traffic On Demand
          </h2>
          <p className="wf-dark-subtext">
            Your wallet pass is a direct line to your best customers. Here&rsquo;s
            how to bring them through the door.
          </p>
        </div>
      </section>

      {/* Strategy sections */}
      {strategies.map((s) => (
        <StrategySection key={s.id} {...s} />
      ))}

      {/* Capabilities 2x2 */}
      <section id="ftd-capabilities" className="wf-section wf-bg-peach">
        <div className="wr-container--main">
          <div className="wf-center reveal" data-reveal-order="0">
            <p className="wf-eyebrow">Capabilities</p>
            <h2 className="wr-h2 wf-heading-center">
              All the Power, None of the Complexity
            </h2>
            <p className="wr-text-body wf-center-subtext">
              Built for local businesses that want results without the tech
              headaches.
            </p>
          </div>
          <div className="ftd-cap-grid">
            {capabilities.map(({ color, title, body }, i) => (
              <article
                key={title}
                className="wf-feature-card reveal"
                data-reveal-order={String(i + 1)}
              >
                <span className={`wf-feature-icon wf-feature-icon--${color}`} aria-hidden="true"></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final dark CTA */}
      <section id="ftd-final-cta" className="wf-section wf-bg-dark wf-final-cta">
        <div className="wr-container--focus wf-center reveal" data-reveal-order="0">
          <h2 className="wr-h2 wf-heading-dark">
            Don&rsquo;t Leave Another Slow Day to Chance.
          </h2>
          <p className="wf-dark-subtext">
            You have a direct line to your most loyal customers sitting in your
            pocket. It&rsquo;s time to use it. Stop spending money on ads that
            don&rsquo;t work and start broadcasting offers that drive immediate,
            measurable foot traffic.
          </p>
          <p className="wf-dark-subtext">
            <em>Your next busiest day is just one notification away.</em>
          </p>
          <div className="wf-email-cta" role="group" aria-label="Start Today for Free email capture">
            <label className="wf-visually-hidden" htmlFor="wf-email-ftd-final">Email address</label>
            <input
              className="wf-email-cta__input"
              id="wf-email-ftd-final"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="name@email.com"
            />
            <button className="wf-email-cta__button" type="button" onClick={handleFinalCta}>
              Start Today for Free
            </button>
          </div>
          <p className="ftd-cta-hint">
            <span className="ftd-cta-hint-emoji" aria-hidden="true">&#128073;</span>
            <span>No credit card required.</span>
          </p>
        </div>
      </section>
    </>
  );
}
