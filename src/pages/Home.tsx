import { Hero } from '@/components/sections/Hero'
import { Solutions } from '@/components/sections/Solutions'
import { Services } from '@/components/sections/Services'
import { Combinations } from '@/components/sections/Combinations'
import { Founder } from '@/components/sections/Founder'
import { Pricing } from '@/components/sections/Pricing'
import { IntegrationsMarquee } from '@/components/sections/IntegrationsMarquee'
import { Newsletter } from '@/components/sections/Newsletter'
import { useSeo } from '@/lib/seo'

export function Home() {
  useSeo({
    title: 'BWEB — Agence d\'Intelligence Artificielle',
    description:
      'BWEB conçoit et déploie des agents IA, automatisations, agents vocaux et chatbots sur mesure pour les entreprises. Premier mois gratuit.',
  })

  return (
    <>
      <Hero />
      <IntegrationsMarquee />
      <Solutions />
      <Services />
      <Combinations />
      <Founder />
      <Pricing />
      <Newsletter />
    </>
  )
}
