---
title: "Kripto ile ödeme nasıl alınır: 30 saniyede başlangıç"
description: "Kripto ile ödeme nasıl alınır: emanetsiz, KYC yok, doğrudan kendi cüzdanınıza, %0 platform ücretiyle. Cüzdan adresi yapıştırın, ödeme linkini alın."
pubDate: 2026-07-27
author: "Deniz Yanbollu"
tags: ["kripto", "ödeme", "kripto ödeme kabul etme", "stablecoin", "rehber"]
eyebrow: "Rehber"
lang: "tr"
image: "https://shieldz.cash/blog/og/kripto-ile-odeme-nasil-alinir.png"
---

Kripto ile ödeme nasıl alınır sorusunun kısa cevabı şu: bir cüzdan adresi, bir ödeme linki ve arada parayı tutan hiç kimse. Çoğu insan bunun bir şirket hesabı, kimlik doğrulama (KYC) ve yüzdelik komisyon gerektirdiğini sanıyor. Gerektirmez. Bir cüzdan adresiyle, dakikalar içinde, doğrudan kendi cüzdanınıza kripto ödeme kabul etmeye başlayabilirsiniz.

Bu rehber kripto ödemeyi en sade haliyle anlatıyor: neden işe yaradığı, **emanetsiz** (non-custodial) olmanın ne demek olduğu ve adım adım nasıl canlıya alacağınız. [Shieldz](https://shieldz.cash) ile para size hiç uğramadan doğrudan cüzdanınıza gelir, platform ücreti %0'dır ve yalnızca ağ (gas) ücretini ödersiniz.

## Neden kripto ile ödeme almalı

Bir stablecoin (USDC veya USDT gibi, dolara birebir sabitli) ile ödeme birkaç dakikada gelir, sınır tanımaz ve anlaştığınız tam tutarı alırsınız. Kredi kartı ve klasik ödeme sağlayıcıları ise her satıştan yüzde artı sabit ücret keser, üstüne ters ibraz (chargeback) ve ödeme gecikmesi riski taşır.

<figure style="margin:28px 0">
  <a href="/blog/charts/stablecoin-vs-card-cost.svg"><img src="/blog/charts/stablecoin-vs-card-cost.svg" alt="100 dolarlık bir satışı tahsil etmenin 2026'daki maliyeti: PayPal 3.98 dolar, Stripe kart 3.20 dolar, Coinbase Commerce 1 dolar ve bir Shieldz stablecoin ödemesi yaklaşık 0.01 dolar." width="760" height="388" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">100 dolarlık satışta kart rayları 3 ila 4 dolar keser. Bir stablecoin ödemesi yaklaşık bir sent gas tutar.</figcaption>
</figure>

## "Emanetsiz" ne demek ve neden önemli

Piyasada iki model var, ve fark burada.

**Emanetli (custodial).** Ödeme geçidi, müşterinin parasını önce kendi cüzdanına alır, bakiyeyi sizin adınıza tutar ve kendi takvimine göre size öder. Parayı tuttukları için inceleyebilir, geciktirebilir, hatta dondurabilirler. İşte KYC ve hesap açma zorunluluğu da buradan gelir: başkasının parasını tutuyorsanız düzenleyici bunu ister.

**Emanetsiz (non-custodial).** Ödeme geçidi paraya hiç dokunmaz. Müşteri doğrudan size ait bir cüzdan adresine, blok zincirinin üstünde öder. Arada dondurulacak bakiye, beklenecek ödeme takvimi yoktur. [Shieldz](https://shieldz.cash) tam olarak böyle çalışır ve bunu [kendiniz doğrulayabilirsiniz](https://shieldz.cash/verify).

## Adım adım: 30 saniyede ödeme alma

Kod yazmanıza da hesap açmanıza da gerek yok.

1. **Bir cüzdan adresi hazırlayın.** `0x` ile başlayan herhangi bir EVM cüzdanı yeterli (örneğin Base ağında). MetaMask, Trust Wallet ya da hâlihazırda kullandığınız cüzdan olur. Özel anahtarınızı asla paylaşmazsınız.
2. **Link oluşturma aracını açın.** [Ödeme linki oluşturucuya](https://shieldz.cash/tools/payment-link) cüzdan adresinizi ve tutarı yapıştırın. Müşterinin tutarı kendi belirlemesini mi istiyorsunuz (bağış veya bahşiş gibi)? [Tip jar](https://shieldz.cash/tools/tip-jar) aracını kullanın.
3. **Linki gönderin.** Müşteri linki açar, kendi cüzdanıyla öder ve para doğrudan sizin cüzdanınıza gelir.

<figure style="margin:28px 0">
  <a href="/blog/img/crypto-payment-checkout.png"><img src="/blog/img/crypto-payment-checkout.png" alt="Shieldz ödeme ekranı: ödenecek tutar ve USD Coin, Ethereum, BNB, Avalanche ve Tether seçenekleri birden fazla ağda, altta emanetsiz ve 0 ücret bilgisi." width="760" height="633" loading="lazy" style="width:100%;height:auto;border-radius:16px;border:1px solid #262626" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Müşterinin gördüğü ekran. İstediği coin ile öder, siz seçtiğiniz tek coin olarak alırsınız.</figcaption>
</figure>

## Hangi coin ile alınır

Müşteri elindeki coin ile öder (BTC, ETH, USDT, USDC ve daha fazlası), siz baştan seçtiğiniz **tek bir coin** olarak alırsınız, örneğin Base ağında USDC. Dönüşüm arada yapılır, iki taraf da uğraşmaz. Çoğu satıcı fiyat oynaklığından kaçınmak için bir stablecoin seçer. Stablecoin nedir ve neden ödeme için ideal, [terimler sözlüğünde](https://shieldz.cash/tr/glossary/stablecoin) kısaca var.

## Ücretler ve güvenlik

Kilit nokta: **%0 platform ücreti**. Yalnızca blok zincirinin ağ (gas) ücretini ödersiniz, Base gibi ağlarda çoğu zaman birkaç sent. Ödeme emanetsiz olduğu için kesilecek ya da dondurulacak bir platform bakiyesi yoktur. Blok zinciri işlemleri kesin olduğu için ters ibraz da yoktur.

Her ödeme adresi OFAC yaptırım listesine karşı taranır; dilerseniz herhangi bir adresi [OFAC adres denetleyicisi](https://shieldz.cash/tools/ofac-address-checker) ile kendiniz kontrol edebilirsiniz. KYC istemiyor olmamız, gözü kapalı çalıştığımız anlamına gelmiyor.

## Türkiye'de yasal durum

Türkiye'de 2021 tarihli düzenleme (TCMB), kripto varlıkların **yurt içi ödemelerde** ödeme aracı olarak kullanılmasını kısıtlıyor. Yani yurt içinde mal veya hizmet karşılığı doğrudan kripto tahsilatı bu kapsamda değerlendirilebilir. Buna karşılık **yurt dışındaki müşterilerden gelir tahsil etmek** farklı bir durumdur, bu konuyu [yurt dışından kripto ile ödeme almak](/blog/yurt-disindan-kripto-ile-odeme-almak) yazısında ayrıca ele aldık. Kurallar değişebildiği için kendi durumunuza göre güncel mevzuata bakmanızı ve gerekirse bir mali müşavire danışmanızı öneririz.

## Sıkça sorulan sorular

**Kripto ile ödeme almak için hesap açmam gerekiyor mu?**
Hayır. Tek gereken bir cüzdan adresi. Adresi yapıştırın, linki alın ve ödeme almaya başlayın. KYC gerekmez.

**Para nereye geliyor?**
Doğrudan sizin kontrol ettiğiniz cüzdana, ödeme işleminin tam içinde. Emanetsiz bir modeldir, arada parayı tutan aracı yoktur.

**Platform ücreti ne kadar?**
Platform ücreti %0. Yalnızca ağın gas ücretini ödersiniz, Base gibi ağlarda çoğu zaman birkaç sent.

**Müşterim hangi coinlerle ödeyebilir?**
BTC, ETH, USDC, USDT, BNB ve daha fazlasıyla, büyük ağların üzerinde. Siz cüzdanınıza gelecek tek settlement coinini seçersiniz.

**KYC gerekiyor mu?**
Başlamak için hayır. Bir cüzdan adresi yeterli. Yine de her ödeme adresi yaptırım listesine karşı taranır.

## Başlangıç

Kripto ile ödeme almak bir onboarding görüşmesi değil, birkaç saniyelik bir iş olmalı. Hemen bir [ödeme linki](https://shieldz.cash/tools/payment-link) oluşturun, [KYC'siz kripto ödeme almanın](/blog/kycsiz-kripto-odeme-alma) nasıl çalıştığını okuyun ya da yurt dışı müşteriler için [yurt dışından kripto ile ödeme almak](/blog/yurt-disindan-kripto-ile-odeme-almak) rehberine göz atın.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Kripto ile ödeme nasıl alınır",
  "step": [
    { "@type": "HowToStep", "name": "Cüzdan adresi hazırlayın", "text": "0x ile başlayan herhangi bir EVM cüzdan adresi yeterli. Özel anahtarınızı paylaşmazsınız." },
    { "@type": "HowToStep", "name": "Ödeme linki oluşturun", "text": "Link oluşturma aracına cüzdan adresinizi ve tutarı yapıştırın." },
    { "@type": "HowToStep", "name": "Linki gönderin", "text": "Müşteri linki açar, kendi cüzdanıyla öder ve para doğrudan sizin cüzdanınıza gelir." }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Kripto ile ödeme almak için hesap açmam gerekiyor mu?", "acceptedAnswer": { "@type": "Answer", "text": "Hayır. Tek gereken bir cüzdan adresi. Adresi yapıştırın, linki alın ve ödeme almaya başlayın. KYC gerekmez." } },
    { "@type": "Question", "name": "Kripto ödeme nereye geliyor?", "acceptedAnswer": { "@type": "Answer", "text": "Doğrudan sizin kontrol ettiğiniz cüzdana, ödeme işleminin tam içinde. Emanetsiz bir modeldir, arada parayı tutan aracı yoktur." } },
    { "@type": "Question", "name": "Kripto ile ödeme almanın platform ücreti ne kadar?", "acceptedAnswer": { "@type": "Answer", "text": "Platform ücreti %0. Yalnızca ağın gas ücretini ödersiniz, Base gibi ağlarda çoğu zaman birkaç senttir." } },
    { "@type": "Question", "name": "Müşterim hangi coinlerle ödeyebilir?", "acceptedAnswer": { "@type": "Answer", "text": "BTC, ETH, USDC, USDT, BNB ve daha fazlasıyla. Siz cüzdanınıza gelecek tek settlement coinini seçersiniz." } }
  ]
}
</script>
