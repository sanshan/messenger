import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerHeaderComponent } from './components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MessengerHeaderComponent
  }
];

@NgModule({
  declarations: [
    MessengerHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HeaderModule {
}
