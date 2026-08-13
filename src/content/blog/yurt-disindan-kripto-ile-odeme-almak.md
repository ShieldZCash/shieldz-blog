---
title: "Yurt dışından kripto ile ödeme almak: freelancer'lar için rehber"
description: "Yurt dışındaki müşterilerden kripto ile ödeme nasıl alınır: emanetsiz, kayıt gerektirmeden, doğrudan kendi cüzdanınıza, %0 platform ücretiyle."
pubDate: 2026-07-15
author: "Deniz Yanbollu"
tags: ["kripto", "ödeme", "freelancer", "emanetsiz", "crypto payment gateway"]
eyebrow: "Rehber"
lang: "tr"
image: "https://shieldz.cash/blog/og/yurt-disindan-kripto-ile-odeme-almak.png"
---

Türkiye'deki freelancer, geliştirici ve dijital hizmet satıcılarının müşterileri giderek daha çok yurt dışında. Sorun hep aynı yerde: parayı tahsil etmek. Uluslararası banka havalesi yavaş, her iki uçta da komisyon kesiyor, bazen reddediliyor. İşte bu yüzden yurt dışındaki müşteriden kripto ile ödeme almak pratik bir seçenek oluyor: hızlı, sınır tanımıyor ve para doğrudan kendi cüzdanınıza geliyor.

Bu yazı, yurt dışındaki müşterilerden kripto ile ödeme almayı basitçe anlatıyor: kayıt yok, aracı yok ve en önemlisi **emanetsiz** (non-custodial), yani parayı arada kimse tutmuyor.

## Neden freelancer'lar kripto ile ödeme alıyor

Müşteriniz ABD, Avrupa veya Singapur'daysa, bir banka havalesi günler sürebilir ve her aşamada aracı komisyonu yer. USDC veya USDT gibi bir stablecoin ile aynı ödeme birkaç dakikada gelir, ağ ücreti birkaç senttir ve anlaştığınız tam tutarı alırsınız. "İşleniyor" ekranı yok, onay bekleme yok.

Çoğu kişiyi tereddüde düşüren şey, bilinen "kripto ödeme geçidi" hizmetlerinin genelde hesap açmanızı, kurumsal kimlik doğrulaması (KYC) yapmanızı ve paranızı önce kendi cüzdanlarında tutup sonra size ödemesini istemesidir. Rahatsızlık tam da burada başlar: yüzdelik komisyon, gecikmeli ödeme ve hesap dondurma ihtimali.

## "Emanetsiz" ne demek ve neden önemli

İki model var.

**Emanetli (custodial).** Ödeme geçidi, müşterinin parasını kendi cüzdanına alır, bakiyeyi sizin adınıza tutar ve kendi takvimine göre size öder. Parayı tuttukları için riski onlar taşır, bu yüzden inceleme yapabilir, geciktirebilir ve bazen dondurabilirler. İşi bitirdiniz ama parayı ne zaman alacağınıza onlar karar veriyor.

**Emanetsiz (non-custodial).** Ödeme geçidi paraya hiç dokunmaz. Müşteri, doğrudan size ait bir cüzdan adresine, blok zincirinin üstünde, tek bir işlemde öder. Arada dondurulacak bir bakiye yoktur, beklenecek bir ödeme takvimi yoktur. [Shieldz](https://shieldz.cash) tam olarak böyle çalışır ve bunu [kendiniz doğrulayabilirsiniz](https://shieldz.cash/verify).

<figure style="margin:28px 0">
  <a href="/blog/img/custody-share.svg"><img src="/blog/img/custody-share.svg" alt="Sütun grafiği: emanetli geçitler ve escrow modelleri, ödemenin size ulaşmadan önce %100'ünü tutar, yani dondurulabilir. BTCPay Server ve Shieldz emanetsizdir, %0, para doğrudan cüzdanınıza yerleşir." width="760" height="470" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Tek resimde bütün mesele: bir ödemenin %100'ü sağlayıcının hesabından geçiyorsa, %100'ü tutulabilir demektir.</figcaption>
</figure>

## 30 saniyede ödeme alma

Kod yazmanıza da hesap açmanıza da gerek yok.

1. Bir cüzdan adresi hazırlayın (`0x` ile başlayan bir EVM cüzdanı, örneğin Base ağında). Yoksa MetaMask gibi bir cüzdan yeterli.
2. Link oluşturma aracını açın: cüzdan adresinizi ve tutarı yapıştırın, anında bir [ödeme linki](https://shieldz.cash/tools/payment-link) alırsınız. Müşterinin tutarı kendi seçmesini mi istiyorsunuz (bağış veya bahşiş gibi)? [Tip jar](https://shieldz.cash/tools/tip-jar) aracını kullanın.
3. Linki müşteriye gönderin. Açar, kendi cüzdanıyla öder ve para doğrudan sizin cüzdanınıza gelir.

Müşteri birçok farklı coin ile ödeyebilir ve siz sabit bir stablecoin (örneğin Base ağında USDC) olarak alırsınız. Fiyat riski yok, kayıt yok, arada parayı tutan bir aracı yok.

## Ücretler ve güvenlik

Maliyet tarafındaki kilit nokta: **%0 platform ücreti**. Yalnızca blok zincirinin ağ (gas) ücretini ödersiniz, Base gibi ağlarda çoğu zaman birkaç sent. Ödeme emanetsiz olduğu için kesilecek ya da dondurulacak bir "platform bakiyesi" yoktur. Blok zinciri işlemleri kesin olduğu için kredi kartındaki gibi ters ibraz (chargeback) da yoktur, dolayısıyla kimsenin bu riske karşı paranızı tutmasına gerek kalmaz.

Her ödeme adresi OFAC yaptırım listesine karşı taranır ve istekler hız sınırına tabidir; isterseniz herhangi bir adresi [OFAC adres denetleyicisi](https://shieldz.cash/tools/ofac-address-checker) ile kendiniz de kontrol edebilirsiniz.

## Sıkça sorulan sorular

**Hesap açmam gerekiyor mu?**
Hayır. Tek gereken bir cüzdan adresi. Yapıştırın, linki alın ve ödeme almaya başlayın.

**Para nereye geliyor?**
Doğrudan sizin kontrol ettiğiniz cüzdana, ödeme işleminin tam içinde. Arada tutan yok.

**Platform ücreti var mı?**
Hayır. Yalnızca ağın gas ücreti var. Platform ücreti %0.

**Bu Türkiye'de yasal mı?**
Türkiye'de 2021 tarihli düzenleme (TCMB), kripto varlıkların **yurt içi ödemelerde** ödeme aracı olarak kullanılmasını kısıtlıyor. Bu rehber, yurt içinde mal veya hizmet karşılığı kripto tahsilatını değil, **yurt dışındaki müşterilerden gelir tahsil etmeyi** ele alıyor. Kripto ve döviz geliriyle ilgili kurallar değişebildiği için, kendi durumunuza göre güncel mevzuata bakmanızı ve gerekirse bir mali müşavire danışmanızı öneririz.

## Başlangıç

Daha önce bir uluslararası havaleyi beklediyseniz ya da bir ödeme geçidi paranızı "inceleme için" tuttuysa, emanetsiz yaklaşım bu sorunu kökten çözer. Birkaç saniyede bir [ödeme linki](https://shieldz.cash/tools/payment-link) oluşturun, genel anlatım için [kripto ile ödeme nasıl alınır](/blog/kripto-ile-odeme-nasil-alinir) rehberini ya da [KYC'siz kripto ödeme alma](/blog/kycsiz-kripto-odeme-alma) yazısını okuyun. Para sizindir ve doğrudan sizin cüzdanınıza gelmelidir.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Yurt dışından kripto ile ödeme almak için hesap açmam gerekiyor mu?",
      "acceptedAnswer": { "@type": "Answer", "text": "Hayır. Tek gereken bir cüzdan adresi. Adresi link oluşturma aracına yapıştırın, ödeme linkini alın ve ödeme almaya başlayın, kayıt ya da KYC gerekmez." }
    },
    {
      "@type": "Question",
      "name": "Kripto ödeme nereye geliyor?",
      "acceptedAnswer": { "@type": "Answer", "text": "Doğrudan sizin kontrol ettiğiniz cüzdana, ödeme işleminin tam içinde. Bu emanetsiz bir modeldir, arada parayı tutan bir aracı yoktur." }
    },
    {
      "@type": "Question",
      "name": "Kripto ile ödeme almanın ücreti var mı?",
      "acceptedAnswer": { "@type": "Answer", "text": "Platform ücreti %0. Yalnızca blok zincirinin gas ücretini ödersiniz, Base gibi ağlarda çoğu zaman birkaç senttir." }
    }
  ]
}
</script>
