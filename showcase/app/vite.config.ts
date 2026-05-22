import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const appDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(appDir, "../..");

export default defineConfig({
  plugins: [react()],
  define: {
    __REPO_ROOT__: JSON.stringify(rootDir),
  },
  resolve: {
    alias: {
      react: path.join(appDir, "node_modules/react"),
      "react-dom": path.join(appDir, "node_modules/react-dom"),
      "lucide-react": path.join(appDir, "node_modules/lucide-react"),
    },
    dedupe: ["react", "react-dom", "lucide-react"],
  },
  server: {
    fs: {
      allow: [rootDir],
    },
  },
});
