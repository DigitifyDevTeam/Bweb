import type { LucideIcon } from 'lucide-react'
import { Compass, Sparkles, Cog } from 'lucide-react'

export interface SolutionCard {
  title: string
  description: string
  icon: LucideIcon
}

export const SOLUTIONS: readonly SolutionCard[] = [
  {
    title: 'Planification IA pour entreprises',
    description:
      'Nous concevons des stratégies claires et efficaces pour intégrer l\'intelligence artificielle de manière durable sur le long terme.',
    icon: Compass,
  },
  {
    title: 'Solutions IA orientées résultats',
    description:
      'Nous développons des outils IA conçus pour optimiser et étendre les processus clés de marketing, vente et opérations.',
    icon: Sparkles,
  },
  {
    title: 'IA appliquée à des problèmes réels',
    description:
      'Nous implémentons des technologies IA pratiques et évolutives pour maximiser l\'efficacité des opérations à fort enjeu.',
    icon: Cog,
  },
] as const
