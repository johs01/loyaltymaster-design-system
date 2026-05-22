import seoRoutesData from './seoRoutes.json';

export type SeoSchemaType = 'Organization' | 'SoftwareApplication' | 'Service' | 'BreadcrumbList';

export interface SeoBreadcrumb {
  name: string;
  path: string;
}

export interface SeoRoute {
  path: string;
  title: string;
  description: string;
  h1: string;
  robots: string;
  sitemap: boolean;
  changefreq: string;
  priority: number;
  lastmod: string;
  breadcrumbs: SeoBreadcrumb[];
  schemaTypes: SeoSchemaType[];
}

export interface SeoSite {
  baseUrl: string;
  siteName: string;
  brandName: string;
  organizationName: string;
  logoUrl: string;
  defaultOgImageUrl: string;
}

export const seoSite = seoRoutesData.site as SeoSite;
export const seoRoutes = seoRoutesData.routes as SeoRoute[];

export const publicSeoRoutes = seoRoutes.filter((route) => route.sitemap);

export function findSeoRoute(path: string): SeoRoute | undefined {
  return seoRoutes.find((route) => route.path === path);
}

export function canonicalUrl(path: string): string {
  return `${seoSite.baseUrl}${path}`;
}
