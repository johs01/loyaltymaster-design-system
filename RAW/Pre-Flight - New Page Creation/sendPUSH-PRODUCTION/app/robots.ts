import type { MetadataRoute } from "next";
import { seoSite } from "../src/config/seoRoutes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${seoSite.baseUrl}/sitemap.xml`,
  };
}
