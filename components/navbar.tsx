"use client";

import React from "react"

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const sectionIds = ["urunler", "hakkimizda", "surecimiz", "iletisim"];

const navLinks = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Sürecimiz", href: "#surecimiz" },
  { label: "Ürünler", href: "#urunler" },
  { label: "İletişim", href: "#iletisim" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            className="text-accent"
            aria-hidden="true"
          >
            <rect
              x="4"
              y="4"
              width="24"
              height="24"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M10 12 L16 8 L22 12 L22 22 L10 22 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <line
              x1="16"
              y1="8"
              x2="16"
              y2="22"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span className="font-serif text-lg tracking-tight text-foreground sm:text-xl">
            {"Oakwood & Co."}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-[13px] font-medium uppercase tracking-widest transition-colors hover:text-foreground ${
                  `#${activeSection}` === link.href
                    ? "text-accent"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#iletisim"
            onClick={(e) => handleClick(e, "#iletisim")}
            className="hidden rounded-sm bg-accent px-5 py-2 text-[13px] font-medium text-accent-foreground transition-colors hover:bg-accent/90 lg:inline-block"
          >
            Teklif Alın
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-muted lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    handleClick(e, link.href);
                    setMobileOpen(false);
                  }}
                  className={`block rounded-sm px-3 py-3 text-[15px] font-medium transition-colors hover:bg-muted ${
                    `#${activeSection}` === link.href
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#iletisim"
                onClick={(e) => {
                  handleClick(e, "#iletisim");
                  setMobileOpen(false);
                }}
                className="block rounded-sm bg-accent px-5 py-3 text-center text-[15px] font-medium text-accent-foreground"
              >
                Teklif Alın
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
