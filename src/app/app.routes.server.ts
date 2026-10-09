import { RenderMode, ServerRoute } from '@angular/ssr';

import { PROJECT_SLUGS } from './content/projects';
import { ROLE_IDS } from './content/roles';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'profil/:role',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => ROLE_IDS.map(role => ({ role }))
  },
  {
    path: 'projets/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PROJECT_SLUGS.map(slug => ({ slug }))
  },
  // Page de démonstration du design system (F0.3) : jamais pré-rendue, retirée en F9.1
  { path: '_styleguide', renderMode: RenderMode.Client },
  // URL inconnue : servie par nginx avec index.csr.html, le routeur client affiche la 404
  { path: '**', renderMode: RenderMode.Client },
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'methode', renderMode: RenderMode.Prerender }
];
