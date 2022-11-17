import React, { useEffect } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputForm from "./InputForm";
import store from "../store";
import { useSelector } from "react-redux";
import { TASK_ADDED, TASK_FETCHED, TASK_UPDATED, TASK_DELETED } from "../const";

const TodoContainer = () => {

    const tasksState = useSelector ((state) => {
      return state.tasks;
    })

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
    } else {
      store.dispatch({
        type: TASK_FETCHED,
        payload: {
          tasks: body
        }
      })
    }
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
      } else {
        store.dispatch({
          type: TASK_UPDATED,
          payload: {
            id: id,
            name: name,
            desc: desc
          }
        })
      }
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
      console.log(id);

      if (response.status !== 200) {
        alert(response.status + ":" + response.json().message);
      } else {
        store.dispatch({
          type: TASK_DELETED,
          payload: {
            id: id
          }
        })
      }
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
        alert(response.status + ":" + response.json().message);
      } else {
        store.dispatch({
          type: TASK_ADDED,
          payload: {
            id: body.id,
            name: body.name,
            desc: body.desc
          }
        })
      }
    }

    useEffect(() => {
      callBackendAPI();
    }, [])

    return(
      <React.Fragment>
          <Header>Task Keeper</Header>
          <InputForm func={insertBackendAPI}></InputForm>
          {
            tasksState.length > 0 && 
            <TodosList updateBackendAPI={updateBackendAPI} deleteBackendAPI={deleteBackendAPI}/>
          }
      </React.Fragment>  
    )
}

export default TodoContainer;