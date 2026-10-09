import { EMPTY_TEXT } from '../localize';
import { CaseStudy } from '../models';

// Squelette (F0.5). Contenu rédigé en F3.4.
export const MUNGOUM: CaseStudy = {
  slug: 'mungoum',
  title: {
    fr: 'Mungoum : le calendrier Nguemba dans la poche',
    en: 'Mungoum: the Nguemba calendar in your pocket'
  },
  client: { fr: 'Projet personnel', en: 'Personal project' },
  period: EMPTY_TEXT,
  status: { fr: 'Publiée sur Google Play', en: 'Published on Google Play' },
  summary: EMPTY_TEXT,
  keyFigures: [],
  context: EMPTY_TEXT,
  diagnosis: [],
  solution: [],
  deliverables: [],
  results: [],
  roles: {},
  stack: ['Flutter', 'Dart', 'AdMob', 'go_router', 'intl'],
  links: [
    { label: { fr: 'Mungoum sur Google Play', en: 'Mungoum on Google Play' }, url: 'https://play.google.com/store/apps/details?id=com.brightwill.mungoum', kind: 'play' },
    { label: { fr: 'Code sur GitHub', en: 'Code on GitHub' }, url: 'https://github.com/FrancineMADOH/mungoum', kind: 'github' }
  ],
  media: []
};
