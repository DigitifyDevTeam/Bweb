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
      <section className="relative overflow-hidden py-12">
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

      <section className="relative pb-16">
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
                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[color:var(--color-muted)] transition hover:bg-white/10 hover:text-white"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                        <path d="M13.5 9H16V6h-2.5C10.96 6 9 7.96 9 10.5V13H7v3h2v6h3v-6h2.4l.6-3H12v-2.5c0-.83.67-1.5 1.5-1.5Z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[color:var(--color-muted)] transition hover:bg-white/10 hover:text-white"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                        <path d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm8.4 1.8H7.8A3 3 0 0 0 4.8 7.8v8.4a3 3 0 0 0 3 3h8.4a3 3 0 0 0 3-3V7.8a3 3 0 0 0-3-3ZM12 8.4a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2Zm0 1.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Zm4.2-2.25a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[color:var(--color-muted)] transition hover:bg-white/10 hover:text-white"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                        <path d="M6.2 8.7H3.4V20h2.8V8.7ZM4.8 7.4A1.6 1.6 0 1 0 4.8 4a1.6 1.6 0 0 0 0 3.4ZM20.6 13.4c0-3-1.6-4.9-4.4-4.9-2 0-2.9 1.1-3.4 1.9v-1.7H10V20h2.8v-5.6c0-1.5.3-3 2.2-3 1.9 0 1.9 1.8 1.9 3.1V20h2.8l-.1-6.6Z" />
                      </svg>
                    </a>
                  </div>
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
