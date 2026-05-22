import type { Action, ImageAsset } from "../types";
import { ActionLink, Checklist, MediaFrame } from "./_internal";

const defaultBullets = ["Invite nearby customers back", "Time offers around visit intent", "Keep the message simple and direct"];

export interface GeoFenceUseCaseProps {
  id?: string;
  tone?: "peach" | "cyan" | "white" | "salmon";
  reversed?: boolean;
  usePointCopy?: boolean;
  eyebrow?: string;
  heading?: string;
  body?: string;
  bullets?: string[];
  image?: ImageAsset;
  action?: Action | false;
}

export function GeoFenceUseCase({
  id = "ftd-strategy-2",
  tone = "peach",
  reversed = true,
  usePointCopy = false,
  eyebrow = "Use case",
  heading = "Turn nearby intent into a return visit",
  body = "Geo-aware campaigns work best when the offer is practical, timely, and connected to a real store visit.",
  bullets = defaultBullets,
  image,
  action = { label: "See Geo Tools", href: "/geo-fence" },
}: GeoFenceUseCaseProps) {
  const textBlock = (
    <div>
      <p className="wf-eyebrow ftd-strategy-eyebrow">{eyebrow}</p>
      <h2 className="wr-h3">{heading}</h2>
      {body ? <p className="wr-text-body">{body}</p> : null}
      {usePointCopy ? (
        <div className="ftd-points">
          {bullets.map((bullet) => <p key={bullet} className="ftd-point">{bullet}</p>)}
        </div>
      ) : (
        <Checklist items={bullets} />
      )}
      {action ? <ActionLink action={action} /> : null}
    </div>
  );
  const imageBlock = <MediaFrame image={image} label="Geo-fence campaign visual" />;

  return (
    <section id={id} className={`lm-ds wf-section wf-bg-${tone} lm-geo-section`}>
      <div className={`wr-container--main wf-split${reversed ? " wf-split-reverse" : ""}`}>
        {textBlock}
        {imageBlock}
      </div>
    </section>
  );
}
