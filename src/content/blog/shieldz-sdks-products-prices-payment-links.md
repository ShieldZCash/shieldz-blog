---
title: "Shieldz SDKs for Node, Python, PHP and Rust: Products, Prices, Payment Links and Line-Item Invoices"
description: "The Shieldz SDKs now cover the whole catalog API in four languages. A complete guide to products, immutable prices, hosted payment links, buy buttons and line-item invoices, with code for Node, Python, PHP and Rust, the exact limits, and what we fixed along the way."
pubDate: 2026-10-18
author: "Deniz Yanbollu"
tags: ["shieldz sdk", "crypto payments api", "payment links", "node sdk", "python sdk", "php sdk", "rust sdk", "developers"]
eyebrow: "Guide"
swapBanner: false
image: "https://shieldz.cash/blog/og/shieldz-sdks-products-prices-payment-links.png"
---

Until now, the Shieldz SDKs did one thing: create an invoice for an amount you computed yourself, then verify the webhook when it was paid. That works for a lot of shops, and it is the right model when your server already knows the total.

But it has a weak spot. If the total ever comes from a web page, anyone can open the browser's developer tools and change it. The usual fix is the one Stripe made popular: keep your prices on the payment provider's side, and let your page say only *what* is being bought. The total is computed from the catalog, never from the page.

Shieldz has that catalog now: **products**, **prices** and **payment links**, plus **line items** on invoices. Today the official SDKs for **Node/TypeScript, Python, PHP and Rust** cover all of it. This guide walks through every part of the catalog in all four languages, lists the exact limits the API enforces, and explains what changed in each SDK, including three bugs we found while testing this release.

## What's in this release

| Language | Package | Version | Install | Runs on | Runtime dependencies |
|---|---|---|---|---|---|
| Node / TypeScript | `@shieldz/sdk` | 0.3.0 | `npm install @shieldz/sdk` | Node 18+, Deno, Bun, edge runtimes | none |
| Python | `shieldz` | 0.2.0 | `pip install shieldz` | Python 3.8+ | none (standard library only) |
| PHP | `shieldz/shieldz` | 0.2.0 | `composer require shieldz/shieldz` | PHP 8.0 to 8.5 | `ext-curl`, `ext-json` |
| Rust | `shieldz` | 0.2.0 | `cargo add shieldz` | Rust 1.70+ | `ureq`, `serde`, `serde_json`, `hmac`, `sha2`, `hex` |

Every SDK now has:

- `products`, `prices` and `payment links`, each with **create, retrieve, update and list**.
- **`line_items`** on invoice creation: catalog prices, or inline `price_data` for one-off items.
- **`client_reference_id`** (your order or cart id) and **`return_url`** on invoices.
- A runnable **catalog example** (`examples/catalog.*`) that goes through the whole flow.
- The same reliability features as before: retries with backoff, automatic idempotency keys, typed or structured errors, and webhook signature verification.

All four are MIT-licensed and open source: [Node](https://github.com/ShieldZCash/shieldz-sdk), [Python](https://github.com/ShieldZCash/shieldz-python), [PHP](https://github.com/ShieldZCash/shieldz-php), [Rust](https://github.com/ShieldZCash/shieldz-rust).

## The catalog in one minute

Three objects, the same names Stripe uses:

| Object | ID | What it is |
|---|---|---|
| Product | `prod_…` | Something you sell: a name, an optional description and an image. |
| Price | `price_…` | What a product costs. Either a fixed amount, or a range the customer picks from (tips, donations, pay-what-you-want). |
| Payment link | `plink_…` | A hosted order page at `shieldz.cash/l/plink_…` for one or more prices, with optional adjustable quantity, email, shipping address and a thank-you note or redirect. The widget's buy button opens the same page in a popup. |

And one addition to invoices:

| Field | What it does |
|---|---|
| `line_items` | Instead of `amount_usd_cents`, send a list of `{ price, quantity }` or `{ price_data: { name, unit_amount_usd_cents }, quantity }`. Shieldz adds them up. |

The most important rule: **a price never changes.** Once `price_…` exists, its amount is fixed forever. To change what a product costs, you give the product a new price, and Shieldz archives the old one. That way a page, a link or a cart that names a price always charges exactly what it said when it was made.

There are three ways to sell from the catalog, depending on how much code you want to run:

1. **No backend:** make a payment link (in the dashboard or with the API) and share its URL, or paste a buy button on your site.
2. **Your own JavaScript cart:** let the page start a checkout with price IDs and a publishable key. The browser picks *which* prices and how many; Shieldz decides what they cost.
3. **Your own server:** create the invoice yourself with `line_items`, then send the buyer to its `pay_url`.

The SDKs are for the server side: creating and managing the catalog, and options 1 and 3.

## Setup

You need a secret API key (`sk_live_…` or `sk_test_…`) from the dashboard, under Developer mode → API keys. Keep it on your server. Every SDK reads it the same way:

**Node / TypeScript**

```ts
import Shieldz from "@shieldz/sdk";

const shieldz = new Shieldz(process.env.SHIELDZ_API_KEY!);
```

**Python**

```python
import os
from shieldz import Shieldz

shieldz = Shieldz(os.environ["SHIELDZ_API_KEY"])
```

**PHP**

```php
use Shieldz\Shieldz;

$shieldz = new Shieldz(getenv('SHIELDZ_API_KEY'));
```

**Rust**

```rust
use shieldz::Shieldz;

let shieldz = Shieldz::new(std::env::var("SHIELDZ_API_KEY")?);
```

Each client also takes a base URL, a timeout and a retry count. The defaults (`https://shieldz.cash/api/v1`, 30 seconds, 2 retries) are right for almost everyone.

## Step 1: Create a product with its price

A product can be created with its price in the same call, using `default_price_data`. The new price becomes the product's `default_price`.

**Node / TypeScript**

```ts
const product = await shieldz.products.create({
  name: "Blue hoodie",
  description: "Heavyweight cotton, unisex.",
  image_url: "https://yourstore.com/img/hoodie.jpg",
  default_price_data: { unit_amount_usd_cents: 4999 }, // $49.99
});

console.log(product.id, product.default_price?.id);
```

**Python**

```python
product = shieldz.products.create(
    name="Blue hoodie",
    description="Heavyweight cotton, unisex.",
    image_url="https://yourstore.com/img/hoodie.jpg",
    default_price_data={"unit_amount_usd_cents": 4999},  # $49.99
)

print(product["id"], product["default_price"]["id"])
```

**PHP**

```php
$product = $shieldz->products->create([
    'name' => 'Blue hoodie',
    'description' => 'Heavyweight cotton, unisex.',
    'image_url' => 'https://yourstore.com/img/hoodie.jpg',
    'default_price_data' => ['unit_amount_usd_cents' => 4999], // $49.99
]);

echo $product['id'], ' ', $product['default_price']['id'];
```

**Rust**

```rust
use serde_json::json;

let product = shieldz.products().create(json!({
    "name": "Blue hoodie",
    "description": "Heavyweight cotton, unisex.",
    "image_url": "https://yourstore.com/img/hoodie.jpg",
    "default_price_data": { "unit_amount_usd_cents": 4999 }, // $49.99
}))?;

let product_id = product["id"].as_str().unwrap();
println!("{} {}", product_id, product["default_price"]["id"].as_str().unwrap());
```

All amounts are **whole US cents**: `4999` is $49.99. The product's `image_url` must be a public `https://` URL. If you'd rather upload an image file, do it from Products in the dashboard; the product then gets an image URL served by Shieldz.

### Pay-what-you-want prices

For tips, donations or "name your price", send `custom_unit_amount` instead of a fixed amount. The buyer types an amount between your minimum and maximum, and the page starts at your suggested amount:

```ts
const tip = await shieldz.products.create({
  name: "Support the project",
  default_price_data: {
    custom_unit_amount: {
      minimum_usd_cents: 300,    // $3
      maximum_usd_cents: 50000,  // $500
      preset_usd_cents: 1000,    // starts at $10
    },
  },
});
```

The minimum is at least $1 and the maximum at most $100,000. A customer-chosen price always has a quantity of 1.

## Step 2: Change a price (without breaking anything)

Because prices never change, "changing the price" means adding a new one. Send `default_price_data` to the product's update call and Shieldz does three things in one step:

1. creates a new price,
2. archives the old one,
3. moves every payment link that sold the old price to the new price. **The link URLs stay the same.**

**Node / TypeScript**

```ts
const repriced = await shieldz.products.update(product.id, {
  default_price_data: { unit_amount_usd_cents: 3999 }, // now $39.99
});
```

**Python**

```python
product = shieldz.products.update(product["id"], default_price_data={"unit_amount_usd_cents": 3999})
```

**PHP**

```php
$product = $shieldz->products->update($product['id'], [
    'default_price_data' => ['unit_amount_usd_cents' => 3999],
]);
```

**Rust**

```rust
let product = shieldz.products().update(
    product_id,
    json!({ "default_price_data": { "unit_amount_usd_cents": 3999 } }),
)?;
```

Trying to change the amount of an existing price is refused with a `400` and the code `price_immutable`. That's on purpose: it's what makes a price ID safe to put on a public page.

You can also update a product's `name`, `description` and `image_url` (send `null` to clear the last two), set `default_price` to another active price of the same product, or archive the whole product with `active: false`.

## Step 3: More than one price per product

A product can have several prices, for example a single item and a bundle. Add one with `prices.create`, list them by product, and archive the ones you no longer want:

**Node / TypeScript**

```ts
const bundle = await shieldz.prices.create({ product: product.id, unit_amount_usd_cents: 8999 });
await shieldz.prices.update(bundle.id, { active: false }); // archive it

const prices = await shieldz.prices.list({ product: product.id });
```

**Python**

```python
bundle = shieldz.prices.create(product=product["id"], unit_amount_usd_cents=8999)
shieldz.prices.update(bundle["id"], active=False)

prices = shieldz.prices.list(product=product["id"])
```

**PHP**

```php
$bundle = $shieldz->prices->create(['product' => $product['id'], 'unit_amount_usd_cents' => 8999]);
$shieldz->prices->update($bundle['id'], ['active' => false]);

$prices = $shieldz->prices->list(['product' => $product['id']]);
```

**Rust**

```rust
let bundle = shieldz.prices().create(json!({ "product": product_id, "unit_amount_usd_cents": 8999 }))?;
shieldz.prices().update(bundle["id"].as_str().unwrap(), json!({ "active": false }))?;

let prices = shieldz.prices().list(&[("product", product_id.to_string())])?;
```

A product's first price automatically becomes its `default_price`. An archived price can't be added to new links or carts, and a link that still uses one shows "No longer available" instead of taking a payment.

## Step 4: Create a payment link

A payment link is a hosted order page at `https://shieldz.cash/l/plink_…`. It shows your shop's name and logo, the products with their images, and whatever you asked the buyer for. When they press **Continue to payment**, Shieldz prices everything again from the catalog and moves them to step 2: choosing a coin and paying.

This one lets the buyer pick 1 to 5 hoodies, asks for a shipping address and shows a thank-you note after payment:

**Node / TypeScript**

```ts
const link = await shieldz.paymentLinks.create({
  line_items: [{
    product: product.id, // shorthand for the product's default price
    quantity: 1,
    adjustable_quantity: { enabled: true, minimum: 1, maximum: 5 },
  }],
  collect_shipping_address: true,
  after_completion: {
    type: "hosted_confirmation",
    hosted_confirmation: { custom_message: "Thanks! We ship within 2 days." },
  },
});

console.log(link.url); // https://shieldz.cash/l/plink_…
```

**Python**

```python
link = shieldz.payment_links.create(
    line_items=[{
        "product": product["id"],
        "quantity": 1,
        "adjustable_quantity": {"enabled": True, "minimum": 1, "maximum": 5},
    }],
    collect_shipping_address=True,
    after_completion={
        "type": "hosted_confirmation",
        "hosted_confirmation": {"custom_message": "Thanks! We ship within 2 days."},
    },
)
```

**PHP**

```php
$link = $shieldz->paymentLinks->create([
    'line_items' => [[
        'product' => $product['id'],
        'quantity' => 1,
        'adjustable_quantity' => ['enabled' => true, 'minimum' => 1, 'maximum' => 5],
    ]],
    'collect_shipping_address' => true,
    'after_completion' => [
        'type' => 'hosted_confirmation',
        'hosted_confirmation' => ['custom_message' => 'Thanks! We ship within 2 days.'],
    ],
]);
```

**Rust**

```rust
let link = shieldz.payment_links().create(json!({
    "line_items": [{
        "product": product_id,
        "quantity": 1,
        "adjustable_quantity": { "enabled": true, "minimum": 1, "maximum": 5 },
    }],
    "collect_shipping_address": true,
    "after_completion": {
        "type": "hosted_confirmation",
        "hosted_confirmation": { "custom_message": "Thanks! We ship within 2 days." },
    },
}))?;
```

Everything a link can do:

| Field | What it does |
|---|---|
| `line_items[].price` or `.product` | The price to sell. `product` is shorthand for that product's default price. Each price can appear once; up to 20 lines. |
| `line_items[].quantity` | The starting quantity, 1 to 999. |
| `line_items[].adjustable_quantity` | `{ enabled: true, minimum, maximum }` shows a − / + stepper. Defaults are 1 and 99; the maximum is at most 999. Not allowed on a customer-chosen price. |
| `collect_email` | Ask for an email before payment. |
| `collect_shipping_address` | Ask for a shipping address. It's saved on the invoice as `shipping`, which only your API key and your webhooks can see. |
| `after_completion` | `{ type: "hosted_confirmation", hosted_confirmation: { custom_message } }` (up to 500 characters), or `{ type: "redirect", redirect: { url } }` with a public `https://` URL. |
| `active` (update only) | `false` turns the link off. The page then says the item isn't available. |

Updating a link keeps its URL, so you can fix a typo or change the options on a link you've already shared. Listing links returns each one with `paid_count` and `paid_usd_cents`: how many invoices from that link were paid, and their total.

## Step 5: Put it on your site

The link's `url` works on its own: share it in an email, a social post or a QR code. To sell from your own page instead, add the widget script once and a button with the link's ID:

```html
<script src="https://shieldz.cash/widget.js" defer></script>
<button data-shieldz-link="plink_…">Buy now</button>
```

The widget turns the button into the Shieldz pay button. Pressing it opens the same order page as a popup on top of your page: the buyer picks the quantity, fills in what you asked for and pays without leaving your site. The price comes from Shieldz, so editing the page can't change it.

You can try every option without writing code in the [interactive payment link builder](https://shieldz.cash/docs#catalog-build) on our docs. It writes the cURL, Node, Python and PHP code as you type, and its preview is the real order page your buyers see.

## Step 6: Price an order on your server with line items

If you already have a cart, skip payment links and create the invoice directly with `line_items`. Use catalog prices for things you sell regularly, and `price_data` for anything else (gift wrap, a custom engraving, a shipping fee):

**Node / TypeScript**

```ts
const invoice = await shieldz.invoices.create({
  line_items: [
    { price: repriced.default_price!.id, quantity: 2 },
    { price_data: { name: "Gift wrap", unit_amount_usd_cents: 300 } },
  ],
  client_reference_id: "A-1043", // your order id
  return_url: "https://yourstore.com/orders/A-1043",
});

// send the buyer to invoice.pay_url
```

**Python**

```python
invoice = shieldz.invoices.create(
    line_items=[
        {"price": price_id, "quantity": 2},
        {"price_data": {"name": "Gift wrap", "unit_amount_usd_cents": 300}},
    ],
    client_reference_id="A-1043",
    return_url="https://yourstore.com/orders/A-1043",
)
```

**PHP**

```php
$invoice = $shieldz->invoices->create([
    'line_items' => [
        ['price' => $priceId, 'quantity' => 2],
        ['price_data' => ['name' => 'Gift wrap', 'unit_amount_usd_cents' => 300]],
    ],
    'client_reference_id' => 'A-1043',
    'return_url' => 'https://yourstore.com/orders/A-1043',
]);
```

**Rust**

```rust
let invoice = shieldz.invoices().create(json!({
    "line_items": [
        { "price": price_id, "quantity": 2 },
        { "price_data": { "name": "Gift wrap", "unit_amount_usd_cents": 300 } },
    ],
    "client_reference_id": "A-1043",
    "return_url": "https://yourstore.com/orders/A-1043",
}))?;
```

With the $39.99 price from step 2, this invoice comes to 2 × $39.99 + $3.00 = **$82.98** (`amount_usd_cents: 8298`). Send either `amount_usd_cents` or `line_items`, not both. `price_data` only works with your secret key: a web page can never invent a price.

Each line is saved on the invoice as it was at the moment of purchase: the price and product IDs, the product's name, the quantity, the unit amount and the line total. Renaming or repricing a product later doesn't change past invoices.

## Step 7: Fulfil from the webhook

Payment confirmations still arrive the same way: a signed `invoice.paid` webhook. Invoices from the catalog carry four extra fields, both on the API and in the webhook:

| Field | What's in it |
|---|---|
| `line_items` | What was bought, as saved at purchase time. |
| `payment_link` | The `plink_…` the invoice came from, or `null`. |
| `client_reference_id` | Your order or cart id, or `null`. |
| `shipping` | The shipping address from the link page (`name`, `line1`, `line2`, `city`, `state`, `postal_code`, `country`), or `null`. Never shown on the public checkout. |

Verify the signature against the **raw request body**, then fulfil:

**Node / TypeScript**

```ts
import { constructEvent } from "@shieldz/sdk";

const signature = req.header("X-Shieldz-Signature") ?? ""; // Express; use the raw body (express.raw)
const event = await constructEvent(rawBody, signature, process.env.SHIELDZ_WEBHOOK_SECRET!);
if (event.type === "invoice.paid") {
  const { line_items, shipping, client_reference_id } = event.data.invoice;
  // ship it
}
```

**Python**

```python
from shieldz import construct_event

event = construct_event(raw_body, signature_header, os.environ["SHIELDZ_WEBHOOK_SECRET"])
if event["type"] == "invoice.paid":
    invoice = event["data"]["invoice"]
    # invoice["line_items"], invoice["shipping"], invoice["client_reference_id"]
```

**PHP**

```php
use Shieldz\Webhooks;

$event = Webhooks::constructEvent($raw, $_SERVER['HTTP_X_SHIELDZ_SIGNATURE'] ?? '', getenv('SHIELDZ_WEBHOOK_SECRET'));
if ($event['type'] === 'invoice.paid') {
    $invoice = $event['data']['invoice'];
    // $invoice['line_items'], $invoice['shipping'], $invoice['client_reference_id']
}
```

**Rust**

```rust
use shieldz::{construct_event, VerifyOptions};

let event = construct_event(raw_body, signature_header, &secret, &VerifyOptions::default())?;
if event["type"] == "invoice.paid" {
    let invoice = &event["data"]["invoice"];
    // invoice["line_items"], invoice["shipping"], invoice["client_reference_id"]
}
```

Webhooks are delivered at least once, so make fulfilment idempotent on the `X-Shieldz-Delivery` header or the invoice ID. During the 24 hours after you rotate the signing secret, the header carries both signatures and either one verifies.

## Step 8: Clean up

When you stop selling something, archive it rather than deleting it, so past invoices and reports keep making sense:

```ts
await shieldz.paymentLinks.update(link.id, { active: false }); // just this link
await shieldz.products.update(product.id, { active: false });  // the product everywhere
```

A link whose product is archived shows "No longer available" and won't take payments. Set `active: true` to bring either one back.

## Retries and idempotency: what happens when the network fails

All four SDKs retry **network errors, timeouts, `429` and `5xx` responses**, twice by default, with exponential backoff and jitter capped at 8 seconds. Node and Python also wait as long as a `Retry-After` header asks (within that cap). Errors that won't go away on their own, like a `400` for a bad field, are returned immediately.

A retry is only safe if it can't create something twice. So for every `POST`, each SDK attaches an automatic `idempotency_key` (`auto_` plus a random value) unless you set one yourself. If the first attempt actually reached Shieldz and only the response was lost, the retry sends the same key, and Shieldz answers with the object it already created instead of making a new one:

```json
{ "id": "prod_…", "object": "product", "idempotent_replay": true, … }
```

You can pass your own key too. Using your order ID makes the call safe to repeat even across process restarts:

```ts
await shieldz.invoices.create({ line_items, client_reference_id: "A-1043", idempotency_key: "order-A-1043" });
```

Keys are scoped per shop and per kind of object, so the same key on a product and on an invoice are two different requests.

**What we fixed here.** Before this release, only invoice creation honoured the key. A products, prices or payment-links create that timed out *after* the server had saved it would have been retried as a brand-new object, giving you a duplicate. Catalog creates now honour `idempotency_key` exactly like invoices do; replay keys are kept for a week. We found this by reading the SDKs' own comment, "so retries can't duplicate", and checking whether it was true for every endpoint. It wasn't, so we fixed the server.

## Errors

Every API error has the same shape: an HTTP status, a `type`, a machine-readable `code`, a human `message` and, when one field is to blame, the `param` that caused it. Each SDK turns that into its own error type:

| Language | Error | Fields |
|---|---|---|
| Node / TypeScript | `ShieldzError` | `status`, `type`, `code`, `message`, `param`, `requestId` |
| Python | `ShieldzError` | `status`, `type`, `code`, `param`, `request_id` |
| PHP | `Shieldz\ShieldzError` | `status`, `type`, `errorCode`, `param`, `requestId` |
| Rust | `ShieldzError` | `status`, `kind`, `code`, `message`, `param`, `request_id` |

```ts
import { ShieldzError } from "@shieldz/sdk";

try {
  await shieldz.prices.update(priceId, { unit_amount_usd_cents: 1 } as never);
} catch (e) {
  if (e instanceof ShieldzError) console.log(e.status, e.code, e.param);
  // 400 price_immutable unit_amount_usd_cents
}
```

Codes you'll meet in the catalog include `invalid_price`, `price_immutable`, `price_inactive`, `unknown_price`, `unknown_product`, `duplicate_price`, `invalid_quantity`, `invalid_adjustable_quantity`, `invalid_image_url` and `invalid_after_completion`. Quote `requestId` when you contact support.

## Every limit, in one place

| Rule | Limit |
|---|---|
| Amounts | Whole US cents. |
| A fixed price | $0 to $100,000 per unit. |
| A customer-chosen price | Minimum at least $1, maximum at most $100,000, suggested amount in between. Quantity is always 1. |
| A checkout's total | $1 to $100,000. A link that can only add up to less than $1 can't take payments. |
| Line items | Up to 20 per invoice or link. |
| Quantity | 1 to 999. Adjustable quantity: 0 ≤ minimum ≤ maximum ≤ 999 (defaults 1 and 99). |
| Product name / description | 250 / 2,000 characters. |
| Thank-you note | 500 characters. |
| Image and redirect URLs | Public `https://` only. |
| `idempotency_key` | Up to 256 characters; catalog keys are kept for 7 days. |
| `price_data` | Secret key only. |
| Lists | Products and payment links return up to 500 items, active first, newest first. |

## Testing without real money

One thing to know before you test: **products and payment links have no test mode.** A payment link takes real payments, whichever key created it. That matches what a link is for: something you share with real buyers.

To test a priced checkout end to end without real money, create an **invoice** with `line_items` and an `sk_test_…` key. Test invoices simulate settlement, and webhooks still fire for real, so you can check your whole fulfilment path, including `line_items`, `client_reference_id` and the signature check.

## What we tested, and what we fixed

We didn't want this release to be "it compiles". For each SDK we wrote a catalog example that goes through the whole flow: create a product, change its price, add and archive a second price, list prices, create a payment link, create a line-item invoice, turn the link off, archive the product and handle an error. Then we ran all four against a local Shieldz gateway running the production code on Postgres, with a real API key, so every call went through the same validation, database and responses as shieldz.cash.

All four printed the same results, for example from the Python run:

```
new price price_p4Ey9bcuKZVUXPY2 3999
price price_Lgimmk1tDqZcfawd 8999 archived
price price_p4Ey9bcuKZVUXPY2 3999 active
price price_jTKkh00Eg1O8OBtC 4999 archived
link http://localhost:8096/l/plink_9fVqjLYbWFeJvG7F
invoice XhpvUslVKV_YEcKEi272 8298 http://localhost:8096/pay/XhpvUslVKV_YEcKEi272
error 400 price_immutable unit_amount_usd_cents
```

On top of that, each SDK has unit tests for the new resources, and the server has tests that send it exactly the request bodies our docs and builder generate.

Testing found three real bugs, all fixed in this release:

1. **Duplicate objects on retry** (server). Covered above: catalog creates ignored `idempotency_key`, so a retried create could make a second product or link.
2. **IDs weren't fully escaped in URLs** (Python and Rust). Python's `urllib.parse.quote` leaves `/` alone by default, and the Rust client didn't escape IDs at all. An ID containing `../` could have sent the request to a different endpoint. IDs are now escaped as a single path segment in both, for invoices too.
3. **A deprecation notice on every request** (PHP 8.5). The client called `curl_close()`, which does nothing since PHP 8.0 and is deprecated in 8.5, where it printed a notice for every API call. It's gone, and CI now tests PHP 8.0 through 8.5.

## Supply chain

These SDKs handle API keys and payment data, so what's inside them matters:

- **Node** has zero runtime dependencies. It uses `fetch` and Web Crypto, so the same code runs on Node, Deno, Bun and edge runtimes. Releases are published from CI with npm provenance, so the npm page links to the exact commit and workflow run that built the package. Each GitHub release also ships a CycloneDX SBOM, SHA-256 checksums and a cosign signature. More in [Shipping an SDK with zero dependencies and npm provenance](/blog/zero-dependency-sdk-provenance).
- **Python** uses only the standard library (`urllib`, `hmac`, `json`), and is published to PyPI with trusted publishing from GitHub Actions, so no long-lived token exists to steal.
- **PHP** needs only the `curl` and `json` extensions.
- **Rust** uses a small, well-known set of crates: `ureq` for blocking HTTP, `serde`/`serde_json`, and `hmac`/`sha2`/`hex` for webhook signatures.

## Upgrading

The new versions are additive. Existing code that creates invoices with `amount_usd_cents`, lists or retrieves them, and verifies webhooks works unchanged.

- **Node:** `npm install @shieldz/sdk@latest`. If you use TypeScript, `InvoiceCreateParams` now accepts either `amount_usd_cents` or `line_items`, and the `Invoice` type has the new catalog fields.
- **Python:** `pip install -U shieldz`.
- **PHP:** `composer require shieldz/shieldz:^0.2`.
- **Rust:** set `shieldz = "0.2"` in `Cargo.toml`.

Full changes are in each repository's `CHANGELOG.md`.

## Frequently asked questions

**Is this the same model as Stripe's Products, Prices and Payment Links?**
Yes, on purpose: the same object names, the same rule that a price never changes, archiving instead of deleting, `POST` for updates and `price_data` for one-off items. If you've built on Stripe, the Shieldz catalog will feel familiar. The differences are that amounts are always US cents (`unit_amount_usd_cents`), a product has one `image_url` rather than a list, and the buyer pays in crypto that settles straight to your own wallet.

**Do I need the API? Can I do this from the dashboard?**
Everything here also works in the dashboard under Products and Payment links, including image uploads. The API and SDKs are for when you want to keep your catalog in sync with your own system, or create links in bulk.

**Can my website's JavaScript create the checkout?**
Yes, with the publishable shop key: turn on carts of price IDs in the dashboard (Quick start → Widget), then call `Shieldz.checkout({ lineItems: [{ price: "price_…", quantity: 2 }] })` from the page. Only your own active prices are accepted, and the price comes from Shieldz.

**What does the buyer pay with?**
The hosted checkout accepts many coins and networks, and the payment settles to your wallet in the asset you chose. Shieldz never holds the funds.

**Where's the full reference?**
The [developer docs](https://shieldz.cash/docs#catalog) explain the catalog with an interactive builder, the [API reference](https://shieldz.cash/reference) describes every field, and the [Postman collection](https://shieldz.cash/shieldz.postman_collection.json) has a ready request for each endpoint.

## Get started

Pick your language, install the SDK and run the catalog example with your key:

```bash
# Node
npm install @shieldz/sdk
# Python
pip install shieldz
# PHP
composer require shieldz/shieldz
# Rust
cargo add shieldz
```

Then create your first product and payment link, put the buy button on your page, and fulfil from `invoice.paid`. If anything in this guide doesn't match what you see, open an issue on the SDK's GitHub repository. We'd rather fix the docs than have you guess.
