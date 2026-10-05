// Charts for the Shieldz Swap launch post (cross-chain-crypto-swap).
// 1) swap-app-fees.svg: service fee on a $1,000 swap, MetaMask vs Phantom vs Shieldz Swap
// 2) swap-route-race.svg: 1 ETH -> USDC on Base, what each protocol quoted (measured)
// 3) swap-quote-timeline.svg: 1 ETH -> BTC, when each protocol answered (measured)
// Measurements: live api.shieldz.cash/v1/quote/stream, 2026-10-06.
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

/* 2. 1 ETH -> USDC on Base, quote per protocol */
{
  const W = 860, H = 380;
  const rows = [
    { name: "NEAR Intents", note: "settles in ~47 s · picked", val: 2706.90, label: "2,706.90 USDC", good: true },
    { name: "Relay", note: "settles in ~2 s", val: 2704.87, label: "2,704.87 USDC" },
    { name: "THORChain", note: "settles in ~2.6 min", val: 2704.13, label: "2,704.13 USDC" },
  ];
  const body = hbars(rows, { W, top: 100, rowH: 74, labelW: 230, min: 2700, max: 2708 }) +
    `<text x="28" y="${H - 44}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">Same request, same second: the best and worst route differ by $2.77. Chainflip has no Base USDC route.</text>`;
  writeFileSync("public/charts/swap-route-race.svg", frame(W, H,
    "1 ETH to USDC on Base: three protocols, three prices",
    "USDC you would receive, after every fee, as quoted by each protocol (axis starts at 2,700)",
    "USDC out", "Measured on api.shieldz.cash, 2026-10-06. Quotes move every second; the gap is what matters.",
    body, "One ETH to USDC on Base, quoted by three protocols at the same moment: NEAR Intents 2,706.90 USDC, Relay 2,704.87 USDC, THORChain 2,704.13 USDC. NEAR Intents was picked."));
  console.log("wrote public/charts/swap-route-race.svg");
}

/* 3. 1 ETH -> BTC, when each protocol answered */
{
  const W = 860, H = 380, x0 = 200, plotW = W - x0 - 60, top = 104, rowH = 58, maxMs = 700;
  const xs = (ms) => x0 + (ms / maxMs) * plotW;
  const rows = [
    { name: "THORChain", ms: 398, note: "0.031501 BTC · ~42 s to settle", good: true },
    { name: "Chainflip", ms: 442, note: "0.031574 BTC · ~8 min to settle" },
    { name: "NEAR Intents", ms: 634, note: "0.031451 BTC · ~8 min to settle" },
  ];
  let grid = "";
  [0, 200, 400, 600].forEach((ms) => {
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
  const note = `<text x="28" y="${H - 44}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">The first route is on screen at 0.40 s. The race ends at 0.64 s; THORChain stays the pick because it settles 7 minutes sooner.</text>`;
  writeFileSync("public/charts/swap-quote-timeline.svg", frame(W, H,
    "1 ETH to BTC: quotes stream in as each protocol answers",
    "Time from request to each protocol's quote, as the swap form receives them",
    "seconds", "Measured on api.shieldz.cash/v1/quote/stream, 2026-10-06.",
    grid + bars + note, "One ETH to BTC: THORChain answered at 0.40 seconds with 0.031501 BTC settling in about 42 seconds, Chainflip at 0.44 seconds with 0.031574 BTC in about 8 minutes, NEAR Intents at 0.63 seconds with 0.031451 BTC in about 8 minutes. THORChain was picked for settling faster."));
  console.log("wrote public/charts/swap-quote-timeline.svg");
}
