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

export const metadata: Metadata = {
  title: 'Shinto: The Way of the Kami',
  description:
    'A living tradition of harmony with nature and spirit. Explore Japan\'s oldest spiritual tradition.',
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
