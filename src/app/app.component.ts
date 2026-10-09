import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

/** Largeur à partir de laquelle la barre latérale remplace l'en-tête mobile (valeur reprise dans le CSS). */
const DESKTOP_MIN_WIDTH = 1024;

/** Espace laissé au-dessus d'une section atteinte par une ancre : en-tête mobile fixe (≈ 70 px) + marge. */
const ANCHOR_OFFSET = { mobile: 88, desktop: 32 };

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    // Le défilement vers une ancre est fait par le routeur, qui ignore scroll-margin-top : on lui donne le décalage.
    inject(ViewportScroller).setOffset(() =>
      [0, typeof window !== 'undefined' && window.innerWidth < DESKTOP_MIN_WIDTH ? ANCHOR_OFFSET.mobile : ANCHOR_OFFSET.desktop]
    );
  }
}
