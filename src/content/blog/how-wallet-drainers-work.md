---
title: "How crypto wallet drainers work, and why a payment processor should never ask you to connect"
description: "Most crypto theft at checkout comes from one mechanism: token approvals. Here is how drainers exploit it, and why accepting a payment should never involve connecting your wallet."
pubDate: 2026-06-25
author: "Deniz Yanbollu"
tags: ["security", "non-custodial"]
---

If you have spent time in crypto, you have seen the warnings: "never connect your wallet to a site you do not trust." The reason is a specific, well-understood attack, and understanding it tells you a lot about whether a payment tool is safe.

## The mechanism: token approvals

ERC-20 tokens let you grant another address an allowance to move your tokens. This exists for good reasons, like letting a DEX swap on your behalf. The attack abuses it. A malicious site asks you to "connect your wallet" and then to sign an approval, often for an unlimited amount. Once you sign, a contract the attacker controls can move that token out of your wallet whenever it wants. That is what a "drainer" is. The theft does not happen when you connect; it happens later, quietly, using the allowance you granted.

This is why connecting a wallet and signing approvals on an untrusted site is dangerous. The approval is the loaded gun.

## Why accepting a payment should not need any of that

Here is the key point: receiving a payment does not require approvals at all. A normal payment is the buyer sending crypto to an address. No connection, no allowance, no contract interaction. It works exactly like handing someone cash.

Shieldz is built on that fact. To get paid, you give a receive address or an extended public key. Buyers send crypto to a one-time address, or scan a QR. There is no "connect wallet" button on the merchant side, no token approval to sign, and therefore no allowance for a drainer to abuse. The mechanism the attack depends on simply is not present.

Signing in to the dashboard does use a wallet signature (Sign-In with Ethereum), but that is a plain message signature proving you own an address. A message signature moves no funds and grants no spending access. It is not an approval.

## The broader rule

A payment processor should never ask for your seed phrase or private key, and a non-custodial one never needs them. Shieldz only ever holds a public key, which can derive your receive addresses but mathematically cannot spend. If any site asks for your seed phrase, close the tab.

You do not have to take our word for it. The derivation code is open source, so you can confirm Shieldz only handles public keys: [shieldz.cash/verify](https://shieldz.cash/verify).
