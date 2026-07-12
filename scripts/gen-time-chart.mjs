// One-off: time to your first payment link. Stacked bar = signup + verification
// time (bottom) plus invoice/link creation time (top). Illustrative minutes.
// Dark theme. Run: node scripts/gen-time-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", sign:"#3a3a3a", create:"#555", grnA:"#57d497", grnB:"#2fb573" };

// Illustrative minutes. `signup` = account + KYC/verification, `create` = making
// the first invoice/link. Shieldz is keyless: no signup, one GET, about a second.
const data = [
  { name:"BTCPay (self-host)",   signup:45, create:1,    total:"~46 min" },
  { name:"Stripe (cards)",       signup:20, create:3,    total:"~23 min" },
  { name:"Custodial crypto API", signup:12, create:2,    total:"~14 min" },
  { name:"Shieldz, one URL",     signup:0,  create:0.03, total:"~1 sec", good:true },
];

const W=920, H=500, M={top:96,right:30,bottom:96,left:34};
const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
const yMax=50, slot=plotW/data.length, barW=Math.min(92, slot*0.5);
const yOf=(v)=>M.top+plotH-(v/yMax)*plotH;

const grid=[];
for(let i=0;i<=5;i++){const v=50*(5-i)/5;const y=M.top+plotH*i/5;
  grid.push(`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
    `<text x="${W-M.right+6}" y="${(y+4).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${v.toFixed(0)}m</text>`);}

const bars=data.map((d,i)=>{
  const cx=M.left+slot*i+slot/2, x=cx-barW/2;
  let sh=(d.signup/yMax)*plotH;
  let ch=(d.create/yMax)*plotH; if(d.good && ch<6) ch=6; else if(ch<3 && d.create>0) ch=3;
  const yc=M.top+plotH-sh-ch;
  const ys=M.top+plotH-sh;
  const parts=[];
  if(sh>0.5) parts.push(`<rect x="${x.toFixed(1)}" y="${ys.toFixed(1)}" width="${barW}" height="${sh.toFixed(1)}" rx="0" fill="${T.sign}"/>`);
  parts.push(`<rect x="${x.toFixed(1)}" y="${yc.toFixed(1)}" width="${barW}" height="${ch.toFixed(1)}" rx="5" fill="${d.good?"url(#g)":T.create}"/>`);
  parts.push(`<text x="${cx.toFixed(1)}" y="${(yc-11).toFixed(1)}" text-anchor="middle" font-size="15.5" font-weight="700" fill="${d.good?T.grnA:T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">${d.total}</text>`);
  parts.push(`<text x="${cx.toFixed(1)}" y="${(M.top+plotH+22).toFixed(1)}" text-anchor="middle" font-size="13.5" font-weight="600" fill="${d.good?T.ink:T.muted}" font-family="ui-sans-serif,system-ui,sans-serif">${d.name}</text>`);
  return parts.join("");
}).join("\n  ");

const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Time to your first payment link (illustrative): BTCPay self-host about 46 minutes, Stripe about 23 minutes, a custodial crypto API about 14 minutes, and Shieldz about 1 second with one URL and no signup.">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.grnA}"/><stop offset="1" stop-color="${T.grnB}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#g)"/>
  <text x="${M.left}" y="40" font-size="21" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">Time to your first payment link</text>
  <text x="${M.left}" y="62" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">Signup and verification, then creating the link. Shieldz is keyless: one URL, no signup.</text>
  <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="12" fill="${T.muted}">
    <rect x="${M.left}" y="72" width="12" height="12" rx="2" fill="${T.sign}"/><text x="${M.left+18}" y="82">Signup + verify</text>
    <rect x="${M.left+118}" y="72" width="12" height="12" rx="2" fill="${T.create}"/><text x="${M.left+136}" y="82">Create link</text>
  </g>
  <text x="${W-M.right}" y="40" text-anchor="end" font-size="12" font-weight="700" fill="${T.grnA}" font-family="ui-sans-serif,system-ui,sans-serif">minutes</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="${W-M.right}" y="${H-15}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · illustrative; signup/verification times vary</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/time-to-first-link.svg", svg);
console.log("wrote public/charts/time-to-first-link.svg");
