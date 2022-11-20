import {call, put} from "redux-saga/effects";
import tasksReducer from "../../redux/reducer";
import { fetchAllUser } from "../requests/tasks";

export function* handleFetchAllUsers(action) {
    try {
        const response = yield call(fetchAllUser);
        const { data } = response;
        yield put(tasksReducer(data))
    } catch (error) {
        console.log(error)
    }
}