---
title: "Shipping an SDK with zero dependencies and npm provenance"
description: "Why the Shieldz SDK has no runtime dependencies, how it verifies webhooks on the Web Crypto API so it runs anywhere, and what npm provenance actually proves."
pubDate: 2026-06-26
author: "Deniz Yanbollu"
tags: ["engineering", "sdk", "supply-chain"]
---

When we built the official Shieldz SDK, two constraints shaped almost every decision: no runtime dependencies, and run anywhere. Here is why, and how it turned out.

## Zero runtime dependencies

Supply-chain attacks through transitive npm packages are routine now. A single compromised dependency three levels down can ship malicious code into thousands of apps. So `@shieldz/sdk` declares an empty `dependencies` object. It uses only web standards: `fetch` for HTTP and Web Crypto for signatures. The only dev dependency is TypeScript, which never ships to your app.

This is not purity for its own sake. Fewer dependencies means a smaller attack surface, a smaller install, and nothing that can break or get hijacked between releases.

## Webhook verification that runs anywhere

A webhook handler can live on Node, Deno, Bun, or an edge runtime like Cloudflare Workers. Most SDKs hardcode Node's `crypto` module and break outside Node. We built verification on the Web Crypto API instead:

```ts
import { constructEvent } from "@shieldz/sdk";

const event = await constructEvent(rawBody, signatureHeader, secret);
if (event.type === "invoice.paid") fulfill(event.data.invoice);
```

It verifies the HMAC in constant time and rejects anything outside a timestamp tolerance to close replay attacks. On older Node without a global `crypto`, it falls back to `node:crypto` through a dynamic import, so bundlers targeting the edge never try to resolve it.

## What npm provenance actually proves

Every release is published from CI with a Sigstore provenance attestation. The "provenance" badge on the npm page links the exact Git commit and the exact GitHub Actions run that produced the package. You can confirm that the code on npm is the code on GitHub, built by the workflow you can read, not something a maintainer pushed from a laptop.

Each GitHub release also ships a CycloneDX SBOM, SHA-256 checksums, and a cosign signature, and the source is permanently archived on Software Heritage.

None of this makes the SDK special. It is what a payments SDK should be by default. The [source is on GitHub](https://github.com/ShieldZCash/shieldz-sdk), and the same surface exists for [Python, Rust, and PHP](https://shieldz.cash/sdks).
