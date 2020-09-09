import { AuthStates } from './auth';
import { ActionReducerMap } from '@ngrx/store';
import { AuthActionsType } from '../actions';
import * as fromAuth from '../reducers/auth';

export interface AuthState {
  auth: AuthStates;
}

export const reducer: ActionReducerMap<AuthState, AuthActionsType> = {
  auth: fromAuth.reducer
};