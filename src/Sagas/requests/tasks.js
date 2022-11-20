import { bindActionCreators } from '@reduxjs/toolkit';
import axios from 'axios';

export function fetchAllUser() {
    return axios.request({
        method: "get",
        url: 'http://localhost:3001/tasks',
        headers: new Headers({
            'token': 'secretpass'
        })
    });
}