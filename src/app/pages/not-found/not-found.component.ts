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
      <h1>{{ 'not_found.title' | translate }}</h1>
      <p class="lead">{{ 'not_found.text' | translate }}</p>
      <a class="btn btn--primary" routerLink="/">{{ 'not_found.back' | translate }}</a>
    </main>
  `,
  styleUrl: '../placeholder.css'
})
export class NotFoundComponent {}
