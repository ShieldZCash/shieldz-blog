// Charts for the Shieldz Swap speed post (how-fast-is-shieldz-swap).
// 1) swap-speed-quotes.svg: five pairs, first route on screen vs every protocol answered (measured)
// 2) swap-speed-balances.svg: one wallet's balances across 23 EVM chains, as they stream in (measured)
// 3) swap-speed-page.svg: a cold page load, from request to a live route on screen (measured)
// Measurements: live swap.shieldz.cash from Istanbul, 2026-10-10. Medians of 3 runs per pair
// (quotes), 4 runs (balances, cold page loads in a fresh browser context each time).
// Run: node scripts/gen-swap-speed-charts.mjs
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

/* 1. Quotes: first route vs all protocols, five pairs */
{
  const W = 860, H = 500, x0 = 250, plotW = W - x0 - 90, top = 96, rowH = 60, max = 1;
  const xs = (s) => x0 + (s / max) * plotW;
  const rows = [
    { name: "1 ETH → USDC", note: "Ethereum to Arbitrum · 3 routes", first: 0.31, done: 0.48 },
    { name: "1,000 USDC → ETH", note: "Base to Ethereum · 2 routes", first: 0.43, done: 0.59 },
    { name: "0.1 BTC → ETH", note: "Bitcoin to Ethereum · 2 routes", first: 0.38, done: 0.59 },
    { name: "500 USDC → SOL", note: "Ethereum to Solana · 2 routes", first: 0.36, done: 0.59 },
    { name: "0.5 ETH → ETH", note: "Arbitrum to Base · 2 routes", first: 0.48, done: 0.66 },
  ];
  const bottom = top + rows.length * rowH - 6;
  const bars = rows.map((r, i) => {
    const y = top + i * rowH;
    return `<text x="28" y="${y + 18}" font-size="15" font-weight="600" fill="${T.ink}" font-family="${FONT}">${r.name}</text>` +
      `<text x="28" y="${y + 36}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${r.note}</text>` +
      `<rect x="${x0}" y="${y + 4}" width="${(xs(r.done) - x0).toFixed(1)}" height="30" rx="8" fill="${T.bar}"/>` +
      `<rect x="${x0}" y="${y + 4}" width="${(xs(r.first) - x0).toFixed(1)}" height="30" rx="8" fill="url(#g)"/>` +
      `<text x="${(xs(r.first) - 8).toFixed(1)}" y="${y + 24}" text-anchor="end" font-size="13" font-weight="700" fill="#0d2a1c" font-family="${FONT}">${r.first.toFixed(2)}s</text>` +
      `<text x="${(xs(r.done) + 10).toFixed(1)}" y="${y + 24}" font-size="13" font-weight="600" fill="${T.muted}" font-family="${FONT}">${r.done.toFixed(2)}s</text>`;
  }).join("\n  ");
  const legend =
    `<rect x="28" y="${H - 70}" width="14" height="14" rx="4" fill="url(#g)"/><text x="48" y="${H - 58}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">First route on screen</text>` +
    `<rect x="200" y="${H - 70}" width="14" height="14" rx="4" fill="${T.bar}"/><text x="220" y="${H - 58}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">Every protocol has answered</text>`;
  writeFileSync("public/charts/swap-speed-quotes.svg", frame(W, H,
    "From typing an amount to a real price: under a second",
    "Time from quote request to the first route, and to the last protocol's answer (median of 3 runs)",
    "seconds", "Measured against live swap.shieldz.cash from Istanbul, 2026-10-10. 15 runs, slowest full race 0.76 s.",
    axis(xs, top - 8, bottom, [0, 0.25, 0.5, 0.75, 1], (t) => `${t}s`) + bars + legend,
    "Quote speed for five pairs, median of three runs. 1 ETH to USDC: first route 0.31 seconds, all routes 0.48. 1,000 USDC to ETH: 0.43 and 0.59. 0.1 BTC to ETH: 0.38 and 0.59. 500 USDC to SOL: 0.36 and 0.59. 0.5 ETH Arbitrum to Base: 0.48 and 0.66."));
  console.log("wrote public/charts/swap-speed-quotes.svg");
}

/* 2. Balances across 23 EVM chains */
{
  const W = 860, H = 360, x0 = 250, plotW = W - x0 - 90, top = 104, rowH = 60, max = 1.2;
  const xs = (s) => x0 + (s / max) * plotW;
  const rows = [
    { name: "First chain's balances", note: "on screen while the rest load", s: 0.12, good: true },
    { name: "Half the chains", note: "12 of 23 chains in", s: 0.16, good: true },
    { name: "All 23 chains", note: "74 holdings, none failed", s: 1.0 },
  ];
  const bottom = top + rows.length * rowH - 6;
  const bars = rows.map((r, i) => {
    const y = top + i * rowH;
    return `<text x="28" y="${y + 18}" font-size="15" font-weight="600" fill="${r.good ? T.ink : T.muted}" font-family="${FONT}">${r.name}</text>` +
      `<text x="28" y="${y + 36}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${r.note}</text>` +
      `<rect x="${x0}" y="${y + 4}" width="${Math.max(6, xs(r.s) - x0).toFixed(1)}" height="30" rx="8" fill="${r.good ? "url(#g)" : T.bar}"/>` +
      `<text x="${(Math.max(x0 + 6, xs(r.s)) + 10).toFixed(1)}" y="${y + 24}" font-size="14" font-weight="700" fill="${r.good ? T.grnA : T.ink}" font-family="${FONT}">${r.s.toFixed(2)}s</text>`;
  }).join("\n  ");
  writeFileSync("public/charts/swap-speed-balances.svg", frame(W, H,
    "A wallet's balances on 23 chains, streamed in about a second",
    "One public EVM wallet (vitalik.eth), scanned across every EVM chain Shieldz Swap supports (median of 4 runs)",
    "seconds", "Measured against live swap.shieldz.cash, 2026-10-10. Each chain's balances are shown the moment that chain answers.",
    axis(xs, top - 8, bottom, [0, 0.25, 0.5, 0.75, 1], (t) => `${t}s`) + bars,
    "Balance scan of one wallet across 23 EVM chains: the first chain's balances arrive at 0.12 seconds, half the chains by 0.16 seconds, and all 23 chains with 74 holdings by about 1.0 second."));
  console.log("wrote public/charts/swap-speed-balances.svg");
}

/* 3. Cold page load to a live route */
{
  const W = 860, H = 360, x0 = 250, plotW = W - x0 - 90, top = 104, rowH = 60, max = 1.25;
  const xs = (s) => x0 + (s / max) * plotW;
  const rows = [
    { name: "Server answers", note: "first byte of the page", s: 0.15 },
    { name: "Page painted", note: "swap form visible", s: 0.37 },
    { name: "Live route on screen", note: "a real quote, not a placeholder", s: 1.12, good: true },
  ];
  const bottom = top + rows.length * rowH - 6;
  const bars = rows.map((r, i) => {
    const y = top + i * rowH;
    return `<text x="28" y="${y + 18}" font-size="15" font-weight="600" fill="${r.good ? T.ink : T.muted}" font-family="${FONT}">${r.name}</text>` +
      `<text x="28" y="${y + 36}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${r.note}</text>` +
      `<rect x="${x0}" y="${y + 4}" width="${(xs(r.s) - x0).toFixed(1)}" height="30" rx="8" fill="${r.good ? "url(#g)" : T.bar}"/>` +
      `<text x="${(xs(r.s) + 10).toFixed(1)}" y="${y + 24}" font-size="14" font-weight="700" fill="${r.good ? T.grnA : T.ink}" font-family="${FONT}">${r.s.toFixed(2)}s</text>`;
  }).join("\n  ");
  writeFileSync("public/charts/swap-speed-page.svg", frame(W, H,
    "Opening swap.shieldz.cash cold: a live price in just over a second",
    "Empty browser cache, desktop Chromium, median of 4 loads (466 KB transferred)",
    "seconds", "Measured 2026-10-10 from Istanbul, a fresh browser context for every load.",
    axis(xs, top - 8, bottom, [0, 0.25, 0.5, 0.75, 1, 1.25], (t) => `${t}s`) + bars,
    "Cold page load of swap.shieldz.cash: first byte at 0.15 seconds, page painted at 0.37 seconds, a live route on screen at 1.12 seconds."));
  console.log("wrote public/charts/swap-speed-page.svg");
}
