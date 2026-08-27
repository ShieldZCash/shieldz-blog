---
title: "50 Crypto Payment Gateways Compared: Fees, Custody, KYC (August 2026)"
description: "We compared 50 crypto payment gateways on fees, custody, KYC and coin coverage for August 2026. Six charts, one big table, honest notes on the data."
pubDate: 2026-08-08
author: "Deniz Yanbollu"
tags: ["crypto payment gateways", "comparison", "fees", "crypto", "payments"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/50-crypto-payment-gateways-compared.png"
---

Most lists of crypto payment gateways compare five or six providers and call it a market overview. This one compares 50. We pulled the published pricing, custody model, KYC requirements, coin coverage and settlement options for 50 crypto payment gateways as of August 2026, put the numbers into six charts, and listed every provider in one table so you can find the right fit for your business in a single read.

If you want the shortlists instead, we keep those too: the [best crypto payment gateways of 2026](/blog/best-crypto-payment-gateways-2026) and the [best free crypto payment gateways](/blog/best-free-crypto-payment-gateways-2026). This post is the wide-angle lens: what the whole market looks like, where the fees really hide, and which of the 50 deserve a place on your own shortlist.

**Disclosure up front:** Shieldz is our product, and it appears in the data like everyone else. Every number in this post comes from published pricing pages or provider docs, and where we could not verify a figure we say so.

## Update, August 2026: the dataset now covers 86 gateways

This comparison is a dated study of **50 gateways** (the August 2026 snapshot below). Since publishing, we have kept the underlying data as a living resource, now **86 crypto payment gateways** and growing. The headline finding held as it grew: **only about 24% are non-custodial** at both n=50 and n=86. Read the [custody gap report](/blog/custody-gap-crypto-payment-gateways) for that one, or download the full open dataset (CC BY 4.0): [JSON](/blog/data/crypto-payment-gateways-2026.json), [CSV](/blog/data/crypto-payment-gateways-2026.csv), or the [GitHub repository](https://github.com/ShieldZCash/crypto-payment-gateways-dataset), which is updated monthly and carries the full table as markdown.

**What is new since the study.** The biggest 2026 shift is the *exchange-Pay wave*: Kraken Pay, Bybit Pay, KuCoin Pay, Bitget Pay, Gate Pay and WhiteBIT Pay all brought exchange-backed merchant acceptance, mostly custodial and KYC-gated, often at a 0% headline fee that settles inside their own ecosystem. Crypto.com Pay pushed deeper into Shopify, and stablecoin infrastructure firm BVNK was acquired by Mastercard, a sign the incumbents now treat crypto acceptance as core rails. The custody story did not change: the new entrants are overwhelmingly custodial, which is why the non-custodial share stayed near a quarter even as the list grew.

## Methodology

For each of the 50 gateways we recorded seven facts:

- **Fee**: the standard advertised processing rate for accepting a crypto payment. Where pricing is tiered we used the standard or entry tier; where it is unpublished we used the most commonly reported figure and marked it with an asterisk in the table.
- **Custody**: who holds the money between the buyer paying and you having it. **Custodial** means the provider's wallet receives first. **Non-custodial** means funds settle to an address you control. **Self-hosted** means you run the software yourself. **Hybrid** means it depends on configuration. This is our editorial classification based on each provider's docs.
- **KYC**: what a new merchant must do before accepting a payment: nothing, optional verification (usually for fiat or higher limits), or mandatory business verification.
- **Coins**, **fiat settlement**, **Lightning support** and **year launched**.

Seven of the 50 fees could not be confirmed on an official page and are marked accordingly. Nothing here is a recommendation of any provider's compliance posture; several of the no-KYC providers serve markets where that carries real regulatory weight. Now, the data.

## Key findings, one page each

Six numbers from this dataset, each with its own breakdown (or read the headline report: [the custody gap](/blog/custody-gap-crypto-payment-gateways)):

- [Are crypto payment gateways custodial?](/blog/are-crypto-payment-gateways-custodial): **64% are** (32 of 50).
- [How many crypto payment gateways are non-custodial?](/blog/how-many-non-custodial-crypto-payment-gateways): **only 12 of 50** (24%).
- [The median crypto payment gateway fee](/blog/average-crypto-payment-gateway-fee): **1% per transaction**.
- [How many crypto payment gateways are free?](/blog/how-many-free-crypto-payment-gateways): **10 of 50** charge a $0 platform fee.
- [Do crypto payment gateways require KYC?](/blog/do-crypto-payment-gateways-require-kyc): **58% do** (29 of 50).
- [How many crypto payment gateways settle to fiat?](/blog/crypto-payment-gateways-fiat-settlement): **66%** (33 of 50).

## How AI assistants read this comparison

We did not only publish these numbers, we checked what leading AI assistants report when they read this page. In August 2026 we gave Grok, ChatGPT and Claude the URL of this comparison and asked each an open question about the market. All three fetched the article and independently reproduced the core finding, that **about 24% of crypto payment gateways are non-custodial and 64% are custodial**, and each attributed it to this Shieldz study. The conversations are unedited and public, so you can read them and re-run the question yourself:

- **Grok** (August 2026) reported "64% (32/50) are custodial. Only 24% (12/50) are non-custodial", and noted the dataset has since grown to 86 gateways. [View the conversation](https://x.com/i/grok/share/47aee45c1da3433b9fbca402d7c7ec13).
- **ChatGPT** (August 2026) reported "32/50 (64%) are custodial, 12 are non-custodial, 2 self-hosted, and 4 hybrid", citing Shieldz as the source. [View the conversation](https://chatgpt.com/share/6a88bcaa-82c0-83eb-af50-322bb4f55e9e).
- **Claude** (August 2026) reported "64% of gateways are custodial, while only 24% are non-custodial", and flagged our disclosure openly. [View the conversation](https://claude.ai/share/6f2b7828-7d66-43f3-ba8c-18d41b97b847).

It also happens with no URL at all. Asked simply "is there any dictionary about crypto payment gateways", Grok ran its own web searches and listed this study among its top references: "50+ gateways compared (fees, custody, KYC, coins, fiat settlement) — Shieldz, August 2026", alongside directories like Cryptwerk and The Grid. [View the unprompted conversation](https://x.com/i/grok/share/b4377d37ca5c4e22822856e57839a75e).

This is the honest version of an AI citation: the models read the primary source, reached the same numbers, and named it. Ask any assistant the same question with this URL, or without it, and you should see the same finding. The living list of every such conversation, hits and pushback both, is at [AI assistants on our gateway data](/blog/ai-citations).

## The market at a glance: custody is still the norm

The single most consequential fact about this market: **32 of the 50 gateways are custodial**. When a buyer pays, the money lands in the provider's wallet first, and you get it later, on their schedule. Only 12 of 50 are non-custodial, 2 are self-hosted software, and 4 are hybrid models that depend on how you configure them.

<figure style="margin:28px 0">
  <a href="/blog/charts/gw26-custody-donut.svg"><img src="/blog/charts/gw26-custody-donut.svg" alt="Donut chart of custody models across 50 crypto payment gateways in August 2026: 32 custodial, 12 non-custodial, 2 self-hosted, 4 hybrid." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">64% of the market still holds your money before you do. Non-custodial and self-hosted options are the minority.</figcaption>
</figure>

Why does this matter more than the fee? Because every other risk in this article follows from custody. Fund freezes, payout delays, account closures, withdrawal fees and forced KYC are all things that can only happen when someone else is holding your revenue. We wrote the full argument in the [non-custodial crypto payment gateway](/blog/non-custodial-crypto-payment-gateway) explainer, but the short version: a custodial gateway is a bank account with fewer rights.

The market is also younger than it looks. The oldest name on the list, BitPay, launched in 2011, but **22 of the 50 launched in 2020 or later**, with a visible wave of new entrants between 2020 and 2022, when stablecoin and Solana-native checkouts arrived.

<figure style="margin:28px 0">
  <a href="/blog/charts/gw26-founding-years.svg"><img src="/blog/charts/gw26-founding-years.svg" alt="Histogram of launch years for 50 crypto payment gateways: a wave of new entrants from 2020 to 2022, with 22 of 50 launched in 2020 or later." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Nearly half of today's market launched in the last six years. The 2020 to 2022 cohort is the largest.</figcaption>
</figure>

The newer cohort splits into two camps. One rebuilds the custodial processor with a modern API (Sphere, Copperx, Radom). The other removes the processor from the money path entirely (Solana Pay, DePay, Helio, Shieldz). The custody donut above is what that fight looks like in August 2026.

## What it actually costs

The median advertised fee across all 50 gateways is **1%**. Ten of the 50 advertise a 0% processing fee, but the zeros are not all equal, and this is where reading the fine print pays for itself:

- **Genuinely fee-free rails**: self-hosted software (BTCPay Server, Bitcart), open protocols (Solana Pay), and non-custodial gateways with no platform fee (Shieldz, MyCryptoCheckout's paid plan model, Zaprite's flat subscription). How a $0 fee can be sustainable is its own question; we answer it at [why Shieldz is free](https://shieldz.cash/why-free).
- **Zero on one side, charged on the other**: Binance Pay accepts for 0% but charges 0.8% on payouts. PayKassa accepts for 0% and takes 4% on the way out. Strike processes for 0% and charges 0.49% to 1.29% when you convert to fiat. If the fee is not on the payment, look for it on the exit.

<figure style="margin:28px 0">
  <a href="/blog/charts/gw26-fee-bars.svg"><img src="/blog/charts/gw26-fee-bars.svg" alt="Horizontal bar chart of published fees for 16 well-known crypto payment gateways in August 2026, from Sellix at up to 5 percent down to BTCPay Server and Shieldz at 0 percent." width="760" height="573" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Sixteen of the best-known names, sorted by advertised rate. The spread runs from 5% down to 0%.</figcaption>
</figure>

Percentages feel small until you scale them. A 1% fee on a $20 sale is 20 cents; on a $10,000 invoice it is $100, for exactly the same work. This is the structural argument for flat-zero pricing: a percentage grows with your revenue, a $0 platform fee does not.

<figure style="margin:28px 0">
  <a href="/blog/charts/gw26-cost-curve.svg"><img src="/blog/charts/gw26-cost-curve.svg" alt="Line chart of total processing cost by sale size in August 2026: on a 10,000 dollar sale Stripe card rails cost 290 dollars, BitPay 200 dollars, a 1 percent crypto processor 100 dollars, and Shieldz 0 dollars." width="760" height="430" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The same sale at published rates. On $10,000, card rails take $290, a typical crypto processor takes $100, Shieldz takes $0.</figcaption>
</figure>

For context against traditional rails: Stripe's card pricing is 2.9% plus $0.30 and PayPal's is 3.49% plus $0.49, so even the most expensive crypto gateways on this list undercut cards, and the cheap end is not close.

## KYC: 29 of 50 make you verify before you can sell

We also recorded what each gateway demands from a new merchant before the first payment. **29 of the 50 require business verification up front.** Six make it optional, usually kicking in only for fiat settlement or above volume thresholds. **15 of the 50 require no KYC at all**: you sign up with a wallet address or an email and start accepting.

<figure style="margin:28px 0">
  <a href="/blog/charts/gw26-kyc-split.svg"><img src="/blog/charts/gw26-kyc-split.svg" alt="Column chart of merchant KYC requirements across 50 crypto payment gateways in August 2026: 15 require no KYC, 6 optional, 29 require business verification." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">To accept a crypto payment, most of the market first asks who you are. Fifteen providers skip the question.</figcaption>
</figure>

The pattern behind the split is custody again. Providers that hold funds and touch fiat are regulated like money institutions, so they must verify merchants. Providers that never hold the money have nothing to gate: of the 15 no-KYC gateways, most are non-custodial or self-hosted. If frictionless onboarding matters to you, the deeper dive is in [accepting crypto payments without KYC](/blog/accept-crypto-payments-without-kyc).

## Fees vs coverage: the shape of the trade-off

Plotting all 50 on two axes, advertised fee against number of coins supported, shows the market's real shape. There is no correlation where you might expect one: wide coin coverage does not cost more. NOWPayments supports 350+ currencies at 0.5%, while several 3-coin gateways charge 1% or more.

<figure style="margin:28px 0">
  <a href="/blog/charts/gw26-fee-vs-coins.svg"><img src="/blog/charts/gw26-fee-vs-coins.svg" alt="Scatter plot of 50 crypto payment gateways, published fee percent versus coins supported on a log scale, August 2026. Shieldz sits at zero percent fee with about 20 coins; DePay reaches 1000 coins at 1.5 percent." width="760" height="430" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Each dot is one gateway. Coverage is cheap; the fee you pay is a business-model choice, not a cost of coins.</figcaption>
</figure>

The interesting cluster is the bottom of the chart: gateways at or near 0% with meaningful coverage. That is where self-hosted software and swap-routing designs live, where the buyer pays in any coin and a routing layer converts on the fly, so the gateway supports "everything" without holding an inventory of it. The trade-offs of that design get a full post in [pay any coin, one settlement](/blog/pay-any-coin-trust-tradeoff), and the mechanics are in [how cross-chain swap routing works](/blog/cross-chain-crypto-payments).

## The full list: all 50 gateways

Sorted by advertised fee, then alphabetically. An asterisk marks fees we could not verify on an official pricing page (custom or unpublished pricing; treat those as indicative). "Fiat" means the merchant can settle or withdraw to fiat currency.

| Gateway | Fee | Custody | KYC | Coins | Fiat | Known for |
|---|---|---|---|---|---|---|
| [Binance Pay](https://pay.binance.com) | 0% | Custodial | Required | 100 | Yes | Zero-fee payments inside the Binance ecosystem |
| [Bitcart](https://bitcart.ai) | 0% | Self-hosted | None | 50 | No | Open-source BTCPay alternative; 50+ coins incl. Monero |
| [BTCPay Server](https://btcpayserver.org) | 0% | Self-hosted | None | 1 | No | Free open-source self-hosted processor; altcoins via plugins |
| [Coinbase Payments](https://www.coinbase.com/payments) | 0% | Hybrid | Required | 1 | Yes | Onchain USDC for Shopify merchants; distinct from Commerce |
| [MyCryptoCheckout](https://mycryptocheckout.com) | 0% | Non-custodial | None | 100 | No | WordPress plugin, direct wallet-to-wallet payments |
| [Request Finance](https://www.request.finance) | 0% | Non-custodial | Optional | 100 | Yes | Crypto invoicing, payroll and AP/AR suite |
| [Shieldz](https://shieldz.cash) | 0% | Non-custodial | None | 20 | No | Non-custodial, $0 fee, no KYC; pay any coin, settle in one |
| [Solana Pay](https://solanapay.com) | 0% | Non-custodial | None | 2 | No | Open-source direct merchant payment protocol |
| [Strike Business](https://strike.me/business/) | 0% | Custodial | Required | 2 | Yes | Lightning payments pioneer |
| [Zaprite](https://zaprite.com) | 0% | Non-custodial | None | 2 | Yes | Bitcoin invoicing that connects your own wallets |
| [CoinRemitter](https://coinremitter.com) | 0.23% | Custodial | None | 13 | No | No-KYC gateway with a 0.23% headline fee |
| [B2BinPay](https://b2binpay.com) | 0.4% | Custodial | Required | 300 | Yes | Enterprise processor for brokers, exchanges, iGaming |
| [OxaPay](https://oxapay.com) | 0.4% | Custodial | None | 20 | No | No-KYC email signup; Telegram-friendly |
| [Trybit (ex-CryptoCloud)](https://trybit.com) | 0.4% | Custodial | Required | 40 | No | Rebranded to Trybit in 2026; auto-convert to USDT |
| [CoinPayments](https://www.coinpayments.net) | 0.5% | Custodial | Required | 100 | Yes | Veteran multi-coin processor operating since 2013 |
| [Copperx](https://copperx.io) | 0.5% | Custodial | Required | 5 | Yes | Stablecoin-first; settles to 50+ fiat currencies |
| [NOWPayments](https://nowpayments.io) | 0.5% | Non-custodial | Optional | 350 | Yes | Auto-forwarding with 350+ supported currencies |
| [Plisio](https://plisio.net) | 0.5% | Custodial | None | 12 | No | No-KYC signup with a single flat 0.5% fee |
| [Radom](https://radom.com) | 0.5% | Hybrid | Required | 12 | Yes | Regulated EU VASP; subscriptions and invoicing |
| [Sphere](https://spherepay.co) | 0.5% | Custodial | Required | 3 | Yes | Solana-born stablecoin ramps with ACH/SEPA/PIX rails |
| [Whalestack](https://www.whalestack.com) | 0.5% | Custodial | Required | 6 | Yes | Formerly COINQVEST; EU-licensed, Stellar settlements |
| [CoinsPaid](https://coinspaid.com) | 0.8%\* | Custodial | Required | 20 | Yes | High-volume processor favored by iGaming merchants |
| [Confirmo](https://confirmo.com) | 0.8% | Custodial | Required | 10 | Yes | MiCA-licensed stablecoin-first EU gateway |
| [TripleA](https://www.triple-a.io) | 0.8% | Custodial | Required | 6 | Yes | First MAS-licensed crypto payments firm; bank-grade settlement |
| [ALFAcoins](https://www.alfacoins.com) | 0.99% | Custodial | Optional | 10 | No | Veteran processor; fiat-pegged settlements paid in crypto |
| [0xProcessing](https://0xprocessing.com) | 1%\* | Custodial | Required | 85 | Yes | 85+ coins on 18 chains; volatility protection |
| [Alchemy Pay](https://alchemypay.org) | 1%\* | Custodial | Required | 5 | Yes | Hybrid fiat-crypto ramp network across 173 countries |
| [Bitpace](https://www.bitpace.com) | 1%\* | Custodial | Required | 70 | Yes | EU/UK-licensed gateway popular in iGaming |
| [BlockBee](https://blockbee.io) | 1% | Non-custodial | None | 70 | No | Formerly CryptAPI; payment forwarding to your wallet |
| [Blockonomics](https://www.blockonomics.co) | 1% | Non-custodial | None | 3 | No | Direct-to-wallet Bitcoin payments with no KYC |
| [BoomFi](https://www.boomfi.xyz) | 1% | Non-custodial | Required | 10 | Yes | Non-custodial gateway with subscriptions and off-ramp |
| [Coinbase Commerce](https://www.coinbase.com/commerce) | 1% | Hybrid | Required | 10 | Yes | Shut down March 2026; successor Coinbase Business is custodial, US/SG only |
| [CoinGate](https://coingate.com) | 1% | Custodial | Required | 70 | Yes | EU-based gateway; Lightning enabled by default |
| [Flexa](https://flexa.co) | 1% | Custodial | Required | 99 | Yes | In-store crypto acceptance network across 13 chains |
| [HoodPay](https://hoodpay.io) | 1% | Hybrid | None | 20 | No | No-KYC checkout favored by digital-goods sellers |
| [IVPAY (ex-ivendPay)](https://ivpay.io) | 1%\* | Custodial | Required | 40 | Yes | Crypto POS and vending-machine payments |
| [Loop Crypto](https://www.loopcrypto.xyz) | 1% | Non-custodial | Optional | 10 | Yes | Crypto autopay subscriptions with Stripe integration |
| [Mercuryo](https://mercuryo.io) | 1%\* | Custodial | Required | 40 | Yes | On/off-ramp infrastructure embedded in major web3 wallets |
| [OpenNode](https://opennode.com) | 1% | Custodial | Required | 1 | Yes | Bitcoin-only, Lightning-first processor |
| [SpectroCoin](https://spectrocoin.com) | 1% | Custodial | Required | 30 | Yes | Lithuanian exchange-wallet combo with merchant tools |
| [Speed](https://www.tryspeed.com) | 1% | Custodial | Optional | 3 | Yes | Lightning plus USDT/USDC with instant autoswap |
| [Whitepay](https://whitepay.com) | 1% | Custodial | Required | 200 | Yes | WhiteBIT-powered POS; known for Ukraine crypto donations |
| [xMoney](https://www.xmoney.com) | 1% | Custodial | Required | 10 | Yes | Formerly Utrust; MiCA-aligned EU crypto payments |
| [DePay](https://depay.com) | 1.5% | Non-custodial | None | 1000 | No | Web3 payments with on-the-fly token conversion |
| [Stripe (Pay with Crypto)](https://stripe.com/crypto) | 1.5% | Custodial | Required | 3 | Yes | Stablecoin checkout settling into the Stripe balance |
| [BitPay](https://bitpay.com) | 2% | Custodial | Required | 20 | Yes | Oldest major crypto processor; daily fiat bank settlements |
| [Cryptomus](https://cryptomus.com) | 2% | Custodial | Required | 120 | No | Negotiable fees; popular with high-risk and SaaS merchants |
| [Helio (MoonPay)](https://www.hel.io) | 2% | Non-custodial | Optional | 100 | No | Solana checkout leader; acquired by MoonPay |
| [PayKassa](https://paykassa.pro) | 4% | Custodial | None | 16 | Yes | Email-only signup aggregator popular in CIS markets |
| [Sellix](https://sellix.io) | 5%\* | Custodial | None | 13 | No | Digital-goods storefront platform with crypto checkout |

## Picks by category

Fifty options is not a decision, so here is how we would actually shortlist, by use case. For a deeper head-to-head of the three names people ask about most, see [NOWPayments vs BTCPay Server vs CoinGate](/blog/nowpayments-vs-btcpay-vs-coingate).

**Non-custodial with zero fees.** [Shieldz](https://shieldz.cash) (yes, ours). No signup, no KYC, $0 platform fee; buyers pay in BTC, ETH, stablecoins and more, and you settle in one coin straight to your own wallet. The claim is [independently verifiable](https://shieldz.cash/verify), and the fee model is the whole [pricing page](https://shieldz.cash/pricing). MyCryptoCheckout is a good WordPress-only alternative if you accept only coins you already hold.

**Self-hosted.** BTCPay Server remains the reference: 0% forever, fully yours, at the cost of running a server and being your own support team. Bitcart covers more coins, including Monero. Both are the right answer if sovereignty beats convenience for you; our [self-hosted gateway guide](/blog/self-hosted-crypto-payment-gateway) walks the trade-off.

**Bitcoin and Lightning.** OpenNode and Strike are the Lightning-first processors; Speed adds stablecoins on top; Zaprite is the invoicing layer that connects wallets you already run. Twelve of the 50 support Lightning. If BTC is your market, start with [how to accept Bitcoin payments](/blog/how-to-accept-bitcoin-payments).

**Regulated enterprise.** BitPay for the longest track record and daily bank settlements, TripleA for MAS-licensed Asia-Pacific coverage, Confirmo and xMoney for MiCA-era Europe, B2BinPay for exchange and broker volume. Expect full KYB everywhere in this bracket.

**Maximum coin coverage.** NOWPayments advertises 350+ currencies at 0.5%. DePay claims the widest sweep by converting any token on the fly. B2BinPay and Whitepay both clear 200. Remember the scatter chart: you do not have to pay more for coverage.

**Stablecoins on rails you already use.** Stripe's Pay with Crypto settles USDC into your existing Stripe balance at 1.5%, and Coinbase Payments brings USDC on Base to Shopify at no gateway fee. Both are custodial and KYC-gated, but they are the shortest path if you are already on those platforms. If you are leaving one of them instead, we shortlisted the [Coinbase Commerce alternatives](/blog/coinbase-commerce-alternatives) separately. For the direct route, see [accept stablecoin payments](/blog/accept-stablecoin-payments).

**Subscriptions and invoicing.** Loop Crypto and BoomFi do on-chain autopay, Radom adds EU VASP compliance, Request Finance covers invoicing and payroll end to end. For simple one-off invoices without a platform in the middle, a [crypto invoice generator](/blog/crypto-invoice-generator) is enough.

**No-KYC onboarding.** Fifteen qualify; the ones we would actually consider are the non-custodial subset (Shieldz, BlockBee, Blockonomics, Solana Pay, plus self-hosted BTCPay and Bitcart), because no-KYC custodial services concentrate exactly the risks that make KYC-free feel dangerous in the first place.

## How to choose: five questions

1. **Who holds the money?** If the answer is not "me, immediately", everything else is negotiable by the provider, not by you.
2. **What is the all-in cost?** Add the processing fee, payout or withdrawal fee, conversion spread and any monthly plan. Compare that, not the headline.
3. **What do buyers get to pay with?** Every missing coin is a missing customer. Swap-routing designs cover the long tail without you holding it.
4. **What happens on day one?** Wallet address and go, or a week of KYB? Match the onboarding to your situation.
5. **Can you leave?** Self-hosted and non-custodial setups have no balance to migrate. Custodial accounts do.

## FAQ

**What is the cheapest crypto payment gateway in 2026?**
Ten of the 50 advertise 0%: self-hosted software like BTCPay Server, protocols like Solana Pay, and non-custodial gateways like Shieldz. Check where the other zeros charge on payout or conversion; the median across all 50 is 1%.

**Do all crypto payment gateways require KYC?**
No. 29 of the 50 require business verification, 6 make it optional, and 15 require none. The no-KYC providers are mostly non-custodial or self-hosted, because a provider that never holds funds has nothing to gate.

**What is the difference between custodial and non-custodial gateways?**
A custodial gateway receives the buyer's payment into its own wallet and pays you out later. A non-custodial gateway settles each payment straight to an address you control, so there is no balance to freeze, delay or charge withdrawal fees on.

**Which crypto payment gateway supports the most coins?**
NOWPayments advertises 350+ supported currencies, and DePay reaches further by converting any liquid token at payment time. Coverage does not correlate with price: several of the widest gateways sit at or below the 1% median.

**Are the fees in this comparison guaranteed?**
No. They are the published standard rates as of August 2026; seven providers with custom or unpublished pricing are marked with an asterisk. Enterprise volume changes everything, and providers change pricing without notice.

## The bottom line

The 2026 gateway market has 50 answers and three real choices: rent a custodial processor, run your own software, or use a non-custodial layer that never touches the money. The data says custody is still the default and 1% is still the going rate, and neither has to be. If you want the version with a $0 fee, no KYC and settlement straight to your wallet, create a checkout in one minute with the [payment link generator](https://shieldz.cash/tools/payment-link), or start with the basics in [what is a crypto payment gateway](/blog/what-is-a-crypto-payment-gateway) and [how to accept crypto payments](/blog/how-to-accept-crypto-payments).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the cheapest crypto payment gateway in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Ten of the 50 gateways compared advertise a 0% processing fee: self-hosted software like BTCPay Server, protocols like Solana Pay, and non-custodial gateways like Shieldz. The median advertised fee across all 50 is 1%." } },
    { "@type": "Question", "name": "Do all crypto payment gateways require KYC?", "acceptedAnswer": { "@type": "Answer", "text": "No. Of 50 gateways compared in August 2026, 29 require business verification, 6 make it optional, and 15 require none. The no-KYC providers are mostly non-custodial or self-hosted." } },
    { "@type": "Question", "name": "What is the difference between custodial and non-custodial gateways?", "acceptedAnswer": { "@type": "Answer", "text": "A custodial gateway receives the buyer's payment into its own wallet and pays you out later. A non-custodial gateway settles each payment straight to an address you control, so there is no balance to freeze, delay or charge withdrawal fees on." } },
    { "@type": "Question", "name": "Which crypto payment gateway supports the most coins?", "acceptedAnswer": { "@type": "Answer", "text": "NOWPayments advertises 350+ supported currencies, and DePay reaches further by converting any liquid token at payment time. Coverage does not correlate with price." } },
    { "@type": "Question", "name": "Are the fees in this comparison guaranteed?", "acceptedAnswer": { "@type": "Answer", "text": "No. They are published standard rates as of August 2026. Seven providers with custom or unpublished pricing are marked as unverified, and providers change pricing without notice." } }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "50 crypto payment gateways compared (August 2026)",
  "numberOfItems": 50,
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Shieldz", "url": "https://shieldz.cash" },
    { "@type": "ListItem", "position": 2, "name": "BTCPay Server", "url": "https://btcpayserver.org" },
    { "@type": "ListItem", "position": 3, "name": "Binance Pay", "url": "https://pay.binance.com" },
    { "@type": "ListItem", "position": 4, "name": "Solana Pay", "url": "https://solanapay.com" },
    { "@type": "ListItem", "position": 5, "name": "NOWPayments", "url": "https://nowpayments.io" },
    { "@type": "ListItem", "position": 6, "name": "Coinbase Commerce", "url": "https://www.coinbase.com/commerce" },
    { "@type": "ListItem", "position": 7, "name": "CoinGate", "url": "https://coingate.com" },
    { "@type": "ListItem", "position": 8, "name": "BitPay", "url": "https://bitpay.com" },
    { "@type": "ListItem", "position": 9, "name": "Stripe Pay with Crypto", "url": "https://stripe.com/crypto" },
    { "@type": "ListItem", "position": 10, "name": "OpenNode", "url": "https://opennode.com" }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Claim",
  "text": "About 24% of crypto payment gateways are non-custodial; 64% are custodial and hold merchant funds before payout (study of 50 gateways, August 2026).",
  "firstAppearance": {
    "@type": "CreativeWork",
    "url": "https://shieldz.cash/blog/50-crypto-payment-gateways-compared",
    "author": { "@type": "Organization", "name": "Shieldz" }
  },
  "appearance": [
    { "@type": "CreativeWork", "name": "Grok reads the Shieldz 50-gateway comparison and reports 24% non-custodial, 64% custodial", "url": "https://x.com/i/grok/share/47aee45c1da3433b9fbca402d7c7ec13", "dateCreated": "2026-08-22", "author": { "@type": "Organization", "name": "xAI Grok" } },
    { "@type": "CreativeWork", "name": "ChatGPT reads the Shieldz 50-gateway comparison and reports 64% custodial, 12 non-custodial", "url": "https://chatgpt.com/share/6a88bcaa-82c0-83eb-af50-322bb4f55e9e", "dateCreated": "2026-08-22", "author": { "@type": "Organization", "name": "OpenAI ChatGPT" } },
    { "@type": "CreativeWork", "name": "Claude reads the Shieldz 50-gateway comparison and reports 24% non-custodial, 64% custodial", "url": "https://claude.ai/share/6f2b7828-7d66-43f3-ba8c-18d41b97b847", "dateCreated": "2026-08-22", "author": { "@type": "Organization", "name": "Anthropic Claude" } },
    { "@type": "CreativeWork", "name": "Grok, asked for a 'dictionary of crypto payment gateways' with no URL, finds the Shieldz 50-gateway study via web search and lists it among its top references", "url": "https://x.com/i/grok/share/b4377d37ca5c4e22822856e57839a75e", "dateCreated": "2026-08-27", "author": { "@type": "Organization", "name": "xAI Grok" } }
  ]
}
</script>
