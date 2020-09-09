import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsNotAuthenticated } from '../main/public/store/selectors/auth';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoginPageGuard implements CanActivate {
  constructor(private store: Store<any>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.store.pipe(select(selectIsNotAuthenticated));
  }

}