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
        alert(response.status + ":" + response.message);
      } 

      setTodos(body);
    }
    
    
    const updateBackendAPI = async (id, name, desc) => {
      let obj = {};
      obj.name = name;
      obj.desc = desc;

      let packetobject = JSON.stringify(obj);

      let response;

      response = await fetch('http://localhost:3001/task/' + id, {
      method: 'put',
      headers: new Headers({
        'token': 'secretpass',
        'Content-Type': 'application/json'
      }),
      body: packetobject  
      });
      
      await response.json();

      if (response.status !== 200) {
        alert(response.status + ":" + response.message.json());
      }

      callBackendAPI();

    }

    const deleteBackendAPI = async (id) => {
      let response;

      response = await fetch('http://localhost:3001/task/' + id, {
      method: 'delete',
      headers: new Headers({
        'token': 'secretpass'
      }) 
      });
      
      await response.json();

      if (response.status !== 200) {
        alert(response.status + ":" + response.json().message);
      }

      callBackendAPI();
    }
  
    const insertBackendAPI = async (name, desc) => {
      let obj = {};
      obj.name = name;
      obj.desc = desc;

      let packetobject = JSON.stringify(obj);

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
        alert(response.status + ":" + response.json().message);
      }

      callBackendAPI();
    }

    useEffect(() => {
      callBackendAPI();
    }, []);

    useEffect(() => {
      console.log(todo);
    }, [todo])

    return(
      <React.Fragment>
          <Header>Task Keeper</Header>
          <InputForm func={insertBackendAPI}></InputForm>
          {todo.length > 0 && 
            <TodosList todo={todo} updateBackendAPI={updateBackendAPI} deleteBackendAPI={deleteBackendAPI}/>
          }  
      </React.Fragment>  
  )
}

export default TodoContainer;