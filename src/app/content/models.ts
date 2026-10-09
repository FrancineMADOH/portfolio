// Modèle de contenu du portfolio (plan de refonte, section 2.3).
// Tout texte affiché est un L10n : le compilateur refuse un texte sans sa version française ET anglaise.

export type Lang = 'fr' | 'en';

export type L10n = Record<Lang, string>;

export type RoleId = 'consultante' | 'cheffe-de-projet' | 'business-analyst' | 'odoo' | 'developpeuse';

export type ProjectSlug = 'christ-international-group' | 'brightwill' | 'nomoresilent' | 'mungoum';

export interface Role {
  id: RoleId;
  /** Intitulé complet, affiché dans la barre latérale quand la lentille est active. */
  title: L10n;
  /** Libellé court du sélecteur de rôle. */
  label: L10n;
  /** Accroche de l'introduction de l'accueil pour cette lentille. */
  pitch: L10n;
  /** Ordre d'affichage des études de cas pour cette lentille. */
  projectOrder: ProjectSlug[];
}

export interface KeyFigure {
  value: string;
  label: L10n;
}

export interface Deliverable {
  label: L10n;
  type: 'doc' | 'app' | 'module' | 'site';
}

export interface ProjectLink {
  label: L10n;
  url: string;
  kind: 'site' | 'play' | 'github';
}

export interface ProjectMedia {
  /** Chemin depuis `public/`, ex. `images/projects/brightwill/accueil-desktop.webp`. */
  src: string;
  alt: L10n;
  kind: 'desktop' | 'mobile';
  /** Dimensions réelles en pixels. Par défaut : 1440 × 900 (bureau), 780 × 1688 (mobile). */
  width?: number;
  height?: number;
}

export interface CaseStudy {
  slug: ProjectSlug;
  title: L10n;
  client: L10n;
  period: L10n;
  status: L10n;
  summary: L10n;
  keyFigures: KeyFigure[];
  context: L10n;
  diagnosis: L10n[];
  solution: L10n[];
  deliverables: Deliverable[];
  results: L10n[];
  /** « Mon rôle » selon la lentille. Un rôle absent n'a pas d'onglet sur la page. */
  roles: Partial<Record<RoleId, L10n[]>>;
  stack: string[];
  links: ProjectLink[];
  media: ProjectMedia[];
}

export interface ExperienceHighlight {
  text: L10n;
  /** Lentilles pour lesquelles ce point est mis en avant. */
  roles: RoleId[];
}

export interface Experience {
  organisation: string;
  title: L10n;
  period: L10n;
  location: L10n;
  highlights: ExperienceHighlight[];
}

export interface Education {
  title: L10n;
  school: string;
  year: string;
}
