import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { AboutSection } from "@/components/about-section";
import { ProcessSection } from "@/components/process-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.oakwoodco.com";

export const metadata: Metadata = {
  title: "Bodrum Ahşap Mobilya, Kapı, Dolap ve Masa Üretimi",
  description:
    "Oakwood & Co. Bodrum atölyesinde el işçiliğiyle üretilen ahşap kapı, dolap, masa, raf ve dış cephe çözümlerini keşfedin.",
};

export default function Page() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: "Oakwood & Co.",
    url: siteUrl,
    image: `${siteUrl}/images/hero-workshop.jpg`,
    description:
      "Muğla Bodrum'da özel tasarım ahşap mobilya, kapı, dolap, masa, raf ve dış cephe uygulamaları sunan atölye.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bodrum",
      addressRegion: "Muğla",
      addressCountry: "TR",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bodrum",
      },
      {
        "@type": "AdministrativeArea",
        name: "Muğla",
      },
    ],
    knowsAbout: [
      "Ahşap kapı üretimi",
      "Özel tasarım dolap",
      "Masif ahşap masa",
      "Ahşap raf ve kitaplık",
      "Dış cephe ahşap kaplama",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
