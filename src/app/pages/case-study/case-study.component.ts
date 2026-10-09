import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { isEmptyText } from '../../content/localize';
import { mediaSize, mediaSrc } from '../../content/media';
import { CaseStudy, Deliverable } from '../../content/models';
import { PROJECTS, findProject } from '../../content/projects';
import { LanguageService } from '../../services/language.service';
import { RoleService } from '../../services/role.service';
import { PhoneFrameComponent } from '../../shared/phone-frame/phone-frame.component';
import { PlayBadgeComponent } from '../../shared/play-badge/play-badge.component';
import { CaseGalleryComponent } from './case-gallery.component';
import { CaseRolesComponent } from './case-roles.component';

/** Sections du corps de l'étude de cas, dans l'ordre d'affichage. */
type SectionId = 'role' | 'contexte' | 'diagnostic' | 'solution' | 'livrables' | 'resultats' | 'captures' | 'stack';

const SECTIONS: { id: SectionId; labelKey: string; hasContent: (p: CaseStudy) => boolean }[] = [
  { id: 'role', labelKey: 'case_study.my_role', hasContent: p => Object.values(p.roles).some(items => items?.length) },
  { id: 'contexte', labelKey: 'case_study.context', hasContent: p => !isEmptyText(p.context) },
  { id: 'diagnostic', labelKey: 'case_study.diagnosis', hasContent: p => p.diagnosis.length > 0 },
  { id: 'solution', labelKey: 'case_study.solution', hasContent: p => p.solution.length > 0 },
  { id: 'livrables', labelKey: 'case_study.deliverables', hasContent: p => p.deliverables.length > 0 },
  { id: 'resultats', labelKey: 'case_study.results', hasContent: p => p.results.length > 0 },
  { id: 'captures', labelKey: 'case_study.gallery', hasContent: p => p.media.length > 1 },
  { id: 'stack', labelKey: 'case_study.stack', hasContent: p => p.stack.length > 0 }
];

const DELIVERABLE_LABEL: Record<Deliverable['type'], string> = {
  doc: 'case_study.type_doc',
  app: 'case_study.type_app',
  module: 'case_study.type_module',
  site: 'case_study.type_site'
};

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [RouterLink, TranslatePipe, PhoneFrameComponent, PlayBadgeComponent, CaseGalleryComponent, CaseRolesComponent],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css'
})
export class CaseStudyComponent {
  readonly lang = inject(LanguageService);
  readonly roleService = inject(RoleService);

  /** Paramètre `:slug`. Un slug inconnu n'atteint jamais ce composant (garde `canMatch`). */
  readonly slug = input.required<string>();

  readonly project = computed(() => findProject(this.slug()));

  /** Visuel principal : le premier média du projet. Les suivants forment la galerie. */
  readonly heroMedia = computed(() => this.project()?.media[0]);
  readonly galleryMedia = computed(() => this.project()?.media.slice(1) ?? []);

  /** Sections qui ont du contenu : une section vide n'est ni affichée ni listée au sommaire. */
  readonly sections = computed(() => {
    const p = this.project();
    return p ? SECTIONS.filter(s => s.hasContent(p)) : [];
  });

  /** Projets voisins, dans l'ordre de la lentille active (le même que sur l'accueil). */
  readonly neighbours = computed(() => {
    const order = this.roleService.activeRole().projectOrder;
    const index = order.indexOf(this.slug() as (typeof order)[number]);
    return {
      previous: index > 0 ? PROJECTS[order[index - 1]] : undefined,
      next: index >= 0 && index < order.length - 1 ? PROJECTS[order[index + 1]] : undefined
    };
  });

  readonly isEmptyText = isEmptyText;
  readonly src = mediaSrc;
  readonly size = mediaSize;
  readonly deliverableLabel = DELIVERABLE_LABEL;

  has(id: SectionId): boolean {
    return this.sections().some(s => s.id === id);
  }
}
