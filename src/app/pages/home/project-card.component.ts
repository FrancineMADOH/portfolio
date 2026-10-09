import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { mediaSize, mediaSrc } from '../../content/media';
import { CaseStudy, RoleId } from '../../content/models';
import { LanguageService } from '../../services/language.service';

/** Carte d'étude de cas de l'accueil, pleine largeur (visuel et texte côte à côte dès 1024 px). Toute la carte mène à l'étude de cas. */
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  readonly lang = inject(LanguageService);

  readonly project = input.required<CaseStudy>();
  readonly roleId = input.required<RoleId>();

  readonly media = computed(() => this.project().media[0]);

  /** Première ligne « Mon rôle » pour la lentille active : c'est ce qui fait varier la carte d'une lentille à l'autre. */
  readonly roleHighlight = computed(() => this.project().roles[this.roleId()]?.[0]);

  readonly badges = computed(() => this.project().stack.slice(0, 3));

  readonly src = mediaSrc;
  readonly size = mediaSize;
}
