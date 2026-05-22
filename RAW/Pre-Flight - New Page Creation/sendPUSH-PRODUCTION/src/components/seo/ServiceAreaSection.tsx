import { useBusinessInfo } from '../../context/BusinessInfoContext';

const SERVICE_AREAS = [
  { name: 'Plettenberg Bay', description: 'Restaurants, cafes, and retail shops along the Garden Route coastline' },
  { name: 'Knysna', description: 'Local eateries, salons, and boutiques serving the waterfront community' },
  { name: 'George', description: 'Growing businesses and modern service providers in the Garden Route hub' },
  { name: 'Mossel Bay', description: 'Health and wellness studios, tourism operators, and lifestyle brands' },
  { name: 'Sedgefield', description: 'Independent shops, dining spots, and neighbourhood services' },
  { name: 'Wilderness', description: 'Adventure tourism, boutique hospitality, and local attractions' },
];

export default function ServiceAreaSection() {
  const { location } = useBusinessInfo();
  if (!location) return null;

  return (
    <section className="wf-section wf-bg-white" id="service-areas">
      <div className="wr-container--main">
        <div className="wr-container--focus" style={{ textAlign: 'center' }}>
          <p className="wf-eyebrow">Service areas</p>
          <h2 className="wr-h2" style={{ marginTop: 12 }}>
            Serving Local Businesses Across {location.city}
          </h2>
          <p className="wr-text-body" style={{ marginTop: 16, color: 'var(--wr-text-muted)' }}>
            sendPUSH works with businesses in every neighborhood, helping you reach customers right where they are.
          </p>
        </div>
        <div className="wf-service-area-grid" style={{ marginTop: 48 }}>
          {SERVICE_AREAS.map((area) => (
            <div key={area.name} className="wf-service-area-card">
              <h3 className="wf-service-area-name">{area.name}</h3>
              <p className="wf-service-area-desc">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
