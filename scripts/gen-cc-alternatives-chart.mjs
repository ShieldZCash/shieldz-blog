// One-off: published fee of Coinbase Commerce vs 7 alternatives.
// Data from scripts/data/gateways-aug-2026.json. Run: node scripts/gen-cc-alternatives-chart.mjs
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", bar:"#3a3a3a", grnA:"#57d497", grnB:"#2fb573" };
const FONT="ui-sans-serif,system-ui,sans-serif";
const gw = JSON.parse(readFileSync("scripts/data/gateways-aug-2026.json","utf8"));
const pick = ["BitPay","Cryptomus","Stripe (Pay with Crypto)","Coinbase Commerce","CoinGate","NOWPayments","BTCPay Server","Shieldz"];
const rows = pick.map(n=>gw.find(g=>g.name===n)).sort((a,b)=>b.fee_pct-a.fee_pct);

const W=920, rowH=40, M={top:86,right:90,bottom:56,left:190};
const H=M.top+rows.length*rowH+M.bottom;
const plotW=W-M.left-M.right, xMax=2.3, barH=20;

let body="";
rows.forEach((d,i)=>{
  const y=M.top+i*rowH, good=d.name==="Shieldz", ref=d.name==="Coinbase Commerce";
  let w=(d.fee_pct/xMax)*plotW; if(w<6)w=6;
  const nm=d.name.replace(" (Pay with Crypto)"," crypto");
  body+=`<text x="${M.left-10}" y="${y+barH-4}" text-anchor="end" font-size="13.5" font-weight="${good||ref?700:500}" fill="${good?T.grnA:ref?T.ink:T.muted}" font-family="${FONT}">${nm}${ref?" ←":""}</text>`;
  body+=`<rect x="${M.left}" y="${y}" width="${w.toFixed(1)}" height="${barH}" rx="6" fill="${good?"url(#gh)":T.bar}" ${ref?`stroke="${T.faint}" stroke-width="1.2"`:""}/>`;
  body+=`<text x="${(M.left+w+8).toFixed(1)}" y="${y+barH-4}" font-size="13.5" font-weight="700" fill="${good?T.grnA:T.ink}" font-family="${FONT}">${d.fee_pct===0?"0%":d.fee_pct+"%"}</text>`;
});
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Published processing fee of Coinbase Commerce at 1 percent against seven alternatives in 2026: BitPay 2 percent, Cryptomus 2 percent, Stripe crypto 1.5 percent, CoinGate 1 percent, NOWPayments 0.5 percent, BTCPay Server 0 percent and Shieldz 0 percent.">
  <defs><linearGradient id="gh" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${T.grnB}"/><stop offset="1" stop-color="${T.grnA}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#gh)"/>
  <text x="${M.left}" y="40" font-size="21" font-weight="700" fill="${T.ink}" font-family="${FONT}">Coinbase Commerce vs the alternatives: the fee</text>
  <text x="${M.left}" y="62" font-size="13" fill="${T.faint}" font-family="${FONT}">Standard advertised rate per transaction, August 2026. The arrow marks the benchmark.</text>
  <text x="${W-M.right}" y="40" text-anchor="end" font-size="12" font-weight="700" fill="${T.grnA}" font-family="${FONT}">fee %</text>
  ${body}
  <text x="${W-M.right}" y="${H-15}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · published pricing pages, Aug 2026</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/cc-alternatives-fees.svg", svg);
console.log("wrote public/charts/cc-alternatives-fees.svg");
