---
title: "What is a crypto payment gateway, and how to choose one"
description: "What a crypto payment gateway is, how custodial and non-custodial processing differ, and how to choose one. A plain-English 2026 guide."
pubDate: 2026-06-29
author: "Deniz Yanbollu"
tags: ["guide", "payment-gateway", "crypto", "infrastructure"]
---

A **crypto payment gateway** is the piece of infrastructure that lets a business accept cryptocurrency and turn it into a clean, confirmed payment: a checkout for the customer, address handling and conversion under the hood, and a notification to your app when the money arrives. Think of it as the crypto equivalent of a card payment gateway, minus the card networks taking a cut.

That is the simple definition. The part that actually matters is *who holds the money*, because every other difference between providers follows from it.

## Custodial vs non-custodial crypto payment processing

There are two models, and they are not close.

**Custodial.** The gateway receives the customer's coins into its own wallet, holds a balance for you, and pays you out on its schedule. This is how most "crypto payment platforms" work. It is convenient, and it is exactly where the problems come from: a percentage fee on every payment, payout delays "for security," and the standing ability to freeze or offboard your account. You did the work; they decide when you get paid.

**Non-custodial.** The gateway never holds your money. You give it a public receiving key, the customer pays an address that belongs to you, and the gateway only watches the blockchain and tells you it landed. There is no balance to skim, no payout to delay, no account to freeze, because the funds were never in the middle. This is the model [Shieldz](/) is built on, with [$0 platform fees](/pricing).

If you only remember one thing about choosing a crypto payment gateway: **non-custodial removes the entire risk category**, not just the fee. You can [verify the non-custodial claim yourself](/verify).

## What a good gateway does for you

1. **Hosted checkout.** A drop-in payment page so you do not build crypto UI yourself.
2. **Multi-coin acceptance with single-token settlement.** Customers pay BTC, ETH, USDC, USDT, Zcash and more; you receive the one token you chose. Volatile coins get routed through a swap so you are not left holding price risk.
3. **Signed webhooks.** A verifiable, idempotent notification the instant a payment confirms on-chain, so fulfilment is automatic.
4. **An API and SDKs.** So the gateway fits your stack instead of the other way around. See the [crypto payment API quickstart](/blog/crypto-payment-api).

## How to choose one: a short checklist

- **Custody:** non-custodial, or are they holding your balance? (This is the whole game.)
- **Real cost:** is it $0 + network gas, or a percentage plus withdrawal fees plus float? Here is the [fee comparison](/crypto-payment-fees).
- **KYC:** can you start without uploading business documents? Shieldz has [no KYC to start](/no-kyc).
- **Coins and chains:** does it cover what your customers actually pay with, across the chains you care about? See [supported coins](/supported-coins).
- **Developer experience:** real [docs](/docs), signed webhooks, and SDKs.
- **Chargebacks:** on crypto they do not exist; a confirmed payment is final.

It is also worth comparing specific providers directly, for example [Shieldz vs Coinbase Commerce](/vs-coinbase-commerce), [vs BitPay](/vs-bitpay) and [vs BTCPay Server](/vs-btcpay).

## The bottom line

A crypto payment gateway should make accepting crypto boring in the best way: customers pay, the right token lands in *your* wallet, your app gets told, and nobody in the middle takes a cut or holds the money. If a provider cannot say "non-custodial" plainly, that is your answer.

Want the practical version? Read [how to accept crypto payments](/blog/how-to-accept-crypto-payments) or [accept stablecoin payments](/blog/accept-stablecoin-payments), or [start free](https://merchant.shieldz.cash/signup).
