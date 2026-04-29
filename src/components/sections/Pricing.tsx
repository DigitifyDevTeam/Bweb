import { Check, X, Sparkles } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import { PLANS, PRICING_INCLUDES, type Plan } from '@/data/pricing'
import { cn } from '@/lib/cn'

interface PricingProps {
  compact?: boolean
}

export function Pricing({ compact = false }: PricingProps) {
  return (
    <section className="relative py-24" id="tarifs">
      <div className="container-page flex flex-col items-center gap-14">
        {!compact ? (
          <ScrollReveal>
            <SectionTitle
              eyebrow="Paquets standard · Implémentation unique"
              title={
                <>
                  Choisissez le modèle de votre{' '}
                  <GradientText>agence d'IA</GradientText>
                </>
              }
              description="Trois paquets clairs, à prix fixe, sans engagement. Diagnostic offert et configuration sur votre stack actuelle, sans migration."
            />
          </ScrollReveal>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:gap-5 lg:grid-cols-3 w-full">
          {PLANS.map((plan, idx) => (
            <ScrollReveal key={plan.id} delay={idx * 0.08} className="h-full">
              <PlanCard plan={plan} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="max-w-3xl text-center text-sm text-[color:var(--color-muted)] leading-relaxed">
            <strong className="text-[color:var(--color-text)]">
              Tous les paquets incluent :
            </strong>{' '}
            {PRICING_INCLUDES.replace('Tous les paquets incluent : ', '')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  const highlight = !!plan.highlight
  return (
    <div
      className={cn(
        'glass relative flex h-full flex-col gap-6 rounded-3xl p-7 md:p-8 transition-all duration-300',
        highlight
          ? 'ring-gradient lg:scale-[1.03] shadow-[0_30px_80px_-30px_rgba(91,141,239,0.55)]'
          : 'hover:-translate-y-1 hover:border-white/15',
      )}
    >
      {highlight ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_8px_24px_-8px_rgba(155,108,255,0.7)]">
            <Sparkles className="size-3" />
            Le plus choisi
          </span>
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
          {plan.name.split(' ')[0]}
        </span>
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
          {plan.tagline}
        </p>
      </div>

      <div className="flex items-end gap-2">
        <span className="text-5xl font-display font-extrabold tracking-tight text-gradient">
          {plan.priceLabel}
        </span>
      </div>
      <span className="-mt-3 text-xs text-[color:var(--color-muted)]">
        {plan.cadence}
      </span>

      <div className="h-px bg-white/10" />

      <ul className="flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li
            key={feature.label}
            className={cn(
              'flex items-start gap-3 text-sm leading-relaxed',
              !feature.included && 'opacity-50',
            )}
          >
            <span
              className={cn(
                'mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full',
                feature.included
                  ? 'bg-gradient-brand'
                  : 'border border-white/15 bg-white/5',
              )}
            >
              {feature.included ? (
                <Check className="size-3 text-white" strokeWidth={3} />
              ) : (
                <X className="size-3 text-[color:var(--color-muted)]" />
              )}
            </span>
            <span
              className={cn(
                feature.included
                  ? 'text-[color:var(--color-text)]'
                  : 'text-[color:var(--color-muted)] line-through',
              )}
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4">
        <Button
          as="router"
          to={plan.cta.href}
          size="md"
          variant={highlight ? 'primary' : 'ghost'}
          className="w-full"
        >
          {plan.cta.label}
        </Button>
      </div>
    </div>
  )
}
