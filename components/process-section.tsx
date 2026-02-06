import { Ruler, Pencil, Hammer, Truck } from "lucide-react";

const steps = [
  {
    icon: Pencil,
    title: "Danismanlik",
    description:
      "Vizyonunuzu, mekaninizi ve ihtiyaclarinizi konusmak icin bulusuyoruz. Birlikte agac turunu, kaplamayi ve tarzi belirliyoruz.",
  },
  {
    icon: Ruler,
    title: "Tasarim",
    description:
      "Ekibimiz, tek bir kesim yapilmadan once nihai parcayi gorebilmeniz icin detayli cizimler ve 3D renderlar hazirlayarak sunar.",
  },
  {
    icon: Hammer,
    title: "Uretim",
    description:
      "Usta zanaatkarlar, atolyemizde koklesmis teknikler ve modern hassas aletler kullanarak parcanizi sekillendiriyor, birlestirir ve perdahlari yapar.",
  },
  {
    icon: Truck,
    title: "Teslimat ve Montaj",
    description:
      "Ozel teslimat ve profesyonel montaj hizmeti sunuyoruz; mobilyaniz ilk gunden itibaren mukemmel bir sekilde yerine otursun.",
  },
];

export function ProcessSection() {
  return (
    <section id="surecimiz" className="scroll-mt-16 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-xl text-center sm:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.25em]">
            Surecimiz
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground sm:mt-3 sm:text-4xl md:text-5xl text-balance">
            Fikirden tamamlanmaya
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Her detayin kontrolunu size birakan seffaf, dort adimlik bir
            yolculuk.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-sm border border-border bg-card p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <step.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground sm:text-xl">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
