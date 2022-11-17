import React, { useEffect } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputForm from "./InputForm";
import store from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { TASK_ADDED } from "../redux/const";
import { fetchTodos } from "../redux/action";

const TodoContainer = () => {

    const dispatch = useDispatch();

    const tasksState = useSelector ((state) => {
      return state.tasks;
    })

    useEffect(() => {
      dispatch(fetchTodos);
    }, [])

    return(
      <React.Fragment>
          <Header>Task Keeper</Header>
          <InputForm></InputForm>
          {
            tasksState.length > 0 && 
            <TodosList />
          }
      </React.Fragment>  
    )
}

export default TodoContainer;