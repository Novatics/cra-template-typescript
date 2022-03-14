/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AxiosResponse } from 'axios'
import api from './api'

export const check = (): Promise<AxiosResponse> => {
  return api.get('/health')
}
