---
title: "Open-Source Crypto Payment Gateways (2026): 9 Projects, Licenses and Activity"
description: "Open-source crypto payment gateways compared by license, GitHub activity, coins and whether you need a server: BTCPay, Bitcart, SHKeeper, DV.net and more."
pubDate: 2026-10-23
author: "Deniz Yanbollu"
tags: ["open source", "crypto payment gateway", "self-hosted", "btcpay", "comparison"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/open-source-crypto-payment-gateways.png"
---

An open-source crypto payment gateway lets you read, audit and run the code that handles your money. That matters more in crypto than almost anywhere else, because the gateway software decides which address a buyer pays and when an order counts as paid. Being able to check that logic, or hire someone to check it, is the whole point.

The catch is that "open source" gets used loosely. Several gateways that call themselves self-hosted ship closed binaries, and some popular repos haven't been touched in years. So we pulled the GitHub data for every open-source project in our [dataset of 93 crypto payment gateways](/blog/93-crypto-payment-gateways-compared): license, stars and last push, all as of October 23, 2026. This is the companion to our [PayRam vs BTCPay Server vs Shieldz](/blog/payram-alternatives) comparison, which covers one of the gateways that didn't make this list.

## What counts as open source here

We only include a project if the code that actually processes payments is public under an open-source license (MIT, GPL and similar). That rules out three common cases:

- **Closed binaries you host yourself.** [PayRam](/blog/payram-alternatives) is self-hosted, but the gateway ships as a prebuilt Docker image. Its GitHub holds install scripts and plugins, not the gateway.
- **Hosted gateways with open SDKs.** Most hosted gateways publish open-source client libraries but run closed servers. Shieldz is one of them, more on that below.
- **"Source available" code** under licenses that restrict commercial use.

## The 9 projects at a glance

<figure style="margin:28px 0">
  <a href="/blog/charts/oss-gateways-github.svg"><img src="/blog/charts/oss-gateways-github.svg" alt="GitHub stars of open-source crypto payment gateways in October 2026: BTCPay Server 7,823, Solana Pay 1,796, LNbits 1,244, Bitcart 996, SHKeeper 637, GoUrl 560, DePay widgets 136, MyCryptoCheckout 33, DV.net 25. GoUrl and DePay have had no push in over 90 days." width="920" height="620" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">BTCPay Server has more stars than the next four combined. Stars measure attention, not quality: DV.net is young and small on GitHub but actively developed.</figcaption>
</figure>

| Project | License | What it is | Needs a server | Coins | Fee | Last push |
|---|---|---|---|---|---|---|
| [BTCPay Server](https://github.com/btcpayserver/btcpayserver) | MIT | Full gateway | Yes | Bitcoin + Lightning, altcoins via plugins | 0% | Oct 2026 |
| [Bitcart](https://github.com/bitcart/bitcart) | MIT | Full gateway | Yes | BTC, LTC, BCH, XMR, ETH, TRX, USDT and more | 0% | Oct 2026 |
| [SHKeeper](https://github.com/vsys-host/shkeeper.io) | GPL-3.0 | Full gateway | Yes (k3s + Helm) | BTC incl. Lightning, ETH, XMR, SOL, TRX, USDT/USDC on several chains, more | 0% | Sep 2026 |
| [DV.net](https://github.com/dv-net/dv-merchant) | MIT | Full gateway | Yes | ~50 | 0% | Oct 2026 |
| [LNbits](https://github.com/lnbits/lnbits) | MIT | Lightning accounts + extensions | Yes, plus a Lightning funding source | Lightning | 0% | Oct 2026 |
| [MyCryptoCheckout](https://github.com/MyCryptoCheckout/wordpress) | GPL (WordPress plugin) | WooCommerce plugin | No, runs in WordPress | ~100 | 0%, $49/year unlimited plan | Aug 2026 |
| [GoUrl](https://github.com/cryptoapi/Payment-Gateway) | MIT | PHP class + WordPress plugin | No | BTC, BCH, DASH, DOGE, LTC and other older coins | 1.5% | May 2024 |
| [Solana Pay](https://docs.solanapay.com) | MIT | Payment protocol and SDK | No | SOL and SPL tokens | Network fees only | Oct 2026 |
| [DePay widgets](https://github.com/DePayFi/widgets) | MIT | Payment widgets | No | Tokens on its supported chains, converted on the fly | 0% self-hosted, 1.5% hosted | Mar 2026 |

Fees and coin counts come from our [open dataset](/blog/custody-gap-crypto-payment-gateways) and each project's README. Stars and last push come from the GitHub API on October 23, 2026.

## Full gateways you run yourself

These four are complete payment processors: invoices, a checkout page, webhooks and store plugins, all on your own server.

**BTCPay Server** is the reference. MIT-licensed since 2017, with by far the largest community, the most integrations and Lightning built in. It is Bitcoin-first, so stablecoins and altcoins come through plugins. If you want the most battle-tested open code and the most people who can help you, start here.

**Bitcart** covers more coins out of the box, including Monero, ETH, TRX and USDT, without hunting for plugins. It is written in Python and also MIT-licensed. Pick it over BTCPay when your buyers pay in more than Bitcoin.

**SHKeeper** has a broad coin list, from Bitcoin and Lightning to Monero, Solana, and USDT and USDC on several chains. It is the only GPL-3.0 project here, which matters if you plan to modify and redistribute it. It installs on k3s with Helm, a heavier setup than a single Docker container.

**DV.net** is the youngest and smallest on GitHub, but its Go backend is actively developed, with pushes this week. The merchant holds the wallets and the seed. It is worth a look if you want a modern stablecoin-friendly stack and don't mind a smaller community.

Our [self-hosted gateway comparison](/blog/self-hosted-crypto-payment-gateway) goes deeper on running these, including server costs and the node question.

## Open source without a server

Not every open-source option means renting a VPS.

**MyCryptoCheckout** is a WooCommerce plugin that runs inside your WordPress site and sends payments wallet to wallet. It is free to start, with a $49/year plan for unlimited use. Its GitHub repo is small because the plugin is distributed through WordPress.org.

**GoUrl** is one of the oldest options (2014) and still listed in many comparisons, but its main repository hasn't had a push since May 2024 and it charges 1.5% on website payments. We would not start a new store on it.

**LNbits** sits in between. It is a Lightning accounts system with extensions for point-of-sale, paywalls and invoices, but it needs a Lightning funding source behind it, such as your own node.

## Building blocks for developers

**Solana Pay** is a protocol, not a gateway: a standard for payment requests on Solana, with an SDK. You build the checkout yourself. One thing to know in 2026: its old GitHub repository now hosts pay.sh, a CLI for x402 and MPP agent payments, while the Solana Pay spec lives at [docs.solanapay.com](https://docs.solanapay.com).

**DePay widgets** are MIT-licensed payment widgets that convert the buyer's token on the fly. Self-hosting them is free, and DePay's hosted service charges 1.5%. The widgets repo hasn't had a push since March 2026.

## Where Shieldz fits (honestly)

[Shieldz](https://shieldz.cash) is not an open-source gateway. It is a hosted, non-custodial service: you paste a wallet address, buyers pay straight to it, and Shieldz never holds the funds. The platform fee is $0.

What is open is everything you integrate with. The [Node, Python, Rust and PHP SDKs](https://shieldz.cash/sdks), the MCP server, the CLI and the WHMCS and Azuriom modules are all MIT-licensed on [GitHub](https://github.com/ShieldZCash), and our gateway dataset is CC-BY-4.0. And the [verify page](https://shieldz.cash/verify) shows why Shieldz can't move your money: it only ever sees public keys and receive addresses, never anything that can spend.

So the honest split is this. If you need to read and run the server code yourself, pick one of the full gateways above. If what you actually want is no fee, your own custody and no KYC, and running a server is a cost rather than a goal, Shieldz gives you that in a few minutes. Try it with the [payment link generator](https://shieldz.cash/tools/payment-link).

## How to choose

- **Bitcoin and Lightning first, biggest community:** BTCPay Server.
- **Many coins including Monero, simple Docker setup:** Bitcart.
- **Broad coin list including Lightning and Monero, and you're comfortable with Kubernetes:** SHKeeper.
- **WordPress store, no server:** MyCryptoCheckout, or the [Shieldz WooCommerce plugin](/blog/accept-crypto-payments-woocommerce) if a hosted non-custodial gateway is fine.
- **Building your own checkout on Solana:** Solana Pay.
- **You were looking at PayRam:** it isn't open source. Read [PayRam vs BTCPay Server vs Shieldz](/blog/payram-alternatives).

## FAQ

**What is the best open-source crypto payment gateway?**
BTCPay Server, for most people. It is MIT-licensed, actively developed and has the largest community. Bitcart and SHKeeper are better fits if you need many coins out of the box.

**Is PayRam open source?**
No. PayRam is self-hosted, but the gateway ships as a closed Docker image. Only its install scripts, plugins and MCP server are on GitHub.

**Is Shieldz open source?**
The Shieldz service is not. Its SDKs, MCP server, CLI and plugins are MIT-licensed, and payments go straight to your own wallet, so Shieldz never holds funds.

**Do I need a server for an open-source crypto gateway?**
For a full gateway like BTCPay, Bitcart, SHKeeper or DV.net, yes. Plugins like MyCryptoCheckout run inside WordPress, and protocols like Solana Pay run in your own app.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the best open-source crypto payment gateway?", "acceptedAnswer": { "@type": "Answer", "text": "BTCPay Server, for most people. It is MIT-licensed, actively developed and has the largest community. Bitcart and SHKeeper are better fits if you need many coins out of the box." } },
    { "@type": "Question", "name": "Is PayRam open source?", "acceptedAnswer": { "@type": "Answer", "text": "No. PayRam is self-hosted, but the gateway ships as a closed Docker image. Only its install scripts, plugins and MCP server are on GitHub." } },
    { "@type": "Question", "name": "Is Shieldz open source?", "acceptedAnswer": { "@type": "Answer", "text": "The Shieldz service is not. Its SDKs, MCP server, CLI and plugins are MIT-licensed, and payments go straight to your own wallet, so Shieldz never holds funds." } },
    { "@type": "Question", "name": "Do I need a server for an open-source crypto gateway?", "acceptedAnswer": { "@type": "Answer", "text": "For a full gateway like BTCPay, Bitcart, SHKeeper or DV.net, yes. Plugins like MyCryptoCheckout run inside WordPress, and protocols like Solana Pay run in your own app." } }
  ]
}
</script>
