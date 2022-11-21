import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "../Sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const rootReducer = combineReducers({tasks: tasksReducer})

const store = configureStore({
    reducer: rootReducer,
    middleware: middleware,
    devTools: true
});

sagaMiddleware.run(watcherSaga);

export default store;