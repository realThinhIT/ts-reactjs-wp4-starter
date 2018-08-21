export interface AuthState {
  isAuthenticated: boolean,
  authToken: string,
  isFirstAuthLoaded: boolean,
  error: string,

  isLoggingIn: boolean,
  authUser: object,

  register: {
    isLoading: boolean,
    createdUserId: number,
    error: string
  }
}