import { EMPTY_TEXT } from '../localize';
import { CaseStudy } from '../models';

// Squelette (F0.5). Contenu rédigé en F3.3.
export const NOMORESILENT: CaseStudy = {
  slug: 'nomoresilent',
  title: {
    fr: 'NoMoreSilent : signaler les violences domestiques en toute sécurité',
    en: 'NoMoreSilent: reporting domestic violence safely'
  },
  client: { fr: 'Projet personnel', en: 'Personal project' },
  period: { fr: '2025 – aujourd’hui', en: '2025 – present' },
  status: { fr: 'En ligne', en: 'Live' },
  summary: EMPTY_TEXT,
  keyFigures: [],
  context: EMPTY_TEXT,
  diagnosis: [],
  solution: [],
  deliverables: [],
  results: [],
  roles: {},
  stack: ['TypeScript', 'Express', 'Angular', 'PostgreSQL', 'Anthropic SDK', 'Gemini', 'Groq', 'Ollama', 'Docker'],
  links: [
    { label: { fr: 'Voir le site', en: 'Visit the website' }, url: 'https://nomoresilent.brightwill.org/', kind: 'site' },
    { label: { fr: 'Code sur GitHub', en: 'Code on GitHub' }, url: 'https://github.com/FrancineMADOH/nomoresilent', kind: 'github' }
  ],
  media: []
};
