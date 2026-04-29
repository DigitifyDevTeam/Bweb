import { useState, type FormEvent } from 'react'
import { Mail, Sparkles, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="relative py-24" id="newsletter">
      <div className="container-page">
        <ScrollReveal>
          <div className="glass ring-gradient relative overflow-hidden rounded-[32px] p-8 md:p-14 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
            >
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
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                <Sparkles className="size-3.5 text-[color:var(--color-brand-400)]" />
                Offre découverte
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
                Vous voulez une <GradientText>automatisation IA gratuite ?</GradientText>
              </h2>
              <p className="text-[color:var(--color-muted)] leading-relaxed max-w-xl">
                Laissez votre e-mail et nous vous contacterons pour vous offrir une
                automatisation IA, prise en charge par notre équipe — sans aucun coût.
              </p>

              {submitted ? (
                <div className="glass rounded-full px-5 py-3 text-sm">
                  Merci ! Nous vous contactons sous 24h.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-2 flex w-full max-w-lg flex-col items-stretch gap-3 sm:flex-row"
                >
                  <label className="relative flex-1">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[color:var(--color-muted)]" />
                    <input
                      type="email"
                      required
                      placeholder="vous@entreprise.fr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 w-full rounded-full border border-white/10 bg-white/[0.04] pl-11 pr-4 text-sm text-white placeholder:text-[color:var(--color-subtle)] focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-500)]/40"
                    />
                  </label>
                  <Button type="submit" size="lg" iconRight={<ArrowRight className="size-4" />}>
                    S'abonner
                  </Button>
                </form>
              )}

              <p className="text-xs text-[color:var(--color-subtle)]">
                Pas de spam — vos données ne sont jamais partagées.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
