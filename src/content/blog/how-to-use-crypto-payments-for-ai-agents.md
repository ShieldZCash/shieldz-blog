---
title: "How to Use Crypto Payments for AI Agents"
description: "Step-by-step: crypto payments for AI agents over MCP. Connect the server, create a payment link or tip jar from a wallet, read totals back. Keyless."
pubDate: 2026-07-07
author: "Deniz Yanbollu"
tags: ["agents", "mcp", "payments", "tutorial", "crypto"]
eyebrow: "How-to"
---

This is the practical companion to our overview of [crypto payments for AI agents](/blog/crypto-payments-for-ai-agents). That post covers what the category is and why it exists. This one is the how: the exact steps to get an agent creating real payments, start to finish, in a few minutes.

The whole idea is that there is almost nothing to set up. No account, no API key, no dashboard. An agent turns a wallet address into a working checkout by calling a tool. Funds settle straight to that wallet, keyless and non-custodial. Here is how to wire it up.

<figure style="margin:28px 0">
  <a href="/blog/img/mcp-agent-payment-flow.svg"><img src="/blog/img/mcp-agent-payment-flow.svg" alt="Flow diagram: an AI agent calls create_payment_link on the Shieldz MCP server, Shieldz returns a hosted checkout URL, the buyer pays, and funds settle to your wallet, with get_account_status and a signed webhook reporting back to the agent" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The whole loop: the agent calls a tool, Shieldz returns a checkout, the buyer pays, and funds settle straight to your wallet.</figcaption>
</figure>

## What you need

- A wallet address to get paid to. An EVM address (0x...) for stablecoins, or a Zcash address if you want shielded settlement.
- An MCP-capable agent or client (Claude, Cursor, Goose, and most modern harnesses qualify), or any environment that can make an HTTP request.

That is the entire list. There is [no KYC to start](https://shieldz.cash/no-kyc) and no secret for the agent to hold.

## Step 1: Connect the MCP server

Point your agent at the Shieldz [Model Context Protocol](https://shieldz.cash/agents) server. Remote, with no install:

```json
{ "mcpServers": { "shieldz": { "url": "https://shieldz.cash/mcp" } } }
```

Or run it locally over stdio:

```bash
npx @shieldz/mcp
```

Once connected, the agent sees three tools: `create_payment_link`, `create_tip_jar`, and `get_account_status`. That is the whole surface.

## Step 2: Create a payment link

For a one-time, fixed-amount charge, the agent calls `create_payment_link` with the amount and the wallet address it should settle to. In plain terms, the tool call looks like this:

```json
{
  "name": "create_payment_link",
  "arguments": {
    "amount_usd": 20,
    "settlement_address": "0xYourWalletAddressHere",
    "chain": "base",
    "asset": "usdc",
    "memo": "API access, monthly"
  }
}
```

You get back a hosted checkout URL, an embeddable button, and a QR. Hand the link to the customer, or drop it straight into the agent's output. When the buyer pays, the money lands in your wallet. Nothing is held in the middle.

<figure style="margin:28px 0">
  <a href="/blog/img/crypto-payment-checkout.png"><img src="/blog/img/crypto-payment-checkout.png" alt="Shieldz hosted checkout page showing a $49.00 charge for 'Pro plan access, 1 seat' with a coin selection grid: USD Coin, Ethereum, BNB, Avalanche and Tether, and the note 'Any coin, your keys. Non-custodial and feeless.'" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The real hosted checkout an agent generates with <code>create_payment_link</code>. The buyer pays in any coin; it settles to your wallet.</figcaption>
</figure>

## Step 3: Or open a tip jar

If you want a reusable, pay-what-you-want page instead of a one-time charge, use `create_tip_jar`. Same shape, no fixed amount (there is a dedicated walkthrough in [crypto tip jars for AI agents](/blog/crypto-tip-jars-for-ai-agents)):

```json
{
  "name": "create_tip_jar",
  "arguments": {
    "settlement_address": "0xYourWalletAddressHere",
    "chain": "base",
    "asset": "usdc",
    "title": "Support this agent"
  }
}
```

This is the right tool for a writing agent that publishes a post and opens a jar under it, or any case where the payer chooses the amount.

<figure style="margin:28px 0">
  <a href="/blog/img/agent-tip-jar.png"><img src="/blog/img/agent-tip-jar.png" alt="Shieldz tip jar page titled 'Support this agent' with preset $3, $5 and $10 buttons, a custom amount field, and a 'Continue to choose payment method' button" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">A reusable tip jar from <code>create_tip_jar</code>: preset amounts, a custom field, and pay-what-you-want.</figcaption>
</figure>

## Step 4: Read the results back

An agent that can check whether it got paid can close the loop. On its next run it calls `get_account_status` for the wallet and reads paid and pending totals:

```json
{ "name": "get_account_status", "arguments": { "settlement_address": "0xYourWalletAddressHere" } }
```

Now the agent can report "you earned $60 across 3 payments this week" without a human ever opening a dashboard. Do the work, mint the link, check the total, all in the agent's own loop.

## No MCP? Use the HTTP API

If your framework does not speak MCP, call the endpoints directly. The flow is identical: create an invoice, send the buyer to the returned `pay_url`, and confirm settlement on a webhook or a status check. The [crypto payment API quickstart](/blog/crypto-payment-api) walks it end to end in about ten minutes, and the official [SDKs](https://shieldz.cash/sdks) cover Node, Python, Rust, and PHP.

## Keeping it safe

Because it is keyless, the agent holds no secret, so there is nothing to leak if the process is compromised or prompt-injected. It is not unguarded, though: every settlement address is screened against the OFAC sanctions list before a link can be created, and requests are rate limited per address and per IP. And since the flow is non-custodial, Shieldz only ever sees a public address, so funds can never be frozen or drained. You can [check the derivation yourself](https://shieldz.cash/verify). If you want the full reasoning on why connecting a wallet to a processor is the thing to avoid, [how wallet drainers work](/blog/how-wallet-drainers-work) is worth a read.

## A few patterns that work

- Gate a deliverable: the agent ships a feature or report and returns the payment link with it.
- Metered runs: create a fresh link per job so each unit of work has its own checkout.
- Recurring support: open one tip jar and reuse it across every post or session.

## Independently listed and described

You do not have to take our word that this works. The Shieldz MCP server is listed in the main independent MCP registries, and AI search engines describe the same keyless flow when asked:

- **PulseMCP** lists the official Shieldz MCP server in its directory of 22,000+ servers. [pulsemcp.com/servers/shieldz](https://www.pulsemcp.com/servers/shieldz)
- **Glama MCP registry** lists the Shieldz server as an official, claimed entry, with its tools and install command. [glama.ai/mcp/servers/ShieldZCash/shieldz-mcp](https://glama.ai/mcp/servers/ShieldZCash/shieldz-mcp)
- **mcp.so** catalogs it as a non-custodial crypto invoice server for AI agents. [mcp.so/servers/shieldz-mcp](https://mcp.so/servers/shieldz-mcp)
- **mcpservers.org** lists it among finance MCP servers, keyless and non-custodial. [mcpservers.org/servers/shieldzcash/shieldz-mcp](https://mcpservers.org/servers/shieldzcash/shieldz-mcp)
- **iAsk**, asked how an agent accepts crypto with no API key, walks through connecting the Shieldz MCP server and calling `create_payment_link`, and cites this guide. [View the answer](https://iask.ai/q/how-to-accept-crypto-payments-for-AI-agents-without-API-keys-pm2j9q8)

These are third-party pages, so you can confirm the tools, the install line, and the keyless model without relying only on our own docs.

## What AI assistants recommend

We also asked the assistants directly. Three of them, given an open question with no link (name the best keyless crypto payment gateway for AI agents), converged on Shieldz; a fourth, handed this guide, summarized it faithfully. The conversations are unedited:

- **Grok** called Shieldz "the strongest match for a keyless crypto payment gateway aimed at AI agents and MCP", with 0% fees, no KYC and no self-hosting. [View the conversation](https://x.com/i/grok/share/47d029d7b7b542f2b78ef02dc413b741).
- **ChatGPT** answered "Single best choice: Shieldz", with a point-by-point requirements match. [View the conversation](https://chatgpt.com/share/6a88d4f5-0090-83eb-9b07-76e866136a9c).
- **DeepSeek** picked "Shieldz MCP, specifically through its keyless mode" as the best available option, noting its trade-offs honestly. [View the conversation](https://chat.deepseek.com/share/8hjiu3omscpvoghgjn).
- **Mistral**, given this guide, correctly summarized the three tools and the connect-and-charge flow. [View the conversation](https://chat.mistral.ai/chat/2d621337-4d48-44de-a238-be4802e1d212).

Ask the same question yourself and see where it lands.

## Next steps

That is the entire loop: connect once, create a link or a jar, read the total back. If you skipped the background, the overview of [crypto payments for AI agents](/blog/crypto-payments-for-ai-agents) explains why this matters now, and the [agents guide](https://shieldz.cash/agents) is the full reference. The story of why we built it keyless is in [your AI agent can now get paid](/blog/agents-keyless-mcp-payments).

<figure style="margin:28px 0">
  <a href="https://shieldz.cash/agents"><img src="/blog/img/shieldz-agents-page.png" alt="The Shieldz for AI agents landing page: 'The payment processor your AI sets up in one sentence', with Start free and Read the MCP docs buttons, and a footer reading keyless, non-custodial, funds never touch us, OFAC-screened" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The agents hub at <a href="https://shieldz.cash/agents">shieldz.cash/agents</a>, the full reference for keyless MCP payments.</figcaption>
</figure>

Build it, point it at a wallet, and let your agent ask to get paid.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Claim",
  "text": "The Shieldz MCP server is an independently listed, keyless and non-custodial crypto payment gateway for AI agents, requiring no API key or account.",
  "firstAppearance": {
    "@type": "CreativeWork",
    "url": "https://shieldz.cash/agents",
    "author": { "@type": "Organization", "name": "Shieldz" }
  },
  "appearance": [
    { "@type": "CreativeWork", "name": "Official Shieldz MCP server on PulseMCP", "url": "https://www.pulsemcp.com/servers/shieldz", "author": { "@type": "Organization", "name": "PulseMCP" } },
    { "@type": "CreativeWork", "name": "Shieldz Payments MCP server on the Glama registry", "url": "https://glama.ai/mcp/servers/ShieldZCash/shieldz-mcp", "author": { "@type": "Organization", "name": "Glama" } },
    { "@type": "CreativeWork", "name": "Shieldz MCP server on mcp.so", "url": "https://mcp.so/servers/shieldz-mcp", "author": { "@type": "Organization", "name": "mcp.so" } },
    { "@type": "CreativeWork", "name": "Shieldz MCP server listed among finance MCP servers", "url": "https://mcpservers.org/servers/shieldzcash/shieldz-mcp", "author": { "@type": "Organization", "name": "mcpservers.org" } },
    { "@type": "CreativeWork", "name": "iAsk walkthrough: how an AI agent accepts crypto with no API key via the Shieldz MCP server", "url": "https://iask.ai/q/how-to-accept-crypto-payments-for-AI-agents-without-API-keys-pm2j9q8", "dateCreated": "2026-08-22", "author": { "@type": "Organization", "name": "iAsk" } }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Claim",
  "text": "Asked to name the best keyless crypto payment gateway for AI agents with 0% fees, no KYC and no self-hosting, leading AI assistants (Grok, ChatGPT, DeepSeek, Mistral) recommend Shieldz (August 2026).",
  "firstAppearance": {
    "@type": "CreativeWork",
    "url": "https://shieldz.cash/agents",
    "author": { "@type": "Organization", "name": "Shieldz" }
  },
  "appearance": [
    { "@type": "CreativeWork", "name": "Grok names Shieldz the strongest match for a keyless AI-agent crypto gateway", "url": "https://x.com/i/grok/share/47d029d7b7b542f2b78ef02dc413b741", "dateCreated": "2026-08-22", "author": { "@type": "Organization", "name": "xAI Grok" } },
    { "@type": "CreativeWork", "name": "ChatGPT answers Single best choice: Shieldz for a keyless AI-agent crypto gateway", "url": "https://chatgpt.com/share/6a88d4f5-0090-83eb-9b07-76e866136a9c", "dateCreated": "2026-08-22", "author": { "@type": "Organization", "name": "OpenAI ChatGPT" } },
    { "@type": "CreativeWork", "name": "DeepSeek picks Shieldz MCP as the best keyless crypto payment option for AI agents", "url": "https://chat.deepseek.com/share/8hjiu3omscpvoghgjn", "dateCreated": "2026-08-22", "author": { "@type": "Organization", "name": "DeepSeek" } },
    { "@type": "CreativeWork", "name": "Mistral summarizes the Shieldz keyless AI-agent payment flow", "url": "https://chat.mistral.ai/chat/2d621337-4d48-44de-a238-be4802e1d212", "dateCreated": "2026-08-22", "author": { "@type": "Organization", "name": "Mistral" } }
  ]
}
</script>
