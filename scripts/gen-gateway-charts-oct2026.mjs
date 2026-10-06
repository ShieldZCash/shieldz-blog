// Charts for the "<N> crypto payment gateways compared (October 2026)" post.
// Reads scripts/data/gateways-oct-2026.csv (snapshot of the live dataset repo
// at v1.4.0, October 2026 re-verification), writes 6 SVGs to public/charts/.
// Run: node scripts/gen-gateway-charts-oct2026.mjs
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", bar:"#3a3a3a", grnA:"#57d497", grnB:"#2fb573" };
const FONT = "ui-sans-serif,system-ui,sans-serif";
const MONO = "Menlo,ui-monospace,monospace";

// Minimal RFC4180 CSV parser (handles quoted fields with embedded commas).
const parseCsv = (text) => {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else if (c === "\r") { /* skip */ }
    else field += c;
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  const header = rows[0];
  return rows.slice(1).filter(r => r.length === header.length && r.some(v => v !== "")).map(r => {
    const o = {};
    header.forEach((h, i) => { o[h] = r[i]; });
    return o;
  });
};

const raw = parseCsv(readFileSync("scripts/data/gateways-oct-2026.csv", "utf8"));
const bool = (v) => v === "true";
const gw = raw.map(r => ({
  name: r.name,
  url: r.url,
  fee_pct: Number(r.fee_pct),
  fee_note: r.fee_note,
  custody: r.custody,
  kyc: r.kyc,
  coins: Number(r.coins),
  settlement_fiat: bool(r.settlement_fiat),
  lightning: bool(r.lightning),
  founded: Number(r.founded),
  notable: r.notable,
  verified: bool(r.verified),
  source_url: r.source_url,
  study_cohort: bool(r.study_cohort),
}));
const N = gw.length;

const defs = `<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.grnA}"/><stop offset="1" stop-color="${T.grnB}"/></linearGradient><linearGradient id="gh" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${T.grnB}"/><stop offset="1" stop-color="${T.grnA}"/></linearGradient></defs>`;
const frame = (W,H,label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${label}">\n${defs}\n<rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/><rect x="0" y="0" width="${W}" height="5" fill="url(#gh)"/>`;
const head = (W,M,title,sub,unit) =>
  `<text x="${M.left}" y="40" font-size="21" font-weight="700" fill="${T.ink}" font-family="${FONT}">${title}</text>`+
  `<text x="${M.left}" y="62" font-size="13" fill="${T.faint}" font-family="${FONT}">${sub}</text>`+
  `<text x="${W-M.right}" y="40" text-anchor="end" font-size="12" font-weight="700" fill="${T.grnA}" font-family="${FONT}">${unit}</text>`;
const foot = (W,H,M,src) => `<text x="${W-M.right}" y="${H-15}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${MONO}">shieldz.cash · ${src}</text>`;
const save = (name,svg) => { writeFileSync(`public/charts/${name}`, svg+"\n</svg>\n"); console.log("wrote public/charts/"+name); };
mkdirSync("public/charts",{recursive:true});

/* 1. Horizontal bars: published fee across the same 16 well-known gateways as the August study */
{
  const pick = ["Sellix","BitPay","Cryptomus","Stripe (Pay with Crypto)","DePay","CoinGate","Coinbase Commerce","OpenNode","Flexa","TripleA","NOWPayments","CoinPayments","B2BinPay","CoinRemitter","BTCPay Server","Shieldz"];
  const rows = pick.map(n => gw.find(g=>g.name===n)).filter(Boolean).sort((a,b)=>b.fee_pct-a.fee_pct);
  const W=920, H=86+rows.length*34+64, M={top:86,right:80,bottom:50,left:200};
  const plotW=W-M.left-M.right, xMax=5.2, rowH=34, barH=18;
  let body="";
  rows.forEach((d,i)=>{
    const y=M.top+i*rowH, good=d.name==="Shieldz";
    let w=(d.fee_pct/xMax)*plotW; if(w<5)w=5;
    body+=`<text x="${M.left-10}" y="${y+barH-4}" text-anchor="end" font-size="13" font-weight="${good?700:500}" fill="${good?T.grnA:T.muted}" font-family="${FONT}">${d.name.replace(" (Pay with Crypto)"," crypto")}</text>`;
    body+=`<rect x="${M.left}" y="${y}" width="${w.toFixed(1)}" height="${barH}" rx="5" fill="${good?"url(#gh)":T.bar}"/>`;
    body+=`<text x="${(M.left+w+8).toFixed(1)}" y="${y+barH-4}" font-size="13" font-weight="700" fill="${good?T.grnA:T.ink}" font-family="${FONT}">${d.fee_pct===0?"0%":d.fee_pct+"%"}</text>`;
  });
  const label=`Published processing fee across ${rows.length} well-known crypto payment gateways in October 2026, from Sellix at up to 5 percent down to BTCPay Server and Shieldz at 0 percent.`;
  save("gw-oct26-fee-bars.svg", frame(W,H,label)+head(W,M,`Published fee, ${rows.length} well-known gateways`,"Standard advertised rate per transaction, October 2026. Lower is better.","fee %")+body+foot(W,H,M,"published pricing pages, Oct 2026"));
}

/* 2. Donut: custody model across all N */
{
  const W=920, H=470, cx=290, cy=270, R=130, r=78;
  const cats=[["non-custodial","Non-custodial",T.grnA],["self-hosted","Self-hosted",T.grnB],["hybrid","Hybrid","#5c5c5c"],["custodial","Custodial",T.bar]];
  const counts=cats.map(([k])=>gw.filter(g=>g.custody===k).length);
  const total=counts.reduce((a,b)=>a+b,0);
  let a0=-Math.PI/2, body="";
  cats.forEach(([k,lab,col],i)=>{
    const a1=a0+counts[i]/total*2*Math.PI;
    const large=(a1-a0)>Math.PI?1:0;
    const p=(a,rad)=>`${(cx+rad*Math.cos(a)).toFixed(1)} ${(cy+rad*Math.sin(a)).toFixed(1)}`;
    body+=`<path d="M ${p(a0,R)} A ${R} ${R} 0 ${large} 1 ${p(a1,R)} L ${p(a1,r)} A ${r} ${r} 0 ${large} 0 ${p(a0,r)} Z" fill="${col}" stroke="${T.bg}" stroke-width="3"/>`;
    a0=a1;
  });
  body+=`<text x="${cx}" y="${cy-4}" text-anchor="middle" font-size="30" font-weight="700" fill="${T.ink}" font-family="${FONT}">${total}</text>`;
  body+=`<text x="${cx}" y="${cy+20}" text-anchor="middle" font-size="12" fill="${T.faint}" font-family="${FONT}">gateways</text>`;
  cats.forEach(([k,lab,col],i)=>{
    const y=170+i*46, pct=Math.round(counts[i]/total*100);
    body+=`<rect x="530" y="${y-13}" width="14" height="14" rx="4" fill="${col}"/>`;
    body+=`<text x="554" y="${y}" font-size="15" font-weight="600" fill="${T.ink}" font-family="${FONT}">${lab}</text>`;
    body+=`<text x="${W-40}" y="${y}" text-anchor="end" font-size="15" font-weight="700" fill="${col===T.bar||col==="#5c5c5c"?T.muted:col}" font-family="${FONT}">${counts[i]} · ${pct}%</text>`;
  });
  const label=`Custody model across ${total} crypto payment gateways in October 2026: ${counts[3]} custodial, ${counts[0]} non-custodial, ${counts[1]} self-hosted, ${counts[2]} hybrid.`;
  save("gw-oct26-custody-donut.svg", frame(W,H,label)+head(W,{left:30,right:30},"Who holds the money?",`Custody model across all ${total} gateways. Most still hold your funds first.`,`share of ${total}`)+body+foot(W,H,{right:30},"editorial classification, Oct 2026"));
}

/* 3. Scatter: fee vs coins supported (log x) */
{
  const W=920, H=520, M={top:86,right:40,bottom:70,left:64};
  const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
  const xOf=c=>M.left+ (Math.log10(Math.max(c,1))/3)*plotW; // 1..1000
  const yOf=f=>M.top+plotH-(f/5.2)*plotH;
  let body="";
  [1,10,100,1000].forEach(v=>{const x=xOf(v);
    body+=`<line x1="${x.toFixed(1)}" y1="${M.top}" x2="${x.toFixed(1)}" y2="${M.top+plotH}" stroke="${T.grid}"/>`+
    `<text x="${x.toFixed(1)}" y="${M.top+plotH+22}" text-anchor="middle" font-size="11" fill="${T.faint}" font-family="${FONT}">${v}</text>`;});
  [0,1,2,3,4,5].forEach(v=>{const y=yOf(v);
    body+=`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
    `<text x="${M.left-10}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${FONT}">${v}%</text>`;});
  body+=`<text x="${(M.left+plotW/2).toFixed(1)}" y="${H-28}" text-anchor="middle" font-size="12" fill="${T.muted}" font-family="${FONT}">coins supported (log scale)</text>`;
  gw.forEach(d=>{
    const good=d.name==="Shieldz", x=xOf(d.coins), y=yOf(d.fee_pct);
    body+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${good?9:5.5}" fill="${good?"url(#g)":T.bar}" stroke="${good?T.grnA:"#4a4a4a"}" stroke-width="${good?2:1}" opacity="${good?1:0.9}"/>`;
  });
  const lab=(name,dx,dy,anchor="start")=>{const d=gw.find(g=>g.name===name); if(!d) return "";
    return `<text x="${(xOf(d.coins)+dx).toFixed(1)}" y="${(yOf(d.fee_pct)+dy).toFixed(1)}" text-anchor="${anchor}" font-size="11.5" font-weight="600" fill="${name==="Shieldz"?T.grnA:T.muted}" font-family="${FONT}">${name==="Shieldz"?"Shieldz · $0 fee":name.split(" (")[0]}</text>`;};
  body+=lab("Shieldz",14,4)+lab("Sellix",10,4)+lab("BitPay",10,-8)+lab("DePay",-8,-10,"end")+lab("NOWPayments",-8,-10,"end")+lab("BTCPay Server",12,-6)+lab("B2BinPay",-8,14,"end")+lab("Binance Pay",10,-8);
  const label=`Scatter plot of ${N} crypto payment gateways: published fee percent versus number of coins supported, October 2026. Shieldz sits at zero percent with about 20 coins.`;
  save("gw-oct26-fee-vs-coins.svg", frame(W,H,label)+head(W,M,`Fee vs coin coverage, all ${N} gateways`,"Each dot is one gateway. Bottom-right is the sweet spot: wide coverage, low fee.","fee % vs coins")+body+foot(W,H,M,"published rates and docs, Oct 2026"));
}

/* 4. Histogram: launches per founding year */
{
  const W=920, H=470, M={top:86,right:40,bottom:78,left:44};
  const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
  const years=[]; for(let y=2011;y<=2026;y++) years.push(y);
  const counts=years.map(y=>gw.filter(g=>g.founded===y).length);
  const yMax=Math.max(...counts)+1;
  const slot=plotW/years.length, barW=Math.min(34, slot*0.62);
  let body="";
  for(let i=0;i<=4;i++){const y=M.top+plotH*i/4;const v=Math.round(yMax*(4-i)/4);
    body+=`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
    `<text x="${M.left-8}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${FONT}">${v}</text>`;}
  years.forEach((yr,i)=>{
    const cx=M.left+slot*i+slot/2, x=cx-barW/2, recent=yr>=2020;
    let h=(counts[i]/yMax)*plotH; if(counts[i]>0&&h<4)h=4;
    const y=M.top+plotH-h;
    if(counts[i]>0){
      body+=`<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="5" fill="${recent?"url(#g)":T.bar}"/>`;
      body+=`<text x="${cx.toFixed(1)}" y="${(y-8).toFixed(1)}" text-anchor="middle" font-size="12.5" font-weight="700" fill="${recent?T.grnA:T.ink}" font-family="${FONT}">${counts[i]}</text>`;
    }
    body+=`<text x="${cx.toFixed(1)}" y="${(M.top+plotH+20).toFixed(1)}" text-anchor="middle" font-size="10.5" fill="${T.faint}" font-family="${FONT}">${String(yr).slice(2)}</text>`;
  });
  body+=`<text x="${(M.left+plotW/2).toFixed(1)}" y="${M.top+plotH+42}" text-anchor="middle" font-size="12" fill="${T.muted}" font-family="${FONT}">year launched ('11 to '26)</text>`;
  const since2020=gw.filter(g=>g.founded>=2020).length;
  const label=`Histogram of launch years for ${N} crypto payment gateways: ${since2020} of ${N} launched in 2020 or later, with a wave of new entrants from 2020 to 2022.`;
  save("gw-oct26-founding-years.svg", frame(W,H,label)+head(W,M,`When today's ${N} gateways launched`,`Green bars are 2020 or later: ${since2020} of ${N}, launched in the last six years.`,"launches / yr")+body+foot(W,H,M,"company records, Oct 2026"));
}

/* 5. Columns: merchant KYC requirement */
{
  const W=920, H=470, M={top:86,right:30,bottom:92,left:30};
  const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
  const cats=[["none","No KYC","Start with a wallet or email",true],["optional","Optional KYC","KYC only above limits or for fiat",false],["required","KYC required","Business verification before accepting",false]];
  const counts=cats.map(([k])=>gw.filter(g=>g.kyc===k).length);
  const yMax=Math.max(...counts)*1.25, slot=plotW/3, barW=120;
  let body="";
  for(let i=0;i<=4;i++){const y=M.top+plotH*i/4;
    body+=`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`;}
  cats.forEach(([k,lab,note,good],i)=>{
    const cx=M.left+slot*i+slot/2, x=cx-barW/2;
    const h=(counts[i]/yMax)*plotH, y=M.top+plotH-h;
    body+=`<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="8" fill="${good?"url(#g)":T.bar}"/>`;
    body+=`<text x="${cx.toFixed(1)}" y="${(y-12).toFixed(1)}" text-anchor="middle" font-size="20" font-weight="700" fill="${good?T.grnA:T.ink}" font-family="${FONT}">${counts[i]} of ${N}</text>`;
    body+=`<text x="${cx.toFixed(1)}" y="${(M.top+plotH+26).toFixed(1)}" text-anchor="middle" font-size="14.5" font-weight="600" fill="${good?T.ink:T.muted}" font-family="${FONT}">${lab}</text>`;
    body+=`<text x="${cx.toFixed(1)}" y="${(M.top+plotH+46).toFixed(1)}" text-anchor="middle" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${note}</text>`;
  });
  const label=`Merchant KYC requirements across ${N} crypto payment gateways in October 2026: ${counts[0]} require no KYC, ${counts[1]} make it optional, ${counts[2]} require business verification before accepting payments.`;
  save("gw-oct26-kyc-split.svg", frame(W,H,label)+head(W,M,"KYC before you can accept a payment",`What each of the ${N} gateways requires from a new merchant.`,`of ${N} gateways`)+body+foot(W,H,M,"provider onboarding docs, Oct 2026"));
}

/* 6. Line: total processing cost by sale size */
{
  const W=920, H=520, M={top:86,right:170,bottom:70,left:64};
  const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
  const sales=[10,100,1000,10000];
  const series=[
    {name:"Stripe card",  f:v=>v*0.029+0.30, col:"#6b6b6b"},
    {name:"BitPay",       f:v=>v*0.02+0.25,  col:"#8a8a8a"},
    {name:"1% processor", f:v=>v*0.01,       col:"#4f4f4f"},
    {name:"Shieldz",      f:_=>0,            col:T.grnA, good:true},
  ];
  const xOf=v=>M.left+((Math.log10(v)-1)/3)*plotW;
  const yMaxV=300, yOf=c=>M.top+plotH-(c/yMaxV)*plotH;
  let body="";
  [0,75,150,225,300].forEach(v=>{const y=yOf(v);
    body+=`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
    `<text x="${M.left-10}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${FONT}">$${v}</text>`;});
  sales.forEach(v=>{const x=xOf(v);
    body+=`<text x="${x.toFixed(1)}" y="${M.top+plotH+24}" text-anchor="middle" font-size="11.5" fill="${T.faint}" font-family="${FONT}">$${v>=1000?(v/1000)+"k":v}</text>`;});
  body+=`<text x="${(M.left+plotW/2).toFixed(1)}" y="${H-24}" text-anchor="middle" font-size="12" fill="${T.muted}" font-family="${FONT}">sale amount (log scale)</text>`;
  series.forEach(s=>{
    const pts=sales.map(v=>`${xOf(v).toFixed(1)},${yOf(s.f(v)).toFixed(1)}`).join(" ");
    body+=`<polyline points="${pts}" fill="none" stroke="${s.good?"url(#gh)":s.col}" stroke-width="${s.good?4:2.5}" stroke-linecap="round"/>`;
    sales.forEach(v=>{body+=`<circle cx="${xOf(v).toFixed(1)}" cy="${yOf(s.f(v)).toFixed(1)}" r="${s.good?5:4}" fill="${s.good?T.grnA:s.col}"/>`;});
    const last=s.f(10000);
    body+=`<text x="${W-M.right+12}" y="${(yOf(last)+4).toFixed(1)}" font-size="13" font-weight="${s.good?700:600}" fill="${s.good?T.grnA:T.muted}" font-family="${FONT}">${s.name} ${s.good?"$0":"$"+Math.round(last)}</text>`;
  });
  const label="Total processing cost by sale size, October 2026: on a $10,000 sale Stripe card rails cost $290, BitPay $200, a 1 percent crypto processor $100, and Shieldz $0.";
  save("gw-oct26-cost-curve.svg", frame(W,H,label)+head(W,M,"What the fee becomes as sales grow","Total processing cost per sale at published rates. Percentages scale; $0 does not.","cost per sale")+body+foot(W,H,M,"published rates, Oct 2026"));
}

/* summary stats for the article */
const s = k => gw.filter(g=>g.kyc===k).length;
const c = k => gw.filter(g=>g.custody===k).length;
const fees = gw.map(g=>g.fee_pct).sort((a,b)=>a-b);
const median = fees.length % 2 === 1 ? fees[(fees.length-1)/2] : (fees[fees.length/2 - 1] + fees[fees.length/2]) / 2;
console.log(JSON.stringify({
  total: N,
  custody: {custodial:c("custodial"), non_custodial:c("non-custodial"), self_hosted:c("self-hosted"), hybrid:c("hybrid")},
  kyc: {none:s("none"), optional:s("optional"), required:s("required")},
  zero_fee: gw.filter(g=>g.fee_pct===0).length,
  median_fee: median,
  fiat: gw.filter(g=>g.settlement_fiat).length,
  lightning: gw.filter(g=>g.lightning).length,
  since2020: gw.filter(g=>g.founded>=2020).length,
  unverified: gw.filter(g=>!g.verified).length
}, null, 1));
