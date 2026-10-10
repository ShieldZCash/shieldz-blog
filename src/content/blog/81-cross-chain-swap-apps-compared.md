---
title: "81 Cross-Chain Swap Apps Compared: Fees, Custody and KYC (October 2026)"
description: "Every app that swaps a coin on one chain for a coin on another: 81 wallets, aggregators, front-ends and exchanges compared on fees, custody and KYC. 70% state no fee you can check in advance."
pubDate: 2026-10-10
author: "Deniz Yanbollu"
tags: ["cross-chain swap", "crypto swap", "comparison", "fees", "dex aggregator", "non-custodial", "data"]
eyebrow: "Comparison"
---

A cross-chain swap is the simplest thing to ask for and the hardest thing to shop for. You hold USDT on Tron and want BTC, or ETH on Arbitrum and want SOL. Dozens of apps will do it: your wallet, a bridge aggregator, a THORChain front-end, a no-account instant exchange. Each shows you a number, and almost none tell you what part of that number is theirs.

So we built the list we wanted to read. This is **81 cross-chain swap apps**, every one checked live on 10 October 2026, compared on what they charge, who holds your coins while the swap is in flight, and whether they can stop you for identity checks. Every fee links to the official page it was read from. Where an app publishes no fee, or publishes three different ones, we say so rather than guess.

It is also an open dataset: [JSON](/blog/data/cross-chain-swaps-2026.json), [CSV](/blog/data/cross-chain-swaps-2026.csv) and the [GitHub repository](https://github.com/ShieldZCash/cross-chain-swap-dataset), CC BY 4.0, updated monthly. It is the sister study to our [93 crypto payment gateways comparison](/blog/93-crypto-payment-gateways-compared).

## Key findings at a glance

- **70% of cross-chain swap apps state no fee you can check in advance.** Only 24 of 81 state a fixed fee of their own on a current official page. 37 publish no rate at all, 5 publish one we could not verify, and 15 claim to add "no fee", which only means the whole cost is set by the route or partner exchange, often including a commission paid back to the app.
- **Wallets are the most expensive place to swap.** The median verified wallet fee is **0.875%**, against **0.25%** for aggregators. MetaMask charges 0.875%, Phantom 0.85%, the Base app up to 1%, and Magic Eden and Bitcoin.com 2% on cross-chain swaps.
- **The protocol underneath costs almost nothing.** NEAR Intents takes 0.0001%, deBridge 0.04%, Relay 0.06% on major pairs, THORChain no fixed fee at all. Nearly everything you pay is the app's markup on top.
- **30% of apps hold your coins during the swap.** 24 of 81 are custodial and 12 more are hybrid. **14 of 35 wallets** hand at least some cross-chain swaps to a custodial exchange, even though the wallet itself is self-custody.
- **"No KYC" usually means "no KYC unless flagged".** 30 of 81 apps, including all 15 instant exchanges, can hold a swap after you send funds until you verify your identity.
- **A handful of protocols carry the market.** THORChain is a named route in 15 apps, NEAR Intents in 10, Chainflip, LI.FI and Maya in 9 each.
- **11 of the apps and protocols we started from are no longer working**, including Ctrl Wallet (shut down 19 August 2026) and Hop Protocol, whose old domain now serves a gambling site.

## Why this list has no protocols in it

There are two layers in cross-chain swapping, and most comparisons mix them up.

The bottom layer is **protocols**: the systems that actually move value between chains. THORChain and Maya run their own validator networks and liquidity pools holding native Bitcoin. Chainflip runs its own validators and a just-in-time AMM. NEAR Intents, Relay, Across and deBridge pay solvers or relayers to fill your order from their own inventory. Bridges such as Stargate and Allbridge run pools on each chain.

The top layer is **apps**: the places you actually press "swap". A wallet, an aggregator, a THORChain front-end or an instant exchange. Most of them do not move anything themselves. They ask one or more protocols for a quote, add their fee, and hand you a transaction to sign.

Ranking THORChain next to an app that routes through THORChain is not a fair fight: they are not competing for the same thing. So **this comparison contains only apps**, the layer you choose between. A protocol's own first-party app (relay.link, across.to, Portal for Wormhole) counts as the protocol and is left out. The protocols themselves are listed [at the end](#the-protocols-underneath) as a reference, because knowing what is underneath is how you tell what an app is charging you for.

## Methodology

Every app was loaded on 10 October 2026: by HTTP first, then in a real browser where bot protection got in the way, then checked for shutdown notices (one site, Ctrl Wallet, still returns a normal page that says it has closed). For each live app we recorded:

- **Category:** aggregator (routes each swap across several protocols), front-end (an independent interface on THORChain, Maya or Chainflip), wallet (cross-chain swaps built into a wallet), instant exchange (a no-account custodial exchange), or exchange comparison site (compares instant exchanges and sends you to one).
- **Fee:** the fixed percentage the app itself charges on a standard cross-chain swap, read from its own pricing page, help center, docs or terms. Where a wallet hands every swap to one custodial partner and says so, the partner's stated commission is the fee. Variable costs, the underlying protocol's fee and network gas are described separately.
- **Verified:** true only when a fixed fee is stated on an official page that is current (updated within roughly 18 months) and does not contradict the app's other pages. A "starting from" figure with no schedule behind it does not count.
- **"No fee of its own" is not a 0% fee.** Fifteen apps say they add nothing. That is usually true of the line item, but the route or partner exchange still charges, and comparison sites and exchange-routing wallets are paid a commission out of that charge. Their cost is real and unknown until you get a quote, so we mark them **not certain** and leave them out of every fee ranking and average.
- **Custody:** who holds your coins while the swap is in flight. Non-custodial means they stay in contracts, vaults or your wallet throughout. Custodial means an operator's wallet receives them first. Hybrid means it depends on the route the app picks.
- **KYC:** none, risk-based (no account, but a flagged swap can be held for identity checks), or required.
- **Native Bitcoin and Solana**, chain coverage, and the protocols each app routes through.

This is our editorial classification from each app's own documentation. It is not a recommendation of any app's security or compliance. Fees change without notice: always read the quote before you sign.

## Finding 1: most apps don't publish a fee you can check

<figure style="margin:28px 0">
  <a href="/blog/charts/swapapps-fee-transparency.svg"><img src="/blog/charts/swapapps-fee-transparency.svg" alt="Fee transparency by category across 81 cross-chain swap apps: exchange comparison sites 0 verified fees and 4 not certain; wallets 9 verified, 5 not certain, 21 unpublished or unverifiable; instant exchanges 4, 2 and 9; aggregators 7, 4 and 10; THORChain and Maya front-ends 4 verified and 2 unpublished. Overall 24 verified, 15 not certain, 42 unpublished or unverifiable." width="760" height="408" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Only 24 of 81 apps state a fixed fee of their own that we could verify. No exchange comparison site does: their cost is whatever the exchange charges.</figcaption>
</figure>

This was the finding we did not expect to be the headline. Of 81 live cross-chain swap apps, **57 do not state a fee you can check before you swap.** They fall into four groups:

**No rate at all.** ChangeNOW says its fees are "included in the rate" and adjust dynamically; its own comparison article concedes that ChangeNOW "does not disclose their fees fully". SideShift describes "a small service fee" with no number. Rabby, Bitget Wallet, TokenPocket, Binance Wallet, Ledger Wallet and Trezor Suite all show a fee line in the app and publish no percentage. Ledger's developer docs even give the formula, `partner rate × (1 − ledger fee − partner fee) − withdrawal fee`, without ever saying how big the Ledger fee is.

**Contradicting themselves.** Trust Wallet's swap FAQ says it charges no service fee; its own 2026 wallet comparison lists a 0.7% fee built into the rate. Zengo's help center says "up to 4%"; its product page says 0.5% plus a spread. Godex has blog posts putting its all-in cost at about 0.8% and, from its own rate data, 1.67% to 2.14% on BTC to ETH. Changee advertises commissions "as low as 0.25%" while its own blog puts the typical all-in cost at 0.5% to 1.2%.

**"No fee", with the cost somewhere else.** Fifteen apps say they add nothing of their own. Exolix's terms say "Exolix does not charge any fees, since we have a fixed rate"; Atomic Wallet and Coinomi say they add nothing; Trocador, Swapzone, SwapSpace and CypherGoat add nothing on top of the exchange they send you to. All of them are telling the truth about the line item, and none of them is free. The margin is in the exchange rate, and the comparison sites are paid a referral commission out of it: Swapzone says plainly that it earns "from partner referrals". Even where the "no fee" is as clean as it gets (Uniswap dropped its interface fee to 0% on 27 December 2025; Backpack has charged 0% on swaps and bridges since 10 March 2026), the route underneath still charges a fee that varies by pair and size. There is no number to compare until you ask for a quote, so these apps are **not certain**, not "0%".

**"TBD".** dZap's fee page literally lists its cross-chain fee as TBD. Bungee, Squid, OpenOcean and Skip:Go say the fee depends on the route. Rubic has described its fee as $2 flat, as nothing, and as free for token holders.

None of this means these apps are expensive. Some are probably cheap. It means you cannot know before you open the app, and you cannot compare them on paper. The only number that matters is the one in the quote: **compare the amount you receive, not the advertised fee.**

## Finding 2: what the 24 stated fees actually are

<figure style="margin:28px 0">
  <a href="/blog/charts/swapapps-fee-ranking.svg"><img src="/blog/charts/swapapps-fee-ranking.svg" alt="The 24 verified cross-chain swap fees, lowest first: Coin98 and KyberSwap 0.1%, Shieldz Swap 0.15%, RocketX 0.2%, Changelly and Jumper 0.25%, ASGARDEX 0.3%, SushiSwap 0.35%, Matcha 0.4%, LeoDex 0.45%, six apps at 0.5% (ChangeHero, FixedFloat, Guarda, Quickex, THORSwap, Vultisig), Zerion 0.67%, Phantom 0.85%, MetaMask 0.875%, Base App 1%, THORWallet 1.25%, BitBox 1.5%, Bitcoin.com Wallet and Magic Eden Wallet 2%. Fifteen apps that claim no fee of their own are not ranked." width="760" height="728" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Stated fees range from 0.1% to 2%, with a median of 0.5%. Five apps charge 1% or more, all of them wallets or wallet-like front-ends.</figcaption>
</figure>

Across the 24 apps with a verified fixed fee, the **median is 0.5%** and the mean 0.65%. The lowest are Coin98 and KyberSwap at 0.1% (Coin98's only on the tokens its bridge lists, KyberSwap's on common EVM pairs) and Shieldz Swap at 0.15%. Five charge 1% or more.

The fifteen "no fee of its own" apps are not in this chart on purpose. Uniswap, Backpack, PancakeSwap, Rango, Superbridge and Unstoppable Wallet may well be among the cheapest places to swap on a given day, because they pass on only the route's cost. But that cost is not fixed and not published, so ranking them at "0%" above an app that tells you its fee would reward exactly the opacity this study measures. Compare them by quote.

At the top end, **Magic Eden Wallet charges 2% on cross-chain swaps** (0.8% on same-chain), **Bitcoin.com Wallet 2%** on Verse DEX cross-chain swaps on top of exchange fees, **BitBox 1.5%** flat, **THORWallet 1.25%** unless you stake its token, and the **Base app up to 1%**.

Many fees also come with discounts that matter more than the headline: THORSwap is free under $100 and half price over $1M; THORWallet drops to 0.2% for large stakers; Vultisig falls in six tiers to 0%; Zerion halves to 0.25% with Premium. Those details are in the tables below.

## Finding 3: wallets are the most expensive place to swap

<figure style="margin:28px 0">
  <a href="/blog/charts/swapapps-fee-by-category.svg"><img src="/blog/charts/swapapps-fee-by-category.svg" alt="Median verified cross-chain swap fee by category: wallets 0.875%, THORChain and Maya front-ends 0.5%, instant exchanges 0.5%, aggregators 0.25%. Exchange comparison sites state no fee of their own." width="760" height="364" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The swap button inside your wallet is convenient, and you pay for the convenience: a median 0.875%, three and a half times the aggregator median.</figcaption>
</figure>

The swap built into your wallet is the most convenient option and, by a distance, the most expensive one. The median verified wallet fee is **0.875%**: MetaMask 0.875%, Phantom 0.85%, Zerion 0.67%. Aggregators, the apps whose whole job is finding the cheapest route, have a median of **0.25%**.

On a $10,000 swap that is the difference between $87.50 and $25 before the route has charged anything. The reason is not mysterious. The wallet already has you, so it does not need to win your swap on price. An aggregator does. If you swap often or in size, connecting the same wallet to an aggregator is usually the single biggest saving available.

There are exceptions: **Backpack**, **Unstoppable Wallet** and **Brave Wallet** say they add no fee of their own, so you pay only the route's cost (which, as above, you only see in the quote).

## Finding 4: the protocol costs almost nothing, the app sets the price

<figure style="margin:28px 0">
  <a href="/blog/charts/swapapps-same-route.svg"><img src="/blog/charts/swapapps-same-route.svg" alt="Fees on top of NEAR Intents' 0.0001% protocol fee: Shieldz Swap 0.15%, KyberSwap 0.1-0.2%, ASGARDEX 0.3%, LeoDex 0.45%, BitBox 1.5%." width="760" height="412" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Five apps with a stated fee that route through the same NEAR Intents solver auction, charging from 0.15% to 1.5%. The protocol's own cut is 0.0001%.</figcaption>
</figure>

Here is what the main protocols charge for their part of the swap, from their own docs:

| Protocol | Its own fee |
|---|---|
| NEAR Intents | 0.0001% on-chain; its own app near-intents.org adds 0.2%; the 1Click API keeps half of any app fee, minimum 0.2% |
| deBridge | 0.04% plus a flat per-chain fee in the source chain's native coin |
| Relay | 0.06% on major pairs, 0.15% minor, 0.01% stablecoins, 0% plain bridging |
| Chainflip | 0.10% network fee (burns FLIP) plus 0.10-0.15% pool fees |
| THORChain, Maya | No fixed fee: a slip-based liquidity fee plus inbound and outbound gas |
| Garden | No protocol fee; the solver's cut is in the quote |

Then compare what apps add on top of the same route. **Five apps with a stated fee route through NEAR Intents**, and they charge 0.15% (Shieldz Swap), 0.1-0.2% (KyberSwap), 0.3% (ASGARDEX), 0.45% (LeoDex) and 1.5% (BitBox). The solvers competing to fill the order are the same. The price varies tenfold.

THORChain front-ends are the same story with more room: THORChain lets an interface add an affiliate fee of up to 10% of the swap, Maya up to 5%. ASGARDEX's own code repository shows how the plumbing works: it asks NEAR Intents for 0.6% so that, after 1Click keeps its half, ASGARDEX nets the 0.3% it charges everywhere else.

The lesson is the same as with wallets: **the route is cheap, the interface is where the money is made.** Two apps on the same route can differ by more than the route costs.

## Finding 5: 30% hold your coins during the swap

<figure style="margin:28px 0">
  <a href="/blog/charts/swapapps-custody.svg"><img src="/blog/charts/swapapps-custody.svg" alt="Custody model by category across 81 cross-chain swap apps: aggregators 18 non-custodial and 3 hybrid; wallets 21 non-custodial, 8 hybrid and 6 custodial; THORChain and Maya front-ends 6 non-custodial; instant exchanges 15 custodial; exchange comparison sites 1 hybrid and 3 custodial. Overall 45 non-custodial, 12 hybrid, 24 custodial." width="760" height="389" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Aggregators and THORChain front-ends keep your coins in contracts or vaults. Every instant exchange, and a surprising number of wallets, send them to an operator first.</figcaption>
</figure>

A swap is only as safe as whoever holds the money while it is in flight. **45 of 81 apps (56%) are non-custodial**: your coins move from your wallet into a contract, vault or solver escrow, and a failed swap refunds by code. **24 (30%) are custodial**: you send your coins to an operator's deposit address and trust them to send the other coin back. **12 (15%) are hybrid**: it depends on which route the app picks for you.

The surprise is wallets. **14 of the 35 wallets in this list hand at least some cross-chain swaps to a custodial exchange.** Your keys never leave your device, but for the length of the swap your coins sit in someone else's wallet. Tangem says cross-chain swaps only appear with its centralized providers (Changelly, ChangeNOW, ChangeHero, SimpleSwap). Xverse sends EVM and Solana to BTC swaps through Changelly with a fixed 10% slippage tolerance. Exodus says plainly that "your chosen crypto is sent to the wallet of the third-party exchange API provider". Atomic, Guarda, Coinomi and Stack Wallet work the same way. Ledger Wallet, Trezor Suite, Cake Wallet and Zengo mix custodial exchanges with non-custodial protocols in one "best rate" list.

That is not automatically bad. Instant exchanges often have the widest coin coverage, and plenty of them have run for years. But it is a different risk from a contract swap, and the app rarely tells you which one you got. Most wallets do show the provider's name on the quote screen: if it is an exchange rather than a protocol, your coins will leave your custody.

## Finding 6: "no KYC" usually means "no KYC unless flagged"

Almost every app here advertises no account and no KYC. For 51 of 81 that is structurally true: the app never touches your coins, so it has nothing to freeze. For the other **30, KYC is risk-based**: there is no account, but a swap that trips an AML score can be held after you have sent funds, until you verify your identity or accept a refund.

This applies to **all 15 instant exchanges**. ChangeNOW halts flagged swaps and verifies through SumSub; Changelly asks for a passport for up to €10,000 per 48 hours and more beyond that; ChangeHero notes that the only point at which a swap can be paused is after your funds arrive; Exolix's AML policy lets it suspend a transaction without telling you it has been flagged. It also applies to every wallet and comparison site that routes through them, and to RocketX, whose own FAQ says suspicious swaps are put on hold for verification.

The exchange comparison sites are useful here. **Trocador** rates every partner exchange from A to D for KYC risk and refunds you if an exchange fails to deliver without a documented AML reason, except on D-rated exchanges. **SwapSpace** shows a KYC-likelihood indicator on each offer.

If avoiding identity checks matters to you, prefer non-custodial routes: there is no deposit address for an operator to hold.

## Finding 7: a few protocols carry the market

<figure style="margin:28px 0">
  <a href="/blog/charts/swapapps-protocol-usage.svg"><img src="/blog/charts/swapapps-protocol-usage.svg" alt="Number of cross-chain swap apps naming each provider among their routes: THORChain 15, NEAR Intents 10, Chainflip 9, LI.FI 9, Maya 9, Relay 6, Changelly 6, ChangeNOW 6, 1inch 6, Across 4." width="760" height="495" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">THORChain, live since 2018, is still the most-integrated route. Custodial exchanges such as Changelly and ChangeNOW sit behind as many apps as Relay.</figcaption>
</figure>

81 apps, but far fewer engines. **THORChain** is a named route in 15 of them, **NEAR Intents** in 10, **Chainflip**, **LI.FI** and **Maya** in 9 each, and **Relay**, **1inch**, **Changelly** and **ChangeNOW** in 6. Many apps sit on top of other apps: Phantom and Zerion route through LI.FI, Keplr through Skip:Go and Squid, Ledger Wallet and BitBox through SwapKit, Magic Eden through Exodus's XO Swap.

Two practical consequences. First, **when one of these protocols halts, dozens of apps lose that route at once**, so an app with several routes is more resilient than one with a single integration. Second, **the more routes an app compares, the better its quote tends to be**, because no single protocol is cheapest on every pair. Rango, RocketX and LeoDex each compare a dozen or more providers; Shieldz Swap races three.

## Finding 8: eleven have died or broken

Cross-chain apps disappear more often than their listings do. Of the apps and protocols we started from, **11 are no longer working**:

<!-- table:inactive -->
| Name | Kind | What we found (10 October 2026) |
|---|---|---|
| Chainge Finance | protocol | chainge.finance returns 404 Not Found |
| Ctrl Wallet | app | Permanently shut down on August 19, 2026 (notice on ctrl.xyz) |
| Defispot | app | defispot.com does not resolve; app.defispot.com returns 404 |
| El Dorito | app | eldorito.club returns Framer 'Site Not Found' |
| Everclear | protocol | everclear.org fails the TLS handshake; infrastructure rather than a consumer app |
| Exch | app | exch.cx times out; the service announced its shutdown in 2025 |
| Hop Protocol | protocol | hop.exchange now serves an unrelated gambling site; app.hop.exchange answers HTTP 400 |
| Leap Wallet | app | leapwallet.io returns Framer Site Not Found; Gem Wallet published a migration guide for its shutdown |
| Router Nitro | protocol | app.routernitro.com no longer resolves; routerprotocol.com is still up |
| Swing | app | swing.xyz no longer resolves in DNS |
| Unizen | app | unizen.io serves an invalid TLS certificate |
<!-- /table -->

Two of these are worth a warning. **Ctrl Wallet** (formerly XDEFI) returns a normal-looking page and an HTTP 200, so automated link checkers still list it as live; the page itself says the wallet shut down on 19 August 2026. And **Hop Protocol's** old domain, hop.exchange, now serves an unrelated gambling site. If you have an old bookmark to any of these, delete it: a lapsed domain is a phishing domain waiting to happen. Your funds in a dead *wallet* are still yours if you have the recovery phrase; import it into any compatible wallet.

## The full list: all 81 apps

Each table is sorted by fee, lowest first. Fees link to the page they were read from. A fee in italics with an asterisk was found but could not be verified (stale, contradicted or "starting from"); "not certain" means the app claims no fee of its own, so the cost is set by the route or partner and is only known from a quote; "not published" means we found no rate at all. The quote in the app is always the final word.

### Aggregators

Apps that compare several protocols and route each swap to the best one.

<!-- table:aggregator -->
| App | Fee | What the fee page says | Custody | KYC | Native BTC | Routes via |
|---|---|---|---|---|---|---|
| [KyberSwap](https://kyberswap.com/cross-chain) | [0.1%](https://docs.kyberswap.com/kyberswap-solutions/fee-schedule) | Cross-chain platform fee 0.05-0.25% by route and token volatility (EVM-EVM: 0.05% stables, 0.10% common, 0.15% exotic, 0.25% volatile); provider fee on top | non-custodial | none | yes | NEAR Intents, Across, Relay, XY, deBridge, LI.FI, Mayan |
| [Shieldz Swap](https://swap.shieldz.cash) | [0.15%](https://swap.shieldz.cash/terms) | 0.15% service fee shown on every quote; 0.05% on swaps of $500k or more (Chainflip routes stay 0.15%) | non-custodial | none | yes | NEAR Intents, Chainflip, Relay (raced per quote) |
| [RocketX](https://www.rocketx.exchange) | [0.2%](https://www.rocketx.exchange/) | Dynamic fee from $1 or 0.2% up to 0.4%, higher on some exchange routes (FAQ); RocketX blog posts also claim zero fee under $100 | hybrid | risk-based | yes | DEXes, bridges and CEX liquidity |
| [Jumper (LI.FI)](https://jumper.xyz) | [0.25%](https://docs.li.fi/faqs/fees-monetization) | LI.FI charges a 0.25% service fee on each transaction (taken from the sending token); one Jumper page says Jumper adds nothing on top of bridge fees | non-custodial | none | ? | LI.FI: bridges, DEXes and intent networks |
| [SushiSwap](https://www.sushi.com) | [0.35%](https://www.sushi.com/cross-chain-swap) | 0.35% fee shown on the live cross-chain swap screen (an older FAQ says 0.25%), plus bridge and network fees | non-custodial | none | no | Sushi pools plus bridges (SushiXSwap) |
| [Matcha](https://matcha.xyz) | [0.4%](https://help.matcha.xyz/articles/1222339831-are-there-any-fees-to-make-a-trade) | 0.40% on cross-chain swaps, 0.04% between stablecoins, plus gas (same-chain: 0.25%) | non-custodial | none | no | 0x and bridge partners |
| [LeoDex](https://leodex.io) | [0.45%](https://leodex.io) | 0.45% per swap, 0.35% above $100K, 0.15% above $1M; network fees shown in the quote | non-custodial | none | yes | THORChain, Chainflip, Maya, NEAR Intents, Relay, deBridge, 1inch, Rango, Harbor and more (19 protocols) |
| [XY Finance](https://xy.finance) | *0.035%\** | 0.035% XY fee charged on the target chain (min $0.19-$15, max $1,000), per a 2023 fee post; no current schedule | non-custodial | none | no | Own liquidity (XY) and third-party bridges |
| [PancakeSwap](https://pancakeswap.finance) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. No PancakeSwap fee on crosschain swaps; pool trading fees on each chain and the bridge fee (Across, Relay for Solana) apply | non-custodial | none | no | PancakeSwap pools plus Across (EVM) and Relay (Solana) |
| [Rango Exchange](https://rango.exchange) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. 0% protocol fee; underlying provider, bridge and gas costs apply; apps built on Rango can add their own fee. Routes through SWFT can trigger KYC on large or flagged swaps | hybrid | none | yes | Bridges, DEXes, THORChain, Maya, some instant exchanges |
| [Superbridge](https://superbridge.app) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. No Superbridge fee on native or fast routes; the third-party bridge fee (Across, Hyperlane, Relay and others) and gas apply. Paid by rollup teams instead | non-custodial | none | no | Native rollup bridges plus fast-bridge partners |
| [Uniswap](https://app.uniswap.org) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. Uniswap Labs interface fee 0% since Dec 27, 2025; the Across relayer fee and pool fees apply | non-custodial | none | no | Across (cross-chain), Uniswap pools |
| [Bungee](https://www.bungee.exchange) | not published | No current fee schedule published; older posts say Bungee charges users nothing; integrators can add feeBps | non-custodial | none | ? | Socket: bridges and auction-based routes |
| [CoW Swap](https://swap.cow.fi) | not published | Bridge cost set per quote by Across, Bungee or NEAR Intents; CoW protocol fees apply to the swap leg | non-custodial | none | no | CoW Protocol batch auctions plus Across, Bungee and NEAR Intents for the bridge leg |
| [dZap](https://dzap.io) | not published | Fees page lists same-chain and cross-chain fees as TBD; the fee is shown per quote | non-custodial | none | yes | Bridges and DEXes |
| [OpenOcean](https://openocean.finance) | not published | No published cross-chain fee; route cost is bridge fee plus gas. Same-chain swaps: 0-0.1% by chain and pair | non-custodial | none | yes | DEX aggregation plus bridges |
| [Rubic](https://rubic.exchange) | not published | No fixed published fee: a 2024 post says $2 per cross-chain swap, a 2026 post says no platform fee beyond provider quotes, RBC holders were exempt | hybrid | none | yes | Bridges, DEXes and custodial exchange partners |
| [Skip:Go](https://go.skip.build) | not published | API free; Skip takes 20-25% of any fee the integrating app sets; Go Fast routes pay solvers 0.10% | non-custodial | none | no | IBC, CCTP, Axelar, Hyperlane |
| [Squid Router](https://www.squidrouter.com) | not published | Fee varies by route and asset; zero on stablecoin swaps; no fixed percentage published | non-custodial | none | yes | Axelar, CCTP, Chainflip and others |
| [UniversalX](https://universalx.app) | not published | No published rate; Particle 2025 review figures ($59.4K daily fees on $5.9M daily volume) imply about 1% | non-custodial | none | no | Particle Network universal accounts |
| [Velora](https://www.velora.xyz) | not published | API default 0.01% (anonymous partner key); integrators set up to 2%; the app shows swap fees per quote | non-custodial | none | no | Velora Delta intents and bridges |
<!-- /table -->

### Wallets

Cross-chain swaps built into a wallet. Custody here means custody during the swap, not of your keys: every wallet in this list is self-custody for storage.

<!-- table:wallet -->
| App | Fee | What the fee page says | Custody | KYC | Native BTC | Routes via |
|---|---|---|---|---|---|---|
| [Coin98](https://coin98.com) | [0.1%](https://docs.coin98.com/products/coin98-super-wallet/mobile/swapx/faqs/faqs) | SpaceGate bridge: 0.1% protocol fee on C98, SAROS, GSTS and some VIC routes, 0% on others, plus fixed withdraw fees; only listed tokens bridge | non-custodial | none | ? | SpaceGate (own bridge) for listed tokens |
| [Guarda](https://guarda.com) | [0.5%](https://guarda.com/support/getting-started/what-fees-am-i-paying-for/) | Guarda adds no fee; exchange partners take about 0.5% per swap, built into the rate | custodial | risk-based | yes | Instant-exchange partners |
| [Zerion](https://zerion.io) | [0.67%](https://help.zerion.io/en/articles/4813752-understanding-fees-on-zerion) | 0.67% service fee on swaps and bridges (0.25% with Premium, 0% for Gold DNA holders); API docs still say 0.8% | non-custodial | none | ? | LI.FI |
| [Phantom](https://phantom.com) | [0.85%](https://help.phantom.com/hc/en-us/articles/27085326202515-Swap-settings-in-Phantom) | 0.85% Phantom fee on cross-chain swaps (via LI.FI) plus a typical 0.1-0.5% bridge fee and gas; no fee on swaps into CASH | non-custodial | none | ? | LI.FI (bridges), 0x and Jupiter for the swap legs |
| [MetaMask](https://metamask.io) | [0.875%](https://support.metamask.io/manage-crypto/move-crypto/bridge/how-are-bridge-fees-calculated/) | 0.875% MetaMask fee on each bridge and cross-chain swap, on the value before fees | non-custodial | none | ? | Bridge aggregation (several providers) |
| [Base App](https://base.app) | [1%](https://help.coinbase.com/en/wallet/getting-started/dex-swap) | Up to 1% Base fee on swaps including cross-chain swaps; a Coinbase fee on bridges to any network other than Base | non-custodial | none | no | DEX aggregators and Socket (Bungee) for bridging |
| [BitBox](https://bitbox.swiss) | [1.5%](https://support.bitbox.swiss/en_US/swap/swapkit-crypto-swap-bitboxapp) | Flat 1.5% on each swap through SwapKit, plus network and provider costs | non-custodial | none | yes | SwapKit (NEAR Intents) |
| [Bitcoin.com Wallet](https://wallet.bitcoin.com) | [2%](https://support.bitcoin.com/en/articles/9172611-how-to-swap-across-chains-on-verse-dex) | 2% service fee on Verse DEX cross-chain swaps plus exchange and network fees (support article, mid-2025); CEX mode via SideShift and ChangeNOW | hybrid | risk-based | yes | Verse DEX, SideShift, ChangeNOW, FixedFloat and others (14 providers) |
| [Magic Eden Wallet](https://wallet.magiceden.io) | [2%](https://help.magiceden.io/en/articles/9673665-how-to-swap-tokens-in-the-magic-eden-app) | 2% platform fee on cross-chain swaps, 0.8% same-chain, included in the quote | hybrid | none | yes | XO Swap (Exodus) |
| [SafePal](https://www.safepal.com) | *0.2%\** | Last published swap fee 0.2% (2023 campaign post; 0.3% in 2021); bridge provider fees on top | non-custodial | none | ? | deBridge, Orbiter and other providers in SafePal Swap |
| [Exodus](https://www.exodus.com) | *0.5%\** | No line-item fee; Exodus takes a share of the provider spread, advertised as starting at 0.5% (Jan 2025). Funds go to the third-party exchange provider during the swap | hybrid | none | yes | Third-party exchange providers and XO Swap (DEXes, bridges, market makers) |
| [OKX Wallet](https://web3.okx.com/dex-swap) | *0.5%\** | OKX DEX interface fee 0-0.5% by token group (0.5% for listed tokens against others); not stated whether bridge mode is covered; bridge fees on top | non-custodial | none | ? | OKX DEX cross-chain aggregator |
| [Trust Wallet](https://trustwallet.com) | *0.7%\** | Trust Wallet 2026 comparison lists a 0.7% fee built into the rate; its swap FAQ says no service fee. Providers: THORChain, 1inch, Mimic, Axelar | non-custodial | none | ? | THORChain, 1inch, Mimic, Axelar (and Harbor per its explorer) |
| [Atomic Wallet](https://atomicwallet.io) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. Atomic adds no fee; the exchange partner (ChangeNOW) charges a provider fee shown before the swap; KYC can be requested on large swaps | custodial | risk-based | yes | ChangeNOW |
| [Backpack](https://backpack.app) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. 0% Backpack fee on swaps and bridges on every network since March 10, 2026; no spread markup; gas and bridge fees apply | non-custodial | none | no | Wormhole and aggregated bridge routes |
| [Brave Wallet](https://brave.com/wallet/) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. Brave says it adds no fee to swaps or bridges (2024 announcement); LI.FI route fees apply | non-custodial | none | yes | LI.FI, NEAR Intents (since v1.88) |
| [Coinomi](https://www.coinomi.com) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. Coinomi charges nothing; exchange partners price their fee into the rate | custodial | risk-based | yes | Changelly, n.exchange |
| [Unstoppable Wallet](https://unstoppable.money) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. Unstoppable charges no extra fee for swapping; protocol costs apply | non-custodial | none | yes | THORChain, NEAR Intents, 1inch |
| [Binance Wallet](https://www.binance.com/en/web3wallet) | not published | TX fee shown on the confirmation screen; no percentage published | non-custodial | none | ? | Binance Bridge and third-party bridge providers |
| [Bitget Wallet](https://web3.bitget.com) | not published | Platform fee charged as a percentage of the swap, shown in the quote; rate not published | non-custodial | none | ? | Bridges and aggregators |
| [Cake Wallet](https://cakewallet.com) | not published | Provider fee or spread built into the quote; no Cake fee stated | hybrid | risk-based | yes | ChangeNOW, Exolix, Trocador, SideShift, SwapTrade, LetsExchange, SimpleSwap, StealthEX, XOSwap; Chainflip, NEAR Intents, Jupiter, Swaps.xyz |
| [Edge Wallet](https://edge.app) | not published | Best price across providers; whether Edge adds a fee is not stated | non-custodial | none | yes | THORChain, Maya, Rango, LI.FI, SwapKit, 0x |
| [Gem Wallet](https://gemwallet.com) | not published | Provider fee shown per quote; Gem pages conflict on whether Gem adds a fee | non-custodial | none | yes | 20+ providers incl. THORChain, Chainflip, Relay, Mayan, Uniswap, Jupiter, OKX DEX |
| [imToken](https://token.im) | not published | Fee set by the bridge used: Bridgers (SWFT) 0.4%, Tokenlon Tron bridge 0.3% (5 USDT under 2,000), cBridge 0-0.04%; no imToken fee stated | hybrid | none | ? | Bridgers (SWFT), Tokenlon, cBridge, Router |
| [KeepKey](https://keepkey.com) | not published | Route, fees and slippage shown before signing; KeepKey fee not published | non-custodial | none | yes | THORChain, Maya, Relay, 0x, Chainflip, ShapeShift |
| [Keplr](https://www.keplr.app) | not published | Keplr acts as aggregator; no fee percentage published | non-custodial | none | ? | Skip:Go, Squid |
| [Ledger Wallet](https://shop.ledger.com/pages/ledger-wallet) | not published | Quote = partner rate x (1 - Ledger fee - partner fee) - withdrawal fee; neither fee size is published | hybrid | none | yes | 15+ providers: Uniswap, 1inch, OKX DEX, NEAR Intents, THORChain (via SwapKit), Velora, Exodus, Changelly |
| [Rabby Wallet](https://rabby.io) | not published | No published swap or bridge fee | non-custodial | none | ? | Bridge aggregators |
| [Rainbow](https://rainbow.me) | not published | Rainbow Fee line shown on the confirmation screen; rate not published; RNBW stakers get 25-100% cashback | non-custodial | none | no | Bridge aggregators |
| [Stack Wallet](https://stackwallet.com) | not published | Stack Wallet adds a tiny fee alongside the exchange partner; no percentage published | custodial | risk-based | yes | ChangeNOW, Trocador |
| [Tangem](https://tangem.com) | not published | Cross-chain swaps only through custodial providers, whose fees Tangem puts at 0.5-1.5%; Tangem fee not stated; 0% on stablecoin swaps via Changelly and ChangeHero | custodial | risk-based | yes | Changelly, ChangeNOW, ChangeHero, SimpleSwap (cross-chain); 1inch, OKX DEX, LI.FI, Jupiter (same-chain) |
| [TokenPocket](https://www.tokenpocket.pro) | not published | Transit Swap service fee shown per transaction; no rate published; TPT holders get discounts | non-custodial | none | ? | Transit Swap aggregator |
| [Trezor Suite](https://trezor.io/trezor-suite) | not published | Dynamic provider pricing shown per offer; no percentage published | hybrid | risk-based | yes | ChangeHero, Changelly, ChangeNOW, Godex, SideShift.ai (custodial) and 1inch, LI.FI |
| [Xverse](https://www.xverse.app) | not published | Xverse Swap fee plus Changelly liquidity-provider fee shown per quote; no rate published; fixed 10% slippage tolerance | custodial | risk-based | yes | Changelly (EVM and Solana to BTC) |
| [Zengo](https://zengo.com) | not published | Help center says up to 4% processing fee; product page says 0.5% plus a spread; liquidity fees on top | hybrid | risk-based | yes | Changelly, THORChain, Swaps.xyz |
<!-- /table -->

### THORChain, Maya and Chainflip front-ends

Independent interfaces on native cross-chain protocols. All non-custodial: your coins go to the protocol's vaults, not to the front-end.

<!-- table:frontend -->
| App | Fee | What the fee page says | Custody | KYC | Native BTC | Routes via |
|---|---|---|---|---|---|---|
| [ASGARDEX](https://www.asgardex.com) | [0.3%](https://github.com/asgardex/asgardex-desktop) | 0.3% affiliate fee only on swaps over $1,001 (asks 0.6% on NEAR Intents routes so it nets 0.3% after the 1Click split); none on smaller swaps or LP actions | non-custodial | none | yes | THORChain, Maya, Chainflip and NEAR Intents |
| [THORSwap](https://app.thorswap.finance) | [0.5%](https://docs.thorswap.finance/thorswap/thorswap/fees) | 0.5% exchange fee on swaps over $100; free under $100; 50% off over $1M; up to 100% off for vTHOR/uTHOR holders | non-custodial | none | yes | THORChain, Maya, Chainflip, aggregators |
| [Vultisig](https://vultisig.com) | [0.5%](https://vultisig.com/vult) | 0.50% on swap output; VULT holdings cut it in six tiers down to 0% | non-custodial | none | yes | THORChain, Maya, LI.FI |
| [THORWallet](https://www.thorwallet.org) | [1.25%](https://www.thorwallet.org/titn) | 1.25% standard; 0.5% or 0.2% with TITN staking; free under $100; lower above $50k | non-custodial | none | yes | THORChain and Maya |
| [CacaoSwap](https://cacaoswap.app) | not published | No published affiliate rate; Maya front-ends may set up to 5% per swap | non-custodial | none | yes | Maya Protocol |
| [ShapeShift](https://app.shapeshift.com) | not published | Fee falls with FOX holdings (FOX Discounts, Dec 2023); no current base rate published | non-custodial | none | yes | THORChain, Chainflip, relayers and DEXes |
<!-- /table -->

### Instant exchanges

No-account custodial exchanges: you send to a deposit address, they send the other coin back. All can hold flagged swaps for KYC.

<!-- table:instant-exchange -->
| App | Fee | What the fee page says | Custody | KYC | Native BTC | Routes via |
|---|---|---|---|---|---|---|
| [Changelly](https://changelly.com) | [0.25%](https://changelly.com/faq/changelly/fees/) | 0.25% on floating-rate swaps (default), plus network fees; fixed-rate swaps carry a dynamic fee; flagged swaps need KYC | custodial | risk-based | yes | Exchange partners |
| [ChangeHero](https://changehero.io) | [0.5%](https://changehero.io/blog/crypto-exchange-with-lowest-fees/) | Up to 0.5% on best-rate swaps, up to 0.7% fixed-rate, spread and network fees on top (a ChangeHero test came to 1.3% all-in) | custodial | risk-based | yes | Exchange partners |
| [FixedFloat](https://ff.io) | [0.5%](https://ff.io/en/faq) | 0.5% on floating-rate orders, 1% on fixed-rate, plus network fees, all built into the final rate | custodial | risk-based | yes | Own liquidity |
| [Quickex](https://quickex.io) | [0.5%](https://quickex.io/exchange-btc-runerune) | 0.5% on floating-rate swaps, 1% fixed-rate, plus network fees | custodial | risk-based | yes | Exchange partners |
| [Exolix](https://exolix.com) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. Terms say Exolix charges no fees because rates are fixed; the margin is in the quoted rate | custodial | risk-based | yes | Exchange partners |
| [Houdini Swap](https://houdiniswap.com) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. No direct user fee; Houdini earns rebates from partner exchanges, about 0.5% of volume per its whitepaper; private (two-exchange) swaps cost more | custodial | risk-based | yes | Two-hop exchange routing for privacy |
| [Alfacash](https://www.alfa.cash) | not published | No standard swap fee published (merchant service 0.5-3%); registered users save up to 10% | custodial | risk-based | yes | Own liquidity |
| [Changee](https://changee.com) | not published | Commissions as low as 0.25% (About page); Changee blog puts typical all-in cost at 0.5-1.2% | custodial | risk-based | yes | Exchange partners |
| [ChangeNOW](https://changenow.io) | not published | Fee built into the quoted rate, no fixed percentage; its own comparison post says ChangeNOW does not disclose fees fully; partners earn a 0.4% revenue share | custodial | risk-based | yes | Own liquidity and exchange partners |
| [Godex](https://godex.io) | not published | Built into the rate; Godex posts give about 0.8% all-in (older) and 1.67-2.14% all-in on BTC to ETH from its own rate data (2026) | custodial | risk-based | yes | Exchange partners |
| [LetsExchange](https://letsexchange.io) | not published | Own commission, provider commission and an AML fee built into the estimate; rate not published | custodial | risk-based | yes | Exchange partners |
| [SideShift.ai](https://sideshift.ai) | not published | Small service fee built into the quoted rate, not stated as a percentage; integrators earn 0.5% of volume | custodial | risk-based | yes | Own liquidity |
| [SimpleSwap](https://simpleswap.io) | not published | All-in rate with no separate fee; may start from 0.2% for some assets; account holders get up to 20% off | custodial | risk-based | yes | Exchange partners |
| [StealthEX](https://stealthex.io) | not published | Variable service fee as a percentage of the deposit, changeable at StealthEX discretion; API partners earn 0.4% | custodial | risk-based | yes | Exchange partners |
| [Swapter](https://swapter.io) | not published | Internal service fee built into the quoted rate; no percentage published; KYC possible on large sums | custodial | risk-based | yes | Exchange partners |
<!-- /table -->

### Exchange comparison sites

Compare instant exchanges (and sometimes protocols) and send you to the best offer. They add nothing themselves; the exchange's fee is in each offer.

<!-- table:exchange-aggregator -->
| App | Fee | What the fee page says | Custody | KYC | Native BTC | Routes via |
|---|---|---|---|---|---|---|
| [CypherGoat](https://cyphergoat.com) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. Adds no fee above exchange and network fees (typically 0.4-0.6% from the exchange); THORChain routes optional | hybrid | risk-based | yes | 20+ instant exchanges plus THORChain |
| [SwapSpace](https://swapspace.co) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. No SwapSpace markup; 45+ providers each with their fee in the offer and a KYC-likelihood indicator | custodial | risk-based | yes | Compares instant exchanges |
| [Swapzone](https://swapzone.io) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. 0% Swapzone fee; partner exchange fee built into each offer; earns referral commissions | custodial | risk-based | yes | Compares instant exchanges |
| [Trocador](https://trocador.app) | not certain | No fee of its own claimed; the full cost is set by the route or partner, which can include a commission paid back to the app. Trocador adds no fee; each partner exchange fee is in its quote; partners rated A-D for KYC risk; refund guarantee except on D-rated exchanges | custodial | risk-based | yes | Compares instant exchanges, rates KYC risk |
<!-- /table -->

## The protocols underneath

Not part of the comparison, listed so the "routes via" column can be read. Fees are each protocol's own, from its docs; an app's fee comes on top.

<!-- table:protocols -->
| Protocol | Type | Fee | Fee detail | Native BTC | Solana |
|---|---|---|---|---|---|
| [1inch Fusion+](https://1inch.com) | intent-network | not published | not researched | ? | ? |
| [Across Protocol](https://across.to) | intent-network | not published | Variable relayer fee plus an LP fee of about 0.06-0.12% depending on pool use; some routes sponsored | no | yes |
| [Allbridge](https://allbridge.io) | bridge | not published | not researched | no | yes |
| [Bridgers](https://bridgers.xyz) | bridge | not published | not researched | ? | ? |
| [cBridge (Celer)](https://cbridge.celer.network) | bridge | not published | not researched | no | ? |
| [Chainflip](https://chainflip.io) | native-dex | [0.1%](https://docs.chainflip.io/protocol/swapping-basics) | 0.10% network fee (0.01% for stablecoin swaps, $0.50 minimum) burns FLIP; plus 0.10-0.15% pool liquidity fee, optional 0.05-0.3% Boost, and broker fees set by the app | yes | yes |
| [deBridge](https://debridge.com) | intent-network | [0.04%](https://docs.debridge.com/dln-details/overview/fee-structure) | 0.04% DLN protocol fee plus a flat per-chain fee in the source native token (e.g. 0.001 ETH on Arbitrum); solver margin in the spread | no | yes |
| [Garden Finance](https://garden.finance) | native-dex | [0%](https://garden.finance/) | No additional fee; the solver fee and network costs are built into the quote | yes | yes |
| [Gas.zip](https://www.gas.zip) | bridge | not published | not researched | no | yes |
| [Harbor](https://harbor.xyz) | native-dex | not published | No fee schedule published | yes | yes |
| [Hyperlane Nexus](https://nexus.hyperlane.xyz) | bridge | not published | not researched | no | yes |
| [LayerSwap](https://layerswap.io) | bridge | not published | not researched | ? | yes |
| [Maya Protocol](https://www.mayaprotocol.com) | native-dex | [0%](https://docs.mayaprotocol.com/mayachain-dev-docs/concepts/fees) | No fixed protocol fee: slip-based liquidity fee (minimum 0.05% on streaming swaps) plus inbound gas and an outbound fee with a $1 floor; front-ends add affiliate fees of up to 5% | yes | no |
| [Mayan Finance](https://mayan.finance) | intent-network | not published | not researched | no | yes |
| [Meson Finance](https://meson.fi) | bridge | not published | not researched | no | ? |
| [NEAR Intents](https://near-intents.org) | intent-network | [0.2%](https://docs.near-intents.org/resources/fees) | 0.2% on swaps through near-intents.org, on top of a 0.0001% on-chain protocol fee; 1Click API adds 0.20% (0.01% on stablecoin pairs) | yes | yes |
| [Orbiter Finance](https://www.orbiter.finance) | bridge | not published | not researched | no | ? |
| [Owlto Finance](https://owlto.finance) | bridge | not published | not researched | no | ? |
| [Portal (Wormhole)](https://portalbridge.com) | bridge | not published | not researched | no | yes |
| [Relay](https://relay.link) | intent-network | [0.06%](https://docs.relay.link/references/api/api_core_concepts/fees) | Platform fee 0.06% on major swaps, 0.15% minor, 0.01% stablecoin, 0% plain bridges; plus execution and swap costs; apps add their own fees | yes | yes |
| [Retrobridge](https://retrobridge.io) | bridge | not published | not researched | ? | ? |
| [Rhino.fi](https://rhino.fi) | bridge | not published | not researched | no | yes |
| [Stargate](https://stargate.finance) | bridge | not published | not researched | no | ? |
| [Symbiosis](https://symbiosis.finance) | intent-network | not published | not researched | yes | ? |
| [Synapse](https://synapseprotocol.com) | bridge | not published | not researched | no | ? |
| [Teleswap](https://teleswap.xyz) | native-dex | *0.1%\** | About 0.1% Locker fee plus network fees per TeleSwap guides; other TeleSwap guides say 0.2%, 0.1-0.3% or no protocol fee | yes | yes |
| [THORChain](https://thorchain.org) | native-dex | [0%](https://dev.thorchain.org/concepts/fees.html) | No fixed protocol fee: a slip-based liquidity fee (with a governance-set minimum) plus inbound and outbound gas; front-ends add affiliate fees of up to 10% | yes | ? |
| [Wanchain XFlows](https://bridge.wanchain.org) | bridge | not published | not researched | yes | ? |
<!-- /table -->

## Where Shieldz Swap fits

This study is published by Shieldz, and [Shieldz Swap](https://swap.shieldz.cash) is one of the 81, so here is where it lands by the same rules as everyone else.

It is an aggregator. It asks **NEAR Intents, Chainflip and Relay** for a price at the same moment, shows every route that answers with its payout and settle time, and lets you pick a different route from the one it recommends. It is **non-custodial** (you send from your own wallet to the protocol), there is **no account and no KYC** of its own, and the fee is **0.15%**, shown on every quote, falling to 0.05% on swaps of $500,000 or more (Chainflip routes stay at 0.15%). That makes it the third-lowest of the 24 stated fees, behind Coin98 and KyberSwap at 0.1%, and below every wallet in the list.

Where it is weaker: it races three protocols, where Rango, RocketX and LeoDex compare a dozen or more, and it covers 45 chains, where Squid claims 100+ and RocketX 200+. THORChain routes are switched off for now. If you need a long-tail coin or a chain we do not list, one of the wider aggregators above will have a route we do not. We measured how fast it quotes in [How fast is Shieldz Swap?](/blog/how-fast-is-shieldz-swap): a first real price in 0.39 seconds, median.

## How to choose: five questions

1. **Does it publish its fee?** If not, compare the amount you receive across two or three apps for the same swap. That is the only number that cannot hide anything.
2. **Who holds the coins in flight?** A contract or vault refunds by code; an exchange's deposit address refunds by policy. Check the provider name on the quote.
3. **Is the wallet the cheapest option?** Usually not. Connect the same wallet to an aggregator and compare: the median wallet fee is three and a half times the median aggregator fee.
4. **How many routes does it compare?** One route is one price. Several routes mean the app has to beat itself.
5. **What happens if the swap is flagged?** For custodial routes, read the AML policy before a large swap, not after. For non-custodial routes, there is no one to hold it.

## FAQ

**Which cross-chain swap app has the lowest fees?**
Of the 24 apps that state a fixed fee we could verify, the lowest are Coin98 and KyberSwap at 0.1% (Coin98 only on tokens its bridge lists, KyberSwap on common EVM pairs) and Shieldz Swap at 0.15%. Fifteen more apps, including Uniswap, Backpack and Rango, say they add no fee of their own; their cost is whatever the route charges, so compare the amount you receive in each quote.

**How much does MetaMask charge for cross-chain swaps?**
0.875% per bridge or cross-chain swap, according to MetaMask's support page, calculated on the value before other fees. Phantom charges 0.85%, Zerion 0.67% and the Base app up to 1%.

**Are cross-chain swaps safe?**
It depends on custody. Non-custodial apps keep your coins in contracts, vaults or solver escrows, and a failed swap is refunded by the protocol. Custodial apps and instant exchanges receive your coins first and send the other coin back; 24 of the 81 apps work that way, and 12 more depend on the route.

**Do cross-chain swaps require KYC?**
Not by default. None of the 81 apps requires an account or ID to start a swap. But 30 of them, including all 15 instant exchanges, can hold a flagged swap until you verify your identity.

**What is the difference between a cross-chain swap app and a protocol?**
A protocol (THORChain, Chainflip, NEAR Intents, Relay) moves the value between chains. An app (a wallet, aggregator, front-end or exchange) is where you start the swap; it asks one or more protocols for a quote and adds its fee. Protocol fees are usually tiny; most of what you pay is the app's fee.

## The bottom line

The cross-chain swap market has two problems, and neither is technology. Most apps do not publish what they charge, and the most convenient place to swap, the button inside your wallet, is the most expensive. The protocols underneath are cheap and getting cheaper. The interfaces on top set the price, and many of them would rather you did not compare.

So compare anyway. Get the same quote from your wallet and from two aggregators, look at the amount you receive and the name of the provider, and pick the route you would trust with the money for the minutes it takes to arrive.

Download the full open dataset (CC BY 4.0, v1.0.0): [JSON](/blog/data/cross-chain-swaps-2026.json), [CSV](/blog/data/cross-chain-swaps-2026.csv), or the [GitHub repository](https://github.com/ShieldZCash/cross-chain-swap-dataset), which also has the full table as markdown and the 32 protocols underneath.

## Independence statement

We collect and process this dataset independently. Every classification comes from the app's own pricing page, help center, documentation or terms, every fee links to its source, and the order comes from the data alone. **We do not accept paid placements, sponsored positions, or any exchange of money for how an app appears in this study.** Shieldz Swap competes with many of the apps listed here and is held to exactly the same rules, which is why the methodology, the [raw data](https://github.com/ShieldZCash/cross-chain-swap-dataset) and the sources are public. If a row is wrong, [open a pull request](https://github.com/ShieldZCash/cross-chain-swap-dataset) and we will fix it in the next monthly release.

<!-- jsonld -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which cross-chain swap app has the lowest fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Of the 24 apps compared in October 2026 that state a fixed fee we could verify, the lowest are Coin98 and KyberSwap at 0.1% (Coin98 only on tokens its bridge lists) and Shieldz Swap at 0.15%. Fifteen more, including Uniswap, Backpack and Rango, say they add no fee of their own; their cost is whatever the route charges, so compare quotes."
      }
    },
    {
      "@type": "Question",
      "name": "How much does MetaMask charge for cross-chain swaps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "0.875% per bridge or cross-chain swap, according to MetaMask's support page. Phantom charges 0.85%, Zerion 0.67% and the Base app up to 1%."
      }
    },
    {
      "@type": "Question",
      "name": "Are cross-chain swaps safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on custody. Non-custodial apps keep your coins in contracts, vaults or solver escrows and refund failed swaps by code. 24 of the 81 apps are custodial, receiving your coins before sending the other coin back, and 12 more depend on the route."
      }
    },
    {
      "@type": "Question",
      "name": "Do cross-chain swaps require KYC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not by default: none of the 81 apps requires an account or ID to start a swap. But 30 of them, including all 15 instant exchanges, can hold a flagged swap until you verify your identity."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a cross-chain swap app and a protocol?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A protocol such as THORChain, Chainflip, NEAR Intents or Relay moves value between chains. An app is where you start the swap: it asks protocols for quotes and adds its own fee. Protocol fees are usually tiny; most of what you pay is the app's fee."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "81 cross-chain swap apps compared (October 2026)",
  "numberOfItems": 81,
  "itemListOrder": "https://schema.org/ItemListUnordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Alfacash",
      "url": "https://www.alfa.cash"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "ASGARDEX",
      "url": "https://www.asgardex.com"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Atomic Wallet",
      "url": "https://atomicwallet.io"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Backpack",
      "url": "https://backpack.app"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Base App",
      "url": "https://base.app"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Binance Wallet",
      "url": "https://www.binance.com/en/web3wallet"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "BitBox",
      "url": "https://bitbox.swiss"
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "Bitcoin.com Wallet",
      "url": "https://wallet.bitcoin.com"
    },
    {
      "@type": "ListItem",
      "position": 9,
      "name": "Bitget Wallet",
      "url": "https://web3.bitget.com"
    },
    {
      "@type": "ListItem",
      "position": 10,
      "name": "Brave Wallet",
      "url": "https://brave.com/wallet/"
    },
    {
      "@type": "ListItem",
      "position": 11,
      "name": "Bungee",
      "url": "https://www.bungee.exchange"
    },
    {
      "@type": "ListItem",
      "position": 12,
      "name": "CacaoSwap",
      "url": "https://cacaoswap.app"
    },
    {
      "@type": "ListItem",
      "position": 13,
      "name": "Cake Wallet",
      "url": "https://cakewallet.com"
    },
    {
      "@type": "ListItem",
      "position": 14,
      "name": "Changee",
      "url": "https://changee.com"
    },
    {
      "@type": "ListItem",
      "position": 15,
      "name": "ChangeHero",
      "url": "https://changehero.io"
    },
    {
      "@type": "ListItem",
      "position": 16,
      "name": "Changelly",
      "url": "https://changelly.com"
    },
    {
      "@type": "ListItem",
      "position": 17,
      "name": "ChangeNOW",
      "url": "https://changenow.io"
    },
    {
      "@type": "ListItem",
      "position": 18,
      "name": "Coin98",
      "url": "https://coin98.com"
    },
    {
      "@type": "ListItem",
      "position": 19,
      "name": "Coinomi",
      "url": "https://www.coinomi.com"
    },
    {
      "@type": "ListItem",
      "position": 20,
      "name": "CoW Swap",
      "url": "https://swap.cow.fi"
    },
    {
      "@type": "ListItem",
      "position": 21,
      "name": "CypherGoat",
      "url": "https://cyphergoat.com"
    },
    {
      "@type": "ListItem",
      "position": 22,
      "name": "dZap",
      "url": "https://dzap.io"
    },
    {
      "@type": "ListItem",
      "position": 23,
      "name": "Edge Wallet",
      "url": "https://edge.app"
    },
    {
      "@type": "ListItem",
      "position": 24,
      "name": "Exodus",
      "url": "https://www.exodus.com"
    },
    {
      "@type": "ListItem",
      "position": 25,
      "name": "Exolix",
      "url": "https://exolix.com"
    },
    {
      "@type": "ListItem",
      "position": 26,
      "name": "FixedFloat",
      "url": "https://ff.io"
    },
    {
      "@type": "ListItem",
      "position": 27,
      "name": "Gem Wallet",
      "url": "https://gemwallet.com"
    },
    {
      "@type": "ListItem",
      "position": 28,
      "name": "Godex",
      "url": "https://godex.io"
    },
    {
      "@type": "ListItem",
      "position": 29,
      "name": "Guarda",
      "url": "https://guarda.com"
    },
    {
      "@type": "ListItem",
      "position": 30,
      "name": "Houdini Swap",
      "url": "https://houdiniswap.com"
    },
    {
      "@type": "ListItem",
      "position": 31,
      "name": "imToken",
      "url": "https://token.im"
    },
    {
      "@type": "ListItem",
      "position": 32,
      "name": "Jumper (LI.FI)",
      "url": "https://jumper.xyz"
    },
    {
      "@type": "ListItem",
      "position": 33,
      "name": "KeepKey",
      "url": "https://keepkey.com"
    },
    {
      "@type": "ListItem",
      "position": 34,
      "name": "Keplr",
      "url": "https://www.keplr.app"
    },
    {
      "@type": "ListItem",
      "position": 35,
      "name": "KyberSwap",
      "url": "https://kyberswap.com/cross-chain"
    },
    {
      "@type": "ListItem",
      "position": 36,
      "name": "Ledger Wallet",
      "url": "https://shop.ledger.com/pages/ledger-wallet"
    },
    {
      "@type": "ListItem",
      "position": 37,
      "name": "LeoDex",
      "url": "https://leodex.io"
    },
    {
      "@type": "ListItem",
      "position": 38,
      "name": "LetsExchange",
      "url": "https://letsexchange.io"
    },
    {
      "@type": "ListItem",
      "position": 39,
      "name": "Magic Eden Wallet",
      "url": "https://wallet.magiceden.io"
    },
    {
      "@type": "ListItem",
      "position": 40,
      "name": "Matcha",
      "url": "https://matcha.xyz"
    },
    {
      "@type": "ListItem",
      "position": 41,
      "name": "MetaMask",
      "url": "https://metamask.io"
    },
    {
      "@type": "ListItem",
      "position": 42,
      "name": "OKX Wallet",
      "url": "https://web3.okx.com/dex-swap"
    },
    {
      "@type": "ListItem",
      "position": 43,
      "name": "OpenOcean",
      "url": "https://openocean.finance"
    },
    {
      "@type": "ListItem",
      "position": 44,
      "name": "PancakeSwap",
      "url": "https://pancakeswap.finance"
    },
    {
      "@type": "ListItem",
      "position": 45,
      "name": "Phantom",
      "url": "https://phantom.com"
    },
    {
      "@type": "ListItem",
      "position": 46,
      "name": "Quickex",
      "url": "https://quickex.io"
    },
    {
      "@type": "ListItem",
      "position": 47,
      "name": "Rabby Wallet",
      "url": "https://rabby.io"
    },
    {
      "@type": "ListItem",
      "position": 48,
      "name": "Rainbow",
      "url": "https://rainbow.me"
    },
    {
      "@type": "ListItem",
      "position": 49,
      "name": "Rango Exchange",
      "url": "https://rango.exchange"
    },
    {
      "@type": "ListItem",
      "position": 50,
      "name": "RocketX",
      "url": "https://www.rocketx.exchange"
    },
    {
      "@type": "ListItem",
      "position": 51,
      "name": "Rubic",
      "url": "https://rubic.exchange"
    },
    {
      "@type": "ListItem",
      "position": 52,
      "name": "SafePal",
      "url": "https://www.safepal.com"
    },
    {
      "@type": "ListItem",
      "position": 53,
      "name": "ShapeShift",
      "url": "https://app.shapeshift.com"
    },
    {
      "@type": "ListItem",
      "position": 54,
      "name": "Shieldz Swap",
      "url": "https://swap.shieldz.cash"
    },
    {
      "@type": "ListItem",
      "position": 55,
      "name": "SideShift.ai",
      "url": "https://sideshift.ai"
    },
    {
      "@type": "ListItem",
      "position": 56,
      "name": "SimpleSwap",
      "url": "https://simpleswap.io"
    },
    {
      "@type": "ListItem",
      "position": 57,
      "name": "Skip:Go",
      "url": "https://go.skip.build"
    },
    {
      "@type": "ListItem",
      "position": 58,
      "name": "Squid Router",
      "url": "https://www.squidrouter.com"
    },
    {
      "@type": "ListItem",
      "position": 59,
      "name": "Stack Wallet",
      "url": "https://stackwallet.com"
    },
    {
      "@type": "ListItem",
      "position": 60,
      "name": "StealthEX",
      "url": "https://stealthex.io"
    },
    {
      "@type": "ListItem",
      "position": 61,
      "name": "Superbridge",
      "url": "https://superbridge.app"
    },
    {
      "@type": "ListItem",
      "position": 62,
      "name": "SushiSwap",
      "url": "https://www.sushi.com"
    },
    {
      "@type": "ListItem",
      "position": 63,
      "name": "SwapSpace",
      "url": "https://swapspace.co"
    },
    {
      "@type": "ListItem",
      "position": 64,
      "name": "Swapter",
      "url": "https://swapter.io"
    },
    {
      "@type": "ListItem",
      "position": 65,
      "name": "Swapzone",
      "url": "https://swapzone.io"
    },
    {
      "@type": "ListItem",
      "position": 66,
      "name": "Tangem",
      "url": "https://tangem.com"
    },
    {
      "@type": "ListItem",
      "position": 67,
      "name": "THORSwap",
      "url": "https://app.thorswap.finance"
    },
    {
      "@type": "ListItem",
      "position": 68,
      "name": "THORWallet",
      "url": "https://www.thorwallet.org"
    },
    {
      "@type": "ListItem",
      "position": 69,
      "name": "TokenPocket",
      "url": "https://www.tokenpocket.pro"
    },
    {
      "@type": "ListItem",
      "position": 70,
      "name": "Trezor Suite",
      "url": "https://trezor.io/trezor-suite"
    },
    {
      "@type": "ListItem",
      "position": 71,
      "name": "Trocador",
      "url": "https://trocador.app"
    },
    {
      "@type": "ListItem",
      "position": 72,
      "name": "Trust Wallet",
      "url": "https://trustwallet.com"
    },
    {
      "@type": "ListItem",
      "position": 73,
      "name": "Uniswap",
      "url": "https://app.uniswap.org"
    },
    {
      "@type": "ListItem",
      "position": 74,
      "name": "UniversalX",
      "url": "https://universalx.app"
    },
    {
      "@type": "ListItem",
      "position": 75,
      "name": "Unstoppable Wallet",
      "url": "https://unstoppable.money"
    },
    {
      "@type": "ListItem",
      "position": 76,
      "name": "Velora",
      "url": "https://www.velora.xyz"
    },
    {
      "@type": "ListItem",
      "position": 77,
      "name": "Vultisig",
      "url": "https://vultisig.com"
    },
    {
      "@type": "ListItem",
      "position": 78,
      "name": "Xverse",
      "url": "https://www.xverse.app"
    },
    {
      "@type": "ListItem",
      "position": 79,
      "name": "XY Finance",
      "url": "https://xy.finance"
    },
    {
      "@type": "ListItem",
      "position": 80,
      "name": "Zengo",
      "url": "https://zengo.com"
    },
    {
      "@type": "ListItem",
      "position": 81,
      "name": "Zerion",
      "url": "https://zerion.io"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "Cross-Chain Swaps 2026: cross-chain swap apps compared",
  "alternateName": "Cross-Chain Swap Apps Dataset",
  "description": "Open dataset of 81 active cross-chain swap apps (wallets, aggregators, THORChain/Maya/Chainflip front-ends, instant exchanges and exchange comparison sites), with 32 underlying protocols listed separately. Each app is classified by custody during the swap, user KYC, the app's own fee, routing, native Bitcoin and Solana support. Only 24 of 81 (30%) state a fixed fee verifiable on a current official page; 15 claim no fee of their own. Every user-facing app that swaps an asset on one chain for an asset on another: aggregators, independent front-ends, wallets with built-in cross-chain swaps and instant exchanges. The protocols those apps route through (THORChain, Chainflip, NEAR Intents, Relay, Across and others) are listed separately under `protocols` for reference and are not part of the comparison, since most apps sit on top of them; a protocol's own first-party front-end counts as the protocol. Classified by category, custody model during the swap, user KYC, the app's own fee, routing, native Bitcoin and Solana support and chain coverage. Liveness checked by HTTP and, behind bot protection, in a real browser. Fees and coverage come only from official pages and docs (verified=true, with source_url); null means not yet checked.",
  "url": "https://shieldz.cash/blog/81-cross-chain-swap-apps-compared",
  "sameAs": "https://github.com/ShieldZCash/cross-chain-swap-dataset",
  "identifier": "https://github.com/ShieldZCash/cross-chain-swap-dataset/releases/tag/v1.0.1",
  "version": "1.0.1",
  "datePublished": "2026-10-10",
  "dateModified": "2026-10-10",
  "temporalCoverage": "2026-10-10/2026-10-10",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "isAccessibleForFree": true,
  "inLanguage": "en",
  "creator": [
    {
      "@type": "Organization",
      "name": "Shieldz",
      "url": "https://shieldz.cash"
    },
    {
      "@type": "Person",
      "name": "Deniz Yanbollu",
      "url": "https://shieldz.cash/blog/"
    }
  ],
  "publisher": {
    "@type": "Organization",
    "name": "Shieldz",
    "url": "https://shieldz.cash"
  },
  "keywords": [
    "cross-chain swap",
    "crypto swap",
    "DEX aggregator",
    "bridge",
    "crypto wallet",
    "instant exchange",
    "custody",
    "KYC",
    "swap fees",
    "open data"
  ],
  "measurementTechnique": "Manual review of each app's official pricing pages, help center, docs and terms; liveness checked by HTTP and in a real browser",
  "variableMeasured": [
    {
      "@type": "PropertyValue",
      "name": "name",
      "description": "App or protocol name"
    },
    {
      "@type": "PropertyValue",
      "name": "url",
      "description": "Official website"
    },
    {
      "@type": "PropertyValue",
      "name": "category",
      "description": "aggregator = routes each swap across several protocols | frontend = independent interface on THORChain/Maya/Chainflip | wallet = cross-chain swap built into a wallet | instant-exchange = custodial no-account exchange | exchange-aggregator = compares instant exchanges. Protocols use native-dex | intent-network | bridge"
    },
    {
      "@type": "PropertyValue",
      "name": "custody",
      "description": "non-custodial = funds stay in contracts, vaults or the user's wallet throughout | custodial = an operator's wallet receives the funds first | hybrid = depends on the route chosen"
    },
    {
      "@type": "PropertyValue",
      "name": "kyc",
      "description": "none | risk-based = no account, but flagged transactions can be held for KYC | required"
    },
    {
      "@type": "PropertyValue",
      "name": "fee_pct",
      "description": "The fixed percentage the app itself adds on a standard cross-chain swap (fee_type=stated); null when the cost is route-only or unpublished. Protocol fees, liquidity costs and gas come on top in every case and are described in fee_note"
    },
    {
      "@type": "PropertyValue",
      "name": "fee_note",
      "description": "Fee detail as published"
    },
    {
      "@type": "PropertyValue",
      "name": "routes_via",
      "description": "What the swap is executed through"
    },
    {
      "@type": "PropertyValue",
      "name": "native_btc",
      "description": "Swaps native Bitcoin (not a wrapped token) in or out; null = not yet verified"
    },
    {
      "@type": "PropertyValue",
      "name": "solana",
      "description": "Supports Solana; null = not yet verified"
    },
    {
      "@type": "PropertyValue",
      "name": "chains",
      "description": "Approximate number of chains supported; null = not yet verified"
    },
    {
      "@type": "PropertyValue",
      "name": "founded",
      "description": "Year the product launched"
    },
    {
      "@type": "PropertyValue",
      "name": "status",
      "description": "active | inactive | unchecked, as of `checked`"
    },
    {
      "@type": "PropertyValue",
      "name": "status_note",
      "description": "Why a row is inactive or unchecked, or what changed"
    },
    {
      "@type": "PropertyValue",
      "name": "notable",
      "description": "Short editorial note"
    },
    {
      "@type": "PropertyValue",
      "name": "verified",
      "description": "true = a stated fee confirmed on a current (within ~18 months), non-contradictory official page"
    },
    {
      "@type": "PropertyValue",
      "name": "source_url",
      "description": "Page the verified figures were read from"
    },
    {
      "@type": "PropertyValue",
      "name": "checked",
      "description": "Date of the last liveness and verification pass"
    },
    {
      "@type": "PropertyValue",
      "name": "fee_type",
      "description": "stated = the app adds a fixed percentage | route-only = the app claims no fee of its own, so the whole cost is set by the route or partner exchange (which can include a commission paid back to the app) and is not certain until quoted | unpublished = no rate found"
    }
  ],
  "distribution": [
    {
      "@type": "DataDownload",
      "encodingFormat": "application/json",
      "name": "Apps and protocols (JSON)",
      "contentUrl": "https://shieldz.cash/blog/data/cross-chain-swaps-2026.json"
    },
    {
      "@type": "DataDownload",
      "encodingFormat": "text/csv",
      "name": "Apps (CSV)",
      "contentUrl": "https://shieldz.cash/blog/data/cross-chain-swaps-2026.csv"
    },
    {
      "@type": "DataDownload",
      "encodingFormat": "text/csv",
      "name": "Protocols (CSV)",
      "contentUrl": "https://raw.githubusercontent.com/ShieldZCash/cross-chain-swap-dataset/main/data/cross-chain-protocols.csv"
    }
  ],
  "isBasedOn": [
    "https://github.com/asgardex/asgardex-desktop",
    "https://help.coinbase.com/en/wallet/getting-started/dex-swap",
    "https://support.bitbox.swiss/en_US/swap/swapkit-crypto-swap-bitboxapp",
    "https://support.bitcoin.com/en/articles/9172611-how-to-swap-across-chains-on-verse-dex",
    "https://changehero.io/blog/crypto-exchange-with-lowest-fees/",
    "https://changelly.com/faq/changelly/fees/",
    "https://docs.coin98.com/products/coin98-super-wallet/mobile/swapx/faqs/faqs",
    "https://ff.io/en/faq",
    "https://guarda.com/support/getting-started/what-fees-am-i-paying-for/",
    "https://docs.li.fi/faqs/fees-monetization",
    "https://docs.kyberswap.com/kyberswap-solutions/fee-schedule",
    "https://leodex.io",
    "https://help.magiceden.io/en/articles/9673665-how-to-swap-tokens-in-the-magic-eden-app",
    "https://help.matcha.xyz/articles/1222339831-are-there-any-fees-to-make-a-trade",
    "https://support.metamask.io/manage-crypto/move-crypto/bridge/how-are-bridge-fees-calculated/",
    "https://help.phantom.com/hc/en-us/articles/27085326202515-Swap-settings-in-Phantom",
    "https://quickex.io/exchange-btc-runerune",
    "https://www.rocketx.exchange/",
    "https://swap.shieldz.cash/terms",
    "https://www.sushi.com/cross-chain-swap",
    "https://docs.thorswap.finance/thorswap/thorswap/fees",
    "https://www.thorwallet.org/titn",
    "https://vultisig.com/vult",
    "https://help.zerion.io/en/articles/4813752-understanding-fees-on-zerion"
  ],
  "citation": "Shieldz (2026). Cross-Chain Swap Apps Dataset. https://github.com/ShieldZCash/cross-chain-swap-dataset"
}
</script>
<!-- /jsonld -->
