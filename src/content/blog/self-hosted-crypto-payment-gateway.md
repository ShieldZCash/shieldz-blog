---
title: "Self-Hosted Crypto Payment Gateway: 4 Free Options Compared (2026)"
description: "The 4 self-hosted crypto payment gateways compared: BTCPay, Bitcart, PayRam, DV.net. All $0-fee and non-custodial. Plus a no-server alternative."
pubDate: 2026-07-23
author: "Deniz Yanbollu"
tags: ["self-hosted", "crypto payment gateway", "btcpay", "non-custodial", "comparison"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/self-hosted-crypto-payment-gateway.png"
---

When people search for a self-hosted crypto payment gateway, they are almost never in love with running servers. They want three specific things: no platform fee, no custody of their money by a third party, and control over the checkout. Self-hosting is just the path they assume they have to take to get them.

This guide is honest about the trade-off. [BTCPay Server](https://btcpayserver.org) is the reference self-hosted option and it genuinely delivers those three things. But it asks you to run and maintain infrastructure. [Shieldz](https://shieldz.cash) delivers the same $0-fee, non-custodial outcome as a hosted service, so you skip the server without giving up custody. Both are valid. The right pick depends on how much you want to operate yourself.

**Updated August 2026:** added a side-by-side of the four self-hosted options and a note on open-source, no-server alternatives, from our open [dataset of 86 crypto payment gateways](/blog/custody-gap-crypto-payment-gateways).

## What a self-hosted crypto payment gateway is

A self-hosted crypto payment gateway is payment software you install and run on infrastructure you control, rather than a service you sign into. Instead of a company generating addresses and holding a balance for you, your own instance derives the receiving addresses, watches the blockchain, and reveals the payment to your checkout. The keys, the server, and the uptime are all yours.

Three pieces make it work: **the software** (an admin panel, a checkout, and a webhook or API layer), **a wallet** you own (a seed or an extended public key the software derives addresses from), and **a way to read the chain** (a full node, a pruned node, or a connection to one). Because the money settles to an address only you control, a properly self-hosted gateway is non-custodial by construction: there is no company wallet in the middle to freeze, delay, or surveil.

This is the opposite end of the spectrum from a custodial processor like BitPay or Coinbase, where the provider receives first and pays you out later. It is also different from a hosted non-custodial gateway, which settles to your wallet like self-hosting but runs the software for you. The rest of this guide compares all three so you pick the one that matches what you actually want.

## Why "self-hosted" is really a proxy for three wants

Break the search intent down and the server is the least important part:

- **No platform fee.** You do not want a processor skimming 1 to 3 percent of every sale.
- **No custody.** You do not want your coins landing in a company's wallet first, where they can be frozen, delayed, or surveilled.
- **Control.** You want the checkout to be yours, not a rented widget that can change terms.

Self-hosting gets you all three, but so does a [non-custodial](/blog/non-custodial-crypto-payment-gateway) hosted gateway. The distinction that actually matters is custody, not where the software runs. A hosted app that never touches your funds gives you the custody guarantee without the ops burden.

## The self-hosted options, compared

Only **4 of the 86 crypto payment gateways** in [our open dataset](/blog/custody-gap-crypto-payment-gateways) are genuinely self-hosted software you run yourself. All four are open-source, non-custodial, and charge a **$0 platform fee**; they differ mostly in coin coverage and how much you have to operate.

| Gateway | Fee | Coins | Lightning | Since | Known for |
|---|---|---|---|---|---|
| [BTCPay Server](https://btcpayserver.org) | $0 | BTC + altcoins via plugins | Yes | 2017 | The reference: largest community, most integrations |
| [Bitcart](https://bitcart.ai) | $0 | 50+ (incl. Monero) | Yes | 2019 | BTCPay alternative, wider coin coverage out of the box |
| [PayRam](https://www.payram.com) | $0 | ~20 | No | 2023 | Self-hosted, popular with iGaming; orchestration add-ons |
| [DV.net](https://dv.net) | $0 | ~50 | No | 2023 | Open-source, the merchant owns the wallets and seed |

**How to read it.** BTCPay is the safe default: the biggest ecosystem, the most plugins and documentation, and Lightning built in, at the cost of being Bitcoin-first (altcoins need plugins). Bitcart is the pick if you want more coins, including Monero, without plugin wrangling. PayRam and DV.net are newer and multi-coin, aimed at merchants who want a self-hosted stack without BTCPay's full-node footprint. All four keep custody with you and charge nothing but network fees.

## The four options in depth

**BTCPay Server** is the reference implementation and the safest default. It is Bitcoin-first, deployed with Docker, and can run its own full node or connect to an existing one. Beyond a checkout it ships point-of-sale, crowdfunding and pull-payment apps, Lightning support, and the largest plugin and integration ecosystem of any self-hosted gateway. Altcoins are available through community plugins rather than out of the box. If you want the most documentation, the most community help, and the most battle-tested option, this is it.

**Bitcart** is the pragmatic multi-coin alternative. It is open-source, Docker-deployed, and supports around 50 assets including Monero straight away, without hunting for plugins. It carries Lightning too. If your customers pay in more than Bitcoin and you would rather not assemble a plugin stack, Bitcart covers more ground with less assembly.

**PayRam** is a newer self-hosted gateway aimed at merchants who want a lean stack without running a Bitcoin full node. It leans toward EVM chains and stablecoins, adds orchestration and sweeping features, and is popular in higher-risk verticals like iGaming. It trades BTCPay's maturity for a lighter multi-chain footprint.

**DV.net** is open-source self-hosted software where the merchant explicitly owns the wallets and the seed. It is multi-coin (around 50 assets), stablecoin-friendly, and built for teams that want the code on their own servers with no third party anywhere in the flow. Like the others, it charges nothing but network fees.

All four share the same core promise: your keys, your server, $0 platform fee. They differ on coin coverage, Lightning, and how much infrastructure you are signing up to run.

## The middle ground: open-source, but no server

Not every "run it yourself" option is a full server. Some are open-source plugins or protocols that keep funds non-custodial without a VPS: [GoUrl](https://gourl.io) and MyCryptoCheckout are WordPress plugins that pay direct to your wallet, and [Solana Pay](/blog/50-crypto-payment-gateways-compared) is an open protocol for direct merchant payments. They are lighter than a self-hosted node but still put the software, and the responsibility, on you.

## What self-hosting actually costs you

BTCPay is free software, but "free" here means no license fee, not no cost. To self-host it properly you provision a server, keep it patched, and usually sync a full node, which can take hours to days and needs ongoing disk and uptime. If the server goes down, your checkout goes down with it. That is a fair trade for maximum sovereignty, and for some merchants it is exactly right. For most, it is more operations than they signed up for.

<figure style="margin:28px 0">
  <a href="/blog/charts/time-to-first-link.svg"><img src="/blog/charts/time-to-first-link.svg" alt="Illustrative time to a first payment link: BTCPay self-host about 46 minutes, Stripe about 23 minutes, a custodial crypto API about 14 minutes, and Shieldz about 1 second with one URL and no signup." width="760" height="413" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Self-hosting buys sovereignty at the cost of setup and upkeep. A non-custodial hosted gateway keeps the custody guarantee and drops the server.</figcaption>
</figure>

## The security trade-off: you become the custodian

Self-hosting removes the third-party custodian, which is the point, but it does not remove custody. It moves custody to you. That is a real responsibility, not a footnote:

- **Keys and seed.** Your instance derives addresses from a wallet you control. Back up the seed or extended key offline, and treat a server compromise as a wallet compromise if hot keys live on the box.
- **Uptime.** If the server is down, your checkout is down and payments cannot be detected until it is back. You own the monitoring.
- **Patching.** The software, the OS, and any node need updates. A self-hosted gateway that is never patched is a liability, not an asset.
- **Node integrity.** If you run your own node, you get maximum privacy and trust-minimization, at the cost of sync time, disk, and bandwidth. Connecting to someone else's node trades some of that back for convenience.

None of this is a reason to avoid self-hosting. It is the honest bill for sovereignty. The question is whether you want to hold the keys and run the box, or keep the keys and skip the box.

## Self-hosted vs hosted vs custodial: the decision matrix

Three models, one table. The row that matches your priorities is your answer.

| | Self-hosted (BTCPay, Bitcart, PayRam, DV.net) | Hosted non-custodial (Shieldz) | Custodial processor (BitPay, Coinbase, etc.) |
|---|---|---|---|
| **Platform fee** | $0 | $0 | ~1% typical |
| **Custody** | You (your keys, your server) | You (settles to your wallet) | The provider holds funds first |
| **KYC to start** | None | None | Usually required |
| **Setup** | High: server, node, updates | Minutes: paste a wallet address | Account signup + verification |
| **Uptime is your job** | Yes | No | No |
| **Coins** | 1 to ~50 depending on option | 20+, swap-settled | Varies |
| **Best when** | Sovereignty is the goal itself | You want no fee and no custody, no server | You need fiat payout and accept custody |

The custody column is the one that actually decides risk. Self-hosted and hosted-non-custodial both keep it with you; only the custodial column hands it away. We break that finding down across the whole market in the [custody gap report](/blog/custody-gap-crypto-payment-gateways): of 86 gateways, just 4 are self-hosted and only about a quarter are non-custodial at all.

## The no-server alternative: hosted but non-custodial

Shieldz is not self-hosted, and this post is not going to pretend otherwise. It is a hosted gateway. The point is that it keeps the two guarantees you actually cared about:

- **$0 platform fee.** Same as BTCPay. The buyer pays only network gas.
- **Non-custodial.** Funds settle straight to a wallet you control. Shieldz holds no balance and cannot freeze or withdraw, and you can [verify that claim yourself](https://shieldz.cash/verify).

What you give up versus self-hosting is running the box. What you gain is being live in under a minute: paste a wallet address, get a hosted checkout or a [crypto invoice](/blog/crypto-invoice-generator), and share it. No VPS, no node sync, no updates, no uptime to babysit.

## Which one should you choose

Pick **self-hosted BTCPay** if sovereignty is the goal in itself: you want to run your own node, you are comfortable operating a server, and you accept the setup and maintenance in exchange for depending on no one.

Pick **a non-custodial hosted gateway like Shieldz** if what you wanted from "self-hosted" was really no fees and no custody, and you would rather not run infrastructure to get them. You still never hand over custody, and there is [no signup or KYC](/blog/how-to-accept-crypto-payments) to start.

If you are still comparing broadly, the [best free crypto payment gateways](/blog/best-free-crypto-payment-gateways-2026) roundup ranks the options by how free they really are, and [what a crypto payment gateway is](/blog/what-is-a-crypto-payment-gateway) covers the fundamentals.

## When to switch, and when not to

Start self-hosted if sovereignty is the goal and you have the operations capacity to keep a server and node healthy indefinitely. Start with a hosted non-custodial gateway if you want to be live today and keep custody, and revisit self-hosting later if your volume or threat model justifies running your own stack. Because both models settle to a wallet you already control, there is no lock-in either way: you are moving software, not migrating a balance out of someone else's account. That portability is itself a property of never giving up custody in the first place.

## FAQ

**Is Shieldz self-hosted?**
No. Shieldz is a hosted, non-custodial gateway. It keeps the $0-fee and no-custody properties people want from self-hosting, without you running a server.

**What is the best self-hosted crypto payment gateway?**
BTCPay Server is the leading self-hosted, open-source, non-custodial option. It is free software but you provide and maintain the infrastructure.

**Do I need to run a full node?**
With BTCPay, typically yes for the best experience. With a hosted non-custodial gateway like Shieldz, no. You only need a wallet address.

**Is a hosted gateway still non-custodial?**
It can be. Non-custodial means funds settle to your own wallet and the gateway never holds them. That is a property of the design, not of where the software runs.

**Do either charge a platform fee?**
Neither BTCPay nor Shieldz charges a platform fee. You pay only the blockchain network fee.

**What are the alternatives to BTCPay Server?**
The main self-hosted alternatives are Bitcart (open-source, 50+ coins including Monero, Lightning), PayRam and DV.net (both newer, multi-coin, self-hosted). Lighter open-source options that need no server include the GoUrl and MyCryptoCheckout WordPress plugins.

**Which self-hosted crypto payment gateway supports the most coins?**
Among the self-hosted options, Bitcart and DV.net support roughly 50 coins each, more than BTCPay's Bitcoin-first default (which adds altcoins via plugins). All are $0-fee and non-custodial.

**Is a self-hosted crypto payment gateway free?**
The software is free and open-source (BTCPay, Bitcart, PayRam, DV.net all charge a $0 platform fee), but self-hosting is not zero-cost: you pay for the server, and you spend time on setup, updates and uptime. "Free" means no license and no processor cut, not no operating cost.

**Can I run a crypto payment gateway without a full node?**
Often yes. Some self-hosted setups connect to an external node instead of syncing their own, and lighter open-source options like the GoUrl or MyCryptoCheckout plugins avoid a node entirely. A hosted non-custodial gateway needs no node or server at all, just a wallet address.

**Is self-hosting more private than a hosted gateway?**
Running your own node gives you the strongest privacy and trust-minimization, since no third party sees your transactions. A hosted gateway trades some of that for convenience. If privacy of the payment link itself is the goal, note that non-custodial does not automatically mean private; that is a separate property.

**Is self-hosted the same as non-custodial?**
Self-hosted is almost always non-custodial, because funds settle to a wallet you control. But the reverse is not required: a hosted gateway can also be non-custodial. Custody is about who holds the keys, not where the software runs.

## Get paid without the server

You do not have to run infrastructure to keep custody of your money. Create a non-custodial checkout in seconds with the [payment link generator](https://shieldz.cash/tools/payment-link), read [how to accept crypto payments](/blog/how-to-accept-crypto-payments) for the full setup, or compare the field in the [best free crypto payment gateways](/blog/best-free-crypto-payment-gateways-2026) guide.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is Shieldz self-hosted?", "acceptedAnswer": { "@type": "Answer", "text": "No. Shieldz is a hosted, non-custodial gateway. It keeps the $0-fee and no-custody properties people want from self-hosting, without you running a server." } },
    { "@type": "Question", "name": "What is the best self-hosted crypto payment gateway?", "acceptedAnswer": { "@type": "Answer", "text": "BTCPay Server is the leading self-hosted, open-source, non-custodial option. It is free software but you provide and maintain the infrastructure." } },
    { "@type": "Question", "name": "Do I need to run a full node?", "acceptedAnswer": { "@type": "Answer", "text": "With BTCPay, typically yes for the best experience. With a hosted non-custodial gateway like Shieldz, no. You only need a wallet address." } },
    { "@type": "Question", "name": "Is a hosted gateway still non-custodial?", "acceptedAnswer": { "@type": "Answer", "text": "It can be. Non-custodial means funds settle to your own wallet and the gateway never holds them. That is a property of the design, not of where the software runs." } },
    { "@type": "Question", "name": "Do either charge a platform fee?", "acceptedAnswer": { "@type": "Answer", "text": "Neither BTCPay nor Shieldz charges a platform fee. You pay only the blockchain network fee." } },
    { "@type": "Question", "name": "What are the alternatives to BTCPay Server?", "acceptedAnswer": { "@type": "Answer", "text": "The main self-hosted alternatives are Bitcart (open-source, 50+ coins incl. Monero, Lightning), PayRam and DV.net (newer, multi-coin, self-hosted). Lighter no-server options include the GoUrl and MyCryptoCheckout WordPress plugins." } },
    { "@type": "Question", "name": "Which self-hosted crypto payment gateway supports the most coins?", "acceptedAnswer": { "@type": "Answer", "text": "Among self-hosted options, Bitcart and DV.net support roughly 50 coins each, more than BTCPay's Bitcoin-first default. All are $0-fee and non-custodial." } },
    { "@type": "Question", "name": "Is a self-hosted crypto payment gateway free?", "acceptedAnswer": { "@type": "Answer", "text": "The software is free and open-source and charges no platform fee, but self-hosting still costs a server plus your time on setup, updates and uptime. Free means no license and no processor cut, not no operating cost." } },
    { "@type": "Question", "name": "Can I run a crypto payment gateway without a full node?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes. Some self-hosted setups connect to an external node, and lighter options like the GoUrl or MyCryptoCheckout plugins avoid a node entirely. A hosted non-custodial gateway needs no node or server at all." } },
    { "@type": "Question", "name": "Is self-hosted the same as non-custodial?", "acceptedAnswer": { "@type": "Answer", "text": "Self-hosted is almost always non-custodial because funds settle to a wallet you control, but a hosted gateway can also be non-custodial. Custody is about who holds the keys, not where the software runs." } }
  ]
}
</script>
