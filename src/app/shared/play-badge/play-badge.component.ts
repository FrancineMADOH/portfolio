import { Component, computed, inject, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { LanguageService } from '../../services/language.service';

/** Badge officiel Google Play dans la langue active, lien vers la fiche de l'app. */
@Component({
  selector: 'app-play-badge',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <a class="play-badge" [href]="url()" target="_blank" rel="noopener">
      <img [src]="badgeSrc()" [alt]="'media.play_badge_alt' | translate" width="646" height="250">
    </a>
  `,
  styles: `
    .play-badge {
      display: inline-block;
      width: 150px;
    }

    .play-badge img {
      width: 100%;
      height: auto;
    }
  `
})
export class PlayBadgeComponent {
  private readonly lang = inject(LanguageService);

  readonly url = input.required<string>();

  readonly badgeSrc = computed(() => `/images/badges/google-play-${this.lang.currentLang()}.webp`);
}
