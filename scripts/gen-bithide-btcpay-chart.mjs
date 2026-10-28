// Chart for bithide-vs-btcpay-server: feature matrix from each project's own site, 2026-10-28.
// Run: node scripts/gen-bithide-btcpay-chart.mjs
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


{
  const rows = [
    ["Open-source code", "audit and fork it", [0, "Proprietary"], [1, "MIT license"]],
    ["Published price", "know the cost before talking to sales", [0, "Quote on request"], [1, "Free"]],
    ["USDT and USDC built in", "ERC-20, TRC-20, BEP-20", [1, "Yes"], [0, "Bitcoin-first; altcoins via plugins"]],
    ["Lightning", "instant small BTC payments", [0, "No"], [1, "Yes"]],
    ["Watch-only setup possible", "no spending keys on the server", [0, "Keys stored on your server"], [1, "Yes, with an xpub"]],
    ["AML screening built in", "score incoming and outgoing flows", [1, "Yes, via providers"], [0, "Not built in"]],
    ["Bulk payouts", "pay many addresses at once", [1, "Yes"], [1, "Yes, via payouts (hot wallet)"]],
  ];
  const W = 860, top = 120, rowH = 52, H = top + rows.length * rowH + 64, cx1 = 330, cx2 = 590;
  let body = `<text x="${cx1}" y="${top - 18}" font-size="13" font-weight="700" fill="${T.ink}" font-family="${FONT}">BitHide</text>` +
    `<text x="${cx2}" y="${top - 18}" font-size="13" font-weight="700" fill="${T.ink}" font-family="${FONT}">BTCPay Server</text>`;
  const mark = (x, y, ok, txt) => (ok
    ? `<circle cx="${x + 10}" cy="${y + 18}" r="10" fill="url(#g)"/><path d="M${x + 5} ${y + 18} l3.5 3.5 l6.5 -7" stroke="#0d2a1c" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
    : `<circle cx="${x + 10}" cy="${y + 18}" r="10" fill="none" stroke="${T.bar}" stroke-width="1.8"/><path d="M${x + 6} ${y + 18} h8" stroke="${T.muted}" stroke-width="2" stroke-linecap="round"/>`) +
    `<text x="${x + 28}" y="${y + 23}" font-size="12.5" fill="${ok ? T.ink : T.muted}" font-family="${FONT}">${txt}</text>`;
  rows.forEach(([name, note, a, b], i) => {
    const y = top + i * rowH;
    body += `<line x1="28" y1="${y - 4}" x2="${W - 28}" y2="${y - 4}" stroke="${T.grid}"/>` +
      `<text x="28" y="${y + 18}" font-size="14.5" font-weight="600" fill="${T.ink}" font-family="${FONT}">${name}</text>` +
      `<text x="28" y="${y + 35}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${note}</text>` +
      mark(cx1, y, a[0], a[1]) + mark(cx2, y, b[0], b[1]);
  });
  body += `<text x="28" y="${H - 40}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">Both run on your own server and keep custody with you. They are built for different businesses.</text>`;
  writeFileSync("public/charts/bithide-vs-btcpay-features.svg", frame(W, H,
    "BitHide vs BTCPay Server: what each one gives you",
    "Self-hosted crypto payment software, feature by feature",
    "self-hosted", "Sources: bithide.io and btcpayserver.org / docs.btcpayserver.org, checked 2026-10-28.",
    body, "Feature comparison. BitHide: proprietary, quote on request, USDT and USDC built in, no Lightning, keys stored on your server, AML screening built in via providers, bulk payouts. BTCPay Server: MIT open source, free, Bitcoin-first with altcoins via plugins, Lightning, watch-only xpub setup possible, no built-in AML screening, payouts via a hot wallet."));
  console.log("wrote public/charts/bithide-vs-btcpay-features.svg");
}
