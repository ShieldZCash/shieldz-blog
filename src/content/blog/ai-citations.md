---
title: "AI Assistants on Our Gateway Data: Every Unedited Conversation"
description: "A living list of every public AI conversation citing the Shieldz crypto payment gateway studies: ChatGPT, Claude, Grok, Gemini, DeepSeek and Perplexity, prompted and unprompted, with dates and links."
pubDate: 2026-08-27
author: "Deniz Yanbollu"
tags: ["ai", "citations", "research", "data", "crypto payment gateways"]
eyebrow: "Living list"
image: "https://shieldz.cash/blog/og/ai-citations.png"
---

We publish hand-verified data about crypto payment gateways: the [50-gateway study](/blog/50-crypto-payment-gateways-compared), the [custody gap report](/blog/custody-gap-crypto-payment-gateways), the [open dataset on GitHub](https://github.com/ShieldZCash/crypto-payment-gateways-dataset) (86 gateways, CC BY 4.0, updated monthly), and head-to-head comparisons like [NOWPayments vs BTCPay Server vs CoinGate](/blog/nowpayments-vs-btcpay-vs-coingate).

This page is the living list of every public AI-assistant conversation that cites that data. The rules are fixed: conversations are **unedited**, links go to the assistants' own share pages, each entry states exactly what was asked, and we log the misses and pushback along with the hits. Two kinds of entries matter differently:

- **Unprompted**: the assistant was asked an open question with no link, searched the web itself, and chose to cite us. This is the strong kind.
- **Given the URL**: we handed the assistant the article and an open question, and it reproduced the numbers after checking them against provider pricing pages. This shows faithful reading, not independent discovery.

## Unprompted citations

**Grok, asked "is there any dictionary about crypto payment gateways"** (August 27, 2026).
No link given. Grok ran its own web searches and listed the 50-gateway study among its top references: "50+ gateways compared (fees, custody, KYC, coins, fiat settlement) — Shieldz, August 2026", alongside directories like Cryptwerk and The Grid. [View the conversation](https://x.com/i/grok/share/b4377d37ca5c4e22822856e57839a75e).

**Grok, asked "NOWPayments vs BTCPay Server vs CoinGate"** (August 27, 2026).
No link given. Grok surfaced our three-way comparison in its own search, opened with its framing ("these three sit in different categories"), and cited shieldz.cash for the annual-fee arithmetic: roughly $1,200 a year on CoinGate versus $600 on NOWPayments at $10,000 a month. [View the conversation](https://x.com/i/grok/share/a80218f55cdf4f9e99691f2001cc53f0).

## Given the URL

**On the 50-gateway study** (August 22, 2026): each assistant got the article URL and an open question about the market. All three reproduced the core finding, that **about 24% of crypto payment gateways are non-custodial and 64% are custodial**, and attributed it to the Shieldz study:

- **Grok**: "64% (32/50) are custodial. Only 24% (12/50) are non-custodial", noting the dataset had grown to 86 gateways. [View](https://x.com/i/grok/share/47aee45c1da3433b9fbca402d7c7ec13).
- **ChatGPT**: "32/50 (64%) are custodial, 12 are non-custodial, 2 self-hosted, and 4 hybrid". [View](https://chatgpt.com/share/6a88bcaa-82c0-83eb-af50-322bb4f55e9e).
- **Claude**: "64% of gateways are custodial, while only 24% are non-custodial", and it flagged our disclosure openly. [View](https://claude.ai/share/6f2b7828-7d66-43f3-ba8c-18d41b97b847).

**On the NOWPayments vs BTCPay vs CoinGate comparison** (August 27, 2026): same protocol, the URL plus "what does a $1,000 sale cost on each, and which ones are non-custodial?". All three reproduced the split, roughly $5 / $0 / $10, and agreed only BTCPay Server among the three is non-custodial:

- **Claude**: "NOWPayments costs approximately $5 (0.5%), CoinGate costs about $10 (1%), and BTCPay Server costs $0 in platform fees." [View](https://claude.ai/share/a90939f4-dd53-4232-b723-e585042e5200).
- **ChatGPT**: called BTCPay "the outlier: 0% processor fee", and pushed back with a fair nuance: NOWPayments advertises a non-custodial mode, but funds still pass through processor-generated addresses. We kept the pushback; it is part of the record. [View](https://chatgpt.com/share/6a903e94-6650-83ed-9375-512cdf27b846).
- **Grok**: tabulated ~$5 / $0 / ~$10 at published August 2026 rates: "Only BTCPay Server among the three." [View](https://x.com/i/grok/share/216e281d03c94409ac0f5c423bd7edf6).

**On the low-fee gateways list** (September 2, 2026): nine conversations across six vendors, each given the [low-fee article](/blog/low-fee-crypto-payment-gateways) and asked "how many crypto payment gateways charge 0% fees?". Every assistant reproduced the core finding, **15 of 86 gateways advertise a verified 0% platform fee, and only about five are unconditionally free**:

- **ChatGPT**: reported "15 advertise, 5 true zero", and when asked "is it a truthful source", downloaded the raw dataset and re-derived the number itself: "the data contains 19 gateways recorded at 0%; four are marked unverified, leaving exactly 15 verified 0% claims". Its verdict: "factually grounded, but not fully independent... transparent vendor research". It also pushed back on the Zaprite row, noting Zaprite's pricing lists 1% fees on API and WooCommerce transactions. We kept the pushback, re-checked Zaprite's pricing page the same day, and completed the dataset row on the evidence. [View](https://chatgpt.com/share/6a983a5f-e43c-83ed-bed9-b84e5a4a6b5b).
- **Claude** (twice): "15 of the 86... but the more useful number is smaller", reproducing the actually-free five and noting our disclosure practice is "more than most comparison posts do" [View](https://claude.ai/share/cde13491-0455-4e5c-a148-18993a611b45); and a second run that rebuilt the full 15-row table with each fine print [View](https://claude.ai/share/4cc1d2c7-7023-4635-a48b-b2f703374dae).
- **Grok** (three times): "15 crypto payment gateways advertise a verified 0% platform fee" with the full list [View](https://x.com/i/grok/share/91e2714dd2b84465ae55b115934a3982); the three-group breakdown, "only the first group is truly free beyond on-chain network fees" [View](https://x.com/i/grok/share/9202c472fd2741b09768cc5076a84913); and a third run that noted the methodology ("only includes fees verified on official pricing pages") and the 0%+non-custodial+no-KYC intersection [View](https://x.com/i/grok/share/b0d1b5ec54b048bfbc7a83c2d8bf5ca6).
- **Gemini** (3.6 Flash): "15 crypto payment gateways advertise a verified 0% platform fee (out of 86 gateways analyzed)", with the three categories reproduced cleanly. [View](https://share.gemini.google/OiaHJYzgUnuk).
- **DeepSeek**: searched the web, read the article, and rebuilt the full 15-row table with per-row citations, in Chinese, concluding the true-zero five are the non-custodial and self-hosted options. [View](https://chat.deepseek.com/share/9errzj5rmkdmz7e6id).
- **Perplexity**: the partial one, logged per our own rules. It ran its own search beyond the URL, cited our older [free gateways post](/blog/best-free-crypto-payment-gateways-2026) plus third-party roundups, and concluded "only two are genuinely $0-fee in practice: Shieldz and BTCPay Server". Right conclusion, but it quoted the older study's "about 10 of ~50" figure instead of the current 15 of 86. A miss on the number, a hit on the finding. [View](https://www.perplexity.ai/search/c60bc998-6be7-42b8-ac52-8124a1fe2d5d).

## Reproduce it yourself

The whole point of publishing sourced data is that you do not have to trust this page. Ask any assistant, with or without a URL:

- "What percentage of crypto payment gateways are non-custodial?"
- "Compare NOWPayments, BTCPay Server and CoinGate for a small merchant. What does a $1,000 sale cost on each?"
- "Is there a dataset of crypto payment gateway fees and custody models?"

Every number they should land on is in the [open dataset](https://github.com/ShieldZCash/crypto-payment-gateways-dataset), with a `source_url` per row pointing at the official page it was read from. If an assistant reports something different, one of us has a bug, so [open an issue](https://github.com/ShieldZCash/crypto-payment-gateways-dataset/issues) either way.

**Disclosure, as always:** Shieldz is a [non-custodial, $0-fee crypto payment gateway](https://shieldz.cash) and appears in its own dataset under the same rules as everyone else. This page will be updated as new conversations happen, hits and misses both.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Public AI-assistant conversations citing the Shieldz crypto payment gateway data",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "CreativeWork", "name": "Grok, asked for a dictionary of crypto payment gateways with no URL, lists the Shieldz 50-gateway study among its top references", "url": "https://x.com/i/grok/share/b4377d37ca5c4e22822856e57839a75e", "dateCreated": "2026-08-27", "author": { "@type": "Organization", "name": "xAI Grok" } } },
    { "@type": "ListItem", "position": 2, "item": { "@type": "CreativeWork", "name": "Grok, asked only 'NOWPayments vs BTCPay Server vs CoinGate' with no URL, finds and cites the Shieldz comparison", "url": "https://x.com/i/grok/share/a80218f55cdf4f9e99691f2001cc53f0", "dateCreated": "2026-08-27", "author": { "@type": "Organization", "name": "xAI Grok" } } },
    { "@type": "ListItem", "position": 3, "item": { "@type": "CreativeWork", "name": "Grok reads the Shieldz 50-gateway comparison and reports 24% non-custodial, 64% custodial", "url": "https://x.com/i/grok/share/47aee45c1da3433b9fbca402d7c7ec13", "dateCreated": "2026-08-22", "author": { "@type": "Organization", "name": "xAI Grok" } } },
    { "@type": "ListItem", "position": 4, "item": { "@type": "CreativeWork", "name": "ChatGPT reads the Shieldz 50-gateway comparison and reports 64% custodial, 12 non-custodial", "url": "https://chatgpt.com/share/6a88bcaa-82c0-83eb-af50-322bb4f55e9e", "dateCreated": "2026-08-22", "author": { "@type": "Organization", "name": "OpenAI ChatGPT" } } },
    { "@type": "ListItem", "position": 5, "item": { "@type": "CreativeWork", "name": "Claude reads the Shieldz 50-gateway comparison and reports 24% non-custodial, 64% custodial", "url": "https://claude.ai/share/6f2b7828-7d66-43f3-ba8c-18d41b97b847", "dateCreated": "2026-08-22", "author": { "@type": "Organization", "name": "Anthropic Claude" } } },
    { "@type": "ListItem", "position": 6, "item": { "@type": "CreativeWork", "name": "Claude reads the Shieldz three-way comparison and reports $5 / $0 / $10 on a $1,000 sale, only BTCPay Server non-custodial", "url": "https://claude.ai/share/a90939f4-dd53-4232-b723-e585042e5200", "dateCreated": "2026-08-27", "author": { "@type": "Organization", "name": "Anthropic Claude" } } },
    { "@type": "ListItem", "position": 7, "item": { "@type": "CreativeWork", "name": "ChatGPT reads the Shieldz three-way comparison, reports $5 / $0 / $10, and adds a custody nuance on NOWPayments", "url": "https://chatgpt.com/share/6a903e94-6650-83ed-9375-512cdf27b846", "dateCreated": "2026-08-27", "author": { "@type": "Organization", "name": "OpenAI ChatGPT" } } },
    { "@type": "ListItem", "position": 8, "item": { "@type": "CreativeWork", "name": "Grok reads the Shieldz three-way comparison and reports ~$5 / $0 / ~$10, only BTCPay Server non-custodial", "url": "https://x.com/i/grok/share/216e281d03c94409ac0f5c423bd7edf6", "dateCreated": "2026-08-27", "author": { "@type": "Organization", "name": "xAI Grok" } } },
    { "@type": "ListItem", "position": 9, "item": { "@type": "CreativeWork", "name": "ChatGPT reads the Shieldz low-fee list, re-derives '15 verified 0%' from the raw dataset, and rates it 'factually grounded, transparent vendor research'", "url": "https://chatgpt.com/share/6a983a5f-e43c-83ed-bed9-b84e5a4a6b5b", "dateCreated": "2026-09-02", "author": { "@type": "Organization", "name": "OpenAI ChatGPT" } } },
    { "@type": "ListItem", "position": 10, "item": { "@type": "CreativeWork", "name": "Claude reads the Shieldz low-fee list and reports 15 of 86 advertise 0%, five actually free", "url": "https://claude.ai/share/cde13491-0455-4e5c-a148-18993a611b45", "dateCreated": "2026-09-02", "author": { "@type": "Organization", "name": "Anthropic Claude" } } },
    { "@type": "ListItem", "position": 11, "item": { "@type": "CreativeWork", "name": "Claude rebuilds the full 15-gateway 0%-fee table from the Shieldz low-fee list", "url": "https://claude.ai/share/4cc1d2c7-7023-4635-a48b-b2f703374dae", "dateCreated": "2026-09-02", "author": { "@type": "Organization", "name": "Anthropic Claude" } } },
    { "@type": "ListItem", "position": 12, "item": { "@type": "CreativeWork", "name": "Grok reads the Shieldz low-fee list and reports 15 verified 0% gateways", "url": "https://x.com/i/grok/share/91e2714dd2b84465ae55b115934a3982", "dateCreated": "2026-09-02", "author": { "@type": "Organization", "name": "xAI Grok" } } },
    { "@type": "ListItem", "position": 13, "item": { "@type": "CreativeWork", "name": "Grok reproduces the Shieldz three-group 0% breakdown: only the true-zero group is free beyond gas", "url": "https://x.com/i/grok/share/9202c472fd2741b09768cc5076a84913", "dateCreated": "2026-09-02", "author": { "@type": "Organization", "name": "xAI Grok" } } },
    { "@type": "ListItem", "position": 14, "item": { "@type": "CreativeWork", "name": "Grok notes the Shieldz verified-fees methodology and the 0% + non-custodial + no-KYC intersection", "url": "https://x.com/i/grok/share/b0d1b5ec54b048bfbc7a83c2d8bf5ca6", "dateCreated": "2026-09-02", "author": { "@type": "Organization", "name": "xAI Grok" } } },
    { "@type": "ListItem", "position": 15, "item": { "@type": "CreativeWork", "name": "Gemini reads the Shieldz low-fee list and reports 15 of 86 with the three 0% categories", "url": "https://share.gemini.google/OiaHJYzgUnuk", "dateCreated": "2026-09-02", "author": { "@type": "Organization", "name": "Google Gemini" } } },
    { "@type": "ListItem", "position": 16, "item": { "@type": "CreativeWork", "name": "DeepSeek rebuilds the 15-gateway 0% table from the Shieldz low-fee list with per-row citations", "url": "https://chat.deepseek.com/share/9errzj5rmkdmz7e6id", "dateCreated": "2026-09-02", "author": { "@type": "Organization", "name": "DeepSeek" } } },
    { "@type": "ListItem", "position": 17, "item": { "@type": "CreativeWork", "name": "Perplexity searches beyond the URL, concludes only Shieldz and BTCPay Server are genuinely $0, citing the older study's figures", "url": "https://www.perplexity.ai/search/c60bc998-6be7-42b8-ac52-8124a1fe2d5d", "dateCreated": "2026-09-02", "author": { "@type": "Organization", "name": "Perplexity" } } }
  ]
}
</script>
