---
title: "How to Accept USDT (Tether) Payments (2026)"
description: "How to accept USDT payments across TRC20, ERC20 and more networks, non-custodial and straight to your wallet, with no signup and a $0 platform fee."
pubDate: 2026-07-27
author: "Deniz Yanbollu"
tags: ["accept usdt", "tether", "trc20", "stablecoin", "how-to"]
eyebrow: "How-to"
image: "https://shieldz.cash/blog/og/how-to-accept-usdt-payments.png"
---

USDT (Tether) is the most widely held stablecoin in the world, and for large parts of Asia, Africa and Latin America it is simply how people hold and move dollars. If your customers are there, letting them pay in USDT is not a nice-to-have, it is the difference between closing the sale and losing it. This guide shows how to accept USDT payments non-custodially, across every major network, straight to a wallet you control, with no signup and a $0 platform fee.

The catch most guides skip is the network problem. "USDT" is not one thing: it lives on Tron (TRC20), Ethereum (ERC20), BSC, Polygon and more, and a customer holding TRC20 cannot pay an address that only takes ERC20. [Shieldz](https://shieldz.cash) solves that by accepting USDT on all of them and settling to the one you want.

## Why accept USDT specifically

Card rails and bank transfers are slow and expensive across borders, and in many markets they barely work at all. A USDT payment confirms in seconds, costs a cent or two of network fee, and arrives as the exact dollar amount you quoted, with no chargeback window.

<figure style="margin:28px 0">
  <a href="/blog/charts/stablecoin-vs-card-cost.svg"><img src="/blog/charts/stablecoin-vs-card-cost.svg" alt="What a $100 sale costs to accept in 2026: PayPal $3.98, Stripe card $3.20, Coinbase Commerce $1.00, and a Shieldz stablecoin payment about $0.01." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">On a $100 sale, card rails take $3 to $4. A USDT payment costs about a cent of network gas.</figcaption>
</figure>

## The network problem, solved

This is the part that trips people up. Your customer might hold USDT on Tron because that is what their exchange sends, while you only set up an Ethereum address. The payment cannot land, and both of you waste time.

Shieldz accepts USDT across seven networks (Tron/TRC20, Ethereum/ERC20, BSC, Polygon, Arbitrum, Optimism and Avalanche) and settles to a single coin on the chain you choose, for example USDT or USDC on Base. Your customer pays with whatever they hold; you receive one predictable asset in your own wallet. You never have to run Tron infrastructure or juggle addresses per network.

<figure style="margin:28px 0">
  <a href="/blog/img/accept-usdt-checkout.png"><img src="/blog/img/accept-usdt-checkout.png" alt="Shieldz checkout for a 120 dollar invoice showing Tether available across 7 networks, with a Non-custodial and feeless note and a 0 fees footer." width="760" height="709" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">One Tether entry, seven networks. The customer picks their chain; you settle to the one you chose.</figcaption>
</figure>

## Non-custodial: the USDT stays yours

With most processors, the customer's USDT lands in the company's wallet first and you request a payout later. That inserts a third party who can freeze, delay, or take a cut. A [non-custodial gateway](/blog/non-custodial-crypto-payment-gateway) settles the USDT straight to your own address, so it is yours the moment the transaction confirms. Nothing to withdraw, nothing to freeze. That is [off-exchange settlement](/blog/off-exchange-crypto-settlement) by default. You can [verify that yourself](https://shieldz.cash/verify).

## How to accept USDT payments, step by step

1. **Have a wallet address.** Any EVM wallet works, and it is where the USDT lands. You never share a private key.
2. **Create a checkout.** Open the [payment link generator](https://shieldz.cash/tools/payment-link), paste your wallet and the amount, and choose your settlement coin (USDT or USDC on a low-fee chain like Base).
3. **Share the link.** The customer opens it, pays USDT on their network, and the settlement coin arrives in your wallet. Shieldz confirms on-chain and never holds the funds.

That is it. No account, no KYC, no platform fee.

## Fees

There is a $0 platform fee. The customer pays only the network gas for their transaction, which is a fraction of a cent on Tron or a low-fee chain like Base, and higher on Ethereum mainnet. Shieldz takes no cut of the USDT. See the full [pricing](https://shieldz.cash/pricing).

## FAQ

**Can I accept USDT on Tron (TRC20) and Ethereum (ERC20) at the same time?**
Yes. A single Shieldz checkout accepts USDT across seven networks including TRC20 and ERC20, and settles to one coin in your wallet.

**Where does the USDT go?**
Straight to the wallet address you entered. Shieldz is non-custodial, so it never holds the funds and cannot freeze or withdraw them.

**Do I need an account or KYC?**
No. You need a wallet address. There is no signup and no KYC to start accepting USDT.

**Which network should I settle on?**
A low-fee chain like Base keeps the gas near a cent while staying a stable, liquid dollar. You can settle in USDT or USDC.

**What does it cost to accept USDT?**
A $0 platform fee. The buyer pays only their network gas.

## Start accepting USDT

Let customers pay in the USDT they already hold, on the network they already use, and receive it straight to your own wallet. Create a checkout with the [payment link generator](https://shieldz.cash/tools/payment-link), see the [accept USDT](https://shieldz.cash/accept-usdt) page, or read [how to accept crypto payments](/blog/how-to-accept-crypto-payments) for the wider setup. To take other stablecoins too, see [accept stablecoin payments](/blog/accept-stablecoin-payments).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to accept USDT (Tether) payments",
  "step": [
    { "@type": "HowToStep", "name": "Have a wallet address", "text": "Use any EVM wallet address where the USDT should land. You never share a private key." },
    { "@type": "HowToStep", "name": "Create a checkout", "text": "Open the payment link generator, paste your wallet and amount, and choose your settlement coin such as USDT or USDC on Base." },
    { "@type": "HowToStep", "name": "Share the link", "text": "The customer pays USDT on their network and the settlement coin arrives in your wallet. Shieldz confirms on-chain and never holds the funds." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I accept USDT on Tron (TRC20) and Ethereum (ERC20) at the same time?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A single Shieldz checkout accepts USDT across seven networks including TRC20 and ERC20, and settles to one coin in your wallet." } },
    { "@type": "Question", "name": "Where does the USDT go?", "acceptedAnswer": { "@type": "Answer", "text": "Straight to the wallet address you entered. Shieldz is non-custodial, so it never holds the funds and cannot freeze or withdraw them." } },
    { "@type": "Question", "name": "Do I need an account or KYC to accept USDT?", "acceptedAnswer": { "@type": "Answer", "text": "No. You need a wallet address. There is no signup and no KYC to start." } },
    { "@type": "Question", "name": "Which network should I settle on?", "acceptedAnswer": { "@type": "Answer", "text": "A low-fee chain like Base keeps gas near a cent. You can settle in USDT or USDC." } },
    { "@type": "Question", "name": "What does it cost to accept USDT?", "acceptedAnswer": { "@type": "Answer", "text": "A $0 platform fee. The buyer pays only their network gas." } }
  ]
}
</script>
