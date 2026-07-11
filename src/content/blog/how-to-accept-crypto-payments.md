---
title: "How to accept crypto payments (a practical 2026 guide)"
description: "How to accept crypto payments as a business: your options and how to take USDC, USDT, Bitcoin and Zcash straight to your own wallet at $0 fees."
pubDate: 2026-06-30
author: "Deniz Yanbollu"
tags: ["guide", "payments", "crypto", "merchants"]
---

If you sell anything online, "how do I accept crypto payments?" has a longer answer than it should. Most guides quietly assume you will hand your money to a company that holds it, takes a cut, and decides when you can withdraw. You do not have to. This is the short, honest version of how to accept crypto payments in 2026, and how to do it without giving up custody of a single cent.

## What "accept crypto payments" actually means

There are three separate things people lump together:

1. **Receiving** the coins a customer sends.
2. **Settling** into the asset you actually want (say, a stablecoin instead of a volatile coin).
3. **Knowing** a payment happened so your app can ship the order.

A good setup does all three without ever taking custody of your funds. A custodial processor does all three by holding your money in the middle, which is where the fees, the payout delays, and the account freezes come from.

## Your options, briefly and honestly

- **A custodial gateway** (the BitPay / Coinbase Commerce model). Easy to start, but they hold a balance, charge a percentage, and can freeze or offboard you. See the [fee comparison](/crypto-payment-fees) and [why custody is the real cost](/trust).
- **Run your own node** (BTCPay Server and friends). Fully self-hosted and non-custodial, but you maintain servers, nodes, and uptime yourself.
- **A non-custodial gateway** (what Shieldz is). You give a public receiving key, customers pay that address directly, and the service only watches the chain and notifies you. No balance to hold, nothing to freeze, [$0 platform fees](/pricing).

If you want the definition and the trade-offs in one place, the [crypto payment gateway explainer](/blog/what-is-a-crypto-payment-gateway) goes deeper.

## How to accept crypto payments with Shieldz, in five minutes

1. **Sign in** with a wallet, Google, or Telegram. No business documents, [no KYC to start](/no-kyc).
2. **Add a receiving address** (or an extended public key / Zcash viewing key). Shieldz derives a fresh address per invoice from it; it never sees a spending key.
3. **Create an invoice** from the dashboard or the [API](/blog/crypto-payment-api). You get a hosted checkout link and a QR code.
4. **Send the customer** to that link. They pay BTC, ETH, USDC, USDT, Zcash or others from any wallet; you settle to the one token you chose.
5. **Get a signed webhook** the moment it confirms on-chain, so your app can fulfil the order automatically.

That is the whole loop. The money goes from the buyer's wallet to yours. We never touch it.

## Which coins should you accept?

Start with what people actually pay in: **USDC and USDT** (stable, no volatility risk), **Bitcoin**, and **shielded Zcash** for privacy. You can read the per-coin guides for [Bitcoin](/accept-bitcoin), [USDC](/accept-usdc), [USDT](/accept-usdt) and [Zcash](/accept-zcash). If a customer pays in a coin you do not settle in, an independent swap routes it and you still receive your chosen token.

## What to watch for

- **Custody.** If a provider holds a balance for you, every other risk follows from that. Prefer non-custodial. [Verify it yourself.](/verify)
- **Real cost.** "Low fee" often hides a percentage plus a withdrawal fee plus float. With a non-custodial model you pay only network gas.
- **Chargebacks.** They do not exist on crypto. A confirmed payment is final, which removes a whole category of fraud for digital goods.
- **Privacy and KYC.** Decide up front whether you want to route customers through identity checks. Shieldz does not gate signup behind paperwork.

## On WordPress?

If your store runs on WordPress, you can skip the code entirely with one free plugin that covers three platforms: [accept crypto on WooCommerce](/blog/accept-crypto-payments-woocommerce), [take crypto donations with GiveWP](/blog/accept-crypto-donations-givewp), or [sell digital downloads for crypto with EDD](/blog/sell-digital-downloads-for-crypto-edd). Paste a wallet address and you are live.

## The one-line summary

To accept crypto payments well: take the coins **directly to your own wallet**, [settle to a stablecoin](/blog/accept-stablecoin-payments) if you want predictability, and use signed webhooks to automate fulfilment. That is exactly what Shieldz is built to do, for $0. [Start free](https://merchant.shieldz.cash/signup) or [read the API docs](/docs).
