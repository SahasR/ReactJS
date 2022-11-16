import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component{
    render() {
        return(
            <ul>
                {
                    this.props.todo.map((item) => {
                        return (
                        <TodoItem key={item.id} item={item} updateBackendAPI={this.props.updateBackendAPI} deleteBackendAPI={this.props.deleteBackendAPI}/>)
                    })
                }
            </ul>
        )
    }
}

export default TodosList;