import { KeyFigure } from './models';

// Liens de contact publics, partagés par la barre latérale et le pied de page.
export const PROFILE_LINKS = {
  github: 'https://github.com/FrancineMADOH',
  linkedin: 'https://www.linkedin.com/in/francine-madoh/',
  email: 'mailto:francinemadoh@gmail.com'
} as const;

/**
 * Chiffres clés de l'accueil (F5.2). Faits confirmés uniquement :
 *   - expérience : CV, « plus de quatre ans » (point ouvert P7 : 4+ ou 5 ans depuis mai 2021)
 *   - projets en production : CIG (site + BrightFret), brightwill.org, NoMoreSilent, Mungoum
 *   - apps Google Play : BrightFret et Mungoum
 *   - agents IA : CV, stage Zetos, temps de traitement de 4-6 h à 2 h 30
 */
export const HOME_FIGURES: KeyFigure[] = [
  { value: '4+', label: { fr: 'années d’expérience en développement et en gestion de projet', en: 'years of experience in development and project management' } },
  { value: '4', label: { fr: 'projets en production présentés ici', en: 'projects in production shown here' } },
  { value: '2', label: { fr: 'applications publiées sur Google Play', en: 'apps published on Google Play' } },
  { value: '−50 %', label: { fr: 'de temps de traitement grâce aux agents IA conçus chez Zetos', en: 'processing time thanks to the AI agents built at Zetos' } }
];
