---
title: "Your AI agent can now get paid. No account, no API key."
description: "We pointed the Shieldz engine at AI agents: over MCP, keyless and non-custodial, an agent turns a wallet address into a working payment link."
pubDate: 2026-06-28
author: "Deniz Yanbollu"
tags: ["agents", "mcp", "product", "payments"]
---

Every payment processor sells you the same quiet insult. They take a percent or two of money you earned, they hold it for days "for your protection," and they keep the right to freeze it if some risk model gets nervous. You did the work. They decide when you get paid. That has bothered me for years, and it is the reason Shieldz exists.

Shieldz deletes that middle layer. You give a wallet address, the buyer pays, the money lands in your wallet directly. We never take custody, so there is no balance for us to hold, delay, or freeze. We only ever see a public address. $0 platform fees: you pay network gas and nothing else.

This week we pointed that same engine at AI agents, and it turned out to be the cleanest fit we have shipped.

## One sentence in, a working checkout out

An agent can now accept crypto with no account, no API key, no dashboard, nothing to set up. You give it a wallet address, it calls Shieldz over the Model Context Protocol, and it hands back a real payment link, an embeddable button, and a QR. Funds settle straight to that wallet.

There are three tools, and that is the whole surface:

- `create_payment_link`: a one-time, fixed-amount checkout.
- `create_tip_jar`: a reusable "pay what you want" page.
- `get_account_status`: read paid and pending totals back out, so the agent can report results on its next run.

## Keyless, not careless

The thing I am most proud of is that it is keyless. The agent holds no secret, because there is no secret to hold. The wallet address is the identity.

That could be a problem, so it is not unguarded. Every settlement address is screened against the OFAC sanctions list before a link can exist, requests are rate limited per IP and per address, and because nothing is custodial, the worst case is never lost funds. Keyless does not mean careless.

## Connect it once

Any MCP client can connect in about thirty seconds. Remote, with no install:

```json
{ "mcpServers": { "shieldz": { "url": "https://shieldz.cash/mcp" } } }
```

Or local, over stdio:

```bash
npx @shieldz/mcp
```

It already works in the agents people actually run: Claude, Cursor, Goose, Manus, Devin, Hermes, and the OpenClaw crowd. If your harness speaks MCP, it speaks Shieldz.

## Why free, and why for agents

People ask how it can be free. The honest answer is that taking a percentage of someone's revenue forever is a bad deal dressed up as a service. We charge $0 on your payments. Free accounts show one small sponsored card on the payment-confirmed screen while funds settle, which covers our servers and nodes. Prefer a clean, unbranded checkout? Pro is $99 a year and turns it off.

And why agents specifically? Because agents already do the work. They write the thing, ship the feature, run the newsletter. The one step they could never take was asking to get paid for it. Now an agent can finish a task and mint the payment link in the same breath. Ship the feature and charge for access. Write the post and open the tip jar. No human stopping to go set up payments first.

Non custodial. Feeless. No KYC to start. The money was always yours. Now your agent can ask for it on your behalf. New to the model? Start with [keyless crypto payments](/blog/keyless-crypto-payments).

If you are building agents, try it and tell me what breaks. I read every reply.

The full guide lives at [shieldz.cash/agents](https://shieldz.cash/agents).

**Keep reading:** agents can now also sell files and licenses through [pay-to-unlock over MCP](/blog/ai-agents-sell-digital-products). [Crypto payments for AI agents](/blog/crypto-payments-for-ai-agents) is the overview of the whole category. For the exact steps, see [how to use crypto payments for AI agents](/blog/how-to-use-crypto-payments-for-ai-agents), and for reusable pay-what-you-want pages, [crypto tip jars for AI agents](/blog/crypto-tip-jars-for-ai-agents).
