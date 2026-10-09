import { Pipe, PipeTransform } from '@angular/core';

import { L10n, Lang } from './models';

/** Texte pas encore rédigé (squelette). Une section dont tout le texte est vide n'est pas rendue. */
export const EMPTY_TEXT: L10n = { fr: '', en: '' };

export function localize(text: L10n, lang: Lang): string {
  return text[lang];
}

export function isEmptyText(text: L10n): boolean {
  return !text.fr.trim() && !text.en.trim();
}

/**
 * Usage : `{{ project.title | localize: lang.currentLang() }}`.
 * Pipe pur : il se recalcule quand le signal de langue change, car la langue est passée en argument.
 */
@Pipe({ name: 'localize', standalone: true })
export class LocalizePipe implements PipeTransform {
  transform(text: L10n, lang: Lang): string {
    return localize(text, lang);
  }
}
