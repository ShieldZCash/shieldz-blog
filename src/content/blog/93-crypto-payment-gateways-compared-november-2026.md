---
title: "93 Crypto Payment Gateways Compared: Fees, Custody, KYC (November 2026)"
description: "The November 2026 edition: 93 crypto payment gateways re-checked on fees, custody, KYC and coins. A hack, UK sanctions, a shutdown notice and five fee changes."
pubDate: 2026-11-18
author: "Deniz Yanbollu"
tags: ["crypto payment gateways", "comparison", "fees", "crypto", "payments"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/93-crypto-payment-gateways-compared-november-2026.png"
---

This is the November 2026 edition of our monthly crypto payment gateway comparison. The count is unchanged at **93 crypto payment gateways**, but every row was checked again on November 18: each source page was loaded (plain HTTP, and a real browser for pages behind bot checks), every recorded fee was compared with what the page says today, and status changes were confirmed against news and provider announcements. Same methodology, a fresh table, six regenerated charts, and the month's changes listed in one place.

Earlier editions stay live and unchanged: the [original August 2026 study of 50 gateways](/blog/50-crypto-payment-gateways-compared), the [September edition with 87](/blog/87-crypto-payment-gateways-compared) and the [October edition with 93](/blog/93-crypto-payment-gateways-compared). If you want curated shortlists instead of the whole market, see the [best crypto payment gateways of 2026](/blog/best-crypto-payment-gateways-2026) and the [best free crypto payment gateways](/blog/best-free-crypto-payment-gateways-2026).

**Disclosure up front:** Shieldz is our product, and it appears in the data like everyone else. Every number in this post comes from published pricing pages or provider docs, and where we could not verify a figure we say so with an asterisk.

## What changed since October

**The headline held: 60 of 93 gateways (65%) are custodial**, the same as October, against 66% in September and 64% in the August study. Non-custodial gateways are 23 of 93 (25%), and the median fee is still 1%. This month's story was not price. It was what happens to merchants when a provider holding their money stops working.

**A custodial gateway was hacked and went dark.** Plisio, a no-KYC processor with a flat 0.5% fee, posted a notice around November 8 that incoming and outgoing payments were [suspended after a hacker attack](https://passimpay.io/en/news/plisio-security-incident-payments-suspended). Merchants on [Trustpilot](https://www.trustpilot.com/review/plisio.net) report wallets drained on November 6 and no way to withdraw, and at our November 18 check plisio.net no longer resolved at all. There is no official word yet on whether balances will be returned. Plisio's row keeps its last published fee, now marked unverified.

**Cryptomus and Heleket were sanctioned by the UK.** On October 8 the UK designated Xeltox Enterprises, the Canadian company behind both brands, in a [Russia sanctions package](https://crypto.news/uk-blacklists-cryptomus-heleket-and-tokenspot-over-russia-links/): an asset freeze and a ban on payment processing for UK persons. Heleket, which we added only last month, published a "withdrawals restored" notice on November 11 after an outage. A week later heleket.com no longer existed in DNS. Both rows stay, with the designation in the notes.

**DePay is shutting down.** The Swiss non-custodial payments project now shows a notice on its homepage: services will be **permanently discontinued on December 31, 2026**, and integrations should move before then. Because DePay is non-custodial, no merchant balance is trapped, but merchants still need a new checkout by New Year.

**Five fee changes:**

- **PayGate.to** now states a **1%** flat fee plus blockchain fees on its gateway page (we had 1.5%).
- **Blockonomics** now gives the first **10** payments free, down from 20, then 1%.
- **Paymento** dropped its free-volume tier for a $15 starting credit. The 0.5% per payment is unchanged (0.5% + $0.20 with its embedded wallet).
- **Request Finance**'s free plan still has no payment fee. Its bank off-ramp costs 1% on Starter and 0.5% on Growth and Pro, plus $10 local or $30 SWIFT.
- **xMoney** prices by settlement currency: 1% for EUR, GBP and USDC, 1.5% for USD, CHF and RON.

**No longer verifiable.** Sphere's pricing page now returns 404, and its terms say fees are disclosed before use. Crypto.com Pay's merchant docs confirm a payout fee but no longer give its size. Strike's business pages no longer state an acceptance fee, only conversion tiers. All three keep their figures with an asterisk. With Plisio, Heleket and XAIGATE also unreachable, verified fees fell from 65 to 59 of 93.

**Still dark, and two more domains gone.** Solana Pay's docs have moved to [solana.com](https://solana.com/docs/tools/solana-pay) and solanapay.com no longer resolves; the protocol itself is unaffected. IVPAY's domain is gone too, after its token was delisted. XAIGATE refused connections for a second month and Whalestack for a third. Salamantex still serves a broken TLS certificate, and Sellix and HoodPay remain behind FBI seizure notices.

**Watching, not yet listed.** Polygon's [Crypto Checkout](https://polygon.technology/payments/checkout) still publishes network costs but no merchant fee, so it stays out of the table.

## Methodology

Same seven facts as the earlier editions, now recorded for 93 gateways: **fee**, **custody** (custodial holds funds first, non-custodial settles direct to your address, self-hosted means you run the software, hybrid depends on configuration), **KYC** requirement, **coins** supported, **fiat settlement**, **Lightning support**, and **year launched**. This is our editorial classification based on each provider's own docs, not a paid or sponsored ranking.

34 of the 93 fees could not be confirmed on an official pricing page and are marked with an asterisk. Nothing here is a recommendation of any provider's compliance posture.

## Key findings at a glance

- [Are crypto payment gateways custodial?](/blog/are-crypto-payment-gateways-custodial) **65% are** this month (60 of 93), the same as October, against 66% in September and 64% in August.
- [How many are non-custodial?](/blog/how-many-non-custodial-crypto-payment-gateways) **23 of 93** (25%).
- [The median gateway fee](/blog/average-crypto-payment-gateway-fee) is still **1% per transaction**.
- [How many are free?](/blog/how-many-free-crypto-payment-gateways) **20 of 93** charge a $0 platform fee (22%).
- [Do they require KYC?](/blog/do-crypto-payment-gateways-require-kyc) **59% do** (55 of 93 require it outright, 10 more make it optional).
- [How many settle to fiat?](/blog/crypto-payment-gateways-fiat-settlement) **67%** (62 of 93).
- [How many publish their fees?](/blog/how-many-crypto-payment-gateways-publish-fees) **63%** (59 of 93), down from 70% in October: six fees we confirmed last month are no longer stated on an official page, or the site is gone.

## The market at a glance: custody is still the norm

<figure style="margin:28px 0">
  <a href="/blog/charts/gw-nov26-custody-donut.svg"><img src="/blog/charts/gw-nov26-custody-donut.svg" alt="Donut chart of custody models across 93 crypto payment gateways in November 2026: 60 custodial, 23 non-custodial, 5 self-hosted, 5 hybrid." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Two in three gateways still hold your money before you do. Four editions, the same shape.</figcaption>
</figure>

Every other risk in this market follows from custody: fund freezes, payout delays, account closures, withdrawal fees and forced KYC only exist because someone else is holding your revenue. The full argument is in [non-custodial crypto payment gateway](/blog/non-custodial-crypto-payment-gateway).

The market keeps getting younger. **51 of the 93 gateways (55%) launched in 2020 or later.** Three of October's six additions (PayPal Pay with Crypto, Heleket and Paydify) launched in 2025, and one of those, Heleket, is already sanctioned and offline.

<figure style="margin:28px 0">
  <a href="/blog/charts/gw-nov26-founding-years.svg"><img src="/blog/charts/gw-nov26-founding-years.svg" alt="Histogram of launch years for 93 crypto payment gateways: 51 of 93 launched in 2020 or later." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">More than half of today's market launched in the last six years.</figcaption>
</figure>

## What it actually costs

The median advertised fee across all 93 gateways is still **1%**. Twenty of the 93 advertise 0%, and the zeros are still not all equal:

- **Genuinely fee-free rails**: self-hosted software (Bitcart, BTCPay Server, DV.net, LNbits, PayRam), open protocols (Solana Pay), and non-custodial gateways with no platform fee (MyCryptoCheckout, Request Finance's base plan, Shieldz). How a $0 fee can be sustainable is its own question, answered at [why Shieldz is free](https://shieldz.cash/why-free).
- **Zero for now**: Paydify's 0% is explicitly "for a limited time". PayPal's history this year shows how that usually ends: 0.99% at launch, 1.5% a year later.
- **Zero on one side, charged on the other**: Binance Pay accepts for 0% but charges 0.8% on payouts (capped at $5). Strike Business publishes no acceptance fee but charges 0.49% to 0.89% to convert bitcoin, plus a spread. Request Finance's free plan has no payment fee, but its bank off-ramp costs 1% (0.5% on paid plans) plus a fixed transfer fee. CCPayment's headline 0.2% sits next to 0.6% for auto-swap and 0.5% for auto-withdrawal. If the fee is not on the payment, look for it on the exit.

<figure style="margin:28px 0">
  <a href="/blog/charts/gw-nov26-fee-bars.svg"><img src="/blog/charts/gw-nov26-fee-bars.svg" alt="Horizontal bar chart of published fees for 16 well-known crypto payment gateways in November 2026, from Sellix at up to 5 percent down to BTCPay Server and Shieldz at 0 percent." width="760" height="573" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The same 16 well-known names tracked since August, kept for continuity even where a provider has since gone offline.</figcaption>
</figure>

<figure style="margin:28px 0">
  <a href="/blog/charts/gw-nov26-cost-curve.svg"><img src="/blog/charts/gw-nov26-cost-curve.svg" alt="Line chart of total processing cost by sale size in November 2026: on a 10,000 dollar sale Stripe card rails cost 290 dollars, BitPay 200 dollars, a 1 percent crypto processor 100 dollars, and Shieldz 0 dollars." width="760" height="430" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The same sale at published rates. On $10,000, card rails take $290, a typical crypto processor takes $100, Shieldz takes $0. At its new 1.5%, PayPal's crypto checkout would take $150.</figcaption>
</figure>

## KYC: 55 of 93 require verification up front

**55 of the 93 (59%) require business verification before the first payment.** Ten make it optional, usually for fiat settlement or above a volume threshold. **28 of the 93 (30%) require no KYC at all.**

<figure style="margin:28px 0">
  <a href="/blog/charts/gw-nov26-kyc-split.svg"><img src="/blog/charts/gw-nov26-kyc-split.svg" alt="Column chart of merchant KYC requirements across 93 crypto payment gateways in November 2026: 28 require no KYC, 10 optional, 55 require business verification." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Providers that touch fiat or hold funds are regulated like money institutions and have to verify merchants.</figcaption>
</figure>

Of the 28 no-KYC gateways, 20 are non-custodial or self-hosted, the same correlation as in every edition so far. More in [accepting crypto payments without KYC](/blog/accept-crypto-payments-without-kyc).

## Fees vs coverage: still no correlation

<figure style="margin:28px 0">
  <a href="/blog/charts/gw-nov26-fee-vs-coins.svg"><img src="/blog/charts/gw-nov26-fee-vs-coins.svg" alt="Scatter plot of 93 crypto payment gateways, published fee percent versus coins supported on a log scale, November 2026. Shieldz sits at zero percent fee with about 20 coins; DePay reaches 1000 coins at 1.5 percent and CCPayment 900 at 0.2 percent." width="760" height="430" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Each dot is one gateway. Coverage is cheap; the fee is a business-model choice, not a cost of coins.</figcaption>
</figure>

CCPayment at 900+ tokens sits near the bottom of the fee axis, next to NOWPayments (350+ at 1%) and DePay (any liquid token at 1.5%, until it closes on December 31). The mechanics of converting at payment time are in [how cross-chain swap routing works](/blog/cross-chain-crypto-payments), and the trade-offs in [pay any coin, one settlement](/blog/pay-any-coin-trust-tradeoff).

## The full list: all 93 gateways

Sorted alphabetically, not by fee or any other ranking. An asterisk marks fees we could not verify on an official pricing page (custom or unpublished pricing, so treat those as indicative). "Fiat" means the merchant can settle or withdraw to fiat currency.

| Gateway | Fee | Custody | KYC | Coins | Fiat | Known for |
|---|---|---|---|---|---|---|
| [0xProcessing](https://0xprocessing.com) | 1%\* | Custodial | Required | 85 | Yes | 85+ coins on 18 chains; volatility protection |
| [Alchemy Pay](https://alchemypay.org) | 1%\* | Custodial | Required | 5 | Yes | Hybrid fiat-crypto ramp network across 173 countries |
| [ALFAcoins](https://www.alfacoins.com) | [0.99%](https://www.alfacoins.com/merchant) | Custodial | Optional | 10 | No | Veteran processor; fiat-pegged settlements paid in crypto |
| [ATLOS](https://atlos.io) | 0%\* | Non-custodial | None | 11 | No | Permissionless no-KYC gateway, direct to Web3 wallet, 11 chains incl. Monero |
| [Aurpay](https://aurpay.net) | [0.8%](https://aurpay.net/aurspace/crypto-payment-gateway-fees-compared-2026/) | Non-custodial | Optional | 8 | No | Non-custodial, stablecoin settlement, Lightning support |
| [B2BinPay](https://b2binpay.com) | [0.25%](https://b2binpay.com) | Custodial | Required | 300 | Yes | Enterprise processor for brokers, exchanges, iGaming |
| [Binance Pay](https://pay.binance.com) | [0%](https://www.binance.com/en/support/faq/binance-pay-fees-6ff1944867e54b9a9576bce3109c7f7a) | Custodial | Required | 100 | Yes | Zero-fee payments inside the Binance ecosystem |
| [Bit2Me Commerce](https://bit2me.com/suite/commerce) | [1.95%](https://support.bit2me.com/en/support/solutions/articles/35000201787) | Custodial | Required | 50 | Yes | Spanish exchange gateway, auto EUR to bank |
| [Bitcart](https://bitcart.ai) | [0%](https://bitcart.ai/) | Self-hosted | None | 50 | No | Open-source BTCPay alternative; 50+ coins incl. Monero |
| [Bitget Pay](https://www.bitget.com) | 0%\* | Custodial | Required | 3 | Yes | USDT QR Scan to Pay across SE Asia and LatAm |
| [Bitnovo Pay](https://www.bitnovo.com/en/pay) | [0.95%](https://www.bitnovo.com/en/pay) | Custodial | Required | 6 | Yes | Valencia-based, price locked at transaction, EUR settlement |
| [Bitpace](https://www.bitpace.com) | 1%\* | Custodial | Required | 70 | Yes | EU/UK-licensed gateway popular in iGaming |
| [BitPay](https://bitpay.com) | [2%](https://bitpay.com/pricing) | Custodial | Required | 20 | Yes | Oldest major crypto processor; daily fiat bank settlements |
| [BlockBee](https://blockbee.io) | [1%](https://blockbee.io/fees/) | Non-custodial | None | 70 | No | Formerly CryptAPI; payment forwarding to your wallet |
| [Blockonomics](https://www.blockonomics.co) | [1%](https://www.blockonomics.co/pricing) | Non-custodial | None | 3 | No | Direct-to-wallet Bitcoin payments with no KYC |
| [BoomFi](https://www.boomfi.xyz) | [1%](https://docs.boomfi.xyz/pricing/fees-and-pricing) | Non-custodial | Required | 10 | Yes | Non-custodial gateway with subscriptions and off-ramp |
| [BTCPay Server](https://btcpayserver.org) | [0%](https://btcpayserver.org/) | Self-hosted | None | 1 | No | Free open-source self-hosted processor; altcoins via plugins |
| [BVNK](https://www.bvnk.com/payments) | [1%](https://docs.bvnk.com/bvnk/get-started/charge-customer-fees/) | Custodial | Required | 10 | Yes | Stablecoin acceptance infra, acquired by Mastercard 2026 |
| [Bybit Pay](https://www.bybit.com/en/bybitpay/) | [0%](https://www.bybit.com/en/help-center/article/FAQ-Bybit-Pay) | Custodial | Required | 100 | Yes | Exchange-backed merchant payments, zero base fee |
| [CCPayment](https://ccpayment.com) | 0.2%\* | Custodial | Optional | 900 | No | FinCEN-registered MSB; 900+ tokens across 100+ chains |
| [Coinbase Commerce](https://www.coinbase.com/commerce) | [1%](https://www.coinbase.com/commerce) | Hybrid | Required | 10 | Yes | Shut down March 2026; successor Coinbase Business is custodial, US/SG only |
| [Coinbase Payments](https://www.coinbase.com/payments) | [0%](https://www.coinbase.com/payments) | Hybrid | Required | 1 | Yes | Onchain USDC for Shopify merchants; distinct from Commerce |
| [CoinGate](https://coingate.com) | [1%](https://www.coingate.com/pricing) | Custodial | Required | 70 | Yes | EU-based gateway; Lightning enabled by default |
| [Coinify](https://www.coinify.com) | [0%](https://help.coinify.com/hc/en-us/articles/360014078380-Merchant-fees) | Custodial | Required | 20 | Yes | Danish processor, weekly EUR/BTC payouts |
| [CoinPayments](https://www.coinpayments.net) | [3%](https://www.coinpayments.net/help-fees) | Custodial | Required | 100 | Yes | Veteran multi-coin processor operating since 2013 |
| [CoinRemitter](https://coinremitter.com) | [0.23%](https://coinremitter.com/fees) | Custodial | None | 13 | No | No-KYC gateway with a 0.23% headline fee |
| [CoinsBuy](https://coinsbuy.com) | 1%\* | Custodial | Required | 40 | Yes | Panama-based enterprise processor, USDT on 9 chains |
| [CoinsPaid](https://coinspaid.com) | 0.8%\* | Custodial | Required | 20 | Yes | High-volume processor favored by iGaming merchants |
| [Confirmo](https://confirmo.com) | [0.8%](https://confirmo.com) | Custodial | Required | 10 | Yes | MiCA-licensed stablecoin-first EU gateway |
| [Copperx](https://copperx.io) | [0.5%](https://copperx.io/pricing) | Custodial | Required | 5 | Yes | Stablecoin-first; settles to 50+ fiat currencies |
| [Cryptadium](https://cryptadium.com) | 0.9%\* | Custodial | Required | 50 | Yes | Enterprise e-commerce focus, volume discounts |
| [Crypto.com Pay](https://crypto.com/pay-merchant) | 0.5%\* | Custodial | Required | 20 | Yes | Shopify-integrated acceptance, multi-fiat settlement |
| [Cryptomus](https://cryptomus.com) | [2%](https://cryptomus.com/fees/payment) | Custodial | Required | 120 | No | Negotiable fees; popular with high-risk and SaaS merchants. UK-sanctioned 8 Oct 2026 (owner Xeltox Enterprises, alias Cryptomus/Heleket): asset freeze and payment-processing ban for UK persons |
| [Cryptopay Business](https://cryptopay.me/business) | 1%\* | Custodial | Required | 19 | Yes | London-based, next-day bank settlement |
| [DePay](https://depay.com) | [1.5%](https://depay.com/pricing) | Non-custodial | None | 1000 | No | Web3 payments with on-the-fly token conversion; DePay announced it will permanently discontinue all services on 31 Dec 2026 |
| [DV.net](https://dv.net) | [0%](https://github.com/dv-net/dv-merchant) | Self-hosted | None | 50 | No | Open-source self-hosted, merchant owns wallets and seed |
| [EukaPay](https://eukapay.com) | 1%\* | Custodial | Required | 20 | Yes | Canadian FINTRAC MSB, multi-fiat settlement, Lightning |
| [Finrax](https://finrax.com) | 1%\* | Custodial | Required | 50 | Yes | Estonia-licensed B2B gateway, hosted checkout + API |
| [Flexa](https://flexa.co) | [1%](https://flexa.co/payments) | Custodial | Required | 99 | Yes | In-store crypto acceptance network across 13 chains |
| [Gate Pay](https://www.gate.com/pay) | [0.5%](https://www.gate.com/pay) | Custodial | Required | 300 | Yes | Gate.io exchange merchant acceptance, 300+ coins |
| [GoCrypto](https://gocrypto.com) | 0.9%\* | Custodial | Required | 50 | Yes | Slovenian POS-focused crypto acceptance |
| [GoUrl](https://gourl.io) | [1.5%](https://gourl.io/) | Non-custodial | None | 10 | No | Open-source, direct-to-wallet, WordPress plugin |
| [Heleket](https://heleket.com) | 0.4%\* | Custodial | None | 15 | No | Email-only signup, no corporate documents; launched 2025. UK-sanctioned 8 Oct 2026 (designated with Cryptomus under owner Xeltox Enterprises); heleket.com no longer resolved (NXDOMAIN) at the Nov 2026 check |
| [HoodPay](https://hoodpay.io) | 1%\* | Hybrid | None | 20 | No | Site shows an FBI seizure notice as of Sep 2026; service discontinued |
| [IVPAY (ex-ivendPay)](https://ivpay.io) | 1%\* | Custodial | Required | 40 | Yes | Crypto POS and vending-machine payments; IVPAY token delisted, ivpay.io DNS not resolving at the Nov 2026 check |
| [Kraken Pay](https://blog.kraken.com/product/kraken-pay) | [0%](https://blog.kraken.com/product/kraken-pay) | Custodial | Required | 300 | Yes | Paylinks and Kraktag payments, 300+ assets |
| [KuCoin Pay](https://www.kucoin.com/pay) | 0%\* | Custodial | Required | 50 | Yes | Exchange merchant tool, off-chain internal settlement |
| [LNbits](https://lnbits.com) | [0%](https://github.com/lnbits/lnbits) | Self-hosted | None | 1 | No | Open-source Lightning accounts system with POS, checkout and paywall extensions |
| [Loop Crypto](https://www.loopcrypto.xyz) | 1%\* | Non-custodial | Optional | 10 | Yes | Crypto autopay subscriptions; acquired by Lead Bank Dec 2025, domain no longer resolves as of Oct and Nov 2026 |
| [MaxelPay](https://www.maxelpay.com) | [0.4%](https://www.maxelpay.com/) | Non-custodial | None | 300 | No | No-KYC, own payout wallet, white-label |
| [Mercuryo](https://mercuryo.io) | 1%\* | Custodial | Required | 40 | Yes | On/off-ramp infrastructure embedded in major web3 wallets |
| [MoonPay Commerce (ex-Helio)](https://www.moonpay.com/business/commerce) | 2%\* | Non-custodial | Optional | 100 | No | Helio acquired by MoonPay, relaunched as MoonPay Commerce Oct 2025 |
| [MyCryptoCheckout](https://mycryptocheckout.com) | [0%](https://mycryptocheckout.com) | Non-custodial | None | 100 | No | WordPress plugin, direct wallet-to-wallet payments |
| [NOWPayments](https://nowpayments.io) | [1%](https://nowpayments.io/pricing) | Non-custodial | Optional | 350 | Yes | Auto-forwarding with 350+ supported currencies |
| [Nuvei Pay with Crypto](https://www.nuvei.com/apm/pay-with-crypto) | 1%\* | Custodial | Required | 40 | Yes | Enterprise acquirer crypto acceptance, 200+ markets |
| [Oobit](https://www.oobit.com) | [1%](https://www.cryptocards.so/en/card/oobit-tap-pay) | Non-custodial | Required | 6 | Yes | Tap-to-pay crypto at Visa terminals, fiat settlement |
| [OpenNode](https://opennode.com) | [1%](https://opennode.com/pricing/) | Custodial | Required | 1 | Yes | Bitcoin-only, Lightning-first processor |
| [OxaPay](https://oxapay.com) | [0.4%](https://oxapay.com/) | Custodial | None | 20 | No | No-KYC email signup; Telegram-friendly |
| [PassimPay](https://passimpay.io) | [0.5%](https://passimpay.io/en) | Custodial | Required | 74 | Yes | 74+ coins, 18+ chains, SEPA EUR settlement |
| [Paydify](https://www.paydify.com) | [0%](https://www.paydify.com/resources) | Non-custodial | Required | 2 | No | Bitget Wallet partner; any wallet pays, USDC/USDT settles direct to merchant wallet |
| [PayGate.to](https://paygate.to) | [1%](https://paygate.to/crypto-payment-gateway-no-kyc-instant-payouts/) | Non-custodial | None | 50 | No | No signup, instant forwarding to merchant wallet |
| [PayKassa](https://paykassa.pro) | [4%](https://paykassa.pro/en/accept/) | Custodial | None | 16 | Yes | Email-only signup aggregator popular in CIS markets |
| [Paymento](https://paymento.io) | [0.5%](https://paymento.io/fees-and-pricing/) | Non-custodial | None | 15 | No | XPUB-based, funds direct to merchant wallet |
| [PayPal Pay with Crypto](https://www.paypal.com/us/business/paypal-business-fees) | [1.5%](https://www.paypal.com/us/business/paypal-business-fees) | Custodial | Required | 100 | Yes | 100+ coins converted to USD or PYUSD at checkout for US PayPal merchants |
| [PayRam](https://www.payram.com) | [0%](https://www.payram.com/white-label) | Self-hosted | None | 20 | No | Self-hosted non-custodial gateway, iGaming-popular |
| [PayRequest](https://payrequest.io) | [2%](https://payrequest.io) | Custodial | None | 1 | Yes | Hybrid fiat+crypto payment links (Stripe/PayPal/USDC) for creators and SMBs |
| [Plisio](https://plisio.net) | 0.5%\* | Custodial | None | 12 | No | No-KYC signup with a single flat 0.5% fee; payments suspended after a hack around 6-8 Nov 2026, merchant wallets reported drained, domain not resolving at the Nov 2026 check |
| [PYMSTR](https://pymstr.com) | [1%](https://pymstr.com/pricing) | Non-custodial | None | 2 | No | Non-custodial USDC/USDT direct to merchant wallet |
| [Radom](https://radom.com) | [0.5%](https://radom.com/pricing) | Hybrid | Required | 12 | Yes | Regulated EU VASP; subscriptions and invoicing |
| [Request Finance](https://www.request.finance) | [0%](https://www.requestfinance.com/pricing) | Non-custodial | Optional | 100 | Yes | Crypto invoicing, payroll and AP/AR suite |
| [RocketFuel](https://rocketfuel.inc) | 1%\* | Custodial | Required | 160 | Yes | US-listed (RKFL), one-click checkout, 160+ coins |
| [Salamantex](https://salamantex.com) | 1%\* | Hybrid | Required | 8 | Yes | Austrian POS terminals, crypto or EUR at checkout; site serving an invalid TLS certificate Oct and Nov 2026 |
| [Sellix](https://sellix.io) | 5%\* | Custodial | None | 13 | No | Domain seized by the FBI in Operation Talent; offline Sep-Nov 2026 |
| [Shieldz](https://shieldz.cash) | [0%](https://shieldz.cash/pricing) | Non-custodial | None | 20 | No | Non-custodial, $0 fee, no KYC; pay any coin, settle in one |
| [Solana Pay](https://solanapay.com) | [0%](https://solana.com/docs/tools/solana-pay) | Non-custodial | None | 2 | No | Open-source direct merchant payment protocol; docs moved to solana.com, solanapay.com not resolving at the Nov 2026 check |
| [SpectroCoin](https://spectrocoin.com) | [1%](https://docs.spectrocoin.com/docs/fees) | Custodial | Required | 30 | Yes | Lithuanian exchange-wallet combo with merchant tools |
| [Speed](https://www.tryspeed.com) | [1%](https://www.tryspeed.com/pricing/) | Custodial | Optional | 3 | Yes | Lightning plus USDT/USDC with instant autoswap |
| [Sphere](https://spherepay.co) | 0.5%\* | Custodial | Required | 3 | Yes | Solana-born stablecoin ramps with ACH/SEPA/PIX rails |
| [SpicePay](https://www.spicepay.com) | [1%](https://www.spicepay.com/accept-payments/) | Custodial | Required | 5 | Yes | Long-running BTC processor, PayPal/bank payouts |
| [Strike Business](https://strike.me/business/) | 0%\* | Custodial | Required | 2 | Yes | Lightning payments pioneer |
| [Stripe (Pay with Crypto)](https://stripe.com/crypto) | [1.5%](https://docs.stripe.com/crypto/pay-with-crypto) | Custodial | Required | 3 | Yes | Renamed Stablecoin payments in 2026; USDC/USDP/USDG into the Stripe balance |
| [Swiss Bitcoin Pay](https://swiss-bitcoin-pay.ch) | [1%](https://swiss-bitcoin-pay.ch/) | Non-custodial | None | 1 | Yes | Lightning POS (Lugano); servers offline since a Sep 14, 2026 breach, no reopening date |
| [TripleA](https://www.triple-a.io) | [0.8%](https://www.triple-a.io) | Custodial | Required | 6 | Yes | First MAS-licensed crypto payments firm; bank-grade settlement |
| [Trybit (ex-CryptoCloud)](https://trybit.com) | 1.9%\* | Custodial | Required | 40 | No | Rebranded to Trybit in 2026; auto-convert to USDT |
| [UniPayment](https://unipayment.io) | [1%](https://unipayment.io/en/faq/) | Custodial | Required | 30 | Yes | Hybrid fiat/crypto gateway for brokers and e-commerce |
| [UniWire (ex-CryptoChill)](https://uniwire.com) | 1%\* | Custodial | Optional | 20 | Yes | CryptoChill rebranded to UniWire; MPC wallets, crypto-to-fiat off-ramp |
| [Wallet Pay](https://pay.wallet.tg) | 1%\* | Custodial | Optional | 3 | No | TON-based acceptance inside Telegram Wallet |
| [Whalestack](https://www.whalestack.com) | 0.5%\* | Custodial | Required | 6 | Yes | Formerly COINQVEST; EU-licensed, Stellar settlements; site unreachable Sep-Nov 2026 |
| [WhiteBIT Pay](https://whitebit.com) | 0.5%\* | Custodial | Required | 200 | Yes | EU-regulated exchange gateway, powers Whitepay |
| [Whitepay](https://whitepay.com) | [1%](https://whitepay.com/product/crypto-acquiring) | Custodial | Required | 200 | Yes | WhiteBIT-powered POS; known for Ukraine crypto donations |
| [XAIGATE](https://www.xaigate.com) | 0.2%\* | Non-custodial | None | 50 | Yes | Very low fee; WooCommerce/PrestaShop plugins; site refused connections at the Oct and Nov 2026 checks; its terms describe a custodial settlement account despite the non-custodial claim |
| [xMoney](https://www.xmoney.com) | [1%](https://www.xmoney.com/luxury-crypto-payments) | Custodial | Required | 10 | Yes | Formerly Utrust; MiCA-aligned EU crypto payments |
| [Zaprite](https://zaprite.com) | [0%](https://zaprite.com/pricing) | Non-custodial | None | 2 | Yes | Bitcoin invoicing that connects your own wallets |

## Picks by category

For a deeper head-to-head of the three names people ask about most, see [NOWPayments vs BTCPay Server vs CoinGate](/blog/nowpayments-vs-btcpay-vs-coingate).

**Non-custodial with zero fees.** [MyCryptoCheckout](https://mycryptocheckout.com), [Request Finance](https://www.request.finance) and [Shieldz](https://shieldz.cash) (our own product, disclosed above) combine both, and [Paydify](https://www.paydify.com) joins them for as long as its limited-time 0% lasts. MyCryptoCheckout is WordPress-only but covers 100 coins. Request Finance adds invoicing and payroll on top and makes KYC optional rather than none. Paydify settles stablecoins only. Shieldz settles in one coin to your own wallet across about 20 supported assets, a real limitation next to the aggregators further down this table. Its non-custodial claim is [independently verifiable](https://shieldz.cash/verify), and the fee model is the whole [pricing page](https://shieldz.cash/pricing).

**Self-hosted.** BTCPay Server remains the reference: 0% forever and fully yours, at the cost of running a server. Bitcart and DV.net cover more coins, PayRam leans toward iGaming, and LNbits is the lightest option if you only need Lightning. Our [self-hosted gateway guide](/blog/self-hosted-crypto-payment-gateway) walks through the trade-off.

**Bitcoin and Lightning.** OpenNode and Strike Business are the Lightning-first processors, Speed and EukaPay add stablecoins on top, and LNbits does it self-hosted. Eighteen of the 93 support Lightning. Swiss Bitcoin Pay would belong here, but it is offline until further notice. Start with [how to accept Bitcoin payments](/blog/how-to-accept-bitcoin-payments).

**Regulated enterprise.** BitPay has the longest track record, TripleA covers Asia-Pacific under an MAS licence, and Confirmo and xMoney cover MiCA-era Europe. B2BinPay and Kraken Pay handle exchange-scale volume. PayPal Pay with Crypto is the obvious option for US merchants already on PayPal, at 1.5%. Expect full KYB everywhere in this bracket.

**Maximum coin coverage.** CCPayment claims 900+ tokens. DePay converts any token on the fly but shuts down on December 31, 2026, so do not start a new integration on it. NOWPayments still advertises 350+, and B2BinPay, Gate Pay and Kraken Pay all clear 300. You do not have to pay more for coverage.

**No-KYC onboarding.** 28 of the 93 require no KYC at all. The 20 of them that are non-custodial or self-hosted also have no custodied balance to freeze: ATLOS, Bitcart, Blockonomics, BlockBee, BTCPay Server, DePay (closing Dec 31), DV.net, GoUrl, LNbits, MaxelPay, MyCryptoCheckout, PayGate.to, Paymento, PayRam, PYMSTR, Shieldz, Solana Pay, Swiss Bitcoin Pay (offline), XAIGATE (unreachable for a second month) and Zaprite. The other eight are custodial, and this month shows why that matters: two of them, Plisio and Heleket, went dark with merchant balances inside.

## How to choose: five questions

1. **Who holds the money?** If the answer is not "me, immediately", the provider controls everything else, not you.
2. **What is the all-in cost?** Add the processing fee, payout or withdrawal fee, conversion spread and any monthly plan, and compare that total rather than the headline rate. Check whether a 0% is a promotion.
3. **What do buyers get to pay with?** Every missing coin is a missing customer. Swap-routing designs cover the long tail without you holding it.
4. **What happens on day one?** You might start with just a wallet address, or face a week of KYB. Pick the onboarding that fits your situation.
5. **Can you leave, and what if they go down?** This month had a hack with drained merchant wallets, a sanctions designation and an announced shutdown. Self-hosted and non-custodial setups have no balance to migrate. Custodial accounts do.

## FAQ

**What is the cheapest crypto payment gateway in November 2026?**
Twenty of the 93 advertise 0%: self-hosted software like BTCPay Server and LNbits, protocols like Solana Pay, and non-custodial gateways like Shieldz. Check where the other zeros charge on payout or conversion, and whether the 0% is a limited-time promotion. The median across all 93 is 1%.

**How much does PayPal charge for crypto payments?**
1.5% per transaction since August 1, 2026, according to PayPal's merchant fee page. The 0.99% launch promotion ended on July 31, 2026.

**Do all crypto payment gateways require KYC?**
No. 55 of the 93 require business verification, 10 make it optional, and 28 require none. Most of the no-KYC providers are non-custodial or self-hosted, because a provider that never holds funds has nothing to gate.

**What is the difference between custodial and non-custodial gateways?**
A custodial gateway receives the buyer's payment into its own wallet and pays you out later. A non-custodial gateway settles each payment straight to an address you control, so there is no balance to freeze, delay or charge withdrawal fees on.

**Are the fees in this comparison guaranteed?**
No. They are the published standard rates as of November 18, 2026. The 34 providers with custom or unpublished pricing are marked with an asterisk. Enterprise volume changes everything, and providers change pricing without notice.

## The bottom line

The count held at 93 and the shape held for a fourth month: custody is the default and 1% is the going rate, though neither is necessary. Prices barely moved. What moved was who is still standing: in one month a custodial processor was hacked and went dark with merchant balances inside, two others came under UK sanctions, and a non-custodial one announced it is closing. In each case, the merchants with the least to lose were the ones whose funds never sat with the provider. Which of the 93 fits depends on what you are optimizing for. For custody control, look at the non-custodial and self-hosted names above. For coin coverage, look at CCPayment or NOWPayments. For regulated enterprise volume, look at BitPay, TripleA, PayPal or the MiCA-licensed group. For no-KYC signup, look at the subset in that section. If you are new to the category, start with [what is a crypto payment gateway](/blog/what-is-a-crypto-payment-gateway) and [how to accept crypto payments](/blog/how-to-accept-crypto-payments).

Download the full open dataset (CC BY 4.0, v1.5.0): [JSON](/blog/data/crypto-payment-gateways-2026.json), [CSV](/blog/data/crypto-payment-gateways-2026.csv), or the [GitHub repository](https://github.com/ShieldZCash/crypto-payment-gateways-dataset), updated monthly with the full table as markdown.

## Independence statement

We collect and process this dataset independently. Every classification comes from the provider's own pricing page or documentation, every row links to its source, and the order comes from the data alone. **We do not accept paid placements, sponsored positions, dofollow link sales, or any exchange of money for how a gateway appears in this study.** Providers have asked, and the answer is no at any price. Shieldz competes with many of the gateways listed here, which is exactly why the methodology, the [raw data](https://github.com/ShieldZCash/crypto-payment-gateways-dataset) and the sources are public. Check our work, and if a row is wrong, [open a pull request](https://github.com/ShieldZCash/crypto-payment-gateways-dataset) and we will fix it in the next monthly release.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the cheapest crypto payment gateway in November 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Twenty of the 93 gateways compared advertise a 0% processing fee: self-hosted software like BTCPay Server and LNbits, protocols like Solana Pay, and non-custodial gateways like Shieldz. The median advertised fee across all 93 is 1%." } },
    { "@type": "Question", "name": "How much does PayPal charge for crypto payments?", "acceptedAnswer": { "@type": "Answer", "text": "1.5% per transaction since August 1, 2026, according to PayPal's merchant fee page. The 0.99% launch promotion ended on July 31, 2026." } },
    { "@type": "Question", "name": "Do all crypto payment gateways require KYC?", "acceptedAnswer": { "@type": "Answer", "text": "No. Of 93 gateways compared in November 2026, 55 require business verification, 10 make it optional, and 28 require none. The no-KYC providers are mostly non-custodial or self-hosted." } },
    { "@type": "Question", "name": "What is the difference between custodial and non-custodial gateways?", "acceptedAnswer": { "@type": "Answer", "text": "A custodial gateway receives the buyer's payment into its own wallet and pays you out later. A non-custodial gateway settles each payment straight to an address you control, so there is no balance to freeze, delay or charge withdrawal fees on." } },
    { "@type": "Question", "name": "Are the fees in this comparison guaranteed?", "acceptedAnswer": { "@type": "Answer", "text": "No. They are published standard rates as of November 18, 2026. 34 providers with custom or unpublished pricing are marked as unverified, and providers change pricing without notice." } }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "93 crypto payment gateways compared (November 2026)",
  "numberOfItems": 93,
  "itemListOrder": "https://schema.org/ItemListUnordered",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Binance Pay", "url": "https://pay.binance.com" },
    { "@type": "ListItem", "position": 2, "name": "BitPay", "url": "https://bitpay.com" },
    { "@type": "ListItem", "position": 3, "name": "BTCPay Server", "url": "https://btcpayserver.org" },
    { "@type": "ListItem", "position": 4, "name": "CoinGate", "url": "https://coingate.com" },
    { "@type": "ListItem", "position": 5, "name": "Kraken Pay", "url": "https://blog.kraken.com/product/kraken-pay" },
    { "@type": "ListItem", "position": 6, "name": "NOWPayments", "url": "https://nowpayments.io" },
    { "@type": "ListItem", "position": 7, "name": "OpenNode", "url": "https://opennode.com" },
    { "@type": "ListItem", "position": 8, "name": "PayPal Pay with Crypto", "url": "https://www.paypal.com/us/business/paypal-business-fees" },
    { "@type": "ListItem", "position": 9, "name": "Shieldz", "url": "https://shieldz.cash" },
    { "@type": "ListItem", "position": 10, "name": "Solana Pay", "url": "https://solana.com/docs/tools/solana-pay" },
    { "@type": "ListItem", "position": 11, "name": "Stripe Pay with Crypto", "url": "https://stripe.com/crypto" }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Claim",
  "text": "About 25% of crypto payment gateways are non-custodial; 65% are custodial and hold merchant funds before payout (study of 93 gateways, November 2026).",
  "firstAppearance": {
    "@type": "CreativeWork",
    "url": "https://shieldz.cash/blog/93-crypto-payment-gateways-compared-november-2026",
    "author": { "@type": "Organization", "name": "Shieldz" }
  }
}
</script>
