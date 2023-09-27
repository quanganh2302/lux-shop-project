import axios from "axios";
import _ from 'lodash';
const https = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  // withCredentials: false,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  // },
});

https.interceptors.response.use((response) => {
  const { data } = response;
  return response.data;
});

export default https;
