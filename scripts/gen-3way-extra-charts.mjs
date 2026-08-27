// Two extra charts for the NOWPayments vs BTCPay vs CoinGate post.
// 1) annual platform cost by monthly volume (pure arithmetic from published rates)
// 2) advertised coin coverage
// Run: node scripts/gen-3way-extra-charts.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", bar:"#3a3a3a" };
const F = "ui-sans-serif,system-ui,sans-serif";
const GRAD = `<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#57d497"/><stop offset="1" stop-color="#2fb573"/></linearGradient></defs>`;

// ── 1. Annual platform cost by monthly volume ───────────────────────────────
{
  const vols = [1000, 5000, 10000, 25000];
  const series = [
    { name:"CoinGate ~1%",     rate:0.01,  fill:T.bar },
    { name:"NOWPayments ~0.5%",rate:0.005, fill:"#4a4a4a" },
    { name:"Shieldz $0",       rate:0,     fill:"url(#sg)", green:true },
  ];
  const W=920, H=470, M={top:96,right:40,bottom:64,left:34};
  const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
  const yMax=3200, groupW=plotW/vols.length, barW=Math.min(46,(groupW-40)/series.length);

  const grid=[];
  for(let i=0;i<=4;i++){const y=M.top+plotH*i/4;const v=Math.round(3000*(4-i)/4);
    grid.push(`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
      `<text x="${W-M.right+6}" y="${(y+4).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="${F}">$${v>=1000?(v/1000)+"k":v}</text>`);}

  const bars=[];
  vols.forEach((vol,g)=>{
    const gx=M.left+groupW*g+groupW/2;
    series.forEach((s,i)=>{
      const cost=Math.round(vol*12*s.rate);
      const x=gx+(i-series.length/2)*barW+2;
      let h=(cost/yMax)*plotH; if(h<5)h=6;
      const y=M.top+plotH-h;
      const label=cost===0?"$0":(cost>=1000?"$"+(cost/1000).toFixed(1).replace(".0","")+"k":"$"+cost);
      bars.push(`<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${(barW-4).toFixed(1)}" height="${h.toFixed(1)}" rx="4" fill="${s.fill}"/>`+
        `<text x="${(x+(barW-4)/2).toFixed(1)}" y="${(y-7).toFixed(1)}" text-anchor="middle" font-size="12" font-weight="700" fill="${s.green?"#57d497":T.muted}" font-family="${F}">${label}</text>`);
    });
    bars.push(`<text x="${gx.toFixed(1)}" y="${(M.top+plotH+24).toFixed(1)}" text-anchor="middle" font-size="13" font-weight="600" fill="${T.ink}" font-family="${F}">$${vol/1000}k/mo</text>`);
  });

  const legend=series.map((s,i)=>
    `<rect x="${M.left+i*180}" y="${M.top-24}" width="12" height="12" rx="3" fill="${s.fill}"/>`+
    `<text x="${M.left+i*180+18}" y="${M.top-14}" font-size="12" fill="${T.muted}" font-family="${F}">${s.name}</text>`).join("");

  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Annual platform fees by monthly volume in 2026: at 10,000 dollars a month CoinGate costs about 1,200 dollars a year, NOWPayments about 600 dollars, Shieldz 0 dollars. BTCPay Server is also 0 dollars plus roughly 120 to 360 dollars a year of VPS hosting.">
  ${GRAD}
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="#57d497"/>
  <text x="${M.left}" y="38" font-size="20" font-weight="700" fill="${T.ink}" font-family="${F}">Annual platform fees by monthly volume (2026)</text>
  <text x="${M.left}" y="60" font-size="13" fill="${T.faint}" font-family="${F}">Percentage fees compound with volume. BTCPay Server is also $0 in fees, plus roughly $120 to $360 a year of VPS hosting.</text>
  ${grid.join("\n  ")}
  ${legend}
  ${bars.join("\n  ")}
  <text x="${W-M.right}" y="${H-14}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · arithmetic at published rates</text>
</svg>
`;
  mkdirSync("public/charts",{recursive:true});
  writeFileSync("public/charts/3way-annual-cost.svg", svg);
  console.log("wrote public/charts/3way-annual-cost.svg");
}

// ── 2. Advertised coin coverage (horizontal bars) ───────────────────────────
{
  const data = [
    { name:"NOWPayments",  n:300, label:"300+",  sub:"widest coverage" },
    { name:"CoinGate",     n:70,  label:"~70",   sub:"major coins" },
    { name:"Shieldz",      n:12,  label:"12",    sub:"USDC/USDT on 5 chains + BTC + shielded ZEC", green:true },
    { name:"BTCPay Server",n:2,   label:"BTC+LN",sub:"altcoins via community plugins" },
  ];
  const W=920, H=380, M={top:84,right:80,bottom:36,left:150};
  const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
  const rowH=plotH/data.length, barH=Math.min(34,rowH*0.5), xMax=320;

  const rows=data.map((d,i)=>{
    const cy=M.top+rowH*i+rowH/2;
    let w=(d.n/xMax)*plotW; if(w<8)w=8;
    const fill=d.green?"url(#sg)":T.bar;
    return `<text x="${M.left-10}" y="${(cy+4).toFixed(1)}" text-anchor="end" font-size="13.5" font-weight="600" fill="${d.green?T.ink:T.muted}" font-family="${F}">${d.name}</text>`+
      `<rect x="${M.left}" y="${(cy-barH/2).toFixed(1)}" width="${w.toFixed(1)}" height="${barH}" rx="6" fill="${fill}"/>`+
      `<text x="${(M.left+w+10).toFixed(1)}" y="${(cy-2).toFixed(1)}" font-size="14" font-weight="700" fill="${d.green?"#57d497":T.ink}" font-family="${F}">${d.label}</text>`+
      `<text x="${(M.left+w+10).toFixed(1)}" y="${(cy+14).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="${F}">${d.sub}</text>`;
  }).join("\n  ");

  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Advertised coin coverage in 2026: NOWPayments over 300 coins, CoinGate about 70, Shieldz 12 assets including USDC and USDT on five chains plus Bitcoin and shielded Zcash, BTCPay Server Bitcoin and Lightning natively with altcoins via plugins.">
  ${GRAD}
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="#57d497"/>
  <text x="34" y="38" font-size="20" font-weight="700" fill="${T.ink}" font-family="${F}">Advertised coin coverage (2026)</text>
  <text x="34" y="60" font-size="13" fill="${T.faint}" font-family="${F}">More coins is not automatically better: every extra coin is conversion overhead or price risk unless it settles to one token.</text>
  ${rows}
  <text x="${W-30}" y="${H-14}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · vendor-advertised counts</text>
</svg>
`;
  writeFileSync("public/charts/3way-coin-coverage.svg", svg);
  console.log("wrote public/charts/3way-coin-coverage.svg");
}
