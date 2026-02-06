"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="iletisim" className="scroll-mt-16 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 max-w-xl sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.25em]">
            Iletisim
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground sm:mt-3 sm:text-4xl md:text-5xl text-balance">
            {"Projenizi planlamaya baslayalim"}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            Detayli bir planiniz ya da sadece bir fikir tohumunuz olsun,
            sizden haber almak isteriz. Bize ulasin, ekip uyelerimizden biri
            24 saat icinde sizinle iletisime gececektir.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Left column — form (wider) */}
          <div className="rounded-sm border border-border bg-card p-5 sm:p-8 lg:col-span-3 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center sm:py-16">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 sm:h-16 sm:w-16">
                  <Mail className="h-7 w-7 text-accent sm:h-8 sm:w-8" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-foreground sm:mt-6 sm:text-2xl">
                  Mesajiniz gonderildi
                </h3>
                <p className="mt-2 max-w-xs text-[15px] text-muted-foreground sm:text-base">
                  Bizimle iletisime gectiginiz icin tesekkurler. Ekibimiz bir
                  is gunu icinde size donecektir.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-foreground"
                    >
                      Ad
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="rounded-sm border border-input bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:py-2.5 sm:text-sm"
                      placeholder="Ahmet"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-foreground"
                    >
                      Soyad
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="rounded-sm border border-input bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:py-2.5 sm:text-sm"
                      placeholder="Yilmaz"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    E-posta
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-sm border border-input bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:py-2.5 sm:text-sm"
                    placeholder="ahmet@ornek.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="product"
                    className="text-sm font-medium text-foreground"
                  >
                    Ilgilendiginiz Urun
                  </label>
                  <select
                    id="product"
                    name="product"
                    className="rounded-sm border border-input bg-background px-4 py-3 text-[15px] text-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:py-2.5 sm:text-sm"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Bir kategori secin
                    </option>
                    <option value="doors">Kapilar</option>
                    <option value="cabinets">Dolaplar</option>
                    <option value="tables">Masalar</option>
                    <option value="shelving">Raflar</option>
                    <option value="custom">Ozel Proje</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Mesajiniz
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="rounded-sm border border-input bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:py-2.5 sm:text-sm"
                    placeholder="Projeniz, olculer, ahsap tercihleri hakkinda bilgi verin..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-sm bg-accent px-7 py-3.5 text-[15px] font-medium text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60 sm:py-3 sm:text-sm"
                >
                  {loading ? "Gonderiliyor..." : "Mesaj Gonder"}
                </button>
              </form>
            )}
          </div>

          {/* Right column — contact info */}
          <div className="flex flex-col justify-center lg:col-span-2">
            <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">E-posta</p>
                  <p className="mt-0.5 text-[15px] text-muted-foreground sm:text-base">merhaba@oakwoodco.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Telefon</p>
                  <p className="mt-0.5 text-[15px] text-muted-foreground sm:text-base">(555) 234-5678</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Atolye</p>
                  <p className="mt-0.5 text-[15px] text-muted-foreground sm:text-base">
                    142 Cedar Mill Lane, Asheville, NC 28801
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
