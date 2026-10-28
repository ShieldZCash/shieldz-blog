---
title: "Self-Hosted Payment Gateways (2026): Open-Source Options for Cards and Crypto"
description: "Self-hosted payment gateways compared: Hyperswitch, Kill Bill, Lago, OwnPay and more. What you can self-host on cards, and the one rail with no processor."
pubDate: 2026-10-28
author: "Deniz Yanbollu"
tags: ["self-hosted payment gateway", "open source payment gateway", "hyperswitch", "kill bill", "pci dss", "payment orchestration"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/self-hosted-payment-gateway.png"
---

A self-hosted payment gateway is payment software you run on your own servers instead of renting from Stripe, PayPal or Adyen. The appeal is obvious: no platform fee, no lock-in, your data on your infrastructure. But there is one fact most "open-source Stripe alternative" lists skip, and it decides everything else: **on card payments, you can self-host the software around the payment, but not the payment itself.** Every self-hosted card gateway still hands the charge to a licensed processor, and that processor still takes its cut.

This guide compares the open-source projects people actually deploy in 2026 (Hyperswitch, Kill Bill, Lago, OwnPay, Payum and Paymenter), shows what each one really replaces, and explains what self-hosting does to your PCI DSS scope. It ends with the one payment rail where self-hosting goes all the way down: crypto. If crypto is what you are after, skip straight to our [self-hosted crypto payment gateway comparison](/blog/self-hosted-crypto-payment-gateway).

**Key takeaways**

- No open-source project lets you process cards without a processor or acquirer. Self-hosted card "gateways" are orchestration, billing or checkout layers on top of Stripe, Adyen, PayPal and similar.
- Self-hosting removes license and platform fees, but **not** the processor fee: a $50 card order through self-hosted Hyperswitch or Kill Bill routed to Stripe still costs $1.75.
- Storing card data on your own servers moves you from the short PCI DSS self-assessment (SAQ A) toward the full standard. Most teams keep cards in a processor's or an audited vault.
- Crypto is the exception: the network is public, there is no acquirer, and a self-hosted gateway can take the payment end to end.

## What "self-hosted" can and can't mean for card payments

Every card payment passes through the same chain: a checkout page, a routing layer that picks a processor, somewhere the card details are stored or tokenized, the processor and acquiring bank that actually move the money, and the card network (Visa, Mastercard) whose rules govern all of it. The first three layers are software. The last two are licensed financial institutions.

<figure style="margin:28px 0">
  <a href="/blog/charts/self-hosted-pg-layers.svg"><img src="/blog/charts/self-hosted-pg-layers.svg" alt="Which layers of a payment can be self-hosted. Card payments: checkout page yes with hosted fields to stay in SAQ A, routing yes with Hyperswitch, card vault yes but PCI DSS becomes yours, processor and acquirer no because it must be a licensed bank or processor, card network no. Crypto payments: checkout, routing and keys yes, no processor needed, and the blockchain is public and open to anyone." width="860" height="474" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">With cards you can self-host the software around the payment. With crypto you can self-host the payment itself.</figcaption>
</figure>

So when a project calls itself a "self-hosted payment gateway," read it as one of three things:

- **An orchestration layer** that routes each charge to one of several processors you have accounts with (Hyperswitch).
- **A billing system** that handles subscriptions and invoices and calls a processor to charge (Kill Bill, Lago, Paymenter).
- **A checkout or integration layer** that connects your site to providers through one interface (OwnPay, Payum).

All three are genuinely useful. None of them is a way to stop paying a processor.

## The open-source options, compared

GitHub stars and activity checked on 2026-10-28.

| Project | What it is | License | Stack | Charges cards via | GitHub stars |
|---|---|---|---|---|---|
| [Hyperswitch](https://github.com/juspay/hyperswitch) | Payment orchestration + card vault | Apache-2.0 | Rust | 100+ processors (Stripe, Adyen, Worldpay...) | 45.5k |
| [Kill Bill](https://github.com/killbill/killbill) | Subscription billing and payments | Apache-2.0 | Java | Plugins: Stripe, Adyen, Braintree, PayPal | 5.8k |
| [Lago](https://github.com/getlago/lago) | Metering and usage-based billing | AGPL-3.0 | Ruby/Go | Stripe, Adyen, GoCardless | 10.7k |
| [OwnPay](https://ownpay.org) | Self-hosted checkout gateway | AGPL-3.0 | PHP | Stripe, PayPal, Razorpay, Paystack, bKash and more | n/a |
| [Payum](https://github.com/Payum/Payum) | Payment library for PHP apps | MIT | PHP | Gateway packages (Stripe, PayPal and others) | 1.9k |
| [Paymenter](https://github.com/Paymenter/Paymenter) | Billing for hosting companies | MIT | PHP (Laravel) | Stripe, PayPal, Mollie | 2.8k |

**Hyperswitch** is the most ambitious project here and the closest thing to an open-source Stripe. Built by Juspay in Rust, it ships an app server that routes payments, a Control Center dashboard, a PCI-compliant card vault and SDKs for web and mobile. Its point is multi-processor routing: send each payment to whichever of your processors is cheapest or most likely to approve it, and keep the stored cards in your own vault so you can switch processors without losing them. You self-host it with a Docker setup script or Helm charts on Kubernetes, and Juspay also sells a managed cloud version. It is heavy: a full deployment runs many services, and it only makes sense once you have more than one processor to route between.

**Kill Bill** is the veteran, in production since 2010 and Apache-licensed. It manages catalogs, subscriptions, usage, invoices and payments behind a REST API, and charges customers through payment plugins for Stripe, Braintree, Adyen and PayPal. It stores the token your gateway returns, not the card number, which keeps card data out of your database. It is a strong fit for companies whose problem is subscription billing logic rather than the charge itself. There is also an official plugin that connects Kill Bill to Hyperswitch for routing.

**Lago** is modern usage-based billing: metering events, pricing plans, invoices. It deliberately keeps "metering and pricing independent from payment processing" and connects to Stripe, Adyen or GoCardless to collect. Self-hosting is a `docker compose up`. Note the AGPL-3.0 license if you plan to modify and offer it as a service.

**OwnPay** is the closest match to what most people imagine when they search for a self-hosted payment gateway: a PHP app you install on your own server that gives you one checkout and connects to around ten providers, including regional ones like bKash, Nagad, Paystack, Flutterwave and M-Pesa. It takes no platform cut. The providers behind it still charge their own fees.

**Payum** is a library, not an app. If you are building a PHP application and want one consistent API over many payment gateways, Payum gives you that, with a long track record since 2012. **Paymenter** is billing software for hosting companies (an open-source take on WHMCS, with a WHMCS import tool) that collects through Stripe, PayPal and Mollie.

## The fee question: self-hosting doesn't remove the processor's cut

The most common reason to look for a self-hosted payment gateway is cost. Here is what a $50 order costs through each option at US list rates.

<figure style="margin:28px 0">
  <a href="/blog/charts/self-hosted-pg-fee-per-order.svg"><img src="/blog/charts/self-hosted-pg-fee-per-order.svg" alt="Payment fee on a 50 dollar order at US list rates: OwnPay routed to PayPal 2.24 dollars, Stripe Checkout 1.75 dollars, self-hosted Hyperswitch routed to Stripe 1.75 dollars, self-hosted Kill Bill routed to Stripe 1.75 dollars, BTCPay Server self-hosted crypto 0 dollars plus network fee, Shieldz 0 dollars plus network fee." width="860" height="538" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Exact list-rate math: Stripe 2.9% + 30¢, PayPal 3.49% + 49¢. Self-hosting the software leaves the processor's fee untouched.</figcaption>
</figure>

Self-hosting saves you the fees the software vendor would charge: a SaaS orchestration subscription, a billing platform's percentage of revenue, a per-invoice charge. Those can be real money at scale, and Hyperswitch-style routing can also lower your processing cost by sending payments to a cheaper acquirer or retrying a decline elsewhere. But the floor is the processor's fee, and on cards that floor is never zero. Interchange alone, paid to the card-issuing bank, sits underneath every processor's price.

On top of the processor fee, self-hosting adds your own costs: servers, monitoring, upgrades, and someone on call when checkout breaks during a sale.

## PCI DSS: what self-hosting does to your compliance

PCI DSS is the card industry's security standard, and how much of it applies to you depends on whether card data touches your systems.

- **Card data never touches your servers** (a redirect to the processor's page, or the processor's hosted fields in an iframe): you usually qualify for **SAQ A**, the shortest self-assessment.
- **Your servers store or process card numbers** (for example, a self-hosted card vault): you are in scope for the full standard, with network segmentation, logging, vulnerability scans, penetration tests and, at volume, an external assessor.

This is why Kill Bill stores processor tokens rather than card numbers, and why teams running Hyperswitch's vault treat it as a dedicated, locked-down service. Open-source code helps you see exactly what is stored and how it is encrypted, but it doesn't make your deployment compliant. Compliance belongs to whoever runs the server. If you want a self-hosted stack without a compliance project, keep raw card data out of it: use your processor's hosted fields and store only tokens.

## The rail you can self-host end to end: crypto

Crypto payments have no acquirer and no card network. The blockchain is public infrastructure anyone can read and write, so a self-hosted crypto gateway can do the whole job: derive a fresh address from your own wallet, watch the chain for the payment, and notify your store when it confirms. The money moves from the buyer's wallet straight into yours. There is no processor fee because there is no processor, and no card data, so card-data PCI DSS doesn't apply.

That is why every truly end-to-end self-hosted payment processor is a crypto one. The mature options are [BTCPay Server](https://github.com/btcpayserver/btcpayserver) (MIT, about 7.9k stars, Bitcoin-first), [Bitcart](https://github.com/bitcart/bitcart) (MIT, many coins including Monero) and SHKeeper (GPL-3.0), plus a few multi-chain stacks. We compare them, explain the xpub wallet model and walk through a full setup in the [best self-hosted crypto payment gateways](/blog/self-hosted-crypto-payment-gateway) guide, and license and GitHub activity for every open-source option are in [open-source crypto payment gateways compared](/blog/open-source-crypto-payment-gateways).

If what you wanted from "self-hosted" was no processor fee and no one holding your money, but you would rather not run a server, a hosted non-custodial gateway gets you the same two properties. [Shieldz](https://shieldz.cash) charges a $0 platform fee and settles every payment straight to your own wallet. You paste a wallet address and get a checkout or [payment link](https://shieldz.cash/tools/payment-link), with nothing to host. You can [verify the non-custodial claim](https://shieldz.cash/verify) yourself.

## How to choose

- **You have several card processors and want to route between them or own your card vault:** Hyperswitch.
- **Your hard problem is subscription and invoicing logic:** Kill Bill, or Lago for usage-based pricing. Both collect through your existing processor.
- **You want one self-hosted checkout over several regional providers:** OwnPay.
- **You are writing a PHP app and want one payment API:** Payum.
- **You run a hosting company:** Paymenter.
- **You want to take payments with no processor at all:** a self-hosted crypto gateway such as BTCPay Server, or a hosted non-custodial one if you don't want the server.

Many businesses end up with two of these: cards through a processor (with or without an orchestration layer), and crypto next to it at no fee. Adding crypto alongside cards is covered in [how to accept crypto payments](/blog/how-to-accept-crypto-payments), and for subscription businesses specifically, in [crypto payments for SaaS](/blog/crypto-payments-for-saas).

## FAQ

**Is there a self-hosted payment gateway that processes credit cards without Stripe or a bank?**
No. Moving card payments requires a licensed processor and acquiring bank under the card networks' rules. Self-hosted projects like Hyperswitch, Kill Bill and OwnPay connect to processors such as Stripe, Adyen or PayPal; they don't replace them.

**What is the best open-source self-hosted payment gateway?**
It depends on the job. Hyperswitch is the most complete for card payment orchestration and vaulting, Kill Bill is the most proven for subscription billing, and OwnPay is the simplest self-hosted checkout across several providers. For payments with no processor at all, BTCPay Server is the reference self-hosted crypto processor.

**Does self-hosting a payment gateway save on fees?**
It removes the software vendor's fees, and routing can lower processing costs, but the card processor's fee remains. A $50 order through self-hosted Hyperswitch or Kill Bill routed to Stripe still costs $1.75 at list rates. Only crypto payments avoid a processor fee entirely.

**Do I need PCI DSS compliance if I self-host a payment gateway?**
Yes, and the scope depends on card data. If card details only ever go to your processor's hosted page or fields, you can usually use the short SAQ A. If your self-hosted system stores or processes card numbers, the full PCI DSS standard applies to it.

**Can I self-host a crypto payment gateway?**
Yes, end to end. BTCPay Server, Bitcart and SHKeeper are open-source and run on your own server, with payments going straight to your wallet. A hosted non-custodial gateway like Shieldz gives the same $0 platform fee and direct-to-wallet settlement without the server.

## Take payments with no processor in the middle

You can keep your card stack exactly as it is and add a rail with no processor fee next to it. Create a non-custodial crypto checkout in seconds with the [payment link generator](https://shieldz.cash/tools/payment-link), read the [docs](/docs) for the API and webhooks, or compare the field in the [best free crypto payment gateways](/blog/best-free-crypto-payment-gateways-2026).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is there a self-hosted payment gateway that processes credit cards without Stripe or a bank?", "acceptedAnswer": { "@type": "Answer", "text": "No. Moving card payments requires a licensed processor and acquiring bank under the card networks' rules. Self-hosted projects like Hyperswitch, Kill Bill and OwnPay connect to processors such as Stripe, Adyen or PayPal; they don't replace them." } },
    { "@type": "Question", "name": "What is the best open-source self-hosted payment gateway?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the job. Hyperswitch is the most complete for card payment orchestration and vaulting, Kill Bill is the most proven for subscription billing, and OwnPay is the simplest self-hosted checkout across several providers. For payments with no processor at all, BTCPay Server is the reference self-hosted crypto processor." } },
    { "@type": "Question", "name": "Does self-hosting a payment gateway save on fees?", "acceptedAnswer": { "@type": "Answer", "text": "It removes the software vendor's fees, and routing can lower processing costs, but the card processor's fee remains. A $50 order through self-hosted Hyperswitch or Kill Bill routed to Stripe still costs $1.75 at list rates. Only crypto payments avoid a processor fee entirely." } },
    { "@type": "Question", "name": "Do I need PCI DSS compliance if I self-host a payment gateway?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, and the scope depends on card data. If card details only go to your processor's hosted page or fields, you can usually use the short SAQ A. If your self-hosted system stores or processes card numbers, the full PCI DSS standard applies." } },
    { "@type": "Question", "name": "Can I self-host a crypto payment gateway?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, end to end. BTCPay Server, Bitcart and SHKeeper are open-source and run on your own server, with payments going straight to your wallet. A hosted non-custodial gateway like Shieldz gives the same $0 platform fee and direct-to-wallet settlement without the server." } }
  ]
}
</script>
