import {call, put} from "redux-saga/effects";
import { setToDos } from "../../redux/reducer";
import { fetchTodos } from "../requests/tasks";

export function* handleFetchTodos() {
    try {
        const response = yield call(fetchTodos);
        const { data } = response;
        yield put(setToDos(data));
    } catch (error) {
        console.log(error)
    }
}