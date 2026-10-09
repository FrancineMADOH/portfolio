import { Routes } from '@angular/router';
import { ProjectsComponent } from "./pages/projects/projects.component";

export const routes: Routes = [
    { path: '', component: ProjectsComponent },
    // Page de démonstration du design system (F0.3), retirée en F9.1
    { path: '_styleguide', loadComponent: () => import('./pages/styleguide/styleguide.component').then(m => m.StyleguideComponent) },
    { path: '**', redirectTo: '' }
];
