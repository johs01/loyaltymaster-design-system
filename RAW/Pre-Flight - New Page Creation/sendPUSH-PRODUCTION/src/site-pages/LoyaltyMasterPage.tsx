import { Image } from "../components/CloudinaryImage";
const painPoints = [
  {
    id: "pain-1",
    bg: "wf-bg-white",
    heading:
      "She was two stamps away from her free coffee. You\u2019ll never see her again.",
    body: "Sarah came in every Monday for three months. Stamp 8 of 10. Then she washed her jeans with the card in the pocket. She felt awkward asking to start over. So she just\u2026 didn\u2019t come back. Not because she found somewhere better. Because a piece of cardboard got wet.",
    imageAlt: "Customer at coffee counter",
    reversed: false,
  },
  {
    id: "pain-2",
    bg: "wf-bg-salmon",
    heading:
      "You know their usual order. But you couldn\u2019t reach them if your business depended on it.",
    body: "You recognise their face. Flat white with oat milk. Skin fade with a hard part. But you don\u2019t have their name, their email, their number. If they stop coming tomorrow, you have no way to ask why, no way to say \u201cwe miss you,\u201d no way to offer them a reason to come back. A paper card doesn\u2019t collect anything except stamps.",
    imageAlt: "Barber with client",
    reversed: true,
  },
  {
    id: "pain-3",
    bg: "wf-bg-white",
    heading:
      "It\u2019s Tuesday afternoon. Every chair is empty. Your best customers are five minutes away \u2014 and you have no way to tell them.",
    body: "You\u2019d run a flash sale right now if you could. \u201c20% off, today only\u201d \u2014 that would fill the place. But who are you going to tell? Post on Instagram and hope the algorithm shows it to 3% of your followers? Put a sign in the window for people already walking past? The customers you actually want \u2014 the ones who were here last week and might come today if they knew \u2014 you can\u2019t reach them. Paper cards don\u2019t have a \u201csend message\u201d button.",
    imageAlt: "Empty restaurant",
    reversed: false,
  },
];

const features = [
  {
    color: "orange",
    title: "A loyalty card that can\u2019t get lost, washed, or thrown away.",
    body: "Customers scan a QR code at the counter. Your branded card saves to their Apple or Google Wallet in one tap \u2014 right next to their credit cards and boarding passes. The one place they never clean out. No app. No form. No account.",
    tag: "Saved in Apple Wallet \u00b7 Always with them",
    order: 1,
  },
  {
    color: "blue",
    title: "Know every regular by name \u2014 without ever asking.",
    body: "Every time a customer saves your card, they\u2019re automatically added to your database. Name, visit count, last visit, loyalty progress. No forms. No clipboards at the counter. No chasing email addresses. Your list grows with every single tap.",
    order: 2,
  },
  {
    color: "yellow",
    title: "A packed house \u2014 any day you choose.",
    body: "Type a message. Pick who gets it \u2014 everyone, VIPs, or people who haven\u2019t visited in 2 weeks. Hit send. It pops up on their phone instantly, just like a text. No spam folder. No algorithm deciding who sees it. Open rates above 90%.",
    order: 3,
  },
  {
    color: "orange",
    title: "Customers who come back on their own \u2014 without you lifting a finger.",
    body: "Set rules once and forget them. \u201cNo visit in 14 days? Send a reminder.\u201d \u201cHit 10 stamps? Tell them their reward is ready.\u201d \u201cBirthday? 25% off.\u201d Every message goes at exactly the right moment. You run your business. The system handles the rest.",
    order: 4,
  },
];

const industries = [
  {
    title: "Coffee Shops",
    body: "Turn daily drinkers into devoted regulars. A nudge when they haven\u2019t visited fills tomorrow\u2019s queue today.",
    imageAlt: "Coffee shop",
    order: 1,
  },
  {
    title: "Barbers & Salons",
    body: "Automatic reminders when they\u2019re overdue. One notification fills every cancellation on the spot.",
    imageAlt: "Barber",
    order: 2,
  },
  {
    title: "Car Washes",
    body: "First sunny day after a week of rain? That\u2019s your cue to send. Seasonal offers direct to their phone.",
    imageAlt: "Car wash",
    order: 3,
  },
  {
    title: "Restaurants",
    body: "Slow lunch? \u201cFree dessert with any main\u201d \u2014 one notification and every table is full by noon.",
    imageAlt: "Restaurant",
    order: 4,
  },
];

function PainPointSplit({
  bg,
  heading,
  body,
  imageAlt,
  reversed,
  id,
}: (typeof painPoints)[number]) {
  const splitClass = reversed ? "wf-split wf-split-reverse" : "wf-split";

  const textBlock = (
    <div className="reveal" data-reveal-order="0">
      <h3 className="wr-h3">{heading}</h3>
      <p className="wr-text-body">{body}</p>
    </div>
  );

  const imageBlock = (
    <div className="reveal" data-reveal-order="1">
      <div className="wf-placeholder wf-placeholder--landscape wf-placeholder--has-image">
        {/* TODO: Upload final image to Cloudinary and replace src */}
        <Image
          src="/sendpush/image%20placeholder-640-square.jpg"
          alt={imageAlt}
          loading="lazy"
          transformation={[{ width: 800, quality: 85 }]}
          className="wf-image-fill"
        />
      </div>
    </div>
  );

  return (
    <section id={`${id}-split`} className={`wf-section ${bg}`}>
      <div className={`wr-container--main ${splitClass}`}>
        {reversed ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}

export default function LoyaltyMasterPage() {
  return (
    <>
      {/* S1: Hero */}
      <section id="loyalty-hero" className="wf-section wf-bg-peach">
        <div className="wr-container--focus wf-center">
          <div className="reveal" data-reveal-order="0">
            <h1 className="wr-h1 wf-heading-hero">
              What if every customer who ever walked out your door was someone
              you could bring back?
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
          </div>
        </div>
      </section>

      {/* S2: Problem Introduction */}
      <section className="wf-section wf-bg-cyan">
        <div className="wr-container--focus wf-center">
          <div className="reveal" data-reveal-order="0">
            <h2 className="wr-h2 wf-heading-center">
              You&rsquo;ve built something your customers love. But when they
              leave, they vanish.
            </h2>
            <p className="wr-text-body wf-center-subtext">
              Paper stamp cards give people a reason to come back. But when they
              don&rsquo;t, you have no way to find out why &mdash; and no way to
              remind them you exist.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points — Split Layouts */}
      {painPoints.map((pp) => (
        <PainPointSplit key={`${pp.id}-split`} {...pp} />
      ))}

      {/* VERSION B removed — using split layout above */}

      {/* S6: Solution Bridge */}
      <section className="wf-section wf-bg-peach">
        <div className="wr-container--focus wf-center">
          <div className="reveal" data-reveal-order="0">
            <h2 className="wr-h2 wf-heading-center">
              What if your stamp card could talk back?
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

      {/* S7: Features */}
      <section className="wf-section wf-bg-white">
        <div className="wr-container--main">
          <div className="wf-center reveal" data-reveal-order="0">
            <h2 className="wr-h2 wf-heading-center">
              Everything your paper card does. Plus everything it can&rsquo;t.
            </h2>
            <p className="wr-text-body wf-center-subtext">
              Four features that turn a simple stamp card into a customer
              retention engine. Each one solves a real problem you&rsquo;ve been
              living with.
            </p>
          </div>
          <div className="wf-feature-grid">
            {features.map(({ color, title, body, tag, order }) => (
              <article
                key={title}
                className="wf-feature-card reveal"
                data-reveal-order={String(order)}
              >
                <span
                  className={`wf-feature-icon wf-feature-icon--${color}`}
                  aria-hidden="true"
                ></span>
                <h3>{title}</h3>
                <p>{body}</p>
                {tag && <p className="wf-eyebrow">{tag}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* S8: Industries */}
      <section className="wf-section wf-bg-salmon">
        <div className="wr-container--main">
          <div className="wf-center reveal" data-reveal-order="0">
            <h2 className="wr-h2 wf-heading-center">
              If you have regulars, this is for you.
            </h2>
            <p className="wr-text-body wf-center-subtext">
              Any business where customers visit at least once a month &mdash;
              and one more visit means real revenue.
            </p>
          </div>
          <div className="wf-stats-grid">
            {industries.map(({ title, body, imageAlt, order }) => (
              <article
                key={title}
                className="wf-feature-card reveal"
                data-reveal-order={String(order)}
              >
                <div className="wf-placeholder wf-placeholder--4x3 wf-placeholder--has-image">
                  {/* TODO: Upload final image to Cloudinary and replace src */}
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

      {/* S9: Final CTA */}
      <section className="wf-section wf-bg-dark wf-final-cta">
        <div className="wr-container--focus wf-center reveal" data-reveal-order="0">
          <h2 className="wr-h2 wf-heading-dark">
            A packed house. Any day you choose.
          </h2>
          <p className="wf-dark-subtext">
            Keep the loyalty. Lose the paper. Set up in minutes &mdash; no app
            for your customers, no contracts, no tech headaches. Just the power
            to bring anyone back, anytime.
          </p>
          <a
            className="wf-email-cta__button"
            href="#tenant-trial-cta"
            style={{ display: "inline-block", marginTop: 24 }}
          >
            Start Your Free Trial
          </a>
        </div>
      </section>
    </>
  );
}
