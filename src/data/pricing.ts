export interface PlanFeature {
  label: string
  included: boolean
}

export interface Plan {
  id: 'starter' | 'business' | 'pro'
  name: string
  tagline: string
  price: number
  priceLabel: string
  cadence: string
  highlight?: boolean
  features: readonly PlanFeature[]
  cta: { label: string; href: string }
}

export const PLANS: readonly Plan[] = [
  {
    id: 'starter',
    name: 'Starter IA',
    tagline: 'Votre premier système automatisé en 2 semaines',
    price: 390,
    priceLabel: '390 €',
    cadence: 'paiement unique · sans engagement',
    features: [
      { label: '3 flux automatisés en n8n', included: true },
      { label: 'Jusqu\'à 2 intégrations standard', included: true },
      { label: 'Session de formation (2h)', included: true },
      { label: '30 jours de support post-livraison', included: true },
      { label: 'Agent IA inclus', included: false },
      { label: 'Intégrations legacy', included: false },
    ],
    cta: { label: 'Demander un diagnostic', href: '/contact' },
  },
  {
    id: 'business',
    name: 'Business IA',
    tagline: 'Automatisation + agent IA pour votre processus clé',
    price: 1190,
    priceLabel: '1 190 €',
    cadence: 'paiement unique · sans engagement',
    highlight: true,
    features: [
      { label: '5 flux automatisés en n8n', included: true },
      { label: '1 agent IA sur mesure', included: true },
      { label: 'Jusqu\'à 4 intégrations standard', included: true },
      { label: 'Chatbot web ou WhatsApp inclus', included: true },
      { label: 'Session formation équipe (3h)', included: true },
      { label: '60 jours de support post-livraison', included: true },
    ],
    cta: { label: 'Demander un diagnostic', href: '/contact' },
  },
  {
    id: 'pro',
    name: 'Pro IA',
    tagline: 'Système complet avec agent vocal et RAG',
    price: 0,
    priceLabel: 'Nous contacter',
    cadence: 'offre sur mesure selon vos besoins',
    features: [
      { label: 'Tout le plan Business IA', included: true },
      { label: 'Agent vocal (inbound, 3 flux)', included: true },
      { label: 'RAG sur vos documents', included: true },
      { label: 'Dashboard de métriques', included: true },
      { label: 'Jusqu\'à 6 intégrations standard', included: true },
      { label: '90 jours de support post-livraison', included: true },
    ],
    cta: { label: 'Nous contacter', href: '/contact' },
  },
] as const

export const PRICING_INCLUDES =
  'Tous les paquets incluent : diagnostic initial gratuit, documentation technique et configuration sur votre stack actuelle, sans migration ni interruption de vos opérations.'
