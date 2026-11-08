---
title: "Swap BTC to USDC on Base or Ethereum: Two New Bitcoin Routes"
description: "Swap native BTC to USDC, cbBTC, WBTC or EURC on Base and Ethereum. Garden and BOB Gateway now join Chainflip, NEAR and Relay, with live quotes compared."
pubDate: 2026-11-09
author: "Deniz Yanbollu"
tags: ["swap btc to usdc", "btc to base", "bitcoin to evm", "garden", "bob gateway", "cbbtc", "cross-chain crypto swap", "non-custodial"]
eyebrow: "Guide"
swapBanner: true
image: "https://shieldz.cash/blog/og/swap-btc-to-usdc-base.png"
---

To swap BTC to USDC on Base or Ethereum without an exchange, you need a protocol that takes real bitcoin on the Bitcoin network and pays out a token on an EVM chain. Until this month [Shieldz Swap](https://swap.shieldz.cash) had three of them: Chainflip, NEAR Intents and Relay. In early November 2026 we added two more, **Garden** and **BOB Gateway**, and they changed which route wins for a lot of bitcoin swaps.

This post covers what the two new routes do, how they compare on a live quote, and which destinations each one reaches. It is a follow-up to our guide on [swapping Bitcoin to ETH or SOL](/blog/swap-bitcoin-to-ethereum-solana), which explains the basics of native versus wrapped BTC.

## Every bitcoin route, asked at once

When you ask Shieldz Swap for BTC to USDC on Base, the router now asks every protocol that can do it at the same time, and ranks the answers by what you receive. Here is one of those races, 0.1 BTC (about $7,470) to USDC on Base:

<figure style="margin:28px 0">
  <a href="/blog/charts/btc-evm-routes-usdc.svg"><img src="/blog/charts/btc-evm-routes-usdc.svg" alt="0.1 BTC to USDC on Base quoted at the same moment: BOB Gateway 7,463.96 USDC, NEAR Intents 7,445.11, Garden 7,428.32, Relay 7,419.09." width="860" height="360" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">BOB Gateway paid about $45 more than Relay on the same 0.1 BTC. All numbers are after every fee.</figcaption>
</figure>

Chainflip does not deliver USDC on Base, so it sat this one out. On USDC on Ethereum it does, and there the same race at 0.01 BTC went to Chainflip at 745.89 USDC, ten cents under BOB Gateway's 745.98, because Chainflip was quoted to land about 1.5 minutes sooner. The point of asking everyone is that no single protocol is best for every pair and every size.

## Garden: bitcoin HTLCs, fast once your deposit is in

[Garden](https://garden.finance) swaps native BTC through hash time-locked contracts (HTLCs). You lock bitcoin in a script on the Bitcoin network, a solver locks the payout on the other chain, and the secret that unlocks one unlocks the other. If the solver never fills, your bitcoin unlocks back to your own refund address after a timeout. Nobody, Shieldz included, holds the coins in between.

What Garden delivers natively from BTC today:

- **cbBTC on Base**
- **cbBTC on Ethereum**
- **WBTC on Ethereum**

For any other token on Base, such as USDC, Shieldz chains a second leg: Garden delivers cbBTC on Base to a Relay deposit address, and Relay swaps it into the token you asked for and sends it to you. If that second leg cannot run, the cbBTC goes to your Base address instead of being lost.

Garden quotes about 20 seconds. That figure is Garden's own leg, after it sees your deposit; a Bitcoin transaction still has to reach a block first, so plan for minutes, not seconds. On BTC to cbBTC, where both sides are bitcoin, Garden is usually the best quote: 0.09975665 cbBTC for 0.1 BTC in our test, against 0.09963881 from NEAR Intents.

## BOB Gateway: one deposit address, 33 destinations

[BOB Gateway](https://gobob.xyz) takes the opposite approach to the same problem. You send BTC to a plain Taproot deposit address, with no special script or OP_RETURN, and BOB's solvers deliver the token you chose on the destination chain in one transaction.

Its list is the widest of any bitcoin route on Shieldz: 33 tokens across Ethereum, Base, Arbitrum, Avalanche, Unichain, HyperEVM and Tron. Eleven of them no other route reaches from bitcoin, including **EURC**, **LBTC**, **SolvBTC**, **JPYC** and **RLUSD**. 0.1 BTC to EURC on Base quoted 6,696.76 EURC.

BOB Gateway is slower, about 8 to 10 minutes per quote, but on stablecoins it often pays the most. The first BOB swap through Shieldz, 0.096 BTC to WBTC on Ethereum, settled on 2026-11-04.

<figure style="margin:28px 0">
  <a href="/blog/charts/btc-evm-coverage.svg"><img src="/blog/charts/btc-evm-coverage.svg" alt="Coverage matrix of native BTC to EVM routes: Garden delivers cbBTC on Base, WBTC on Ethereum and USDC on Base; BOB Gateway covers every row including EURC, LBTC and SolvBTC; Chainflip, NEAR Intents and Relay cover subsets." width="860" height="436" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Garden and BOB Gateway fill the gaps the older routes left, most of all on Base and for euro and bitcoin-backed tokens.</figcaption>
</figure>

## Price versus speed: how the router picks

The router does not only look at the amount. It discounts each quote by 0.05% for every minute it expects to take, so a route that pays slightly less but lands much sooner can win. You can see this in the route picker:

<figure style="margin:28px 0">
  <a href="/blog/img/swap-btc-to-base-routes.png"><img src="/blog/img/swap-btc-to-base-routes.png" alt="Shieldz Swap route picker for 0.1 BTC to USDC on Base: Garden marked Best at 7,435.87 USDC in about 21 seconds, BOB Gateway 7,461.31 USDC in about 469 seconds, Relay 7,426.64 USDC in about 1 second, NEAR Intents 7,443.43 USDC in about 809 seconds." width="760" height="1305" loading="lazy" style="width:100%;max-width:520px;height:auto;border-radius:16px;border:1px solid #262626;display:block;margin:0 auto" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Here Garden is marked Best for its speed, while BOB Gateway pays about 25 USDC more. One tap picks any route.</figcaption>
</figure>

In that screenshot Garden is picked, while BOB Gateway would pay about 25 USDC more. Since both still wait for the Bitcoin block, if you care more about the last dollar than the last minutes, open the list and choose BOB Gateway. Every route shows its amount and expected time before you send anything.

## How to swap BTC to USDC on Base, step by step

1. **Open [swap.shieldz.cash](https://swap.shieldz.cash)**, set **You pay** to BTC and **You get** to USDC on Base (or any token in the table above).
2. **Enter an amount.** Quotes from every route that can fill it arrive within a few seconds.
3. **Paste your Base or Ethereum address** under Receive at.
4. **Pay.** Either connect a Bitcoin wallet (Ledger, Trezor, Keystone, MetaMask or OKX Wallet) or choose **Pay by QR code**. With QR you also enter a Bitcoin refund address, since no wallet tells us where you paid from.
5. **Send the exact amount** to the deposit address shown.
6. **Follow it in Activity** until the USDC lands.

<figure style="margin:28px 0">
  <a href="/blog/img/swap-btc-to-base-usdc.png"><img src="/blog/img/swap-btc-to-base-usdc.png" alt="Shieldz Swap form with 0.1 BTC on Bitcoin to 7,459.37 USDC on Base, routed through BOB Gateway in about 506 seconds, with a 0.15% service fee of $11.20 and Connect BTC wallet or Pay by QR code buttons." width="760" height="1022" loading="lazy" style="width:100%;max-width:520px;height:auto;border-radius:16px;border:1px solid #262626;display:block;margin:0 auto" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The swap form on 2026-11-09: 0.1 BTC to 7,459.37 USDC on Base through BOB Gateway.</figcaption>
</figure>

## What it costs

On the 0.1 BTC quote in the screenshot, the Shieldz service fee was 0.15%, $11.20. Garden and BOB Gateway each add their own solver and execution fees (BOB's execution fee was $0.54 on that quote), and all of it is already taken out of the amount you are shown. The only cost on top is the Bitcoin network fee your wallet pays to send.

Each route has limits. BOB Gateway takes at least 25,000 sats and, at the time of writing, at most about 1.29 BTC per swap. Below roughly $100, the fixed costs of any bitcoin route eat a visible share of the swap, and the form tells you when an amount is under a route's minimum. Our [swap fee comparison](/blog/crypto-swap-fees-compared) puts app fees across swap apps side by side.

## FAQ

**Can I swap BTC to USDC on Base without an exchange?**
Yes. On Shieldz Swap you send native BTC from your own wallet, and Garden, BOB Gateway, NEAR Intents or Relay deliver USDC to your Base address. There is no account and no KYC, and Shieldz never holds the funds.

**What is the difference between Garden and BOB Gateway?**
Garden uses Bitcoin HTLCs and is strongest on bitcoin-to-bitcoin pairs like BTC to cbBTC or WBTC. BOB Gateway uses a plain deposit address, reaches 33 tokens on seven chains, and often pays the most on stablecoins, but takes longer.

**How long does a BTC to USDC swap take?**
Your Bitcoin transaction has to reach a block first, which takes about ten minutes on average. After that, Garden quotes about 20 seconds for its leg, and BOB Gateway and NEAR Intents quote roughly 8 to 14 minutes in total.

**What happens if a swap fails?**
Garden's HTLC unlocks your bitcoin back to your refund address after a timeout. BOB Gateway refunds to the Bitcoin refund address set when the order is created. If Garden's second leg on Base cannot run, you receive cbBTC on Base instead.

## Try it

Open [swap.shieldz.cash](https://swap.shieldz.cash), set BTC to USDC on Base, and open the route list to see every protocol's quote. Going the other way, from wrapped bitcoin back to the real thing, read [how to swap WBTC to BTC](/blog/wbtc-to-btc). If you take bitcoin as a business and want it to settle as USDC, see [how to accept Bitcoin payments](/blog/how-to-accept-bitcoin-payments) and the [Shieldz docs](/docs).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to swap BTC to USDC on Base",
  "description": "Swap native bitcoin to USDC on Base with Shieldz Swap, comparing Garden, BOB Gateway, NEAR Intents and Relay routes.",
  "totalTime": "PT15M",
  "step": [
    { "@type": "HowToStep", "name": "Pick your coins", "text": "On swap.shieldz.cash, set You pay to BTC and You get to USDC on Base." },
    { "@type": "HowToStep", "name": "Compare routes", "text": "Enter an amount. Every route that can fill it returns a quote with the amount received and the expected time." },
    { "@type": "HowToStep", "name": "Set where you receive", "text": "Paste your Base address under Receive at." },
    { "@type": "HowToStep", "name": "Choose how to pay", "text": "Connect a Bitcoin wallet, or choose Pay by QR code and enter a Bitcoin refund address." },
    { "@type": "HowToStep", "name": "Send the BTC", "text": "Send the exact amount shown to the deposit address." },
    { "@type": "HowToStep", "name": "Wait for it to land", "text": "Follow the swap in Activity until the USDC arrives at your Base address." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I swap BTC to USDC on Base without an exchange?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. On Shieldz Swap you send native BTC from your own wallet, and Garden, BOB Gateway, NEAR Intents or Relay deliver USDC to your Base address. There is no account and no KYC, and Shieldz never holds the funds." } },
    { "@type": "Question", "name": "What is the difference between Garden and BOB Gateway?", "acceptedAnswer": { "@type": "Answer", "text": "Garden uses Bitcoin HTLCs and is strongest on bitcoin-to-bitcoin pairs like BTC to cbBTC or WBTC. BOB Gateway uses a plain deposit address, reaches 33 tokens on seven chains, and often pays the most on stablecoins, but takes longer." } },
    { "@type": "Question", "name": "How long does a BTC to USDC swap take?", "acceptedAnswer": { "@type": "Answer", "text": "Your Bitcoin transaction has to reach a block first, which takes about ten minutes on average. After that, Garden quotes about 20 seconds for its leg, and BOB Gateway and NEAR Intents quote roughly 8 to 14 minutes in total." } },
    { "@type": "Question", "name": "What happens if a swap fails?", "acceptedAnswer": { "@type": "Answer", "text": "Garden's HTLC unlocks your bitcoin back to your refund address after a timeout. BOB Gateway refunds to the Bitcoin refund address set when the order is created. If Garden's second leg on Base cannot run, you receive cbBTC on Base instead." } }
  ]
}
</script>
