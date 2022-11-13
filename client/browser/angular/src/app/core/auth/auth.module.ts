import { NgModule } from '@angular/core';
import { AuthenticationFormModule } from './components/authentications-form';



@NgModule({
  imports: [
    AuthenticationFormModule,
    //ToDo fro another parts of auth
  ]
})
export class AuthModule { }

