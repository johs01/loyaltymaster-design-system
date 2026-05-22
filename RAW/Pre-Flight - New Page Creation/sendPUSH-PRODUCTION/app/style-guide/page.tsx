import { findSeoRoute } from "../../src/config/seoRoutes";
import { routeMetadata } from "../../src/next/metadata";
import { StyleGuide } from "../../src/next/SitePage";

export const dynamic = "force-static";

const route = findSeoRoute("/style-guide")!;
export const metadata = routeMetadata(route);

export default function Page() {
  return <StyleGuide />;
}
