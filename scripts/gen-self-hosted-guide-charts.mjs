// Charts for the self-hosted crypto payment gateways guide.
// Run: node scripts/gen-self-hosted-guide-charts.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", grn1:"#57d497", grn2:"#2fb573", bar:"#3a3a3a", box:"#1d1d1d", boxLine:"#3a3a3a" };
const F = "ui-sans-serif,system-ui,sans-serif";
const MONO = "Menlo,ui-monospace,monospace";
const defs = `<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.grn1}"/><stop offset="1" stop-color="${T.grn2}"/></linearGradient></defs>`;
const frame = (W, H) => `<rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#g)"/>`;
const esc = (s) => s.replace(/&/g, "&amp;");

mkdirSync("public/charts", { recursive: true });

// 1. Architecture: what runs where in a self-hosted gateway.
{
  const W = 920, H = 500;
  const node = (x, y, w, h, title, sub, hi = false) => `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${hi ? "#11291f" : T.box}" stroke="${hi ? T.grn1 : T.boxLine}" stroke-width="${hi ? 1.6 : 1}"/>
  <text x="${x + w/2}" y="${y + h/2 - 3}" text-anchor="middle" font-size="15" font-weight="700" fill="${T.ink}" font-family="${F}">${title}</text>
  <text x="${x + w/2}" y="${y + h/2 + 16}" text-anchor="middle" font-size="11.5" fill="${T.faint}" font-family="${F}">${sub}</text>`;
  const arrow = (x1, y1, x2, y2, label, color = T.boxLine, lx, ly) => {
    const a = Math.atan2(y2 - y1, x2 - x1), hx = x2 - 9 * Math.cos(a), hy = y2 - 9 * Math.sin(a);
    const p1 = `${(hx - 5 * Math.sin(a)).toFixed(1)},${(hy + 5 * Math.cos(a)).toFixed(1)}`;
    const p2 = `${(hx + 5 * Math.sin(a)).toFixed(1)},${(hy - 5 * Math.cos(a)).toFixed(1)}`;
    return `<line x1="${x1}" y1="${y1}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="${color}" stroke-width="1.6"/>
  <polygon points="${x2},${y2} ${p1} ${p2}" fill="${color}"/>
  ${label ? `<text x="${lx ?? (x1 + x2) / 2}" y="${ly ?? (y1 + y2) / 2 - 7}" text-anchor="middle" font-size="11" fill="${color === T.grn1 ? T.grn1 : T.muted}" font-family="${F}">${label}</text>` : ""}`;
  };
  // Server boundary
  const sx = 300, sy = 96, sw = 400, sh = 236;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Architecture of a self-hosted crypto payment gateway. Your store asks the gateway on your server for an invoice. The gateway derives a fresh address from your watch-only extended public key and shows it on the checkout. The customer pays from their wallet directly to your wallet on the blockchain. Your node or indexer sees the transaction, the gateway marks the invoice paid and sends a signed webhook to your store. Funds never pass through the server.">
  ${defs}
  ${frame(W, H)}
  <text x="30" y="40" font-size="20" font-weight="700" fill="${T.ink}" font-family="${F}">How a self-hosted crypto payment gateway works</text>
  <text x="30" y="62" font-size="13" fill="${T.faint}" font-family="${F}">The server coordinates and watches. The money moves wallet to wallet on-chain and never touches the box.</text>
  <rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" rx="16" fill="none" stroke="${T.boxLine}" stroke-dasharray="5 5"/>
  <text x="${sx + sw - 14}" y="${sy + 22}" text-anchor="end" font-size="11" font-weight="700" letter-spacing="0.08em" fill="${T.muted}" font-family="${F}">YOUR SERVER</text>
  ${node(sx + 20, sy + 36, 170, 70, "Gateway app", "invoices, checkout, API")}
  ${node(sx + 210, sy + 36, 170, 70, "Watch-only xpub", "derives a fresh address")}
  ${node(sx + 20, sy + 146, 360, 70, "Node or indexer", "full / pruned node, Electrum server, RPC")}
  ${node(24, 132, 170, 70, "Your store", "WooCommerce, API, POS")}
  ${node(24, 370, 170, 70, "Customer wallet", "pays the invoice")}
  ${node(730, 216, 166, 70, "Blockchain", "public ledger")}
  ${node(730, 370, 166, 70, "Your wallet", "keys stay offline", true)}
  ${arrow(194, 152, sx + 20, 152, "1. invoice", T.boxLine, 247, 144)}
  ${arrow(sx + 190, sy + 71, sx + 210, sy + 71)}
  ${arrow(sx + 20, 184, 194, 184, "4. paid webhook", T.boxLine, 247, 202)}
  ${arrow(sx + 380, sy + 181, 730, 251, "2. watch chain", T.boxLine, 813, 206)}
  ${arrow(194, 405, 730, 405, "3. payment goes wallet to wallet, never via the server", T.grn1, 462, 397)}
  ${arrow(813, 370, 813, 286)}
  <text x="822" y="332" font-size="11" fill="${T.muted}" font-family="${F}">settles on-chain</text>
  <text x="30" y="${H - 18}" font-size="11" fill="${T.faint}" font-family="${F}">Generic architecture of BTCPay-style gateways. Hot-wallet and Lightning setups add keys to the server.</text>
  <text x="${W - 30}" y="${H - 18}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${MONO}">shieldz.cash</text>
</svg>
`;
  writeFileSync("public/charts/self-hosted-architecture.svg", svg);
}

// 2. Annual cost of ownership at $10,000/month volume, $50 average order.
{
  // 240 orders/month, 2,880/year, $120,000/year.
  // Stripe 2.9% + $0.30: 3,480 + 864 = 4,344
  // Custodial crypto processor at 1%: 1,200
  // Self-hosted: $20/mo VPS = 240 + 2 h/mo upkeep at $50/h = 1,200 -> 1,440 (illustrative)
  // Shieldz: $0 platform fee; buyer pays network gas.
  const vol = 120000, orders = 2880;
  const data = [
    { name: "Card processor", fee: vol * 0.029 + orders * 0.30, sub: "2.9% + $0.30 / order" },
    { name: "Custodial crypto", fee: vol * 0.01, sub: "1% / order" },
    { name: "Self-hosted", fee: 240 + 24 * 50, sub: "$240 VPS + 24 h upkeep" },
    { name: "Shieldz", fee: 0, sub: "$0 + buyer-paid gas", free: true },
  ];
  const W = 920, H = 470, M = { top: 86, right: 56, bottom: 104, left: 44 };
  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
  const yMax = 5000, slot = plotW / data.length, barW = Math.min(96, slot * 0.5);
  const grid = [];
  for (let i = 0; i <= 5; i++) {
    const y = M.top + plotH * i / 5, v = (yMax * (5 - i) / 5).toLocaleString("en-US");
    grid.push(`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W - M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/><text x="${W - M.right + 6}" y="${(y + 4).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="${F}">$${v}</text>`);
  }
  const bars = data.map((d, i) => {
    const cx = M.left + slot * i + slot / 2, x = cx - barW / 2;
    let h = (d.fee / yMax) * plotH; if (h < 4) h = 4;
    const y = M.top + plotH - h;
    const label = "$" + Math.round(d.fee).toLocaleString("en-US");
    return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="6" fill="${d.free ? "url(#g)" : T.bar}"/>
  <text x="${cx.toFixed(1)}" y="${(y - 10).toFixed(1)}" text-anchor="middle" font-size="16" font-weight="700" fill="${d.free ? T.grn1 : T.ink}" font-family="${F}">${label}</text>
  <text x="${cx.toFixed(1)}" y="${M.top + plotH + 22}" text-anchor="middle" font-size="13" font-weight="600" fill="${d.free ? T.ink : T.muted}" font-family="${F}">${d.name}</text>
  <text x="${cx.toFixed(1)}" y="${M.top + plotH + 40}" text-anchor="middle" font-size="11.5" fill="${T.faint}" font-family="${F}">${d.sub}</text>`;
  }).join("\n  ");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Illustrative annual cost of accepting payments at 10,000 dollars a month with a 50 dollar average order. Card processor 4,344 dollars, custodial crypto processor at 1 percent 1,200 dollars, self-hosted gateway 1,440 dollars from a 240 dollar server plus 24 hours of upkeep valued at 50 dollars an hour, Shieldz 0 dollars platform fee.">
  ${defs}
  ${frame(W, H)}
  <text x="${M.left}" y="38" font-size="20" font-weight="700" fill="${T.ink}" font-family="${F}">Annual cost at $10,000/month in sales</text>
  <text x="${M.left}" y="60" font-size="13" fill="${T.faint}" font-family="${F}">2,880 orders at $50. Self-hosted assumes a $20/mo VPS and 2 h/mo of upkeep at $50/h. Illustrative.</text>
  <text x="${W - 30}" y="38" text-anchor="end" font-size="13" font-weight="700" fill="${T.grn1}" font-family="${F}">USD / year</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="${M.left}" y="${H - 16}" font-size="11" fill="${T.faint}" font-family="${F}">Source: public list rates (Stripe US 2.9% + 30c). Network fees excluded for all crypto options.</text>
  <text x="${W - 30}" y="${H - 16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${MONO}">shieldz.cash</text>
</svg>
`;
  writeFileSync("public/charts/self-hosted-annual-cost.svg", svg);
}

// 3. Who owns which job: responsibility matrix.
{
  const cols = ["Self-hosted", "Hosted non-custodial", "Custodial"];
  const rows = [
    ["Hold the keys / seed backup", [1, 1, 0]],
    ["Provision and pay for a server", [1, 0, 0]],
    ["OS, app and node updates", [1, 0, 0]],
    ["Node sync, disk and bandwidth", [1, 0, 0]],
    ["Uptime monitoring and alerts", [1, 0, 0]],
    ["TLS, firewall, SSH hardening", [1, 0, 0]],
    ["Database and config backups", [1, 0, 0]],
    ["Trust someone else with funds", [0, 0, 1]],
  ];
  const W = 920, rowH = 38, top = 128, H = top + rows.length * rowH + 64;
  const labelW = 330, colW = (W - 60 - labelW) / cols.length;
  const head = cols.map((c, i) => {
    const cx = 30 + labelW + colW * i + colW / 2;
    return `<text x="${cx}" y="${top - 16}" text-anchor="middle" font-size="13" font-weight="700" fill="${i === 1 ? T.grn1 : T.ink}" font-family="${F}">${c}</text>`;
  }).join("\n  ");
  const body = rows.map(([label, v], r) => {
    const y = top + r * rowH;
    const zebra = r % 2 === 0 ? `<rect x="20" y="${y}" width="${W - 40}" height="${rowH}" rx="8" fill="#1b1b1b"/>` : "";
    const cells = v.map((on, i) => {
      const cx = 30 + labelW + colW * i + colW / 2, cy = y + rowH / 2;
      const risk = r === rows.length - 1;
      if (!on) return `<line x1="${cx - 7}" y1="${cy}" x2="${cx + 7}" y2="${cy}" stroke="#4a4a4a" stroke-width="2" stroke-linecap="round"/>`;
      const c = risk ? "#e0745a" : (i === 1 ? T.grn1 : T.muted);
      return `<circle cx="${cx}" cy="${cy}" r="9" fill="none" stroke="${c}" stroke-width="1.8"/><circle cx="${cx}" cy="${cy}" r="4" fill="${c}"/>`;
    }).join("");
    return `${zebra}<text x="34" y="${y + rowH / 2 + 5}" font-size="13.5" fill="${T.ink}" font-family="${F}">${esc(label)}</text>${cells}`;
  }).join("\n  ");
  const totals = cols.map((_, i) => {
    const n = rows.slice(0, -1).filter(([, v]) => v[i]).length;
    const cx = 30 + labelW + colW * i + colW / 2;
    return `<text x="${cx}" y="${top + rows.length * rowH + 28}" text-anchor="middle" font-size="13" font-weight="700" fill="${i === 1 ? T.grn1 : T.muted}" font-family="${F}">${n} ops job${n === 1 ? "" : "s"}</text>`;
  }).join("\n  ");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Responsibility matrix. A self-hosted gateway makes the merchant own seven operational jobs: keys, server, updates, node sync, uptime monitoring, hardening and backups. A hosted non-custodial gateway leaves only the key backup. A custodial processor removes the operational jobs but requires trusting a third party with the funds.">
  ${defs}
  ${frame(W, H)}
  <text x="30" y="40" font-size="20" font-weight="700" fill="${T.ink}" font-family="${F}">Who does which job</text>
  <text x="30" y="62" font-size="13" fill="${T.faint}" font-family="${F}">Self-hosting moves every operational job onto you. Custody is the only row that actually carries counterparty risk.</text>
  ${head}
  ${body}
  ${totals}
  <text x="${W - 30}" y="${H - 14}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${MONO}">shieldz.cash</text>
</svg>
`;
  writeFileSync("public/charts/self-hosted-responsibilities.svg", svg);
}

console.log("wrote 3 charts");
