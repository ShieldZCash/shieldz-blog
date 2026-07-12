// One-off: setup steps before your first crypto payment. Illustrative count of
// discrete requirements (account, KYC, API key, SDK, server, webhook).
// Dark theme. Run: node scripts/gen-onelink-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", bar:"#3a3a3a", grnA:"#57d497", grnB:"#2fb573" };

// Discrete things you must set up before the first payment can be taken.
const data = [
  { name:"BTCPay (self-host)",  steps:6, note:"server + wallet + config" },
  { name:"Stripe (cards)",      steps:5, note:"account, KYC, keys, SDK, webhook" },
  { name:"Custodial crypto API",steps:4, note:"account, KYC, key, config" },
  { name:"Shieldz, one URL",    steps:1, note:"build one URL", good:true },
];

const W=920, H=470, M={top:84,right:30,bottom:96,left:30};
const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
const yMax=6.6, slot=plotW/data.length, barW=Math.min(96, slot*0.5);

const grid=[];
for(let i=0;i<=3;i++){const y=M.top+plotH*i/3;const v=(6*(3-i)/3).toFixed(0);
  grid.push(`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
    `<text x="${W-M.right+6}" y="${(y+4).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${v}</text>`);}

const bars=data.map((d,i)=>{
  const cx=M.left+slot*i+slot/2, x=cx-barW/2;
  const fill=d.good?"url(#g)":T.bar;
  const labelFill=d.good?T.grnA:T.ink;
  let h=(d.steps/yMax)*plotH; if(h<6)h=6;
  const y=M.top+plotH-h;
  return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="6" fill="${fill}"/>`+
    `<text x="${cx.toFixed(1)}" y="${(y-11).toFixed(1)}" text-anchor="middle" font-size="17" font-weight="700" fill="${labelFill}" font-family="ui-sans-serif,system-ui,sans-serif">${d.steps}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+22).toFixed(1)}" text-anchor="middle" font-size="13.5" font-weight="600" fill="${d.good?T.ink:T.muted}" font-family="ui-sans-serif,system-ui,sans-serif">${d.name}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+40).toFixed(1)}" text-anchor="middle" font-size="11.5" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${d.note}</text>`;
}).join("\n  ");

const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Setup steps before your first crypto payment (illustrative): BTCPay self-host about 6, Stripe cards about 5, a custodial crypto API about 4, and Shieldz just 1, building one URL.">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.grnA}"/><stop offset="1" stop-color="${T.grnB}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#g)"/>
  <text x="${M.left}" y="40" font-size="21" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">Setup before your first crypto payment</text>
  <text x="${M.left}" y="62" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">Lower is better. One URL, nothing to sign up for or install.</text>
  <text x="${W-M.right}" y="40" text-anchor="end" font-size="12" font-weight="700" fill="${T.grnA}" font-family="ui-sans-serif,system-ui,sans-serif">setup steps</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="${W-M.right}" y="${H-15}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · illustrative, discrete setup requirements</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/one-url-setup-steps.svg", svg);
console.log("wrote public/charts/one-url-setup-steps.svg");
