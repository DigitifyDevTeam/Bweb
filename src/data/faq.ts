export interface FaqItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: 'Combien de temps prend la mise en place ?',
    answer:
      'Un projet Starter IA est livré en 2 semaines, un projet Business IA en 3 à 4 semaines, et un projet Pro IA en 5 à 6 semaines. Tout commence par un diagnostic offert de 30 minutes pour cadrer le périmètre.',
  },
  {
    question: 'Faut-il changer mes outils actuels ?',
    answer:
      'Non. Nous nous branchons sur votre stack existante (CRM, ERP, e-mail, helpdesk, base de données) sans migration ni interruption. Toutes nos intégrations sont versionnées et documentées.',
  },
  {
    question: 'Mes données sont-elles en sécurité ?',
    answer:
      'Oui. Nous hébergeons en Europe (RGPD), chiffrons les données au repos et en transit, et journalisons toutes les actions des agents IA. Vous gardez la propriété complète de vos modèles et de votre savoir métier.',
  },
  {
    question: 'Quels résultats puis-je attendre ?',
    answer:
      'En moyenne, nos clients constatent 30 à 60 % de temps gagné sur les tâches administratives, une réduction de 40 % des temps de réponse client, et un ROI mesurable en moins de 3 mois.',
  },
  {
    question: 'Proposez-vous du support après la livraison ?',
    answer:
      'Oui, chaque paquet inclut un support post-livraison (30, 60 ou 90 jours). Au-delà, un contrat de maintenance mensuel est proposé pour faire évoluer vos automatisations en continu.',
  },
  {
    question: 'Travaillez-vous avec des PME ou uniquement des grands comptes ?',
    answer:
      'Les deux. Nos paquets Starter et Business sont calibrés pour les TPE/PME, et le paquet Pro convient aux ETI et grands comptes. Nous adaptons l\'intensité d\'accompagnement à votre taille.',
  },
  {
    question: 'Puis-je commencer par un test gratuit ?',
    answer:
      'Oui. Nous offrons une automatisation gratuite à toutes les nouvelles entreprises qui nous contactent. Inscrivez-vous à la newsletter ou réservez un diagnostic.',
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer:
      'OpenAI, Anthropic Claude, Mistral, n8n, Make, Zapier, Pinecone, Supabase, et tous les LLM majeurs. Nous choisissons l\'outil le plus adapté à votre cas — pas l\'inverse.',
  },
] as const
