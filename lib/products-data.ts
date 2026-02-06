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
    title: "Kapilar",
    slug: "kapilar",
    headline: "El yapimi ahsap kapilar",
    description:
      "Rustik panel tasarimlardan sik modern profillere kadar her tarza uygun, masif sert agactan uretilen ic ve dis kapilar. Her kapi, mekaniniza sicaklik ve karakter katar.",
    gallery: [
      {
        src: "/images/gallery/doors-1.jpg",
        alt: "Masif ceviz ic kapi",
        label: "Ceviz Panel Kapi",
        description:
          "Masif ceviz agacindan uretilen yukseltilmis panelli ic kapi. Dogal ahsap damarli, sicak bal rengi perdah.",
      },
      {
        src: "/images/gallery/doors-2.jpg",
        alt: "Rustik surme ahir kapisi",
        label: "Surme Ahir Kapisi",
        description:
          "Geri donusturulmus ahsaptan uretilen surme ahir kapisi. Demir aksesuar detaylari ve dogal doku.",
      },
      {
        src: "/images/gallery/doors-3.jpg",
        alt: "Modern mese dis kapi",
        label: "Modern Giris Kapisi",
        description:
          "Cam yan panellerle tamamlanan minimalist mese giris kapisi. Cagdas mimari icin ideal.",
      },
    ],
  },
  dolaplar: {
    title: "Dolaplar",
    slug: "dolaplar",
    headline: "Ozel tasarim ahsap dolaplar",
    description:
      "Mutfak, banyo ve depolama dolaplari tam olculerinize gore uretilir. Premium marangozluk teknikleriyle nesiller boyu dayanan dolaplar.",
    gallery: [
      {
        src: "/images/gallery/cabinets-1.jpg",
        alt: "Beyaz mese mutfak dolaplari",
        label: "Mese Mutfak Dolabi",
        description:
          "Pirinc kulplu beyaz mese mutfak dolaplari. Mermer tezgahla uyumlu, parlak ve modern tasarim.",
      },
      {
        src: "/images/gallery/cabinets-2.jpg",
        alt: "Ceviz banyo dolabi",
        label: "Banyo Dolabi",
        description:
          "Koyu ceviz perdahli cift lavabolu banyo dolabi. Zarif hatlar ve genis depolama alani.",
      },
      {
        src: "/images/gallery/cabinets-3.jpg",
        alt: "Gomme gardrop sistemi",
        label: "Gomme Gardrop",
        description:
          "Acik raflar ve cekmecelerle donatilmis gomme gardrop sistemi. Dogal kiraz agaci perdahli.",
      },
    ],
  },
  masalar: {
    title: "Masalar",
    slug: "masalar",
    headline: "Essiz ahsap masalar",
    description:
      "Dogal kenar dilimlerinden ve seckin sert agaclardan uretilen yemek masalari, sehpalar ve calisma masalari. Her parca tek ve essizdir.",
    gallery: [
      {
        src: "/images/gallery/tables-1.jpg",
        alt: "Dogal kenar yemek masasi",
        label: "Dogal Kenar Yemek Masasi",
        description:
          "Siyah metal ayakli dogal kenar ceviz yemek masasi. 8 kisilik, modern yemek odasi icin ideal.",
      },
      {
        src: "/images/gallery/tables-2.jpg",
        alt: "Yuvarlak mese sehpa",
        label: "Mese Sehpa",
        description:
          "Tornali ayaklara sahip el yapimi yuvarlak mese sehpa. Sicak ve samimi oturma odalari icin.",
      },
      {
        src: "/images/gallery/tables-3.jpg",
        alt: "Minimalist calisma masasi",
        label: "Calisma Masasi",
        description:
          "Sade hatlarla tasarlanmis masif ceviz calisma masasi. Ev ofisi icin minimalist ve fonksiyonel.",
      },
    ],
  },
  raflar: {
    title: "Raflar",
    slug: "raflar",
    headline: "Ahsap raf ve kitaplik sistemleri",
    description:
      "Mekaninizi sicaklik ve karakterle tamamlayan gomme kitapliklar, duvar raflari ve serbest duran uniteler.",
    gallery: [
      {
        src: "/images/gallery/shelving-1.jpg",
        alt: "Gomme kitaplik duvari",
        label: "Gomme Kitaplik",
        description:
          "Yerden tavana uzanan ozel tasarim gomme kitaplik duvari. Mese agaci perdahli, calisma odasi icin.",
      },
      {
        src: "/images/gallery/shelving-2.jpg",
        alt: "Duvar raflari",
        label: "Duvar Raflari",
        description:
          "Ceviz perdahli asma duvar raflari. Minimalist salon dekorasyonu icin sik ve modern tasarim.",
      },
      {
        src: "/images/gallery/shelving-3.jpg",
        alt: "Serbest raf unitesi",
        label: "Sergileme Rafi",
        description:
          "Asimetrik bolmeli serbest duran sergileme rafi. Dogal sert agac perdahli, yasam alanlari icin.",
      },
    ],
  },
};
