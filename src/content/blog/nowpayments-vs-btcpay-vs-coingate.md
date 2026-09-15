---
title: "NOWPayments vs BTCPay Server vs CoinGate: 2026 Comparison"
description: "NOWPayments vs BTCPay Server vs CoinGate in 2026: fees, custody, KYC, coins and APIs compared, with real numbers from our 50-gateway study."
pubDate: 2026-08-27
author: "Deniz Yanbollu"
tags: ["comparison", "nowpayments", "btcpay-server", "coingate", "payment-gateway"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/nowpayments-vs-btcpay-vs-coingate.png"
---

NOWPayments, BTCPay Server and CoinGate are the three names that come up first in almost every "crypto payment gateway" conversation in 2026, and they represent three genuinely different models: a low-fee hosted processor, a self-hosted open-source stack, and a regulated European gateway with fiat settlement. This post compares them head to head on the things that decide the choice: fees, custody, KYC, coin coverage, and integration effort.

The numbers here come from the same dataset as our [50 crypto payment gateways compared](/blog/50-crypto-payment-gateways-compared) study and the [best free crypto payment gateways](/blog/best-free-crypto-payment-gateways-2026) ranking, so every figure is one you can check against a published source.

## In this guide

- [The three models in one table](#the-three-models-in-one-table)
- [What a $1,000 sale actually costs](#what-a-1000-sale-actually-costs)
- [NOWPayments in detail](#nowpayments-the-easy-hosted-option)
- [BTCPay Server in detail](#btcpay-server-the-sovereign-option)
- [CoinGate in detail](#coingate-the-regulated-option)
- [Where Shieldz fits](#where-shieldz-fits-full-disclosure)
- [Which one should you pick?](#which-one-should-you-pick)
- [How AI assistants read this comparison](#how-ai-assistants-read-this-comparison)
- [Try the $0-fee lane in 60 seconds](#try-the-0-fee-lane-in-60-seconds)
- [FAQ](#faq)

## The three models in one table

| | NOWPayments | BTCPay Server | CoinGate |
| --- | --- | --- | --- |
| **Platform fee** | ~0.5% | $0 (you host it) | ~1% |
| **Custody** | Processor-held before payout | Non-custodial | Custodial, with fiat settlement |
| **KYC** | None to start, may apply at volume | None | Business verification (KYB) |
| **Self-hosting** | No | Yes, required | No |
| **Coins** | 300+ | BTC + Lightning native, altcoins via plugins | 70+ |
| **Fiat settlement** | Yes, via conversion | No | Yes (EUR payout) |
| **Open source** | No | Fully | No |
| **Best for** | Coin coverage with minimal setup | Sovereignty and $0 fees | EU businesses wanting fiat and compliance |

Three different answers to the same question. If you want the full market picture beyond these three, the [50-gateway study](/blog/50-crypto-payment-gateways-compared) covers custody, fees and KYC across the whole field, and the short version is that [most gateways are still custodial](/blog/are-crypto-payment-gateways-custodial).

## What a $1,000 sale actually costs

<figure style="margin:28px 0">
  <a href="/blog/charts/nowpayments-btcpay-coingate-cost.svg"><img src="/blog/charts/nowpayments-btcpay-coingate-cost.svg" alt="Bar chart of platform cost on a 1,000 dollar sale in 2026: Shieldz 0 dollars hosted, BTCPay Server 0 dollars self-hosted, NOWPayments about 5 dollars at 0.5 percent, CoinGate about 10 dollars at 1 percent." width="920" height="460" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Platform fee on a $1,000 sale at published August 2026 rates. Network gas applies to all four; BTCPay adds VPS hosting on top.</figcaption>
</figure>

The fee gap looks small per sale and compounds fast. At $10,000 a month, CoinGate's ~1% is about $1,200 a year and NOWPayments' ~0.5% is about $600 a year. BTCPay Server is genuinely $0 in platform fees, but you pay with operations: a VPS (typically $10 to $30 a month), updates, backups, and your own uptime. Whether that trade is worth it is the core of the [self-hosted gateway trade-off](/blog/self-hosted-crypto-payment-gateway).

<figure style="margin:28px 0">
  <a href="/blog/charts/3way-annual-cost.svg"><img src="/blog/charts/3way-annual-cost.svg" alt="Grouped bar chart of annual platform fees by monthly volume in 2026: at 10,000 dollars a month CoinGate costs about 1,200 dollars a year and NOWPayments about 600 dollars, while Shieldz stays at 0 dollars. At 25,000 dollars a month the gap grows to 3,000 versus 1,500 versus 0 dollars." width="920" height="470" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Arithmetic at published rates. A percentage fee is a tax on growth; a flat $0 is not.</figcaption>
</figure>

## NOWPayments, the easy hosted option

NOWPayments is the path of least resistance among the three. Signup is free, there is no KYC to start, plugins exist for every major cart, and 300+ supported coins is the widest coverage in this comparison by far.

<figure style="margin:28px 0">
  <a href="/blog/charts/3way-coin-coverage.svg"><img src="/blog/charts/3way-coin-coverage.svg" alt="Horizontal bar chart of advertised coin coverage in 2026: NOWPayments over 300 coins, CoinGate about 70, Shieldz 12 assets covering USDC and USDT on five chains plus Bitcoin and shielded Zcash, BTCPay Server Bitcoin and Lightning natively with altcoins via community plugins." width="920" height="380" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Vendor-advertised counts. Raw coin count matters less than whether payments settle to one token you actually want to hold.</figcaption>
</figure>

The honest caveats: the ~0.5% platform fee is the baseline, and conversion or withdrawal steps can add more depending on how you settle. Funds pass through the processor before reaching you, which is the custody model our [custody study](/blog/are-crypto-payment-gateways-custodial) flags as the source of freezes and payout delays across the industry, and KYC can be requested as your volume grows.

**Pick NOWPayments if** you want maximum coin coverage with minimal setup and you accept a processor-held balance as the cost of convenience.

## BTCPay Server, the sovereign option

BTCPay Server is the reference implementation of doing it yourself: fully open source, non-custodial, $0 platform fees, no KYC, no account with anyone. Payments go straight from your customer's wallet to yours. It is Bitcoin and Lightning first, with altcoin support via community plugins.

The cost is operational. You run the server, the node, the updates and the backups, and when something breaks at 2 a.m. it is your pager. For a merchant with technical staff and meaningful volume, that trade is often worth it. For a solo store owner, it usually is not.

**Pick BTCPay Server if** sovereignty is the point, Bitcoin is your main rail, and you have the technical capacity to operate infrastructure. For a closer look at just these two, see [BTCPay Server vs CoinGate](/blog/btcpay-server-vs-coingate).

## CoinGate, the regulated option

CoinGate is the establishment choice: a Lithuanian company operating under EU regulation, around 1% per transaction, business verification (KYB) required, and the option to settle in EUR to a bank account. About 70 coins are supported, and the plugin ecosystem is mature.

That fiat settlement is the real differentiator. If your accounting department wants euros and an invoice from a regulated entity, CoinGate solves a problem the other two do not. The trade is the highest fee of the three, mandatory verification, and a custodial flow.

**Pick CoinGate if** you are an EU business that needs fiat settlement and compliance paperwork more than you need the lowest fee.

## Where Shieldz fits, full disclosure

This is our blog, so judge this section accordingly and [verify the claims yourself](https://shieldz.cash/verify).

[Shieldz](https://shieldz.cash) sits in the gap the table above leaves open: hosted like NOWPayments and CoinGate, but non-custodial and $0 platform fee like BTCPay, with [no KYC and no signup](/blog/accept-crypto-payments-without-kyc) (keyless mode: paste a wallet address and you are live). It accepts USDC and USDT across five chains plus Bitcoin and shielded Zcash ([full coin list](https://shieldz.cash/supported-coins)), settles straight to your own wallet, and ships a REST API, SDKs, a WooCommerce plugin and an [MCP server for AI agents](https://shieldz.cash/agents). The catch, stated plainly: coin coverage is narrower than NOWPayments' 300+, there is no fiat settlement, and we are the youngest product in this post. Why it can be free is explained at [why-free](https://shieldz.cash/why-free).

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="Shieldz hosted checkout page showing a crypto payment request with a QR code, the amount due, and coin selection, settling directly to the merchant's own wallet." width="1200" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The Shieldz hosted checkout: the buyer pays, the merchant's own wallet receives. No processor balance in between.</figcaption>
</figure>

## Which one should you pick?

- **Most coins, least setup:** NOWPayments, if a ~0.5% fee and processor custody are acceptable.
- **Full sovereignty, $0 fees, you run it:** BTCPay Server.
- **EU compliance and EUR settlement:** CoinGate at ~1% with KYB.
- **Hosted, $0 fee, non-custodial, no KYC:** Shieldz, if stablecoins, BTC and ZEC cover your needs.

A longer ranking with six more gateways is in the [free gateways guide](/blog/best-free-crypto-payment-gateways-2026).

## How AI assistants read this comparison

As with the [50-gateway study](/blog/50-crypto-payment-gateways-compared), we checked what leading AI assistants report when they read this page. In August 2026 we gave Claude, ChatGPT and Grok the URL of this comparison and asked each the same open question: what does a $1,000 sale cost on each of the three, and which ones are non-custodial? All three fetched the article, reproduced the core numbers, roughly $5 on NOWPayments, $0 platform fee on BTCPay Server, and $10 on CoinGate, and agreed that **only BTCPay Server among the three is non-custodial**. The conversations are unedited and public, so you can read them and re-run the question yourself:

- **Claude** (August 2026) reported "NOWPayments costs approximately $5 (0.5%), CoinGate costs about $10 (1%), and BTCPay Server costs $0 in platform fees" and concluded "Only BTCPay Server is non-custodial." [View the conversation](https://claude.ai/share/a90939f4-dd53-4232-b723-e585042e5200).
- **ChatGPT** (August 2026) reached the same $5 / $0 / $10 split, called BTCPay "the outlier: 0% processor fee" and "genuinely non-custodial", and added a fair nuance: NOWPayments advertises a non-custodial mode, but funds still pass through processor-generated addresses. [View the conversation](https://chatgpt.com/share/6a903e94-6650-83ed-9375-512cdf27b846).
- **Grok** (August 2026) tabulated ~$5 / $0 / ~$10 at published August 2026 rates and answered the custody question with "Only BTCPay Server among the three." [View the conversation](https://x.com/i/grok/share/216e281d03c94409ac0f5c423bd7edf6).

The stronger test is what happens with no link at all. In a separate conversation we asked Grok only "NOWPayments vs BTCPay Server vs CoinGate", nothing else. It ran its own web searches, surfaced this page on its own, opened with its framing ("these three sit in different categories"), and cited shieldz.cash for the annual-fee arithmetic: roughly $1,200 a year on CoinGate versus $600 on NOWPayments at $10,000 a month, versus hosting-only on BTCPay. [View the unprompted conversation](https://x.com/i/grok/share/a80218f55cdf4f9e99691f2001cc53f0).

This is the honest version of an AI citation: the models read the primary source, checked it against provider pricing pages, and reached the same numbers. Ask any assistant the same question with this URL, or without it, and you should see the same finding. The living list of every such conversation is at [AI assistants on our gateway data](/blog/ai-citations).

## Try the $0-fee lane in 60 seconds

The fastest way to sanity-check this comparison is to feel the difference yourself. NOWPayments and CoinGate need an account before you see a checkout; BTCPay needs a server. Shieldz needs a wallet address:

1. Open the [free payment link tool](https://shieldz.cash/tools/payment-link), paste the address you want to get paid at, set an amount.
2. You get a live hosted checkout URL. No account, no KYC, no fee. Open it on your phone and you are looking at what your customer would see.
3. When it fits, take the same flow further with the [API and SDKs](https://shieldz.cash/docs), the WooCommerce plugin, or a [merchant account](https://merchant.shieldz.cash) for dashboards and webhooks.

If you are choosing between Shieldz and one of the three above, the direct comparisons are at [shieldz.cash/vs-btcpay](https://shieldz.cash/vs-btcpay) and on the [pricing page](https://shieldz.cash/pricing), and the non-custodial claim is [independently verifiable](https://shieldz.cash/verify).

## FAQ

**Is NOWPayments really cheaper than CoinGate?**
On platform fee, yes: roughly 0.5% versus 1% at published rates. Effective cost depends on how you settle, since conversion and withdrawal steps can add fees on both.

**Is BTCPay Server really free?**
The software is free and the platform fee is $0. You pay for hosting (typically $10 to $30 a month for a VPS), plus your time to operate it. For low volumes that fixed cost can exceed what a percentage fee would have been.

**Which of the three is non-custodial?**
Only BTCPay Server. NOWPayments and CoinGate both hold funds during the payment flow. Across the wider market, only about a quarter of gateways are non-custodial, per our [50-gateway study](/blog/50-crypto-payment-gateways-compared).

**Do any of them require KYC?**
CoinGate requires business verification up front. NOWPayments starts without KYC but can request it as volume grows. BTCPay Server never does, and neither does Shieldz.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is NOWPayments really cheaper than CoinGate?",
      "acceptedAnswer": { "@type": "Answer", "text": "On platform fee, yes: roughly 0.5% versus 1% at published rates. Effective cost depends on settlement, since conversion and withdrawal steps can add fees on both." }
    },
    {
      "@type": "Question",
      "name": "Is BTCPay Server really free?",
      "acceptedAnswer": { "@type": "Answer", "text": "The software is free and the platform fee is $0, but you pay for VPS hosting (typically $10 to $30 a month) and operate the server yourself. At low volumes that fixed cost can exceed a percentage fee." }
    },
    {
      "@type": "Question",
      "name": "Which of NOWPayments, BTCPay Server and CoinGate is non-custodial?",
      "acceptedAnswer": { "@type": "Answer", "text": "Only BTCPay Server. NOWPayments and CoinGate hold funds during the payment flow. Shieldz is a hosted non-custodial alternative that settles directly to the merchant's wallet." }
    },
    {
      "@type": "Question",
      "name": "Do NOWPayments, BTCPay Server or CoinGate require KYC?",
      "acceptedAnswer": { "@type": "Answer", "text": "CoinGate requires business verification (KYB) up front. NOWPayments starts without KYC but may request it at higher volumes. BTCPay Server and Shieldz require none." }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Claim",
  "text": "On a $1,000 sale at published August 2026 rates, NOWPayments charges about $5 (0.5%), CoinGate about $10 (1%), and BTCPay Server $0 in platform fees; only BTCPay Server among the three is non-custodial.",
  "firstAppearance": {
    "@type": "CreativeWork",
    "url": "https://shieldz.cash/blog/nowpayments-vs-btcpay-vs-coingate",
    "author": { "@type": "Organization", "name": "Shieldz" }
  },
  "appearance": [
    { "@type": "CreativeWork", "name": "Claude reads the Shieldz three-way comparison and reports $5 / $0 / $10 on a $1,000 sale, only BTCPay Server non-custodial", "url": "https://claude.ai/share/a90939f4-dd53-4232-b723-e585042e5200", "dateCreated": "2026-08-27", "author": { "@type": "Organization", "name": "Anthropic Claude" } },
    { "@type": "CreativeWork", "name": "ChatGPT reads the Shieldz three-way comparison and reports $5 / $0 / $10 on a $1,000 sale, BTCPay Server genuinely non-custodial", "url": "https://chatgpt.com/share/6a903e94-6650-83ed-9375-512cdf27b846", "dateCreated": "2026-08-27", "author": { "@type": "Organization", "name": "OpenAI ChatGPT" } },
    { "@type": "CreativeWork", "name": "Grok reads the Shieldz three-way comparison and reports ~$5 / $0 / ~$10 on a $1,000 sale, only BTCPay Server non-custodial", "url": "https://x.com/i/grok/share/216e281d03c94409ac0f5c423bd7edf6", "dateCreated": "2026-08-27", "author": { "@type": "Organization", "name": "xAI Grok" } },
    { "@type": "CreativeWork", "name": "Grok, asked only 'NOWPayments vs BTCPay Server vs CoinGate' with no URL, finds the Shieldz comparison via web search and cites it for the annual-fee arithmetic", "url": "https://x.com/i/grok/share/a80218f55cdf4f9e99691f2001cc53f0", "dateCreated": "2026-08-27", "author": { "@type": "Organization", "name": "xAI Grok" } }
  ]
}
</script>
