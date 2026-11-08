// Charts for the BTC to EVM routes post.
// 1) btc-evm-routes-usdc.svg: 0.1 BTC -> USDC on Base, four routes (measured)
// 2) btc-evm-coverage.svg: which route delivers which EVM token from native BTC
// Measurements: live swap.shieldz.cash/v1/quote/stream and /v1/assets, 2026-11-09.
// Run: node scripts/gen-btc-evm-charts.mjs
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

/* 1. 0.1 BTC -> USDC on Base */
{
  const rows = [
    { name: "BOB Gateway", note: "about 10 min, one Taproot deposit", val: 7463.96 },
    { name: "NEAR Intents", note: "about 13.5 min", val: 7445.11 },
    { name: "Garden", note: "BTC to cbBTC, then a Relay leg", val: 7428.32 },
    { name: "Relay", note: "fastest quote, widest spread", val: 7419.09 },
  ].map((r, i) => ({ ...r, good: i === 0, label: `${r.val.toLocaleString("en-US", { minimumFractionDigits: 2 })} USDC` }));
  const W = 860, H = 360;
  const body = hbars(rows, { W, top: 96, rowH: 56, labelW: 230, max: 7470, min: 7400 });
  writeFileSync("public/charts/btc-evm-routes-usdc.svg", frame(W, H,
    "0.1 BTC to USDC on Base, four routes", "Same request, same minute. Axis starts at 7,400 USDC so the gaps are visible.", "USDC received",
    "Source: live Shieldz router quotes, 2026-11-09. All fees already deducted, including the 0.15% Shieldz service fee.", body,
    "0.1 BTC to USDC on Base quoted at the same moment: BOB Gateway 7,463.96 USDC, NEAR Intents 7,445.11, Garden 7,428.32, Relay 7,419.09."));
}

/* 2. Coverage matrix */
{
  const cols = ["Garden", "BOB Gateway", "Chainflip", "NEAR Intents", "Relay"];
  const rows = [
    ["cbBTC on Base", [1, 1, 0, 1, 0]],
    ["WBTC on Ethereum", [1, 1, 1, 1, 0]],
    ["USDC on Base", [1, 1, 0, 1, 1]],
    ["USDC / USDT on Ethereum", [0, 1, 1, 1, 1]],
    ["ETH on Ethereum", [0, 1, 1, 1, 1]],
    ["EURC, LBTC, SolvBTC", [0, 1, 0, 0, 0]],
  ];
  const W = 860, x0 = 300, top = 112, rowH = 44, H = top + rows.length * rowH + 60, colW = (W - x0 - 28) / cols.length;
  let body = cols.map((c, i) => `<text x="${(x0 + colW * i + colW / 2).toFixed(1)}" y="${top - 16}" text-anchor="middle" font-size="12.5" font-weight="600" fill="${i < 2 ? T.grnA : T.muted}" font-family="${FONT}">${c}</text>`).join("");
  rows.forEach(([name, on], r) => {
    const y = top + r * rowH;
    body += `<line x1="28" y1="${y - 4}" x2="${W - 28}" y2="${y - 4}" stroke="${T.grid}"/>` +
      `<text x="28" y="${y + 22}" font-size="14.5" font-weight="600" fill="${T.ink}" font-family="${FONT}">${name}</text>`;
    on.forEach((v, i) => {
      const cx = (x0 + colW * i + colW / 2).toFixed(1);
      body += v ? `<circle cx="${cx}" cy="${y + 17}" r="9" fill="${i < 2 ? "url(#g)" : "#8a8a8a"}"/>` : `<line x1="${cx - 6}" y1="${y + 17}" x2="${+cx + 6}" y2="${y + 17}" stroke="#444" stroke-width="2"/>`;
    });
  });
  writeFileSync("public/charts/btc-evm-coverage.svg", frame(W, H,
    "Where native BTC can land on EVM chains", "Which route quotes each destination from real bitcoin. Green: the two routes added in November 2026.", "native BTC in",
    "Source: Shieldz router asset list and live quotes, 2026-11-09. Garden reaches Base tokens beyond cbBTC through a Relay leg.", body,
    "Coverage matrix: Garden delivers cbBTC on Base, WBTC on Ethereum and USDC on Base; BOB Gateway covers every row including EURC, LBTC and SolvBTC; Chainflip, NEAR Intents and Relay cover subsets."));
}
console.log("ok");
