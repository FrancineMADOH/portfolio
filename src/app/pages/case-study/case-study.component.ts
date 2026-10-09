import { Component, computed, inject, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { isEmptyText } from '../../content/localize';
import { ProjectMedia } from '../../content/models';
import { findProject } from '../../content/projects';
import { LanguageService } from '../../services/language.service';
import { PhoneFrameComponent } from '../../shared/phone-frame/phone-frame.component';
import { PlayBadgeComponent } from '../../shared/play-badge/play-badge.component';

/** Dimensions par défaut des captures (script de capture, F2.1). */
const DEFAULT_SIZE = { desktop: { width: 1440, height: 900 }, mobile: { width: 780, height: 1688 } } as const;

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [TranslatePipe, PhoneFrameComponent, PlayBadgeComponent],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css'
})
export class CaseStudyComponent {
  readonly lang = inject(LanguageService);

  /** Paramètre `:slug`. Un slug inconnu n'atteint jamais ce composant (garde `canMatch`). */
  readonly slug = input.required<string>();

  readonly project = computed(() => findProject(this.slug()));

  /** Visuel principal : le premier média du projet. */
  readonly heroMedia = computed(() => this.project()?.media[0]);

  readonly isEmptyText = isEmptyText;

  size(media: ProjectMedia): { width: number; height: number } {
    const fallback = DEFAULT_SIZE[media.kind];
    return { width: media.width ?? fallback.width, height: media.height ?? fallback.height };
  }

  /** Les chemins des médias sont relatifs à `public/` : on les rend absolus pour toutes les profondeurs d'URL. */
  src(media: ProjectMedia): string {
    return `/${media.src}`;
  }
}
