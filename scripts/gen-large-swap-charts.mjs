// Charts for the large-swap post (large-crypto-swaps-500k).
// 1) large-swap-fees.svg: each app's own fee on a $1,000,000 swap, in dollars
// Fees: each wallet's published swap fee (sources in crypto-swap-fees-compared),
// Shieldz's 0.05% tier from $500,000 on NEAR Intents and Relay. Checked 2026-10-13.
// Run: node scripts/gen-large-swap-charts.mjs
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

/* 1. App fee on a $1M swap */
{
  const W = 860, H = 470, x0 = 250, plotW = W - x0 - 110, top = 96, rowH = 56, max = 10_000;
  const xs = (s) => x0 + (s / max) * plotW;
  const rows = [
    { name: "Base app", note: "up to 1%", fee: 10_000, prefix: "up to " },
    { name: "MetaMask", note: "0.875%", fee: 8_750 },
    { name: "Phantom", note: "0.85% on select pairs", fee: 8_500 },
    { name: "Rabby", note: "0.25%", fee: 2_500 },
    { name: "Shieldz Swap", note: "0.05% from $500,000", fee: 500, ours: true },
  ];
  const bottom = top + rows.length * rowH - 6;
  const bars = rows.map((r, i) => {
    const y = top + i * rowH;
    const w = Math.max(6, xs(r.fee) - x0);
    return `<text x="28" y="${y + 18}" font-size="15" font-weight="600" fill="${r.ours ? T.ink : T.muted}" font-family="${FONT}">${r.name}</text>` +
      `<text x="28" y="${y + 36}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${r.note}</text>` +
      `<rect x="${x0}" y="${y + 4}" width="${w.toFixed(1)}" height="30" rx="8" fill="${r.ours ? "url(#g)" : T.bar}"/>` +
      `<text x="${(x0 + w + 10).toFixed(1)}" y="${y + 24}" font-size="13" font-weight="${r.ours ? 700 : 600}" fill="${r.ours ? T.grnA : T.muted}" font-family="${FONT}">${r.prefix ?? ""}${usd(r.fee)}</text>`;
  }).join("\n  ");
  writeFileSync("public/charts/large-swap-fees.svg", frame(W, H,
    "What the app takes from a $1,000,000 swap",
    "The app's own fee only, in dollars. Protocol, liquidity and network costs come on top for every app.",
    "USD", "Published swap fees, checked 2026-10-13. Shieldz: 0.05% on NEAR Intents and Relay routes; Chainflip routes stay 0.15%.",
    axis(xs, top - 8, bottom, [0, 2500, 5000, 7500, 10000], (t) => usd(t)) + bars,
    "App fee on a 1,000,000 dollar swap: Base app up to 10,000 dollars, MetaMask 8,750, Phantom 8,500 on select pairs, Rabby 2,500, Shieldz Swap 500."));
  console.log("wrote public/charts/large-swap-fees.svg");
}
