'use client';

import type { ImageAsset } from "../../../library/src";
import {
  ComparisonTable,
  CtaWithButtonEmail,
  FaqAccordion,
  FeatureSection2ColumnBulletsImage,
  FeaturesGrid,
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

export function ExternalLlmDryRunBodyExample() {
  return (
    <main className="lm-generated-page-body" data-template="external-llm-dry-run">
      <HeroMainSection
        id="external-dry-run-hero"
        eyebrow="External LLM dry run"
        heading="Create a Win-Back Campaign Page From Approved Blocks."
        body="This dry run proves an external agent can start at AI_START_HERE.md, follow the approved web-page recipe, and produce a body-only page without inventing components."
        primaryAction={{ label: "Start Free in 2 Minutes", href: "#external-dry-run-cta" }}
        checklist={[
          "Read the approved operating docs before planning.",
          "Select only registry components with current specs.",
          "Produce body content only for the existing production website.",
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
        image={dashboardImage}
      />

      <FeaturesGrid
        eyebrow="Agent workflow"
        heading="The page is assembled from the approved Lego set"
        body="The dry run changes the message content only. It does not create a new section, card, token, or interaction pattern."
        items={[
          { title: "Read first", body: "Start from AI_START_HERE.md, READ_FIRST_AI.md, PREFLIGHT.md, tokens, registry, templates, and examples." },
          { title: "Select components", body: "Map every section to a current registry ID with specPath and libraryPath evidence." },
          { title: "Stop if missing", body: "Use the new-component request workflow instead of improvising unsupported layout." },
        ]}
      />

      <FeatureSection2ColumnBulletsImage
        id="external-dry-run-use-case"
        tone="white"
        eyebrow="Synthetic test brief"
        heading="Bring dormant customers back with one clear offer."
        body="This section uses the approved two-column bullets image component to explain the dry-run customer problem."
        bullets={[
          "Identify customers who have not returned recently.",
          "Send a direct loyalty message tied to one return action.",
          "Keep every proof and CTA section inside approved components.",
        ]}
        image={campaignImage}
        action={{ label: "Review the Process", href: "#process" }}
      />

      <ProcessSteps
        eyebrow="Dry-run process"
        heading="From external prompt to approved body"
        steps={[
          { title: "Read the system", body: "Load AI_START_HERE.md and the required operating docs." },
          { title: "Build the plan", body: "Select approved components and cite registry, spec, token, and example evidence." },
          { title: "Render and verify", body: "Open the local review URL and run the validation gates before approval." },
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
      />

      <ComparisonTable
        heading="Approved workflow beats prompt improvisation"
        body="The comparison table explains why future agents must use the design-system folder rather than guessing."
        ctaLabel="Use the Approved CTA"
        ctaHref="#external-dry-run-cta"
      />

      <FaqAccordion
        heading="External LLM dry-run checks"
        items={[
          { question: "Can this dry run add a new layout?", answer: "No. The dry run uses only existing approved registry components." },
          { question: "Does it include global shell areas?", answer: "No. The production website supplies global chrome; this output is body-only." },
          { question: "What happens if a future brief needs a missing section?", answer: "The agent must stop and complete templates/new-component-request.md." },
        ]}
      />

      <CtaWithButtonEmail
        heading="The final output stays inside the Loyaltymaster system."
        body="This CTA proves the dry run can finish with an approved conversion block instead of a custom button or form."
        buttonLabel="Start Free in 2 Minutes"
        placeholder="name@email.com"
        onSubmit={submitEmail}
      />
    </main>
  );
}
