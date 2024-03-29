import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, Observable, of, map } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Auth } from '../interface/auth.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth{
    return {...this._auth!}
  }

  constructor( private http: HttpClient) { }

  verifyAuth(): Observable<boolean> {
    if( !localStorage.getItem('id') ) {
      return of(false);
    }

      return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
        .pipe(
          map( auth => {
            this._auth = auth;
            return true;
          })
        );
  }

  login(  ) {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap( auth =>  this._auth = auth ),
        tap( auth =>  localStorage.setItem('id', auth.id))
      );
  }

  logOut() {
    this._auth = undefined;
  }




}
 