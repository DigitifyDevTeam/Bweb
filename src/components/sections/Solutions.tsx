import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GradientText } from '@/components/ui/GradientText'
import { SERVICE_PAGES } from '@/data/service-pages'

const SERVICE_IMAGES = {
  'agents-ia':
    '/agent.jpg',
  automatisation: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
  'ia-sur-mesure':
    '/notre.jpg',
} as const

export function Solutions() {
  const services = Object.values(SERVICE_PAGES)

  return (
    <section className="relative pt-12 pb-8">
      <div className="container-page">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Nos services"
            title={
              <>
                Des solutions IA pensées pour vos{' '}
                <GradientText>objectifs business</GradientText>
              </>
            }
            description="Choisissez le service adapté à votre maturité : du premier agent IA à un systeme complet en production."
          />
        </ScrollReveal>

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
                    <img
                      src={SERVICE_IMAGES[service.slug]}
                      alt={service.navTitle}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
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
                            <Check className="size-2.5 text-white" strokeWidth={3} />
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
  )
}
