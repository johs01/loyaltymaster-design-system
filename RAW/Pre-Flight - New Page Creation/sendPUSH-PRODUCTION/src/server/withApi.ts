export type ApiContext<TInput = unknown> = {
  input: TInput;
  request: Request;
  userId: string | null;
  ip: string;
  requestId: string;
};

export type AuthPolicy = "required" | "optional" | "none";

export type RateLimitPolicy = {
  key: string;
  max: number;
  windowSeconds: number;
};

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

const rateLimitBuckets = new Map<string, RateLimitBucket>();

export type WithApiOptions<TInput> = {
  auth?: AuthPolicy;
  validate?: (raw: unknown) => TInput;
  rateLimit?: RateLimitPolicy;
  handler: (ctx: ApiContext<TInput>) => Promise<Response> | Response;
};

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-real-ip") ||
    (request.headers.get("x-forwarded-for") || "").split(",")[0]?.trim() ||
    "0.0.0.0"
  );
}

function newRequestId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `req_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

function logStructured(record: Record<string, unknown>): void {
  try {
    console.log(JSON.stringify({ ts: new Date().toISOString(), ...record }));
  } catch {
    console.log(String(record));
  }
}

function errorResponse(status: number, code: string, message: string, requestId: string): Response {
  return new Response(
    JSON.stringify({
      error: { code, message },
      request_id: requestId,
    }),
    {
      status,
      headers: {
        "Content-Type": "application/json",
        "X-Request-Id": requestId,
        "Cache-Control": "no-store",
      },
    },
  );
}

async function parseBody(request: Request): Promise<unknown> {
  if (request.method === "GET" || request.method === "HEAD") {
    const url = new URL(request.url);
    return Object.fromEntries(url.searchParams);
  }
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const text = await request.text();
    if (!text) return {};
    try {
      return JSON.parse(text);
    } catch {
      throw new HttpError(400, "invalid_json", "Request body is not valid JSON");
    }
  }
  if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    return Object.fromEntries(form);
  }
  return {};
}

export class HttpError extends Error {
  constructor(
    public readonly status: number,
    public readonly code: string,
    message: string,
  ) {
    super(message);
  }
}

async function resolveAuth(request: Request, policy: AuthPolicy): Promise<{ userId: string | null }> {
  void request;
  void policy;
  return { userId: null };
}

async function enforceRateLimit(
  policy: RateLimitPolicy,
  ip: string,
  userId: string | null,
): Promise<{ allowed: true } | { allowed: false; retryAfter: number }> {
  const now = Date.now();
  const key = `${policy.key}:${userId || ip}`;
  const existing = rateLimitBuckets.get(key);

  if (!existing || existing.resetAt <= now) {
    rateLimitBuckets.set(key, {
      count: 1,
      resetAt: now + policy.windowSeconds * 1000,
    });
    return { allowed: true };
  }

  if (existing.count >= policy.max) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return { allowed: true };
}

export function withApi<TInput = unknown>(options: WithApiOptions<TInput>) {
  const { auth = "none", validate, rateLimit, handler } = options;

  return async function wrapped(request: Request): Promise<Response> {
    const requestId = request.headers.get("x-request-id") || newRequestId();
    const ip = getClientIp(request);
    const started = Date.now();

    try {
      const { userId } = await resolveAuth(request, auth);
      if (auth === "required" && !userId) {
        return errorResponse(401, "unauthorized", "Authentication required", requestId);
      }

      if (rateLimit) {
        const decision = await enforceRateLimit(rateLimit, ip, userId);
        if (!decision.allowed) {
          return new Response(
            JSON.stringify({
              error: { code: "rate_limited", message: "Too many requests" },
              request_id: requestId,
            }),
            {
              status: 429,
              headers: {
                "Content-Type": "application/json",
                "Retry-After": String(decision.retryAfter),
                "X-Request-Id": requestId,
                "Cache-Control": "no-store",
              },
            },
          );
        }
      }

      const raw = await parseBody(request);
      const input = (validate ? validate(raw) : (raw as TInput)) as TInput;

      const response = await handler({
        input,
        request,
        userId,
        ip,
        requestId,
      });

      if (!response.headers.has("X-Request-Id")) {
        response.headers.set("X-Request-Id", requestId);
      }

      logStructured({
        level: "info",
        event: "api_request",
        request_id: requestId,
        path: new URL(request.url).pathname,
        method: request.method,
        status: response.status,
        user_id: userId,
        ip,
        duration_ms: Date.now() - started,
      });

      return response;
    } catch (err) {
      if (err instanceof HttpError) {
        logStructured({
          level: "warn",
          event: "api_request",
          request_id: requestId,
          path: new URL(request.url).pathname,
          method: request.method,
          status: err.status,
          code: err.code,
          duration_ms: Date.now() - started,
        });
        return errorResponse(err.status, err.code, err.message, requestId);
      }
      logStructured({
        level: "error",
        event: "api_request",
        request_id: requestId,
        path: new URL(request.url).pathname,
        method: request.method,
        status: 500,
        error: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : undefined,
        duration_ms: Date.now() - started,
      });
      return errorResponse(500, "internal_error", "An unexpected error occurred", requestId);
    }
  };
}
