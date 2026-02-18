export interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  description: string;
}

export interface CategoryData {
  title: string;
  slug: string;
  headline: string;
  description: string;
  gallery: GalleryItem[];
}

export const categories: Record<string, CategoryData> = {
  kapilar: {
    title: "Kapılar",
    slug: "kapilar",
    headline: "El yapımı ahşap kapılar",
    description:
      "Rustik panel tasarımlardan şık modern profillere kadar her tarza uygun, masif sert ağaçtan üretilen iç ve dış kapılar. Her kapı, mekânınıza sıcaklık ve karakter katar.",
    gallery: [
      {
        src: "/images/gallery/doors-1.jpg",
        alt: "Masif ceviz iç kapı",
        label: "Ceviz Panel Kapı",
        description:
          "Masif ceviz ağacından üretilen yükseltilmiş panelli iç kapı. Doğal ahşap damarlı, sıcak bal rengi perdah.",
      },
      {
        src: "/images/gallery/doors-3.jpg",
        alt: "Modern meşe dış kapı",
        label: "Modern Giriş Kapısı",
        description:
          "Cam yan panellerle tamamlanan minimalist meşe giriş kapısı. Çağdaş mimari için ideal.",
      },
    ],
  },
  dolaplar: {
    title: "Dolaplar",
    slug: "dolaplar",
    headline: "Özel tasarım ahşap dolaplar",
    description:
      "Mutfak, banyo ve depolama dolapları tam ölçülerinize göre üretilir. Premium marangozluk teknikleriyle nesiller boyu dayanan dolaplar.",
    gallery: [
      {
        src: "/images/gallery/cabinet.jpeg",
        alt: "Beyaz meşe mutfak dolapları",
        label: "Doğal Dokunuşlu Modern Mutfak",
        description:
          "Beyaz dolaplarla uyumlu ahşap çıtalı panel ve sarkıt aydınlatmalar. Sıcak dokunuşlarla modern ve sade bir tasarım.",
      },
      {
        src: "/images/gallery/cabinet-4.jpeg",
        alt: "Beyaz meşe mutfak dolapları",
        label: "Klasik Beyaz Mutfak",
        description:
          "Altın ton kulplar ve mermer desenli ada tezgâh şık bir bütünlük sunar. Sıcak LED aydınlatma ile zarif ve davetkâr bir atmosfer oluşturur.",
      },
      {
        src: "/images/gallery/cabinets-1.jpg",
        alt: "Beyaz meşe mutfak dolapları",
        label: "Lake Kaplama Shaker Mutfak",
        description:
          "Pirinç kulplu beyaz meşe mutfak dolapları. Mermer tezgahla uyumlu, parlak ve modern tasarım.",
      },
      {
        src: "/images/gallery/cabinets-2.jpg",
        alt: "Ceviz banyo dolabı",
        label: "Banyo Dolabı",
        description:
          "Koyu ceviz perdahlı çift lavabolu banyo dolabı. Zarif hatlar ve geniş depolama alanı.",
      },
      {
        src: "/images/gallery/cabinets-3.jpg",
        alt: "Gömme gardırop sistemi",
        label: "Gömme Gardırop",
        description:
          "Açık raflar ve çekmecelerle donatılmış gömme gardırop sistemi. Doğal kiraz ağacı perdahlı.",
      },
    ],
  },
  masalar: {
    title: "Masalar",
    slug: "masalar",
    headline: "Eşsiz ahşap masalar",
    description:
      "Doğal kenar dilimlerinden ve seçkin sert ağaçlardan üretilen yemek masaları, sehpalar ve çalışma masaları. Her parça tek ve eşsizdir.",
    gallery: [
      {
        src: "/images/gallery/table.png",
        alt: "Doğal kenar yemek masası",
        label: "Doğal Kenar Yemek Masası",
        description:
          "Siyah metal ayaklı doğal kenar ceviz yemek masası. 8 kişilik, modern yemek odası için ideal.",
      },
      {
        src: "/images/gallery/tables-2.jpg",
        alt: "Yuvarlak meşe sehpa",
        label: "Meşe Sehpa",
        description:
          "Tornalı ayaklara sahip el yapımı yuvarlak meşe sehpa. Sıcak ve samimi oturma odaları için.",
      },
      {
        src: "/images/gallery/table-4.png",
        alt: "Minimalist çalışma masası",
        label: "Çalışma Masası",
        description:
          "Sade hatlarla tasarlanmış masif ceviz çalışma masası. Ev ofisi için minimalist ve fonksiyonel.",
      },
    ],
  },
  raflar: {
    title: "Raflar",
    slug: "raflar",
    headline: "Ahşap raf ve kitaplık sistemleri",
    description:
      "Mekânınızı sıcaklık ve karakterle tamamlayan gömme kitaplıklar, duvar rafları ve serbest duran üniteler.",
    gallery: [
      {
        src: "/images/gallery/shelving-1.jpg",
        alt: "Gömme kitaplık duvarı",
        label: "Gömme Kitaplık",
        description:
          "Yerden tavana uzanan özel tasarım gömme kitaplık duvarı. Meşe ağacı perdahlı, çalışma odası için.",
      },
      {
        src: "/images/gallery/shelving-2.jpg",
        alt: "Duvar rafları",
        label: "Duvar Rafları",
        description:
          "Ceviz perdahlı asma duvar rafları. Minimalist salon dekorasyonu için şık ve modern tasarım.",
      },
      {
        src: "/images/gallery/shelv.png",
        alt: "Serbest raf ünitesi",
        label: "Doğal Meşe Kaplama Portmanto",
        description:
          "Doğal meşe kaplama gövde, kavisli köşe detayları ve entegre LED aydınlatma. Cam bölmeli sergileme alanı ve geniş çekmeceli alt modül.",
      },
    ],
  },
  "dis-cephe": {
    title: "Dış Cephe",
    slug: "dis-cephe",
    headline: "Dayanıklı dış cephe çözümleri",
    description:
      "Yapılarınızı dış etkenlerden koruyan ve estetik değer katan, hava koşullarına dayanıklı ahşap cephe kaplamaları ve dekoratif uygulamalar.",
    gallery: [
      {
        src: "/images/gallery/decade.png",
        alt: "Ahşap dış cephe kaplama",
        label: "Modern Cephe Kaplama",
        description:
          "Modern mimariyle uyumlu, ısıl işlem görmüş dayanıklı ahşap dış cephe uygulaması.",
      },
      {
        src: "/images/gallery/veranda.png",
        alt: "Ahşap veranda ve sundurma",
        label: "Ahşap Veranda",
        description:
          "Dış mekân keyfini artıran, estetik ve sağlam masif ahşap veranda tasarımı.",
      },
    ],
  },
};
