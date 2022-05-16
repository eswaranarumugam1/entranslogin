import { removeToken, removeUser } from "../../../utilz/auth";
import {
  LOGIN_IN_PROGRESS,
  LOGIN_IN_SUCCESS,
  LOGIN_IN_ERROR,
  INITIATE_LOGOUT,
} from "../../types/auth";

export const authReducer = (
  state = {
    inProgress: false,
    error: false,
    isLoggedIn: false,
    userInfo: null,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_IN_PROGRESS:
      return {
        ...state,
        inProgress: true,
        error: false,
        success: false,
        isLoggedIn: false,
        userInfo: null,
      };

    case LOGIN_IN_SUCCESS:
      return {
        ...state,
        inProgress: false,
        error: false,
        success: true,
        isLoggedIn: true,

        userInfo: payload.data.users,
      };

    case LOGIN_IN_ERROR:
      return {
        ...state,
        inProgress: false,
        error: true,
        success: false,
        isLoggedIn: false,
        userInfo: null,
      };

    case INITIATE_LOGOUT: {
      localStorage.clear();
      return {
        ...state,
        inProgress: false,
        error: false,
        success: false,
        isLoggedIn: false,
        userInfo: null,
      };
    }

    default:
      return state;
  }
};
