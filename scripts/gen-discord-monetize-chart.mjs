// One-off: what a Discord server keeps from $1,000/month in member payments
// (roles, keys, tips), by rail. Dark theme, Shieldz bar in brand green.
// Run: node scripts/gen-discord-monetize-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", grn1:"#57d497", grn2:"#2fb573", bar:"#3a3a3a" };

// Cut taken from $1,000/month collected from server members, by rail:
//   Manual PayPal invoicing: 2.9% + $0.30 per transaction (PayPal published
//     merchant rate), no role automation, staff runs the sync by hand.
//   Patreon: 10% platform fee (Patreon published pricing, all creators,
//     Sep 2026) plus separate payment processing/payout fees.
//   Shieldz Pay for Discord: $0 platform fee, member pays only network gas
//     (sub-cent on Base). Role grant is automatic via the bot.
const data = [
  { name:"Manual PayPal", fee:59.30, sub:"2.9% + $0.30/txn" },
  { name:"Patreon",       fee:100.00, sub:"10% platform fee" },
  { name:"Shieldz Pay",   fee:0,     sub:"$0 + network gas", free:true },
];

const W=920, H=470, M={top:82,right:30,bottom:104,left:34};
const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
const yMax=110, slot=plotW/data.length, barW=Math.min(96, slot*0.5);

const grid=[];
for(let i=0;i<=5;i++){const y=M.top+plotH*i/5;const v=Math.round(yMax*(5-i)/5);
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

const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Cut taken from 1000 dollars a month collected from Discord server members. Manual PayPal invoicing 59.30 dollars. Patreon 100.00 dollars. Shieldz Pay for Discord 0 dollars plus network gas.">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.grn1}"/><stop offset="1" stop-color="${T.grn2}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#g)"/>
  <text x="${M.left}" y="38" font-size="20" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">Cut taken from $1,000/month in server payments</text>
  <text x="${M.left}" y="60" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">Lower is better. Shieldz Pay takes $0; the member covers only network gas.</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="${W-M.right}" y="${H-16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · public rate cards, Sep 2026</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/discord-server-monetize-cut.svg", svg);
console.log("wrote public/charts/discord-server-monetize-cut.svg");
