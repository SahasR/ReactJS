import { applyMiddleware, createStore } from "redux";
import tasksReducer from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "../Sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore({
    reducer: {
        tasks: tasksReducer
    }
}, {} ,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;