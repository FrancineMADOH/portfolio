import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

import { ROLE_IDS, ROLES } from '../../content/roles';
import { LanguageService } from '../../services/language.service';
import { RoleService } from '../../services/role.service';

/** Sections de l'accueil suivies par la navigation (ids des sections, construites en phase 5). */
const TRACKED_SECTIONS = ['projets', 'parcours', 'competences', 'contact'] as const;

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  readonly lang = inject(LanguageService);
  readonly roleService = inject(RoleService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly roles = ROLE_IDS.map(id => ROLES[id]);

  readonly links = {
    github: 'https://github.com/FrancineMADOH',
    linkedin: 'https://www.linkedin.com/in/francine-madoh/',
    email: 'mailto:francinemadoh@gmail.com'
  };

  /** Section de l'accueil actuellement visible, pour l'état actif de la navigation. */
  readonly activeSection = signal<string | null>(null);

  private observer?: IntersectionObserver;

  constructor() {
    // Navigateur uniquement : IntersectionObserver n'existe pas au pré-rendu.
    afterNextRender(() => {
      this.observeSections();
      const sub = this.router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe(() => setTimeout(() => this.observeSections()));
      const onScroll = () => this.activateLastSectionAtBottom();
      window.addEventListener('scroll', onScroll, { passive: true });
      this.destroyRef.onDestroy(() => {
        sub.unsubscribe();
        this.observer?.disconnect();
        window.removeEventListener('scroll', onScroll);
      });
    });
  }

  private observeSections(): void {
    this.observer?.disconnect();
    this.activeSection.set(null);
    // Une section est active quand elle traverse la bande située au tiers supérieur de l'écran.
    this.observer = new IntersectionObserver(
      entries => entries
        .filter(e => e.isIntersecting)
        .forEach(e => this.activeSection.set(e.target.id)),
      { rootMargin: '-30% 0px -65% 0px' }
    );
    TRACKED_SECTIONS
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
      .forEach(el => this.observer!.observe(el));
  }

  /** La dernière section, souvent courte, n'atteint jamais la bande d'observation : on l'active en bas de page. */
  private activateLastSectionAtBottom(): void {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    const last = [...TRACKED_SECTIONS].reverse().find(id => document.getElementById(id));
    if (atBottom && last) {
      this.activeSection.set(last);
    }
  }
}
