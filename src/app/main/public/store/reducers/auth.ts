import { AuthActionsType, AuthActions } from '../actions/auth'
import { User } from 'src/app/core/models/user';

export interface AuthStates {
  user: User;
  isAuthenticated: boolean;
}

export const initialState: AuthStates = {
  user: null,
  isAuthenticated: false,
}

export const reducer = (
  state = initialState,
  actions: AuthActionsType
) => { 
  switch(actions.type) {
    case AuthActions.LOGIN:
      return {...state, user: actions.user, isAuthenticated: true};
    case AuthActions.LOGOUT:
      return {...state, user: null, isAuthenticated: false};
    default:
      return state;
  }
}