import api from './api';

export const check = () => {
  return api.get('/health');
};
