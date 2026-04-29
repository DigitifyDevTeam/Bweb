import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GradientText } from '@/components/ui/GradientText'
import { BackgroundGrid } from '@/components/ui/BackgroundGrid'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { Newsletter } from '@/components/sections/Newsletter'
import { FAQ_ITEMS } from '@/data/faq'
import { useSeo } from '@/lib/seo'

export function Faq() {
  useSeo({
    title: 'FAQ',
    description:
      'Questions fréquentes sur l\'agence d\'IA BWEB : délais, sécurité, intégrations, support, RGPD et plus.',
  })

  return (
    <>
      <section className="relative overflow-hidden py-20">
        <BackgroundGrid />
        <div className="container-page relative">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Foire aux questions"
              title={
                <>
                  Tout ce que vous devez savoir avant de{' '}
                  <GradientText>passer à l'IA</GradientText>
                </>
              }
              description="Vous ne trouvez pas votre réponse ? Écrivez-nous, on vous répond en moins de 24h."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="container-page max-w-3xl">
          <ScrollReveal>
            <Accordion items={FAQ_ITEMS} />
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 glass ring-gradient flex flex-col items-center gap-4 rounded-3xl p-8 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <h3 className="text-xl font-bold">Une autre question ?</h3>
                <p className="text-sm text-[color:var(--color-muted)] mt-1">
                  Réservez 30 minutes avec notre équipe pour un diagnostic offert.
                </p>
              </div>
              <Button as="router" to="/contact" size="lg">
                Réserver un diagnostic
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
