import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { readdirSync, readFileSync } from "node:fs";

// Build a slug -> lastmod map from each post's frontmatter (updatedDate if
// present, else pubDate) so the sitemap carries a real freshness signal.
const blogDir = new URL("./src/content/blog/", import.meta.url);
const lastmodBySlug = {};
for (const file of readdirSync(blogDir)) {
  if (!file.endsWith(".md") && !file.endsWith(".mdx")) continue;
  const src = readFileSync(new URL(file, blogDir), "utf8");
  const pub = src.match(/^pubDate:\s*"?([0-9][0-9-]+)"?/m)?.[1];
  const upd = src.match(/^updatedDate:\s*"?([0-9][0-9-]+)"?/m)?.[1];
  const date = upd || pub;
  if (date) lastmodBySlug[file.replace(/\.mdx?$/, "")] = date;
}
// Newest post date → used as the blog index's lastmod.
const newest = Object.values(lastmodBySlug).sort().at(-1);

const iso = (d) => new Date(d + "T00:00:00Z").toISOString();

// Served at https://shieldz.cash/blog (same domain, path-based for SEO).
export default defineConfig({
  site: "https://shieldz.cash",
  base: "/blog",
  trailingSlash: "never",
  integrations: [
    sitemap({
      serialize(item) {
        const m = item.url.match(/\/blog\/([a-z0-9-]+)\/?$/);
        if (m && lastmodBySlug[m[1]]) {
          item.lastmod = iso(lastmodBySlug[m[1]]);
        } else if (/\/blog\/?$/.test(item.url) && newest) {
          item.lastmod = iso(newest); // blog index
        }
        return item;
      },
    }),
  ],
  build: { format: "directory" },
});
