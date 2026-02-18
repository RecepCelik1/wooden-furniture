"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import type { CategoryData, GalleryItem } from "@/lib/products-data";
import { ContactSection } from "@/components/contact-section";

interface CategoryShowcaseProps {
  category: CategoryData;
}

export function CategoryShowcase({ category }: CategoryShowcaseProps) {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  return (
    <>
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/#urunler"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Tüm Ürünler</span>
            <span className="sm:hidden">Geri</span>
          </Link>
          <Link href="/" className="font-serif text-lg tracking-tight text-foreground sm:text-xl">
            {"Oakwood & Co."}
          </Link>
          <Link
            href="/#iletisim"
            className="hidden rounded-sm bg-accent px-5 py-2 text-[13px] font-medium text-accent-foreground transition-colors hover:bg-accent/90 sm:inline-block"
          >
            Teklif Alın
          </Link>
          <span className="w-16 sm:hidden" aria-hidden="true" />
        </div>
      </header>

      <main className="pt-16">
        {/* Hero banner */}
        <section className="bg-card py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.25em]">
              Vitrin
            </p>
            <h1 className="mt-2 font-serif text-3xl text-foreground sm:mt-3 sm:text-4xl md:text-5xl text-balance">
              {category.headline}
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
              {category.description}
            </p>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {category.gallery.map((item) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="group cursor-pointer overflow-hidden rounded-sm border border-border bg-card text-left transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3]">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-serif text-base text-foreground sm:text-lg">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <ContactSection />
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
        >
          <div
            className="absolute inset-0 bg-foreground/80 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setLightbox(null);
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-h-[90vh] w-full overflow-y-auto rounded-t-lg border border-border bg-background shadow-2xl sm:max-w-4xl sm:rounded-sm">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background px-4 py-3 sm:px-6 sm:py-4">
              <h3 className="font-serif text-lg text-foreground sm:text-xl">
                {lightbox.label}
              </h3>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="flex h-9 w-9 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Kapat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative h-[55vh] w-full bg-black/5 sm:h-[65vh]">
              <Image
                src={lightbox.src || "/placeholder.svg"}
                alt={lightbox.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 896px"
              />
            </div>
            <div className="border-t border-border px-4 py-3 sm:px-6 sm:py-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {lightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
