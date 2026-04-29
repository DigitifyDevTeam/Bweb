import { Target, Heart, Zap, Shield } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GradientText } from '@/components/ui/GradientText'
import { Card } from '@/components/ui/Card'
import { BackgroundGrid } from '@/components/ui/BackgroundGrid'
import { Founder } from '@/components/sections/Founder'
import { Newsletter } from '@/components/sections/Newsletter'
import { useSeo } from '@/lib/seo'

const VALUES = [
  {
    icon: Target,
    title: 'Pragmatisme',
    description:
      'Pas de POC qui dorment. Nous livrons des systèmes IA mesurables, en production, avec un ROI clair.',
  },
  {
    icon: Heart,
    title: 'Proximité',
    description:
      'Un interlocuteur unique, des points hebdo, une transparence totale sur l\'avancement et les choix techniques.',
  },
  {
    icon: Zap,
    title: 'Vélocité',
    description:
      'Cycles courts (2 à 6 semaines), itérations rapides, mise en production progressive sans big-bang.',
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description:
      'Hébergement européen, RGPD, journaux d\'audit complets, données chiffrées, propriété 100 % vôtre.',
  },
] as const

const STATS = [
  { value: '+80', label: 'Projets IA livrés' },
  { value: '55 %', label: 'Temps moyen économisé' },
  { value: '<3 mois', label: 'ROI moyen' },
  { value: '24/7', label: 'Agents en production' },
] as const

export function About() {
  useSeo({
    title: 'À propos',
    description:
      'BWEB est une agence française d\'Intelligence Artificielle. Notre mission : démocratiser l\'IA pour les entreprises ambitieuses.',
  })

  return (
    <>
      <section className="relative overflow-hidden py-20">
        <BackgroundGrid />
        <div className="container-page relative">
          <ScrollReveal>
            <SectionTitle
              eyebrow="À propos de BWEB"
              title={
                <>
                  Démocratiser l'IA pour les{' '}
                  <GradientText>entreprises ambitieuses</GradientText>
                </>
              }
              description="BWEB est née d'une conviction : les PME et ETI françaises méritent l'IA d'élite, sans complexité, sans dépendance, sans jargon. Nous concevons des solutions concrètes, mesurables et pérennes."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-12">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {STATS.map((stat, idx) => (
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

      <section className="relative py-20">
        <div className="container-page flex flex-col items-center gap-12">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Nos valeurs"
              title={<>Quatre principes qui guident chaque projet</>}
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 w-full">
            {VALUES.map((v, idx) => {
              const Icon = v.icon
              return (
                <ScrollReveal key={v.title} delay={idx * 0.06}>
                  <Card interactive glow className="h-full flex flex-col gap-4">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-brand">
                      <div className="size-[44px] rounded-[14px] bg-[color:var(--color-bg)]/85 flex items-center justify-center">
                        <Icon className="size-5 text-[color:var(--color-brand-300)]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{v.title}</h3>
                    <p className="text-[color:var(--color-muted)] leading-relaxed">
                      {v.description}
                    </p>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <Founder />

      <section className="relative py-20">
        <div className="container-page">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Notre méthode"
              title={
                <>
                  Du diagnostic à la production en{' '}
                  <GradientText>4 étapes</GradientText>
                </>
              }
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Diagnostic offert', desc: '30 minutes pour cadrer vos objectifs et identifier les automatisations à plus fort ROI.' },
              { step: '02', title: 'Conception', desc: 'Architecture, choix des modèles, plan d\'intégration sur votre stack actuelle.' },
              { step: '03', title: 'Implémentation', desc: 'Développement itératif en 2 à 6 semaines avec démos hebdomadaires.' },
              { step: '04', title: 'Mise en production', desc: 'Formation, monitoring, support post-livraison et amélioration continue.' },
            ].map((s, idx) => (
              <ScrollReveal key={s.step} delay={idx * 0.05}>
                <div className="glass relative h-full rounded-2xl p-6">
                  <span className="font-display text-4xl font-extrabold text-gradient">
                    {s.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
