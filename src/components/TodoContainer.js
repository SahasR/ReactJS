import React, { useEffect, useState} from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputForm from "./InputForm";

const TodoContainer = () => {

    const [todo, setTodos] = useState([]);

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

    useEffect(() => {
      callBackendAPI();
    }, []);

    // useEffect(() => {
    //   console.log(todo);
    // }, [todo])

    return(
      <React.Fragment>
          <Header>Task Keeper</Header>
          <InputForm></InputForm>
          {todo.length > 0 && 
            <TodosList todo={todo}/>
          }  
      </React.Fragment>  
  )
}

export default TodoContainer;