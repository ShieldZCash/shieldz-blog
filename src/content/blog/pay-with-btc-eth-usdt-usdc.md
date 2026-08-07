---
title: "Pay With BTC, ETH, USDT or USDC: One Crypto Checkout"
description: "Let customers pay with BTC, ETH, USDT or USDC and settle to the one coin you want. Non-custodial, no signup, $0 platform fee, straight to your wallet."
pubDate: 2026-07-23
author: "Deniz Yanbollu"
tags: ["pay with crypto", "bitcoin", "ethereum", "usdt", "usdc"]
eyebrow: "How-to"
image: "https://shieldz.cash/blog/og/pay-with-btc-eth-usdt-usdc.png"
---

Different customers hold different coins. One has BTC, another lives in ETH, plenty just want to pay in a stablecoin like USDT or USDC. If your checkout only accepts one of those, you lose the rest. The fix is a checkout that lets people pay with BTC, ETH, USDT or USDC, while you still receive a single, predictable coin in your own wallet.

This guide shows how to accept all four (and more) through one [Shieldz](https://shieldz.cash) checkout, non-custodially, with no signup and a $0 platform fee. Your buyer picks what they hold, you settle in the coin you chose, and the funds go straight to a wallet you control.

## Pay in any of the four, settle in one

The trick is separating what the buyer sends from what you receive. Your customer pays with BTC, ETH, USDT or USDC on the network they prefer. In the routing layer the payment is converted, and you receive one settlement coin you set up front, for example USDC on Base. Neither side has to hold the other's coin.

<figure style="margin:28px 0">
  <a href="/blog/img/crypto-payment-checkout.png"><img src="/blog/img/crypto-payment-checkout.png" alt="Shieldz checkout showing an amount due with USD Coin, Ethereum, BNB, Avalanche and Tether options across multiple networks, and a Non-custodial, 0 fees footer." width="760" height="633" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The buyer chooses BTC, ETH, USDT, USDC and more. You still settle to the one coin you picked.</figcaption>
</figure>

## Why accept all four instead of one

Each of the big four covers a different customer:

- **BTC** is what a large share of holders actually keep and want to spend. See [how to accept Bitcoin payments](/blog/how-to-accept-bitcoin-payments) for the BTC-specific setup.
- **ETH** is the default for the DeFi and NFT crowd.
- **USDT** is the most widely held stablecoin worldwide, especially outside the US.
- **USDC** is the compliance-friendly stablecoin many businesses prefer.

Accepting only one of these quietly filters out everyone who holds the others. Accepting all four, with settlement to a single coin, removes the friction without leaving you holding a grab-bag of assets you did not want.

## It is cheaper than cards, too

Beyond coverage, stablecoin settlement is dramatically cheaper than card rails. Cards and PayPal take a percentage plus a flat fee on every sale. A stablecoin payment through a non-custodial gateway carries a $0 platform fee, and the buyer pays only a cent or so of network gas on a low-cost chain like Base.

<figure style="margin:28px 0">
  <a href="/blog/charts/stablecoin-vs-card-cost.svg"><img src="/blog/charts/stablecoin-vs-card-cost.svg" alt="What a $100 sale costs to accept in 2026: PayPal $3.98, Stripe card $3.20, Coinbase Commerce $1.00, and a Shieldz stablecoin payment about $0.01." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">On a $100 sale, card rails take $3 to $4. A stablecoin payment costs about a cent of gas.</figcaption>
</figure>

## How to set it up

1. **Have a wallet address.** Any EVM wallet works, and it is where the money lands. You never share a private key.
2. **Choose your settlement coin.** Pick the one coin you want to actually receive, such as USDC on Base or USDT.
3. **Create a checkout.** Use the [payment link generator](https://shieldz.cash/tools/payment-link) for a one-off amount, or generate a [crypto invoice](/blog/crypto-invoice-generator) tied to an order. You can also drop it into [WooCommerce](/blog/accept-crypto-payments-woocommerce).
4. **Share the link.** The customer opens it, pays with BTC, ETH, USDT or USDC, and the settlement coin arrives in your wallet. Shieldz confirms on-chain and never holds the funds.

## Non-custodial, so the coins stay yours

Because the payment settles straight to your address, there is no processor account in the middle holding your revenue. That is the whole point of a [non-custodial crypto payment gateway](/blog/non-custodial-crypto-payment-gateway): the money is yours the moment it confirms, with nothing to withdraw and nothing to freeze. If you want the deeper picture on multi-coin acceptance and its trade-offs, see [pay any coin, one settlement](/blog/pay-any-coin-trust-tradeoff).

## FAQ

**Can customers pay with BTC, ETH, USDT and USDC on one checkout?**
Yes. A single Shieldz checkout accepts all four and more, across major networks, while you receive one settlement coin.

**Do I have to hold every coin my customers pay with?**
No. The payment is converted in the routing layer, so you receive only the one coin you chose, in your own wallet.

**What does it cost to accept these coins?**
There is a $0 platform fee. The buyer pays only the network gas for their transaction, which is about a cent on a low-cost chain.

**Do I need an account or KYC?**
No. You need a wallet address. No signup and no KYC to start.

**Which coin should I settle in?**
Most merchants pick a stablecoin like USDC or USDT for price stability, on a low-fee chain like Base.

## Start accepting all four

Let customers pay with BTC, ETH, USDT or USDC without turning your treasury into a mixed bag. Create a checkout with the [payment link generator](https://shieldz.cash/tools/payment-link), read [how to accept crypto payments](/blog/how-to-accept-crypto-payments) for the full walkthrough, or set up a pure [stablecoin checkout](/blog/accept-stablecoin-payments) if you only want dollars. For the most-used coin specifically, see [how to accept USDT payments](/blog/how-to-accept-usdt-payments).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to let customers pay with BTC, ETH, USDT or USDC",
  "step": [
    { "@type": "HowToStep", "name": "Have a wallet address", "text": "Use any EVM wallet address where the money should land. You never share a private key." },
    { "@type": "HowToStep", "name": "Choose your settlement coin", "text": "Pick the one coin you want to receive, such as USDC on Base or USDT." },
    { "@type": "HowToStep", "name": "Create a checkout", "text": "Use the payment link generator for a one-off amount or a crypto invoice tied to an order." },
    { "@type": "HowToStep", "name": "Share the link", "text": "The customer pays with BTC, ETH, USDT or USDC, and the settlement coin arrives in your wallet." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can customers pay with BTC, ETH, USDT and USDC on one checkout?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A single Shieldz checkout accepts all four and more, across major networks, while you receive one settlement coin." } },
    { "@type": "Question", "name": "Do I have to hold every coin my customers pay with?", "acceptedAnswer": { "@type": "Answer", "text": "No. The payment is converted in the routing layer, so you receive only the one coin you chose, in your own wallet." } },
    { "@type": "Question", "name": "What does it cost to accept these coins?", "acceptedAnswer": { "@type": "Answer", "text": "There is a $0 platform fee. The buyer pays only the network gas for their transaction, which is about a cent on a low-cost chain." } },
    { "@type": "Question", "name": "Do I need an account or KYC?", "acceptedAnswer": { "@type": "Answer", "text": "No. You need a wallet address. No signup and no KYC to start." } },
    { "@type": "Question", "name": "Which coin should I settle in?", "acceptedAnswer": { "@type": "Answer", "text": "Most merchants pick a stablecoin like USDC or USDT for price stability, on a low-fee chain like Base." } }
  ]
}
</script>
