import { Check } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import type { ServicePageData } from '@/data/service-pages'

interface UseCasesProps {
  data: ServicePageData['useCases']
}

export function UseCases({ data }: UseCasesProps) {
  return (
    <section className="relative py-12">
      <div className="container-page flex flex-col items-center gap-12">
        <ScrollReveal>
          <SectionTitle eyebrow={data.eyebrow} title={data.title} />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 w-full">
          {data.items.map((useCase, idx) => {
            const Icon = useCase.icon
            return (
              <ScrollReveal key={useCase.title} delay={idx * 0.05}>
                <article className="glass ring-gradient h-full rounded-3xl p-6 md:p-8 flex flex-col gap-4 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-brand">
                      <div className="size-[44px] rounded-[14px] bg-[color:var(--color-bg)]/85 flex items-center justify-center">
                        <Icon className="size-5 text-[color:var(--color-brand-300)]" />
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-brand-300)]">
                      {useCase.domain}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    {useCase.title}
                  </h3>
                  <ul className="flex flex-col gap-2.5 pt-1">
                    {useCase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                          <Check className="size-3 text-[color:var(--color-brand-300)]" strokeWidth={3} />
                        </span>
                        <span className="text-[color:var(--color-text)] leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
