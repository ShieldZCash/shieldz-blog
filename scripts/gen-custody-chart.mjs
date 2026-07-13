// One-off: custody-share chart for the non-custodial gateway / AML post.
// Structural comparison: how much of a payment passes through the provider's
// account (and can therefore be held / frozen / reviewed). Run: node scripts/gen-custody-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";
const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", accent:"#f5361c", accentLight:"#ff9e8c", bar:"#3a3a3a" };
const data = [
  { name:"Custodial gateway", pct:100, good:false },
  { name:"Escrow / hold model", pct:100, good:false },
  { name:"BTCPay Server", pct:0, good:true },
  { name:"Shieldz", pct:0, good:true },
];
const W=760, H=470, M={top:84,right:30,bottom:104,left:30};
const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
const yMax=115, slot=plotW/data.length, barW=Math.min(76, slot*0.5);
const grid=[];
for(let i=0;i<=4;i++){const y=M.top+plotH*i/4;const v=Math.round(100*(4-i)/4);
  grid.push(`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
    `<text x="${W-M.right+6}" y="${(y+4).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${v}%</text>`);}
const bars=data.map((d,i)=>{
  const cx=M.left+slot*i+slot/2, x=cx-barW/2;
  const fill=d.good?T.accent:T.bar;
  const label=d.pct+"%";
  const labelFill=d.good?T.accentLight:T.muted;
  let h=(d.pct/yMax)*plotH; if(h<6)h=6;
  const y=M.top+plotH-h;
  return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="6" fill="${fill}"/>`+
    `<text x="${cx.toFixed(1)}" y="${(y-10).toFixed(1)}" text-anchor="middle" font-size="15" font-weight="700" fill="${labelFill}" font-family="ui-sans-serif,system-ui,sans-serif">${label}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+22).toFixed(1)}" text-anchor="middle" font-size="12.5" fill="${d.good?T.ink:T.muted}" font-family="ui-sans-serif,system-ui,sans-serif">${d.name}</text>`;
}).join("\n  ");
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="How much of a payment passes through the provider's custody: custodial gateways and escrow/hold models hold 100% of the payment before it reaches you, so it can be frozen or AML-reviewed. BTCPay Server and Shieldz are non-custodial at 0%, funds settle straight to your wallet.">
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="${T.accent}"/>
  <text x="${M.left}" y="40" font-size="20" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">How much of your payment the provider holds</text>
  <text x="${M.left}" y="62" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">Non-custodial means there is no balance to freeze or AML-review.</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="${W-M.right}" y="${H-16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · structural comparison of custody models</text>
</svg>
`;
mkdirSync("public/img",{recursive:true});
writeFileSync("public/img/custody-share.svg", svg);
console.log("wrote public/img/custody-share.svg");
