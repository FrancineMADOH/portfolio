import { ProjectMedia } from './models';

/** Dimensions par défaut des captures produites par le script de capture (F2.1). */
const DEFAULT_SIZE = { desktop: { width: 1440, height: 900 }, mobile: { width: 780, height: 1688 } } as const;

export function mediaSize(media: ProjectMedia): { width: number; height: number } {
  const fallback = DEFAULT_SIZE[media.kind];
  return { width: media.width ?? fallback.width, height: media.height ?? fallback.height };
}

/** Les chemins des médias sont relatifs à `public/` : on les rend absolus pour toutes les profondeurs d'URL. */
export function mediaSrc(media: ProjectMedia): string {
  return `/${media.src}`;
}
