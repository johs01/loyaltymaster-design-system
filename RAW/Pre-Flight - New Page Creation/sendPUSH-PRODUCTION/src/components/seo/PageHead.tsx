import { useEffect } from 'react';
import { useBusinessInfo } from '../../context/BusinessInfoContext';
import { canonicalUrl, seoSite, type SeoRoute } from '../../config/seoRoutes';

interface PageHeadProps {
  route?: SeoRoute;
  ogType?: string;
}

export default function PageHead({ route, ogType = 'website' }: PageHeadProps) {
  const { location, seo } = useBusinessInfo();
  const title = route?.title || seoSite.siteName;
  const description = route?.description || 'Customer messaging and loyalty automation for B2B teams.';
  const routeCanonicalUrl = route ? canonicalUrl(route.path) : (location?.website_url || seoSite.baseUrl);

  useEffect(() => {
    document.title = title;

    const metaTags: Record<string, string> = {
      description,
      robots: route?.robots || 'index, follow',
      'og:title': title,
      'og:description': description,
      'og:type': ogType,
      'og:url': routeCanonicalUrl,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
    };

    if (seo?.default_og_image_url) {
      metaTags['og:image'] = seo.default_og_image_url;
      metaTags['twitter:image'] = seo.default_og_image_url;
    } else {
      metaTags['og:image'] = seoSite.defaultOgImageUrl;
      metaTags['twitter:image'] = seoSite.defaultOgImageUrl;
    }

    if (seo?.site_name) {
      metaTags['og:site_name'] = seo.site_name;
    }

    const managedMetas: HTMLMetaElement[] = [];

    Object.entries(metaTags).forEach(([key, value]) => {
      const isOg = key.startsWith('og:');
      const isTwitter = key.startsWith('twitter:');
      const attr = isOg || isTwitter ? 'property' : 'name';

      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
      managedMetas.push(el);
    });

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', routeCanonicalUrl);

    return () => {
      managedMetas.forEach((el) => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
    };
  }, [title, description, routeCanonicalUrl, ogType, location, seo, route]);

  return null;
}
