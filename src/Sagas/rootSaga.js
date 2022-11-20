import {takeLatest} from "redux-saga/effects";
import { TASK_FETCHED } from "../redux/const";
import { handleFetchAllUsers } from "./handlers/tasks";

export function* watcherSaga() {
    yield takeLatest(TASK_FETCHED, handleFetchAllUsers);
}