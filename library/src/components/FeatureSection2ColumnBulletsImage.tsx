import type { Action, ImageAsset } from "../types";
import { ActionLink, Checklist, MediaFrame } from "./_internal";

const defaultBullets = ["Trigger timely messages", "Show a clear local offer", "Bring nearby customers back"];

export interface FeatureSection2ColumnBulletsImageProps {
  id?: string;
  tone?: "white" | "peach" | "cyan" | "salmon";
  eyebrow?: string;
  heading: string;
  body?: string;
  bullets?: string[];
  image?: ImageAsset;
  action?: Action;
}

export function FeatureSection2ColumnBulletsImage({
  id = "use-case-2",
  tone = "white",
  eyebrow,
  heading,
  body,
  bullets = defaultBullets,
  image,
  action = { label: "See Geo Tools", href: "#" },
}: FeatureSection2ColumnBulletsImageProps) {
  return (
    <section id={id} className={`lm-ds wf-section wf-bg-${tone} lm-feature-bullets-section`}>
      <div className="wr-container--main wf-split">
        <div>
          {eyebrow ? <p className="wf-eyebrow">{eyebrow}</p> : null}
          <h2 className="wr-h3">{heading}</h2>
          {body ? <p className="wr-text-body">{body}</p> : null}
          <Checklist items={bullets} />
          <ActionLink action={action} />
        </div>
        <MediaFrame image={image} label="Feature visual" />
      </div>
    </section>
  );
}
