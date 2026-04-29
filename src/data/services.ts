import type { LucideIcon } from 'lucide-react'
import { Bot, Workflow, PhoneCall, MessageSquare } from 'lucide-react'

export interface Service {
  id: 'agents' | 'automation' | 'voice' | 'chatbot'
  label: string
  title: string
  tagline: string
  description: string
  bullets: readonly string[]
  icon: LucideIcon
}

export const SERVICES: readonly Service[] = [
  {
    id: 'agents',
    label: 'Agents IA',
    title: 'Agents IA autonomes',
    tagline: 'Apprennent, analysent, décident.',
    description:
      'Boostez votre activité avec des agents IA qui apprennent, analysent et agissent de manière autonome. Ils automatisent les tâches complexes, améliorent la productivité et prennent des décisions intelligentes en temps réel.',
    bullets: [
      'Raisonnement multi-étapes & outils',
      'Connecteurs CRM, ERP, e-mail, base de connaissances',
      'Boucle d\'apprentissage continu sur vos données',
      'Garde-fous & journaux d\'audit complets',
    ],
    icon: Bot,
  },
  {
    id: 'automation',
    label: 'Automatisations',
    title: 'Automatisations IA pour entreprises',
    tagline: 'n8n + IA, sans code, sans friction.',
    description:
      'Simplifiez vos processus avec nos automatisations IA. Des flux de travail répétitifs aux tâches critiques, notre technologie réduit les erreurs, fait gagner du temps et optimise vos ressources.',
    bullets: [
      'Flux n8n connectés à votre stack actuelle',
      'Triggers webhooks, e-mail, formulaires, API',
      'Scoring & qualification automatique de leads',
      'Reporting et alertes Slack / WhatsApp',
    ],
    icon: Workflow,
  },
  {
    id: 'voice',
    label: 'Agents vocaux',
    title: 'Agents vocaux IA',
    tagline: 'Voix naturelle, 24/7, multi-langues.',
    description:
      'Transformez l\'interaction avec vos clients grâce à des agents de voix IA. Des systèmes intelligents qui comprennent et répondent de manière naturelle, idéaux pour les call centers, les assistants virtuels et plus encore.',
    bullets: [
      'Inbound & outbound, transferts intelligents',
      'Synthèse vocale réaliste (Eleven Labs / OpenAI)',
      'Prise de RDV, qualification, support N1',
      'Transcription, résumé et CRM en temps réel',
    ],
    icon: PhoneCall,
  },
  {
    id: 'chatbot',
    label: 'Chatbots IA',
    title: 'Chatbots IA pour votre activité',
    tagline: 'Web & WhatsApp, RAG sur vos documents.',
    description:
      'Améliorez l\'expérience client avec des chatbots IA qui offrent des réponses rapides et précises 24/7. Ils résolvent les requêtes, gèrent les commandes et améliorent l\'expérience utilisateur.',
    bullets: [
      'RAG sur PDF, Notion, Confluence, Drive',
      'Multi-canaux : site, WhatsApp, Messenger, Slack',
      'Hand-off humain transparent vers un agent',
      'Personnalité, ton et UX 100 % à votre image',
    ],
    icon: MessageSquare,
  },
] as const

export interface Solution {
  title: string
  description: string
  icon: LucideIcon
}
