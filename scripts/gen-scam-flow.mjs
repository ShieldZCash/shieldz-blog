// Flow diagram for the crypto-payment-scams post: the overpayment refund scam.
// Structural, not measured. Run: node scripts/gen-scam-flow.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", box:"#1e1e1e", boxLine:"#333", red:"#e2635e", grnA:"#57d497", grnB:"#2fb573" };
const FONT = "ui-sans-serif,system-ui,sans-serif";
const W=760, H=440, top=132, boxW=158, boxH=104;

const stages=[
  { title:"1. Overpay", sub:"invoice paid with", sub2:"tainted funds" },
  { title:"2. The ask", sub:"“refund the extra,", sub2:"new address please”", bad:true },
  { title:"3. You refund", sub:"your clean crypto", sub2:"leaves your wallet", bad:true },
  { title:"4. The loss", sub:"original funds frozen,", sub2:"you are out both", bad:true },
];
const gap=(W-56-stages.length*boxW)/(stages.length-1);
const boxes=stages.map((s,i)=>{
  const x=28+i*(boxW+gap), cx=x+boxW/2;
  return `<rect x="${x}" y="${top}" width="${boxW}" height="${boxH}" rx="14" fill="${T.box}" stroke="${s.bad?T.red:T.boxLine}" stroke-width="${s.bad?1.6:1}"/>`+
    `<text x="${cx}" y="${top+40}" text-anchor="middle" font-size="16" font-weight="700" fill="${s.bad?T.red:T.ink}" font-family="${FONT}">${s.title}</text>`+
    `<text x="${cx}" y="${top+62}" text-anchor="middle" font-size="12" fill="${T.muted}" font-family="${FONT}">${s.sub}</text>`+
    `<text x="${cx}" y="${top+79}" text-anchor="middle" font-size="12" fill="${T.muted}" font-family="${FONT}">${s.sub2}</text>`;
}).join("\n");
const arrows=[0,1,2].map(i=>{
  const x1=28+i*(boxW+gap)+boxW+5, x2=28+(i+1)*(boxW+gap)-5, y=top+boxH/2;
  return `<line x1="${x1}" y1="${y}" x2="${x2-8}" y2="${y}" stroke="${T.boxLine}" stroke-width="1.8"/><path d="M${x2-9} ${y-4} l6 4 l-6 4" fill="none" stroke="${T.boxLine}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`;
}).join("\n");

// The fix bar across the bottom, in brand green.
const fy=top+boxH+52;
const fix=`
  <rect x="28" y="${fy-30}" width="${W-56}" height="58" rx="14" fill="url(#sg)" stroke="${T.grnA}" stroke-width="1.6"/>
  <text x="${W/2}" y="${fy-6}" text-anchor="middle" font-size="14.5" font-weight="700" fill="${T.grnA}" font-family="${FONT}">The fix: refund only to the address that paid, only after settlement, never under time pressure.</text>
  <text x="${W/2}" y="${fy+14}" text-anchor="middle" font-size="12" fill="${T.muted}" font-family="${FONT}">A new refund address plus urgency is the scam's signature. Slow down and it collapses.</text>`;

const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Anatomy of the overpayment refund scam: an invoice is overpaid with tainted funds, the scammer urgently requests the excess be refunded to a different address, the merchant sends clean crypto, then the original funds are frozen or clawed back and the merchant loses both. The fix is refunding only to the paying address, only after settlement, never under time pressure.">
  <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#153a2c"/><stop offset="1" stop-color="#0f2a20"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="${T.grnB}"/>
  <text x="28" y="44" font-size="20" font-weight="700" fill="${T.ink}" font-family="${FONT}">Anatomy of the overpayment refund scam</text>
  <text x="28" y="66" font-size="13" fill="${T.faint}" font-family="${FONT}">The most expensive merchant scam in crypto, because it spends your money, not the buyer's.</text>
  ${arrows}
  ${boxes}
  ${fix}
  <text x="${W-28}" y="${H-16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · structure of the scam, not a measured flow</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/refund-scam-flow.svg", svg);
console.log("wrote public/charts/refund-scam-flow.svg");
