import { AuthStates } from '../reducers/auth';
import { createSelector } from '@ngrx/store';
import { AuthState } from '../reducers';

export interface AppState {
  authState: {
    auth: AuthStates;
  }
}

export const selectAuthState = (state: AppState) => state.authState.auth;

export const selectAuthUser = createSelector(
  selectAuthState,
  (state: AuthStates) => state.user,
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthStates) => state.isAuthenticated,
);

export const selectIsNotAuthenticated = createSelector(
  selectAuthState,
  (state: AuthStates) => !state.isAuthenticated,
);
