import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "../Sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;