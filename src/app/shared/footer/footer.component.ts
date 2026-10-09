import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { PROFILE_LINKS } from '../../content/profile';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  /** Année du build : les pages sont pré-rendues, elle se met à jour au déploiement suivant. */
  readonly currentYear = new Date().getFullYear();
  readonly links = PROFILE_LINKS;
}
