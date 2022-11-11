import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessengerDialogComponent } from './components';

const routes: Routes = [
  {
    path: ':id',
    component: MessengerDialogComponent
  }
];

@NgModule({
  declarations: [
    MessengerDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DialogModule {
}
