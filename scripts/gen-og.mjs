// Auto-generates a per-post Open Graph card (1200x630 PNG) for EVERY blog post.
// Runs automatically via the `prebuild` npm hook, so every `npm run build`
// (and every deploy) regenerates all cards. No per-post wiring needed: the
// post page derives the OG url by convention, /blog/og/<slug>.png.
//
// Run manually: node scripts/gen-og.mjs
import { mkdirSync, readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import sharp from "sharp";

const BLOG_DIR = "src/content/blog";
const OUT_DIR = "public/og";
const sans = "Helvetica Neue, Helvetica, Arial, sans-serif";
const mono = "Menlo, ui-monospace, monospace";
const MAXW = 1040; // headline text box width

const xmlEsc = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Minimal frontmatter reader: pulls a single scalar key from the --- block.
function fmValue(src, key) {
  const m = src.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  if (!m) return null;
  return m[1].trim().replace(/^["']/, "").replace(/["']$/, "");
}
function firstTag(src) {
  const m = src.match(/^tags:\s*\[([^\]]*)\]/m);
  if (!m) return null;
  const t = m[1].split(",")[0]?.trim().replace(/^["']/, "").replace(/["']$/, "");
  return t || null;
}

// Greedy word-wrap at an approximate character budget for the given font size.
function wrap(text, fontSize) {
  const maxChars = Math.floor(MAXW / (fontSize * 0.56));
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    const next = line ? line + " " + w : w;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// Pick the largest font size that fits the title in at most 3 lines (4 for the
// longest ones), so short titles look big and long titles still fit.
function layoutTitle(title) {
  for (const fontSize of [92, 80, 68, 58, 50]) {
    const lines = wrap(title, fontSize);
    if (lines.length <= 3) return { fontSize, lines };
  }
  return { fontSize: 46, lines: wrap(title, 46).slice(0, 4) };
}

function svgFor(title, eyebrow) {
  const { fontSize, lines } = layoutTitle(title);
  const lineH = fontSize * 1.1;
  const blockH = lines.length * lineH;
  const centerY = 372; // between the pill and the footer
  const firstBaseline = centerY - blockH / 2 + fontSize * 0.8;

  const headline = lines
    .map(
      (ln, i) =>
        `<text x="78" y="${(firstBaseline + i * lineH).toFixed(1)}" font-family="${sans}" font-size="${fontSize}" font-weight="800" letter-spacing="-2" fill="#fafafa">${xmlEsc(ln)}</text>`,
    )
    .join("\n  ");

  const eb = eyebrow.toUpperCase();
  const pillW = Math.round(eb.length * 12.2 + 48);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="88%" cy="12%" r="55%">
      <stop offset="0" stop-color="#f5361c" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#f5361c" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0e0e0e"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="6" fill="#f5361c"/>
  <text x="80" y="112" font-family="${mono}" font-size="34" font-weight="700" letter-spacing="0.5" fill="#fafafa">shield<tspan fill="#f5361c">z</tspan></text>
  <rect x="80" y="150" width="${pillW}" height="44" rx="22" fill="none" stroke="#f5361c" stroke-opacity="0.55" stroke-width="1.5"/>
  <text x="${80 + pillW / 2}" y="179" text-anchor="middle" font-family="${mono}" font-size="19" font-weight="700" letter-spacing="1.5" fill="#ff9e8c">${xmlEsc(eb)}</text>
  ${headline}
  <line x1="80" y1="536" x2="1120" y2="536" stroke="#262626" stroke-width="1"/>
  <text x="80" y="580" font-family="${mono}" font-size="24" font-weight="500" fill="#fafafa">shieldz.cash</text>
  <text x="1120" y="580" text-anchor="end" font-family="${sans}" font-size="22" fill="#9c9c9c">Non-custodial &#183; Feeless &#183; Keyless</text>
</svg>`;
}

mkdirSync(OUT_DIR, { recursive: true });
const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
let n = 0;
for (const file of files) {
  const slug = basename(file, ".md");
  const src = readFileSync(join(BLOG_DIR, file), "utf8");
  const title = fmValue(src, "title") || slug;
  const eyebrow = fmValue(src, "eyebrow") || firstTag(src) || "Shieldz blog";
  const svg = svgFor(title, eyebrow);
  await sharp(Buffer.from(svg)).png().toFile(join(OUT_DIR, `${slug}.png`));
  n++;
}
console.log(`generated ${n} OG card(s) -> ${OUT_DIR}/`);
