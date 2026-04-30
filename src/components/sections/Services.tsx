import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import { SERVICES, type Service } from '@/data/services'
import { cn } from '@/lib/cn'

export function Services() {
  const [active, setActive] = useState<Service['id']>('agents')
  const reduced = useReducedMotion()
  const current = SERVICES.find((s) => s.id === active) ?? SERVICES[0]
  const Icon = current.icon

  return (
    <section className="relative py-16" id="services">
      <div className="container-page flex flex-col items-center gap-12">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Services IA pour entreprises"
            title={
              <>
                Catalogue IA de <GradientText>Bweb</GradientText>
              </>
            }
            description="Quatre familles de produits IA, conçues pour s'intégrer à votre stack actuelle sans migration ni interruption."
          />
        </ScrollReveal>

        <div className="relative inline-flex flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur">
          {SERVICES.map((service) => {
            const isActive = service.id === active
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActive(service.id)}
                className={cn(
                  'relative z-10 rounded-full px-4 md:px-5 py-2 text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'text-white'
                    : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-text)]',
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="services-active"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-brand shadow-[0_8px_30px_-10px_rgba(91,141,239,0.6)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : null}
                {service.label}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="glass ring-gradient w-full rounded-3xl p-6 md:p-10"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="flex flex-col gap-5">
                <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-brand">
                  <div className="size-[52px] rounded-[14px] bg-[color:var(--color-bg)]/85 flex items-center justify-center">
                    <Icon className="size-6 text-[color:var(--color-brand-300)]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    {current.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[color:var(--color-brand-300)]">
                    {current.tagline}
                  </p>
                </div>
                <p className="text-[color:var(--color-muted)] leading-relaxed">
                  {current.description}
                </p>
                <div className="pt-2">
                  <Button as="router" to="/contact" size="md">
                    Discuter de mon projet
                  </Button>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-3">
                {current.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                  >
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
                      <Check className="size-3.5 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[color:var(--color-text)]">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
