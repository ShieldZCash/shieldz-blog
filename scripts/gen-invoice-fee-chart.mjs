// One-off: what a $50 crypto invoice actually costs to collect, by processor.
// Dark theme, Shieldz bar in brand green. Run: node scripts/gen-invoice-fee-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", grn1:"#57d497", grn2:"#2fb573", bar:"#3a3a3a" };

// Fee to collect a $50 invoice. Public list rates:
//   Stripe 2.9% + $0.30, PayPal invoicing 3.49% + $0.49, Coinbase Commerce 1%.
//   Shieldz: $0 platform fee, buyer pays only network gas (sub-cent on Base).
const data = [
  { name:"PayPal invoice", fee:2.24, sub:"3.49% + $0.49" },
  { name:"Stripe",         fee:1.75, sub:"2.9% + $0.30" },
  { name:"Coinbase Commerce", fee:0.50, sub:"1%" },
  { name:"Shieldz",        fee:0,    sub:"$0 + network gas", free:true },
];

const W=920, H=470, M={top:82,right:30,bottom:104,left:34};
const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
const yMax=2.5, slot=plotW/data.length, barW=Math.min(96, slot*0.5);

const grid=[];
for(let i=0;i<=5;i++){const y=M.top+plotH*i/5;const v=(2.5*(5-i)/5).toFixed(2);
  grid.push(`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
    `<text x="${W-M.right+6}" y="${(y+4).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">$${v}</text>`);}

const bars=data.map((d,i)=>{
  const cx=M.left+slot*i+slot/2, x=cx-barW/2;
  const fill=d.free?"url(#g)":T.bar;
  const label=d.free?"$0.00":"$"+d.fee.toFixed(2);
  const labelFill=d.free?T.grn1:T.ink;
  let h=(d.fee/yMax)*plotH; if(h<5)h=6; // nub for $0
  const y=M.top+plotH-h;
  return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="6" fill="${fill}"/>`+
    `<text x="${cx.toFixed(1)}" y="${(y-10).toFixed(1)}" text-anchor="middle" font-size="16" font-weight="700" fill="${labelFill}" font-family="ui-sans-serif,system-ui,sans-serif">${label}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+22).toFixed(1)}" text-anchor="middle" font-size="13" font-weight="600" fill="${d.free?T.ink:T.muted}" font-family="ui-sans-serif,system-ui,sans-serif">${d.name}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+40).toFixed(1)}" text-anchor="middle" font-size="11.5" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${d.sub}</text>`;
}).join("\n  ");

const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Cost to collect a 50 dollar invoice. PayPal invoicing 2.24 dollars, Stripe 1.75 dollars, Coinbase Commerce 0.50 dollars, Shieldz 0 dollars plus network gas.">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.grn1}"/><stop offset="1" stop-color="${T.grn2}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#g)"/>
  <text x="${M.left}" y="38" font-size="20" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">What a $50 invoice costs to collect</text>
  <text x="${M.left}" y="60" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">Lower is better. Shieldz takes $0; the payer covers only network gas.</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="${W-M.right}" y="${H-16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · public list rates</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/crypto-invoice-cost.svg", svg);
console.log("wrote public/charts/crypto-invoice-cost.svg");
