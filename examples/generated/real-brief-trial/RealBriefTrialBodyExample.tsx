'use client';

import type { ImageAsset } from "../../../library/src";
import {
  ComparisonTable,
  CtaWithButtonEmail,
  FaqAccordion,
  FeatureSection2ColumnImage,
  FeaturesGrid,
  GeoFenceUseCase,
  HeroMainSection,
  ProcessSteps,
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

export function RealBriefTrialBodyExample() {
  return (
    <main className="lm-generated-page-body" data-template="real-brief-trial">
      <HeroMainSection
        id="real-brief-trial-hero"
        eyebrow="Real brief trial"
        heading="Recover Quiet Hours With Direct Loyalty Offers."
        body="This Phase 10 trial uses a practical sendPUSH brief: help a local business bring customers back during quiet periods with one timely loyalty offer."
        primaryAction={{ label: "Start Free in 2 Minutes", href: "#real-brief-trial-cta" }}
        checklist={[
          "Body-only output for the existing production website.",
          "Approved web-page recipe from templates/web-page-brief.md.",
          "No invented sections, variants, tokens, or shell components.",
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
        image={dashboardImage}
      />

      <GeoFenceUseCase
        id="real-brief-trial-use-case"
        eyebrow="Campaign moment"
        heading="Invite nearby customers back when the day slows down."
        body="Use the approved use-case component to explain the customer moment without creating a custom local-business section."
        bullets={[
          "Choose a specific quiet-hour offer before writing the page.",
          "Keep the message tied to one return visit action.",
          "Use the existing sendPUSH visual rhythm for every proof and CTA block.",
        ]}
        image={campaignImage}
        action={{ label: "Review the Steps", href: "#real-brief-trial-process" }}
      />

      <FeaturesGrid
        eyebrow="Why it works"
        heading="A practical offer page still uses the approved Lego set"
        body="The brief changes the business story. The component recipe, styling, spacing, and interactions stay inside the approved system."
        items={[
          { title: "One offer", body: "The page focuses on a single return-visit action rather than a menu of campaign ideas." },
          { title: "One audience", body: "The copy speaks to customers who already know the business and can return soon." },
          { title: "One path", body: "Every section leads toward the same approved email CTA and trial action." },
        ]}
      />

      <FeatureSection2ColumnImage
        id="real-brief-trial-problem"
        eyebrow="Business problem"
        heading="Quiet windows are hard to fill when customers do not hear from you in time."
        body="This approved two-column section frames the business problem before the page moves into process, comparison, and FAQ support."
        image={campaignImage}
        problems={[
          { id: "1", title: "Walk-ins are unpredictable", description: "Customers may be nearby, but they need a timely reason to return." },
          { id: "2", title: "Social posts arrive too late", description: "A quiet-hour offer needs direct reach, not passive discovery." },
          { id: "3", title: "Manual follow-up is inconsistent", description: "Staff should not have to rebuild the same campaign every slow day." },
        ]}
        action={{ label: "Compare Channels", href: "#real-brief-trial-comparison" }}
      />

      <ProcessSteps
        eyebrow="Approved page flow"
        heading="Turn the brief into a body-only page"
        steps={[
          { title: "Confirm the offer", body: "Define the return-visit action and keep all copy tied to that action." },
          { title: "Select components", body: "Use only registry components with current specPath and libraryPath evidence." },
          { title: "Review locally", body: "Open the rendered URL and record human approval before reusing the page." },
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
      />

      <ComparisonTable
        heading="Direct loyalty reach beats waiting for attention"
        body="The comparison table is used because the brief needs to explain why direct loyalty messaging is stronger than passive promotion."
        ctaLabel="Start With the Approved CTA"
        ctaHref="#real-brief-trial-cta"
      />

      <FaqAccordion
        heading="Real-brief trial checks"
        items={[
          { question: "Is this a new component?", answer: "No. The page uses only approved registry components and current library imports." },
          { question: "Does it include global chrome?", answer: "No. It is body-only because the production website supplies the site shell." },
          { question: "What if a real brief needs something missing?", answer: "The workflow stops and creates a new-component request instead of improvising." },
        ]}
      />

      <CtaWithButtonEmail
        heading="Use the approved CTA to capture real campaign interest."
        body="The page finishes with the same approved email CTA behavior used across the Loyaltymaster system."
        buttonLabel="Start Free in 2 Minutes"
        placeholder="name@email.com"
        onSubmit={submitEmail}
      />
    </main>
  );
}
