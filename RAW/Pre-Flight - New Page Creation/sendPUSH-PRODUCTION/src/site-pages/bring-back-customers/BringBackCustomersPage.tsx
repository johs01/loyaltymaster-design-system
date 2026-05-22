import { Image } from "../../components/CloudinaryImage";
import {
  HeroMockup,
  WalletCardMockup,
  CustomerDatabaseMockup,
  NotificationsMockup,
  AutomationFlowMockup,
} from "./mockups";

const painPoints = [
  {
    id: "pain-1",
    number: "01",
    tag: "Lost Revenue",
    tagEmoji: "\u26A0",
    bg: "wf-bg-white",
    heading:
      "She was two stamps away from her free coffee. You\u2019ll never see her again.",
    body: "Sarah came in every Monday for three months. Stamp 8 of 10. Then she washed her jeans with the card in the pocket. She felt awkward asking to start over. So she just\u2026 didn\u2019t come back. Not because she found somewhere better. Because a piece of cardboard got wet.",
    calloutEmoji: "\uD83D\uDCB8",
    calloutText:
      "A loyal customer \u2014 gone over a piece of paper. This happens every single week. You just never know about it.",
    imageAlt: "Barber with client",
    reversed: false,
  },
  {
    id: "pain-2",
    number: "02",
    tag: "Zero Customer Data",
    tagEmoji: "\u26A0",
    bg: "wf-bg-salmon",
    heading:
      "You know their usual order. But you couldn\u2019t reach them if your business depended on it.",
    body: "You recognise their face. Flat white with oat milk. Skin fade with a hard part. But you don\u2019t have their name, their email, their number. If they stop coming tomorrow, you have no way to ask why, no way to say \u201Cwe miss you,\u201D no way to offer them a reason to come back. A paper card doesn\u2019t collect anything except stamps.",
    calloutEmoji: "\uD83D\uDCCB",
    calloutText:
      "Hundreds of customers have walked through your door. You can contact exactly zero of them. Paper cards create stamps \u2014 not relationships.",
    imageAlt: "Barber with client",
    reversed: true,
  },
  {
    id: "pain-3",
    number: "03",
    tag: "No Way to Reach Them",
    tagEmoji: "\u26A0",
    bg: "wf-bg-white",
    heading:
      "It\u2019s Tuesday afternoon. Every chair is empty. Your best customers are five minutes away \u2014 and you have no way to tell them.",
    body: "You\u2019d run a flash sale right now if you could. \u201C20% off, today only\u201D \u2014 that would fill the place. But who are you going to tell? Post on Instagram and hope the algorithm shows it to 3% of your followers? Put a sign in the window for people already walking past? The customers you actually want \u2014 the ones who were here last week and might come today if they knew \u2014 you can\u2019t reach them. Paper cards don\u2019t have a \u201Csend message\u201D button.",
    calloutEmoji: "\uD83D\uDCED",
    calloutText:
      "Empty chairs cost money every hour. And right now you have no tool to fill them. The only thing worse than losing a customer is not being able to invite them back.",
    imageAlt: "Empty restaurant",
    reversed: false,
  },
];

const features = [
  {
    id: "feat-wallet",
    eyebrow: "Digital Wallet Card",
    before: "Paper card that gets lost",
    after: "Card that lives in their phone",
    heading:
      "A loyalty card that can\u2019t get lost, washed, or thrown away.",
    body: "Customers scan a QR code at the counter. Your branded card saves to their Apple or Google Wallet in one tap \u2014 right next to their credit cards and boarding passes. The one place they never clean out. No app. No form. No account.",
    checkText:
      "Sarah\u2019s free coffee? She\u2019ll actually claim it this time. No more lost cards. No more abandoned loyalty progress. No more silent goodbyes.",
    bg: "wf-bg-white",
    reversed: false,
    Mockup: WalletCardMockup,
  },
  {
    id: "feat-database",
    eyebrow: "Automatic Customer Database",
    before: "No customer data at all",
    after: "A list that builds itself",
    heading: "Know every regular by name \u2014 without ever asking.",
    body: "Every time a customer saves your card, they\u2019re automatically added to your database. Name, visit count, last visit, loyalty progress. No forms. No clipboards at the counter. No chasing email addresses. Your list grows with every single tap.",
    checkText:
      "From \u201CI recognise your face\u201D to \u201CI can reach you anytime I want.\u201D Every customer who walks through your door becomes someone you can invite back.",
    bg: "wf-bg-salmon",
    reversed: true,
    Mockup: CustomerDatabaseMockup,
  },
  {
    id: "feat-push",
    eyebrow: "Push Notifications",
    before: "No way to contact customers",
    after: "A direct line to their phone",
    heading: "A packed house \u2014 any day you choose.",
    body: "Type a message. Pick who gets it \u2014 everyone, VIPs, or people who haven\u2019t visited in 2 weeks. Hit send. It pops up on their phone instantly, just like a text. No spam folder. No algorithm deciding who sees it. Open rates above 90%.",
    checkText:
      "That empty Tuesday? One message. Forty people through the door by noon. Empty chairs become a choice, not something that happens to you.",
    bg: "wf-bg-white",
    reversed: false,
    Mockup: NotificationsMockup,
  },
  {
    id: "feat-automation",
    eyebrow: "Smart Automation",
    before: "Manually tracking everything",
    after: "Set once. Runs forever.",
    heading:
      "Customers who come back on their own \u2014 without you lifting a finger.",
    body: "Set rules once and forget them. \u201CNo visit in 14 days? Send a reminder.\u201D \u201CHit 10 stamps? Tell them their reward is ready.\u201D \u201CBirthday? 25% off.\u201D Every message goes at exactly the right moment. You run your business. The system handles the rest.",
    checkText:
      "Like having a dream team that never forgets a customer and never takes a day off. You didn\u2019t start a business to chase people. Now you don\u2019t have to.",
    bg: "wf-bg-peach",
    reversed: true,
    Mockup: AutomationFlowMockup,
  },
];

const industries = [
  {
    title: "Coffee Shops",
    body: "Turn daily drinkers into devoted regulars. A nudge when they haven\u2019t visited fills tomorrow\u2019s queue today.",
    imageAlt: "Coffee shop",
  },
  {
    title: "Barbers & Salons",
    body: "Automatic reminders when they\u2019re overdue. One notification fills every cancellation on the spot.",
    imageAlt: "Barber",
  },
  {
    title: "Car Washes",
    body: "First sunny day after a week of rain? That\u2019s your cue to send. Seasonal offers direct to their phone.",
    imageAlt: "Car wash",
  },
  {
    title: "Restaurants",
    body: "Slow lunch? \u201CFree dessert with any main\u201D \u2014 one notification and every table is full by noon.",
    imageAlt: "Restaurant",
  },
];

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function PainPointSection({
  number,
  tag,
  tagEmoji,
  bg,
  heading,
  body,
  calloutEmoji,
  calloutText,
  imageAlt,
  reversed,
  id,
}: (typeof painPoints)[number]) {
  const splitClass = reversed ? "wf-split wf-split-reverse" : "wf-split";

  return (
    <section id={id} className={`wf-section ${bg}`}>
      <div className={`wr-container--main ${splitClass}`}>
        <div className="reveal" data-reveal-order="0">
          <p className="bbc-pain-number" aria-hidden="true">{number}</p>
          <span className="bbc-warning-tag">
            <span aria-hidden="true">{tagEmoji}</span> {tag}
          </span>
          <h3 className="wr-h3">{heading}</h3>
          <p className="wr-text-body">{body}</p>
          <div className="bbc-callout">
            <span className="bbc-callout-emoji" aria-hidden="true">{calloutEmoji}</span>
            <p className="bbc-callout-text">{calloutText}</p>
          </div>
        </div>
        <div className="reveal" data-reveal-order="1">
          <div className="wf-placeholder wf-placeholder--landscape wf-placeholder--has-image">
            {/* TODO: final image */}
            <Image
              src="/sendpush/image%20placeholder-640-square.jpg"
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

function FeatureSection({
  id,
  eyebrow,
  before,
  after,
  heading,
  body,
  checkText,
  bg,
  reversed,
  Mockup,
}: (typeof features)[number]) {
  const splitClass = reversed ? "wf-split wf-split-reverse" : "wf-split";

  return (
    <section id={id} className={`wf-section ${bg}`}>
      <div className={`wr-container--main ${splitClass}`}>
        <div className="reveal" data-reveal-order="0">
          <p className="wf-eyebrow">{eyebrow}</p>
          <p className="bbc-transition">
            <span>{before}</span>
            <span className="bbc-transition-arrow" aria-hidden="true">&rarr;</span>
            <span>{after}</span>
          </p>
          <h3 className="wr-h3">{heading}</h3>
          <p className="wr-text-body">{body}</p>
          <div className="bbc-check-callout">
            <span className="bbc-check-icon" aria-hidden="true">
              <CheckIcon />
            </span>
            <p className="bbc-check-text">{checkText}</p>
          </div>
        </div>
        <div className="reveal" data-reveal-order="1">
          <Mockup />
        </div>
      </div>
    </section>
  );
}

export default function BringBackCustomersPage() {
  return (
    <>
      {/* Hero */}
      <section id="retention-hero" className="wf-section wf-bg-peach">
        <div className="wr-container--main wf-split">
          <div className="reveal" data-reveal-order="0">
            <p className="wf-eyebrow">Customer Retention, Reimagined</p>
            <h1 className="wr-h1 wf-heading-hero">
              What if every customer who ever walked out your door was someone
              you could <em>bring back?</em>
            </h1>
            <p className="wr-text-body wf-hero-copy">
              A digital card on their phone. A direct line to every person
              who&rsquo;s ever visited. One message and they&rsquo;re walking
              back through your door &mdash; anytime you want.
            </p>
            <p className="wr-text-body">
              The customer retention tool for businesses that live and die on
              repeat visits.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", marginTop: 28 }}>
              <a className="wr-cta-join wf-btn" href="/design-system-template-page#tenant-trial-cta">
                <span className="wr-cta-join__label">Start Free Trial</span>
              </a>
              <a className="bbc-link-cta" href="#solution">
                See how it works <span aria-hidden="true">&darr;</span>
              </a>
            </div>
          </div>
          <div className="reveal" data-reveal-order="1">
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="wf-section wf-section-tight wf-bg-white">
        <div className="wr-container--main">
          <div className="wf-stats-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {[
              { value: "2\u00D7", label: "Customer Retention" },
              { value: "2\u00D7", label: "More Profits" },
              { value: "+30%", label: "Average Order Value" },
            ].map((stat, i) => (
              <div key={stat.label} className="wf-stat-card reveal" data-reveal-order={String(i)}>
                <p className="wf-stat-value">{stat.value}</p>
                <p className="wf-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Introduction */}
      <section className="wf-section wf-bg-cyan">
        <div className="wr-container--main wf-split">
          <div className="reveal" data-reveal-order="0">
            <p className="wf-eyebrow">The Problem With Paper</p>
            <h2 className="wr-h2">
              You&rsquo;ve built something your customers love. But when they
              leave, they vanish.
            </h2>
            <p className="wr-text-body">
              Paper stamp cards give people a reason to come back. But when they
              don&rsquo;t, you have no way to find out why &mdash; and no way to
              remind them you exist.
            </p>
          </div>
          <div className="reveal" data-reveal-order="1">
            <div className="wf-placeholder wf-placeholder--landscape wf-placeholder--has-image">
              {/* TODO: final image */}
              <Image
                src="/sendpush/image%20placeholder-640-square.jpg"
                alt="Customer at coffee counter"
                loading="lazy"
                transformation={[{ width: 800, quality: 85 }]}
                className="wf-image-fill"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      {painPoints.map((pp) => (
        <PainPointSection key={pp.id} {...pp} />
      ))}

      {/* Solution Bridge */}
      <section id="solution" className="wf-section wf-bg-peach">
        <div className="wr-container--focus wf-center">
          <div className="reveal" data-reveal-order="0">
            <h2 className="wr-h2 wf-heading-center">
              What if your stamp card could <em>talk back?</em>
            </h2>
            <p className="wr-text-body wf-center-subtext">
              Same loyalty. Same rewards. But now every customer is someone you
              can reach, every quiet afternoon is an opportunity you can act on,
              and every empty chair is a choice &mdash; not something that
              happens to you.
            </p>
          </div>
        </div>
      </section>

      {/* Features Introduction */}
      <section className="wf-section wf-bg-white">
        <div className="wr-container--focus wf-center">
          <div className="reveal" data-reveal-order="0">
            <p className="wf-eyebrow">The Upgrade</p>
            <h2 className="wr-h2 wf-heading-center">
              Everything your paper card does. Plus everything it can&rsquo;t.
            </h2>
            <p className="wr-text-body wf-center-subtext">
              Four features that turn a simple stamp card into a customer
              retention engine. Each one solves a real problem you&rsquo;ve been
              living with.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feat) => (
        <FeatureSection key={feat.id} {...feat} />
      ))}

      {/* Industries */}
      <section className="wf-section wf-bg-salmon">
        <div className="wr-container--main">
          <div className="wf-center reveal" data-reveal-order="0">
            <p className="wf-eyebrow">Built For You</p>
            <h2 className="wr-h2 wf-heading-center">
              If you have regulars, this is for you.
            </h2>
            <p className="wr-text-body wf-center-subtext">
              Any business where customers visit at least once a month &mdash;
              and one more visit means real revenue.
            </p>
          </div>
          <div className="wf-stats-grid bbc-industries-grid">
            {industries.map(({ title, body, imageAlt }, i) => (
              <article
                key={title}
                className="wf-feature-card reveal"
                data-reveal-order={String(i + 1)}
              >
                <div className="wf-placeholder wf-placeholder--4x3 wf-placeholder--has-image">
                  {/* TODO: final image */}
                  <Image
                    src="/sendpush/image%20placeholder-640-square.jpg"
                    alt={imageAlt}
                    loading="lazy"
                    transformation={[{ width: 400, quality: 85 }]}
                    className="wf-image-fill"
                  />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="wf-section wf-bg-white">
        <div className="wr-container--focus wf-center">
          <div className="reveal" data-reveal-order="0">
            <div className="bbc-testimonial-card">
              <div className="bbc-testimonial-stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="bbc-testimonial-star" aria-hidden="true">&#9733;</span>
                ))}
              </div>
              <p className="bbc-testimonial-quote">
                &ldquo;We switched from paper stamp cards and the difference was
                immediate. Customers actually come back now &mdash; and our Tuesday
                flash sales sell out by noon thanks to the push notifications.&rdquo;
              </p>
              <div className="bbc-testimonial-person">
                <div className="bbc-testimonial-avatar">
                  {/* TODO: final image */}
                  <Image
                    src="/sendpush/image%20placeholder-640-square.jpg"
                    alt="Customer"
                    loading="lazy"
                    transformation={[{ width: 200, quality: 85 }]}
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
                  />
                </div>
                <div className="bbc-testimonial-info">
                  <p className="bbc-testimonial-name">[Customer Name]</p>
                  <p className="bbc-testimonial-role">[Business Name] &mdash; [City]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="wf-section wf-bg-dark wf-final-cta">
        <div className="wr-container--focus wf-center reveal" data-reveal-order="0">
          <h2 className="wr-h2 wf-heading-dark">
            A packed house. Any day <em>you</em> choose.
          </h2>
          <p className="wf-dark-subtext">
            Keep the loyalty. Lose the paper. Set up in minutes &mdash; no app
            for your customers, no contracts, no tech headaches. Just the power
            to bring anyone back, anytime.
          </p>
          <a className="wr-cta-join wf-btn" href="/design-system-template-page#tenant-trial-cta">
            <span className="wr-cta-join__label">Get Started Free</span>
          </a>
        </div>
      </section>
    </>
  );
}
