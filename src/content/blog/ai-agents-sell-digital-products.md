---
title: "AI Agents Can Now Sell Digital Products: Pay-to-Unlock over MCP"
description: "AI agents can now sell files, licenses and secrets for crypto: a new create_unlock MCP tool, automatic delivery, and owner email alerts. No API key."
pubDate: 2026-08-16
author: "Deniz Yanbollu"
tags: ["ai agents", "mcp", "pay-to-unlock", "sell digital products", "product"]
eyebrow: "Product"
image: "https://shieldz.cash/blog/og/ai-agents-sell-digital-products.png"
---

AI agents could already accept crypto payments through Shieldz with nothing but a wallet address: payment links and tip jars over [keyless MCP tools](/blog/agents-keyless-mcp-payments), no account, no API key. As of today they can do something more interesting: **sell**. A new `create_unlock` tool lets any agent put a file, license key, or secret behind a hosted crypto paywall, with delivery handled automatically the moment the buyer's payment confirms.

This closes the loop we kept seeing break. Sellers, human and agent alike, were using tip jars to sell fixed-price digital products and then delivering by hand: "pay, then paste your tx hash and I'll send the file." That is a support queue pretending to be a checkout. Pay-to-unlock is the purpose-built version, and it is now reachable from every surface an agent touches.

## What shipped

- **`create_unlock` on the MCP server.** The [remote MCP endpoint](https://shieldz.cash/mcp) (and `npx @shieldz/mcp`) now exposes a fourth tool alongside `create_payment_link`, `create_tip_jar` and `get_account_status`. One call with an address, a price, and the payload to reveal returns a live paywall URL.
- **Automatic delivery.** The payload is stored server-side and revealed to the buyer only on their paid confirmation, never before. No tx-hash pasting, no manual sends. (Since launch, unlocks also carry [real file uploads up to 10 MB](/blog/sell-pdf-for-crypto) and 100,000-character text.)
- **Owner email alerts.** All keyless creations (links, tip jars, unlocks) now take an optional email. If it is set, the owner gets a backup of their manage link at creation and a one-time "you just got paid" email on the first sale, with a claim link to a full dashboard.
- **Right-tool guidance.** The tip-jar tool, the MCP responses and the dashboard now point sellers of fixed-price digital goods to pay-to-unlock instead of a tip jar.

<figure style="margin:28px 0">
  <a href="/blog/charts/agent-unlock-flow.svg"><img src="/blog/charts/agent-unlock-flow.svg" alt="Flow of an agent-created unlock sale: the agent calls create_unlock over MCP, a hosted paywall link is created, the buyer pays crypto straight to the owner's wallet, and the secret is revealed automatically on paid confirmation, with a one-time email to the owner on the first sale." width="760" height="430" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The full loop. The agent sets up the sale; the chain settles it; delivery and the owner hand-off are automatic.</figcaption>
</figure>

## One tool call

From any MCP client (Claude, Cursor, Goose, or your own agent), the call looks like this:

```json
{
  "name": "create_unlock",
  "arguments": {
    "address": "0xYourWallet…",
    "price_usd": 5,
    "payload": "https://drive.example.com/the-file",
    "title": "Research dataset, August edition",
    "email": "owner@example.com",
    "aup_accepted": true
  }
}
```

The response is a live `https://shieldz.cash/unlock/…` URL plus a private manage link. No MCP client handy? The same thing works as one HTTP request, documented for agents in our [llms.txt](https://shieldz.cash/llms.txt):

```
GET https://shieldz.cash/api/v1/unlocks?to=0x…&price_usd=5&payload=…&title=…&aup=1
```

Two details worth knowing. First, `aup_accepted` is mandatory and deliberate: the acceptable-use policy forbids adult, illegal, or non-consensual content, the agent must assert compliance explicitly, and every settlement address is OFAC-screened. Second, everything stays [non-custodial](/blog/non-custodial-crypto-payment-gateway): the buyer pays the owner's wallet directly, Shieldz never holds the funds, and there is a $0 platform fee.

## Why this matters for the agent economy

Most of the agent-payments conversation is about agents *spending*: paying for APIs, compute and data. The other half of a real economy is agents *earning*, and for that an agent needs a way to charge for what it produces: a report it compiled, a dataset it cleaned, a license for a tool it built. Payment links handle "invoice a known buyer". Pay-to-unlock handles the harder case: **selling to strangers with delivery you do not have to perform**.

Because the whole flow is keyless, an agent can do this mid-task without any provisioning: generate the artifact, create the unlock, post the link, move on. The human owner's involvement starts only when money arrives, as an email with the first sale and a one-click path to [claim the dashboard](/blog/crypto-payments-for-ai-agents). We wrote about the anatomy of the paywall itself in [pay-to-unlock links](/blog/pay-to-unlock-file-link); this release makes that whole flow a first-class agent capability.

## The tip-jar lesson

A note on why the guidance shipped alongside the tool. Watching real usage, we saw sellers reach for the tip jar because it was the most visible keyless page, then bolt manual delivery on top of it. The fix is not a smarter tip jar; it is routing: the tip-jar generator, the MCP tool responses and the dashboard's first-run screen now all ask the only question that matters, *what are you selling?*, and point fixed-price digital goods to the unlock flow. Tools should argue for the right tool.

## FAQ

**Can an AI agent really sell a file with no account?**
Yes. One `create_unlock` call with a wallet address, price, and payload returns a live paywall. No signup, no API key, no KYC. The agent must pass `aup_accepted: true` to assert the content complies with the acceptable-use policy.

**When does the buyer see the secret?**
Only on their paid confirmation, after the payment settles on-chain to the owner's wallet. The payload is never exposed before payment.

**How does the human owner find out about sales?**
If an email was provided at creation, the owner gets a one-time email on the first sale with the amount, settlement details, and a claim link to a full dashboard. Anyone holding the manage link can also watch payments at any time, no sign-in.

**What does it cost?**
A $0 platform fee, like everything keyless at Shieldz. The buyer pays their network gas; the price you set is what the owner's wallet receives.

## Try it

Point any MCP client at `https://shieldz.cash/mcp` and call `create_unlock`, use the no-code [pay-to-unlock generator](https://shieldz.cash/tools/pay-to-unlock), or read the [agent integration guide](https://shieldz.cash/agent). If you are new to the agent side of Shieldz, start with [crypto payments for AI agents](/blog/crypto-payments-for-ai-agents) and the [keyless MCP payments](/blog/agents-keyless-mcp-payments) deep dive.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can an AI agent really sell a file with no account?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. One create_unlock call with a wallet address, price, and payload returns a live paywall. No signup, no API key, no KYC. The agent must pass aup_accepted: true to assert acceptable-use compliance." } },
    { "@type": "Question", "name": "When does the buyer see the secret?", "acceptedAnswer": { "@type": "Answer", "text": "Only on their paid confirmation, after the payment settles on-chain to the owner's wallet. The payload is never exposed before payment." } },
    { "@type": "Question", "name": "How does the human owner find out about sales?", "acceptedAnswer": { "@type": "Answer", "text": "If an email was provided at creation, the owner gets a one-time email on the first sale with settlement details and a claim link to a full dashboard. The manage link also shows payments at any time." } },
    { "@type": "Question", "name": "What does it cost?", "acceptedAnswer": { "@type": "Answer", "text": "A $0 platform fee. The buyer pays their network gas; the price you set is what the owner's wallet receives." } }
  ]
}
</script>
