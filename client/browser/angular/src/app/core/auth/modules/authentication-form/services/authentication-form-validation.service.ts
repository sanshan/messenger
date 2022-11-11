import { Injectable } from '@angular/core';
import { UserService } from '@app/core/services';
import { AsyncValidatorFn } from '@angular/forms';
import { UsernameValidator } from '@app/core/auth/modules/authentication-form';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFormValidationService {

  constructor(
    private readonly userService: UserService
  ) { }

  username(): AsyncValidatorFn[] {
    return [UsernameValidator.createValidator(this.userService)];
  }
}
