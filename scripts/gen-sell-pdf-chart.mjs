// One-off: what you keep from a $12 PDF sale across platforms.
// Published platform fees. Run: node scripts/gen-sell-pdf-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", bar:"#3a3a3a", grnA:"#57d497", grnB:"#2fb573" };
const FONT="ui-sans-serif,system-ui,sans-serif";

// Published platform fees on a single $12 digital sale (platform cut only;
// card processing charged separately by some platforms is excluded).
const data = [
  { name:"Gumroad",       keep:10.80, label:"$10.80", note:"10% flat fee" },
  { name:"Etsy (digital)",keep:11.02, label:"$11.02", note:"6.5% + $0.20 listing" },
  { name:"Lemon Squeezy", keep:10.90, label:"$10.90", note:"5% + $0.50" },
  { name:"Payhip (free)", keep:11.40, label:"$11.40", note:"5% platform fee" },
  { name:"Shieldz unlock",keep:12.00, label:"$12.00", note:"$0 fee, buyer pays gas", good:true },
];

const W=920, H=470, M={top:84,right:30,bottom:92,left:30};
const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
const yMin=10.5, yMax=12.3, slot=plotW/data.length, barW=Math.min(104, slot*0.5);
let grid="";
[10.5,11.0,11.5,12.0].forEach(v=>{
  const y=M.top+plotH-((v-yMin)/(yMax-yMin))*plotH;
  grid+=`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
    `<text x="${W-M.right+4}" y="${(y+4).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="${FONT}">$${v.toFixed(1)}</text>`;
});
const bars=data.map((d,i)=>{
  const cx=M.left+slot*i+slot/2, x=cx-barW/2;
  const h=((d.keep-yMin)/(yMax-yMin))*plotH, y=M.top+plotH-h;
  return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="8" fill="${d.good?"url(#g)":T.bar}"/>`+
    `<text x="${cx.toFixed(1)}" y="${(y-11).toFixed(1)}" text-anchor="middle" font-size="16" font-weight="700" fill="${d.good?T.grnA:T.ink}" font-family="${FONT}">${d.label}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+24).toFixed(1)}" text-anchor="middle" font-size="13" font-weight="600" fill="${d.good?T.ink:T.muted}" font-family="${FONT}">${d.name}</text>`+
    `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+43).toFixed(1)}" text-anchor="middle" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${d.note}</text>`;
}).join("\n  ");
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="What you keep from a 12 dollar PDF sale in 2026: Gumroad 10.80, Lemon Squeezy 10.90, Etsy digital 11.02, Payhip free plan 11.40, and a Shieldz pay-to-unlock 12.00 with zero platform fee.">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.grnA}"/><stop offset="1" stop-color="${T.grnB}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#g)"/>
  <text x="${M.left}" y="40" font-size="21" font-weight="700" fill="${T.ink}" font-family="${FONT}">Selling a $12 PDF: what you keep</text>
  <text x="${M.left}" y="62" font-size="13" fill="${T.faint}" font-family="${FONT}">Higher is better. Platform cut only; card processing charged separately by some platforms is excluded.</text>
  <text x="${W-M.right}" y="40" text-anchor="end" font-size="12" font-weight="700" fill="${T.grnA}" font-family="${FONT}">you keep</text>
  ${grid}
  ${bars}
  <text x="${W-M.right}" y="${H-15}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · published platform fees, single $12 sale, Aug 2026</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/sell-pdf-net.svg", svg);
console.log("wrote public/charts/sell-pdf-net.svg");
