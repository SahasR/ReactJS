import axios from 'axios';

export function fetchTodos() {
    return axios.request({
        method: "get",
        url: 'http://localhost:3001/tasks',
        headers: {
            'token': 'secretpass'
        }
    });
}