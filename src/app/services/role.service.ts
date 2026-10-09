import { Injectable, computed, signal } from '@angular/core';

import { RoleId } from '../content/models';
import { DEFAULT_ROLE, ROLES } from '../content/roles';

/**
 * Lentille active. Fixée par les pages `/` et `/profil/:role`, conservée ensuite
 * pendant la visite (études de cas, méthode) pour adapter le bloc « Mon rôle ».
 */
@Injectable({ providedIn: 'root' })
export class RoleService {
  private readonly activeId = signal<RoleId>(DEFAULT_ROLE);

  readonly activeRole = computed(() => ROLES[this.activeId()]);

  /** Page d'accueil de la lentille active : `/` pour la lentille par défaut. */
  readonly homePath = computed(() => this.pathFor(this.activeId()));

  pathFor(id: RoleId): string {
    return id === DEFAULT_ROLE ? '/' : `/profil/${id}`;
  }

  setActive(id: RoleId): void {
    this.activeId.set(id);
  }
}
