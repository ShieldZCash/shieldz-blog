---
title: "Coinbase Commerce Alternatives: 7 Gateways Compared (2026)"
description: "Coinbase Commerce shut down March 31, 2026. The 7 best alternatives compared on fees, custody and KYC, from $0 non-custodial to self-hosted options."
pubDate: 2026-08-13
author: "Deniz Yanbollu"
tags: ["coinbase commerce alternatives", "comparison", "crypto", "payments", "gateways"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/coinbase-commerce-alternatives.png"
---

The search for Coinbase Commerce alternatives stopped being optional on March 31, 2026: Coinbase shut the Commerce platform down. Merchants outside the United States and Singapore were left without a successor, and the replacement for those two markets, Coinbase Business, is a different product entirely: custodial, full KYB verification, funds held by Coinbase. If you built on Commerce for its self-custodial model, the replacement is the opposite of what you chose.

So this is now a migration question, and this post is the shortlist.

We maintain a dataset of [50 crypto payment gateways](/blog/50-crypto-payment-gateways-compared), and these seven are the alternatives we would actually consider, each for a different reason. Disclosure, as always: Shieldz is our product, and the numbers below come from published pricing pages as of August 2026.

## The fee picture first

Coinbase Commerce charged 1% per transaction (its final published rate before the shutdown), which is exactly the market median in our dataset. The alternatives run from double that down to zero.

<figure style="margin:28px 0">
  <a href="/blog/charts/cc-alternatives-fees.svg"><img src="/blog/charts/cc-alternatives-fees.svg" alt="Published fee of Coinbase Commerce at 1% against seven alternatives in 2026: BitPay 2%, Cryptomus 2%, Stripe crypto 1.5%, CoinGate 1%, NOWPayments 0.5%, BTCPay Server 0% and Shieldz 0%." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Standard advertised rates, August 2026; Coinbase Commerce shown at its final published rate. Two alternatives charge nothing at all.</figcaption>
</figure>

## 1. Shieldz: non-custodial, $0 fee, no signup

The direct opposite of the hosted-balance model. [Shieldz](https://shieldz.cash) settles every payment straight to your own wallet, charges a $0 platform fee (the buyer pays only network gas), and requires no account or KYC: you paste a wallet address and share a link. Buyers can pay in BTC, ETH, stablecoins and more across major networks while you settle in one coin, converted by [independent swap rails](/blog/cross-chain-crypto-payments) rather than an internal balance. The side-by-side with Coinbase Commerce is on the [comparison page](https://shieldz.cash/vs-coinbase-commerce), and the non-custodial claim is [verifiable](https://shieldz.cash/verify).

**Choose it if:** you want the fee at zero and the money in your own wallet, without onboarding.

## 2. BTCPay Server: self-hosted and free forever

The reference answer for sovereignty. BTCPay is open-source software you run yourself: 0% fees, no third party at all, Lightning included, altcoins via plugins. The cost is operational, since you maintain the server, the node and the uptime. Our [self-hosted gateway guide](/blog/self-hosted-crypto-payment-gateway) covers when that trade is worth it.

**Choose it if:** you have the ops capacity and want no company, including us, in the path.

## 3. NOWPayments: the coin-coverage play

If the ten-coin lineup is your complaint, NOWPayments advertises 350+ currencies at a 0.5% fee, half the Coinbase Commerce rate, with auto-forwarding to your wallet. KYC stays optional at standard volumes. The long coin tail comes with the usual caveat: more coins means more price and liquidity variance at checkout.

**Choose it if:** your buyers pay in long-tail coins and you want one integration to cover them.

## 4. CoinGate: the EU workhorse

Same 1% fee as Coinbase Commerce, but with roughly 70 coins, Lightning enabled by default, fiat settlement to EUR, and an EU regulatory footprint. It is custodial and KYC-gated, so you are trading one hosted platform for another, but you get more rails for the same price.

**Choose it if:** you want fiat payouts in Europe and Lightning without running anything.

## 5. BitPay: the enterprise incumbent

Twice the fee (2% + $0.25, dropping at volume), full KYB, custodial, and the longest track record in the industry with daily bank settlements in fiat. Larger merchants pick it precisely for the compliance surface the smaller options avoid.

**Choose it if:** procurement needs a 15-year-old vendor and daily fiat settlement more than you need a low fee.

## 6. Stripe Pay with Crypto: staying inside Stripe

If your business already runs on Stripe, its crypto option accepts USDC and settles into the Stripe balance you already reconcile, at 1.5%. It is the narrowest option here (stablecoins only) and fully custodial, but the integration cost is nearly zero for existing Stripe shops.

**Choose it if:** Stripe is already your source of truth and you just want a crypto tender type.

## 7. Cryptomus: the high-risk fallback

2% standard with negotiable rates, 120+ coins, and an appetite for verticals that mainstream processors decline. It is custodial and KYC-required, and its strength is precisely that it says yes where others say no.

**Choose it if:** your vertical gets rejected elsewhere and you accept the custody trade-off.

## Side by side

| Gateway | Fee | Custody | KYC to start | Coins | Fiat payout |
|---|---|---|---|---|---|
| Coinbase Commerce | 1% | Hybrid (hosted balance) | Required | ~10 | Yes (shut down 3/2026) |
| [Shieldz](https://shieldz.cash) | 0% | Non-custodial | None | 20 | No |
| BTCPay Server | 0% | Self-hosted | None | 1+ | No |
| NOWPayments | 0.5% | Non-custodial | Optional | 350 | Yes |
| CoinGate | 1% | Custodial | Required | 70 | Yes |
| BitPay | 2% | Custodial | Required | 20 | Yes |
| Stripe crypto | 1.5% | Custodial | Required | 3 | Yes |
| Cryptomus | 2% | Custodial | Required | 120 | No |

## How to pick

Fold the seven into the three questions that actually decide it. **Who holds the money?** Only Shieldz, BTCPay and NOWPayments keep it out of a provider balance; the rest reproduce Coinbase Commerce's custody model with different logos. **What is the all-in cost?** Add payout and conversion fees to the headline before comparing. **What happens on day one?** Two of the seven let you accept a payment today with nothing but a wallet address. The full framework is in [what is a crypto payment gateway](/blog/what-is-a-crypto-payment-gateway).

## FAQ

**What is the best Coinbase Commerce alternative?**
It depends on the complaint. For the fee and custody, a non-custodial $0 gateway like Shieldz. For sovereignty, self-hosted BTCPay Server. For coin coverage, NOWPayments. For enterprise compliance, BitPay.

**Is there a free alternative to Coinbase Commerce?**
Yes, two models: self-hosted software like BTCPay Server (0%, you run it) and non-custodial gateways like Shieldz ($0 platform fee, the buyer pays only network gas). See the [best free gateways](/blog/best-free-crypto-payment-gateways-2026) list.

**Can I accept crypto without KYC, unlike Coinbase Commerce?**
Yes. Providers that never hold your funds have nothing to gate: Shieldz and BTCPay Server require no verification to start. The trade-offs are covered in [accepting crypto without KYC](/blog/accept-crypto-payments-without-kyc).

**What happened to Coinbase Commerce?**
Coinbase shut it down on March 31, 2026. The replacement, Coinbase Business, is custodial, requires full KYB verification, and is available only in the United States and Singapore. Merchants elsewhere need one of the alternatives above.

## Try the $0 alternative in one minute

The fastest way to compare is to feel the difference: create a checkout with the [payment link generator](https://shieldz.cash/tools/payment-link) with nothing but a wallet address, then put it next to your Coinbase Commerce onboarding. For the wider market context, the [50-gateway comparison](/blog/50-crypto-payment-gateways-compared) has the full dataset, and [how to accept crypto payments](/blog/how-to-accept-crypto-payments) covers the setup end to end.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the best Coinbase Commerce alternative?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the complaint. For the fee and custody, a non-custodial $0 gateway like Shieldz. For sovereignty, self-hosted BTCPay Server. For coin coverage, NOWPayments. For enterprise compliance, BitPay." } },
    { "@type": "Question", "name": "Is there a free alternative to Coinbase Commerce?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, two models: self-hosted software like BTCPay Server, where you run the gateway yourself for 0%, and non-custodial gateways like Shieldz with a $0 platform fee where the buyer pays only network gas." } },
    { "@type": "Question", "name": "Can I accept crypto without KYC, unlike Coinbase Commerce?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Providers that never hold your funds have nothing to gate: Shieldz and BTCPay Server require no verification to start accepting payments." } },
    { "@type": "Question", "name": "What happened to Coinbase Commerce?", "acceptedAnswer": { "@type": "Answer", "text": "Coinbase shut it down on March 31, 2026. The replacement, Coinbase Business, is custodial, requires full KYB verification, and is available only in the United States and Singapore." } }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Coinbase Commerce alternatives (2026)",
  "numberOfItems": 7,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Shieldz", "url": "https://shieldz.cash" },
    { "@type": "ListItem", "position": 2, "name": "BTCPay Server", "url": "https://btcpayserver.org" },
    { "@type": "ListItem", "position": 3, "name": "NOWPayments", "url": "https://nowpayments.io" },
    { "@type": "ListItem", "position": 4, "name": "CoinGate", "url": "https://coingate.com" },
    { "@type": "ListItem", "position": 5, "name": "BitPay", "url": "https://bitpay.com" },
    { "@type": "ListItem", "position": 6, "name": "Stripe Pay with Crypto", "url": "https://stripe.com/crypto" },
    { "@type": "ListItem", "position": 7, "name": "Cryptomus", "url": "https://cryptomus.com" }
  ]
}
</script>
