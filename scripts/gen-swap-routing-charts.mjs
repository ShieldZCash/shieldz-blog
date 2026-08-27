// Charts for the cross-chain swap routing post.
// 1) swap-routing-flow.svg: lifecycle of a swap-settled payment (structural diagram)
// 2) swap-net-received.svg: what the merchant keeps from a $100 sale, three paths
// Run: node scripts/gen-swap-routing-charts.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", grid:"#242424", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", box:"#1e1e1e", boxLine:"#333", bar:"#3a3a3a", grnA:"#57d497", grnB:"#2fb573" };
const FONT = "ui-sans-serif,system-ui,sans-serif";
const MONO = "Menlo,ui-monospace,monospace";
mkdirSync("public/charts",{recursive:true});

/* 1. Lifecycle diagram */
{
  const W=760, H=430, top=140, boxW=158, boxH=100;
  const stages=[
    { title:"Buyer pays", sub:"BTC, ETH, LTC,", sub2:"TON, ZEC, more" },
    { title:"Quote &amp; rank", sub:"3 rails quoted,", sub2:"best net output wins", green:true },
    { title:"Rail swaps", sub:"independent,", sub2:"non-custodial" },
    { title:"You settle", sub:"one coin, straight", sub2:"to your wallet", green:true },
  ];
  const gap=(W-56-stages.length*boxW)/(stages.length-1);
  const boxes=stages.map((s,i)=>{
    const x=28+i*(boxW+gap), cx=x+boxW/2;
    return `<rect x="${x}" y="${top}" width="${boxW}" height="${boxH}" rx="14" fill="${s.green?"url(#sg)":T.box}" stroke="${s.green?T.grnA:T.boxLine}" stroke-width="${s.green?2:1}"/>`+
      `<text x="${cx}" y="${top+38}" text-anchor="middle" font-size="16" font-weight="700" fill="${T.ink}" font-family="${FONT}">${s.title}</text>`+
      `<text x="${cx}" y="${top+60}" text-anchor="middle" font-size="12" fill="${T.muted}" font-family="${FONT}">${s.sub}</text>`+
      `<text x="${cx}" y="${top+77}" text-anchor="middle" font-size="12" fill="${T.muted}" font-family="${FONT}">${s.sub2}</text>`;
  }).join("\n");
  const arrows=[0,1,2].map(i=>{
    const x1=28+i*(boxW+gap)+boxW+5, x2=28+(i+1)*(boxW+gap)-5, y=top+boxH/2;
    return `<line x1="${x1}" y1="${y}" x2="${x2-8}" y2="${y}" stroke="${T.boxLine}" stroke-width="1.8"/><path d="M${x2-9} ${y-4} l6 4 l-6 4" fill="none" stroke="${T.boxLine}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`;
  }).join("\n");
  // health-probe note above stage 2, refund note below stage 3
  const q_cx=28+1*(boxW+gap)+boxW/2, s_cx=28+2*(boxW+gap)+boxW/2;
  const notes=
    `<line x1="${q_cx}" y1="${top-34}" x2="${q_cx}" y2="${top-6}" stroke="${T.grnB}" stroke-width="1.4" stroke-dasharray="4 4"/>`+
    `<text x="${q_cx}" y="${top-42}" text-anchor="middle" font-size="12" fill="${T.grnA}" font-family="${FONT}">route health probed every 5 min; unhealthy rails hidden</text>`+
    `<line x1="${s_cx}" y1="${top+boxH+6}" x2="${s_cx}" y2="${top+boxH+34}" stroke="${T.grnB}" stroke-width="1.4" stroke-dasharray="4 4"/>`+
    `<text x="${s_cx}" y="${top+boxH+52}" text-anchor="middle" font-size="12" fill="${T.grnA}" font-family="${FONT}">if the swap fails, funds return by the refund path</text>`+
    `<text x="${s_cx}" y="${top+boxH+69}" text-anchor="middle" font-size="12" fill="${T.faint}" font-family="${FONT}">checked before the coin is even offered</text>`;
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Lifecycle of a swap-settled crypto payment: the buyer pays any supported coin, three independent rails are quoted and ranked by net output, the winning rail executes the swap non-custodially, and the merchant settles in one coin straight to their own wallet. Route health is probed every five minutes and a refund path is verified before a coin is offered.">
  <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#153a2c"/><stop offset="1" stop-color="#0f2a20"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="${T.grnB}"/>
  <text x="28" y="44" font-size="20" font-weight="700" fill="${T.ink}" font-family="${FONT}">How a swap-settled payment routes</text>
  <text x="28" y="66" font-size="13" fill="${T.faint}" font-family="${FONT}">The gateway never holds the funds. It quotes, ranks and watches; independent rails move the money.</text>
  ${arrows}
  ${boxes}
  ${notes}
  <text x="${W-28}" y="${H-16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${MONO}">shieldz.cash · structure of a swap-settled payment</text>
</svg>
`;
  writeFileSync("public/charts/swap-routing-flow.svg", svg);
  console.log("wrote public/charts/swap-routing-flow.svg");
}

/* 2. Net received on a $100 sale, three paths */
{
  const data=[
    { name:"Custodial processor", val:99.00, label:"$99.00", note:"1% median fee (our 50-gateway data)" },
    { name:"Swap-settle via rails", val:99.70, label:"~$99.70", note:"$0 platform fee; rail spread only", good:true },
    { name:"Direct same-coin", val:99.99, label:"~$99.99", note:"$0 fee; about a cent of gas", good:true },
  ];
  const W=920, H=470, M={top:84,right:30,bottom:92,left:30};
  const plotW=W-M.left-M.right, plotH=H-M.top-M.bottom;
  const yMin=98.5, yMax=100.15, slot=plotW/data.length, barW=Math.min(130, slot*0.5);
  let grid="";
  [98.5,99.0,99.5,100.0].forEach(v=>{
    const y=M.top+plotH-((v-yMin)/(yMax-yMin))*plotH;
    grid+=`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${W-M.right}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>`+
      `<text x="${W-M.right+4}" y="${(y+4).toFixed(1)}" font-size="11" fill="${T.faint}" font-family="${FONT}">$${v.toFixed(1)}</text>`;
  });
  const bars=data.map((d,i)=>{
    const cx=M.left+slot*i+slot/2, x=cx-barW/2;
    const h=((d.val-yMin)/(yMax-yMin))*plotH, y=M.top+plotH-h;
    return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="8" fill="${d.good?"url(#g)":T.bar}"/>`+
      `<text x="${cx.toFixed(1)}" y="${(y-11).toFixed(1)}" text-anchor="middle" font-size="17" font-weight="700" fill="${d.good?T.grnA:T.ink}" font-family="${FONT}">${d.label}</text>`+
      `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+24).toFixed(1)}" text-anchor="middle" font-size="14" font-weight="600" fill="${d.good?T.ink:T.muted}" font-family="${FONT}">${d.name}</text>`+
      `<text x="${cx.toFixed(1)}" y="${(M.top+plotH+43).toFixed(1)}" text-anchor="middle" font-size="11.5" fill="${T.faint}" font-family="${FONT}">${d.note}</text>`;
  }).join("\n  ");
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="What a merchant keeps from a 100 dollar sale: about 99 dollars through a custodial processor at the 1 percent median fee, about 99.70 through swap-settle where the only cost is the rail spread, and about 99.99 with direct same-coin settlement. Swap figures illustrative.">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.grnA}"/><stop offset="1" stop-color="${T.grnB}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#g)"/>
  <text x="${M.left}" y="40" font-size="21" font-weight="700" fill="${T.ink}" font-family="${FONT}">What you keep from a $100 sale</text>
  <text x="${M.left}" y="62" font-size="13" fill="${T.faint}" font-family="${FONT}">Higher is better. With no platform fee, the only swap cost is the rail's own spread.</text>
  <text x="${W-M.right}" y="40" text-anchor="end" font-size="12" font-weight="700" fill="${T.grnA}" font-family="${FONT}">net received</text>
  ${grid}
  ${bars}
  <text x="${W-M.right}" y="${H-15}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="${MONO}">shieldz.cash · median fee from our 50-gateway dataset; swap spread illustrative</text>
</svg>
`;
  writeFileSync("public/charts/swap-net-received.svg", svg);
  console.log("wrote public/charts/swap-net-received.svg");
}
