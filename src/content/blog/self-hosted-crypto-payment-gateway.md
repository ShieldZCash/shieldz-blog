---
title: "Best Self-Hosted Crypto Payment Gateways (2026): 4 Free Options + Setup Guide"
description: "The best self-hosted crypto payment gateways of 2026: BTCPay, Bitcart, PayRam and DV.net compared. All free and non-custodial, plus a full setup guide."
pubDate: 2026-10-28
author: "Deniz Yanbollu"
tags: ["self-hosted", "crypto payment gateway", "btcpay", "non-custodial", "comparison", "guide"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/self-hosted-crypto-payment-gateway.png"
---

The best self-hosted crypto payment gateway for most merchants in 2026 is [BTCPay Server](https://btcpayserver.org): free, open-source, non-custodial and backed by the largest community. But it is one of only four real options, and the right pick depends on which coins you take and how much server you want to run. This guide compares all four (BTCPay Server, Bitcart, PayRam and DV.net), explains how they work under the hood, and walks through a full setup.

It is also honest about the trade-off. People who search for a self-hosted crypto payment gateway are rarely in love with running servers. They want three things: no platform fee, no custody of their money by a third party, and control over the checkout. Self-hosting delivers all three, at the cost of operating infrastructure. [Shieldz](https://shieldz.cash) delivers the same $0-fee, non-custodial outcome as a hosted service, so you skip the server without giving up custody. Both are valid.

**Updated October 2026:** merged our long-form setup guide into this comparison, so the architecture, real cost of ownership, a nine-step setup walkthrough, a hardening checklist and day-two operations now live here. Gateway counts come from our open [dataset of crypto payment gateways](/blog/custody-gap-crypto-payment-gateways).

## The best self-hosted crypto payment gateways at a glance

- **Best overall: BTCPay Server.** Bitcoin-first, Lightning built in, the most plugins and documentation. Free and open-source.
- **Best for many coins (incl. Monero): Bitcart.** Around 50 assets out of the box, Lightning included, open-source.
- **Best for stablecoins on EVM chains: PayRam.** Lean multi-chain stack with deposit addresses that sweep to cold storage. Free, but not open-source.
- **Best open-source multi-coin stack: DV.net.** Around 50 assets, the merchant owns the wallets and the seed.
- **Best if you want no server at all: a hosted non-custodial gateway** such as Shieldz, with the same $0 fee and wallet-to-wallet settlement.

**Key takeaways**

- A self-hosted gateway is three things: the gateway software, a wallet you own, and a way to read the blockchain. The server coordinates; the money moves wallet to wallet.
- Done right, the server holds only a **watch-only extended public key (xpub)**. A compromised box can lie about addresses, but it cannot spend your coins.
- "Free" means no license and no processor fee. You still pay for a server, disk for a node, and your hours. At $10,000 a month in sales that is roughly $1,440 a year in our illustrative model.
- Custody, not hosting, is what decides counterparty risk. Self-hosted and hosted non-custodial both keep it with you.

## What a self-hosted crypto payment gateway is

A self-hosted crypto payment gateway is payment software you install and run on infrastructure you control, rather than a service you sign into. Instead of a company generating addresses and holding a balance for you, your own instance derives the receiving addresses, watches the blockchain, and reveals the payment to your checkout. The keys, the server, and the uptime are all yours.

Three pieces make it work: **the software** (an admin panel, a checkout, and a webhook or API layer), **a wallet** you own (a seed or an extended public key the software derives addresses from), and **a way to read the chain** (a full node, a pruned node, or a connection to one). Because the money settles to an address only you control, a properly self-hosted gateway is non-custodial by construction: there is no company wallet in the middle to freeze, delay, or surveil.

This is the opposite end of the spectrum from a custodial processor like BitPay or Coinbase, where the provider receives first and pays you out later. It is also different from a hosted non-custodial gateway, which settles to your wallet like self-hosting but runs the software for you. The rest of this guide compares all three so you pick the one that matches what you actually want.

### Self-hosted, open-source, non-custodial: not synonyms

Four terms get mixed up constantly in this space, and the confusion leads people to pick the wrong tool:

- **Self-hosted** describes *where the software runs*: on a server you rent or own, under your control.
- **Open-source** describes *the license*: you can read, audit and modify the code. Most self-hosted gateways are open-source, but plenty of open-source software is offered as a hosted service too.
- **Non-custodial** describes *who holds the money*: payments land in a wallet whose keys only you control. No third party can freeze, delay or seize the funds.
- **Self-custody** describes *your wallet setup*: you hold the seed phrase yourself instead of keeping coins on an exchange.

A properly configured self-hosted gateway is all four at once, which is why people treat the words as synonyms. They are not. A hosted gateway can be [non-custodial](/blog/non-custodial-crypto-payment-gateway), and a self-hosted install can quietly become custodial in practice if you leave a hot wallet with spending keys on an internet-facing server. Keep the distinction in mind, because it is the lens for every decision below. We unpack the custody side in depth in [custodial vs non-custodial crypto payment gateways](/blog/custodial-vs-non-custodial-crypto-payment-gateways).

## Why "self-hosted" is really a proxy for three wants

Break the search intent down and the server is the least important part:

- **No platform fee.** You do not want a processor skimming 1 to 3 percent of every sale.
- **No custody.** You do not want your coins landing in a company's wallet first, where they can be frozen, delayed, or surveilled.
- **Control.** You want the checkout to be yours, not a rented widget that can change terms.

Self-hosting gets you all three, but so does a [non-custodial](/blog/non-custodial-crypto-payment-gateway) hosted gateway. The distinction that actually matters is custody, not where the software runs. A hosted app that never touches your funds gives you the custody guarantee without the ops burden.

## The self-hosted options, compared

Only **4 of the 86 crypto payment gateways** in [our open dataset](/blog/custody-gap-crypto-payment-gateways) are genuinely self-hosted software you run yourself. All four are non-custodial and charge a **$0 platform fee**, and three of them are open-source (PayRam ships as a closed Docker image); they differ mostly in coin coverage and how much you have to operate.

| Gateway | Fee | Coins | Lightning | Since | Known for |
|---|---|---|---|---|---|
| [BTCPay Server](https://btcpayserver.org) | $0 | BTC + altcoins via plugins | Yes | 2017 | The reference: largest community, most integrations |
| [Bitcart](https://bitcart.ai) | $0 | 50+ (incl. Monero) | Yes | 2019 | BTCPay alternative, wider coin coverage out of the box |
| [PayRam](https://www.payram.com) | $0 | ~20 | No | 2023 | Self-hosted, popular with iGaming; orchestration add-ons |
| [DV.net](https://dv.net) | $0 | ~50 | No | 2023 | Open-source, the merchant owns the wallets and seed |

**How to read it.** BTCPay is the safe default: the biggest ecosystem, the most plugins and documentation, and Lightning built in, at the cost of being Bitcoin-first (altcoins need plugins). Bitcart is the pick if you want more coins, including Monero, without plugin wrangling. PayRam and DV.net are newer and multi-coin, aimed at merchants who want a self-hosted stack without BTCPay's full-node footprint. All four keep custody with you and charge nothing but network fees.

## The four options in depth

**BTCPay Server** is the reference implementation and the safest default. It is Bitcoin-first, deployed with Docker, and can run its own full node or connect to an existing one. Beyond a checkout it ships point-of-sale, crowdfunding and pull-payment apps, Lightning support, and the largest plugin and integration ecosystem of any self-hosted gateway. Altcoins are available through community plugins rather than out of the box. If you want the most documentation, the most community help, and the most battle-tested option, this is it. For how it stacks up against a hosted, regulated alternative, see [BTCPay Server vs CoinGate](/blog/btcpay-server-vs-coingate).

**Bitcart** is the pragmatic multi-coin alternative. It is open-source, Docker-deployed, and supports around 50 assets including Monero straight away, without hunting for plugins. It carries Lightning too. If your customers pay in more than Bitcoin and you would rather not assemble a plugin stack, Bitcart covers more ground with less assembly.

**PayRam** is a newer self-hosted gateway aimed at merchants who want a lean stack without running a Bitcoin full node. It leans toward EVM chains and stablecoins, gives each customer a permanent deposit address that sweeps to your cold wallet, and is popular in higher-risk verticals like iGaming. Unlike the other three it is not open-source. It trades BTCPay's maturity for a lighter multi-chain footprint. We compare it head to head in [PayRam alternatives: PayRam vs BTCPay Server vs Shieldz](/blog/payram-alternatives).

**DV.net** is open-source self-hosted software where the merchant explicitly owns the wallets and the seed. It is multi-coin (around 50 assets), stablecoin-friendly, and built for teams that want the code on their own servers with no third party anywhere in the flow. Like the others, it charges nothing but network fees.

All four share the same core promise: your keys, your server, $0 platform fee. They differ on coin coverage, Lightning, and how much infrastructure you are signing up to run.

## The middle ground: open-source, but no server

Not every "run it yourself" option is a full server. Some are open-source plugins or protocols that keep funds non-custodial without a VPS: [GoUrl](https://gourl.io) and MyCryptoCheckout are WordPress plugins that pay direct to your wallet, and [Solana Pay](/blog/50-crypto-payment-gateways-compared) is an open protocol for direct merchant payments. They are lighter than a self-hosted node but still put the software, and the responsibility, on you. For licenses, GitHub activity and coin lists of every open-source option, see [open-source crypto payment gateways compared](/blog/open-source-crypto-payment-gateways).

## How a self-hosted crypto payment gateway works

Strip away the dashboards and every self-hosted gateway follows the same loop. The diagram shows the moving parts; the numbered steps below walk through one payment.

<figure style="margin:28px 0">
  <a href="/blog/charts/self-hosted-architecture.svg"><img src="/blog/charts/self-hosted-architecture.svg" alt="Architecture diagram of a self-hosted crypto payment gateway: the store requests an invoice from the gateway app on your server, the gateway derives a fresh address from a watch-only xpub, the node or indexer watches the blockchain, the customer pays wallet to wallet directly into the merchant's wallet, and the gateway sends a signed paid webhook back to the store." width="760" height="413" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The server is a coordinator and a watcher. In a watch-only setup the funds never pass through it and it holds no spending keys.</figcaption>
</figure>

**1. Your store asks for an invoice.** When a customer checks out, your shop (a WooCommerce plugin, a custom backend, a point-of-sale app) calls the gateway's API with an amount and currency, for example 49.00 USD.

**2. The gateway prices it and derives an address.** The gateway pulls an exchange rate from a rate source you configure, converts 49.00 USD into a crypto amount, and locks that quote for a window, typically 15 minutes. It then derives a brand-new receiving address from your extended public key. Every invoice gets its own address, which is how the gateway knows which payment belongs to which order without asking the customer for a memo.

**3. The customer pays wallet to wallet.** The checkout page shows the address, the amount and a QR code. The customer pays from their own wallet. The transaction goes straight to an address that belongs to *your* wallet. The gateway server is not an intermediate hop; it never had the coins and never could.

**4. The node or indexer sees it.** Your gateway is subscribed to the chain through a full node, a pruned node or an indexer service. It spots the transaction in the mempool (unconfirmed), then counts confirmations as blocks arrive.

**5. The invoice settles and your store is notified.** Once the payment reaches the confirmation threshold you set, the gateway marks the invoice paid and sends a webhook to your store, signed with a shared secret so your shop can verify it really came from your gateway. The order flips to "processing" and fulfillment starts.

That is the whole machine. Everything else (dashboards, refunds, plugins, Lightning, multi-coin) is built on top of that loop.

### The xpub: why your keys never need to touch the server

The single most important design choice in a self-hosted gateway is how it gets receiving addresses. The safe answer is an **extended public key**, usually written xpub (or zpub/ypub for different Bitcoin address types).

Hierarchical deterministic wallets (the BIP32 standard that nearly every modern wallet uses) can derive an unlimited tree of addresses from one root. The public half of a branch, the xpub, can generate every *receiving address* on that branch but cannot produce a single *signature*. So you export the xpub from your hardware wallet or desktop wallet, paste it into the gateway, and the server can mint a fresh address per invoice forever while being mathematically unable to spend anything.

This gives you a clean security property: if someone breaks into your gateway server, the worst they can do is swap the xpub for their own and redirect *future* payments, which is serious but detectable and recoverable. They cannot drain what you have already received. Compare that to a hot wallet on the server, where a breach means the balance is gone.

Two practical notes from people who have run this for years:

- **Watch the gap limit.** Wallets scan addresses in order and stop after a run of unused ones, usually 20. Every abandoned checkout burns an address, so after a run of unpaid invoices your wallet app may stop "seeing" later payments even though the coins are safely on-chain. The fix is raising the gap limit in your wallet software (Sparrow and Electrum both allow it). Nothing is lost, but it is a classic first-month scare.
- **An xpub is private information.** It cannot spend, but it reveals every address and therefore your entire payment history. Treat it like a confidential document, not a public key you would post online.

### Nodes and indexers: how the gateway reads the chain

To know a payment arrived, the gateway has to read the blockchain. There are three ways to do that, each a trade between trust, privacy and disk:

| Approach | Disk | Trust and privacy | Best for |
|---|---|---|---|
| **Full node** (unpruned) | Bitcoin alone is well over 600 GB and growing | You verify everything yourself; no third party sees your addresses | Maximum sovereignty, high volume |
| **Pruned node** | Tens of GB | Still self-verified; cannot rescan old history easily | Most small merchants on BTCPay |
| **External indexer or RPC** | Minimal | A provider learns which addresses you watch | Multi-chain stacks, low-spec servers |

BTCPay Server, for example, pairs a Bitcoin node with its own lightweight indexer (NBXplorer) that tracks only the addresses derived from your xpub. Multi-chain self-hosted gateways that support EVM chains, Tron or Solana usually lean on RPC providers instead, because running a full archive node for every chain is out of reach for a single merchant. That is a perfectly reasonable choice, but notice what it means: once you rely on a third-party RPC, part of your "self-hosted" stack is somebody else's infrastructure.

### Bitcoin versus stablecoins: the sweeping problem

The per-invoice address model is elegant on Bitcoin because a UTXO can sit at any address and be spent later with no prerequisites. On account-based chains it gets awkward, and this is where most self-hosted multi-coin setups pick up hidden cost.

Say you accept USDT on Ethereum or Tron and give each invoice its own derived address. The customer's USDT lands at address #417. To move it to your main wallet you need to pay gas *from address #417*, which holds tokens but no ETH or TRX. So the gateway first has to send a little native coin to every paid address, then sweep the tokens out. That is two transactions per payment, a hot wallet funding the gas, and a growing operational job. Some self-hosted products automate this sweeping; others avoid it by using one address and matching payments by amount, which has its own collision edge cases.

None of this is a reason to avoid stablecoins. Stablecoin payments are one of the strongest use cases in the market ([here is why](/blog/accept-stablecoin-payments)). It is a reason to understand that "accept USDT on my own server" involves more moving parts than "accept BTC on my own server."

### Lightning: faster, but keys move onto the box

Lightning makes Bitcoin payments instant and cheap, which is great at a checkout. The catch for self-hosters is architectural: a Lightning node must sign channel updates in real time, so its keys live *on the server*. You are now running a hot wallet, managing inbound liquidity so customers can actually pay you, and keeping channel state backups so a disk failure does not cost you money. Lightning is worth it for high-frequency small payments, but it turns a watch-only gateway into one that holds spendable funds. Budget the extra care.

## What a self-hosted gateway really costs

"Free and open-source" is accurate about the license and misleading about the bill. The software costs nothing. Running it does not. Here is a realistic model for a small online store doing $10,000 a month across 240 orders.

<figure style="margin:28px 0">
  <a href="/blog/charts/self-hosted-annual-cost.svg"><img src="/blog/charts/self-hosted-annual-cost.svg" alt="Illustrative annual cost at 10,000 dollars a month in sales with a 50 dollar average order: card processor at 2.9 percent plus 30 cents is 4,344 dollars, a custodial crypto processor at 1 percent is 1,200 dollars, a self-hosted gateway is about 1,440 dollars from a 240 dollar server plus 24 hours of upkeep, and Shieldz charges a 0 dollar platform fee." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Card and 1% numbers are exact list-rate math. The self-hosted bar assumes a $20/month VPS and two hours of upkeep a month valued at $50/hour, so treat it as illustrative and plug in your own numbers.</figcaption>
</figure>

Break the self-hosted line down and you can see where it moves:

- **Server.** A VPS with around 2 vCPUs and 4 GB of RAM is a common baseline. Add storage for a pruned node and you are typically in the $10 to $30 a month range, more if you want an unpruned Bitcoin node with fast SSDs.
- **Your time.** Initial setup, node sync, a plugin update that breaks checkout, an OS patch, a certificate renewal that silently failed. Two hours a month is optimistic for a first year and pessimistic once things are stable.
- **Hidden costs.** Downtime during a sale. Sweep transactions for tokens. A monitoring service. A second server for a staging copy if you are careful.

The interesting comparison is not self-hosted versus cards; crypto wins that easily. It is self-hosted versus a 1% custodial processor. At $10,000 a month they cost about the same, and the custodial processor needs no ops. Self-hosting starts winning on pure cost somewhere north of that volume, because the server bill stays flat while a percentage fee scales with every sale. Below that volume, the real reason to self-host is not cost. It is custody and control. That is worth knowing, because a hosted non-custodial gateway gives you custody and control at a $0 platform fee too.

<figure style="margin:28px 0">
  <a href="/blog/charts/time-to-first-link.svg"><img src="/blog/charts/time-to-first-link.svg" alt="Illustrative time to a first payment link: BTCPay self-host about 46 minutes, Stripe about 23 minutes, a custodial crypto API about 14 minutes, and Shieldz about 1 second with one URL and no signup." width="760" height="413" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Self-hosting buys sovereignty at the cost of setup and upkeep. A non-custodial hosted gateway keeps the custody guarantee and drops the server.</figcaption>
</figure>

## Step by step: setting up a self-hosted crypto payment gateway

The walkthrough below uses BTCPay Server as the concrete example because it is the most common choice and the best documented, but the same nine stages apply to Bitcart, PayRam or DV.net with different commands.

### 1. Decide what you are actually accepting

Write the list before touching a server: which coins, which networks (USDT on Tron is not USDT on Ethereum), on-chain only or Lightning too, and what confirmation depth you will require. This decides your software choice, your disk size and whether you need a hot wallet for sweeping or Lightning.

### 2. Provision a server and a domain

Rent a VPS from a provider you trust, point a subdomain such as `pay.yourstore.com` at it, and lock it down before installing anything: SSH keys only, password login off, a firewall that exposes only ports 22, 80 and 443. Pick a region close to your customers and an SSD plan sized for the node you chose.

### 3. Install the gateway

BTCPay ships a Docker-based installer that sets up the app, the database, the node, the indexer and an HTTPS reverse proxy in one go. In outline:

```bash
git clone https://github.com/btcpayserver/btcpayserver-docker
cd btcpayserver-docker
export BTCPAY_HOST="pay.yourstore.com"
export NBITCOIN_NETWORK="mainnet"
export BTCPAYGEN_CRYPTO1="btc"
export BTCPAYGEN_ADDITIONAL_FRAGMENTS="opt-save-storage-s"   # pruned node
. ./btcpay-setup.sh -i
```

Check the current BTCPay documentation for the exact variables before running it, since options change between releases. Other self-hosted gateways follow the same pattern: clone, set a few environment variables, run a setup script or `docker compose up`.

### 4. Let the node sync (or connect to one)

A fresh Bitcoin node has to download and verify the chain. Even pruned, this takes hours to days depending on your server. The gateway will not detect payments reliably until sync completes, so do this before you announce anything. If you already run a node at home or elsewhere, most gateways can connect to it instead.

### 5. Create your store and connect a wallet with an xpub

In the gateway's admin, create a store, then connect a wallet. Export the xpub (or zpub for native SegWit) from a hardware wallet or a desktop wallet like Sparrow and paste it in. Resist the convenience option of generating a new hot wallet on the server unless you specifically need it for Lightning or sweeping. Watch-only is the whole security model.

### 6. Configure pricing, expiry and confirmations

Set your default currency, your rate source, the invoice expiry window, and the confirmation policy. A common pattern: accept zero-confirmation for small, low-risk digital goods only if your gateway supports it safely, one confirmation for normal orders, and three or more for large tickets. Decide how to handle underpayments (a customer sends 0.0009 instead of 0.001) and overpayments, because they will happen.

### 7. Integrate with your store

Install the gateway's plugin for your platform (WooCommerce, Shopify via app, WHMCS and so on) or call its REST API from your backend. Set the webhook URL and store the signing secret on your shop's side. Verify the signature on every webhook; never mark an order paid just because a request arrived.

### 8. Test end to end with real money

Run a full purchase with a small real payment. Confirm that the invoice moves through pending, paid and confirmed, that your store receives the webhook, that the order status changes, and that the coins show up in your actual wallet app. Then test the unhappy paths: an expired invoice, an underpayment and a payment that arrives after expiry.

### 9. Set up backups and monitoring before you go live

Back up the seed of the wallet behind your xpub (offline, on paper or metal), plus the gateway's database and configuration. Add an external uptime check on your checkout URL and an alert for disk usage, because a full disk is the most common way a self-hosted node quietly dies. Write down how to restore from scratch, then try it once.

## Security: you become the custodian

Self-hosting removes the third-party custodian, which is the point, but it does not remove custody. It moves custody to you. That is a real responsibility, not a footnote:

- **Keys and seed.** Your instance derives addresses from a wallet you control. Back up the seed or extended key offline, and treat a server compromise as a wallet compromise if hot keys live on the box.
- **Uptime.** If the server is down, your checkout is down and payments cannot be detected until it is back. You own the monitoring.
- **Patching.** The software, the OS, and any node need updates. A self-hosted gateway that is never patched is a liability, not an asset.
- **Node integrity.** If you run your own node, you get maximum privacy and trust-minimization, at the cost of sync time, disk, and bandwidth. Connecting to someone else's node trades some of that back for convenience.

None of this is a reason to avoid self-hosting. It is the honest bill for sovereignty. The question is whether you want to hold the keys and run the box, or keep the keys and skip the box.

Run through this hardening checklist before going live:

- **Watch-only by default.** Only the xpub on the server. If you must run a hot wallet (Lightning, token sweeping), keep its balance small and sweep to cold storage on a schedule.
- **Lock down admin access.** Strong unique password, two-factor authentication on the gateway's admin account, and disable public registration so strangers cannot create accounts on your instance.
- **Harden the host.** SSH keys only, firewall closed except web ports, automatic security updates for the OS, and no unrelated services on the same box.
- **Verify webhooks.** Check the HMAC signature and confirm invoice status via the API before fulfilling. Spoofed "paid" callbacks are a real attack on poorly integrated stores.
- **Pin your xpub in your head.** Note the first receiving address your wallet shows and periodically confirm the gateway still derives the same one. An attacker who swaps the xpub redirects payments silently; this check catches it.
- **Update promptly.** Subscribe to your gateway's release notes. Payment software is a high-value target, and an unpatched instance is a liability.
- **Back up the right things.** Seed (offline), database (encrypted, off-server), Lightning channel backups if applicable, and the environment configuration.
- **Screen your own exposure.** Checkout pages are a target for phishing clones and [wallet drainers](/blog/how-wallet-drainers-work). Use a domain you control, HTTPS everywhere and teach customers what your real checkout looks like.

## Day-two operations: what running it actually looks like

Installation is a weekend. Operation is forever. These are the recurring situations every self-hoster meets in the first year:

**Fee spikes and stuck payments.** When the Bitcoin mempool fills up, a customer paying with a low fee can sit unconfirmed past invoice expiry. Your gateway will flag it as "paid late" or "expired with payment". You need a policy: honor the original price, or refund the difference.

**Underpayments.** Exchanges that deduct withdrawal fees from the sent amount are the usual cause. Decide a tolerance (for example, accept anything within 1%) and handle the rest manually.

**Refunds.** There is no "refund" button that reverses a blockchain transaction. You send a new payment from your wallet to an address the customer provides. Self-hosted gateways help with refund links and pull payments, but the funds come out of your wallet and the decision is yours.

**Reorgs and double-spend attempts.** Rare on Bitcoin with one or more confirmations, more relevant on fast, low-value chains. Your confirmation policy is your defense.

**Accounting.** Export invoice data with fiat values at the time of payment. Your accountant will need it for revenue and, in most jurisdictions, for capital-gains tracking on the crypto you hold afterward.

**Upgrades.** Major version upgrades occasionally change database schemas or plugin APIs. Snapshot the server before upgrading and test checkout immediately after.

None of this is exotic. It is simply the work a payment processor normally does for you, now on your desk.

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

<figure style="margin:28px 0">
  <a href="/blog/charts/self-hosted-responsibilities.svg"><img src="/blog/charts/self-hosted-responsibilities.svg" alt="Responsibility matrix comparing self-hosted, hosted non-custodial and custodial crypto payment gateways. Self-hosted leaves the merchant seven operational jobs: keys, server, updates, node sync, uptime monitoring, hardening and backups. Hosted non-custodial leaves one job, backing up your own wallet. Custodial leaves none but requires trusting a third party with the funds." width="760" height="410" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Self-hosted and hosted non-custodial both keep custody with you. Only the custodial model adds counterparty risk, and only self-hosting adds the ops.</figcaption>
</figure>

## The no-server route: hosted, but still non-custodial

Here is the honest pitch, and the honest limit.

Shieldz is **not** self-hosted. It is a hosted gateway, and you are trusting it to be online when your customer checks out. What it keeps are the two properties that made you search for "self-hosted" in the first place:

- **$0 platform fee.** No percentage, no monthly plan. The buyer pays only the network gas for their own transaction.
- **Non-custodial settlement.** Every payment settles straight to the wallet address you provide. Shieldz holds no balance, cannot freeze or withdraw your funds, and you can [check that claim yourself](https://shieldz.cash/verify) rather than taking our word for it.

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="Shieldz hosted checkout page with a coin picker, QR code and exact pay amount, settling directly to the merchant's own wallet with no server to run" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">A hosted, non-custodial checkout: the same wallet-to-wallet settlement as a self-hosted gateway, with no VPS, node or updates on your side.</figcaption>
</figure>

What you skip: the server, the node sync, the xpub gap-limit scare, the token sweeping and the upgrade weekends. You paste a wallet address and get a [hosted checkout, payment link](https://shieldz.cash/tools/payment-link) or [crypto invoice](/blog/crypto-invoice-generator) immediately, with [no signup or KYC](/blog/accept-crypto-payments-without-kyc). Customers can pay with the coin they actually hold, because cross-chain payments are routed through NEAR, Chainflip and Relay and still land in your wallet in the asset you chose. The trade-offs of that any-coin routing are covered openly in [the pay-any-coin trust trade-off](/blog/pay-any-coin-trust-tradeoff).

For developers there is a [crypto payment API](/blog/crypto-payment-api) with signed webhooks, a [WooCommerce plugin](/accept-crypto-woocommerce) and full [docs](/docs), so the integration surface looks a lot like a self-hosted gateway's, minus the infrastructure.

## Which one should you choose

Pick **self-hosted BTCPay** if sovereignty is the goal in itself: you want to run your own node, you are comfortable operating a server, and you accept the setup and maintenance in exchange for depending on no one.

Pick **a non-custodial hosted gateway like Shieldz** if what you wanted from "self-hosted" was really no fees and no custody, and you would rather not run infrastructure to get them. You still never hand over custody, and there is [no signup or KYC](/blog/how-to-accept-crypto-payments) to start.

Still undecided? Ask these four questions in order:

1. **Is sovereignty the goal in itself?** If you want to verify every block with your own node and depend on no one, self-host. Nothing else gives you that.
2. **Do you have someone to own the ops, indefinitely?** Not for the install weekend, for the next three years. If the answer is no, a self-hosted gateway becomes a liability the day its maintainer gets busy.
3. **Is your volume high enough that a percentage fee hurts?** If yes, you want a $0 platform fee. Both self-hosted and hosted non-custodial give you that; custodial processors do not.
4. **Do you need fiat payouts to a bank?** If yes, you are shopping for a [custodial processor with fiat settlement](/blog/crypto-payment-gateways-fiat-settlement), and the self-hosted question is moot.

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
The software is free (BTCPay, Bitcart, PayRam, DV.net all charge a $0 platform fee, and all but PayRam are open-source), but self-hosting is not zero-cost: you pay for the server, and you spend time on setup, updates and uptime. "Free" means no license and no processor cut, not no operating cost.

**Can I run a crypto payment gateway without a full node?**
Often yes. Some self-hosted setups connect to an external node instead of syncing their own, and lighter open-source options like the GoUrl or MyCryptoCheckout plugins avoid a node entirely. A hosted non-custodial gateway needs no node or server at all, just a wallet address.

**Is self-hosting more private than a hosted gateway?**
Running your own node gives you the strongest privacy and trust-minimization, since no third party sees your transactions. A hosted gateway trades some of that for convenience. If privacy of the payment link itself is the goal, note that non-custodial does not automatically mean private; that is a separate property.

**Is self-hosted the same as non-custodial?**
Self-hosted is almost always non-custodial, because funds settle to a wallet you control. But the reverse is not required: a hosted gateway can also be non-custodial. Custody is about who holds the keys, not where the software runs.

**How does a self-hosted crypto payment gateway work?**
Your store requests an invoice, the gateway derives a fresh receiving address from your xpub, the customer pays wallet to wallet, your node or indexer sees the transaction, and the gateway sends a signed webhook to your store once it confirms. The server never holds the coins.

**Is a self-hosted crypto payment gateway safe?**
It can be very safe if the server holds only a watch-only xpub, because a breach then cannot spend your coins. The risks shift to you: patching, admin access, webhook verification and backups. Hot wallets for Lightning or token sweeping add real risk and should hold small balances.

**How much does it cost to run a self-hosted crypto payment gateway?**
The software is free, but a typical setup needs a $10 to $30 a month server plus your time. In our illustrative model at $10,000 a month in sales, that is about $1,440 a year including two hours of monthly upkeep, versus $4,344 for a card processor and a $0 platform fee on a hosted non-custodial gateway.

**Can a self-hosted gateway accept USDT and other stablecoins?**
Yes, several do, but stablecoins on account-based chains like Ethereum and Tron often require sweeping tokens from per-invoice addresses, which needs gas and a hot wallet. That adds cost and operational work compared with Bitcoin.

## Get paid in crypto, with or without a server

If you want to run your own stack, pick from the four above and give yourself a weekend for setup and a calendar reminder for updates. If you want the same $0 fee and the same wallet-to-wallet settlement today, create a non-custodial checkout with the [payment link generator](https://shieldz.cash/tools/payment-link) in under a minute, or read [how to accept crypto payments](/blog/how-to-accept-crypto-payments) for every integration option. Still mapping the market? The [best free crypto payment gateways of 2026](/blog/best-free-crypto-payment-gateways-2026) ranks them by how free they really are, and [open-source crypto payment gateways compared](/blog/open-source-crypto-payment-gateways) covers licenses and GitHub activity.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to set up a self-hosted crypto payment gateway",
  "totalTime": "P1D",
  "step": [
    { "@type": "HowToStep", "name": "Decide what you accept", "text": "List the coins, networks, Lightning or on-chain, and the confirmation depth you will require." },
    { "@type": "HowToStep", "name": "Provision a server and domain", "text": "Rent a VPS, point a subdomain at it, enable SSH keys only and a firewall exposing ports 22, 80 and 443." },
    { "@type": "HowToStep", "name": "Install the gateway", "text": "Use the gateway's Docker installer, for example BTCPay's btcpayserver-docker setup script, with your host name and network set." },
    { "@type": "HowToStep", "name": "Sync or connect a node", "text": "Let a pruned or full node sync, or connect the gateway to an existing node, before accepting payments." },
    { "@type": "HowToStep", "name": "Connect a wallet with an xpub", "text": "Export the extended public key from a hardware or desktop wallet and paste it into the store so the server stays watch-only." },
    { "@type": "HowToStep", "name": "Configure pricing and confirmations", "text": "Set the currency, rate source, invoice expiry, confirmation policy and underpayment tolerance." },
    { "@type": "HowToStep", "name": "Integrate your store", "text": "Install the platform plugin or call the API, set the webhook URL and verify the signature on every webhook." },
    { "@type": "HowToStep", "name": "Test end to end", "text": "Make a small real payment and test expired, underpaid and late payments, confirming funds arrive in your wallet." },
    { "@type": "HowToStep", "name": "Back up and monitor", "text": "Back up the wallet seed offline plus the database and config, and add uptime and disk-usage alerts." }
  ]
}
</script>

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
    { "@type": "Question", "name": "Is a self-hosted crypto payment gateway free?", "acceptedAnswer": { "@type": "Answer", "text": "The software is free and charges no platform fee, but self-hosting still costs a server plus your time on setup, updates and uptime. Free means no license and no processor cut, not no operating cost." } },
    { "@type": "Question", "name": "Can I run a crypto payment gateway without a full node?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes. Some self-hosted setups connect to an external node, and lighter options like the GoUrl or MyCryptoCheckout plugins avoid a node entirely. A hosted non-custodial gateway needs no node or server at all." } },
    { "@type": "Question", "name": "Is self-hosted the same as non-custodial?", "acceptedAnswer": { "@type": "Answer", "text": "Self-hosted is almost always non-custodial because funds settle to a wallet you control, but a hosted gateway can also be non-custodial. Custody is about who holds the keys, not where the software runs." } },
    { "@type": "Question", "name": "How does a self-hosted crypto payment gateway work?", "acceptedAnswer": { "@type": "Answer", "text": "Your store requests an invoice, the gateway derives a fresh receiving address from your xpub, the customer pays wallet to wallet, your node or indexer sees the transaction, and the gateway sends a signed webhook once it confirms. The server never holds the coins." } },
    { "@type": "Question", "name": "Is a self-hosted crypto payment gateway safe?", "acceptedAnswer": { "@type": "Answer", "text": "It can be very safe if the server holds only a watch-only xpub, because a breach then cannot spend your coins. The risks shift to you: patching, admin access, webhook verification and backups. Hot wallets for Lightning or token sweeping add real risk and should hold small balances." } },
    { "@type": "Question", "name": "How much does it cost to run a self-hosted crypto payment gateway?", "acceptedAnswer": { "@type": "Answer", "text": "The software is free, but a typical setup needs a $10 to $30 a month server plus your time. In an illustrative model at $10,000 a month in sales, that is about $1,440 a year including two hours of monthly upkeep, versus $4,344 for a card processor and a $0 platform fee on a hosted non-custodial gateway." } },
    { "@type": "Question", "name": "Can a self-hosted gateway accept USDT and other stablecoins?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, several do, but stablecoins on account-based chains like Ethereum and Tron often require sweeping tokens from per-invoice addresses, which needs gas and a hot wallet. That adds cost and operational work compared with Bitcoin." } }
  ]
}
</script>
