'use client';

import type { ImageAsset } from "../../../library/src";
import {
  ButtonEmail,
  CtaWithButtonEmail,
  FaqAccordion,
  FeaturesGrid,
  HeroMainSection,
  PricingSection,
  ProcessSteps,
  StatsCardStrip,
  TestimonialSingle,
  TestimonialsGrid,
} from "../../../library/src";

function submitEmail(_email: string): void {
  return undefined;
}

function FeatureIcon({ tone }: { tone: "orange" | "blue" | "yellow" }) {
  return <span className={`lm-generated-icon lm-generated-icon--${tone}`} aria-hidden="true" />;
}

const dashboardImage: ImageAsset = {
  src: "/assets/media/image02.png",
  alt: "sendPUSH customer messaging dashboard",
};

export function LandingPageBodyExample() {
  return (
    <main className="lm-generated-page-body" data-template="landing-page-body">
      <HeroMainSection
        id="trial-hero"
        eyebrow="If you rely on repeat business"
        heading="Launch a Loyalty Campaign Customers Actually See."
        body="sendPUSH helps teams reach customers through a direct loyalty channel, with approved campaign patterns that keep every message tied to a return action."
        primaryAction={{ label: "Start Free in 2 Minutes", href: "#final-cta" }}
        checklist={[
          "One direct conversion action.",
          "Approved Loyaltymaster page-body components only.",
          "No invented sections, cards, buttons, tokens, or variants.",
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
        image={dashboardImage}
      />

      <section className="lm-ds wf-section wf-bg-white" aria-label="Approved email capture">
        <div className="wr-container--focus wf-center">
          <p className="wf-eyebrow">Approved CTA primitive</p>
          <h2 className="wr-h2 wf-heading-center">Capture the visitor while the promise is fresh.</h2>
          <ButtonEmail
            id="landing-body-email"
            placeholder="name@email.com"
            buttonLabel="Start Free in 2 Minutes"
            onSubmit={submitEmail}
          />
        </div>
      </section>

      <FeaturesGrid
        eyebrow="Capabilities"
        heading="Campaign building blocks that stay inside the system"
        body="Each card uses the approved features grid component. The page changes message content, not visual language."
        items={[
          { title: "Audience control", body: "Choose the customer group and action before writing the message.", icon: <FeatureIcon tone="orange" /> },
          { title: "Direct reminders", body: "Use loyalty channels for timely follow-up and repeat visits.", icon: <FeatureIcon tone="blue" /> },
          { title: "Offer focus", body: "Keep every page section tied to a clear conversion moment.", icon: <FeatureIcon tone="yellow" /> },
        ]}
      />

      <ProcessSteps
        eyebrow="Simple process"
        heading="From campaign idea to repeat visit"
        steps={[
          { title: "Fill the brief", body: "Define the visitor, offer, and one conversion action." },
          { title: "Select components", body: "Use only registry IDs with current spec and library evidence." },
          { title: "Review in browser", body: "Approve the visual result before reuse or publish." },
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
      />

      <StatsCardStrip
        stats={[
          { value: "20", label: "Approved Wave 1 components" },
          { value: "0", label: "Invented sections allowed" },
          { value: "3", label: "Phase 7 gates before use" },
          { value: "1", label: "Living source of truth" },
        ]}
      />

      <TestimonialsGrid
        items={[
          { quote: "The page feels assembled from the same Loyaltymaster system, not guessed from scratch.", author: "Template Review", role: "Human gate", initials: "TR" },
          { quote: "Every selected section has registry, spec, library, and showcase evidence.", author: "AI Compliance", role: "Preflight review", initials: "AC" },
          { quote: "If the approved set is missing a block, the workflow stops for a component request.", author: "Design Governance", role: "Approval rule", initials: "DG" },
        ]}
      />

      <PricingSection
        heading="Use pricing only when the approved recipe calls for pricing"
        body="Short pricing rows center inside the approved component instead of creating an ad hoc plan layout."
      />

      <TestimonialSingle
        testimonials={[
          { quote: "Future pages should look like the same Loyaltymaster designer assembled them from the same approved system.", author: "Phase 8D Example", role: "Generated body proof" },
        ]}
      />

      <FaqAccordion
        heading="Questions before launch"
        items={[
          { question: "Can this page invent a missing section?", answer: "No. It must stop and use templates/new-component-request.md." },
          { question: "Does the Markdown template become TSX?", answer: "No. The Markdown recipe guides this TSX body composition." },
          { question: "Who approves the result?", answer: "A human reviews the browser-rendered page and records approval before publish." },
        ]}
      />

      <CtaWithButtonEmail
        heading="Create the next page from approved Loyaltymaster blocks."
        body="This final CTA uses the same approved email capture behavior as the canonical sendPUSH reference."
        buttonLabel="Start Free in 2 Minutes"
        placeholder="name@email.com"
        onSubmit={submitEmail}
      />
    </main>
  );
}

