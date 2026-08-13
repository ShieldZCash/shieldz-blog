---
title: "How to Accept Zcash Payments Online (Including Shielded ZEC)"
description: "How to accept Zcash payments online, including shielded private ZEC, non-custodial and straight to your own wallet, no signup and $0 platform fee."
pubDate: 2026-07-14
author: "Deniz Yanbollu"
tags: ["zcash", "zec", "shielded", "crypto payment gateway", "how-to"]
eyebrow: "How-to"
image: "https://shieldz.cash/blog/og/how-to-accept-zcash-payments.png"
---

If you want to accept Zcash payments online, you have probably noticed the gap: most crypto payment processors either do not support ZEC at all, or only handle transparent transactions. The interesting part of Zcash, the shielded payment, is the part almost nobody supports. This guide shows how to accept Zcash payments online, including fully shielded ZEC, non-custodially and straight to a wallet you control.

It is a short, practical walkthrough: why merchants accept Zcash, the difference between shielded and transparent, and the exact steps to go live.

## Why accept Zcash

Zcash is the payment coin for customers who want privacy. In a shielded (z-to-z) transaction the amount, the sender, and the receiver are encrypted on-chain. That is exactly why privacy-minded buyers reach for it: VPN and hosting customers, privacy-focused digital sellers, journalists and [nonprofits taking anonymous donations](/blog/how-to-accept-anonymous-crypto-donations), and creators offering a private tip option.

The strategic angle for a merchant is competition. "Accept crypto" is crowded, but "accept shielded Zcash" is almost empty. Supporting it puts you in front of a small, underserved, high-intent audience that very few gateways can serve at all.

<figure style="margin:28px 0">
  <a href="/blog/img/custody-share.svg"><img src="/blog/img/custody-share.svg" alt="Bar chart showing custodial gateways hold 100 percent of a payment before it reaches you, while non-custodial options like Shieldz hold 0 percent, funds settle straight to your wallet." width="760" height="470" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">For a privacy coin especially, non-custodial matters: your ZEC never sits in a processor's account.</figcaption>
</figure>

## Shielded vs transparent Zcash

Zcash has two address types, and the distinction is the whole game.

**Transparent (t-addresses)** behave like Bitcoin. The transaction is public on the ledger: anyone can see the amount and the addresses. Accepting transparent ZEC gives you none of the privacy that people choose Zcash for.

**Shielded (z-addresses, Orchard and Sapling)** encrypt the transaction details. The payment still settles and confirms on-chain, but the amount and parties are hidden. This is the real Zcash. To accept it, your gateway has to watch shielded payments to a Unified Address, which is exactly the capability most processors lack.

## How to accept Zcash payments online, step by step

1. **Get a Zcash wallet** and locate its Unified Full Viewing Key (UFVK). A viewing key can see incoming payments but cannot spend them.
2. **Give the UFVK to a non-custodial gateway.** With [Shieldz](https://shieldz.cash/accept-zcash), you paste the viewing key and nothing else. The spending key never leaves you, so the gateway can watch but never move your funds.
3. **Create an invoice or a pay link.** Use the REST API for a per-order invoice, or generate a hosted pay link in seconds.
4. **The buyer pays shielded ZEC** to your Unified Address. Shieldz confirms it on-chain and fires a signed webhook. The funds are already in a wallet only you control, with nothing to withdraw and nothing to freeze.

## Why non-custodial matters more for a privacy coin

With a custodial processor, the customer's ZEC lands in the processor's wallet first, and you get paid out later. For a privacy coin this is doubly wrong: it inserts a third party that sees your revenue, and it recreates the exact freeze-and-hold risk that people chose Zcash to avoid. A [non-custodial crypto payment gateway](/blog/non-custodial-crypto-payment-gateway) settles the payment straight to your own Unified Address, so the privacy of the coin is not undone by the way you accept it. You can [verify the non-custodial claim yourself](https://shieldz.cash/verify).

## FAQ

**Can I accept shielded (private) Zcash payments online?**
Yes. A non-custodial gateway like Shieldz watches for shielded z-to-z payments to your Unified Address via your viewing key, not transparent-only.

**Do I need to hand over my Zcash spending key?**
No. You share only a view-only key (UFVK). The spending key never leaves you.

**What does it cost to accept Zcash?**
With Shieldz there is a $0 platform fee. You pay only the Zcash network fee.

**Do I need KYC or an account?**
No KYC to start. Paste a Zcash viewing key and you are live.

## Start accepting Zcash

Accepting Zcash online, including shielded ZEC, is a genuine differentiator that almost no other gateway offers. Set it up on the [accept Zcash page](https://shieldz.cash/accept-zcash), see the full [Zcash payment gateway](https://shieldz.cash/zcash-payment-gateway) details, or read about the [pay-any-coin trust tradeoff](/blog/pay-any-coin-trust-tradeoff) if you want the deeper privacy picture.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to accept Zcash payments online",
  "step": [
    { "@type": "HowToStep", "name": "Get a Zcash viewing key", "text": "Get a Zcash wallet and locate its Unified Full Viewing Key (UFVK), which can see incoming payments but cannot spend them." },
    { "@type": "HowToStep", "name": "Connect a non-custodial gateway", "text": "Give the UFVK to a non-custodial gateway like Shieldz. The spending key never leaves you." },
    { "@type": "HowToStep", "name": "Create an invoice or pay link", "text": "Use the REST API for a per-order invoice, or generate a hosted pay link." },
    { "@type": "HowToStep", "name": "Get paid in shielded ZEC", "text": "The buyer pays shielded ZEC to your Unified Address. Shieldz confirms it and fires a signed webhook, with funds settling straight to your wallet." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I accept shielded (private) Zcash payments online?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A non-custodial gateway like Shieldz watches for shielded z-to-z payments to your Unified Address via your viewing key, not transparent-only." } },
    { "@type": "Question", "name": "Do I need to hand over my Zcash spending key?", "acceptedAnswer": { "@type": "Answer", "text": "No. You share only a view-only key (UFVK). The spending key never leaves you." } },
    { "@type": "Question", "name": "What does it cost to accept Zcash?", "acceptedAnswer": { "@type": "Answer", "text": "With Shieldz there is a $0 platform fee. You pay only the Zcash network fee." } },
    { "@type": "Question", "name": "Do I need KYC or an account to accept Zcash?", "acceptedAnswer": { "@type": "Answer", "text": "No KYC to start. Paste a Zcash viewing key and you are live." } }
  ]
}
</script>
