import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { User } from '@messenger/cdk';
import { AuthenticationFormValidators } from '@app/core/auth';

type SignInModel = Pick<User, 'login' | 'password'>;

const createSignInForm = (defaultValue: SignInModel | null, validators: AuthenticationFormValidators): FormGroup => {
  const form = new FormGroup({
    login: new FormControl<string | null>(null, {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ],
      asyncValidators: validators.username()
    }),
    password: new FormControl<string | null>(null, [
      Validators.required
    ])
  });

  if (defaultValue) {
    form.setValue(defaultValue);
  }

  return form;
};

@Component({
  selector: 'auth-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInFormComponent implements OnInit {

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

  constructor(authenticationFormValidator: AuthenticationFormValidators) {

    this.loginForm = createSignInForm(null, authenticationFormValidator);
  }

  ngOnInit(): void {
  }

  loginFormSubmit(value: SignInModel): void {
    console.log('loginFormSubmit', value);
  }

}
