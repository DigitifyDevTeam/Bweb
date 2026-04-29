import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import type { ServicePageData } from '@/data/service-pages'

interface MethodProps {
  data: ServicePageData['method']
}

export function Method({ data }: MethodProps) {
  return (
    <section className="relative py-20">
      <div className="container-page flex flex-col items-center gap-12">
        <ScrollReveal>
          <SectionTitle eyebrow={data.eyebrow} title={data.title} />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full">
          {data.steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={step.title} delay={idx * 0.04}>
                <div className="glass relative h-full overflow-hidden rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-4xl font-extrabold text-gradient leading-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon className="size-5 text-[color:var(--color-brand-300)]" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-tight">{step.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
