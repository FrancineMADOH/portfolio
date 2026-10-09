import { Component, computed, inject, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { EDUCATION, EXPERIENCES, HIGHLIGHTS_PER_EXPERIENCE } from '../../content/journey';
import { RoleId } from '../../content/models';
import { LanguageService } from '../../services/language.service';

/** Parcours de l'accueil : expériences en frise, puis formation. Les points mis en avant suivent la lentille. */
@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.css'
})
export class JourneyComponent {
  readonly lang = inject(LanguageService);

  readonly roleId = input.required<RoleId>();

  readonly education = EDUCATION;

  /** Pour chaque expérience : les points de la lentille d'abord (ordre d'origine conservé), puis les autres, limités à 3. */
  readonly experiences = computed(() => {
    const role = this.roleId();
    return EXPERIENCES.map(exp => ({
      ...exp,
      highlights: [
        ...exp.highlights.filter(h => h.roles.includes(role)),
        ...exp.highlights.filter(h => !h.roles.includes(role))
      ].slice(0, HIGHLIGHTS_PER_EXPERIENCE)
    }));
  });
}
