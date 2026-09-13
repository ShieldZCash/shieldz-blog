---
title: "Non-Custodial Crypto Payment Gateway: A Case Study in AML Holds"
description: "A non-custodial crypto payment gateway settles straight to your wallet, so there is no account to freeze and no AML hold. Here is why that matters."
pubDate: 2026-07-13
author: "Deniz Yanbollu"
tags: ["non-custodial", "crypto payment gateway", "aml", "kyc", "payments"]
eyebrow: "Case study"
image: "https://shieldz.cash/blog/og/non-custodial-crypto-payment-gateway.png"
---

A non-custodial crypto payment gateway is the difference between getting paid and watching your money sit in someone else's account marked "under review." Most hosted crypto processors take your customer's payment into their own wallet first, screen it, then pay you out later. That middle step is where AML friction lives: holds, verification requests, and the occasional frozen account.

This is a short case study on that friction. Where it shows up across custodial providers, and why a non-custodial model removes it by design rather than by promise.

## Where AML friction actually happens

Anti-money-laundering rules are real, and every serious payment company has to follow them. The only question is where the compliance burden lands. On a custodial gateway, it lands on your money. Because the provider holds your funds between the sale and the payout, they are the party on the hook, so they screen, they delay, and sometimes they hold. A large or unusual payment can trigger a manual review. A brand new account with sudden volume looks exactly like the pattern their risk models are trained to flag. Meanwhile, your payout waits.

<figure style="margin:28px 0">
  <a href="/blog/img/custody-share.svg"><img src="/blog/img/custody-share.svg" alt="Bar chart: custodial gateways and escrow/hold models hold 100 percent of a payment before it reaches you, so it can be frozen or AML-reviewed. BTCPay Server and Shieldz are non-custodial at 0 percent, funds settle straight to your wallet." width="760" height="470" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The whole argument in one picture: if 100% of a payment passes through the provider's account, 100% of it can be held.</figcaption>
</figure>

## Three ways a custodial gateway stalls a payout

**1. The verification wall.** Many hosted processors require business KYC before your first withdrawal. You made the sale, but you cannot touch the money until you upload documents and wait for approval.

**2. The AML review hold.** A payment gets flagged and the funds are frozen pending review, for days, sometimes weeks. You did nothing wrong. The pattern did.

**3. The account suspension.** If your category is "high risk," and crypto itself often is, the account can be closed with a balance still inside. It is the same story merchants tell about Stripe and PayPal freezes, just repeated one layer down with a crypto processor in the middle.

None of this is the provider being malicious. It is the unavoidable consequence of a single design choice: they hold your money, so they carry the risk, so they gate your access to it.

## The non-custodial difference

A non-custodial crypto payment gateway never touches the funds. The customer pays, and the payment settles directly to the wallet address you control, on-chain, in the same transaction. There is no processor balance, so there is no account to freeze, no payout schedule to wait on, and no AML hold on your money.

Compliance still exists, it just changes shape. Sanctioned-address screening runs on the counterparty, not on your payout. Shieldz, for example, screens paying addresses against the OFAC list, but it does that without ever holding your money in a reviewable balance. The screen looks at who is paying, not at whether to release what is already yours.

Shieldz works exactly this way. You give a wallet address, you get a payment link or a hosted checkout, and funds land in your wallet at settlement, with no signup and a 0% platform fee. BTCPay Server is non-custodial too, if you are willing to run your own server; we compare that route in the [self-hosted crypto payment gateway](/blog/self-hosted-crypto-payment-gateway) guide. The usual trade is control for convenience, and a hosted non-custodial gateway is the rare case that gives you both.

## FAQ

**Does non-custodial mean no compliance at all?**
No. Shieldz screens for OFAC-sanctioned addresses. The difference is that the screen runs on the counterparty address, not by holding your money in a balance it can review and freeze.

**Can a non-custodial gateway freeze my funds?**
It cannot, because it never holds them. Payments settle straight to the wallet you control, so there is nothing on the provider's side to freeze.

**Is a non-custodial gateway harder to set up?**
Hosted non-custodial tools like Shieldz are the easiest option: paste a wallet address, get a link. Self-hosted ones like BTCPay Server need your own server.

**What about chargebacks?**
On-chain payments are final, so there are no chargebacks to reserve against. That removes the main reason custodial processors hold funds in the first place.

## Get paid without the hold

If you have ever had a payout frozen "for review," a non-custodial crypto payment gateway is the structural fix, not a workaround. Spin up a [payment link](https://shieldz.cash/tools/payment-link) or a [tip jar](https://shieldz.cash/tools/tip-jar) in seconds, read [what a crypto payment gateway actually is](/blog/what-is-a-crypto-payment-gateway), see how to [accept crypto without KYC](/blog/accept-crypto-payments-without-kyc), or compare the [best free crypto payment gateways of 2026](/blog/best-free-crypto-payment-gateways-2026). If you want the deeper trade-offs, see [pay any coin and the trust tradeoff](/blog/pay-any-coin-trust-tradeoff), how payments settle [off-exchange straight to your wallet](/blog/off-exchange-crypto-settlement), or, for the most private option, [how to accept Zcash payments online](/blog/how-to-accept-zcash-payments). For the custodial side's real advantages too, not just this one, see [custodial vs non-custodial crypto payment gateways](/blog/custodial-vs-non-custodial-crypto-payment-gateways).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does non-custodial mean no compliance at all?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Shieldz screens for OFAC-sanctioned addresses. The difference is that the screen runs on the counterparty address, not by holding your money in a balance it can review and freeze." }
    },
    {
      "@type": "Question",
      "name": "Can a non-custodial crypto payment gateway freeze my funds?",
      "acceptedAnswer": { "@type": "Answer", "text": "It cannot, because it never holds them. Payments settle straight to the wallet you control, so there is nothing on the provider's side to freeze." }
    },
    {
      "@type": "Question",
      "name": "Is a non-custodial gateway harder to set up?",
      "acceptedAnswer": { "@type": "Answer", "text": "Hosted non-custodial tools like Shieldz are the easiest option: paste a wallet address and get a link. Self-hosted ones like BTCPay Server need your own server." }
    },
    {
      "@type": "Question",
      "name": "What about chargebacks on a crypto payment gateway?",
      "acceptedAnswer": { "@type": "Answer", "text": "On-chain payments are final, so there are no chargebacks to reserve against. That removes the main reason custodial processors hold funds in the first place." }
    }
  ]
}
</script>
