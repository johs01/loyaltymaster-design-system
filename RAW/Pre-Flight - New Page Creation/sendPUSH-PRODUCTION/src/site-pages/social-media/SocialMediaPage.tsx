import { Image } from "../../components/CloudinaryImage";

const painPoints = [
  {
    id: "pain-buried",
    bg: "wf-bg-white",
    heading: "The buried post",
    body: "You spent 30 minutes on the perfect photo. Wrote the caption three times. Posted it at the \u201Coptimal time\u201D the blog told you. The algorithm showed it to 12 people. Three of them were your staff. Your loyal customers \u2014 the ones who\u2019d actually come in \u2014 never saw it.",
    imageSrc: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop",
    imageAlt: "Person scrolling phone past business posts",
    reversed: false,
  },
  {
    id: "pain-audience",
    bg: "wf-bg-salmon",
    heading: "The audience that isn\u2019t yours",
    body: "You have 800 followers. You think that\u2019s 800 people you can reach. It\u2019s not. Instagram owns that list. They decide who sees you. They can change the rules overnight. You built someone else\u2019s asset on someone else\u2019s land \u2014 and you can\u2019t take it with you.",
    imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    imageAlt: "Empty cafe on a slow afternoon",
    reversed: true,
  },
  {
    id: "pain-vanished",
    bg: "wf-bg-white",
    heading: "The regular who vanished",
    body: "She came in every Thursday for eight months. Then she stopped. Maybe she moved. Maybe she just forgot. You\u2019ll never know \u2014 because you have no way to reach her. No email. No phone number. She\u2019s gone, and you can\u2019t even ask why.",
    imageSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    imageAlt: "Empty restaurant tables",
    reversed: false,
  },
];

const steps = [
  {
    id: "step-card",
    number: 1,
    bg: "wf-bg-salmon",
    heading: "Customer saves your card",
    body: "They scan a QR code or tap a link. Your branded digital card is saved to their Apple or Google Wallet in seconds. Every card holder is automatically added to your customer list.",
    callout: "An audience you actually own \u2014 not one you\u2019re renting from an algorithm.",
    reversed: false,
  },
  {
    id: "step-list",
    number: 2,
    bg: "wf-bg-white",
    heading: "Your customer list builds itself",
    body: "No forms. No sign-ups. No chasing email addresses. Every customer who saves your card becomes a contact you can reach anytime. Your database grows with every visit.",
    callout: "Know every regular by name \u2014 without ever asking.",
    reversed: true,
  },
  {
    id: "step-message",
    number: 3,
    bg: "wf-bg-salmon",
    heading: "Message them directly",
    body: "Promotions, reminders, time-sensitive offers \u2014 send a push notification that appears on their screen instantly. No algorithm. No spam folder. 90%+ open rates.",
    callout: "A packed house \u2014 any day you choose.",
    reversed: false,
  },
  {
    id: "step-auto",
    number: 4,
    bg: "wf-bg-white",
    heading: "Customers who come back on their own",
    body: "Automate messages based on time since last visit, loyalty milestones, or special dates. The right message at the right time \u2014 without you lifting a finger.",
    callout: "Like having a dream team that never forgets a customer and never takes a day off.",
    reversed: true,
  },
];

const industries = [
  {
    title: "Coffee Shops",
    body: "Turn daily drinkers into loyal regulars with digital stamps and timely nudges.",
    imageSrc: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
    imageAlt: "Coffee shop",
  },
  {
    title: "Barbers & Salons",
    body: "Remind clients when they\u2019re due. Fill cancellations with a single push notification.",
    imageSrc: "https://images.unsplash.com/photo-1585747860019-8004e7de1ab1?w=400&h=300&fit=crop",
    imageAlt: "Barber shop",
  },
  {
    title: "Car Washes",
    body: "Seasonal offers straight to their phone. Sun\u2019s out? Send a deal before they drive past.",
    imageSrc: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop",
    imageAlt: "Car wash",
  },
  {
    title: "Restaurants",
    body: "Tuesday slow? One push notification can fill every table by lunchtime.",
    imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
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
  id,
  bg,
  heading,
  body,
  imageSrc,
  imageAlt,
  reversed,
}: (typeof painPoints)[number]) {
  const splitClass = reversed ? "wf-split wf-split-reverse" : "wf-split";

  return (
    <section id={id} className={`wf-section ${bg}`}>
      <div className={`wr-container--main ${splitClass}`}>
        <div className="reveal" data-reveal-order="0">
          <h3 className="wr-h3">{heading}</h3>
          <p className="wr-text-body">{body}</p>
        </div>
        <div className="reveal" data-reveal-order="1">
          <div className="wf-placeholder wf-placeholder--landscape wf-placeholder--has-image">
            {/* TODO: final image */}
            <Image
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              transformation={[{ width: 800, quality: 85 }]}
              className="wf-image-fill"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepSection({
  id,
  number,
  bg,
  heading,
  body,
  callout,
  reversed,
}: (typeof steps)[number]) {
  const splitClass = reversed ? "wf-split wf-split-reverse" : "wf-split";

  return (
    <section id={id} className={`wf-section ${bg}`}>
      <div className={`wr-container--main ${splitClass}`}>
        <div className="reveal" data-reveal-order="0">
          <span className="sm-step-number" aria-hidden="true">{number}</span>
          <h3 className="wr-h3">{heading}</h3>
          <p className="wr-text-body">{body}</p>
          <div className="sm-highlight">
            <span className="sm-highlight-icon" aria-hidden="true">
              <CheckIcon />
            </span>
            <p className="sm-highlight-text">{callout}</p>
          </div>
        </div>
        <div className="reveal" data-reveal-order="1">
          <div className="wf-placeholder wf-placeholder--landscape">
            {/* TODO: step mockup or illustration */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SocialMediaPage() {
  return (
    <>
      {/* Hero */}
      <section id="sm-hero" className="wf-section wf-bg-peach">
        <div className="wr-container--focus wf-center">
          <div className="reveal" data-reveal-order="0">
            <h1 className="wr-h1 wf-heading-hero wf-heading-center">
              Social media doesn&rsquo;t care about your coffee shop.
            </h1>
            <p className="wr-text-body wf-hero-copy wf-center-subtext">
              You post. The algorithm buries it. Your customers never see it. A
              digital card on their phone lets you message them directly. No app.
              No algorithm. No guessing.
            </p>
            <p className="wr-text-body wf-center-subtext">
              The customer retention tool for businesses that live and die on
              repeat visits.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flexWrap: "wrap", marginTop: 28 }}>
              <a className="wr-cta-join wf-btn" href="/design-system-template-page#tenant-trial-cta">
                <span className="wr-cta-join__label">Start Free Trial</span>
              </a>
              <a className="sm-link-cta" href="#sm-solution">
                See how it works <span aria-hidden="true">&darr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Introduction */}
      <section className="wf-section wf-bg-cyan">
        <div className="wr-container--focus wf-center">
          <div className="reveal" data-reveal-order="0">
            <h2 className="wr-h2 wf-heading-center">
              You&rsquo;re spending hours talking to people who will never hear
              you.
            </h2>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      {painPoints.map((pp) => (
        <PainPointSection key={pp.id} {...pp} />
      ))}

      {/* Bridge */}
      <section id="sm-solution" className="wf-section wf-bg-peach">
        <div className="wr-container--focus wf-center">
          <div className="reveal" data-reveal-order="0">
            <h2 className="wr-h2 wf-heading-center">
              What if you had a direct line to every customer who&rsquo;s ever
              walked through your door?
            </h2>
            <p className="wr-text-body wf-center-subtext">
              No algorithm deciding who sees your message. No followers you
              can&rsquo;t contact. No customers who vanish without a trace. Just
              you, your message, and their phone.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Introduction */}
      <section className="wf-section wf-bg-white">
        <div className="wr-container--focus wf-center">
          <div className="reveal" data-reveal-order="0">
            <h2 className="wr-h2 wf-heading-center">
              One digital card. A direct line to every customer.
            </h2>
            <p className="wr-text-body wf-center-subtext">
              Your customers save a card to their phone&rsquo;s wallet. You send
              messages that pop up on their screen &mdash; just like a text. No
              app. No tech skills. No algorithm between you and them.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      {steps.map((step) => (
        <StepSection key={step.id} {...step} />
      ))}

      {/* Industries */}
      <section className="wf-section wf-bg-peach">
        <div className="wr-container--main">
          <div className="wf-center reveal" data-reveal-order="0">
            <h2 className="wr-h2 wf-heading-center">
              If your business has regulars, this is for you.
            </h2>
            <p className="wr-text-body wf-center-subtext">
              Any business where customers come back &mdash; and where one more
              visit means real revenue.
            </p>
          </div>
          <div className="wf-stats-grid sm-industries-grid">
            {industries.map(({ title, body, imageSrc, imageAlt }, i) => (
              <article
                key={title}
                className="wf-feature-card reveal"
                data-reveal-order={String(i + 1)}
              >
                <div className="wf-placeholder wf-placeholder--4x3 wf-placeholder--has-image">
                  {/* TODO: final image */}
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    loading="lazy"
                    transformation={[{ width: 400, quality: 85 }]}
                    className="wf-image-fill"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="wf-section wf-bg-dark wf-final-cta">
        <div className="wr-container--focus wf-center reveal" data-reveal-order="0">
          <h2 className="wr-h2 wf-heading-dark">
            Stop renting your audience. Start owning it.
          </h2>
          <p className="wf-dark-subtext">
            Set up in minutes. No app for your customers. No contracts. Your
            first week will show you what social media never could.
          </p>
          <a className="wr-cta-join wf-btn" href="/design-system-template-page#tenant-trial-cta">
            <span className="wr-cta-join__label">Get Started Free</span>
          </a>
        </div>
      </section>
    </>
  );
}
