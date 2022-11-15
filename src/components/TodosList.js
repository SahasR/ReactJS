import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component{
    render() {
        return(
            <ul>
                <TodoItem />
            </ul>
        )
    }
}

export default TodosList;