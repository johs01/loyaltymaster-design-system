import type { Action, ImageAsset } from "../types";
import { ActionRow, BodyBlocks, HeaderWithCopy, RunbookSection, type TextBlock } from "./RunbookPromotionPrimitives";
import { MediaFrame } from "./_internal";

const defaultSections: TextBlock[] = [
  { heading: "Built for direct customer relationships", paragraphs: ["LoyaltyMaster pages use focused prose, warm proof, and clear action paths instead of generic SaaS filler."], bullets: ["Lead with the visitor need.", "Keep each section tied to an approved component."] },
  { heading: "Keep the story practical", paragraphs: ["Use this body when the page needs explanation, origin story, or educational context that should still feel like the production site."] },
];

export interface ArticleBodyProps {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  sections?: TextBlock[];
  image?: ImageAsset;
  action?: Action;
}

export function ArticleBody({ id = "article-body", eyebrow = "Article", title, intro, sections = defaultSections, image, action }: ArticleBodyProps) {
  return (
    <RunbookSection id={id} tone="white" className="lm-rb-article">
      <div className="lm-rb-split">
        <div>
          <HeaderWithCopy eyebrow={eyebrow} heading={title} body={intro} align="left" />
          <BodyBlocks blocks={sections} />
          <ActionRow actions={[action]} />
        </div>
        <div className="lm-rb-side-media">
          <MediaFrame image={image} label="Article visual reference" />
        </div>
      </div>
    </RunbookSection>
  );
}
