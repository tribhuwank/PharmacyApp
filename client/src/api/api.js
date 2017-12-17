import axios from 'axios';



let base = 'http://localhost:8081/';

var instance = axios.create({
    baseURL: base
  });

export const setInstanceHeader=params =>{ instance.defaults.headers.common['token'] = JSON.parse(sessionStorage.getItem('token'));}

export const requestLogin = params => { return instance.post(`/api/core/authenticate`, {Username: params.username,Password:params.password  }); };
