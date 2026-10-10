import { CanMatchFn, Routes, UrlSegment } from '@angular/router';

import { findProject } from './content/projects';
import { findRole } from './content/roles';

/** Un `:role` ou un `:slug` inconnu ne correspond pas : la route `**` affiche la 404, sans redirection. */
const knownRole: CanMatchFn = (_route, segments: UrlSegment[]) => !!findRole(segments[1]?.path ?? '');
const knownProject: CanMatchFn = (_route, segments: UrlSegment[]) => !!findProject(segments[1]?.path ?? '');

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
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
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
