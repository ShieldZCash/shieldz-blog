---
title: "Crypto payments for Minecraft servers: ranks, crates, and slots"
description: "Accept crypto on a Minecraft server store. Sell ranks, crates, and slots via API. Hosted checkout, signed webhooks, $0 platform fee, no KYC."
pubDate: 2026-09-08
author: "Deniz Yanbollu"
tags: ["minecraft","game-servers","crypto","payments","api"]
eyebrow: "Guide"
lang: "en"
---

Minecraft server networks that want **crypto payments for ranks, crates, and slots** usually get a card processor or a custodial crypto balance. Chargebacks on a digital rank, a percentage on every crate key, and an account review when a launch weekend spikes. You can skip that path. Shieldz is a non-custodial checkout: the player pays on-chain, funds settle to the wallet you configured, and your store backend learns about it from a signed webhook. [$0 platform fee](/pricing), [no KYC to start](/no-kyc).

This sits next to the [crypto payment API quickstart](/blog/crypto-payment-api) and [how to accept crypto payments](/blog/how-to-accept-crypto-payments). Use those for raw HTTP. Use this post for the Paper / Spigot / Purpur / Velocity shop loop: catalog SKU, invoice, hosted checkout, webhook, grant command.

## The actual problem on a Minecraft store

A typical network already has the hard parts: LuckPerms groups, a crate plugin, a whitelist, a webstore, maybe a Discord bot that opens tickets for unbans. Payment is the part that leaks money and time.

Card rails price a $9.99 VIP month as a percentage plus a fixed fee. Across a few thousand ranks a year that cut is visible in the panel. Chargebacks arrive after `lp user <uuid> parent addtemp vip 30d` has already run. Some processors treat game-server stores as high risk and freeze the balance in the same week you advertised a crate sale on YouTube.

Custodial crypto gateways fix the card brand problem and keep a new one: they hold the coins, they take a cut, and they can stall a withdrawal. For a network that already runs its own boxes, that extra balance is not an advantage. You already operate infrastructure. You do not need a second custodian for $10 ranks.

A non-custodial model removes the middle balance. You register a public receive key (an address, an xpub, or a Zcash viewing key). Shieldz derives a fresh pay target per invoice and watches the chain. It cannot spend. Verify that claim on [/verify](/verify).

<figure style="margin:28px 0">
  <a href="/blog/charts/digital-sale-take.svg"><img src="/blog/charts/digital-sale-take.svg" alt="Illustrative take rate on a digital sale: card and custodial crypto cuts versus $0 Shieldz platform fee plus network gas" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Ranks and crate keys are digital catalog items. Shieldz platform fee is $0. The buyer pays network gas.</figcaption>
</figure>

On-chain confirmations do not reverse the way cards do. If you refund, you send crypto back yourself and revoke the group. That is a policy, not a network clawback.

<figure style="margin:28px 0">
  <a href="/blog/charts/digital-chargebacks.svg"><img src="/blog/charts/digital-chargebacks.svg" alt="Chargebacks exist on card rails for digital goods and do not exist on a confirmed on-chain payment" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">A confirmed on-chain payment does not have a card-style chargeback. Plan refunds as a staff command plus an on-chain send.</figcaption>
</figure>

## What you actually sell on a Minecraft network

Keep the catalog boring and explicit. The invoice does not care which plugin fulfills it. Your webhook handler does.

- **Ranks and timed groups.** VIP, MVP, media, helper-trial. LuckPerms temporary parents map cleanly to a 7-day or 30-day invoice.
- **Crate keys and cosmetic kits.** One-shot SKUs. Grant on paid, do not auto-renew.
- **Reserved slots and queue skip.** Useful on survival and minigames networks that hit the player cap on Friday nights.
- **Unban and unmute appeals.** Fixed-price admin products. Put the ticket id in metadata so staff can see the payment next to the case.
- **Extra claims, homes, or auction slots.** Anything your plugin already exposes as a permission node.
- **Network-wide versus per-server SKUs.** Put `server: survival-1` or `server: network` in metadata so the grant targets the right proxy backend.

Do not invent an in-game coin inside Shieldz. If you run an economy plugin, that ledger stays on the box. Shieldz only tells you that USD-denominated invoice `inv_...` moved from `pending` to `paid`.

## The server loop

1. The player picks a SKU on the webstore (or a Discord button that hits the same backend).
2. Your backend `POST /api/v1/invoices` with `amount_usd_cents`, a memo, an `idempotency_key`, and metadata for `uuid`, `username`, `sku`, and `server`.
3. You send the player to `pay_url`. That is the hosted checkout: coin picker, QR, wallet deep-link.
4. On confirm, Shieldz POSTs `invoice.paid` to your webhook. You verify `X-Shieldz-Signature`, then grant once.
5. Settlement lands in the token and chain you configured. If the player pays a different supported coin, swap-settle routes through NEAR, Chainflip, or Relay via the LeoKit aggregator. Shieldz takes no affiliate cut on that swap.

Amount bounds on the API today: $1.00 to $100,000.00 per invoice (`amount_usd_cents` 100 to 10,000,000). Default expiry is 30 minutes (45 minutes when ZEC is in play). A crate impulse-buy should stay inside that window. A "think about VIP" page should mint the invoice when they click Pay, not when they land on the listing.

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="Shieldz hosted checkout showing coin picker, QR code, and pay amount" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Hosted checkout is the player UI. The Paper process never handles a private key or an on-chain transfer.</figcaption>
</figure>

## Step-by-step: store VPS to grant command

### 1. Create a merchant and a receive target

Sign in at the [dashboard](https://merchant.shieldz.cash/signup). Add the public key or address for the chain you want to settle on. Prefer USDC or USDT if rank prices are in dollars. That keeps books aligned with the storefront. See [accept stablecoin payments](/blog/accept-stablecoin-payments).

Use a wallet the network already treats as treasury, not a personal hot wallet that also holds staff salaries. Shieldz never holds that key. Compromise of the API key can mint invoices and read status. It cannot move the treasury.

### 2. Mint an API key and a webhook secret

Dashboard → Developers. `sk_live_…` moves real funds. `sk_test_…` is for staging. The raw key is shown once. Put it in the store VPS environment, not in a public plugin jar, not in a GitHub gist, not in a Discord paste.

Set `PUT /api/v1/webhook_endpoint` to an HTTPS URL you control. You get a `whsec_…` signing secret. Rotate with `{rotate:true}` if it leaks. The previous secret stays valid for 24 hours.

### 3. Create the invoice from the shop backend

```bash
curl https://shieldz.cash/api/v1/invoices \
  -H "Authorization: Bearer sk_live_…" \
  -H "Content-Type: application/json" \
  -d '{
    "amount_usd_cents": 999,
    "memo": "VIP 30 days",
    "idempotency_key": "mc_9f3a2c_vip30_2026_09",
    "metadata": {
      "uuid": "9f3a2c8e-4b11-4d20-8a77-0c1d2e3f4a5b",
      "username": "NotchFan",
      "sku": "vip_30d",
      "server": "survival-1"
    }
  }'
```

Always key the player by UUID, not by current username. Usernames change. LuckPerms and most crate plugins accept UUID.

`idempotency_key` should be stable for one intended purchase (`uuid + sku + period`). If the storefront retries because the player double-clicked Buy, you get the same invoice back with `idempotent_replay: true` instead of two VIP charges.

Open `pay_url` in the browser. Official [SDKs](/sdks) cover Node, Python, Rust, and PHP. Most custom Minecraft shops are already Node or PHP.

### 4. Verify the webhook, then grant once

Header: `X-Shieldz-Signature: t=<unix>,v1=<hex>`. HMAC-SHA256 over `` `${t}.${rawBody}` `` with the `whsec_` secret. Use the raw body, not a re-serialized JSON object. Deliveries are at-least-once. Retries follow `1m → 5m → 25m → 2h → 12h` (5 attempts), then dead until you retry by hand.

Fulfilment key: `invoice.id` plus `uuid` plus `sku`. Store that tuple before you run RCON. If the same delivery arrives again, return 200 and do nothing.

Grant examples (your plugin, not Shieldz):

- LuckPerms timed rank: `lp user <uuid> parent addtemp vip 30d`
- LuckPerms permanent cosmetic: `lp user <uuid> parent add donor`
- Crate keys: `crates give <uuid> legendary 5`
- Reserved slot: write the UUID into the allow list your proxy already reads
- Unban: remove the ban entry and close the ticket id from metadata

Talk to the live server over RCON, plugin messaging, or a small queue worker. Do not block the webhook HTTP handler on a lagged main thread. Acknowledge 200 after signature verify and enqueue the grant. If RCON is down, keep the delivery id and retry the grant from your own queue. Shieldz will retry the webhook too. Your idempotency table is what prevents a double crate drop.

Full signature snippet: [crypto payment API](/blog/crypto-payment-api). Broader pattern: [how to verify crypto payments](/blog/how-to-verify-crypto-payments).

### 5. Recurring VIP without storing cards

On-chain checkout is pull-less. There is no mandate you can fire in 30 days without the player sending again.

Operational pattern that matches how networks already work:

- On first purchase, grant `vip` for 30 days and store `expires_at` next to `uuid`.
- Seven days before expiry, mint a new invoice and send `pay_url` (in-game mail if you have it, otherwise Discord DM or email from `customer_email`).
- On `invoice.paid`, extend the parent. On expiry with no payment, `lp user <uuid> parent remove vip` or let the temporary parent fall off on its own.

A [payment link](/tools/payment-link) works for one-off unban appeals and staff-posted crate sales where you do not want to stand up metadata plumbing the same day.

### 6. Test mode before the first real crate sale

Use `sk_test_…` against staging. Confirm four things before you announce in Discord:

1. Invoice creates and `pay_url` loads.
2. Signature verify rejects a flipped bit in the body.
3. A simulated or test payment reaches `invoice.paid` and runs the grant exactly once.
4. A replay of the same webhook does not stack a second 30-day parent.

Then switch the store to `sk_live_…` and a live receive address.

## Architecture notes that save a 3 a.m. page

**Where the secret lives.** Store VPS or a small worker next to the webstore. Not inside a public Spigot jar. Players can decompile a plugin. An API key in that jar is a support incident.

**Proxy versus backend.** Velocity or Bungee does not need to know about Shieldz. Grant on the lobby or on the survival backend that owns the permission plugin. Metadata `server` is how the worker chooses the RCON target.

**Offline players.** LuckPerms can mutate a UUID that is offline. Crate plugins vary. If a plugin requires an online player, queue the grant and apply it on next login. The invoice is already `paid`. Do not wait to acknowledge the webhook until they log in.

**Username changes.** Display the current name on the storefront. Persist UUID. If you only store `NotchFan`, the next webhook after a name change grants the wrong account or none.

**Partial payments and expiry.** If the invoice expires unpaid, mint a new one. Do not try to stitch a late on-chain send onto an expired public id unless your ops process for unattributed deposits is documented. The dashboard lists unattributed deposits for staff, not for the player storefront.

**Staff refunds.** There is no chargeback button. Send the settlement asset back from treasury and revoke the node. Write the refund tx next to the invoice id so the next admin does not re-grant.

## What this is not

Shieldz is checkout and settlement. It is not a Tebex replacement with a built-in Bukkit listener. It is not an economy plugin, not a crate plugin, and not a fiat payout rail. You keep the grant path you already trust.

Microsoft and Mojang storefront rules still apply to those storefronts. This post is for infrastructure you operate: the dedicated box, the panel, the webshop, the Discord ticket tool.

Same invoice object works on nearby dedicated-server shops (Rust, ARK, FiveM, GMod, Terraria). The grant command changes. The webhook does not. This article stays on Minecraft because that is where rank/crate/slot catalogs are most standardized.

If the storefront is a Discord server rather than a webshop, skip the API entirely: [sell Discord roles for crypto](/blog/sell-discord-roles-for-crypto) with a bot that lists products and grants roles automatically.

## What not to promise on the store page

- Shieldz does not hold a merchant balance and cannot pay you out in fiat. See [crypto payment gateways and fiat settlement](/blog/crypto-payment-gateways-fiat-settlement).
- Gas is paid by the buyer (and by the swap route when they pay a non-settlement asset). Do not market "free on-chain transfers".
- NEAR and SOL are not live source chains for swap-settle right now. Do not list them as pay-in options.
- Checkout deep-links trigger a token `transfer()`. They never ask for `approve` / allowance.
- Do not tell players the rank is instant before the webhook has been verified. "Usually under a minute after the transaction confirms" is honest. "Instant regardless of chain congestion" is not.

Keyless one-off links for tips or unban appeals: [accept crypto payments with one URL](/blog/accept-crypto-payments-one-url). Broader product frame: [what is a crypto payment gateway](/blog/what-is-a-crypto-payment-gateway). Custody frame: [non-custodial crypto payment gateway](/blog/non-custodial-crypto-payment-gateway).

## FAQ

**Can I sell Minecraft ranks and crates for crypto?**
Yes, if you control fulfillment. Create one invoice per SKU, send `pay_url`, grant on a verified `invoice.paid` webhook. Deduplicate on invoice id plus UUID plus SKU.

**Do I need KYC to start?**
No. Signup is wallet, Google, or Telegram. Read [do crypto payment gateways require KYC](/blog/do-crypto-payment-gateways-require-kyc) and [accept crypto payments without KYC](/blog/accept-crypto-payments-without-kyc).

**Where does the money go?**
To the address or derived child address from the public key you registered. Shieldz never holds keys.

**What if the player pays a different coin than I settle in?**
Swap-settle quotes through NEAR, Chainflip, or Relay (LeoKit). You still receive the settlement asset you configured, with no Shieldz take rate on the swap.

**Can Shieldz charge the player again next month by itself?**
No. There is no on-chain card-style mandate. Mint a new invoice for the next period and send the link.

## Start

[Create a merchant](https://merchant.shieldz.cash/signup), add a receive address, mint a test key, then follow the [API reference](/docs). If the shop is WordPress rather than a custom panel, use the [WooCommerce plugin](/blog/accept-crypto-payments-woocommerce). File downloads instead of live ranks: [sell digital downloads for crypto](/blog/sell-digital-downloads-for-crypto-edd).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I sell Minecraft ranks and crates for crypto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, if you control fulfillment. Create one invoice per SKU, send the hosted checkout URL, and grant the rank or crate keys when you verify an invoice.paid webhook. Deduplicate on invoice id, UUID, and SKU."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need KYC to start accepting crypto on a Minecraft server store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Shieldz signup is wallet, Google, or Telegram. There is no KYC gate to start."
      }
    },
    {
      "@type": "Question",
      "name": "Where do Minecraft server crypto payments settle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Funds settle to the merchant wallet derived from the public key or address you registered. Shieldz is non-custodial and does not hold a balance."
      }
    },
    {
      "@type": "Question",
      "name": "What if a player pays a different coin than the settlement asset?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Swap-settle routes through NEAR, Chainflip, or Relay via LeoKit. You receive the configured settlement asset. Shieldz takes no affiliate fee on the swap."
      }
    },
    {
      "@type": "Question",
      "name": "Can Shieldz automatically charge a VIP rank again next month?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. On-chain checkout is pull-less. Create a new invoice for the next period and send the pay URL when the current rank is near expiry."
      }
    }
  ]
}
</script>

