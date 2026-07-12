---
title: "Crypto payment API: a 10-minute quickstart"
description: "Accept crypto with a REST payment API: create an invoice, redirect to a hosted checkout, verify a signed webhook. Non-custodial, $0 fees, code included."
pubDate: 2026-06-29
author: "Deniz Yanbollu"
tags: ["api", "developers", "webhooks", "crypto"]
---

If you want to accept crypto from your own backend, you want a **crypto payment API** that is small, predictable, and does not take custody of your money. This is a 10-minute quickstart for the Shieldz API: create an invoice, send your customer to the hosted checkout, and verify the webhook that tells you it was paid. JSON in, JSON out, [$0 platform fees](/pricing).

The full reference lives in the [docs](/docs); this is the shortest path to a working integration.

## 1. Get a key

Create a secret key in your dashboard under Developers. Keys are `sk_live_…` (real funds) or `sk_test_…` (test mode). The key is shown once, so store it safely.

```
Authorization: Bearer sk_live_xxxxxxxxxxxxxxxxxxxx
```

## 2. Create an invoice

One required field, `amount_usd_cents`. Everything else is optional.

```bash
curl https://shieldz.cash/api/v1/invoices \
  -H "Authorization: Bearer sk_live_…" \
  -H "Content-Type: application/json" \
  -d '{
    "amount_usd_cents": 5000,
    "memo": "Order #1234",
    "idempotency_key": "ord_1234",
    "metadata": { "order_id": "1234" }
  }'
```

The response is an invoice object with a `pay_url`. Send your customer there, it is the hosted checkout with a QR code and a pay link. The customer can pay BTC, ETH, USDC, USDT, Zcash and more; you settle to the one token you chose, and the funds go straight to your wallet. Shieldz never holds them.

## 3. Verify the webhook

When the payment confirms on-chain, Shieldz sends a signed `invoice.paid` webhook. **Always verify the signature** before you act on it. The header is `X-Shieldz-Signature: t=<unix>,v1=<hex>`, where the hex is `HMAC_SHA256(secret, "<t>.<rawBody>")`.

```js
import crypto from "node:crypto";

function verify(rawBody, header, secret) {
  const parts = Object.fromEntries(header.split(",").map((p) => p.split("=")));
  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${parts.t}.${rawBody}`)
    .digest("hex");
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(parts.v1));
}

// Express handler (use the RAW body, not the parsed one)
app.post("/webhooks/shieldz", express.raw({ type: "*/*" }), (req, res) => {
  const ok = verify(req.body.toString(), req.headers["x-shieldz-signature"], process.env.SHIELDZ_WEBHOOK_SECRET);
  if (!ok) return res.sendStatus(401);
  const event = JSON.parse(req.body.toString());
  if (event.type === "invoice.paid") {
    // fulfil the order — webhooks are idempotent and delivered at least once
  }
  res.sendStatus(200);
});
```

That is the whole integration: create, redirect, verify. Test the entire flow with a `sk_test_` key and the dashboard's simulate-payment tool before you touch real funds.

## Why a non-custodial API matters for developers

A custodial API quietly makes you responsible for someone else holding your customers' money. A non-custodial one does not: you only ever pass a public receiving key, payments land in your wallet, and there is no balance for anyone to freeze. If you are weighing the two paths, the [pay-any-coin trust tradeoff](/blog/pay-any-coin-trust-tradeoff) post covers exactly what happens to custody when a buyer pays a different coin than you settle in.

## SDKs

If you would rather not hand-roll HTTP, there are official SDKs for [Node, Python, Rust and PHP](/sdks), plus an [MCP server](/agents) so AI agents can create payment links with no API key at all.

Prefer no client at all? You can [accept crypto payments with one URL](/blog/accept-crypto-payments-one-url): a single keyless GET mints a link or tip jar, no key or SDK.

Ready? [Read the full API reference](/docs) or [start free](https://merchant.shieldz.cash/signup). For the non-technical version, see [how to accept crypto payments](/blog/how-to-accept-crypto-payments).
