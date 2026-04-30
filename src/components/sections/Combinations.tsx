import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const STATS = [
  { value: '+100 000', label: 'Combinaisons IA possibles' },
  { value: '+15', label: 'Intégrations standard' },
  { value: '<3 mois', label: 'ROI moyen constaté' },
  { value: '24/7', label: 'Disponibilité des agents' },
] as const

export function Combinations() {
  return (
    <section className="relative py-16">
      <div className="container-page">
        <ScrollReveal>
          <div className="glass ring-gradient relative overflow-hidden rounded-[32px] p-8 md:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
            >
              <div
                className="absolute -left-20 top-1/2 size-[420px] -translate-y-1/2 rounded-full blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(91,141,239,0.35), transparent 70%)',
                  animation: 'var(--animate-blob-slow)',
                }}
              />
              <div
                className="absolute -right-20 top-0 size-[380px] rounded-full blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(155,108,255,0.3), transparent 70%)',
                  animation: 'var(--animate-blob-fast)',
                }}
              />
            </div>

            <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-6">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  À propos de BWEB
                </span>
                <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
                  Plus de <GradientText>100 000 combinaisons</GradientText> IA
                  pour votre entreprise
                </h2>
                <p className="text-[color:var(--color-muted)] leading-relaxed max-w-xl">
                  Chez BWEB, notre diversité est votre avantage. Nous combinons modèles,
                  intégrations et workflows pour garantir que chaque entreprise trouve sa
                  solution IA idéale — qu'il s'agisse d'optimiser des processus, d'améliorer
                  l'interaction client ou d'analyser de grandes quantités de données.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button as="router" to="/services" iconRight={<ArrowRight className="size-4" />}>
                    Explorer les services
                  </Button>
                  <Button as="router" to="/contact" variant="ghost">
                    Parler à un expert
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
                  >
                    <div className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-gradient">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-[color:var(--color-muted)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
