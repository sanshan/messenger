import { NgModule } from '@angular/core';
import { DialogService, RoomStore } from './services';
import { AuthModule } from './auth/auth.module';


@NgModule({
  imports: [
    AuthModule
  ],
  providers: [
    DialogService,
    RoomStore
  ],
  exports: [
    AuthModule
  ]
})
export class CoreModule {
}
