import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoomLayout } from './layouts/room-layout.component';
import { RoomDialogComponent } from '@app/modules/room/components/room-dialog/room-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: RoomLayout,
    children: [
      {
        path: '',
        outlet: 'dialog',
        component: RoomDialogComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    RoomLayout,
    RoomDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoomModule {
}
