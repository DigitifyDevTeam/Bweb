import { Check, X } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GradientText } from '@/components/ui/GradientText'
import { BackgroundGrid } from '@/components/ui/BackgroundGrid'
import { Pricing } from '@/components/sections/Pricing'
import { SavingsCalculator } from '@/components/sections/SavingsCalculator'
import { Newsletter } from '@/components/sections/Newsletter'
import { PLANS } from '@/data/pricing'
import { useSeo } from '@/lib/seo'

const COMPARISON_ROWS = [
  { label: 'Flux automatisés (n8n)', values: ['3', '5', '5+'] },
  { label: 'Agent IA sur mesure', values: [false, true, true] },
  { label: 'Chatbot Web / WhatsApp', values: [false, true, true] },
  { label: 'Agent vocal IA', values: [false, false, true] },
  { label: 'RAG sur documents', values: [false, false, true] },
  { label: 'Dashboard de métriques', values: [false, false, true] },
  { label: 'Intégrations standard', values: ['2', '4', '6'] },
  { label: 'Formation équipe', values: ['2 h', '3 h', '3 h + 1:1'] },
  { label: 'Support post-livraison', values: ['30 j', '60 j', '90 j'] },
] as const

export function PricingPage() {
  useSeo({
    title: 'Tarifs',
    description:
      'Trois paquets IA à prix fixe : Starter 790 €, Business 1 890 € et Pro 3 490 €. Sans engagement, diagnostic offert.',
  })

  return (
    <>
      <section className="relative overflow-hidden py-12">
        <BackgroundGrid />
        <div className="container-page relative">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Tarifs · sans engagement"
              title={
                <>
                  Des paquets clairs pour passer à <GradientText>l'IA</GradientText>{' '}
                  rapidement
                </>
              }
              description="Implémentation unique, prix fixe, diagnostic offert. Vos données restent les vôtres, votre stack n'est pas migrée."
            />
          </ScrollReveal>
        </div>
      </section>

      <Pricing compact />

      <section className="relative py-12">
        <div className="container-page">
          <ScrollReveal>
            <SectionTitle
              align="left"
              eyebrow="Comparatif détaillé"
              title="Trouvez le paquet adapté à votre maturité IA"
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-10 overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-5 font-medium text-[color:var(--color-muted)]">
                      Fonctionnalité
                    </th>
                    {PLANS.map((p) => (
                      <th key={p.id} className="px-6 py-5 font-bold">
                        {p.name}
                        <div className="text-xs font-normal text-[color:var(--color-muted)]">
                          {p.priceLabel}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.label} className="border-b border-white/5 last:border-0">
                      <td className="px-6 py-4 text-[color:var(--color-muted)]">
                        {row.label}
                      </td>
                      {row.values.map((v, i) => (
                        <td key={i} className="px-6 py-4">
                          {typeof v === 'boolean' ? (
                            v ? (
                              <Check className="size-4 text-emerald-400" />
                            ) : (
                              <X className="size-4 text-[color:var(--color-subtle)]" />
                            )
                          ) : (
                            <span className="font-medium">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SavingsCalculator />
      <Newsletter />
    </>
  )
}
