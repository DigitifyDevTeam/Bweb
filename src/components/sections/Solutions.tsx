import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GradientText } from '@/components/ui/GradientText'
import { SOLUTIONS } from '@/data/solutions'

export function Solutions() {
  return (
    <section className="relative py-24">
      <div className="container-page flex flex-col items-center gap-14">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Nos solutions"
            title={
              <>
                Les solutions BWEB —{' '}
                <GradientText>Intelligence Artificielle</GradientText>
              </>
            }
            description="Trois piliers complémentaires pour transformer votre entreprise avec l'IA, de la stratégie au déploiement opérationnel."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 w-full">
          {SOLUTIONS.map((solution, idx) => {
            const Icon = solution.icon
            return (
              <ScrollReveal key={solution.title} delay={idx * 0.08}>
                <Card interactive glow className="h-full flex flex-col gap-5">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-brand">
                    <div className="size-[44px] rounded-[14px] bg-[color:var(--color-bg)]/85 flex items-center justify-center">
                      <Icon className="size-5 text-[color:var(--color-brand-300)]" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-[color:var(--color-muted)] leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mt-auto pt-2 text-sm font-medium text-[color:var(--color-brand-300)]">
                    Découvrir nos offres →
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
