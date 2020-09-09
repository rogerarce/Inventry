import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectIsAuthenticated } from '../main/public/store/selectors/auth';


@Injectable({providedIn: 'root'})
export class PrivatePageGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<any>,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree>{
    return this.store
      .pipe(
        select(selectIsAuthenticated),
        map(isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigate(['/login']);
          }
          
          return isAuthenticated;
        })
      );
  }
}