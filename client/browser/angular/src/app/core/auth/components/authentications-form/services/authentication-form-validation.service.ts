import { Injectable } from '@angular/core';
import { UserService } from '@app/core/services';
import { AsyncValidatorFn } from '@angular/forms';
import { UsernameValidator } from '@app/core/auth';

@Injectable()
export class AuthenticationFormValidators {

  constructor(
    private readonly userService: UserService
  ) { }

  username(): AsyncValidatorFn[] {
    return [UsernameValidator.createValidator(this.userService)];
  }
}
