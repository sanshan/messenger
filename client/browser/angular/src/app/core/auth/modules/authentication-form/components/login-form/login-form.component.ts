import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup, ValidationErrors,
  Validators
} from '@angular/forms';
import { AuthenticationFormValidationService } from '@app/core/auth';

type SimpleLoginCredentials = {
  login: string | null
  password: string | null;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  errors: { [key: string]: string } = {
    required: 'Is required',
    minlength: 'Min length error',
    isDirtyUsername: 'No matching symbol found'
  };

  get loginErrors() {
    if (!this.loginForm.controls['login'].errors) {
      return null;
    }
    return Object.keys(this.loginForm.controls['login'].errors);
  };

  constructor(authenticationFormValidation: AuthenticationFormValidationService) {

    this.loginForm = new FormGroup({
      login: new FormControl<string | null>(null, {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ],
        asyncValidators: authenticationFormValidation.username()
      }),
      password: new FormControl<string | null>(null, [
        Validators.required
      ])
    });

  }

  ngOnInit(): void {
  }

  loginFormSubmit(credentials: SimpleLoginCredentials): void {
    console.log('loginFormSubmit', credentials);
  }

}
