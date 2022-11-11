import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMain } from '@app/layouts';
import { mainScreen, roomScreen } from '@app/routes';

const routes: Routes = [
  {
    path: '',
    component: LayoutMain,
    children: mainScreen,
  },
  {
    path: ':room',
    component: LayoutMain,
    children: roomScreen,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
