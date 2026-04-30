import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Database,
  Network,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { BackgroundGrid } from '@/components/ui/BackgroundGrid'

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-20">
      <BackgroundGrid />
      <div className="container-page relative">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="flex w-full flex-col items-center gap-7 text-center lg:max-w-[560px] lg:items-start lg:text-left">
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
              className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center lg:items-start"
            >
              <Button
                as="router"
                to="/tarifs"
                size="lg"
                className="w-full sm:w-auto"
                iconRight={<ArrowRight className="size-4" />}
              >
                Nos offres
              </Button>
              <Button as="router" to="/contact" size="lg" variant="ghost" className="w-full sm:w-auto">
                Réserver un diagnostic
              </Button>
            </motion.div>
          </div>

          <AICoreShowcase reduced={Boolean(reduced)} />
        </div>
      </div>
    </section>
  )
}

const AI_NODES = [
  { icon: Bot, label: 'Agents' },
  { icon: Workflow, label: 'Automations' },
  { icon: Database, label: 'Data' },
  { icon: BrainCircuit, label: 'LLM' },
  { icon: Network, label: 'Integrations' },
] as const

function AICoreShowcase({ reduced }: Readonly<{ reduced: boolean }>) {
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="relative mx-auto flex w-full items-center justify-center overflow-hidden pt-8 pb-2 md:overflow-visible md:pt-0 md:pb-6 lg:max-w-[560px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(61,132,255,0.2),transparent_55%)]" />

      <div className="relative h-[250px] w-[250px] md:h-[470px] md:w-[470px] lg:h-[560px] lg:w-[560px]">
        <div className="absolute inset-[4%] rounded-full border border-white/10" />
        <div className="absolute inset-[16%] rounded-full border border-white/10" />
        <div className="absolute inset-[28%] rounded-full border border-white/15" />

        <div
          className="absolute inset-[18%] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 30% 24%, rgba(255,255,255,0.45), rgba(255,255,255,0) 32%), radial-gradient(circle at 60% 70%, rgba(34,211,238,0.25), rgba(34,211,238,0) 55%), radial-gradient(circle at 50% 50%, rgba(155,108,255,0.3), rgba(26,34,83,0) 75%)',
            filter: 'blur(22px)',
            transform: 'scale(1.2)',
          }}
        />

        <div
          className="absolute inset-[30%] rounded-full border border-white/20 shadow-[0_0_120px_-20px_rgba(70,152,255,0.75)]"
          style={{ animation: reduced ? undefined : 'var(--animate-float)' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-90" />
          <div className="absolute inset-[3px] rounded-full bg-[color:var(--color-bg)]/90 backdrop-blur-xl flex items-center justify-center">
            <span className="text-2xl md:text-4xl font-display font-extrabold text-gradient">
              BWEB
            </span>
          </div>
          <div className="absolute inset-0 rounded-full border border-cyan-300/25" />
        </div>

        {AI_NODES.slice(0, 3).map(({ icon: Icon, label }, index) => (
          <div
            key={label}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: reduced ? undefined : 'var(--animate-orbit)',
              animationDelay: `-${(index * 18) / 3}s`,
            }}
          >
            <div className="glass min-w-28 rounded-2xl border border-white/15 px-3 py-2 text-center md:min-w-34 md:px-4 md:py-3">
              <Icon className="mx-auto size-4 md:size-5 text-[color:var(--color-brand-300)]" />
              <p className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                {label}
              </p>
            </div>
          </div>
        ))}

        {AI_NODES.slice(3).map(({ icon: Icon, label }, index) => (
          <div
            key={label}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: reduced ? undefined : 'var(--animate-orbit-rev)',
              animationDelay: `-${(index * 22) / 2}s`,
            }}
          >
            <div className="glass min-w-28 rounded-2xl border border-white/15 px-3 py-2 text-center md:min-w-34 md:px-4 md:py-3">
              <Icon className="mx-auto size-4 md:size-5 text-[color:var(--color-violet-500)]" />
              <p className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
