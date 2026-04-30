import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import type { ServicePageData } from '@/data/service-pages'

interface WhyInvestProps {
  data: ServicePageData['reasons']
}

export function WhyInvest({ data }: WhyInvestProps) {
  return (
    <section className="relative py-12">
      <div className="container-page flex flex-col items-center gap-12">
        <ScrollReveal>
          <SectionTitle eyebrow={data.eyebrow} title={data.title} />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 w-full">
          {data.items.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <ScrollReveal key={reason.title} delay={idx * 0.04}>
                <Card interactive glow className="h-full flex flex-col gap-4">
                  <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-gradient-brand">
                    <div className="size-[40px] rounded-[12px] bg-[color:var(--color-bg)]/85 flex items-center justify-center">
                      <Icon className="size-5 text-[color:var(--color-brand-300)]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold leading-tight">{reason.title}</h3>
                  <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                    {reason.description}
                  </p>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
