---
title: "Large Crypto Swaps: 0.05% From $500,000, Measured at $1 Million"
description: "Shieldz Swap now charges 0.05% on swaps of $500,000 or more. We quoted $100k, $500k and $1M across seven pairs to show what a large swap really costs, which routes still quote at that size, and where liquidity runs out."
pubDate: 2026-10-13
author: "Deniz Yanbollu"
tags: ["large crypto swap", "crypto otc", "whale swap", "cross-chain crypto swap", "crypto swap fees", "near intents", "relay", "chainflip"]
eyebrow: "Data"
swapBanner: true
---

On a $1,000 swap, the difference between a 0.15% fee and a 0.875% fee is about seven dollars. On a $1,000,000 swap it is $7,250. Fees that nobody notices on small trades start to matter a lot at this size, and so does whether there's enough liquidity to fill the order at all.

So from 8 October 2026, [Shieldz Swap](https://swap.shieldz.cash) charges **0.05% instead of 0.15%** on any swap worth $500,000 or more. This post covers how that works and what it does not cover. It also shows what large swaps actually cost today, measured on the live site at $100,000, $500,000 and $1,000,000 across seven pairs on 13 October 2026.

A note on who is writing: we build Shieldz Swap. Every figure below is a real quote from the live router, and we include the pairs where it did badly.

## The fee, in one table

| Swap size | NEAR Intents and Relay routes | Chainflip routes | Built-in wallet swap at 0.875% (MetaMask) |
|---|---|---|---|
| $100,000 | 0.15% · $150 | 0.15% · $150 | $875 |
| $500,000 | **0.05% · $250** | 0.15% · $750 | $4,375 |
| $1,000,000 | **0.05% · $500** | 0.15% · $1,500 | $8,750 |
| $5,000,000 | **0.05% · $2,500** | 0.15% · $7,500 | $43,750 |

<figure style="margin:28px 0">
  <a href="/blog/charts/large-swap-fees.svg"><img src="/blog/charts/large-swap-fees.svg" alt="App fee on a 1,000,000 dollar swap: Base app up to 10,000 dollars, MetaMask 8,750, Phantom 8,500 on select pairs, Rabby 2,500, Shieldz Swap 500." width="860" height="470" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The app's own fee only. Every app also passes on protocol, liquidity and network costs. Wallet fees and their sources are in <a href="/blog/crypto-swap-fees-compared">Crypto Swap Fees Compared</a>.</figcaption>
</figure>

The fine print, all of it:

- **What counts as $500,000.** The router values what you pay in at its own live price, the same way it does for every quote. This matters for stablecoins: on the day we tested, 500,000 USDC was valued at $499,902, *just under* the line, so it paid 0.15%. If you're near the threshold, go slightly over it, and check the service fee line before you sign.
- **Which routes.** The 0.05% applies to routes through NEAR Intents and Relay, where we set the fee on each request. Chainflip's fee is fixed in its broker dashboard, so Chainflip routes stay at 0.15% (0.10% to Shieldz, 0.05% to the broker operator) at every size.
- **Nothing to apply for.** There's no account, no sign-up and no KYC. The lower rate is applied automatically on the quote, and the swap screen shows it as its own line, for example "Service fee 0.05% · $500", before you confirm.
- **Protocol costs are separate.** NEAR Intents charges its own 0.20% platform fee, and every route pays liquidity and network fees. Those go to the protocol, not to us, and they are already reflected in the amount you are quoted to receive. The [terms](https://swap.shieldz.cash/terms) list every fee.

## What a large swap really costs: measured

The app fee is the easy part. At $1M, the bigger questions are whether any route will quote the trade at all and how much the price moves against you. So we asked the live router for quotes on seven pairs at three sizes. The cost shown is what you send minus what you receive, in dollars, with the Shieldz fee and every protocol cost included.

**Stablecoins, which are the cleanest test because a dollar in should be a dollar out:**

| Swap | Size | Best route | You receive | All-in cost |
|---|---|---|---|---|
| USDC Ethereum → USDC Arbitrum | 100,000 | Relay | 99,839.87 USDC | $160 (0.16%) |
| USDC Ethereum → USDC Arbitrum | 500,000 | Relay | 499,199.86 USDC | $800 (0.16%)* |
| USDC Ethereum → USDC Arbitrum | 1,000,000 | Relay | 999,399.86 USDC | **$600 (0.06%)** |
| USDT Ethereum → USDC Base | 500,000 | Relay | 498,529.36 USDC | $1,471 (0.29%)* |
| USDT Ethereum → USDC Base | 1,000,000 | Relay | 997,922.12 USDC | $2,078 (0.21%) |
| USDT Tron → USDC Solana | 500,000 | NEAR Intents | 497,372.91 USDC | $2,627 (0.53%)* |
| USDT Tron → USDC Solana | 1,000,000 | none | no route quoted | |

\* Valued just under $500,000 at the router's USDT and USDC prices, so these paid the regular 0.15%.

The first three rows show the effect most clearly. Moving **$1,000,000** of USDC from Ethereum to Arbitrum cost **$600 in total**. Moving $500,000 cost $800, because it fell just short of the threshold. Of that $600, $500 was our fee and the rest went to Relay. On a pure stablecoin bridge, the app fee is almost the whole cost, which is why the lower rate is worth the most there.

USDT to USDC across chains costs more, because you are also swapping one stablecoin for another. And Tron is the honest weak spot: from Tron, only NEAR Intents quotes, and at $1,000,000 it had no liquidity at all.

**Volatile assets, where the route matters more than the fee:**

| Swap | Size | NEAR Intents | Relay | Chainflip (estimate) |
|---|---|---|---|---|
| 399.53 ETH → USDC (Ethereum) | ~$1M | 996,403 USDC · ~1 min | 994,471 USDC · ~25 s | 998,697 USDC · ~13 min |
| 12.048 BTC → USDC (Ethereum) | ~$1M | 996,552 USDC · ~14 min | n/a | 997,739 USDC · ~17 min |
| 4,646 SOL → USDC (Solana) | ~$500k | 497,568 USDC · ~20 s | n/a | no quote at this size |
| 9,293 SOL → USDC (Solana) | ~$1M | no quote | n/a | no quote |

At $1M of ETH, the gap between the best and worst route was **$4,226**. That is more than eight times our whole fee on the trade. So the real job of a swap app at this size is to ask every protocol and show you all of them, not just to charge a low fee. Two other things stand out:

- **Chainflip often delivered the most** on BTC and ETH, even though it charges 0.15% and not 0.05%. Its figure is an estimate. Your swap settles at the pool price when your deposit is processed, and it takes longer (13 to 17 minutes here). NEAR Intents and Relay quote a guaranteed minimum. Shieldz ranks routes on what you receive, discounted slightly for time, and shows every route, so you can choose either.
- **Liquidity runs out before the fee matters.** SOL to USDC found no route at $1M, and on several $500,000 stablecoin pairs only one protocol answered. At this size it is normal for some protocols to drop out.

## How to do a large swap well

1. **Quote it first, in full.** Enter the exact amount on [swap.shieldz.cash](https://swap.shieldz.cash) without connecting a wallet. You'll see every route that quotes, what each one delivers, how long each one takes, and the service fee line.
2. **Check the service fee line.** It should read 0.05% on NEAR Intents and Relay routes from $500,000. If you're right at the threshold and it reads 0.15%, add a little to the amount.
3. **Split when liquidity is thin.** If a size gets no quote, or the cost jumps between $500,000 and $1,000,000, two or three swaps in a row usually do better than one. Each swap of $500,000 or more still gets the 0.05%.
4. **Send a test amount first.** Sending a small swap along the exact same path costs little and confirms the addresses, the chain and the memo, if one is needed, before the large one goes.
5. **Use a hardware wallet.** You sign the deposit yourself. Shieldz never holds the funds, and Ledger, Trezor and Keystone are supported. See [how to swap with a hardware wallet](/blog/swap-crypto-with-hardware-wallet).
6. **Mind slippage on volatile pairs.** The Auto setting allows for the quote aging while you sign. On a $1M ETH or BTC swap, the guaranteed minimum is the number to read, not the headline.

## Large swap or OTC desk?

OTC desks exist for a reason. They take the trade off the open market, can fill sizes far beyond what any on-chain pool holds, and agree on a price on a call. If you're moving tens of millions, or an illiquid token, use one.

For the common case, a few hundred thousand to a few million in major assets or stablecoins across chains, a non-custodial swap has real advantages. There's no account or onboarding, and no counterparty holds your funds. You can check the price yourself before you commit, and it settles in seconds to minutes. Our measurements above show where that holds up and where it does not.

## FAQ

**What is the fee for a large swap on Shieldz Swap?**
0.05% on swaps worth $500,000 or more, on NEAR Intents and Relay routes. Chainflip routes stay at 0.15%. Below $500,000, every route is 0.15%. On $1,000,000 the 0.05% comes to $500.

**Do I need an account or KYC for the lower fee?**
No. The rate is applied automatically to any quote the router values at $500,000 or more. There is no account, no sign-up and no KYC.

**Why did my $500,000 stablecoin swap show 0.15%?**
The threshold is checked against the router's live price for what you pay in. A stablecoin trading slightly under $1 can put 500,000 tokens just below $500,000. Add a little to the amount, and the service fee line will show 0.05%.

**What is the largest swap Shieldz Swap can do?**
It depends on the pair and on what the protocols hold that moment. In our test, $1,000,000 quoted on USDC and USDT between Ethereum, Arbitrum and Base, on ETH to USDC and on BTC to USDC, but not on SOL to USDC or USDT from Tron. Enter the amount to see what quotes now, or split the swap.

**Is Shieldz Swap custodial?**
No. You sign the deposit from your own wallet, and the protocol delivers to the address you choose. Shieldz never holds your funds.

## Try it

Open [swap.shieldz.cash](https://swap.shieldz.cash) and enter the swap you are planning, at full size. You don't need to connect a wallet to see every route, the all-in amount you would receive, and the 0.05% fee line.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the fee for a large swap on Shieldz Swap?", "acceptedAnswer": { "@type": "Answer", "text": "0.05% on swaps worth $500,000 or more, on NEAR Intents and Relay routes. Chainflip routes stay at 0.15%. Below $500,000, every route is 0.15%. On $1,000,000 the 0.05% comes to $500." } },
    { "@type": "Question", "name": "Do I need an account or KYC for the lower fee?", "acceptedAnswer": { "@type": "Answer", "text": "No. The rate is applied automatically to any quote the router values at $500,000 or more. There is no account, no sign-up and no KYC." } },
    { "@type": "Question", "name": "Why did my $500,000 stablecoin swap show 0.15%?", "acceptedAnswer": { "@type": "Answer", "text": "The threshold is checked against the router's live price for what you pay in. A stablecoin trading slightly under $1 can put 500,000 tokens just below $500,000. Add a little to the amount, and the service fee line will show 0.05%." } },
    { "@type": "Question", "name": "What is the largest swap Shieldz Swap can do?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the pair and on what the protocols hold that moment. In our test, $1,000,000 quoted on USDC and USDT between Ethereum, Arbitrum and Base, on ETH to USDC and on BTC to USDC, but not on SOL to USDC or USDT from Tron. Enter the amount to see what quotes now, or split the swap." } },
    { "@type": "Question", "name": "Is Shieldz Swap custodial?", "acceptedAnswer": { "@type": "Answer", "text": "No. You sign the deposit from your own wallet, and the protocol delivers to the address you choose. Shieldz never holds your funds." } }
  ]
}
</script>
