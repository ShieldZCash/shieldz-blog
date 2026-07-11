// One-off: what a $100 sale costs to accept, cards vs stablecoins.
// Dark theme to match the blog. Run: node scripts/gen-stablecoin-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", bar:"#3a3a3a", grnA:"#57d497", grnB:"#2fb573" };

// Published rates on a single $100 sale. Cards: rate% + fixed fee. Coinbase
// Commerce: 1% platform fee. Shieldz: $0 platform fee, buyer pays ~1c Base gas.
const data = [
  { name:"PayPal",            cost:3.98, label:"$3.98", note:"3.49% + $0.49" },
  { name:"Stripe (card)",     cost:3.20, label:"$3.20", note:"2.9% + $0.30" },
  { name:"Coinbase Commerce", cost:1.00, label:"$1.00", note:"1% platform fee" },
  { name:"Shieldz (USDC)",    cost:0.01, label:"~$0.01", note:"$0 fee + gas", good:true },
];

const W=920, H=470, M={top:84,right:30,bottom:92,left:30};
const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
const yMax=4.4, slot=plotW/data.length, barW=Math.min(96, slot*0.5);

const grid=[];
for(let i=0;i<=4;i++){const y=M.top+plotH*i/4;const v=(4.0*(4-i)/4).toFixed(0);
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

const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="What a $100 sale costs to accept in 2026: PayPal $3.98, Stripe card $3.20, Coinbase Commerce $1.00, and a Shieldz stablecoin payment about $0.01 (zero platform fee plus a cent of Base network gas).">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.grnA}"/><stop offset="1" stop-color="${T.grnB}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#g)"/>
  <text x="${M.left}" y="40" font-size="21" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">What a $100 sale costs you to accept</text>
  <text x="${M.left}" y="62" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">Lower is better. A stablecoin payment on Base keeps almost the whole $100.</text>
  <text x="${W-M.right}" y="40" text-anchor="end" font-size="12" font-weight="700" fill="${T.grnA}" font-family="ui-sans-serif,system-ui,sans-serif">cost per $100</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="${W-M.right}" y="${H-15}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · published rates, single $100 sale</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/stablecoin-vs-card-cost.svg", svg);
console.log("wrote public/charts/stablecoin-vs-card-cost.svg");
