---
title: "Sell Digital Downloads for Crypto with Easy Digital Downloads (EDD)"
description: "Accept Bitcoin, USDC and more for your digital products on Easy Digital Downloads. Free Shieldz plugin, non-custodial, $0 fee, and no chargebacks."
pubDate: 2026-07-08
author: "Deniz Yanbollu"
tags: ["edd", "easy-digital-downloads", "crypto", "digital-products", "wordpress"]
eyebrow: "How-to"
image: "https://shieldz.cash/blog/og/sell-digital-downloads-for-crypto-edd.png"
---

Selling digital products, software licenses, ebooks, presets, courses, has one payment problem that physical goods do not: chargebacks. A buyer downloads the file, then disputes the charge, and you lose both the product and a dispute fee. Crypto settlements are final, so that whole category of loss goes away. If you run [Easy Digital Downloads](https://easydigitaldownloads.com/), you can accept Bitcoin, USDC, ETH and more with the free [Shieldz](https://shieldz.cash) plugin, non-custodial, $0 platform fee.

This is the digital-goods guide in a set of three for the same plugin, alongside [WooCommerce payments](/blog/accept-crypto-payments-woocommerce) and [GiveWP donations](/blog/accept-crypto-donations-givewp). One install covers all three.

## Why crypto fits digital goods

Two reasons, and both hit digital sellers harder than most merchants.

**Chargebacks.** Card-not-present digital purchases are a favourite target for friendly fraud: the product is instantly deliverable and non-returnable, so disputes are easy to file and hard to contest. On-chain settlement is irreversible, once a crypto payment confirms, it cannot be clawed back.

<figure style="margin:28px 0">
  <a href="/blog/charts/digital-chargebacks.svg"><img src="/blog/charts/digital-chargebacks.svg" alt="Bar chart: chargeback and dispute rates on digital goods by payment type. Credit card 0.9%, PayPal 0.6%, Shieldz crypto 0%" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Directional, but the shape is real: cards carry dispute risk on digital goods; a confirmed on-chain payment is final, so crypto disputes are zero.</figcaption>
</figure>

**Global, permissionless reach.** Digital products sell everywhere, but cards do not work everywhere. A buyer with a stablecoin can pay you from anywhere, no card network required, and you still settle to a stable asset. And, like every Shieldz integration, it is [non-custodial](/blog/what-is-a-crypto-payment-gateway): funds settle straight to your wallet at a $0 platform fee.

## Step 1 — Install the plugin

[Download the plugin](https://shieldz.cash/downloads/shieldz-crypto-payments.zip) and upload it under **Plugins → Add New → Upload Plugin**, then activate. It detects EDD automatically and registers Shieldz as a checkout gateway, no extension to buy.

## Step 2 — Enable the Shieldz gateway in EDD

Go to **Downloads → Settings → Payments** and enable **Shieldz (Crypto, 0% fee)** under Active Gateways. Set it as the default gateway if you like. In keyless mode you paste the wallet address where funds settle; API-key mode adds signed webhooks so you can automate license delivery on payment.

<figure style="margin:28px 0">
  <a href="/blog/img/edd-settings.png"><img src="/blog/img/edd-settings.png" alt="Easy Digital Downloads payment settings with Shieldz (Crypto, 0% fee) enabled in Active Gateways and set as the default gateway" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Downloads → Settings → Payments. Shieldz is enabled in Active Gateways and set as the default.</figcaption>
</figure>

## Step 3 — Buyers pay any coin at checkout

Shieldz now shows up as a payment option on the EDD checkout. The buyer picks it, lands on the hosted Shieldz checkout, and pays in any supported coin, Bitcoin, USDC, USDT, ETH, SOL, shielded Zcash and more. Because it is [pay-with-any-coin](/blog/pay-any-coin-trust-tradeoff), customers pay with what they already hold, and you settle to a stable asset like USDC.

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="Shieldz hosted checkout page showing a crypto payment with a QR code and pay-any-coin options" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The hosted checkout — pay any coin, settle to your own wallet, and the payment is final.</figcaption>
</figure>

## Step 4 — Automate delivery with a webhook (optional)

For instant license or file delivery, switch to API-key mode and point a webhook at your endpoint. When the payment confirms, Shieldz sends a signed `invoice.paid` event and EDD completes the order. The signing and verification details are in the [developer docs](https://shieldz.cash/docs); every request is HMAC-signed so you can trust it before you unlock a download.

## FAQ

**Is it free?** Yes, $0 platform fee. You only pay the coin's network fee, which the buyer covers.

**Can I still get chargebacks?** No. Confirmed on-chain payments are final, that is the core reason crypto suits digital goods.

**Does Shieldz hold my money?** No. Funds settle to an address you control.

**Do I need code?** No for keyless mode. API-key mode (for automated delivery) is a few lines against a signed webhook.

## Get started

[Download the plugin](https://shieldz.cash/downloads/shieldz-crypto-payments.zip), enable Shieldz in EDD, and sell your first product for crypto, with no chargebacks to worry about. The same plugin also powers [WooCommerce](/blog/accept-crypto-payments-woocommerce) and [GiveWP](/blog/accept-crypto-donations-givewp). New here? Start with [how to accept crypto payments](/blog/how-to-accept-crypto-payments) or the [best free crypto payment gateways of 2026](/blog/best-free-crypto-payment-gateways-2026). Selling a single file without a store? Use a [pay-to-unlock file link](/blog/pay-to-unlock-file-link), which now takes [direct file uploads up to 10 MB](/blog/sell-pdf-for-crypto).
