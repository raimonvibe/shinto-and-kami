'use client'

import SectionCard from '@/components/SectionCard'
import { motion } from 'framer-motion'

export default function SymbolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-mountain-mist">
      <motion.header
        className="bg-hero-gradient bg-cover bg-center pt-24 pb-20 px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
          Symbols & Iconography
        </h1>
        <p className="mt-4 text-lg text-white/95 max-w-2xl mx-auto">
          Marks of the sacred in Shinto
        </p>
      </motion.header>

      <section className="mx-auto max-w-3xl px-4 py-16 space-y-8">
        <SectionCard title="Torii gate" icon="⛩️">
          The <em>torii</em> is the threshold between the ordinary world and the sacred
          precinct of the shrine. Passing under it, you enter the realm of the Kami.
          Traditionally vermillion (red-orange), the color is believed to ward off evil
          and symbolize vitality.
        </SectionCard>

        <SectionCard title="Shimenawa" icon="〽️">
          A rope of twisted rice straw that marks sacred spaces — wrapped around trees,
          rocks, or shrine structures. It designates a boundary: inside is the domain of
          Kami. The <em>shimenawa</em> often has <em>shide</em> (zigzag paper streamers)
          attached.
        </SectionCard>

        <SectionCard title="Shide" icon="📜">
          White zigzag paper streamers (<em>gohei</em> or <em>shide</em>) attached to
          shimenawa or wands. They represent the presence of Kami and are used in
          purification rituals. The zigzag shape is said to attract and hold sacred
          energy.
        </SectionCard>

        <SectionCard title="Ofuda & Omamori" icon="🛡️">
          <em>Ofuda</em> are paper talismans from a shrine, often placed in a kamidana.
          <em>Omamori</em> are amulets — small cloth bags containing a written prayer —
          carried for protection, health, or success. Both are renewed annually at the
          shrine.
        </SectionCard>

        <SectionCard title="Fox (Kitsune)" icon="🦊">
          The fox is the messenger of Inari, the kami of rice, prosperity, and commerce.
          Stone fox statues (<em>kitsune</em>) flank the entrance to Inari shrines,
          often holding a key (to the rice granary) or a jewel. They are guardians and
          intermediaries between humans and Kami.
        </SectionCard>
      </section>
    </div>
  )
}
