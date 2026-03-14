import type { Metadata } from 'next'
import { Noto_Serif_JP, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const notoSerif = Noto_Serif_JP({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Shinto: The Way of the Kami',
  description:
    'A living tradition of harmony with nature and spirit. Explore Japan\'s oldest spiritual tradition.',
  openGraph: {
    title: 'Shinto: The Way of the Kami',
    description: 'A living tradition of harmony with nature and spirit. Explore Japan\'s oldest spiritual tradition.',
    url: siteUrl,
    siteName: 'Shinto: The Way of the Kami',
    images: [{ url: '/social.jpg', width: 1200, height: 630, alt: 'Shinto: The Way of the Kami' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shinto: The Way of the Kami',
    description: 'A living tradition of harmony with nature and spirit.',
    images: ['/social.jpg'],
  },
  icons: {
    apple: '/social.jpg',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Shinto',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
