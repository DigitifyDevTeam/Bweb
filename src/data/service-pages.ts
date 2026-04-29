import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  Brain,
  Briefcase,
  ChartBar,
  CircuitBoard,
  Cog,
  Compass,
  Database,
  FileSearch,
  Gauge,
  Headphones,
  Layers,
  LineChart,
  Lock,
  Mail,
  Megaphone,
  Network,
  Package,
  PencilRuler,
  PlayCircle,
  Rocket,
  ScanSearch,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TestTube,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'

export type ServiceSlug = 'agents-ia' | 'automatisation' | 'ia-sur-mesure'

export interface ServicePillar {
  icon: LucideIcon
  title: string
  description: string
  bullets: readonly string[]
}

export interface ServiceUseCase {
  icon: LucideIcon
  title: string
  domain: string
  bullets: readonly string[]
}

export interface ServiceStackTab {
  id: string
  label: string
  description: string
  items: readonly string[]
}

export interface ServiceReason {
  icon: LucideIcon
  title: string
  description: string
}

export interface ServiceMethodStep {
  icon: LucideIcon
  title: string
  description: string
}

export interface ServicePageData {
  slug: ServiceSlug
  navTitle: string
  navDescription: string
  navIcon: LucideIcon
  hero: {
    eyebrow: string
    title: string
    titleAccent: string
    description: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
  problem: {
    eyebrow: string
    title: string
    intro: string
    bullets: readonly string[]
    conclusion: string
  }
  pillars: {
    eyebrow: string
    title: string
    intro: string
    items: readonly ServicePillar[]
  }
  useCases: {
    eyebrow: string
    title: string
    items: readonly ServiceUseCase[]
  }
  stack: {
    eyebrow: string
    title: string
    intro: string
    tabs: readonly ServiceStackTab[]
  }
  reasons: {
    eyebrow: string
    title: string
    items: readonly ServiceReason[]
  }
  method: {
    eyebrow: string
    title: string
    steps: readonly ServiceMethodStep[]
  }
  cta: {
    title: string
    description: string
    primary: { label: string; href: string }
    secondary: { label: string; href: string }
  }
  seo: {
    title: string
    description: string
  }
}

const AGENTS_IA: ServicePageData = {
  slug: 'agents-ia',
  navTitle: 'Agents IA & Fine-Tuning',
  navDescription: 'RAG, fine-tuning Llama/Mistral, agents autonomes connectés à vos outils.',
  navIcon: Bot,
  hero: {
    eyebrow: 'Agents IA · Data & IA',
    title: "Création d'agents IA autonomes &",
    titleAccent: 'Fine-Tuning de LLM',
    description:
      "Nous concevons des agents IA sur mesure capables de comprendre votre entreprise, d'exploiter vos données internes et d'exécuter des actions complexes en autonomie. Notre mission : transformer l'IA en cerveau virtuel métier, aligné avec vos process et votre stratégie.",
    primaryCta: { label: 'Réserver un diagnostic', href: '/contact' },
    secondaryCta: { label: 'Voir nos tarifs', href: '/tarifs' },
  },
  problem: {
    eyebrow: 'Le problème',
    title: 'Les IA standards ne connaissent pas votre entreprise',
    intro:
      "Les outils comme ChatGPT sont puissants, mais ils ont une limite majeure : ils ignorent tout de votre activité, de vos documents et de vos process. Vos équipes perdent des heures à chercher dans des PDF, des emails, des bases Notion ou des CRM.",
    bullets: [
      "Réserver un rendez-vous",
      'Analyser un contrat ou un devis',
      'Mettre à jour un CRM ou un ERP',
      'Générer un document à partir de vos données',
      "Exécuter une suite d'actions multi-outils",
    ],
    conclusion:
      "Vous n'avez pas seulement besoin d'un assistant qui répond. Vous avez besoin d'un agent qui agit.",
  },
  pillars: {
    eyebrow: 'La solution',
    title: 'Des agents IA réellement connectés à votre entreprise',
    intro:
      'Nous combinons RAG, fine-tuning de LLM open-source et orchestration multi-agents pour livrer des solutions concrètes, sécurisées et évolutives.',
    items: [
      {
        icon: FileSearch,
        title: 'RAG (Retrieval-Augmented Generation)',
        description:
          "Connectez votre IA à votre base de connaissance interne (PDF, Notion, Drive, CRM, ERP). L'IA cesse de répondre 'de mémoire' et s'appuie sur vos documents réels.",
        bullets: [
          'Réponses fiables, à jour et sourcées',
          'Réduction drastique des hallucinations',
          'Exploitation de votre capital documentaire',
        ],
      },
      {
        icon: Brain,
        title: 'Fine-Tuning de LLM',
        description:
          "Nous entraînons des modèles open-source (Llama 3, Mistral) sur votre ton de marque, vos données métier et vos historiques pour créer une IA spécialisée, pas générique.",
        bullets: [
          'Modèle aligné avec votre culture',
          'Précision et pertinence accrues',
          'Indépendance vis-à-vis des fournisseurs cloud',
        ],
      },
      {
        icon: CircuitBoard,
        title: 'Agents IA autonomes',
        description:
          "Au-delà du chatbot, nos agents exécutent des séquences d'actions, interagissent avec vos APIs et prennent des décisions selon des règles que vous définissez.",
        bullets: [
          'Planifier, envoyer, mettre à jour, analyser',
          'Connecté à vos outils métier',
          "Garde-fous et journaux d'audit complets",
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Cas d'usage",
    title: 'Des résultats concrets, dans tous les métiers',
    items: [
      {
        icon: Users,
        domain: 'Support interne',
        title: 'Chatbot RH & IT connecté à vos docs',
        bullets: [
          'Réponses sur les congés, mutuelle, processus',
          'Sources PDF citées automatiquement',
          'Décharge le service RH des questions répétitives',
        ],
      },
      {
        icon: Briefcase,
        domain: 'Vente & Business',
        title: 'Agent commercial augmenté',
        bullets: [
          'Qualification automatique des leads',
          'Vérification agenda + prise de RDV',
          'Mise à jour CRM en temps réel',
        ],
      },
      {
        icon: ScanSearch,
        domain: 'Juridique',
        title: "Assistant d'analyse contractuelle",
        bullets: [
          'Compare des clauses entre versions',
          'Identifie les incohérences et risques',
          'Résume des contrats complexes',
        ],
      },
      {
        icon: LineChart,
        domain: 'Finance',
        title: 'Synthèse documentaire & reporting',
        bullets: [
          'Lecture automatique de rapports financiers',
          'Génération de résumés exécutifs',
          'Alertes sur indicateurs clés',
        ],
      },
    ],
  },
  stack: {
    eyebrow: 'Stack technique',
    title: 'Une architecture IA robuste, évolutive et sécurisée',
    intro:
      "Notre approche ne repose pas sur un outil, mais sur un écosystème technologique cohérent et maîtrisé.",
    tabs: [
      {
        id: 'orchestration',
        label: 'Orchestration & Agents',
        description:
          "Nous orchestrons des agents multi-étapes capables d'utiliser vos outils, planifier, et raisonner.",
        items: ['LangChain', 'LangGraph', 'CrewAI', 'OpenAI Assistants API', 'AutoGen'],
      },
      {
        id: 'vectorisation',
        label: 'Vectorisation & RAG',
        description:
          'Bases vectorielles performantes pour une recherche sémantique avancée et une indexation intelligente.',
        items: ['Pinecone', 'Supabase Vector', 'Weaviate', 'Qdrant', 'pgvector'],
      },
      {
        id: 'modeles',
        label: 'Modèles & Fine-Tuning',
        description:
          'Modèles open-source ou propriétaires, fine-tunés sur votre ton de marque et vos données métier.',
        items: ['Llama 3', 'Mistral', 'Claude', 'GPT-4o', 'Hugging Face Hub'],
      },
      {
        id: 'securite',
        label: 'Sécurité & Déploiement',
        description:
          'Cloud sécurisé, infra privée ou on-premise. Chiffrement, RGPD, journaux et conformité.',
        items: ['Hébergement UE', 'RGPD', 'SSO / SAML', 'Audit logs', 'On-premise possible'],
      },
    ],
  },
  reasons: {
    eyebrow: 'Pourquoi investir',
    title: "L'IA n'est pas un effet de mode, c'est un levier stratégique",
    items: [
      {
        icon: Gauge,
        title: 'Productivité augmentée',
        description:
          'Réponses instantanées, automatisation des tâches répétitives, prise de décision accélérée.',
      },
      {
        icon: ChartBar,
        title: 'Réduction des coûts',
        description:
          "Support interne, qualification commerciale, analyse documentaire : 24/7, sans erreur de fatigue.",
      },
      {
        icon: Database,
        title: 'Capital informationnel valorisé',
        description:
          'Vos documents internes deviennent un moteur décisionnel, pas un cimetière de fichiers.',
      },
      {
        icon: Rocket,
        title: 'Avantage concurrentiel',
        description:
          'Réagissez plus vite, innovez plus vite, offrez une meilleure expérience client.',
      },
    ],
  },
  method: {
    eyebrow: 'Notre méthode',
    title: 'Du diagnostic à la production en 6 étapes',
    steps: [
      {
        icon: Compass,
        title: 'Diagnostic stratégique',
        description: 'Cadrage des objectifs, identification des automatisations à plus fort ROI.',
      },
      {
        icon: PencilRuler,
        title: 'Architecture & design',
        description: 'Choix des modèles, schéma RAG, plan de connexion à votre stack actuelle.',
      },
      {
        icon: Database,
        title: 'Préparation des données',
        description: 'Indexation, nettoyage, structuration des sources documentaires.',
      },
      {
        icon: Brain,
        title: 'Fine-tuning & RAG',
        description: 'Entraînement spécialisé, tests de pertinence, calibration des garde-fous.',
      },
      {
        icon: Network,
        title: 'Intégration',
        description: 'Connexion à vos outils, déploiement, formation des équipes.',
      },
      {
        icon: ShieldCheck,
        title: 'Monitoring & amélioration',
        description: 'Logs, KPI, itération continue selon le feedback réel.',
      },
    ],
  },
  cta: {
    title: 'Prêt à déployer votre premier agent IA ?',
    description:
      'Diagnostic offert de 30 minutes pour cadrer votre projet, identifier les quick-wins et estimer le ROI.',
    primary: { label: 'Réserver un diagnostic', href: '/contact' },
    secondary: { label: 'Voir nos tarifs', href: '/tarifs' },
  },
  seo: {
    title: 'Agents IA & Fine-Tuning LLM',
    description:
      "BWEB conçoit des agents IA autonomes connectés à vos outils. RAG, fine-tuning Llama 3 / Mistral, agents multi-étapes pour PME et grands comptes.",
  },
}

const AUTOMATION: ServicePageData = {
  slug: 'automatisation',
  navTitle: 'Automatisation Intelligente',
  navDescription: 'Workflows IA Make/n8n pour automatiser tâches, décisions et synchros.',
  navIcon: Workflow,
  hero: {
    eyebrow: 'Automatisation · Data & IA',
    title: 'Automatisation intelligente des processus &',
    titleAccent: 'Workflows IA',
    description:
      "Nous concevons des systèmes d'automatisation intelligente qui transforment vos opérations en process fluides, connectés et autonomes. Au-delà du simple branchement d'outils : nous intégrons de l'intelligence décisionnelle au cœur de vos workflows.",
    primaryCta: { label: 'Réserver un audit', href: '/contact' },
    secondaryCta: { label: 'Voir nos tarifs', href: '/tarifs' },
  },
  problem: {
    eyebrow: 'Le problème',
    title: "Trop de tâches manuelles, pas assez d'intelligence",
    intro:
      'Vos équipes consacrent encore une part importante de leur temps à des tâches qui semblent anodines mais qui, cumulées, représentent des dizaines d’heures perdues chaque mois.',
    bullets: [
      'Copier-coller des données entre logiciels',
      'Saisie manuelle dans plusieurs outils',
      'Tri des emails et demandes clients',
      "Vérification et correction d'erreurs",
      'Synchronisation manuelle CRM ↔ outils tiers',
    ],
    conclusion:
      "L'automatisation classique soulage une partie du problème. L'automatisation intelligente le résout durablement.",
  },
  pillars: {
    eyebrow: 'La solution',
    title: 'Automatiser, connecter et décider',
    intro:
      'Notre service repose sur trois piliers : compréhension métier, orchestration technique et intelligence intégrée.',
    items: [
      {
        icon: Compass,
        title: 'Audit stratégique des processus',
        description:
          'Avant toute mise en œuvre, nous analysons en profondeur vos flux pour identifier les automatisations à plus fort ROI.',
        bullets: [
          'Cartographie des tâches répétitives',
          'Repérage des points de blocage',
          "Priorisation par impact / effort",
        ],
      },
      {
        icon: Workflow,
        title: 'Workflows intelligents Make / n8n',
        description:
          "Vos automatisations ne se contentent plus d'exécuter des règles fixes. Elles analysent, comprennent et décident.",
        bullets: [
          'Analyse de sentiment / urgence',
          'Routage et réponses adaptatives',
          'Génération de contenu automatique',
        ],
      },
      {
        icon: Network,
        title: 'Connexion API multi-outils',
        description:
          "Interconnexion fluide CRM, email, comptabilité, ERP, marketing, bases de données. Plus de ressaisies, plus d'erreurs.",
        bullets: [
          'Synchronisation temps réel',
          'Webhooks et triggers complexes',
          'Réconciliation automatique',
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Cas d'usage",
    title: 'Des automatisations qui se rentabilisent en 60 jours',
    items: [
      {
        icon: Headphones,
        domain: 'Service client',
        title: "Tri & traitement intelligent des demandes",
        bullets: [
          'Détection urgence + sentiment',
          'Génération de réponse adaptée',
          'Création automatique du ticket',
        ],
      },
      {
        icon: Users,
        domain: 'Ressources Humaines',
        title: 'Sourcing & qualification candidats',
        bullets: [
          'Extraction des compétences depuis CV',
          'Classement selon vos critères',
          'Pré-évaluation automatique',
        ],
      },
      {
        icon: Megaphone,
        domain: 'Marketing & Contenu',
        title: 'Multiplication de contenu cross-canal',
        bullets: [
          'Génération de posts depuis un article',
          'Planification multi-réseaux',
          'Newsletters alimentées automatiquement',
        ],
      },
      {
        icon: Mail,
        domain: 'Finance & Admin',
        title: 'Facturation, relance, reporting',
        bullets: [
          'Génération automatique de devis',
          'Relance intelligente des impayés',
          'Reporting consolidé chaque matin',
        ],
      },
    ],
  },
  stack: {
    eyebrow: 'Stack technique',
    title: 'Une stack éprouvée pour des automatisations fiables',
    intro:
      'Chaque architecture est conçue pour être scalable, sécurisée, documentée et adaptée à votre environnement.',
    tabs: [
      {
        id: 'orchestration',
        label: 'Orchestration',
        description: 'Plateformes pour orchestrer des workflows complexes, no-code ou hybrides.',
        items: ['n8n', 'Make (Integromat)', 'Zapier', 'Temporal', 'Airflow'],
      },
      {
        id: 'ia',
        label: 'IA & LLM',
        description: 'Couche intelligente injectée dans vos workflows pour analyser et décider.',
        items: ['OpenAI API', 'Claude', 'Mistral', 'Whisper', 'Embeddings'],
      },
      {
        id: 'donnees',
        label: 'Données & outils',
        description: 'Sources et destinations connectées en temps réel.',
        items: ['Airtable', 'Notion', 'PostgreSQL', 'Google Sheets', 'HubSpot / Salesforce'],
      },
      {
        id: 'securite',
        label: 'Sécurité',
        description: 'Authentification SSO, gestion des secrets, journalisation et conformité.',
        items: ['SSO / SAML', 'Vault / KMS', 'Audit logs', 'RGPD', 'Hébergement UE'],
      },
    ],
  },
  reasons: {
    eyebrow: 'Pourquoi investir',
    title: 'Plus que du temps gagné, un avantage opérationnel',
    items: [
      {
        icon: ShieldCheck,
        title: "Réduction d'erreurs",
        description: 'Plus de ressaisies, plus de doublons : des données propres et cohérentes.',
      },
      {
        icon: Zap,
        title: 'Délais raccourcis',
        description: 'Traitement quasi instantané des demandes, des leads et des incidents.',
      },
      {
        icon: Users,
        title: 'Communication fluide',
        description: 'Vos outils dialoguent entre eux. Vos équipes voient la même chose.',
      },
      {
        icon: ChartBar,
        title: 'Coûts opérationnels',
        description: 'Diminution mesurable des heures sur tâches sans valeur ajoutée.',
      },
    ],
  },
  method: {
    eyebrow: 'Notre méthode',
    title: 'Une démarche structurée en 6 étapes',
    steps: [
      {
        icon: Search,
        title: 'Analyse stratégique',
        description: 'Identification des process à fort ROI et des contraintes métier.',
      },
      {
        icon: Layers,
        title: 'Cartographie des process',
        description: 'Modélisation des flux actuels et des flux cibles, avec mesures.',
      },
      {
        icon: PencilRuler,
        title: 'Conception des workflows',
        description: 'Architecture détaillée, choix des plateformes, schéma de données.',
      },
      {
        icon: Sparkles,
        title: 'Intégration IA',
        description: 'Injection des modèles dans les bons points de décision.',
      },
      {
        icon: TestTube,
        title: 'Tests & optimisation',
        description: 'Tests unitaires, end-to-end, performance et taux d’erreur.',
      },
      {
        icon: Gauge,
        title: 'Monitoring continu',
        description: 'Tableaux de bord, alertes, amélioration continue.',
      },
    ],
  },
  cta: {
    title: "Prêt à libérer vos équipes des tâches répétitives ?",
    description:
      "Audit d'automatisation offert : nous analysons vos process et vous remettons une roadmap chiffrée.",
    primary: { label: 'Demander un audit', href: '/contact' },
    secondary: { label: 'Voir nos tarifs', href: '/tarifs' },
  },
  seo: {
    title: 'Automatisation Intelligente IA & Workflows',
    description:
      "BWEB automatise vos processus métier avec n8n, Make et l'IA. Workflows intelligents, connexion CRM/ERP, monitoring continu.",
  },
}

const IA_CUSTOM: ServicePageData = {
  slug: 'ia-sur-mesure',
  navTitle: 'IA sur Mesure',
  navDescription: 'Modèles prédictifs, NLP, computer vision intégrés à vos systèmes.',
  navIcon: Sparkles,
  hero: {
    eyebrow: 'IA sur mesure · Data & IA',
    title: "Solutions d'intelligence artificielle sur mesure",
    titleAccent: 'pour vos enjeux métiers',
    description:
      "Lorsque les SaaS génériques ne suffisent plus, nous concevons des solutions IA réellement adaptées à votre métier, vos données et votre stratégie. Le développement IA sur mesure vous permet de créer un avantage concurrentiel unique, fondé sur votre propre écosystème.",
    primaryCta: { label: 'Étudier mon projet', href: '/contact' },
    secondaryCta: { label: 'Voir nos tarifs', href: '/tarifs' },
  },
  problem: {
    eyebrow: 'Le problème',
    title: 'Les solutions génériques ont leurs limites',
    intro:
      "De nombreuses entreprises adoptent des outils IA prêts à l'emploi. Ces solutions sont efficaces pour des besoins standards, mais elles montrent vite leurs limites face à un métier spécifique.",
    bullets: [
      'Logiciels du marché trop génériques',
      'Modèles entraînés pour tout le monde',
      'Spécificités métier non prises en compte',
      'Données silotées et sous-exploitées',
      'Pas de différenciation compétitive',
    ],
    conclusion:
      "Votre véritable avantage concurrentiel réside dans vos données internes. Une IA sur mesure les transforme en actif stratégique.",
  },
  pillars: {
    eyebrow: 'La solution',
    title: 'Une IA conçue pour votre entreprise',
    intro:
      'Nous développons des systèmes IA personnalisés, adaptés à vos processus, vos données et vos objectifs business.',
    items: [
      {
        icon: ChartBar,
        title: 'Algorithmes prédictifs',
        description:
          "Nous créons des modèles capables d'anticiper et d'optimiser vos décisions à partir de vos données historiques.",
        bullets: [
          'Prévision des ventes / demande',
          'Scoring clients & churn',
          'Maintenance prédictive',
          'Optimisation des stocks',
        ],
      },
      {
        icon: ScanSearch,
        title: 'Analyse de données complexes',
        description:
          'Vision par ordinateur, NLP, classification intelligente : des modèles entraînés spécifiquement pour votre contexte métier.',
        bullets: [
          "Analyse d'images industrielles",
          'Compréhension de documents complexes',
          'Extraction d’informations clés',
          "Détection d'anomalies",
        ],
      },
      {
        icon: Cog,
        title: 'Intégration ERP / CRM',
        description:
          "Une solution IA n'a de valeur que si elle est intégrée à vos outils. Nous l'embarquons dans votre SI existant.",
        bullets: [
          'Plug dans ERP / CRM / outils métier',
          "API et événements en temps réel",
          'Déploiement progressif sans risque',
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Cas d'usage",
    title: 'Des modèles taillés pour vos enjeux',
    items: [
      {
        icon: ShoppingBag,
        domain: 'E-commerce',
        title: 'Recommandation ultra-personnalisée',
        bullets: [
          "Analyse de l'historique d'achat",
          'Modélisation du comportement de navigation',
          'Hausse mesurable du panier moyen',
        ],
      },
      {
        icon: Package,
        domain: 'Industrie',
        title: 'Détection de défauts en production',
        bullets: [
          'Vision par ordinateur en temps réel',
          'Anomalies invisibles à l’œil humain',
          'Optimisation des contrôles qualité',
        ],
      },
      {
        icon: Lock,
        domain: 'Finance',
        title: 'Détection de fraude personnalisée',
        bullets: [
          'Analyse temps réel des transactions',
          'Modèles statistiques sur mesure',
          'Bien plus précis qu’une règle générique',
        ],
      },
      {
        icon: Brain,
        domain: 'Santé / Service',
        title: "Aide à la décision augmentée",
        bullets: [
          'Synthèse multi-source',
          'Recommandations contextuelles',
          'Traçabilité et explicabilité',
        ],
      },
    ],
  },
  stack: {
    eyebrow: 'Stack technique',
    title: 'Des technologies éprouvées pour les projets complexes',
    intro:
      'Nos architectures sont scalables, sécurisées, adaptées à vos volumes de données et conformes aux exigences réglementaires.',
    tabs: [
      {
        id: 'modelisation',
        label: 'Modélisation',
        description: 'Développement et entraînement de modèles classiques et hybrides.',
        items: ['Python', 'scikit-learn', 'XGBoost', 'pandas', 'NumPy'],
      },
      {
        id: 'deeplearning',
        label: 'Deep Learning',
        description: 'Réseaux profonds pour la vision et le langage.',
        items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'OpenCV', 'spaCy'],
      },
      {
        id: 'mlops',
        label: 'MLOps',
        description: 'Industrialisation, monitoring et reproductibilité.',
        items: ['MLflow', 'SageMaker', 'Vertex AI', 'Weights & Biases', 'DVC'],
      },
      {
        id: 'cloud',
        label: 'Cloud & infra',
        description: 'Entraînement et déploiement à grande échelle, sécurisés.',
        items: ['AWS', 'Azure AI', 'GCP', 'Docker', 'Kubernetes'],
      },
    ],
  },
  reasons: {
    eyebrow: 'Pourquoi investir',
    title: 'Une IA qui devient un actif stratégique',
    items: [
      {
        icon: Database,
        title: 'Vos données pleinement exploitées',
        description: "Votre historique métier devient la matière première d'un avantage durable.",
      },
      {
        icon: Rocket,
        title: 'Avantage concurrentiel unique',
        description: 'Un atout que vos concurrents ne peuvent pas copier.',
      },
      {
        icon: Cog,
        title: 'Décisions automatisées',
        description: 'Process complexes pilotés par un modèle calibré sur votre contexte.',
      },
      {
        icon: ChartBar,
        title: 'Marges améliorées',
        description: 'Optimisation continue des coûts et de la qualité.',
      },
    ],
  },
  method: {
    eyebrow: 'Notre méthode',
    title: 'De la donnée brute au modèle en production',
    steps: [
      {
        icon: Compass,
        title: 'Diagnostic des enjeux',
        description: 'Compréhension du métier, des KPI et des contraintes opérationnelles.',
      },
      {
        icon: Database,
        title: 'Audit des données',
        description: 'Qualité, complétude, conformité et stratégie de collecte.',
      },
      {
        icon: PencilRuler,
        title: 'Conception du modèle',
        description: 'Choix des algorithmes, du protocole d’évaluation et des baselines.',
      },
      {
        icon: Brain,
        title: 'Entraînement & validation',
        description: 'Itérations, tuning, validation croisée et tests métier.',
      },
      {
        icon: Network,
        title: 'Intégration au SI',
        description: 'API, ERP, CRM, applis métier : déploiement maîtrisé.',
      },
      {
        icon: PlayCircle,
        title: 'Monitoring & amélioration',
        description: 'Drift detection, ré-entraînement, KPI métier suivis dans le temps.',
      },
    ],
  },
  cta: {
    title: 'Prêt à créer votre propre avantage technologique ?',
    description:
      'Étudions ensemble votre projet IA sur mesure : faisabilité, ROI, roadmap. Sans engagement.',
    primary: { label: 'Demander une étude', href: '/contact' },
    secondary: { label: 'Voir nos tarifs', href: '/tarifs' },
  },
  seo: {
    title: 'Solutions IA sur Mesure',
    description:
      "BWEB développe des solutions IA sur mesure pour vos enjeux métiers : prédiction, NLP, computer vision, intégration ERP/CRM.",
  },
}

export const SERVICE_PAGES: Record<ServiceSlug, ServicePageData> = {
  'agents-ia': AGENTS_IA,
  automatisation: AUTOMATION,
  'ia-sur-mesure': IA_CUSTOM,
}

export interface ServiceNavEntry {
  slug: ServiceSlug
  title: string
  description: string
  icon: LucideIcon
  to: string
}

export const SERVICE_NAV: readonly ServiceNavEntry[] = (
  Object.values(SERVICE_PAGES) as ServicePageData[]
).map((p) => ({
  slug: p.slug,
  title: p.navTitle,
  description: p.navDescription,
  icon: p.navIcon,
  to: `/services/${p.slug}`,
}))
