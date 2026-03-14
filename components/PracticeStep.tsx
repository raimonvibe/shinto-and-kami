'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PracticeStepProps {
  number: number
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
}

export default function PracticeStep({
  number,
  title,
  icon,
  children,
}: PracticeStepProps) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="rounded-xl border border-mountain-mist bg-white shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-4 p-4 sm:p-5 text-left hover:bg-mountain-mist/30 transition-colors"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-deep-indigo text-white font-serif font-semibold">
          {number}
        </span>
        {icon && (
          <span className="text-2xl text-gold" aria-hidden>
            {icon}
          </span>
        )}
        <span className="font-serif text-lg font-semibold text-deep-indigo flex-1">
          {title}
        </span>
        <span
          className={`shrink-0 text-deep-indigo transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-mountain-mist"
          >
            <div className="p-4 sm:p-5 pt-2 text-gray-700 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
