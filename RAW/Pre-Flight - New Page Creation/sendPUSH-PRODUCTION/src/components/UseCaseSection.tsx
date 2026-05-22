import { Image } from "./CloudinaryImage";
import { Checklist, CtaButton } from "./MarketingPrimitives";

interface UseCaseSectionProps {
  id: string;
  bg: string;
  eyebrow: string;
  heading: string;
  body: string;
  checklistItems: string[];
  ctaText: string;
  imageLabel: string;
  imageSrc?: string;
  reversed?: boolean;
}

export default function UseCaseSection({
  id,
  bg,
  eyebrow,
  heading,
  body,
  checklistItems,
  ctaText,
  imageLabel,
  imageSrc = "/sendpush/image%20placeholder-640-square.jpg",
  reversed = false,
}: UseCaseSectionProps) {
  const splitClass = reversed ? "wf-split wf-split-reverse" : "wf-split";

  const textBlock = (
    <div className="reveal" data-reveal-order="0">
      <p className="wf-eyebrow">{eyebrow}</p>
      <h2 className="wr-h3">{heading}</h2>
      <p className="wr-text-body">{body}</p>
      <Checklist items={checklistItems} />
      <CtaButton>{ctaText}</CtaButton>
    </div>
  );

  const imageBlock = (
    <div className="reveal" data-reveal-order="1">
      <div className="wf-placeholder wf-placeholder--square wf-placeholder--has-image">
        <Image
          src={imageSrc}
          alt={imageLabel}
          loading="lazy"
          transformation={[{ width: 800, quality: 85 }]}
          className="wf-image-fill"
        />
      </div>
    </div>
  );

  return (
    <section id={id} className={`wf-section ${bg}`}>
      <div className={`wr-container--main ${splitClass}`}>
        {reversed ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
      </div>
    </section>
  );
}
