import { all, fork } from "redux-saga/effects";
import { authWatcher } from "./auth";

function* rootSaga() {
  yield all([fork(authWatcher)]);
}

export { rootSaga };
