import { Component, ElementRef, computed, effect, inject, input, signal, untracked, viewChildren } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { CaseStudy, RoleId } from '../../content/models';
import { ROLE_IDS, ROLES } from '../../content/roles';
import { LanguageService } from '../../services/language.service';
import { RoleService } from '../../services/role.service';

/**
 * Bloc « Mon rôle » d'une étude de cas : un onglet par rôle renseigné pour ce projet.
 * L'onglet ouvert par défaut est la lentille active (dernière page de profil visitée), sinon le premier disponible.
 */
@Component({
  selector: 'app-case-roles',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './case-roles.component.html',
  styleUrl: './case-roles.component.css'
})
export class CaseRolesComponent {
  readonly lang = inject(LanguageService);
  private readonly roleService = inject(RoleService);

  readonly project = input.required<CaseStudy>();

  /** Rôles qui ont un texte pour ce projet, dans l'ordre des lentilles. */
  readonly roles = computed(() => ROLE_IDS.filter(id => this.project().roles[id]?.length).map(id => ROLES[id]));

  /** Onglet choisi par le visiteur sur cette page ; null tant qu'il n'a rien choisi. */
  private readonly chosen = signal<RoleId | null>(null);

  readonly selectedId = computed<RoleId | undefined>(() => {
    const available = this.roles().map(r => r.id);
    const chosen = this.chosen();
    if (chosen && available.includes(chosen)) {
      return chosen;
    }
    const active = this.roleService.activeRole().id;
    return available.includes(active) ? active : available[0];
  });

  readonly items = computed(() => {
    const id = this.selectedId();
    return id ? this.project().roles[id] ?? [] : [];
  });

  private readonly tabs = viewChildren<ElementRef<HTMLButtonElement>>('tab');

  constructor() {
    // Changement de projet (même composant réutilisé par le routeur) : on revient à la lentille active.
    effect(() => {
      this.project();
      untracked(() => this.chosen.set(null));
    });
  }

  select(id: RoleId): void {
    this.chosen.set(id);
  }

  /** Clavier des onglets (modèle ARIA) : flèches gauche / droite, Début, Fin. */
  onKeydown(event: KeyboardEvent, index: number): void {
    const count = this.roles().length;
    const next = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: count - 1 }[event.key];
    if (next === undefined) {
      return;
    }
    event.preventDefault();
    const target = (next + count) % count;
    this.select(this.roles()[target].id);
    this.tabs()[target]?.nativeElement.focus();
  }
}
