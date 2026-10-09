import { CaseStudy } from '../models';

// Étude de cas rédigée en F3.2 (2026-10-09). Faits confirmés uniquement, recentrée sur le produit.
// Sources (dossier /home/madoh/Desktop/siteweb) :
//   - CLAUDE.md : 3 offres (ERP géré, BrightFret, sur-mesure), site bilingue EN / FR, 8 phases, 6 modèles back-office,
//     aucun appel réseau externe, page de politique de confidentialité de l'app, marque blanche
//   - 05-plan-dev-bw_website.md : 34 fonctionnalités avec critères d'acceptation
//   - 06-etude-marche/01 et 02 : études de marché ERP / sur-mesure et BrightFret, concurrents (Tracelo,
//     transitaires traditionnels, agents cargo actifs sur les réseaux sociaux), limites (recherche web, sans entretien terrain)
//   - 06-etude-marche/03 et 04 : stratégie digitale par produit (cibles, piliers de contenu, entonnoir, indicateurs)
//   - 10-briefs-videos-app/ : 23 vidéos tutoriels de l'app BrightFret
// Non publié (décision de Francine, 2026-10-09) : prix et grilles tarifaires, catalogue interne,
// recrutement de la créatrice de contenu, gestion de l'entreprise.

export const BRIGHTWILL: CaseStudy = {
  slug: 'brightwill',
  title: {
    fr: 'BrightWill : concevoir une offre et la mettre sur le marché',
    en: 'BrightWill: designing an offer and taking it to market'
  },
  client: { fr: 'BrightWill Technologies', en: 'BrightWill Technologies' },
  period: { fr: 'Mi-2026', en: 'Mid-2026' },
  status: { fr: 'En ligne', en: 'Live' },
  summary: {
    fr: 'Trois offres numériques pour les PME et les transitaires d’Afrique : études de marché, positionnement, stratégie digitale et site bilingue qui les présente à parts égales.',
    en: 'Three digital offers for African SMEs and freight forwarders: market research, positioning, digital strategy and a bilingual website presenting them on an equal footing.'
  },
  keyFigures: [
    { value: '3', label: { fr: 'offres positionnées', en: 'offers positioned' } },
    { value: '2', label: { fr: 'études de marché et de concurrence', en: 'market and competitor studies' } },
    { value: '34', label: { fr: 'fonctionnalités livrées sur le site', en: 'website features delivered' } },
    { value: '2', label: { fr: 'langues : anglais et français', en: 'languages: English and French' } }
  ],
  context: {
    fr: 'BrightWill Technologies propose trois offres : un ERP géré pour les PME (point de vente, ventes, facturation, stocks, site e-commerce), BrightFret pour les transitaires (suivi des expéditions et application mobile client), et le développement de sites et d’applications sur mesure. Il fallait comprendre chaque marché, positionner chaque offre et les présenter sur un site unique, sans qu’aucune n’écrase les autres.',
    en: 'BrightWill Technologies offers three services: a managed ERP for SMEs (point of sale, sales, invoicing, inventory, e-commerce), BrightFret for freight forwarders (shipment tracking and a customer mobile app), and custom website and app development. The task was to understand each market, position each offer and present them on a single website without any one overshadowing the others.'
  },
  diagnosis: [
    {
      fr: 'Étude de marché BrightFret centrée sur le corridor Chine ↔ Cameroun : un flux d’importations massif, la Chine étant le premier fournisseur du pays, et des délais portuaires imprévisibles qui rendent le suivi des colis précieux.',
      en: 'BrightFret market study focused on the China ↔ Cameroon corridor: a massive import flow, China being the country’s first supplier, and unpredictable port delays that make parcel tracking valuable.'
    },
    {
      fr: 'Cartographie de la concurrence en trois familles : transitaires traditionnels sans outil de suivi, plateformes de suivi en marque blanche comme Tracelo (sans app mobile ni gestion des réclamations et des manifestes), et agents cargo très actifs sur TikTok et Facebook.',
      en: 'Competitive landscape mapped into three families: traditional forwarders with no tracking tool, white-label tracking platforms such as Tracelo (no mobile app, no claims or manifest management), and cargo agents very active on TikTok and Facebook.'
    },
    {
      fr: 'Conclusion de positionnement : la concurrence la plus visible n’est pas un logiciel mais un numéro WhatsApp. Le message de BrightFret devient « suivez votre colis vous-même, en temps réel ».',
      en: 'Positioning conclusion: the most visible competitor is not software but a WhatsApp number. BrightFret’s message becomes “track your parcel yourself, in real time”.'
    },
    {
      fr: 'Étude séparée pour l’ERP géré et le sur-mesure, avec une segmentation commune et des hypothèses à valider écrites noir sur blanc : recherche documentaire, sans entretien terrain à ce stade.',
      en: 'A separate study for the managed ERP and custom development, with a shared segmentation and hypotheses to validate written down explicitly: desk research, with no field interviews at this stage.'
    }
  ],
  solution: [
    {
      fr: 'Stratégie digitale par produit : cibles, piliers de contenu, rôle de chaque réseau (TikTok en priorité, Facebook, LinkedIn), entonnoir de conversion et indicateurs de succès.',
      en: 'Digital strategy per product: target audiences, content pillars, the role of each network (TikTok first, then Facebook and LinkedIn), conversion funnel and success indicators.'
    },
    {
      fr: 'Règles de marque claires : nommer le corridor dans le contenu éditorial, rester générique dans l’identité du produit, aucune mention de la plateforme sous-jacente côté visiteur.',
      en: 'Clear brand rules: name the corridor in editorial content, stay generic in the product identity, no mention of the underlying platform on the visitor side.'
    },
    {
      fr: 'Site bilingue anglais et français sur Odoo 19 : une page par offre, références, témoignages, équipe, portfolio et FAQ gérés en back-office, sections masquées tant qu’elles sont vides.',
      en: 'Bilingual English and French website on Odoo 19: one page per offer, client references, testimonials, team, portfolio and FAQ managed in the back office, sections hidden while empty.'
    },
    {
      fr: 'Mise en marché de l’app BrightFret : politique de confidentialité publiée pour Google Play, calendrier éditorial et série de 23 tutoriels vidéo scénarisés, une tâche par vidéo.',
      en: 'BrightFret app go-to-market: privacy policy published for Google Play, editorial calendar and a series of 23 scripted video tutorials, one task per video.'
    }
  ],
  deliverables: [
    { label: { fr: 'Étude de marché et de concurrence BrightFret', en: 'BrightFret market and competitor study' }, type: 'doc' },
    { label: { fr: 'Étude de marché ERP géré et développement sur mesure', en: 'Managed ERP and custom development market study' }, type: 'doc' },
    { label: { fr: 'Stratégies digitales par produit et charte graphique', en: 'Digital strategies per product and brand guidelines' }, type: 'doc' },
    { label: { fr: 'Plan de développement : 34 fonctionnalités en 8 phases', en: 'Development plan: 34 features in 8 phases' }, type: 'doc' },
    { label: { fr: 'Scénarios de 23 tutoriels vidéo de l’app', en: 'Scripts for 23 app video tutorials' }, type: 'doc' },
    { label: { fr: 'Site bilingue brightwill.org', en: 'Bilingual brightwill.org website' }, type: 'site' },
    { label: { fr: 'Module Odoo du site avec 6 modèles gérés en back-office', en: 'Odoo website module with 6 back-office models' }, type: 'module' }
  ],
  results: [
    {
      fr: 'Site en ligne en anglais et en français, présentant les 3 offres à parts égales.',
      en: 'Website live in English and French, presenting the 3 offers on an equal footing.'
    },
    {
      fr: 'Un positionnement BrightFret étayé par la concurrence réelle du terrain, repris dans tous les messages.',
      en: 'A BrightFret positioning grounded in real competition on the ground, carried through every message.'
    },
    {
      fr: 'Références, témoignages et FAQ modifiables sans redéploiement ; aucun appel réseau externe depuis le site.',
      en: 'References, testimonials and FAQ editable without redeployment; no external network calls from the website.'
    }
  ],
  roles: {
    'consultante': [
      {
        fr: 'Positionnement de 3 offres distinctes sur des marchés différents, sans qu’aucune n’écrase les autres.',
        en: 'Positioning 3 distinct offers in different markets, without any one overshadowing the others.'
      },
      {
        fr: 'Stratégie digitale par produit, avec des règles de marque explicites.',
        en: 'Digital strategy per product, with explicit brand rules.'
      }
    ],
    'business-analyst': [
      {
        fr: 'Deux études de marché et de concurrence, avec leurs sources et leurs limites écrites.',
        en: 'Two market and competitor studies, with their sources and limits written down.'
      },
      {
        fr: 'Identification d’une concurrence absente des recherches classiques : les agents cargo des réseaux sociaux.',
        en: 'Identification of competition missing from standard research: cargo agents on social media.'
      },
      {
        fr: 'Vérification des messages marketing contre le comportement réel du produit, pour ne rien promettre de faux.',
        en: 'Marketing messages checked against the product’s actual behaviour, so nothing false is promised.'
      }
    ],
    'cheffe-de-projet': [
      {
        fr: 'Plan en 8 phases et 34 fonctionnalités, de la maquette à la mise en ligne.',
        en: 'Plan in 8 phases and 34 features, from mock-up to launch.'
      },
      {
        fr: 'Plan de lancement de l’app : calendrier éditorial et 23 tutoriels vidéo, un scénario par tâche.',
        en: 'App launch plan: editorial calendar and 23 video tutorials, one script per task.'
      }
    ],
    'odoo': [
      {
        fr: 'Site construit comme module Odoo 19 en marque blanche, sans aucune mention de la plateforme côté visiteur.',
        en: 'Website built as a white-label Odoo 19 module, with no mention of the platform on the visitor side.'
      },
      {
        fr: 'Formulaire de contact natif réutilisé et restylé, plutôt qu’un développement spécifique.',
        en: 'Native contact form reused and restyled rather than custom-built.'
      }
    ],
    'developpeuse': [
      {
        fr: 'Module de site Odoo 19 : 6 modèles back-office, contrôleurs, composants QWeb partagés, traductions EN / FR.',
        en: 'Odoo 19 website module: 6 back-office models, controllers, shared QWeb components, EN / FR translations.'
      },
      {
        fr: 'Polices et icônes auto-hébergées, aucun appel réseau externe, SEO et performance travaillés.',
        en: 'Self-hosted fonts and icons, no external network calls, SEO and performance tuned.'
      }
    ]
  },
  stack: ['Odoo 19', 'Python', 'QWeb', 'SCSS', 'JavaScript', 'PostgreSQL'],
  links: [
    { label: { fr: 'Voir le site', en: 'Visit the website' }, url: 'https://brightwill.org', kind: 'site' },
    { label: { fr: 'App BrightFret sur Google Play', en: 'BrightFret app on Google Play' }, url: 'https://play.google.com/store/apps/details?id=com.brightwill.brightfret', kind: 'play' }
  ],
  media: [
    { src: 'images/projects/brightwill/accueil-desktop.webp', alt: { fr: 'Page d’accueil de brightwill.org présentant les 3 offres', en: 'brightwill.org home page presenting the 3 offers' }, kind: 'desktop' },
    { src: 'images/projects/brightwill/fret-desktop.webp', alt: { fr: 'Page BrightFret de brightwill.org', en: 'BrightFret page on brightwill.org' }, kind: 'desktop' },
    { src: 'images/projects/brightwill/erp-desktop.webp', alt: { fr: 'Page de l’offre ERP géré', en: 'Managed ERP offer page' }, kind: 'desktop' },
    { src: 'images/projects/brightwill/accueil-mobile.webp', alt: { fr: 'Page d’accueil de brightwill.org sur mobile', en: 'brightwill.org home page on mobile' }, kind: 'mobile' },
    { src: 'images/projects/brightwill/fret-mobile.webp', alt: { fr: 'Page BrightFret sur mobile', en: 'BrightFret page on mobile' }, kind: 'mobile' }
  ]
};
