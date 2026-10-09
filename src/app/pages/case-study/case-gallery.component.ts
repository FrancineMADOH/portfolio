import { Component, ElementRef, computed, inject, input, signal, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { mediaSize, mediaSrc } from '../../content/media';
import { ProjectMedia } from '../../content/models';
import { LanguageService } from '../../services/language.service';

/** Galerie de captures d'une étude de cas. Un clic agrandit l'image dans une fenêtre modale native (`<dialog>`). */
@Component({
  selector: 'app-case-gallery',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './case-gallery.component.html',
  styleUrl: './case-gallery.component.css'
})
export class CaseGalleryComponent {
  readonly lang = inject(LanguageService);

  readonly media = input.required<ProjectMedia[]>();

  readonly desktopMedia = computed(() => this.media().filter(m => m.kind === 'desktop'));
  readonly mobileMedia = computed(() => this.media().filter(m => m.kind === 'mobile'));

  /** Capture affichée en grand, ou null. */
  readonly opened = signal<ProjectMedia | null>(null);

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  open(media: ProjectMedia): void {
    this.opened.set(media);
    // showModal() gère le focus, le piège du focus et la touche Échap.
    this.dialog().nativeElement.showModal();
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  /** Clic sur le fond assombri (la cible est alors le <dialog> lui-même) : fermeture. */
  onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.close();
    }
  }

  readonly src = mediaSrc;
  readonly size = mediaSize;
}
