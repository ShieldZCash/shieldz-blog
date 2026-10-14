---
title: "How to Swap $1 Million USDT to USDC (or Move It Across Chains) Without an Exchange"
description: "Real costs for moving $250,000, $1M and $2M in USDT and USDC: same-chain conversions, Ethereum to Arbitrum and Base, Tron USDT to Ethereum, and Solana. Live quotes, the cheapest routes, and where liquidity runs out."
pubDate: 2026-10-14
author: "Deniz Yanbollu"
tags: ["swap 1 million usdt to usdc", "large usdt transfer", "move usdt between chains", "usdt trc20 to erc20 large amount", "bridge 1 million usdc", "stablecoin otc", "whale swap"]
eyebrow: "Data"
swapBanner: true
---

If you hold seven figures in stablecoins, sooner or later you need them somewhere else: USDT turned into USDC, USDC on Arbitrum or Base, Tron USDT on Ethereum. The usual options are an exchange account (deposit, convert, withdraw, and hope the compliance review is quick) or an OTC desk (a call, an onboarding pack, a spread you can't see).

There's a third option: a non-custodial swap straight from your wallet, with the full price on screen before you sign. This post shows what that costs for real, at $250,000, $1,000,000 and $2,000,000, from live quotes on [Shieldz Swap](https://swap.shieldz.cash) on 14 October 2026. Some routes are cheaper than you'd expect. Some can't take $1M in one go, and we show those too.

A note on who is writing: we build Shieldz Swap, which charges 0.05% on swaps of $500,000 or more (details in [our large swaps post](/blog/large-crypto-swaps)). Every number below is a real quote, with every fee already included.

## The answer at $1,000,000

<figure style="margin:28px 0">
  <a href="/blog/charts/stablecoin-1m-cost.svg"><img src="/blog/charts/stablecoin-1m-cost.svg" alt="All-in cost of moving 1,000,000 dollars of stablecoins. USDC to USDT on Ethereum: 173 dollars. USDT Tron to USDT Ethereum: 523. USDC Ethereum to Arbitrum: 600. USDC Ethereum to Base: 600. USDT to USDC on Ethereum: 1,899. USDT Tron to USDC Ethereum: 2,121. No route at 1 million for USDC Solana to Ethereum (largest 510,000), USDC Ethereum to Solana (250,000) and USDT Tron to USDC Solana (250,000)." width="860" height="640" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">All-in cost: what you send minus what you receive, on the route that delivered the most. Live quotes, 14 October 2026.</figcaption>
</figure>

- **Moving USDC from Ethereum to Arbitrum or Base: $600 per million.** That's 0.06%, settled in about 25 seconds. At $2,000,000 it's $1,200.
- **Tron USDT to Ethereum USDT: $523 per million,** in about 13 minutes.
- **USDC → USDT costs less than USDT → USDC.** $173 one way and $1,899 the other, because the market values USDC slightly above USDT.
- **Anything touching Solana is the bottleneck.** No route took $1M in one swap, so split it.

## Every route we measured

All amounts are what you receive for what you send, with our fee, the protocol's fee and the pool's spread included. The only extra is the gas for your deposit transaction, which your wallet shows you.

**Converting on Ethereum**

| Swap | $250,000 | $1,000,000 | $2,000,000 |
|---|---|---|---|
| USDT → USDC | 249,312 · $688 | 998,101 · **$1,899** | 1,995,803 · $4,197 |
| USDC → USDT | 249,683 · $317 | 999,827 · **$173** | 2,000,558 · **+$558** |

USDT → USDC is the expensive direction. On the day, the market valued USDT about 0.06% below USDC, so converting into USDC costs that gap plus fees, and converting out of USDC gets it back. At $2M, USDC → USDT returned *more* USDT than the USDC sent. If you only need "a dollar stablecoin" on the other side, it is worth checking which one is cheaper to hold.

**Moving between chains**

| Swap | $250,000 | $1,000,000 | $2,000,000 |
|---|---|---|---|
| USDC Ethereum → USDC Arbitrum | 249,600 · $400 | 999,400 · **$600** | 1,998,800 · **$1,200** |
| USDC Ethereum → USDC Base | 249,600 · $400 | 999,400 · **$600** | 1,998,800 · **$1,200** |
| USDT Ethereum → USDC Arbitrum | 249,313 · $687 | 998,101 · $1,899 | 1,995,803 · $4,197 |
| USDT Tron → USDT Ethereum | 249,892 · $108 | 999,477 · **$523** | no route |
| USDT Tron → USDC Ethereum | 249,183 · $817 | 997,879 · $2,121 | no route |
| USDC Solana → USDC Ethereum | 249,306 · $694 | no route (510,000 quoted: $1,376) | no route |
| USDC Ethereum → USDC Solana | 249,224 · $776 | no route | no route |
| USDT Tron → USDC Solana | 248,942 · $1,058 | no route | no route |

What stands out:

- **USDC between Ethereum and its rollups is the cheapest large move.** It cost a flat 0.06% at $1M and at $2M. Of that, 0.05% was our fee and the rest was Relay's. It settles in about 25 seconds, and no step depends on the size of a pool.
- **Tron USDT now has two routes.** Since 14 October, Shieldz asks both Chainflip and NEAR Intents for every Tron USDT quote. At $1M, Chainflip delivered 999,477 USDT on Ethereum against NEAR Intents' 998,473: a $1,000 difference on one swap, in exchange for about 13 minutes instead of 1.5. The app shows both, so you choose.
- **The size above $500,000 matters.** Our fee drops to 0.05% at $500,000. The router checks that against its own live price, and a stablecoin worth $0.9998 can put exactly 500,000 tokens just under the line. Send $510,000 rather than $500,000, or check that the service fee line reads 0.05%.

## How to move $1M of stablecoins, step by step

1. **Quote the full amount first.** Open the pair on [swap.shieldz.cash](https://swap.shieldz.cash/swap?from=ETH.USDT-0xdAC17F958D2ee523a2206206994597C13D831ec7&to=ETH.USDC-0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&amount=1000000) and enter the exact size. You don't need to connect a wallet. Every route that can take the trade shows what it delivers, how long it takes, and the service fee.
2. **If no route quotes, halve it.** For anything touching Solana, keep each swap at $250,000 or less. For Tron above $1M, use two swaps. Each swap of $500,000 or more still gets the 0.05% fee.
3. **Send a test amount.** A $1,000 swap along the exact same path checks the destination address, the chain and the timing for a few dollars.
4. **Sign from your own wallet.** You sign the deposit yourself, and your wallet shows the exact transaction before you approve it. A hardware wallet is the right tool at this size, and [Ledger, Trezor and Keystone are supported](/blog/swap-crypto-with-hardware-wallet). Shieldz never holds the funds.
5. **Read the guaranteed minimum.** NEAR Intents and Relay quote a minimum you will receive, and your deposit is refunded if the price moves past it. Chainflip's figure is an estimate that settles at the pool price, within the slippage you set.

## Exchange, OTC desk, or swap?

**An exchange** works if you already keep an account there and the funds are on it anyway. To move $1M in from a wallet, you deposit, convert and withdraw. That means KYC, the exchange holding your funds for the whole time, a withdrawal fee, and possibly a review that holds a large withdrawal for hours or days.

**An OTC desk** is the right call for sizes no on-chain route can take: tens of millions, or a chain with thin liquidity. It gives you a negotiated price and someone on the phone. The cost is onboarding and a spread that's agreed in private.

**A non-custodial swap** fits the middle ground of $250,000 to a few million in the major stablecoins. There's no account, the funds go from wallet to wallet, the price is on screen before you sign, and it settles in seconds to minutes. Our measurements show where it falls short (Solana at size, Tron above $1M), and where it's hard to beat (USDC between Ethereum, Arbitrum and Base at 0.06%, with no withdrawal fee on top).

## FAQ

**How much does it cost to swap $1 million USDT to USDC?**
On Ethereum, live quotes on 14 October 2026 delivered 998,101 USDC for 1,000,000 USDT, an all-in cost of $1,899 (0.19%), with every fee included. Going the other way, 1,000,000 USDC returned 999,827 USDT, a cost of $173.

**What is the cheapest way to move $1 million USDC between chains?**
In our quotes, USDC from Ethereum to Arbitrum or Base cost $600 per million (0.06%) and settled in about 25 seconds. At $2,000,000 it cost $1,200.

**Can I move $1 million USDT from Tron to Ethereum without an exchange?**
Yes. On 14 October 2026, 1,000,000 USDT on Tron returned 999,477 USDT on Ethereum through Chainflip, a cost of $523, in about 13 minutes. $2,000,000 in one swap did not quote, so split anything larger.

**What is the largest stablecoin swap I can do?**
It depends on the route and on the liquidity at that moment. In our test, USDC between Ethereum, Arbitrum and Base, and USDT ↔ USDC on Ethereum, quoted at $2,000,000. Tron to Ethereum quoted up to $1,000,000. Routes touching Solana quoted up to $250,000 to $510,000.

**Do I need KYC or an account to swap large amounts?**
No. Shieldz Swap is non-custodial: you sign from your own wallet and receive at your own address, with no account or sign-up.

## Try it

Enter your full amount on [swap.shieldz.cash](https://swap.shieldz.cash) and compare the routes before you connect anything. For USDC between Ethereum and its rollups, see [USDC Ethereum → Arbitrum](https://swap.shieldz.cash/swap?from=ETH.USDC-0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&to=ARB.USDC-0xaf88d065e77c8cC2239327C5EDb3A432268e5831&amount=1000000). For Tron, see [USDT Tron → USDT Ethereum](https://swap.shieldz.cash/swap?from=TRON.USDT-TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&to=ETH.USDT-0xdAC17F958D2ee523a2206206994597C13D831ec7&amount=1000000).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does it cost to swap $1 million USDT to USDC?", "acceptedAnswer": { "@type": "Answer", "text": "On Ethereum, live quotes on 14 October 2026 delivered 998,101 USDC for 1,000,000 USDT, an all-in cost of $1,899 (0.19%), with every fee included. Going the other way, 1,000,000 USDC returned 999,827 USDT, a cost of $173." } },
    { "@type": "Question", "name": "What is the cheapest way to move $1 million USDC between chains?", "acceptedAnswer": { "@type": "Answer", "text": "In our quotes, USDC from Ethereum to Arbitrum or Base cost $600 per million (0.06%) and settled in about 25 seconds. At $2,000,000 it cost $1,200." } },
    { "@type": "Question", "name": "Can I move $1 million USDT from Tron to Ethereum without an exchange?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. On 14 October 2026, 1,000,000 USDT on Tron returned 999,477 USDT on Ethereum through Chainflip, a cost of $523, in about 13 minutes. $2,000,000 in one swap did not quote, so split anything larger." } },
    { "@type": "Question", "name": "What is the largest stablecoin swap I can do?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the route and on the liquidity at that moment. In our test, USDC between Ethereum, Arbitrum and Base, and USDT to USDC on Ethereum, quoted at $2,000,000. Tron to Ethereum quoted up to $1,000,000. Routes touching Solana quoted up to $250,000 to $510,000." } },
    { "@type": "Question", "name": "Do I need KYC or an account to swap large amounts?", "acceptedAnswer": { "@type": "Answer", "text": "No. Shieldz Swap is non-custodial: you sign from your own wallet and receive at your own address, with no account or sign-up." } }
  ]
}
</script>
