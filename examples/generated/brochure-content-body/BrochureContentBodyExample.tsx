'use client';

import type { ImageAsset } from "../../../library/src";
import {
  CtaTrialFullForm,
  GeoFenceUseCase,
  HeroMainSection,
  ImageStrip,
  PricingSection,
  StatsCardStrip,
  TestimonialSingle,
} from "../../../library/src";

function submitTrialForm(): void {
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

const proofImages: ImageAsset[] = [
  { src: "/assets/awards/awards-1-3.svg", alt: "Approved platform proof group 1" },
  { src: "/assets/awards/awards-4-6.svg", alt: "Approved platform proof group 2" },
  { src: "/assets/awards/awards-7-9.svg", alt: "Approved platform proof group 3" },
];

export function BrochureContentBodyExample() {
  return (
    <main className="lm-generated-page-body" data-template="brochure-content-body">
      <HeroMainSection
        id="brochure-cover"
        eyebrow="Sales content"
        heading="A Loyalty Campaign Brochure Built From Approved Blocks."
        body="This generated body proves brochure-style content can use approved sections without custom brochure-only visual language."
        primaryAction={{ label: "Start Free in 2 Minutes", href: "#brochure-form" }}
        checklist={[
          "Approved cover, proof, use-case, pricing, and CTA panels.",
          "No custom brochure-only cards, ribbons, or page furniture.",
          "Body-only by default for website use.",
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
        image={dashboardImage}
      />

      <GeoFenceUseCase
        id="brochure-use-case"
        eyebrow="Use-case panel"
        heading="Reach nearby customers with a timely return offer."
        body="The approved use-case panel carries a concrete sales story without inventing a brochure spread layout."
        bullets={[
          "Match the offer to a real visit moment.",
          "Keep the CTA clear and campaign-specific.",
          "Use the same visual rules as the web component library.",
        ]}
        image={campaignImage}
        action={{ label: "See the Use Case", href: "#brochure-form" }}
      />

      <ImageStrip images={proofImages} ariaLabel="Approved brochure proof image strip" />

      <StatsCardStrip
        stats={[
          { value: "4", label: "Approved brochure panels" },
          { value: "0", label: "Invented ribbons" },
          { value: "1", label: "Primary offer" },
          { value: "20", label: "Wave 1 components" },
        ]}
      />

      <PricingSection
        heading="Keep pricing inside the approved pricing component"
        body="Brochure pricing must not become a custom plan-card panel."
      />

      <TestimonialSingle
        testimonials={[
          { quote: "The same approved sections can support sales collateral without drifting into a new visual system.", author: "Phase 8E Brochure Proof", role: "Generated content gate" },
        ]}
      />

      <CtaTrialFullForm
        heading="Capture qualified brochure interest with the approved trial form."
        body="Use the full form only when the brochure needs more than an email capture."
        submitLabel="Start Free in 2 Minutes"
        onSubmit={submitTrialForm}
      />
    </main>
  );
}
