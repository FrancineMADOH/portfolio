import { CaseStudy } from '../models';

// Étude de cas rédigée en F3.1 (2026-10-09). Faits confirmés uniquement.
// Sources (dossier /home/madoh/Desktop/devprojects/pbccg) :
//   - fourre_tout/diagnostic-digital-CIG.md : diagnostic sur 3 axes, principe « standard d'abord », feuille de route en 3 phases
//   - fourre_tout/CIG_PROPOSITION_SITE_WEB.md (BW-CIG-2026-002) et CIG_PROPOSITION_BRIGHTFRET.md (BW-CIG-2026-003) : propositions
//   - plan-dev-bw_cig_website.md : 57 fonctionnalités, phases 0 à 18, critères d'acceptation
//   - tests-a-faire-bw_cig_website.md : 345 cas de test
//   - CLAUDE.md : 4 entités, 5 agences (Cameroun, Gabon, Zimbabwe), FR / EN / ZH, Lighthouse 95 / 100 / 100 / 100
//   - lecons-apprises.md : notes vocales transcrites, deux niveaux de droits, deux manuels
//   - Décision de Francine (2026-10-09) : BrightFret est en production chez CIG
// Non publié (décision de Francine, 2026-10-09) : prix, grille tarifaire, bloc ventes et caisses des agences, sujet SMTP.

export const CHRIST_INTERNATIONAL_GROUP: CaseStudy = {
  slug: 'christ-international-group',
  title: {
    fr: 'Transformation digitale de Christ International Group',
    en: 'Digital transformation of Christ International Group'
  },
  client: { fr: 'Christ International Group', en: 'Christ International Group' },
  period: { fr: 'Mi-2026', en: 'Mid-2026' },
  status: { fr: 'En production', en: 'In production' },
  summary: {
    fr: 'Un groupe d’import-export Chine ↔ Afrique, 4 entités et 5 agences dans 3 pays : du diagnostic global à un site multilingue et une solution de gestion du fret, tous deux en production.',
    en: 'A China ↔ Africa import-export group with 4 entities and 5 branches in 3 countries: from a global diagnosis to a multilingual website and a freight management solution, both in production.'
  },
  keyFigures: [
    { value: '4', label: { fr: 'entités digitalisées', en: 'business entities digitalised' } },
    { value: '5', label: { fr: 'agences dans 3 pays', en: 'branches in 3 countries' } },
    { value: '3', label: { fr: 'langues : français, anglais, chinois', en: 'languages: French, English, Chinese' } },
    { value: '57', label: { fr: 'fonctionnalités livrées avec critères d’acceptation', en: 'features delivered with acceptance criteria' } }
  ],
  context: {
    fr: 'Christ International Group relie la Chine et l’Afrique depuis 2019 à travers 4 entités : Christ Cargo (fret maritime et aérien), ChristVel (voyages d’affaires et d’études), Christ Education (achats et accompagnement en Chine) et Christ Telecom. Le groupe compte 5 agences au Cameroun, au Gabon et au Zimbabwe. La demande initiale portait sur « un nouveau site ». Le besoin réel était la transformation de tout le métier : visibilité, suivi des colis, ventes en agence.',
    en: 'Christ International Group has connected China and Africa since 2019 through 4 entities: Christ Cargo (sea and air freight), ChristVel (business and study travel), Christ Education (purchasing and support in China) and Christ Telecom. The group runs 5 branches in Cameroon, Gabon and Zimbabwe. The initial request was for “a new website”. The real need was to transform the whole business: visibility, parcel tracking, branch sales.'
  },
  diagnosis: [
    {
      fr: 'Diagnostic global sur 3 axes avant tout chiffrage : web et contenu, fret et logistique, ventes et agences. Chaque besoin passe la même question : le standard Odoo le couvre-t-il déjà ?',
      en: 'A global diagnosis on 3 axes before any quote: web and content, freight and logistics, sales and branches. Every need goes through the same question: does standard Odoo already cover it?'
    },
    {
      fr: 'Recueil du besoin dans les canaux du client : notes vocales WhatsApp transcrites avec Whisper, flyers et e-mails de la direction, structurés en cahier des charges page par page.',
      en: 'Requirements gathered through the client’s own channels: WhatsApp voice notes transcribed with Whisper, flyers and e-mails from management, structured into a page-by-page specification.'
    },
    {
      fr: 'Feuille de route en 3 phases vendables : site web multilingue, déploiement de BrightFret, puis recrutement. Le hors-périmètre est écrit noir sur blanc pour éviter les dérives.',
      en: 'A roadmap in 3 sellable phases: multilingual website, BrightFret deployment, then recruitment. Out-of-scope items are written down to prevent scope creep.'
    }
  ],
  solution: [
    {
      fr: 'Phase 1 — Site institutionnel multilingue (français, anglais, chinois) sur Odoo 19 : une page par entité, services, agences, calendrier des départs, actualités, FAQ, formulaires de devis et de pro forma, espace client sécurisé.',
      en: 'Phase 1 — Multilingual corporate website (French, English, Chinese) on Odoo 19: one page per entity, services, branches, departure calendar, news, FAQ, quote and pro forma forms, secure customer portal.'
    },
    {
      fr: 'Contenu géré en autonomie par l’équipe CIG : départs, agences, services, témoignages et FAQ sont des fiches éditables, et une section sans contenu publié disparaît d’elle-même. Deux niveaux de droits protègent la structure du site.',
      en: 'Content managed independently by the CIG team: departures, branches, services, testimonials and FAQ are editable records, and a section with no published content hides itself. Two permission levels protect the site structure.'
    },
    {
      fr: 'Phase 2 — BrightFret, la solution de gestion du fret : cycle de vie complet des expéditions aériennes et maritimes, 12 étapes de transit, codes de suivi et étiquettes QR, bordereaux de groupage, réclamations, notifications e-mail et SMS.',
      en: 'Phase 2 — BrightFret, the freight management solution: full lifecycle of air and sea shipments, 12 transit stages, tracking codes and QR labels, consolidation manifests, claims, e-mail and SMS notifications.'
    },
    {
      fr: 'Une PWA pour les opérateurs terrain (scan caméra ou douchette, bordereaux) et une application Android publiée sur Google Play, avec laquelle les clients de CIG suivent leurs colis en autonomie.',
      en: 'A PWA for field operators (camera or barcode-scanner input, manifests) and an Android app published on Google Play, which CIG customers use to track their parcels on their own.'
    }
  ],
  deliverables: [
    { label: { fr: 'Diagnostic de transformation digitale sur 3 axes', en: 'Digital transformation diagnosis on 3 axes' }, type: 'doc' },
    { label: { fr: 'Propositions technico-financières par phase', en: 'Technical and financial proposals per phase' }, type: 'doc' },
    { label: { fr: 'Cahier des charges issu des notes vocales du client', en: 'Specification built from the client’s voice notes' }, type: 'doc' },
    { label: { fr: 'Plan de développement : 57 fonctionnalités, critères d’acceptation testables', en: 'Development plan: 57 features, testable acceptance criteria' }, type: 'doc' },
    { label: { fr: 'Cahier de recette : 345 cas de test', en: 'Test book: 345 test cases' }, type: 'doc' },
    { label: { fr: 'Manuel utilisateur et manuel administrateur', en: 'User manual and administrator manual' }, type: 'doc' },
    { label: { fr: 'Site web multilingue FR / EN / ZH', en: 'Multilingual FR / EN / ZH website' }, type: 'site' },
    { label: { fr: 'Module Odoo du site et module de gestion du fret', en: 'Odoo website module and freight management module' }, type: 'module' },
    { label: { fr: 'PWA opérateurs et application Android BrightFret', en: 'Operator PWA and BrightFret Android app' }, type: 'app' }
  ],
  results: [
    {
      fr: 'Site et solution de fret en production, utilisés par le groupe et ses clients.',
      en: 'Website and freight solution in production, used by the group and its customers.'
    },
    {
      fr: 'Lighthouse 95 / 100 / 100 / 100 (performance, accessibilité, bonnes pratiques, SEO).',
      en: 'Lighthouse 95 / 100 / 100 / 100 (performance, accessibility, best practices, SEO).'
    },
    {
      fr: 'Une équipe autonome : départs, actualités, agences et FAQ se mettent à jour sans développeur.',
      en: 'A self-sufficient team: departures, news, branches and FAQ are updated without a developer.'
    },
    {
      fr: 'Le standard d’abord : portail client, événements, formulaires et conditions générales reposent sur les modules natifs, le sur-mesure est limité à quelques modèles de contenu.',
      en: 'Standard first: customer portal, events, forms and terms rely on native modules; custom work is limited to a few content models.'
    }
  ],
  roles: {
    'consultante': [
      {
        fr: 'Diagnostic global qui a transformé une demande de site en projet de transformation sur 3 axes et 3 phases.',
        en: 'A global diagnosis that turned a website request into a transformation project on 3 axes and 3 phases.'
      },
      {
        fr: 'Arbitrage systématique « standard ou sur-mesure » pour limiter le coût de maintenance du client.',
        en: 'Systematic “standard or custom” trade-offs to keep the client’s maintenance cost low.'
      },
      {
        fr: 'Propositions technico-financières par phase, avec hors-périmètre explicite.',
        en: 'Technical and financial proposals per phase, with explicit out-of-scope items.'
      }
    ],
    'cheffe-de-projet': [
      {
        fr: 'Planification en 19 phases et 57 fonctionnalités, livrées une à une avec revue et validation.',
        en: 'Planning in 19 phases and 57 features, delivered one at a time with review and sign-off.'
      },
      {
        fr: 'Suivi des dépendances au contenu du client, points ouverts avec impact par défaut, décisions datées.',
        en: 'Tracking of dependencies on client content, open points with a default impact, dated decisions.'
      },
      {
        fr: 'Recette (345 cas de test), tickets de configuration serveur assignés, manuels et formation de l’équipe.',
        en: 'Acceptance testing (345 test cases), assigned server configuration tickets, manuals and team training.'
      }
    ],
    'business-analyst': [
      {
        fr: 'Cahier des charges construit à partir de notes vocales WhatsApp, de flyers et d’e-mails.',
        en: 'Specification built from WhatsApp voice notes, flyers and e-mails.'
      },
      {
        fr: 'Critères d’acceptation testables pour chaque fonctionnalité et liste des livrables attendus du client.',
        en: 'Testable acceptance criteria for every feature and a list of deliverables expected from the client.'
      },
      {
        fr: 'Nomenclature des produits de fret, lexique métier commun aux 3 langues, modèle de droits à deux niveaux.',
        en: 'Freight product nomenclature, a business glossary shared across 3 languages, a two-level permission model.'
      }
    ],
    'odoo': [
      {
        fr: 'Choix des modules natifs : Site web, Portail client, Événements, Facturation sans comptabilité complète.',
        en: 'Choice of native modules: Website, Customer portal, Events, Invoicing without full accounting.'
      },
      {
        fr: 'Paramétrage pensé pour l’autonomie du client : fiches de contenu, deux niveaux de droits d’édition, données protégées mises à jour par migration.',
        en: 'Configuration designed for client autonomy: content records, two levels of editing rights, protected data updated through migrations.'
      },
      {
        fr: 'Site multilingue avec traductions FR / EN / ZH gérées par fichiers PO, édition hybride code et éditeur.',
        en: 'Multilingual site with FR / EN / ZH translations managed through PO files, hybrid code and editor editing.'
      }
    ],
    'developpeuse': [
      {
        fr: 'Module de site Odoo 19 en Python, QWeb et SCSS : modèles de contenu, contrôleurs, migrations, traductions.',
        en: 'Odoo 19 website module in Python, QWeb and SCSS: content models, controllers, migrations, translations.'
      },
      {
        fr: 'Module de gestion du fret : cycle de vie, QR codes, rapports PDF, API REST pour l’app mobile, PWA opérateurs.',
        en: 'Freight management module: lifecycle, QR codes, PDF reports, REST API for the mobile app, operator PWA.'
      },
      {
        fr: 'Polices et icônes auto-hébergées, aucun appel réseau externe, Lighthouse 95 / 100 / 100 / 100.',
        en: 'Self-hosted fonts and icons, no external network calls, Lighthouse 95 / 100 / 100 / 100.'
      }
    ]
  },
  stack: ['Odoo 19', 'Python', 'QWeb', 'JavaScript', 'SCSS', 'PostgreSQL', 'API REST', 'PWA', 'Flutter', 'Docker'],
  links: [
    { label: { fr: 'Voir le site', en: 'Visit the website' }, url: 'https://christinternationalgroup.com', kind: 'site' },
    { label: { fr: 'App BrightFret sur Google Play', en: 'BrightFret app on Google Play' }, url: 'https://play.google.com/store/apps/details?id=com.brightwill.brightfret', kind: 'play' }
  ],
  media: [
    { src: 'images/projects/christ-international-group/accueil-desktop.webp', alt: { fr: 'Page d’accueil du site de Christ International Group', en: 'Christ International Group website home page' }, kind: 'desktop' },
    { src: 'images/projects/christ-international-group/christ-cargo-desktop.webp', alt: { fr: 'Page de l’entité Christ Cargo International', en: 'Christ Cargo International entity page' }, kind: 'desktop' },
    { src: 'images/projects/christ-international-group/agences-desktop.webp', alt: { fr: 'Page des agences au Cameroun, au Gabon et au Zimbabwe', en: 'Branches page: Cameroon, Gabon and Zimbabwe' }, kind: 'desktop' },
    { src: 'images/projects/christ-international-group/accueil-chinois-desktop.webp', alt: { fr: 'Version chinoise de la page d’accueil', en: 'Chinese version of the home page' }, kind: 'desktop' },
    { src: 'images/projects/christ-international-group/bo-expeditions-desktop.webp', alt: { fr: 'Back-office BrightFret : liste des envois et leurs statuts', en: 'BrightFret back office: shipments and their statuses' }, kind: 'desktop' },
    { src: 'images/projects/christ-international-group/bo-expedition-suivi-desktop.webp', alt: { fr: 'Back-office BrightFret : étapes de transit d’un envoi', en: 'BrightFret back office: transit stages of a shipment' }, kind: 'desktop' },
    { src: 'images/projects/christ-international-group/bo-manifeste-desktop.webp', alt: { fr: 'Back-office BrightFret : bordereau de groupage', en: 'BrightFret back office: consolidation manifest' }, kind: 'desktop' },
    { src: 'images/projects/christ-international-group/rapport-etiquette-desktop.webp', alt: { fr: 'Étiquette de colis avec code QR', en: 'Parcel label with QR code' }, kind: 'desktop' },
    { src: 'images/projects/christ-international-group/pwa-ops-bordereaux-mobile.webp', alt: { fr: 'PWA opérateurs : liste des bordereaux', en: 'Operator PWA: list of manifests' }, kind: 'mobile' },
    { src: 'images/projects/christ-international-group/app-brightfret-accueil.webp', alt: { fr: 'App BrightFret : suivi d’un colis par code ou scan QR', en: 'BrightFret app: track a parcel by code or QR scan' }, kind: 'mobile', width: 732, height: 1600 },
    { src: 'images/projects/christ-international-group/app-brightfret-suivi.webp', alt: { fr: 'App BrightFret : chronologie de suivi d’un colis', en: 'BrightFret app: parcel tracking timeline' }, kind: 'mobile', width: 732, height: 1600 }
  ]
};
