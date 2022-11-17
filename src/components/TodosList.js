import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodosList = (props) => {

    const tasksState = useSelector ((state) => {
        return state.tasks;
      })

    return(
        <ul>
            {
                tasksState.map((item) => {
                    return (
                    <TodoItem key={item.id} item={item}/>)
                })
            }
        </ul>
    )
}

export default TodosList;