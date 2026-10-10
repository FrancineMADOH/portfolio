import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

import { AVAILABILITY, PROFILE_LINKS } from '../../content/profile';
import { ROLE_IDS, ROLES } from '../../content/roles';
import { LanguageService } from '../../services/language.service';
import { RoleService } from '../../services/role.service';

/** Sections de l'accueil suivies par la navigation (ids des sections, construites en phase 5). */
const TRACKED_SECTIONS = ['projets', 'parcours', 'competences', 'contact'] as const;

/** En dessous de cette largeur, la barre latérale devient un tiroir (valeur reprise dans le CSS). */
const DESKTOP_QUERY = '(min-width: 1024px)';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

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
  private readonly document = inject(DOCUMENT);

  private readonly menuButton = viewChild.required<ElementRef<HTMLButtonElement>>('menuButton');
  private readonly drawer = viewChild.required<ElementRef<HTMLElement>>('drawer');

  readonly roles = ROLE_IDS.map(id => ROLES[id]);

  readonly links = PROFILE_LINKS;
  readonly availability = AVAILABILITY;

  /** Section de l'accueil actuellement visible, pour l'état actif de la navigation. */
  readonly activeSection = signal<string | null>(null);

  /** Tiroir ouvert (mobile uniquement). */
  readonly menuOpen = signal(false);

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
      // Passage en largeur bureau avec le tiroir ouvert : on le ferme.
      const desktop = window.matchMedia(DESKTOP_QUERY);
      const onDesktop = (e: MediaQueryListEvent) => e.matches && this.closeMenu(false);
      desktop.addEventListener('change', onDesktop);
      this.destroyRef.onDestroy(() => {
        sub.unsubscribe();
        this.observer?.disconnect();
        window.removeEventListener('scroll', onScroll);
        desktop.removeEventListener('change', onDesktop);
        this.lockScroll(false);
      });
    });
  }

  openMenu(): void {
    this.menuOpen.set(true);
    this.lockScroll(true);
    // Le tiroir devient visible au prochain rendu : on y place le focus ensuite.
    setTimeout(() => this.focusables()[0]?.focus());
  }

  /** @param restoreFocus rend le focus au bouton menu (pas lors d'un passage en largeur bureau). */
  closeMenu(restoreFocus = true): void {
    if (!this.menuOpen()) {
      return;
    }
    this.menuOpen.set(false);
    this.lockScroll(false);
    if (restoreFocus) {
      this.menuButton().nativeElement.focus();
    }
  }

  /** Un lien choisi dans le tiroir le ferme, sans voler le focus à la page de destination. */
  onDrawerClick(event: MouseEvent): void {
    if (this.menuOpen() && (event.target as HTMLElement).closest('a')) {
      this.closeMenu(false);
    }
  }

  /** Échap ferme le tiroir ; Tab et Maj+Tab restent piégés à l'intérieur tant qu'il est ouvert. */
  onDrawerKeydown(event: KeyboardEvent): void {
    if (!this.menuOpen()) {
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeMenu();
      return;
    }
    if (event.key !== 'Tab') {
      return;
    }
    const items = this.focusables();
    const first = items[0];
    const last = items[items.length - 1];
    const current = this.document.activeElement;
    if (event.shiftKey && current === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && current === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private focusables(): HTMLElement[] {
    return Array.from(this.drawer().nativeElement.querySelectorAll<HTMLElement>(FOCUSABLE));
  }

  private lockScroll(locked: boolean): void {
    this.document.body.style.overflow = locked ? 'hidden' : '';
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
