import type { Metadata, MetadataRoute } from "next";
import {
  canonicalUrl,
  publicSeoRoutes,
  seoSite,
  type SeoRoute,
} from "../config/seoRoutes";

function robots(route: SeoRoute): Metadata["robots"] {
  const noindex = route.robots.includes("noindex");
  const nofollow = route.robots.includes("nofollow");
  return {
    index: !noindex,
    follow: !nofollow,
  };
}

export function routeMetadata(route: SeoRoute): Metadata {
  const url = canonicalUrl(route.path);
  return {
    title: route.title,
    description: route.description,
    robots: robots(route),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: route.title,
      description: route.description,
      type: "website",
      url,
      siteName: seoSite.siteName,
      images: [seoSite.defaultOgImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [seoSite.defaultOgImageUrl],
    },
  };
}

export function sitemapEntries(): MetadataRoute.Sitemap {
  return publicSeoRoutes.map((route) => ({
    url: canonicalUrl(route.path),
    lastModified: route.lastmod,
    changeFrequency: route.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route.priority,
  }));
}
