import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Served at https://shieldz.cash/blog (same domain, path-based for SEO).
export default defineConfig({
  site: "https://shieldz.cash",
  base: "/blog",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: { format: "directory" },
});
