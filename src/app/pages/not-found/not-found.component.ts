import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  template: `
    <main class="placeholder">
      <p class="eyebrow">404</p>
      <h1>{{ 'NOT_FOUND.TITLE' | translate }}</h1>
      <p class="lead">{{ 'NOT_FOUND.TEXT' | translate }}</p>
      <a class="btn btn--primary" routerLink="/">{{ 'NOT_FOUND.BACK' | translate }}</a>
    </main>
  `,
  styleUrl: '../placeholder.css'
})
export class NotFoundComponent {}
