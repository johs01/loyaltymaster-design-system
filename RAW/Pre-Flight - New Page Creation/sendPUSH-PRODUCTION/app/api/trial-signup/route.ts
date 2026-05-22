import { HttpError, withApi } from "../../../src/server/withApi";

export const runtime = "nodejs";

type TrialSignupInput = {
  fullName: string;
  businessName: string;
  businessEmail: string;
  businessLocation: string;
  businessWebsite?: string;
  companyUrl?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validateTrialSignup(raw: unknown): TrialSignupInput {
  if (!raw || typeof raw !== "object") {
    throw new HttpError(400, "invalid_input", "Form data is required");
  }

  const data = raw as Record<string, unknown>;
  const fullName = asString(data.fullName);
  const businessName = asString(data.businessName);
  const businessEmail = asString(data.businessEmail).toLowerCase();
  const businessLocation = asString(data.businessLocation);
  const businessWebsite = asString(data.businessWebsite);
  const companyUrl = asString(data.companyUrl);

  if (companyUrl) {
    throw new HttpError(400, "invalid_input", "Form submission could not be accepted");
  }
  if (fullName.length < 2 || fullName.length > 120) {
    throw new HttpError(400, "invalid_full_name", "Full name must be between 2 and 120 characters");
  }
  if (businessName.length < 2 || businessName.length > 160) {
    throw new HttpError(400, "invalid_business_name", "Business name must be between 2 and 160 characters");
  }
  if (!EMAIL_PATTERN.test(businessEmail) || businessEmail.length > 180) {
    throw new HttpError(400, "invalid_business_email", "Business email must be a valid email address");
  }
  if (businessLocation.length < 2 || businessLocation.length > 180) {
    throw new HttpError(400, "invalid_business_location", "Business location must be between 2 and 180 characters");
  }
  if (businessWebsite) {
    try {
      const url = new URL(businessWebsite);
      if (url.protocol !== "https:" && url.protocol !== "http:") {
        throw new Error("Unsupported URL protocol");
      }
    } catch {
      throw new HttpError(400, "invalid_business_website", "Business website must be a valid URL");
    }
  }

  return {
    fullName,
    businessName,
    businessEmail,
    businessLocation,
    ...(businessWebsite && { businessWebsite }),
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendResendEmail(payload: {
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || "sendPUSH <onboarding@resend.dev>";

  if (!apiKey) {
    throw new HttpError(500, "resend_not_configured", "Lead email is not configured");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      ...(payload.replyTo && { reply_to: payload.replyTo }),
    }),
  });

  if (!response.ok) {
    throw new HttpError(502, "resend_delivery_failed", "Lead email could not be sent");
  }
}

const handler = withApi<TrialSignupInput>({
  auth: "none",
  validate: validateTrialSignup,
  rateLimit: { key: "trial-signup", max: 5, windowSeconds: 60 },
  handler: async ({ input, requestId }) => {
    const salesTo = (process.env.TRIAL_SIGNUP_TO_EMAIL || "admin@loyaltymaster.com")
      .split(",")
      .map((email) => email.trim())
      .filter(Boolean);

    const fields = [
      ["Full name", input.fullName],
      ["Business name", input.businessName],
      ["Business email", input.businessEmail],
      ["Business location", input.businessLocation],
      ["Business website", input.businessWebsite || "Not provided"],
      ["Request ID", requestId],
    ];

    await sendResendEmail({
      to: salesTo,
      subject: `New sendPUSH trial request: ${input.businessName}`,
      replyTo: input.businessEmail,
      html: `
        <h1>New sendPUSH trial request</h1>
        <table>
          <tbody>
            ${fields
              .map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`)
              .join("")}
          </tbody>
        </table>
      `,
    });

    await sendResendEmail({
      to: [input.businessEmail],
      subject: "We received your sendPUSH trial request",
      html: `
        <h1>Your sendPUSH trial request is in</h1>
        <p>Hi ${escapeHtml(input.fullName)},</p>
        <p>We received your request for ${escapeHtml(input.businessName)}. The Loyaltymaster team will review it and follow up with next steps.</p>
        <p>Request ID: ${escapeHtml(requestId)}</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true, request_id: requestId }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  },
});

export async function POST(request: Request): Promise<Response> {
  return handler(request);
}
