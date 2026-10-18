---
title: "Crypto Payment Widget: Add a Crypto Checkout to Any Website"
description: "What a crypto payment widget is, the three kinds (buy button, inline checkout, cart), how to add one with a single script tag, and six things to check before you pick one: custody, price safety, coins, fees, webhooks and page weight."
pubDate: 2026-10-18
author: "Deniz Yanbollu"
tags: ["crypto payment widget", "crypto checkout", "accept crypto", "buy button", "non-custodial", "developers"]
eyebrow: "Guide"
swapBanner: false
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is a crypto payment widget?", "acceptedAnswer": { "@type": "Answer", "text": "A small script you add to your website that shows a crypto checkout, as a popup or inside your page, so buyers can pay in crypto without leaving your site." } },
    { "@type": "Question", "name": "Do I need a backend to use a crypto payment widget?", "acceptedAnswer": { "@type": "Answer", "text": "No. A buy button or inline checkout with a payment link works on any static site. Add a webhook endpoint when you want orders fulfilled automatically." } },
    { "@type": "Question", "name": "Is a crypto payment widget safe?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the gateway behind it. Choose one that is non-custodial, never asks for your seed phrase, takes the price from your catalog instead of the page, and confirms payments with signed webhooks." } },
    { "@type": "Question", "name": "How much does a crypto payment widget cost?", "acceptedAnswer": { "@type": "Answer", "text": "With Shieldz, the merchant pays no platform fee. A buyer who pays in a different coin than the merchant settles in pays 0.15%, added to their total." } }
  ]
}
</script>

A **crypto payment widget** is a small piece of code you paste into your website that shows a crypto checkout to your buyers. No redirect to another site, no plugin to install, no payments backend to build. The buyer clicks, pays from their wallet, and you get paid.

This guide covers what a crypto payment widget does, the three kinds you'll run into, how to add one in a few minutes, and what to check before you trust one with your sales.

## What a crypto payment widget does

A widget sits between your page and a payment gateway. It does four jobs:

1. **Shows the checkout** on your page, as a popup or as part of the page.
2. **Gets the price** for what the buyer is paying for.
3. **Takes the payment**, from a browser wallet or by showing an address and QR code.
4. **Tells you it was paid**, so you can ship the order.

The gateway behind the widget decides the things that matter most: who holds the money, which coins work, and what it costs. The widget is just the part you can see.

## The three kinds of crypto payment widget

### 1. Buy button

A button next to a product. A click opens the checkout as a popup over your page. This is the fastest way to sell one thing: an ebook, a course, a license key, a ticket.

```html
<script src="https://shieldz.cash/widget.js" defer></script>
<button data-shieldz-link="plink_...">Buy now</button>
```

### 2. Inline checkout

The checkout is drawn inside your page, like a checkout step. It works well on a dedicated "pay" or "order" page.

```html
<div data-shieldz-inline="plink_..."></div>
```

### 3. Your own cart

If your site already has a cart, the widget only handles the payment. You pass it the items in the cart and it opens a checkout with the right total.

```html
<script src="https://shieldz.cash/widget.js" data-key="pk_live_..." defer></script>
<script>
  Shieldz.checkout({
    lineItems: [{ price: "price_...", quantity: 2 }],
    order: "A-1043",
  });
</script>
```

All three load from the same script. You can see them working on the [Shieldz home page](https://shieldz.cash/#widgets) (it's a demo, so no money moves), and the [launch post](/blog/shieldz-payment-widgets) walks through each one in more detail.

## How to add a crypto payment widget to your website

With Shieldz it takes three steps, and you don't need KYC to start.

1. **Add your wallet.** Paste a receive address or a public key. A widget should never ask for your seed phrase or private key. If one does, walk away.
2. **Add a product.** Give it a name, a price and an image. You get a payment link (`plink_...`).
3. **Paste the script tag** plus a button, an inline `div`, or a `Shieldz.checkout()` call.

That's it for a static site. When you want orders fulfilled automatically, add a webhook endpoint on your server (see point 5 below).

It works anywhere you can paste HTML: a hand-written site, WordPress, Webflow, Framer, Squarespace code blocks, or a React or Next.js app.

## Six things to check before you choose a crypto payment widget

Most widgets look alike. These are the differences that actually cost you money.

### 1. Who holds the money?

This is the big one. With a **custodial** gateway, buyers pay into the gateway's wallet and you wait for a payout. The gateway can freeze that balance, ask for more documents, or go under with your money in it.

With a **non-custodial** gateway, the buyer pays your wallet directly. The gateway only watches the chain. Shieldz only ever gets a public key or address, so it can't move your funds, and you can [check that yourself](https://shieldz.cash/verify). More on the difference in [custodial vs non-custodial crypto payment gateways](/blog/custodial-vs-non-custodial-crypto-payment-gateways).

### 2. Can the buyer change the price?

Anything in a web page can be edited by the person looking at it. If a widget reads the amount from your HTML, like `data-price="89"`, a buyer can open the developer tools, change it to `1`, and pay $1 for an $89 order.

A safe widget never takes the price from the page. Shieldz widgets send a **payment link** or **price IDs**, and the price is looked up in the catalog you set in your dashboard. Prices can't be edited after they're made either: a new price replaces the old one, so an order always matches what the buyer saw.

### 3. Which coins can buyers pay with?

Your buyers hold different things. Some have USDC on Base, some have ETH, some have Bitcoin on an exchange. A widget that only takes one coin on one chain loses the rest.

Look for two things:

- **Both payment paths.** A connect-wallet button for MetaMask, Phantom, Coinbase Wallet and similar, plus a QR code and address for exchanges and coins with no browser wallet, like Bitcoin and Zcash.
- **Pay with any coin.** The buyer pays in what they hold and you receive the one token you chose. Shieldz does this through independent, non-custodial swap protocols (NEAR Intents, Chainflip and Relay), and the token still lands in your wallet.

You pick what you receive: USDC or USDT on Base, Arbitrum, Optimism, Polygon or Ethereum, native Bitcoin, or shielded Zcash. If stablecoins are the goal, see [how to accept stablecoin payments](/blog/accept-stablecoin-payments).

### 4. What does it cost, and who pays?

The median crypto payment gateway charges 1% per payment, from our audit of 87 gateways, and some add payout or conversion fees on top. On $10,000 a month, 1% is $1,200 a year. See the [average crypto payment gateway fee](/blog/average-crypto-payment-gateway-fee) for the full numbers.

With the Shieldz widget:

- **You pay no platform fee.** A buyer paying in the coin you settle in sends it straight to you. Only the network fee applies.
- **A buyer paying in a different coin pays 0.15%.** It's added to their total, so you still receive the full price. The swap protocols' own spread and network fees apply to any swap.
- **Checkout totals run from $1 to $100,000.**

### 5. How do you know it was paid?

The "paid" screen in the buyer's browser is not proof of payment. Browser events can be faked. Fulfil orders from a **signed webhook** sent to your server, and check the signature before you ship anything. [How to verify crypto payments](/blog/how-to-verify-crypto-payments) covers the tricks people use to fake one.

Shieldz sends a signed `invoice.paid` webhook with the invoice, its line items and your order id. The page also gets an event you can use for a thank-you message:

```js
Shieldz.on("paid", (e) => {
  // show a thank-you message; ship from the webhook, not from here
});
```

### 6. How heavy is it?

A checkout script loads on every page that has a button. Heavy scripts slow your page down and can hurt your search rankings. The Shieldz `widget.js` is about 14 KB, under 5 KB gzipped, and it loads with `defer`, so it doesn't block your page from showing. The checkout itself only loads when the buyer clicks.

## Widget, payment link, or API?

A widget isn't the only way to take crypto. Pick by where your buyer is:

| You have | Use |
|---|---|
| A website and want buyers to stay on it | **Payment widget** (buy button, inline, or cart) |
| No website, or you sell in DMs, email or social | **Payment link**: share the URL, no code at all |
| A backend that already computes totals | **[Payment API](/blog/crypto-payment-api)**: create invoices with your secret key |
| A WooCommerce store | **[WooCommerce plugin](/blog/accept-crypto-payments-woocommerce)** |

They all lead to the same checkout, so you can start with a link and add the widget later.

## Get started

[Create a free account](https://merchant.shieldz.cash/signup), add your wallet and a product, and paste the script tag. The [widget docs](https://shieldz.cash/docs#catalog-sell) have every option. For the bigger picture, read [how to accept crypto payments](/blog/how-to-accept-crypto-payments).

## FAQ

**What is a crypto payment widget?**
A small script you add to your website that shows a crypto checkout, as a popup or inside your page, so buyers can pay in crypto without leaving your site.

**Do I need a backend to use a crypto payment widget?**
No. A buy button or inline checkout with a payment link works on any static site. Add a webhook endpoint when you want orders fulfilled automatically.

**Is a crypto payment widget safe?**
It depends on the gateway behind it. Choose one that is non-custodial, never asks for your seed phrase, takes the price from your catalog instead of the page, and confirms payments with signed webhooks.

**Can a buyer pay with Bitcoin through the widget?**
Yes. The checkout shows a Bitcoin address and QR code with the exact amount and notices the payment by itself. You can also receive native Bitcoin.

**Does the widget work on WordPress or Webflow?**
Yes. It works anywhere you can paste HTML and a script tag. On WordPress and Webflow that's a custom HTML or embed block.

**How much does a crypto payment widget cost?**
With Shieldz, you pay no platform fee. A buyer who pays in a different coin than you settle in pays 0.15%, added to their total.

**Do I need KYC?**
Not to start. You add a wallet and a product and you can take payments.
