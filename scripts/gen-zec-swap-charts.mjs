// Charts for the ZEC swap post.
// 1) zec-btc-routes.svg: BTC -> ZEC at 0.01 and 0.1 BTC, Maya vs NEAR Intents (measured)
// 2) zec-swap-costs.svg: cheapest route's cost per pair, into and out of ZEC (measured)
// Measurements: live swap.shieldz.cash/v1/quote/stream, 2026-11-10. Cost is measured
// against one price snapshot from /v1/assets (ZEC $1,141.70, BTC $74,340, ETH $2,100.32).
// Run: node scripts/gen-zec-swap-charts.mjs
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

function hbars(rows, { W, top, rowH, labelW, max, min = 0 }) {
  const x0 = 28 + labelW, plotW = W - x0 - 190;
  return rows.map((r, i) => {
    const y = top + i * rowH;
    const w = Math.max(4, ((r.val - min) / (max - min)) * plotW);
    return `<text x="28" y="${y + 20}" font-size="15" font-weight="600" fill="${r.good ? T.ink : T.muted}" font-family="${FONT}">${r.name}</text>` +
      `<text x="28" y="${y + 39}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${r.note}</text>` +
      `<rect x="${x0}" y="${y + 6}" width="${w.toFixed(1)}" height="30" rx="8" fill="${r.good ? "url(#g)" : T.bar}"/>` +
      `<text x="${(x0 + w + 12).toFixed(1)}" y="${y + 27}" font-size="16" font-weight="700" fill="${r.good ? T.grnA : T.ink}" font-family="${FONT}">${r.label}</text>`;
  }).join("\n  ");
}

const pct = (v) => `${v.toFixed(2)}%`;

/* 1. BTC -> ZEC, two sizes, two routes */
{
  const rows = [
    { name: "0.01 BTC via Maya", note: "0.64901961 ZEC, about 11 min", val: 0.32, good: true },
    { name: "0.01 BTC via NEAR Intents", note: "0.64858870 ZEC, about 15 min", val: 0.39 },
    { name: "0.1 BTC via NEAR Intents", note: "6.47933640 ZEC, about 15 min", val: 0.49, good: true },
    { name: "0.1 BTC via Maya", note: "6.40440090 ZEC, about 12 min", val: 1.64 },
  ].map((r) => ({ ...r, label: `${pct(r.val)} cost` }));
  const W = 860, H = 360;
  const body = hbars(rows, { W, top: 96, rowH: 56, labelW: 250, max: 1.7 });
  writeFileSync("public/charts/zec-btc-routes.svg", frame(W, H,
    "BTC to ZEC: Maya and NEAR Intents", "Same request, same minute. Shorter bar = more ZEC for your bitcoin. Green: the better route at each size.", "cost of the swap",
    "Source: live Shieldz router quotes, 2026-11-10, against one price snapshot. All fees deducted, including the 0.15% Shieldz service fee.", body,
    "BTC to ZEC quoted at the same moment. At 0.01 BTC, Maya delivers 0.64901961 ZEC (0.32% cost) and NEAR Intents 0.64858870 ZEC (0.39%). At 0.1 BTC, NEAR Intents delivers 6.47933640 ZEC (0.49%) and Maya 6.40440090 ZEC (1.64%)."));
}

/* 2. Cheapest route per pair */
{
  const rows = [
    { name: "0.01 BTC to ZEC", note: "Maya", val: 0.32 },
    { name: "0.1 BTC to ZEC", note: "NEAR Intents", val: 0.49 },
    { name: "1 ETH to ZEC", note: "NEAR Intents", val: 0.51 },
    { name: "100 USDC (Arbitrum) to ZEC", note: "NEAR Intents", val: 0.59 },
    { name: "1,000 USDC (Arbitrum) to ZEC", note: "NEAR Intents", val: 0.27 },
    { name: "500 USDT (Tron) to ZEC", note: "NEAR Intents", val: 0.35 },
    { name: "2,000 USDT (Tron) to ZEC", note: "NEAR Intents", val: 0.29 },
    { name: "1 ZEC to BTC", note: "NEAR Intents", val: 0.56 },
    { name: "1 ZEC to USDC (Arbitrum)", note: "NEAR Intents", val: 0.52 },
  ].map((r) => ({ ...r, good: true, label: pct(r.val) }));
  const W = 860, top = 96, rowH = 52, H = top + rows.length * rowH + 44;
  const body = hbars(rows, { W, top, rowH, labelW: 270, max: 0.65 });
  writeFileSync("public/charts/zec-swap-costs.svg", frame(W, H,
    "What a ZEC swap costs, by pair and size", "The best quote on each pair, measured against one price snapshot.", "cost of the swap",
    "Source: live Shieldz router quotes, 2026-11-10. All fees deducted, incl. the 0.15% Shieldz fee. Send network fee excluded.", body,
    "Cheapest route cost per pair: 0.01 BTC to ZEC 0.32% via Maya; 0.1 BTC to ZEC 0.49%; 1 ETH to ZEC 0.51%; 100 USDC to ZEC 0.59%; 1,000 USDC to ZEC 0.27%; 500 Tron USDT to ZEC 0.35%; 2,000 Tron USDT to ZEC 0.29%; 1 ZEC to BTC 0.56%; 1 ZEC to USDC 0.52%, all via NEAR Intents except the first."));
}
console.log("ok");
