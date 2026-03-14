'use client'

import SectionCard from '@/components/SectionCard'
import { motion } from 'framer-motion'

export default function WhatIsShintoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-mountain-mist">
      <motion.header
        className="bg-hero-gradient bg-cover bg-center pt-24 pb-20 px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
          What is Shinto?
        </h1>
        <p className="mt-4 text-lg text-white/95 max-w-2xl mx-auto">
          Japan&apos;s oldest spiritual tradition
        </p>
      </motion.header>

      <section className="mx-auto max-w-3xl px-4 py-16 space-y-8">
        <SectionCard title="Origins" icon="📜">
          Shinto has no single founder and no sacred scripture like the Bible or Qur&apos;an.
          It emerged naturally from Japan&apos;s ancient reverence for the land, seasons, and
          spirits. It is often called &quot;the way of the Kami&quot; — a living tradition
          that has evolved over millennia.
        </SectionCard>

        <SectionCard title="Core belief" icon="🌏">
          All things in nature contain <em>Kami</em> — divine or sacred presences. Rocks,
          trees, rivers, wind, rain, fire, and ancestors can all be vessels of Kami. Shinto
          is not about worshipping distant deities but about recognizing the sacred in the
          everyday world.
        </SectionCard>

        <SectionCard title="A way of living" icon="🕊️">
          Shinto is not dogmatic. It does not demand a fixed creed or conversion. It is a
          way of living — emphasis on purity, gratitude, respect for nature, and harmony
          with the community and the unseen world.
        </SectionCard>

        <SectionCard title="Shinbutsu-shūgō" icon="☸️">
          In Japan, Shinto coexists with Buddhism. Many Japanese practice both: Shinto for
          life-affirming rituals (birth, marriage, seasonal festivals) and Buddhism for
          funerary and philosophical aspects. This blending is called Shinbutsu-shūgō.
        </SectionCard>
      </section>
    </div>
  )
}
