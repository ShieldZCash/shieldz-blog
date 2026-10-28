// Charts for the self-hosted payment gateway (cards and crypto) post.
// 1) self-hosted-pg-fee-per-order.svg: fee on a $50 order, list-rate math
// 2) self-hosted-pg-layers.svg: which layers of a payment you can self-host
// Run: node scripts/gen-self-hosted-payment-gateway-charts.mjs
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


/* 1. Fee on a $50 order */
{
  const order = 50, stripe = order * 0.029 + 0.3, paypal = order * 0.0349 + 0.49;
  const usd = (v) => `$${v.toFixed(2)}`;
  const rows = [
    { name: "OwnPay → PayPal", note: "self-hosted · PayPal 3.49% + 49¢", val: paypal, label: usd(paypal) },
    { name: "Stripe Checkout", note: "hosted · 2.9% + 30¢", val: stripe, label: usd(stripe) },
    { name: "Hyperswitch → Stripe", note: "self-hosted orchestration · Stripe still charges", val: stripe, label: usd(stripe) },
    { name: "Kill Bill → Stripe", note: "self-hosted billing · Stripe still charges", val: stripe, label: usd(stripe) },
    { name: "BTCPay Server", note: "self-hosted crypto · no processor", val: 0, label: "$0 + network fee", good: true },
    { name: "Shieldz", note: "hosted, non-custodial crypto", val: 0, label: "$0 + network fee", good: true },
  ];
  const W = 860, H = 96 + rows.length * 62 + 70;
  const body = hbars(rows, { W, top: 96, rowH: 62, labelW: 290, max: 2.6 }) +
    `<text x="28" y="${H - 40}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">Self-hosting the software removes license and platform fees. On cards, the processor's fee stays; only crypto has no processor.</text>`;
  writeFileSync("public/charts/self-hosted-pg-fee-per-order.svg", frame(W, H,
    "What a $50 order costs through each option",
    "Payment fee per order at US list rates, before your own server costs",
    "USD", "Sources: stripe.com/pricing (2.9% + 30¢), paypal.com merchant fees (3.49% + 49¢). Crypto network fees are paid by the buyer.",
    body, `Fee on a 50 dollar order: OwnPay through PayPal ${usd(paypal)}, Stripe Checkout ${usd(stripe)}, Hyperswitch self-hosted routing to Stripe ${usd(stripe)}, Kill Bill to Stripe ${usd(stripe)}, BTCPay Server 0 dollars plus network fee, Shieldz 0 dollars plus network fee.`));
  console.log("wrote public/charts/self-hosted-pg-fee-per-order.svg");
}

/* 2. Which layers can you self-host? */
{
  const layers = [
    ["Checkout page", "the form the buyer sees", [1, "Yes, with hosted fields to stay in SAQ A"], [1, "Yes"]],
    ["Routing and orchestration", "which processor gets the payment", [1, "Yes (Hyperswitch)"], [1, "Yes"]],
    ["Card vault or keys", "where the secret lives", [1, "Yes, but PCI DSS becomes yours"], [1, "Yes, your own wallet"]],
    ["Processor and acquirer", "who moves and settles the money", [0, "No: licensed bank or processor"], [1, "Not needed: you watch the chain"]],
    ["Network", "card scheme or blockchain", [0, "No: Visa, Mastercard rules"], [1, "Public, open to anyone"]],
  ];
  const W = 860, top = 120, rowH = 58, H = top + layers.length * rowH + 64, cx1 = 330, cx2 = 600;
  let body = `<text x="${cx1}" y="${top - 18}" font-size="13" font-weight="700" fill="${T.ink}" font-family="${FONT}">Card payments</text>` +
    `<text x="${cx2}" y="${top - 18}" font-size="13" font-weight="700" fill="${T.ink}" font-family="${FONT}">Crypto payments</text>`;
  const mark = (x, y, ok, txt) => (ok
    ? `<circle cx="${x + 10}" cy="${y + 20}" r="10" fill="url(#g)"/><path d="M${x + 5} ${y + 20} l3.5 3.5 l6.5 -7" stroke="#0d2a1c" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
    : `<circle cx="${x + 10}" cy="${y + 20}" r="10" fill="none" stroke="#a05050" stroke-width="1.8"/><path d="M${x + 6} ${y + 16} l8 8 M${x + 14} ${y + 16} l-8 8" stroke="#c46a6a" stroke-width="2" stroke-linecap="round"/>`) +
    `<text x="${x + 28}" y="${y + 25}" font-size="12.5" fill="${ok ? T.ink : T.muted}" font-family="${FONT}">${txt}</text>`;
  layers.forEach(([name, note, card, crypto], i) => {
    const y = top + i * rowH;
    body += `<line x1="28" y1="${y - 4}" x2="${W - 28}" y2="${y - 4}" stroke="${T.grid}"/>` +
      `<text x="28" y="${y + 20}" font-size="15" font-weight="600" fill="${T.ink}" font-family="${FONT}">${name}</text>` +
      `<text x="28" y="${y + 38}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${note}</text>` +
      mark(cx1, y, card[0], card[1]) + mark(cx2, y, crypto[0], crypto[1]);
  });
  body += `<text x="28" y="${H - 40}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">With cards you can self-host the software around the payment. With crypto you can self-host the payment itself.</text>`;
  writeFileSync("public/charts/self-hosted-pg-layers.svg", frame(W, H,
    "Which parts of a payment can you self-host?",
    "The layers every payment passes through, for cards and for crypto",
    "self-host?", "Shieldz analysis of PCI DSS scope and the Hyperswitch, Kill Bill and BTCPay Server architectures, October 2026.",
    body, "Which layers of a payment can be self-hosted. Cards: checkout page yes, routing yes, card vault yes but PCI DSS becomes yours, processor and acquirer no, card network no. Crypto: checkout yes, routing yes, keys yes, no processor needed, public blockchain open to anyone."));
  console.log("wrote public/charts/self-hosted-pg-layers.svg");
}
