import { store } from "../redux";
import { authActions } from "../redux/actions";
const UNAUTHORIZED = [401, 402];

export const tokenValidation = (error) => {
  console.log("error", error.response);

  const { status } = error.response;
  if (UNAUTHORIZED.includes(status)) {
    store.dispatch(authActions.logOut());
  }
  return Promise.reject(error);
};
