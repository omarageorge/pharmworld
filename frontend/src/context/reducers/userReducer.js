import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

export const userReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case USER_LOGIN_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case USER_LOGOUT:
      return {
        ...state,
        user: null,
      };

    case USER_REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case USER_REGISTER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
