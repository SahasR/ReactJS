import React from "react";

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: this.props.item
        }
        this.nameRef = React.createRef();
        this.descRef = React.createRef();
    }

    render() {
        let {item} = this.state;
        let {updateBackendAPI} = this.props;
        let {deleteBackendAPI} = this.props;

        return  (
            <div>
                <li><input ref={this.nameRef} type="text" defaultValue={item.name}></input>&nbsp;&nbsp;
                <input ref={this.descRef} type="text" defaultValue={item.desc}></input>&nbsp;&nbsp;
                <button onClick={() => updateBackendAPI(item.id, this.nameRef.current.value, this.descRef.current.value)}>Edit</button>&nbsp;&nbsp;
                <button onClick={() => deleteBackendAPI(item.id)}>Delete</button>
                </li>
                &nbsp;
            </div>
        )
    }
}

export default TodoItem;