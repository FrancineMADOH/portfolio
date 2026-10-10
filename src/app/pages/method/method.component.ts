import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { METHOD_CHANGES, METHOD_CONSTANTS, METHOD_STEPS } from '../../content/method';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';

/** Page méthode (F6.1) : les 9 étapes avec livrable, question de contrôle et exemple tiré de CIG. */
@Component({
  selector: 'app-method',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './method.component.html',
  styleUrl: './method.component.css'
})
export class MethodComponent {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly steps = METHOD_STEPS;
  readonly changes = METHOD_CHANGES;
  readonly constants = METHOD_CONSTANTS;

  constructor() {
    effect(() => {
      const lang = this.lang.currentLang();
      this.seo.update({
        title: lang === 'fr' ? 'Ma méthode en 9 étapes · Francine MADOH' : 'My 9-step method · Francine MADOH',
        description: lang === 'fr'
          ? 'Un cadre réutilisable de transformation digitale, de l’avant-vente à la mise en production, illustré par le projet Christ International Group.'
          : 'A reusable digital transformation framework, from pre-sales to go-live, illustrated by the Christ International Group project.',
        path: '/methode',
        lang
      });
    });
  }
}
