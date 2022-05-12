import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducers";
import reduxSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

const sagaMiddleware = reduxSagaMiddleware();

const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export { store };
