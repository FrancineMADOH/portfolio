import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable, from, of } from 'rxjs';

import fr from '../../i18n/fr.json';

/**
 * Charge les traductions sans requête HTTP, pour que le pré-rendu SSR fonctionne.
 * Le français (langue par défaut) est inclus dans le bundle et disponible immédiatement :
 * pas de clé visible au pré-rendu ni à l'hydratation. L'anglais est chargé à la demande.
 */
export class StaticTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    if (lang === 'en') {
      return from(import('../../i18n/en.json').then(m => m.default as TranslationObject));
    }
    return of(fr as TranslationObject);
  }
}
