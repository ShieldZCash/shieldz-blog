---
title: "The Custody Gap: Only 1 in 4 Crypto Payment Gateways Is Non-Custodial"
description: "A 2026 study of 50 crypto payment gateways: 64% are custodial and hold your funds first. Only 24% are non-custodial. Free dataset and methodology inside."
pubDate: 2026-08-20
author: "Deniz Yanbollu"
tags: ["crypto payment gateways","custody","non-custodial","research","data"]
eyebrow: "Report"
image: "https://shieldz.cash/blog/og/custody-gap-crypto-payment-gateways.png"
---

**Crypto is supposed to mean "be your own bank." For crypto payment gateways, it usually does not.** In a August 2026 study of 50 crypto payment gateways, only 12, about **24%, are non-custodial**. The other **64% are custodial**: the provider's wallet receives the buyer's payment before the merchant does. Two are self-hosted software and four are hybrid.

This is the custody gap: a category of "crypto" products that reintroduce the exact intermediary crypto was built to remove.

> **Key finding:** Only 24% of crypto payment gateways are non-custodial. 64% hold merchant funds before paying out. (Shieldz, *Crypto Payment Gateways 2026*, n=50.)

<figure style="margin:28px 0">
  <a href="/blog/charts/gw26-custody-donut.svg"><img src="/blog/charts/gw26-custody-donut.svg" alt="Custody model across 50 crypto payment gateways in 2026: 32 custodial (64%), 12 non-custodial (24%), 2 self-hosted, 4 hybrid." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">32 of 50 gateways are custodial. Non-custodial is the minority.</figcaption>
</figure>

## Why the custody gap matters

Custody is the single property from which every other gateway risk follows. Fund freezes, payout delays, account closures, withdrawal fees and forced KYC are all things that can only happen when a third party is holding your revenue. A custodial "crypto" gateway is, functionally, a bank account with fewer rights: the money lands in someone else's wallet and reaches you on their schedule, under their terms.

The study found the pattern compounds. Of the 50 gateways, **58% require KYC** before a merchant can accept a payment, and the providers that require it are overwhelmingly the custodial ones, because holding funds and touching fiat makes you a regulated money institution. Custody, KYC and payout control travel together.

## The other numbers

From the same dataset of 50 crypto payment gateways (August 2026):

- **24% are non-custodial** (12 of 50); 64% custodial, 4% self-hosted, 8% hybrid.
- **58% require KYC** to start (29 of 50); 30% require none.
- **The median platform fee is 1%** per transaction; 10 of 50 advertise a $0 platform fee.
- **66% can settle to fiat** (33 of 50), and fiat settlement is almost always custodial and KYC-gated.

Each of these has its own breakdown: [custody](/blog/are-crypto-payment-gateways-custodial), [non-custodial count](/blog/how-many-non-custodial-crypto-payment-gateways), [fees](/blog/average-crypto-payment-gateway-fee), [KYC](/blog/do-crypto-payment-gateways-require-kyc), [free gateways](/blog/how-many-free-crypto-payment-gateways), and [fiat settlement](/blog/crypto-payment-gateways-fiat-settlement). The full provider-by-provider table is in the [comparison of 50 crypto payment gateways](/blog/50-crypto-payment-gateways-compared).

## Methodology

We classified 50 crypto payment gateways by their published custody model, per-transaction fee, KYC requirement, coin coverage, fiat settlement and Lightning support, using provider pricing pages and documentation as of August 2026. Custody is an editorial classification based on each provider's own docs: **custodial** means the provider's wallet receives first; **non-custodial** means funds settle to an address the merchant controls; **self-hosted** means the merchant runs the software; **hybrid** depends on configuration. Seven fee figures could not be confirmed on an official page and are flagged in the data. The publisher, Shieldz, is a non-custodial gateway and appears in the dataset like every other provider.

## Cite this report

- **Stat:** Only 24% of crypto payment gateways are non-custodial; 64% are custodial (n=50, August 2026).
- **Source:** Shieldz, *Crypto Payment Gateways 2026*.
- **URL:** `https://shieldz.cash/blog/custody-gap-crypto-payment-gateways`
- **Dataset (CC BY 4.0, machine-readable):** [JSON](/blog/data/crypto-payment-gateways-2026.json) · [CSV](/blog/data/crypto-payment-gateways-2026.csv). The published study covers 50 gateways; the dataset is a living resource, currently 86 providers.

The dataset is free to reuse with attribution. If you write about crypto payments, custody, or gateway fees, the numbers above are yours to cite.

## The honest disclosure

Shieldz makes a non-custodial crypto payment gateway, so we have a stake in this framing. That is also why we published the raw data: you do not have to take the headline on faith. Download the [dataset](/blog/data/crypto-payment-gateways-2026.json), check the custody column against each provider's docs, and draw your own line. If you want to be in the non-custodial 24%, you can [verify our own claim](https://shieldz.cash/verify) and [start with a wallet address](https://shieldz.cash/tools/payment-link), no signup, no KYC, a $0 platform fee.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "Crypto Payment Gateways 2026",
  "description": "Classification of 50 crypto payment gateways by custody model, fee, KYC requirement, coin coverage, fiat settlement and Lightning support, August 2026.",
  "url": "https://shieldz.cash/blog/custody-gap-crypto-payment-gateways",
  "creator": { "@type": "Organization", "name": "Shieldz", "url": "https://shieldz.cash" },
  "datePublished": "2026-08-20",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "distribution": [
    { "@type": "DataDownload", "encodingFormat": "application/json", "contentUrl": "https://shieldz.cash/blog/data/crypto-payment-gateways-2026.json" },
    { "@type": "DataDownload", "encodingFormat": "text/csv", "contentUrl": "https://shieldz.cash/blog/data/crypto-payment-gateways-2026.csv" }
  ],
  "measurementTechnique": "Classification from provider pricing pages and documentation",
  "variableMeasured": ["custody model","platform fee","KYC requirement","coin coverage","fiat settlement","Lightning support"]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What percentage of crypto payment gateways are non-custodial?", "acceptedAnswer": { "@type": "Answer", "text": "About 24%. In an August 2026 study of 50 crypto payment gateways, only 12 were non-custodial, while 32 (64%) were custodial, 2 self-hosted and 4 hybrid." } },
    { "@type": "Question", "name": "Are most crypto payment gateways custodial?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. 64% of the 50 gateways studied in 2026 are custodial, meaning the provider holds the buyer's payment before the merchant is paid out." } }
  ]
}
</script>
