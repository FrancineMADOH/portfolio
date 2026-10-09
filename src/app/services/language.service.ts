import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { localize } from '../content/localize';
import { L10n, Lang } from '../content/models';

export const DEFAULT_LANG: Lang = 'fr';
const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  currentLang = signal<Lang>(DEFAULT_LANG);

  constructor() {
    this.translate.addLangs(['fr', 'en']);
    this.apply(DEFAULT_LANG);

    // La page pré-rendue est en français : la langue mémorisée n'est appliquée
    // qu'après l'hydratation, pour que le DOM du serveur et celui du client concordent.
    afterNextRender(() => {
      const saved = this.readSaved();
      if (saved !== DEFAULT_LANG) {
        this.apply(saved);
      }
    });
  }

  setLang(lang: Lang): void {
    this.apply(lang);
    if (this.isBrowser) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Stockage indisponible (navigation privée, données bloquées) : le choix n'est pas mémorisé.
      }
    }
  }

  /** Texte dans la langue active. Lit le signal : réactif dans un template ou un `computed`. */
  localize(text: L10n): string {
    return localize(text, this.currentLang());
  }

  toggle(): void {
    this.setLang(this.currentLang() === 'fr' ? 'en' : 'fr');
  }

  private apply(lang: Lang): void {
    this.translate.use(lang);
    this.currentLang.set(lang);
    this.document.documentElement.lang = lang;
  }

  private readSaved(): Lang {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'fr';
    } catch {
      return DEFAULT_LANG;
    }
  }
}
