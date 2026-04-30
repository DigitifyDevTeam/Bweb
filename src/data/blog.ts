export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  imageUrl: string
  imageAlt: string
  content: string
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: 'pourquoi-agents-ia-2026',
    title: 'Pourquoi les agents IA sont la révolution business de 2026',
    excerpt:
      'Les agents IA autonomes changent la donne pour les PME : exécution multi-étapes, accès aux outils internes, prise de décision contextuelle.',
    category: 'Stratégie',
    readTime: '6 min',
    date: '2026-04-12',
    imageUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      "Visualisation d'agents IA orchestrant des taches business sur plusieurs ecrans",
    content:
      'L\'agent IA n\'est plus un chatbot. C\'est un opérateur logiciel capable d\'utiliser vos outils, lire vos données, écrire vos e-mails et déclencher vos workflows. Dans cet article, nous explorons les cas d\'usage les plus rentables, les pièges à éviter et les KPI à suivre pour réussir votre déploiement.',
  },
  {
    slug: 'n8n-vs-make-vs-zapier',
    title: 'n8n vs Make vs Zapier : quel outil choisir en 2026 ?',
    excerpt:
      'Comparatif honnête des trois plateformes d\'automatisation no-code, basé sur 80 projets clients livrés.',
    category: 'Automatisation',
    readTime: '8 min',
    date: '2026-04-02',
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      "Tableau de bord d'automatisation comparant differents outils no-code",
    content:
      'Chaque plateforme a sa philosophie. n8n offre la flexibilité maximale et l\'auto-hébergement, Make brille par son interface visuelle, et Zapier reste le champion du « ça-juste-marche ». Voici comment nous choisissons en fonction de la taille du client, du volume et du budget.',
  },
  {
    slug: 'rag-documents-internes',
    title: 'Comment mettre votre base documentaire dans une IA (RAG expliqué)',
    excerpt:
      'RAG, embeddings, vector store… Démystifions le sujet pour comprendre comment indexer vos PDF, Notion et Google Drive.',
    category: 'Technique',
    readTime: '10 min',
    date: '2026-03-18',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      "Schema technique representant un pipeline RAG avec base documentaire et recherche vectorielle",
    content:
      'Le RAG (Retrieval-Augmented Generation) permet à un LLM de répondre avec vos données à jour, sans halluciner. Nous détaillons l\'architecture, les choix de modèles d\'embedding, le découpage de documents (chunking) et les meilleures pratiques pour une qualité maximale.',
  },
  {
    slug: 'voice-agent-call-center',
    title: 'Agent vocal IA : remplacer un call center N1 en 30 jours',
    excerpt:
      'Cas client : comment nous avons absorbé 70 % des appels entrants d\'un acteur de la mobilité avec un agent vocal sur mesure.',
    category: 'Cas client',
    readTime: '5 min',
    date: '2026-02-28',
    imageUrl:
      'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      "Operateur de support client avec interface d'appels et assistant vocal IA",
    content:
      'L\'agent vocal couvre les 12 intentions les plus fréquentes, transfère intelligemment les appels complexes, et synchronise toutes les interactions avec le CRM. ROI atteint en 6 semaines, satisfaction client en hausse de 18 %.',
  },
  {
    slug: 'rgpd-ia-2026',
    title: 'IA et RGPD : ce que toute entreprise française doit savoir',
    excerpt:
      'Hébergement, transferts hors UE, droit à l\'oubli, AI Act… Le guide compact pour rester conforme.',
    category: 'Conformité',
    readTime: '7 min',
    date: '2026-02-05',
    imageUrl:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      'Documents juridiques et indicateurs de conformite numerique pour la regulation IA',
    content:
      'L\'AI Act européen est entré en application. Voici les obligations concrètes : registre des systèmes IA, analyse de risque, transparence vis-à-vis des utilisateurs, et choix des fournisseurs cloud. Notre check-list de conformité en 12 points.',
  },
  {
    slug: 'top-10-automatisations',
    title: 'Top 10 des automatisations qui rentabilisent en 60 jours',
    excerpt:
      'Notre liste des automatisations à plus fort ROI : qualification de leads, relance impayés, support N1, reporting…',
    category: 'Productivité',
    readTime: '6 min',
    date: '2026-01-22',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      "Equipe business analysant des gains de productivite sur un dashboard d'automatisation",
    content:
      'Toutes ces automatisations ont été déployées chez nos clients et ont généré soit du temps économisé, soit du chiffre d\'affaires additionnel mesurable. Pour chacune, nous indiquons l\'effort de mise en place et le gain moyen observé.',
  },
] as const
