---
title: "How to Move USDT From Ethereum to Tron (ERC-20 to TRC-20), and Back"
description: "Move USDT from Ethereum to Tron, or Tron to Ethereum and Solana, from your own wallet with no exchange. Live quotes at $100, $1,000 and $10,000, minimums and gas."
pubDate: 2026-11-10
author: "Deniz Yanbollu"
tags: ["move usdt ethereum to tron", "usdt erc20 to trc20", "usdt tron to ethereum", "usdt tron to solana", "trc20", "cross-chain crypto swap", "non-custodial"]
eyebrow: "Guide"
swapBanner: true
image: "https://shieldz.cash/blog/og/move-usdt-ethereum-to-tron.png"
---

To move USDT from Ethereum to Tron, you swap ERC-20 USDT on Ethereum for TRC-20 USDT on Tron. You cannot simply send it across: the two are separate tokens on separate chains, and an Ethereum wallet cannot even address a Tron `T...` address. A cross-chain route takes your USDT on one side and pays out USDT on the other. On [Shieldz Swap](https://swap.shieldz.cash/swap/usdt-erc20-to-trc20) that takes about a minute after your deposit confirms and costs about 0.35% at $1,000.

This post has live quotes for both directions at three sizes, plus Tron to Solana, Base and Arbitrum, and the minimums and gas that catch people out. Every number comes from the Shieldz router on 2026-11-10. Our broader guide on [moving USDT and USDC between chains](/blog/move-usdt-usdc-between-chains) covers the other networks.

## ERC-20, TRC-20 and "USDT20"

Tether issues USDT natively on both chains. **ERC-20** is the Ethereum version, **TRC-20** the Tron one; some apps and exchanges shorten that to "USDT20" or "USDT-TRC20". Both are worth one dollar and both are redeemable with Tether, but a balance on one chain does not exist on the other. Moving between them is a swap, even if it is USDT to USDT.

People mostly move to Tron because sending USDT there is cheap and many exchanges, OTC desks and merchants prefer it. They move back to Ethereum, Arbitrum or Base to use it in DeFi or to pay someone who only takes EVM stablecoins.

## Ethereum to Tron: live quotes

Shieldz asks every route that can fill the swap and shows you the best one. For Ethereum USDT to Tron USDT, two answered:

| You send (Ethereum) | Relay | NEAR Intents | Cost of best |
|---|---|---|---|
| 100 USDT | **98.88** | 98.83 | 1.12% |
| 1,000 USDT | **996.54** | 996.13 | 0.35% |
| 10,000 USDT | **9,973.16** | 9,969.11 | 0.27% |

Relay won at every size, by a few cents to four dollars, and it pays out within seconds of seeing your deposit. NEAR Intents quoted about 100 seconds. At $100 the fixed part of the cost (about 84 cents of gas Relay spends delivering on Tron) is what pushes the percentage above 1%.

Chainflip also lists Tron USDT, but it was down for maintenance while we took these quotes. When it is up, it joins the same race.

## Tron to Ethereum: live quotes

| You send (Tron) | Relay | NEAR Intents | Cost of best |
|---|---|---|---|
| 100 USDT | **97.77** | under minimum | 2.23% |
| 1,000 USDT | 995.97 | **996.70** | 0.33% |
| 10,000 USDT | **9,977.97** | 9,969.68 | 0.22% |

Two things stand out. Delivering on Ethereum costs more than delivering on Tron, so a small Tron to Ethereum swap is relatively expensive: about $2 of the $2.23 cost at $100 is Ethereum gas. And NEAR Intents currently has a **$100 minimum** on swaps from Tron, so at exactly $100 you only get one quote. If you are moving a small amount and do not need Ethereum mainnet specifically, send it to Arbitrum or Base instead; it is cheaper to land there.

## Tron to Solana, Base or Arbitrum

<figure style="margin:28px 0">
  <a href="/blog/charts/usdt-tron-1k.svg"><img src="/blog/charts/usdt-tron-1k.svg" alt="1,000 stablecoins moved to or from Tron, best route each: Arbitrum USDC to Tron USDT 997.52; Tron USDT to Solana 996.99; Tron to Ethereum 996.70; Ethereum to Tron 996.54; Solana to Tron 996.31; Tron USDT to Base USDC 995.91; BNB Chain USDT to Tron 992.80." width="860" height="504" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">At $1,000, every direction except BNB Chain landed within 0.25% to 0.41% of the amount sent.</figcaption>
</figure>

**Tron USDT to Solana USDT** paid 996.99 through NEAR Intents (Relay: 995.81), about 77 seconds. The reverse, Solana to Tron, went to Relay at 996.31. If you searched for doing this with an aggregator like Rango, this is the same idea: the router asks several bridges at once and picks the best price. You do not need an account for it.

**Tron USDT to USDC on Base or Arbitrum** came out at 995.91 either way, through NEAR Intents. That is a two-in-one move: change chain and change stablecoin. Going the other way, 1,000 USDC on Arbitrum bought 997.52 Tron USDT through Relay, the best rate in the whole set.

**BNB Chain USDT to Tron** was the weak one: 992.80 through Relay, because NEAR Intents currently wants at least $1,000 on that pair.

## Gas: what you need before you start

The quoted amount already includes every route fee. What it does not include is the network fee for **your own** transfer into the route, and you pay that in the chain's native coin:

- **From Ethereum**, you need a little ETH to send the USDT.
- **From Tron**, you need TRX. A TRC-20 transfer burns TRX for energy unless you have energy staked, and if the receiving deposit address is new, the first transfer costs a little more. Keep a few dollars of TRX in the wallet.
- **From Solana, Arbitrum or Base**, a few cents of SOL or ETH.

You do not need any TRX to *receive* USDT on Tron.

## How to move USDT from Ethereum to Tron, step by step

1. **Open [swap.shieldz.cash](https://swap.shieldz.cash/swap/usdt-erc20-to-trc20)** with **You pay** set to USDT on Ethereum and **You get** set to USDT on Tron.
2. **Enter an amount.** Relay, NEAR Intents and (when it is up) Chainflip answer within a few seconds, and the best one is picked.
3. **Paste your Tron address** under Receive at. It starts with `T`. The form checks the format before you can continue.
4. **Connect your wallet** (MetaMask, a Ledger or any other EVM wallet) or pay by QR code if the route offers it.
5. **Confirm the transfer** in your wallet.
6. **Follow it in Activity** until the TRC-20 USDT lands.

For the other direction start at [USDT TRC-20 to ERC-20](https://swap.shieldz.cash/swap/usdt-trc20-to-erc20) and connect TronLink or a Ledger. For Solana, use [USDT TRC-20 to Solana](https://swap.shieldz.cash/swap/usdt-trc20-to-solana).

## Mistakes that cost money

- **Picking the wrong network on an exchange withdrawal.** If an exchange shows you a deposit address for "USDT (ERC20)", sending TRC-20 USDT to it can lose the funds or need a manual recovery. Match the network on both sides.
- **Looking for USDC on Tron.** Circle stopped supporting USDC on Tron in 2024, so there is no live USDC there to move. Swap into TRC-20 USDT instead, for example from [USDC to USDT TRC-20](https://swap.shieldz.cash/swap/usdc-to-usdt-trc20).
- **Moving $50 from Tron to Ethereum mainnet.** Ethereum delivery gas alone can eat several percent. Pick Arbitrum or Base unless the recipient needs mainnet.
- **Sending from an empty-TRX wallet.** The transfer will fail before it reaches the route. Top up TRX first.

## Taking USDT on Tron as a business

If you are moving USDT because customers pay you in it, you can skip the step. Shieldz checkout accepts USDT on Tron and settles it to the coin and chain you choose, straight to your own wallet. Tron is offered on invoices from $120, the current minimum of the route behind it. See [how to accept USDT payments](/blog/how-to-accept-usdt-payments).

## FAQ

**How do I move USDT from Ethereum to Tron?**
Swap ERC-20 USDT for TRC-20 USDT through a cross-chain route. On Shieldz Swap you send USDT from your Ethereum wallet and receive USDT at your Tron address, usually within a couple of minutes, with no account.

**What does it cost to move USDT from Ethereum to Tron?**
In our quotes on 2026-11-10, 0.35% at $1,000 and 0.27% at $10,000, all route fees included. On top of that you pay Ethereum gas for your own transfer.

**Can I move USDT from Tron to Ethereum under $100?**
Yes, through Relay, but it is expensive: at $100 the swap cost 2.23%, mostly Ethereum gas. NEAR Intents currently has a $100 minimum on swaps from Tron.

**What is USDT20?**
Another name for TRC-20 USDT, the version of Tether on the Tron network.

**Can I move USDT from Tron to Solana without an exchange?**
Yes. 1,000 TRC-20 USDT became 996.99 USDT on Solana through NEAR Intents in our test, in about 77 seconds.

## Try it

Open [swap.shieldz.cash](https://swap.shieldz.cash/swap/usdt-erc20-to-trc20), set USDT on Ethereum to USDT on Tron, and open the route list to see every quote. For the same move on other chains, read [how to move USDT and USDC between chains](/blog/move-usdt-usdc-between-chains), and for a side-by-side of swap app fees, our [swap fee comparison](/blog/crypto-swap-fees-compared).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to move USDT from Ethereum to Tron",
  "description": "Swap ERC-20 USDT on Ethereum for TRC-20 USDT on Tron with Shieldz Swap, comparing Relay, NEAR Intents and Chainflip routes.",
  "totalTime": "PT5M",
  "step": [
    { "@type": "HowToStep", "name": "Pick your coins", "text": "On swap.shieldz.cash, set You pay to USDT on Ethereum and You get to USDT on Tron." },
    { "@type": "HowToStep", "name": "Compare routes", "text": "Enter an amount. Every route that can fill it returns a quote, and the best one is picked." },
    { "@type": "HowToStep", "name": "Set where you receive", "text": "Paste your Tron address, starting with T, under Receive at." },
    { "@type": "HowToStep", "name": "Connect your wallet", "text": "Connect MetaMask, a Ledger or another EVM wallet holding the USDT and a little ETH for gas." },
    { "@type": "HowToStep", "name": "Confirm", "text": "Confirm the transfer in your wallet." },
    { "@type": "HowToStep", "name": "Receive", "text": "Follow the swap in Activity until the TRC-20 USDT arrives at your Tron address." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I move USDT from Ethereum to Tron?", "acceptedAnswer": { "@type": "Answer", "text": "Swap ERC-20 USDT for TRC-20 USDT through a cross-chain route. On Shieldz Swap you send USDT from your Ethereum wallet and receive USDT at your Tron address, usually within a couple of minutes, with no account." } },
    { "@type": "Question", "name": "What does it cost to move USDT from Ethereum to Tron?", "acceptedAnswer": { "@type": "Answer", "text": "In our quotes on 2026-11-10, 0.35% at $1,000 and 0.27% at $10,000, all route fees included. On top of that you pay Ethereum gas for your own transfer." } },
    { "@type": "Question", "name": "Can I move USDT from Tron to Ethereum under $100?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, through Relay, but it is expensive: at $100 the swap cost 2.23%, mostly Ethereum gas. NEAR Intents currently has a $100 minimum on swaps from Tron." } },
    { "@type": "Question", "name": "What is USDT20?", "acceptedAnswer": { "@type": "Answer", "text": "Another name for TRC-20 USDT, the version of Tether on the Tron network." } },
    { "@type": "Question", "name": "Can I move USDT from Tron to Solana without an exchange?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. 1,000 TRC-20 USDT became 996.99 USDT on Solana through NEAR Intents in our test, in about 77 seconds." } }
  ]
}
</script>
