import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.oakwoodco.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Oakwood & Co. | Bodrum Ahşap Mobilya ve Özel Tasarım",
    template: "%s | Oakwood & Co.",
  },
  description:
    "Muğla Bodrum'da faaliyet gösteren Oakwood & Co.; özel ölçü ahşap kapı, dolap, masa, raf ve dış cephe uygulamalarıyla yaşam alanlarınıza estetik ve dayanıklılık kazandırır.",
  keywords: [
    "Bodrum ahşap mobilya",
    "Muğla marangoz",
    "özel tasarım mobilya",
    "ahşap kapı",
    "ahşap dolap",
    "ahşap masa",
    "ahşap raf",
    "dış cephe ahşap kaplama",
    "Bodrum mobilya atölyesi",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "Oakwood & Co.",
    title: "Oakwood & Co. | Bodrum Ahşap Mobilya ve Özel Tasarım",
    description:
      "Muğla Bodrum'da özel ölçü ahşap mobilya, kapı, dolap, masa, raf ve dış cephe uygulamaları.",
    images: [
      {
        url: "/images/hero-workshop.jpg",
        width: 1200,
        height: 630,
        alt: "Bodrum'da ahşap mobilya üretimi yapan Oakwood & Co. atölyesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oakwood & Co. | Bodrum Ahşap Mobilya ve Özel Tasarım",
    description:
      "Muğla Bodrum'da özel ölçü ahşap mobilya ve dış cephe çözümleri.",
    images: ["/images/hero-workshop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Mobilya",
}

export const viewport: Viewport = {
  themeColor: '#2E2519',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${_inter.variable} ${_dmSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
