import React from 'react';

const InputForm = (props) => {

    const insertFunc = props.func;

    return (
        <div>
            <h2>Input a new value!</h2>
            <input id="name" placeholder="Task Name"></input>&nbsp;&nbsp;
            <input id="desc" placeholder="Description"></input>&nbsp;&nbsp;
            <button onClick={() => insertFunc(document.getElementById("name").value, document.getElementById("desc").value)}>Insert!</button>
        </div>   
    )
}

export default InputForm;