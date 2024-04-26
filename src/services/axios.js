import axios from 'axios';

const axiosConfig = axios.create();

axiosConfig.defaults.baseURL = 'http://192.168.1.51';

export default axiosConfig;
