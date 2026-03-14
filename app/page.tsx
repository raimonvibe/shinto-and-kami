'use client'

import HeroGradient from '@/components/HeroGradient'
import SectionCard from '@/components/SectionCard'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <HeroGradient />
      <section className="bg-gradient-to-b from-mountain-mist/50 to-cream py-16 sm:py-24 px-4">
        <div className="mx-auto max-w-4xl space-y-8">
          <motion.h2
            className="font-serif text-3xl font-semibold text-deep-indigo text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explore the tradition
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Link href="/what-is-shinto">
              <SectionCard title="What is Shinto?" icon="⛩️">
                Japan&apos;s oldest spiritual tradition — a way of living in harmony with
                nature and the sacred presence of Kami.
              </SectionCard>
            </Link>
            <Link href="/kami">
              <SectionCard title="Understanding Kami" icon="🌿">
                Sacred presences in mountains, rivers, forests, and ancestors — not
                &quot;gods&quot; in the Western sense.
              </SectionCard>
            </Link>
            <Link href="/how-to-practice">
              <SectionCard title="How to Practice" icon="🙏">
                Misogi, shrine visits, kamidana, norito, matsuri, and daily mindfulness.
              </SectionCard>
            </Link>
            <Link href="/sacred-places">
              <SectionCard title="Sacred Places" icon="⛰️">
                Mount Fuji, Ise Grand Shrine, Fushimi Inari, and Meiji Shrine.
              </SectionCard>
            </Link>
            <Link href="/symbols" className="sm:col-span-2">
              <SectionCard title="Symbols & Iconography" icon="〽️">
                Torii gates, shimenawa, shide, ofuda, omamori, and the fox (Kitsune) as
                messenger of Inari.
              </SectionCard>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
