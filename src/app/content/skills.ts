import { L10n } from './models';

// Compétences de l'accueil (F5.5). Source : CV_Dev_Francine_MADOH.md et les études de cas.

export interface SkillGroup {
  title: L10n;
  items: L10n[];
}

export interface SkillBlock {
  id: 'conseil' | 'developpement';
  title: L10n;
  groups: SkillGroup[];
}

/** Même texte en français et en anglais (noms de technologies). */
const same = (text: string): L10n => ({ fr: text, en: text });

export const SKILL_BLOCKS: SkillBlock[] = [
  {
    id: 'conseil',
    title: { fr: 'Conseil et gestion de projet', en: 'Consulting and project management' },
    groups: [
      {
        title: { fr: 'Conseil', en: 'Consulting' },
        items: [
          { fr: 'Diagnostic de transformation digitale', en: 'Digital transformation diagnosis' },
          { fr: 'Arbitrage standard / sur-mesure', en: 'Standard vs custom trade-offs' },
          { fr: 'Propositions technico-financières', en: 'Technical and financial proposals' },
          { fr: 'Études de marché et de concurrence', en: 'Market and competitor studies' }
        ]
      },
      {
        title: { fr: 'Analyse fonctionnelle', en: 'Business analysis' },
        items: [
          { fr: 'Recueil du besoin', en: 'Requirements gathering' },
          { fr: 'Cahier des charges', en: 'Functional specifications' },
          { fr: 'Critères d’acceptation testables', en: 'Testable acceptance criteria' },
          { fr: 'Règles métier et droits', en: 'Business rules and permissions' }
        ]
      },
      {
        title: { fr: 'Pilotage', en: 'Delivery' },
        items: [
          { fr: 'Planification par phases', en: 'Phased planning' },
          { fr: 'Suivi des points ouverts et des décisions', en: 'Open points and decision tracking' },
          { fr: 'Recette', en: 'Acceptance testing' },
          { fr: 'Formation et documentation utilisateur', en: 'User training and documentation' }
        ]
      },
      {
        title: { fr: 'Outils', en: 'Tools' },
        items: [same('Notion'), same('JIRA'), same('GitHub')]
      }
    ]
  },
  {
    id: 'developpement',
    title: { fr: 'Développement', en: 'Development' },
    groups: [
      {
        title: { fr: 'Front-end', en: 'Front end' },
        items: [same('Angular'), same('TypeScript'), same('RxJS'), same('Tailwind CSS'), { fr: 'i18n et pré-rendu SSR', en: 'i18n and SSR pre-rendering' }]
      },
      {
        title: { fr: 'Back-end', en: 'Back end' },
        items: [same('Node.js'), same('Express'), same('Fastify'), same('API REST'), same('JWT'), same('Zod'), same('Jest')]
      },
      {
        title: { fr: 'Odoo', en: 'Odoo' },
        items: [same('Python'), { fr: 'Odoo 17 et 19', en: 'Odoo 17 and 19' }, same('ORM'), same('XML'), same('QWeb'), same('OWL'), { fr: 'Rapports PDF', en: 'PDF reports' }]
      },
      {
        title: { fr: 'Mobile', en: 'Mobile' },
        items: [same('Flutter'), same('Dart'), same('Riverpod'), same('go_router')]
      },
      {
        title: { fr: 'Données et déploiement', en: 'Data and deployment' },
        items: [same('PostgreSQL'), same('MySQL'), same('Redis'), same('Docker'), same('NGINX'), same('GitHub Actions')]
      }
    ]
  }
];
