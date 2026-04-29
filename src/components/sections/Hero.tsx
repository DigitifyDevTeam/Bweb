import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles, Bot, Workflow, MessageSquare, PhoneCall, Brain, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { BackgroundGrid } from '@/components/ui/BackgroundGrid'

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden pt-10 pb-24 md:pt-16 md:pb-32">
      <BackgroundGrid />
      <div className="container-page relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-7 text-center">
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-muted)]"
          >
            <Sparkles className="size-3.5 text-[color:var(--color-brand-400)]" />
            Nous sommes BWEB · solutions en IA
          </motion.span>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight"
          >
            Agence d'
            <GradientText>Intelligence Artificielle</GradientText>
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="max-w-2xl text-base md:text-lg leading-relaxed text-[color:var(--color-muted)]"
          >
            Des solutions conçues pour aider les entreprises à automatiser leurs processus,
            améliorer leur efficacité et résoudre leurs problèmes métier grâce à
            l'implémentation de l'IA.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <Button as="router" to="/tarifs" size="lg" iconRight={<ArrowRight className="size-4" />}>
              Nos offres
            </Button>
            <Button as="router" to="/contact" size="lg" variant="ghost">
              Réserver un diagnostic
            </Button>
          </motion.div>

        </div>

        <HeroOrbit />
      </div>
    </section>
  )
}

const ORBIT_ICONS = [Bot, Workflow, PhoneCall, MessageSquare, Brain, Zap]

function HeroOrbit() {
  const reduced = useReducedMotion()

  return (
    <div
      aria-hidden
      className="relative mx-auto mt-20 hidden md:block"
      style={{ height: '420px' }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative size-[420px]">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-12 rounded-full border border-white/10" />
          <div className="absolute inset-24 rounded-full border border-white/15" />

          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-28 rounded-full bg-gradient-brand shadow-[0_0_80px_-10px_rgba(91,141,239,0.7)] flex items-center justify-center"
            style={{ animation: reduced ? undefined : 'var(--animate-float)' }}
          >
            <div className="absolute inset-1 rounded-full bg-[color:var(--color-bg)]/85 flex items-center justify-center">
              <span className="text-2xl font-display font-extrabold text-gradient">B</span>
            </div>
          </div>

          {ORBIT_ICONS.slice(0, 4).map((Icon, i) => (
            <div
              key={`o1-${i}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                animation: reduced ? undefined : 'var(--animate-orbit)',
                animationDelay: `-${(i * 18) / 4}s`,
              }}
            >
              <div className="glass flex size-12 items-center justify-center rounded-2xl">
                <Icon className="size-5 text-[color:var(--color-brand-300)]" />
              </div>
            </div>
          ))}

          {ORBIT_ICONS.slice(4).map((Icon, i) => (
            <div
              key={`o2-${i}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                animation: reduced ? undefined : 'var(--animate-orbit-rev)',
                animationDelay: `-${(i * 22) / 2}s`,
              }}
            >
              <div className="glass flex size-12 items-center justify-center rounded-2xl">
                <Icon className="size-5 text-[color:var(--color-violet-500)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
