import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from '@app/core/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) {}

  isDirtyUsername$(value: string): Observable<{ isDirtyUsername: string } | null> {
    return this.authService.checkLogin$(value).pipe(
      map((isValid) => isValid ? null : { isDirtyUsername: 'No matching symbol found' })
    );
  }
}
