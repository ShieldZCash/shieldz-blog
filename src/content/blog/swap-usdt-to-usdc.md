---
title: "Swap USDT to USDC Without an Exchange: TRC-20, ERC-20, Solana, Base"
seoTitle: "Swap USDT to USDC Without an Exchange (Tron, Solana, Base)"
description: "Move USDT into USDC across Tron, Ethereum, Solana or Base from your own wallet. Real quotes at $500, $5,000 and $50,000, plus why a same-price swap still costs gas."
pubDate: 2026-11-20
tags: ["swap usdt to usdc", "usdt to usdc", "usdt trc20 to usdc", "usdt to usdc on base", "usdt to usdc solana", "stablecoin swap", "cross-chain crypto swap", "non-custodial"]
eyebrow: "Guide"
swapBanner: true
---

**Yes, you can swap USDT to USDC from your own wallet, with no exchange account.** You send USDT on the chain it sits on and receive USDC at your address on the chain you pick. Both coins are worth a dollar, but the swap is not free: in live quotes on 19 November 2026 the best route kept **0.12% to 0.67%** of the amount, and the chain you receive on moved the cost more than the size of the swap did.

Below are live quotes at $500, $5,000 and $50,000 for USDT on Tron (TRC-20), Ethereum (ERC-20), Solana and Base, the minimums that make small swaps expensive, and what to check before you sign. Every number comes from the [Shieldz Swap](https://swap.shieldz.cash/swap/usdt-to-usdc) router, which asks every route at the same second, between 21:42 and 21:47 UTC.

## The short answer

- **Cost on the best route:** 0.2% to 0.4% for most combinations at $5,000. Tron USDT to USDC on Ethereum, Arbitrum or Solana was the cheapest of all above $5,000, at 0.12% to 0.20%.
- **Most expensive:** USDT to USDC on Base, 0.67% at every size, because only one route answered.
- **Small amounts:** from Tron, a $20 swap lost about 13% to fixed fees and $100 lost about 2.8%. Same-chain swaps on Arbitrum, BNB Chain or Base stayed under 1% even at $20.
- **What you need:** USDT in a wallet you control, a little of the source chain's coin for the network fee (TRX on Tron, ETH on Ethereum or Base, SOL on Solana), and an address on the chain you want USDC on. No account and no KYC.

## Why a $1 to $1 swap is not free

USDT and USDC both track the dollar, so it is fair to expect 1,000 USDT to become 1,000 USDC. It doesn't, for four reasons:

1. **The two coins don't trade at exactly the same price.** At the time of these quotes USDT was at about $0.9992 and USDC at about $0.9996, a 0.04% gap you pay before any fee.
2. **The route takes a fee** for the liquidity or the solver that fills your swap, and the Shieldz service fee of 0.15% is included where it applies.
3. **Someone pays gas to deliver your USDC** on the destination chain, and that cost is built into the quote. It is a fixed amount, which is why small swaps cost a larger share.
4. **You pay the network fee to send your USDT**, separately, from your own wallet. It is not in any of the numbers below.

The fourth one surprises people most on Tron: sending USDT on Tron burns TRX for energy unless your account has staked energy, so keep some TRX next to your USDT.

## Pick the destination chain first

Where you want the USDC to end up changes the price more than which tool you use. This is what $5,000 of USDT turned into on the best route for each combination:

<figure style="margin:28px 0">
  <a href="/blog/charts/usdt-usdc-5k.svg"><img src="/blog/charts/usdt-usdc-5k.svg" alt="What 5,000 USDT becomes in USDC on the best route, live quotes 19 November 2026: Tron USDT to Ethereum USDC 4,990.82 (Chainflip); Tron to Arbitrum 4,989.95; Tron to Solana 4,989.80; Ethereum USDT to Ethereum USDC 4,987.30; Ethereum to Solana 4,987.19; Arbitrum to Arbitrum 4,986.11; Ethereum to Base 4,985.84; Solana to Solana 4,982.96; Tron to Base 4,981.73; BNB Chain to BNB Chain 4,978.60; Base to Base 4,966.61." width="860" height="712" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Best route per combination, all fees deducted except your own send fee. Axis starts at 4,960.</figcaption>
</figure>

The spread from best to worst was $24 on $5,000. Two things stand out: from Tron it was cheaper to receive USDC on Ethereum, Arbitrum or Solana than on Base, and swapping inside Base cost more than any cross-chain route in the test.

## USDT on Tron (TRC-20) to USDC

Tron has no native USDC, so USDT on Tron always becomes USDC on another chain. These are the quotes:

| You send | Receive USDC on | Best route | You receive | Cost | Next route |
|---|---|---|---|---|---|
| 500 USDT | Ethereum | NEAR Intents (~1.5 min) | 497.30 | 0.54% | Relay: 495.91, 0.82% |
| 500 USDT | Arbitrum | NEAR Intents (~1.5 min) | 497.95 | 0.41% | Relay: 496.03, 0.79% |
| 500 USDT | Solana | NEAR Intents (~1.5 min) | 497.45 | 0.51% | Relay: 495.80, 0.84% |
| 500 USDT | Base | NEAR Intents (~1.5 min) | 497.51 | 0.50% | Relay: 496.03, 0.79% |
| 5,000 USDT | Ethereum | Chainflip (~3 min) | 4,990.82 | 0.18% | Relay: 4,981.59, 0.37% |
| 5,000 USDT | Solana | Chainflip (~3 min) | 4,989.80 | 0.20% | Relay: 4,980.60, 0.39% |
| 5,000 USDT | Base | Relay (seconds) | 4,981.73 | 0.37% | NEAR Intents: 4,975.48, 0.49% |
| 50,000 USDT | Ethereum | Chainflip (~3 min) | 49,941.93 | 0.12% | none answered |
| 50,000 USDT | Solana | Chainflip (~3 min) | 49,932.12 | 0.14% | none answered |
| 50,000 USDT | Base | Relay (seconds) | 49,838.15 | 0.32% | NEAR Intents: 49,746.51, 0.51% |

At $500 NEAR Intents delivered the most; from $5,000 Chainflip took over for every destination it serves, and at $50,000 it was the only route that quoted Ethereum, Solana and Arbitrum. Chainflip doesn't serve Base, so there Relay won. Start here: [500 USDT on Tron to USDC on Ethereum](https://swap.shieldz.cash/swap?from=TRON.USDT-TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&to=ETH.USDC-0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&amount=500), or change the destination on the form.

## USDT on Ethereum (ERC-20) to USDC

On Ethereum you can stay on the same chain or receive USDC elsewhere for about the same price:

| You send | Receive USDC on | Best route | You receive | Cost | Next route |
|---|---|---|---|---|---|
| 500 USDT | Ethereum | Chainflip (~3 min) | 498.65 | 0.27% | Relay: 498.09, 0.38% |
| 500 USDT | Solana | Chainflip (~3 min) | 498.45 | 0.31% | Relay: 497.99, 0.40% |
| 500 USDT | Base | Relay (seconds) | 498.36 | 0.33% | NEAR Intents: 497.95, 0.41% |
| 5,000 USDT | Ethereum | Chainflip (~3 min) | 4,987.30 | 0.25% | Relay: 4,985.71, 0.29% |
| 5,000 USDT | Base | Relay (~25 s) | 4,985.84 | 0.28% | NEAR Intents: 4,979.41, 0.41% |
| 50,000 USDT | Ethereum | Chainflip (~3 min) | 49,884.83 | 0.23% | Relay: 49,860.22, 0.28% |
| 50,000 USDT | Solana | Chainflip (~3 min) | 49,860.27 | 0.28% | Relay: 49,850.22, 0.30% |

The gas to send USDT on Ethereum comes on top and is paid in ETH. On a $500 swap it can be a bigger cost than the swap itself when the network is busy, so check your wallet's estimate first. [Swap 500 USDT to USDC on Ethereum](https://swap.shieldz.cash/swap?from=ETH.USDT-0xdAC17F958D2ee523a2206206994597C13D831ec7&to=ETH.USDC-0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&amount=500).

## USDT on Solana, Base, Arbitrum and BNB Chain

Same-chain swaps on the cheaper networks, where the send fee is cents:

| You send | Best route | 500 USDT gives | 5,000 USDT gives | 50,000 USDT gives |
|---|---|---|---|---|
| Solana USDT to Solana USDC | Relay (seconds) | 498.15 (0.37%) | 4,982.96 (0.34%) | 49,830.38 (0.34%) |
| Arbitrum USDT to Arbitrum USDC | Relay (seconds) | 498.57 (0.29%) | 4,986.11 (0.28%) | 49,860.71 (0.28%) |
| BNB Chain USDT to BNB Chain USDC | NEAR Intents at $500 and $5,000, Relay at $50,000 | 497.96 (0.41%) | 4,978.60 (0.43%) | 49,715.62 (0.57%) |
| Base USDT to Base USDC | Relay, the only route | 496.63 (0.67%) | 4,966.61 (0.67%) | 49,665.69 (0.67%) |

Base is the outlier: only one route offered USDT to USDC there, and it charged 0.67% at every size. If you want USDC on Base and hold USDT somewhere else, coming in from another chain was cheaper: 5,000 USDT on Ethereum delivered 4,985.84 USDC on Base (0.28%) and 5,000 USDT on Solana delivered 4,984.07 (0.32%).

## Same-chain swap or cross-chain swap

These are different tools. A same-chain swap (USDT on Ethereum to USDC on Ethereum) can be done on any DEX, and a cross-chain swap (USDT on Tron to USDC on Solana) needs a bridge, a solver network or a router that has both sides. A router like Shieldz asks Chainflip, Relay and NEAR Intents for both kinds in one go, and every route is listed with what it delivers so you can choose the cheaper or the faster one. If you only want to move USDT or USDC between chains without changing the coin, our guide to [moving USDT and USDC between chains](/blog/move-usdt-usdc-between-chains) covers that, and [moving USDT from Ethereum to Tron](/blog/move-usdt-ethereum-to-tron) covers the TRC-20 side in detail.

## Minimums, and why quotes fail on small balances

Every route has fixed costs, mostly the gas to deliver your USDC. On a big swap they vanish; on a small one they are most of the bill:

| You send | Tron USDT to Ethereum USDC | Ethereum USDT to Ethereum USDC | Arbitrum USDT to Arbitrum USDC |
|---|---|---|---|
| 20 USDT | 17.43 (12.8%) | 19.62 (1.9%) | 19.92 (0.4%) |
| 100 USDT | 97.18 (2.8%) | 99.30 (0.7%) | 99.69 (0.3%) |
| 500 USDT | 497.30 (0.5%) | 498.65 (0.3%) | 498.57 (0.3%) |

NEAR Intents refused anything from Tron below its minimum of about $100, so small Tron swaps had only Relay and Chainflip. If a quote fails or looks bad on a small balance, raise the amount or pick a destination on a cheap chain; for amounts under about $100 on Tron the fixed fees are a real share of what you send. To see each line of a quote, read our [guide to reading a swap quote](https://swap.shieldz.cash/learn/how-to-read-a-swap-quote).

## How to swap USDT to USDC, step by step

Before you start: you need a wallet that holds the USDT and a little of that chain's coin for the send fee. If the wallet has USDT but no TRX, ETH or SOL, the send will fail at the last step.

1. **Open the swap with your amount filled in:** [Tron USDT to Ethereum USDC](https://swap.shieldz.cash/swap?from=TRON.USDT-TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&to=ETH.USDC-0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&amount=500), [Ethereum USDT to Ethereum USDC](https://swap.shieldz.cash/swap?from=ETH.USDT-0xdAC17F958D2ee523a2206206994597C13D831ec7&to=ETH.USDC-0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&amount=500), [Solana USDT to Solana USDC](https://swap.shieldz.cash/swap?from=SOL.USDT-Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB&to=SOL.USDC-EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=500) or [Ethereum USDT to Base USDC](https://swap.shieldz.cash/swap?from=ETH.USDT-0xdAC17F958D2ee523a2206206994597C13D831ec7&to=BASE.USDC-0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&amount=500). Change the amount to yours; every route is asked again.
2. **Paste the address that should receive the USDC.** On Ethereum, Base or Arbitrum it starts with `0x`. On Solana it is 32 to 44 letters and numbers with no `0x`. A Tron address starts with `T`.
3. **Pay.** Connect the wallet that holds the USDT, or choose "Send from any wallet" to get a deposit address and QR code you can pay from any wallet or exchange.
4. **Wait for the USDC.** Relay finished in seconds in this test, NEAR Intents in about a minute and a half, Chainflip in about three minutes after your deposit confirmed.

The reverse, USDC to USDT, works the same way: see [USDC to USDT](https://swap.shieldz.cash/swap/usdc-to-usdt) and, for Tron, [USDC to USDT TRC-20](https://swap.shieldz.cash/swap/usdc-to-usdt-trc20). In this test USDC on Base, Ethereum or Solana became TRC-20 USDT for 0.2% at $5,000.

## What to check before you sign

- **The destination chain and address format.** USDC sent to a Tron address doesn't exist, and a `0x` address on the wrong network can't be recovered. Copy the address from the wallet's receive screen, not from a chat.
- **"You receive" and the minimum.** Every quote shows the USDC you should get and the least the route will deliver. If the market moves past that before your deposit lands, the swap is refunded instead of filled at a worse price.
- **A test amount for a new address.** On a large swap, send a small amount first to a new address. On Tron, keep it above about $100, or the fixed fees eat the test.
- **Your send fee.** Check the TRX, ETH or SOL fee your wallet shows. It is not part of the quote.

## Why not use an exchange?

An exchange will convert USDT to USDC too, often cheaply on the trade itself. But you deposit, convert and withdraw: an account with identity checks, a withdrawal fee, and your coins in the exchange's wallet in between. If your USDT is already on an exchange, converting there and withdrawing USDC can be the simpler path. If it is in your wallet, a swap does it in one transaction and the coins never sit with anyone else. For very large amounts, our [$1 million USDT to USDC test](/blog/swap-1-million-usdt-usdc) shows where route liquidity runs out.

## FAQ

**Can you swap USDT to USDC directly?**
Yes. A swap takes USDT from your wallet and pays USDC to your address, on the same chain or a different one, with no exchange account. On 19 November 2026 the best route cost 0.12% to 0.67% depending on the chains and the amount.

**What is the cheapest way to swap USDT to USDC?**
In these quotes, Tron USDT to USDC on Ethereum, Arbitrum or Solana through Chainflip, at 0.12% to 0.20% from $5,000 up. On Ethereum alone it was 0.23% to 0.27%. Small swaps are cheapest on low-fee chains such as Arbitrum or BNB Chain.

**How do I swap USDT TRC-20 to USDC?**
Tron has no native USDC, so you receive it on another chain: send TRC-20 USDT and give an Ethereum, Solana, Arbitrum or Base address. Keep TRX in the wallet for the send fee, and send more than about $100, or fixed fees take a large share.

**How do I swap USDT to USDC on Base?**
Only Relay quoted USDT to USDC on Base, at 0.67%. Swapping from USDT on Ethereum or Solana to USDC on Base was about half that, 0.28% to 0.33%.

**Is USDT to USDC 1:1?**
Close, not exact. Both track the dollar, but they trade a few hundredths of a percent apart, and every swap pays a route fee and the gas to deliver. From $500 up, expect to receive about 99.3% to 99.9% of what you send on the best route, depending on the chains.

**How long does it take?**
Seconds through Relay, about a minute and a half through NEAR Intents, about three minutes through Chainflip, counted from when your deposit confirms.

**Do I need an account or KYC?**
No. You need a wallet with the USDT and a little of the chain's coin for the network fee, and an address to receive the USDC.
