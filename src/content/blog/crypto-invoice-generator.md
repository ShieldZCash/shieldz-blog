---
title: "Crypto Invoice Generator: Create a Pay Link in Seconds"
description: "Free crypto invoice generator. Create a payment link for any amount, get paid in BTC, ETH, USDC and more, non-custodial with a $0 platform fee."
pubDate: 2026-07-21
author: "Deniz Yanbollu"
tags: ["crypto invoice", "crypto invoice generator", "payments", "stablecoin", "how-to"]
eyebrow: "How-to"
image: "https://shieldz.cash/blog/og/crypto-invoice-generator.png"
---

You finished the work, now you need to get paid in crypto, and you do not want to spin up an account, hand your keys to a processor, or lose 3% to fees. A crypto invoice generator solves exactly this: you type an amount and a memo, and out comes a payment link your client can open and pay. No login, no contract, no custody.

This guide shows how to generate a crypto invoice in seconds with [Shieldz](https://shieldz.cash), what the buyer sees, and why a non-custodial invoice is the safer default. Funds settle straight to a wallet you control, and the only cost is network gas.

## What a crypto invoice actually is

A crypto invoice is a request for a specific amount, tied to a specific order, that a buyer can settle on-chain. The good ones give you three things: a fixed price locked at creation, a single link you can send anywhere, and a clean confirmation when the money arrives. The bad ones bury that behind a signup, a KYC form, and a percentage cut.

The cut is the part people underestimate. Card and PayPal invoicing take a percentage plus a flat fee on every collection. On a $50 invoice that is real money, every time.

<figure style="margin:28px 0">
  <a href="/blog/charts/crypto-invoice-cost.svg"><img src="/blog/charts/crypto-invoice-cost.svg" alt="Cost to collect a 50 dollar invoice: PayPal invoicing 2.24 dollars, Stripe 1.75 dollars, Coinbase Commerce 0.50 dollars, and Shieldz 0 dollars plus network gas." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">On a $50 invoice, the fee is the difference between keeping $50 and keeping $47.76. Shieldz takes $0; the payer covers only network gas.</figcaption>
</figure>

## How to generate a crypto invoice, step by step

1. **Have a wallet address.** Any EVM wallet works, MetaMask, Coinbase Wallet, Rabby, a hardware wallet, whatever you already use. This is where the money lands. You never share a private key.
2. **Open the [payment link generator](https://shieldz.cash/tools/payment-link).** Enter the amount in USD, a short memo like "Design work", and the coin you want to settle in (for example USDC on Base).
3. **Get your link.** Shieldz mints a hosted invoice at `shieldz.cash/pay/<id>` with the price locked. Copy it into an email, a DM, or a chat.
4. **The client pays.** They open the link, pick any major coin on any major chain, and send. Shieldz confirms it on-chain and the funds are already in your wallet, with nothing to withdraw and nothing to freeze.

That is the whole flow. No account is created, no dashboard to manage, and no platform fee is deducted from the amount.

<figure style="margin:28px 0">
  <a href="/blog/img/crypto-invoice-checkout.png"><img src="/blog/img/crypto-invoice-checkout.png" alt="Shieldz crypto invoice checkout showing 50 dollars due for Design work, a search across 9 coins and 7 networks including USD Coin, Ethereum, BNB, Tether, DAI and PYUSD, and a Non-custodial, 0 fees footer." width="760" height="470" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">What your client sees: a $50 invoice, any coin across 7 networks, and one settlement coin arriving in your wallet.</figcaption>
</figure>

## Pay in any coin, settle in one

A good crypto invoice does not force your buyer to hold the exact coin you want. With Shieldz the buyer pays in whatever they have, BTC, ETH, USDT, USDC, BNB, and you receive one settlement coin you chose up front. The swap happens in the routing layer via [NEAR, Chainflip and Relay](/blog/pay-any-coin-trust-tradeoff), so neither side has to think about it.

That is why the checkout above lists 9 coins across 7 networks but the invoice still resolves to, say, USDC on Base. Your buyer gets flexibility, you get predictability. If you would rather quote and settle purely in dollars, the same flow works for a [stablecoin invoice](/blog/accept-stablecoin-payments).

## Why non-custodial matters for invoicing

With a custodial processor, the buyer's payment lands in the processor's wallet first, then you request a payout later. That inserts a third party who can hold, freeze, or delay your money, and who sees every invoice you raise. A [non-custodial crypto payment gateway](/blog/non-custodial-crypto-payment-gateway) removes that middle step: the payment settles to your own address directly. You can [verify the non-custodial claim yourself](https://shieldz.cash/verify) rather than take it on faith.

For freelancers and small merchants this is the difference between "the money is mine the moment it confirms" and "the money is mine once a company decides to release it".

## Invoices for AI agents and automations

Because the generator is keyless and has a plain REST endpoint, an AI agent or a script can mint invoices too. One `POST /api/v1/links` with a wallet address and an amount returns a live pay link, no SDK and no secret key required. That is the basis of [crypto payments for AI agents](/blog/crypto-payments-for-ai-agents): an autonomous service can bill per task and read back whether it was paid. Full details are in the [crypto payment API](/blog/crypto-payment-api) guide.

## FAQ

**Is this crypto invoice generator free?**
Yes. There is a $0 platform fee. The buyer pays only the network gas for their transaction. Shieldz takes no cut of the invoice.

**Do I need an account or KYC to create a crypto invoice?**
No. You need a wallet address and nothing else. No signup, no KYC, no API key for the basic pay link.

**Which coins can my client pay with?**
Major coins across major chains, including BTC, ETH, USDC, USDT, BNB, DAI and more. You choose the single coin the invoice settles to in your wallet.

**Where does the money go?**
Straight to the wallet address you entered. Shieldz is non-custodial, so it never holds the funds and cannot freeze or withdraw them.

**Can I generate invoices programmatically?**
Yes. `POST /api/v1/links` with an amount and a wallet returns a hosted pay link, which is ideal for scripts and AI agents.

## Create your first crypto invoice

Generating a crypto invoice should take seconds, not an onboarding call. Open the [payment link generator](https://shieldz.cash/tools/payment-link) to mint one now, read [how to accept crypto payments](/blog/how-to-accept-crypto-payments) for the wider setup, or see [how to accept Zcash payments](/blog/how-to-accept-zcash-payments) if you want a shielded, private option. Selling a single file instead of billing a client? Use a [pay-to-unlock file link](/blog/pay-to-unlock-file-link). If you build with agents, start on the [agent page](https://shieldz.cash/agent).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to generate a crypto invoice",
  "step": [
    { "@type": "HowToStep", "name": "Have a wallet address", "text": "Use any EVM wallet address where the money should land. You never share a private key." },
    { "@type": "HowToStep", "name": "Open the payment link generator", "text": "Enter the amount in USD, a short memo, and the coin you want to settle in, such as USDC on Base." },
    { "@type": "HowToStep", "name": "Get your link", "text": "Shieldz mints a hosted invoice at shieldz.cash/pay/<id> with the price locked. Copy and send it." },
    { "@type": "HowToStep", "name": "The client pays", "text": "The client opens the link, pays in any major coin on any major chain, and the funds settle straight to your wallet." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is this crypto invoice generator free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. There is a $0 platform fee. The buyer pays only network gas. Shieldz takes no cut of the invoice." } },
    { "@type": "Question", "name": "Do I need an account or KYC to create a crypto invoice?", "acceptedAnswer": { "@type": "Answer", "text": "No. You need a wallet address and nothing else. No signup, no KYC, no API key for the basic pay link." } },
    { "@type": "Question", "name": "Which coins can my client pay with?", "acceptedAnswer": { "@type": "Answer", "text": "Major coins across major chains, including BTC, ETH, USDC, USDT, BNB and DAI. You choose the single coin the invoice settles to." } },
    { "@type": "Question", "name": "Where does the money go?", "acceptedAnswer": { "@type": "Answer", "text": "Straight to the wallet address you entered. Shieldz is non-custodial, so it never holds the funds and cannot freeze or withdraw them." } },
    { "@type": "Question", "name": "Can I generate crypto invoices programmatically?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. POST /api/v1/links with an amount and a wallet returns a hosted pay link, ideal for scripts and AI agents." } }
  ]
}
</script>
