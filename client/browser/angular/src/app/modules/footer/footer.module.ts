import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerFooterComponent } from './components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MessengerFooterComponent
  }
];

@NgModule({
  declarations: [
    MessengerFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FooterModule {
}
