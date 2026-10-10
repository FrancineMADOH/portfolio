import { L10n } from './models';

// La méthode en 9 étapes (F5.7, détaillée en F6.1). Exemples tirés de lecons-apprises.md (projet CIG),
// sans détail technique interne ni sujet écarté du site (prix, ventes et caisses, SMTP).
// Source : leçons apprises du projet CIG, section 12 « Le framework en une page ».

export interface MethodStep {
  id: string;
  title: L10n;
  deliverable: L10n;
  question: L10n;
  /** Exemple concret tiré du projet Christ International Group (F6.1). */
  example: L10n;
}

export const METHOD_STEPS: MethodStep[] = [
  {
    id: 'avant-vente',
    title: { fr: 'Avant-vente', en: 'Pre-sales' },
    deliverable: { fr: 'Diagnostic global, proposition par phases, chiffrage', en: 'Global diagnosis, phased proposal, estimate' },
    question: { fr: 'Le standard couvre-t-il le besoin ? Le hors-périmètre est-il écrit ?', en: 'Does the standard cover the need? Is the out-of-scope written down?' },
    example: { fr: 'Une demande de « nouveau site » est devenue un diagnostic sur 3 axes (web, fret, ventes et agences), découpé en 3 phases vendables. Le hors-périmètre (CRM, carte interactive, médiathèque…) est écrit dans la proposition, ce qui a évité plusieurs dérives.', en: 'A request for a “new website” became a diagnosis on 3 axes (web, freight, sales and branches), split into 3 sellable phases. Out-of-scope items (CRM, interactive map, media library…) are written into the proposal, which prevented several drifts.' }
  },
  {
    id: 'cadrage',
    title: { fr: 'Cadrage', en: 'Scoping' },
    deliverable: { fr: 'Cahier des charges tiré des canaux du client, liste des livrables attendus du client', en: 'Specification built from the client’s own channels, list of deliverables expected from the client' },
    question: { fr: 'Chaque chiffre publié est-il confirmé ?', en: 'Is every published figure confirmed?' },
    example: { fr: 'Seuls trois faits ont été publiés, tous confirmés par le client : fondé en 2019, plus de 6 000 entrepreneurs et partenaires, un départ en groupage toutes les 2 semaines. Aucun délai promis, aucun nombre d’agences écrit en dur.', en: 'Only three facts were published, all confirmed by the client: founded in 2019, more than 6,000 entrepreneurs and partners, a consolidated departure every 2 weeks. No promised lead time, no hard-coded number of branches.' }
  },
  {
    id: 'conception',
    title: { fr: 'Conception', en: 'Design' },
    deliverable: { fr: 'Diagnostic page par page, architecture, droits', en: 'Page-by-page analysis, architecture, permissions' },
    question: { fr: 'Le client peut-il vivre sans nous au quotidien ?', en: 'Can the client run day to day without us?' },
    example: { fr: 'Services, départs, agences, témoignages et FAQ sont des fiches que l’équipe gère seule. Une section sans contenu publié disparaît d’elle-même, et deux niveaux de droits séparent ceux qui écrivent le contenu de ceux qui touchent à la structure.', en: 'Services, departures, branches, testimonials and FAQ are records the team manages on its own. A section with no published content hides itself, and two permission levels separate those who write content from those who change the structure.' }
  },
  {
    id: 'plan',
    title: { fr: 'Plan', en: 'Plan' },
    deliverable: { fr: 'Fonctionnalités numérotées, dépendances, critères testables, points ouverts', en: 'Numbered features, dependencies, testable criteria, open points' },
    question: { fr: 'Que se passe-t-il si le client ne répond pas ?', en: 'What happens if the client does not answer?' },
    example: { fr: '57 fonctionnalités numérotées en 19 phases, chacune avec des critères d’acceptation testables. Chaque point ouvert indique ce qui se passe si le client ne répond pas, par exemple « bouton masqué tant que le contenu manque ».', en: '57 numbered features in 19 phases, each with testable acceptance criteria. Every open point states what happens if the client never answers, for example “button hidden until the content exists”.' }
  },
  {
    id: 'developpement',
    title: { fr: 'Développement', en: 'Development' },
    deliverable: { fr: 'Une fonctionnalité à la fois : écriture contrôlée, revue, cas de test', en: 'One feature at a time: controlled writing, review, test cases' },
    question: { fr: 'Est-ce corrigé à la source ?', en: 'Is it fixed at the source?' },
    example: { fr: 'Chaque fonctionnalité est écrite, revue et validée avant de passer à la suivante. Un bug venu d’un module partagé a été corrigé dans ce module, plutôt que contourné dans le projet du client.', en: 'Each feature is written, reviewed and signed off before moving to the next. A bug coming from a shared module was fixed in that module rather than worked around in the client’s project.' }
  },
  {
    id: 'contenu',
    title: { fr: 'Contenu', en: 'Content' },
    deliverable: { fr: 'Textes rédigés directement, faits confirmés seulement', en: 'Copy written directly, confirmed facts only' },
    question: { fr: 'Une action clé peut-elle disparaître ?', en: 'Can a key action disappear?' },
    example: { fr: 'Les textes sont rédigés et intégrés directement, le client ajuste à la lecture. Le bouton « Demander un devis » ne disparaît jamais : sans canal principal renseigné, il renvoie vers le formulaire de contact.', en: 'Copy is written and integrated directly, and the client adjusts it on reading. The “Request a quote” button never disappears: when the main channel is missing, it falls back to the contact form.' }
  },
  {
    id: 'finition',
    title: { fr: 'Finition', en: 'Polish' },
    deliverable: { fr: 'Traductions, responsive, accessibilité, SEO, performance', en: 'Translations, responsive, accessibility, SEO, performance' },
    question: { fr: 'Mesuré ou supposé ?', en: 'Measured or assumed?' },
    example: { fr: 'Traductions en français, anglais et chinois faites une seule fois, sur les textes définitifs, le chinois étant validé par un locuteur côté client. Performance mesurée et non supposée : Lighthouse 95 / 100 / 100 / 100.', en: 'French, English and Chinese translations done once, on the final copy, with the Chinese validated by a native speaker on the client side. Performance measured, not assumed: Lighthouse 95 / 100 / 100 / 100.' }
  },
  {
    id: 'remise',
    title: { fr: 'Remise', en: 'Handover' },
    deliverable: { fr: 'Manuel utilisateur, manuel administrateur, séance de prise en main, campagne de tests', en: 'User manual, administrator manual, onboarding session, test campaign' },
    question: { fr: 'Le temporaire est-il retiré ?', en: 'Has everything temporary been removed?' },
    example: { fr: 'Un manuel utilisateur court, sans jargon ni nom de plateforme, et un manuel administrateur à part. Une séance de prise en main, puis une campagne de 345 cas de test confiée à un responsable désigné.', en: 'A short user manual, with no jargon or platform name, and a separate administrator manual. An onboarding session, then a 345-case test campaign assigned to a named owner.' }
  },
  {
    id: 'production',
    title: { fr: 'Production', en: 'Go-live' },
    deliverable: { fr: 'Installation neuve, configuration serveur, réglages du client', en: 'Clean install, server configuration, client settings' },
    question: { fr: 'Les tickets de configuration sont-ils fermés ?', en: 'Are the configuration tickets closed?' },
    example: { fr: 'Installation neuve en production, sans aucune donnée de démonstration. Les réglages serveur (anti-robot, taille des envois, compression) sont suivis comme des tâches assignées : sans eux, le site n’est pas prêt.', en: 'A clean production install, with no demo data at all. Server settings (anti-bot, upload size, compression) are tracked as assigned tasks: without them, the site is not ready.' }
  }
];

/** Ce qui change d'un secteur à l'autre, et ce qui reste (F6.1). */
export const METHOD_CHANGES: L10n[] = [
  { fr: 'Les modèles de contenu (services et départs ici ; demain chambres, cours ou produits)', en: 'Content models (services and departures here; tomorrow rooms, courses or products)' },
  { fr: 'Le lexique métier', en: 'The business glossary' },
  { fr: 'Les moyens de paiement en usage localement', en: 'Locally used payment methods' },
  { fr: 'Les canaux de communication du client', en: 'The client’s communication channels' }
];

export const METHOD_CONSTANTS: L10n[] = [
  { fr: 'Le diagnostic global avant le chiffrage', en: 'A global diagnosis before any estimate' },
  { fr: 'Le standard d’abord, le sur-mesure seulement là où rien n’existe', en: 'Standard first, custom only where nothing exists' },
  { fr: 'L’autonomie du client au quotidien', en: 'Day-to-day client autonomy' },
  { fr: 'Une section vide ne s’affiche pas', en: 'An empty section is never shown' },
  { fr: 'Deux niveaux de droits', en: 'Two permission levels' },
  { fr: 'Une fonctionnalité à la fois, corrigée à la source', en: 'One feature at a time, fixed at the source' },
  { fr: 'Les traductions en fin de projet', en: 'Translations at the end of the project' },
  { fr: 'Deux manuels et une liste de mise en production', en: 'Two manuals and a go-live checklist' }
];
