import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/cn'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: readonly AccordionItem[]
  defaultOpen?: number | null
}

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={item.question}
            className={cn(
              'glass overflow-hidden rounded-2xl transition-colors duration-300',
              isOpen && 'border-white/15 bg-white/[0.05]',
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="text-base md:text-lg font-medium text-[color:var(--color-text)]">
                {item.question}
              </span>
              <span
                className={cn(
                  'inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300',
                  isOpen && 'rotate-45 border-white/20 bg-white/10',
                )}
              >
                <Plus className="size-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div className="px-6 pb-6 text-[color:var(--color-muted)] leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
