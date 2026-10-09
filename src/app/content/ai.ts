import { L10n } from './models';

// L'IA comme levier (F5.6) : uniquement des usages prouvés, chacun relié à sa preuve sur le site.
// Sources : CV (Zetos, −50 %), pbccg/lecons-apprises.md (Whisper, skills, CLAUDE.md), étude de cas NoMoreSilent.

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
      fr: 'Trois agents DIFY intégrés à Nextcloud chez Zetos : analyse d’appels d’offres, estimation de charges, rédaction de mémoires techniques. Le temps de traitement passe de 4-6 h à environ 2 h 30.',
      en: 'Three DIFY agents integrated into Nextcloud at Zetos: tender analysis, workload estimation, technical proposal writing. Processing time drops from 4-6 hours to about 2.5 hours.'
    },
    proof: { label: { fr: 'Voir le parcours', en: 'See my experience' }, route: '', fragment: 'parcours' }
  },
  {
    id: 'requirements',
    title: { fr: 'Un recueil du besoin accéléré', en: 'Faster requirements gathering' },
    text: {
      fr: 'Le client envoie des notes vocales WhatsApp plutôt qu’un cahier des charges : elles sont transcrites avec Whisper, puis structurées page par page en spécifications validables.',
      en: 'The client sends WhatsApp voice notes instead of a specification: they are transcribed with Whisper, then structured page by page into specifications that can be signed off.'
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
