import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { storage } from './storage';
import { IUserStore } from '../interfaces/user';

export default <T>({
  url = '/',
  method = 'get',
  headers = {},
  params = {},
  data = {},
}: AxiosRequestConfig): AxiosPromise<T> => {
  if (headers?.authorization) {
    const user = storage.get<IUserStore>('user');
    if (user) {
      headers.authorization = `JWT ${user.data.token}`;
    }
  }
  return axios({
    url,
    method,
    headers,
    params,
    data,
  });
};
