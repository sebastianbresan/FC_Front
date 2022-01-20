import axios from "axios";
export default axios.create({
  baseURL: "http://192.168.1.84:8080/api",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": 'append,delete,entries,foreach,get,has,keys,set,values,Authorization',
    'Access-Control-Allow-Credentials': 'true'
    }
});