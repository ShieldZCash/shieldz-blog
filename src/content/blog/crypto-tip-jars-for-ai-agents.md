---
title: "Crypto Tip Jars for AI Agents (Keyless, No Account)"
description: "Let an AI agent create a crypto tip jar in one call. Keyless, non-custodial, $0 platform fee, tips settle straight to your wallet. Over MCP or plain REST."
pubDate: 2026-07-09
author: "Deniz Yanbollu"
tags: ["ai-agents", "tip-jar", "crypto", "mcp", "payments"]
eyebrow: "How-to"
image: "https://shieldz.cash/blog/og/crypto-tip-jars-for-ai-agents.png"
---

An AI agent that does useful work should be able to get paid for it, without you wiring up a payment account first. A **crypto tip jar** is the simplest version of that: a reusable pay-what-you-want page that an agent can spin up in a single call, where tips settle straight to a wallet you control. No signup, no API key, non-custodial, $0 platform fee.

This is a practical companion to our overview of [crypto payments for AI agents](/blog/crypto-payments-for-ai-agents) and the [step-by-step how-to](/blog/how-to-use-crypto-payments-for-ai-agents). Here we focus on one primitive: the tip jar.

## Why a tip jar (and why 0% matters)

Creator tip platforms take a cut of every tip, and for small amounts the fees bite hard. On a $5 tip, an 8% platform fee plus card processing can shave off most of a dollar. Shieldz has a **0% platform fee**, so a $5 crypto tip arrives as $5 (minus only the coin's network fee, which the tipper covers).

<figure style="margin:28px 0">
  <a href="/blog/charts/tip-jar-fees.svg"><img src="/blog/charts/tip-jar-fees.svg" alt="Bar chart: what you keep from a $5 tip after fees. Patreon $4.25, Ko-fi $4.56, Buy Me a Coffee $4.75, Shieldz $5.00" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Platform and processing fees come out of every tip. With a 0% platform fee, a $5 crypto tip lands as $5.</figcaption>
</figure>

For an agent, the bigger win is that there is nothing to set up. It does not need a merchant account, a dashboard, or an API key. It passes a wallet address and gets back a working, shareable tip page.

## The whole loop

<figure style="margin:28px 0">
  <a href="/blog/img/mcp-agent-payment-flow.svg"><img src="/blog/img/mcp-agent-payment-flow.svg" alt="Flow diagram: an AI agent calls create_tip_jar on Shieldz, gets a hosted tip page URL, a supporter pays any coin, and funds settle straight to the wallet" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The agent calls one tool, Shieldz returns a hosted tip page, supporters pay any coin, and funds settle straight to your wallet.</figcaption>
</figure>

## Create a tip jar from an agent

Two ways, both keyless. Use whichever your stack prefers.

### Over MCP (Claude, Goose, any MCP client)

Point your MCP client at the hosted Shieldz server (`https://shieldz.cash/mcp`) or run `@shieldz/mcp` locally, then the agent calls the `create_tip_jar` tool with a wallet address, a title, and a few suggested amounts. That is the entire setup, no key. See the [agents overview](/agents) for connecting a client.

### Over plain REST

If you are not on MCP, it is one HTTP call. No `Authorization` header, keyless:

```bash
curl https://shieldz.cash/api/v1/tip-jars \
  -H "Content-Type: application/json" \
  -d '{
    "settlement": { "chain": "BASE", "asset": "USDC", "address": "0xYourWallet" },
    "title": "Buy me a coffee",
    "suggested_amounts_usd_cents": [300, 500, 1000],
    "email": "owner@example.com"
  }'
```

You get back the hosted `url` (share it anywhere), a `slug`, and a `manage_token` the agent keeps to read totals later. The optional `email` lets a human owner claim a full dashboard by magic link afterwards, settlement keeps working either way. The exact tool schema for function-calling LLMs (OpenAI, Anthropic, LangChain) is on the [agent API reference](/agent).

<figure style="margin:28px 0">
  <a href="/blog/img/agent-tip-jar.png"><img src="/blog/img/agent-tip-jar.png" alt="A hosted Shieldz tip jar page with a title, suggested amounts, and a pay-any-coin button" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The hosted tip page the agent gets back, shareable immediately and usable by any human.</figcaption>
</figure>

## Supporters pay any coin

The tipper opens the page and pays with whatever they hold, Bitcoin, USDC, ETH, SOL, shielded Zcash, and Shieldz settles it to your chosen stable asset. Because it is [pay-with-any-coin](/blog/pay-any-coin-trust-tradeoff), you are not forcing supporters to already own a specific token. Funds go straight to your wallet; Shieldz never holds them.

## Reading how much came in

The agent (or your code) reads status back with the manage token, no key required:

```bash
curl https://shieldz.cash/a/<manage_token>.json
```

That returns an agent-readable dashboard: the tip jar, totals, and the individual payments. Perfect for an agent that wants to report its own earnings.

## FAQ

**Does an agent need an account or API key?** No. Tip jars are keyless, the agent passes a wallet address and gets a working page.

**Is it custodial?** No. Tips settle straight to the address you provide. Shieldz never holds funds, and there is no platform fee beyond network gas.

**Can a human take it over later?** Yes. Pass an `email` and the owner can claim a full dashboard by magic link; the tip jar keeps working throughout.

**Which coins can supporters tip with?** Bitcoin, USDC, USDT, ETH, SOL, shielded Zcash and more. They pay any coin; you settle to a stable asset like USDC.

## Get started

Point your agent at `https://shieldz.cash/mcp` or POST to `/api/v1/tip-jars`, and it can start collecting tips in one call. Want a fixed-amount invoice instead of a tip jar? See [how to use crypto payments for AI agents](/blog/how-to-use-crypto-payments-for-ai-agents). New to the idea? Start with [crypto payments for AI agents](/blog/crypto-payments-for-ai-agents), or try the no-code [payment link generator](/tools/payment-link).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Does an AI agent need an account or API key to create a crypto tip jar?", "acceptedAnswer": { "@type": "Answer", "text": "No. Tip jars are keyless: the agent passes a wallet address and gets back a working, shareable tip page. No signup, no API key." } },
    { "@type": "Question", "name": "Is a Shieldz tip jar custodial?", "acceptedAnswer": { "@type": "Answer", "text": "No. Tips settle straight to the address you provide. Shieldz never holds funds, and there is no platform fee beyond network gas." } },
    { "@type": "Question", "name": "Can a human take over an agent's tip jar later?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Pass an email and the owner can claim a full dashboard by magic link; the tip jar keeps working throughout." } },
    { "@type": "Question", "name": "Which coins can supporters tip with?", "acceptedAnswer": { "@type": "Answer", "text": "Bitcoin, USDC, USDT, ETH, SOL, shielded Zcash and more. Supporters pay any coin and you settle to a stable asset like USDC." } }
  ]
}
</script>
