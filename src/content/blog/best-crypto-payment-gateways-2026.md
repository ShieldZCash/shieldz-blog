---
title: "Best crypto payment gateways in 2026 (non-custodial vs custodial)"
description: "A 2026 comparison of crypto payment gateways (Shieldz, Coinbase Commerce, BitPay, NOWPayments, BTCPay, CryptAPI), ranked by custody, fees and KYC."
pubDate: 2026-07-01
author: "Deniz Yanbollu"
tags: ["guide", "payment-gateway", "crypto", "comparison"]
---

If you searched "best crypto payment gateways 2026," you have already seen ten listicles that rank whoever pays them the most. This one ranks on the only axis that actually changes your risk: **who holds your money.** Everything else, fees, payout delays, account freezes, follows from that single decision. (Specifically after free options? See [the 10 best free crypto payment gateways](/blog/best-free-crypto-payment-gateways-2026). Want the whole market instead of a shortlist? We compared [all 50 crypto payment gateways](/blog/50-crypto-payment-gateways-compared) in one dataset, and followed up with the [87-gateway September 2026 update](/blog/87-crypto-payment-gateways-compared).)

## The one question that sorts every gateway

- **Custodial** gateways receive the customer's coins into *their* wallet, hold a balance for you, and pay you out on their schedule. Convenient, and the source of every percentage fee, payout delay, and "your account is under review" email.
- **Non-custodial** gateways never hold your money. You give a public receiving key, the customer pays an address that belongs to you, and the gateway only watches the chain and tells you it landed. No balance to skim, nothing to freeze.

Sort the 2026 field by that first, then look at fees.

## The comparison

| Gateway | Custody | Platform fee | KYC to start | Coins |
| --- | --- | --- | --- | --- |
| **Shieldz** | **Non-custodial** | **$0** (network gas only) | **No** | BTC, shielded Zcash, USDC/USDT on 5 chains |
| BTCPay Server | Non-custodial (self-hosted) | $0 (you host it) | No | BTC, Lightning, some altcoins |
| Coinbase Commerce | Custodial flows | ~1% | Business verification | Major coins |
| BitPay | Custodial | ~1% + settlement | Yes | Major coins |
| NOWPayments | Processor-custody | ~0.5%+ | Varies | 300+ coins |
| CryptAPI | Non-custodial router | ~1% per tx | No | Many |

(Honest note: BTCPay Server is excellent and genuinely non-custodial, but you run the servers, nodes, and uptime yourself. Shieldz is the hosted, $0-fee, non-custodial option for people who do not want to operate infrastructure. Coming from the biggest name on the list? The [Coinbase Commerce alternatives](/blog/coinbase-commerce-alternatives) shortlist goes deeper.)

## How to read it

1. **Custody first.** If a provider holds a balance, you have inherited their fraud risk, their payout schedule, and their right to freeze you. Prefer non-custodial. With [Shieldz](https://shieldz.cash) you can [verify the non-custodial claim yourself](https://shieldz.cash/verify).
2. **Real cost, not headline rate.** "1%" usually hides withdrawal fees and float. A non-custodial model charges $0 and you pay only the blockchain's network gas. See the [full fee breakdown](https://shieldz.cash/crypto-payment-fees).
3. **KYC and privacy.** Decide up front whether you want to route customers through identity checks. Some gateways gate signup behind business documents; Shieldz has [no KYC to start](https://shieldz.cash/no-kyc) and supports shielded Zcash.
4. **Coins your customers actually pay with.** You rarely need 300 long-tail coins. You need stablecoins, Bitcoin, and the chains your buyers use, with single-token settlement so you are not left holding volatility.

## The honest pick for 2026

If you want zero infrastructure, $0 platform fees, and to never hand custody to anyone: **Shieldz**. If you are happy running your own server: **BTCPay Server**. Everything else asks you to trade custody (and a percentage) for convenience.

Read the practical version: [how to accept crypto payments](https://shieldz.cash/blog/how-to-accept-crypto-payments), or [start free](https://merchant.shieldz.cash/signup).
