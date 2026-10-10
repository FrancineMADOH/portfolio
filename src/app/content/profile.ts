import { KeyFigure, L10n } from './models';

// Liens de contact publics, partagés par la barre latérale et le pied de page.
export const PROFILE_LINKS = {
  github: 'https://github.com/FrancineMADOH',
  linkedin: 'https://www.linkedin.com/in/francine-madoh/'
} as const;

/** CV téléchargeable dans la langue du site (fichiers fournis par Francine le 2026-10-10). */
export const CV_FILES: L10n = {
  fr: '/CV_CDP_Francine_MADOH.pdf',
  en: '/CV_Francine_MADOH.pdf'
};
// Pas d'adresse e-mail sur le site : on passe par LinkedIn (décision de Francine, 2026-10-09).

/**
 * Chiffres clés de l'accueil (F5.2). Faits confirmés uniquement :
 *   - expérience : CV, « plus de quatre ans » (point ouvert P7 : 4+ ou 5 ans depuis mai 2021)
 *   - projets en production : CIG (site + BrightFret), brightwill.org, NoMoreSilent, Mungoum
 *   - apps Google Play : BrightFret et Mungoum
 *   - agents IA : stage Zetos, analyse d’un appel d’offres de 4-6 h à 2 h (précisé par Francine le 2026-10-09)
 */
export const HOME_FIGURES: KeyFigure[] = [
  { value: '4+', label: { fr: 'années d’expérience en développement et en gestion de projet', en: 'years of experience in development and project management' } },
  { value: '4', label: { fr: 'projets en production présentés ici', en: 'projects in production shown here' } },
  { value: '2', label: { fr: 'applications publiées sur Google Play', en: 'apps published on Google Play' } },
  { value: '2 h', label: { fr: 'pour analyser un appel d’offres au lieu de 4 à 6 h, grâce aux agents IA conçus chez Zetos', en: 'to analyse a tender instead of 4 to 6 hours, thanks to the AI agents built at Zetos' } }
];

/** Disponibilité (F7.2), affichée dans la barre latérale et la section Contact. Texte validé par Francine le 2026-10-10. */
export const AVAILABILITY: L10n = {
  fr: 'Disponible immédiatement · CDI · Mobile dans toute la France',
  en: 'Available immediately · Permanent role · Open to roles anywhere in France'
};
