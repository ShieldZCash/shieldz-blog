// Chart for blockbee-vs-nowpayments: yearly platform fee on SaaS revenue at list rates.
// Run: node scripts/gen-blockbee-nowpayments-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", bar:"#3a3a3a", grnA:"#57d497", grnB:"#2fb573" };
const FONT = "ui-sans-serif,system-ui,sans-serif";
const MONO = "Menlo,ui-monospace,monospace";
mkdirSync("public/charts", { recursive: true });

const frame = (W, H, title, sub, unit, source, body, aria) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${aria}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${T.grnB}"/><stop offset="1" stop-color="${T.grnA}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="${T.grnB}"/>
  <text x="28" y="44" font-size="20" font-weight="700" fill="${T.ink}" font-family="${FONT}">${title}</text>
  <text x="28" y="66" font-size="13" fill="${T.faint}" font-family="${FONT}">${sub}</text>
  <text x="${W - 28}" y="44" text-anchor="end" font-size="13" font-weight="600" fill="${T.grnA}" font-family="${FONT}">${unit}</text>
  ${body}
  <text x="28" y="${H - 16}" font-size="11" fill="${T.faint}" font-family="${FONT}">${source}</text>
  <text x="${W - 28}" y="${H - 16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${MONO}">shieldz.cash</text>
</svg>
`;

/** Horizontal bars: rows of { name, note, val, label, good }. */
function hbars(rows, { W, top, rowH, labelW, max, min = 0 }) {
  const x0 = 28 + labelW, plotW = W - x0 - 150;
  return rows.map((r, i) => {
    const y = top + i * rowH;
    const w = Math.max(4, ((r.val - min) / (max - min)) * plotW);
    return `<text x="28" y="${y + 20}" font-size="15" font-weight="600" fill="${r.good ? T.ink : T.muted}" font-family="${FONT}">${r.name}</text>` +
      `<text x="28" y="${y + 39}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${r.note}</text>` +
      `<rect x="${x0}" y="${y + 6}" width="${w.toFixed(1)}" height="30" rx="8" fill="${r.good ? "url(#g)" : T.bar}"/>` +
      `<text x="${(x0 + w + 12).toFixed(1)}" y="${y + 27}" font-size="16" font-weight="700" fill="${r.good ? T.grnA : T.ink}" font-family="${FONT}">${r.label}</text>`;
  }).join("\n  ");
}


{
  const monthly = 10000, yr = (p) => monthly * 12 * p;
  const rows = [
    { name: "BlockBee", note: "1% standard deposit fee", val: yr(0.01), label: "$1,200 / yr" },
    { name: "NOWPayments", note: "1% service fee (pricing page)", val: yr(0.01), label: "$1,200 / yr" },
    { name: "Shieldz", note: "$0 platform fee", val: 0, label: "$0", good: true },
  ];
  const W = 860, H = 96 + rows.length * 62 + 70;
  const body = hbars(rows, { W, top: 96, rowH: 62, labelW: 290, max: 1500 }) +
    `<text x="28" y="${H - 40}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">Platform fee only. Blockchain network fees come on top for all of them; conversion and fiat payout add more on NOWPayments.</text>`;
  writeFileSync("public/charts/blockbee-vs-nowpayments-yearly-fee.svg", frame(W, H,
    "Yearly fee on $10,000 a month of crypto revenue",
    "Platform fee at each provider's published list rate",
    "USD / yr", "Sources: blockbee.io/fees, nowpayments.io/pricing, shieldz.cash/pricing. Checked 2026-10-28.",
    body, "Yearly platform fee on 10,000 dollars a month of crypto revenue: BlockBee 1,200 dollars at 1 percent, NOWPayments 1,200 dollars at 1 percent, Shieldz 0 dollars."));
  console.log("wrote public/charts/blockbee-vs-nowpayments-yearly-fee.svg");
}
