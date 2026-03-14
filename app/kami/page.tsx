'use client'

import SectionCard from '@/components/SectionCard'
import { motion } from 'framer-motion'

export default function KamiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-mountain-mist">
      <motion.header
        className="bg-hero-gradient bg-cover bg-center pt-24 pb-20 px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
          Understanding Kami
        </h1>
        <p className="mt-4 text-lg text-white/95 max-w-2xl mx-auto">
          Sacred presences in nature and spirit
        </p>
      </motion.header>

      <section className="mx-auto max-w-3xl px-4 py-16 space-y-8">
        <SectionCard title="What are Kami?" icon="✨">
          Kami are not &quot;gods&quot; in the Western sense. They are sacred presences —
          numinous, awe-inspiring forces that can reside in natural phenomena, places, and
          ancestors. The word suggests both &quot;above&quot; and &quot;hidden&quot; —
          something that transcends the ordinary yet is immanent in the world.
        </SectionCard>

        <SectionCard title="Where Kami dwell" icon="🏔️">
          Kami are found in mountains (Fujisan is sacred), rivers, forests, wind, rain,
          rocks, fire, and ancestors. Certain trees, stones, and waterfalls are revered as
          <em>yorishiro</em> — objects in which Kami descend or manifest.
        </SectionCard>

        <SectionCard title="Major Kami" icon="☀️">
          <strong>Amaterasu</strong> — the sun goddess, enshrined at Ise.{' '}
          <strong>Susanoo</strong> — associated with storms and the sea.{' '}
          <strong>Inari</strong> — kami of rice, foxes, and prosperity, worshipped at
          thousands of Inari shrines including Fushimi Inari in Kyoto.
        </SectionCard>

        <SectionCard title="Jinja — Shrines" icon="⛩️">
          Every shrine (<em>jinja</em>) is dedicated to specific Kami. Visiting a shrine
          is a way to pay respect, offer thanks, or ask for blessing from that particular
          Kami. The torii gate marks the boundary between the ordinary world and the
          sacred precinct.
        </SectionCard>
      </section>
    </div>
  )
}