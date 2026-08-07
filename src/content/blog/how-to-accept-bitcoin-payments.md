---
title: "How to Accept Bitcoin Payments (2026)"
description: "How to accept Bitcoin payments non-custodially: buyers pay BTC, you settle in BTC or a stablecoin, straight to your wallet. No KYC, $0 platform fee."
pubDate: 2026-08-07
author: "Deniz Yanbollu"
tags: ["accept bitcoin payments", "bitcoin", "btc", "crypto", "how-to"]
eyebrow: "How-to"
image: "https://shieldz.cash/blog/og/how-to-accept-bitcoin-payments.png"
---

If you want to accept Bitcoin payments, you are targeting the single largest group of crypto holders there is. BTC is the coin people actually keep, and for many buyers it is the only one they hold. This guide shows how to accept Bitcoin non-custodially, with no signup, no KYC and a $0 platform fee, so the money settles straight to a wallet you control.

The usual objection is volatility: you sell for $100 of BTC and hope it is still worth $100 tomorrow. [Shieldz](https://shieldz.cash) removes that choice from the buyer's side of the table. Your customer pays in Bitcoin, and you decide what you receive: keep the BTC, or settle in a stablecoin like USDC and never touch the volatility at all.

## Why accept Bitcoin specifically

Bitcoin is where crypto wealth actually sits. Buyers who hold BTC often hold nothing else, so a checkout without a Bitcoin option quietly turns them away. And compared with card rails, a Bitcoin payment has no chargeback window: once it confirms on-chain, it is final.

The other reason is cost. Traditional Bitcoin processors take a percentage of every sale. A non-custodial gateway with a $0 platform fee does not.

<figure style="margin:28px 0">
  <a href="/blog/charts/btc-payment-cost.svg"><img src="/blog/charts/btc-payment-cost.svg" alt="Processor fee on a $100 Bitcoin sale in 2026: BitPay $2.25, Coinbase Commerce $1.00, CoinGate $1.00, and Shieldz $0.00 with the buyer paying only network gas." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Published rates on a single $100 Bitcoin sale. Shieldz takes no cut; the buyer covers their own network fee.</figcaption>
</figure>

## Keep the BTC, or settle in dollars

This is the decision most guides gloss over, and it is yours, not your customer's:

- **Settle in BTC.** Point Shieldz at your own Bitcoin wallet (an xpub, so only public keys are shared) and every payment derives a fresh address and lands there. You hold the BTC, no third party in between.
- **Settle in a stablecoin.** The buyer still pays in Bitcoin, but the payment is converted in the routing layer (via Chainflip, NEAR intents or Relay) and you receive USDC or USDT on a low-fee chain like Base. You quoted $100, you receive $100.

Either way the buyer experience is identical: they see a Bitcoin address and a QR code, they pay from any wallet or exchange, and the checkout confirms on-chain.

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="Shieldz hosted checkout page showing a crypto payment with a QR code and pay-any-coin options including Bitcoin" width="760" height="520" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The buyer scans a QR code and pays BTC from any wallet or exchange. You settle in the coin you chose.</figcaption>
</figure>

## Non-custodial: no processor holding your Bitcoin

With BitPay or Coinbase Commerce style processors, the payment lands in the company's system first and reaches you on their schedule, under their terms, after their KYC. A [non-custodial crypto payment gateway](/blog/non-custodial-crypto-payment-gateway) settles straight to your own address. Shieldz never holds the funds and never sees a private key, so there is nothing to freeze, nothing to withdraw and no account to close. You can [verify that yourself](https://shieldz.cash/verify).

## How to accept Bitcoin payments, step by step

1. **Have a wallet address.** For stablecoin settlement, any EVM wallet address works. To hold the BTC itself, use your Bitcoin wallet's xpub. You never share a private key.
2. **Create a checkout.** Open the [payment link generator](https://shieldz.cash/tools/payment-link), paste your wallet and the amount, and pick your settlement coin. For a store, drop it into [WooCommerce](/blog/accept-crypto-payments-woocommerce) instead.
3. **Share the link.** The customer opens it, pays BTC from any wallet or exchange, and your settlement coin arrives in your own wallet the moment the payment confirms.

No account, no KYC, no platform fee.

## What it costs

There is a $0 platform fee, on the swap route too. The buyer pays the Bitcoin network fee for their own transaction, which varies with congestion but is typically well under what a card processor takes from the same sale. If you settle in a stablecoin on Base, your side costs about a cent. Full details on the [pricing](https://shieldz.cash/pricing) page.

## FAQ

**Can I accept Bitcoin without holding Bitcoin?**
Yes. The buyer pays BTC and the routing layer converts it, so you receive a stablecoin like USDC in your own wallet. You never touch the volatility.

**Where does the money go?**
Straight to the wallet you configured, BTC to your own addresses or a stablecoin to your EVM wallet. Shieldz is non-custodial and never holds the funds.

**Do I need an account or KYC to accept Bitcoin?**
No. You need a wallet address. There is no signup and no KYC to start accepting Bitcoin.

**Are Bitcoin payments refundable or chargeback-able?**
There are no chargebacks; a confirmed payment is final. Refunds are simply you sending funds back, on your terms.

**What does it cost to accept Bitcoin?**
A $0 platform fee. The buyer pays only the Bitcoin network fee for their transaction.

## Start accepting Bitcoin

Let BTC holders pay you in the coin they already have, and receive it on your terms. Create a checkout with the [payment link generator](https://shieldz.cash/tools/payment-link), read [how to accept crypto payments](/blog/how-to-accept-crypto-payments) for the wider setup, or see [pay with BTC, ETH, USDT or USDC](/blog/pay-with-btc-eth-usdt-usdc) to open the checkout up to every major coin. Prefer dollars only? Start with [accept stablecoin payments](/blog/accept-stablecoin-payments).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to accept Bitcoin payments",
  "step": [
    { "@type": "HowToStep", "name": "Have a wallet address", "text": "Use any EVM wallet address for stablecoin settlement, or your Bitcoin wallet's xpub to hold the BTC itself. You never share a private key." },
    { "@type": "HowToStep", "name": "Create a checkout", "text": "Open the payment link generator, paste your wallet and the amount, and pick your settlement coin. For a store, use the WooCommerce plugin." },
    { "@type": "HowToStep", "name": "Share the link", "text": "The customer pays BTC from any wallet or exchange and your settlement coin arrives in your own wallet when the payment confirms." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I accept Bitcoin without holding Bitcoin?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The buyer pays BTC and the routing layer converts it, so you receive a stablecoin like USDC in your own wallet." } },
    { "@type": "Question", "name": "Where does the money go?", "acceptedAnswer": { "@type": "Answer", "text": "Straight to the wallet you configured, BTC to your own addresses or a stablecoin to your EVM wallet. Shieldz is non-custodial and never holds the funds." } },
    { "@type": "Question", "name": "Do I need an account or KYC to accept Bitcoin?", "acceptedAnswer": { "@type": "Answer", "text": "No. You need a wallet address. There is no signup and no KYC to start." } },
    { "@type": "Question", "name": "Are Bitcoin payments refundable or chargeback-able?", "acceptedAnswer": { "@type": "Answer", "text": "There are no chargebacks; a confirmed payment is final. Refunds are simply you sending funds back, on your terms." } },
    { "@type": "Question", "name": "What does it cost to accept Bitcoin?", "acceptedAnswer": { "@type": "Answer", "text": "A $0 platform fee. The buyer pays only the Bitcoin network fee for their transaction." } }
  ]
}
</script>
