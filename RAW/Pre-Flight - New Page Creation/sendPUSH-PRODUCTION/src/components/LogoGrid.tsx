import { Image } from "./CloudinaryImage";

const logos = [
  { path: "/sendpush/Google%20logo.webp", alt: "Google", order: 1 },
  { path: "/sendpush/Stripe%20Payment.webp", alt: "Stripe", order: 2 },
  { path: "/sendpush/Google%20Pay%20Logo.webp", alt: "Google Pay", order: 3 },
  { path: "/sendpush/Apple%20Pay%20Logo.webp", alt: "Apple Pay", order: 4 },
  { path: "/sendpush/AWS.webp", alt: "AWS", order: 5 },
  { path: "/sendpush/Digital%20Ocean.webp", alt: "DigitalOcean", order: 6 },
  { path: "/sendpush/Clover%20POS%20Logo.webp", alt: "Clover POS", order: 7 },
  { path: "/sendpush/Touch%20Bistro.webp", alt: "TouchBistro", order: 8 },
  { path: "/sendpush/Toast%20integrated%20with%20Loyaltymaster.webp", alt: "Toast integrated with Loyaltymaster", order: 9 },
  { path: "/sendpush/Loyaltymaster%20is%20Make%20Ready.webp", alt: "Loyaltymaster is Make ready", order: 10 },
  { path: "/sendpush/Loyaltymaster%20is%20Zapier%20Ready.webp", alt: "Loyaltymaster is Zapier ready", order: 11 },
  { path: "/sendpush/GDPR%20Ready.webp", alt: "GDPR ready", order: 12 },
];

export default function LogoGrid() {
  return (
    <section id="logo-grid" className="wf-section wf-bg-peach wf-section-tight wf-logo-strip">
      <div className="wr-container--main">
        <div className="wf-center reveal" data-reveal-order="0">
          <p className="wf-logo-strip-copy">Powering the world&apos;s most focused product teams</p>
        </div>
        <ul className="wf-logo-grid" aria-label="Trusted platform and integration partners">
          {logos.map(({ path, alt, order }) => (
            <li key={alt} className="wf-logo-card reveal" data-reveal-order={String(order)}>
              <Image
                className="wf-logo-image"
                src={path}
                alt={alt}
                loading="lazy"
                transformation={[{ width: 200, quality: 80 }]}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
