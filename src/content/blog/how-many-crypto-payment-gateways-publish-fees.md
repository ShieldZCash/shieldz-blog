---
title: "How Many Crypto Payment Gateways Publish Their Fees? 69%, and the Rest Cost More"
description: "60 of 87 crypto payment gateways (69%) publish a checkable fee; 31% do not, from a 2026 audit. The opaque group's median is 1% vs 0.8% published."
pubDate: 2026-08-31
updatedDate: "2026-09-13"
author: "Deniz Yanbollu"
tags: ["fees", "pricing", "transparency", "data", "crypto payment gateways"]
eyebrow: "Data"
image: "https://shieldz.cash/blog/og/how-many-crypto-payment-gateways-publish-fees.png"
---

**60 of 87 crypto payment gateways (69%) publish a per-transaction fee you can check on an official page. 31% do not.** In our September 2026 audit, 27 providers offer no verifiable public price: the pricing page says "contact sales", hides the number behind a login, or does not exist. The opacity is still concentrated where it was in August: **39% of custodial gateways** hide their fee versus **14% of non-custodial** ones, and the pattern repeats for providers requiring merchant KYC (38%) and offering fiat settlement (35%).

The hidden prices are not discounts. Where we could collect indicative third-party figures, the opaque group's median is **about 1% per transaction, versus 0.8%** for gateways with published pricing, before conversion spreads and payout fees.

**Method:** for each of 87 gateways, we looked for the standard per-transaction fee on the provider's own pricing page or docs and recorded the `source_url`; rows that failed the check carry `verified=false` in the [open dataset (CC BY 4.0)](https://github.com/ShieldZCash/crypto-payment-gateways-dataset). Full analysis with charts: [the pricing transparency report](/blog/crypto-payment-gateway-pricing-transparency). Context: [the custody gap](/blog/custody-gap-crypto-payment-gateways) and [the median gateway fee](/blog/average-crypto-payment-gateway-fee). [Shieldz](https://shieldz.cash) publishes a one-line price: [$0 platform fee](https://shieldz.cash/pricing), non-custodial, buyer pays gas.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How many crypto payment gateways publish their fees?", "acceptedAnswer": { "@type": "Answer", "text": "60 of 87 crypto payment gateways (69%) publish a per-transaction fee checkable on an official page, per a September 2026 audit. 31% publish no verifiable price; that opaque group's indicative median fee is about 1% versus 0.8% for published pricing." } }
  ]
}
</script>
