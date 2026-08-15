// One-off generator for the two SVG charts embedded in the
// "Crypto Payments for AI Agents" post. Dark theme to match the blog.
// Run: node scripts/gen-charts.mjs   (writes public/charts/*.svg)
import { mkdirSync, writeFileSync } from "node:fs";

const THEME = {
  bg: "#161616",
  line: "#262626",
  grid: "#222222",
  ink: "#fafafa",
  muted: "#9c9c9c",
  faint: "#777777",
  accent: "#f5361c",
  accentLight: "#ff9e8c",
};

// Bar chart → SVG string. data: [{label, value}], fmt formats the value label.
function barChart({ title, subtitle, data, unit, fmt }) {
  const W = 760, H = 400;
  const M = { top: 78, right: 24, bottom: 56, left: 30 };
  const plotW = W - M.left - M.right;
  const plotH = H - M.top - M.bottom;
  const max = Math.max(...data.map((d) => d.value));
  const yTop = max * 1.12; // headroom for value labels
  const slot = plotW / data.length;
  const barW = Math.min(64, slot * 0.56);

  const grid = [];
  const nLines = 4;
  for (let i = 0; i <= nLines; i++) {
    const y = M.top + (plotH * i) / nLines;
    grid.push(
      `<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${(W - M.right).toFixed(1)}" y2="${y.toFixed(1)}" stroke="${THEME.grid}" stroke-width="1"/>`,
    );
  }

  const bars = data
    .map((d, i) => {
      const cx = M.left + slot * i + slot / 2;
      const x = cx - barW / 2;
      const h = (d.value / yTop) * plotH;
      const y = M.top + plotH - h;
      const label = fmt(d.value);
      return `
    <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" rx="6" fill="url(#barGrad)"/>
    <text x="${cx.toFixed(1)}" y="${(y - 10).toFixed(1)}" text-anchor="middle" font-size="15" font-weight="700" fill="${THEME.ink}" font-family="ui-sans-serif,system-ui,sans-serif">${label}</text>
    <text x="${cx.toFixed(1)}" y="${(M.top + plotH + 26).toFixed(1)}" text-anchor="middle" font-size="13" fill="${THEME.muted}" font-family="ui-sans-serif,system-ui,sans-serif">${d.label}</text>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${title}. ${subtitle}">
  <defs>
    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${THEME.accentLight}"/>
      <stop offset="1" stop-color="${THEME.accent}"/>
    </linearGradient>
  </defs>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="16" fill="${THEME.bg}" stroke="${THEME.line}"/>
  <text x="${M.left}" y="36" font-size="20" font-weight="700" fill="${THEME.ink}" font-family="ui-sans-serif,system-ui,sans-serif">${title}</text>
  <text x="${M.left}" y="58" font-size="13" fill="${THEME.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${subtitle}</text>
  <text x="${W - M.right}" y="36" text-anchor="end" font-size="12" font-weight="600" fill="${THEME.accent}" font-family="ui-sans-serif,system-ui,sans-serif">${unit}</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="${W - M.right}" y="${H - 14}" text-anchor="end" font-size="11" fill="${THEME.faint}" font-family="ui-sans-serif,system-ui,sans-serif">shieldz.cash</text>
</svg>
`;
}

// Chart 1 — AI agent market size, $B. Anchors: 2024 ~$5.1B, 2030 ~$47.1B
// (MarketsandMarkets), ~45% CAGR interpolated between.
const aiAgents = barChart({
  title: "The AI agent market is going vertical",
  subtitle: "Global AI agents market size, ~45% CAGR",
  unit: "USD billions",
  data: [
    { label: "2024", value: 5.1 },
    { label: "2025", value: 7.4 },
    { label: "2026", value: 10.7 },
    { label: "2027", value: 15.5 },
    { label: "2028", value: 22.5 },
    { label: "2029", value: 32.5 },
    { label: "2030", value: 47.1 },
  ],
  fmt: (v) => `$${v.toFixed(1)}B`,
});

// Chart 2 — Stablecoin transfer volume, $ trillions (adjusted for bots/MEV).
// Directional figures from Visa Onchain Analytics / Artemis.
const stablecoins = barChart({
  title: "Crypto is already a payments rail",
  subtitle: "Adjusted stablecoin transfer volume per year",
  unit: "USD trillions",
  data: [
    { label: "2020", value: 0.5 },
    { label: "2021", value: 2.9 },
    { label: "2022", value: 7.4 },
    { label: "2023", value: 9.4 },
    { label: "2024", value: 15.6 },
  ],
  fmt: (v) => `$${v.toFixed(1)}T`,
});

mkdirSync("public/charts", { recursive: true });
writeFileSync("public/charts/ai-agent-market-growth.svg", aiAgents);
writeFileSync("public/charts/stablecoin-payment-volume.svg", stablecoins);
console.log("wrote public/charts/ai-agent-market-growth.svg + stablecoin-payment-volume.svg");
