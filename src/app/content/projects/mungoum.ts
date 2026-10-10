import { CaseStudy } from '../models';

// Étude de cas rédigée en F3.4 (2026-10-09). Faits confirmés uniquement.
// Sources (dépôt du projet Mungoum) :
//   - CLAUDE.md : calendrier nguemba à 8 jours du village de Bamougoum (Ouest Cameroun), 100 % hors ligne,
//     algorithme ancré sur le PDF officiel, FR / EN, AdMob avec consentement RGPD, thèmes clair et sombre, phases 2 et 3
//   - DIAGNOSTIC.md / DEVPLAN.md : décisions produit, fonctionnalités F0 à F10 avec critères d'acceptation
//   - idea.txt : origine (module Odoo transformé en app Flutter), vision en 3 phases
//   - git log : premier commit 2026-05-12, préparation de la publication 2026-09-24 ; 27 tests dans mungoum/test
//   - Fiche Google Play : « Mungoum : Calendrier Nguemba », publiée

export const MUNGOUM: CaseStudy = {
  slug: 'mungoum',
  title: {
    fr: 'Mungoum : le calendrier Nguemba dans la poche',
    en: 'Mungoum: the Nguemba calendar in your pocket'
  },
  client: { fr: 'Projet personnel', en: 'Personal project' },
  period: { fr: '2026', en: '2026' },
  status: { fr: 'Publiée sur Google Play', en: 'Published on Google Play' },
  summary: {
    fr: 'Une application mobile qui fait vivre le calendrier traditionnel nguemba de Bamougoum, dans l’Ouest du Cameroun : le jour du cycle de 8 jours, les jours de marché, en français et en anglais, sans connexion.',
    en: 'A mobile app that brings the traditional Nguemba calendar of Bamougoum, West Cameroon, to life: the day of the 8-day cycle, market days, in French and English, offline.'
  },
  keyFigures: [
    { value: '8', label: { fr: 'jours dans le cycle nguemba', en: 'days in the Nguemba cycle' } },
    { value: '100 %', label: { fr: 'hors ligne : ni serveur, ni compte', en: 'offline: no server, no account' } },
    { value: '2', label: { fr: 'langues : français et anglais', en: 'languages: French and English' } },
    { value: '27', label: { fr: 'tests automatisés', en: 'automated tests' } }
  ],
  context: {
    fr: 'À Bamougoum, village de la Région de l’Ouest du Cameroun, la vie suit un calendrier traditionnel de 8 jours qui rythme notamment les jours de grand et de petit marché. Il existe en version imprimée en langue nguemba, mais pas sur téléphone. La logique existait déjà dans un module Odoo : l’objectif était de la mettre dans la poche de la communauté, au village comme dans la diaspora.',
    en: 'In Bamougoum, a village in Cameroon’s West Region, life follows a traditional 8-day calendar that sets, among other things, the big and small market days. It exists in print in the Nguemba language, but not on phones. The logic already existed in an Odoo module: the goal was to put it in the pocket of the community, in the village and in the diaspora.'
  },
  diagnosis: [
    {
      fr: 'Cadrage produit avant le code : public cible, langues, monétisation et périmètre décidés et écrits dans un diagnostic, avec une règle simple : l’app doit rester la plus légère possible.',
      en: 'Product scoping before code: target audience, languages, monetisation and scope decided and written in a diagnosis, with one simple rule: the app must stay as light as possible.'
    },
    {
      fr: 'Fiabilité de la donnée d’abord : la date d’ancrage du cycle est vérifiée sur le calendrier officiel 2025 en langue nguemba, pour que chaque date calculée soit juste, y compris avant 2025.',
      en: 'Data reliability first: the cycle’s anchor date is checked against the official 2025 calendar in the Nguemba language, so every computed date is right, including before 2025.'
    },
    {
      fr: 'Vision en 3 phases, la première seulement développée : l’application calendrier, puis un dictionnaire nguemba avec des linguistes, puis une plateforme d’apprentissage de la langue pour les enfants de la diaspora.',
      en: 'A 3-phase vision, with only the first one built: the calendar app, then a Nguemba dictionary with linguists, then a language-learning platform for diaspora children.'
    }
  ],
  solution: [
    {
      fr: 'Écran « Aujourd’hui » avec le jour nguemba et le badge de marché, calendrier mensuel, détail de chaque jour et présentation des 8 jours du cycle.',
      en: '“Today” screen with the Nguemba day and market badge, monthly calendar, detail of each day and an overview of the 8 days of the cycle.'
    },
    {
      fr: 'Application 100 % hors ligne : la logique du calendrier est embarquée, sans serveur ni base de données.',
      en: 'A 100% offline app: the calendar logic is embedded, with no server and no database.'
    },
    {
      fr: 'Identité visuelle inspirée du tissu ndop (indigo et or), thèmes clair et sombre, localisation complète en français et en anglais.',
      en: 'Visual identity inspired by ndop cloth (indigo and gold), light and dark themes, full French and English localisation.'
    },
    {
      fr: 'Monétisation par bannières publicitaires avec recueil du consentement RGPD, et lien de soutien au projet.',
      en: 'Monetisation through banner ads with GDPR consent collection, and a link to support the project.'
    }
  ],
  deliverables: [
    { label: { fr: 'Diagnostic produit et plan de développement en 11 étapes', en: 'Product diagnosis and development plan in 11 steps' }, type: 'doc' },
    { label: { fr: 'Charte graphique inspirée du ndop', en: 'Brand guidelines inspired by ndop' }, type: 'doc' },
    { label: { fr: 'Application Flutter publiée sur Google Play', en: 'Flutter app published on Google Play' }, type: 'app' },
    { label: { fr: 'Fiche Google Play bilingue et politique de confidentialité', en: 'Bilingual Google Play listing and privacy policy' }, type: 'doc' }
  ],
  results: [
    {
      fr: 'Application publiée sur Google Play.',
      en: 'App published on Google Play.'
    },
    {
      fr: 'Un calendrier traditionnel accessible hors ligne, au village comme dans la diaspora.',
      en: 'A traditional calendar available offline, in the village and in the diaspora.'
    },
    {
      fr: 'Une base prête pour les phases suivantes : dictionnaire et apprentissage de la langue.',
      en: 'A foundation ready for the next phases: dictionary and language learning.'
    }
  ],
  roles: {
    'developpeuse': [
      {
        fr: 'Application Flutter : navigation go_router, localisation FR / EN, thèmes clair et sombre, bannières AdMob avec consentement RGPD.',
        en: 'Flutter app: go_router navigation, FR / EN localisation, light and dark themes, AdMob banners with GDPR consent.'
      },
      {
        fr: 'Algorithme du cycle de 8 jours porté depuis Python, fiable pour toute date et tout fuseau horaire, couvert par 27 tests.',
        en: '8-day cycle algorithm ported from Python, reliable for any date and time zone, covered by 27 tests.'
      },
      {
        fr: 'Préparation de la publication : bundle Android signé, fiche bilingue, visuels et politique de confidentialité.',
        en: 'Release preparation: signed Android bundle, bilingual listing, visuals and privacy policy.'
      }
    ],
    'cheffe-de-projet': [
      {
        fr: 'Vision découpée en 3 phases livrables, la première menée de bout en bout jusqu’à la publication.',
        en: 'Vision split into 3 deliverable phases, the first one carried end to end through to publication.'
      },
      {
        fr: 'Plan en 11 étapes avec critères d’acceptation, du modèle de données à la fiche Google Play.',
        en: '11-step plan with acceptance criteria, from data model to Google Play listing.'
      }
    ],
    'consultante': [
      {
        fr: 'Un actif existant (un module Odoo) transformé en produit grand public, avec un modèle de revenus simple.',
        en: 'An existing asset (an Odoo module) turned into a consumer product, with a simple revenue model.'
      }
    ]
  },
  stack: ['Flutter', 'Dart', 'go_router', 'intl', 'AdMob', 'Python (logique d’origine)'],
  links: [
    { label: { fr: 'Mungoum sur Google Play', en: 'Mungoum on Google Play' }, url: 'https://play.google.com/store/apps/details?id=com.brightwill.mungoum', kind: 'play' },
    { label: { fr: 'Code sur GitHub', en: 'Code on GitHub' }, url: 'https://github.com/FrancineMADOH/mungoum', kind: 'github' }
  ],
  media: [
    { src: 'images/projects/mungoum/app-aujourdhui.webp', alt: { fr: 'Mungoum : le jour nguemba du jour', en: 'Mungoum: today’s Nguemba day' }, kind: 'mobile', width: 800, height: 1600 },
    { src: 'images/projects/mungoum/app-calendrier.webp', alt: { fr: 'Mungoum : calendrier du mois avec les jours nguemba', en: 'Mungoum: monthly calendar with Nguemba days' }, kind: 'mobile', width: 800, height: 1600 },
    { src: 'images/projects/mungoum/app-8-jours.webp', alt: { fr: 'Mungoum : les 8 jours du cycle et les jours de marché', en: 'Mungoum: the 8 days of the cycle and market days' }, kind: 'mobile', width: 800, height: 1600 },
    { src: 'images/projects/mungoum/app-a-propos.webp', alt: { fr: 'Mungoum : à propos de l’application', en: 'Mungoum: about the app' }, kind: 'mobile', width: 800, height: 1600 }
  ]
};
