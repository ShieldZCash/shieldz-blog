// Charts for the payment-link posts. Run: node scripts/gen-payment-link-charts.mjs
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
const source = "Published US rates: PayPal 3.49%+49¢, Stripe 2.9%+30¢, Coinbase Commerce 1%.";

const perSale = barChart({
  title: "Fees on one $35 payment link sale",
  subtitle: "Processor fee taken from a single $35 order",
  unit: "USD fee per sale",
  fmt: usd,
  source,
  data: [
    { label: "PayPal", value: 1.71 },
    { label: "Stripe", value: 1.32 },
    { label: "Coinbase Commerce", value: 0.35 },
    { label: "Shieldz", value: 0, best: true },
  ],
});

const perMonth = barChart({
  title: "Fees on 100 orders of $35 a month",
  subtitle: "What a small shop selling through chat pays its processor each month",
  unit: "USD fees per month",
  fmt: usd,
  source,
  data: [
    { label: "PayPal", value: 171.15 },
    { label: "Stripe", value: 131.5 },
    { label: "Coinbase Commerce", value: 35 },
    { label: "Shieldz", value: 0, best: true },
  ],
});

mkdirSync("public/charts", { recursive: true });
writeFileSync("public/charts/payment-link-fee-per-sale.svg", perSale);
writeFileSync("public/charts/social-seller-monthly-fees.svg", perMonth);
console.log("wrote 2 charts");
