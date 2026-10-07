// Charts for the Shieldz Swap guide posts.
// 1) swap-hw-wallet-coverage.svg: which chains Ledger, Trezor and Keystone can pay from
//    (wallets.mjs in open-defi-router/dex-ui/scripts/chain-pages)
// 2) swap-stablecoin-move-cost.svg: cost of moving $1,000 of USDT/USDC between chains (measured)
// 3) swap-btc-routes.svg: 0.1 BTC -> ETH, Chainflip vs NEAR Intents (measured)
// 4) swap-wallet-fees.svg: wallet swap fee on $1,000 and $10,000, published rates
// Measurements: live swap.shieldz.cash/v1/quote/stream, 2026-10-07.
// Run: node scripts/gen-swap-guide-charts.mjs
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

/* 1. Hardware wallet coverage */
{
  const cols = [["evm", "EVM"], ["btc", "BTC"], ["sol", "SOL"], ["tron", "TRX"], ["zec", "ZEC"], ["xrp", "XRP"], ["ltc", "LTC"], ["doge", "DOGE"], ["bch", "BCH"], ["dash", "DASH"], ["dot", "DOT"], ["near", "NEAR"]];
  const rows = [
    ["Ledger", "USB in Chrome, Edge or Brave", ["evm", "btc", "sol", "tron", "zec", "xrp", "dot", "near", "ltc", "doge", "dash", "bch"]],
    ["Trezor", "USB through Trezor Connect", ["evm", "btc", "sol", "tron", "zec", "xrp", "ltc", "doge", "bch"]],
    ["Keystone", "Air-gapped, QR codes only", ["evm", "btc", "sol", "tron", "zec", "xrp", "ltc", "dash", "bch"]],
  ];
  const W = 860, H = 330, x0 = 250, top = 112, rowH = 56, colW = (W - x0 - 28) / cols.length;
  let body = cols.map(([, label], i) =>
    `<text x="${(x0 + colW * i + colW / 2).toFixed(1)}" y="${top - 14}" text-anchor="middle" font-size="11.5" font-weight="600" fill="${T.muted}" font-family="${FONT}">${label}</text>`).join("");
  rows.forEach(([name, note, fams], r) => {
    const y = top + r * rowH;
    body += `<line x1="28" y1="${y - 4}" x2="${W - 28}" y2="${y - 4}" stroke="${T.grid}"/>` +
      `<text x="28" y="${y + 20}" font-size="15" font-weight="600" fill="${T.ink}" font-family="${FONT}">${name}</text>` +
      `<text x="28" y="${y + 38}" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${note}</text>`;
    cols.forEach(([id], i) => {
      const cx = (x0 + colW * i + colW / 2).toFixed(1), on = fams.includes(id);
      body += on
        ? `<circle cx="${cx}" cy="${y + 20}" r="11" fill="url(#g)"/><path d="M${+cx - 5} ${y + 20} l3.5 3.5 l6.5 -7" stroke="#0d2a1c" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
        : `<circle cx="${cx}" cy="${y + 20}" r="11" fill="none" stroke="${T.bar}" stroke-width="1.5"/>`;
    });
  });
  body += `<text x="28" y="${H - 40}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">EVM covers Ethereum, Arbitrum, Base, BNB Chain and every other EVM chain Shieldz routes. Receiving works on any chain.</text>`;
  writeFileSync("public/charts/swap-hw-wallet-coverage.svg", frame(W, H,
    "What you can swap from each hardware wallet",
    "Chains Shieldz Swap can build and sign a payment for on the device",
    "pay from", "Source: swap.shieldz.cash/wallets, October 2026.",
    body, "Chains each hardware wallet can pay from on Shieldz Swap. Ledger: EVM, BTC, SOL, TRX, ZEC, XRP, LTC, DOGE, BCH, DASH, DOT and NEAR. Trezor: EVM, BTC, SOL, TRX, ZEC, XRP, LTC, DOGE and BCH. Keystone: EVM, BTC, SOL, TRX, ZEC, XRP, LTC, DASH and BCH."));
  console.log("wrote public/charts/swap-hw-wallet-coverage.svg");
}

/* 2. Cost of moving $1,000 of stablecoins between chains */
{
  const W = 860, H = 520;
  const rows = [
    { name: "USDC Ethereum → Arbitrum", note: "Relay · ~1 s", val: 1.84, label: "$1.84", good: true },
    { name: "USDC Solana → Base", note: "NEAR Intents · ~22 s", val: 3.04, label: "$3.04" },
    { name: "USDT Tron → USDC Base", note: "NEAR Intents · ~82 s", val: 3.13, label: "$3.13" },
    { name: "USDC Arbitrum → Solana", note: "NEAR Intents · ~22 s", val: 3.37, label: "$3.37" },
    { name: "USDT Tron → USDC Solana", note: "NEAR Intents · ~77 s", val: 3.48, label: "$3.48" },
    { name: "USDT Ethereum → Tron", note: "NEAR Intents · ~100 s", val: 4.87, label: "$4.87" },
  ];
  const body = hbars(rows, { W, top: 96, rowH: 62, labelW: 260, max: 5.5 }) +
    `<text x="28" y="${H - 40}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">$1,000 in minus what arrives. Includes the 0.15% Shieldz fee ($1.50) and protocol fees; not the gas your wallet pays to send.</text>`;
  writeFileSync("public/charts/swap-stablecoin-move-cost.svg", frame(W, H,
    "What it costs to move $1,000 of stablecoins",
    "Best route for each move, as quoted by the router, all fees included",
    "USD", "Measured on swap.shieldz.cash, 2026-10-07. Quotes move; live costs for every network at swap.shieldz.cash/usdt.",
    body, "Cost of moving 1,000 dollars of stablecoins between chains, all fees included: USDC Ethereum to Arbitrum 1.84 dollars, USDC Solana to Base 3.04, USDT Tron to USDC Base 3.13, USDC Arbitrum to Solana 3.37, USDT Tron to USDC Solana 3.48, USDT Ethereum to Tron 4.87."));
  console.log("wrote public/charts/swap-stablecoin-move-cost.svg");
}

/* 3. 0.1 BTC -> ETH */
{
  const W = 860, H = 340;
  const rows = [
    { name: "Chainflip", note: "settles in ~7 min · picked", val: 3.218448, label: "3.2184 ETH", good: true },
    { name: "NEAR Intents", note: "settles in ~13.5 min", val: 3.211445, label: "3.2114 ETH" },
  ];
  const body = hbars(rows, { W, top: 100, rowH: 74, labelW: 230, min: 3.2, max: 3.222 }) +
    `<text x="28" y="${H - 44}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">Same request, same second: 0.0070 ETH (about $18) apart, and the better route also lands six minutes sooner.</text>`;
  writeFileSync("public/charts/swap-btc-routes.svg", frame(W, H,
    "0.1 native BTC to ETH: two protocols, two prices",
    "ETH you would receive, after every fee, as quoted by each protocol (axis starts at 3.2)",
    "ETH out", "Measured on swap.shieldz.cash, 2026-10-07. Relay does not take native BTC deposits.",
    body, "0.1 BTC to ETH quoted at the same moment: Chainflip 3.2184 ETH settling in about 7 minutes, NEAR Intents 3.2114 ETH settling in about 13.5 minutes. Chainflip was picked."));
  console.log("wrote public/charts/swap-btc-routes.svg");
}

/* 4. Wallet swap fees on $1,000 and $10,000 */
{
  const W = 860, H = 470;
  const rows = [
    { name: "Base app (Coinbase Wallet)", note: "up to 1%", val: 10, label: "up to $10 · $100" },
    { name: "MetaMask", note: "0.875%", val: 8.75, label: "$8.75 · $87.50" },
    { name: "Phantom", note: "0.85% on select pairs", val: 8.5, label: "$8.50 · $85" },
    { name: "Rabby", note: "0.25%", val: 2.5, label: "$2.50 · $25" },
    { name: "Shieldz Swap", note: "0.15% on every route", val: 1.5, label: "$1.50 · $15", good: true },
  ];
  const body = hbars(rows, { W, top: 96, rowH: 62, labelW: 260, max: 13.5 }) +
    `<text x="28" y="${H - 40}" font-size="12.5" fill="${T.muted}" font-family="${FONT}">Labels: fee on $1,000 · fee on $10,000. App fee only; protocol, liquidity and network costs come on top for all of them.</text>`;
  writeFileSync("public/charts/swap-wallet-fees.svg", frame(W, H,
    "What each wallet charges to swap",
    "The app's own published swap fee, on a $1,000 swap (bars) and a $10,000 swap",
    "USD", "Sources: MetaMask, Phantom and Coinbase help centers, ethereum.org (Rabby), swap.shieldz.cash/terms. October 2026.",
    body, "Wallet swap fees on a 1,000 dollar swap: Base app up to 10 dollars, MetaMask 8.75, Phantom 8.50 on select pairs, Rabby 2.50, Shieldz Swap 1.50. On 10,000 dollars: up to 100, 87.50, 85, 25 and 15."));
  console.log("wrote public/charts/swap-wallet-fees.svg");
}
