---
title: "How to Swap BTC or USDT to Zcash (ZEC) Without an Exchange"
description: "Swap BTC, ETH, USDT or USDC to native ZEC, or ZEC back to BTC, from your own wallet. Maya Protocol now races NEAR Intents on every ZEC quote. Live costs inside."
pubDate: 2026-11-10
author: "Deniz Yanbollu"
tags: ["swap btc to zec", "usdt to zec", "zec to btc", "zcash", "maya protocol", "near intents", "cross-chain crypto swap", "non-custodial"]
eyebrow: "Guide"
swapBanner: true
image: "https://shieldz.cash/blog/og/swap-btc-to-zec.png"
---

To swap BTC or USDT to Zcash without an exchange, you need a protocol that pays out native ZEC on the Zcash network, not a wrapped token on some other chain. Very few do. Until today [Shieldz Swap](https://swap.shieldz.cash) had one, NEAR Intents. On 2026-11-10 we added **Maya Protocol**, so every ZEC quote is now a race between two independent routes.

This post shows what each route does, which one won on live quotes at different sizes, and what you need to know about transparent and shielded addresses before you send anything. Every number below comes from the Shieldz router on 2026-11-10.

## Two routes that deliver real ZEC

**NEAR Intents** gives you a one-time deposit address for your coin. You send to it from any wallet or straight from an exchange withdrawal, a solver fills the swap, and native ZEC goes out to your Zcash address. It works in both directions: into ZEC from BTC, ETH, SOL, USDT or USDC on most chains, and out of ZEC into all of them.

**Maya Protocol** is a cross-chain AMM in the THORChain family. It holds native pools of BTC, ETH, ZEC, DASH and Cardano ADA, and a swap moves through those pools without wrapping anything. You pay Maya's vault with a short instruction (a memo) that says what you want and where it goes. Shieldz Swap builds that memo for you. What you can pay Maya with today:

- **BTC**, from a Ledger, Trezor or Keystone. The memo rides in an extra OP_RETURN output, and only the hardware wallets whose transaction Shieldz builds can carry it. Browser wallets like MetaMask and OKX build the Bitcoin transaction themselves and drop the memo, so the app does not offer Maya to them.
- **ETH on Ethereum**, from a connected wallet.
- **ETH, USDC, USDT or WBTC on Arbitrum**, as a plain transfer. Here Shieldz gives you a "door" address that adds the memo for you, so even a withdrawal from an exchange works.

Paying out of ZEC is NEAR Intents only for now.

## BTC to ZEC: which route wins

We asked both routes for the same swap at the same minute, at two sizes:

<figure style="margin:28px 0">
  <a href="/blog/charts/zec-btc-routes.svg"><img src="/blog/charts/zec-btc-routes.svg" alt="BTC to ZEC quoted at the same moment. At 0.01 BTC, Maya delivers 0.64901961 ZEC (0.32% cost) and NEAR Intents 0.64858870 ZEC (0.39%). At 0.1 BTC, NEAR Intents delivers 6.47933640 ZEC (0.49%) and Maya 6.40440090 ZEC (1.64%)." width="860" height="360" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Maya wins small bitcoin swaps; NEAR Intents wins once the size outgrows Maya's ZEC pool.</figcaption>
</figure>

At 0.01 BTC (about $743), Maya delivered slightly more ZEC and was quoted to land about four minutes sooner. At 0.1 BTC (about $7,430), it fell well behind: NEAR Intents paid 0.075 ZEC more, roughly $85. The reason is pool depth. Maya prices a swap from what sits in its pools, so a large order moves the price against you. NEAR Intents solvers fill from their own inventory, so the price holds up better as the size grows.

The router ranks quotes by what you receive, discounted by 0.05% for every minute a route expects to take, and it simply drops any Maya quote past 5% price impact. You do not have to work out the crossover yourself. If you pay by QR code, or from a browser wallet, you get the NEAR Intents quote; at 0.01 BTC that cost us 0.00043 ZEC, about fifty cents.

## USDT, USDC or ETH to ZEC

Stablecoins are where most people start, and here NEAR Intents was the better route at every size we tried:

| You send | ZEC received | Route | Cost |
|---|---|---|---|
| 100 USDC on Arbitrum | 0.08702906 | NEAR Intents | 0.59% |
| 1,000 USDC on Arbitrum | 0.87314345 | NEAR Intents | 0.27% |
| 5,000 USDC on Arbitrum | 4.36690869 | NEAR Intents | 0.24% |
| 1,000 USDT on Ethereum | 0.87229221 | NEAR Intents | 0.32% |
| 500 USDT on Tron | 0.43602291 | NEAR Intents | 0.35% |
| 2,000 USDT on Tron | 1.74505888 | NEAR Intents | 0.29% |
| 1 ETH on Ethereum | 1.83018750 | NEAR Intents | 0.51% |

Maya quoted 100 USDC to 0.08552147 ZEC (2.31%) and 1 ETH to 1.82277207 ZEC (0.92%). At 1,000 USDC it would have meant 10% price impact, so the router refused the quote. The stablecoin side of Maya's ZEC market is thin today. Cost in the table is measured against one price snapshot (ZEC at $1,141.70) and already includes every fee.

USDT on Tron to ZEC works with no extra step: you send TRC-20 USDT to the deposit address and ZEC arrives. If your USDT sits on the wrong network for some other reason, see [how to move USDT and USDC between chains](/blog/move-usdt-usdc-between-chains).

## ZEC to BTC, USDT or USDC

Going the other way, you send ZEC to a NEAR Intents deposit address and choose what comes out:

| You send | You receive | Cost |
|---|---|---|
| 1 ZEC | 0.01527202 BTC | 0.56% |
| 5 ZEC | 0.07638109 BTC | 0.53% |
| 1 ZEC | 1,136.24 USDC on Arbitrum | 0.52% |
| 1 ZEC | 1,136.51 USDT on Tron | 0.55% |

ZEC to BTC was quoted at about 15 minutes, since both a Zcash and a Bitcoin transaction have to confirm. You can send from a shielded wallet; the deposit address is transparent, and a wallet like Zashi sends from its shielded balance to a transparent address without any extra step. You also give a transparent Zcash refund address, used only if the swap cannot complete.

<figure style="margin:28px 0">
  <a href="/blog/charts/zec-swap-costs.svg"><img src="/blog/charts/zec-swap-costs.svg" alt="Cheapest route cost per pair: 0.01 BTC to ZEC 0.32% via Maya; 0.1 BTC to ZEC 0.49%; 1 ETH to ZEC 0.51%; 100 USDC to ZEC 0.59%; 1,000 USDC to ZEC 0.27%; 500 Tron USDT to ZEC 0.35%; 2,000 Tron USDT to ZEC 0.29%; 1 ZEC to BTC 0.56%; 1 ZEC to USDC 0.52%, all via NEAR Intents except the first." width="860" height="608" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Every measured pair stayed between 0.24% and 0.59% on its best route.</figcaption>
</figure>

## Transparent in, shielded after

Both routes deliver to a **transparent** Zcash address: one starting with `t1` or `t3`, or a `tex1` address (the ZIP-320 format some exchanges ask for). They cannot pay a shielded `zs` or unified `u1` address directly. The router checks the address you paste and refuses anything it cannot deliver to, so you will not lose funds to a format mismatch.

If privacy is why you are buying ZEC, the fix is one extra transaction: receive to the transparent address of your own wallet, then shield it. Zashi, for example, shows transparent funds separately and offers to shield them into your private balance. After that, the coins look like any other shielded ZEC.

If you run a business and want customers to pay you in shielded ZEC, that is a different flow and it does not need a swap at all. See [how to accept Zcash payments, including shielded ZEC](/blog/how-to-accept-zcash-payments).

## How to swap BTC to ZEC, step by step

1. **Open [swap.shieldz.cash](https://swap.shieldz.cash/swap/btc-to-zec)**, set **You pay** to BTC and **You get** to ZEC.
2. **Enter an amount.** Both routes answer within a few seconds, and the best one is picked for you.
3. **Paste your Zcash address** under Receive at. Use a transparent `t1` address.
4. **Choose how to pay.** Connect a Ledger, Trezor or Keystone to be offered Maya as well, or choose **Pay by QR code** and enter a Bitcoin refund address.
5. **Send the exact amount** shown. With a hardware wallet, confirm the transaction on the device.
6. **Follow it in Activity** until the ZEC lands, then shield it in your wallet if you want it private.

For USDT, set You pay to USDT on the network your coins are on ([USDT to ZEC](https://swap.shieldz.cash/swap/usdt-to-zec)). For the other direction, start at [ZEC to BTC](https://swap.shieldz.cash/swap/zec-to-btc).

## What it costs

On every quote above, the Shieldz service fee is 0.15%. Maya publishes its own breakdown: on the 0.01 BTC quote it came to 0.29% in total, made of our 0.15%, 0.07% of pool slippage and an outbound fee of 0.0004233 ZEC (about 48 cents) for sending your ZEC. At 0.1 BTC the slippage alone was 0.77%, and Maya's pool price also sat below the market price, which is how the total cost reached 1.64%. NEAR Intents solvers build their margin into the rate. All of it is already taken out of the amount you are shown. The only cost on top is the network fee your wallet pays to send.

Fixed fees like that outbound fee weigh more on small swaps, and each route has a minimum. The form tells you when an amount is under one. Our [swap fee comparison](/blog/crypto-swap-fees-compared) puts app fees across swap apps side by side.

## Maya brings more than ZEC

The same integration adds destinations that are hard to reach anywhere else without an exchange: **DASH**, **Cardano ADA**, **RUNE** on THORChain and **CACAO** on Maya itself, plus wstETH and a few Arbitrum tokens. Their pools are smaller than ZEC's: 100 USDC bought 540.36 ADA in our test, but 1,000 USDC was past the price-impact limit. Keep these swaps small for now.

## FAQ

**Can I swap BTC to ZEC without an exchange?**
Yes. On Shieldz Swap you send native BTC from your own wallet, and Maya Protocol or NEAR Intents delivers native ZEC to your Zcash address. There is no account and no KYC, and Shieldz never holds the funds.

**Can I receive shielded ZEC directly from a swap?**
No. Both routes pay a transparent address (`t1`, `t3` or `tex1`). Receive to your own wallet's transparent address and shield it from there; it takes one transaction.

**Which is cheaper for ZEC, Maya or NEAR Intents?**
It depends on size. On 2026-11-10 Maya paid more on a 0.01 BTC swap, and NEAR Intents paid more on 0.1 BTC and on every stablecoin size we tried. The router asks both and picks for you.

**How long does a BTC to ZEC swap take?**
About 11 to 15 minutes in our quotes. Most of that is waiting for your Bitcoin transaction to confirm; Zcash itself makes a block about every 75 seconds.

**Can I swap ZEC back to BTC or USDT?**
Yes, through NEAR Intents. Send ZEC to the deposit address and choose BTC, USDT, USDC, ETH or SOL as the output. 1 ZEC to BTC cost 0.56% in our test.

## Try it

Open [swap.shieldz.cash](https://swap.shieldz.cash/swap/btc-to-zec), set BTC to ZEC, and open the route list to see both quotes side by side. For the basics of native versus wrapped bitcoin, read [how to swap Bitcoin to ETH or SOL](/blog/swap-bitcoin-to-ethereum-solana). If you hold your keys on a hardware wallet, [swapping crypto with a hardware wallet](/blog/swap-crypto-with-hardware-wallet) covers the signing side.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to swap BTC to ZEC",
  "description": "Swap native bitcoin to native Zcash with Shieldz Swap, comparing Maya Protocol and NEAR Intents routes.",
  "totalTime": "PT15M",
  "step": [
    { "@type": "HowToStep", "name": "Pick your coins", "text": "On swap.shieldz.cash, set You pay to BTC and You get to ZEC." },
    { "@type": "HowToStep", "name": "Compare routes", "text": "Enter an amount. Maya Protocol and NEAR Intents each return a quote with the amount received and the expected time." },
    { "@type": "HowToStep", "name": "Set where you receive", "text": "Paste a transparent Zcash address (t1, t3 or tex1) under Receive at." },
    { "@type": "HowToStep", "name": "Choose how to pay", "text": "Connect a Ledger, Trezor or Keystone to be offered the Maya route too, or choose Pay by QR code and enter a Bitcoin refund address." },
    { "@type": "HowToStep", "name": "Send the BTC", "text": "Send the exact amount shown to the deposit address, confirming on your hardware wallet if you use one." },
    { "@type": "HowToStep", "name": "Receive and shield", "text": "Follow the swap in Activity until the ZEC arrives, then shield it in your wallet if you want it private." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I swap BTC to ZEC without an exchange?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. On Shieldz Swap you send native BTC from your own wallet, and Maya Protocol or NEAR Intents delivers native ZEC to your Zcash address. There is no account and no KYC, and Shieldz never holds the funds." } },
    { "@type": "Question", "name": "Can I receive shielded ZEC directly from a swap?", "acceptedAnswer": { "@type": "Answer", "text": "No. Both routes pay a transparent address (t1, t3 or tex1). Receive to your own wallet's transparent address and shield it from there; it takes one transaction." } },
    { "@type": "Question", "name": "Which is cheaper for ZEC, Maya or NEAR Intents?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on size. On 2026-11-10 Maya paid more on a 0.01 BTC swap, and NEAR Intents paid more on 0.1 BTC and on every stablecoin size we tried. The router asks both and picks for you." } },
    { "@type": "Question", "name": "How long does a BTC to ZEC swap take?", "acceptedAnswer": { "@type": "Answer", "text": "About 11 to 15 minutes in our quotes. Most of that is waiting for your Bitcoin transaction to confirm; Zcash itself makes a block about every 75 seconds." } },
    { "@type": "Question", "name": "Can I swap ZEC back to BTC or USDT?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, through NEAR Intents. Send ZEC to the deposit address and choose BTC, USDT, USDC, ETH or SOL as the output. 1 ZEC to BTC cost 0.56% in our test." } }
  ]
}
</script>
