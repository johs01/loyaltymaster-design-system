import type { ImageAsset } from "../types";

export interface ImageGridProps {
  heading?: string;
  body?: string;
  images: ImageAsset[];
}

export function ImageGrid({
  heading = "Powering the world's most focused product teams",
  body,
  images,
}: ImageGridProps) {
  return (
    <section id="logo-grid" className="lm-ds wf-section wf-bg-peach wf-section-tight wf-logo-strip" aria-label="Trusted platform and integration partners">
      <div className="wr-container--main">
        <div className="wf-center">
          {heading ? <p className="wf-logo-strip-copy">{heading}</p> : null}
          {body ? <p className="wr-text-body wf-center-subtext">{body}</p> : null}
        </div>
        <ul className="wf-logo-grid">
          {images.map((image) => (
            <li key={image.src} className="wf-logo-card">
              <img className="wf-logo-image" src={image.src} alt={image.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
