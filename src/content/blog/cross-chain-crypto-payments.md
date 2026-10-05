---
title: "Cross-Chain Crypto Payments: How Swap Routing Really Works"
description: "How cross-chain crypto payments work under the hood: quoting Chainflip, NEAR intents and Relay, ranking by net output, route health and refund paths."
pubDate: 2026-08-09
author: "Deniz Yanbollu"
tags: ["cross-chain crypto payments", "swap routing", "chainflip", "near intents", "engineering"]
eyebrow: "Explainer"
image: "https://shieldz.cash/blog/og/cross-chain-crypto-payments.png"
---

Cross-chain crypto payments have a problem that most checkout pages hide: the buyer holds BTC on Bitcoin, and you want USDC on Base. Something has to convert one into the other, and how that something works decides whether your gateway is a payment tool or a counterparty risk. Most processors solve it custodially: they take the buyer's coin into their own wallet, swap it internally, and credit you later.

This post explains the other way to do it, in the concrete terms of how [Shieldz](https://shieldz.cash) actually routes a swap-settled payment across Chainflip, NEAR intents and Relay. We have written before about [the trust trade-off of pay-any-coin](/blog/pay-any-coin-trust-tradeoff); this is the engineering companion: what happens in the seconds between "buyer picks Bitcoin" and "USDC lands in your wallet", and the two design rules that make it safe to offer at all.

## The shape of the problem

A checkout that accepts one coin is easy: derive an address, watch the chain. A checkout that accepts twenty coins across a dozen networks, while settling every sale into the single coin you chose, needs a conversion layer. You have three options for who runs it:

1. **The processor's own books** (custodial): simple, and the reason most gateways [hold your money](/blog/non-custodial-crypto-payment-gateway).
2. **You** (accept everything, hold everything): now you run a trading desk.
3. **Independent swap rails** (non-custodial): the conversion happens on protocols that hold funds only inside an atomic swap, and the output lands in your wallet.

Shieldz uses the third. The gateway's job shrinks to quoting, ranking and watching. It never holds the money and takes no fee on the swap.

<figure style="margin:28px 0">
  <a href="/blog/charts/swap-routing-flow.svg"><img src="/blog/charts/swap-routing-flow.svg" alt="Lifecycle of a swap-settled payment: buyer pays any supported coin, three rails are quoted and ranked by net output, the winning rail swaps non-custodially, and the merchant settles in one coin to their own wallet, with route health probed every five minutes and a refund path verified before a coin is offered." width="760" height="430" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The full lifecycle. The gateway quotes and watches; independent rails move the money.</figcaption>
</figure>

## Step by step: from coin picked to coin settled

Here is what actually happens when a buyer opens a checkout and picks a coin you do not settle in, say Bitcoin against your USDC-on-Base settlement.

**1. The coin list is filtered before it renders.** The checkout does not show every coin we can theoretically route. A coin is offered only if the merchant enabled pay-any-coin, a healthy route to the settlement asset exists right now, and, critically, a refund path exists for that coin (more on that rule below). Buyers never see an option that cannot complete.

**2. Three rails are quoted.** The routing layer (our LeoKit aggregator) requests quotes for the same conversion from Chainflip, NEAR intents and Relay. These are different designs: Chainflip runs its own cross-chain AMM with native BTC support, NEAR intents settle through solver auctions, Relay fills from market-maker inventory. On any given pair, at any given minute, any of the three can be the best price.

**3. Offers are ranked by net output, not headline rate.** The only number that matters to you is how much of the settlement coin arrives in your wallet after every rail fee and gas cost. A rail with a better advertised rate but worse delivery costs loses the auction. The winner's quote becomes the payment.

**4. A deposit address opens, the buyer pays.** The winning rail issues a deposit address for the buyer's coin. The buyer sends BTC from any wallet or exchange, exactly like a normal payment. From their side, nothing about the routing is visible or required.

**5. The rail swaps, your wallet receives.** The rail executes the conversion and delivers the settlement coin to your address. Shieldz confirms the delivery on-chain and fires the signed webhook. At no step did the payment sit in a Shieldz wallet, because there is none. You can [verify that design yourself](https://shieldz.cash/verify).

## Design rule 1: never offer a coin you cannot refund

Swaps can fail. A buyer can underpay, a rail can reject a deposit, a market can move past a quote's tolerance. The naive answer is a support ticket. The systemic answer is the rule Shieldz enforces: **a coin is only offered if the money can find its way back without anyone's help.**

Concretely, the refund path is resolved before the coin appears in the checkout. For EVM coins, the refund goes to the buyer's own sending address. For UTXO coins like BTC and LTC, a refund address is derived from the merchant's xpub. For chains outside those families, a pre-configured refund address must exist, or the coin is simply not shown. If the swap fails, the funds return by that path and the webhook reports the failure with the refund transaction attached.

## Design rule 2: assume rails fail, and check before the buyer does

Every rail has bad days: congestion, a stuck solver, a drained inventory. A checkout that discovers this after the buyer has picked a coin turns a routing problem into your reputation problem.

So the routing layer probes every rail against the settlement path every five minutes, and a rail that fails twice in a row is quietly pulled from the auction until it recovers. The buyer only ever sees rails that were passing their health checks minutes ago. And if every swap route for a coin is down, an optional fallback lets you receive that coin natively instead, so the sale completes either way.

## What it costs, and who takes what

Shieldz takes no fee on the swap leg, the same $0 platform fee as [direct settlement](https://shieldz.cash/pricing). The conversion itself is not magically free: the winning rail earns its spread, and gas is paid on both chains. But because three rails compete for every payment and are ranked on net output, that cost is the market's best offer at that moment, not a number a processor chose for you.

<figure style="margin:28px 0">
  <a href="/blog/charts/swap-net-received.svg"><img src="/blog/charts/swap-net-received.svg" alt="What a merchant keeps from a 100 dollar sale: about 99 dollars via a custodial processor at the 1 percent median fee, about 99.70 via swap-settle where the only cost is the rail spread, about 99.99 with direct same-coin settlement. Swap figures illustrative." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The 1% median comes from our 50-gateway dataset; the swap-settle figure is illustrative, since the spread floats with the market.</figcaption>
</figure>

For comparison: in our [comparison of 50 crypto payment gateways](/blog/50-crypto-payment-gateways-compared), the median advertised fee is 1%, charged on top of whatever conversion costs the processor's internal books apply. The swap-routing design replaces "our fee plus our spread" with "the best of three competing spreads, plus nothing".

## The privacy option on the same rails

One more property falls out of this architecture: the swap leg can be run confidentially. Because the conversion already passes through an independent rail, routing it through a shielded path breaks the public link between the buyer's payment and your settlement without changing anything else about the flow. How that works, and what it does and does not hide, is covered in [private crypto payments](/blog/private-crypto-payments).

## FAQ

**Is the swap leg custodial?**
No. The conversion runs on independent, non-custodial swap protocols (Chainflip, NEAR intents, Relay), and the output settles to your own wallet. Shieldz holds no funds and no keys at any step, and takes no fee on the swap.

**What happens if a swap fails?**
The funds return by the refund path that was verified before the coin was offered: the buyer's own address for EVM coins, an xpub-derived address for UTXO coins, or a pre-configured refund address. The failure webhook includes the refund transaction.

**What does cross-chain settlement cost the merchant?**
There is a $0 platform fee. The conversion cost is the winning rail's spread plus network gas, and three rails compete on net output for every payment.

**Which coins can buyers pay with?**
BTC, ETH, BNB, AVAX, LTC, DASH, BCH, TON, ZEC and USDC/USDT across major networks, with the checkout showing only coins that have a healthy route and a refund path at that moment.

## Swapping your own coins

The same routing now runs as a standalone app. [Shieldz Swap](/blog/cross-chain-crypto-swap) lets anyone make a cross-chain crypto swap from their own wallet, with NEAR Intents, Chainflip, Relay and THORChain quoted side by side and a flat 0.15% service fee shown on every quote.

## Try it from the merchant side

You do not configure any of this; you pick one settlement coin and the routing does the rest. Create a checkout with the [payment link generator](https://shieldz.cash/tools/payment-link), see the buyer's view in [pay with BTC, ETH, USDT or USDC](/blog/pay-with-btc-eth-usdt-usdc), or start from the basics with [how to accept crypto payments](/blog/how-to-accept-crypto-payments).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is the swap leg of a cross-chain crypto payment custodial?", "acceptedAnswer": { "@type": "Answer", "text": "No. The conversion runs on independent, non-custodial swap protocols (Chainflip, NEAR intents, Relay), and the output settles to the merchant's own wallet. Shieldz holds no funds and no keys and takes no fee on the swap." } },
    { "@type": "Question", "name": "What happens if a swap fails?", "acceptedAnswer": { "@type": "Answer", "text": "Funds return by a refund path verified before the coin was offered: the buyer's own address for EVM coins, an xpub-derived address for UTXO coins, or a pre-configured refund address. The failure webhook includes the refund transaction." } },
    { "@type": "Question", "name": "What does cross-chain settlement cost the merchant?", "acceptedAnswer": { "@type": "Answer", "text": "A $0 platform fee. The conversion cost is the winning rail's spread plus network gas, with three rails competing on net output for every payment." } },
    { "@type": "Question", "name": "Which coins can buyers pay with?", "acceptedAnswer": { "@type": "Answer", "text": "BTC, ETH, BNB, AVAX, LTC, DASH, BCH, TON, ZEC and USDC/USDT across major networks. The checkout only shows coins with a healthy route and a refund path at that moment." } }
  ]
}
</script>
