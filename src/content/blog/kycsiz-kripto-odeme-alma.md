---
title: "KYC'siz kripto ödeme alma: kimlik doğrulaması olmadan"
description: "KYC'siz kripto ödeme alma: hesap ve kimlik doğrulaması olmadan, emanetsiz, doğrudan kendi cüzdanınıza. Neden mümkün olduğunu ve nasıl yapılacağını anlatıyoruz."
pubDate: 2026-07-27
author: "Deniz Yanbollu"
tags: ["kyc yok", "kripto", "ödeme", "emanetsiz", "rehber"]
eyebrow: "Rehber"
lang: "tr"
image: "https://shieldz.cash/blog/og/kycsiz-kripto-odeme-alma.png"
---

KYC'siz kripto ödeme alma mümkün mü diye soruyorsanız, cevap evet: bir cüzdan adresiyle, kimlik doğrulaması ya da hesap açmadan kripto ödeme kabul edebilirsiniz. Bilinen ödeme geçitlerinin neredeyse hepsi sizden KYC ister, çünkü paranızı önce kendileri tutar. Parayı arada kimse tutmazsa, o zorunluluk da ortadan kalkar.

Bu yazı neden çoğu geçidin KYC istediğini, **emanetsiz** (non-custodial) modelin bunu neden gerektirmediğini ve KYC olmadan nasıl ödeme almaya başlayacağınızı anlatıyor. [Shieldz](https://shieldz.cash) ile başlamak için tek gereken bir cüzdan adresidir.

## Neden çoğu geçit KYC istiyor

Sebep tek kelimeyle emanet. Emanetli (custodial) bir ödeme geçidi, müşterinin ödediği parayı önce kendi hesabında toplar, sonra size aktarır. Başkasının parasını tuttuğu an düzenleyici gözünde bir finansal aracı haline gelir, ve bu da kimlik doğrulama (KYC), hesap açma ve çoğu zaman bir onay sürecini zorunlu kılar. Yani KYC aslında ürünün değil, **emanet modelinin** bir sonucudur.

<figure style="margin:28px 0">
  <a href="/blog/img/custody-share.svg"><img src="/blog/img/custody-share.svg" alt="Sütun grafiği: emanetli geçitler ödemenin size ulaşmadan önce %100'ünü kendi hesaplarında tutar, bu yüzden KYC ve hesap ister. Emanetsiz Shieldz %0 tutar, para doğrudan cüzdanınıza gelir." width="760" height="470" loading="lazy" style="width:100%;height:auto;border-radius:16px" /></a>
  <figcaption style="font-size:13px;color:#949494;margin-top:8px">Bir ödemenin %100'ü sağlayıcının hesabından geçiyorsa, KYC de oradan gelir. Para hiç uğramazsa, gerekmez.</figcaption>
</figure>

## Emanetsiz model neden KYC gerektirmez

Emanetsiz bir geçitte para size ait bir cüzdan adresine, blok zincirinin üstünde doğrudan gider. Geçit yalnızca zinciri izler, hiçbir bakiye tutmaz. Tutulacak para olmadığı için sizin adınıza para hareketi yapan bir aracı da yoktur, dolayısıyla başlamak için kimlik doğrulaması istemek için bir sebep de kalmaz.

[Shieldz](https://shieldz.cash) tam olarak böyle tasarlanmıştır: ona bir açık anahtar verirsiniz (bir adres, bir xpub veya bir Zcash görüntüleme anahtarı), müşteriler o adrese öder, Shieldz yalnızca izler. Fonları harcayamaz, donduramaz veya el koyamaz. Bunu [kendiniz doğrulayabilirsiniz](https://shieldz.cash/verify).

## KYC'siz ödeme almak, adım adım

1. **Bir cüzdan adresi hazırlayın.** `0x` ile başlayan herhangi bir EVM cüzdanı yeterli. Özel anahtarınızı asla paylaşmazsınız.
2. **Link oluşturun.** [Ödeme linki oluşturucuya](https://shieldz.cash/tools/payment-link) cüzdan adresinizi ve tutarı yapıştırın. Kayıt yok, form yok.
3. **Linki gönderin.** Müşteri öder, para doğrudan sizin cüzdanınıza gelir.

Hesap yok, doğrulama yok, bekleme yok. Daha ayrıntılı anlatım için [kripto ile ödeme nasıl alınır](/blog/kripto-ile-odeme-nasil-alinir) rehberine bakabilirsiniz.

## KYC yok, ama gözü kapalı değil

Burada dürüst olmak gerekir: KYC istememek, hiçbir kontrol olmadığı anlamına gelmez. Her ödeme adresi OFAC yaptırım listesine karşı taranır ve istekler hız sınırına tabidir. Fark şu: sizden, satıcıdan kimlik toplamıyoruz, çünkü paranızı hiç tutmuyoruz. Ödemeler tamamen blok zinciri üzerinde ve denetlenebilir. Dilerseniz herhangi bir adresi [OFAC adres denetleyicisi](https://shieldz.cash/tools/ofac-address-checker) ile kendiniz de kontrol edebilirsiniz.

## Türkiye'de yasal durum

Türkiye'de 2021 tarihli düzenleme (TCMB), kripto varlıkların **yurt içi ödemelerde** ödeme aracı olarak kullanılmasını kısıtlıyor. KYC'nin olmaması bu düzenlemeyi değiştirmez; ikisi ayrı konulardır. Yurt içinde mal veya hizmet karşılığı doğrudan kripto tahsilatı bu kapsamda değerlendirilebilirken, yurt dışındaki müşterilerden gelir tahsil etmek farklı bir durumdur. Kurallar değişebildiği için kendi durumunuza göre güncel mevzuata bakmanızı ve gerekirse bir mali müşavire danışmanızı öneririz.

## Sıkça sorulan sorular

**Gerçekten KYC olmadan kripto ödeme alabilir miyim?**
Evet. Emanetsiz bir geçitte para doğrudan sizin cüzdanınıza gider, arada tutan olmadığı için başlamak için kimlik doğrulaması gerekmez. Tek gereken bir cüzdan adresi.

**KYC neden bazı geçitlerde zorunlu?**
Çünkü onlar emanetli çalışır: paranızı önce kendileri tutar, bu da onları düzenleme kapsamına sokar ve kimlik doğrulamayı zorunlu kılar.

**KYC yoksa güvenlik nasıl sağlanıyor?**
Satıcıdan kimlik toplanmaz ama her ödeme adresi yaptırım listesine karşı taranır ve tüm işlemler blok zinciri üzerinde denetlenebilir.

**Para nereye geliyor?**
Doğrudan sizin kontrol ettiğiniz cüzdana. Shieldz emanetsizdir, fonları tutamaz, donduramaz veya el koyamaz.

**Platform ücreti var mı?**
Hayır, platform ücreti %0. Yalnızca ağın gas ücretini ödersiniz.

## Başlangıç

Bir cüzdan adresiyle, kimlik doğrulaması olmadan kripto ödeme almaya başlayabilirsiniz. Hemen bir [ödeme linki](https://shieldz.cash/tools/payment-link) oluşturun, emanetsiz modelin ayrıntısı için [kripto ile ödeme nasıl alınır](/blog/kripto-ile-odeme-nasil-alinir) yazısını okuyun ya da [KYC yok](https://shieldz.cash/tr/no-kyc) sayfasına göz atın.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Gerçekten KYC olmadan kripto ödeme alabilir miyim?", "acceptedAnswer": { "@type": "Answer", "text": "Evet. Emanetsiz bir geçitte para doğrudan sizin cüzdanınıza gider, arada tutan olmadığı için başlamak için kimlik doğrulaması gerekmez. Tek gereken bir cüzdan adresi." } },
    { "@type": "Question", "name": "KYC neden bazı geçitlerde zorunlu?", "acceptedAnswer": { "@type": "Answer", "text": "Çünkü onlar emanetli çalışır: paranızı önce kendileri tutar, bu da onları düzenleme kapsamına sokar ve kimlik doğrulamayı zorunlu kılar." } },
    { "@type": "Question", "name": "KYC yoksa güvenlik nasıl sağlanıyor?", "acceptedAnswer": { "@type": "Answer", "text": "Satıcıdan kimlik toplanmaz ama her ödeme adresi OFAC yaptırım listesine karşı taranır ve tüm işlemler blok zinciri üzerinde denetlenebilir." } },
    { "@type": "Question", "name": "KYC'siz kripto ödemede para nereye geliyor?", "acceptedAnswer": { "@type": "Answer", "text": "Doğrudan sizin kontrol ettiğiniz cüzdana. Shieldz emanetsizdir, fonları tutamaz, donduramaz veya el koyamaz." } },
    { "@type": "Question", "name": "KYC'siz kripto ödeme almanın platform ücreti var mı?", "acceptedAnswer": { "@type": "Answer", "text": "Hayır, platform ücreti %0. Yalnızca ağın gas ücretini ödersiniz." } }
  ]
}
</script>
