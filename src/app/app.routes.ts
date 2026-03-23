import { Routes } from '@angular/router';
//loading lazy
export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', loadComponent: () => import('./pages/main/main').then(m => m.Main) },
  { path: 'about-me', loadComponent: () => import('./pages/about-me/about-me').then(m => m.AboutMe) },
  { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.Portfolio) },
  { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.Services) },
  { path: 'contact', loadComponent: () => import('./component/contact/contact').then(m => m.Contact) },
  { path: '**', redirectTo: '/main' }
];
