---
title: "How Fast Is Shieldz Swap? We Timed Every Step"
description: "Measured on the live site: a real cross-chain quote in 0.39 s, every protocol in 0.59 s, a wallet's balances on 23 chains in about a second, and a cold page load to a live price in 1.1 s."
pubDate: 2026-10-10
author: "Deniz Yanbollu"
tags: ["shieldz swap", "cross-chain crypto swap", "swap speed", "near intents", "chainflip", "relay"]
eyebrow: "Data"
---

A swap app feels fast or slow long before any coins move. You type an amount and wait for a price. You connect a wallet and wait for your balances. You change the pair and wait again. Each of those waits is small. Together they decide whether an app feels like a tool or a chore.

So we timed them. Every number below was measured against the live [Shieldz Swap](https://swap.shieldz.cash) on 10 October 2026, from a laptop in Istanbul, over an ordinary connection. No staging server, no warm-up tricks, no cherry-picked best run: medians, with the slowest run stated alongside.

The short version:

| What you wait for | Median | Slowest run |
|---|---|---|
| First real price after you type an amount | **0.39 s** | 0.59 s |
| Every protocol's price in, best route picked | **0.59 s** | 0.76 s |
| A wallet's balances, first chain | **0.12 s** | 0.13 s |
| A wallet's balances, all 23 EVM chains | **1.0 s** | 1.02 s |
| Cold page load to a live price on screen | **1.12 s** | 1.15 s |

## A real price in under half a second

When you type an amount, Shieldz Swap asks NEAR Intents, Chainflip and Relay for a quote at the same moment. Asking several protocols normally means waiting for the slowest one, so we don't: each quote is streamed to your screen the moment its protocol answers, and the list re-ranks as the others arrive.

We ran five common swaps three times each:

<figure style="margin:28px 0">
  <a href="/blog/charts/swap-speed-quotes.svg"><img src="/blog/charts/swap-speed-quotes.svg" alt="Quote speed for five pairs, median of three runs. 1 ETH to USDC: first route 0.31 seconds, all routes 0.48. 1,000 USDC to ETH: 0.43 and 0.59. 0.1 BTC to ETH: 0.38 and 0.59. 500 USDC to SOL: 0.36 and 0.59. 0.5 ETH Arbitrum to Base: 0.48 and 0.66." width="760" height="442" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Green: the first route on screen. Grey: every protocol has answered and the best route is chosen. Across all 15 runs the slowest full race took 0.76 s.</figcaption>
</figure>

Two details make this possible. First, these are real, executable quotes from each protocol, not an estimate from a cached price that gets corrected later. Second, a protocol that cannot do a pair is ruled out as fast as one that can: Chainflip does not list Base USDC, and Relay does not take native Bitcoin, and both say so in well under a second, so neither holds up the answer.

Quotes then refresh every 15 seconds while you decide, with a countdown in the corner so you can see when the next one is due.

### Every route, and you pick

Faster is not the same as better, so speed never replaces choice. The Route tile on the swap form now opens a list of every route that answered, with what each one pays out, how long it says it takes to settle, and how it compares to the best:

<figure style="margin:28px 0">
  <a href="/blog/img/swap-route-picker.png"><img src="/blog/img/swap-route-picker.png" alt="The Shieldz Swap form for 1.25 ETH to USDC with the route list open: Relay marked Best at 3,110.16 USDC in about 24 seconds, Chainflip at 3,112.63 USDC (+0.08%) in about 168 seconds, and NEAR Intents at 3,109.14 USDC (-0.03%) in about 54 seconds." width="508" height="770" loading="lazy" style="width:100%;max-width:508px;height:auto;border-radius:16px;border:1px solid #262626;display:block;margin:0 auto" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">1.25 ETH to USDC. Relay is picked as best; Chainflip pays 0.08% more but takes about two and a half minutes longer. One tap swaps on it instead.</figcaption>
</figure>

"Best" is what you receive after every fee, discounted by 5 basis points for each minute a route takes to settle. That is enough for speed to break a near-tie and never enough to override a real price gap. If you would rather have the extra 0.08% and wait, pick Chainflip; the swap runs on the route you chose, and your choice holds when the quote refreshes.

## Balances on 23 chains in about a second

A swap form that does not know what you hold makes you go and look. Shieldz Swap reads your balances on every EVM chain it supports when you connect, so the token picker can show what you can actually spend.

We scanned a well-known public wallet, vitalik.eth, which holds 74 different tokens across those chains:

<figure style="margin:28px 0">
  <a href="/blog/charts/swap-speed-balances.svg"><img src="/blog/charts/swap-speed-balances.svg" alt="Balance scan of one wallet across 23 EVM chains: the first chain's balances arrive at 0.12 seconds, half the chains by 0.16 seconds, and all 23 chains with 74 holdings by about 1.0 second." width="760" height="318" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Four runs, none slower than 1.02 s, and no chain failed to answer.</figcaption>
</figure>

As with quotes, nothing waits for the slowest chain: each chain's balances appear the moment it answers. Behind that, every chain is read from its public RPC nodes first, with a second node started automatically if the first has not answered within 0.7 seconds. A chain that cannot be read is reported as unreadable, never shown as zero, so a flaky node can make a balance late but cannot make it wrong.

That fallback is also where speed is won or lost. Earlier today one chain, Sonic, had only a single public node, and when it stalled every scan sat out a 4-second timeout before giving up on it. Polygon's backup nodes were rate-limiting us. After adding healthy backups for both, a scan after a quiet spell went from 5.3 seconds to 1.0. Most of a speed budget is in the tail, and the tail is usually one slow server.

## Opening the page: a live price in 1.1 seconds

Finally, the whole thing from nothing. We loaded swap.shieldz.cash four times in a fresh browser with an empty cache, and stopped the clock when a live route from a real protocol appeared on the form:

<figure style="margin:28px 0">
  <a href="/blog/charts/swap-speed-page.svg"><img src="/blog/charts/swap-speed-page.svg" alt="Cold page load of swap.shieldz.cash: first byte at 0.15 seconds, page painted at 0.37 seconds, a live route on screen at 1.12 seconds." width="760" height="318" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Desktop Chromium, empty cache, 466 KB transferred in total. Slowest of the four loads: 1.15 s to a live price.</figcaption>
</figure>

The page is small (466 KB on a first visit, everything included) and its landing markup is pre-rendered, so there is something to read before any script runs. Prices for the dollar figures under each amount come from the router's own asset list rather than from a quote, so they show immediately too.

## What speed does not cover: settlement

Everything above is the time *you* spend waiting on the app. Once you sign, the swap is carried out by the protocol you picked, and how long it takes to arrive depends on that protocol and on the chains involved, not on us. Here is what each protocol estimated for the quotes we measured today:

| Swap | Relay | NEAR Intents | Chainflip |
|---|---|---|---|
| 1 ETH → USDC (Ethereum to Arbitrum) | ~1 s | ~46 s | ~2.7 min |
| 0.5 ETH (Arbitrum to Base) | ~2 s | ~27 s | not offered |
| 1,000 USDC (Base) → ETH | ~4 s | ~44 s | not offered |
| 500 USDC → SOL | not offered | ~42 s | ~2.7 min |
| 0.1 BTC → ETH | not offered | ~14 min | ~7 min |

These are the protocols' own estimates, shown on every quote, not our measurements of finished swaps. Swaps out of Bitcoin are slow everywhere for the same reason: the deposit has to be confirmed on the Bitcoin network before anything can happen. Between EVM chains, Relay often settles in seconds because it fills from market makers' own inventory.

You can follow a swap in the Activity tab, with a link to the protocol's own explorer wherever the protocol provides one.

## How we measured

- **Quotes:** the same streaming endpoint the swap form uses, five pairs, three runs each, timed from the request to each protocol's answer.
- **Balances:** the same streaming endpoint the wallet panel uses, for vitalik.eth (0xd8dA…6045), four runs at least ten seconds apart so no cached answer was reused.
- **Page load:** four loads in a fresh Chromium context each time (no cache, no cookies), desktop viewport, stopping when the Route tile named a protocol.
- **Where:** from Istanbul, through the same Cloudflare and server path every visitor uses, on 10 October 2026.

Your numbers will differ with your distance from the server, your connection and how busy the protocols are. If they are much worse, we would like to know.

## Try it

Open [swap.shieldz.cash](https://swap.shieldz.cash), type an amount, and count. There is no account and no sign-up; you swap from your own wallet, and the service fee is shown on every quote ([how our fees compare](/blog/crypto-swap-fees-compared)). For how routing and custody work in more depth, see the [Shieldz Swap guide](/blog/cross-chain-crypto-swap).
