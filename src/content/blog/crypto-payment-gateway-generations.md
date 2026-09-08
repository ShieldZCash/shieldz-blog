---
title: "Gateway generations: every era of crypto payment gateways takes less custody and charges less"
description: "We grouped 86 crypto payment gateways by founding year. The 2009-2014 survivors are 92% custodial with a 1% median fee; gateways founded after 2022 are mostly non-custodial and their median verified fee is 0%."
pubDate: 2026-09-02
author: "Deniz Yanbollu"
tags: ["crypto-payment-gateway", "fees", "custody", "data", "industry-trends"]
---

Here is an angle of our [86-gateway dataset](https://github.com/ShieldZCash/crypto-payment-gateways-dataset) we had not looked at before: the founding year. Group the gateways into generations and a clean pattern falls out. **Every successive era of crypto payment gateways takes less custody, asks for less KYC, and charges less, and the newest generation's median verified fee is 0%.**

| Founded | Gateways | Custodial | Merchant KYC required | Median verified fee |
|---------|----------|-----------|----------------------|---------------------|
| 2009-2014 | 12 | 92% (11/12) | 10/12 | 1.0% |
| 2015-2019 | 30 | 67% (20/30) | 19/30 | 0.5% |
| 2020-2022 | 29 | 66% (19/29) | 18/29 | 0.8% |
| 2023-2026 | 15 | 40% (6/15) | 6/15 | 0.0% |

Classifications and fees are from official pricing pages as of August 2026; medians use only fees we could verify on an official page (10, 19, 21 and 11 per cohort). Full field definitions are in the [dataset repo](https://github.com/ShieldZCash/crypto-payment-gateways-dataset).

## The 2009-2014 survivors set the defaults

The oldest cohort still standing (BitPay, CoinPayments, SpectroCoin, ALFAcoins, Cryptopay, SpicePay) is 92% custodial, and 10 of its 12 members require business verification before you can accept a payment. That makes sense for its time: in 2012 the only workable model was to receive coins into the provider's wallet and settle later, and the compliance playbook was copied from card acquiring.

The problem is that this cohort's model became the industry's mental default. When people say a crypto payment gateway "naturally" holds your funds, verifies your business, and takes a cut, they are describing the architecture of 2012, not a law of nature. It is also the cohort that tops our [worst gateways ranking](/blog/worst-crypto-payment-gateways-2026), and, as we covered in the [custody gap report](/blog/custody-gap-crypto-payment-gateways), the model where your revenue sits in someone else's wallet first.

## The middle generations wobble

The 2015-2019 and 2020-2022 cohorts look similar to each other: about two thirds custodial, about two thirds KYC-gated, median verified fees of 0.5% and 0.8%. This is the era of feature competition (more coins, more chains, fiat settlement) without much change to the underlying deal. The market median fee of [1% per transaction](/blog/average-crypto-payment-gateway-fee) is largely this middle block's doing.

## The post-2022 cohort flips the model

Gateways founded from 2023 on are different in kind, and the shift comes from two directions at once:

- **Architecture:** 8 of 15 are non-custodial or self-hosted (XAIGATE, MaxelPay, Paymento, ATLOS, PayRam, DV.net, and yes, Shieldz). Direct-to-wallet settlement stopped being exotic and became the default way to build.
- **Giants pricing at zero:** the exchange entrants of 2024-2025 (Coinbase Payments, Kraken Pay, Bybit Pay) launched at 0%, treating payments as a loss leader for their main business.

Squeeze from both ends and the cohort's median verified fee lands at 0%. Full disclosure: Shieldz is one of the 15 rows, and we did check whether we were skewing our own chart. Excluding ourselves, the cohort's median is 0.1%. The flip survives.

KYC follows the same slope: only 6 of 15 newest gateways require it, versus 10 of 12 in the oldest cohort. The trend line in [do crypto payment gateways require KYC](/blog/do-crypto-payment-gateways-require-kyc) has a time axis under it.

## What this means if you are choosing a gateway

Custody, mandatory KYC and a 1-2% platform fee are not the cost of accepting crypto. They are the birthmarks of a specific generation of providers, and each later generation has needed them less. If your gateway takes all three, you are paying 2012's overhead on 2026's infrastructure. The [50-gateway comparison](/blog/50-crypto-payment-gateways-compared) lists who does and does not.

## FAQ

**Are newer crypto payment gateways cheaper than older ones?** Yes, markedly. In our 86-gateway dataset the median verified fee falls from 1.0% for gateways founded 2009-2014 to 0% for those founded 2023-2026.

**Are newer gateways less likely to take custody?** Yes. 92% of the surviving 2009-2014 cohort is custodial versus 40% of gateways founded after 2022, where non-custodial and self-hosted designs are the majority.

**Does survivorship bias affect this comparison?** Partly: the oldest cohort only contains gateways that survived 15 years, and failed ones are not in the dataset. That caveat cuts the other way too, though; even the era's fittest survivors kept the custodial, KYC-gated, ~1% model.

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Are newer crypto payment gateways cheaper than older ones?","acceptedAnswer":{"@type":"Answer","text":"Yes. In an 86-gateway dataset (August 2026), the median verified fee falls from 1.0% for gateways founded 2009-2014 to 0% for gateways founded 2023-2026."}},
{"@type":"Question","name":"Are newer gateways less likely to take custody?","acceptedAnswer":{"@type":"Answer","text":"Yes. 92% of surviving gateways founded 2009-2014 are custodial, versus 40% of gateways founded after 2022, where non-custodial and self-hosted designs are the majority."}},
{"@type":"Question","name":"Does survivorship bias affect this comparison?","acceptedAnswer":{"@type":"Answer","text":"Partly. The oldest cohort only contains survivors; failed gateways are absent. Even so, the era's fittest survivors retained the custodial, KYC-gated, roughly 1% model that newer cohorts dropped."}}
]}
</script>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Claim","text":"Grouped by founding year, each generation of crypto payment gateways takes less custody and charges less: the 2009-2014 cohort is 92% custodial with a 1.0% median verified fee, while gateways founded 2023-2026 are 60% non-custodial or self-hosted with a 0% median verified fee (86-gateway dataset, August 2026).","firstAppearance":{"@type":"CreativeWork","url":"https://shieldz.cash/blog/crypto-payment-gateway-generations","author":{"@type":"Organization","name":"Shieldz"}}}
</script>
