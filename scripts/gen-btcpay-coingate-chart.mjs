// One-off: annual platform fee, BTCPay Server vs CoinGate vs Shieldz, at $10k/month volume.
// Dark theme, Shieldz bar in brand green. Run: node scripts/gen-btcpay-coingate-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", grn1:"#57d497", grn2:"#2fb573", bar:"#3a3a3a" };

// Platform fee on $10,000/month processed, at published September 2026 rates.
//   BTCPay Server: 0% platform fee, but a VPS runs ~$20/mo ($240/yr) on top.
//   CoinGate: 1% per transaction -> $100/mo -> $1,200/yr.
//   Shieldz: $0 platform fee, hosted, buyer pays network gas.
const data = [
  { name:"CoinGate",      fee:1200, sub:"1% of $10k/mo" },
  { name:"BTCPay Server", fee:240,  sub:"$0 fee + ~$20/mo VPS" },
  { name:"Shieldz",       fee:0,    sub:"$0 fee, hosted", free:true },
];

const W=920, H=470, M={top:82,right:30,bottom:104,left:34};
const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
const yMax=1400, slot=plotW/data.length, barW=Math.min(140, slot*0.5);

const grid=[];
for(let i=0;i<=5;i++){const y=M.top+plotH*i/5;const v=Math.round(yMax*(5-i)/5);
  grid.push(`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
    `<text x="${W-M.right+6}" y="${(y+4).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">$${v}</text>`);}

const bars=data.map((d,i)=>{
  const cx=M.left+slot*i+slot/2, x=cx-barW/2;
  const fill=d.free?"url(#g)":T.bar;
  const label=d.free?"$0":"$"+d.fee.toLocaleString("en-US");
  const labelFill=d.free?T.grn1:T.ink;
  let h=(d.fee/yMax)*plotH; if(h<5)h=6; // nub for $0
  const y=M.top+plotH-h;
  return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="6" fill="${fill}"/>`+
    `<text x="${cx.toFixed(1)}" y="${(y-10).toFixed(1)}" text-anchor="middle" font-size="16" font-weight="700" fill="${labelFill}" font-family="ui-sans-serif,system-ui,sans-serif">${label}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+22).toFixed(1)}" text-anchor="middle" font-size="13" font-weight="600" fill="${d.free?T.ink:T.muted}" font-family="ui-sans-serif,system-ui,sans-serif">${d.name}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+40).toFixed(1)}" text-anchor="middle" font-size="11.5" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${d.sub}</text>`;
}).join("\n  ");

const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Annual platform cost at 10,000 dollars a month processed, September 2026 rates. CoinGate about 1,200 dollars a year at 1 percent. BTCPay Server about 240 dollars a year in VPS hosting with a 0 percent platform fee. Shieldz 0 dollars, hosted, with a 0 percent platform fee.">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.grn1}"/><stop offset="1" stop-color="${T.grn2}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#g)"/>
  <text x="${M.left}" y="38" font-size="20" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">Annual cost at $10,000/month processed</text>
  <text x="${M.left}" y="60" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">BTCPay Server trades a percentage fee for fixed VPS hosting. Shieldz is hosted and $0.</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="${W-M.right}" y="${H-16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · published pricing pages, Sep 2026</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/btcpay-coingate-annual-cost.svg", svg);
console.log("wrote public/charts/btcpay-coingate-annual-cost.svg");
