import { CanMatchFn, Routes, UrlSegment } from '@angular/router';

import { findProject } from './content/projects';
import { findRole } from './content/roles';
import { ProjectsComponent } from './pages/projects/projects.component';

/** Un `:role` ou un `:slug` inconnu ne correspond pas : la route `**` affiche la 404, sans redirection. */
const knownRole: CanMatchFn = (_route, segments: UrlSegment[]) => !!findRole(segments[1]?.path ?? '');
const knownProject: CanMatchFn = (_route, segments: UrlSegment[]) => !!findProject(segments[1]?.path ?? '');

export const routes: Routes = [
  // Ancien accueil, remplacé par HomeComponent à la fin de la phase 5
  { path: '', component: ProjectsComponent },
  {
    path: 'profil/:role',
    canMatch: [knownRole],
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'projets/:slug',
    canMatch: [knownProject],
    loadComponent: () => import('./pages/case-study/case-study.component').then(m => m.CaseStudyComponent)
  },
  {
    path: 'methode',
    loadComponent: () => import('./pages/method/method.component').then(m => m.MethodComponent)
  },
  // Page de démonstration du design system (F0.3), retirée en F9.1
  {
    path: '_styleguide',
    loadComponent: () => import('./pages/styleguide/styleguide.component').then(m => m.StyleguideComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
