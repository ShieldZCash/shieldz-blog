// Charts for the Shieldz Swap launch post (cross-chain-crypto-swap).
// 1) swap-app-fees.svg: service fee on a $1,000 swap, MetaMask vs Phantom vs Shieldz Swap
// 2) swap-route-race.svg: 1 ETH -> USDC on Arbitrum, what each protocol quoted (measured)
// 3) swap-quote-timeline.svg: 1 ETH -> USDC on Arbitrum, when each protocol answered (measured)
// Measurements: live swap.shieldz.cash/v1/quote/stream, 2026-10-07 (THORChain is switched off).
// Run: node scripts/gen-swap-app-charts.mjs
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

/* 1. Service fee on a $1,000 swap */
{
  const W = 860, H = 360;
  const rows = [
    { name: "MetaMask Swaps", note: "0.875% MetaMask fee, also on bridges", val: 8.75, label: "$8.75" },
    { name: "Phantom", note: "0.85% on select pairs, more cross-chain", val: 8.5, label: "$8.50" },
    { name: "Shieldz Swap", note: "0.15% on every route, shown per quote", val: 1.5, label: "$1.50", good: true },
  ];
  const body = hbars(rows, { W, top: 100, rowH: 70, labelW: 270, max: 9.5 });
  writeFileSync("public/charts/swap-app-fees.svg", frame(W, H,
    "Service fee on a $1,000 swap",
    "What the app itself charges. Protocol, liquidity and network costs come on top for all three.",
    "USD", "Sources: MetaMask Swaps user guide, Phantom Help Center, swap.shieldz.cash/terms (October 2026)",
    body, "Service fee on a 1,000 dollar swap: MetaMask Swaps 8.75 dollars (0.875 percent), Phantom 8.50 dollars (0.85 percent on select pairs), Shieldz Swap 1.50 dollars (0.15 percent on every route)."));
  console.log("wrote public/charts/swap-app-fees.svg");
}

/* 2. 1 ETH -> USDC on Arbitrum, quote per protocol */
{
  const W = 860, H = 380;
  const rows = [
    { name: "Chainflip", note: "settles in ~2.7 min · picked", val: 2594.00, label: "2,594.00 USDC", good: true },
    { name: "NEAR Intents", note: "settles in ~46 s", val: 2588.55, label: "2,588.55 USDC" },
    { name: "Relay", note: "settles in ~24 s", val: 2587.86, label: "2,587.86 USDC" },
  ];
  const body = hbars(rows, { W, top: 100, rowH: 74, labelW: 230, min: 2584, max: 2596 }) +
    `<text x="28" y="${H - 44}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">Same request, same second: the best and worst route differ by $6.14, four times the whole Shieldz fee.</text>`;
  writeFileSync("public/charts/swap-route-race.svg", frame(W, H,
    "1 ETH to USDC on Arbitrum: three protocols, three prices",
    "USDC you would receive, after every fee, as quoted by each protocol (axis starts at 2,584)",
    "USDC out", "Measured on swap.shieldz.cash, 2026-10-07. Quotes move every second; the gap is what matters.",
    body, "One ETH to USDC on Arbitrum, quoted by three protocols at the same moment: Chainflip 2,594.00 USDC, NEAR Intents 2,588.55 USDC, Relay 2,587.86 USDC. Chainflip was picked."));
  console.log("wrote public/charts/swap-route-race.svg");
}

/* 3. 1 ETH -> USDC on Arbitrum, when each protocol answered */
{
  const W = 860, H = 380, x0 = 200, plotW = W - x0 - 60, top = 104, rowH = 58, maxMs = 1000;
  const xs = (ms) => x0 + (ms / maxMs) * plotW;
  const rows = [
    { name: "Relay", ms: 670, note: "2,587.86 USDC · ~24 s to settle" },
    { name: "NEAR Intents", ms: 789, note: "2,588.55 USDC · ~46 s to settle" },
    { name: "Chainflip", ms: 837, note: "2,594.00 USDC · ~2.7 min to settle", good: true },
  ];
  let grid = "";
  [0, 250, 500, 750, 1000].forEach((ms) => {
    grid += `<line x1="${xs(ms)}" y1="${top - 8}" x2="${xs(ms)}" y2="${top + rows.length * rowH + 4}" stroke="${T.grid}"/>` +
      `<text x="${xs(ms)}" y="${top + rows.length * rowH + 22}" text-anchor="middle" font-size="11" fill="${T.faint}" font-family="${FONT}">${ms / 1000}s</text>`;
  });
  const bars = rows.map((r, i) => {
    const y = top + i * rowH;
    return `<text x="28" y="${y + 21}" font-size="15" font-weight="600" fill="${r.good ? T.ink : T.muted}" font-family="${FONT}">${r.name}</text>` +
      `<rect x="${x0}" y="${y + 4}" width="${(xs(r.ms) - x0).toFixed(1)}" height="26" rx="7" fill="${r.good ? "url(#g)" : T.bar}"/>` +
      `<text x="${(xs(r.ms) + 10).toFixed(1)}" y="${y + 22}" font-size="14" font-weight="700" fill="${r.good ? T.grnA : T.ink}" font-family="${FONT}">${(r.ms / 1000).toFixed(2)}s</text>` +
      `<text x="${x0}" y="${y + 46}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${r.note}</text>`;
  }).join("\n  ");
  const note = `<text x="28" y="${H - 44}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">The first route is on screen at 0.67 s. The race ends at 0.85 s; Chainflip, last to answer, pays the most and is picked.</text>`;
  writeFileSync("public/charts/swap-quote-timeline.svg", frame(W, H,
    "1 ETH to USDC on Arbitrum: quotes stream in as each protocol answers",
    "Time from request to each protocol's quote, as the swap form receives them",
    "seconds", "Measured on swap.shieldz.cash, 2026-10-07.",
    grid + bars + note, "One ETH to USDC on Arbitrum: Relay answered at 0.67 seconds with 2,587.86 USDC settling in about 24 seconds, NEAR Intents at 0.79 seconds with 2,588.55 USDC in about 46 seconds, Chainflip at 0.84 seconds with 2,594.00 USDC in about 2.7 minutes. Chainflip was picked."));
  console.log("wrote public/charts/swap-quote-timeline.svg");
}
