import { Component, computed, inject, input } from '@angular/core';

import { DEFAULT_ROLE, findRole, ROLES } from '../../content/roles';
import { LanguageService } from '../../services/language.service';

// Squelette (F0.6). Accueil et pages de lentille, construits en phase 5.
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <main class="placeholder">
      <p class="eyebrow">{{ lang.localize(role().label) }}</p>
      <h1>{{ lang.localize(role().title) }}</h1>
      <p class="lead">{{ lang.localize(role().pitch) }}</p>
    </main>
  `,
  styleUrl: '../placeholder.css'
})
export class HomeComponent {
  readonly lang = inject(LanguageService);

  /** Paramètre `:role` de `/profil/:role`, absent sur `/`. */
  readonly roleId = input<string>('', { alias: 'role' });

  readonly role = computed(() => findRole(this.roleId()) ?? ROLES[DEFAULT_ROLE]);
}
