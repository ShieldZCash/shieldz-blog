---
title: "Keyless Crypto Payments: The Complete How-To (2026)"
description: "What keyless crypto payments are and how to accept them: no API key, no account, no private key. Non-custodial, straight to your wallet, $0 platform fee."
pubDate: 2026-08-01
author: "Deniz Yanbollu"
tags: ["keyless", "accept crypto", "non-custodial", "crypto payment gateway", "how-to"]
eyebrow: "How-to"
image: "https://shieldz.cash/blog/og/keyless-crypto-payments.png"
---

Most crypto payment tools ask you for three things before you can take a single dollar: an account, an API key, and, if they are custodial, effectively your money. Keyless crypto payments remove all three. You provide one thing, a public wallet address, and you can accept payment immediately, with the funds settling straight to a wallet only you control.

This is a complete how-to on keyless crypto payments: what "keyless" actually means, why it matters, exactly how it works, and every way to accept payment keyless, whether you write no code, run a full backend, build an AI agent, or use a store plugin. Everything below is how [Shieldz](https://shieldz.cash) works today, non-custodial, with a $0 platform fee.

## What "keyless" actually means

The word "keyless" is doing a lot of work, because there are three different "keys" a normal payment stack forces on you, and keyless removes each one.

1. **No API key.** Traditional gateways make you register, generate a secret API key, store it server-side, and rotate it. That is a credential to manage and a credential to leak. Keyless means the basic flow needs no secret at all: a plain URL with your wallet address returns a working checkout.
2. **No account.** No signup, no dashboard to create, no email verification, no KYC. Your wallet address is your identity. There is nothing to onboard because there is no account to hold anything.
3. **No private key handling.** This is the important one. You never give the gateway a spending key, and the gateway never holds your funds. You share only a **public** key, an address, an `xpub`, or a Zcash viewing key, which can watch for incoming payments but can never move them.

Put together, keyless means the smallest possible thing you hand over (a public address) unlocks the largest possible outcome (live, non-custodial payment acceptance). Nothing to sign up for, nothing secret to store, nothing anyone can freeze.

## Why keyless matters

Every "key" a system requires is a point of friction and a point of risk.

- An **API key** is a secret you have to store and protect. Leaked keys are one of the most common ways payment integrations get abused.
- An **account** is a gate. It means onboarding, often KYC, sometimes approval, and always a company that now has a record of you and your revenue.
- A **spending key or custody** is the biggest risk of all. If a processor holds your funds, it can delay, review, or freeze them, and you are trusting it not to lose them.

Keyless collapses all of that. Because the gateway only ever sees a public key and never touches the money, there is no secret to leak, no account to freeze, and no custody to trust. The security model gets simpler precisely because there is less to secure.

<figure style="margin:28px 0">
  <a href="/blog/img/custody-share.svg"><img src="/blog/img/custody-share.svg" alt="Bar chart: custodial gateways hold 100 percent of a payment before it reaches you, so they can freeze it. A keyless, non-custodial setup like Shieldz holds 0 percent, funds settle straight to your wallet." width="760" height="470" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Keyless is non-custodial by construction: the gateway only watches a public key, so 0 percent of the payment ever passes through it.</figcaption>
</figure>

## How keyless works under the hood

The mechanism is simple once you see it. You give Shieldz a public key for where you want to be paid:

- an EVM **address** (`0x…`) for USDC or USDT on chains like Base,
- an **xpub** for a UTXO coin like Bitcoin, so each invoice derives a fresh receive address,
- or a Zcash **viewing key** to watch shielded payments.

Shieldz then watches the relevant chain for a payment to that destination. When the payment confirms, it is already in your wallet, because it was sent there directly on-chain. Shieldz fires a signed webhook so your system knows, but the money never routed through a Shieldz balance. There is no payout step, because there was never anything to pay out. You can [verify this non-custodial path yourself](https://shieldz.cash/verify).

If the buyer pays in a different coin than you want to receive, the conversion happens in the routing layer through independent swap protocols, and you still receive the single coin you chose. The keyless, non-custodial property holds throughout: at no point does Shieldz hold a spendable balance of your money.

## How to accept keyless payments: every path

Here is the "all angles" part. The same keyless model powers four different ways to get paid, so you can pick whichever fits.

### 1. No code: a payment link, tip jar, or paywall

The fastest path. Open the [payment link generator](https://shieldz.cash/tools/payment-link), paste your wallet address and an amount, and share the link. For a reusable "buy me a coffee" page, use the [tip jar generator](https://shieldz.cash/tools/tip-jar). To sell a single file or secret, use the [pay-to-unlock generator](https://shieldz.cash/tools/pay-to-unlock). No account, no key, live in under a minute.

<figure style="margin:28px 0">
  <a href="/blog/img/crypto-payment-checkout.png"><img src="/blog/img/crypto-payment-checkout.png" alt="Shieldz hosted checkout reached from a keyless payment link: an amount due with USD Coin, Ethereum, BNB, Avalanche and Tether options, and a non-custodial, 0 fees footer." width="760" height="633" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The hosted checkout a keyless link produces. The buyer pays any coin, you settle to the one you chose.</figcaption>
</figure>

### 2. Developer: one URL, no secret

You do not need an SDK or a key for the basic flow. A plain `GET` with your wallet address returns a live payment page and an embeddable button:

`GET https://shieldz.cash/api/v1/tip-jars?to=0xYOURWALLET&title=Pay+me&amounts=5,10,20`

Any tool that can make an HTTP request can mint a checkout. When you want signed webhooks and full invoice management, you can add an API key later, but the entry point is keyless. See the [crypto payment API](/blog/crypto-payment-api) guide for the keyed extras.

### 3. AI agents: keyless over MCP

Because there is no key or account to provision, an AI agent can do this too. Shieldz exposes MCP tools so an agent can mint a payment link or tip jar from a wallet address with no human onboarding. That is the basis of [keyless MCP payments for AI agents](/blog/agents-keyless-mcp-payments): the agent posts a wallet, gets back a working checkout.

### 4. Plugins: keyless WooCommerce and more

The [WooCommerce plugin](/blog/accept-crypto-payments-woocommerce) has a keyless mode: paste your settlement wallet address in the gateway settings and you are accepting crypto at checkout, no API key required. The same plugin powers EDD and GiveWP.

<figure style="margin:28px 0">
  <a href="/blog/charts/time-to-first-link.svg"><img src="/blog/charts/time-to-first-link.svg" alt="Illustrative time to a first payment link: BTCPay self-host about 46 minutes, Stripe about 23 minutes, a custodial crypto API about 14 minutes, and Shieldz about 1 second keyless with one URL." width="760" height="413" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Removing the keys removes the setup. Keyless gets you to a live checkout in seconds, not an onboarding call.</figcaption>
</figure>

## The keyless security model, honestly

Keyless changes what you have to secure, it does not remove security. Two honest points:

- **What keyless protects:** there is no API secret to leak, and no custodial balance to freeze or lose. Every payment address is still screened against the OFAC sanctions list, and all payments are on-chain and auditable.
- **What is still on you:** keyless moves the responsibility to your own wallet. Whoever holds the wallet's private key controls the funds, so secure your seed phrase. Also, because anyone can mint a keyless link that pays **to** a given address, the link is public by design, but this is harmless: funds can only ever go to that address, never to whoever created the link. If you later want to manage settings from a dashboard, you claim the keyless account by proving you own the wallet.

## Keyless vs keyed and custodial

A keyed, custodial gateway trades your control for its convenience: it holds the money, so it demands the account and the KYC, and it can freeze the payout. Keyless inverts that. You keep custody, so there is nothing to sign up for and nothing to freeze, and the only cost is the network gas the buyer pays. For a deeper look at the custody question, see [non-custodial crypto payment gateway](/blog/non-custodial-crypto-payment-gateway) and how to [accept crypto without KYC](/blog/accept-crypto-payments-without-kyc).

## FAQ

**What are keyless crypto payments?**
A way to accept crypto with no API key, no account, and no private key handling. You share only a public wallet address, and payments settle straight to it, non-custodially.

**Is keyless the same as non-custodial?**
They go together. Keyless means you hand over only a public key, which is exactly why the gateway can never hold your funds, that is the non-custodial part.

**Do I ever need an API key with Shieldz?**
Only for advanced extras like signed webhooks and full invoice management. The basic flow, minting a checkout from a wallet address, needs no key.

**Can an AI agent use keyless payments?**
Yes. With no account or key to provision, an agent can mint a checkout from a wallet address over MCP or a plain HTTP request.

**What does keyless cost?**
A $0 platform fee. The buyer pays only the network gas for their transaction.

## Start keyless

Keyless crypto payments turn a single wallet address into a live, non-custodial checkout in seconds. Create a [payment link](https://shieldz.cash/tools/payment-link) now, read [how to accept crypto payments](/blog/how-to-accept-crypto-payments) for the full setup, or see the [agent page](https://shieldz.cash/agent) if you build with AI.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to accept keyless crypto payments",
  "step": [
    { "@type": "HowToStep", "name": "Get a wallet address", "text": "Use a public wallet address, xpub, or Zcash viewing key. You never share a private key." },
    { "@type": "HowToStep", "name": "Mint a checkout with no key", "text": "Paste the wallet into the payment link generator, or make a plain GET request. No account or API key is required." },
    { "@type": "HowToStep", "name": "Share it and get paid", "text": "The buyer pays and the funds settle straight to your wallet on-chain. Shieldz only watches, it never holds the money." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What are keyless crypto payments?", "acceptedAnswer": { "@type": "Answer", "text": "A way to accept crypto with no API key, no account, and no private key handling. You share only a public wallet address, and payments settle straight to it, non-custodially." } },
    { "@type": "Question", "name": "Is keyless the same as non-custodial?", "acceptedAnswer": { "@type": "Answer", "text": "They go together. Keyless means you hand over only a public key, which is why the gateway can never hold your funds, that is the non-custodial part." } },
    { "@type": "Question", "name": "Do I ever need an API key with Shieldz?", "acceptedAnswer": { "@type": "Answer", "text": "Only for advanced extras like signed webhooks and full invoice management. The basic flow, minting a checkout from a wallet address, needs no key." } },
    { "@type": "Question", "name": "Can an AI agent use keyless payments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. With no account or key to provision, an agent can mint a checkout from a wallet address over MCP or a plain HTTP request." } },
    { "@type": "Question", "name": "What does keyless crypto payment cost?", "acceptedAnswer": { "@type": "Answer", "text": "A $0 platform fee. The buyer pays only the network gas for their transaction." } }
  ]
}
</script>
