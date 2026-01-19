import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NomadWay Аялал | Монголыг нээгээрэй',
  description:
    'NomadWay Аялалтай Монголын жинхэнэ адал явдлыг мэдрээрэй. Говь цөлийг судалж, нүүдэлчдийн гэр бүлтэй хамт амьдарч, уул усны үзэсгэлэнтэй нутгаар аялна.',
  keywords: ['Монгол аялал', 'Говь цөлийн аялал', 'нүүдэлчдийн соёл', 'адал явдалт аялал', 'Улаанбаатар'],
  authors: [{ name: 'NomadWay Аялал' }],
  openGraph: {
    title: 'NomadWay Аялал | Монголыг нээгээрэй',
    description: 'NomadWay Аялалтай Монголын жинхэнэ адал явдлыг мэдрээрэй.',
    type: 'website',
    locale: 'mn_MN',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
