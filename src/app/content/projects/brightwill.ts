import { EMPTY_TEXT } from '../localize';
import { CaseStudy } from '../models';

// Squelette (F0.5). Contenu rédigé en F3.2.
export const BRIGHTWILL: CaseStudy = {
  slug: 'brightwill',
  title: {
    fr: 'BrightWill : concevoir une offre et la mettre sur le marché',
    en: 'BrightWill: designing an offer and taking it to market'
  },
  client: { fr: 'BrightWill Technologies', en: 'BrightWill Technologies' },
  period: { fr: '2026', en: '2026' },
  status: { fr: 'En ligne', en: 'Live' },
  summary: EMPTY_TEXT,
  keyFigures: [],
  context: EMPTY_TEXT,
  diagnosis: [],
  solution: [],
  deliverables: [],
  results: [],
  roles: {},
  stack: ['Odoo 19', 'Python', 'QWeb', 'SCSS'],
  links: [
    { label: { fr: 'Voir le site', en: 'Visit the website' }, url: 'https://brightwill.org', kind: 'site' }
  ],
  media: []
};
