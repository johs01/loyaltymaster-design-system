import { MapPin, Phone, Mail } from 'lucide-react';
import { useBusinessInfo } from '../../context/BusinessInfoContext';

export default function NAPBlock() {
  const { location } = useBusinessInfo();
  if (!location) return null;

  return (
    <address
      className="wf-nap-block"
      itemScope
      itemType="https://schema.org/LocalBusiness"
      style={{ fontStyle: 'normal' }}
    >
      <span className="wf-nap-name" itemProp="name">{location.name}</span>
      <div className="wf-nap-items">
        <span className="wf-nap-item" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <MapPin size={16} aria-hidden="true" />
          <span>
            <span itemProp="streetAddress">{location.street_address}</span>,{' '}
            <span itemProp="addressLocality">{location.city}</span>,{' '}
            <span itemProp="addressRegion">{location.state}</span>{' '}
            <span itemProp="postalCode">{location.zip_code}</span>
          </span>
        </span>
        <a className="wf-nap-item" href={`tel:${location.phone.replace(/[^\d+]/g, '')}`} itemProp="telephone">
          <Phone size={16} aria-hidden="true" />
          <span>{location.phone}</span>
        </a>
        <a className="wf-nap-item" href={`mailto:${location.email}`} itemProp="email">
          <Mail size={16} aria-hidden="true" />
          <span>{location.email}</span>
        </a>
      </div>
      {location.latitude != null && location.longitude != null && (
        <span itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates" style={{ display: 'none' }}>
          <meta itemProp="latitude" content={String(location.latitude)} />
          <meta itemProp="longitude" content={String(location.longitude)} />
        </span>
      )}
      <link itemProp="url" href={location.website_url} />
    </address>
  );
}
