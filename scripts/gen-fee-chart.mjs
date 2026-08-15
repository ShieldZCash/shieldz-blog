// One-off: platform-fee comparison chart for the free-gateways listicle.
// Dark theme to match the blog. Run: node scripts/gen-fee-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", accent:"#f5361c", accentLight:"#ff9e8c", bar:"#3a3a3a" };
const data = [
  { name:"Shieldz",    fee:0,   free:true },
  { name:"BTCPay",     fee:0,   free:true },
  { name:"Cryptomus",  fee:0.4, free:false },
  { name:"NOWPayments",fee:0.5, free:false },
  { name:"Plisio",     fee:0.5, free:false },
  { name:"CoinPayments",fee:0.5,free:false },
  { name:"Coinbase",   fee:1.0, free:false },
  { name:"OpenNode",   fee:1.0, free:false },
  { name:"BlockBee",   fee:1.0, free:false },
  { name:"CryptAPI",   fee:1.0, free:false },
];

const W=920, H=480, M={top:82,right:28,bottom:96,left:30};
const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
const yMax=1.15, slot=plotW/data.length, barW=Math.min(50, slot*0.56);

const grid=[];
for(let i=0;i<=4;i++){const y=M.top+plotH*i/4;const v=(1.0*(4-i)/4).toFixed(2);
  grid.push(`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
    `<text x="${W-M.right+6}" y="${(y+4).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${v}%</text>`);}

const bars=data.map((d,i)=>{
  const cx=M.left+slot*i+slot/2, x=cx-barW/2;
  const fill=d.free?T.accent:T.bar;
  const label=d.free?"$0":d.fee+"%";
  const labelFill=d.free?T.accentLight:T.muted;
  let h=(d.fee/yMax)*plotH; if(h<5)h=6; // nub for $0
  const y=M.top+plotH-h;
  return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="5" fill="${fill}"/>`+
    `<text x="${cx.toFixed(1)}" y="${(y-9).toFixed(1)}" text-anchor="middle" font-size="14" font-weight="700" fill="${labelFill}" font-family="ui-sans-serif,system-ui,sans-serif">${label}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+18).toFixed(1)}" text-anchor="end" font-size="12.5" fill="${d.free?T.ink:T.muted}" font-family="ui-sans-serif,system-ui,sans-serif" transform="rotate(-35 ${cx.toFixed(1)} ${(M.top+plotH+18).toFixed(1)})">${d.name}</text>`;
}).join("\n  ");

const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Platform fee by crypto payment gateway in 2026. Shieldz and BTCPay Server charge 0%. Cryptomus 0.4%, NOWPayments, Plisio and CoinPayments about 0.5%, Coinbase Commerce, OpenNode, BlockBee and CryptAPI about 1%.">
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="${T.accent}"/>
  <text x="${M.left}" y="38" font-size="20" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">Platform fee by gateway (2026)</text>
  <text x="${M.left}" y="60" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">Lower is better. Only Shieldz and BTCPay Server are genuinely $0.</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="${W-M.right}" y="${H-16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · approximate rates</text>
</svg>
`;
mkdirSync("public/img",{recursive:true});
writeFileSync("public/img/free-gateway-fees.svg", svg);
console.log("wrote public/img/free-gateway-fees.svg");
