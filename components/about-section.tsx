import Image from "next/image";

const stats = [
  { value: "35+", label: "Yıllık Deneyim" },
  { value: "2.400+", label: "Tamamlanan Proje" },
  { value: "%100", label: "Sürdürülebilir Kaynak" },
];

export function AboutSection() {
  return (
    <section id="hakkimizda" className="scroll-mt-16 bg-card py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm sm:aspect-[4/5]">
            <Image
              src="/images/craftsman-at-work.jpg"
              alt="Atölyede bir mobilya parçasını özenle zımparalayan usta marangoz"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.25em]">
              Hikayemiz
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground sm:mt-3 sm:text-4xl md:text-5xl text-balance">
              Üç nesil ahşap işçilik ustalığı
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
              2010 yılında usta marangoz Murat Çelik tarafından kurulan atölyemiz, yıllar içinde büyüyerek modern bir üretim stüdyosuna dönüştü. Geleneksel el işçiliğini çağdaş tasarımla birleştirerek zamansız mobilyalar üretiyoruz.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              Her tahtayı sertifikalı sürdürülebilir ormanlardan temin ediyor ve
              ahşabın doğal karakterinin her tasarıma yol göstermesine izin
              veriyoruz. Hiçbir iki parça aynı değildir; ve mesele tam da
              budur.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:mt-10 sm:gap-6 sm:pt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-serif text-2xl text-accent sm:text-3xl md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
