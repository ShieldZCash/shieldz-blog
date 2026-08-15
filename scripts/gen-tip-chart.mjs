import { writeFileSync, mkdirSync } from "node:fs";
const T={bg:"#161616",line:"#262626",grid:"#242424",ink:"#fafafa",muted:"#9c9c9c",faint:"#777",green:"#2fb573",greenLight:"#57d497",bar:"#3a3a3a"};
function barChart({title,subtitle,unit,data,fmt,source}){
  const W=760,H=420,M={top:82,right:26,bottom:64,left:30},pW=W-M.left-M.right,pH=H-M.top-M.bottom;
  const max=Math.max(...data.map(d=>d.value)),yTop=max*1.16,slot=pW/data.length,barW=Math.min(78,slot*0.54);
  let grid="";for(let i=0;i<=4;i++){const y=M.top+pH*i/4;grid+=`<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${(W-M.right).toFixed(1)}" y2="${y.toFixed(1)}" stroke="${T.grid}"/>\n  `;}
  const bars=data.map((d,i)=>{const cx=M.left+slot*i+slot/2,x=cx-barW/2,h=Math.max(d.value/yTop*pH,4),y=M.top+pH-h;
    const fill=d.best?"url(#g)":T.bar,lf=d.best?T.greenLight:T.ink;
    return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" rx="7" fill="${fill}"/>
    <text x="${cx.toFixed(1)}" y="${(y-11).toFixed(1)}" text-anchor="middle" font-size="16" font-weight="700" fill="${lf}" font-family="ui-sans-serif,system-ui,sans-serif">${fmt(d.value)}</text>
    <text x="${cx.toFixed(1)}" y="${(M.top+pH+26).toFixed(1)}" text-anchor="middle" font-size="13" font-weight="${d.best?700:400}" fill="${d.best?T.greenLight:T.muted}" font-family="ui-sans-serif,system-ui,sans-serif">${d.label}</text>`;}).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${title}. ${subtitle}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.greenLight}"/><stop offset="1" stop-color="${T.green}"/></linearGradient></defs>
  <rect x="0.5" y="0.5" width="${W-1}" height="${H-1}" rx="16" fill="${T.bg}" stroke="${T.line}"/>
  <text x="${M.left}" y="38" font-size="20" font-weight="700" fill="${T.ink}" font-family="ui-sans-serif,system-ui,sans-serif">${title}</text>
  <text x="${M.left}" y="60" font-size="13" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${subtitle}</text>
  <text x="${W-M.right}" y="38" text-anchor="end" font-size="12" font-weight="600" fill="${T.green}" font-family="ui-sans-serif,system-ui,sans-serif">${unit}</text>
  ${grid}${bars}
  <text x="${M.left}" y="${H-16}" font-size="11" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">${source}</text>
  <text x="${W-M.right}" y="${H-16}" text-anchor="end" font-size="11" fill="${T.faint}" font-family="ui-sans-serif,system-ui,sans-serif">shieldz.cash</text></svg>`;
}
const usd=v=>"$"+v.toFixed(2);
const svg=barChart({title:"What you keep from a $5 tip",subtitle:"Amount left after platform + processing fees",unit:"USD kept",fmt:usd,
  source:"Published platform fees: Patreon 8%, Buy Me a Coffee 5%, Ko-fi 0% + Stripe 2.9%+30¢. Shieldz: 0% platform fee.",
  data:[{label:"Patreon",value:4.25},{label:"Ko-fi",value:4.56},{label:"Buy Me a Coffee",value:4.75},{label:"Shieldz",value:5.00,best:true}]});
mkdirSync("public/charts",{recursive:true});writeFileSync("public/charts/tip-jar-fees.svg",svg);console.log("wrote tip-jar-fees.svg");
