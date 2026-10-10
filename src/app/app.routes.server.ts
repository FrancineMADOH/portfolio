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
  // URL inconnue : l'hébergeur sert 404.html (copie de index.csr.html), le routeur client affiche la page 404
  { path: '**', renderMode: RenderMode.Client },
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'methode', renderMode: RenderMode.Prerender }
];
