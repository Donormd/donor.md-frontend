import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { storage } from './storage';

export const fetch = <T>({
  url = '/',
  method = 'get',
  headers = {},
  params = {},
  data = {},
}: AxiosRequestConfig): AxiosPromise<T> => {
  if (headers?.authorization) {
    const token = storage.get<string>('token');
    if (token) {
      headers.authorization = `Bearer ${token.data}`;
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
