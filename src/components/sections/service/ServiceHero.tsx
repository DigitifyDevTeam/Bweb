import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { BackgroundGrid } from '@/components/ui/BackgroundGrid'
import type { ServicePageData } from '@/data/service-pages'

interface ServiceHeroProps {
  data: ServicePageData['hero']
}

export function ServiceHero({ data }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-24">
      <BackgroundGrid />
      <div className="container-page relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
            {data.eyebrow}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight">
            {data.title}{' '}
            <GradientText>{data.titleAccent}</GradientText>
          </h1>
          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[color:var(--color-muted)]">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Button
              as="router"
              to={data.primaryCta.href}
              size="lg"
              iconRight={<ArrowRight className="size-4" />}
            >
              {data.primaryCta.label}
            </Button>
            <Button as="router" to={data.secondaryCta.href} size="lg" variant="ghost">
              {data.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
