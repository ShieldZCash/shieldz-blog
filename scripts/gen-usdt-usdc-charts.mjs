// Chart for the USDT to USDC post.
// usdt-usdc-5k.svg: what 5,000 USDT becomes in USDC, best route, by start and destination chain (measured)
// Measurements: live swap.shieldz.cash/v1/quote/stream, 2026-11-19 21:42-21:47 UTC.
// Run: node scripts/gen-usdt-usdc-charts.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", ink:"#fafafa", faint:"#777", grnA:"#57d497", grnB:"#2fb573" };
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
    { name: "Tron USDT to Ethereum USDC", note: "Chainflip, about 3 min", val: 4990.82 },
    { name: "Tron USDT to Arbitrum USDC", note: "Chainflip, about 3 min", val: 4989.95 },
    { name: "Tron USDT to Solana USDC", note: "Chainflip, about 3 min", val: 4989.80 },
    { name: "Ethereum USDT to Ethereum USDC", note: "Chainflip, about 3 min", val: 4987.30 },
    { name: "Ethereum USDT to Solana USDC", note: "Chainflip, about 3 min", val: 4987.19 },
    { name: "Arbitrum USDT to Arbitrum USDC", note: "Relay, seconds", val: 4986.11 },
    { name: "Ethereum USDT to Base USDC", note: "Relay, about 25 s", val: 4985.84 },
    { name: "Solana USDT to Solana USDC", note: "Relay, seconds", val: 4982.96 },
    { name: "Tron USDT to Base USDC", note: "Relay, seconds", val: 4981.73 },
    { name: "BNB Chain USDT to BNB Chain USDC", note: "NEAR Intents, about 40 s", val: 4978.60 },
    { name: "Base USDT to Base USDC", note: "Relay, the only route that answered", val: 4966.61 },
  ];
  const W = 860, top = 96, rowH = 52, H = top + rows.length * rowH + 44;
  const body = hbars(rows, { W, top, rowH, labelW: 320, max: 4995, min: 4960 });
  const aria = "What 5,000 USDT becomes in USDC on the best route, by start and destination chain: " +
    rows.map((r) => `${r.name} ${r.val.toFixed(2)} (${r.note})`).join("; ") + ".";
  writeFileSync("public/charts/usdt-usdc-5k.svg", frame(W, H,
    "5,000 USDT swapped to USDC", "Best route for each start and destination chain, same five minutes. Axis starts at 4,960 so the gaps are visible.", "USDC received",
    "Source: live Shieldz router quotes, 2026-11-19. All fees deducted, incl. the Shieldz fee. Your own send fee excluded.", body, aria));
}
console.log("ok");
