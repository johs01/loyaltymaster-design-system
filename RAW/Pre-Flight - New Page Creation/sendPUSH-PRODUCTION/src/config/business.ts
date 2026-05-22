import type { BusinessLocation, SeoSettings } from '../context/BusinessInfoContext';
import { CLOUDINARY_PLACEHOLDER_URL } from './cloudinaryAssets';

/**
 * Static business data — edit here instead of a database.
 * All SEO components, schema markup, footer, map embed, etc. read from these values
 * via the useBusinessInfo() hook.
 */

export const businessLocation: BusinessLocation = {
  id: '1',
  name: 'Loyaltymaster',
  street_address: 'Pharos Ave',
  city: 'Plettenberg Bay',
  state: 'WC',
  zip_code: '6600',
  country: 'ZA',
  phone: '+27 (82) 702-9134',
  email: 'admin@loyaltymaster.com',
  website_url: 'https://sendpush.loyaltymaster.com',
  latitude: -34.0527,
  longitude: 23.3716,
  google_place_id: '',
  google_business_url: '',
  opening_hours: [
    { dayOfWeek: 'Monday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Tuesday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Wednesday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Thursday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Friday', opens: '08:00', closes: '17:00' },
  ],
  price_range: '$$',
  description: 'Customer messaging and loyalty platform for local businesses.',
  is_primary: true,
};

export const seoSettings: SeoSettings = {
  id: '1',
  site_name: 'Loyaltymaster',
  default_og_image_url: CLOUDINARY_PLACEHOLDER_URL,
  facebook_url: '',
  twitter_url: '',
  instagram_url: '',
  linkedin_url: '',
  youtube_url: '',
  logo_url: CLOUDINARY_PLACEHOLDER_URL,
  founded_year: '2025',
};
