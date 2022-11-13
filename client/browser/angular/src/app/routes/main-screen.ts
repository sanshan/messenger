import { Routes } from '@angular/router';
import { SignInFormComponent } from '@app/core/auth';

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
    component: SignInFormComponent
  },
  {
    path: '',
    outlet: 'footer',
    loadChildren: () => import('@app/modules').then(m => m.FooterModule)
  }
];
