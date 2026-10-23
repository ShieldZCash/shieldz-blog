// One-off: GitHub stars + activity chart for the open-source gateways post.
// Run: node scripts/gen-oss-gateways-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", bar:"#3a3a3a" };
const FONT = "ui-sans-serif,system-ui,sans-serif";
// GitHub API, 2026-10-23. green = pushed within the last 90 days.
const data = [
  { name:"BTCPay Server", sub:"MIT, last push Oct 2026", v:7823, green:true },
  { name:"Solana Pay", sub:"MIT, last push Oct 2026", v:1796, green:true },
  { name:"LNbits", sub:"MIT, last push Oct 2026", v:1244, green:true },
  { name:"Bitcart", sub:"MIT, last push Oct 2026", v:996, green:true },
  { name:"SHKeeper", sub:"GPL-3.0, last push Sep 2026", v:637, green:true },
  { name:"GoUrl", sub:"MIT, last push May 2024", v:560 },
  { name:"DePay widgets", sub:"MIT, last push Mar 2026", v:136 },
  { name:"MyCryptoCheckout", sub:"WordPress plugin, Aug 2026", v:33, green:true },
  { name:"DV.net", sub:"MIT, last push Oct 2026", v:25, green:true },
];

const W=920, H=620, M={top:96,right:110,bottom:62,left:250};
const plotW=W-M.left-M.right, rowH=(H-M.top-M.bottom)/data.length, barH=Math.min(40,rowH*0.6), max=8000;

const grid=[];
for(let i=0;i<=4;i++){const x=M.left+plotW*i/4;
  grid.push(`<line x1="${x.toFixed(1)}" y1="${M.top-8}" x2="${x.toFixed(1)}" y2="${H-M.bottom}" stroke="${T.grid}"/>`+
    `<text x="${x.toFixed(1)}" y="${H-M.bottom+18}" text-anchor="middle" font-size="11" fill="${T.faint}" font-family="${FONT}">${(max*i/4).toLocaleString("en-US")}</text>`);}

const bars=data.map((d,i)=>{
  const cy=M.top+rowH*i+rowH/2, y=cy-barH/2;
  let w=d.v/max*plotW; if(w<4)w=4;
  const fill=d.green?"url(#g)":T.bar;
  return `<text x="${M.left-14}" y="${(cy-2).toFixed(1)}" text-anchor="end" font-size="14" font-weight="600" fill="${d.green?T.ink:T.muted}" font-family="${FONT}">${d.name}</text>`+
    `<text x="${M.left-14}" y="${(cy+15).toFixed(1)}" text-anchor="end" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${d.sub}</text>`+
    `<rect x="${M.left}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${barH.toFixed(1)}" rx="5" fill="${fill}"/>`+
    `<text x="${(M.left+w+10).toFixed(1)}" y="${(cy+5).toFixed(1)}" font-size="15" font-weight="700" fill="${d.green?"#57d497":T.muted}" font-family="${FONT}">${d.v.toLocaleString("en-US")}</text>`;
}).join("\n  ");

const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="GitHub stars of open-source crypto payment gateways, October 2026: BTCPay Server 7,823, Solana Pay 1,796, LNbits 1,244, Bitcart 996, SHKeeper 637, GoUrl 560, DePay widgets 136, MyCryptoCheckout 33, DV.net 25. GoUrl and DePay have had no push in over 90 days.">
  <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#57d497"/><stop offset="1" stop-color="#2fb573"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <text x="30" y="40" font-size="20" font-weight="700" fill="${T.ink}" font-family="${FONT}">Open-source crypto payment gateways on GitHub</text>
  <text x="30" y="62" font-size="13" fill="${T.faint}" font-family="${FONT}">Stars, and whether the code is still moving. Green: pushed in the last 90 days.</text>
  <text x="${W-30}" y="40" text-anchor="end" font-size="12" font-weight="600" fill="#57d497" font-family="${FONT}">GitHub stars</text>
  ${grid.join("\n  ")}
  ${bars}
  <text x="30" y="${H-18}" font-size="11" fill="${T.faint}" font-family="${FONT}">Source: GitHub API, 23 Oct 2026. Main repo per project; stars measure popularity, not quality.</text>
  <text x="${W-30}" y="${H-18}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/oss-gateways-github.svg", svg);
console.log("wrote public/charts/oss-gateways-github.svg");
