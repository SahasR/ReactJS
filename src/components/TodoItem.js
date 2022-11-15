import React from "react";

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: this.props.item
        }
        console.log(this.state.item);
    }

    render() {
        return  (
            <div>
                <li><input type="text" defaultValue={this.state.item.name}></input>&nbsp;&nbsp;
                <input type="text" defaultValue={this.state.item.desc}></input>&nbsp;&nbsp;
                <button value="">Edit</button>&nbsp;&nbsp;
                <button value="">Delete</button>
                </li>
                &nbsp;
            </div>
        )
    }
}

export default TodoItem;