import { useBusinessInfo } from '../../context/BusinessInfoContext';
import { Clock, ExternalLink } from 'lucide-react';

export default function GoogleMapEmbed() {
  const { location } = useBusinessInfo();
  if (!location) return null;

  const mapQuery = encodeURIComponent(
    `${location.street_address}, ${location.city}, ${location.state} ${location.zip_code}`
  );

  const reviewUrl = location.google_business_url || location.google_place_id
    ? `https://search.google.com/local/writereview?placeid=${location.google_place_id}`
    : `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  const openDays = (location.opening_hours || []).filter(
    (h) => h.opens && h.closes
  );

  return (
    <section className="wf-section wf-bg-peach" id="find-us">
      <div className="wr-container--main">
        <div className="wr-container--focus" style={{ textAlign: 'center' }}>
          <p className="wf-eyebrow">Find us</p>
          <h2 className="wr-h2" style={{ marginTop: 12 }}>
            Visit {location.name} in {location.city}
          </h2>
        </div>

        <div className="wf-find-us-grid" style={{ marginTop: 48 }}>
          <div className="wf-map-container">
            <iframe
              title={`${location.name} location on Google Maps`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 'var(--wr-r-16, 16px)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="wf-find-us-details">
            <div className="wf-find-us-card">
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'var(--wr-ink)' }}>
                {location.name}
              </h3>
              <p style={{ color: 'var(--wr-text-muted)', lineHeight: 1.6, marginBottom: 8 }}>
                {location.street_address}<br />
                {location.city}, {location.state} {location.zip_code}
              </p>
              <p style={{ color: 'var(--wr-text-muted)', marginBottom: 20 }}>
                {location.phone} &middot; {location.email}
              </p>

              {openDays.length > 0 && (
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                    <Clock size={16} style={{ color: 'var(--wr-accent-orange)' }} aria-hidden="true" />
                    <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--wr-ink)' }}>Business Hours</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {openDays.map((h) => (
                      <li
                        key={h.dayOfWeek}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '4px 0',
                          fontSize: 14,
                          color: 'var(--wr-text-muted)',
                        }}
                      >
                        <span>{h.dayOfWeek}</span>
                        <span>{h.opens} &ndash; {h.closes}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wf-find-us-btn"
                >
                  Get Directions
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wf-find-us-btn wf-find-us-btn--outline"
                >
                  Leave a Review
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
