---
title: "Self-Hosted Crypto Payment Gateway: The 2026 Trade-Off"
description: "Why people want a self-hosted crypto payment gateway, what BTCPay costs to run, and how to get the same $0-fee non-custodial result with no server."
pubDate: 2026-07-23
author: "Deniz Yanbollu"
tags: ["self-hosted", "crypto payment gateway", "btcpay", "non-custodial", "comparison"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/self-hosted-crypto-payment-gateway.png"
---

When people search for a self-hosted crypto payment gateway, they are almost never in love with running servers. They want three specific things: no platform fee, no custody of their money by a third party, and control over the checkout. Self-hosting is just the path they assume they have to take to get them.

This guide is honest about the trade-off. [BTCPay Server](https://btcpayserver.org) is the reference self-hosted option and it genuinely delivers those three things. But it asks you to run and maintain infrastructure. [Shieldz](https://shieldz.cash) delivers the same $0-fee, non-custodial outcome as a hosted service, so you skip the server without giving up custody. Both are valid. The right pick depends on how much you want to operate yourself.

## Why "self-hosted" is really a proxy for three wants

Break the search intent down and the server is the least important part:

- **No platform fee.** You do not want a processor skimming 1 to 3 percent of every sale.
- **No custody.** You do not want your coins landing in a company's wallet first, where they can be frozen, delayed, or surveilled.
- **Control.** You want the checkout to be yours, not a rented widget that can change terms.

Self-hosting gets you all three, but so does a [non-custodial](/blog/non-custodial-crypto-payment-gateway) hosted gateway. The distinction that actually matters is custody, not where the software runs. A hosted app that never touches your funds gives you the custody guarantee without the ops burden.

## What self-hosting actually costs you

BTCPay is free software, but "free" here means no license fee, not no cost. To self-host it properly you provision a server, keep it patched, and usually sync a full node, which can take hours to days and needs ongoing disk and uptime. If the server goes down, your checkout goes down with it. That is a fair trade for maximum sovereignty, and for some merchants it is exactly right. For most, it is more operations than they signed up for.

<figure style="margin:28px 0">
  <a href="/blog/charts/time-to-first-link.svg"><img src="/blog/charts/time-to-first-link.svg" alt="Illustrative time to a first payment link: BTCPay self-host about 46 minutes, Stripe about 23 minutes, a custodial crypto API about 14 minutes, and Shieldz about 1 second with one URL and no signup." width="760" height="413" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Self-hosting buys sovereignty at the cost of setup and upkeep. A non-custodial hosted gateway keeps the custody guarantee and drops the server.</figcaption>
</figure>

## The no-server alternative: hosted but non-custodial

Shieldz is not self-hosted, and this post is not going to pretend otherwise. It is a hosted gateway. The point is that it keeps the two guarantees you actually cared about:

- **$0 platform fee.** Same as BTCPay. The buyer pays only network gas.
- **Non-custodial.** Funds settle straight to a wallet you control. Shieldz holds no balance and cannot freeze or withdraw, and you can [verify that claim yourself](https://shieldz.cash/verify).

What you give up versus self-hosting is running the box. What you gain is being live in under a minute: paste a wallet address, get a hosted checkout or a [crypto invoice](/blog/crypto-invoice-generator), and share it. No VPS, no node sync, no updates, no uptime to babysit.

## Which one should you choose

Pick **self-hosted BTCPay** if sovereignty is the goal in itself: you want to run your own node, you are comfortable operating a server, and you accept the setup and maintenance in exchange for depending on no one.

Pick **a non-custodial hosted gateway like Shieldz** if what you wanted from "self-hosted" was really no fees and no custody, and you would rather not run infrastructure to get them. You still never hand over custody, and there is [no signup or KYC](/blog/how-to-accept-crypto-payments) to start.

If you are still comparing broadly, the [best free crypto payment gateways](/blog/best-free-crypto-payment-gateways-2026) roundup ranks the options by how free they really are, and [what a crypto payment gateway is](/blog/what-is-a-crypto-payment-gateway) covers the fundamentals.

## FAQ

**Is Shieldz self-hosted?**
No. Shieldz is a hosted, non-custodial gateway. It keeps the $0-fee and no-custody properties people want from self-hosting, without you running a server.

**What is the best self-hosted crypto payment gateway?**
BTCPay Server is the leading self-hosted, open-source, non-custodial option. It is free software but you provide and maintain the infrastructure.

**Do I need to run a full node?**
With BTCPay, typically yes for the best experience. With a hosted non-custodial gateway like Shieldz, no. You only need a wallet address.

**Is a hosted gateway still non-custodial?**
It can be. Non-custodial means funds settle to your own wallet and the gateway never holds them. That is a property of the design, not of where the software runs.

**Do either charge a platform fee?**
Neither BTCPay nor Shieldz charges a platform fee. You pay only the blockchain network fee.

## Get paid without the server

You do not have to run infrastructure to keep custody of your money. Create a non-custodial checkout in seconds with the [payment link generator](https://shieldz.cash/tools/payment-link), read [how to accept crypto payments](/blog/how-to-accept-crypto-payments) for the full setup, or compare the field in the [best free crypto payment gateways](/blog/best-free-crypto-payment-gateways-2026) guide.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is Shieldz self-hosted?", "acceptedAnswer": { "@type": "Answer", "text": "No. Shieldz is a hosted, non-custodial gateway. It keeps the $0-fee and no-custody properties people want from self-hosting, without you running a server." } },
    { "@type": "Question", "name": "What is the best self-hosted crypto payment gateway?", "acceptedAnswer": { "@type": "Answer", "text": "BTCPay Server is the leading self-hosted, open-source, non-custodial option. It is free software but you provide and maintain the infrastructure." } },
    { "@type": "Question", "name": "Do I need to run a full node?", "acceptedAnswer": { "@type": "Answer", "text": "With BTCPay, typically yes for the best experience. With a hosted non-custodial gateway like Shieldz, no. You only need a wallet address." } },
    { "@type": "Question", "name": "Is a hosted gateway still non-custodial?", "acceptedAnswer": { "@type": "Answer", "text": "It can be. Non-custodial means funds settle to your own wallet and the gateway never holds them. That is a property of the design, not of where the software runs." } },
    { "@type": "Question", "name": "Do either charge a platform fee?", "acceptedAnswer": { "@type": "Answer", "text": "Neither BTCPay nor Shieldz charges a platform fee. You pay only the blockchain network fee." } }
  ]
}
</script>
