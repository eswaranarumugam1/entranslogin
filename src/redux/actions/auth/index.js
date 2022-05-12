import {
  LOGIN_IN_PROGRESS,
  LOGIN_IN_SUCCESS,
  LOGIN_IN_ERROR,
  INITIATE_LOGOUT,
} from "../../types/auth";

const actions = {};

actions.logInProgress = (payload) => {
  return {
    type: LOGIN_IN_PROGRESS,
    payload: payload,
  };
};
actions.logInSuccess = (data) => {
  console.log("useruseruser", data);
  return {
    type: LOGIN_IN_SUCCESS,
    payload: data,
  };
};

actions.logInError = (err) => {
  return {
    type: LOGIN_IN_ERROR,
    payload: err,
  };
};

actions.logOut = () => {
  localStorage.removeItem("logintoken");
  return {
    type: INITIATE_LOGOUT,
  };
};

export { actions };
