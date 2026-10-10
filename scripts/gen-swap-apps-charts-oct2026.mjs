// Charts for the 81-cross-chain-swap-apps-compared post, built from the dataset
// itself (public/data/cross-chain-swaps-2026.json) so a chart can never disagree
// with the table.
// 1) swapapps-fee-transparency.svg: share of apps in each category with a fee we could verify
// 2) swapapps-fee-ranking.svg: every verified fee, lowest first
// 3) swapapps-fee-by-category.svg: median verified fee per category
// 4) swapapps-custody.svg: custody model per category
// 5) swapapps-protocol-usage.svg: how many apps route through each protocol
// 6) swapapps-same-route.svg: what apps add on top of the same NEAR Intents route
// Run: node scripts/gen-swap-apps-charts-oct2026.mjs
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", bar:"#3a3a3a", grnA:"#57d497", grnB:"#2fb573", red:"#f5361c", amber:"#d99a2b" };
const FONT = "ui-sans-serif,system-ui,sans-serif";
const MONO = "Menlo,ui-monospace,monospace";
mkdirSync("public/charts", { recursive: true });

const data = JSON.parse(readFileSync("public/data/cross-chain-swaps-2026.json", "utf8"));
const active = data.apps.filter((a) => a.status === "active");
const median = (xs) => { const s = [...xs].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const LABEL = { aggregator: "Aggregators", wallet: "Wallets", frontend: "THORChain/Maya front-ends", "instant-exchange": "Instant exchanges", "exchange-aggregator": "Exchange comparison sites" };
const SOURCE = `Shieldz cross-chain swap dataset v${data.version}, ${data.updated}. Fees from official pages only.`;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

const frame = (W, H, title, sub, unit, body, aria) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(aria)}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${T.grnB}"/><stop offset="1" stop-color="${T.grnA}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="${T.grnB}"/>
  <text x="28" y="44" font-size="20" font-weight="700" fill="${T.ink}" font-family="${FONT}">${esc(title)}</text>
  <text x="28" y="66" font-size="13" fill="${T.faint}" font-family="${FONT}">${esc(sub)}</text>
  <text x="${W - 28}" y="44" text-anchor="end" font-size="13" font-weight="600" fill="${T.grnA}" font-family="${FONT}">${unit}</text>
  ${body}
  <text x="28" y="${H - 16}" font-size="11" fill="${T.faint}" font-family="${FONT}">${esc(SOURCE)}</text>
  <text x="${W - 28}" y="${H - 16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${MONO}">shieldz.cash</text>
</svg>
`;

/** Horizontal bars: rows of { name, note, val, label, good, warn }. */
function hbars(rows, { W, top, rowH, labelW, max, barH = 26, nameSize = 15 }) {
  const x0 = 28 + labelW, plotW = W - x0 - 130;
  return rows.map((r, i) => {
    const y = top + i * rowH;
    const w = Math.max(3, (r.val / max) * plotW);
    const fill = r.good ? "url(#g)" : r.warn ? T.red : T.bar;
    const ty = y + barH / 2 + 5;
    return `<text x="28" y="${r.note ? y + 14 : ty}" font-size="${nameSize}" font-weight="600" fill="${r.good ? T.ink : T.muted}" font-family="${FONT}">${esc(r.name)}</text>` +
      (r.note ? `<text x="28" y="${y + 31}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${esc(r.note)}</text>` : "") +
      `<rect x="${x0}" y="${y}" width="${w.toFixed(1)}" height="${barH}" rx="7" fill="${fill}"/>` +
      `<text x="${(x0 + w + 10).toFixed(1)}" y="${ty}" font-size="14" font-weight="700" fill="${r.good ? T.grnA : T.ink}" font-family="${FONT}">${esc(r.label)}</text>`;
  }).join("\n  ");
}

const write = (name, svg) => { writeFileSync(`public/charts/${name}.svg`, svg); console.log(`wrote public/charts/${name}.svg`); };
const cats = Object.keys(LABEL);

/* 1. Fee transparency by category, stacked: verified stated fee / not certain (route-only) / not published or unverifiable */
{
  const KINDS = [["verified", T.grnB, "States a fee we verified"], ["route-only", T.amber, "No fee of its own: cost set by the route (not certain)"], ["other", T.bar, "No rate published, or not verifiable"]];
  const kind = (a) => (a.verified ? "verified" : a.fee_type === "route-only" ? "route-only" : "other");
  const rows = cats.map((c) => ({ c, all: active.filter((a) => a.category === c) }))
    .sort((a, b) => a.all.filter((x) => x.verified).length / a.all.length - b.all.filter((x) => x.verified).length / b.all.length);
  const W = 860, x0 = 318, plotW = W - x0 - 60, top = 100, rowH = 50, H = top + rows.length * rowH + 112;
  let body = rows.map((r, i) => {
    const y = top + i * rowH; let x = x0;
    const segs = KINDS.map(([k, color]) => {
      const n = r.all.filter((a) => kind(a) === k).length; if (!n) return "";
      const w = (n / r.all.length) * plotW;
      const s = `<rect x="${x.toFixed(1)}" y="${y}" width="${w.toFixed(1)}" height="28" fill="${color}"/>` +
        (w > 26 ? `<text x="${(x + w / 2).toFixed(1)}" y="${y + 19}" text-anchor="middle" font-size="12.5" font-weight="700" fill="${k === "other" ? T.ink : "#0e0e0e"}" font-family="${FONT}">${n}</text>` : "");
      x += w; return s;
    }).join("");
    return `<text x="28" y="${y + 19}" font-size="15" font-weight="600" fill="${T.muted}" font-family="${FONT}">${esc(LABEL[r.c])} (${r.all.length})</text>` + segs;
  }).join("\n  ");
  body += KINDS.map(([, color, label], i) => `<rect x="28" y="${H - 96 + i * 20}" width="14" height="14" rx="3" fill="${color}"/><text x="48" y="${H - 84 + i * 20}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">${esc(label)}</text>`).join("");
  const n = (k) => active.filter((a) => kind(a) === k).length;
  write("swapapps-fee-transparency", frame(W, H, "Only 3 in 10 cross-chain swap apps state a fee you can check",
    `All ${active.length} active apps: ${n("verified")} verified fees, ${n("route-only")} not certain, ${n("other")} unpublished or unverifiable`, "apps", body,
    `Fee transparency by category across ${active.length} cross-chain swap apps: ${rows.map((r) => `${LABEL[r.c]}: ${r.all.filter((a) => kind(a) === "verified").length} verified, ${r.all.filter((a) => kind(a) === "route-only").length} not certain, ${r.all.filter((a) => kind(a) === "other").length} unpublished`).join("; ")}.`));
}

/* 2. Every verified fee, lowest first */
{
  const rows = active.filter((a) => a.verified).sort((a, b) => a.fee_pct - b.fee_pct || a.name.localeCompare(b.name));
  const routeOnly = active.filter((a) => a.fee_type === "route-only").length;
  const W = 860, rowH = 27, top = 92, H = top + rows.length * rowH + 84;
  const body = hbars(rows.map((a) => ({ name: a.name, val: Math.max(a.fee_pct, 0.004), label: `${a.fee_pct}%`, good: a.name === "Shieldz Swap", warn: a.fee_pct >= 1 })),
    { W, top, rowH, labelW: 200, max: 2.1, barH: 19, nameSize: 13.5 }) +
    `<text x="28" y="${H - 44}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">Not ranked: ${routeOnly} apps that claim no fee of their own. Their cost is set by the route and is not certain until quoted.</text>`;
  write("swapapps-fee-ranking", frame(W, H, `The ${rows.length} verified fees, lowest to highest`,
    "The fixed fee each app adds on a standard cross-chain swap. Protocol fees and gas come on top for every app.", "fee %", body,
    `Verified cross-chain swap fees, lowest first: ${rows.map((a) => `${a.name} ${a.fee_pct}%`).join(", ")}.`));
}

/* 3. Median verified fee by category */
{
  const rows = cats.map((c) => {
    const f = active.filter((a) => a.category === c && a.verified).map((a) => a.fee_pct);
    return { c, n: f.length, med: f.length ? median(f) : 0 };
  }).filter((r) => r.n > 0).sort((a, b) => b.med - a.med);
  const W = 860, H = 140 + rows.length * 58 + 40;
  const body = hbars(rows.map((r) => ({ name: LABEL[r.c], note: `median of ${r.n} verified fees`, val: Math.max(r.med, 0.01), label: `${r.med}%`, good: r.c === "aggregator", warn: r.med >= 0.8 })), { W, top: 96, rowH: 58, labelW: 290, max: 1 }) +
    `<text x="28" y="${H - 44}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">Exchange comparison sites state no fee of their own (cost is the exchange's), so they have no median here.</text>`;
  write("swapapps-fee-by-category", frame(W, H, "Wallets charge the most for a cross-chain swap",
    "Median of the verified fees in each category", "median %", body,
    `Median verified cross-chain swap fee by category: ${rows.map((r) => `${LABEL[r.c]} ${r.med}%`).join(", ")}.`));
}

/* 4. Custody per category, stacked */
{
  const KINDS = [["non-custodial", T.grnB, "Non-custodial"], ["hybrid", T.amber, "Hybrid (depends on route)"], ["custodial", T.red, "Custodial during the swap"]];
  const rows = cats.map((c) => ({ c, all: active.filter((a) => a.category === c) }));
  const W = 860, x0 = 318, plotW = W - x0 - 60, top = 100, rowH = 50, H = top + rows.length * rowH + 90;
  let body = rows.map((r, i) => {
    const y = top + i * rowH; let x = x0;
    const segs = KINDS.map(([k, color]) => {
      const n = r.all.filter((a) => a.custody === k).length; if (!n) return "";
      const w = (n / r.all.length) * plotW; const s = `<rect x="${x.toFixed(1)}" y="${y}" width="${w.toFixed(1)}" height="28" fill="${color}"/>` +
        (w > 26 ? `<text x="${(x + w / 2).toFixed(1)}" y="${y + 19}" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0e0e0e" font-family="${FONT}">${n}</text>` : "");
      x += w; return s;
    }).join("");
    return `<text x="28" y="${y + 19}" font-size="15" font-weight="600" fill="${T.muted}" font-family="${FONT}">${esc(LABEL[r.c])} (${r.all.length})</text>` + segs;
  }).join("\n  ");
  body += KINDS.map(([, color, label], i) => `<rect x="${28 + i * 250}" y="${H - 66}" width="14" height="14" rx="3" fill="${color}"/><text x="${48 + i * 250}" y="${H - 54}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">${label}</text>`).join("");
  const c = (k) => active.filter((a) => a.custody === k).length;
  write("swapapps-custody", frame(W, H, "Who holds your coins while the swap is in flight",
    `All ${active.length} active apps: ${c("non-custodial")} non-custodial, ${c("hybrid")} hybrid, ${c("custodial")} custodial`, "apps", body,
    `Custody model by category across ${active.length} cross-chain swap apps: ${c("non-custodial")} non-custodial, ${c("hybrid")} hybrid, ${c("custodial")} custodial.`));
}

/* 5. Protocol usage */
{
  const PROTOS = [["THORChain", /thorchain/i], ["NEAR Intents", /near intents/i], ["Chainflip", /chainflip/i], ["LI.FI", /li\.fi/i], ["Maya", /\bmaya\b/i], ["Relay", /\brelay\b/i], ["Changelly", /changelly/i], ["ChangeNOW", /changenow/i], ["1inch", /1inch/i], ["Across", /\bacross\b/i]];
  const rows = PROTOS.map(([n, re]) => ({ n, k: active.filter((a) => re.test(a.routes_via || "")).length })).sort((a, b) => b.k - a.k);
  const W = 860, rowH = 40, top = 96, H = top + rows.length * rowH + 64;
  const body = hbars(rows.map((r) => ({ name: r.n, val: r.k, label: `${r.k} apps`, good: r.k === rows[0].k })), { W, top, rowH, labelW: 170, max: rows[0].k * 1.1, barH: 24 });
  write("swapapps-protocol-usage", frame(W, H, "A few protocols carry most of the market",
    `How many of the ${active.length} apps name each protocol or exchange among their routes`, "apps", body,
    `Number of cross-chain swap apps routing through each provider: ${rows.map((r) => `${r.n} ${r.k}`).join(", ")}.`));
}

/* 6. Same NEAR Intents route, different price */
{
  const near = active.filter((a) => a.verified && /near intents/i.test(a.routes_via || ""))
    .sort((a, b) => (a.name === "KyberSwap" ? 0.2 : a.fee_pct) - (b.name === "KyberSwap" ? 0.2 : b.fee_pct));
  const rows = [{ name: "NEAR Intents protocol", note: "on-chain protocol fee", val: 0.004, label: "0.0001%" }]
    // KyberSwap's NEAR <-> EVM tier is 0.1-0.2%; its row holds the EVM-EVM common rate.
    .concat(near.map((a) => a.name === "KyberSwap"
      ? { name: a.name, note: "aggregator, NEAR route tier", val: 0.2, label: "0.1-0.2%" }
      : { name: a.name, note: a.category, val: a.fee_pct, label: `${a.fee_pct}%`, good: a.name === "Shieldz Swap", warn: a.fee_pct >= 1 }));
  const W = 860, rowH = 50, top = 96, H = top + rows.length * rowH + 70;
  const body = hbars(rows, { W, top, rowH, labelW: 230, max: 1.6 }) +
    `<text x="28" y="${H - 44}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">The protocol's cut is a rounding error. Almost everything you pay is the app's markup.</text>`;
  write("swapapps-same-route", frame(W, H, "Same protocol underneath, very different price on top",
    "Apps with a verified fee that route swaps through NEAR Intents", "fee %", body,
    `Fees on top of NEAR Intents' 0.0001% protocol fee: ${near.map((a) => `${a.name} ${a.name === "KyberSwap" ? "0.1-0.2" : a.fee_pct}%`).join(", ")}.`));
}
