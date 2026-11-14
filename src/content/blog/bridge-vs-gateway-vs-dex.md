---
title: "Bridge vs Gateway vs DEX: What Each One Is, and the Types of Each (2026)"
description: "A DEX swaps tokens on one chain, a bridge moves an asset to another chain, a payment gateway moves a payment to a merchant. The types of each, how they work, what they cost and where they fail."
pubDate: 2026-11-14
tags: ["bridge vs gateway vs dex", "crypto bridge types", "dex types", "crypto payment gateway", "cross-chain crypto swap", "intent-based bridge", "non-custodial"]
eyebrow: "Explainer"
swapBanner: true
---

**A DEX changes the token, a bridge changes the chain, and a payment gateway changes the owner.** A decentralized exchange swaps one token for another on the same blockchain. A bridge moves the same asset from one blockchain to another. A crypto payment gateway takes a payment from a buyer, confirms it, and tells the merchant it was paid. The three get mixed up because one app can do several of these at once, and because the word "gateway" is used for almost anything.

This post explains each one, the main types of each, and how to tell which one you are actually using. A note on who is writing: we build [Shieldz Swap](https://swap.shieldz.cash), a router over bridges and cross-chain DEXs, and the Shieldz payment gateway. Both appear below, next to the alternatives.

<figure style="margin:28px 0">
  <a href="/blog/charts/bridge-gateway-dex-flows.svg"><img src="/blog/charts/bridge-gateway-dex-flows.svg" alt="What each one moves. A DEX swaps USDC on Base for ETH on Base through a pool or order book in one transaction. A bridge moves USDC on Ethereum to USDC on Solana by locking, burning or fronting it. A payment gateway takes a buyer's payment, watches the chain for the right amount, and gives the merchant the funds plus a paid notification." width="760" height="470" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The same three questions decide everything else: what changes, who holds the money in between, and what can break.</figcaption>
</figure>

## Bridge vs gateway vs DEX at a glance

| | DEX | Bridge | Payment gateway |
|---|---|---|---|
| **What changes** | The token | The chain | Who owns the funds |
| **Example** | USDC on Base to ETH on Base | USDC on Ethereum to USDC on Solana | A buyer pays a shop 50 USDT |
| **Chains involved** | One | Two or more | Usually one per payment |
| **Who holds funds in between** | A smart contract, for one transaction | Depends on the type: a contract, a verifier set, or a solver | The gateway (custodial) or nobody (non-custodial) |
| **Typical time** | One block: under a second to about 12 seconds | Seconds (intent-based) to 20+ minutes (finality-based) | As long as the chain takes to confirm |
| **Main cost** | Pool fee, price impact, gas | Bridge fee, gas on both sides | Gateway fee, often 0% to 1% |
| **Main risk** | Contract bugs, sandwich attacks | The bridge's verifiers or its locked pot | A custodial balance frozen or lost |
| **Who uses it** | Traders, wallets, other apps | Anyone moving assets between chains | Merchants, creators, apps that sell things |

The rest of the post goes through each column.

## What is a DEX?

A **decentralized exchange (DEX)** is a set of smart contracts that lets you trade one token for another without handing your funds to an exchange. You send the tokens you are selling and receive the tokens you are buying in the same transaction. If the trade cannot complete at the price you accepted, the whole transaction reverts and nothing moves.

The key limit: a classic DEX lives on **one chain**. Uniswap on Base trades Base tokens. It cannot give you bitcoin on the Bitcoin network, because it has no way to send a Bitcoin transaction.

### Types of DEX

**1. Automated market makers (AMMs).** Liquidity providers deposit pairs of tokens into a pool, and a formula sets the price from the ratio between them. There are three common designs:

- **Constant product** (Uniswap v2 style, `x × y = k`): simple and works for any pair, but the price moves a lot on large trades in thin pools.
- **Concentrated liquidity** (Uniswap v3 and v4): providers put their liquidity in a price range they choose. Pools get deeper near the current price, and providers have to manage those ranges.
- **Stableswap** (Curve): a curve tuned for assets that should trade near 1:1, like USDC and USDT, so large stablecoin trades barely move the price.

**2. On-chain order books.** Buyers and sellers post limit orders, and a matching engine fills them, the way a centralized exchange works. On most general-purpose chains this is slow and expensive, so order-book DEXs usually run on fast chains or their own chain. Hyperliquid and dYdX are the best-known examples, mostly for perpetual futures.

**3. RFQ and intent-based DEXs.** You sign an order that says "I want at least this much of token B for my token A", and professional market makers or solvers compete to fill it. CoW Swap, UniswapX and 1inch Fusion work like this. The filler pays the gas and takes the price risk, and because there is no public pending swap to sandwich, you are protected from most MEV.

**4. DEX aggregators.** These are not exchanges themselves. They split your trade across many DEXs and pools to get a better price than any single one. 1inch, 0x and Jupiter on Solana are aggregators.

**5. Cross-chain (native asset) DEXs.** THORChain, MAYAChain and Chainflip run their own network of validators that jointly control vaults on several chains through threshold signatures. You deposit native BTC on Bitcoin, the network swaps it through its own pools, and its vault on Ethereum pays out native ETH. Nothing is wrapped. These are DEXs that also do the bridge's job, which is why they matter so much for bitcoin: we covered how they compare in [our BTC to ETH and Solana guide](/blog/swap-bitcoin-to-ethereum-solana).

## What is a bridge?

A **bridge** moves value from one blockchain to another. Blockchains cannot read each other's state, so a bridge has to answer one question: *how does chain B know that something really happened on chain A?* The answer to that question is what separates the types, and it is also where bridges get hacked.

### Types of bridge, by how they move the asset

**1. Lock-and-mint (wrapped tokens).** You lock the asset in a contract on chain A, and the bridge mints a wrapped IOU on chain B. To go back, you burn the IOU and the original is unlocked. Wormhole's Portal token bridge and the Ronin bridge work this way. WBTC is the same idea run by a custodian instead of a contract, which is why individuals [cannot unwrap it themselves](/blog/wbtc-to-btc).

The weakness is the locked pot. Every wrapped token in circulation is backed by one pile of originals, so whoever can fake a "release" message can empty it. That is what happened in the three biggest bridge hacks: Ronin (about $625 million, March 2022), Wormhole (about $325 million, February 2022) and Nomad (about $190 million, August 2022).

**2. Burn-and-mint (issuer-native).** When the token issuer controls minting on every chain, there is nothing to wrap. Circle's CCTP burns USDC on chain A and Circle mints real USDC on chain B. USDT0, built on LayerZero's OFT standard, does the same for Tether. You get the native token on the far side, but it only works for that issuer's tokens, and it can take as long as the source chain's finality.

**3. Liquidity networks and intent-based bridges.** You do not move your tokens to chain B at all. A solver or relayer who already holds funds on chain B pays you out of their own inventory, often within seconds, and is repaid later from your deposit on chain A. Across, Relay, deBridge and NEAR Intents work this way. You only wait for the solver, not for the chains to settle with each other, which is why these are now the fastest way to move stablecoins. In [our Ethereum to Tron quotes](/blog/move-usdt-ethereum-to-tron), Relay paid out within seconds of seeing the deposit.

**4. Atomic swaps (HTLCs).** Two parties lock funds on two chains under the same hashed secret. Revealing the secret to claim one side automatically reveals it for the other, so either both transfers happen or both refund after a timeout. Garden uses this for native bitcoin. It needs no wrapped token and no verifier set, but someone has to be on the other side of each swap.

### Types of bridge, by who verifies

The second way to classify bridges is by who confirms that the deposit on chain A happened:

- **Externally verified:** a multisig, an MPC committee or a validator set signs off. This is fast and cheap, and it is only as safe as those keys. The Ronin attackers got control of 5 of its 9 validator keys.
- **Optimistic:** messages are assumed valid unless someone proves fraud within a challenge window. Across settles this way through UMA's optimistic oracle.
- **Light client or ZK:** chain B verifies chain A's consensus directly, or verifies a zero-knowledge proof of it. IBC between Cosmos chains works this way. This is the strongest model, and the hardest to build between very different chains.

Intent-based bridges change who carries this risk. You get paid on chain B before the slow verification happens, so if it fails, the solver eats the loss, not you. Your exposure is the few seconds or minutes between your deposit and your payout.

## What is a payment gateway?

A **crypto payment gateway** is the layer between a buyer's wallet and a merchant's books. It creates an invoice, shows a checkout (an address, an amount, a QR code), watches the blockchain for the right payment on the right chain, and tells the merchant's site "order 1043 is paid" through a webhook. It does not create a new token or connect two chains. What it does is turn a raw transfer into a payment the merchant's software can act on. Our [plain-English guide to payment gateways](/blog/what-is-a-crypto-payment-gateway) goes deeper.

### Types of payment gateway

**1. Custodial.** The buyer pays the gateway's wallet. The gateway credits the merchant's balance and pays it out later, often converted to fiat. BitPay, CoinGate and NOWPayments work like this. You get bank settlement and a familiar support model. The trade-off is that the balance sits with someone else and can be frozen, delayed or lost.

**2. Non-custodial.** The buyer pays an address the merchant controls, and the gateway only watches and notifies. There is no balance to freeze and nothing for the provider to lose. Blockonomics, BlockBee and Shieldz work this way.

**3. Self-hosted.** You run the gateway software yourself, on your own server. BTCPay Server is the best-known one. It is non-custodial by construction, but you run the server and support it yourself.

Across the [87 gateways we track](/blog/custodial-vs-non-custodial-crypto-payment-gateways), 57 are custodial and 21 non-custodial, and the split decides most other things: 82% of the custodial ones require KYC, against 10% of the non-custodial ones.

### Other things called "gateway"

"Gateway" is a generic word, so check what is behind it:

- **Fiat on-ramp gateways** sell crypto for a card or bank payment. They are a broker, not a payment processor for merchants.
- **RPC or API gateways** give apps access to blockchain nodes. They do not move anyone's money.
- **Product names.** BOB Gateway, for example, is a bridge: it moves bitcoin into BOB and other chains through liquidity providers. The name tells you nothing about the type.

## Where cross-chain swaps and routers fit

Most real requests mix two of the three. "Turn my BTC into USDC on Base" changes the chain *and* the token. You can do it in steps (bridge, then DEX), or in one step through a service that does both, like a cross-chain DEX or a solver network.

There are usually several services that can fill the same request, and their prices differ by more than their headline fees suggest. A **router** or **aggregator** asks them all and picks one. LI.FI (Jumper) and Rango do this across bridges and DEXs. [Shieldz Swap](https://swap.shieldz.cash) asks NEAR Intents, Chainflip, Relay, MAYAChain, BOB Gateway and Garden at the same moment, shows every route that answered, and picks on the amount you actually receive after all fees. It charges a flat 0.15% and never holds your funds: you send from your own wallet straight into the route that won.

A router does not remove the risk of the route underneath it. If you use one, you are still trusting the bridge or DEX it picked, so it helps when the app tells you which one that was. Shieldz shows it on every quote.

Payment gateways can sit on top of the same routes. A Shieldz checkout lets a buyer pay with almost any coin on any supported chain while the merchant receives the one coin they asked for, because the buyer's payment goes through a cross-chain swap on its way. That is a gateway, a bridge and a DEX in one payment. There is more on how that works in [cross-chain crypto payments](/blog/cross-chain-crypto-payments).

### Instant exchanges are none of these

Services like ChangeNOW, SimpleSwap or FixedFloat look like a bridge or DEX: you send coin A and receive coin B. But you send your coins to the service's own wallet, and it pays you from its own funds. It is a custodial broker. That can be convenient, but it is a different trust model from a DEX or a solver network, and these services can hold a deposit for a compliance check. [Our comparison of 81 swap apps](/blog/81-cross-chain-swap-apps-compared) sorts them by custody.

## How to tell which one you are using

1. **Look at what changes.** Same chain, different token: a DEX. Same token, different chain: a bridge. Money goes to someone else and a receipt comes back: a gateway.
2. **Look at where your funds go.** To a contract that settles in the same transaction (DEX). To a contract, a vault or a solver that pays you on another chain (bridge). To the merchant's own address (non-custodial gateway) or to the provider's wallet (custodial gateway or instant exchange).
3. **Ask what happens if the operator disappears mid-transfer.** On a DEX, the transaction either completed or reverted. On an intent-based bridge, you were probably already paid. On a lock-and-mint bridge, your wrapped tokens are only as good as the locked pot. With a custodial gateway, any balance you had not withdrawn is a claim against a company.

## FAQ

**What is the difference between a bridge and a DEX?**
A DEX swaps one token for another on the same blockchain. A bridge moves the same asset from one blockchain to another. Cross-chain DEXs like THORChain, MAYAChain and Chainflip do both: they take a native asset on one chain and pay out a different native asset on another.

**Is a crypto payment gateway the same as a bridge?**
No. A payment gateway confirms that a buyer paid a merchant and notifies the merchant's system. It does not move assets between chains. Some gateways use bridges or cross-chain swaps behind the scenes so a buyer can pay in a coin or chain the merchant does not accept directly.

**What are the main types of crypto bridge?**
By mechanism: lock-and-mint (wrapped tokens), burn-and-mint (issuer-native, like Circle's CCTP), liquidity networks and intent-based bridges (solvers pay out from their own funds), and atomic swaps (HTLCs). By verification: externally verified (multisig or MPC), optimistic, and light-client or ZK.

**What are the main types of DEX?**
Automated market makers (constant product, concentrated liquidity and stableswap), on-chain order books, RFQ and intent-based DEXs, DEX aggregators, and cross-chain native-asset DEXs.

**Which is safest: a bridge, a DEX or a gateway?**
It depends on the type more than the category. A same-chain DEX trade either completes or reverts in one transaction, so your exposure is short. Lock-and-mint bridges have the worst track record, because their locked funds are a single large target. Intent-based bridges keep your exposure to the time between deposit and payout. For payment gateways, non-custodial ones never hold the merchant's money, so there is nothing for them to freeze or lose.

**Do I need a bridge to swap BTC to ETH?**
Not a separate one. A cross-chain DEX or a solver network can take native BTC and pay out native ETH in one swap, with no wrapped token. [Shieldz Swap](https://swap.shieldz.cash) compares the routes that can do it and shows what each one delivers.
