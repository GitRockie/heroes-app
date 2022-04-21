import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor( private authService: AuthService,
               private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      return this.authService.verifyAuth()
        .pipe(
          tap(authenticated => {
            if (!authenticated){
              this.router.navigate(['./auth/login']);
            }
          } )
        )
  
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean>  | boolean {

      return this.authService.verifyAuth()
      .pipe(
        tap(authenticated => {
          if (!authenticated){
            this.router.navigate(['./auth/login']);
          }
        } )
      );
    
     
  }
}
