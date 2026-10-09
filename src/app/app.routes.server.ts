import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Page de démonstration du design system (F0.3) : jamais pré-rendue, retirée en F9.1
  { path: '_styleguide', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Prerender }
];
