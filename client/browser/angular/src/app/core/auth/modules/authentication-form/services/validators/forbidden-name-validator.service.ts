import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { debounceTime, map, Observable, switchMap, tap } from 'rxjs';
import { AuthService } from '@app/core/auth';

@Injectable({ providedIn: 'root' })
export class ForbiddenNameValidator implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {

    return control.valueChanges.pipe(
      debounceTime(500),
      switchMap((value: string) => this.authService.checkLogin$(value)),
      map((isValid: boolean) => isValid ? null : {
        error: 'No matching symbol found'
      }),
      tap((text) => {
        console.log('text: ', text);
      })
    );

    // return this.heroesService.isAlterEgoTaken(control.value).pipe(
    //   map(isTaken => (isTaken ? { uniqueAlterEgo: true } : null)),
    //   catchError(() => of(null))
    // );
  }
}
