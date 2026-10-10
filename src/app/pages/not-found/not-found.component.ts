import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  template: `
    <main class="placeholder">
      <p class="eyebrow">404</p>
      <h1>{{ 'not_found.title' | translate }}</h1>
      <p class="lead">{{ 'not_found.text' | translate }}</p>
      <a class="btn btn--primary" routerLink="/">{{ 'not_found.back' | translate }}</a>
    </main>
  `,
  styleUrl: '../placeholder.css'
})
export class NotFoundComponent {
  private readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => {
      const lang = this.lang.currentLang();
      this.seo.update({
        title: lang === 'fr' ? 'Page introuvable · Francine MADOH' : 'Page not found · Francine MADOH',
        description: lang === 'fr' ? 'Cette page n’existe pas ou a été déplacée.' : 'This page does not exist or has been moved.',
        path: '/',
        lang,
        noindex: true
      });
    });
  }
}
