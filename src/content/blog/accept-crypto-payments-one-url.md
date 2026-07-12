---
title: "Accept crypto payments with one URL, no key or SDK"
description: "Accept crypto payments with one URL: a keyless GET API that mints a payment link or tip jar from a single request, no account, API key, SDK, or MCP client."
pubDate: 2026-07-12
author: "Deniz Yanbollu"
tags: ["crypto-payment-api", "ai-agents", "crypto", "payments", "keyless"]
---

You can now **accept crypto payments with one URL**. Not one SDK, not one API key, not one signup, just one URL. Point a plain `GET` request at Shieldz with a wallet address, and it returns a live payment link or tip jar plus a claim code, all non-custodial and free. It is the lowest-friction way to get paid in crypto that we know of, and it exists because a payment primitive should be something any tool can call, not a project you integrate.

This is part of the Shieldz cluster for machine-native payments. If you are wiring up an autonomous system, start with [crypto payments for AI agents](/blog/crypto-payments-for-ai-agents) and [keyless MCP payments for agents](/blog/agents-keyless-mcp-payments); this post is the even-simpler path underneath them.

## Why one URL matters

Every other way to accept money online front-loads work before the first payment can happen. Cards want an account, business verification, API keys, an SDK, and a webhook handler. Custodial crypto processors still want an account and KYC. Self-hosting a gateway means running a server. All of that is setup you do before you have earned a cent.

<figure style="margin:28px 0">
  <a href="/blog/charts/time-to-first-link.svg"><img src="/blog/charts/time-to-first-link.svg" alt="Time to your first payment link (illustrative): BTCPay self-host about 46 minutes, Stripe about 23 minutes, a custodial crypto API about 14 minutes, and Shieldz about 1 second with one URL and no signup." width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Signup and verification, then creating the link. Keyless means the whole left half of every other bar is zero. Illustrative.</figcaption>
</figure>

With a keyless GET, there is nothing to sign up for and nothing to install. The time to your first payment link is the time it takes to build a URL.

## Mint a tip jar with one URL

A tip jar is a reusable "pay what you want" page. Create one by fetching a URL:

```
GET https://shieldz.cash/api/v1/tip-jars?to=0xYOURWALLET&title=Buy+me+a+coffee&amounts=1,5,20
```

The response is JSON:

```json
{
  "url": "https://shieldz.cash/tip/tip-94fbcc8ad8f42db7",
  "manage_token": "buA6t_6exAdaKuYCq8cuEiW2_p2yY4eR",
  "manage_url": "https://shieldz.cash/a/buA6t_6exAdaKuYCq8cuEiW2_p2yY4eR"
}
```

Share the `url`, and tips settle straight to `0xYOURWALLET` in USDC or USDT. Tip jars are idempotent per wallet, so calling the URL again returns the same jar rather than spawning duplicates. Prefer a form? The same thing without any code is the [crypto tip jar generator](/tools/tip-jar).

## Mint a fixed-price payment link with one URL

For a one-time charge, hit the links endpoint instead:

```
GET https://shieldz.cash/api/v1/links?to=0xYOURWALLET&amount=25&chain=BASE&asset=USDC
```

You get back a `pay_url` (the hosted checkout), an embeddable button, and the same `manage_token` claim code. `to` and `amount` are hand-writable aliases so the URL stays short enough to type. The no-code version is the [payment link generator](/tools/payment-link).

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="Shieldz hosted checkout page reached from a one-URL payment link: amount due, a payment address, and a QR code, with the coin and network the buyer chose." width="760" height="520" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">What the payer sees. The URL you built becomes a hosted checkout that settles to your wallet.</figcaption>
</figure>

## The claim code

Every response carries a `manage_token`. That is your claim code. It resolves, with no login, to an agent-readable dashboard at `https://shieldz.cash/a/<manage_token>` (and a `.json` twin) where you can read paid versus pending and totals. When you want a full dashboard, the same token plus a wallet or email signature claims the account. Keep it: it is the only handle on a keyless link, and it is 192 bits of entropy, so no one can take over your links by knowing only your wallet address.

## Made for AI agents (and anything with fetch)

Because it is a plain URL, any tool can mint a payment method: an AI agent with only a `fetch`, a browser, a shell with `curl`, a link pasted into a chat. There is no client library to install and no protocol to speak. An agent can literally emit a URL and have accepted crypto.

If your agent runs the Model Context Protocol, the same tools are exposed there too: connect the [MCP server](/agents) or read the [agent HTTP reference](/agent). The GET form is just the no-client floor beneath it. For the wider design, see [how to use crypto payments for AI agents](/blog/how-to-use-crypto-payments-for-ai-agents) and the [crypto payment API](/blog/crypto-payment-api) overview.

## Non-custodial, screened, rate-limited

The URL is simple; the guarantees are not thin. Funds settle directly to the address you pass, Shieldz only ever holds a public key, so it can never freeze or seize them, and you can [verify that yourself](/verify). Every address is OFAC sanctions-screened and requests are rate-limited. Pricing is a [$0 platform fee](/pricing), you pay only network gas.

## FAQ

**Can I really accept crypto payments with just one URL?** Yes. A single `GET` to `/api/v1/tip-jars` or `/api/v1/links` with a wallet address returns a live payment link or tip jar. No account, API key, SDK, or MCP client.

**Do I need an API key or account?** No. The endpoints are keyless. The response includes a `manage_token` claim code you can use later to read status or claim a full dashboard.

**Where do the funds go?** Straight to the wallet address in the URL. Shieldz is non-custodial and never takes custody.

**Is a GET request safe for creating a payment method?** Yes. Tip jars are idempotent per wallet, so repeat requests return the same jar, and everything is OFAC-screened and rate-limited. Funds only ever move to the address you specified.

**Which coins and chains?** USDC and USDT on Base, Arbitrum, Optimism, Polygon and Ethereum. See [accept stablecoin payments](/blog/accept-stablecoin-payments) for the full lineup.

## Start with one URL

Swap in your wallet address and you have accepted crypto:

```
https://shieldz.cash/api/v1/tip-jars?to=0xYOURWALLET&title=Tips&amounts=1,5,20
```

No-code versions live at the [tip jar generator](/tools/tip-jar) and [payment link generator](/tools/payment-link). Building an agent? See the [agents overview](/agents) and the [HTTP reference](/agent).

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Can I really accept crypto payments with just one URL?","acceptedAnswer":{"@type":"Answer","text":"Yes. A single GET request to /api/v1/tip-jars or /api/v1/links with a wallet address returns a live payment link or tip jar. No account, API key, SDK, or MCP client is required."}},
{"@type":"Question","name":"Do I need an API key or account?","acceptedAnswer":{"@type":"Answer","text":"No. The Shieldz keyless endpoints need no API key or account. The response includes a manage_token claim code you can use later to read status or claim a full dashboard."}},
{"@type":"Question","name":"Where do the funds go?","acceptedAnswer":{"@type":"Answer","text":"Straight to the wallet address in the URL. Shieldz is non-custodial and never takes custody of the funds."}},
{"@type":"Question","name":"Is a GET request safe for creating a payment method?","acceptedAnswer":{"@type":"Answer","text":"Yes. Tip jars are idempotent per wallet so repeat requests return the same jar, every address is OFAC sanctions-screened, and requests are rate-limited. Funds only ever move to the address you specified."}},
{"@type":"Question","name":"Which coins and chains are supported?","acceptedAnswer":{"@type":"Answer","text":"USDC and USDT on Base, Arbitrum, Optimism, Polygon and Ethereum, settling to the wallet you pass."}}
]}
</script>
