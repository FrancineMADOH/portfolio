import { L10n } from './models';

// La méthode en 9 étapes (F5.7, détaillée en F6.1).
// Source : /home/madoh/Desktop/devprojects/pbccg/lecons-apprises.md, section 12 « Le framework en une page ».

export interface MethodStep {
  id: string;
  title: L10n;
  deliverable: L10n;
  question: L10n;
}

export const METHOD_STEPS: MethodStep[] = [
  {
    id: 'avant-vente',
    title: { fr: 'Avant-vente', en: 'Pre-sales' },
    deliverable: { fr: 'Diagnostic global, proposition par phases, chiffrage', en: 'Global diagnosis, phased proposal, estimate' },
    question: { fr: 'Le standard couvre-t-il le besoin ? Le hors-périmètre est-il écrit ?', en: 'Does the standard cover the need? Is the out-of-scope written down?' }
  },
  {
    id: 'cadrage',
    title: { fr: 'Cadrage', en: 'Scoping' },
    deliverable: { fr: 'Cahier des charges tiré des canaux du client, liste des livrables attendus du client', en: 'Specification built from the client’s own channels, list of deliverables expected from the client' },
    question: { fr: 'Chaque chiffre publié est-il confirmé ?', en: 'Is every published figure confirmed?' }
  },
  {
    id: 'conception',
    title: { fr: 'Conception', en: 'Design' },
    deliverable: { fr: 'Diagnostic page par page, architecture, droits', en: 'Page-by-page analysis, architecture, permissions' },
    question: { fr: 'Le client peut-il vivre sans nous au quotidien ?', en: 'Can the client run day to day without us?' }
  },
  {
    id: 'plan',
    title: { fr: 'Plan', en: 'Plan' },
    deliverable: { fr: 'Fonctionnalités numérotées, dépendances, critères testables, points ouverts', en: 'Numbered features, dependencies, testable criteria, open points' },
    question: { fr: 'Que se passe-t-il si le client ne répond pas ?', en: 'What happens if the client does not answer?' }
  },
  {
    id: 'developpement',
    title: { fr: 'Développement', en: 'Development' },
    deliverable: { fr: 'Une fonctionnalité à la fois : écriture contrôlée, revue, cas de test', en: 'One feature at a time: controlled writing, review, test cases' },
    question: { fr: 'Est-ce corrigé à la source ?', en: 'Is it fixed at the source?' }
  },
  {
    id: 'contenu',
    title: { fr: 'Contenu', en: 'Content' },
    deliverable: { fr: 'Textes rédigés directement, faits confirmés seulement', en: 'Copy written directly, confirmed facts only' },
    question: { fr: 'Une action clé peut-elle disparaître ?', en: 'Can a key action disappear?' }
  },
  {
    id: 'finition',
    title: { fr: 'Finition', en: 'Polish' },
    deliverable: { fr: 'Traductions, responsive, accessibilité, SEO, performance', en: 'Translations, responsive, accessibility, SEO, performance' },
    question: { fr: 'Mesuré ou supposé ?', en: 'Measured or assumed?' }
  },
  {
    id: 'remise',
    title: { fr: 'Remise', en: 'Handover' },
    deliverable: { fr: 'Manuel utilisateur, manuel administrateur, séance de prise en main, campagne de tests', en: 'User manual, administrator manual, onboarding session, test campaign' },
    question: { fr: 'Le temporaire est-il retiré ?', en: 'Has everything temporary been removed?' }
  },
  {
    id: 'production',
    title: { fr: 'Production', en: 'Go-live' },
    deliverable: { fr: 'Installation neuve, configuration serveur, réglages du client', en: 'Clean install, server configuration, client settings' },
    question: { fr: 'Les tickets de configuration sont-ils fermés ?', en: 'Are the configuration tickets closed?' }
  }
];
