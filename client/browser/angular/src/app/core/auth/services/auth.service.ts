import { Injectable } from '@angular/core';
import { Observable, of, timeout } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkLogin$(login: string): Observable<boolean> {
    return of(login !== 'jopa').pipe(
      delay(1000),
    );
  }
}
