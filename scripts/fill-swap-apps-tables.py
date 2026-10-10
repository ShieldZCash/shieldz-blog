#!/usr/bin/env python3
"""Fill the generated parts of 81-cross-chain-swap-apps-compared.md from the dataset.

Everything between `<!-- table:NAME -->` and `<!-- /table -->` (and the
`<!-- jsonld -->` block) is regenerated from public/data/cross-chain-swaps-2026.json,
so a monthly update is: copy the new JSON in, rerun this, rerun the chart script.
It also sets each chart <img>'s width/height from the SVG it points at.
Run from the blog root: python3 scripts/fill-swap-apps-tables.py
"""
import json
import re
from pathlib import Path

POST = Path("src/content/blog/81-cross-chain-swap-apps-compared.md")
d = json.loads(Path("public/data/cross-chain-swaps-2026.json").read_text())
apps = d["apps"]
protocols = d.get("protocols", [])
active = [a for a in apps if a["status"] == "active"]

cell = lambda s: (s or "").replace("|", "\\|").strip()
yn = lambda v: "?" if v is None else ("yes" if v else "no")


def fee(a):
    if a["fee_pct"] is None:
        return "not published"
    pct = f"{a['fee_pct']:g}%"
    if a["verified"] and a["source_url"]:
        return f"[{pct}]({a['source_url']})"
    return f"*{pct}\\**"


def app_table(category):
    # Lowest verified fee first, then unverified figures, then apps with no published fee.
    rank = lambda a: (0 if a["verified"] else 1 if a["fee_pct"] is not None else 2, a["fee_pct"] or 0, a["name"].lower())
    rows = sorted((a for a in active if a["category"] == category), key=rank)
    out = ["| App | Fee | What the fee page says | Custody | KYC | Native BTC | Routes via |",
           "|---|---|---|---|---|---|---|"]
    for a in rows:
        out.append(f"| [{cell(a['name'])}]({a['url']}) | {fee(a)} | {cell(a['fee_note']) or '—'} | {a['custody']} "
                   f"| {a['kyc']} | {yn(a['native_btc'])} | {cell(a['routes_via']) or '—'} |")
    return "\n".join(out)


def protocol_table():
    rows = sorted((a for a in protocols if a["status"] == "active"), key=lambda a: a["name"].lower())
    out = ["| Protocol | Type | Fee | Fee detail | Native BTC | Solana |", "|---|---|---|---|---|---|"]
    for a in rows:
        out.append(f"| [{cell(a['name'])}]({a['url']}) | {a['category']} | {fee(a)} | {cell(a['fee_note']) or 'not researched'} "
                   f"| {yn(a['native_btc'])} | {yn(a['solana'])} |")
    return "\n".join(out)


def inactive_table():
    rows = [(a, "app") for a in apps if a["status"] == "inactive"] + [(a, "protocol") for a in protocols if a["status"] == "inactive"]
    out = ["| Name | Kind | What we found (10 October 2026) |", "|---|---|---|"]
    for a, kind in sorted(rows, key=lambda r: r[0]["name"].lower()):
        out.append(f"| {cell(a['name'])} | {kind} | {cell(a['status_note'])} |")
    return "\n".join(out)


FAQ = [
    ("Which cross-chain swap app has the lowest fees?",
     "Ten of the 81 apps compared in October 2026 add no fee of their own on a verified, current page: Backpack, CypherGoat, PancakeSwap, Rango, Superbridge, SwapSpace, Swapzone, Trocador, Uniswap and Unstoppable Wallet. The underlying protocol or exchange still charges its own fee. Among apps that charge, KyberSwap (0.1% on common EVM pairs) and Shieldz Swap (0.15%) are lowest."),
    ("How much does MetaMask charge for cross-chain swaps?",
     "0.875% per bridge or cross-chain swap, according to MetaMask's support page. Phantom charges 0.85%, Zerion 0.67% and the Base app up to 1%."),
    ("Are cross-chain swaps safe?",
     "It depends on custody. Non-custodial apps keep your coins in contracts, vaults or solver escrows and refund failed swaps by code. 24 of the 81 apps are custodial, receiving your coins before sending the other coin back, and 12 more depend on the route."),
    ("Do cross-chain swaps require KYC?",
     "Not by default: none of the 81 apps requires an account or ID to start a swap. But 30 of them, including all 15 instant exchanges, can hold a flagged swap until you verify your identity."),
    ("What is the difference between a cross-chain swap app and a protocol?",
     "A protocol such as THORChain, Chainflip, NEAR Intents or Relay moves value between chains. An app is where you start the swap: it asks protocols for quotes and adds its own fee. Protocol fees are usually tiny; most of what you pay is the app's fee."),
]


def jsonld():
    faq = {"@context": "https://schema.org", "@type": "FAQPage",
           "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": t}} for q, t in FAQ]}
    items = sorted(active, key=lambda a: a["name"].lower())
    lst = {"@context": "https://schema.org", "@type": "ItemList", "name": f"{len(items)} cross-chain swap apps compared (October 2026)",
           "numberOfItems": len(items), "itemListOrder": "https://schema.org/ItemListUnordered",
           "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": a["name"], "url": a["url"]} for i, a in enumerate(items)]}
    return "\n".join(f'<script type="application/ld+json">\n{json.dumps(o, indent=2, ensure_ascii=False)}\n</script>' for o in (faq, lst))


s = POST.read_text()
blocks = {"inactive": inactive_table(), "protocols": protocol_table(),
          **{c: app_table(c) for c in ["aggregator", "wallet", "frontend", "instant-exchange", "exchange-aggregator"]}}
for name, body in blocks.items():
    s, n = re.subn(rf"(<!-- table:{re.escape(name)} -->).*?(<!-- /table -->)", lambda m: f"{m.group(1)}\n{body}\n{m.group(2)}", s, flags=re.S)
    assert n == 1, f"marker for {name} found {n} times"
s, n = re.subn(r"(<!-- jsonld -->).*?(<!-- /jsonld -->)", lambda m: f"{m.group(1)}\n{jsonld()}\n{m.group(2)}", s, flags=re.S)
assert n == 1


def size(match):
    svg = Path("public") / match.group(1).removeprefix("/blog/").lstrip("/")
    head = svg.read_text()[:400]
    w, h = (int(x) for x in re.search(r'width="(\d+)" height="(\d+)"', head).groups())
    return f'{match.group(0).split(" width=")[0]} width="760" height="{round(h * 760 / w)}"'


s = re.sub(r'src="(/blog/charts/swapapps-[\w-]+\.svg)" alt="[^"]*" width="\d+" height="\d+"', size, s)
POST.write_text(s)
counts = {k: v.count("\n") - 1 for k, v in blocks.items()}
print(f"filled: {counts}")
