// Page de démonstration temporaire du design system (F0.3), retirée en F9.1.
import { Component } from '@angular/core';

import { PhoneFrameComponent } from '../../shared/phone-frame/phone-frame.component';
import { PlayBadgeComponent } from '../../shared/play-badge/play-badge.component';

interface Swatch {
  name: string;
  token: string;
  hex: string;
  usage: string;
  dark?: boolean;
}

@Component({
  selector: 'app-styleguide',
  standalone: true,
  imports: [PhoneFrameComponent, PlayBadgeComponent],
  templateUrl: './styleguide.component.html',
  styleUrl: './styleguide.component.css'
})
export class StyleguideComponent {
  readonly paperSwatches: Swatch[] = [
    { name: 'Papier', token: '--color-paper', hex: '#F7F5F0', usage: 'Fond du contenu' },
    { name: 'Surface', token: '--color-surface', hex: '#FFFFFF', usage: 'Cartes' },
    { name: 'Titres', token: '--color-heading', hex: '#14213D', usage: '14,7:1 sur papier', dark: true },
    { name: 'Texte', token: '--color-text', hex: '#1F2937', usage: '13,5:1 sur papier', dark: true },
    { name: 'Texte secondaire', token: '--color-text-muted', hex: '#5B6472', usage: '5,5:1 sur papier', dark: true },
    { name: 'Accent', token: '--color-accent', hex: '#A4461F', usage: '5,6:1 sur papier', dark: true },
    { name: 'Accent survol', token: '--color-accent-hover', hex: '#8A3A18', usage: '7,1:1 sur papier', dark: true },
    { name: 'Accent doux', token: '--color-accent-soft', hex: '#F3E6DC', usage: 'Fond des badges' },
    { name: 'Bordure', token: '--color-border', hex: '#E3DED4', usage: 'Séparateurs, cartes' }
  ];

  readonly inkSwatches: Swatch[] = [
    { name: 'Encre', token: '--color-ink', hex: '#14213D', usage: 'Fond de la barre latérale', dark: true },
    { name: 'Texte sur encre', token: '--color-on-ink', hex: '#F3F1EC', usage: '14,2:1 sur encre' },
    { name: 'Secondaire sur encre', token: '--color-on-ink-muted', hex: '#A9B3C4', usage: '7,6:1 sur encre' },
    { name: 'Accent sur encre', token: '--color-accent-on-ink', hex: '#E89A6B', usage: '7,1:1 sur encre' }
  ];

  readonly brightfretScreens = [
    { src: '/images/projects/christ-international-group/app-brightfret-accueil.webp', alt: 'BrightFret : accueil, recherche par code ou scan QR' },
    { src: '/images/projects/christ-international-group/app-brightfret-colis.webp', alt: 'BrightFret : liste des colis suivis' },
    { src: '/images/projects/christ-international-group/app-brightfret-suivi.webp', alt: 'BrightFret : chronologie de suivi d’un colis' },
    { src: '/images/projects/christ-international-group/app-brightfret-detail.webp', alt: 'BrightFret : documents, messagerie, facture et réclamation' }
  ];

  readonly mungoumScreens = [
    { src: '/images/projects/mungoum/app-aujourdhui.webp', alt: 'Mungoum : jour nguemba du jour' },
    { src: '/images/projects/mungoum/app-calendrier.webp', alt: 'Mungoum : calendrier du mois' },
    { src: '/images/projects/mungoum/app-8-jours.webp', alt: 'Mungoum : les 8 jours et les marchés' },
    { src: '/images/projects/mungoum/app-a-propos.webp', alt: 'Mungoum : à propos' }
  ];

  readonly roles = [
    'Consultante en transformation digitale',
    'Cheffe de projet',
    'Analyste fonctionnelle / BA',
    'Consultante Odoo',
    'Développeuse Angular · Node.js · Python/Odoo'
  ];
}
