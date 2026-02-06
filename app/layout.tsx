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

export const metadata: Metadata = {
  title: 'Oakwood & Co. | El Yapimi Ahsap Mobilya',
  description:
    'Usta ellerden cikan premium ahsap mobilyalar — kapilar, dolaplar, masalar ve raflar. Surdurulebilir kaynaklardan elde edilen sert agaclarla ozenle uretilmistir.',
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
