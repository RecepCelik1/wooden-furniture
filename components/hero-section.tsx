"use client";

import React from "react"

import Image from "next/image";
import Link from "next/link";

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const el = document.getElementById(href.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden sm:items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-workshop.jpg"
          alt="El yapımı mobilya parçalarıyla Oakwood atölyesi"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/50 to-foreground/30 sm:bg-foreground/55" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary/90 sm:text-sm sm:tracking-[0.25em]">
            1987'den Beri El Yapımı
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-snug text-primary-foreground sm:mt-4 sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl lg:leading-tight text-balance">
            Usta işçilik, zamansız tasarım
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-secondary/70 sm:mt-6 sm:max-w-lg sm:text-lg sm:text-secondary/80">
            Sürdürülebilir kaynaklardan elde edilen sert ağaçlarla özel tasarım
            ahşap kapılar, dolaplar, masalar ve raflar üretiyoruz. Her parça,
            titiz bir ustalık hikâyesi anlatır.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Link
              href="#urunler"
              onClick={(e) => scrollTo(e, "#urunler")}
              className="rounded-sm bg-accent px-7 py-3.5 text-center text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 sm:py-3"
            >
              Ürünlerimizi İnceleyin
            </Link>
            <Link
              href="#hakkimizda"
              onClick={(e) => scrollTo(e, "#hakkimizda")}
              className="rounded-sm border border-secondary/40 px-7 py-3.5 text-center text-sm font-medium text-secondary transition-colors hover:bg-secondary/10 sm:py-3"
            >
              Hikayemiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
