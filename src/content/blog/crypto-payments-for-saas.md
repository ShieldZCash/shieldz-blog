---
title: "Crypto payments for SaaS: bill in USDC, keep the keys"
description: "Accept crypto payments for SaaS subscriptions and invoices. Non-custodial checkout, $0 platform fee, webhooks to your billing stack."
pubDate: 2026-09-08
author: "Deniz Yanbollu"
tags: ["saas","crypto","payments","api","subscriptions"]
eyebrow: "Guide"
lang: "en"
---

SaaS teams asking how to take **crypto payments for SaaS** usually get a custodial processor: a balance they do not control, a percentage on every invoice, and a freeze risk if the account looks "wrong". You can skip that path. Shieldz is a non-custodial checkout: the customer pays on-chain, funds settle to the wallet you configured, and your app learns about it from a signed webhook. [$0 platform fee](/pricing), [no KYC to start](/no-kyc).

This sits next to the [crypto payment API quickstart](/blog/crypto-payment-api) and [how to accept crypto payments](/blog/how-to-accept-crypto-payments). Use those for the HTTP details. Use this post for the SaaS-specific loop: plan amount, invoice, hosted checkout, webhook, entitlement.

## Why SaaS billing and custodial gateways fight each other

Card rails price a $29/month plan as a percentage plus a fixed fee. On a year of that plan, 2.9% + 30¢ per charge is material. A custodial crypto gateway often adds its own cut and a withdrawal delay. Chargebacks do not exist on a confirmed on-chain payment, which is useful for digital access, but only if the processor cannot freeze the balance after the customer paid.

A non-custodial model removes the middle balance. You store a public receive key (an address, an xpub, or a Zcash viewing key). Shieldz derives a fresh pay target per invoice and watches the chain. It cannot spend. Verify that claim on [/verify](/verify) if you need the cryptographic version.

<figure style="margin:28px 0">
  <a href="/blog/charts/saas-fee-drag.svg"><img src="/blog/charts/saas-fee-drag.svg" alt="Illustrative annual fee drag on a $29 SaaS plan: card percentage versus $0 Shieldz platform fee plus network gas" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">12 monthly charges of $29. PayPal 3.49% + $0.49, Stripe 2.9% + $0.30, Coinbase Commerce 1% (public list rates). Shieldz platform fee is $0; the buyer pays only network gas.</figcaption>
</figure>

## What the SaaS loop looks like

1. Your billing job decides the amount in USD cents (plan price, seat add-on, or one-off invoice).
2. You `POST /api/v1/invoices` with `amount_usd_cents`, a memo, an `idempotency_key`, and metadata that points at the customer and the period.
3. You send the customer to `pay_url` (hosted checkout with QR and wallet deep-link).
4. On confirm, Shieldz POSTs `invoice.paid` to your webhook. You verify `X-Shieldz-Signature` and grant the period.
5. Settlement lands in the token and chain you configured. If the buyer pays a different supported coin, swap-settle routes through NEAR, Chainflip, or Relay via the LeoKit aggregator. Shieldz takes no affiliate cut on that swap.

Amount bounds on the API today: $1.00 to $100,000.00 per invoice (`amount_usd_cents` 100 to 10,000,000). Default expiry is 30 minutes (45 minutes when ZEC is in play).

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="Shieldz hosted checkout showing coin picker, QR code, and pay amount" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Hosted checkout is the buyer UI. Your SaaS never handles a private key or an on-chain transfer.</figcaption>
</figure>

## Step-by-step: wire it to your billing stack

### 1. Create a merchant and a receive target

Sign in at the [dashboard](https://merchant.shieldz.cash/signup). Add the public key or address for the chain you want to settle on. Prefer USDC or USDT if you want invoice amounts to match books. See [accept stablecoin payments](/blog/accept-stablecoin-payments).

### 2. Mint an API key

Dashboard → Developers. `sk_live_…` moves real funds. `sk_test_…` is for staging. The raw key is shown once.

### 3. Create the invoice from your backend

```bash
curl https://shieldz.cash/api/v1/invoices \
  -H "Authorization: Bearer sk_live_…" \
  -H "Content-Type: application/json" \
  -d '{
    "amount_usd_cents": 2900,
    "memo": "Pro plan, Sep 2026",
    "idempotency_key": "sub_cus_123_2026_09",
    "metadata": { "customer_id": "cus_123", "period": "2026-09" }
  }'
```

Redirect or email `pay_url`. Reuse the same `idempotency_key` if the job retries.

### 4. Verify the webhook before you extend the plan

Header: `X-Shieldz-Signature: t=<unix>,v1=<hex>`. HMAC-SHA256 over `` `${t}.${rawBody}` `` with your `whsec_` secret. Use the raw body, not a re-serialized JSON object. Deliveries are at-least-once. Key fulfilment on `invoice.id` plus your period metadata so a retry does not double-credit. Full snippet is in the [API post](/blog/crypto-payment-api).

### 5. Recurring plans without storing cards

On-chain checkout is pull-less. For monthly SaaS you generate a new invoice each period and send the link (email, in-app banner, or [payment link](/tools/payment-link)). When the webhook fires, extend the entitlement. If it expires unpaid, keep the account in a grace state the same way you would for a failed card.

Agents and keyless flows are a separate cluster: [crypto payments for AI agents](/blog/crypto-payments-for-ai-agents) and the [MCP path](/blog/agents-keyless-mcp-payments).

## What not to promise in your pricing page

- Shieldz does not hold a merchant balance and cannot pay you out in fiat. If you need fiat settlement, that is a different product class. See [crypto payment gateways and fiat settlement](/blog/crypto-payment-gateways-fiat-settlement).
- Gas is paid by the buyer (and by the swap route when they pay a non-settlement asset). Do not market "free on-chain transfers".
- NEAR and SOL are not live source chains for swap-settle right now. Do not list them as pay-in options.

## FAQ

**Can I take crypto for monthly SaaS plans?**
Yes. Create one invoice per period, send `pay_url`, grant access on a verified `invoice.paid` webhook. There is no on-chain mandate you can charge later without the customer sending again.

**Do I need KYC to start?**
No. Signup is wallet, Google, or Telegram. Read [do crypto payment gateways require KYC](/blog/do-crypto-payment-gateways-require-kyc) and [accept crypto payments without KYC](/blog/accept-crypto-payments-without-kyc).

**Where does the money go?**
To the address or derived child address from the public key you registered. Shieldz never holds keys. Details in [non-custodial crypto payment gateway](/blog/non-custodial-crypto-payment-gateway).

**What if the customer pays a different coin than I settle in?**
Swap-settle quotes through NEAR, Chainflip, or Relay (LeoKit). You still receive the settlement asset you configured, with no Shieldz take rate on the swap.

## Start

[Create a merchant](https://merchant.shieldz.cash/signup), then either paste invoices from the dashboard or follow the [API reference](/docs). WordPress stores should use the [WooCommerce plugin](/blog/accept-crypto-payments-woocommerce) instead of a custom billing job.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I take crypto for monthly SaaS plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Create one invoice per period, send the hosted checkout URL, and grant access when you verify an invoice.paid webhook. There is no on-chain mandate that charges the customer later."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need KYC to start accepting crypto for SaaS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Shieldz signup is wallet, Google, or Telegram. There is no KYC gate to start."
      }
    },
    {
      "@type": "Question",
      "name": "Where do SaaS crypto payments settle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Funds settle to the merchant wallet derived from the public key or address you registered. Shieldz is non-custodial and does not hold a balance."
      }
    },
    {
      "@type": "Question",
      "name": "What if a customer pays a different coin than the SaaS settlement asset?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Swap-settle routes through NEAR, Chainflip, or Relay via LeoKit. You receive the configured settlement asset. Shieldz takes no affiliate fee on the swap."
      }
    }
  ]
}
</script>

