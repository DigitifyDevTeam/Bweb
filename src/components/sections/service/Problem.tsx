import { AlertTriangle, Check } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import type { ServicePageData } from '@/data/service-pages'

interface ProblemProps {
  data: ServicePageData['problem']
}

export function Problem({ data }: ProblemProps) {
  return (
    <section className="relative py-12">
      <div className="container-page flex flex-col items-center gap-10">
        <ScrollReveal>
          <SectionTitle eyebrow={data.eyebrow} title={data.title} description={data.intro} />
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass ring-gradient w-full max-w-4xl rounded-3xl p-6 md:p-10">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <AlertTriangle className="size-5 text-amber-400" />
              </span>
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                Vous avez besoin que votre IA puisse réellement
              </span>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              {data.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-[color:var(--color-text)]"
                >
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
                    <Check className="size-3 text-white" strokeWidth={3} />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-center text-base md:text-lg leading-relaxed text-[color:var(--color-muted)]">
              {data.conclusion}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
