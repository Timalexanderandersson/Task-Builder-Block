import axios from "axios"


const api = axios.create({
  baseURL: 'https://task-builder-block-api-1e0f4e59bae3.herokuapp.com/',  

});
api.defaults.headers.post['Content-Type'] = 'multipart/form-data';
api.defaults.withCredentials = true;
  export default api;