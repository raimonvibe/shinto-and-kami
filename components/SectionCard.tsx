'use client'

import { motion } from 'framer-motion'

interface SectionCardProps {
  icon?: React.ReactNode
  title: string
  children: React.ReactNode
  className?: string
}

export default function SectionCard({
  icon,
  title,
  children,
  className = '',
}: SectionCardProps) {
  return (
    <motion.article
      className={`rounded-2xl bg-gradient-to-b from-cream to-mountain-mist p-6 sm:p-8 shadow-lg border border-white/60 transition-shadow hover:shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
    >
      {icon && (
        <div className="mb-4 text-green text-3xl" aria-hidden>
          {icon}
        </div>
      )}
      <h2 className="font-serif text-2xl font-semibold text-deep-indigo">{title}</h2>
      <div className="mt-4 text-gray-700 leading-relaxed">{children}</div>
    </motion.article>
  )
}
