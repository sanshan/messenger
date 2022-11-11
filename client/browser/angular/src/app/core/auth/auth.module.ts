import { NgModule } from '@angular/core';
import { AuthenticationFormModule } from './modules/authentication-form';



@NgModule({
  imports: [
    AuthenticationFormModule,
    //ToDo fro another parts of auth
  ]
})
export class AuthModule { }

