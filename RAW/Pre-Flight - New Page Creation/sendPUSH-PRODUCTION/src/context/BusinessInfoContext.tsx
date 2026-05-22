import { createContext, useContext, type ReactNode } from 'react';
import { businessLocation, seoSettings } from '../config/business';

export interface OpeningHour {
  dayOfWeek: string;
  opens: string;
  closes: string;
}

export interface BusinessLocation {
  id: string;
  name: string;
  street_address: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  phone: string;
  email: string;
  website_url: string;
  latitude: number | null;
  longitude: number | null;
  google_place_id: string;
  google_business_url: string;
  opening_hours: OpeningHour[];
  price_range: string;
  description: string;
  is_primary: boolean;
}

export interface SeoSettings {
  id: string;
  site_name: string;
  default_og_image_url: string;
  facebook_url: string;
  twitter_url: string;
  instagram_url: string;
  linkedin_url: string;
  youtube_url: string;
  logo_url: string;
  founded_year: string;
}

interface BusinessInfoContextValue {
  location: BusinessLocation | null;
  seo: SeoSettings | null;
  loading: boolean;
}

const BusinessInfoContext = createContext<BusinessInfoContextValue>({
  location: businessLocation,
  seo: seoSettings,
  loading: false,
});

export function useBusinessInfo() {
  return useContext(BusinessInfoContext);
}

export function BusinessInfoProvider({ children }: { children: ReactNode }) {
  return (
    <BusinessInfoContext.Provider value={{ location: businessLocation, seo: seoSettings, loading: false }}>
      {children}
    </BusinessInfoContext.Provider>
  );
}
