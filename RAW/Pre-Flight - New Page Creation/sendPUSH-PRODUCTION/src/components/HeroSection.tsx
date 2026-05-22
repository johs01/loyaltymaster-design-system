import { Image } from "./CloudinaryImage";
import { Checklist, EmailCta } from "./MarketingPrimitives";
import { scrollToTrialForm } from "../utils/scrollToTrialForm";

export default function HeroSection() {
  const handleClick = () => {
    const input = document.getElementById("wf-email-hero") as HTMLInputElement | null;
    scrollToTrialForm(input?.value);
  };

  return (
    <section id="hero" className="wf-section wf-bg-peach">
      <div className="wr-container--main wf-hero-grid">
        <div className="reveal" data-reveal-order="0">
          <p className="wf-eyebrow">Customer messaging system</p>
          <h1 className="wr-h1 wf-heading-hero">
            Have Your Own Customer List. Message Them Anytime - Free.
          </h1>
          <p className="wr-text-body wf-hero-copy">
            Build your direct customer list, automate outreach, and send high-converting campaigns without relying
            on social algorithms.
          </p>
          <Checklist
            items={[
              "Own your audience and contact data from day one.",
              "Trigger reminders, offers, and follow-ups in minutes.",
              "Keep customers engaged with timely personalized updates.",
            ]}
          />
          <EmailCta
            id="wf-email-hero"
            label="Start Free in 2 Minutes email capture"
            buttonText="Start Free in 2 Minutes"
            onSubmit={handleClick}
          />
        </div>
        <div className="reveal" data-reveal-order="1">
          <div className="wf-placeholder wf-placeholder--square wf-placeholder--has-image">
            <Image
              src="/sendpush/Image02.png"
              alt="Customer messaging platform dashboard"
              loading="eager"
              transformation={[{ width: 800, quality: 85 }]}
              className="wf-image-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
