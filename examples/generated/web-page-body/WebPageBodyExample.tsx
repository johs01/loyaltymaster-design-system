'use client';

import type { ImageAsset } from "../../../library/src";
import {
  ComparisonTable,
  CtaWithButtonEmail,
  FeatureSection2ColumnBulletsImage,
  FeatureSection2ColumnImage,
  HeroMainSection,
  ImageStrip,
} from "../../../library/src";

function submitEmail(_email: string): void {
  return undefined;
}

const dashboardImage: ImageAsset = {
  src: "/assets/media/image02.png",
  alt: "sendPUSH customer messaging dashboard",
};

const campaignImage: ImageAsset = {
  src: "/assets/media/image-placeholder-640-square.jpg",
  alt: "Loyalty campaign setup visual",
};

const awardImages: ImageAsset[] = [
  { src: "/assets/awards/awards-1-3.svg", alt: "Industry awards 1 to 3" },
  { src: "/assets/awards/awards-4-6.svg", alt: "Industry awards 4 to 6" },
  { src: "/assets/awards/awards-7-9.svg", alt: "Industry awards 7 to 9" },
];

export function WebPageBodyExample() {
  return (
    <main className="lm-generated-page-body" data-template="web-page-body">
      <HeroMainSection
        id="product-explainer-hero"
        eyebrow="sendPUSH | Loyaltymaster"
        heading="Direct Customer Messages Built for Repeat Visits."
        body="Use sendPUSH to reach customers through a loyalty channel you control, with offers, reminders, and follow-ups tied to a clear return action."
        primaryAction={{ label: "Start Free in 2 Minutes", href: "#final-cta" }}
        checklist={[
          "Create loyalty messages without rebuilding your site.",
          "Use approved campaign patterns for offers and reminders.",
          "Keep the page body inside approved Loyaltymaster components.",
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
        image={dashboardImage}
      />

      <FeatureSection2ColumnImage
        id="product-explainer-problem"
        eyebrow="The problem"
        heading="Customers already know you. They just do not always hear from you in time."
        body="Use this section when the page must explain a practical business problem before moving into the sendPUSH use case."
        image={campaignImage}
        problems={[
          { id: "1", title: "Social reach is inconsistent", description: "Important offers disappear inside feeds and algorithms." },
          { id: "2", title: "Manual follow-up does not scale", description: "Staff cannot chase every customer at the perfect moment." },
          { id: "3", title: "Generic campaigns feel disconnected", description: "Customers respond better when the message has a clear next action." },
        ]}
        action={{ label: "Compare Channels", href: "#comparison" }}
      />

      <FeatureSection2ColumnBulletsImage
        id="product-explainer-use-case"
        tone="white"
        eyebrow="Use case"
        heading="Turn timely offers into measurable return visits."
        body="Use this approved section when the page needs to explain a concrete customer action."
        bullets={[
          "Send direct wallet and push messages from approved campaign moments.",
          "Keep every call to action tied to a repeat visit or booking.",
          "Use the same visual patterns across future Loyaltymaster pages.",
        ]}
        image={dashboardImage}
        action={{ label: "See the Flow", href: "#comparison" }}
      />

      <ImageStrip images={awardImages} />

      <ComparisonTable
        heading="Direct reach beats rented attention"
        body="Use the approved comparison table when the page must explain why sendPUSH is stronger than generic campaign channels."
        ctaLabel="Start With the Approved CTA"
        ctaHref="#final-cta"
      />

      <CtaWithButtonEmail
        heading="Create the next page from approved Loyaltymaster blocks."
        body="This generated body proves the Markdown recipe can become a real React page without inventing a new section."
        buttonLabel="Start Free in 2 Minutes"
        placeholder="name@email.com"
        onSubmit={submitEmail}
      />
    </main>
  );
}
