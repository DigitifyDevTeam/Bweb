import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GradientText } from '@/components/ui/GradientText'
import { BackgroundGrid } from '@/components/ui/BackgroundGrid'
import { ContactForm } from '@/components/sections/ContactForm'
import { useSeo } from '@/lib/seo'

const COORDINATES = [
  { icon: Phone, label: 'Téléphone', value: '+216 20 096 110', href: 'tel:+21620096110' },
  { icon: Mail, label: 'Email', value: 'rebhi.walid@gmail.com', href: 'mailto:rebhi.walid@gmail.com' },
  { icon: MapPin, label: 'Bureaux', value: 'Cyber Parc - Kairouan 3100 Tunisie' },
  { icon: Clock, label: 'Horaires', value: 'Lundi → vendredi · 8 h - 17 h (CET)' },
] as const

export function Contact() {
  useSeo({
    title: 'Contact',
    description:
      'Contactez BWEB pour un diagnostic IA gratuit. Réponse en moins de 24h ouvrées.',
  })

  return (
    <>
      <section className="relative overflow-hidden py-20">
        <BackgroundGrid />
        <div className="container-page relative">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Contact"
              title={
                <>
                  Parlons de votre projet <GradientText>IA</GradientText>
                </>
              }
              description="Chaque entreprise a des besoins différents. Remplissez le formulaire et dites-nous ce qui vous intéresse — un de nos spécialistes vous contacte personnellement sous 24h."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <ScrollReveal className="lg:col-span-5">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  Vos coordonnées directes
                </h2>
                <p className="text-[color:var(--color-muted)] leading-relaxed">
                  Pas besoin d'être un expert en technologie. Dites-nous votre situation
                  ou ce que vous voulez améliorer, et nous vous montrons comment l'IA
                  peut vous aider.
                </p>
                <div className="flex flex-col gap-3">
                  {COORDINATES.map((c) => {
                    const Icon = c.icon
                    const content = (
                      <div className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:bg-white/[0.05]">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-brand">
                          <span className="size-[36px] rounded-[10px] bg-[color:var(--color-bg)]/85 flex items-center justify-center">
                            <Icon className="size-4 text-[color:var(--color-brand-300)]" />
                          </span>
                        </span>
                        <div>
                          <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                            {c.label}
                          </div>
                          <div className="font-medium">{c.value}</div>
                        </div>
                      </div>
                    )
                    return 'href' in c && c.href ? (
                      <a key={c.label} href={c.href}>
                        {content}
                      </a>
                    ) : (
                      <div key={c.label}>{content}</div>
                    )
                  })}
                </div>

                <div className="glass rounded-2xl p-5 mt-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
                    Ce que vous obtenez
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2 text-sm text-[color:var(--color-muted)]">
                    <li>· Un diagnostic offert de 30 minutes</li>
                    <li>· Une proposition chiffrée sous 48h</li>
                    <li>· Un POC en moins de 2 semaines si validé</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-7">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
