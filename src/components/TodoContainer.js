import React, { useEffect } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputForm from "./InputForm";
import store from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { TASK_ADDED, TASK_FETCHED, TASK_UPDATED, TASK_DELETED } from "../redux/const";
import { fetchTodos } from "../redux/action";

const TodoContainer = () => {

    const dispatch = useDispatch();

    const tasksState = useSelector ((state) => {
      return state.tasks;
    })

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
      dispatch(fetchTodos);
    }, [])

    return(
      <React.Fragment>
          <Header>Task Keeper</Header>
          <InputForm func={insertBackendAPI}></InputForm>
          {
            tasksState.length > 0 && 
            <TodosList />
          }
      </React.Fragment>  
    )
}

export default TodoContainer;