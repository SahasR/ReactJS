import React, { useEffect, useState} from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputForm from "./InputForm";

const TodoContainer = () => {

    const [todo, setTodos] = useState([])
    const callBackendAPI = async () => {
      const response = await fetch('http://localhost:3001/tasks', {
        method: 'get',
        headers: new Headers({
          'token': 'secretpass'
        })
      });
    
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(response.message)
      } 
      setTodos(body);
    }

    const insertBackendAPI = async (name, desc) => {
      let obj = new Object();
      obj.name = name;
      obj.desc = desc;

      let packetobject = JSON.stringify(obj);

      console.log(packetobject);

      let response;

      response = await fetch('http://localhost:3001/tasks', {
      method: 'post',
      headers: new Headers({
        'token': 'secretpass',
        'Content-Type': 'application/json'
      }),
      body: packetobject  
      });
      
      const body = await response.json();

      if (response.status !== 200) {
        console.log(body);
        throw Error(response.message)
      }
    }

    useEffect(() => {
      callBackendAPI();
    }, []);

    // useEffect(() => {
    //   console.log(todo);
    // }, [todo])

    return(
      <React.Fragment>
          <Header>Task Keeper</Header>
          <InputForm func={insertBackendAPI}></InputForm>
          {todo.length > 0 && 
            <TodosList todo={todo}/>
          }  
      </React.Fragment>  
  )
}

export default TodoContainer;