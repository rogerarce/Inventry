import { Action } from '@ngrx/store';
import { User } from '../../../../core/models/user';

export enum AuthActions {
  LOGIN = '[Feature Auth] Login',
  LOGOUT = '[Feature Auth] Logout',
}

export class Login implements Action {
  readonly type = AuthActions.LOGIN;

  constructor(public user: User) {}
}

export class Logout implements Action {
  readonly type = AuthActions.LOGOUT;

  constructor() {}
}

export type AuthActionsType = Login | Logout;