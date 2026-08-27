// Post-build image SEO pass, runs via the `postbuild` npm hook.
//
// 1. Swaps chart <img> sources from .svg to their PNG twin (rendered by
//    gen-chart-pngs.mjs) so the displayed, indexable image is a PNG. The
//    wrapping <a href="...svg"> is left alone: the vector stays one click away.
// 2. Injects an ImageObject JSON-LD graph per post (CC BY 4.0 license +
//    credit) so embeds elsewhere are license-clear and credit back to us.
// 3. Rewrites dist/sitemap-0.xml with <image:image> entries per page, feeding
//    Google/Bing image search the same PNGs the page actually shows.
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const SITE = "https://shieldz.cash";
const LICENSE = "https://creativecommons.org/licenses/by/4.0/";

// dist/<slug>/index.html -> https://shieldz.cash/blog/<slug>; dist/index.html -> /blog
const pages = [];
const walk = (dir, rel) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) walk(join(dir, e.name), rel ? `${rel}/${e.name}` : e.name);
    else if (e.name === "index.html") pages.push({ path: join(dir, e.name), url: `${SITE}/blog${rel ? `/${rel}` : ""}` });
  }
};
walk(DIST, "");

const imagesByUrl = new Map();
let swapped = 0;

for (const page of pages) {
  let html = readFileSync(page.path, "utf8");

  // 1. svg -> png twin swap (display + index the PNG, keep the SVG linked)
  html = html.replace(/(<img[^>]+src=")(\/blog\/(?:img|charts)\/[a-z0-9-]+)\.svg(")/g, (m, pre, base, post) => {
    if (!existsSync(join(DIST, base.replace("/blog/", "") + ".png"))) return m;
    swapped++;
    return `${pre}${base}.png${post}`;
  });

  // Collect content images (charts + screenshots only, skip UI chrome)
  const imgs = [];
  for (const m of html.matchAll(/<img[^>]+src="(\/blog\/(?:img|charts|og)\/[^"]+\.(?:png|webp|jpg))"[^>]*>/g)) {
    if (m[1].startsWith("/blog/og/")) continue; // og cards are meta, not content
    const alt = m[0].match(/alt="([^"]*)"/)?.[1] ?? "";
    if (!imgs.some((i) => i.src === m[1])) imgs.push({ src: m[1], alt });
  }
  if (imgs.length === 0) continue;
  imagesByUrl.set(page.url, imgs);

  // 2. ImageObject JSON-LD with license + credit
  const graph = imgs.map((i) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE}${i.src}`,
    url: page.url,
    caption: i.alt || undefined,
    license: LICENSE,
    acquireLicensePage: page.url,
    creditText: "Shieldz, shieldz.cash",
    creator: { "@type": "Organization", name: "Shieldz", url: SITE },
    copyrightNotice: "© 2026 Shieldz, CC BY 4.0",
  }));
  const ld = `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`;
  html = html.replace("</head>", `${ld}</head>`);

  writeFileSync(page.path, html);
}

// 3. image:image entries in the sitemap
const smPath = join(DIST, "sitemap-0.xml");
if (existsSync(smPath)) {
  let sm = readFileSync(smPath, "utf8");
  let added = 0;
  sm = sm.replace(/<url><loc>([^<]+)<\/loc>(.*?)<\/url>/g, (m, loc, rest) => {
    const imgs = imagesByUrl.get(loc.replace(/\/$/, ""));
    if (!imgs) return m;
    const tags = imgs.map((i) => `<image:image><image:loc>${SITE}${i.src}</image:loc></image:image>`).join("");
    added += imgs.length;
    return `<url><loc>${loc}</loc>${rest}${tags}</url>`;
  });
  writeFileSync(smPath, sm);
  console.log(`image sitemap: ${added} image entries across ${imagesByUrl.size} pages`);
}
console.log(`img srcs swapped to png: ${swapped}; pages with JSON-LD: ${imagesByUrl.size}`);
