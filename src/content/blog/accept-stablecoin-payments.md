---
title: "Accept stablecoin payments: USDC, USDT, PYUSD and 20+ more"
description: "How to accept stablecoin payments (USDC, USDT, PYUSD, DAI, PAXG, EURC and 20+ more) non-custodially, with $0 platform fee and settlement to your own wallet."
pubDate: 2026-07-12
author: "Deniz Yanbollu"
tags: ["stablecoin-payments", "crypto", "payments", "usdc", "guide"]
---

To **accept stablecoin payments** is to get paid in dollars that live on a blockchain: a customer sends you USDC or USDT, it confirms in seconds, and it is final. No 3% card fee, no chargeback window, no payout that lands next week. For a business, that is the whole pitch of crypto without the price swings, because a stablecoin is pegged one to one to the dollar (or the euro, or gold).

This guide covers how to accept stablecoin payments the non-custodial way with [Shieldz](/): 20+ stablecoins across the major chains, a $0 platform fee, and settlement straight to your own wallet. It sits in the same cluster as [how to accept crypto payments](/blog/how-to-accept-crypto-payments) and [what a crypto payment gateway is](/blog/what-is-a-crypto-payment-gateway); start there if you want the wider picture first. If you also want to take BTC and ETH alongside stablecoins, see [pay with BTC, ETH, USDT or USDC](/blog/pay-with-btc-eth-usdt-usdc).

## Why accept stablecoin payments

Card rails were built for a different era and priced like it. On a single $100 sale, PayPal keeps about $3.98 and a Stripe card charge about $3.20. A custodial crypto processor still skims roughly 1%. A stablecoin payment on a low-fee chain like Base costs the buyer around a cent of network gas and charges you nothing.

<figure style="margin:28px 0">
  <a href="/blog/charts/stablecoin-vs-card-cost.svg"><img src="/blog/charts/stablecoin-vs-card-cost.svg" alt="Cost to accept a $100 sale in 2026: PayPal $3.98, Stripe card $3.20, Coinbase Commerce $1.00, and a Shieldz stablecoin payment about $0.01 (zero platform fee plus a cent of Base network gas)." width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">On a $100 sale, a stablecoin payment keeps almost the entire amount. Published rates, single sale.</figcaption>
</figure>

The fee is only the first reason. Stablecoin payments are also:

- **Final.** An on-chain payment cannot be reversed. There is no chargeback fraud and no "item not received" dispute six weeks later.
- **Instant.** The money lands in your wallet as the transaction confirms, not on a processor's payout schedule.
- **Global.** A customer in any country pays the same way, with no card-network borders or currency conversion desk in the middle.
- **Yours.** With a non-custodial gateway, the funds are never held by anyone else, so there is no account to freeze and no balance to release.

## Which stablecoins can you accept

The two that carry most volume are **USDC** and **USDT**, and you can [accept USDC](/accept-usdc) or [accept USDT](/accept-usdt) across Base, Arbitrum, Optimism, Polygon and Ethereum, plus USDT on Tron and both on Solana. Beyond the big two, Shieldz settles a wide bench of brand-name dollar stablecoins:

- **PayPal USD (PYUSD)**, **Sky Dollar (USDS)**, **Ripple USD (RLUSD)** and **First Digital USD (FDUSD)**
- **Pax Dollar (USDP)**, **Gemini Dollar (GUSD)**, **Dai (DAI)**, **Curve USD (crvUSD)**, **Aave GHO** and **Frax (FRAX)**

It is not only dollars. You can take the euro stablecoin **EURC** (Circle's MiCA-compliant euro coin) and even **PAX Gold (PAXG)**, a token backed one to one by physical gold, if you want to price in something other than USD. See the full list on [supported coins](/supported-coins).

You do not have to make the customer hold the exact coin you want, either. Shieldz can let a buyer pay in almost any coin and settle you in the single stablecoin you chose, routing the swap under the hood. That convenience has a tradeoff worth understanding, which we cover in [pay any coin: the trust tradeoff](/blog/pay-any-coin-trust-tradeoff).

## How to accept stablecoin payments in three steps

The flow is the same whether you sell software, services, or physical goods.

1. **Point Shieldz at your wallet.** You give it a settlement address, the wallet where you want the money to land. That is a public key, so Shieldz can watch for payments but can never spend them.
2. **Create a checkout.** Spin up a [payment link](/tools/payment-link) in seconds, or call the API to create an invoice. Either way the customer gets a hosted pay page with the amount, an address, and a QR code.
3. **Get paid and get notified.** The customer sends the stablecoin, it settles directly to your wallet, and a signed webhook tells your app the instant it confirms, so fulfilment is automatic.

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="Shieldz hosted checkout page showing a stablecoin payment: the amount due, a payment address, and a QR code, with the coin and network selected by the buyer." width="760" height="520" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The hosted checkout. The buyer picks a coin and network; the money settles to your wallet.</figcaption>
</figure>

Developers can wire this in with a few API calls; see the [crypto payment API quickstart](/blog/crypto-payment-api) and the [API docs](/docs). Running a store instead of code? The same engine powers the [WooCommerce plugin](/accept-crypto-woocommerce).

## Non-custodial by default

The reason a stablecoin payment can be final, instant, and free is that no middleman sits in the value flow. Shieldz only ever holds a public key, so it settles every payment to the wallet you control and can never freeze or seize a balance, because there is no balance. There is no KYC to start, and the key-derivation code is open source, so you can [verify the non-custodial claim yourself](/verify). Pricing is simple: [$0 platform fee](/pricing), you pay only the coin's network gas.

## FAQ

**What does it cost to accept stablecoin payments?** With Shieldz, a $0 platform fee. The buyer pays their coin's network gas (about a cent on a chain like Base), and you keep the rest of the sale.

**Which stablecoins can I accept?** USDC and USDT across Base, Arbitrum, Optimism, Polygon, Ethereum, Tron and Solana, plus PYUSD, USDS, RLUSD, FDUSD, USDP, GUSD, DAI, crvUSD, GHO and FRAX, the euro coin EURC, and gold-backed PAXG.

**Do stablecoin payments have chargebacks?** No. An on-chain payment is final once confirmed, which removes chargeback fraud entirely. The other side of that coin is that there is no built-in buyer-protection reversal, so treat a confirmed payment as settled.

**Do I need KYC or an account to start?** No KYC to start. Because Shieldz never holds funds, there is no balance to verify. You can create a keyless [payment link](/tools/payment-link) with just a wallet address.

**Where does the money go?** Straight to the wallet address you set. Shieldz is [non-custodial](/what-is-a-crypto-payment-gateway), so funds never pass through its hands.

## Start accepting stablecoins

Point Shieldz at a wallet and you can accept stablecoin payments today, with $0 platform fees and no KYC. Create a [payment link](/tools/payment-link), read the [API quickstart](/blog/crypto-payment-api), or see the full [crypto payment gateway](/what-is-a-crypto-payment-gateway) overview. If you are weighing options, here are the [best free crypto payment gateways in 2026](/blog/best-free-crypto-payment-gateways-2026). Just want the biggest one? See [how to accept USDT payments](/blog/how-to-accept-usdt-payments).

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"What does it cost to accept stablecoin payments?","acceptedAnswer":{"@type":"Answer","text":"With Shieldz, a $0 platform fee. The buyer pays their coin's network gas, about a cent on a chain like Base, and you keep the rest of the sale."}},
{"@type":"Question","name":"Which stablecoins can I accept?","acceptedAnswer":{"@type":"Answer","text":"USDC and USDT across Base, Arbitrum, Optimism, Polygon, Ethereum, Tron and Solana, plus PYUSD, USDS, RLUSD, FDUSD, USDP, GUSD, DAI, crvUSD, GHO and FRAX, the euro stablecoin EURC, and gold-backed PAXG."}},
{"@type":"Question","name":"Do stablecoin payments have chargebacks?","acceptedAnswer":{"@type":"Answer","text":"No. An on-chain payment is final once confirmed, which removes chargeback fraud. There is also no built-in buyer-protection reversal, so treat a confirmed payment as settled."}},
{"@type":"Question","name":"Do I need KYC or an account to accept stablecoins?","acceptedAnswer":{"@type":"Answer","text":"No KYC to start. Because Shieldz never holds funds, there is no balance to verify. You can create a keyless payment link with just a wallet address."}},
{"@type":"Question","name":"Where does the money go?","acceptedAnswer":{"@type":"Answer","text":"Straight to the wallet address you set. Shieldz is non-custodial, so funds never pass through its hands."}}
]}
</script>
