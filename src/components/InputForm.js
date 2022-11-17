import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { insertTodos } from '../redux/action';

const InputForm = (props) => {

    const nameRef = useRef();
    const descRef = useRef();

    const dispatch = useDispatch();

    const callInsert = () => {
        dispatch(insertTodos(nameRef.current.value, descRef.current.value));
    }

    return (
        <div>
            <h2>Input a new value!</h2>
            <input id="name" ref={nameRef} placeholder="Task Name"></input>&nbsp;&nbsp;
            <input id="desc" ref={descRef} placeholder="Description"></input>&nbsp;&nbsp;
            <button onClick={() => callInsert()} >Insert!</button>
        </div>   
    )
}

export default InputForm;