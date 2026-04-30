import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GradientText } from '@/components/ui/GradientText'
import { BackgroundGrid } from '@/components/ui/BackgroundGrid'
import { Newsletter } from '@/components/sections/Newsletter'
import { IntegrationsMarquee } from '@/components/sections/IntegrationsMarquee'
import { SERVICE_PAGES } from '@/data/service-pages'
import { useSeo } from '@/lib/seo'

const VALUES = [
  { value: '+80', label: 'Projets IA livrés' },
  { value: '55 %', label: 'Temps moyen économisé' },
  { value: '<3 mois', label: 'ROI moyen' },
  { value: '24/7', label: 'Agents en production' },
] as const

export function ServicesPage() {
  useSeo({
    title: 'Services Data & IA',
    description:
      "Agents IA & fine-tuning LLM, automatisation intelligente, IA sur mesure : 3 expertises pour passer de l'idée à la production.",
  })

  const services = Object.values(SERVICE_PAGES)

  return (
    <>
      <section className="relative overflow-hidden py-12">
        <BackgroundGrid />
        <div className="container-page relative">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Data & IA · nos services"
              title={
                <>
                  Trois expertises pour transformer{' '}
                  <GradientText>l'IA en avantage compétitif</GradientText>
                </>
              }
              description="Du diagnostic à la production : nous concevons, déployons et opérons des solutions IA adaptées à votre stack et vos enjeux métier."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative pb-8">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.map((service, idx) => {
              const Icon = service.navIcon
              return (
                <ScrollReveal key={service.slug} delay={idx * 0.06} className="h-full">
                  <Link
                    to={`/services/${service.slug}`}
                    className="group glass ring-gradient relative flex h-full flex-col overflow-hidden rounded-3xl transition-transform hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-brand opacity-90" />
                      <div className="absolute inset-0 grid-pattern" />
                      <div className="absolute left-6 top-6 inline-flex size-12 items-center justify-center rounded-2xl bg-[color:var(--color-bg)]/85 backdrop-blur">
                        <Icon className="size-5 text-white" />
                      </div>
                      <span className="absolute right-6 top-6 rounded-full bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold leading-tight">
                          {service.navTitle}
                        </h3>
                        <p className="mt-2 text-sm text-[color:var(--color-brand-300)]">
                          {service.navDescription}
                        </p>
                      </div>

                      <ul className="flex flex-col gap-2 pt-1">
                        {service.pillars.items.slice(0, 3).map((pillar) => (
                          <li
                            key={pillar.title}
                            className="flex items-start gap-2.5 text-sm text-[color:var(--color-text)]"
                          >
                            <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
                              <Check
                                className="size-2.5 text-white"
                                strokeWidth={3}
                              />
                            </span>
                            {pillar.title}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-4">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-brand-300)] transition-all group-hover:gap-3">
                          Découvrir le service <ArrowRight className="size-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-8">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {VALUES.map((stat, idx) => (
              <ScrollReveal key={stat.label} delay={idx * 0.05}>
                <div className="glass rounded-2xl p-5 text-center">
                  <div className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-gradient">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-[color:var(--color-muted)]">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <IntegrationsMarquee />
      <Newsletter />
    </>
  )
}
