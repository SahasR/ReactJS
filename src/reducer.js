import { TASK_ADDED, TASK_FETCHED, TASK_UPDATED, TASK_DELETED } from "./const";

export default function tasksReducer(state = [], action) {
    switch (action.type){
        case TASK_ADDED:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    desc: action.payload.desc
                }
            ]
        case TASK_FETCHED:
            return action.payload.tasks;
        case TASK_UPDATED:
            const newstate = state.map((task) => {
                console.log(task);
                if (task.id === action.payload.id) {
                    return {...task,...action.payload}
                }
                return task;
            })
            console.log(newstate);
            return newstate;
        case TASK_DELETED:
            return state.filter((task) => task.id !== action.payload.id)
        default:
            return state;
    }    
}