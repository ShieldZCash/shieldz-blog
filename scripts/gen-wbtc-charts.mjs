// Charts for the WBTC to BTC post (wbtc-to-btc).
// 1) wbtc-to-btc-cost.svg: all-in cost of WBTC (Ethereum) -> native BTC, by size and route
// Measurements: live swap.shieldz.cash quotes, 2026-10-14. Cost = 1 - BTC out / WBTC in,
// every fee included (Shieldz, protocol, Bitcoin outbound). Missing bar = no quote.
// Run: node scripts/gen-wbtc-charts.mjs
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

/* 1. All-in cost by size, Chainflip vs NEAR Intents */
{
  const W = 860, H = 560, x0 = 200, plotW = W - x0 - 110, top = 100, rowH = 52, max = 1.25;
  const xs = (s) => x0 + (s / max) * plotW;
  const rows = [
    { name: "0.01 WBTC", cf: null, near: 0.61 },
    { name: "0.1 WBTC", cf: 0.49, near: 0.45 },
    { name: "0.5 WBTC", cf: 0.47, near: 0.72 },
    { name: "1 WBTC", cf: 0.48, near: 0.72 },
    { name: "5 WBTC", cf: 0.47, near: 0.72 },
    { name: "7 WBTC", cf: 0.50, near: 1.20 },
    { name: "10 WBTC", cf: null, near: null },
  ];
  const bottom = top + rows.length * rowH - 6;
  const bar = (x, y, v, fill, best) => v == null
    ? `<text x="${x0 + 8}" y="${y + 12}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">no quote</text>`
    : `<rect x="${x0}" y="${y}" width="${Math.max(4, xs(v) - x0).toFixed(1)}" height="16" rx="5" fill="${fill}"/>` +
      `<text x="${(xs(v) + 8).toFixed(1)}" y="${y + 13}" font-size="12" font-weight="${best ? 700 : 500}" fill="${best ? T.grnA : T.muted}" font-family="${FONT}">${v.toFixed(2)}%</text>`;
  const bars = rows.map((r, i) => {
    const y = top + i * rowH;
    const best = r.cf != null && (r.near == null || r.cf < r.near) ? "cf" : r.near != null ? "near" : null;
    if (r.cf == null && r.near == null)
      return `<text x="28" y="${y + 24}" font-size="15" font-weight="600" fill="${T.muted}" font-family="${FONT}">${r.name}</text>` +
        `<text x="${x0 + 8}" y="${y + 24}" font-size="12.5" fill="${T.faint}" font-family="${FONT}">no route had liquidity</text>`;
    return `<text x="28" y="${y + 24}" font-size="15" font-weight="600" fill="${T.ink}" font-family="${FONT}">${r.name}</text>` +
      bar(x0, y + 2, r.cf, best === "cf" ? "url(#g)" : T.bar, best === "cf") +
      bar(x0, y + 22, r.near, best === "near" ? "url(#g)" : "#2c2c2c", best === "near");
  }).join("\n  ");
  const legend =
    `<text x="28" y="${H - 58}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">Top bar: Chainflip · bottom bar: NEAR Intents · green: the route that delivers more BTC</text>`;
  writeFileSync("public/charts/wbtc-to-btc-cost.svg", frame(W, H,
    "WBTC to native BTC: what it costs, all-in",
    "Share of your WBTC that does not arrive as BTC, every fee included, by swap size and route",
    "% of amount", "Live swap.shieldz.cash quotes, 2026-10-14. WBTC on Ethereum to Bitcoin. Relay does not route native BTC.",
    axis(xs, top - 8, bottom, [0, 0.25, 0.5, 0.75, 1, 1.25], (t) => `${t}%`) + bars + legend,
    "All-in cost of swapping WBTC to BTC. 0.01 WBTC: NEAR Intents 0.61 percent, no Chainflip quote. 0.1: Chainflip 0.49, NEAR 0.45. 0.5: 0.47 and 0.72. 1: 0.48 and 0.72. 5: 0.47 and 0.72. 7: 0.50 and 1.20. 10 WBTC: no route had liquidity."));
  console.log("wrote public/charts/wbtc-to-btc-cost.svg");
}
