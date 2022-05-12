import { takeEvery, call, put } from "redux-saga/effects";
import { LOGIN_IN_PROGRESS } from "../../types/auth";
import { authActions } from "../../actions";
import { logIn } from "../../../services/http/auth";
import { setToken } from "../../../utilz/auth";

function* logInProgress({ payload }) {
  try {
    let { data } = yield call(logIn, payload);
    setToken(data?.data.access_token);
    yield put(
      authActions.logInSuccess({
        data: data.data,
        message: data["message"],
        success: true,
      })
    );
  } catch (error) {
    const { data } = error?.response;
    let payload = {
      error: true,
      errorMessage: data.message
        ? "Invalid user name or password!"
        : error.message,
      inProgress: false,
    };
    yield put(authActions.logInError(payload));
  }
}

function* authWatcher() {
  yield takeEvery(LOGIN_IN_PROGRESS, logInProgress);
}

export { authWatcher };
