import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  currentLang = signal<string>('fr');

  constructor() {
    const saved = this.isBrowser ? localStorage.getItem('lang') || 'fr' : 'fr';
    this.translate.addLangs(['fr', 'en']);
    this.setLang(saved);
  }

  setLang(lang: string): void {
    this.translate.use(lang);
    this.currentLang.set(lang);
    if (this.isBrowser) {
      localStorage.setItem('lang', lang);
    }
  }

  toggle(): void {
    this.setLang(this.currentLang() === 'fr' ? 'en' : 'fr');
  }
}
