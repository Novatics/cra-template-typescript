import axios from 'axios';
import { API_URL } from 'common/constants/env';

const api = axios.create({
  baseURL: API_URL
});

api.defaults.headers.common.Accept = 'application/json';
api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common.credentials = 'include';

export default api;
