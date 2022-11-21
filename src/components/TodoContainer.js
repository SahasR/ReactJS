import React, { useEffect } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputForm from "./InputForm";
import { useDispatch, useSelector } from "react-redux";
import { getToDos } from "../redux/reducer";

const TodoContainer = () => {

    const dispatch = useDispatch();

    const tasksState = useSelector ((state) => {
      return state.tasks;
    })

    useEffect(() => {
      dispatch(getToDos());
    }, [dispatch])

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