"use client";

import { useEffect, type ReactNode } from "react";
import AwardsStrip from "../components/AwardsStrip";
import ComparisonSection from "../components/ComparisonSection";
import { FinalCtaSection, TenantTrialSection } from "../components/CtaSections";
import FaqSection from "../components/FaqSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LogoGrid from "../components/LogoGrid";
import Nav from "../components/Nav";
import NotFoundPage from "../components/NotFoundPage";
import PricingSection from "../components/PricingSection";
import ProblemSection from "../components/ProblemSection";
import ProcessSection from "../components/ProcessSection";
import StatsSection from "../components/StatsSection";
import TestimonialSection from "../components/TestimonialSection";
import UseCaseSection from "../components/UseCaseSection";
import AltTextAiLoader from "../components/AltTextAiLoader";
import GoogleMapEmbed from "../components/seo/GoogleMapEmbed";
import LocalHeroBanner from "../components/seo/LocalHeroBanner";
import ServiceAreaSection from "../components/seo/ServiceAreaSection";
import { BusinessInfoProvider } from "../context/BusinessInfoContext";
import { useScrollReveal } from "../hooks/useScrollReveal";
import LegalPage from "../site-pages/LegalPage";
import LoyaltyMasterPage from "../site-pages/LoyaltyMasterPage";
import StyleGuidePage from "../site-pages/StyleGuidePage";
import BringBackCustomersPage from "../site-pages/bring-back-customers/BringBackCustomersPage";
import FootTrafficOnDemandPage from "../site-pages/foot-traffic-on-demand/FootTrafficOnDemandPage";
import SocialMediaPage from "../site-pages/social-media/SocialMediaPage";

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const PENDING_TRIAL_EMAIL_KEY = "wf-pending-trial-email";

type SiteRoute =
  | "/"
  | "/bring-back-customers"
  | "/social-media"
  | "/loyalty"
  | "/privacy"
  | "/terms"
  | "/cookies"
  | "/design-system-template-page";

const LEGAL_PAGES = {
  "/privacy": {
    title: "Privacy Policy",
    intro:
      "This page explains how Loyaltymaster handles information submitted through the sendPUSH website and trial request forms.",
    sections: [
      {
        heading: "Information we collect",
        body: "We collect business contact details that you submit, including name, business name, business email, business location, and website when provided.",
      },
      {
        heading: "How we use information",
        body: "We use submitted information to respond to trial requests, send relevant follow-up emails, support sales conversations, and improve the website experience.",
      },
      {
        heading: "Service providers",
        body: "We use trusted service providers, including Resend for email delivery and Vercel for hosting, to operate the website and process form submissions.",
      },
      {
        heading: "Contact",
        body: "Questions about privacy can be sent to admin@loyaltymaster.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    intro:
      "These terms describe acceptable use of the sendPUSH website and trial request experience.",
    sections: [
      {
        heading: "Website use",
        body: "You may use this website to learn about sendPUSH, request information, and submit legitimate business inquiries.",
      },
      {
        heading: "Trial requests",
        body: "Submitting a trial request does not guarantee account approval, commercial terms, availability, or a production deployment.",
      },
      {
        heading: "Content accuracy",
        body: "We work to keep product and pricing information accurate, but website content may change as the product and offer evolve.",
      },
      {
        heading: "Contact",
        body: "Questions about these terms can be sent to admin@loyaltymaster.com.",
      },
    ],
  },
  "/cookies": {
    title: "Cookie Policy",
    intro:
      "This page explains the current cookie and local storage behavior used by the sendPUSH website.",
    sections: [
      {
        heading: "Current usage",
        body: "The website uses local storage to remember the selected light or dark theme. It may also use hosting, analytics, or security tooling as integrations are added.",
      },
      {
        heading: "Managing preferences",
        body: "You can clear local storage and cookies through your browser settings. Some preferences may reset after doing so.",
      },
      {
        heading: "Future analytics",
        body: "If analytics or usability tools are added, this policy should be updated before launch to describe those providers clearly.",
      },
      {
        heading: "Contact",
        body: "Questions about cookies can be sent to admin@loyaltymaster.com.",
      },
    ],
  },
} as const;

function TrialFormHashSync() {
  useEffect(() => {
    if (window.location.hash !== "#tenant-trial-cta") return;

    const scrollToForm = (attempt = 0) => {
      const pendingEmail = window.sessionStorage.getItem(PENDING_TRIAL_EMAIL_KEY);
      const emailField = document.getElementById("wf-tenant-email") as HTMLInputElement | null;
      if (pendingEmail && emailField) {
        emailField.value = pendingEmail;
        window.sessionStorage.removeItem(PENDING_TRIAL_EMAIL_KEY);
      }

      const section = document.getElementById("tenant-trial-cta");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (attempt < 10) {
        window.requestAnimationFrame(() => scrollToForm(attempt + 1));
      }
    };

    scrollToForm();
  }, []);

  return null;
}

function AppProviders({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!CLOUDINARY_CLOUD_NAME) {
      console.warn(
        "[cloudinary] NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is missing. Image components will render broken src URLs. Set this variable in the Vercel project env vars (all environments) and redeploy.",
      );
    }
  }, []);

  return (
    <BusinessInfoProvider>
      {children}
    </BusinessInfoProvider>
  );
}

function RoutedShell({
  skipTarget,
  children,
}: {
  skipTarget: string;
  children: ReactNode;
}) {
  return (
    <AppProviders>
      <AltTextAiLoader />
      <a className="wf-skip-link" href={`#${skipTarget}`}>
        Skip to content
      </a>
      <Nav />
      <main>{children}</main>
      <Footer />
      <p id="wfThemeLive" className="wf-visually-hidden" aria-live="polite"></p>
      <TrialFormHashSync />
    </AppProviders>
  );
}

function DesignSystemTemplatePage() {
  return (
    <>
      <HeroSection />
      <LocalHeroBanner />
      <AwardsStrip />
      <LogoGrid />
      <StatsSection />
      <ProblemSection />
      <TestimonialSection
        id="testimonial-1"
        eyebrow="Customer feedback"
        heading="What Business Owners Are Saying"
        quotes={[
          {
            text: "We stopped chasing social reach and started building direct conversations. In the first month alone, we filled 23 otherwise empty appointments.",
            author: "Mia R. - Studio Owner",
          },
        ]}
        ctaText="Read More Stories"
        ctaHref="#tenant-trial-cta"
      />
      <UseCaseSection
        id="use-case-1"
        bg="wf-bg-salmon"
        eyebrow="Use case 01"
        heading="Fill Last-Minute Sales and Activity Lulls"
        body="Trigger time-sensitive messages when business slows down, not days later."
        checklistItems={[
          "Auto-send offers during low-traffic windows.",
          "Target customers near your location.",
          "Bring back recent no-shows with one click.",
        ]}
        ctaText="Launch Local Campaign"
        imageLabel="Use case visual placeholder · 16:10"
        reversed
      />
      <UseCaseSection
        id="use-case-2"
        bg="wf-bg-white"
        eyebrow="Use case 02"
        heading="Capture Nearby Customers with Geo-Fenced Messaging"
        body="Reach customers while intent is high with offers based on proximity and behavior."
        checklistItems={[
          "Set radius-based campaign zones in minutes.",
          "Suppress repeat sends to avoid fatigue.",
          "Track visits and redemptions from each zone.",
        ]}
        ctaText="See Geo Tools"
        imageLabel="Geo-fence visual placeholder · 16:10"
      />
      <UseCaseSection
        id="use-case-3"
        bg="wf-bg-peach"
        eyebrow="Use case 03"
        heading="Fill Last-Minute Appointment Spots"
        body="Recover cancellations fast with automated waitlist and flash-offer sequences."
        checklistItems={[
          "Send opening alerts to likely responders first.",
          "Promote add-on services in the same message.",
          "Close open slots before they impact daily revenue.",
        ]}
        ctaText="Recover Lost Slots"
        imageLabel="Appointment flow placeholder · 16:10"
        reversed
      />
      <TestimonialSection
        id="testimonial-2"
        eyebrow="More proof"
        heading="What Real Customers Are Saying"
        quotes={[
          {
            text: "We booked 17 extra appointments in one weekend from a single campaign.",
            author: "Noah T. - Clinic Manager",
          },
          {
            text: "Setup took less than an hour, and now our reminders run automatically every day.",
            author: "Kayla S. - Salon Owner",
          },
        ]}
        dark
        showEmailCta
        emailCtaId="wf-email-proof"
        emailCtaLabel="Start Free Trial email capture"
        emailCtaButtonText="Start Free Trial"
      />
      <FeaturesSection />
      <ComparisonSection />
      <ServiceAreaSection />
      <PricingSection />
      <ProcessSection />
      <FaqSection />
      <GoogleMapEmbed />
      <FinalCtaSection />
      <TenantTrialSection />
    </>
  );
}

export function SitePage({ route }: { route: SiteRoute }) {
  useScrollReveal();

  if (route === "/") {
    return (
      <RoutedShell skipTarget="ftd-hero">
        <FootTrafficOnDemandPage />
      </RoutedShell>
    );
  }

  if (route === "/bring-back-customers") {
    return (
      <RoutedShell skipTarget="retention-hero">
        <BringBackCustomersPage />
      </RoutedShell>
    );
  }

  if (route === "/social-media") {
    return (
      <RoutedShell skipTarget="sm-hero">
        <SocialMediaPage />
      </RoutedShell>
    );
  }

  if (route === "/loyalty") {
    return (
      <RoutedShell skipTarget="loyalty-hero">
        <LoyaltyMasterPage />
      </RoutedShell>
    );
  }

  if (route === "/privacy" || route === "/terms" || route === "/cookies") {
    return (
      <RoutedShell skipTarget="legal-content">
        <LegalPage {...LEGAL_PAGES[route]} />
      </RoutedShell>
    );
  }

  return (
    <RoutedShell skipTarget="hero">
      <DesignSystemTemplatePage />
    </RoutedShell>
  );
}

export function StyleGuide() {
  useScrollReveal();

  return (
    <BusinessInfoProvider>
      <StyleGuidePage />
    </BusinessInfoProvider>
  );
}

export function SiteNotFound() {
  useScrollReveal();

  return (
    <AppProviders>
      <a className="wf-skip-link" href="#not-found-main">
        Skip to content
      </a>
      <Nav />
      <main>
        <NotFoundPage />
      </main>
      <Footer />
    </AppProviders>
  );
}
