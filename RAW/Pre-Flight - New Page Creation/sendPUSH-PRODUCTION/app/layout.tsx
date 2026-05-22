import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../public/design-system/withremy/withremy.css";
import "../public/wireframe-remy.css";
import "../src/index.css";
import "../src/site-pages/bring-back-customers.css";
import "../src/site-pages/foot-traffic-on-demand.css";
import "../src/site-pages/social-media.css";
import "../src/site-pages/style-guide/style-guide.css";
import { seoSite } from "../src/config/seoRoutes";

export const metadata: Metadata = {
  metadataBase: new URL(seoSite.baseUrl),
  title: "sendPUSH | Loyaltymaster",
  description:
    "Build your direct customer list, automate outreach, and send high-converting campaigns without relying on social algorithms.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme-mode="light"
      data-theme="light"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body className="wr-page wf-page">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
