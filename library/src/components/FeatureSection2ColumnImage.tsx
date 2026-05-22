import type { Action, ImageAsset } from "../types";
import { ActionLink, MediaFrame } from "./_internal";

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
}

const defaultProblems: ProblemItem[] = [
  { id: "1", title: "Inboxes are overloaded", description: "Your updates compete with dozens of promotions every day." },
  { id: "2", title: "Algorithms hide your posts", description: "Most of your audience never sees social updates in time to act." },
  { id: "3", title: "Missed follow-ups cost revenue", description: "No-shows, empty slots, and quiet periods stack up each week." },
];

export interface FeatureSection2ColumnImageProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  body: string;
  image?: ImageAsset;
  reversed?: boolean;
  problems?: ProblemItem[];
  action?: Action;
}

export function FeatureSection2ColumnImage({
  id = "problem",
  eyebrow,
  heading,
  body,
  image,
  reversed = false,
  problems = defaultProblems,
  action = { label: "See How It Works", href: "#" },
}: FeatureSection2ColumnImageProps) {
  const copy = (
    <div>
      {eyebrow ? <p className="wf-eyebrow">{eyebrow}</p> : null}
      <h2 className="wr-h2 wf-heading-section">{heading}</h2>
      {body ? <p className="wr-text-body">{body}</p> : null}
      <ol className="wf-number-list">
        {problems.map((problem) => (
          <li key={problem.id}>
            <h3 className="wf-number-title">{problem.title}</h3>
            <p className="wr-text-body">{problem.description}</p>
          </li>
        ))}
      </ol>
      <ActionLink action={action} />
    </div>
  );
  const media = <MediaFrame image={image} label="Product visual" />;

  return (
    <section id={id} className="lm-ds wf-section wf-bg-cyan lm-feature-image-section">
      <div className={`wr-container--main wf-split${reversed ? " wf-split-reverse" : ""}`}>
        {reversed ? media : copy}
        {reversed ? copy : media}
      </div>
    </section>
  );
}
