import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInFormComponent } from './components';
import { AuthenticationFormValidators } from './services';


@NgModule({
  declarations: [
    SignInFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationFormValidators
  ]
})
export class AuthenticationFormModule {
}
