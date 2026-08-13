---
title: "How to Accept Crypto Payments on WooCommerce (Free, Non-Custodial)"
description: "Add Bitcoin, USDC and more to WooCommerce with the free Shieldz plugin. Non-custodial, $0 platform fee, classic + Blocks checkout. Step by step with screenshots."
pubDate: 2026-07-08
author: "Deniz Yanbollu"
tags: ["woocommerce", "crypto", "payments", "wordpress", "tutorial"]
eyebrow: "How-to"
image: "https://shieldz.cash/blog/og/accept-crypto-payments-woocommerce.png"
---

If you sell on WooCommerce, adding crypto is usually pitched as a trade-off: give a third party custody of your money, pay a monthly fee, and hope they pay out on time. It does not have to work that way. This guide shows how to accept Bitcoin, USDC, ETH and more on WooCommerce with the free [Shieldz](https://shieldz.cash) plugin, where the money settles straight to a wallet **you** control, at a $0 platform fee.

It takes about five minutes and no code. This is one of three guides for the same plugin, the others cover [crypto donations with GiveWP](/blog/accept-crypto-donations-givewp) and [selling digital downloads for crypto with EDD](/blog/sell-digital-downloads-for-crypto-edd). One plugin, three platforms.

## Why non-custodial matters for a store

A custodial gateway holds your customers' payments and pays you out later. That means a balance that can be frozen, a payout schedule you do not control, and a company that can change its terms. Non-custodial flips it: the buyer pays to an address derived from your own wallet, Shieldz watches the chain, confirms the payment, and the funds are already yours. There is nothing to withdraw and nothing to freeze. If you want the deeper version, see [what a crypto payment gateway actually is](/blog/what-is-a-crypto-payment-gateway).

The other thing a store owner feels immediately is fees. Card processors take a percentage of every sale; Shieldz takes zero. On a single $50 order that is the difference between keeping $47.76 and keeping all $50.

<figure style="margin:28px 0">
  <a href="/blog/charts/woo-net-received.svg"><img src="/blog/charts/woo-net-received.svg" alt="Bar chart: net received on a $50 sale after processor fees. PayPal $47.76, Stripe $48.25, Coinbase Commerce $49.50, Shieldz $50.00" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">On a $50 order, card and custodial-crypto processors shave off a cut. Shieldz has no platform fee — you only ever pay the coin's network fee, which the buyer covers.</figcaption>
</figure>

## Step 1 — Install the plugin

[Download the plugin](https://shieldz.cash/downloads/shieldz-crypto-payments.zip), then in WordPress go to **Plugins → Add New → Upload Plugin**, choose the zip, and click **Activate**. It also installs straight from the WordPress.org directory. The plugin supports the classic shortcode checkout, the newer Cart/Checkout **Blocks**, and High-Performance Order Storage (HPOS) out of the box.

## Step 2 — Enable the Shieldz gateway

Go to **WooCommerce → Settings → Payments**, enable **Shieldz**, and open its settings. You have two modes:

- **Keyless** (fastest): paste the wallet address where you want funds to settle. No account, no API key. Best for most stores.
- **API key**: paste a key from your Shieldz dashboard for signed webhooks and automatic reconciliation. Best for high volume.

<figure style="margin:28px 0">
  <a href="/blog/img/woo-settings.png"><img src="/blog/img/woo-settings.png" alt="WooCommerce payment settings with the Shieldz crypto gateway enabled, keyless mode and a 0x wallet address configured" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">WooCommerce → Settings → Payments → Shieldz. In keyless mode you paste one wallet address and you are done.</figcaption>
</figure>

## Step 3 — Buyers pick Shieldz at checkout

Shieldz now appears as a payment method for your customers, on both the classic and the Blocks checkout. They select it and place the order like any other payment.

<figure style="margin:28px 0">
  <a href="/blog/img/woo-blocks-checkout.png"><img src="/blog/img/woo-blocks-checkout.png" alt="WooCommerce Blocks checkout showing Shieldz crypto as a selectable payment method" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Shieldz on the WooCommerce Blocks checkout, alongside your other payment methods.</figcaption>
</figure>

## Step 4 — They pay any coin, the order completes

The buyer lands on the secure hosted Shieldz checkout, pays in any supported coin — Bitcoin, USDC, USDT, ETH, SOL, shielded Zcash and more — and the funds settle to your wallet. Because it is [pay-with-any-coin](/blog/pay-any-coin-trust-tradeoff), you are not asking customers to already hold your settlement token. WooCommerce marks the order paid automatically, so there is no manual reconciliation.

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="Shieldz hosted checkout page showing a crypto payment with a QR code and pay-any-coin options" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The hosted checkout — the buyer pays any coin; you settle to your own wallet.</figcaption>
</figure>

<figure style="margin:28px 0">
  <a href="/blog/img/woo-order-received.png"><img src="/blog/img/woo-order-received.png" alt="WooCommerce order-received confirmation page after a successful Shieldz crypto payment" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Order received — settled straight to your wallet, no chargebacks.</figcaption>
</figure>

## What your customers can pay with

Buyers pay any supported coin and you settle to a stable asset like USDC on the chain you choose. The full flow, the fee model, and the coin list are covered in [how to accept crypto payments](/blog/how-to-accept-crypto-payments) and on the [WooCommerce landing page](https://shieldz.cash/accept-crypto-woocommerce). If you are weighing options, our roundup of the [best free crypto payment gateways in 2026](/blog/best-free-crypto-payment-gateways-2026) puts the fee-free, non-custodial gateways side by side.

## FAQ

**Is the plugin free?** Yes, and there is a $0 platform fee on payments. You only pay ordinary on-chain network fees, which the buyer covers.

**Does Shieldz hold my money?** No. Payments settle straight to an address you control.

**Do I need to write code?** No. Keyless mode is paste-one-address.

**Does it work with WooCommerce Blocks?** Yes, both classic and Blocks checkout, plus HPOS.

## Get started

[Download the plugin](https://shieldz.cash/downloads/shieldz-crypto-payments.zip), paste your wallet address, and take your first crypto order today. Prefer to see the API instead? Read the [developer docs](https://shieldz.cash/docs). Running donations or digital products on the same site? The same plugin also powers [GiveWP donations](/blog/accept-crypto-donations-givewp) and [Easy Digital Downloads](/blog/sell-digital-downloads-for-crypto-edd).
