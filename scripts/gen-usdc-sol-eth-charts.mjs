// Charts for the USDC (Solana) to ETH guide.
// Data: scripts/data/usdc-sol-to-eth-quotes-2026-10-28.json (live swap.shieldz.cash/v1/quote/stream).
// Run: node scripts/gen-usdc-sol-eth-charts.mjs
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

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


const D = JSON.parse(readFileSync("scripts/data/usdc-sol-to-eth-quotes-2026-10-28.json", "utf8"));
const ETH = D.px.ethereum.usd;
const NAME = { near: "NEAR Intents", chainflip: "Chainflip" };
const CHAIN = { "ETH.ETH": "Ethereum", "BASE.ETH": "Base", "ARB.ETH": "Arbitrum" };
const secs = (s) => (s < 90 ? `~${s} s` : `~${Math.round(s / 60)} min`);
const find = (d, a) => D.res.find((r) => r.o === "SOL.USDC" && r.d === d && r.a === a);
const cost = (r, x) => r.a - x.out * ETH;

/* 1. $1,000 USDC on Solana to ETH, every route */
{
  const rows = [];
  for (const d of ["ETH.ETH", "ARB.ETH", "BASE.ETH"])
    for (const x of find(d, 1000).routes) rows.push({ c: cost(find(d, 1000), x), name: `${NAME[x.p]} → ${CHAIN[d]}`, note: `ETH on ${CHAIN[d]} · settles ${secs(x.sec)}`, out: x.out });
  rows.sort((a, b) => a.c - b.c);
  const bars = rows.map((r, i) => ({ name: r.name, note: r.note, val: r.c, label: `$${r.c.toFixed(2)} · ${r.out.toFixed(4)} ETH`, good: i === 0 }));
  const W = 860, H = 140 + bars.length * 62 + 40;
  const body = hbars(bars, { W, top: 96, rowH: 62, labelW: 270, max: 7.5 }) +
    `<text x="28" y="${H - 40}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">$1,000 in minus the ETH out at $${ETH.toLocaleString("en-US")}. Includes the 0.15% Shieldz fee ($1.50), protocol fees and delivery gas.</text>`;
  writeFileSync("public/charts/usdc-sol-to-eth-routes.svg", frame(W, H,
    "1,000 USDC on Solana to ETH: what each route costs",
    "Every route the router got back, quoted at the same moment, all fees included",
    "USD", `Measured on swap.shieldz.cash, ${D.t.slice(0, 16).replace("T", " ")} UTC. ETH price: CoinGecko, same minute. Relay had no route for Solana USDC.`,
    body, "Cost of swapping 1,000 USDC on Solana to ETH, all fees included: " + rows.map((r) => `${r.name} ${r.c.toFixed(2)} dollars`).join(", ") + "."));
  console.log("routes:", rows.map((r) => `${r.name} ${r.c.toFixed(2)}`).join(" | "));
}

/* 2. Cost as a share of the swap, by size */
{
  const W = 860, groups = [100, 1000, 10000], rowH = 40, gap = 34, top = 104, labelW = 210;
  const x0 = 28 + labelW, plotW = W - x0 - 200, max = 1.0;
  let body = "", y = top, alt = [];
  for (const a of groups) {
    const r = find("ETH.ETH", a);
    const best = [...r.routes].sort((p, q) => cost(r, p) - cost(r, q))[0];
    body += `<text x="28" y="${y + 22}" font-size="16" font-weight="700" fill="${T.ink}" font-family="${FONT}">$${a.toLocaleString("en-US")}</text>`;
    for (const p of ["near", "chainflip"]) {
      const x = r.routes.find((q) => q.p === p), pct = (cost(r, x) / a) * 100, good = x === best, w = Math.max(4, (pct / max) * plotW);
      body += `<text x="${x0 - 12}" y="${y + 19}" text-anchor="end" font-size="12" fill="${good ? T.ink : T.muted}" font-family="${FONT}">${NAME[p]}</text>` +
        `<rect x="${x0}" y="${y + 4}" width="${w.toFixed(1)}" height="22" rx="6" fill="${good ? "url(#g)" : T.bar}"/>` +
        `<text x="${(x0 + w + 10).toFixed(1)}" y="${y + 20}" font-size="14" font-weight="700" fill="${good ? T.grnA : T.ink}" font-family="${FONT}">${pct.toFixed(2)}% · $${cost(r, x).toFixed(2)} · ${secs(x.sec)}</text>`;
      alt.push(`$${a} via ${NAME[p]} ${pct.toFixed(2)}%`);
      y += rowH;
    }
    y += gap;
  }
  const H = y + 50;
  body += `<text x="28" y="${H - 40}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">Chainflip's network fee has a $0.50 floor, so it loses at $100. NEAR Intents adds a 0.20% fee of its own, so it loses above that.</text>`;
  writeFileSync("public/charts/usdc-sol-to-eth-by-size.svg", frame(W, H,
    "USDC on Solana to ETH on Ethereum: cost by swap size",
    "All-in cost as a share of the amount, cheapest route highlighted",
    "% of swap", `Measured on swap.shieldz.cash, ${D.t.slice(0, 16).replace("T", " ")} UTC. ETH price: CoinGecko, same minute.`,
    body, "All-in cost of swapping USDC on Solana to ETH on Ethereum by size: " + alt.join(", ") + "."));
  console.log("sizes:", alt.join(" | "));
}
