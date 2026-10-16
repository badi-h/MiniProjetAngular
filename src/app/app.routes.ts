import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./pages/event-list/event-list').then(m => m.EventList)
  },
  {
    path: 'events/:id',
    loadComponent: () =>
      import('./pages/event-details/event-details').then(m => m.EventDetails)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then(m => m.NotFound)
  }
];
