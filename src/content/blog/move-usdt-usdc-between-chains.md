---
title: "How to Move USDT and USDC Between Chains (Tron, Ethereum, Solana, Base)"
description: "USDT on Tron and USDT on Ethereum are different tokens. How to move stablecoins between chains in one non-custodial swap, and what $1,000 actually costs on each route."
pubDate: 2026-10-07
author: "Deniz Yanbollu"
tags: ["move usdt between chains", "usdt trc20 to erc20", "bridge usdc", "stablecoins", "cross-chain crypto swap", "non-custodial"]
eyebrow: "Guide"
swapBanner: true
image: "https://shieldz.cash/blog/og/move-usdt-usdc-between-chains.png"
---

Someone wants to pay you in USDT on Tron, but your wallet holds USDC on Base. An exchange only lets you withdraw USDT on Ethereum, but you want it on Solana where fees are a fraction of a cent. These are the most common problems in crypto, and they all come from one fact that is easy to miss: **a stablecoin on one chain is a different token from the same stablecoin on another chain.**

This guide explains why, what goes wrong when people ignore it, and how to move USDT and USDC between chains in one step with [Shieldz Swap](https://swap.shieldz.cash), without an exchange account and without anyone holding your money in between. It also shows what moving $1,000 really costs on six popular routes, measured today.

## Why USDT on Tron is not USDT on Ethereum

Tether issues USDT separately on each blockchain, and Circle does the same for USDC. Each version is a separate token contract, with its own address format, its own gas coin and its own balance:

| Network | USDT standard | Address looks like | Gas paid in |
|---|---|---|---|
| Tron | TRC-20 | `T…` | TRX |
| Ethereum | ERC-20 | `0x…` | ETH |
| BNB Chain | BEP-20 | `0x…` | BNB |
| Solana | SPL | base58 | SOL |
| Arbitrum, Base, Optimism | ERC-20 | `0x…` | ETH |

They are all worth a dollar, but **a plain transfer can never cross from one network to another.** Sending USDT on Tron to an Ethereum address is not possible at all, and sending ERC-20 USDT to a BNB Chain address (both start with `0x`) "works" in the sense that the transaction goes through, but the coins land on a chain the recipient was not watching, and getting them back depends entirely on who controls that address.

To move a stablecoin from one chain to another, you need something that takes it on the first chain and pays out on the second. That is a cross-chain swap.

## How to move a stablecoin between chains

1. Open [swap.shieldz.cash](https://swap.shieldz.cash). In **You pay**, choose the stablecoin and the chain it is on now, for example USDT on Tron.
2. In **You get**, choose the stablecoin and chain you want, for example USDC on Base. It does not have to be the same coin: USDT to USDC is just another route.
3. Enter the amount. Quotes from NEAR Intents, Chainflip and Relay arrive in under a second, each with the amount you will receive and how long it takes.
4. Set the address you receive at on the destination chain, or connect a wallet for that chain and pick one.
5. Review the minimum you will receive and the fees, then **send from your own wallet**. TronLink, MetaMask, Phantom, Solflare, Backpack, Rabby, Ledger, Trezor and Keystone all work.
6. Follow the swap in Activity until it lands. If it cannot complete, the protocol refunds the address you paid from.

There is no account and no KYC, and Shieldz never holds the coins: you send to the protocol's deposit address or contract, and the protocol pays out to you. Moves between EVM chains on Relay often settle in seconds; moves out of Tron take a minute or two.

## What it actually costs: $1,000 on six routes

Here is what each route kept from $1,000, quoted on the live router today. That cost includes everything taken out of the amount you receive: the 0.15% Shieldz fee ($1.50), the protocol's own fees and the gas the protocol pays to deliver to you.

<figure style="margin:28px 0">
  <a href="/blog/charts/swap-stablecoin-move-cost.svg"><img src="/blog/charts/swap-stablecoin-move-cost.svg" alt="Cost of moving 1,000 dollars of stablecoins between chains, all fees included: USDC Ethereum to Arbitrum 1.84 dollars via Relay in about 1 second, USDC Solana to Base 3.04 dollars, USDT Tron to USDC Base 3.13 dollars, USDC Arbitrum to Solana 3.37 dollars, USDT Tron to USDC Solana 3.48 dollars, USDT Ethereum to Tron 4.87 dollars, all via NEAR Intents." width="860" height="520" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Measured 2026-10-07. Not included: the gas your own wallet pays to send, which is cents on most chains and a few dollars on Ethereum.</figcaption>
</figure>

Three things stand out:

- **The cheapest moves are between EVM chains.** USDC from Ethereum to Arbitrum cost $1.84 through Relay, almost all of it the Shieldz fee, and settled in about a second. Chainflip and NEAR Intents also quoted it, at $2.96 and $3.11; the router showed all three.
- **Tron routes cost about $3 to $5.** Tron USDT is only routed through NEAR Intents today, so those quotes have no competitor. They are still far cheaper than the common exchange route of depositing, converting and paying a withdrawal fee.
- **Solana routes are quick.** USDC from Arbitrum to Solana, and from Solana to Base, each cost a little over $3 and took about 22 seconds.

Prices move, so treat these as a snapshot. The [USDT](https://swap.shieldz.cash/usdt) and [USDC](https://swap.shieldz.cash/usdc) pages on Shieldz show the live cost of moving $1,000 to every network they support, 20 networks for USDT and 25 for USDC, updated while the page is open.

## Things that trip people up

**You need gas on the chain you send from.** Sending USDT on Tron costs energy and bandwidth, paid in TRX, so keep some TRX in TronLink. Sending from Ethereum, Arbitrum or Base needs ETH; from Solana, a little SOL. A stablecoin balance with no gas coin next to it cannot move. You do not need any gas on the destination chain: the protocol delivers to you.

**Minimums exist.** Each protocol sets a minimum per route, and they change with network conditions. When we measured, NEAR Intents had a temporary $1,000 minimum on USDT from BNB Chain to Tron. The swap form tells you the minimum instead of letting you send too little.

**Bridged versions are not always the same token.** Some chains carry USDT0, Tether's cross-chain version of USDT, instead of or next to the classic token. The swap form names the exact token on each chain, so check that the one you receive is the one your recipient expects.

## Why not just use an exchange?

An exchange can move stablecoins between chains too: deposit on one network, withdraw on another. It works, but it means an account, identity checks, a withdrawal fee that is usually flat regardless of size, and a period in which the exchange holds your money. If the exchange pauses withdrawals on a network, your funds wait with it. A cross-chain swap does the same job from your own wallet in one transaction, and we have written more about [why custody is the real risk](/blog/are-crypto-payment-gateways-custodial).

If you run a business and want to be paid in one stablecoin on one chain no matter what your customers hold, that is what the [Shieldz payment gateway](/blog/how-to-accept-usdt-payments) does at checkout, with no platform fee.

## FAQ

**Can I send USDT from Tron (TRC-20) to an Ethereum (ERC-20) address?**
Not with a normal transfer. TRC-20 and ERC-20 USDT are different tokens on different chains. Use a cross-chain swap: send TRC-20 USDT from your Tron wallet, receive ERC-20 USDT at your Ethereum address.

**How much does it cost to move $1,000 of USDT or USDC between chains?**
On Shieldz Swap, between $1.84 and $4.87 on the six routes we measured on 2026-10-07, all fees included except the gas your wallet pays to send. The 0.15% Shieldz fee is $1.50 of that.

**How long does it take?**
From about one second for USDC between EVM chains on Relay, to under two minutes from Tron. Every quote shows its expected time before you send.

**Can I turn USDT into USDC on another chain in the same step?**
Yes. USDT on Tron to USDC on Base, or USDC on Solana to USDT on Ethereum, is one swap. You do not need to convert first.

## Try it

Open [swap.shieldz.cash](https://swap.shieldz.cash), pick the stablecoin you have and the one you want, and see every route before you send. For the background on how routes are chosen, read the [Shieldz Swap launch guide](/blog/cross-chain-crypto-swap).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to move USDT or USDC between chains",
  "description": "Move a stablecoin from one blockchain to another, for example USDT on Tron to USDC on Base, in one non-custodial cross-chain swap.",
  "totalTime": "PT3M",
  "step": [
    { "@type": "HowToStep", "name": "Choose what you pay", "text": "On swap.shieldz.cash, choose the stablecoin and the chain it is on now." },
    { "@type": "HowToStep", "name": "Choose what you get", "text": "Choose the stablecoin and chain you want. It can be a different stablecoin." },
    { "@type": "HowToStep", "name": "Compare routes", "text": "Enter the amount and compare the NEAR Intents, Chainflip and Relay quotes, each with the amount received and time to settle." },
    { "@type": "HowToStep", "name": "Set the destination", "text": "Enter or pick the address you receive at on the destination chain." },
    { "@type": "HowToStep", "name": "Send from your wallet", "text": "Review the minimum received and fees, then send from your own wallet. Keep the source chain's gas coin for the network fee." },
    { "@type": "HowToStep", "name": "Track it", "text": "Follow the swap in Activity until it lands. A swap that cannot complete is refunded to the address you paid from." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I send USDT from Tron (TRC-20) to an Ethereum (ERC-20) address?", "acceptedAnswer": { "@type": "Answer", "text": "Not with a normal transfer. TRC-20 and ERC-20 USDT are different tokens on different chains. Use a cross-chain swap: send TRC-20 USDT from your Tron wallet, receive ERC-20 USDT at your Ethereum address." } },
    { "@type": "Question", "name": "How much does it cost to move $1,000 of USDT or USDC between chains?", "acceptedAnswer": { "@type": "Answer", "text": "On Shieldz Swap, between $1.84 and $4.87 on the six routes measured on 2026-10-07, all fees included except the gas your wallet pays to send. The 0.15% Shieldz fee is $1.50 of that." } },
    { "@type": "Question", "name": "How long does it take?", "acceptedAnswer": { "@type": "Answer", "text": "From about one second for USDC between EVM chains on Relay, to under two minutes from Tron. Every quote shows its expected time before you send." } },
    { "@type": "Question", "name": "Can I turn USDT into USDC on another chain in the same step?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. USDT on Tron to USDC on Base, or USDC on Solana to USDT on Ethereum, is one swap. You do not need to convert first." } }
  ]
}
</script>
