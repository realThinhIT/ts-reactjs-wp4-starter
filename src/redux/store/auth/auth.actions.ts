import { createOnlyTypeAction } from '../../../helpers/action-creator-helper';

export const STORE_AUTH_RECONNECT_WS = `auth.RECONNECT_WS`;

export const STORE_AUTH_LOGOUT = `auth.LOGOUT`;

export const STORE_AUTH_LOGIN_PHONE_PASS_START = `auth.LOGIN_PHONE_PASS_START`;
export const STORE_AUTH_LOGIN_PHONE_PASS_SUCCESS = `auth.LOGIN_PHONE_PASS_SUCCESS`;
export const STORE_AUTH_LOGIN_PHONE_PASS_FAILED = `auth.LOGIN_PHONE_PASS_FAILED`;

export const STORE_AUTH_LOGIN_TOKEN_START = `auth.LOGIN_TOKEN_START`;
export const STORE_AUTH_LOGIN_TOKEN_SUCCESS = `auth.LOGIN_TOKEN_SUCCESS`;
export const STORE_AUTH_LOGIN_TOKEN_FAILED = `auth.LOGIN_PHONE_PASS_FAILED`;

export const STORE_AUTH_REGISTER_PHONE_PASS_START = `auth.REGISTER_PHONE_PASS_START`;
export const STORE_AUTH_REGISTER_PHONE_PASS_SUCCESS = `auth.REGISTER_PHONE_PASS_SUCCESS`;
export const STORE_AUTH_REGISTER_PHONE_PASS_FAILED = `auth.REGISTER_PHONE_PASS_FAILED`;

export const authLogoutAction = () => (createOnlyTypeAction(STORE_AUTH_LOGOUT));

// STORE_AUTH_LOGIN_PHONE_PASS
export const authLoginPhonePassAction = (
  username = ``,
  password = ``,
  deviceName = ``,
  appName = ``
) => ({
  type: STORE_AUTH_LOGIN_PHONE_PASS_START,
  payload: {
    Command: `UserLoginByPassword`,
    Username: username,
    Password: password,
    DeviceName: deviceName,
    AppName: appName
  }
});

export const authLoginPhonePassSuccessAction = (
  authUser = {},
  loginToken = ``
) => ({
  type: STORE_AUTH_LOGIN_PHONE_PASS_SUCCESS,
  payload: {
    authUser,
    loginToken
  }
});

export const authLoginPhonePassFailedAction = (
  message = ``
) => ({
  type: STORE_AUTH_LOGIN_PHONE_PASS_FAILED,
  payload: {
    message
  }
});

// STORE_AUTH_LOGIN_TOKEN
export const authLoginTokenAction = (
  authToken = ``,
  deviceName = ``,
  appName = ``
) => ({
  type: STORE_AUTH_LOGIN_TOKEN_START,
  payload: {
    Command: `UserLoginByCookie`,
    LoginSession: authToken,
    DeviceName: deviceName,
    AppName: appName
  }
});

export const authLoginTokenSuccessAction = (
  authUser = {}
) => ({
  type: STORE_AUTH_LOGIN_TOKEN_SUCCESS,
  payload: {
    authUser
  }
});

export const authLoginTokenFailedAction = (
  message = ``
) => ({
  type: STORE_AUTH_LOGIN_TOKEN_FAILED,
  payload: {
    message
  }
});

// STORE_AUTH_REGISTER_PHONE_PASS
export const authRegisterPhonePassAction = (
  username = '',
  password = ''
) => ({
  type: STORE_AUTH_REGISTER_PHONE_PASS_START,
  payload: {
    Command: 'UserCreate',
    Username: username,
    Password: password
  }
});

export const authRegisterPhonePassSuccessAction = (
  createdUserId = null
) => ({
  type: STORE_AUTH_REGISTER_PHONE_PASS_SUCCESS,
  payload: {
    createdUserId
  }
});

export const authRegisterPhonePassFailedAction = (
  message = ``
) => ({
  type: STORE_AUTH_REGISTER_PHONE_PASS_FAILED,
  payload: {
    message
  }
});