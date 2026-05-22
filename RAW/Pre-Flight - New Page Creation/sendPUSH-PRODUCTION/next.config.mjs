const FORBIDDEN_PUBLIC_ENV_NAME =
  /^NEXT_PUBLIC_.*(SECRET|PRIVATE[_-]?KEY|SERVICE[_-]?ROLE|ACCESS[_-]?TOKEN|PASSWORD|PASSPHRASE|DATABASE[_-]?URL|DB[_-]?URL|CONNECTION[_-]?STRING|WEBHOOK[_-]?SECRET)$/i;

const KNOWN_SERVER_ONLY_SUFFIXES = [
  "STRIPE_SECRET_KEY",
  "STRIPE_WEBHOOK_SECRET",
  "CLOUDINARY_API_SECRET",
  "CLOUDINARY_URL",
  "CLERK_SECRET_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
  "OPENAI_API_KEY",
  "ANTHROPIC_API_KEY",
];

function assertEnvTaxonomy(env) {
  const violations = [];
  for (const name of Object.keys(env)) {
    if (FORBIDDEN_PUBLIC_ENV_NAME.test(name)) {
      violations.push(
        `  - ${name}: matches forbidden pattern (would leak into client bundle)`,
      );
      continue;
    }
    for (const suffix of KNOWN_SERVER_ONLY_SUFFIXES) {
      if (name === `NEXT_PUBLIC_${suffix}` || name.endsWith(`_${suffix}`)) {
        violations.push(
          `  - ${name}: ${suffix} must never be prefixed with NEXT_PUBLIC_`,
        );
      }
    }
  }

  if (violations.length > 0) {
    throw new Error(
      [
        "",
        "Refusing to build: client-bundle env taxonomy violation",
        "",
        "The following variables would be exposed to every visitor. Remove the",
        "NEXT_PUBLIC_ prefix and reference them only from server code.",
        "",
        ...violations,
        "",
      ].join("\n"),
    );
  }
}

assertEnvTaxonomy(process.env);

if (
  process.env.NODE_ENV === "production" &&
  !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
) {
  console.warn(
    "[env] WARNING: missing required public env vars for production build: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME. Images will not render. See SECURITY.md / README.",
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    qualities: [75, 80, 85, 90],
  },
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/how-to-turn-a-slow-afternoon-into-your-busiest-day-of-the-week",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "accelerometer=(), autoplay=(), camera=(), clipboard-read=(), clipboard-write=(self), cross-origin-isolated=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), hid=(), idle-detection=(), interest-cohort=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(self), publickey-credentials-get=(), screen-wake-lock=(), serial=(), sync-xhr=(), usb=(), web-share=(self), xr-spatial-tracking=()",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-site" },
          {
            key: "Content-Security-Policy-Report-Only",
            value:
              "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; img-src 'self' https://res.cloudinary.com https://images.unsplash.com data:; font-src 'self' https://fonts.gstatic.com data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' https://ujs.alttext.ai; connect-src 'self' https://res.cloudinary.com https://ujs.alttext.ai; frame-src https://www.google.com https://maps.google.com; worker-src 'self' blob:; manifest-src 'self'; upgrade-insecure-requests; report-uri /api/csp-report",
          },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
