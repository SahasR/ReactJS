import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodos, updateTodos } from "../redux/action";

const TodoItem = (props) => {
    const item = props.item;
    const nameRef = useRef();
    const descRef = useRef();

    const dispatch = useDispatch();

    const callDelete = () => {
        //dispatch(deleteTodos(item.id));
    }

    const callUpdate = () => {
        //dispatch(updateTodos(item.id, nameRef.current.value, descRef.current.value));
    }

    return (
        <div>
                <li><input ref={nameRef} type="text" defaultValue={item.name}></input>&nbsp;&nbsp;
                <input ref={descRef} type="text" defaultValue={item.desc}></input>&nbsp;&nbsp;
                <button onClick={() => callUpdate()}>Edit</button>&nbsp;&nbsp;
                <button onClick={() => callDelete()}>Delete</button>
                </li>
                &nbsp;
            </div>
    )
}

export default TodoItem;