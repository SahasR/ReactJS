import store from "./store"
import { TASK_ADDED, TASK_FETCHED, TASK_UPDATED, TASK_DELETED } from "../redux/const";

export const fetchTodos = async dispatch => {
    const response = await fetch('http://localhost:3001/tasks', {
    method: 'get',
    headers: new Headers({
        'token': 'secretpass'
    })
    })

    const body = await response.json();

    if (response.status !== 200) {
        alert(response.status + ":" + response.message);
      } else {
        dispatch({
          type: TASK_FETCHED,
          payload: {
            tasks: body
          }
        })
      }
}

export const deleteTodos = (id) => async dispatch => {
    const response = await fetch('http://localhost:3001/task/' + id, {
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
        dispatch({
          type: TASK_DELETED,
          payload: {
            id: id
          }
        })
      }
}

export const updateTodos = (id, name, desc) => async dispatch => {
    
    let obj = {};
    obj.name = name;
    obj.desc = desc;



    let packetobject = JSON.stringify(obj);

    let response = await fetch('http://localhost:3001/task/' + id, {
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
    dispatch({
        type: TASK_UPDATED,
        payload: {
        id: id,
        name: name,
        desc: desc
        }
    })
      }
}

export const insertTodos = (name, desc) => async dispatch => {
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
        dispatch({
        type: TASK_ADDED,
        payload: {
        id: body.id,
        name: body.name,
        desc: body.desc
        }
    })
    }
}