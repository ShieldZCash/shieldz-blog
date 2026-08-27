// One-off: platform cost per $1,000 sale for the NOWPayments vs BTCPay vs
// CoinGate comparison post. Dark theme. Run: node scripts/gen-3way-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", bar:"#3a3a3a" };
const data = [
  { name:"Shieldz",     cost:0,  note:"hosted",     green:true },
  { name:"BTCPay Server", cost:0, note:"self-host", green:false, zero:true },
  { name:"NOWPayments", cost:5,  note:"~0.5%",      green:false },
  { name:"CoinGate",    cost:10, note:"~1%",        green:false },
];

const W=920, H=460, M={top:88,right:40,bottom:78,left:34};
const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
const yMax=11.5, slot=plotW/data.length, barW=Math.min(96, slot*0.5);

const grid=[];
for(let i=0;i<=4;i++){const y=M.top+plotH*i/4;const v=Math.round(10*(4-i)/4);
  grid.push(`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
    `<text x="${W-M.right+6}" y="${(y+4).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">$${v}</text>`);}

const bars=data.map((d,i)=>{
  const cx=M.left+slot*i+slot/2, x=cx-barW/2;
  const fill=d.green?"url(#sg)":T.bar;
  const label=d.cost===0?"$0":"$"+d.cost;
  const labelFill=d.green?"#57d497":(d.cost===0?T.ink:T.muted);
  let h=(d.cost/yMax)*plotH; if(h<5)h=6;
  const y=M.top+plotH-h;
  return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="6" fill="${fill}"/>`+
    `<text x="${cx.toFixed(1)}" y="${(y-10).toFixed(1)}" text-anchor="middle" font-size="16" font-weight="700" fill="${labelFill}" font-family="ui-sans-serif,system-ui,sans-serif">${label}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+24).toFixed(1)}" text-anchor="middle" font-size="13.5" font-weight="600" fill="${d.green?T.ink:T.muted}" font-family="ui-sans-serif,system-ui,sans-serif">${d.name}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+42).toFixed(1)}" text-anchor="middle" font-size="11.5" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${d.note}</text>`;
}).join("\n  ");

const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Platform cost of a 1000 dollar sale in 2026: Shieldz 0 dollars hosted, BTCPay Server 0 dollars self-hosted, NOWPayments about 5 dollars at 0.5 percent, CoinGate about 10 dollars at 1 percent.">
  <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#57d497"/><stop offset="1" stop-color="#2fb573"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="#57d497"/>
  <text x="${M.left}" y="38" font-size="20" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">Platform cost of a $1,000 sale (2026)</text>
  <text x="${M.left}" y="60" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">Platform fee only. Network gas applies everywhere; BTCPay adds VPS hosting, typically $10 to $30 per month.</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="${W-M.right}" y="${H-14}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · published rates, August 2026</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/nowpayments-btcpay-coingate-cost.svg", svg);
console.log("wrote public/charts/nowpayments-btcpay-coingate-cost.svg");
