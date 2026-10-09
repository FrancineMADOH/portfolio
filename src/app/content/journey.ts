import { Education, Experience } from './models';

// Parcours (F5.4). Source : CV_Dev_Francine_MADOH.md, intitulé BrightWill décidé le 2026-10-09
// (diagnostic, réponse à la question 4), formation confirmée le 2026-10-09 (point ouvert P2).

export const EXPERIENCES: Experience[] = [
  {
    organisation: 'BrightWill Technologies',
    title: { fr: 'Consultante en transformation digitale & cheffe de projet', en: 'Digital Transformation Consultant & Project Manager' },
    period: { fr: 'Janv. 2025 – aujourd’hui', en: 'Jan 2025 – present' },
    location: { fr: 'Télétravail', en: 'Remote' },
    highlights: [
      {
        text: { fr: 'Transformation digitale de Christ International Group : diagnostic, propositions, pilotage, site multilingue et solution de fret en production.', en: 'Digital transformation of Christ International Group: diagnosis, proposals, delivery management, multilingual website and freight solution in production.' },
        roles: ['consultante', 'cheffe-de-projet', 'business-analyst', 'odoo']
      },
      {
        text: { fr: 'Études de marché, positionnement et stratégie digitale de trois offres, et site bilingue qui les présente.', en: 'Market research, positioning and digital strategy for three offers, and the bilingual website presenting them.' },
        roles: ['consultante', 'business-analyst']
      },
      {
        text: { fr: 'Modules Odoo sur mesure en production chez des clients de plusieurs secteurs : fret international, paie, réservation en ligne, messagerie.', en: 'Custom Odoo modules in production for clients in several sectors: international freight, payroll, online booking, messaging.' },
        roles: ['odoo', 'developpeuse']
      },
      {
        text: { fr: 'Application mobile de suivi de fret publiée sur Google Play.', en: 'Freight tracking mobile app published on Google Play.' },
        roles: ['developpeuse', 'cheffe-de-projet']
      }
    ]
  },
  {
    organisation: 'Zetos France',
    title: { fr: 'Développeuse IA, assistante du CTO (stage)', en: 'AI Developer, assistant to the CTO (internship)' },
    period: { fr: 'Nov. 2025 – avr. 2026', en: 'Nov 2025 – Apr 2026' },
    location: { fr: 'Paris', en: 'Paris' },
    highlights: [
      {
        text: { fr: 'Trois agents IA (DIFY) intégrés à Nextcloud : analyse d’appels d’offres, estimation de charges, rédaction de mémoires techniques. Temps de traitement réduit d’environ 50 %.', en: 'Three AI agents (DIFY) integrated into Nextcloud: tender analysis, workload estimation, technical proposal writing. Processing time cut by about 50%.' },
        roles: ['developpeuse', 'consultante']
      },
      {
        text: { fr: 'Coordination du projet AOCA, plateforme de cardiologie : maquettes fonctionnelles et parcours utilisateurs.', en: 'Coordination of the AOCA cardiology platform project: functional mock-ups and user journeys.' },
        roles: ['cheffe-de-projet', 'business-analyst']
      },
      {
        text: { fr: 'Pratique avancée du prompt engineering, du context engineering et de Claude Code en mode agentique.', en: 'Advanced practice of prompt engineering, context engineering and agentic Claude Code.' },
        roles: ['developpeuse']
      }
    ]
  },
  {
    organisation: 'Omamori Cameroun',
    title: { fr: 'Développeuse fullstack', en: 'Full-stack Developer' },
    period: { fr: 'Févr. 2024 – févr. 2025', en: 'Feb 2024 – Feb 2025' },
    location: { fr: 'Cameroun', en: 'Cameroon' },
    highlights: [
      {
        text: { fr: 'Module de paie camerounaise sur Odoo (lois de finances, code général des impôts), livré en production.', en: 'Cameroonian payroll module on Odoo (finance laws, general tax code), delivered to production.' },
        roles: ['odoo', 'developpeuse', 'business-analyst']
      },
      {
        text: { fr: 'Formation et accompagnement des utilisateurs à la prise en main de l’ERP chez un client.', en: 'User training and support for ERP adoption at a client.' },
        roles: ['consultante', 'cheffe-de-projet', 'odoo']
      },
      {
        text: { fr: 'Déploiement d’Odoo Website pour 6 sites vitrines clients.', en: 'Odoo Website deployment for 6 client showcase sites.' },
        roles: ['odoo', 'cheffe-de-projet']
      },
      {
        text: { fr: 'Application Angular, déploiement des API et des instances Odoo en test et en production avec NGINX.', en: 'Angular application, deployment of APIs and Odoo instances to test and production with NGINX.' },
        roles: ['developpeuse']
      }
    ]
  },
  {
    organisation: 'Y-note SA',
    title: { fr: 'Développeuse fullstack', en: 'Full-stack Developer' },
    period: { fr: 'Mai 2021 – févr. 2023', en: 'May 2021 – Feb 2023' },
    location: { fr: 'Cameroun', en: 'Cameroon' },
    highlights: [
      {
        text: { fr: 'Adaptation d’un module Odoo de santé pour une plateforme de téléconsultation, en conformité avec la réglementation médicale camerounaise.', en: 'Adaptation of an Odoo healthcare module for a teleconsultation platform, in line with Cameroonian medical regulations.' },
        roles: ['odoo', 'business-analyst', 'developpeuse']
      },
      {
        text: { fr: 'Plateforme de prise de rendez-vous médicaux en Flutter web, mise en production.', en: 'Medical appointment booking platform in Flutter web, put into production.' },
        roles: ['developpeuse']
      },
      {
        text: { fr: 'Module de retour des patients dans un système de gestion d’assurance santé (OpenIMIS).', en: 'Patient feedback module in a health insurance management system (OpenIMIS).' },
        roles: ['business-analyst', 'developpeuse']
      },
      {
        text: { fr: 'Déploiements sur serveurs et rédaction de la documentation utilisateur.', en: 'Server deployments and user documentation writing.' },
        roles: ['cheffe-de-projet']
      }
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    title: { fr: 'Mastère spécialisé Manager de projet numérique & stratégie digitale (RNCP niveau 7)', en: 'Specialised Master’s in Digital Project Management & Digital Strategy (RNCP level 7)' },
    school: 'ILMIS Business School',
    year: '2026'
  },
  {
    title: { fr: 'Nanodegree Full Stack JavaScript Developer', en: 'Full Stack JavaScript Developer Nanodegree' },
    school: 'Udacity',
    year: '2023'
  },
  {
    title: { fr: 'Nanodegree Front End Web Developer', en: 'Front End Web Developer Nanodegree' },
    school: 'Udacity',
    year: '2019'
  },
  {
    title: { fr: 'Master Mathématiques appliquées aux sciences sociales', en: 'Master’s in Applied Mathematics for Social Sciences' },
    school: 'Université de Yaoundé II',
    year: '2018'
  }
];

/** Nombre de points affichés par expérience, ceux de la lentille active en premier. */
export const HIGHLIGHTS_PER_EXPERIENCE = 3;
