import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal<string>('fr');

  constructor(private translate: TranslateService) {
    const saved = localStorage.getItem('lang') || 'fr';
    this.translate.addLangs(['fr', 'en']);
    this.setLang(saved);
  }

  setLang(lang: string): void {
    this.translate.use(lang);
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
  }

  toggle(): void {
    this.setLang(this.currentLang() === 'fr' ? 'en' : 'fr');
  }
}
