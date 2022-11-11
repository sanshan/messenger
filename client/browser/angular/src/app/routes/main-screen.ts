import { Routes } from '@angular/router';
import { LoginFormComponent } from '@app/core/auth/modules/authentication-form';

export const mainScreen: Routes = [
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
    component: LoginFormComponent
  },
  {
    path: '',
    outlet: 'footer',
    loadChildren: () => import('@app/modules').then(m => m.FooterModule)
  }
];
