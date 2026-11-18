---
title: "How to Swap USDC on Solana to ETH (Real Quotes, No Bridge, No Exchange)"
description: "Swap USDC on Solana to native ETH in one transaction, no bridge and no ETH for gas. Real quotes at $100, $1,000 and $10,000, and which route wins."
pubDate: 2026-10-28
author: "Deniz Yanbollu"
tags: ["swap usdc sol to eth", "usdc solana to ethereum", "solana to ethereum", "cross-chain crypto swap", "chainflip", "near intents", "non-custodial"]
eyebrow: "How-to"
swapBanner: true
image: "https://shieldz.cash/blog/og/swap-usdc-solana-to-eth.png"
---

To swap USDC on Solana to ETH, you need a cross-chain swap: you send USDC from your Solana wallet, and native ETH arrives at your Ethereum address. You can't just send Solana USDC to an Ethereum address. It is an SPL token on a different chain, and your Phantom wallet will refuse or the funds will go nowhere useful.

The good news is that this is now a single transaction. [Shieldz Swap](https://swap.shieldz.cash) asks Chainflip and NEAR Intents for the same swap at the same moment and shows you every route. Below are real quotes we pulled at $100, $1,000 and $10,000, a step-by-step walkthrough, and the one surprise in the data: receiving on an Ethereum L2 was not cheaper. If you are moving stablecoins rather than buying ETH, see [how to move USDT and USDC between chains](/blog/move-usdt-usdc-between-chains); for bitcoin, see [how to swap BTC to ETH or SOL](/blog/swap-bitcoin-to-ethereum-solana).

## Three ways to get from Solana USDC to ETH

There are really only three paths, and they differ in how many steps you take and who holds your money in between:

- **A centralized exchange.** Deposit USDC on Solana, sell it for ETH, withdraw ETH to your wallet. It works, but it needs an account and identity checks, you pay a withdrawal fee, and the exchange holds your funds until you withdraw.
- **Bridge, then swap.** Bridge USDC from Solana to Ethereum (with Circle's CCTP, Wormhole or similar), then swap USDC for ETH on Uniswap. That is two or three transactions, and it has a catch: to swap on Ethereum you need ETH for gas, which is the thing you were trying to get.
- **A cross-chain swap.** Send USDC once, from Solana, and receive native ETH on Ethereum (or Base or Arbitrum). The protocol pays the delivery gas, so you need no ETH on the other side. This is what the rest of this guide covers.

## What 1,000 USDC on Solana gets you in ETH

We asked the live router for every route at the same moment on 2026-10-28 and measured the cost as $1,000 in minus the ETH out, valued at the CoinGecko price that same minute ($2,330.75). The cost includes everything: the 0.15% Shieldz fee, each protocol's own fees, and the gas to deliver the ETH to you.

<figure style="margin:28px 0">
  <a href="/blog/charts/usdc-sol-to-eth-routes.svg"><img src="/blog/charts/usdc-sol-to-eth-routes.svg" alt="Cost of swapping 1,000 USDC on Solana to ETH, all fees included, measured 2026-10-28: Chainflip to Ethereum 2.53 dollars for 0.4280 ETH, Chainflip to Arbitrum 3.79 dollars, NEAR Intents to Ethereum 4.41 dollars, NEAR Intents to Arbitrum 4.96 dollars, NEAR Intents to Base 5.05 dollars." width="860" height="490" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">1,000 USDC on Solana to ETH, every route at the same moment. Cheapest was Chainflip to Ethereum mainnet at $2.53 all-in (0.25%).</figcaption>
</figure>

| Route | ETH received | All-in cost | Quoted settle time |
|---|---|---|---|
| Chainflip → Ethereum | 0.4280 ETH | $2.53 | ~3 min |
| Chainflip → Arbitrum | 0.4274 ETH | $3.79 | ~3 min |
| NEAR Intents → Ethereum | 0.4272 ETH | $4.41 | ~27 s |
| NEAR Intents → Arbitrum | 0.4269 ETH | $4.96 | ~21 s |
| NEAR Intents → Base | 0.4269 ETH | $5.05 | ~24 s |

Two things stand out. First, **the gap between routes is small but real**: about $1.90 on $1,000 between the best and the next route to the same chain. Second, **an L2 was not cheaper**. Delivery gas on Ethereum mainnet was only about 11 cents on the Chainflip route, so landing on Base or Arbitrum saved nothing, and pricing into mainnet ETH was simply better at that moment. If you want the ETH on Ethereum anyway, receive it there directly rather than landing on an L2 and bridging again.

Relay, the third protocol Shieldz Swap asks, returned no route for Solana USDC at the time of measurement, so every route above comes from Chainflip or NEAR Intents.

## Which route wins depends on the size

The two protocols charge in different shapes, so the winner flips with the amount:

- **Chainflip** charges a 0.1% network fee with a **$0.50 minimum**, plus the 0.15% Shieldz broker fee and small deposit and delivery fees. The floor hurts small swaps.
- **NEAR Intents** adds a **0.20% fee of its own** on top of the 0.15% Shieldz fee, with a tiny delivery fee. No floor, so it is cheaper on small swaps and pricier on large ones, but it settles in under 30 seconds.

<figure style="margin:28px 0">
  <a href="/blog/charts/usdc-sol-to-eth-by-size.svg"><img src="/blog/charts/usdc-sol-to-eth-by-size.svg" alt="All-in cost of swapping USDC on Solana to ETH on Ethereum by size, measured 2026-10-28: at 100 dollars NEAR Intents 0.51 percent and Chainflip 0.80 percent; at 1,000 dollars NEAR Intents 0.44 percent and Chainflip 0.25 percent; at 10,000 dollars NEAR Intents 0.50 percent and Chainflip 0.24 percent." width="860" height="496" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">NEAR Intents wins at $100. From $1,000 up, Chainflip is cheaper, about $26 cheaper at $10,000, but takes about 3 minutes instead of 30 seconds.</figcaption>
</figure>

At $10,000, Chainflip returned 4.2802 ETH against 4.2692 ETH on NEAR Intents, a difference of 0.0111 ETH (about $26). At $100, NEAR Intents returned 0.042684 ETH against 0.042559 ETH, about 30 cents better.

You don't have to work this out yourself. The router ranks routes on what you receive after every fee, minus 0.05% for each minute a route takes to settle, so a slightly cheaper route that takes several minutes longer does not automatically win. You can still pick any route it shows you. The full fee picture across wallets and swap apps is in [crypto swap fees compared](/blog/crypto-swap-fees-compared).

## How to swap USDC on Solana to ETH, step by step

<figure style="margin:28px 0">
  <a href="/blog/img/swap-usdc-sol-to-eth.png"><img src="/blog/img/swap-usdc-sol-to-eth.png" alt="Shieldz Swap with 1,000 USDC on Solana in the You pay field and ETH on Ethereum in the You receive field, a box for the Ethereum address to receive at, and buttons to connect a Solana wallet or pay by QR code" width="1000" height="1255" loading="lazy" style="width:100%;max-width:520px;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The swap card shows a live market estimate as you type. The exact routes and their fees load once you connect a Solana wallet, or choose Pay by QR code and give a refund address.</figcaption>
</figure>

1. **Open the swap.** Go to [swap.shieldz.cash](https://swap.shieldz.cash) (or the [USDC to ETH page](https://swap.shieldz.cash/swap/usdc-to-eth)). Set **You pay** to USDC on Solana and **You receive** to ETH on Ethereum, Base or Arbitrum.
2. **Enter the amount.** The estimate updates as you type. There is no account and no KYC.
3. **Paste your Ethereum address.** This is where the ETH lands. Any EVM wallet works (MetaMask, Rabby, a Ledger account). Paste it, don't type it, and check the first and last characters: a wrong address can't be refunded.
4. **Connect your Solana wallet, or pay by QR.** Phantom, Solflare, Backpack and Ledger all work. Prefer to send from an exchange or another wallet? Choose **Pay by QR code**, give a Solana refund address, and send the exact amount to the deposit address shown.
5. **Compare routes and sign.** Pick the route (the router preselects the best one) and approve the USDC transfer in your wallet. You need a little SOL for the Solana network fee, which is a fraction of a cent.
6. **Wait for it to land.** NEAR Intents routes usually land in under 30 seconds and Chainflip routes in about three minutes. Activity shows the live status. If a swap can't complete, the protocol refunds the USDC to your Solana address.

You never need ETH for gas on the receiving side, and nothing gets wrapped: what arrives is native ETH. Shieldz never holds the coins. You send to the protocol's deposit address, and the protocol pays out to you. The trade-offs of that model are covered openly in [the pay-any-coin trust trade-off](/blog/pay-any-coin-trust-tradeoff), and you can sign the whole thing from a hardware wallet as described in [how to swap crypto with a hardware wallet](/blog/swap-crypto-with-hardware-wallet).

## Swapping SOL to ETH instead

The same swap works from native SOL. At the same moment, 5 SOL (about $505) quoted **0.2163 ETH** through Chainflip and **0.2157 ETH** through NEAR Intents, both delivered as native ETH on Ethereum. The steps are identical. Pick SOL instead of USDC in step 1, or use the [SOL to ETH page](https://swap.shieldz.cash/swap/sol-to-eth). Keep enough SOL behind to pay the network fee on future transactions. For SOL to ETH and ETH to SOL at sizes up to $50,000, with every route compared, see [how to swap ETH to SOL and back](/blog/swap-eth-to-sol).

## Things to watch

- **Quotes refresh.** Prices move, so the swap card refreshes its quote every 15 seconds. The numbers above are a snapshot; check the live quote before you sign.
- **Slippage is automatic.** The router sets a minimum you will receive on every route. If the market moves past it, the swap is refunded instead of filling at a worse price (Chainflip keeps retrying for about 15 minutes first).
- **Pick the right chain to receive on.** ETH on Base or Arbitrum is not ETH on Ethereum. If an app or exchange expects mainnet ETH, receive on Ethereum.
- **Native ETH, not WETH.** Both routes here deliver native ETH. If you specifically need WETH or USDC on Ethereum, choose that as the destination instead. USDC on Solana to USDC on Ethereum quoted $2.68 (Chainflip) and $3.30 (NEAR Intents) all-in on $1,000 at the same time.
- **Large amounts.** Above $500,000 the Shieldz fee drops to 0.05%. See [how large swaps are priced](/blog/large-crypto-swaps).

## FAQ

**Can I send USDC from Solana directly to an Ethereum address?**
No. USDC on Solana is an SPL token on the Solana chain, and an Ethereum address can't receive it. Use a cross-chain swap: send USDC from your Solana wallet and receive ETH (or USDC) at your Ethereum address.

**How much does it cost to swap USDC on Solana to ETH?**
In our 2026-10-28 measurement, 1,000 USDC cost $2.53 to $5.05 all-in depending on the route, or 0.25% to 0.51%. That includes the 0.15% Shieldz fee, protocol fees and delivery gas, and excludes the Solana network fee your wallet pays to send, which is a fraction of a cent.

**How long does a USDC Solana to ETH swap take?**
The protocols quoted about 20 to 30 seconds for NEAR Intents routes and about three minutes for Chainflip routes, from the deposit to ETH arriving.

**Do I need ETH for gas to receive?**
No. The protocol delivers native ETH to your address and pays the delivery gas out of the swap. You only need a little SOL to send the USDC.

**Is it cheaper to receive ETH on Base or Arbitrum?**
Not in our measurement. Chainflip into Ethereum mainnet was the cheapest route at $2.53 on $1,000, while the best Arbitrum route was $3.79 and Base $5.05. Receive on the chain where you actually want to use the ETH.

## Try it

Open [swap.shieldz.cash](https://swap.shieldz.cash), set USDC on Solana to ETH, and compare the routes before you connect anything. To see how quickly each step settles, read [how fast is Shieldz Swap](/blog/how-fast-is-shieldz-swap), and for the wider market, [81 cross-chain swap apps compared](/blog/81-cross-chain-swap-apps-compared).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to swap USDC on Solana to ETH",
  "description": "Swap USDC on Solana to native ETH on Ethereum, Base or Arbitrum in one non-custodial cross-chain swap, with no bridge and no ETH needed for gas.",
  "totalTime": "PT5M",
  "step": [
    { "@type": "HowToStep", "name": "Open the swap", "text": "Go to swap.shieldz.cash and set You pay to USDC on Solana and You receive to ETH on Ethereum, Base or Arbitrum." },
    { "@type": "HowToStep", "name": "Enter the amount", "text": "Type the amount of USDC. The estimate updates as you type. No account or KYC is needed." },
    { "@type": "HowToStep", "name": "Paste your Ethereum address", "text": "Paste the EVM address where the ETH should arrive and check the first and last characters." },
    { "@type": "HowToStep", "name": "Connect a Solana wallet or pay by QR", "text": "Connect Phantom, Solflare, Backpack or Ledger, or choose Pay by QR code, give a refund address and send to the deposit address." },
    { "@type": "HowToStep", "name": "Compare routes and sign", "text": "Pick a route (the best one is preselected) and approve the USDC transfer. You need a little SOL for the Solana network fee." },
    { "@type": "HowToStep", "name": "Wait for it to land", "text": "NEAR Intents routes land in under 30 seconds and Chainflip in about three minutes. A swap that cannot complete is refunded to your Solana address." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I send USDC from Solana directly to an Ethereum address?", "acceptedAnswer": { "@type": "Answer", "text": "No. USDC on Solana is an SPL token on the Solana chain, and an Ethereum address can't receive it. Use a cross-chain swap: send USDC from your Solana wallet and receive ETH (or USDC) at your Ethereum address." } },
    { "@type": "Question", "name": "How much does it cost to swap USDC on Solana to ETH?", "acceptedAnswer": { "@type": "Answer", "text": "In a 2026-10-28 measurement, 1,000 USDC cost $2.53 to $5.05 all-in depending on the route, or 0.25% to 0.51%, including the 0.15% Shieldz fee, protocol fees and delivery gas. The Solana network fee to send is a fraction of a cent on top." } },
    { "@type": "Question", "name": "How long does a USDC Solana to ETH swap take?", "acceptedAnswer": { "@type": "Answer", "text": "The protocols quoted about 20 to 30 seconds for NEAR Intents routes and about three minutes for Chainflip routes, from the deposit to ETH arriving." } },
    { "@type": "Question", "name": "Do I need ETH for gas to receive?", "acceptedAnswer": { "@type": "Answer", "text": "No. The protocol delivers native ETH to your address and pays the delivery gas out of the swap. You only need a little SOL to send the USDC." } },
    { "@type": "Question", "name": "Is it cheaper to receive ETH on Base or Arbitrum?", "acceptedAnswer": { "@type": "Answer", "text": "Not in our measurement. Chainflip into Ethereum mainnet was the cheapest route at $2.53 on $1,000, while the best Arbitrum route was $3.79 and Base $5.05." } }
  ]
}
</script>
