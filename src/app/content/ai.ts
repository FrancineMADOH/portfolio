import { L10n } from './models';

// L'IA comme levier (F5.6) : uniquement des usages prouvés, chacun relié à sa preuve sur le site.
// Sources : CV et décision de Francine du 2026-10-09 (Zetos : analyse d’un appel d’offres de 4-6 h à 2 h), pbccg/lecons-apprises.md (Whisper, skills, CLAUDE.md), étude de cas NoMoreSilent.

export interface AiUsage {
  id: string;
  title: L10n;
  text: L10n;
  /** Lien interne vers la preuve : route et ancre éventuelle. */
  proof: { label: L10n; route: string; fragment?: string };
}

export const AI_USAGES: AiUsage[] = [
  {
    id: 'agents',
    title: { fr: 'Des agents IA en production', en: 'AI agents in production' },
    text: {
      fr: 'Trois agents DIFY intégrés à Nextcloud chez Zetos : analyse d’appels d’offres, estimation de charges, rédaction de mémoires techniques. L’analyse d’un appel d’offres passe de 4-6 h à 2 h.',
      en: 'Three DIFY agents integrated into Nextcloud at Zetos: tender analysis, workload estimation, technical proposal writing. Analysing a tender drops from 4-6 hours to 2 hours.'
    },
    proof: { label: { fr: 'Voir le parcours', en: 'See my experience' }, route: '', fragment: 'parcours' }
  },
  {
    id: 'requirements',
    title: { fr: 'Un recueil du besoin accéléré', en: 'Faster requirements gathering' },
    text: {
      fr: 'Je m’adapte autant que possible à la façon dont le client communique : ses échanges sont transcrits et synthétisés avec l’IA, puis structurés page par page en spécifications validables.',
      en: 'I adapt as much as possible to the way the client communicates: their messages are transcribed and summarised with AI, then structured page by page into specifications that can be signed off.'
    },
    proof: { label: { fr: 'Voir l’étude de cas CIG', en: 'See the CIG case study' }, route: '/projets/christ-international-group' }
  },
  {
    id: 'tooling',
    title: { fr: 'Un développement outillé et contrôlé', en: 'Tooled and controlled development' },
    text: {
      fr: 'Claude Code avec des skills pour les gestes répétitifs : écriture de code avec contrôle qualité, revue de code, tickets, messages de commit. Un fichier de contexte par projet et des décisions datées : la session suivante repart sans rien redécouvrir.',
      en: 'Claude Code with skills for repetitive tasks: code writing with quality checks, code review, tickets, commit messages. A context file per project and dated decisions: the next session starts without rediscovering anything.'
    },
    proof: { label: { fr: 'Voir la méthode', en: 'See the method' }, route: '/methode' }
  },
  {
    id: 'products',
    title: { fr: 'L’IA dans les produits', en: 'AI inside the products' },
    text: {
      fr: 'Dans NoMoreSilent, un assistant conversationnel empathique en streaming, avec une couche d’abstraction sur 4 fournisseurs d’IA, interchangeables par simple configuration.',
      en: 'In NoMoreSilent, an empathetic streaming conversational assistant with an abstraction layer over 4 AI providers, switchable through configuration alone.'
    },
    proof: { label: { fr: 'Voir l’étude de cas NoMoreSilent', en: 'See the NoMoreSilent case study' }, route: '/projets/nomoresilent' }
  }
];
