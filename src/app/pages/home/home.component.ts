import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { AI_USAGES } from '../../content/ai';
import { METHOD_STEPS } from '../../content/method';
import { HOME_FIGURES } from '../../content/profile';
import { PROJECTS } from '../../content/projects';
import { DEFAULT_ROLE, findRole, ROLES } from '../../content/roles';
import { LanguageService } from '../../services/language.service';
import { RoleService } from '../../services/role.service';
import { JourneyComponent } from './journey.component';
import { ProjectCardComponent } from './project-card.component';
import { SkillsComponent } from './skills.component';

/** Les deux facettes du profil, toujours présentes ; la lentille Développeuse met « Je construis » en premier. */
const FACETS = [
  { id: 'design', titleKey: 'home.facet_design_title', textKey: 'home.facet_design_text' },
  { id: 'build', titleKey: 'home.facet_build_title', textKey: 'home.facet_build_text' }
] as const;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslatePipe, ProjectCardComponent, JourneyComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly lang = inject(LanguageService);
  readonly roleService = inject(RoleService);

  /** Paramètre `:role` de `/profil/:role`, absent sur `/`. */
  readonly roleId = input<string>('', { alias: 'role' });

  readonly role = computed(() => findRole(this.roleId()) ?? ROLES[DEFAULT_ROLE]);

  readonly figures = HOME_FIGURES;
  readonly aiUsages = AI_USAGES;
  readonly methodSteps = METHOD_STEPS;

  /** Études de cas dans l'ordre de la lentille. */
  readonly projects = computed(() => this.role().projectOrder.map(slug => PROJECTS[slug]));

  readonly facets = computed(() => (this.role().id === 'developpeuse' ? [...FACETS].reverse() : FACETS));

  constructor() {
    effect(() => this.roleService.setActive(this.role().id));
  }
}
