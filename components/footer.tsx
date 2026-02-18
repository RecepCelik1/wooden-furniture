import Link from "next/link";

const footerLinks = {
  "Ürünler": [
    { label: "Kapılar", href: "#urunler" },
    { label: "Dolaplar", href: "#urunler" },
    { label: "Masalar", href: "#urunler" },
    { label: "Raflar", href: "#urunler" },
    { label: "Dış Cephe", href: "#urunler" },
  ],
  "Şirket": [
    { label: "Hakkımızda", href: "#hakkimizda" },
    { label: "Sürecimiz", href: "#surecimiz" },
    { label: "İletişim", href: "#iletisim" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-12 text-primary-foreground sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <p className="font-serif text-xl sm:text-2xl">{"Oakwood & Co."}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/60">
              1987'den bu yana premium el yapımı ahşap mobilya. Her parça
              sürdürülebilir kaynaklardan, uzman ellerle üretilmiş ve
              dayanıklılık için tasarlanmıştır.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/40">
                {group}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-8 sm:mt-14 sm:flex-row">
          <p className="text-xs text-primary-foreground/40">
            {"2026 Oakwood & Co. Tüm hakları saklıdır."}
          </p>
          <p className="text-xs text-primary-foreground/40">
            142 Cedar Mill Lane, Asheville, NC 28801
          </p>
        </div>
      </div>
    </footer>
  );
}
