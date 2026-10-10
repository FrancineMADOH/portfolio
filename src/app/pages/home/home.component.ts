import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { AI_USAGES } from '../../content/ai';
import { METHOD_STEPS } from '../../content/method';
import { AVAILABILITY, CV_FILES, HOME_FIGURES, PROFILE_LINKS } from '../../content/profile';
import { PROJECTS } from '../../content/projects';
import { DEFAULT_ROLE, findRole, ROLES } from '../../content/roles';
import { LanguageService } from '../../services/language.service';
import { RoleService } from '../../services/role.service';
import { SITE_URL, SeoService } from '../../services/seo.service';
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
  readonly links = PROFILE_LINKS;
  readonly availability = AVAILABILITY;
  readonly cvFiles = CV_FILES;

  /** Études de cas dans l'ordre de la lentille. */
  readonly projects = computed(() => this.role().projectOrder.map(slug => PROJECTS[slug]));

  readonly facets = computed(() => (this.role().id === 'developpeuse' ? [...FACETS].reverse() : FACETS));

  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => this.roleService.setActive(this.role().id));

    // Titre, description et aperçu de partage propres à chaque lentille ; /profil/consultante renvoie vers /.
    effect(() => {
      const role = this.role();
      const lang = this.lang.currentLang();
      const path = this.roleId() ? `/profil/${role.id}` : '/';
      this.seo.update({
        title: `Francine MADOH · ${role.title[lang]}`,
        description: role.pitch[lang],
        path,
        canonicalPath: role.id === DEFAULT_ROLE ? '/' : path,
        lang,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Francine MADOH',
          jobTitle: role.title[lang],
          url: SITE_URL,
          image: `${SITE_URL}/images/profile.webp`,
          sameAs: [PROFILE_LINKS.linkedin, PROFILE_LINKS.github],
          knowsAbout: ['Transformation digitale', 'Gestion de projet', 'Analyse fonctionnelle', 'Odoo', 'Angular', 'Node.js', 'Python'],
          address: { '@type': 'PostalAddress', addressCountry: 'FR' }
        }
      });
    });
  }
}
