// Chart for the USDT Ethereum <-> Tron post.
// usdt-tron-1k.svg: what 1,000 USDT (or USDC) becomes on the other chain, best route per direction (measured)
// Measurements: live swap.shieldz.cash/v1/quote/stream, 2026-11-10.
// Run: node scripts/gen-usdt-tron-charts.mjs
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
    return `<text x="28" y="${y + 20}" font-size="15" font-weight="600" fill="${T.ink}" font-family="${FONT}">${r.name}</text>` +
      `<text x="28" y="${y + 39}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${r.note}</text>` +
      `<rect x="${x0}" y="${y + 6}" width="${w.toFixed(1)}" height="30" rx="8" fill="url(#g)"/>` +
      `<text x="${(x0 + w + 12).toFixed(1)}" y="${y + 27}" font-size="16" font-weight="700" fill="${T.grnA}" font-family="${FONT}">${r.val.toFixed(2)}</text>`;
  }).join("\n  ");
}

{
  const rows = [
    { name: "Arbitrum USDC to Tron USDT", note: "Relay, seconds after your deposit", val: 997.52 },
    { name: "Tron USDT to Solana USDT", note: "NEAR Intents, about 1.5 min", val: 996.99 },
    { name: "Tron USDT to Ethereum USDT", note: "NEAR Intents, about 1.5 min", val: 996.70 },
    { name: "Ethereum USDT to Tron USDT", note: "Relay, seconds after your deposit", val: 996.54 },
    { name: "Solana USDT to Tron USDT", note: "Relay, seconds after your deposit", val: 996.31 },
    { name: "Tron USDT to Base USDC", note: "NEAR Intents, about 1.5 min", val: 995.91 },
    { name: "BNB Chain USDT to Tron USDT", note: "Relay; NEAR's minimum here is $1,000", val: 992.80 },
  ];
  const W = 860, top = 96, rowH = 52, H = top + rows.length * rowH + 44;
  const body = hbars(rows, { W, top, rowH, labelW: 300, max: 998, min: 990 });
  writeFileSync("public/charts/usdt-tron-1k.svg", frame(W, H,
    "1,000 USDT moved to or from Tron", "Best route per direction, same hour. Axis starts at 990 so the gaps are visible.", "received",
    "Source: live Shieldz router quotes, 2026-11-10. All fees deducted, incl. the 0.15% Shieldz fee. Send network fee excluded.", body,
    "1,000 stablecoins moved to or from Tron, best route each: Arbitrum USDC to Tron USDT 997.52; Tron USDT to Solana 996.99; Tron to Ethereum 996.70; Ethereum to Tron 996.54; Solana to Tron 996.31; Tron USDT to Base USDC 995.91; BNB Chain USDT to Tron 992.80."));
}
console.log("ok");
