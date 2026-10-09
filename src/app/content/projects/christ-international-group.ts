import { EMPTY_TEXT } from '../localize';
import { CaseStudy } from '../models';

// Squelette (F0.5). Contenu rédigé en F3.1.
export const CHRIST_INTERNATIONAL_GROUP: CaseStudy = {
  slug: 'christ-international-group',
  title: {
    fr: 'Transformation digitale de Christ International Group',
    en: 'Digital transformation of Christ International Group'
  },
  client: { fr: 'Christ International Group', en: 'Christ International Group' },
  period: { fr: '2026', en: '2026' },
  status: { fr: 'En production', en: 'In production' },
  summary: EMPTY_TEXT,
  keyFigures: [],
  context: EMPTY_TEXT,
  diagnosis: [],
  solution: [],
  deliverables: [],
  results: [],
  roles: {},
  stack: ['Odoo 19', 'Python', 'QWeb', 'JavaScript', 'SCSS', 'PostgreSQL', 'Flutter'],
  links: [
    { label: { fr: 'Voir le site', en: 'Visit the website' }, url: 'https://christinternationalgroup.com', kind: 'site' },
    { label: { fr: 'App BrightFret sur Google Play', en: 'BrightFret app on Google Play' }, url: 'https://play.google.com/store/apps/details?id=com.brightwill.brightfret', kind: 'play' }
  ],
  media: []
};
