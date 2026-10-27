// Charts for shieldz-swaps-chainflip-ecosystem. Run: node scripts/gen-chainflip-ecosystem-charts.mjs
// Numbers are live router quotes from swap.shieldz.cash, 27 October 2026, 16:05 UTC.
import { mkdirSync, writeFileSync } from "node:fs";

const T = {
  bg: "#161616", line: "#262626", grid: "#242424",
  ink: "#fafafa", muted: "#9c9c9c", faint: "#777777",
  green: "#2fb573", greenLight: "#57d497", bar: "#3a3a3a",
};
const FONT = "ui-sans-serif,system-ui,sans-serif";

function frame({ W, H, title, subtitle, unit, source, body, legend = "" }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${title}. ${subtitle}">
  <defs>
    <linearGradient id="gGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${T.greenLight}"/>
      <stop offset="1" stop-color="${T.green}"/>
    </linearGradient>
    <linearGradient id="gGradH" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${T.green}"/>
      <stop offset="1" stop-color="${T.greenLight}"/>
    </linearGradient>
  </defs>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <text x="30" y="38" font-size="20" font-weight="700" fill="${T.ink}" font-family="${FONT}">${title}</text>
  <text x="30" y="60" font-size="13" fill="${T.faint}" font-family="${FONT}">${subtitle}</text>
  <text x="${W - 26}" y="38" text-anchor="end" font-size="12" font-weight="600" fill="${T.green}" font-family="${FONT}">${unit}</text>
  ${legend}${body}
  <text x="30" y="${H - 16}" font-size="11" fill="${T.faint}" font-family="${FONT}">${source}</text>
  <text x="${W - 26}" y="${H - 16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${FONT}">shieldz.cash</text>
</svg>
`;
}

// Two bars per pair: Chainflip (green) and NEAR Intents (gray).
function groupedChart({ title, subtitle, unit, source, data, fmt }) {
  const W = 760, H = 420;
  const M = { top: 96, right: 26, bottom: 70, left: 30 };
  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
  const yTop = Math.max(...data.flatMap((d) => [d.a, d.b])) * 1.18;
  const slot = plotW / data.length, barW = Math.min(52, slot * 0.3);
  let grid = "";
  for (let i = 0; i <= 4; i++) {
    const y = M.top + (plotH * i) / 4;
    grid += `<line x1="${M.left}" y1="${y}" x2="${W - M.right}" y2="${y}" stroke="${T.grid}"/>\n  `;
  }
  const bar = (x, v, best) => {
    const h = Math.max((v / yTop) * plotH, 4), y = M.top + plotH - h;
    return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="6" fill="${best ? "url(#gGrad)" : T.bar}"/>
    <text x="${(x + barW / 2).toFixed(1)}" y="${(y - 9).toFixed(1)}" text-anchor="middle" font-size="14" font-weight="700" fill="${best ? T.greenLight : T.ink}" font-family="${FONT}">${fmt(v)}</text>`;
  };
  const bars = data.map((d, i) => {
    const cx = M.left + slot * i + slot / 2;
    return `${bar(cx - barW - 3, d.a, true)}
    ${bar(cx + 3, d.b, false)}
    <text x="${cx}" y="${M.top + plotH + 24}" text-anchor="middle" font-size="13" fill="${T.muted}" font-family="${FONT}">${d.label}</text>`;
  }).join("\n    ");
  const legend = `<rect x="30" y="72" width="12" height="12" rx="3" fill="url(#gGrad)"/><text x="48" y="82" font-size="12" fill="${T.muted}" font-family="${FONT}">Chainflip</text>
  <rect x="120" y="72" width="12" height="12" rx="3" fill="${T.bar}"/><text x="138" y="82" font-size="12" fill="${T.muted}" font-family="${FONT}">NEAR Intents</text>\n  `;
  return frame({ W, H, title, subtitle, unit, source, legend, body: grid + bars });
}

// One horizontal bar per fee line.
function hbarChart({ title, subtitle, unit, source, data, fmt }) {
  const W = 760, H = 400;
  const M = { top: 92, right: 150, bottom: 56, left: 250 };
  const plotW = W - M.left - M.right, rowH = (H - M.top - M.bottom) / data.length;
  const max = Math.max(...data.map((d) => d.value));
  const rows = data.map((d, i) => {
    const y = M.top + rowH * i, bh = Math.min(26, rowH * 0.62), by = y + (rowH - bh) / 2;
    const w = Math.max((d.value / max) * plotW, 4);
    return `<text x="${M.left - 14}" y="${(by + bh / 2 + 5).toFixed(1)}" text-anchor="end" font-size="13" fill="${d.best ? T.greenLight : T.muted}" font-weight="${d.best ? 700 : 400}" font-family="${FONT}">${d.label}</text>
    <rect x="${M.left}" y="${by.toFixed(1)}" width="${w.toFixed(1)}" height="${bh.toFixed(1)}" rx="6" fill="${d.best ? "url(#gGradH)" : T.bar}"/>
    <text x="${(M.left + w + 10).toFixed(1)}" y="${(by + bh / 2 + 5).toFixed(1)}" font-size="14" font-weight="700" fill="${d.best ? T.greenLight : T.ink}" font-family="${FONT}">${fmt(d)}</text>`;
  }).join("\n    ");
  return frame({ W, H, title, subtitle, unit, source, body: rows });
}

const source = "Live quotes from swap.shieldz.cash, 27 Oct 2026, 16:05 UTC. Times are the protocols' own estimates.";

const settle = groupedChart({
  title: "Same swap, same moment: minutes to settle",
  subtitle: "Chainflip's estimate against NEAR Intents' on four native BTC routes",
  unit: "Estimated minutes",
  source,
  fmt: (v) => v.toFixed(1),
  data: [
    { label: "0.1 BTC to USDC (Eth)", a: 414 / 60, b: 814 / 60 },
    { label: "0.1 BTC to USDC (Arb)", a: 408 / 60, b: 804 / 60 },
    { label: "1 ETH to BTC", a: 462 / 60, b: 490 / 60 },
    { label: "10 SOL to BTC", a: 469 / 60, b: 467 / 60 },
  ],
});

// Fee lines Chainflip itself returned for 0.1 BTC to ETH ($8,049.38 in).
const fees = hbarChart({
  title: "Where the fees go on 0.1 BTC to ETH via Chainflip",
  subtitle: "Every fee line in Chainflip's own quote for a $8,049 swap, in US dollars",
  unit: "USD, total $24.59 (0.31%)",
  source: "Chainflip quote via swap.shieldz.cash, 27 Oct 2026. The broker line is the 0.15% Shieldz service fee.",
  fmt: (d) => `$${d.value.toFixed(2)}${d.pct ? `  ${d.pct}` : ""}`,
  data: [
    { label: "Broker (Shieldz fee)", value: 12.07, pct: "0.15%", best: true },
    { label: "Chainflip network fee", value: 8.05, pct: "0.10%" },
    { label: "Boost (faster BTC credit)", value: 4.02, pct: "0.05%" },
    { label: "Bitcoin deposit (ingress)", value: 0.31 },
    { label: "ETH payout (egress gas)", value: 0.14 },
  ],
});

mkdirSync("public/charts", { recursive: true });
writeFileSync("public/charts/chainflip-settle-times.svg", settle);
writeFileSync("public/charts/chainflip-fee-lines.svg", fees);
console.log("wrote 2 charts");
