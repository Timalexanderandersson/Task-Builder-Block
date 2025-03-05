import axios from "axios";


axios.defaults.baseURL = 'https://task-builder-block-api-1e0f4e59bae3.herokuapp.com';
axios.defaults.headers.post['Content-type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export default axios;
