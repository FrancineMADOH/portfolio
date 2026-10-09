import { Component, input } from '@angular/core';

/** Capture d'écran d'app mobile présentée dans un cadre de téléphone dessiné en CSS. */
@Component({
  selector: 'app-phone-frame',
  standalone: true,
  template: `
    <figure class="phone">
      <div class="phone__screen">
        <img [src]="src()" [alt]="alt()" [attr.width]="width()" [attr.height]="height()" [attr.loading]="eager() ? 'eager' : 'lazy'" [attr.fetchpriority]="eager() ? 'high' : null" decoding="async">
      </div>
    </figure>
  `,
  styleUrl: './phone-frame.component.css'
})
export class PhoneFrameComponent {
  readonly src = input.required<string>();
  readonly alt = input.required<string>();
  /** Dimensions réelles de l'image, pour réserver sa place avant chargement. */
  readonly width = input<number>(732);
  readonly height = input<number>(1600);
  /** Image visible dès l'arrivée sur la page (visuel principal) : chargée en priorité. */
  readonly eager = input<boolean>(false);
}
