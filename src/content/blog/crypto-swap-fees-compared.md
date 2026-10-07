---
title: "Crypto Swap Fees Compared: MetaMask, Phantom, Rabby, Base App and Shieldz (2026)"
description: "What each wallet charges to swap, in percent and in dollars on $1,000 and $10,000, with sources. Plus the costs that are not in the headline fee, and how to see them."
pubDate: 2026-10-07
author: "Deniz Yanbollu"
tags: ["crypto swap fees", "metamask swap fee", "phantom swap fee", "rabby", "coinbase wallet", "cross-chain crypto swap"]
eyebrow: "Comparison"
swapBanner: true
image: "https://shieldz.cash/blog/og/crypto-swap-fees-compared.png"
---

The swap button in your wallet is convenient, and convenience has a price. Most wallets with a built-in swap add their own fee on top of whatever the trade itself costs, and because that fee is baked into the quote, most people never see it as a separate number. On a $10,000 swap it can be $85 or more.

This post puts the published swap fee of the most popular self-custody wallets side by side, with the source for each, and shows what it comes to in dollars. It also covers the costs that are *not* in the headline fee, because a low fee on a bad route can still cost you more than a high fee on a good one.

A note on who is writing: we build [Shieldz Swap](https://swap.shieldz.cash), which charges 0.15%. We have tried to be fair to the others, and every number below links to its source so you can check it.

## The headline fees

| App | Published swap fee | On $1,000 | On $10,000 | Source |
|---|---|---|---|---|
| Base app (Coinbase Wallet) | up to 1% | up to $10 | up to $100 | [Coinbase Help](https://help.coinbase.com/en/wallet/getting-started/dex-swap) |
| MetaMask | 0.875% | $8.75 | $87.50 | [MetaMask Support](https://support.metamask.io/trade/swap/user-guide-swaps/) |
| Phantom | 0.85% on select pairs | $8.50 | $85 | [Phantom Help Center](https://help.phantom.com/hc/en-us/articles/5985106844435-Why-did-my-swap-fail) |
| Rabby | 0.25% | $2.50 | $25 | [ethereum.org](https://ethereum.org/wallets/find-wallet/rabby-wallet/) |
| Shieldz Swap | 0.15% on every route | $1.50 | $15 | [Terms](https://swap.shieldz.cash/terms) |

<figure style="margin:28px 0">
  <a href="/blog/charts/swap-wallet-fees.svg"><img src="/blog/charts/swap-wallet-fees.svg" alt="Wallet swap fees on a 1,000 dollar swap: Base app up to 10 dollars, MetaMask 8.75, Phantom 8.50 on select pairs, Rabby 2.50, Shieldz Swap 1.50. On 10,000 dollars: up to 100, 87.50, 85, 25 and 15." width="860" height="470" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The app's own fee only. Every one of them also passes on protocol, liquidity and network costs. Checked October 2026.</figcaption>
</figure>

Some details behind the numbers:

- **Base app** says swaps carry a fee of "up to 1%" and does not publish when it is lower, so the confirmation screen is the only place to see the rate for a given trade.
- **MetaMask** charges 0.875% on swaps made with its Swaps button, built into every quote.
- **Phantom** charges 0.85% on "select swap pairs". For cross-chain swaps, it adds the bridge provider's fee on top.
- **Rabby** charges 0.25%, and waives it on some same-chain swaps between closely related tokens. It does not publish a dedicated fee page, so the source here is its ethereum.org listing.
- **Shieldz Swap** charges 0.15% on every route, same-chain or cross-chain, and shows it as its own line in dollars on every quote.

## The costs that are not in the headline fee

The app fee is the easiest number to compare, but it is not the only one. Every swap, in every app, also pays:

- **The route.** Different protocols and liquidity sources quote different prices for the same swap at the same second. That gap is often bigger than the app fee. When we asked three protocols for 1 ETH to USDC on Arbitrum, the best and worst quotes were $6.14 apart, four times the whole Shieldz fee on that trade. An app that only checks one source can cost you that gap without ever showing it.
- **Protocol and liquidity fees.** Pool fees on a DEX, Chainflip's 0.10% network fee, NEAR Intents' 0.20% platform fee. These go to the protocol that does the work, not to the app.
- **Price impact.** Large swaps move the price against you, more so on thin pairs.
- **Network fees.** The gas you pay to send the transaction, set by the chain, not by the app.

So the honest way to compare two apps is not their fee: it is **what you receive** for the same input, at the same moment. That is why Shieldz Swap asks NEAR Intents, Chainflip and Relay at once, ranks them on what you receive after every fee, and shows every route rather than just the winner. For more on how that ranking works, see the [Shieldz Swap launch guide](/blog/cross-chain-crypto-swap).

## You do not have to give up your wallet

You can keep using the wallet you like and still skip its swap fee. Shieldz Swap connects to MetaMask, Phantom, Rabby, Coinbase Wallet, Trust Wallet, OKX Wallet, Backpack, Solflare, TronLink and others. You sign in your wallet exactly as before; the swap simply runs through Shieldz, so the wallet's own swap fee does not apply. The same goes for hardware wallets: see [how to swap with a Ledger, Trezor or Keystone](/blog/swap-crypto-with-hardware-wallet).

The [compare rates](https://swap.shieldz.cash/#compare) section on the Shieldz home page runs a live quote for any amount and shows what each wallet's fee would take from it.

## When a built-in swap is still the right call

To be fair to the field:

- **Tiny swaps.** On $20, the difference between 0.15% and 0.875% is about 15 cents. Use whatever is quickest.
- **Same-chain swaps on a DEX directly.** Going straight to a DEX or aggregator website avoids wallet fees too, and for a simple same-chain swap that can be the cheapest option. Where Shieldz helps most is cross-chain: Bitcoin to ETH, Tron USDT to Base USDC, Solana to Arbitrum, where you would otherwise need a bridge and a DEX, or an exchange.
- **Fee waivers.** Rabby's waiver on related tokens, or a wallet promotion, can make a specific swap cheaper there. Check the quote.

## FAQ

**What is MetaMask's swap fee?**
0.875%, built into every quote made with the MetaMask Swaps button, according to MetaMask's own support guide. On $1,000 that is $8.75.

**What is Phantom's swap fee?**
0.85% on select swap pairs, according to Phantom's Help Center. Cross-chain swaps also include the bridge provider's fee.

**Which wallet has the lowest swap fee?**
Among the wallets compared here, Rabby's 0.25% is the lowest built-in wallet fee. Shieldz Swap charges 0.15% on every route and works with all of these wallets, so you can sign in the wallet you already use.

**Is the swap fee the only cost?**
No. Every swap also pays protocol or liquidity fees, price impact and the network fee. The route matters too: different protocols quote different prices for the same swap, sometimes by more than the app fee.

## Try it

Open [swap.shieldz.cash](https://swap.shieldz.cash), enter the swap you were about to make in your wallet, and compare what you would receive. No account, no KYC, and a flat 0.15% you can see before you sign.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is MetaMask's swap fee?", "acceptedAnswer": { "@type": "Answer", "text": "0.875%, built into every quote made with the MetaMask Swaps button, according to MetaMask's own support guide. On $1,000 that is $8.75." } },
    { "@type": "Question", "name": "What is Phantom's swap fee?", "acceptedAnswer": { "@type": "Answer", "text": "0.85% on select swap pairs, according to Phantom's Help Center. Cross-chain swaps also include the bridge provider's fee." } },
    { "@type": "Question", "name": "Which wallet has the lowest swap fee?", "acceptedAnswer": { "@type": "Answer", "text": "Among the wallets compared here, Rabby's 0.25% is the lowest built-in wallet fee. Shieldz Swap charges 0.15% on every route and works with all of these wallets, so you can sign in the wallet you already use." } },
    { "@type": "Question", "name": "Is the swap fee the only cost?", "acceptedAnswer": { "@type": "Answer", "text": "No. Every swap also pays protocol or liquidity fees, price impact and the network fee. The route matters too: different protocols quote different prices for the same swap, sometimes by more than the app fee." } }
  ]
}
</script>
