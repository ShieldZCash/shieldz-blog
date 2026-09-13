---
title: "87 Crypto Payment Gateways Compared: Fees, Custody, KYC (September 2026)"
description: "We compared 87 crypto payment gateways on fees, custody, KYC and coin coverage for September 2026. Six fresh charts, one big table, honest notes."
pubDate: 2026-09-13
author: "Deniz Yanbollu"
tags: ["crypto payment gateways", "comparison", "fees", "crypto", "payments"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/87-crypto-payment-gateways-compared.png"
---

In August 2026 we published a study of 50 crypto payment gateways. The underlying dataset kept growing as a living resource, and the September 2026 re-verification pass now covers 87 crypto payment gateways, every fee checked again against the provider's own pricing page. This post is that update: the same methodology, a fresh table, six new charts, and an honest look at what changed in a month.

If you have not read it, the [original August 2026 study](/blog/50-crypto-payment-gateways-compared) is still live and unchanged, a frozen 50-gateway snapshot kept exactly as published so it stays reproducible. Think of this post as the next edition. If you want curated shortlists instead of the full market, we keep those too: the [best crypto payment gateways of 2026](/blog/best-crypto-payment-gateways-2026) and the [best free crypto payment gateways](/blog/best-free-crypto-payment-gateways-2026).

**Disclosure up front:** Shieldz is our product, and it appears in the data like everyone else. Every number in this post comes from published pricing pages or provider docs, and where we could not verify a figure we say so with an asterisk.

## What changed since August

The headline finding held as the dataset nearly doubled: **57 of 87 gateways (66%) are custodial**, almost identical to 64% at n=50. Custody is not a phase this market is growing out of, it is the default, and new entrants keep arriving custodial. Read the full argument in the [custody gap report](/blog/custody-gap-crypto-payment-gateways).

The biggest force behind the growth is the **exchange-Pay wave**: Kraken Pay, Bybit Pay, KuCoin Pay, Bitget Pay, Gate Pay and WhiteBIT Pay all added exchange-backed merchant acceptance since the original study, mostly custodial, mostly KYC-gated, often at a 0% headline fee that settles inside their own ecosystem. Stablecoin infrastructure firm BVNK was acquired by Mastercard, another sign incumbents now treat crypto acceptance as core rails rather than an experiment.

The re-verification also caught the market moving under the old study: Coinbase Commerce's successor Coinbase Payments is live for Shopify (onchain USDC, distinct from the shut-down Commerce product), Helio relaunched as MoonPay Commerce, CryptoCloud rebranded to Trybit, ivendPay became IVPAY, Utrust's successor xMoney is unchanged, and CryptoChill rebranded to UniWire. Two names from the August list are now offline: **Sellix's domain was seized by the FBI in Operation Talent** and HoodPay's site shows an FBI seizure notice, both discontinued as of September 2026. Whalestack and Loop Crypto's sites were unreachable at verification time; we kept their last-known figures with a note.

## Methodology

Same seven facts as the original study, now recorded for 87 gateways: **fee**, **custody** (custodial holds funds first, non-custodial settles direct to your address, self-hosted means you run the software, hybrid depends on configuration), **KYC** requirement, **coins** supported, **fiat settlement**, **Lightning support**, and **year launched**. This is our editorial classification based on each provider's own docs, not a paid or sponsored ranking.

27 of the 87 fees could not be confirmed on an official pricing page and are marked with an asterisk. Nothing here is a recommendation of any provider's compliance posture.

## Key findings, one page each

- [Are crypto payment gateways custodial?](/blog/are-crypto-payment-gateways-custodial): **66% are** in this September pass (57 of 87), versus 64% in August.
- [How many crypto payment gateways are non-custodial?](/blog/how-many-non-custodial-crypto-payment-gateways): **21 of 87** (24%), unchanged from August's 24%.
- [The median crypto payment gateway fee](/blog/average-crypto-payment-gateway-fee): still **1% per transaction**.
- [How many crypto payment gateways are free?](/blog/how-many-free-crypto-payment-gateways): **18 of 87** charge a $0 platform fee (21%).
- [Do crypto payment gateways require KYC?](/blog/do-crypto-payment-gateways-require-kyc): **61% do** (53 of 87 require it outright, 9 more make it optional).
- [How many crypto payment gateways settle to fiat?](/blog/crypto-payment-gateways-fiat-settlement): **69%** (60 of 87).
- [How many crypto payment gateways publish their fees?](/blog/how-many-crypto-payment-gateways-publish-fees): **69%** (60 of 87); the same share as August, the opaque rest still skew pricier.

## On AI citations

The August study was independently read and reproduced by Grok, ChatGPT and Claude, all three landed on the same "64% custodial, 24% non-custodial" finding from that exact snapshot. Those conversations are real and linked from the [original post](/blog/50-crypto-payment-gateways-compared#how-ai-assistants-read-this-comparison). We have not yet run that same test against this September edition, so we are not going to invent one. If you ask an AI assistant about this update and it cites the page, the living record of every such conversation lives at [AI assistants on our gateway data](/blog/ai-citations), check there for what is verified as of today.

## The market at a glance: custody is still the norm

<figure style="margin:28px 0">
  <a href="/blog/charts/gw-sep26-custody-donut.svg"><img src="/blog/charts/gw-sep26-custody-donut.svg" alt="Donut chart of custody models across 87 crypto payment gateways in September 2026: 57 custodial, 21 non-custodial, 4 self-hosted, 5 hybrid." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">66% of the market still holds your money before you do. The share has not moved since August.</figcaption>
</figure>

Every other risk in this market follows from custody: fund freezes, payout delays, account closures, withdrawal fees and forced KYC only exist because someone else is holding your revenue. The full argument is in [non-custodial crypto payment gateway](/blog/non-custodial-crypto-payment-gateway).

The market keeps getting younger, not older. **45 of the 87 gateways (52%) launched in 2020 or later**, and the 2020 to 2022 cohort remains the largest single wave.

<figure style="margin:28px 0">
  <a href="/blog/charts/gw-sep26-founding-years.svg"><img src="/blog/charts/gw-sep26-founding-years.svg" alt="Histogram of launch years for 87 crypto payment gateways: a wave of new entrants from 2020 onward, with 45 of 87 launched in 2020 or later." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">More than half of today's market launched in the last six years, and the newest cohort (the exchange-Pay wave) is almost entirely custodial.</figcaption>
</figure>

## What it actually costs

The median advertised fee across all 87 gateways is still **1%**. Eighteen of the 87 advertise 0%, and as in August, the zeros are not all equal:

- **Genuinely fee-free rails**: self-hosted software (BTCPay Server, Bitcart, DV.net, PayRam), open protocols (Solana Pay), and non-custodial gateways with no platform fee (Shieldz, MyCryptoCheckout, Request Finance's base plan). How a $0 fee can be sustainable is its own question, answered at [why Shieldz is free](https://shieldz.cash/why-free).
- **Zero on one side, charged on the other**: Binance Pay accepts for 0% but charges 0.8% on payouts (capped at $5). Strike Business processes for 0% and charges on fiat conversion. If the fee is not on the payment, look for it on the exit.

<figure style="margin:28px 0">
  <a href="/blog/charts/gw-sep26-fee-bars.svg"><img src="/blog/charts/gw-sep26-fee-bars.svg" alt="Horizontal bar chart of published fees for 16 well-known crypto payment gateways in September 2026, from Sellix at up to 5 percent down to BTCPay Server and Shieldz at 0 percent." width="760" height="573" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The same 16 well-known names tracked since August, re-verified for September. The spread is unchanged: 5% down to 0%.</figcaption>
</figure>

<figure style="margin:28px 0">
  <a href="/blog/charts/gw-sep26-cost-curve.svg"><img src="/blog/charts/gw-sep26-cost-curve.svg" alt="Line chart of total processing cost by sale size in September 2026: on a 10,000 dollar sale Stripe card rails cost 290 dollars, BitPay 200 dollars, a 1 percent crypto processor 100 dollars, and Shieldz 0 dollars." width="760" height="430" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The same sale at published rates. On $10,000, card rails take $290, a typical crypto processor takes $100, Shieldz takes $0.</figcaption>
</figure>

## KYC: 53 of 87 require verification up front

**53 of the 87 (61%) require business verification before the first payment.** Nine make it optional, usually for fiat settlement or above a volume threshold. **25 of the 87 (29%) require no KYC at all.**

<figure style="margin:28px 0">
  <a href="/blog/charts/gw-sep26-kyc-split.svg"><img src="/blog/charts/gw-sep26-kyc-split.svg" alt="Column chart of merchant KYC requirements across 87 crypto payment gateways in September 2026: 25 require no KYC, 9 optional, 53 require business verification." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The pattern from August held: providers that touch fiat or hold funds are regulated like money institutions and must verify merchants.</figcaption>
</figure>

Of the 25 no-KYC gateways, most are non-custodial or self-hosted, the same correlation as in August. More in [accepting crypto payments without KYC](/blog/accept-crypto-payments-without-kyc).

## Fees vs coverage: still no correlation

<figure style="margin:28px 0">
  <a href="/blog/charts/gw-sep26-fee-vs-coins.svg"><img src="/blog/charts/gw-sep26-fee-vs-coins.svg" alt="Scatter plot of 87 crypto payment gateways, published fee percent versus coins supported on a log scale, September 2026. Shieldz sits at zero percent fee with about 20 coins; DePay reaches 1000 coins at 1.5 percent." width="760" height="430" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Each dot is one gateway. Coverage is still cheap; the fee is a business-model choice, not a cost of coins.</figcaption>
</figure>

NOWPayments still advertises 350+ currencies at 1%, and DePay still reaches the widest coverage by converting any liquid token at payment time, both far from the top of the fee axis. The mechanics of that design are in [how cross-chain swap routing works](/blog/cross-chain-crypto-payments), and the trade-offs in [pay any coin, one settlement](/blog/pay-any-coin-trust-tradeoff).

## The full list: all 87 gateways

Sorted by advertised fee, then alphabetically. An asterisk marks fees we could not verify on an official pricing page (custom or unpublished pricing; treat those as indicative). "Fiat" means the merchant can settle or withdraw to fiat currency.

| Gateway | Fee | Custody | KYC | Coins | Fiat | Known for |
|---|---|---|---|---|---|---|
| [ATLOS](https://atlos.io) | 0%\* | Non-custodial | None | 11 | No | Permissionless no-KYC gateway, direct to Web3 wallet, 11 chains incl. Monero |
| [Binance Pay](https://pay.binance.com) | [0%](https://pay.binance.com) | Custodial | Required | 100 | Yes | Zero-fee payments inside the Binance ecosystem |
| [Bitcart](https://bitcart.ai) | [0%](https://bitcart.ai/) | Self-hosted | None | 50 | No | Open-source BTCPay alternative; 50+ coins incl. Monero |
| [Bitget Pay](https://www.bitget.com) | 0%\* | Custodial | Required | 3 | Yes | USDT QR Scan to Pay across SE Asia and LatAm |
| [BTCPay Server](https://btcpayserver.org) | [0%](https://btcpayserver.org/) | Self-hosted | None | 1 | No | Free open-source self-hosted processor; altcoins via plugins |
| [Bybit Pay](https://www.bybit.com/en/bybitpay/) | [0%](https://www.bybit.com/en/help-center/article/FAQ-Bybit-Pay) | Custodial | Required | 100 | Yes | Exchange-backed merchant payments, zero base fee |
| [Coinbase Payments](https://www.coinbase.com/payments) | [0%](https://www.coinbase.com/payments) | Hybrid | Required | 1 | Yes | Onchain USDC for Shopify merchants; distinct from Commerce |
| [Coinify](https://www.coinify.com) | [0%](https://help.coinify.com/hc/en-us/articles/360014078380-Merchant-fees) | Custodial | Required | 20 | Yes | Danish processor, weekly EUR/BTC payouts |
| [DV.net](https://dv.net) | [0%](https://github.com/dv-net/dv-merchant) | Self-hosted | None | 50 | No | Open-source self-hosted, merchant owns wallets and seed |
| [Kraken Pay](https://blog.kraken.com/product/kraken-pay) | [0%](https://blog.kraken.com/product/kraken-pay) | Custodial | Required | 300 | Yes | Paylinks and Kraktag payments, 300+ assets |
| [KuCoin Pay](https://www.kucoin.com/pay) | 0%\* | Custodial | Required | 50 | Yes | Exchange merchant tool, off-chain internal settlement |
| [MyCryptoCheckout](https://mycryptocheckout.com) | [0%](https://mycryptocheckout.com) | Non-custodial | None | 100 | No | WordPress plugin, direct wallet-to-wallet payments |
| [PayRam](https://www.payram.com) | [0%](https://www.payram.com/white-label) | Self-hosted | None | 20 | No | Self-hosted non-custodial gateway, iGaming-popular |
| [Request Finance](https://www.request.finance) | [0%](https://www.request.finance) | Non-custodial | Optional | 100 | Yes | Crypto invoicing, payroll and AP/AR suite |
| [Shieldz](https://shieldz.cash) | [0%](https://shieldz.cash/pricing) | Non-custodial | None | 20 | No | Non-custodial, $0 fee, no KYC; pay any coin, settle in one |
| [Solana Pay](https://solanapay.com) | [0%](https://solanapay.com/) | Non-custodial | None | 2 | No | Open-source direct merchant payment protocol |
| [Strike Business](https://strike.me/business/) | [0%](https://strike.me/business/) | Custodial | Required | 2 | Yes | Lightning payments pioneer |
| [Zaprite](https://zaprite.com) | [0%](https://zaprite.com/pricing) | Non-custodial | None | 2 | Yes | Bitcoin invoicing that connects your own wallets |
| [XAIGATE](https://www.xaigate.com) | [0.2%](https://www.xaigate.com/low-fee-crypto-payment-gateway/) | Non-custodial | None | 50 | Yes | Very low fee; WooCommerce/PrestaShop plugins |
| [CoinRemitter](https://coinremitter.com) | [0.23%](https://coinremitter.com/fees) | Custodial | None | 13 | No | No-KYC gateway with a 0.23% headline fee |
| [B2BinPay](https://b2binpay.com) | [0.25%](https://b2binpay.com) | Custodial | Required | 300 | Yes | Enterprise processor for brokers, exchanges, iGaming |
| [MaxelPay](https://www.maxelpay.com) | [0.4%](https://www.maxelpay.com/) | Non-custodial | None | 300 | No | No-KYC, own payout wallet, white-label |
| [OxaPay](https://oxapay.com) | [0.4%](https://oxapay.com/) | Custodial | None | 20 | No | No-KYC email signup; Telegram-friendly |
| [Copperx](https://copperx.io) | [0.5%](https://copperx.io/pricing) | Custodial | Required | 5 | Yes | Stablecoin-first; settles to 50+ fiat currencies |
| [Crypto.com Pay](https://crypto.com/pay-merchant) | [0.5%](https://crypto.com/en/pay-merchant) | Custodial | Required | 20 | Yes | Shopify-integrated acceptance, multi-fiat settlement |
| [Gate Pay](https://www.gate.com/pay) | [0.5%](https://www.gate.com/pay) | Custodial | Required | 300 | Yes | Gate.io exchange merchant acceptance, 300+ coins |
| [PassimPay](https://passimpay.io) | [0.5%](https://passimpay.io/en) | Custodial | Required | 74 | Yes | 74+ coins, 18+ chains, SEPA EUR settlement |
| [Paymento](https://paymento.io) | [0.5%](https://paymento.io/fees-and-pricing/) | Non-custodial | None | 15 | No | XPUB-based, funds direct to merchant wallet |
| [Plisio](https://plisio.net) | [0.5%](https://plisio.net/pricing) | Custodial | None | 12 | No | No-KYC signup with a single flat 0.5% fee |
| [Radom](https://radom.com) | [0.5%](https://radom.com/pricing) | Hybrid | Required | 12 | Yes | Regulated EU VASP; subscriptions and invoicing |
| [Sphere](https://spherepay.co) | [0.5%](https://spherepay.co) | Custodial | Required | 3 | Yes | Solana-born stablecoin ramps with ACH/SEPA/PIX rails |
| [Whalestack](https://www.whalestack.com) | 0.5%\* | Custodial | Required | 6 | Yes | Formerly COINQVEST; EU-licensed, Stellar settlements; site unreachable Sep 2026 |
| [WhiteBIT Pay](https://whitebit.com) | 0.5%\* | Custodial | Required | 200 | Yes | EU-regulated exchange gateway, powers Whitepay |
| [Aurpay](https://aurpay.net) | [0.8%](https://aurpay.net/aurspace/crypto-payment-gateway-fees-compared-2026/) | Non-custodial | Optional | 8 | No | Non-custodial, stablecoin settlement, Lightning support |
| [CoinsPaid](https://coinspaid.com) | 0.8%\* | Custodial | Required | 20 | Yes | High-volume processor favored by iGaming merchants |
| [Confirmo](https://confirmo.com) | [0.8%](https://confirmo.com) | Custodial | Required | 10 | Yes | MiCA-licensed stablecoin-first EU gateway |
| [TripleA](https://www.triple-a.io) | [0.8%](https://www.triple-a.io) | Custodial | Required | 6 | Yes | First MAS-licensed crypto payments firm; bank-grade settlement |
| [Cryptadium](https://cryptadium.com) | 0.9%\* | Custodial | Required | 50 | Yes | Enterprise e-commerce focus, volume discounts |
| [GoCrypto](https://gocrypto.com) | 0.9%\* | Custodial | Required | 50 | Yes | Slovenian POS-focused crypto acceptance |
| [Bitnovo Pay](https://www.bitnovo.com/en/pay) | [0.95%](https://www.bitnovo.com/en/pay) | Custodial | Required | 6 | Yes | Valencia-based, price locked at transaction, EUR settlement |
| [ALFAcoins](https://www.alfacoins.com) | [0.99%](https://www.alfacoins.com/merchant) | Custodial | Optional | 10 | No | Veteran processor; fiat-pegged settlements paid in crypto |
| [0xProcessing](https://0xprocessing.com) | 1%\* | Custodial | Required | 85 | Yes | 85+ coins on 18 chains; volatility protection |
| [Alchemy Pay](https://alchemypay.org) | 1%\* | Custodial | Required | 5 | Yes | Hybrid fiat-crypto ramp network across 173 countries |
| [Bitpace](https://www.bitpace.com) | 1%\* | Custodial | Required | 70 | Yes | EU/UK-licensed gateway popular in iGaming |
| [BlockBee](https://blockbee.io) | [1%](https://blockbee.io/fees/) | Non-custodial | None | 70 | No | Formerly CryptAPI; payment forwarding to your wallet |
| [Blockonomics](https://www.blockonomics.co) | [1%](https://www.blockonomics.co) | Non-custodial | None | 3 | No | Direct-to-wallet Bitcoin payments with no KYC |
| [BoomFi](https://www.boomfi.xyz) | [1%](https://docs.boomfi.xyz/docs/pricing-and-fees) | Non-custodial | Required | 10 | Yes | Non-custodial gateway with subscriptions and off-ramp |
| [BVNK](https://www.bvnk.com/payments) | [1%](https://docs.bvnk.com/bvnk/get-started/charge-customer-fees/) | Custodial | Required | 10 | Yes | Stablecoin acceptance infra, acquired by Mastercard 2026 |
| [Coinbase Commerce](https://www.coinbase.com/commerce) | [1%](https://www.coinbase.com/commerce) | Hybrid | Required | 10 | Yes | Shut down March 2026; successor Coinbase Business is custodial, US/SG only |
| [CoinGate](https://coingate.com) | [1%](https://www.coingate.com/pricing) | Custodial | Required | 70 | Yes | EU-based gateway; Lightning enabled by default |
| [CoinsBuy](https://coinsbuy.com) | 1%\* | Custodial | Required | 40 | Yes | Panama-based enterprise processor, USDT on 9 chains |
| [Cryptopay Business](https://cryptopay.me/business) | 1%\* | Custodial | Required | 19 | Yes | London-based, next-day bank settlement |
| [EukaPay](https://eukapay.com) | 1%\* | Custodial | Required | 20 | Yes | Canadian FINTRAC MSB, multi-fiat settlement, Lightning |
| [Finrax](https://finrax.com) | 1%\* | Custodial | Required | 50 | Yes | Estonia-licensed B2B gateway, hosted checkout + API |
| [Flexa](https://flexa.co) | [1%](https://flexa.co/payments) | Custodial | Required | 99 | Yes | In-store crypto acceptance network across 13 chains |
| [HoodPay](https://hoodpay.io) | 1%\* | Hybrid | None | 20 | No | Site shows an FBI seizure notice as of Sep 2026; service discontinued |
| [IVPAY (ex-ivendPay)](https://ivpay.io) | 1%\* | Custodial | Required | 40 | Yes | Crypto POS and vending-machine payments |
| [Loop Crypto](https://www.loopcrypto.xyz) | 1%\* | Non-custodial | Optional | 10 | Yes | Crypto autopay subscriptions with Stripe integration; site unreachable Sep 2026 |
| [Mercuryo](https://mercuryo.io) | 1%\* | Custodial | Required | 40 | Yes | On/off-ramp infrastructure embedded in major web3 wallets |
| [NOWPayments](https://nowpayments.io) | [1%](https://nowpayments.io/pricing) | Non-custodial | Optional | 350 | Yes | Auto-forwarding with 350+ supported currencies |
| [Nuvei Pay with Crypto](https://www.nuvei.com/apm/pay-with-crypto) | 1%\* | Custodial | Required | 40 | Yes | Enterprise acquirer crypto acceptance, 200+ markets |
| [Oobit](https://www.oobit.com) | [1%](https://www.cryptocards.so/en/card/oobit-tap-pay) | Non-custodial | Required | 6 | Yes | Tap-to-pay crypto at Visa terminals, fiat settlement |
| [OpenNode](https://opennode.com) | [1%](https://opennode.com/pricing/) | Custodial | Required | 1 | Yes | Bitcoin-only, Lightning-first processor |
| [PYMSTR](https://pymstr.com) | [1%](https://pymstr.com/pricing) | Non-custodial | None | 2 | No | Non-custodial USDC/USDT direct to merchant wallet |
| [RocketFuel](https://rocketfuel.inc) | 1%\* | Custodial | Required | 160 | Yes | US-listed (RKFL), one-click checkout, 160+ coins |
| [Salamantex](https://salamantex.com) | 1%\* | Hybrid | Required | 8 | Yes | Austrian POS terminals, crypto or EUR at checkout |
| [SpectroCoin](https://spectrocoin.com) | [1%](https://docs.spectrocoin.com/docs/fees) | Custodial | Required | 30 | Yes | Lithuanian exchange-wallet combo with merchant tools |
| [Speed](https://www.tryspeed.com) | [1%](https://www.tryspeed.com/pricing/) | Custodial | Optional | 3 | Yes | Lightning plus USDT/USDC with instant autoswap |
| [SpicePay](https://www.spicepay.com) | [1%](https://www.spicepay.com/accept-payments/) | Custodial | Required | 5 | Yes | Long-running BTC processor, PayPal/bank payouts |
| [UniPayment](https://unipayment.io) | [1%](https://unipayment.io) | Custodial | Required | 30 | Yes | Hybrid fiat/crypto gateway for brokers and e-commerce |
| [UniWire (ex-CryptoChill)](https://uniwire.com) | 1%\* | Custodial | Optional | 20 | Yes | CryptoChill rebranded to UniWire; MPC wallets, crypto-to-fiat off-ramp |
| [Wallet Pay](https://pay.wallet.tg) | 1%\* | Custodial | Optional | 3 | No | TON-based acceptance inside Telegram Wallet |
| [Whitepay](https://whitepay.com) | [1%](https://whitepay.com/product/crypto-acquiring) | Custodial | Required | 200 | Yes | WhiteBIT-powered POS; known for Ukraine crypto donations |
| [xMoney](https://www.xmoney.com) | [1%](https://www.xmoney.com) | Custodial | Required | 10 | Yes | Formerly Utrust; MiCA-aligned EU crypto payments |
| [DePay](https://depay.com) | [1.5%](https://depay.com/pricing) | Non-custodial | None | 1000 | No | Web3 payments with on-the-fly token conversion |
| [GoUrl](https://gourl.io) | [1.5%](https://gourl.io/) | Non-custodial | None | 10 | No | Open-source, direct-to-wallet, WordPress plugin |
| [PayGate.to](https://paygate.to) | [1.5%](https://paygate.to/crypto-payment-gateway-no-kyc-instant-payouts/) | Non-custodial | None | 50 | No | No signup, instant forwarding to merchant wallet |
| [Stripe (Pay with Crypto)](https://stripe.com/crypto) | [1.5%](https://docs.stripe.com/crypto/pay-with-crypto) | Custodial | Required | 3 | Yes | Renamed Stablecoin payments in 2026; USDC/USDP/USDG into the Stripe balance |
| [Trybit (ex-CryptoCloud)](https://trybit.com) | 1.9%\* | Custodial | Required | 40 | No | Rebranded to Trybit in 2026; auto-convert to USDT |
| [Bit2Me Commerce](https://bit2me.com/suite/commerce) | [1.95%](https://support.bit2me.com/en/support/solutions/articles/35000201787) | Custodial | Required | 50 | Yes | Spanish exchange gateway, auto EUR to bank |
| [BitPay](https://bitpay.com) | [2%](https://bitpay.com/pricing) | Custodial | Required | 20 | Yes | Oldest major crypto processor; daily fiat bank settlements |
| [Cryptomus](https://cryptomus.com) | [2%](https://cryptomus.com/fees/payment) | Custodial | Required | 120 | No | Negotiable fees; popular with high-risk and SaaS merchants |
| [MoonPay Commerce (ex-Helio)](https://www.moonpay.com/business/commerce) | 2%\* | Non-custodial | Optional | 100 | No | Helio acquired by MoonPay, relaunched as MoonPay Commerce Oct 2025 |
| [PayRequest](https://payrequest.io) | [2%](https://payrequest.io) | Custodial | None | 1 | Yes | Hybrid fiat+crypto payment links (Stripe/PayPal/USDC) for creators and SMBs |
| [CoinPayments](https://www.coinpayments.net) | [3%](https://www.coinpayments.net/help-fees) | Custodial | Required | 100 | Yes | Veteran multi-coin processor operating since 2013 |
| [PayKassa](https://paykassa.pro) | [4%](https://paykassa.pro/en/accept/) | Custodial | None | 16 | Yes | Email-only signup aggregator popular in CIS markets |
| [Sellix](https://sellix.io) | 5%\* | Custodial | None | 13 | No | Domain seized by the FBI in Operation Talent; offline as of Sep 2026 |

## Picks by category

For a deeper head-to-head of the three names people ask about most, see [NOWPayments vs BTCPay Server vs CoinGate](/blog/nowpayments-vs-btcpay-vs-coingate).

**Non-custodial with zero fees.** [Shieldz](https://shieldz.cash) (yes, ours). No signup, no KYC, $0 platform fee; buyers pay in BTC, ETH, stablecoins and more, and you settle in one coin straight to your own wallet. The claim is [independently verifiable](https://shieldz.cash/verify), and the fee model is the whole [pricing page](https://shieldz.cash/pricing). MyCryptoCheckout and Request Finance are non-custodial WordPress and invoicing alternatives at the same $0 headline.

**Self-hosted.** BTCPay Server remains the reference: 0% forever, fully yours, at the cost of running a server. Bitcart and DV.net cover more coins, PayRam leans toward iGaming. Our [self-hosted gateway guide](/blog/self-hosted-crypto-payment-gateway) walks the trade-off.

**Bitcoin and Lightning.** OpenNode and Strike Business are the Lightning-first processors, Speed and EukaPay add stablecoins on top. Sixteen of the 87 support Lightning. Start with [how to accept Bitcoin payments](/blog/how-to-accept-bitcoin-payments).

**Regulated enterprise.** BitPay for the longest track record, TripleA for MAS-licensed Asia-Pacific coverage, Confirmo and xMoney for MiCA-era Europe, B2BinPay and Kraken Pay for exchange-scale volume. Expect full KYB everywhere in this bracket.

**Maximum coin coverage.** NOWPayments still advertises 350+ currencies. DePay claims the widest sweep by converting any token on the fly. B2BinPay, Gate Pay and Kraken Pay all clear 300. You do not have to pay more for coverage.

**No-KYC onboarding.** 25 qualify now, up from 15 in August; the ones we would actually consider are the non-custodial or self-hosted subset (Shieldz, ATLOS, MyCryptoCheckout, XAIGATE, MaxelPay, Solana Pay, plus BTCPay Server, Bitcart, DV.net and PayRam), because no-KYC custodial services concentrate exactly the risks that make KYC-free feel dangerous in the first place.

## How to choose: five questions

1. **Who holds the money?** If the answer is not "me, immediately", everything else is negotiable by the provider, not by you.
2. **What is the all-in cost?** Add the processing fee, payout or withdrawal fee, conversion spread and any monthly plan. Compare that, not the headline.
3. **What do buyers get to pay with?** Every missing coin is a missing customer. Swap-routing designs cover the long tail without you holding it.
4. **What happens on day one?** Wallet address and go, or a week of KYB? Match the onboarding to your situation.
5. **Can you leave?** Self-hosted and non-custodial setups have no balance to migrate. Custodial accounts do.

## FAQ

**What is the cheapest crypto payment gateway in 2026?**
Eighteen of the 87 advertise 0%: self-hosted software like BTCPay Server, protocols like Solana Pay, and non-custodial gateways like Shieldz. Check where the other zeros charge on payout or conversion; the median across all 87 is 1%.

**Do all crypto payment gateways require KYC?**
No. 53 of the 87 require business verification, 9 make it optional, and 25 require none. The no-KYC providers are mostly non-custodial or self-hosted, because a provider that never holds funds has nothing to gate.

**What is the difference between custodial and non-custodial gateways?**
A custodial gateway receives the buyer's payment into its own wallet and pays you out later. A non-custodial gateway settles each payment straight to an address you control, so there is no balance to freeze, delay or charge withdrawal fees on.

**Which crypto payment gateway supports the most coins?**
NOWPayments advertises 350+ supported currencies, and DePay reaches further by converting any liquid token at payment time. Coverage does not correlate with price: several of the widest gateways sit at or below the 1% median.

**Are the fees in this comparison guaranteed?**
No. They are the published standard rates as of September 2026; 27 providers with custom or unpublished pricing are marked with an asterisk. Enterprise volume changes everything, and providers change pricing without notice.

## The bottom line

The market grew from 50 to 87 gateways in a month and the shape did not change: custody is still the default, 1% is still the going rate, and neither has to be. If you want the version with a $0 fee, no KYC and settlement straight to your wallet, create a checkout in one minute with the [payment link generator](https://shieldz.cash/tools/payment-link), or start with the basics in [what is a crypto payment gateway](/blog/what-is-a-crypto-payment-gateway) and [how to accept crypto payments](/blog/how-to-accept-crypto-payments).

Download the full open dataset (CC BY 4.0): [JSON](/blog/data/crypto-payment-gateways-2026.json), [CSV](/blog/data/crypto-payment-gateways-2026.csv), or the [GitHub repository](https://github.com/ShieldZCash/crypto-payment-gateways-dataset), updated monthly with the full table as markdown.

## Independence statement

This dataset is collected and processed independently. Every classification comes from the provider's own pricing page or documentation, every row links to its source, and rankings are generated from the data alone. **We do not accept paid placements, sponsored positions, dofollow link sales, or any exchange of money for how a gateway appears in this study.** Providers have asked; the answer is no, at any price. Shieldz is a competitor of many gateways listed here, which is exactly why the methodology, the [raw data](https://github.com/ShieldZCash/crypto-payment-gateways-dataset) and the sources are public: check us, and if a row is wrong, [open a pull request](https://github.com/ShieldZCash/crypto-payment-gateways-dataset) and we will fix it in the next monthly release.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the cheapest crypto payment gateway in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Eighteen of the 87 gateways compared advertise a 0% processing fee: self-hosted software like BTCPay Server, protocols like Solana Pay, and non-custodial gateways like Shieldz. The median advertised fee across all 87 is 1%." } },
    { "@type": "Question", "name": "Do all crypto payment gateways require KYC?", "acceptedAnswer": { "@type": "Answer", "text": "No. Of 87 gateways compared in September 2026, 53 require business verification, 9 make it optional, and 25 require none. The no-KYC providers are mostly non-custodial or self-hosted." } },
    { "@type": "Question", "name": "What is the difference between custodial and non-custodial gateways?", "acceptedAnswer": { "@type": "Answer", "text": "A custodial gateway receives the buyer's payment into its own wallet and pays you out later. A non-custodial gateway settles each payment straight to an address you control, so there is no balance to freeze, delay or charge withdrawal fees on." } },
    { "@type": "Question", "name": "Which crypto payment gateway supports the most coins?", "acceptedAnswer": { "@type": "Answer", "text": "NOWPayments advertises 350+ supported currencies, and DePay reaches further by converting any liquid token at payment time. Coverage does not correlate with price." } },
    { "@type": "Question", "name": "Are the fees in this comparison guaranteed?", "acceptedAnswer": { "@type": "Answer", "text": "No. They are published standard rates as of September 2026. 27 providers with custom or unpublished pricing are marked as unverified, and providers change pricing without notice." } }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "87 crypto payment gateways compared (September 2026)",
  "numberOfItems": 87,
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Shieldz", "url": "https://shieldz.cash" },
    { "@type": "ListItem", "position": 2, "name": "BTCPay Server", "url": "https://btcpayserver.org" },
    { "@type": "ListItem", "position": 3, "name": "Binance Pay", "url": "https://pay.binance.com" },
    { "@type": "ListItem", "position": 4, "name": "Solana Pay", "url": "https://solanapay.com" },
    { "@type": "ListItem", "position": 5, "name": "NOWPayments", "url": "https://nowpayments.io" },
    { "@type": "ListItem", "position": 6, "name": "Kraken Pay", "url": "https://blog.kraken.com/product/kraken-pay" },
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
  "text": "About 24% of crypto payment gateways are non-custodial; 66% are custodial and hold merchant funds before payout (study of 87 gateways, September 2026).",
  "firstAppearance": {
    "@type": "CreativeWork",
    "url": "https://shieldz.cash/blog/87-crypto-payment-gateways-compared",
    "author": { "@type": "Organization", "name": "Shieldz" }
  }
}
</script>
