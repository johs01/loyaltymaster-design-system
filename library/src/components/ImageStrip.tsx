import type { ImageAsset } from "../types";

export interface ImageStripProps {
  images: ImageAsset[];
  ariaLabel?: string;
}

export function ImageStrip({ images, ariaLabel = "Related images" }: ImageStripProps) {
  return (
    <section className="lm-ds wf-section wf-bg-peach wf-awards-strip" aria-label={ariaLabel}>
      <div className="wr-container--main">
        <div className="wf-awards-row">
          {images.map((image) => (
            <div key={image.src} className="wf-award-badge">
              <img className="wf-award-image" src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
