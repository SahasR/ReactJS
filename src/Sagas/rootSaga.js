import {takeLatest} from "redux-saga/effects";
import { FETCH_TASK } from "../redux/const";
import { handleFetchTodos } from "./handlers/tasks";

export function* watcherSaga() {
    yield takeLatest(FETCH_TASK, handleFetchTodos);
}