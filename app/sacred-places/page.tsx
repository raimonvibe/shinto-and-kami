'use client'

import SectionCard from '@/components/SectionCard'
import { motion } from 'framer-motion'

export default function SacredPlacesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-mountain-mist">
      <motion.header
        className="bg-hero-gradient bg-cover bg-center pt-24 pb-20 px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
          Sacred Places
        </h1>
        <p className="mt-4 text-lg text-white/95 max-w-2xl mx-auto">
          Where Kami and nature meet
        </p>
      </motion.header>

      <section className="mx-auto max-w-3xl px-4 py-16 space-y-8">
        <SectionCard title="Mount Fuji (Fujisan)" icon="⛰️">
          Japan&apos;s most iconic mountain is considered the body of the Kami{' '}
          <em>Konohanasakuya-hime</em>, associated with blossoms and life. Pilgrims have
          climbed Fuji for centuries in a spirit of purification and devotion. The mountain
          itself is a <em>yorishiro</em> — a place where the sacred becomes present.
        </SectionCard>

        <SectionCard title="Ise Grand Shrine" icon="🏯">
          The most sacred shrine in Japan, dedicated to <em>Amaterasu</em>, the sun
          goddess. The inner shrine is rebuilt every 20 years in a tradition of renewal.
          Millions visit each year to pay respect at the heart of Shinto tradition.
        </SectionCard>

        <SectionCard title="Fushimi Inari, Kyoto" icon="🦊">
          Famous for its thousands of vermillion <em>torii</em> gates lining the path up
          the mountain. Dedicated to Inari, kami of rice and prosperity. The fox (
          <em>kitsune</em>) is Inari&apos;s messenger, and stone fox statues guard the
          shrine. A powerful experience of walking through a tunnel of sacred gates.
        </SectionCard>

        <SectionCard title="Meiji Shrine, Tokyo" icon="🌲">
          A forested urban sanctuary in the heart of Tokyo. The vast grounds were planted
          with trees donated from across Japan when the shrine was established. A place to
          escape the city and feel the presence of nature and the enshrined spirits of
          Emperor Meiji and Empress Shōken.
        </SectionCard>
      </section>
    </div>
  )
}
