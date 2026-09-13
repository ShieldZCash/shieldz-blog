// Chart for "custodial-vs-non-custodial-crypto-payment-gateways" post.
// Reads scripts/data/gateways-sep-2026.csv (same live-dataset snapshot the
// September comparison post uses), computes real cross-tabs by custody
// model, writes one grouped-bar SVG to public/charts/. Neither side is
// highlighted in brand green: this chart is not a Shieldz-favorable ranking,
// it is a neutral custodial-vs-non-custodial comparison.
// Run: node scripts/gen-custody-comparison-chart.mjs
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777" };
const COL_CUSTODIAL = "#3a3a3a";
const COL_NONCUSTODIAL = "#6b6b6b";
const FONT = "ui-sans-serif,system-ui,sans-serif";
const MONO = "Menlo,ui-monospace,monospace";

const parseCsv = (text) => {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else inQuotes = false; }
      else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else if (c === "\r") { /* skip */ }
    else field += c;
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  const header = rows[0];
  return rows.slice(1).filter(r => r.length === header.length && r.some(v => v !== "")).map(r => {
    const o = {}; header.forEach((h, i) => { o[h] = r[i]; }); return o;
  });
};

const raw = parseCsv(readFileSync("scripts/data/gateways-sep-2026.csv", "utf8"));
const bool = (v) => v === "true";
const gw = raw.map(r => ({
  name: r.name, fee_pct: Number(r.fee_pct), custody: r.custody, kyc: r.kyc,
  settlement_fiat: bool(r.settlement_fiat),
}));

const median = (arr) => {
  const s = [...arr].sort((a,b)=>a-b);
  const mid = Math.floor(s.length/2);
  return s.length % 2 ? s[mid] : (s[mid-1]+s[mid])/2;
};

const custodial = gw.filter(g => g.custody === "custodial");
const noncustodial = gw.filter(g => g.custody === "non-custodial");
const N = gw.length;

const stat = (group) => ({
  n: group.length,
  medianFee: median(group.map(g=>g.fee_pct)),
  kycRequiredPct: Math.round(group.filter(g=>g.kyc==="required").length / group.length * 100),
  fiatPct: Math.round(group.filter(g=>g.settlement_fiat).length / group.length * 100),
});
const sc = stat(custodial), snc = stat(noncustodial);

const metrics = [
  { label: "Median fee", unit: "%", c: sc.medianFee, nc: snc.medianFee, max: 1.6, fmt: (v)=>v===0?"0%":v+"%" },
  { label: "Require KYC", unit: "%", c: sc.kycRequiredPct, nc: snc.kycRequiredPct, max: 100, fmt: (v)=>v+"%" },
  { label: "Settle to fiat", unit: "%", c: sc.fiatPct, nc: snc.fiatPct, max: 100, fmt: (v)=>v+"%" },
];

const W = 760, H = 460;
const M = { top: 92, right: 40, bottom: 70, left: 40 };
const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
const groupW = plotW / metrics.length;
const barW = 64, barGap = 14;

let body = "";
// gridlines (4 horizontal guides)
for (let i = 0; i <= 4; i++) {
  const y = M.top + plotH - (i/4)*plotH;
  body += `<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}" stroke-width="1"/>`;
}

metrics.forEach((m, i) => {
  const gx = M.left + i*groupW + groupW/2;
  const cx = gx - barGap/2 - barW;
  const ncx = gx + barGap/2;
  const ch = Math.max((m.c/m.max)*plotH, 4);
  const nch = Math.max((m.nc/m.max)*plotH, 4);
  const cy = M.top + plotH - ch;
  const ncy = M.top + plotH - nch;
  body += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${barW}" height="${ch.toFixed(1)}" rx="6" fill="${COL_CUSTODIAL}"/>`;
  body += `<text x="${(cx+barW/2).toFixed(1)}" y="${(cy-10).toFixed(1)}" text-anchor="middle" font-size="15" font-weight="700" fill="${T.ink}" font-family="${FONT}">${m.fmt(m.c)}</text>`;
  body += `<rect x="${ncx.toFixed(1)}" y="${ncy.toFixed(1)}" width="${barW}" height="${nch.toFixed(1)}" rx="6" fill="${COL_NONCUSTODIAL}"/>`;
  body += `<text x="${(ncx+barW/2).toFixed(1)}" y="${(ncy-10).toFixed(1)}" text-anchor="middle" font-size="15" font-weight="700" fill="${T.ink}" font-family="${FONT}">${m.fmt(m.nc)}</text>`;
  body += `<text x="${gx.toFixed(1)}" y="${(M.top+plotH+28).toFixed(1)}" text-anchor="middle" font-size="13" fill="${T.muted}" font-family="${FONT}">${m.label}</text>`;
});

// legend
const legendY = 66;
body += `<rect x="${M.left}" y="${legendY-11}" width="14" height="14" rx="3" fill="${COL_CUSTODIAL}"/>`;
body += `<text x="${M.left+20}" y="${legendY}" font-size="13" fill="${T.muted}" font-family="${FONT}">Custodial (n=${sc.n})</text>`;
body += `<rect x="${M.left+170}" y="${legendY-11}" width="14" height="14" rx="3" fill="${COL_NONCUSTODIAL}"/>`;
body += `<text x="${M.left+190}" y="${legendY}" font-size="13" fill="${T.muted}" font-family="${FONT}">Non-custodial (n=${snc.n})</text>`;

const title = `Custodial vs non-custodial, ${N} crypto payment gateways`;
const sub = `Median fee, share requiring KYC, share settling to fiat. September 2026 dataset.`;
const label = `Grouped bar chart comparing custodial and non-custodial crypto payment gateways in September 2026: median fee ${sc.medianFee}% vs ${snc.medianFee}%, ${sc.kycRequiredPct}% vs ${snc.kycRequiredPct}% require KYC, ${sc.fiatPct}% vs ${snc.fiatPct}% settle to fiat.`;

const svg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${label}">\n` +
  `<rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>` +
  `<text x="${M.left}" y="34" font-size="20" font-weight="700" fill="${T.ink}" font-family="${FONT}">${title}</text>` +
  `<text x="${M.left}" y="52" font-size="13" fill="${T.faint}" font-family="${FONT}">${sub}</text>` +
  body +
  `<text x="${W-M.right}" y="${H-15}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${MONO}">shieldz.cash · crypto-payment-gateways-dataset, Sep 2026</text>` +
  `\n</svg>\n`;

mkdirSync("public/charts", { recursive: true });
writeFileSync("public/charts/custody-vs-noncustody-bars.svg", svg);
console.log("custodial n=%d median fee=%s%% kyc-required=%d%% fiat=%d%%", sc.n, sc.medianFee, sc.kycRequiredPct, sc.fiatPct);
console.log("non-custodial n=%d median fee=%s%% kyc-required=%d%% fiat=%d%%", snc.n, snc.medianFee, snc.kycRequiredPct, snc.fiatPct);
console.log("wrote public/charts/custody-vs-noncustody-bars.svg");
