// One-off: confidential-payment flow diagram for the private-crypto-payments post.
// Three stages left-to-right: buyer deposit (public) -> confidential swap
// (shielded, green) -> merchant settlement (public). Structural, not measured.
// Run: node scripts/gen-confidential-flow.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = {
  bg: "#161616", line: "#262626", ink: "#fafafa", muted: "#9c9c9c",
  faint: "#777", box: "#1e1e1e", boxLine: "#333", green: "#57d497", greenDeep: "#2fb573",
};
const W = 760, H = 360;

const stages = [
  { title: "Buyer pays", sub: "source chain", tag: "PUBLIC", shielded: false },
  { title: "Confidential swap", sub: "NEAR intents", tag: "SHIELDED", shielded: true },
  { title: "You settle", sub: "your wallet", tag: "PUBLIC", shielded: false },
];

const boxW = 190, boxH = 108, gap = (W - 60 - stages.length * boxW) / (stages.length - 1);
const top = 132;

// Eye glyph (public) and shield glyph (shielded), tiny inline icons.
const eye = (cx, cy, c) =>
  `<path d="M${cx - 11} ${cy} q11 -9 22 0 q-11 9 -22 0 z" fill="none" stroke="${c}" stroke-width="1.6"/><circle cx="${cx}" cy="${cy}" r="3" fill="${c}"/>`;
const shield = (cx, cy, c) =>
  `<path d="M${cx} ${cy - 9} l8 3 v5 q0 6 -8 10 q-8 -4 -8 -10 v-5 z" fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/><path d="M${cx - 3.5} ${cy} l2.5 2.5 l5 -5.5" fill="none" stroke="${c}" stroke-width="1.6" stroke-linecap="round"/>`;

const boxes = stages
  .map((s, i) => {
    const x = 30 + i * (boxW + gap);
    const cx = x + boxW / 2;
    const stroke = s.shielded ? T.green : T.boxLine;
    const fill = s.shielded ? "url(#sg)" : T.box;
    const titleFill = s.shielded ? T.ink : T.ink;
    const icon = s.shielded ? shield(cx, top + 34, T.green) : eye(cx, top + 34, T.muted);
    const tagFill = s.shielded ? T.greenDeep : "#2a2a2a";
    const tagText = s.shielded ? "#0c1f17" : T.muted;
    return `
  <rect x="${x}" y="${top}" width="${boxW}" height="${boxH}" rx="14" fill="${fill}" stroke="${stroke}" stroke-width="${s.shielded ? 2 : 1}"/>
  ${icon}
  <text x="${cx}" y="${top + 64}" text-anchor="middle" font-size="17" font-weight="700" fill="${titleFill}" font-family="ui-sans-serif,system-ui,sans-serif">${s.title}</text>
  <text x="${cx}" y="${top + 84}" text-anchor="middle" font-size="12.5" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${s.sub}</text>
  <rect x="${cx - 34}" y="${top + boxH + 14}" width="68" height="20" rx="10" fill="${tagFill}"/>
  <text x="${cx}" y="${top + boxH + 28}" text-anchor="middle" font-size="10.5" font-weight="700" letter-spacing="0.06em" fill="${tagText}" font-family="ui-sans-serif,system-ui,sans-serif">${s.tag}</text>`;
  })
  .join("\n");

// Arrows between boxes.
const arrows = [0, 1]
  .map((i) => {
    const x1 = 30 + i * (boxW + gap) + boxW + 6;
    const x2 = 30 + (i + 1) * (boxW + gap) - 6;
    const y = top + boxH / 2 - 8;
    return `<line x1="${x1}" y1="${y}" x2="${x2 - 8}" y2="${y}" stroke="${T.boxLine}" stroke-width="1.8"/><path d="M${x2 - 9} ${y - 4} l6 4 l-6 4" fill="none" stroke="${T.boxLine}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`;
  })
  .join("\n");

// The "link broken" bracket spanning stage 1 to stage 3.
const bx1 = 30 + boxW / 2;
const bx3 = 30 + 2 * (boxW + gap) + boxW / 2;
const by = top + boxH + 58;
const linkNote = `
  <line x1="${bx1}" y1="${by}" x2="${bx3}" y2="${by}" stroke="${T.green}" stroke-width="1.4" stroke-dasharray="4 4"/>
  <line x1="${bx1}" y1="${by - 5}" x2="${bx1}" y2="${by + 5}" stroke="${T.green}" stroke-width="1.4"/>
  <line x1="${bx3}" y1="${by - 5}" x2="${bx3}" y2="${by + 5}" stroke="${T.green}" stroke-width="1.4"/>
  <text x="${(bx1 + bx3) / 2}" y="${by + 22}" text-anchor="middle" font-size="12.5" fill="${T.green}" font-family="ui-sans-serif,system-ui,sans-serif">buyer-to-seller link is broken at the swap</text>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Confidential crypto payment flow. Stage one, the buyer pays on the source chain, is public. Stage two, the confidential swap through NEAR intents, is shielded. Stage three, settlement to your wallet, is public. Confidential routing breaks the link between the buyer and the seller at the swap.">
  <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#153a2c"/><stop offset="1" stop-color="#0f2a20"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="${T.greenDeep}"/>
  <text x="30" y="44" font-size="20" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">What a confidential crypto payment shields</text>
  <text x="30" y="66" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">Both ends stay public on-chain. The swap in the middle is shielded, so the two ends do not link.</text>
  ${arrows}
  ${boxes}
  ${linkNote}
  <text x="${W - 30}" y="${H - 16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · structure of a confidential swap payment</text>
</svg>
`;

mkdirSync("public/charts", { recursive: true });
writeFileSync("public/charts/confidential-payment-flow.svg", svg);
console.log("wrote public/charts/confidential-payment-flow.svg");
