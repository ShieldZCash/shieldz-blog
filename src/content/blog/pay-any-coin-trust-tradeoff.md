---
title: "The pay-any-coin trust tradeoff: direct settlement vs swap protocols"
description: "When a buyer pays a different coin than you settle in, something must convert it. What that means for custody, and why we kept the two paths separate."
pubDate: 2026-06-27
author: "Deniz Yanbollu"
tags: ["non-custodial", "design"]
---

A reviewer recently pushed back on one of our claims, and the pushback was fair. The site said two things that sit in tension: that payments go straight from the buyer's wallet to yours, and that a buyer can pay almost any coin and have it converted to the token you settle in. Cross-asset conversion needs something to do the converting. So which is it?

The honest answer is that Shieldz has two settlement paths, and they are not the same.

## Direct settlement is a pure wallet-to-wallet transfer

If a buyer pays the same token you receive, for example they send USDC on Base and you settle in USDC on Base, the payment is a normal on-chain transfer to an address derived from your own key. Only two wallets are involved. Shieldz watches the chain and tells you it landed. There is no balance on our side, no intermediary, nothing to freeze. This is the default, and it is the strictly non-custodial path.

## Pay-any-coin routes through independent swap protocols

If a buyer wants to pay a different coin, the conversion is performed by independent, non-custodial swap protocols (NEAR, Chainflip, Relay), and the settled token is delivered to your own wallet. The full mechanics, quoting, ranking by net output, route health and refund paths, are in [how swap routing really works](/blog/cross-chain-crypto-payments). This is genuinely useful, because it lets a customer pay with whatever they hold. But it is not a simple two-wallet transfer. For that one conversion leg, you are relying on those third-party protocols.

What does not change between the two paths: Shieldz holds no balance and no keys at any step, and takes no fee on the swap.

That same swap leg can also be run confidentially, so the buyer-to-seller link is not posted to a public order book. See [private crypto payments](/blog/private-crypto-payments) for how the confidential route works and what it does and does not hide.

## Why we did not just paper over it

The easy move would have been to keep saying "wallet to wallet" everywhere and hope nobody asked. We did the opposite. The blanket claim is now scoped: direct settlement is wallet to wallet, the swap path is via independent non-custodial protocols, and both are spelled out on the [trust page](https://shieldz.cash/trust) and in the [FAQ](https://shieldz.cash/faq).

If you want the purest model with the smallest trust surface, accept the same coin you settle in. If you value letting customers pay in anything, the swap path is there, with an honest description of what it depends on. That choice should be yours to make with full information, not ours to hide.

You can verify the non-custodial core yourself: the key-derivation code is open source at [shieldz.cash/verify](https://shieldz.cash/verify).

Want to use the same routes for your own coins rather than a checkout? [Shieldz Swap](/blog/cross-chain-crypto-swap) is the non-custodial cross-chain crypto swap built on them: every protocol's quote side by side, signed from your own wallet.
