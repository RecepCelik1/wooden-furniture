import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "Kapilar",
    slug: "kapilar",
    description:
      "Rustik panel tasarimlardan sik modern profillere kadar her tarza uygun, el yapimi masif sert agac ic ve dis kapilar.",
    image: "/images/product-doors.jpg",
    alt: "El yapimi masif mese ic kapi",
  },
  {
    title: "Dolaplar",
    slug: "dolaplar",
    description:
      "Mutfak, banyo ve depolama dolaplari tam olculerinize gore uretilir. Nesiller boyu dayanan premium marangozluk.",
    image: "/images/product-cabinets.jpg",
    alt: "Ozel tasarim ceviz mutfak dolaplari",
  },
  {
    title: "Masalar",
    slug: "masalar",
    description:
      "Dogal kenar dilimlerinden ve seckin sert agaclardan uretilen yemek masalari, sehpalar ve calisma masalari. Her parca essizdir.",
    image: "/images/product-tables.jpg",
    alt: "Dogal kenar ceviz yemek masasi",
  },
  {
    title: "Raflar",
    slug: "raflar",
    description:
      "Mekaninizi sicaklik ve karakterle tamamlayan gomme kitapliklar, duvar raflari ve serbest duran uniteler.",
    image: "/images/product-shelving.jpg",
    alt: "Ozel tasarim gomme ahsap kitaplik",
  },
];

export function ProductsSection() {
  return (
    <section id="urunler" className="scroll-mt-16 bg-card py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-xl sm:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.25em]">
            Urunlerimiz
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground sm:mt-3 sm:text-4xl md:text-5xl text-balance">
            Dayanikli, ilham verici tasarimlar
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Urettigimiz her parca, geleneksel ahsap iscilik tekniklerini modern
            hassasiyetle birlestirerek zamana meydan okuyan mobilyalar ortaya
            koyar.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <Link
              key={product.title}
              href={`/urunler/${product.slug}`}
              className="group overflow-hidden rounded-sm border border-border bg-background transition-shadow hover:shadow-lg"
            >
              <article>
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/30">
                    <span className="translate-y-4 rounded-sm bg-background/90 px-5 py-2.5 text-sm font-medium text-foreground opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Ornekleri Goruntule
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="font-serif text-xl text-foreground sm:text-2xl">
                    {product.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground sm:mt-2 sm:text-base">
                    {product.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors group-hover:text-accent/80 sm:mt-4">
                    Vitrine goz atin
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
