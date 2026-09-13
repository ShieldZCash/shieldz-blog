---
title: "Custodial vs Non-Custodial Crypto Payment Gateways: What's the Real Difference?"
description: "Custodial vs non-custodial crypto payment gateways compared on real 2026 data: median fee, KYC, fiat settlement. No winner, just the trade-offs."
pubDate: 2026-09-13
author: "Deniz Yanbollu"
tags: ["crypto payment gateways", "custodial", "non-custodial", "comparison", "crypto"]
eyebrow: "Comparison"
image: "https://shieldz.cash/blog/og/custodial-vs-non-custodial-crypto-payment-gateways.png"
---

Custodial vs non-custodial is the first fork in the road for anyone choosing a crypto payment gateway, and most comparisons either skip it or collapse it into "custodial bad, non-custodial good." The real picture, from the current 87-gateway dataset behind our [gateway comparison](/blog/87-crypto-payment-gateways-compared), is a genuine trade-off in both directions, not a strictly better option.

**Disclosure up front:** Shieldz is a non-custodial gateway and our own product; it appears below like every other gateway in the dataset, named once, with the same limitations stated as anyone else's.

## The actual difference: who holds the money, briefly

A **custodial** gateway receives the buyer's payment into its own wallet first and pays the merchant out later, on its own schedule. A **non-custodial** gateway settles each payment straight to an address the merchant controls, so there is no intermediate balance to freeze, delay, or charge a withdrawal fee on. That's the whole mechanical difference. Everything else in this post is what follows from it, in both directions.

## What the data actually shows

<figure style="margin:28px 0">
  <a href="/blog/charts/custody-vs-noncustody-bars.svg"><img src="/blog/charts/custody-vs-noncustody-bars.svg" alt="Grouped bar chart comparing custodial and non-custodial crypto payment gateways in September 2026: median fee 1% vs 1%, 82% vs 10% require KYC, 86% vs 33% settle to fiat." width="760" height="460" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">57 custodial and 21 non-custodial gateways from the current dataset. Fee is a wash; KYC and fiat settlement are where the models actually diverge.</figcaption>
</figure>

Three things stand out from the 87-gateway dataset (57 custodial, 21 non-custodial, plus 4 self-hosted and 5 hybrid not counted in either bucket):

- **The median fee is 1% for both groups.** Non-custodial is not inherently cheaper; the mean is lower for non-custodial (0.73% vs 1.01%) only because more non-custodial gateways advertise a flat $0, not because the typical non-custodial fee is lower.
- **82% of custodial gateways require KYC, versus 10% of non-custodial ones.** This is the sharpest real divide in the dataset. Non-custodial gateways mostly have nothing to gate: if a provider never holds the funds, there is no account balance for a regulator to require verification on.
- **86% of custodial gateways settle to fiat, versus 33% of non-custodial ones.** This is the real advantage on the custodial side: converting to a bank-account currency requires a party in the loop who can legally hold and convert funds, which is exactly what non-custodial design avoids.

Fee transparency also splits along the same line for an unrelated reason: 86% of non-custodial gateways in the dataset publish a verifiable fee versus 61% of custodial ones, [more on that here](/blog/how-many-crypto-payment-gateways-publish-fees). That's likely because simpler non-custodial products have fewer negotiated enterprise tiers to obscure a headline rate, not a virtue of the model itself.

## Custodial: real advantages, real costs

**What you get.** A custodial processor sits between the buyer and you, and that middleman role buys real convenience: same-currency fiat settlement to your bank account (86% of custodial gateways offer this), often a more familiar card-like checkout for buyers, sometimes chargeback-style dispute handling, and a compliance layer (KYB/KYC) that some merchants specifically need to satisfy their own regulators or banking partners. [BitPay](https://bitpay.com), the oldest name in the space, settles to a bank account daily; [CoinGate](https://coingate.com) and [TripleA](https://www.triple-a.io) are built around the same custodial-plus-compliance model, TripleA holding the first MAS license for crypto payments in the region.

**What it costs you.** The money sits in someone else's wallet before it's yours. That balance can be frozen, held for an AML review, or delayed at the provider's discretion, and none of that requires anything to have gone wrong on your end, see the [non-custodial gateway case study](/blog/non-custodial-crypto-payment-gateway) for what an actual hold looks like from the merchant's side. You're also trusting the provider's solvency and security: if it is hacked or insolvent, your balance is a claim against the company, not a wallet you control.

## Non-custodial: real advantages, real costs

**What you get.** Funds land directly in an address you control, so there's no balance to freeze, no payout schedule to wait on, and no provider insolvency risk on funds already settled. That's the entire pitch, and it's real. [Blockonomics](https://www.blockonomics.co) and [BlockBee](https://blockbee.io) both route Bitcoin (and other coins for BlockBee) straight to your wallet with no KYC; [MyCryptoCheckout](https://mycryptocheckout.com) does the same as a WordPress plugin; Shieldz adds $0 platform fee and any-coin-in, one-coin-out settlement on top of the same non-custodial base.

**What it costs you.** You are your own bank. Key loss is unrecoverable (no support line resets a lost seed phrase), there's usually no built-in fiat off-ramp (only 33% of non-custodial gateways in the dataset settle to fiat directly), and refund or chargeback tooling is thinner since there's no custodial balance to reverse a transaction against. If your business needs same-day bank settlement or handles disputes the way a card processor would, a non-custodial gateway makes you build or bolt on that layer yourself.

## Where self-hosted and hybrid fit

Two smaller categories don't fit cleanly on either side. **Self-hosted** software (4 of 87: [BTCPay Server](https://btcpayserver.org), Bitcart, DV.net, PayRam) is non-custodial by construction since you run it yourself, and all four in the dataset charge 0% and require no KYC, but you take on server operation and your own support. **Hybrid** (5 of 87) means the custody model depends on how the merchant configures it, for example [Coinbase Payments](https://www.coinbase.com/payments) settling onchain USDC while sitting inside Coinbase's broader custodial infrastructure. Read the classification method in the [custody gap report](/blog/custody-gap-crypto-payment-gateways).

## How to tell which one you're looking at

1. **Read where the money goes first.** If the checkout flow ends with funds in "your account" on the provider's platform (a balance you withdraw later), that's custodial. If it ends with a transaction directly to an address you supplied, that's non-custodial.
2. **Check the KYC requirement.** Not definitive alone, but 82% of custodial gateways require it versus 10% of non-custodial ones, so a mandatory business-verification step before your first payment is a strong custodial signal.
3. **Ask what happens if the provider disappears tomorrow.** With a custodial gateway, whatever balance you haven't withdrawn is at risk. With non-custodial, every payment already made is already yours regardless of what happens to the provider.

## FAQ

**Is custodial or non-custodial better for a crypto payment gateway?**
Neither is strictly better. Custodial gateways offer easier fiat settlement (86% support it, versus 33% of non-custodial gateways) and often a more familiar dispute/support experience. Non-custodial gateways remove freeze and provider-insolvency risk on settled funds but usually leave fiat conversion and dispute handling to the merchant.

**Do non-custodial crypto payment gateways charge lower fees?**
Not on the median: both custodial and non-custodial gateways have a 1% median fee in the current 87-gateway dataset. Non-custodial's lower average comes from more gateways in that group advertising a flat $0, not from the typical fee being lower.

**Why do custodial gateways require more KYC?**
Because they hold funds and often touch fiat rails, which puts them inside the regulatory scope that applies to money-services businesses. 82% of custodial gateways in the dataset require KYC versus 10% of non-custodial ones, which mostly have no held balance for a regulator to require verification on.

**Can a non-custodial gateway still settle to fiat?**
Some can (33% do in the current dataset), usually by pairing the non-custodial payment step with a separate conversion service. It's the exception rather than the default for this model.

## Further reading

The [87-gateway comparison](/blog/87-crypto-payment-gateways-compared) has the full table with every provider's fee, KYC requirement, and settlement option. [The custody gap report](/blog/custody-gap-crypto-payment-gateways) breaks down why custodial is still 66% of the market. [Are crypto payment gateways custodial?](/blog/are-crypto-payment-gateways-custodial) and [how many are non-custodial?](/blog/how-many-non-custodial-crypto-payment-gateways) are the single-stat versions of this same question. For what an actual custodial hold looks like in practice, read the [non-custodial gateway case study](/blog/non-custodial-crypto-payment-gateway). For the mechanics of Shieldz specifically: [docs](/docs), [verify the non-custodial claim](https://shieldz.cash/verify), [pricing](https://shieldz.cash/pricing).

<figure style="margin:28px 0">
  <a href="/blog/img/hosted-checkout.png"><img src="/blog/img/hosted-checkout.png" alt="A non-custodial hosted checkout page showing a coin picker, QR code, and pay amount, settling directly to the merchant's own wallet" width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">A non-custodial checkout: the payment routes to the merchant's own address, there is no intermediate balance on the provider's side.</figcaption>
</figure>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is custodial or non-custodial better for a crypto payment gateway?", "acceptedAnswer": { "@type": "Answer", "text": "Neither is strictly better. Custodial gateways offer easier fiat settlement (86% support it, versus 33% of non-custodial gateways) and often a more familiar dispute and support experience. Non-custodial gateways remove freeze and provider-insolvency risk on settled funds but usually leave fiat conversion and dispute handling to the merchant." } },
    { "@type": "Question", "name": "Do non-custodial crypto payment gateways charge lower fees?", "acceptedAnswer": { "@type": "Answer", "text": "Not on the median: both custodial and non-custodial gateways have a 1% median fee in the current 87-gateway dataset. Non-custodial's lower average comes from more gateways in that group advertising a flat 0%, not from the typical fee being lower." } },
    { "@type": "Question", "name": "Why do custodial gateways require more KYC?", "acceptedAnswer": { "@type": "Answer", "text": "Because they hold funds and often touch fiat rails, which puts them inside the regulatory scope for money-services businesses. 82% of custodial gateways in the dataset require KYC versus 10% of non-custodial ones." } },
    { "@type": "Question", "name": "Can a non-custodial gateway still settle to fiat?", "acceptedAnswer": { "@type": "Answer", "text": "Some can, 33% do in the current dataset, usually by pairing the non-custodial payment step with a separate conversion service. It is the exception rather than the default for this model." } }
  ]
}
</script>
