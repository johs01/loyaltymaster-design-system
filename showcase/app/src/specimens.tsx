import { useState, type ReactNode } from "react";
import {
  BillingToggleButton,
  ButtonEmail,
  ComparisonTable,
  CtaTrialFullForm,
  CtaWithButtonEmail,
  FaqAccordion,
  FeatureSection2ColumnBulletsImage,
  FeatureSection2ColumnImage,
  FeaturesGrid,
  Footer,
  GeoFenceUseCase,
  HeroMainSection,
  ImageGrid,
  ImageStrip,
  NavbarGlassmorphism,
  PricingSection,
  ProcessSteps,
  StatsCardStrip,
  TestimonialSingle,
  TestimonialsGrid,
} from "../../../library/src";
import type { BillingCadence } from "../../../library/src";

export interface ComponentSpecimen {
  id: string;
  render: () => ReactNode;
}

function assetUrl(relativePath: string): string {
  return `/@fs${__REPO_ROOT__}/${relativePath}`;
}

function noopEmail(_email: string): void {
  return undefined;
}

function noopTrial(_values: { name: string; email: string; business: string; location: string; website: string }): void {
  return undefined;
}

function BillingToggleSpecimen() {
  const [cadence, setCadence] = useState<BillingCadence>("monthly");

  return (
    <div className="lm-ds lm-billing-specimen">
      <h2>Choose your plan</h2>
      <p>Unlock premium features and scale your productivity with a plan that fits your needs.</p>
      <BillingToggleButton value={cadence} yearlyLabel="Yearly 30% OFF" onChange={setCadence} />
      <p>Flexible billing options tailored for you.</p>
    </div>
  );
}

const sharedImage = {
  src: assetUrl("assets/media/image02.png"),
  alt: "Customer messaging platform dashboard",
};

const placeholderImage = {
  src: assetUrl("assets/media/image-placeholder-640-square.jpg"),
  alt: "Customer loyalty campaign visual placeholder",
};

const partnerLogoImages = [
  { src: assetUrl("assets/partners/google-logo.webp"), alt: "Google" },
  { src: assetUrl("assets/partners/stripe-payment.webp"), alt: "Stripe" },
  { src: assetUrl("assets/partners/google-pay.webp"), alt: "Google Pay" },
  { src: assetUrl("assets/partners/apple-pay.webp"), alt: "Apple Pay" },
  { src: assetUrl("assets/partners/aws.webp"), alt: "AWS" },
  { src: assetUrl("assets/partners/digital-ocean.png"), alt: "DigitalOcean" },
  { src: assetUrl("assets/partners/clover-pos.webp"), alt: "Clover" },
  { src: assetUrl("assets/partners/touch-bistro.webp"), alt: "TouchBistro" },
  { src: assetUrl("assets/partners/toast.webp"), alt: "Toast" },
  { src: assetUrl("assets/partners/make-ready.webp"), alt: "Make" },
  { src: assetUrl("assets/partners/zapier-ready.webp"), alt: "Zapier" },
  { src: assetUrl("assets/partners/gdpr-ready.webp"), alt: "GDPR ready" },
];

const galleryImages = [
  { src: assetUrl("assets/awards/awards-1-3.svg"), alt: "Industry awards 1 to 3" },
  { src: assetUrl("assets/awards/awards-4-6.svg"), alt: "Industry awards 4 to 6" },
  { src: assetUrl("assets/awards/awards-7-9.svg"), alt: "Industry awards 7 to 9" },
];

function FeatureIcon({ tone }: { tone: "orange" | "blue" | "yellow" }) {
  const color = {
    orange: "var(--lm-color-accent-orange)",
    blue: "var(--lm-color-accent-blue)",
    yellow: "var(--lm-color-accent-yellow)",
  }[tone];

  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: 28,
        height: 28,
        borderRadius: "var(--lm-radius-badge)",
        background: color,
        boxShadow: "var(--lm-shadow-card-base)",
      }}
    />
  );
}

export const specimens: ComponentSpecimen[] = [
  {
    id: "billing-toggle-button",
    render: () => <BillingToggleSpecimen />,
  },
  {
    id: "button-email",
    render: () => (
      <div className="lm-ds lm-button-email-specimen">
        <ButtonEmail placeholder="name@email.com" buttonLabel="Start Today for Free" onSubmit={noopEmail} />
      </div>
    ),
  },
  {
    id: "comparison-table",
    render: () => (
      <ComparisonTable
        heading="See How sendPUSH Beats Generic Campaign Tools"
        body=""
      />
    ),
  },
  {
    id: "cta-trial-full-form",
    render: () => (
      <CtaTrialFullForm
        heading="Start Your Tenant Trial in Minutes"
        body="Complete this quick form to launch your 30-day trial and start messaging your customers with sendPUSH."
        submitLabel="Start 30-Day Trial"
        onSubmit={noopTrial}
      />
    ),
  },
  {
    id: "cta-with-button-email",
    render: () => (
      <CtaWithButtonEmail
        heading="Stop Losing Customers to Silence."
        body="Turn every customer interaction into repeat revenue with direct messaging you control."
        buttonLabel="Get Your First Campaign Ready"
        placeholder="name@email.com"
        onSubmit={noopEmail}
      />
    ),
  },
  {
    id: "faq-accordion",
    render: () => (
      <FaqAccordion
        items={[
          { question: "How quickly can I launch my first campaign?", answer: "Most teams can prepare the first list and message in minutes." },
          { question: "Can I import customers from my current tools?", answer: "Yes. Use the approved import workflow before campaign setup." },
          { question: "Will this work for multiple locations?", answer: "Yes, when each location has a clear offer and audience." },
          { question: "How do you handle opt-outs and compliance?", answer: "Keep opt-out language visible and use the approved compliance copy." },
          { question: "Do I need technical support to set this up?", answer: "No for a basic campaign, yes for custom integrations." },
          { question: "Can I measure actual revenue impact?", answer: "Use campaign-specific tracking and review repeat visits." },
        ]}
        heading="Frequently Asked Questions"
        body=""
        defaultOpenIndex={1}
      />
    ),
  },
  {
    id: "feature-section-2-column-bullets-image",
    render: () => (
      <FeatureSection2ColumnBulletsImage
        id="use-case-2"
        tone="white"
        eyebrow="Use case 02"
        heading="Capture Nearby Customers with Geo-Fenced Messaging"
        body="Reach customers while intent is high with offers based on proximity and behavior."
        bullets={["Set radius-based campaign zones in minutes.", "Suppress repeat sends to avoid fatigue.", "Track visits and redemptions from each zone."]}
        image={placeholderImage}
      />
    ),
  },
  {
    id: "feature-section-2-column-image",
    render: () => (
      <FeatureSection2ColumnImage
        eyebrow="The real problem"
        heading="Your Messages to Your Customers Aren't Getting Through."
        body=""
        image={placeholderImage}
      />
    ),
  },
  {
    id: "features-grid",
    render: () => (
      <FeaturesGrid
        eyebrow="Capabilities"
        heading="All the Power, None of the Complexity"
        body="Built for fast-moving teams that want results without extra tools."
        items={[
          { title: "Smart Segments", body: "Group customers by recency, spend, visit habits, and campaign response.", icon: <FeatureIcon tone="orange" /> },
          { title: "Behavior Triggers", body: "Launch message flows based on customer actions in real time.", icon: <FeatureIcon tone="blue" /> },
          { title: "Campaign Calendar", body: "Plan seasonal offers and auto-activate them on schedule.", icon: <FeatureIcon tone="yellow" /> },
          { title: "Geo Messaging", body: "Send localized offers when customers are near your business.", icon: <FeatureIcon tone="blue" /> },
          { title: "Revenue Tracking", body: "Measure conversions and attributed revenue from every campaign.", icon: <FeatureIcon tone="orange" /> },
          { title: "One Inbox", body: "Review responses, opt-outs, and follow-up tasks in one place.", icon: <FeatureIcon tone="yellow" /> },
        ]}
      />
    ),
  },
  {
    id: "footer",
    render: () => <Footer />,
  },
  {
    id: "geo-fence-use-case",
    render: () => (
      <GeoFenceUseCase
        id="ftd-strategy-2"
        eyebrow="Strategy 2"
        heading="Capture Nearby Foot Traffic with Geo Fencing"
        body=""
        bullets={[
          "Set a custom radius around your business - from half a block to a full mile.",
          "Pass holders automatically receive your welcome message the moment they enter the zone.",
          "Turn casual passersby into immediate, paying customers without lifting a finger.",
        ]}
        image={sharedImage}
        action={false}
        usePointCopy
        reversed
      />
    ),
  },
  {
    id: "hero-main-section",
    render: () => (
      <HeroMainSection
        id="ftd-hero"
        eyebrow="If You Rely on Repeat Business"
        heading="Turn a Slow Afternoon into Your Busiest Day of the Week."
        body="Use geo-fenced push notifications to send a special offer to every pass holder the moment they walk or drive near your location - the perfect tool for flash sales and turning nearby prospects into paying customers."
        primaryAction={{ label: "Start trial", href: "#cta-trial-full-form" }}
        checklist={[
          "Send geo-fenced alerts the moment a customer walks nearby.",
          "Run instant flash sales to turn any slow hour into a rush.",
          "Fill last-minute cancellations with a single broadcast.",
        ]}
        emailButtonLabel="Start Today for Free"
        image={sharedImage}
      />
    ),
  },
  {
    id: "image-grid",
    render: () => <ImageGrid images={partnerLogoImages} />,
  },
  {
    id: "image-strip",
    render: () => <ImageStrip images={galleryImages} />,
  },
  {
    id: "navbar-glassmorphism",
    render: () => (
      <NavbarGlassmorphism
        activePath="/product"
        links={[
          { label: "Product", href: "/product" },
          { label: "Resources", href: "/resources" },
          { label: "Retention", href: "/retention" },
          { label: "Pricing", href: "/pricing" },
          { label: "Contact Us", href: "/contact" },
        ]}
        action={{ label: "Start Free", href: "#cta-trial-full-form" }}
      />
    ),
  },
  {
    id: "pricing-section",
    render: () => (
      <PricingSection
        heading="Pricing That Scales With Your Campaign Goals"
        body="Start lean, scale when your audience and campaign volume grow. Every plan includes sendPUSH templates, automation tools, and performance reporting."
        plans={[
          {
            name: "Starter",
            description: "For independent operators who want reliable customer messaging without team overhead.",
            monthlyPrice: "$19",
            yearlyPrice: "$13",
            priceSuffix: "/month",
            note: "Billed monthly.",
            features: ["Message templates for promotions, reminders, and follow-ups.", "Up to 8 active customer campaigns at a time.", "Performance dashboard with delivery and response tracking."],
            cta: { label: "Get Started with Starter", href: "#cta-trial-full-form" },
          },
          {
            name: "Pro",
            badge: "Most popular",
            description: "Built for growing teams that need advanced automation, segmentation, and collaboration controls.",
            monthlyPrice: "$49",
            yearlyPrice: "$39",
            priceSuffix: "/month",
            note: "Billed monthly, per workspace.",
            features: ["Unlimited campaigns, segments, and reusable automations.", "Higher-volume outreach with deeper conversion reporting.", "Team roles, approval flow, and advanced campaign controls."],
            cta: { label: "Upgrade to Pro", href: "#cta-trial-full-form" },
            highlighted: true,
          },
          {
            name: "Enterprise",
            description: "For multi-location organizations that need custom workflows, tighter governance, and priority support.",
            monthlyPrice: "Contact us",
            yearlyPrice: "Contact us",
            note: "We will tailor pricing to your customer volume, security requirements, and rollout timeline.",
            features: ["Unlimited workspaces, users, and customer records.", "Compliance, security review, and dedicated onboarding support.", "Custom integrations, API access, and service-level agreements."],
            cta: { label: "Talk to Sales", href: "#cta-with-button-email" },
          },
        ]}
      />
    ),
  },
  {
    id: "process-steps",
    render: () => (
      <ProcessSteps
        eyebrow="Simple process"
        heading="Our Solution Is Stupidly Simple to Use and Insanely Effective"
        steps={[
          { title: "Connect Your Contacts", body: "Import your existing list and map customer tags in a few clicks." },
          { title: "Turn On Automations", body: "Choose campaign templates for reminders, promos, and reactivation." },
          { title: "Track Revenue Lift", body: "Monitor campaign performance and optimize every week." },
        ]}
      />
    ),
  },
  {
    id: "stats-card-strip",
    render: () => (
      <StatsCardStrip
        stats={[
          { value: "95%", label: "Message deliverability" },
          { value: "+28%", label: "Repeat customer visits" },
          { value: "3x", label: "Faster follow-ups" },
          { value: "35%", label: "More booking recoveries" },
        ]}
      />
    ),
  },
  {
    id: "testimonial-single",
    render: () => (
      <TestimonialSingle
        testimonials={[
          { quote: "We booked 17 extra appointments in one weekend from a single campaign.", author: "Noah T.", role: "Clinic Manager" },
          { quote: "Setup took less than an hour, and now our reminders run automatically every day.", author: "Kayla S.", role: "Salon Owner" },
        ]}
      />
    ),
  },
  {
    id: "testimonials-grid",
    render: () => (
      <TestimonialsGrid
        items={[
          { quote: "sendPUSH gave us one place to run reminders, promos, and follow-ups. We filled more open slots in the first few weeks without adding extra admin work.", author: "Maya Rivera", role: "Operations Lead, Riverfront Wellness", initials: "MR" },
          { quote: "We switched from manual texting to sendPUSH and saw campaign response jump fast. The team launches offers in minutes and tracks real impact each week.", author: "Jordan Patel", role: "Owner, Northside Auto Care", initials: "JP" },
          { quote: "The automations are simple to set up and the reporting is clear. It helped us keep patients engaged and reduce missed appointments month over month.", author: "Elena Brooks", role: "General Manager, Elm Street Clinic", initials: "EB" },
        ]}
      />
    ),
  },
];
