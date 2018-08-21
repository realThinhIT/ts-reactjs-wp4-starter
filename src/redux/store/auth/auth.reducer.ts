import * as actions from './auth.actions';
import { AuthState } from '../../../models/states/auth';

const initState: AuthState = {
  isAuthenticated: false,
  authToken: '',
  isFirstAuthLoaded: false,
  error: null,

  isLoggingIn: false,
  authUser: {},

  register: {
    isLoading: false,
    createdUserId: null,
    error: null
  }
};

export default function(state: AuthState = initState, action: any): AuthState {
  switch (action.type) {
    // STORE_AUTH_LOGOUT
    case actions.STORE_AUTH_LOGOUT: {
      return {
        ...state,
        isAuthenticated: false
      };
    }

    // STORE_AUTH_LOGIN_PHONE_PASS
    case actions.STORE_AUTH_LOGIN_PHONE_PASS_START: {
      return {
        ...state,
        isLoggingIn: true,
        error: null
      };
    }

    case actions.STORE_AUTH_LOGIN_PHONE_PASS_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        authToken: action.payload.loginToken,
        authUser: action.payload.authUser,
        isLoggingIn: false,
        error: null
      };
    }

    case actions.STORE_AUTH_LOGIN_PHONE_PASS_FAILED: {
      return {
        ...state,
        isAuthenticated: false,
        isLoggingIn: false,
        error: action.payload.message
      };
    }

    // STORE_AUTH_LOGIN_TOKEN
    case actions.STORE_AUTH_LOGIN_TOKEN_START: {
      return {
        ...state,
        isAuthenticated: false,
        isLoggingIn: true,
        error: null,
        authToken: action.payload.authToken
      };
    }

    case actions.STORE_AUTH_LOGIN_TOKEN_SUCCESS: {
      return {
        ...state,
        isFirstAuthLoaded: true,
        isAuthenticated: true,
        isLoggingIn: false,
        error: null,
        authUser: {
          ...state.authUser,
          ...action.payload.authUser
        }
      };
    }

    case actions.STORE_AUTH_LOGIN_TOKEN_FAILED: {
      return {
        ...state,
        isFirstAuthLoaded: true,
        isAuthenticated: false,
        isLoggingIn: false,
        error: action.payload.message,
        authUser: {}
      };
    }

    // STORE_AUTH_REGISTER_PHONE_PASS
    case actions.STORE_AUTH_REGISTER_PHONE_PASS_START: {
      return {
        ...state,
        register: {
          ...state.register,
          isLoading: true,
          error: null,
        }
      };
    }

    case actions.STORE_AUTH_REGISTER_PHONE_PASS_SUCCESS: {
      return {
        ...state,
        register: {
          ...state.register,
          isLoading: false,
          createdUserId: action.payload.createdUserId,
          error: null
        }
      };
    }

    case actions.STORE_AUTH_REGISTER_PHONE_PASS_FAILED: {
      return {
        ...state,
        register: {
          ...state.register,
          isLoading: false,
          error: action.payload.message
        }
      };
    }

    default: {
      return state;
    }
  }
}