import axios from 'axios'

 export const Axiosinstance = axios.create({
    baseURL: 'https://pc-build-api.onrender.com/api',
    headers: {
      'Content-Type': 'application/json', 
    },
  });

