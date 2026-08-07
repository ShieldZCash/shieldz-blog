// One-off: what a $100 Bitcoin payment costs to accept across processors.
// Dark theme to match the blog. Run: node scripts/gen-btc-fee-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", bar:"#3a3a3a", grnA:"#57d497", grnB:"#2fb573" };

// Published rates on a single $100 Bitcoin sale. BitPay standard: 2% + $0.25.
// Coinbase Commerce and CoinGate: 1% platform fee. Shieldz: $0 platform fee,
// buyer pays only the Bitcoin network fee for their own transaction.
const data = [
  { name:"BitPay",            cost:2.25, label:"$2.25", note:"2% + $0.25" },
  { name:"Coinbase Commerce", cost:1.00, label:"$1.00", note:"1% platform fee" },
  { name:"CoinGate",          cost:1.00, label:"$1.00", note:"1% platform fee" },
  { name:"Shieldz",           cost:0.00, label:"$0.00", note:"$0 fee, buyer pays gas", good:true },
];

const W=920, H=470, M={top:84,right:30,bottom:92,left:30};
const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
const yMax=2.6, slot=plotW/data.length, barW=Math.min(96, slot*0.5);

const grid=[];
for(let i=0;i<=4;i++){const y=M.top+plotH*i/4;const v=(2.4*(4-i)/4).toFixed(1);
  grid.push(`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
    `<text x="${W-M.right+6}" y="${(y+4).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">$${v}</text>`);}

const bars=data.map((d,i)=>{
  const cx=M.left+slot*i+slot/2, x=cx-barW/2;
  const fill=d.good?"url(#g)":T.bar;
  const labelFill=d.good?T.grnA:T.ink;
  let h=(d.cost/yMax)*plotH; if(h<6)h=6; // nub for near-zero
  const y=M.top+plotH-h;
  return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="6" fill="${fill}"/>`+
    `<text x="${cx.toFixed(1)}" y="${(y-11).toFixed(1)}" text-anchor="middle" font-size="16" font-weight="700" fill="${labelFill}" font-family="ui-sans-serif,system-ui,sans-serif">${d.label}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+22).toFixed(1)}" text-anchor="middle" font-size="13.5" font-weight="600" fill="${d.good?T.ink:T.muted}" font-family="ui-sans-serif,system-ui,sans-serif">${d.name}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+40).toFixed(1)}" text-anchor="middle" font-size="11.5" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${d.note}</text>`;
}).join("\n  ");

const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Processor fee on a $100 Bitcoin sale in 2026: BitPay $2.25, Coinbase Commerce $1.00, CoinGate $1.00, and Shieldz $0.00 (zero platform fee, the buyer pays only the Bitcoin network fee).">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.grnA}"/><stop offset="1" stop-color="${T.grnB}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#g)"/>
  <text x="${M.left}" y="40" font-size="21" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">Processor fee on a $100 Bitcoin sale</text>
  <text x="${M.left}" y="62" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">Lower is better. Shieldz takes no cut; the buyer covers their own network fee.</text>
  <text x="${W-M.right}" y="40" text-anchor="end" font-size="12" font-weight="700" fill="${T.grnA}" font-family="ui-sans-serif,system-ui,sans-serif">fee per $100</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="${W-M.right}" y="${H-15}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · published rates, single $100 sale</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/btc-payment-cost.svg", svg);
console.log("wrote public/charts/btc-payment-cost.svg");
