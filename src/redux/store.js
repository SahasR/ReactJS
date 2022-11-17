import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducer";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
}, applyMiddleware(thunk));

export default store;