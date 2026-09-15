---
title: "BTCPay Server vs CoinGate: Self-Hosted vs Regulated (2026)"
description: "BTCPay Server vs CoinGate compared on fees, custody, KYC and coin coverage: the self-hosted sovereign option against the regulated EU gateway."
pubDate: 2026-09-15
author: "Deniz Yanbollu"
tags: ["comparison", "btcpay-server", "coingate", "payment-gateway", "crypto"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/btcpay-server-vs-coingate.png"
---

BTCPay Server and CoinGate both show up on every "crypto payment gateway" shortlist, and both have been in the market for close to a decade, but they answer to nobody the same way. BTCPay Server is free, open-source software you run yourself with no company standing behind it. CoinGate is a regulated Lithuanian business that holds your funds briefly and can pay you out in euros. This post compares them on the things that actually decide the choice: fees, custody, KYC, coins, and who is on the hook when something goes wrong.

The numbers here come from the same dataset behind our [three-way NOWPayments vs BTCPay Server vs CoinGate comparison](/blog/nowpayments-vs-btcpay-vs-coingate) and the [50 crypto payment gateways](/blog/50-crypto-payment-gateways-compared) study, so every figure is one you can check against a published source.

## In this guide

- [The two models in one table](#the-two-models-in-one-table)
- [Annual cost at real volume](#annual-cost-at-real-volume)
- [BTCPay Server in detail](#btcpay-server-run-it-yourself)
- [CoinGate in detail](#coingate-regulated-and-hosted)
- [Where Shieldz fits](#where-shieldz-fits-full-disclosure)
- [Which one should you pick?](#which-one-should-you-pick)
- [FAQ](#faq)

## The two models in one table

| | BTCPay Server | CoinGate |
| --- | --- | --- |
| **Platform fee** | $0 (you host it) | ~1% per transaction |
| **Custody** | Non-custodial | Custodial, briefly, with fiat settlement |
| **KYC** | None | Business verification (KYB) |
| **Self-hosting** | Required | No |
| **Coins** | BTC + Lightning native, altcoins via plugins | 70+ |
| **Fiat settlement** | No | Yes (EUR payout) |
| **Open source** | Fully | No |
| **Founded** | 2017 | 2014 |
| **Best for** | Sovereignty and $0 fees, if you can run a server | Compliance paperwork and EUR settlement |

There is no overlap in what these two are actually selling. BTCPay Server sells you control; CoinGate sells you not having to think about infrastructure or compliance. If you want the fuller market picture, the [50-gateway study](/blog/50-crypto-payment-gateways-compared) covers custody, fees and KYC across the whole field, and [most gateways in it are still custodial](/blog/are-crypto-payment-gateways-custodial).

## Annual cost at real volume

<figure style="margin:28px 0">
  <a href="/blog/charts/btcpay-coingate-annual-cost.svg"><img src="/blog/charts/btcpay-coingate-annual-cost.svg" alt="Bar chart of annual platform cost at 10,000 dollars a month processed, September 2026 rates: CoinGate about 1,200 dollars a year at 1 percent, BTCPay Server about 240 dollars a year in VPS hosting with a 0 percent platform fee, Shieldz 0 dollars." width="920" height="470" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Published rates, September 2026. BTCPay Server swaps a percentage fee for a fixed hosting bill; CoinGate's 1% scales with revenue.</figcaption>
</figure>

At $10,000 a month processed, CoinGate's 1% works out to roughly $1,200 a year. BTCPay Server has no platform fee at all, but you are paying for a VPS (typically $10 to $30 a month, call it $240 a year at the low end) plus your own time to keep it patched and backed up. Below a certain volume the VPS bill can exceed what CoinGate would have charged; above it, BTCPay pulls ahead and keeps pulling ahead, because a flat cost does not scale with revenue and a percentage fee does. The trade-off is explored further in the [self-hosted gateway guide](/blog/self-hosted-crypto-payment-gateway).

## BTCPay Server, run it yourself

BTCPay Server is fully open source, non-custodial by construction, and has no company in the loop to charge a fee, request KYC, or freeze an account. Payments go straight from the customer's wallet to yours. It is Bitcoin and Lightning first, with altcoin support coming from a community plugin ecosystem rather than native integration.

The cost is entirely operational: you provision the server, run the node, apply updates, and hold your own backups. If it goes down, there is no support ticket to file, only your own infrastructure to fix. For a merchant with technical staff and steady Bitcoin volume, that trade is usually worth it. For a solo store owner without a sysadmin, it usually is not, and that is the honest reason BTCPay's adoption skews toward technical merchants and Bitcoin-native businesses rather than general e-commerce.

**Pick BTCPay Server if** sovereignty is the point, Bitcoin and Lightning are your main rails, and you (or someone on your team) can operate a server.

## CoinGate, regulated and hosted

CoinGate is the establishment choice among crypto-native gateways: a Lithuanian company operating under EU regulation since 2014, roughly 1% per transaction, business verification (KYB) required before you can accept live payments, and the option to settle payouts in EUR to a bank account. About 70 coins are supported and Lightning is enabled by default, which is wider coin coverage than BTCPay gets out of the box.

The EUR settlement is the real differentiator, not the coin count. If your accounting department wants euros landing in a bank account and an invoice from a regulated entity, CoinGate solves a problem BTCPay Server does not solve at all. The trade is a real fee, mandatory verification, and funds that sit with CoinGate, however briefly, before they reach you.

**Pick CoinGate if** you need fiat settlement and compliance paperwork more than you need the lowest possible fee or full self-custody.

## Where Shieldz fits, full disclosure

This is our blog, so judge this section accordingly and [verify the claims yourself](https://shieldz.cash/verify).

[Shieldz](https://shieldz.cash) sits between the two: hosted like CoinGate, so there is no server to run, but non-custodial and $0 platform fee like BTCPay Server, with [no KYC and no signup](/blog/accept-crypto-payments-without-kyc) required to start (paste a wallet address and the checkout is live). It settles USDC and USDT across five chains plus Bitcoin and shielded Zcash straight to the merchant's own wallet, with a REST API, SDKs, a WooCommerce plugin, and an [MCP server for AI agents](https://shieldz.cash/agents). Stated plainly: there is no EUR settlement, so it does not replace CoinGate for a business that needs fiat payouts, and it is the youngest product in this comparison by a wide margin (2026 versus 2014 and 2017). Why the fee can be $0 is explained at [why-free](https://shieldz.cash/why-free).

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="Shieldz hosted checkout page showing a crypto payment request with a QR code, the amount due, and coin selection, settling directly to the merchant's own wallet." width="1200" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The Shieldz hosted checkout: no server to run, and no processor balance in between.</figcaption>
</figure>

## Which one should you pick?

- **Full sovereignty, $0 fees, you run it:** BTCPay Server, if Bitcoin/Lightning covers your needs and you can operate a server.
- **EU compliance and EUR settlement:** CoinGate, at ~1% with mandatory KYB.
- **Hosted, $0 fee, non-custodial, no KYC, no fiat payout:** Shieldz, if stablecoins, BTC and ZEC cover your needs.

A longer ranking with more gateways is in the [free gateways guide](/blog/best-free-crypto-payment-gateways-2026), and the three-way breakdown against NOWPayments is [here](/blog/nowpayments-vs-btcpay-vs-coingate).

## FAQ

**Is BTCPay Server really free?**
The software and the platform fee are both $0. You pay for VPS hosting (typically $10 to $30 a month) and your own time operating it. At low volume that fixed cost can exceed what a percentage-based competitor would have charged.

**Does CoinGate require KYC?**
Yes, business verification (KYB) is required before you can accept live payments, unlike BTCPay Server or Shieldz, which require none.

**Can BTCPay Server settle in euros?**
No. BTCPay Server pays out in whatever crypto it receives; there is no built-in fiat conversion or bank payout. CoinGate offers EUR settlement as a core feature.

**Which one is non-custodial?**
BTCPay Server is non-custodial by design: funds go straight from payer to merchant. CoinGate is custodial, holding funds briefly before EUR or crypto payout. Across the wider market, only about a quarter of gateways are non-custodial, per our [50-gateway study](/blog/50-crypto-payment-gateways-compared).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is BTCPay Server really free?",
      "acceptedAnswer": { "@type": "Answer", "text": "The software and the platform fee are both $0. You pay for VPS hosting (typically $10 to $30 a month) and your own time operating it. At low volume that fixed cost can exceed what a percentage-based competitor would have charged." }
    },
    {
      "@type": "Question",
      "name": "Does CoinGate require KYC?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, business verification (KYB) is required before you can accept live payments, unlike BTCPay Server or Shieldz, which require none." }
    },
    {
      "@type": "Question",
      "name": "Can BTCPay Server settle in euros?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. BTCPay Server pays out in whatever crypto it receives, with no built-in fiat conversion. CoinGate offers EUR settlement to a bank account as a core feature." }
    },
    {
      "@type": "Question",
      "name": "Which of BTCPay Server and CoinGate is non-custodial?",
      "acceptedAnswer": { "@type": "Answer", "text": "BTCPay Server is non-custodial by design. CoinGate is custodial, holding funds briefly before EUR or crypto payout. Shieldz is a hosted non-custodial alternative that settles directly to the merchant's wallet." }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Claim",
  "text": "At published September 2026 rates, at $10,000/month processed, CoinGate's ~1% fee costs about $1,200/year while BTCPay Server's $0 platform fee costs about $240/year in VPS hosting; BTCPay Server is non-custodial and CoinGate is custodial with EUR settlement.",
  "firstAppearance": {
    "@type": "CreativeWork",
    "url": "https://shieldz.cash/blog/btcpay-server-vs-coingate",
    "author": { "@type": "Organization", "name": "Shieldz" }
  }
}
</script>
