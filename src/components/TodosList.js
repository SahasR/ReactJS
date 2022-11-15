import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todo: this.props.todo
        }
    }

    render() {
        return(
            <ul>
                {
                    this.state.todo.map((item) => {
                        return (
                        <TodoItem key={item.id} item={item} />)
                    })
                }
            </ul>
        )
    }
}

export default TodosList;