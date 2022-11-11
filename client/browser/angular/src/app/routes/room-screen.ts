import { Routes } from '@angular/router';

export const roomScreen: Routes = [
  {
    path: '',
    outlet: 'header',
    loadChildren: () => import('@app/modules').then(m => m.HeaderModule)
  },
  {
    path: '',
    outlet: 'aside',
    loadChildren: () => import('@app/modules').then(m => m.AsideModule)
  },
  {
    path: '',
    outlet: 'content',
    loadChildren: () => import('@app/modules').then(m => m.RoomModule)
  },
  {
    path: '',
    outlet: 'footer',
    loadChildren: () => import('@app/modules').then(m => m.FooterModule)
  }
];
