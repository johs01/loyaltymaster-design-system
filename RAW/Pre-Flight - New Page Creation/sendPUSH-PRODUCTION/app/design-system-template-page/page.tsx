import { findSeoRoute } from "../../src/config/seoRoutes";
import { routeMetadata } from "../../src/next/metadata";
import { SitePage } from "../../src/next/SitePage";
import { StructuredData } from "../../src/next/StructuredData";

export const dynamic = "force-static";

const route = findSeoRoute("/design-system-template-page")!;
export const metadata = routeMetadata(route);

export default function Page() {
  return (
    <>
      <StructuredData route="/design-system-template-page" />
      <SitePage route="/design-system-template-page" />
    </>
  );
}
