import { Component, computed, inject, input } from '@angular/core';

import { RoleId } from '../../content/models';
import { SKILL_BLOCKS } from '../../content/skills';
import { LanguageService } from '../../services/language.service';

/** Compétences : deux blocs, celui de la lentille active en premier (Développement pour la lentille Développeuse). */
@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly lang = inject(LanguageService);

  readonly roleId = input.required<RoleId>();

  readonly blocks = computed(() => (this.roleId() === 'developpeuse' ? [...SKILL_BLOCKS].reverse() : SKILL_BLOCKS));
}
