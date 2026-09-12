---
title: "Crypto Payments for Freelancers: Get Paid by Overseas Clients Without Losing 5-8%"
description: "Accept crypto payments as a freelancer. Skip PayPal and wire fees, settle in USDC straight to your wallet, no chargebacks, no frozen balance."
pubDate: 2026-09-12
author: "Deniz Yanbollu"
tags: ["freelancer", "crypto payments", "invoicing", "usdc", "cross-border"]
eyebrow: "Guide"
image: "https://shieldz.cash/blog/og/crypto-payments-for-freelancers.png"
lang: "en"
---

Freelancers who bill clients abroad lose money before they ever see it: a cross-border surcharge, a currency-conversion spread, and a multi-day hold before the balance is actually yours. **Crypto payments for freelancers** solve the specific version of this problem that PayPal, wire transfer, and Payoneer all share: a middleman balance sits between the client's payment and your bank account, and that middleman takes a cut and reserves the right to freeze it. Shieldz removes the middleman balance. The client pays on-chain, the funds land in a wallet only you control, and there is no platform fee for it to happen.

This sits next to the [crypto invoice generator guide](/blog/crypto-invoice-generator) and [how to accept crypto payments](/blog/how-to-accept-crypto-payments). Use those for the mechanics of building an invoice link. Use this post for the freelancer-specific case: getting paid reliably by clients in other countries, milestone by milestone, without giving up a slice to every rail in between.

## Why international freelance payouts are expensive by design

PayPal adds a cross-border surcharge on top of its normal invoicing rate, then a currency-conversion markup on anything that needs converting. On a $1,000 invoice from an overseas client, the processing fee plus FX markup commonly runs $80 to $90, close to a full extra day of billable work handed over for moving money. Payoneer and wire transfers are cheaper but still charge a percentage and, for wires, a flat fee plus a multi-day hold. None of these actually make the payment faster. A wire can take 2 to 5 business days to clear, and a PayPal balance can be reviewed or limited if the pattern looks "unusual", which is a real risk when your income is a handful of large payments from clients your processor has never seen before.

<figure style="margin:28px 0">
  <a href="/blog/charts/freelancer-payment-cost.svg"><img src="/blog/charts/freelancer-payment-cost.svg" alt="Cost to receive $1,000 from an international client: PayPal $83.49, Payoneer $10.00, Wise $8.40, Shieldz $0 plus network gas" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">PayPal cross-border fee (4.4%) plus typical FX markup on a $1,000 conversion. Payoneer direct-transfer receiving fee (1%). Wise transfer fee plus FX margin at the mid-market rate (public rate cards). Shieldz platform fee is $0; the client pays only network gas.</figcaption>
</figure>

A crypto invoice skips both problems at once. There is no balance to freeze because Shieldz never holds one, and settlement is a confirmed on-chain transaction, typically minutes, not business days. See [non-custodial crypto payment gateway](/blog/non-custodial-crypto-payment-gateway) for what "never holds a balance" actually means cryptographically, and [/verify](/verify) if you want to check the claim yourself instead of taking it on faith.

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="Shieldz hosted checkout showing coin picker, QR code, and pay amount for a client invoice" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The client opens a link, picks a coin, and pays. No account, no card details, no KYC form on their side.</figcaption>
</figure>

## Step-by-step: invoice a client and get paid

### 1. Create a merchant and register a receive address

Sign up at the [dashboard](https://merchant.shieldz.cash/signup) with a wallet, Google, or Telegram account. No KYC to start. Register the public address (or a Zcash viewing key, if you want the shielded-privacy option) for the chain you want paid on. USDC or USDT on Base keeps invoice amounts stable and gas near zero. See [accept stablecoin payments](/blog/accept-stablecoin-payments).

### 2. Generate the invoice for this milestone or deliverable

Use the dashboard for a one-off amount, or the [payment link tool](/tools/payment-link) if you send the same client a link every sprint. Set the amount in USD, add a memo the client will recognize on their end ("Invoice #14, Sept sprint"), and send the link by email or in your project tracker. Full API version, if you bill from your own invoicing tool:

```bash
curl https://shieldz.cash/api/v1/invoices \
  -H "Authorization: Bearer sk_live_…" \
  -H "Content-Type: application/json" \
  -d '{
    "amount_usd_cents": 250000,
    "memo": "Invoice #14, September sprint",
    "idempotency_key": "client_acme_2026_09_sprint",
    "metadata": { "client": "acme", "period": "2026-09" }
  }'
```

Amount bounds today: $1.00 to $100,000.00 per invoice. Default expiry is 30 minutes (45 minutes when ZEC is the settlement asset), long enough for a client to open a wallet app without the quote going stale.

### 3. The client pays whatever coin they actually hold

Your client does not need to hold the exact asset you settle in. If they pay a different supported coin, swap-settle routes the payment through NEAR, Chainflip, or Relay (the LeoKit aggregator) and you still receive the asset you configured. Shieldz takes no affiliate cut on that swap; the client only sees the standard network gas and the swap's own spread. Read [the trust tradeoff of "pay any coin"](/blog/pay-any-coin-trust-tradeoff) if you want the mechanics of why this is safe for you as the recipient.

### 4. Confirm and reconcile

If you build your own invoicing on top of the API, Shieldz POSTs `invoice.paid` to your webhook with an `X-Shieldz-Signature` header (HMAC-SHA256, verify the raw body). Match it to the invoice ID and client metadata so a retried delivery never double-books a payment. Full signature-verification snippet: [crypto payment API quickstart](/blog/crypto-payment-api). If you are just using the dashboard, the invoice simply flips to "paid" and you see the transaction hash.

## What this does not solve

- Shieldz does not convert your crypto to fiat or deposit into a bank account. If your accountant needs a fiat ledger, that is a separate step you handle yourself (an exchange off-ramp, for instance). See [crypto payment gateways and fiat settlement](/blog/crypto-payment-gateways-fiat-settlement) for what that landscape looks like.
- The client still pays network gas, and the swap route (when used) has its own spread. Neither is a Shieldz fee, but do not market the invoice as literally free to send.
- NEAR and SOL are not live source chains for swap-settle right now. If a client only holds one of those, have them bridge or swap to a supported asset first.

## FAQ

**Do I need a business entity or KYC to invoice a client?**
No. Shieldz signup is wallet, Google, or Telegram, and there is no KYC gate to start invoicing. See [do crypto payment gateways require KYC](/blog/do-crypto-payment-gateways-require-kyc).

**Can my client pay from an exchange or a self-custody wallet?**
Either. The hosted checkout shows a QR code and a wallet deep-link, and works the same whether the client copies an address from an exchange withdrawal screen or taps through from MetaMask, Coinbase Wallet, Trust, or Rainbow.

**What happens if the client pays late and the quote expired?**
The invoice just stays unpaid; generate a fresh one. There is no on-chain mandate that charges them automatically later, which is also why there is no chargeback risk once a payment actually confirms.

**Is this safer than PayPal for a large one-off payment?**
It removes the specific risk PayPal freelancers hit most: a processor freezing or reviewing a balance because a payment pattern looks unusual. Shieldz never holds a balance to freeze; funds land directly at your registered address. It does not remove ordinary client-side risk (a client who simply does not pay), which no payment rail solves.

## Start

[Create a merchant](https://merchant.shieldz.cash/signup) and send your next invoice as a link, or wire it into your own tools with the [API reference](/docs). If most of your work comes through a marketplace-style flow instead of direct billing, [crypto payments for AI agents](/blog/crypto-payments-for-ai-agents) and the [MCP path](/blog/agents-keyless-mcp-payments) cover the automated end of the same rails.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need a business entity or KYC to invoice a client in crypto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Shieldz signup is wallet, Google, or Telegram, and there is no KYC gate to start invoicing clients."
      }
    },
    {
      "@type": "Question",
      "name": "Can a client pay a freelance crypto invoice from an exchange or a self-custody wallet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Either. The hosted checkout shows a QR code and a wallet deep-link and works the same for an exchange withdrawal or a wallet app like MetaMask, Coinbase Wallet, Trust, or Rainbow."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a client does not pay before the invoice expires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The invoice stays unpaid and you generate a fresh one. There is no on-chain mandate that charges the client automatically later."
      }
    },
    {
      "@type": "Question",
      "name": "Is a non-custodial crypto invoice safer than PayPal for freelancers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It removes the risk of a processor freezing or reviewing a balance, since Shieldz never holds a balance. It does not remove ordinary client-side non-payment risk, which no payment rail can solve."
      }
    }
  ]
}
</script>
