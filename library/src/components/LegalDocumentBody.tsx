import { BodyBlocks, HeaderWithCopy, RunbookSection, type TextBlock } from "./RunbookPromotionPrimitives";

const defaultSections: TextBlock[] = [
  { heading: "1. Purpose", paragraphs: ["This approved layout keeps policy and legal content readable, structured, and consistent with the LoyaltyMaster site."] },
  { heading: "2. Scope", paragraphs: ["Use clear clause headings, short paragraphs, and no decorative page-body cards."] },
];

export interface LegalDocumentBodyProps {
  id?: string;
  title: string;
  lastUpdated?: string;
  intro?: string;
  sections?: TextBlock[];
}

export function LegalDocumentBody({ id = "legal-document-body", title, lastUpdated = "Last updated: Current publication date", intro = "This document explains the approved policy terms for this page.", sections = defaultSections }: LegalDocumentBodyProps) {
  return (
    <RunbookSection id={id} tone="white" className="lm-rb-legal">
      <div className="lm-rb-document">
        <HeaderWithCopy eyebrow={lastUpdated} heading={title} body={intro} align="left" />
        <BodyBlocks blocks={sections} />
      </div>
    </RunbookSection>
  );
}
