import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import type { ServicePageData } from '@/data/service-pages'
import { cn } from '@/lib/cn'

interface StackTabsProps {
  data: ServicePageData['stack']
}

export function StackTabs({ data }: StackTabsProps) {
  const [active, setActive] = useState(data.tabs[0]?.id ?? '')
  const reduced = useReducedMotion()
  const current = data.tabs.find((t) => t.id === active) ?? data.tabs[0]

  if (!current) return null

  return (
    <section className="relative py-12">
      <div className="container-page flex flex-col items-center gap-10">
        <ScrollReveal>
          <SectionTitle eyebrow={data.eyebrow} title={data.title} description={data.intro} />
        </ScrollReveal>

        <div className="relative inline-flex flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur">
          {data.tabs.map((tab) => {
            const isActive = tab.id === active
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  'relative z-10 rounded-full px-4 md:px-5 py-2 text-sm font-medium transition-colors duration-200',
                  isActive ? 'text-white' : 'text-[color:var(--color-muted)] hover:text-white',
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="stack-active"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-brand shadow-[0_8px_30px_-10px_rgba(91,141,239,0.6)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : null}
                {tab.label}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="glass ring-gradient w-full max-w-4xl rounded-3xl p-6 md:p-10"
          >
            <p className="text-[color:var(--color-muted)] leading-relaxed">
              {current.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {current.items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium"
                >
                  <span className="size-1.5 rounded-full bg-gradient-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
