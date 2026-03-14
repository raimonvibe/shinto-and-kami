'use client'

import { motion } from 'framer-motion'

const SAKURA_COUNT = 12

function SakuraPetals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {Array.from({ length: SAKURA_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute animate-sakura"
          style={{
            left: `${(i * 7 + 5) % 100}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${14 + (i % 5)}s`,
          }}
        >
          <svg
            viewBox="0 0 20 24"
            className="w-5 h-6 text-white/35"
            style={{ transform: `rotate(${i * 25}deg)` }}
          >
            <ellipse cx="10" cy="12" rx="8" ry="10" fill="currentColor" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

function ToriiIcon() {
  return (
    <svg
      viewBox="0 0 80 60"
      className="w-24 h-20 sm:w-32 sm:h-24 text-white/90 mx-auto mb-6"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M10 50 L10 30 L15 30 L15 20 L25 20 L25 15 L55 15 L55 20 L65 20 L65 30 L70 30 L70 50 Z M20 25 L20 45 L60 45 L60 25 Z M30 35 L35 35 L35 40 L30 40 Z M45 35 L50 35 L50 40 L45 40 Z"
      />
      <rect x="5" y="25" width="8" height="4" fill="currentColor" opacity="0.9" />
      <rect x="67" y="25" width="8" height="4" fill="currentColor" opacity="0.9" />
      <rect x="35" y="8" width="10" height="6" fill="currentColor" opacity="0.95" />
    </svg>
  )
}

export default function HeroGradient() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#2D2D6B] via-[#40916C] to-[#C0392B] px-4">
      <SakuraPetals />
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ToriiIcon />
        </motion.div>
        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          Shinto: The Way of the Kami
        </motion.h1>
        <motion.p
          className="mt-6 text-lg sm:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          A living tradition of harmony with nature and spirit.
        </motion.p>
      </div>
    </section>
  )
}
