---
title: "How to Swap BNB to ETH (and ETH to BNB) Without an Exchange: Live Quotes"
description: "Swap BNB on BNB Chain for real ETH on Ethereum, or back, from your own wallet with no exchange account. Live quotes from $59 to $47,000, which route wins at each size, and the Binance-Peg ETH trap."
pubDate: 2026-11-14
tags: ["swap bnb to eth", "bnb to eth", "eth to bnb", "bnb chain to ethereum", "bsc to eth", "cross-chain crypto swap", "non-custodial"]
eyebrow: "Guide"
swapBanner: true
---

**Yes, you can swap BNB for ETH directly.** You send BNB from your wallet on BNB Chain and receive native ETH at your Ethereum address, in one swap and with no exchange account. On [Shieldz Swap](https://swap.shieldz.cash/swap/bnb-to-eth) it costs about **0.26% to 0.45% all-in** between $1,000 and $47,000 and takes between a few seconds and about two minutes, depending on which route wins. ETH to BNB works the same way in reverse.

Below are live quotes for both directions at four sizes, which route was cheapest at each, and one thing that catches many people out: the "ETH" you get from a swap *on* BNB Chain is not ETH on Ethereum. Every number comes from the Shieldz router on 14 November 2026, with BNB at about $586 and ETH at about $1,821. A note on who is writing: we build Shieldz Swap, and the quotes include the sizes where our pick wasn't the one paying out the most.

## The short answer

- **Cost:** 0.26% to 0.45% from 1.6 to 80 BNB on the best route, with every fee included. On $59 it was 0.45%, and on ETH to BNB 0.39% to 0.68%.
- **Time:** about 40 seconds through NEAR Intents, about 2 minutes through Chainflip, a few seconds through Relay.
- **What you need:** BNB on BNB Chain (the network often labeled BSC or BEP-20), a few cents of BNB for gas, and an Ethereum address. There is no account and no KYC.
- **Minimum:** Chainflip needs at least 0.02 BNB. The other routes quoted as low as 0.1 BNB (about $59).

## BNB to ETH: live quotes

Shieldz asks every route that can fill the swap at the same moment. For BNB on BNB Chain to ETH on Ethereum, three answered: NEAR Intents, Chainflip and Relay.

| You send | NEAR Intents | Chainflip | Relay | Cost of best |
|---|---|---|---|---|
| 0.1 BNB ($59) | **0.03202 ETH** | 0.03192 | 0.03193 | 0.45% |
| 1.6 BNB ($937) | 0.51284 | **0.51330** | 0.51175 | 0.26% |
| 16 BNB ($9,372) | **5.12813** | 5.12259 | 5.11778 | 0.35% |
| 80 BNB ($46,874) | 25.54704 | **25.61537** | 25.61407 | 0.45% |

No single route won everywhere. NEAR Intents was best at the small and the $10,000 size, and Chainflip at $1,000 and $47,000. Relay was never the cheapest, but it is by far the fastest, quoting about 3 seconds against roughly 40 for NEAR Intents and 2 minutes for Chainflip.

At 80 BNB, Chainflip paid out 0.0013 ETH (about $2.40) more than Relay, but takes over two minutes longer. The router discounts each route slightly for every minute it takes to settle, so it picked Relay there. You see both quotes on the swap screen and can pick Chainflip yourself.

<figure style="margin:28px 0">
  <a href="/blog/charts/bnb-eth-route-cost.svg"><img src="/blog/charts/bnb-eth-route-cost.svg" alt="All-in cost of swapping BNB to ETH and ETH to BNB by route, live quotes 14 November 2026. BNB to ETH: 0.1 BNB best NEAR Intents 0.45%; 1.6 BNB best Chainflip 0.26%; 16 BNB best NEAR Intents 0.35%; 80 BNB best Chainflip 0.45%. ETH to BNB: 0.05 ETH best NEAR Intents 0.50%; 0.53 ETH best Chainflip 0.39%; 5.3 ETH best Chainflip 0.39%; 26 ETH best NEAR Intents 0.68%, Chainflip had no liquidity." width="860" height="606" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Live quotes, 14 November 2026. The cheapest route changes with size, which is why it pays to ask all of them.</figcaption>
</figure>

## ETH to BNB: live quotes

| You send | NEAR Intents | Chainflip | Relay | Cost of best |
|---|---|---|---|---|
| 0.05 ETH ($91) | **0.15468 BNB** | 0.15408 | 0.15304 | 0.50% |
| 0.53 ETH ($965) | 1.64005 | **1.64135** | 1.63217 | 0.39% |
| 5.3 ETH ($9,652) | 16.39483 | **16.41415** | 16.33047 | 0.39% |
| 26 ETH ($47,348) | **80.28266** | no liquidity | 80.11967 | 0.68% |

Going this way is slightly more expensive at every size, and at 26 ETH Chainflip had no BNB liquidity to fill it. At small sizes Relay costs more: 1.40% on $91, against 0.50% for NEAR Intents.

## BNB to ETH on Base or Arbitrum, or to USDT

If you don't need ETH on Ethereum mainnet specifically, 1.6 BNB bought **0.51290 ETH on Arbitrum** (NEAR Intents, 0.34%) and **0.51259 ETH on Base** (0.40%). That is ETH you can use on those networks with much cheaper gas afterwards.

If you were really after dollars, 1.6 BNB bought **936.46 USDT on Ethereum** through Chainflip, which is just 0.14% all-in, or 935.50 USDT on BNB Chain through NEAR Intents (0.24%). Exchanges sometimes call these "USDT20" (ERC-20) and "USDT BEP-20".

## The Binance-Peg ETH trap

If you open a DEX on BNB Chain, such as PancakeSwap, and swap BNB for "ETH", you get **Binance-Peg ETH**: a BEP-20 token on BNB Chain that Binance issues and backs with ETH it holds. It's worth about the same, but it is not ETH on Ethereum. You can't send it to an Ethereum address, you can't use it in Ethereum DeFi, and an Ethereum wallet won't show it.

To end up with real ETH on Ethereum, you need a swap that changes chain as well as token: a cross-chain swap. That is what the routes above do. We explain the difference between a DEX, which changes the token, and a bridge, which changes the chain, in [bridge vs gateway vs DEX](/blog/bridge-vs-gateway-vs-dex).

Two more naming traps:

- **BEP-2 is gone.** The old BNB Beacon Chain (BEP-2 addresses starting with `bnb1`) was retired in 2024. BNB today lives on BNB Smart Chain, which uses the same `0x...` addresses as Ethereum.
- **Same address, different chain.** Your MetaMask address is identical on BNB Chain and Ethereum. That is convenient, but it also means a wallet will happily let you send to the right address on the wrong network. Check which network the swap screen says it will pay out on.

## How to swap BNB to ETH, step by step

1. **Open [swap.shieldz.cash with BNB → ETH](https://swap.shieldz.cash/swap/bnb-to-eth)**, or pick BNB on BNB Chain as *You pay* and ETH on Ethereum as *You get*.
2. **Enter the amount.** NEAR Intents, Chainflip and Relay answer within a few seconds. Each quote shows what you receive, how long it takes and the fee. You don't need to connect a wallet to see them.
3. **Set the Ethereum address** the ETH should go to. It can be the same `0x...` address you send from.
4. **Connect your wallet and confirm.** MetaMask, Rabby, Trust Wallet and other EVM wallets work, and so do Ledger, Trezor and Keystone. You sign one BNB transfer on BNB Chain, which costs a few cents of BNB in gas.
5. **Follow it in Activity** until the ETH lands. If a swap can't complete, the route refunds the BNB to the address you sent from.

For the other direction, start at [ETH → BNB](https://swap.shieldz.cash/swap/eth-to-bnb). Sending ETH on Ethereum costs Ethereum gas, which your wallet shows before you sign.

## What it costs, and what isn't included

The quoted amount already includes everything between your deposit and your payout: the flat 0.15% Shieldz fee, the route's own fee, the pool spread, and the gas the route spends paying you on the other chain. What isn't included is the gas for **your own** deposit transfer. That's a few cents from BNB Chain, and more from Ethereum, depending on how busy the network is.

Prices move while you decide, so the swap screen refreshes the quotes about every 15 seconds. The number you sign against is the one on screen at that moment.

## Why not just use an exchange?

You can: deposit BNB on an exchange, sell it for ETH, and withdraw ETH. That means an account, usually identity verification, a withdrawal fee and waiting for the exchange to process the withdrawal. It also means the exchange holds your coins in between and can hold a withdrawal for review. A cross-chain swap goes from your wallet to the route and from the route to your wallet, and nobody holds a balance for you along the way. For the bigger picture, see our [cross-chain swap guide](/blog/cross-chain-crypto-swap) and the [swap fee comparison](/blog/crypto-swap-fees-compared).

## FAQ

**Can I swap BNB for ETH directly?**
Yes. A cross-chain swap takes BNB on BNB Chain and pays out native ETH on Ethereum in one step, with no exchange account. On 14 November 2026 the best route cost 0.26% to 0.45% all-in between $1,000 and $47,000.

**Where can I swap BNB for ETH?**
On an exchange like Binance (account and KYC required), on a BNB Chain DEX like PancakeSwap (which gives you Binance-Peg ETH on BNB Chain, not ETH on Ethereum), or with a cross-chain swap app such as [Shieldz Swap](https://swap.shieldz.cash/swap/bnb-to-eth), which compares NEAR Intents, Chainflip and Relay and pays out native ETH to your own wallet.

**How long does BNB to ETH take?**
Relay quoted about 3 seconds, NEAR Intents about 40 seconds and Chainflip about 2 minutes, after your BNB deposit is seen on BNB Chain.

**Is Binance-Peg ETH the same as ETH?**
No. Binance-Peg ETH is a BEP-20 token on BNB Chain backed by ETH that Binance holds. It tracks ETH's price, but it lives on BNB Chain and can't be sent to an Ethereum address. To get ETH on Ethereum, use a cross-chain swap.

**What is the minimum to swap BNB to ETH?**
Chainflip's minimum is 0.02 BNB. NEAR Intents and Relay quoted 0.1 BNB (about $59) without a problem, at 0.45% on the best route. The smaller the swap, the more the fixed part of the cost, mostly payout gas, weighs in percentage terms.

**Do I need ETH to receive ETH?**
No. You need a little BNB to send the swap. Receiving ETH on Ethereum costs you nothing; the route pays that gas.
