// Charts for the whale stablecoin post (swap-1-million-usdt-usdc).
// 1) stablecoin-1m-cost.svg: all-in cost of moving $1,000,000 of stablecoins, by route
// Measurements: live swap.shieldz.cash quotes, 2026-10-14, the route that delivered the most.
// Cost = amount sent - amount received, every fee included. "No route" rows show the
// largest size that did quote.
// Run: node scripts/gen-stablecoin-charts.mjs
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

const axis = (xs, top, bottom, ticks, fmt) =>
  ticks.map((t) =>
    `<line x1="${xs(t)}" y1="${top}" x2="${xs(t)}" y2="${bottom}" stroke="${T.grid}"/>` +
    `<text x="${xs(t)}" y="${bottom + 18}" text-anchor="middle" font-size="11" fill="${T.faint}" font-family="${FONT}">${fmt(t)}</text>`).join("");

const usd = (n) => "$" + n.toLocaleString("en-US");

/* 1. All-in cost of $1M, by route */
{
  const W = 860, H = 640, x0 = 330, plotW = W - x0 - 110, top = 100, rowH = 50, max = 2500;
  const xs = (s) => x0 + (s / max) * plotW;
  const rows = [
    { name: "USDC → USDT", note: "Ethereum · NEAR Intents", cost: 173 },
    { name: "USDT Tron → USDT Ethereum", note: "Chainflip · ~13 min", cost: 523 },
    { name: "USDC Ethereum → Arbitrum", note: "Relay · ~25 s", cost: 600 },
    { name: "USDC Ethereum → Base", note: "Relay · ~25 s", cost: 600 },
    { name: "USDT → USDC", note: "Ethereum · Relay", cost: 1899 },
    { name: "USDT Tron → USDC Ethereum", note: "Chainflip", cost: 2121 },
    { name: "USDC Solana → Ethereum", note: "largest that quoted: $510,000", cost: null },
    { name: "USDC Ethereum → Solana", note: "largest that quoted: $250,000", cost: null },
    { name: "USDT Tron → USDC Solana", note: "largest that quoted: $250,000", cost: null },
  ];
  const bottom = top + rows.length * rowH - 6;
  const bars = rows.map((r, i) => {
    const y = top + i * rowH;
    const label = `<text x="28" y="${y + 16}" font-size="14.5" font-weight="600" fill="${r.cost == null ? T.muted : T.ink}" font-family="${FONT}">${r.name}</text>` +
      `<text x="28" y="${y + 33}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${r.note}</text>`;
    if (r.cost == null)
      return label + `<text x="${x0 + 8}" y="${y + 22}" font-size="12.5" fill="${T.faint}" font-family="${FONT}">no route at $1,000,000</text>`;
    const w = Math.max(6, xs(r.cost) - x0);
    return label +
      `<rect x="${x0}" y="${y + 4}" width="${w.toFixed(1)}" height="26" rx="7" fill="${r.cost <= 600 ? "url(#g)" : T.bar}"/>` +
      `<text x="${(x0 + w + 10).toFixed(1)}" y="${y + 22}" font-size="13" font-weight="700" fill="${r.cost <= 600 ? T.grnA : T.muted}" font-family="${FONT}">${usd(r.cost)}</text>`;
  }).join("\n  ");
  writeFileSync("public/charts/stablecoin-1m-cost.svg", frame(W, H,
    "What it costs to move $1,000,000 of stablecoins",
    "All-in: amount sent minus amount received, every fee included, best route per swap",
    "USD", "Live swap.shieldz.cash quotes, 2026-10-14. Includes the Shieldz fee (0.05% or 0.15%) and protocol fees.",
    axis(xs, top - 8, bottom, [0, 500, 1000, 1500, 2000, 2500], (t) => usd(t)) + bars,
    "All-in cost of moving 1,000,000 dollars of stablecoins. USDC to USDT on Ethereum: 173 dollars. USDT Tron to USDT Ethereum: 523. USDC Ethereum to Arbitrum: 600. USDC Ethereum to Base: 600. USDT to USDC on Ethereum: 1,899. USDT Tron to USDC Ethereum: 2,121. No route at 1 million for USDC Solana to Ethereum (largest 510,000), USDC Ethereum to Solana (250,000) and USDT Tron to USDC Solana (250,000)."));
  console.log("wrote public/charts/stablecoin-1m-cost.svg");
}
