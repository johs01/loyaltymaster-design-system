export const runtime = "nodejs";

type LegacyCspReport = {
  "csp-report"?: {
    "document-uri"?: string;
    referrer?: string;
    "violated-directive"?: string;
    "effective-directive"?: string;
    "original-policy"?: string;
    disposition?: string;
    "blocked-uri"?: string;
    "line-number"?: number;
    "column-number"?: number;
    "source-file"?: string;
    "status-code"?: number;
    "script-sample"?: string;
  };
};

type ReportingApiReport = {
  type: string;
  age?: number;
  url?: string;
  user_agent?: string;
  body?: Record<string, unknown>;
};

function safeJsonParse(raw: string): unknown {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function POST(request: Request): Promise<Response> {
  const contentType = request.headers.get("content-type") || "";
  const raw = await request.text();
  const parsed = safeJsonParse(raw);

  let records: Array<Record<string, unknown>> = [];

  if (Array.isArray(parsed)) {
    records = (parsed as ReportingApiReport[]).map((r) => ({
      schema: "reports+json",
      type: r.type,
      url: r.url,
      user_agent: r.user_agent,
      age: r.age,
      body: r.body,
    }));
  } else if (parsed && typeof parsed === "object" && "csp-report" in parsed) {
    const r = (parsed as LegacyCspReport)["csp-report"] || {};
    records = [
      {
        schema: "csp-report",
        document_uri: r["document-uri"],
        referrer: r.referrer,
        violated_directive: r["violated-directive"],
        effective_directive: r["effective-directive"],
        disposition: r.disposition,
        blocked_uri: r["blocked-uri"],
        source_file: r["source-file"],
        line_number: r["line-number"],
        column_number: r["column-number"],
        script_sample: r["script-sample"],
        status_code: r["status-code"],
      },
    ];
  } else {
    records = [
      {
        schema: "unknown",
        content_type: contentType,
        raw_length: raw.length,
      },
    ];
  }

  for (const record of records) {
    console.warn(
      JSON.stringify({
        level: "warn",
        event: "csp_violation",
        user_agent: request.headers.get("user-agent") || null,
        ...record,
      }),
    );
  }

  return new Response(null, { status: 204 });
}
