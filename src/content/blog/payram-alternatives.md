---
title: "PayRam Alternatives (2026): PayRam vs BTCPay Server vs Shieldz"
description: "PayRam is a self-hosted crypto payment gateway. How it compares to BTCPay Server and Shieldz on cost, coins, custody, setup and who each one suits."
pubDate: 2026-10-23
author: "Deniz Yanbollu"
tags: ["payram", "self-hosted", "crypto payment gateway", "btcpay", "comparison"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/payram-alternatives.png"
---

PayRam is a self-hosted crypto payment gateway built around stablecoins: you install it on your own server, customers pay in USDC, USDT, Bitcoin and a handful of other assets, and the money sweeps to a cold wallet you control. It charges no percentage of your sales. That makes it a real option, and it is why people searching for it usually end up comparing it with two others: [BTCPay Server](https://btcpayserver.org), the long-standing self-hosted default, and hosted non-custodial gateways like [Shieldz](https://shieldz.cash) that skip the server entirely.

This post compares the three honestly, from PayRam's own docs and installer, the BTCPay project, and our [pricing page](https://shieldz.cash/pricing). If you want the wider field first, our [self-hosted crypto payment gateway comparison](/blog/self-hosted-crypto-payment-gateway) covers all four self-hosted options, including Bitcart and DV.net.

## PayRam in one paragraph

PayRam runs as a single Docker container (`payramapp/payram`) that its installer script pulls onto your Linux server, with PostgreSQL alongside. PayRam's site asks for Ubuntu 22.04+, 2 CPU cores (4 recommended), 6 to 8 GB of RAM and 15 GB of disk, and estimates a VPS at roughly $20 to $150 a month. Each customer gets their own permanent deposit address. A feature called SmartSweep then moves balances from those addresses into your cold wallet using a sweep contract, with a separate "hot wallet" holding a little ETH, POL or TRX to pay the gas. There is no signup, no KYB, and PayRam never holds your funds.

## The three side by side

| | PayRam | BTCPay Server | Shieldz |
|---|---|---|---|
| **Model** | Self-hosted | Self-hosted | Hosted, non-custodial |
| **Platform fee** | 0% | 0% | 0% |
| **Running cost** | Your VPS (~$20 to $150/mo, PayRam's estimate) | Your VPS, plus a node or a connection to one | $0 (optional $99/month Pro) |
| **Custody** | You (sweeps to your cold wallet) | You | You (settles straight to your wallet) |
| **KYC to start** | None | None | None |
| **Source code** | Closed (ships as a Docker image) | Open source (MIT) | Hosted service; SDKs and plugins are MIT |
| **Coins** | BTC, ETH, USDT, USDC, TRX, cbBTC, POL, PYUSD | Bitcoin + Lightning, altcoins via plugins | USDC/USDT on five chains, Bitcoin, shielded Zcash, other coins via swap |
| **Chains for stablecoins** | Ethereum, Base, Polygon, Tron | Plugins only | Five chains |
| **Lightning** | No | Yes | No |
| **Setup** | Install script, deploy a sweep contract per network, fund a hot wallet | Docker deploy, node sync or external node | Paste a wallet address |
| **Who keeps it online** | You | You | Shieldz |

Coin lists come from [PayRam's supported networks table](https://docs.payram.com/features/multi-currency-and-multi-chain-support) and the [Shieldz pricing page](https://shieldz.cash/pricing). PayRam lists TON as coming soon and accepts Solana stablecoins by settling them as USDC on Base.

<figure style="margin:28px 0">
  <a href="/blog/charts/payram-yearly-cost.svg"><img src="/blog/charts/payram-yearly-cost.svg" alt="Yearly running cost before network gas: PayRam on a $150 per month VPS costs $1,800 a year, PayRam on a $20 per month VPS $240, Shieldz Pro (optional) $99, Shieldz Free $0" width="920" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">None of the three takes a cut of your sales. The difference is the server: with PayRam you pay for one every month, with Shieldz you don't need one.</figcaption>
</figure>

## Where PayRam is the better pick

PayRam does some things that neither BTCPay nor a hosted gateway does as well.

- **Permanent deposit addresses per customer.** A player or user tops up the same address every time and gets credited automatically. For casinos, iGaming, exchanges and wallets with "deposit" flows, that model fits better than one invoice per purchase. It is the main reason PayRam is popular in those industries.
- **Stablecoins out of the box.** USDT and USDC on Ethereum, Base, Polygon and Tron work without plugins. With BTCPay you would be assembling that from community plugins.
- **Nothing outside your box.** Everything runs on your server, so no third party can switch you off. That is the same reason people pick BTCPay, with a stablecoin-first focus instead of a Bitcoin-first one.
- **Card onramps.** PayRam advertises card-to-crypto onramps for buyers who don't hold crypto yet.

If you run a deposit-style business at volume and already have someone comfortable operating Linux servers, PayRam is a sensible choice.

## What PayRam asks of you

The trade-offs are the usual self-hosting ones, plus a few specific to how PayRam sweeps funds.

- **A server you maintain.** 6 to 8 GB of RAM is a mid-sized VPS, not the cheapest tier. Updates, backups, monitoring and uptime are your job, and a down server means a checkout that doesn't work.
- **Gas for sweeping.** Deploying the sweep contract costs gas on each network, paid from your master wallet, and every sweep after that is paid from your hot wallet. These are small amounts but they are real, and someone has to keep the hot wallet topped up.
- **Several wallets to manage.** A master wallet (PayRam's docs say to keep it on a hardware wallet), a separate cold wallet, and a hot wallet per network family. For Bitcoin you enter a 12-word phrase that PayRam says it uses to derive addresses and then discards.
- **Closed source.** PayRam's GitHub holds the install scripts, plugins and an MCP server, but the gateway itself is a prebuilt Docker image. You can host it, but you cannot read or audit the code the way you can with BTCPay or Bitcart. If "open source" is one of the reasons you wanted self-hosting, PayRam doesn't meet it. Our [open-source crypto payment gateways](/blog/open-source-crypto-payment-gateways) roundup covers the ones that do.

## BTCPay Server: the open-source default

[BTCPay Server](https://btcpayserver.org) is the reference self-hosted gateway: MIT-licensed, around since 2017, with the largest plugin and integration ecosystem and Lightning built in. It is Bitcoin-first. Stablecoins and altcoins come through plugins rather than by default.

Choose BTCPay over PayRam if Bitcoin and Lightning are your main payment methods, or if being able to read the code matters to you. Choose PayRam over BTCPay if your buyers mostly pay in USDT and USDC and you want that working on day one. For a deeper look at BTCPay against a hosted service, see [BTCPay Server vs CoinGate](/blog/btcpay-server-vs-coingate).

## Shieldz: the same outcome without a server

Most people who look at self-hosted gateways want three things: no platform fee, no third party holding their money, and no KYC. Self-hosting is one way to get them. A hosted non-custodial gateway is another.

[Shieldz](https://shieldz.cash) gives you those three things as a hosted service. You paste a wallet address and get a checkout. Each payment goes straight from the buyer to your wallet, and Shieldz never holds the funds or your keys. There is no server, node, hot wallet or sweep contract, so there is nothing to top up with gas. The platform fee is $0. Buyers who pay through the checkout widget in a coin you don't settle in pay a 0.15% swap fee on their side, and your amount arrives in full.

<figure style="margin:28px 0">
  <a href="/blog/img/crypto-payment-checkout.png"><img src="/blog/img/crypto-payment-checkout.png" alt="The Shieldz hosted checkout for a $49 invoice, letting the buyer pick USD Coin, Ethereum, BNB, Avalanche or Tether, labelled non-custodial with $0 fees" width="1200" height="984" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The Shieldz hosted checkout. The buyer picks a coin and network, and the payment goes to the merchant's wallet, not to Shieldz.</figcaption>
</figure>

The trade-off is the mirror image of PayRam's. Shieldz keeps the service online, so you depend on it being up, though a confirmed payment is already in your wallet and nothing is ever held back. Shieldz doesn't give each customer a permanent deposit address the way PayRam does, so it fits invoice-style selling (stores, SaaS, digital goods, donations) better than casino-style top-ups. It also isn't something you can run on your own box.

It works with [WooCommerce](/blog/accept-crypto-payments-woocommerce), [Easy Digital Downloads](/blog/sell-digital-downloads-for-crypto-edd), [GiveWP](/blog/accept-crypto-donations-givewp), a [payment link](https://shieldz.cash/tools/payment-link) with no website at all, or the [API and SDKs](https://shieldz.cash/docs).

## Which one to pick

- **You run a casino, exchange or deposit-based app, mostly in stablecoins, and have ops people:** PayRam.
- **You take mostly Bitcoin and Lightning, or you need open source:** BTCPay Server.
- **You sell things, want $0 fees and your own custody, and don't want to run a server:** Shieldz.
- **You want to self-host and need more coins, including Monero:** look at Bitcart in our [self-hosted comparison](/blog/self-hosted-crypto-payment-gateway).

All three keep custody with you and none takes a percentage. The real question is whether you want to run a server, and that comes down to your business, not to which gateway is "better". For the full field of 93 gateways, see the [crypto payment gateways comparison](/blog/93-crypto-payment-gateways-compared).

For a stablecoin-first, closed-source self-hosted option, see [BitHide vs BTCPay Server](/blog/bithide-vs-btcpay-server).

## FAQ

**Is PayRam free?**
PayRam charges no percentage of your sales and no setup fee. You pay for the server you run it on (PayRam estimates about $20 to $150 a month for a VPS) and the network gas for deploying sweep contracts and sweeping funds.

**Is PayRam open source?**
Not the gateway itself. PayRam publishes its install scripts, plugins and MCP server on GitHub, but the gateway ships as a prebuilt Docker image. BTCPay Server and Bitcart are the open-source self-hosted options.

**What is the best PayRam alternative?**
It depends on why you picked PayRam. For self-hosting with open-source code, BTCPay Server. For the same no-fee, no-custody, no-KYC outcome without running a server, a hosted non-custodial gateway like Shieldz.

**Does PayRam need KYC?**
No. PayRam is self-hosted and needs no signup or KYB. Shieldz needs no KYC either: you start with a wallet address.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is PayRam free?", "acceptedAnswer": { "@type": "Answer", "text": "PayRam charges no percentage of your sales and no setup fee. You pay for the server you run it on (PayRam estimates about $20 to $150 a month for a VPS) and the network gas for deploying sweep contracts and sweeping funds." } },
    { "@type": "Question", "name": "Is PayRam open source?", "acceptedAnswer": { "@type": "Answer", "text": "Not the gateway itself. PayRam publishes its install scripts, plugins and MCP server on GitHub, but the gateway ships as a prebuilt Docker image. BTCPay Server and Bitcart are the open-source self-hosted options." } },
    { "@type": "Question", "name": "What is the best PayRam alternative?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on why you picked PayRam. For self-hosting with open-source code, BTCPay Server. For the same no-fee, no-custody, no-KYC outcome without running a server, a hosted non-custodial gateway like Shieldz." } },
    { "@type": "Question", "name": "Does PayRam need KYC?", "acceptedAnswer": { "@type": "Answer", "text": "No. PayRam is self-hosted and needs no signup or KYB. Shieldz needs no KYC either: you start with a wallet address." } }
  ]
}
</script>
