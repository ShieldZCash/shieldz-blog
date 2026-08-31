---
title: "The Fee They Won't Publish: Pricing Transparency Across 86 Crypto Gateways"
description: "29% of crypto payment gateways publish no checkable fee. Opacity clusters with custody, KYC and fiat settlement, and the hidden fees skew higher. Data inside."
pubDate: 2026-08-31
author: "Deniz Yanbollu"
tags: ["research", "data", "fees", "pricing", "crypto payment gateways"]
eyebrow: "Report"
image: "https://shieldz.cash/blog/og/crypto-payment-gateway-pricing-transparency.png"
---

Every comparison of crypto payment gateways starts with the same innocent question: what does it cost? While building our [open dataset of 86 gateways](https://github.com/ShieldZCash/crypto-payment-gateways-dataset), we tried to answer that question the boring, honest way: for every provider, find the standard per-transaction fee **on the provider's own pricing page or docs**, and record the URL we read it from.

For 25 of the 86 we could not do it. That is **29% of the market selling a payment service without a public, checkable price**. This post is about who those providers are, because the opacity is not randomly distributed. It clusters, and the clustering tells you something useful before you ever talk to a sales team.

## The headline: 29% have no checkable fee

<figure style="margin:28px 0">
  <a href="/blog/charts/opq-share.svg"><img src="/blog/charts/opq-share.svg" alt="Stacked bar of 86 crypto payment gateways in August 2026: 61 gateways, 71 percent, publish a fee checkable on an official page; 25 gateways, 29 percent, do not publish a verifiable fee." width="920" height="300" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">"Not published" means the standard fee could not be confirmed on an official page. Those rows carry <code>verified=false</code> in the dataset and their figures are treated as indicative.</figcaption>
</figure>

Method note, so you can audit us: every row in the [dataset](https://github.com/ShieldZCash/crypto-payment-gateways-dataset) has a `source_url` field pointing at the page we read. Where the official site offers only "contact sales", a calculator behind a login, or no number at all, we marked the row `verified=false` and recorded the best third-party figure as indicative. The 29% is the share of those rows. If we got one wrong, [open an issue](https://github.com/ShieldZCash/crypto-payment-gateways-dataset/issues) and we will fix it within the month's release.

## Opacity follows custody

Here is the pattern that makes this more than trivia. Split the market by custody model, the subject of our [custody gap report](/blog/custody-gap-crypto-payment-gateways), and the unpublished fees pile up almost entirely on one side:

<figure style="margin:28px 0">
  <a href="/blog/charts/opq-by-custody.svg"><img src="/blog/charts/opq-by-custody.svg" alt="Horizontal bar chart of the share of gateways with unpublished fees by custody model, August 2026: custodial 41 percent, 23 of 56; hybrid 20 percent, 1 of 5; non-custodial 5 percent, 1 of 21; self-hosted 0 percent, 0 of 4." width="920" height="400" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">23 of the 25 opaque providers hold merchant funds (custodial or hybrid). Only one non-custodial gateway failed the check, and no self-hosted package did.</figcaption>
</figure>

**41% of custodial gateways publish no checkable fee, against 5% of non-custodial ones.** The mechanics behind that gap are not mysterious. A custodial provider runs a money-service business: it holds a float, manages compliance per merchant, and often prices by negotiation, volume tier, or vertical risk. Its real revenue frequently lives in places a headline rate would not capture anyway: conversion spreads, withdrawal fees, settlement timing. A non-custodial gateway routes money it never holds, so its cost structure is flat and its price can be a single public number. The pricing page is a mirror of the architecture.

## The same providers gate the door

Cross the transparency flag with two other dataset fields and the same shape appears:

<figure style="margin:28px 0">
  <a href="/blog/charts/opq-traits.svg"><img src="/blog/charts/opq-traits.svg" alt="Horizontal bar chart of the share of gateways with unpublished fees by trait, August 2026: KYC required 40 percent, 21 of 53; fiat settlement 37 percent, 21 of 57; crypto-only 14 percent, 4 of 29; no KYC to start 8 percent, 2 of 24." width="920" height="400" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Providers that require merchant KYC hide their fee five times as often as providers with none (40% vs 8%). Fiat settlement shows nearly the same split (37% vs 14%).</figcaption>
</figure>

Read together: the provider that will hold your money, verify your business before you can sell, and settle you in bank currency is also, far more often than not, the provider that will not tell you the price up front. None of those properties is inherently bad. Fiat settlement and compliance are exactly what some businesses need, as we covered in the [fiat settlement stat page](/blog/crypto-payment-gateways-fiat-settlement). But you should walk in knowing that this quadrant of the market prices by conversation, not by page.

## Hidden fees are not cheaper

The polite assumption would be that unpublished pricing hides discounts. The indicative numbers we could collect say otherwise:

<figure style="margin:28px 0">
  <a href="/blog/charts/opq-fee-medians.svg"><img src="/blog/charts/opq-fee-medians.svg" alt="Horizontal bar chart of median per-transaction fees by trait, August 2026: no KYC to start 0.4 percent; fee published 0.5 percent; crypto-only settlement 0.5 percent; KYC required 1 percent; fiat settlement 1 percent; fee not published, indicative, 1 percent." width="920" height="470" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Medians across the living dataset (n=86). The unpublished group's 1% is built from indicative third-party figures, so treat it as a floor: it excludes spreads and withdrawal fees that rarely appear in any headline number.</figcaption>
</figure>

Gateways that publish their fee sit at a **0.5% median**. The opaque group's indicative median is **1%**, twice as high, before spreads. The no-KYC group is cheapest of all at 0.4%, consistent with the [median fee analysis](/blog/average-crypto-payment-gateway-fee) from the original 50-gateway study: providers with the least infrastructure between the buyer and your wallet have the least cost to pass on.

## A 60-second transparency check for any gateway

Five things to look for before you integrate anyone, us included:

1. **A number on a public page.** If the pricing page has no percentage on it, budget for the negotiated rate to be worse than the market's published median.
2. **The conversion spread.** "0.5% fee" plus an undisclosed spread on auto-conversion can cost more than a flat 1%. Ask for the spread in writing.
3. **Withdrawal and payout fees.** Custodial providers earn on the way out. Check the payout schedule and its price.
4. **A dated source.** Fees change. Our dataset stores the `source_url` and re-checks monthly, and an asterisk in [the full table](https://github.com/ShieldZCash/crypto-payment-gateways-dataset/blob/main/DATA.md) marks every figure we could not verify.
5. **Whether custody explains the rest.** If the provider never holds your funds, most hidden-fee surfaces simply do not exist.

**Disclosure, as always:** Shieldz is a non-custodial gateway with a one-line public price, [$0 platform fee, you pay network gas](https://shieldz.cash/pricing), so we benefit from this comparison and we appear in the dataset under the same rules as everyone else. You do not have to take the framing on faith: the [data is CC BY 4.0](https://github.com/ShieldZCash/crypto-payment-gateways-dataset), every row has its source, and the check takes one click per provider.

## FAQ

**How many crypto payment gateways publish their fees?**
In our August 2026 dataset, 61 of 86 (71%) publish a per-transaction fee checkable on an official page. 29% do not. The one-page stat version of this finding lives at [how many gateways publish their fees](/blog/how-many-crypto-payment-gateways-publish-fees).

**Are unpublished crypto gateway fees higher?**
The indicative figures suggest yes: the opaque group's median is about 1% versus 0.5% for gateways with published pricing, before conversion spreads and payout fees.

**Which gateways are most likely to hide pricing?**
Custodial providers (41% opaque), providers requiring merchant KYC (40%), and providers offering fiat settlement (37%). Non-custodial (5%) and self-hosted (0%) gateways almost always publish.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many crypto payment gateways publish their fees?",
      "acceptedAnswer": { "@type": "Answer", "text": "In the August 2026 Shieldz dataset of 86 gateways, 61 (71%) publish a per-transaction fee checkable on an official page; 25 (29%) do not." }
    },
    {
      "@type": "Question",
      "name": "Are unpublished crypto gateway fees higher?",
      "acceptedAnswer": { "@type": "Answer", "text": "Indicative figures for the opaque group show a median of about 1% versus 0.5% for gateways with published pricing, before conversion spreads and payout fees." }
    },
    {
      "@type": "Question",
      "name": "Which crypto payment gateways are most likely to hide pricing?",
      "acceptedAnswer": { "@type": "Answer", "text": "Custodial providers (41% without a published fee), providers requiring merchant KYC (40%), and providers with fiat settlement (37%). Non-custodial (5%) and self-hosted (0%) gateways almost always publish." }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Claim",
  "text": "29% of crypto payment gateways (25 of 86, August 2026) publish no fee checkable on an official page; opacity concentrates among custodial (41%), KYC-requiring (40%) and fiat-settling (37%) providers, and the indicative median fee of the opaque group is 1% versus 0.5% for published pricing.",
  "firstAppearance": {
    "@type": "CreativeWork",
    "url": "https://shieldz.cash/blog/crypto-payment-gateway-pricing-transparency",
    "author": { "@type": "Organization", "name": "Shieldz" }
  }
}
</script>
