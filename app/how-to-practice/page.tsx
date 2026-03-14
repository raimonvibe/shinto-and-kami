'use client'

import PracticeStep from '@/components/PracticeStep'
import { motion } from 'framer-motion'

export default function HowToPracticePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-mountain-mist">
      <motion.header
        className="bg-hero-gradient bg-cover bg-center pt-24 pb-20 px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
          How to Practice Shinto
        </h1>
        <p className="mt-4 text-lg text-white/95 max-w-2xl mx-auto">
          Ritual, reverence, and daily mindfulness
        </p>
      </motion.header>

      <section className="mx-auto max-w-3xl px-4 py-16 space-y-6">
        <PracticeStep number={1} title="Misogi — Purification" icon="💧">
          <p className="mb-4">
            Ritual cleansing with water. Before entering sacred spaces, wash your hands and
            mouth at the <em>temizuya</em> (stone basin). This symbolizes removing
            spiritual impurity (<em>kegare</em>) and approaching the Kami with a clean
            heart.
          </p>
          <p>
            The left hand, then the right, then the mouth — using the ladle provided. The
            act is simple but profound: you leave behind the dust of the everyday world.
          </p>
        </PracticeStep>

        <PracticeStep number={2} title="Visiting a Jinja (Shrine)" icon="⛩️">
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Bow once at the <em>torii</em> gate before entering.</li>
            <li>Walk the <em>sandō</em> path (avoid the center, which is reserved for Kami).</li>
            <li>Purify at the <em>temizuya</em>: hands and mouth.</li>
            <li>At the offering hall: ring the bell (if present), throw a coin into the
              offering box.</li>
            <li>Bow deeply twice, clap twice, bow once (<em>nihon-ni-hakushu-ichirei</em>).</li>
            <li>Offer a silent prayer (thanks, respect, or a wish).</li>
            <li>Optionally leave an <em>ema</em> (wooden wish plaque) or receive an
              <em>omikuji</em> (fortune).</li>
            <li>Bow once when leaving through the torii.</li>
          </ol>
        </PracticeStep>

        <PracticeStep number={3} title="The Kamidana (Home Altar)" icon="🛕">
          <p className="mb-4">
            Set up a small high shelf in your home — a <em>kamidana</em>. Place a{' '}
            <em>ofuda</em> (paper talisman from a shrine), a small mirror, <em>sakaki</em>{' '}
            branches, and daily offerings: water, salt, and rice. A small candle or
            incense can be used.
          </p>
          <p>
            Pray each morning: bow, clap twice, bow, and offer thanks or a short prayer.
            This keeps the home connected to the sacred and cultivates daily gratitude.
          </p>
        </PracticeStep>

        <PracticeStep number={4} title="Norito — Sacred Prayers" icon="📿">
          <p>
            <em>Norito</em> are traditional spoken prayers offered to Kami. They can be
            formal (learned from priests or texts) or simple: expressing gratitude, asking
            for protection, or acknowledging the sacred in your surroundings. Speaking
            aloud with intention is a way to align your heart with the Kami.
          </p>
        </PracticeStep>

        <PracticeStep number={5} title="Matsuri — Festivals" icon="🎌">
          <p className="mb-4">
            Seasonal festivals reconnect communities with Kami. Key ones include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Oshōgatsu</strong> — New Year, the most important Shinto holiday.</li>
            <li><strong>Setsubun</strong> — Spring ritual, driving out evil with beans.</li>
            <li><strong>Obon</strong> — Honoring ancestral spirits.</li>
            <li><strong>Shichi-Go-San</strong> — Rite of passage for children (3, 5, 7).</li>
          </ul>
        </PracticeStep>

        <PracticeStep number={6} title="Daily Mindfulness" icon="🍃">
          <p>
            Shinto isn&apos;t only ritual — it&apos;s an attitude. Saying <em>Itadakimasu</em>{' '}
            before meals (gratitude for the life that feeds you), respect for nature, not
            wasting food or resources, and maintaining cleanliness are all part of the way.
            The aim is to live with <em>makoto</em> (sincerity) and awareness of the
            sacred in the ordinary.
          </p>
        </PracticeStep>
      </section>
    </div>
  )
}
