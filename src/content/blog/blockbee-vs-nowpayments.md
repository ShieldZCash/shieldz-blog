---
title: "BlockBee vs NOWPayments (2026): Fees, Custody and Subscriptions for SaaS"
description: "BlockBee vs NOWPayments compared for SaaS billing: fees, custody defaults, KYC, coins and how each handles recurring crypto subscriptions."
pubDate: 2026-10-28
author: "Deniz Yanbollu"
tags: ["blockbee vs nowpayments", "nowpayments", "blockbee", "crypto subscriptions", "saas billing", "comparison"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/blockbee-vs-nowpayments.png"
---

BlockBee vs NOWPayments is one of the most common head-to-heads for anyone adding crypto billing to a SaaS product. Both are established gateways that charge about 1%, both have APIs, payment links and webhooks, and both offer recurring "subscriptions." The differences are in how those subscriptions actually renew, who holds the money by default, and what you need to verify to get paid out.

A note on who is writing: we build [Shieldz](https://shieldz.cash), a $0-fee non-custodial gateway, and we include it at the end. Everything about BlockBee and NOWPayments below links to their own pages, checked on 2026-10-28, and both appear in our open [dataset of crypto payment gateways](/blog/custody-gap-crypto-payment-gateways).

## BlockBee vs NOWPayments at a glance

| | BlockBee | NOWPayments |
|---|---|---|
| **Platform fee** | [1% deposits](https://blockbee.io/fees/), down to 0.25% at $25M+/month | [1% service fee](https://nowpayments.io/pricing) on the pricing page |
| **Network fees** | On top | On top |
| **Coins** | About 70 | 350+ |
| **Custody model** | Payment forwarding: each payment goes to a BlockBee address and is forwarded to your wallet | Custody balance or payouts to your wallet; reviews report custody is on by default for new accounts |
| **KYC to start** | None | Not to start; required for fiat payouts and when AML checks trigger |
| **Fiat payouts** | No | Yes, after verification |
| **Subscriptions** | Plans with reminders; customer renews manually | Email subscriptions from a plan API; optional auto-renew via a ChangeNOW Pro balance |
| **Payment links** | Yes, from the dashboard | Yes |
| **Roots** | Formerly CryptAPI (2018) | Founded 2019 |

Older NOWPayments material quotes 0.5% for single-currency payments plus 0.5% when coins are converted. The current [pricing page](https://nowpayments.io/pricing) lists a flat 1% service fee, so budget for 1%.

## Fees: the same at SaaS volumes

At the volumes most SaaS products run, the two charge the same list rate. BlockBee's discounts are real but start far up the volume curve: the 0.25% rate needs $25 million a month.

<figure style="margin:28px 0">
  <a href="/blog/charts/blockbee-vs-nowpayments-yearly-fee.svg"><img src="/blog/charts/blockbee-vs-nowpayments-yearly-fee.svg" alt="Yearly platform fee on 10,000 dollars a month of crypto revenue at list rates: BlockBee 1,200 dollars at 1 percent, NOWPayments 1,200 dollars at 1 percent, Shieldz 0 dollars." width="860" height="352" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">At $10,000 a month, both cost $1,200 a year in platform fees before network fees. NOWPayments adds conversion and fiat payout fees if you use them.</figcaption>
</figure>

Where the bills diverge is everything around the fee. On NOWPayments, auto-converting coins and fiat payouts cost extra. On BlockBee there is no fiat payout to pay for, because there is no fiat payout: you receive crypto and handle conversion yourself.

## Subscriptions: the real difference for SaaS billing

Crypto has no card-on-file. Nobody can pull money from a wallet later, so every "crypto subscription" is really a way of asking the customer to pay again on schedule. The two gateways ask differently.

**BlockBee Subscriptions** let you define subscription options, create a subscription per user, and get a checkout URL back. BlockBee hosts the payment page and sends the customer reminders before expiry. Its docs are explicit that renewal is manual: "the customer will be notified before the subscription expires, so they can manually renew it." Your app listens for two webhooks, `renew` when a payment extends the subscription and `expired` when it lapses, and grants or revokes access.

**NOWPayments** offers two modes. Standard [email subscriptions](https://nowpayments.io/blog/recurring-payments-api) work from a plan you create over the API (price, interval in days, optional grace period of up to five days). Each subscriber gets a payment link by email, and a new one a day before the period ends. The customer still pays each renewal. The second mode is auto-renew, where the customer authorizes renewals that are charged from their ChangeNOW Pro balance. That gets closer to a card subscription, but only for customers who hold a balance there.

So for SaaS billing:

- **Choose NOWPayments** if you want the gateway to own plan management, emails and grace periods, and you value an auto-renew option for some customers, plus fiat payouts.
- **Choose BlockBee** if you want simpler payment forwarding with no KYC, are happy for renewals to be customer-initiated, and want your own app to stay the source of truth for plans.

Either way, build your access logic around the webhook, not the redirect, and keep a grace state for renewals that arrive late, the same way you would handle a failed card retry. Our [crypto payments for SaaS](/blog/crypto-payments-for-saas) guide walks through that pattern.

## Custody and KYC: check the defaults

Both are usually described as non-custodial, but neither is purely wallet-to-wallet. BlockBee generates an address per payment and forwards what arrives to your wallet, so the funds pass through an address it controls for the time the forward takes. NOWPayments supports payouts to your own wallet, but it also runs a custody balance, and reviews report that custody has been switched on by default for new accounts since mid-2026. If direct settlement matters to you, set a payout wallet and check the custody setting in your dashboard before you go live.

On KYC, BlockBee asks for none. NOWPayments lets you start without it, but requires verification for fiat payouts and when its AML monitoring flags an account. If your customers or your own business are in a region payment companies treat as higher risk, read [do crypto payment gateways require KYC](/blog/do-crypto-payment-gateways-require-kyc) before choosing.

## The $0-fee option: Shieldz

Shieldz is a third route, with different trade-offs. It charges a **$0 platform fee** and every payment settles straight into your own wallet. Shieldz never holds a balance, and you can [verify that](https://shieldz.cash/verify). There is no KYC to start.

What it doesn't have is a subscription plan engine. For monthly SaaS billing you create one invoice per period through the [API](/blog/crypto-payment-api), send the link, and extend access on the signed `invoice.paid` webhook. It also doesn't pay out in fiat. If you need either of those, BlockBee or NOWPayments fits better. If you already run plans in your own billing system and want to stop paying 1% on crypto revenue, Shieldz removes that line entirely. On $10,000 a month, that is $1,200 a year.

For the wider field, see the [best free crypto payment gateways](/blog/best-free-crypto-payment-gateways-2026), or our three-way [NOWPayments vs BTCPay Server vs CoinGate](/blog/nowpayments-vs-btcpay-vs-coingate) comparison.

## FAQ

**Is BlockBee or NOWPayments better for SaaS billing?**
NOWPayments is better if you want the gateway to manage subscription plans, emails and grace periods, with an optional auto-renew and fiat payouts. BlockBee is simpler and needs no KYC, but subscriptions renew only when the customer pays again after a reminder.

**What are BlockBee's and NOWPayments' fees?**
Both list 1% at normal volumes, plus blockchain network fees. BlockBee drops to 0.25% only above $25 million a month. NOWPayments adds fees for coin conversion and fiat payouts.

**Can either charge a crypto subscription automatically?**
BlockBee can't; customers renew manually after a reminder. NOWPayments can auto-renew only for customers who authorize it from a ChangeNOW Pro balance. Otherwise its email subscriptions also rely on the customer paying each period.

**Are BlockBee and NOWPayments non-custodial?**
Mostly, with caveats. BlockBee forwards each payment from an address it generates to your wallet. NOWPayments can pay out to your wallet but also offers a custody balance, reportedly on by default for new accounts. Check your settings.

**Is there a crypto payment gateway with no fee for SaaS?**
Shieldz charges a $0 platform fee and settles directly to your wallet. You bill each period with an invoice and a webhook instead of a built-in plan engine.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is BlockBee or NOWPayments better for SaaS billing?", "acceptedAnswer": { "@type": "Answer", "text": "NOWPayments is better if you want the gateway to manage subscription plans, emails and grace periods, with an optional auto-renew and fiat payouts. BlockBee is simpler and needs no KYC, but subscriptions renew only when the customer pays again after a reminder." } },
    { "@type": "Question", "name": "What are BlockBee's and NOWPayments' fees?", "acceptedAnswer": { "@type": "Answer", "text": "Both list 1% at normal volumes, plus blockchain network fees. BlockBee drops to 0.25% only above $25 million a month. NOWPayments adds fees for coin conversion and fiat payouts." } },
    { "@type": "Question", "name": "Can either charge a crypto subscription automatically?", "acceptedAnswer": { "@type": "Answer", "text": "BlockBee can't; customers renew manually after a reminder. NOWPayments can auto-renew only for customers who authorize it from a ChangeNOW Pro balance. Otherwise its email subscriptions also rely on the customer paying each period." } },
    { "@type": "Question", "name": "Are BlockBee and NOWPayments non-custodial?", "acceptedAnswer": { "@type": "Answer", "text": "Mostly, with caveats. BlockBee forwards each payment from an address it generates to your wallet. NOWPayments can pay out to your wallet but also offers a custody balance, reportedly on by default for new accounts." } },
    { "@type": "Question", "name": "Is there a crypto payment gateway with no fee for SaaS?", "acceptedAnswer": { "@type": "Answer", "text": "Shieldz charges a $0 platform fee and settles directly to your wallet. You bill each period with an invoice and a webhook instead of a built-in plan engine." } }
  ]
}
</script>
