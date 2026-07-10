import type { Action, ImageAsset } from "../types";
import { ActionLink, MediaFrame } from "./_internal";

export interface StrategyGroup {
  title: string;
  sentences: string[];
}

const defaultGroups: StrategyGroup[] = [
  {
    title: "Live inside the wallet they already use.",
    sentences: [
      "At its core Loyaltymaster leverages Apple Wallet and Google Pay, pre-installed on all modern smartphones.",
      "Your loyalty card lives next to your customer's virtual credit cards, hotel bookings, and flight tickets, making it easier than ever for customers to stay loyal to your brand.",
    ],
  },
  {
    title: "Reach them where they already are.",
    sentences: [
      "Engage your customers through the same platform they use for payments and everyday tasks.",
      "Your customers are constantly on their smartphones, checking them up to 200 times per day, which is exactly where you want your brand to be.",
    ],
  },
];

export interface StrategySentenceCardsProps {
  id?: string;
  tone?: "peach" | "cyan" | "white" | "salmon";
  reversed?: boolean;
  eyebrow?: string;
  heading?: string;
  groups?: StrategyGroup[];
  image?: ImageAsset;
  action?: Action | false;
}

export function StrategySentenceCards({
  id = "strategy-sentence-cards",
  tone = "cyan",
  reversed = false,
  eyebrow = "The opportunity",
  heading = "",
  groups = defaultGroups,
  image,
  action = false,
}: StrategySentenceCardsProps) {
  const textBlock = (
    <div>
      {eyebrow ? <p className="wf-eyebrow">{eyebrow}</p> : null}
      {heading ? <h2 className="wr-h2">{heading}</h2> : null}
      <div className="lm-points-stack">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="wr-h3">{group.title}</h3>
            <div className="ftd-points">
              {group.sentences.map((sentence) => (
                <p key={sentence} className="ftd-point">{sentence}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {action ? <ActionLink action={action} /> : null}
    </div>
  );
  const imageBlock = <MediaFrame image={image} label="Strategy section visual" />;

  return (
    <section id={id} className={`lm-ds wf-section wf-bg-${tone}`}>
      <div className={`wr-container--main wf-split${reversed ? " wf-split-reverse" : ""}`}>
        {reversed ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}
