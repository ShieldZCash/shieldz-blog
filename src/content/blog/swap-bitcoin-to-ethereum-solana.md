---
title: "How to Swap Bitcoin to ETH, SOL or USDC Without an Exchange"
description: "Swap native BTC to ETH, SOL or stablecoins from your own wallet, with no exchange account and no wrapped bitcoin. Real quotes, real settle times, and what each route costs."
pubDate: 2026-10-07
author: "Deniz Yanbollu"
tags: ["swap btc to eth", "btc to sol", "native bitcoin swap", "chainflip", "near intents", "cross-chain crypto swap", "non-custodial"]
eyebrow: "Guide"
swapBanner: true
image: "https://shieldz.cash/blog/og/swap-bitcoin-to-ethereum-solana.png"
---

Bitcoin is the hardest coin to swap without giving it to someone. Bitcoin has no smart contracts in the sense Ethereum does, so for years the only ways to turn BTC into ETH or SOL were to deposit it on an exchange, or to wrap it: hand it to a custodian who issues a token like WBTC on another chain. Both put a third party between you and your money.

That has changed. Cross-chain protocols such as **Chainflip** and **NEAR Intents** now accept native bitcoin, real BTC sent on the Bitcoin network, and pay out native ETH, SOL or stablecoins on the other side. [Shieldz Swap](https://swap.shieldz.cash) asks both at the same moment and shows you every route. This guide explains how that works, what it costs, and what to expect while you wait.

## Native BTC vs wrapped BTC

There are two very different things people call "swapping bitcoin":

- **Wrapped BTC (WBTC, cbBTC and friends)** is a token on Ethereum or another chain, backed by bitcoin a custodian holds. Swapping wrapped BTC to ETH is an ordinary token swap on one chain. It is easy, but your "bitcoin" is an IOU from the custodian.
- **Native BTC** is bitcoin on the Bitcoin network, in your own wallet. Swapping it to ETH means the coin really moves: you send BTC on Bitcoin, and you receive ETH on Ethereum.

Shieldz Swap does both, but this guide is about the second. You send BTC from your own wallet to a deposit address issued by the protocol, the protocol swaps it, and the ETH, SOL or stablecoin lands at the address you chose. Nobody wraps anything, and Shieldz never holds the coins.

## What the routes look like

Here is a real quote from the live router, both protocols asked for the same swap at the same second:

<figure style="margin:28px 0">
  <a href="/blog/charts/swap-btc-routes.svg"><img src="/blog/charts/swap-btc-routes.svg" alt="0.1 BTC to ETH, quoted at the same moment: Chainflip 3.2184 ETH settling in about 7 minutes, NEAR Intents 3.2114 ETH settling in about 13.5 minutes. Chainflip was picked." width="860" height="340" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">0.1 BTC (about $8,380) to ETH, measured 2026-10-07. The two routes differed by about $18, and the better one was also faster.</figcaption>
</figure>

The same 0.1 BTC, quoted into other coins at the same time:

| You get | Best route | You receive | Time to settle |
|---|---|---|---|
| ETH on Ethereum | Chainflip | 3.2184 ETH | about 7 min |
| SOL on Solana | Chainflip | 70.89 SOL | about 7 min |
| USDC on Ethereum | Chainflip | 8,354.90 USDC | about 7 min |
| USDC on Arbitrum | Chainflip | 8,344.68 USDC | about 7 min |
| USDT on Tron | NEAR Intents | 8,339.23 USDT | about 14 min |

On these sizes Chainflip usually wins for bitcoin: it runs its own pools with native BTC, and it tends to be both cheaper and faster. NEAR Intents covers destinations Chainflip does not, such as Tron, and sometimes beats it, which is why the router asks both every time. Relay, the third protocol Shieldz uses, does not accept native BTC.

## Why a bitcoin swap takes minutes, not seconds

A swap from Ethereum to Arbitrum can finish in a second. A swap from Bitcoin takes several minutes, and the reason is Bitcoin itself: a block comes about every ten minutes, and a protocol cannot safely pay you on another chain until it trusts your deposit.

Chainflip shortens this with **boost**: liquidity providers credit your deposit before it has fully confirmed, for a small fee (0.05% on the quotes above). In our 0.1 BTC example the boosted route took about 7 minutes, against about 17 for the same swap without boost. The router weighs the boosted and the regular quote the same way it weighs protocols: by what you receive, discounted slightly for every minute you wait. Every quote shows its expected time before you send.

## How to swap BTC to ETH or SOL, step by step

1. **Open [swap.shieldz.cash](https://swap.shieldz.cash)** and set **You pay** to BTC and **You get** to the coin you want, for example ETH on Ethereum or SOL on Solana.
2. **Enter an amount.** Quotes from Chainflip and NEAR Intents arrive in under a second. Each shows what you receive, the price impact and how long it takes.
3. **Set where you receive.** Paste your Ethereum or Solana address, or connect a wallet for that chain and pick one. You do not need any ETH or SOL there already.
4. **Connect a Bitcoin wallet.** Shieldz can pay BTC from **Ledger, Trezor, Keystone, MetaMask and OKX Wallet**. With a hardware wallet, the amount and deposit address appear on the device's screen; see [how to swap with a hardware wallet](/blog/swap-crypto-with-hardware-wallet).
5. **Review and send.** The review screen shows the minimum you will receive and every fee. Your wallet shows the Bitcoin network fee before you sign.
6. **Wait for it to land.** Activity shows the swap's live status until it lands. If it cannot complete, the protocol refunds the BTC to the address you paid from.

The reverse works the same way. Swapping ETH, SOL or USDC **into** native BTC just needs a Bitcoin address to receive at. When we measured, 1 ETH fetched 0.031010 BTC through Chainflip and 0.030907 BTC through NEAR Intents, both in about eight minutes.

## What it costs

Take the 0.1 BTC to USDC on Ethereum quote, about $8,376 of bitcoin. The quote itemises every fee taken out on the way:

- **The Shieldz service fee:** 0.15%, about $12.56.
- **Chainflip's network fee:** 0.10%, about $8.38. Chainflip charges this on every swap.
- **The boost fee:** 0.05%, about $4.19, for the faster settlement described above.
- **Deposit and payout gas:** under $0.50 together on this quote.

That is about 0.3% in total, and all of it is already taken out of the amount you are shown. The only thing on top is the Bitcoin network fee your wallet pays to send, which depends on how busy the network is.

For comparison, an exchange round trip means a deposit, a trading fee, a spread and a withdrawal fee, and your coins sit in the exchange's wallet in between. Our [swap fee comparison](/blog/crypto-swap-fees-compared) puts the app fees side by side.

## Things to watch

- **Minimums.** Each protocol sets a minimum for bitcoin deposits; very small amounts are not worth the Bitcoin network fee anyway. The form tells you the minimum.
- **Send exactly what the review says.** The deposit address is tied to this swap. Shieldz builds the transaction for you, so the amount is right as long as you do not change it in your wallet.
- **Prices move while bitcoin confirms.** The minimum received and your slippage tolerance bound how bad the fill can get; a swap that would land below the minimum is refunded instead.

The full list of risks is in the [risk disclosure](https://swap.shieldz.cash/risks).

## FAQ

**Can I swap Bitcoin to Ethereum without an exchange?**
Yes. On Shieldz Swap you send native BTC from your own wallet to a deposit address issued by Chainflip or NEAR Intents, and receive native ETH at your Ethereum address. There is no account, no KYC and no custodian.

**How long does a BTC to ETH swap take?**
About 7 minutes on Chainflip with boost, and about 13 to 14 minutes on NEAR Intents, in our measurements on 2026-10-07. Bitcoin's block time is the main factor. Every quote shows its expected time.

**Do I get wrapped BTC or real BTC?**
Real BTC when you swap into bitcoin, delivered to a Bitcoin address. When you swap out of bitcoin, you send real BTC on the Bitcoin network. Nothing is wrapped.

**Which wallets can I send BTC from?**
Ledger, Trezor, Keystone, MetaMask and OKX Wallet. You can receive BTC at any Bitcoin address.

## Try it

Open [swap.shieldz.cash](https://swap.shieldz.cash), set BTC to ETH or SOL, and compare the routes before you connect anything. The [Bitcoin page](https://swap.shieldz.cash/chains/bitcoin) lists everything bitcoin can be swapped into. If you want to accept bitcoin as a business, read [how to accept Bitcoin payments](/blog/how-to-accept-bitcoin-payments).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to swap Bitcoin to ETH or SOL without an exchange",
  "description": "Swap native BTC to ETH, SOL or stablecoins from your own wallet with Shieldz Swap, comparing Chainflip and NEAR Intents routes.",
  "totalTime": "PT15M",
  "step": [
    { "@type": "HowToStep", "name": "Pick your coins", "text": "On swap.shieldz.cash, set You pay to BTC and You get to the coin and chain you want." },
    { "@type": "HowToStep", "name": "Compare routes", "text": "Enter an amount. Chainflip and NEAR Intents quotes arrive in under a second, each with the amount received and time to settle." },
    { "@type": "HowToStep", "name": "Set where you receive", "text": "Paste your address on the destination chain, or connect a wallet for it." },
    { "@type": "HowToStep", "name": "Connect a Bitcoin wallet", "text": "Connect Ledger, Trezor, Keystone, MetaMask or OKX Wallet to pay the BTC." },
    { "@type": "HowToStep", "name": "Review and send", "text": "Check the minimum received and fees, then sign the Bitcoin transaction in your wallet." },
    { "@type": "HowToStep", "name": "Wait for it to land", "text": "Follow the swap in Activity. Bitcoin swaps take several minutes; a swap that cannot complete is refunded." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I swap Bitcoin to Ethereum without an exchange?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. On Shieldz Swap you send native BTC from your own wallet to a deposit address issued by Chainflip or NEAR Intents, and receive native ETH at your Ethereum address. There is no account, no KYC and no custodian." } },
    { "@type": "Question", "name": "How long does a BTC to ETH swap take?", "acceptedAnswer": { "@type": "Answer", "text": "About 7 minutes on Chainflip with boost, and about 13 to 14 minutes on NEAR Intents, in measurements on 2026-10-07. Bitcoin's block time is the main factor. Every quote shows its expected time." } },
    { "@type": "Question", "name": "Do I get wrapped BTC or real BTC?", "acceptedAnswer": { "@type": "Answer", "text": "Real BTC when you swap into bitcoin, delivered to a Bitcoin address. When you swap out of bitcoin, you send real BTC on the Bitcoin network. Nothing is wrapped." } },
    { "@type": "Question", "name": "Which wallets can I send BTC from?", "acceptedAnswer": { "@type": "Answer", "text": "Ledger, Trezor, Keystone, MetaMask and OKX Wallet. You can receive BTC at any Bitcoin address." } }
  ]
}
</script>
