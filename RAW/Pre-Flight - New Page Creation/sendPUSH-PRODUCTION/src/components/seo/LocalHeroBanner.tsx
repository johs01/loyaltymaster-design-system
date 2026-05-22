import { MapPin } from 'lucide-react';
import { useBusinessInfo } from '../../context/BusinessInfoContext';

export default function LocalHeroBanner() {
  const { location } = useBusinessInfo();
  if (!location) return null;

  return (
    <div className="wf-local-banner">
      <MapPin size={16} aria-hidden="true" />
      <span>Trusted by 500+ businesses in {location.city}, {location.state}</span>
    </div>
  );
}
