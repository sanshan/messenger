import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerAsideComponent } from './components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MessengerAsideComponent
  }
];

@NgModule({
  declarations: [
    MessengerAsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AsideModule {
}
