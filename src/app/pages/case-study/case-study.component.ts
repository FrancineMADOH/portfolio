import { Component, computed, inject, input } from '@angular/core';

import { findProject } from '../../content/projects';
import { LanguageService } from '../../services/language.service';

// Squelette (F0.6). Page d'étude de cas, construite en phase 4.
@Component({
  selector: 'app-case-study',
  standalone: true,
  template: `
    @if (project(); as p) {
      <main class="placeholder">
        <p class="eyebrow">{{ lang.localize(p.client) }} · {{ lang.localize(p.status) }}</p>
        <h1>{{ lang.localize(p.title) }}</h1>
      </main>
    }
  `,
  styleUrl: '../placeholder.css'
})
export class CaseStudyComponent {
  readonly lang = inject(LanguageService);

  /** Paramètre `:slug`. Un slug inconnu n'atteint jamais ce composant (garde `canMatch`). */
  readonly slug = input.required<string>();

  readonly project = computed(() => findProject(this.slug()));
}
