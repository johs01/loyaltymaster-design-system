import type { ReactNode } from "react";
import {
  ButtonEmail,
  ComparisonTable,
  CtaTrialFullForm,
  CtaWithButtonEmail,
  FaqAccordion,
  FeatureSection2ColumnBulletsImage,
  FeatureSection2ColumnImage,
  FeaturesGrid,
  GeoFenceUseCase,
  HeroMainSection,
  ImageStrip,
  PricingSection,
  ProcessSteps,
  StatsCardStrip,
  TestimonialSingle,
  TestimonialsGrid,
} from "../../../library/src";

export interface TemplateFixture {
  id: "web-page" | "landing-page" | "blog-document" | "brochure-content" | "external-llm-dry-run" | "real-brief-trial";
  name: string;
  sourceTemplate: string;
  artifactType: string;
  approvalStatus: "Approved";
  localReviewUrl: string;
  referenceUrls: string[];
  componentIds: string[];
  render: () => ReactNode;
}

function assetUrl(relativePath: string): string {
  return `/@fs${__REPO_ROOT__}/${relativePath}`;
}

function noopEmail(_email: string): void {
  return undefined;
}

function noopTrialForm(): void {
  return undefined;
}

function TemplateFeatureIcon({ tone }: { tone: "orange" | "blue" | "yellow" }) {
  return <span className={`phase8-template-icon phase8-template-icon--${tone}`} aria-hidden="true" />;
}

const dashboardImage = {
  src: assetUrl("assets/media/image02.png"),
  alt: "sendPUSH customer messaging dashboard",
};

const campaignImage = {
  src: assetUrl("assets/media/image-placeholder-640-square.jpg"),
  alt: "Loyalty campaign setup visual",
};

const awardImages = [
  { src: assetUrl("assets/awards/awards-1-3.svg"), alt: "Industry awards 1 to 3" },
  { src: assetUrl("assets/awards/awards-4-6.svg"), alt: "Industry awards 4 to 6" },
  { src: assetUrl("assets/awards/awards-7-9.svg"), alt: "Industry awards 7 to 9" },
];

const brochureProofImages = [
  { src: assetUrl("assets/awards/awards-1-3.svg"), alt: "Approved platform proof group 1" },
  { src: assetUrl("assets/awards/awards-4-6.svg"), alt: "Approved platform proof group 2" },
  { src: assetUrl("assets/awards/awards-7-9.svg"), alt: "Approved platform proof group 3" },
];

function WebPageTemplateFixture() {
  return (
    <div className="phase8-generated-page" data-generated-template="web-page">
      <HeroMainSection
        id="template-web-hero"
        eyebrow="sendPUSH | Loyaltymaster"
        heading="Direct Customer Messages Built for Repeat Visits."
        body="Use sendPUSH to reach customers through a loyalty channel you control, with offers, reminders, and follow-ups that keep every message tied to a clear return action."
        primaryAction={{ label: "Start Free in 2 Minutes", href: "#final-cta" }}
        checklist={[
          "Create loyalty messages without rebuilding your site.",
          "Use approved campaign patterns for offers and reminders.",
          "Review every component against the canonical showcase before publish.",
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
        image={dashboardImage}
      />
      <FeatureSection2ColumnImage
        id="template-web-problem"
        eyebrow="The problem"
        heading="Your customers already know you. They just do not always hear from you in time."
        body="This page uses the approved product explanation recipe: a hero, problem section, use-case section, visual proof, and CTA. The production website supplies the navbar/header and footer."
        image={campaignImage}
        problems={[
          { id: "1", title: "Social reach is inconsistent", description: "Important offers disappear inside feeds and algorithms." },
          { id: "2", title: "Manual follow-up does not scale", description: "Staff cannot chase every customer at the perfect time." },
          { id: "3", title: "Generic campaigns feel disconnected", description: "Customers respond better when the message has a clear next action." },
        ]}
        action={{ label: "Compare Channels", href: "#comparison" }}
      />
      <FeatureSection2ColumnBulletsImage
        id="template-web-use-case"
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
        body="This rendered fixture proves the Markdown recipe can become a real React page without inventing a new section."
        buttonLabel="Start Free in 2 Minutes"
        placeholder="name@email.com"
        onSubmit={noopEmail}
      />
    </div>
  );
}

function LandingPageTemplateFixture() {
  return (
    <div className="phase8-generated-page" data-generated-template="landing-page">
      <HeroMainSection
        id="template-landing-hero"
        eyebrow="If you rely on repeat business"
        heading="Launch a Loyalty Campaign Customers Actually See."
        body="This approved landing page recipe combines the same Wave 1 components future agents must use for campaign, trial, pricing, and proof-led pages."
        primaryAction={{ label: "Start Free in 2 Minutes", href: "#template-landing-cta" }}
        checklist={[
          "One primary conversion action.",
          "Approved section order from the landing page template.",
          "No invented cards, buttons, layouts, tokens, or variants.",
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
        image={dashboardImage}
      />
      <section className="lm-ds wf-section wf-bg-white phase8-template-email-section" aria-label="Approved email CTA proof">
        <div className="wr-container--focus wf-center">
          <p className="wf-eyebrow">Approved CTA primitive</p>
          <h2 className="wr-h2 wf-heading-center">The same email CTA can be reused without creating a new button.</h2>
          <ButtonEmail
            id="template-landing-email"
            placeholder="name@email.com"
            buttonLabel="Start Free in 2 Minutes"
            onSubmit={noopEmail}
          />
        </div>
      </section>
      <FeaturesGrid
        eyebrow="Capabilities"
        heading="Campaign building blocks that stay inside the system"
        body="Each card comes from the approved features grid component. The fixture changes content, not visual language."
        items={[
          { title: "Audience control", body: "Choose the customer group and action before writing the message.", icon: <TemplateFeatureIcon tone="orange" /> },
          { title: "Direct reminders", body: "Use loyalty channels for timely follow-up and repeat visits.", icon: <TemplateFeatureIcon tone="blue" /> },
          { title: "Offer focus", body: "Keep every page section tied to a clear conversion moment.", icon: <TemplateFeatureIcon tone="yellow" /> },
        ]}
      />
      <ProcessSteps
        eyebrow="Simple process"
        heading="From approved recipe to approved page"
        steps={[
          { title: "Fill the brief", body: "Start from the approved Markdown recipe and define the action." },
          { title: "Select components", body: "Use only registry IDs with current spec and library evidence." },
          { title: "Review in browser", body: "Open the rendered fixture and approve the visual result before reuse." },
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
          { quote: "The design system now gives agents a real recipe, not a blank canvas.", author: "Loyaltymaster Review", role: "Template Gate", initials: "LR" },
          { quote: "Every selected section has registry, spec, library, and showcase evidence.", author: "AI Compliance", role: "Preflight Review", initials: "AC" },
          { quote: "If a needed block is missing, the workflow stops for a new component request.", author: "Design Governance", role: "Approval Rule", initials: "DG" },
        ]}
      />
      <PricingSection
        heading="Use pricing only when the approved recipe calls for pricing"
        body="This fixture keeps pricing inside the approved component instead of inventing a plan-card layout."
      />
      <TestimonialSingle
        testimonials={[
          { quote: "A future page should feel like the same Loyaltymaster designer assembled it from the same approved system.", author: "Phase 8B Review", role: "Human approval gate" },
        ]}
      />
      <FaqAccordion
        heading="Template approval questions"
        items={[
          { question: "Does the Markdown template become TSX?", answer: "No. The Markdown file stays the approved recipe; this rendered fixture is the TSX proof that the recipe works." },
          { question: "Can an AI add a missing section?", answer: "No. It must stop and use templates/new-component-request.md." },
          { question: "Who approves the visual result?", answer: "A human reviews the local template-test URL and records the result in the Phase 8B review document." },
        ]}
      />
      <CtaWithButtonEmail
        heading="Approve the recipe only after the rendered page looks right."
        body="The final check is visual: the human reviewer opens this page, compares it with the canonical sendPUSH references, and signs off or requests changes."
        buttonLabel="Start Free in 2 Minutes"
        placeholder="name@email.com"
        onSubmit={noopEmail}
      />
    </div>
  );
}

function BlogDocumentTemplateFixture() {
  return (
    <div className="phase8-generated-page" data-generated-template="blog-document">
      <HeroMainSection
        id="template-blog-hero"
        eyebrow="Educational document"
        heading="How Direct Loyalty Messages Bring Customers Back."
        body="This fixture proves the approved blog/document recipe can create a visual educational body from approved sections only. It does not invent a long-form article-body component."
        primaryAction={{ label: "Start Free in 2 Minutes", href: "#template-blog-cta" }}
        checklist={[
          "Use approved sections for visual document structure.",
          "Escalate unstructured article needs to a component request.",
          "Keep the output body-only unless a standalone shell is explicitly requested.",
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
        image={dashboardImage}
      />
      <FeaturesGrid
        eyebrow="Document summary"
        heading="The approved way to structure an educational explanation"
        body="Each point is expressed through the approved features grid rather than an invented article card or sidebar."
        items={[
          { title: "Problem", body: "Customers are ready to return, but timing and channel control matter.", icon: <TemplateFeatureIcon tone="orange" /> },
          { title: "Pattern", body: "Use direct loyalty messages connected to one clear customer action.", icon: <TemplateFeatureIcon tone="blue" /> },
          { title: "Proof", body: "Support the explanation with approved stats, comparison, and FAQ sections.", icon: <TemplateFeatureIcon tone="yellow" /> },
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
        ctaHref="#template-blog-cta"
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
        onSubmit={noopEmail}
      />
    </div>
  );
}

function BrochureContentTemplateFixture() {
  return (
    <div className="phase8-generated-page" data-generated-template="brochure-content">
      <HeroMainSection
        id="template-brochure-hero"
        eyebrow="Sales content"
        heading="A Loyalty Campaign Brochure Built From Approved Blocks."
        body="This fixture proves brochure-style content can be assembled from existing Loyaltymaster sections without brochure-only cards, ribbons, dividers, or page furniture."
        primaryAction={{ label: "Start Free in 2 Minutes", href: "#template-brochure-form" }}
        checklist={[
          "Approved cover, proof, use-case, pricing, and CTA panels.",
          "No custom brochure-only visual language.",
          "Printable or export-ready content must still follow component specs.",
        ]}
        emailButtonLabel="Start Free in 2 Minutes"
        image={dashboardImage}
      />
      <GeoFenceUseCase
        id="template-brochure-use-case"
        eyebrow="Use-case panel"
        heading="Reach nearby customers with a timely return offer."
        body="The approved use-case panel carries a concrete sales story without inventing a brochure spread layout."
        bullets={[
          "Match the offer to a real visit moment.",
          "Keep the CTA clear and campaign-specific.",
          "Use the same visual rules as the web component library.",
        ]}
        image={campaignImage}
        action={{ label: "See the Use Case", href: "#template-brochure-form" }}
      />
      <ImageStrip images={brochureProofImages} ariaLabel="Approved brochure proof image strip" />
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
        onSubmit={noopTrialForm}
      />
    </div>
  );
}

function ExternalLlmDryRunTemplateFixture() {
  return (
    <div className="phase8-generated-page" data-generated-template="external-llm-dry-run">
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
        onSubmit={noopEmail}
      />
    </div>
  );
}

function RealBriefTrialTemplateFixture() {
  return (
    <div className="phase8-generated-page" data-generated-template="real-brief-trial">
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
        onSubmit={noopEmail}
      />
    </div>
  );
}

export const templateFixtures: TemplateFixture[] = [
  {
    id: "web-page",
    name: "Approved Web Page Recipe Render",
    sourceTemplate: "templates/web-page-brief.md",
    artifactType: "Web page",
    approvalStatus: "Approved",
    localReviewUrl: "http://127.0.0.1:5177/template-tests/web-page",
    referenceUrls: [
      "https://sendpush.loyaltymaster.com/design-system-template-page#pricing",
      "https://sendpush.loyaltymaster.com/",
    ],
    componentIds: [
      "hero-main-section",
      "feature-section-2-column-image",
      "feature-section-2-column-bullets-image",
      "image-strip",
      "comparison-table",
      "cta-with-button-email",
    ],
    render: () => <WebPageTemplateFixture />,
  },
  {
    id: "landing-page",
    name: "Approved Landing Page Recipe Render",
    sourceTemplate: "templates/landing-page.md",
    artifactType: "Landing page",
    approvalStatus: "Approved",
    localReviewUrl: "http://127.0.0.1:5177/template-tests/landing-page",
    referenceUrls: [
      "https://sendpush.loyaltymaster.com/",
      "https://sendpush.loyaltymaster.com/design-system-template-page",
    ],
    componentIds: [
      "hero-main-section",
      "button-email",
      "features-grid",
      "process-steps",
      "stats-card-strip",
      "testimonials-grid",
      "pricing-section",
      "testimonial-single",
      "faq-accordion",
      "cta-with-button-email",
    ],
    render: () => <LandingPageTemplateFixture />,
  },
  {
    id: "blog-document",
    name: "Approved Blog/Document Recipe Render",
    sourceTemplate: "templates/blog-document.md",
    artifactType: "Blog or document body",
    approvalStatus: "Approved",
    localReviewUrl: "http://127.0.0.1:5177/template-tests/blog-document",
    referenceUrls: [
      "https://sendpush.loyaltymaster.com/",
      "https://sendpush.loyaltymaster.com/design-system-template-page",
    ],
    componentIds: [
      "hero-main-section",
      "features-grid",
      "process-steps",
      "comparison-table",
      "stats-card-strip",
      "faq-accordion",
      "cta-with-button-email",
    ],
    render: () => <BlogDocumentTemplateFixture />,
  },
  {
    id: "brochure-content",
    name: "Approved Brochure Content Recipe Render",
    sourceTemplate: "templates/brochure-content.md",
    artifactType: "Brochure or sales content body",
    approvalStatus: "Approved",
    localReviewUrl: "http://127.0.0.1:5177/template-tests/brochure-content",
    referenceUrls: [
      "https://sendpush.loyaltymaster.com/",
      "https://sendpush.loyaltymaster.com/design-system-template-page",
    ],
    componentIds: [
      "hero-main-section",
      "geo-fence-use-case",
      "image-strip",
      "stats-card-strip",
      "pricing-section",
      "testimonial-single",
      "cta-trial-full-form",
    ],
    render: () => <BrochureContentTemplateFixture />,
  },
  {
    id: "external-llm-dry-run",
    name: "External LLM Dry Run Render",
    sourceTemplate: "templates/web-page-brief.md",
    artifactType: "Synthetic external LLM dry-run body",
    approvalStatus: "Approved",
    localReviewUrl: "http://127.0.0.1:5177/template-tests/external-llm-dry-run",
    referenceUrls: [
      "AI_START_HERE.md",
      "examples/generated/external-llm-dry-run/",
      "https://sendpush.loyaltymaster.com/",
      "https://sendpush.loyaltymaster.com/design-system-template-page",
    ],
    componentIds: [
      "hero-main-section",
      "features-grid",
      "feature-section-2-column-bullets-image",
      "process-steps",
      "comparison-table",
      "faq-accordion",
      "cta-with-button-email",
    ],
    render: () => <ExternalLlmDryRunTemplateFixture />,
  },
  {
    id: "real-brief-trial",
    name: "Phase 10 Real Brief Trial Render",
    sourceTemplate: "templates/web-page-brief.md",
    artifactType: "Real-brief body-only web page trial",
    approvalStatus: "Approved",
    localReviewUrl: "http://127.0.0.1:5177/template-tests/real-brief-trial",
    referenceUrls: [
      "AI_START_HERE.md",
      "EXTERNAL_LLM_HANDOFF.md",
      "examples/generated/real-brief-trial/",
      "https://sendpush.loyaltymaster.com/",
      "https://sendpush.loyaltymaster.com/design-system-template-page",
    ],
    componentIds: [
      "hero-main-section",
      "geo-fence-use-case",
      "features-grid",
      "feature-section-2-column-image",
      "process-steps",
      "comparison-table",
      "faq-accordion",
      "cta-with-button-email",
    ],
    render: () => <RealBriefTrialTemplateFixture />,
  },
];

export function getTemplateFixture(id: string): TemplateFixture | undefined {
  return templateFixtures.find((fixture) => fixture.id === id);
}
