import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import type { ServicePageData } from '@/data/service-pages'

interface CTAFinalProps {
  data: ServicePageData['cta']
}

export function CTAFinal({ data }: CTAFinalProps) {
  return (
    <section className="relative py-16">
      <div className="container-page">
        <ScrollReveal>
          <div className="glass ring-gradient relative overflow-hidden rounded-[32px] p-8 md:p-14 text-center">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div
                className="absolute -left-20 -top-20 size-[420px] rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(91,141,239,0.4), transparent 70%)',
                  animation: 'var(--animate-blob-slow)',
                }}
              />
              <div
                className="absolute -right-20 -bottom-20 size-[420px] rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(155,108,255,0.4), transparent 70%)',
                  animation: 'var(--animate-blob-fast)',
                }}
              />
            </div>

            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
                <GradientText>{data.title}</GradientText>
              </h2>
              <p className="text-[color:var(--color-muted)] leading-relaxed max-w-xl">
                {data.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Button
                  as="router"
                  to={data.primary.href}
                  size="lg"
                  iconRight={<ArrowRight className="size-4" />}
                >
                  {data.primary.label}
                </Button>
                <Button as="router" to={data.secondary.href} size="lg" variant="ghost">
                  {data.secondary.label}
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
