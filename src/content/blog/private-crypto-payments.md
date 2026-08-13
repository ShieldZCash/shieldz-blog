---
title: "Private Crypto Payments: How Confidential, Unlinkable Routing Works"
description: "Private crypto payments that unlink buyer and seller: confidential NEAR routing, non-custodial, no KYC, settled straight to your own wallet, only network gas."
pubDate: 2026-07-18
author: "Deniz Yanbollu"
tags: ["private crypto payments", "confidential payments", "crypto", "privacy", "non-custodial"]
eyebrow: "Explainer"
image: "https://shieldz.cash/blog/og/private-crypto-payments.png"
---

Almost every crypto payment is a permanent public record. When a customer pays you in USDC or ETH, anyone can open a block explorer and see their wallet paying your wallet, the exact amount, forever. For a payment rail, that is a strange default: a card payment is not published to the world, but a "crypto payment" usually is. Private crypto payments fix the part that leaks the most, without giving up self-custody.

Shieldz now routes swap-settled payments **confidentially**. The customer can pay in almost any coin, the conversion to your settlement token runs through a shielded route, and the public link between "this buyer" and "this seller" is broken. This post is an honest walk-through of what that actually shields, what it does not, and how to turn it on. It is a companion to our piece on the [pay-any-coin trust tradeoff](/blog/pay-any-coin-trust-tradeoff) and on the [non-custodial crypto payment gateway](/blog/non-custodial-crypto-payment-gateway) model.

## What is actually public in a crypto payment

A swap-settled crypto payment has three stages, and only one of them can be made confidential. Being precise about this is the whole point, because a lot of "private crypto" marketing quietly overclaims.

<figure style="margin:28px 0">
  <a href="/blog/charts/confidential-payment-flow.svg"><img src="/blog/charts/confidential-payment-flow.svg" alt="Three-stage diagram of a confidential crypto payment. Stage 1, the buyer's deposit on the source chain, is public. Stage 2, the swap conversion through NEAR confidential intents, is shielded and highlighted in green. Stage 3, the settlement to the merchant's wallet, is public. Confidential routing breaks the link between stage 1 and stage 3." width="760" height="360" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Both ends of a payment are public on-chain transfers. Confidential routing shields the swap in the middle, which is the part that links the buyer to the seller.</figcaption>
</figure>

1. **The buyer's deposit is public.** They send their coin to a deposit address on the source chain. That transfer is a normal, visible on-chain transaction.
2. **The swap is confidential.** The conversion to your settlement token runs through NEAR's confidential intents. The amounts and the buyer-to-seller pairing are not exposed on a public order book.
3. **Your settlement is public.** The settled token lands in your own wallet as a normal on-chain transfer.

So confidential routing does not hide either end. It hides the **connection** between them. An observer watching the buyer sees money leave to a deposit address, not "paid merchant X." An observer watching your wallet sees funds arrive from a solver, not "received from buyer Y." The chain that would normally join those two facts is shielded.

## Who does it protect, honestly

It protects the **relationship**, and that cuts both ways.

- **For the buyer:** their wallet is not publicly recorded paying your specific business. Their spending is not linkable to your storefront on-chain.
- **For you, the seller:** individual payments are not traceable back to specific customers, so your revenue is not a public map of who bought what.

Here is the honest boundary. Confidential routing does **not** hide the total volume arriving at your settlement address (anyone watching that address still sees funds come in), and it does not hide the buyer's own outgoing transaction on their chain. It breaks linkability at the swap, which is the single most revealing part. It is unlinkable routing, not total anonymity, and we would rather say that plainly than sell you a promise the chain cannot keep.

## How the confidential route works

The confidential leg runs on **NEAR's confidential intents** through the [NEAR / Chainflip / Relay](/blog/pay-any-coin-trust-tradeoff) routing layer Shieldz already uses for pay-any-coin. When a merchant enables confidential mode, the swap quote is requested as a shielded intent, and the deposit inherits that setting, so the conversion itself is not posted to a public order book.

Nothing about the non-custodial model changes. Shieldz never holds the coins or the keys. The buyer's funds move to the deposit address, the shielded swap settles the token to **your own wallet**, and Shieldz only ever watches the chain to confirm it landed. You can [verify that yourself](https://shieldz.cash/verify). There is no platform fee, only the network's gas. And if you want the fully shielded coin end to end rather than a shielded swap leg, see [how to accept Zcash payments](/blog/how-to-accept-zcash-payments).

## Two modes: private-when-possible, or private-only

Confidential routing is pair-dependent. Some coins can be shielded today, some cannot yet. So a merchant gets two honest choices in the dashboard, plus off:

<table>
  <tr><th>Mode</th><th>What it does</th><th>Best for</th></tr>
  <tr><td><strong>Off</strong></td><td>Standard routing, best rate.</td><td>Merchants who do not need privacy.</td></tr>
  <tr><td><strong>When available</strong></td><td>Requests a shielded route per coin, and quietly falls back to the standard route when a pair cannot be shielded. A payment never fails just because privacy was not possible.</td><td>Most merchants. Privacy as pure upside, zero risk to completion.</td></tr>
  <tr><td><strong>Only</strong></td><td>Every payment must settle privately, or the coin is not offered. The checkout shows only coins that can actually route confidentially.</td><td>Merchants who want a hard privacy guarantee.</td></tr>
</table>

"When available" is the mode we recommend. It treats privacy as a bonus that never costs you a sale: if a coin can be shielded, it is, and if it cannot, the payment still completes on the standard rail. "Only" is stricter, for merchants where a public swap is simply not acceptable.

## The buyer sees it too

When a payment actually routes privately, the checkout shows a **Private routing** badge on the deposit screen. It is trust the customer can see, not just a claim in your marketing.

<figure style="margin:28px 0">
  <a href="/blog/img/private-routing-badge.png"><img src="/blog/img/private-routing-badge.png" alt="Shieldz hosted checkout deposit screen paying with USDC on Arbitrum, showing a green Private routing badge that reads: this payment is settled through a confidential swap, so the conversion is not linkable on a public order book." width="760" height="520" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The Private routing badge appears only when the payment truly routes confidentially, never as a blanket claim.</figcaption>
</figure>

## How it compares

<table>
  <tr><th>Approach</th><th>Unlinks buyer and seller</th><th>Custody</th><th>Coins accepted</th><th>Platform fee</th></tr>
  <tr><td><strong>Shieldz confidential routing</strong></td><td><strong>Yes</strong> (shielded swap)</td><td>Non-custodial</td><td>Pay in almost any coin</td><td><strong>$0</strong> (only gas)</td></tr>
  <tr><td>Shielded Zcash (z-to-z)</td><td>Yes (fully encrypted)</td><td>Non-custodial</td><td>ZEC only</td><td>Varies</td></tr>
  <tr><td>Standard USDC / ETH payment</td><td>No (fully public)</td><td>Depends</td><td>That coin</td><td>Varies</td></tr>
  <tr><td>Custodial "private" processor</td><td>Only from outsiders, not the processor</td><td>Custodial</td><td>Varies</td><td>Percentage cut</td></tr>
</table>

If you want the strongest possible on-chain privacy for a single coin, [shielded Zcash](/blog/how-to-accept-anonymous-crypto-donations) encrypts the sender, receiver, and amount outright. Confidential routing is the broader tool: it lets a customer pay in almost **any** coin and still breaks the buyer-to-seller link, settling to your wallet in your chosen token.

## An honest note on compliance

Privacy for a legitimate business and its customers is normal, and it is not the same as evading the law. A few honest points, the same ones we make everywhere: Shieldz screens paying addresses against the OFAC sanctions list, so confidential routing does not mean accepting sanctioned funds. Your business still has its own tax, accounting, and record-keeping obligations, which do not change because a rail is private. And, as above, this is unlinkable routing, not absolute anonymity. That is the honest version of "private crypto payments," and it is the one worth building on.

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"What does a confidential crypto payment actually hide?","acceptedAnswer":{"@type":"Answer","text":"It hides the link between the buyer and the seller at the swap layer. The buyer's deposit and the merchant's settlement are still normal on-chain transfers, but the conversion between them runs through NEAR's confidential intents, so an observer cannot trace this buyer paying this seller on a public order book. It is unlinkable routing, not total anonymity."}},
{"@type":"Question","name":"Is confidential routing non-custodial?","acceptedAnswer":{"@type":"Answer","text":"Yes. Shieldz never holds the coins or the keys. The shielded swap settles the token straight to the merchant's own wallet, and Shieldz only watches the chain to confirm it arrived. There is no platform fee, only network gas."}},
{"@type":"Question","name":"What is the difference between when-available and only mode?","acceptedAnswer":{"@type":"Answer","text":"When available requests a shielded route per coin and falls back to the standard route when a pair cannot be shielded, so a payment never fails just for privacy. Only mode requires every payment to settle privately and offers only coins that can route confidentially."}},
{"@type":"Question","name":"Does confidential routing hide my total revenue?","acceptedAnswer":{"@type":"Answer","text":"No. Anyone watching your settlement address still sees funds arrive. Confidential routing breaks the link to specific buyers, not the visibility of your settlement wallet. For fully encrypted amounts on a single coin, use shielded Zcash."}},
{"@type":"Question","name":"Which coins can be paid confidentially?","acceptedAnswer":{"@type":"Answer","text":"Confidential routing is NEAR-based and pair-dependent. Major coins and stablecoins on supported chains route confidentially today, and coverage grows as NEAR adds pairs. In when-available mode, coins that cannot be shielded still complete on the standard route."}}
]}
</script>

## Start accepting private crypto payments

Turn it on in the dashboard: enable pay-any-coin, then set confidential mode to **when available** or **only**. Every eligible payment routes privately, settles to your own wallet, and shows the customer a Private routing badge.

- Read the [pay-any-coin trust tradeoff](/blog/pay-any-coin-trust-tradeoff) to understand the swap layer honestly.
- See how the [non-custodial model](/blog/non-custodial-crypto-payment-gateway) keeps funds in your wallet.
- For a single fully-encrypted coin, learn to [accept anonymous crypto donations with shielded Zcash](/blog/how-to-accept-anonymous-crypto-donations).
- New to gateways? Start with [what is a crypto payment gateway](/blog/what-is-a-crypto-payment-gateway).

[Shieldz](https://shieldz.cash) is a non-custodial, no-KYC crypto payment gateway with a $0 platform fee. Payments settle straight to your wallet, and now they can settle privately too. [Read how it works](https://shieldz.cash/methodology) or [verify the non-custodial claim](https://shieldz.cash/verify).
