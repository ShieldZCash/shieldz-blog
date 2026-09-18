---
title: "How to Accept Crypto Donations with GiveWP (Non-Custodial)"
description: "Let supporters donate Bitcoin, USDC and more through GiveWP with the free Shieldz plugin. Non-custodial, $0 platform fee, funds go straight to your wallet."
pubDate: 2026-07-08
author: "Deniz Yanbollu"
tags: ["givewp", "donations", "crypto", "nonprofit", "wordpress"]
eyebrow: "How-to"
image: "https://shieldz.cash/blog/og/accept-crypto-donations-givewp.png"
---

Crypto donors exist, and they give generously, but most WordPress donation forms cannot take their money. If you run fundraising on [GiveWP](https://givewp.com/), you can add Bitcoin, USDC, ETH and more with the free [Shieldz](https://shieldz.cash) plugin, keep 100% of every gift, and never hand custody of donations to a third party.

This is the donations guide in a set of four for the same plugin. The others cover [WooCommerce stores](/blog/accept-crypto-payments-woocommerce), [digital downloads with EDD](/blog/sell-digital-downloads-for-crypto-edd), and [food orders with RestroPress](/blog/accept-crypto-payments-restropress). Install once, and every platform on the site can take crypto.

## Why non-custodial is the right default for a cause

For a nonprofit, custody is not a technicality, it is a governance problem. A custodial processor holds donations, controls the payout schedule, and can freeze a balance. Non-custodial removes all of that: the donor pays to an address derived from your own wallet, Shieldz confirms the on-chain payment, and the funds are already yours. Nothing to withdraw, nothing to freeze. (The mechanics are the same whether you are taking a donation or a [store payment](/blog/what-is-a-crypto-payment-gateway).)

The other win is that more of each gift reaches the mission. Card and PayPal fees quietly skim every donation; Shieldz has a $0 platform fee, so a $100 crypto gift arrives as $100.

<figure style="margin:28px 0">
  <a href="/blog/charts/donation-reach.svg"><img src="/blog/charts/donation-reach.svg" alt="Bar chart: how much of a $100 donation reaches the cause after fees. Credit card $97.50, PayPal $98.01, Shieldz $100.00" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Processing fees come out of the donation. With a 0% platform fee, a $100 crypto gift lands as $100 (minus only the coin's network fee, which the donor covers).</figcaption>
</figure>

## Step 1 — Install the plugin

[Download the plugin](https://shieldz.cash/downloads/shieldz-crypto-payments.zip) and upload it under **Plugins → Add New → Upload Plugin**, then activate. The plugin detects GiveWP automatically and registers Shieldz as a donation gateway, no separate add-on required.

## Step 2 — Enable the Shieldz gateway in GiveWP

Go to **Donations → Settings → Payment Gateways**, enable **Shieldz (Crypto, 0% fee)**, and optionally make it your default. In keyless mode you just paste the wallet address where donations should settle; switch to API-key mode if you want signed webhooks and automatic reconciliation for your accounting.

<figure style="margin:28px 0">
  <a href="/blog/img/give-settings.png"><img src="/blog/img/give-settings.png" alt="GiveWP payment gateway settings with Shieldz (Crypto, 0% fee) listed as an enabled donation gateway" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Donations → Settings → Payment Gateways. Enable Shieldz and, if you like, set it as the default.</figcaption>
</figure>

## Step 3 — Donors pick crypto on your form

Shieldz now appears as a payment method on your GiveWP donation forms. A supporter chooses the crypto option, fills in the usual details, and continues.

<figure style="margin:28px 0">
  <a href="/blog/img/give-donation-form.png"><img src="/blog/img/give-donation-form.png" alt="GiveWP donation form with the Crypto (BTC, USDC, ETH) payment method selected" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626;background:#fff" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Your GiveWP form with Shieldz selected — donors can give in Bitcoin, USDC, ETH and more.</figcaption>
</figure>

## Step 4 — They pay any coin, the gift settles to you

The donor lands on the hosted Shieldz checkout, pays in any supported coin, and the funds settle straight to your wallet. Because it is [pay-with-any-coin](/blog/pay-any-coin-trust-tradeoff), you are not forcing supporters to hold a specific token first, they give what they already own. GiveWP records the donation automatically.

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="Shieldz hosted checkout page showing a crypto donation with a QR code and pay-any-coin options" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The hosted checkout — the donor pays any coin; your cause settles to its own wallet.</figcaption>
</figure>

## FAQ

**Is it really free for nonprofits?** Yes, $0 platform fee. You only pay the coin's network fee, and the donor covers that at checkout.

**Are donations tax-deductible / trackable?** Every donation is recorded in GiveWP with the donor's details as usual; crypto gifts are receipted like any other. Consult your accountant on deductibility in your jurisdiction.

**Does Shieldz hold the donations?** No. They settle to an address your organization controls.

**Do we need a developer?** No. Keyless mode is paste-one-address.

## Get started

[Download the plugin](https://shieldz.cash/downloads/shieldz-crypto-payments.zip), enable Shieldz in GiveWP, and start accepting crypto gifts today. Also running a store, selling digital goods, or taking food orders? The same install powers [WooCommerce payments](/blog/accept-crypto-payments-woocommerce), [Easy Digital Downloads](/blog/sell-digital-downloads-for-crypto-edd) and [RestroPress](/blog/accept-crypto-payments-restropress). New to all this? Start with [how to accept crypto payments](/blog/how-to-accept-crypto-payments) or compare the [best free crypto payment gateways in 2026](/blog/best-free-crypto-payment-gateways-2026).
