import { Check } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import type { ServicePageData } from '@/data/service-pages'

interface PillarsProps {
  data: ServicePageData['pillars']
}

export function Pillars({ data }: PillarsProps) {
  return (
    <section className="relative py-12">
      <div className="container-page flex flex-col items-center gap-12">
        <ScrollReveal>
          <SectionTitle eyebrow={data.eyebrow} title={data.title} description={data.intro} />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 w-full">
          {data.items.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <ScrollReveal key={pillar.title} delay={idx * 0.06}>
                <Card interactive glow className="h-full flex flex-col gap-5">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-brand">
                    <div className="size-[44px] rounded-[14px] bg-[color:var(--color-bg)]/85 flex items-center justify-center">
                      <Icon className="size-5 text-[color:var(--color-brand-300)]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{pillar.title}</h3>
                  <p className="text-[color:var(--color-muted)] leading-relaxed">
                    {pillar.description}
                  </p>
                  <ul className="flex flex-col gap-2 pt-2">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
                          <Check className="size-2.5 text-white" strokeWidth={3} />
                        </span>
                        <span className="text-[color:var(--color-text)]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
