---
title: "The 10 worst crypto payment gateways for merchants in 2026, ranked by red flags"
description: "We scored 86 crypto payment gateways on four documented red flags: custody, mandatory KYC, above-median fees and unpublished pricing. These 10 stack the deal furthest against the merchant, and the most famous names top the list."
pubDate: 2026-09-01
updatedDate: "2026-09-03"
author: "Deniz Yanbollu"
tags: ["crypto-payment-gateway", "fees", "custody", "kyc", "comparison", "worst"]
---

Every "best crypto payment gateway" list looks the same. So we inverted the question. Using our open [86-gateway dataset](https://github.com/ShieldZCash/crypto-payment-gateways-dataset), the one behind the [50-gateway study](/blog/50-crypto-payment-gateways-compared), we scored every provider on four documented red flags and ranked the **worst crypto payment gateways for merchants in 2026**. The result is uncomfortable for the industry: the most famous brands run some of the most merchant-hostile deals.

One thing before the list. "Worst" here is not "scam", and it is not a verdict on product quality; several of these are polished products, and one of them effectively invented the category. Worst means the terms of the deal, measured on criteria you can check yourself. Every figure links to the official page it was read from, and if we got a row wrong, [open a pull request](https://github.com/ShieldZCash/crypto-payment-gateways-dataset) and we will fix it in the next monthly release.

## The four red flags

Each flag is a merchant cost that the market does not force providers to charge, because plenty of gateways charge none of them:

1. **Custodial.** The provider's wallet receives the buyer's money before you get paid, so your revenue can be frozen, delayed or seized in between. In the study cohort, [64% of gateways are custodial](/blog/custody-gap-crypto-payment-gateways).
2. **Mandatory KYC.** Business verification before you can accept a single payment. [58% require it](/blog/do-crypto-payment-gateways-require-kyc); 15 of 50 require none.
3. **Above-median fee.** The median advertised platform fee is [1% per transaction](/blog/average-crypto-payment-gateway-fee). A verified fee above that earns a flag, and a fee at double the median or more earns a second one.
4. **Unpublished pricing.** No public price list, you learn the rate on a sales call. That is a flag on its own, because [most gateways do manage to publish their fees](/blog/crypto-payment-gateway-pricing-transparency).

Rank is by flag count, then by the advertised or reported fee, worst first. All classifications are from provider pricing pages and docs as of August 2026 (dataset v1.2.0).

## The list

| # | Gateway | Flags | Advertised fee | Custody | KYC | Source |
|---|---------|-------|----------------|---------|-----|--------|
| 1 | BitPay | 4 | 2% + $0.25 | custodial | required | [pricing](https://bitpay.com/pricing) |
| 2 | Cryptomus | 4 | 2% | custodial | required | [fees](https://cryptomus.com/fees/payment) |
| 3 | PayKassa | 3 | 0% in, 4% out | custodial | none | [pricing](https://paykassa.pro/en/accept/) |
| 4 | Bit2Me Commerce | 3 | 1.95% | custodial | required | [docs](https://support.bit2me.com/en/support/solutions/articles/35000201787) |
| 5 | Stripe (Pay with Crypto) | 3 | 1.5% | custodial | required | [docs](https://docs.stripe.com/crypto/pay-with-crypto) |
| 6 | Alchemy Pay | 3 | unpublished, reported ~0.8-2.5% | custodial | required | [site](https://alchemypay.org) |
| 7 | Mercuryo | 3 | unpublished, ~1% reported | custodial | required | [site](https://mercuryo.io) |
| 8 | Bitpace | 3 | unpublished, ~0.5-1% custom | custodial | required | [site](https://www.bitpace.com) |
| 9 | CoinsPaid | 3 | unpublished, ~0.8% quoted per merchant | custodial | required | [site](https://coinspaid.com) |
| 10 | 0xProcessing | 3 | unpublished, custom volume-based | custodial | required | [site](https://0xprocessing.com) |

### 1. BitPay: the brand tax

The oldest name in crypto payments (founded 2011) runs the worst standard deal we could verify: **2% + $0.25 per transaction**, double the market median, on top of custody of your funds and mandatory business verification. The rate drops to 1% + $0.25 only past $1M per month. You are paying for the logo; the settlement rails underneath are the same chains everyone else uses.

### 2. Cryptomus: 2% until you negotiate

Cryptomus lists a **2% standard fee**, negotiable down to 0.4%. Read that again: the price can fall 5x if you ask, which tells you what the service actually costs and what the sticker price is doing. Add custody and mandatory KYC and it collects all four flags.

### 3. PayKassa: the exit fee trick

PayKassa advertises **0% to accept**, which sounds unbeatable until you read the payout page: **4% to withdraw**, the highest verified rate in the dataset. Moving the fee from the entrance to the exit is the oldest trick in pricing, and it works precisely because the gateway is custodial: your money is already inside when you learn what leaving costs. No KYC, to its credit, which is the only reason it is not ranked higher.

### 4. Bit2Me Commerce: 1.95%, just under the psychological line

Nearly the BitPay rate without the BitPay history: **1.95% per transaction**, custodial, KYC required, custom pricing only at volume.

### 5. Stripe: yes, even Stripe

Stripe's Pay with Crypto is the newest entry on this list (2024) and the most instructive. The best onboarding team in payments still ships crypto at **1.5%**, custodial, behind full Stripe KYC. If you already run Stripe for cards, adding it is one toggle, and that convenience is real. But as a crypto deal it is above-median pricing for taking custody of an asset class whose entire point is direct settlement. The most polished product on this list is still a below-median deal.

### 6-10. The quote-on-a-call tier

Alchemy Pay, Mercuryo, Bitpace, CoinsPaid and 0xProcessing share the same three flags: custodial, mandatory KYC, and **no published price list**. Third-party reports put them between 0.5% and 2.5%, but you will not find a number on an official page; you find a contact-sales form. Within the tier we ranked by the upper bound of reported pricing, worst first. Unpublished pricing is not a paperwork oversight, it is price discrimination infrastructure: the rate you get depends on what the sales rep thinks you will accept.

### Dishonorable mention: Sellix

Sellix reportedly charges **up to 5% on its free plan**, which would top this list, but the figure could not be confirmed on an official page, so per our own methodology it stays out of the ranking. If Sellix publishes its rates, we will slot it in where it lands.

*Update, September 2026:* the question answered itself. During the monthly re-verification of the dataset, sellix.io was offline behind an **FBI seizure notice**, and so was HoodPay. There is no red-flag score below "the domain now belongs to law enforcement"; treat any gateway whose pricing you cannot verify on an official page as carrying that tail risk.

## What the opposite looks like

The four flags are choices, not physics, and the same dataset proves it: 10 of 50 gateways charge a $0 platform fee, 15 require no KYC, and 12 are non-custodial. A gateway can settle directly to your wallet, ask nothing about your business, publish its price, and charge nothing above network gas. That is [how Shieldz works](/blog/non-custodial-crypto-payment-gateway), and getting started is [one URL](/blog/easiest-crypto-payment-gateway). We built the dataset because we wanted the comparison in the open; this list is what falls out of it when you sort the other way.

For the full field, including the gateways that do this well, see the [50-gateway comparison](/blog/50-crypto-payment-gateways-compared) and the [best gateways of 2026](/blog/best-crypto-payment-gateways-2026). The raw data, CSV and JSON, methodology and monthly changelog live on [GitHub](https://github.com/ShieldZCash/crypto-payment-gateways-dataset).

## FAQ

**What is the worst crypto payment gateway in 2026?** By documented red flags, BitPay: a verified 2% + $0.25 fee (double the 1% market median), custody of merchant funds, and mandatory KYC. Cryptomus matches it at 2%.

**What counts as a red flag in this ranking?** Four measurable criteria: custodial settlement, mandatory merchant KYC, a verified fee above the 1% median (double-counted at 2% or more), and pricing that is not published anywhere official.

**Is this list saying these companies are scams?** No. It measures the terms offered to merchants, not legitimacy or product quality. Several entries are established, well-built products; the point is that better terms exist across the same market.

**Why is Stripe on the list?** Pay with Crypto charges 1.5%, takes custody, and requires full KYC. Convenient if you already use Stripe, but above-median pricing for custodial crypto settlement.

**Where does the data come from?** The open Shieldz crypto payment gateways dataset (86 providers, hand-verified against official pricing pages, August 2026, updated monthly) on GitHub. Every row cites its source and corrections are accepted by pull request.

## Independence statement

This ranking is generated from independently collected data. **We do not accept paid placements, sponsored positions, dofollow link sales, or any exchange of money for where a gateway appears, in this list or out of it.** Providers have asked; the answer is no, at any price. Shieldz competes with many gateways listed here, which is exactly why the methodology, the [raw data](https://github.com/ShieldZCash/crypto-payment-gateways-dataset) and every per-row source are public. If a row is wrong, [open a pull request](https://github.com/ShieldZCash/crypto-payment-gateways-dataset) and we will fix it in the next monthly release.

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"What is the worst crypto payment gateway in 2026?","acceptedAnswer":{"@type":"Answer","text":"By documented red flags, BitPay: a verified 2% + $0.25 fee (double the 1% market median), custody of merchant funds, and mandatory KYC. Cryptomus matches it at 2%."}},
{"@type":"Question","name":"What counts as a red flag in this ranking?","acceptedAnswer":{"@type":"Answer","text":"Four measurable criteria: custodial settlement, mandatory merchant KYC, a verified fee above the 1% market median (double-counted at 2% or more), and pricing that is not published on any official page."}},
{"@type":"Question","name":"Is this list saying these companies are scams?","acceptedAnswer":{"@type":"Answer","text":"No. The ranking measures the terms offered to merchants, not legitimacy or product quality. Several entries are established products; the point is that better terms exist across the same market."}},
{"@type":"Question","name":"Why is Stripe on the list?","acceptedAnswer":{"@type":"Answer","text":"Stripe Pay with Crypto charges 1.5%, takes custody, and requires full KYC: above-median pricing for custodial crypto settlement, however convenient the integration."}},
{"@type":"Question","name":"Where does the data come from?","acceptedAnswer":{"@type":"Answer","text":"The open Shieldz crypto payment gateways dataset: 86 providers hand-verified against official pricing pages as of August 2026, updated monthly, public on GitHub with per-row sources."}}
]}
</script>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"ItemList","name":"The 10 worst crypto payment gateways for merchants in 2026, ranked by red flags","numberOfItems":10,"itemListOrder":"https://schema.org/ItemListOrderAscending","itemListElement":[
{"@type":"ListItem","position":1,"name":"BitPay","url":"https://bitpay.com"},
{"@type":"ListItem","position":2,"name":"Cryptomus","url":"https://cryptomus.com"},
{"@type":"ListItem","position":3,"name":"PayKassa","url":"https://paykassa.pro"},
{"@type":"ListItem","position":4,"name":"Bit2Me Commerce","url":"https://bit2me.com/suite/commerce"},
{"@type":"ListItem","position":5,"name":"Stripe (Pay with Crypto)","url":"https://stripe.com/crypto"},
{"@type":"ListItem","position":6,"name":"Alchemy Pay","url":"https://alchemypay.org"},
{"@type":"ListItem","position":7,"name":"Mercuryo","url":"https://mercuryo.io"},
{"@type":"ListItem","position":8,"name":"Bitpace","url":"https://www.bitpace.com"},
{"@type":"ListItem","position":9,"name":"CoinsPaid","url":"https://coinspaid.com"},
{"@type":"ListItem","position":10,"name":"0xProcessing","url":"https://0xprocessing.com"}
]}
</script>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Claim","text":"Ranked on four documented red flags (custody, mandatory KYC, above-median fees, unpublished pricing), the worst crypto payment gateway deals for merchants in 2026 come from the most famous brands: BitPay charges a verified 2% + $0.25, double the 1% market median, while taking custody and requiring KYC.","firstAppearance":{"@type":"CreativeWork","url":"https://shieldz.cash/blog/worst-crypto-payment-gateways-2026","author":{"@type":"Organization","name":"Shieldz"}}}
</script>
