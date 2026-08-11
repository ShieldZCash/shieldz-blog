---
title: "How to Verify a Crypto Payment (and Spot Fake Payment Proofs)"
description: "How to verify a crypto payment is real before you ship: spot fake payment screenshots, refund scams, reused tx hashes and forged webhooks."
pubDate: 2026-08-11
author: "Deniz Yanbollu"
tags: ["verify crypto payment", "fake payment proof", "security", "fraud", "crypto"]
eyebrow: "Security"
image: "https://shieldz.cash/blog/og/how-to-verify-crypto-payments.png"
---

Knowing how to verify a crypto payment is the one security skill every seller who accepts crypto needs, because the most common fraud in crypto commerce is not a hack. It is a "buyer" convincing you that you were paid when you were not, with a doctored screenshot, a recycled transaction hash, or a forged notification. And when that fails, the fallback is making you send the refund that empties your wallet yourself.

We covered the buyer side of crypto fraud in [how wallet drainers work](/blog/how-wallet-drainers-work). This is the merchant side: the six ways a "payment" turns out to be fake, what each one exploits, and the exact verification step that closes it. The pattern to hold onto: every one of these scams targets your process, not the chain. Verify properly and the chain protects you for free.

## 1. The fake payment proof

The oldest one. The "buyer" sends a screenshot of a wallet showing a completed transfer, or a link to a doctored explorer page, and pressures you to ship because "the network is just slow". The screenshot is edited, or the transaction is real but goes to a different address, or it was sent and then replaced before confirming.

**The fix:** a screenshot proves nothing; only the chain does. Never fulfil manually off a picture. With a gateway, fulfilment should key off the payment confirming on-chain to your invoice's address for the exact amount. Shieldz creates a unique address and exact amount per invoice and fires a webhook only when the chain confirms, so "proof" arrives from your own endpoint, not from the customer.

## 2. The underpayment nudge

The buyer "accidentally" pays $87 on a $100 invoice, then insists the rest is "network fees" or promises to settle later, counting on you shipping now and eating the gap. At scale, sellers who eyeball amounts lose a few percent of revenue to this without ever calling it fraud.

**The fix:** exact-amount matching, by software, not by eyes. An invoice should track the precise atomic amount per chain and only flip to paid when it is fully covered. A payment that lands short stays visibly short, and the checkout tells the buyer what remains, which removes the ambiguity the scam needs.

## 3. The overpayment refund scam

The expensive one, imported directly from bank fraud. The scammer overpays your invoice, often from a stolen exchange account, then urgently asks you to refund the difference "to this other wallet, please, the first account is having problems". You send your own clean crypto. Days later the original deposit is frozen, clawed back or reported stolen, and you are out both the goods and the refund.

<figure style="margin:28px 0">
  <a href="/blog/charts/refund-scam-flow.svg"><img src="/blog/charts/refund-scam-flow.svg" alt="Four-stage diagram of the overpayment refund scam: tainted overpayment, urgent request to refund the excess to a new address, the merchant sends clean crypto, the original funds are frozen and the merchant loses both. The fix: refund only to the paying address, only after settlement, never under time pressure." width="760" height="440" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The scam spends your money, not the buyer's. A new refund address plus urgency is its signature.</figcaption>
</figure>

**The fix** is a policy you decide once, calmly, and never renegotiate under pressure: refunds go only to the address that paid, only after the original payment has fully settled, on your schedule. This is the same principle we build into [swap routing](/blog/cross-chain-crypto-payments), where a refund path is verified before a coin is even offered: money should only ever flow backwards along the path it arrived on.

## 4. The recycled transaction hash

A real transaction hash, just not the buyer's. The scammer copies a hash from a block explorer, or from their own earlier purchase, and submits it as proof for a new order. Merchants who verify by "does this hash exist on-chain" get fooled, because it does.

**The fix:** a hash must be bound to one invoice, ever. Shieldz enforces this at the API level: submitting a transaction that is already attached to another invoice is rejected with a `tx_belongs_to_another_invoice` error. If you run your own verification, store every accepted hash and reject reuse, and always check the recipient address and amount, not just existence.

## 5. The forged webhook

If your store fulfils orders when a "payment confirmed" notification hits your endpoint, the scammer does not need to pay; they need one HTTP POST. Webhook URLs leak from client code, logs and repositories, and an unauthenticated endpoint treats a forged `invoice.paid` exactly like a real one.

**The fix:** verify signatures, always. Shieldz signs every delivery with an HMAC-SHA256 signature over the timestamp and raw body in the `X-Shieldz-Signature` header, using a secret only you and Shieldz hold. Verify it, reject stale timestamps to block replays, and deduplicate with the delivery ID. The [crypto payment API guide](/blog/crypto-payment-api) shows the pattern; it is ten lines of code that closes the door completely.

## 6. The look-alike checkout

The last scam skips you and hunts your buyers: a cloned checkout page on a look-alike domain, spread through search ads or a hacked social account, collecting payments meant for you. You lose the sale and, worse, the customer thinks you robbed them.

**The fix:** give buyers one canonical way to pay and make it verifiable. Link only to your own domain or your hosted checkout, and publish that URL consistently. Because a Shieldz checkout derives its addresses from your keys, anyone can [verify the derivation](https://shieldz.cash/verify); a clone can copy your logo, but it cannot produce addresses that belong to you.

## The pattern behind all six

Read the list again and notice what is missing: not one of these scams attacks the blockchain. They attack the gap between what the chain says and what the merchant believes. Screenshots instead of confirmations, eyeballs instead of exact amounts, urgency instead of policy, existence instead of binding, an open endpoint instead of a signature, a look-alike instead of a canonical link.

That is why the defense is not "be careful", it is automation. Let the invoice match exact amounts, let the webhook carry a signature, let refunds follow a fixed policy, and the human pressure points these scams rely on disappear. A [non-custodial setup](/blog/non-custodial-crypto-payment-gateway) helps for the same reason: with funds settling straight to your wallet and no balance sitting at a processor, there is one less account to phish, freeze or impersonate.

## FAQ

**How do I verify a crypto payment is real?**
Never from a screenshot. Confirm on-chain that the exact amount arrived at the invoice's own address, or rely on a signed webhook from your gateway. Payment proof should come from your systems, not from the customer.

**What is the overpayment refund scam?**
A scammer overpays with tainted or stolen funds, then urgently asks for the excess back to a different address. The refund leaves in your clean crypto before the original payment is frozen. Refund only to the paying address, only after settlement.

**Can chargebacks happen on crypto payments?**
No. A confirmed payment is final, which removes card-style chargeback fraud. The scams that remain target your process instead: fake proofs, refund tricks and forged notifications, all of which automation closes.

**Do I need to verify webhook signatures?**
Yes, always. An unauthenticated webhook endpoint lets anyone mark orders as paid with a single HTTP request. Verify the HMAC signature, reject stale timestamps and deduplicate deliveries.

## Tighten the process, keep the sale

Crypto already gave you finality and removed chargebacks; the rest is making sure your own process is as trustworthy as the chain. Start with a checkout that verifies for you: create one with the [payment link generator](https://shieldz.cash/tools/payment-link), wire up signed webhooks with the [API docs](https://shieldz.cash/docs), and if you are new to the whole flow, begin with [how to accept crypto payments](/blog/how-to-accept-crypto-payments).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I verify a crypto payment is real?", "acceptedAnswer": { "@type": "Answer", "text": "Never from a screenshot. Confirm on-chain that the exact amount arrived at the invoice's own address, or rely on a signed webhook from your gateway. Payment proof should come from your systems, not from the customer." } },
    { "@type": "Question", "name": "What is the overpayment refund scam?", "acceptedAnswer": { "@type": "Answer", "text": "A scammer overpays with tainted or stolen funds, then urgently asks for the excess back to a different address. The refund leaves in your clean crypto before the original payment is frozen. Refund only to the paying address, only after settlement." } },
    { "@type": "Question", "name": "Can chargebacks happen on crypto payments?", "acceptedAnswer": { "@type": "Answer", "text": "No. A confirmed crypto payment is final, which removes card-style chargeback fraud. The remaining scams target the merchant's process: fake proofs, refund tricks and forged notifications, which automation closes." } },
    { "@type": "Question", "name": "Do I need to verify webhook signatures?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, always. An unauthenticated webhook endpoint lets anyone mark orders as paid with a single HTTP request. Verify the HMAC signature, reject stale timestamps and deduplicate deliveries." } }
  ]
}
</script>
