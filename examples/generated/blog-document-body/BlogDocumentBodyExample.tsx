'use client';

import type { ImageAsset } from "../../../library/src";
import {
  ComparisonTable,
  CtaWithButtonEmail,
  FaqAccordion,
  FeaturesGrid,
  HeroMainSection,
  ProcessSteps,
  StatsCardStrip,
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

export function BlogDocumentBodyExample() {
  return (
    <main className="lm-generated-page-body" data-template="blog-document-body">
      <HeroMainSection
        id="document-hero"
        eyebrow="Educational document"
        heading="How Direct Loyalty Messages Bring Customers Back."
        body="This example uses approved visual sections for document structure and stops before inventing a long-form article-body component."
        primaryAction={{ label: "Start Free in 2 Minutes", href: "#document-cta" }}
        checklist={[
          "Use approved sections for document structure.",
          "Escalate unstructured article needs to a component request.",
          "Keep the output body-only unless a standalone shell is explicitly requested.",
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
        image={dashboardImage}
      />

      <FeaturesGrid
        eyebrow="Document summary"
        heading="Explain the point through approved sections"
        body="The document recipe may use section components, but it may not create unsupported article furniture."
        items={[
          { title: "Problem", body: "Customers are ready to return, but timing and channel control matter.", icon: <FeatureIcon tone="orange" /> },
          { title: "Pattern", body: "Use direct loyalty messages connected to one clear customer action.", icon: <FeatureIcon tone="blue" /> },
          { title: "Proof", body: "Support the explanation with approved stats, comparison, and FAQ sections.", icon: <FeatureIcon tone="yellow" /> },
        ]}
      />

      <ProcessSteps
        eyebrow="Document flow"
        heading="Explain the workflow without inventing article furniture"
        body="The process component handles step-by-step education while preserving Loyaltymaster spacing, cards, and CTA behavior."
        steps={[
          { title: "Identify the moment", body: "Choose the customer action the document wants to explain." },
          { title: "Select approved blocks", body: "Map each visual section to registry components and current specs." },
          { title: "Stop for missing body needs", body: "Use a new-component request for long-form copy blocks or callouts." },
        ]}
        showEmailCapture={false}
      />

      <ComparisonTable
        heading="Direct loyalty messaging vs. rented attention"
        body="Comparison support stays inside the approved comparison table component."
        ctaLabel="Use the Approved CTA"
        ctaHref="#document-cta"
      />

      <StatsCardStrip
        stats={[
          { value: "1", label: "Primary takeaway per document" },
          { value: "0", label: "Ad hoc article panels" },
          { value: "20", label: "Approved component options" },
          { value: "100%", label: "Spec-backed visual sections" },
        ]}
      />

      <FaqAccordion
        heading="Document template guardrails"
        items={[
          { question: "Can a blog page use arbitrary prose blocks?", answer: "No. If a long-form article body is required, the workflow must stop for a new component request." },
          { question: "Can this document add custom callout cards?", answer: "No. Callouts require an approved component, spec, library implementation, and visual gate first." },
          { question: "Does this fixture include global chrome?", answer: "No. Normal web content remains body-only." },
        ]}
      />

      <CtaWithButtonEmail
        heading="Turn the educational document into one next action."
        body="The final action uses the approved email CTA instead of a custom document button."
        buttonLabel="Start Free in 2 Minutes"
        placeholder="name@email.com"
        onSubmit={submitEmail}
      />
    </main>
  );
}
