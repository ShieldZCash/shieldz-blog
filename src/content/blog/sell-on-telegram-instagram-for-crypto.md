---
title: "Sell on Telegram and Instagram for Crypto With One Payment Link"
description: "Sell on Telegram and Instagram for crypto: one payment link that asks for size, color and address, pays to your wallet, and pings you on Telegram."
pubDate: 2026-10-26
author: "Deniz Yanbollu"
tags: ["sell on telegram", "sell on instagram", "crypto payment link", "social selling", "crypto", "payments"]
eyebrow: "Guide"
image: "https://shieldz.cash/blog/og/sell-on-telegram-instagram-for-crypto.png"
---

If you sell on Telegram or Instagram, you already know the routine. A buyer messages you, you send a wallet address, they send a screenshot, you scroll your wallet to find the payment, then you message back and forth for the size, the color and the address. Half of the work is not selling, it is bookkeeping in a chat window. A crypto payment link fixes that: one link that takes the order details and the payment together, and tells you who paid.

This guide shows how to sell on Telegram and Instagram for crypto with a [Shieldz](https://shieldz.cash) payment link. The money goes straight to your own wallet, there is no platform fee, and you never have to trust a screenshot again. If you just want the basics of making a link, start with [how to create a crypto payment link](/blog/how-to-create-a-crypto-payment-link).

## The problem with "send me USDT and a screenshot"

Taking crypto in a chat with a bare wallet address works until you have more than a few orders a day. Then three things break:

- **You cannot tell payments apart.** Two buyers send $35 within an hour. Which one wanted indigo?
- **Screenshots can be fake.** Editing a transaction screenshot takes a minute, and a busy seller rarely checks the chain for every order. We wrote a whole guide on [how to verify a crypto payment and spot fake proofs](/blog/how-to-verify-crypto-payments).
- **Order details live in a chat.** Size, color, address and gift notes are spread across messages, and one lost message is one wrong parcel.

Card processors would solve the bookkeeping but not the rest. In much of Southeast Asia they are not an option for small local sellers at all, and where they are, the fees come off every order.

<figure style="margin:28px 0">
  <a href="/blog/charts/social-seller-monthly-fees.svg"><img src="/blog/charts/social-seller-monthly-fees.svg" alt="Fees on 100 orders of 35 dollars a month: PayPal 171.15 dollars, Stripe 131.50 dollars, Coinbase Commerce 35 dollars, Shieldz 0 dollars platform fee." width="760" height="420" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">A shop doing 100 orders of $35 a month pays PayPal about $171 and Stripe about $132. Shieldz takes no platform fee; buyers pay only network gas.</figcaption>
</figure>

## One link that takes the order and the payment

A Shieldz product link is an order page for one item. You set it up once and post it everywhere: your Instagram bio, a pinned message in your Telegram channel, a story, a reply to a DM. The buyer opens it and, before paying, answers the questions you chose:

- **Up to three custom questions**, short text answers like "Your Telegram username", "Color (indigo, rust or natural)" or "Size". Each one can be required or optional.
- **Email**, so you can reach them about the order.
- **Shipping address**, if you post the item.
- **Quantity**, with a plus and minus stepper and a maximum you set.

<figure style="margin:28px 0">
  <a href="/blog/img/payment-link-custom-fields.png"><img src="/blog/img/payment-link-custom-fields.png" alt="A Shieldz payment link for a 35 dollar handwoven Shan bag asking for the buyer's Telegram username, a color, an optional gift note, an email and a shipping address in Yangon before payment." width="760" height="1272" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">The buyer answers your questions and gives an address first, then pays in crypto on the next step.</figcaption>
</figure>

Then they pay on the hosted crypto checkout from the wallet they already use. When the payment confirms on-chain, the order is marked paid. There is no screenshot to check: the link only reports paid when the chain says so.

## Know who paid, right in Telegram

Every answer is stored on the order. If you get your Shieldz alerts on Telegram, the paid message lists the buyer's answers and email, so a message reads like "Your Telegram username: mya_buyer, Color: indigo". You can pack and ship from that one message, without opening a dashboard. The same details show in the [merchant dashboard](https://merchant.shieldz.cash), and if you run a Discord server, in the Discord payment alert too.

## Send a personal link with the username already filled in

When a buyer messages you first, you can send them a link with their answer already in place. Add `?cf_` plus the question key to the link:

```
https://shieldz.cash/l/plink_...?cf_telegram=mya_buyer
```

The buyer sees their username filled in, and you are sure the order matches the chat. The same trick works for anything you already know, like a size they told you in DMs.

## Set it up in five minutes

1. **Connect your wallet.** Sign in to the [merchant dashboard](https://merchant.shieldz.cash) and set the wallet where you want to be paid, for example USDT or USDC on Polygon or Base. That is the only place money goes.
2. **Add your product.** Name, short description, price in USD, and a photo.
3. **Create the link.** Turn on quantity, email and shipping as you need, and under "Ask the buyer for" add your questions, such as a Telegram username and a color.
4. **Write the thank-you.** Under "After payment", add a message like "Thank you! We will message you on Telegram when it ships."
5. **Post it.** Put the link in your Instagram bio and pin it in your Telegram channel. Make one link per product, or one per drop.

Buyers pay in the stablecoin you accept. Most people who shop with crypto in Southeast Asia already hold USDT, so a stablecoin keeps prices steady for both of you. For the details, see [how to accept USDT payments](/blog/how-to-accept-usdt-payments). If you sell in Myanmar, we also have a guide in Burmese: [accepting crypto payments in Myanmar](/blog/accept-crypto-payments-myanmar).

## Why non-custodial matters for small sellers

Shieldz never holds your money. Each payment settles to your own wallet, so there is no balance to withdraw, no payout schedule and no account that can be frozen while you have orders to fill. Shieldz only ever sees your public address, and you can [check that yourself](https://shieldz.cash/verify). There is also no KYC to start, which matters when you are one person selling bags from home, not a registered company.

Selling digital access instead of parcels? The same link works for that, and for community perks see [how to sell Discord roles for crypto](/blog/sell-discord-roles-for-crypto).

## FAQ

**Can I sell on Instagram and Telegram for crypto without a website?**
Yes. A Shieldz payment link is a hosted order page. Post the link in your bio, a pinned message or a DM, and buyers order and pay there.

**How do I know which buyer paid?**
The link asks your questions before payment, such as a Telegram username, and the answers arrive with the order in the dashboard and your Telegram alert.

**Can a buyer fake a payment?**
Not with a link. An order is marked paid only after the payment confirms on-chain, so there is no screenshot to trust.

**What does it cost?**
A $0 platform fee. Buyers pay only network gas, and the full amount settles to your own wallet.

## Start selling

Create your first product link in the [merchant dashboard](https://merchant.shieldz.cash), or try a quick one-off link with the [payment link generator](https://shieldz.cash/tools/payment-link). Then put it in your bio and let the link do the bookkeeping. Full fee details are on the [pricing page](https://shieldz.cash/pricing).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to sell on Telegram and Instagram for crypto with a payment link",
  "step": [
    { "@type": "HowToStep", "name": "Connect your wallet", "text": "Sign in to the Shieldz merchant dashboard and set the wallet and stablecoin where you want to be paid." },
    { "@type": "HowToStep", "name": "Add your product", "text": "Enter a name, short description, USD price and photo." },
    { "@type": "HowToStep", "name": "Create the link", "text": "Turn on quantity, email and shipping, and add up to three questions such as a Telegram username and a color." },
    { "@type": "HowToStep", "name": "Write the thank-you", "text": "Add an after-payment message telling the buyer what happens next." },
    { "@type": "HowToStep", "name": "Post it", "text": "Put the link in your Instagram bio and pin it in your Telegram channel." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I sell on Instagram and Telegram for crypto without a website?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A Shieldz payment link is a hosted order page. Post the link in your bio, a pinned message or a DM, and buyers order and pay there." } },
    { "@type": "Question", "name": "How do I know which buyer paid?", "acceptedAnswer": { "@type": "Answer", "text": "The link asks your questions before payment, such as a Telegram username, and the answers arrive with the order in the dashboard and your Telegram alert." } },
    { "@type": "Question", "name": "Can a buyer fake a payment?", "acceptedAnswer": { "@type": "Answer", "text": "Not with a link. An order is marked paid only after the payment confirms on-chain, so there is no screenshot to trust." } },
    { "@type": "Question", "name": "What does it cost?", "acceptedAnswer": { "@type": "Answer", "text": "A $0 platform fee. Buyers pay only network gas, and the full amount settles to your own wallet." } }
  ]
}
</script>
