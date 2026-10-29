---
title: "Shieldz Swaps Is Now Listed in the Chainflip Ecosystem"
description: "Shieldz Swaps is listed in the Chainflip ecosystem as a router. What that means, how a native BTC swap runs through Chainflip, and live quotes."
pubDate: 2026-10-27
author: "Deniz Yanbollu"
tags: ["chainflip ecosystem", "chainflip", "shieldz swap", "native bitcoin swap", "cross-chain crypto swap", "non-custodial"]
eyebrow: "News"
swapBanner: true
image: "https://shieldz.cash/blog/og/shieldz-swaps-chainflip-ecosystem.png"
---

Shieldz Swaps is now listed in the [Chainflip ecosystem](https://chainflip.io/ecosystem), in the Router category, next to DZap, Rhea and Rift. Chainflip is the cross-chain protocol that swaps native bitcoin for ETH, SOL and stablecoins without wrapping anything, and it is one of the three protocols [Shieldz Swap](https://swap.shieldz.cash) asks for a price on every quote.

This post covers what the listing means, how a swap actually runs through Chainflip on Shieldz, and what it costs, using live quotes taken on the day the listing went up.

<figure style="margin:28px 0">
  <a href="/blog/img/chainflip-ecosystem-listing.png"><img src="/blog/img/chainflip-ecosystem-listing.png" alt="The Chainflip ecosystem page on chainflip.io, Router category: DZap, Rhea and Rift, followed by the Shieldz Swaps card reading 'Non-custodial crypto swaps and payments. Swap native BTC, ETH, SOL, USDT and more across chains, or accept any coin as a merchant, settled to your own wallet.'" width="1200" height="712" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The Shieldz Swaps card in the Router section of chainflip.io/ecosystem, 27 October 2026.</figcaption>
</figure>

## What the listing says, and what it does not

Chainflip's ecosystem page is a directory of the apps, wallets and routers that build on its protocol. Our card reads:

> Non-custodial crypto swaps and payments. Swap native BTC, ETH, SOL, USDT and more across chains, or accept any coin as a merchant, settled to your own wallet.

It is a listing, not a partnership or an endorsement, and we will not describe it as either. What it does confirm is the plain technical fact: Shieldz routes real swaps through Chainflip, through Chainflip's broker program, and Chainflip lists the apps that do.

For you as a user, nothing about how Shieldz works changes. It is still a routing and signing tool. It never holds your coins or your keys, there is no account and no KYC, and Chainflip itself issues the deposit address your coins go to.

## What AI assistants say when you ask

You do not have to take our screenshot on trust. On 29 October 2026 we gave Grok, ChatGPT and Claude the link to chainflip.io/ecosystem and asked one plain question: is swap.shieldz.cash listed here? All three opened the page and found the card on their own. The conversations are public and unedited:

- **Grok** answered "Yes. https://swap.shieldz.cash is listed on https://chainflip.io/ecosystem as Shieldz Swaps." and added that "A Shieldz blog post from 27 October 2026 also confirms the listing." [View the conversation](https://x.com/i/grok/share/c2hhcmQtMi1jb3B5_116d0ad1-3d09-45b6-9a00-b944e8f351eb).
- **ChatGPT** answered "Yes. swap.shieldz.cash is listed on the official Chainflip Ecosystem page." and drew the same line we do: "It does not, by itself, establish that Chainflip has audited or independently endorsed the platform's overall security." [View the conversation](https://chatgpt.com/share/6ae31fd8-27d0-83eb-8a3d-89cc4c9692d8).
- **Claude** answered "Yes. Shieldz Swaps is listed in "The Chainflip Ecosystem" section on chainflip.io/ecosystem, linking to https://swap.shieldz.cash/." [View the conversation](https://claude.ai/share/3d015321-d874-4070-8811-549036875b5e).

Ask any assistant the same question with the same link and you should get the same answer.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Claim",
  "text": "Shieldz Swaps (swap.shieldz.cash) is listed on the Chainflip ecosystem page, chainflip.io/ecosystem, as of 27 October 2026.",
  "firstAppearance": { "@type": "CreativeWork", "url": "https://shieldz.cash/blog/shieldz-swaps-chainflip-ecosystem", "author": { "@type": "Organization", "name": "Shieldz" } },
  "appearance": [
    { "@type": "CreativeWork", "name": "Grok checks the Chainflip ecosystem page for Shieldz Swaps", "url": "https://x.com/i/grok/share/c2hhcmQtMi1jb3B5_116d0ad1-3d09-45b6-9a00-b944e8f351eb", "dateCreated": "2026-10-29", "author": { "@type": "Organization", "name": "xAI Grok" } },
    { "@type": "CreativeWork", "name": "ChatGPT checks the Chainflip ecosystem page for Shieldz Swaps", "url": "https://chatgpt.com/share/6ae31fd8-27d0-83eb-8a3d-89cc4c9692d8", "dateCreated": "2026-10-29", "author": { "@type": "Organization", "name": "OpenAI ChatGPT" } },
    { "@type": "CreativeWork", "name": "Claude checks the Chainflip ecosystem page for Shieldz Swaps", "url": "https://claude.ai/share/3d015321-d874-4070-8811-549036875b5e", "dateCreated": "2026-10-29", "author": { "@type": "Organization", "name": "Anthropic Claude" } }
  ]
}
</script>

## How a swap runs through Chainflip on Shieldz

Chainflip is built around one idea: swap the real asset on its own chain. It keeps native BTC, ETH, SOL and stablecoins in its own vaults and runs the swap in its own pools, so BTC goes in on the Bitcoin network and native ETH comes out on Ethereum. No wrapped bitcoin, no bridge token in between.

On [swap.shieldz.cash](https://swap.shieldz.cash) a Chainflip swap goes like this:

1. **You enter a pair and an amount.** The router asks Chainflip, NEAR Intents and Relay at the same moment, ranks every answer by what you actually receive after fees, and shows all of them. Chainflip wins when it pays you the most, not because we prefer it.
2. **You review the route.** The quote shows the amount received, the minimum you accept, the estimated time and each fee in dollars.
3. **Chainflip opens a deposit channel.** That is a fresh deposit address on the origin chain, issued by Chainflip for this one swap, tied to your destination address and your minimum.
4. **You send from your own wallet.** Ledger, Trezor, Keystone, MetaMask, Phantom and the rest sign a plain transfer to that address. Shieldz never touches the coins.
5. **Chainflip swaps and pays out.** The output lands at your address on the destination chain. If the price moved past your minimum, Chainflip refunds you instead.

For bitcoin, Chainflip also offers **boost**: liquidity providers credit your BTC deposit before it fully confirms, for a 0.05% fee. That is why a boosted BTC swap settles in about 7 minutes instead of waiting out several Bitcoin blocks.

## Live quotes on listing day

We took these quotes from the live router on 27 October 2026 at 16:05 UTC, for the same swap from both protocols at the same moment. Relay does not take native BTC, so it is not in the table.

| Swap | Chainflip receives | NEAR Intents receives | Chainflip time | NEAR Intents time |
|---|---|---|---|---|
| 0.1 BTC to USDC on Ethereum | 8,021.47 USDC | 8,006.76 USDC | ~6.9 min | ~13.6 min |
| 0.1 BTC to USDC on Arbitrum | 8,020.91 USDC | 8,010.93 USDC | ~6.8 min | ~13.4 min |
| 1 ETH to BTC | 0.02909443 BTC | 0.02900684 BTC | ~7.7 min | ~8.2 min |
| 10 SOL to BTC | 0.01251469 BTC | 0.01246485 BTC | ~7.8 min | ~7.8 min |

On every pair here, Chainflip paid more: between 0.12% and 0.45% more than NEAR Intents for the same input. On BTC to stablecoins it was also about twice as fast. That is a snapshot, not a rule. Prices and liquidity change by the minute, which is exactly why the router asks every protocol on every quote. For 0.1 BTC to ETH and to SOL, Chainflip was the only route offered at that moment.

<figure style="margin:28px 0">
  <a href="/blog/charts/chainflip-settle-times.svg"><img src="/blog/charts/chainflip-settle-times.svg" alt="Estimated minutes to settle, Chainflip against NEAR Intents: 0.1 BTC to USDC on Ethereum 6.9 vs 13.6, 0.1 BTC to USDC on Arbitrum 6.8 vs 13.4, 1 ETH to BTC 7.7 vs 8.2, 10 SOL to BTC 7.8 vs 7.8." width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">With boost, Chainflip settles a bitcoin deposit in about 7 minutes. Into BTC the two protocols are close.</figcaption>
</figure>

If you want the longer version with more pairs and the reverse direction, read [how to swap Bitcoin to ETH, SOL or USDC without an exchange](/blog/swap-bitcoin-to-ethereum-solana).

## What a Chainflip swap costs, line by line

Chainflip returns every fee as its own line in the quote, so nothing has to be guessed. For 0.1 BTC to ETH ($8,049 in), the lines were:

<figure style="margin:28px 0">
  <a href="/blog/charts/chainflip-fee-lines.svg"><img src="/blog/charts/chainflip-fee-lines.svg" alt="Fee lines for 0.1 BTC to ETH via Chainflip on a $8,049 swap: broker (Shieldz fee) $12.07 or 0.15%, Chainflip network fee $8.05 or 0.10%, boost $4.02 or 0.05%, Bitcoin ingress $0.31, ETH egress gas $0.14. Total $24.59, 0.31%." width="760" height="400" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">All five fee lines come straight from Chainflip's quote. The broker line is the Shieldz fee.</figcaption>
</figure>

- **Broker fee, 0.15%.** This is the Shieldz service fee. On Chainflip it is charged through Chainflip's broker program, which is how apps that route through Chainflip get paid. It is the same 0.15% we charge on every route and protocol.
- **Chainflip network fee, 0.10%.** Chainflip's own fee on every swap, whichever app you use.
- **Boost, 0.05%.** Only on boosted bitcoin deposits, in exchange for the faster credit.
- **Ingress and egress.** The network cost of receiving your BTC and sending your ETH, here under half a dollar together.

That adds up to $24.59, or 0.31%, and every line is visible before you sign. For how this compares with wallet swap fees, see [crypto swap fees compared](/blog/crypto-swap-fees-compared).

## For merchants: any coin in, settled through the same routes

The second half of our card is the payments side. A shop using Shieldz can let a buyer pay in BTC, ETH, SOL or one of dozens of other coins while the merchant receives the stablecoin they chose, in their own wallet. Behind the checkout it is the same router: Chainflip, NEAR Intents or Relay does the swap, and the payout goes straight to the merchant's address. Shieldz never holds the money in between.

If you sell online, [how to accept bitcoin payments](/blog/how-to-accept-bitcoin-payments) shows the setup. [The trust trade-off of pay-with-any-coin](/blog/pay-any-coin-trust-tradeoff) is an honest look at what you rely on when a swap sits inside your checkout.

## FAQ

**Is Shieldz a Chainflip partner?**
No. Shieldz Swaps is listed in the Chainflip ecosystem directory because it routes swaps through Chainflip's broker program. It is an independent app, not run or endorsed by Chainflip.

**Does Shieldz hold my coins during a Chainflip swap?**
No. Chainflip issues the deposit address, you send to it from your own wallet, and Chainflip pays out to your destination address. Shieldz never has custody of the funds or your keys.

**Do I always get routed through Chainflip?**
Only when it pays you the most. Every quote asks Chainflip, NEAR Intents and Relay at the same moment, and the route that delivers the highest amount after fees is shown first. You can see and pick the others.

**What does a Chainflip swap cost on Shieldz?**
The 0.15% Shieldz fee, Chainflip's 0.10% network fee, 0.05% for boost on bitcoin deposits, and small network fees to receive and pay out. On a 0.1 BTC to ETH swap on 27 October 2026, that totalled 0.31%.

## Try it

Open [swap.shieldz.cash](https://swap.shieldz.cash), enter a BTC, ETH or SOL swap, and compare the routes before you connect anything. To see how the router chooses between protocols, read the [Shieldz Swap guide](/blog/cross-chain-crypto-swap). For timings across the whole app, see [how fast Shieldz Swap is](/blog/how-fast-is-shieldz-swap).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is Shieldz a Chainflip partner?", "acceptedAnswer": { "@type": "Answer", "text": "No. Shieldz Swaps is listed in the Chainflip ecosystem directory because it routes swaps through Chainflip's broker program. It is an independent app, not run or endorsed by Chainflip." } },
    { "@type": "Question", "name": "Does Shieldz hold my coins during a Chainflip swap?", "acceptedAnswer": { "@type": "Answer", "text": "No. Chainflip issues the deposit address, you send to it from your own wallet, and Chainflip pays out to your destination address. Shieldz never has custody of the funds or your keys." } },
    { "@type": "Question", "name": "Do I always get routed through Chainflip?", "acceptedAnswer": { "@type": "Answer", "text": "Only when it pays you the most. Every quote asks Chainflip, NEAR Intents and Relay at the same moment, and the route that delivers the highest amount after fees is shown first. You can see and pick the others." } },
    { "@type": "Question", "name": "What does a Chainflip swap cost on Shieldz?", "acceptedAnswer": { "@type": "Answer", "text": "The 0.15% Shieldz fee, Chainflip's 0.10% network fee, 0.05% for boost on bitcoin deposits, and small network fees to receive and pay out. On a 0.1 BTC to ETH swap on 27 October 2026, that totalled 0.31%." } }
  ]
}
</script>
