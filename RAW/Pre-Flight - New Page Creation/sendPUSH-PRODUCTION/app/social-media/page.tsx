import { findSeoRoute } from "../../src/config/seoRoutes";
import { routeMetadata } from "../../src/next/metadata";
import { SitePage } from "../../src/next/SitePage";
import { StructuredData } from "../../src/next/StructuredData";

export const dynamic = "force-static";

const route = findSeoRoute("/social-media")!;
export const metadata = routeMetadata(route);

export default function Page() {
  return (
    <>
      <StructuredData route="/social-media" />
      <SitePage route="/social-media" />
    </>
  );
}
