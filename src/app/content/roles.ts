import { Role, RoleId } from './models';

// Les 5 lentilles du portfolio. Accroches provisoires, revues en F5.1.
export const ROLES: Record<RoleId, Role> = {
  'consultante': {
    id: 'consultante',
    title: { fr: 'Consultante en transformation digitale', en: 'Digital Transformation Consultant' },
    label: { fr: 'Consultante transformation digitale', en: 'Digital transformation consultant' },
    pitch: {
      fr: 'Du diagnostic au déploiement : je conçois, je pilote et je construis la transformation digitale des organisations.',
      en: 'From diagnosis to deployment: I design, lead and build the digital transformation of organisations.'
    },
    projectOrder: ['christ-international-group', 'brightwill', 'nomoresilent', 'mungoum']
  },
  'cheffe-de-projet': {
    id: 'cheffe-de-projet',
    title: { fr: 'Cheffe de projet digital', en: 'Digital Project Manager' },
    label: { fr: 'Cheffe de projet', en: 'Project manager' },
    pitch: {
      fr: 'Je cadre, je planifie et je livre : des phases claires, des critères d’acceptation testables et des équipes client autonomes.',
      en: 'I scope, plan and deliver: clear phases, testable acceptance criteria and self-sufficient client teams.'
    },
    projectOrder: ['christ-international-group', 'brightwill', 'mungoum', 'nomoresilent']
  },
  'business-analyst': {
    id: 'business-analyst',
    title: { fr: 'Analyste fonctionnelle / Business analyst', en: 'Functional Analyst / Business Analyst' },
    label: { fr: 'Analyste fonctionnelle / BA', en: 'Functional / business analyst' },
    pitch: {
      fr: 'Je transforme des besoins exprimés en notes vocales et en e-mails en spécifications claires, testables et priorisées.',
      en: 'I turn needs expressed in voice notes and e-mails into clear, testable and prioritised specifications.'
    },
    projectOrder: ['christ-international-group', 'brightwill', 'nomoresilent', 'mungoum']
  },
  'odoo': {
    id: 'odoo',
    title: { fr: 'Consultante Odoo', en: 'Odoo Consultant' },
    label: { fr: 'Consultante Odoo', en: 'Odoo consultant' },
    pitch: {
      fr: 'Le standard d’abord, le sur-mesure seulement là où rien n’existe : je configure, j’intègre et je développe sur Odoo 17 et 19.',
      en: 'Standard first, custom only where nothing exists: I configure, integrate and develop on Odoo 17 and 19.'
    },
    projectOrder: ['christ-international-group', 'brightwill', 'nomoresilent', 'mungoum']
  },
  'developpeuse': {
    id: 'developpeuse',
    title: { fr: 'Développeuse Angular · Node.js · Python/Odoo', en: 'Angular · Node.js · Python/Odoo Developer' },
    label: { fr: 'Développeuse', en: 'Developer' },
    pitch: {
      fr: 'Je construis des applications complètes en production, de l’API à l’interface, avec l’IA comme levier d’accélération.',
      en: 'I build complete applications in production, from API to interface, using AI to move faster.'
    },
    projectOrder: ['nomoresilent', 'christ-international-group', 'mungoum', 'brightwill']
  }
};

export const DEFAULT_ROLE: RoleId = 'consultante';

export const ROLE_IDS = Object.keys(ROLES) as RoleId[];

export function findRole(id: string): Role | undefined {
  return (ROLE_IDS as string[]).includes(id) ? ROLES[id as RoleId] : undefined;
}
