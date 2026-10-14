---
title: "How to Swap WBTC to BTC: Steps, Costs and Real Quotes (2026)"
description: "Turn Wrapped Bitcoin on Ethereum into native BTC in your own Bitcoin wallet, with no exchange account. Step by step, plus live quotes from 0.01 to 10 WBTC showing what it costs and which route delivers more."
pubDate: 2026-10-14
author: "Deniz Yanbollu"
tags: ["wbtc to btc", "unwrap wbtc", "wrapped bitcoin", "cbbtc to btc", "cross-chain crypto swap", "chainflip", "near intents"]
eyebrow: "Guide"
swapBanner: true
---

WBTC is Bitcoin's stand-in on Ethereum: an ERC-20 token backed one-to-one by BTC held by a custodian. It's useful inside DeFi. But it isn't bitcoin, and sooner or later many holders want the real thing back, in a Bitcoin wallet they control.

You can't do that by "unwrapping" it yourself. Only approved WBTC merchants can redeem tokens with the custodian, and an individual holder is not one of them. That leaves two routes: sell WBTC on an exchange and withdraw BTC, or **swap it cross-chain**, sending WBTC from your Ethereum wallet and receiving native BTC at your Bitcoin address. This guide covers the second route on [Shieldz Swap](https://swap.shieldz.cash), with live quotes from 14 October 2026 showing what it actually costs.

A note on who is writing: we build Shieldz Swap. The numbers below are real quotes from the live router, and we include the sizes where it can't help.

## The short answer

- **Cost:** about **0.47% all-in** from 0.1 to 7 WBTC on the best route, with every fee included. On 1 WBTC that is about 0.0048 BTC, roughly $400 at the day's price.
- **Time:** about 8 minutes up to 1 WBTC, and up to about 13 minutes for 5 to 7 WBTC.
- **What you need:** WBTC on Ethereum, a little ETH for gas, and a Bitcoin address. There's no account and no KYC, and you don't approve the token. You make one ordinary transfer.
- **Limit:** at 10 WBTC in one go, no route had liquidity on the day. Split larger amounts.

## Step by step

1. **Open the pair.** Go to [swap.shieldz.cash with WBTC → BTC pre-filled](https://swap.shieldz.cash/swap?from=ETH.WBTC-0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599&to=BTC.BTC&amount=0.1), or pick WBTC on Ethereum as *You pay* and Bitcoin as *You receive*.
2. **Enter the amount.** Quotes from Chainflip and NEAR Intents arrive within a second. Each one shows how much BTC you receive, the time it takes, and the service fee. You don't need to connect a wallet to see them.
3. **Set the Bitcoin address.** Paste the address you want the BTC sent to. It must be a Bitcoin mainnet address (it usually starts with `bc1`), *not* your Ethereum address. If you use a hardware wallet, take a fresh receive address from its app and check it on the device's screen.
4. **Connect your Ethereum wallet and confirm.** MetaMask, Rabby, Coinbase Wallet, Ledger, Trezor and Keystone all work. Your wallet asks you to sign a single WBTC transfer to the route's deposit address, plus the Ethereum gas for it. There's no separate approval step.
5. **Wait for the BTC.** The swap screen tracks it through deposit, swap and Bitcoin payout. When it's done, the BTC is in your wallet and nobody else holds it.

Prefer not to connect a wallet at all? The swap screen can also show the deposit address as a QR code, so you can send the WBTC from any wallet, or straight from an exchange withdrawal.

## What it costs: live quotes

We asked the live router for WBTC → BTC quotes at seven sizes. The cost is the share of your WBTC that doesn't arrive as BTC. It includes our fee, the protocol's fee, the pool's spread and the Bitcoin network fee for the payout. Ethereum gas for your deposit transfer is extra, and your wallet shows it.

<figure style="margin:28px 0">
  <a href="/blog/charts/wbtc-to-btc-cost.svg"><img src="/blog/charts/wbtc-to-btc-cost.svg" alt="All-in cost of swapping WBTC to BTC. 0.01 WBTC: NEAR Intents 0.61 percent, no Chainflip quote. 0.1: Chainflip 0.49, NEAR 0.45. 0.5: 0.47 and 0.72. 1: 0.48 and 0.72. 5: 0.47 and 0.72. 7: 0.50 and 1.20. 10 WBTC: no route had liquidity." width="860" height="560" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Live quotes, 14 October 2026. Green marks the route that delivers more BTC at each size.</figcaption>
</figure>

| You send | Best route | You receive | All-in cost | Time |
|---|---|---|---|---|
| 0.01 WBTC | NEAR Intents | 0.00993897 BTC | 0.61% (~$5) | ~8 min |
| 0.1 WBTC | NEAR Intents | 0.09955108 BTC | 0.45% (~$37) | ~8 min |
| 0.5 WBTC | Chainflip | 0.49765075 BTC | 0.47% (~$196) | ~8 min |
| 1 WBTC | Chainflip | 0.99520598 BTC | 0.48% (~$399) | ~8 min |
| 5 WBTC | Chainflip | 4.97654288 BTC | 0.47% (~$1,954) | ~12 min |
| 7 WBTC | Chainflip | 6.96507274 BTC | 0.50% (~$2,909) | ~13 min |
| 10 WBTC | none | no route had liquidity | | |

Dollar figures use BTC at $83,301, the router's price at the time.

What the numbers say:

- **It's roughly flat at about 0.47%.** From 0.1 to 7 WBTC the best route costs between 0.45% and 0.50%. Of that, 0.15% is the Shieldz service fee on these routes (on Chainflip: 0.10% to us and 0.05% to the broker operator). The rest is the protocol's own fee, the pool's spread and the Bitcoin payout fee.
- **Small amounts pay a little more.** At 0.01 WBTC the fixed Bitcoin payout fee is a bigger share of the total, and Chainflip didn't quote at all under 0.1 WBTC.
- **The route matters more than the fee.** From 0.5 WBTC up, Chainflip delivered more BTC than NEAR Intents. At 7 WBTC, NEAR Intents carried our [lower 0.05% fee for swaps of $500,000 or more](/blog/large-crypto-swaps) and Chainflip still delivered 0.049 BTC more. Shieldz shows both and picks on what you receive, so you don't have to work this out yourself.
- **There's a ceiling.** At 10 WBTC (about $830,000), neither protocol had liquidity. Two or three swaps of 3 to 5 WBTC each did fine.

One difference between the two: NEAR Intents quotes a *guaranteed minimum*, and if the price moves past it your WBTC is refunded. Chainflip's figure is an estimate. The swap settles at the pool price when your deposit is processed, within the slippage you set.

## Swap or exchange?

The other common route is to deposit WBTC on a centralized exchange, sell it for BTC and withdraw. That works, and on some exchanges and some days the spread is tight. But it means an account with KYC, the exchange holding your coins while you trade, and a BTC withdrawal fee on top. Large withdrawals can also be delayed by reviews. A cross-chain swap skips all of that: the WBTC leaves your wallet and the BTC lands in your wallet, and you see the full price before you sign.

If you already keep funds on an exchange and trade there anyway, compare the two. If you don't, the swap is usually simpler.

## cbBTC works the same way

Coinbase's cbBTC, on Ethereum or Base, converts to native BTC the same way, through NEAR Intents. On 14 October, 1 cbBTC on Base returned 0.99529721 BTC (0.47%), and 1 cbBTC on Ethereum returned 0.99540770 BTC (0.46%). Choose cbBTC as *You pay* instead of WBTC.

## Going the other way: BTC to WBTC

The reverse works too. Send native BTC from any Bitcoin wallet and receive WBTC at your Ethereum address. On the same day, 1 BTC returned 0.99859687 WBTC through Chainflip, a 0.14% all-in cost. See also [how to swap Bitcoin to Ethereum or Solana](/blog/swap-bitcoin-to-ethereum-solana).

## Common mistakes

- **Pasting an Ethereum address as the destination.** The BTC goes to the Bitcoin address you enter. Check it twice, and on a hardware wallet check it on the device.
- **Sending WBTC from another chain.** The routes take WBTC on Ethereum mainnet. Bridged WBTC on other chains is a different token.
- **No ETH for gas.** The deposit is an Ethereum transaction. Keep some ETH in the same wallet.
- **One giant swap.** Above about 7 WBTC, split it, and send a small test amount first.

## FAQ

**Can I unwrap WBTC to BTC myself?**
Not directly. Only approved WBTC merchants can redeem tokens with the custodian. An individual holder either sells WBTC on an exchange or swaps it cross-chain to native BTC, as described above.

**How much does it cost to swap WBTC to BTC?**
In live quotes on 14 October 2026, about 0.47% all-in on the best route for 0.1 to 7 WBTC, with every fee included. On 1 WBTC that was about 0.0048 BTC. Ethereum gas for your deposit is extra.

**How long does WBTC to BTC take?**
About 8 minutes for up to 1 WBTC, and about 12 to 13 minutes for 5 to 7 WBTC, depending on the route.

**Do I need an account or KYC?**
No. You sign the transfer from your own Ethereum wallet and receive BTC at your own Bitcoin address. Shieldz never holds your funds.

**What is the maximum I can swap?**
It depends on the protocols' liquidity at the time. On 14 October, 7 WBTC quoted in one swap and 10 WBTC did not. Split larger amounts.

## Try it

Open [WBTC → BTC on Shieldz Swap](https://swap.shieldz.cash/swap?from=ETH.WBTC-0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599&to=BTC.BTC&amount=0.1), enter your amount, and see exactly how much BTC you would receive on each route before you connect anything.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to swap WBTC to BTC",
  "description": "Turn Wrapped Bitcoin on Ethereum into native BTC in your own Bitcoin wallet with a cross-chain swap.",
  "supply": [{ "@type": "HowToSupply", "name": "WBTC on Ethereum" }, { "@type": "HowToSupply", "name": "ETH for gas" }, { "@type": "HowToSupply", "name": "A Bitcoin address" }],
  "step": [
    { "@type": "HowToStep", "name": "Open the pair", "text": "Open swap.shieldz.cash and choose WBTC on Ethereum as You pay and Bitcoin as You receive." },
    { "@type": "HowToStep", "name": "Enter the amount", "text": "Enter the amount of WBTC. Quotes from Chainflip and NEAR Intents show the BTC you receive, the time and the service fee." },
    { "@type": "HowToStep", "name": "Set the Bitcoin address", "text": "Paste the Bitcoin mainnet address to receive the BTC, not your Ethereum address." },
    { "@type": "HowToStep", "name": "Confirm in your wallet", "text": "Connect your Ethereum wallet and sign one WBTC transfer to the route's deposit address. No token approval is needed." },
    { "@type": "HowToStep", "name": "Receive BTC", "text": "Track the swap through deposit, swap and Bitcoin payout. The BTC arrives at your address, usually in about 8 minutes." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I unwrap WBTC to BTC myself?", "acceptedAnswer": { "@type": "Answer", "text": "Not directly. Only approved WBTC merchants can redeem tokens with the custodian. An individual holder either sells WBTC on an exchange or swaps it cross-chain to native BTC." } },
    { "@type": "Question", "name": "How much does it cost to swap WBTC to BTC?", "acceptedAnswer": { "@type": "Answer", "text": "In live quotes on 14 October 2026, about 0.47% all-in on the best route for 0.1 to 7 WBTC, with every fee included. On 1 WBTC that was about 0.0048 BTC. Ethereum gas for your deposit is extra." } },
    { "@type": "Question", "name": "How long does WBTC to BTC take?", "acceptedAnswer": { "@type": "Answer", "text": "About 8 minutes for up to 1 WBTC, and about 12 to 13 minutes for 5 to 7 WBTC, depending on the route." } },
    { "@type": "Question", "name": "Do I need an account or KYC?", "acceptedAnswer": { "@type": "Answer", "text": "No. You sign the transfer from your own Ethereum wallet and receive BTC at your own Bitcoin address. Shieldz never holds your funds." } },
    { "@type": "Question", "name": "What is the maximum I can swap?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the protocols' liquidity at the time. On 14 October, 7 WBTC quoted in one swap and 10 WBTC did not. Split larger amounts." } }
  ]
}
</script>
