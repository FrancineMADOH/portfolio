import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Lang } from '../content/models';

/** Adresse publique du site, pour les URL absolues (canonique, Open Graph). */
export const SITE_URL = 'https://francinemadoh.isfranny.net';

const SITE_NAME = 'Francine MADOH';

export interface PageSeo {
  title: string;
  description: string;
  /** Chemin de la page, ex. `/profil/odoo`. */
  path: string;
  /** Chemin de la page de référence quand deux URL ont le même contenu (sinon `path`). */
  canonicalPath?: string;
  lang: Lang;
  /** Page à ne pas indexer (404). */
  noindex?: boolean;
}

/**
 * Titre, description, URL canonique et balises de partage (Open Graph, Twitter) de la page.
 * Appelé pendant le rendu : les balises sont présentes dans le HTML pré-rendu.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(page: PageSeo): void {
    const url = SITE_URL + page.path;
    const canonical = SITE_URL + (page.canonicalPath ?? page.path);

    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:locale', content: page.lang === 'fr' ? 'fr_FR' : 'en_US' });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });

    this.setCanonical(canonical);

    if (page.noindex) {
      this.meta.updateTag({ name: 'robots', content: 'noindex' });
    } else {
      this.meta.removeTag('name="robots"');
    }
  }

  private setCanonical(href: string): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
