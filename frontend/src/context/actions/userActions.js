import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constants/userConstants';

export const loginStart = () => ({
  type: USER_LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: USER_LOGIN_SUCCESS,
  payload: user,
});

export const loginFail = (error) => ({
  type: USER_LOGIN_FAIL,
  payload: error,
});

export const logout = () => ({
  type: USER_LOGOUT,
});

export const registerStart = () => ({
  type: USER_REGISTER_REQUEST,
});

export const registerSuccess = (user) => ({
  type: USER_REGISTER_SUCCESS,
  payload: user,
});

export const registerFail = (error) => ({
  type: USER_REGISTER_FAIL,
  payload: error,
});
