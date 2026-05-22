# `app/api` — Next.js Route Handler server boundary

The live API endpoints now live in `app/api/*/route.ts`. Everything there runs
on the Node.js runtime and is the only place a real secret is allowed to be read.

## Rules

1. Every form-style endpoint uses the shared `src/server/withApi.ts` wrapper so auth,
   input validation, rate limiting, structured error responses, and audit
   logging are applied uniformly.
2. Secrets read via `process.env.*` **must not** have a `NEXT_PUBLIC_` prefix (see
   `SECURITY.md` — env var taxonomy).
3. Never log a raw secret. Never echo request bodies back in error responses.
4. Return sanitized error JSON, never stack traces.
5. Default runtime is Node.js. Only switch to Edge per-endpoint after review.

## Current endpoints

| Path                  | Purpose                                                 |
| --------------------- | ------------------------------------------------------- |
| `/api/csp-report`     | Sink for `Content-Security-Policy-Report-Only` reports. |
| `/api/trial-signup`   | Validates trial/demo leads and sends Resend notifications. |

## Adding a new endpoint

```ts
// app/api/subscribe/route.ts
import { withApi, HttpError } from "../../../src/server/withApi";
import { z } from "zod"; // install with: npm install zod

const InputSchema = z.object({ email: z.string().email() });

const handler = withApi<z.infer<typeof InputSchema>>({
  auth: "optional",
  validate: (raw) => InputSchema.parse(raw),
  rateLimit: { key: "subscribe", max: 5, windowSeconds: 60 },
  handler: async ({ input, userId, ip }) => {
    const apiKey = process.env.EMAIL_PROVIDER_API_KEY;
    if (!apiKey) throw new HttpError(500, "misconfigured", "Email provider not configured");
    // ... call upstream, persist, etc.
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
});

export async function POST(request: Request) {
  return handler(request);
}
```
