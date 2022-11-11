import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogMessageComponent } from './components';


@NgModule({
  declarations: [
    DialogMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DialogMessageComponent]
})
export class MessageModule {
}
