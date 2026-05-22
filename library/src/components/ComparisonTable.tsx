import type { ComparisonRow } from "../types";
import { ActionLink } from "./_internal";

export interface ComparisonColumn {
  id: string;
  label: string;
  isHighlighted?: boolean;
}

export interface ComparisonDataRow {
  feature: string;
  values: Record<string, string>;
}

const defaultColumns: ComparisonColumn[] = [
  { id: "sendpush", label: "sendPUSH", isHighlighted: true },
  { id: "bulkSms", label: "Bulk SMS App" },
  { id: "emailTool", label: "Email Tool" },
  { id: "manual", label: "Manual Follow-Up" },
];

const defaultData: ComparisonDataRow[] = [
  { feature: "Geo-fenced targeting", values: { sendpush: "Yes", bulkSms: "No", emailTool: "No", manual: "No" } },
  { feature: "Behavior automations", values: { sendpush: "Yes", bulkSms: "Limited", emailTool: "Limited", manual: "No" } },
  { feature: "Revenue attribution", values: { sendpush: "Yes", bulkSms: "No", emailTool: "No", manual: "No" } },
  { feature: "Fast setup", values: { sendpush: "Under 1 hour", bulkSms: "2-3 days", emailTool: "1-2 days", manual: "Ongoing" } },
];

const defaultRows: ComparisonRow[] = [
  {
    label: "Customer reach",
    loyaltymaster: "Direct wallet and push visibility.",
    alternative: "Platform algorithms decide who sees it.",
  },
  {
    label: "Repeat visits",
    loyaltymaster: "Built around loyalty, reminders, and offers.",
    alternative: "Requires customers to remember and return alone.",
  },
  {
    label: "Ownership",
    loyaltymaster: "Merchant keeps the customer relationship.",
    alternative: "Audience lives inside another platform.",
  },
];

export interface ComparisonTableProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  rows?: ComparisonRow[];
  columns?: ComparisonColumn[];
  data?: ComparisonDataRow[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function ComparisonTable({
  eyebrow = "Comparison",
  heading = "Direct reach beats rented attention",
  body = "Use the comparison table when the page needs to explain why sendPUSH is stronger than social-only customer reach.",
  rows,
  columns = defaultColumns,
  data,
  ctaLabel = "See Pricing and Plans",
  ctaHref = "#",
}: ComparisonTableProps) {
  const compatibilityRows = rows ?? defaultRows;
  const tableData: ComparisonDataRow[] = data ?? (rows ? compatibilityRows.map((row) => ({
    feature: row.label,
    values: {
      sendpush: row.loyaltymaster,
      bulkSms: row.alternative,
      emailTool: row.alternative,
      manual: row.alternative,
    },
  })) : defaultData);

  return (
    <section id="comparison" className="lm-ds wf-section wf-bg-cyan">
      <div className="wr-container--main">
        <div className="wf-center">
          {eyebrow ? <p className="wf-eyebrow">{eyebrow}</p> : null}
          <h2 className="wr-h2 wf-heading-center">{heading}</h2>
          {body ? <p className="wr-text-body wf-center-subtext">{body}</p> : null}
        </div>
        <div className="wf-table-wrap">
          <table className="wf-compare-table">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                {columns.map((column) => (
                  <th key={column.id} scope="col">{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.feature}>
                  <td data-label="Feature">{row.feature}</td>
                  {columns.map((column) => (
                    <td key={`${row.feature}-${column.id}`} data-label={column.label}>
                      {row.values[column.id]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="wf-center" style={{ marginTop: "24px" }}>
          <ActionLink action={{ label: ctaLabel, href: ctaHref }} />
        </div>
      </div>
    </section>
  );
}
