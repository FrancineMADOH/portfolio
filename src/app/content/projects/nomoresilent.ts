import { CaseStudy } from '../models';

// Étude de cas rédigée en F3.3 (2026-10-09). Faits confirmés uniquement.
// Sources (dépôt du projet NoMoreSilent) :
//   - CLAUDE.md : parcours anonyme victime / témoin, règles d'anonymat (aucun IP, GPS chiffré AES-256, EXIF supprimé),
//     routage par zone et catégorie, portails organisations et admin, abstraction LLM 4 fournisseurs (Groq en production),
//     Angular 21 zoneless + Tailwind, Express / TypeScript, PostgreSQL, 269 tests Jest, CI GitHub Actions, accessibilité
//   - annuaire_organisations_partenaires.md : organisations partenaires potentielles au Cameroun
//   - strategie_lancement.md : questions opérationnelles de lancement
// Site en ligne : https://nomoresilent.brightwill.org
// Dépôt GitHub privé : aucun lien vers le code (décision de Francine, 2026-10-09).

export const NOMORESILENT: CaseStudy = {
  slug: 'nomoresilent',
  title: {
    fr: 'NoMoreSilent : signaler les violences en toute sécurité',
    en: 'NoMoreSilent: reporting violence safely'
  },
  client: { fr: 'Projet personnel', en: 'Personal project' },
  period: { fr: '2025 – 2026', en: '2025 – 2026' },
  status: { fr: 'En ligne', en: 'Live' },
  summary: {
    fr: 'Une plateforme de signalement anonyme des violences au Cameroun : un assistant conversationnel empathique recueille le récit, puis le signalement est transmis aux organisations compétentes de la zone.',
    en: 'An anonymous violence reporting platform for Cameroon: an empathetic conversational assistant collects the account, then the report is routed to the relevant organisations in the area.'
  },
  keyFigures: [
    { value: '0', label: { fr: 'compte, nom ou adresse IP demandés au déclarant', en: 'account, name or IP address required from the reporter' } },
    { value: '4', label: { fr: 'fournisseurs d’IA interchangeables', en: 'interchangeable AI providers' } },
    { value: '269', label: { fr: 'tests automatisés côté API', en: 'automated API tests' } },
    { value: '5', label: { fr: 'catégories de violence prises en charge', en: 'violence categories handled' } }
  ],
  context: {
    fr: 'Au Cameroun, beaucoup de victimes de violences conjugales, sexuelles, faites aux enfants ou au travail ne signalent rien : peur d’être identifiées, de ne pas être crues, ou de ne pas savoir à qui s’adresser. Les organisations qui peuvent les aider existent, mais l’information ne leur parvient pas.',
    en: 'In Cameroon, many victims of domestic, sexual, child or workplace violence report nothing: fear of being identified, of not being believed, or of not knowing whom to turn to. The organisations able to help exist, but the information does not reach them.'
  },
  diagnosis: [
    {
      fr: 'Premier frein identifié : l’anonymat. Le parcours ne demande ni compte, ni nom, ni connexion ; aucune adresse IP ni identifiant n’est enregistré.',
      en: 'First barrier identified: anonymity. The journey requires no account, no name and no login; no IP address or identifier is stored.'
    },
    {
      fr: 'Deuxième frein : un formulaire froid décourage. Le recueil passe par une conversation empathique, qui vérifie d’abord la sécurité immédiate de la victime et laisse toujours la possibilité de s’arrêter.',
      en: 'Second barrier: a cold form discourages people. Collection happens through an empathetic conversation that first checks the victim’s immediate safety and always offers a way to stop.'
    },
    {
      fr: 'Troisième frein : savoir à qui s’adresser. Chaque signalement est orienté automatiquement selon la zone et la catégorie de violence, avec une solution de repli si aucune organisation ne couvre la zone.',
      en: 'Third barrier: knowing whom to contact. Each report is routed automatically by area and violence category, with a fallback when no organisation covers the area.'
    }
  ],
  solution: [
    {
      fr: 'Deux entrées, « Je suis victime » et « Je suis témoin », vers un assistant conversationnel qui détecte la catégorie de violence et produit un signalement structuré en fin d’échange.',
      en: 'Two entry points, “I am a victim” and “I am a witness”, leading to a conversational assistant that detects the violence category and produces a structured report at the end of the exchange.'
    },
    {
      fr: 'Anonymat garanti par conception : coordonnées GPS chiffrées en AES-256, métadonnées des photos supprimées avant envoi, journaux d’accès exclus des routes de signalement.',
      en: 'Anonymity by design: GPS coordinates encrypted with AES-256, photo metadata stripped before upload, access logs excluded from reporting routes.'
    },
    {
      fr: 'Portail des organisations (ONG, associations, syndicats) : inscription validée par un administrateur, tableau de bord des cas, suivi des statuts et transfert d’un cas hors périmètre.',
      en: 'Organisation portal (NGOs, associations, unions): registration approved by an administrator, case dashboard, status tracking and transfer of out-of-scope cases.'
    },
    {
      fr: 'Portail d’administration avec journal d’audit, blog de sensibilisation filtrable, et numéros d’urgence affichés en permanence.',
      en: 'Administration portal with an audit log, a filterable awareness blog, and emergency numbers displayed at all times.'
    }
  ],
  deliverables: [
    { label: { fr: 'Plateforme web en ligne', en: 'Live web platform' }, type: 'site' },
    { label: { fr: 'API Express / TypeScript documentée en OpenAPI', en: 'Express / TypeScript API documented with OpenAPI' }, type: 'module' },
    { label: { fr: 'Application Angular : parcours anonyme, portail organisations, portail admin', en: 'Angular app: anonymous journey, organisation portal, admin portal' }, type: 'app' },
    { label: { fr: 'Annuaire des organisations partenaires potentielles', en: 'Directory of potential partner organisations' }, type: 'doc' },
    { label: { fr: 'Stratégie de lancement', en: 'Launch strategy' }, type: 'doc' }
  ],
  results: [
    {
      fr: 'Plateforme en ligne, en français et en anglais.',
      en: 'Platform live, in French and English.'
    },
    {
      fr: '269 tests automatisés et une intégration continue GitHub Actions (lint, tests, build).',
      en: '269 automated tests and GitHub Actions continuous integration (lint, tests, build).'
    },
    {
      fr: 'Fournisseur d’IA changeable par configuration, pour suivre le budget et les contraintes régionales sans toucher au code.',
      en: 'AI provider switchable through configuration, to follow budget and regional constraints without touching the code.'
    }
  ],
  roles: {
    'developpeuse': [
      {
        fr: 'API Express / TypeScript : signalements, routage, envoi d’e-mails, authentification JWT des organisations, téléversement de preuves.',
        en: 'Express / TypeScript API: reports, routing, e-mail dispatch, JWT authentication for organisations, evidence upload.'
      },
      {
        fr: 'Assistant conversationnel en streaming (SSE), avec une couche d’abstraction sur 4 fournisseurs d’IA : Groq, Claude, Gemini, Ollama.',
        en: 'Streaming conversational assistant (SSE), with an abstraction layer over 4 AI providers: Groq, Claude, Gemini, Ollama.'
      },
      {
        fr: 'Application Angular 21 avec Tailwind, i18n FR / EN, accessibilité (lien d’évitement, zones annoncées aux lecteurs d’écran).',
        en: 'Angular 21 app with Tailwind, FR / EN i18n, accessibility (skip link, regions announced to screen readers).'
      },
      {
        fr: 'Sécurité : helmet, limitation de débit, pot de miel anti-robots, chiffrement des coordonnées, 269 tests Jest.',
        en: 'Security: helmet, rate limiting, anti-bot honeypot, coordinate encryption, 269 Jest tests.'
      }
    ],
    'consultante': [
      {
        fr: 'Conception centrée sur une utilisatrice vulnérable : anonymat, ton, sécurité d’abord, sortie possible à tout moment.',
        en: 'Design centred on a vulnerable user: anonymity, tone, safety first, a way out at any time.'
      },
      {
        fr: 'Choix d’IA guidés par le coût et le contexte : fournisseur gratuit en production, changement possible sans réécriture.',
        en: 'AI choices driven by cost and context: a free provider in production, switchable without a rewrite.'
      }
    ],
    'business-analyst': [
      {
        fr: 'Règles métier formalisées : catégories de violence, règles de routage par zone et domaine d’intervention, statuts des cas.',
        en: 'Business rules formalised: violence categories, routing rules by area and focus, case statuses.'
      },
      {
        fr: 'Cartographie des organisations partenaires potentielles au Cameroun.',
        en: 'Mapping of potential partner organisations in Cameroon.'
      }
    ]
  },
  stack: ['Angular 21', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Groq', 'Anthropic SDK', 'Gemini', 'Ollama', 'Jest', 'Docker', 'GitHub Actions'],
  links: [
    { label: { fr: 'Voir le site', en: 'Visit the website' }, url: 'https://nomoresilent.brightwill.org/', kind: 'site' }
  ],
  media: [
    { src: 'images/projects/nomoresilent/accueil-desktop.webp', alt: { fr: 'Page d’accueil de NoMoreSilent : « Je suis victime » ou « Je suis témoin »', en: 'NoMoreSilent home page: “I am a victim” or “I am a witness”' }, kind: 'desktop' },
    { src: 'images/projects/nomoresilent/signaler-desktop.webp', alt: { fr: 'Début de la conversation de signalement anonyme', en: 'Start of the anonymous reporting conversation' }, kind: 'desktop' },
    { src: 'images/projects/nomoresilent/accueil-mobile.webp', alt: { fr: 'Page d’accueil de NoMoreSilent sur mobile', en: 'NoMoreSilent home page on mobile' }, kind: 'mobile' },
    { src: 'images/projects/nomoresilent/signaler-mobile.webp', alt: { fr: 'Conversation de signalement sur mobile', en: 'Reporting conversation on mobile' }, kind: 'mobile' }
  ]
};
