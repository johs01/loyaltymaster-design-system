import { Image } from "./CloudinaryImage";
import { CtaButton } from "./MarketingPrimitives";

export default function ProblemSection() {
  return (
    <section id="problem" className="wf-section wf-bg-cyan">
      <div className="wr-container--main wf-split">
        <div className="reveal" data-reveal-order="0">
          <p className="wf-eyebrow">The real problem</p>
          <h2 className="wr-h2 wf-heading-section">
            Your Messages to Your Customers Aren&apos;t Getting Through.
          </h2>
          <ol className="wf-number-list">
            <li>
              <h3 className="wf-number-title">Inboxes are overloaded</h3>
              <p className="wr-text-body">Your updates compete with dozens of promotions every day.</p>
            </li>
            <li>
              <h3 className="wf-number-title">Algorithms hide your posts</h3>
              <p className="wr-text-body">Most of your audience never sees social updates in time to act.</p>
            </li>
            <li>
              <h3 className="wf-number-title">Missed follow-ups cost revenue</h3>
              <p className="wr-text-body">No-shows, empty slots, and quiet periods stack up each week.</p>
            </li>
          </ol>
          <CtaButton>See How It Works</CtaButton>
        </div>
        <div className="reveal" data-reveal-order="1">
          <div className="wf-placeholder wf-placeholder--square wf-placeholder--has-image">
            <Image
              src="/sendpush/image%20placeholder-640-square.jpg"
              alt="Messages not reaching customers"
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
