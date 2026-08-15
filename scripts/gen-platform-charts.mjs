// Charts for the WooCommerce / GiveWP / EDD platform posts. Dark theme to
// match the blog. Run: node scripts/gen-platform-charts.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = {
  bg: "#161616", line: "#262626", grid: "#242424",
  ink: "#fafafa", muted: "#9c9c9c", faint: "#777777",
  green: "#2fb573", greenLight: "#57d497", bar: "#3a3a3a",
};

// Vertical bar chart. data: [{label, value, best?}]. fmt formats value labels.
// `best` bars render green (the Shieldz-favourable outcome); others gray.
function barChart({ title, subtitle, unit, data, fmt, source }) {
  const W = 760, H = 420;
  const M = { top: 82, right: 26, bottom: 64, left: 30 };
  const plotW = W - M.left - M.right;
  const plotH = H - M.top - M.bottom;
  const max = Math.max(...data.map((d) => d.value));
  const yTop = max * 1.16;
  const slot = plotW / data.length;
  const barW = Math.min(78, slot * 0.54);

  let grid = "";
  for (let i = 0; i <= 4; i++) {
    const y = M.top + (plotH * i) / 4;
    grid += `<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${(W - M.right).toFixed(1)}" y2="${y.toFixed(1)}" stroke="${T.grid}" stroke-width="1"/>\n  `;
  }

  const bars = data.map((d, i) => {
    const cx = M.left + slot * i + slot / 2;
    const x = cx - barW / 2;
    const h = Math.max((d.value / yTop) * plotH, 4);
    const y = M.top + plotH - h;
    const fill = d.best ? "url(#gGrad)" : T.bar;
    const labelFill = d.best ? T.greenLight : T.ink;
    return `
    <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" rx="7" fill="${fill}"/>
    <text x="${cx.toFixed(1)}" y="${(y - 11).toFixed(1)}" text-anchor="middle" font-size="16" font-weight="700" fill="${labelFill}" font-family="ui-sans-serif,system-ui,sans-serif">${fmt(d.value)}</text>
    <text x="${cx.toFixed(1)}" y="${(M.top + plotH + 26).toFixed(1)}" text-anchor="middle" font-size="13" font-weight="${d.best ? 700 : 400}" fill="${d.best ? T.greenLight : T.muted}" font-family="ui-sans-serif,system-ui,sans-serif">${d.label}</text>`;
  }).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${title}. ${subtitle}">
  <defs>
    <linearGradient id="gGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${T.greenLight}"/>
      <stop offset="1" stop-color="${T.green}"/>
    </linearGradient>
  </defs>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <text x="${M.left}" y="38" font-size="20" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">${title}</text>
  <text x="${M.left}" y="60" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${subtitle}</text>
  <text x="${W - M.right}" y="38" text-anchor="end" font-size="12" font-weight="600" fill="${T.green}" font-family="ui-sans-serif,system-ui,sans-serif">${unit}</text>
  ${grid}${bars}
  <text x="${M.left}" y="${H - 16}" font-size="11" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${source}</text>
  <text x="${W - M.right}" y="${H - 16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">shieldz.cash</text>
</svg>
`;
}

const usd = (v) => "$" + v.toFixed(2);
const pct = (v) => v.toFixed(1) + "%";

// 1 — WooCommerce: net kept on a $50 sale after processor fees.
const woo = barChart({
  title: "What you keep on a $50 sale",
  subtitle: "Net received after payment-processor fees",
  unit: "USD received",
  fmt: usd,
  source: "Published US rates: Stripe 2.9%+30¢, PayPal 3.49%+49¢, Coinbase Commerce 1%.",
  data: [
    { label: "PayPal", value: 47.76 },
    { label: "Stripe", value: 48.25 },
    { label: "Coinbase Commerce", value: 49.50 },
    { label: "Shieldz", value: 50.00, best: true },
  ],
});

// 2 — GiveWP: how much of a $100 donation reaches the cause.
const give = barChart({
  title: "How much of a $100 donation reaches your cause",
  subtitle: "Amount left after processing fees",
  unit: "USD to the cause",
  fmt: usd,
  source: "Nonprofit rates: cards ~2.2%+30¢, PayPal Giving Fund 1.99%. Shieldz: 0% platform fee.",
  data: [
    { label: "Credit card", value: 97.50 },
    { label: "PayPal", value: 98.01 },
    { label: "Shieldz", value: 100.00, best: true },
  ],
});

// 3 — EDD: chargeback / dispute exposure by payment type (digital goods).
const edd = barChart({
  title: "Chargebacks on digital goods, by payment type",
  subtitle: "Disputes are common on cards; crypto settlements are final",
  unit: "dispute rate",
  fmt: pct,
  source: "Directional: card-not-present digital-goods disputes run ~0.7–1%+. On-chain settlement is irreversible → 0.",
  data: [
    { label: "Credit card", value: 0.9 },
    { label: "PayPal", value: 0.6 },
    { label: "Shieldz (crypto)", value: 0.0, best: true },
  ],
});

mkdirSync("public/charts", { recursive: true });
writeFileSync("public/charts/woo-net-received.svg", woo);
writeFileSync("public/charts/donation-reach.svg", give);
writeFileSync("public/charts/digital-chargebacks.svg", edd);
console.log("wrote 3 platform charts to public/charts/");
