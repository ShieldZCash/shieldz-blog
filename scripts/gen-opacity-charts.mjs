// Charts for the pricing-transparency post (dataset v1.2.0, n=86).
// Run: node scripts/gen-opacity-charts.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", bar:"#3a3a3a" };
const F = "ui-sans-serif,system-ui,sans-serif";
const GRAD = `<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#57d497"/><stop offset="1" stop-color="#2fb573"/></linearGradient><linearGradient id="rg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0706a"/><stop offset="1" stop-color="#c9524c"/></linearGradient></defs>`;

mkdirSync("public/charts", { recursive: true });

const frame = (W,H,title,sub,aria,body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${aria}">
  ${GRAD}
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="#57d497"/>
  <text x="34" y="38" font-size="20" font-weight="700" fill="${T.ink}" font-family="${F}">${title}</text>
  <text x="34" y="60" font-size="13" fill="${T.faint}" font-family="${F}">${sub}</text>
  ${body}
  <text x="${W-40}" y="${H-14}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · open dataset, n=86, Aug 2026</text>
</svg>
`;

// ── 1. Headline split: published vs not ─────────────────────────────────────
{
  const W=920,H=300, M={left:34,right:40};
  const y=130, h=64, plotW=W-M.left-M.right;
  const wPub=plotW*61/86, wNo=plotW-wPub;
  const body=`
  <rect x="${M.left}" y="${y}" width="${wPub.toFixed(1)}" height="${h}" rx="8" fill="url(#sg)"/>
  <rect x="${(M.left+wPub+3).toFixed(1)}" y="${y}" width="${(wNo-3).toFixed(1)}" height="${h}" rx="8" fill="url(#rg)"/>
  <text x="${M.left}" y="${y-14}" font-size="14" font-weight="700" fill="#57d497" font-family="${F}">61 gateways (71%) publish a checkable fee</text>
  <text x="${W-M.right}" y="${y-14}" text-anchor="end" font-size="14" font-weight="700" fill="#e0706a" font-family="${F}">25 (29%) do not</text>
  <text x="${(M.left+wPub/2).toFixed(1)}" y="${y+h/2+6}" text-anchor="middle" font-size="17" font-weight="700" fill="#0b2417" font-family="${F}">fee on an official page</text>
  <text x="${(M.left+wPub+wNo/2).toFixed(1)}" y="${y+h/2+6}" text-anchor="middle" font-size="15" font-weight="700" fill="#2a0f0e" font-family="${F}">not published</text>
  <text x="${M.left}" y="${y+h+38}" font-size="13" fill="${T.muted}" font-family="${F}">"Not published" = the standard per-transaction fee could not be confirmed on the provider's own pricing page or docs; the dataset marks those fees as indicative.</text>`;
  writeFileSync("public/charts/opq-share.svg", frame(W,H,
    "Can you check the fee before you sign up?",
    "86 crypto payment gateways, August 2026. Verification against each provider's own pricing page.",
    "Stacked bar of 86 crypto payment gateways in August 2026: 61 gateways, 71 percent, publish a fee checkable on an official page; 25 gateways, 29 percent, do not publish a verifiable fee.",
    body));
  console.log("wrote opq-share.svg");
}

// ── 2. Opacity rate by custody model ────────────────────────────────────────
{
  const data=[
    { name:"Custodial",     n:56, o:23 },
    { name:"Hybrid",        n:5,  o:1  },
    { name:"Non-custodial", n:21, o:1, green:true },
    { name:"Self-hosted",   n:4,  o:0, green:true },
  ];
  const W=920,H=400, M={top:92,right:120,bottom:40,left:150};
  const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom, rowH=plotH/data.length, barH=Math.min(36,rowH*0.55), xMax=50;
  const rows=data.map((d,i)=>{
    const pct=Math.round(100*d.o/d.n);
    const cy=M.top+rowH*i+rowH/2;
    let w=(pct/xMax)*plotW; if(w<8)w=8;
    const fill=d.green?"url(#sg)":"url(#rg)";
    return `<text x="${M.left-10}" y="${(cy+4).toFixed(1)}" text-anchor="end" font-size="13.5" font-weight="600" fill="${T.muted}" font-family="${F}">${d.name}</text>`+
      `<rect x="${M.left}" y="${(cy-barH/2).toFixed(1)}" width="${w.toFixed(1)}" height="${barH}" rx="6" fill="${fill}"/>`+
      `<text x="${(M.left+w+10).toFixed(1)}" y="${(cy+4).toFixed(1)}" font-size="13.5" font-weight="700" fill="${T.ink}" font-family="${F}">${pct}%  <tspan font-weight="400" fill="${T.faint}">(${d.o} of ${d.n})</tspan></text>`;
  }).join("\n  ");
  writeFileSync("public/charts/opq-by-custody.svg", frame(W,H,
    "Share of gateways with unpublished fees, by custody model",
    "Opacity clusters where the provider holds the money: 41% of custodial gateways vs 5% of non-custodial.",
    "Horizontal bar chart of the share of gateways with unpublished fees by custody model, August 2026: custodial 41 percent, 23 of 56; hybrid 20 percent, 1 of 5; non-custodial 5 percent, 1 of 21; self-hosted 0 percent, 0 of 4.",
    rows));
  console.log("wrote opq-by-custody.svg");
}

// ── 3. Opacity by fiat settlement and KYC requirement ───────────────────────
{
  const data=[
    { name:"KYC required",     n:53, o:21 },
    { name:"Fiat settlement",  n:57, o:21 },
    { name:"Crypto-only",      n:29, o:4, green:true },
    { name:"No KYC to start",  n:24, o:2, green:true },
  ];
  const W=920,H=400, M={top:92,right:120,bottom:40,left:170};
  const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom, rowH=plotH/data.length, barH=Math.min(36,rowH*0.55), xMax=50;
  const rows=data.map((d,i)=>{
    const pct=Math.round(100*d.o/d.n);
    const cy=M.top+rowH*i+rowH/2;
    let w=(pct/xMax)*plotW; if(w<8)w=8;
    const fill=d.green?"url(#sg)":"url(#rg)";
    return `<text x="${M.left-10}" y="${(cy+4).toFixed(1)}" text-anchor="end" font-size="13.5" font-weight="600" fill="${T.muted}" font-family="${F}">${d.name}</text>`+
      `<rect x="${M.left}" y="${(cy-barH/2).toFixed(1)}" width="${w.toFixed(1)}" height="${barH}" rx="6" fill="${fill}"/>`+
      `<text x="${(M.left+w+10).toFixed(1)}" y="${(cy+4).toFixed(1)}" font-size="13.5" font-weight="700" fill="${T.ink}" font-family="${F}">${pct}%  <tspan font-weight="400" fill="${T.faint}">(${d.o} of ${d.n})</tspan></text>`;
  }).join("\n  ");
  writeFileSync("public/charts/opq-traits.svg", frame(W,H,
    "Unpublished fees travel with KYC and fiat settlement",
    "The same providers that gate signup and touch bank rails are the ones without a public price.",
    "Horizontal bar chart of the share of gateways with unpublished fees by trait, August 2026: KYC required 40 percent, 21 of 53; fiat settlement 37 percent, 21 of 57; crypto-only 14 percent, 4 of 29; no KYC to start 8 percent, 2 of 24.",
    rows));
  console.log("wrote opq-traits.svg");
}

// ── 4. Median advertised fee by trait ───────────────────────────────────────
{
  const data=[
    { name:"No KYC to start",        v:0.4, green:true },
    { name:"Fee published (all 61)", v:0.5, green:true },
    { name:"Crypto-only settlement", v:0.5, green:true },
    { name:"KYC required",           v:1.0 },
    { name:"Fiat settlement",        v:1.0 },
    { name:"Fee not published*",     v:1.0 },
  ];
  const W=920,H=470, M={top:92,right:110,bottom:56,left:210};
  const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom, rowH=plotH/data.length, barH=Math.min(32,rowH*0.55), xMax=1.2;
  const rows=data.map((d,i)=>{
    const cy=M.top+rowH*i+rowH/2;
    let w=(d.v/xMax)*plotW; if(w<8)w=8;
    const fill=d.green?"url(#sg)":T.bar;
    return `<text x="${M.left-10}" y="${(cy+4).toFixed(1)}" text-anchor="end" font-size="13.5" font-weight="600" fill="${T.muted}" font-family="${F}">${d.name}</text>`+
      `<rect x="${M.left}" y="${(cy-barH/2).toFixed(1)}" width="${w.toFixed(1)}" height="${barH}" rx="6" fill="${fill}"/>`+
      `<text x="${(M.left+w+10).toFixed(1)}" y="${(cy+4).toFixed(1)}" font-size="13.5" font-weight="700" fill="${d.green?"#57d497":T.ink}" font-family="${F}">${d.v.toFixed(1)}%</text>`;
  }).join("\n  ");
  const foot=`<text x="${M.left}" y="${H-30}" font-size="12" fill="${T.faint}" font-family="${F}">*Median of the indicative figures collected from third-party sources for the 25 gateways without an official public price.</text>`;
  writeFileSync("public/charts/opq-fee-medians.svg", frame(W,H,
    "Median per-transaction fee, by transparency trait",
    "Groups that publish and skip KYC cluster at 0.4 to 0.5%; groups that gate and hide cluster at 1%.",
    "Horizontal bar chart of median per-transaction fees by trait, August 2026: no KYC to start 0.4 percent; fee published 0.5 percent; crypto-only settlement 0.5 percent; KYC required 1 percent; fiat settlement 1 percent; fee not published, indicative, 1 percent.",
    rows+foot));
  console.log("wrote opq-fee-medians.svg");
}
