// Flow diagram for the agent pay-to-unlock announcement post.
// Structural, not measured. Run: node scripts/gen-agent-unlock-chart.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const T = { bg:"#161616", line:"#262626", ink:"#fafafa", muted:"#9c9c9c", faint:"#777", box:"#1e1e1e", boxLine:"#333", grnA:"#57d497", grnB:"#2fb573" };
const FONT="ui-sans-serif,system-ui,sans-serif";
const W=760, H=430, top=136, boxW=158, boxH=104;

const stages=[
  { title:"Agent creates", sub:"create_unlock over", sub2:"MCP, no API key", green:true },
  { title:"Paywall link", sub:"hosted page with", sub2:"price and pitch" },
  { title:"Buyer pays", sub:"crypto straight to", sub2:"the owner's wallet", green:true },
  { title:"Auto-delivery", sub:"secret revealed on", sub2:"paid confirmation" },
];
const gap=(W-56-stages.length*boxW)/(stages.length-1);
const boxes=stages.map((s,i)=>{
  const x=28+i*(boxW+gap), cx=x+boxW/2;
  return `<rect x="${x}" y="${top}" width="${boxW}" height="${boxH}" rx="14" fill="${s.green?"url(#sg)":T.box}" stroke="${s.green?T.grnA:T.boxLine}" stroke-width="${s.green?2:1}"/>`+
    `<text x="${cx}" y="${top+40}" text-anchor="middle" font-size="16" font-weight="700" fill="${T.ink}" font-family="${FONT}">${s.title}</text>`+
    `<text x="${cx}" y="${top+62}" text-anchor="middle" font-size="12" fill="${T.muted}" font-family="${FONT}">${s.sub}</text>`+
    `<text x="${cx}" y="${top+79}" text-anchor="middle" font-size="12" fill="${T.muted}" font-family="${FONT}">${s.sub2}</text>`;
}).join("\n");
const arrows=[0,1,2].map(i=>{
  const x1=28+i*(boxW+gap)+boxW+5, x2=28+(i+1)*(boxW+gap)-5, y=top+boxH/2;
  return `<line x1="${x1}" y1="${y}" x2="${x2-8}" y2="${y}" stroke="${T.boxLine}" stroke-width="1.8"/><path d="M${x2-9} ${y-4} l6 4 l-6 4" fill="none" stroke="${T.boxLine}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`;
}).join("\n");
const o_cx=28+3*(boxW+gap)+boxW/2, a_cx=28+boxW/2;
const notes=
  `<line x1="${a_cx}" y1="${top-34}" x2="${a_cx}" y2="${top-6}" stroke="${T.grnB}" stroke-width="1.4" stroke-dasharray="4 4"/>`+
  `<text x="${a_cx}" y="${top-42}" text-anchor="start" font-size="12" fill="${T.grnA}" font-family="${FONT}" transform="translate(-52,0)">one tool call: address, price, payload, aup_accepted</text>`+
  `<line x1="${o_cx}" y1="${top+boxH+6}" x2="${o_cx}" y2="${top+boxH+34}" stroke="${T.grnB}" stroke-width="1.4" stroke-dasharray="4 4"/>`+
  `<text x="${o_cx}" y="${top+boxH+52}" text-anchor="middle" font-size="12" fill="${T.grnA}" font-family="${FONT}">owner gets a one-time email on the first sale</text>`+
  `<text x="${o_cx}" y="${top+boxH+69}" text-anchor="middle" font-size="12" fill="${T.faint}" font-family="${FONT}">with a claim link to a full dashboard</text>`;
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="How an AI agent sells a digital product with Shieldz: the agent calls the create_unlock MCP tool with an address, price, payload and acceptable-use confirmation; a hosted paywall link is created; the buyer pays crypto straight to the owner's wallet; the secret is revealed automatically on paid confirmation, and the owner gets a one-time email on the first sale with a dashboard claim link.">
  <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#153a2c"/><stop offset="1" stop-color="#0f2a20"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <rect x="0" y="0" width="${W}" height="5" fill="${T.grnB}"/>
  <text x="28" y="44" font-size="20" font-weight="700" fill="${T.ink}" font-family="${FONT}">An AI agent sells a file, end to end</text>
  <text x="28" y="66" font-size="13" fill="${T.faint}" font-family="${FONT}">No account, no API key, no custody. Delivery is automatic; the human owner claims later.</text>
  ${arrows}
  ${boxes}
  ${notes}
  <text x="${W-28}" y="${H-16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="Menlo,ui-monospace,monospace">shieldz.cash · structure of an agent-created unlock sale</text>
</svg>
`;
mkdirSync("public/charts",{recursive:true});
writeFileSync("public/charts/agent-unlock-flow.svg", svg);
console.log("wrote public/charts/agent-unlock-flow.svg");
