import { businessLocation, seoSettings } from "../config/business";
import { findSeoRoute, type SeoBreadcrumb } from "../config/seoRoutes";
import StructuredDataLoader, {
  type StructuredDataEntry,
} from "../components/StructuredDataLoader";

type StructuredDataRoute =
  | "/"
  | "/bring-back-customers"
  | "/social-media"
  | "/loyalty"
  | "/privacy"
  | "/terms"
  | "/cookies"
  | "/design-system-template-page";

function organizationSchema() {
  const sameAs = [
    seoSettings.facebook_url,
    seoSettings.twitter_url,
    seoSettings.instagram_url,
    seoSettings.linkedin_url,
    seoSettings.youtube_url,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoSettings.site_name,
    url: businessLocation.website_url,
    ...(seoSettings.logo_url && { logo: seoSettings.logo_url }),
    ...(seoSettings.founded_year && { foundingDate: seoSettings.founded_year }),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessLocation.phone,
      email: businessLocation.email,
      contactType: "customer service",
      areaServed: businessLocation.country,
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: businessLocation.street_address,
      addressLocality: businessLocation.city,
      addressRegion: businessLocation.state,
      postalCode: businessLocation.zip_code,
      addressCountry: businessLocation.country,
    },
    ...(sameAs.length > 0 && { sameAs }),
  };
}

function breadcrumbSchema(items: SeoBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${businessLocation.website_url}${item.path}`,
    })),
  };
}

export function StructuredData({ route }: { route: StructuredDataRoute }) {
  const seoRoute = findSeoRoute(route);
  const entries: StructuredDataEntry[] = [
    { id: "organization-json-ld", schema: organizationSchema() },
    {
      id: "breadcrumb-json-ld",
      schema: breadcrumbSchema(seoRoute?.breadcrumbs || []),
    },
  ];

  return <StructuredDataLoader entries={entries} />;
}
